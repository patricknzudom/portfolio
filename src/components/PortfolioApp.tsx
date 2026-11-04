"use client";

import { useEffect, useRef, useState } from "react";
import { IntroPage } from "@/components/pages/IntroPage";
import { AboutPage } from "@/components/pages/AboutPage";
import { SkillsPage } from "@/components/pages/SkillsPage";
import { ProjectsPage } from "@/components/pages/ProjectsPage";
import { ContactPage } from "@/components/pages/ContactPage";
import { PageRail } from "@/components/PageRail";

const pages = [
  { id: "accueil", label: "Accueil", Component: IntroPage },
  { id: "a-propos", label: "À propos", Component: AboutPage },
  { id: "competences", label: "Compétences", Component: SkillsPage },
  { id: "projets", label: "Projets", Component: ProjectsPage },
  { id: "contact", label: "Contact", Component: ContactPage },
];

/**
 * Pagination façon oscilloscope plutôt qu'un long défilement : une page = un écran. Navigation au
 * clavier (flèches), au doigt (glisser) ou au clic (puces et flèches du bas). Choix délibéré pour
 * que le site se parcoure comme un instrument qu'on feuillette, pas comme un CV qu'on fait défiler.
 */
export function PortfolioApp() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  function goTo(i: number) {
    setIndex(Math.max(0, Math.min(pages.length - 1, i)));
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA"].includes(target.tagName)) return;
      if (e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();
        goTo(index + 1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        goTo(index - 1);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <div
        className="relative flex-1 overflow-hidden"
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return;
          const delta = e.changedTouches[0].clientX - touchStartX.current;
          if (Math.abs(delta) > 50) goTo(index + (delta < 0 ? 1 : -1));
          touchStartX.current = null;
        }}
      >
        <div
          className="flex h-full"
          style={{
            width: `${pages.length * 100}%`,
            transform: `translateX(-${(index * 100) / pages.length}%)`,
            transition: reducedMotion.current ? "none" : "transform 500ms cubic-bezier(0.65, 0, 0.35, 1)",
          }}
        >
          {pages.map(({ id, Component }) => (
            <div key={id} className="h-full overflow-y-auto" style={{ width: `${100 / pages.length}%` }}>
              <Component />
            </div>
          ))}
        </div>
      </div>

      <PageRail pages={pages} index={index} onGo={goTo} />
    </div>
  );
}
