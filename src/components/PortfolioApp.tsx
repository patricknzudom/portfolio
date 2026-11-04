"use client";

import { useEffect, useRef, useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import { IntroPage } from "@/components/pages/IntroPage";
import { AboutPage } from "@/components/pages/AboutPage";
import { SkillsPage } from "@/components/pages/SkillsPage";
import { ProjectsPage } from "@/components/pages/ProjectsPage";
import { ContactPage } from "@/components/pages/ContactPage";
import { PageRail } from "@/components/PageRail";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LangToggle } from "@/components/LangToggle";
import { LangProvider, useLang } from "@/components/LangContext";
import { ui } from "@/lib/content";

const pageDefs = [
  { id: "accueil", Component: IntroPage },
  { id: "a-propos", Component: AboutPage },
  { id: "competences", Component: SkillsPage },
  { id: "projets", Component: ProjectsPage },
  { id: "contact", Component: ContactPage },
] as const;

/**
 * Pagination façon oscilloscope plutôt qu'un long défilement : une page = un écran. Navigation au
 * clavier (flèches), au doigt (glisser) ou au clic (puces et flèches du bas). Choix délibéré pour
 * que le site se parcoure comme un instrument qu'on feuillette, pas comme un CV qu'on fait défiler.
 * Chaque page se met légèrement au point en devenant active (MotionConfig retombe sur un simple
 * fondu si le système demande moins de mouvement — pas de vérification manuelle à refaire ici).
 */
function PortfolioShell() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const { lang } = useLang();
  const pages = pageDefs.map((p) => ({ ...p, label: ui[lang].pageLabels[p.id] }));

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

  useEffect(() => {
    document.title = `${pages[index].label} — Patrick Nzudom`;
  }, [index, lang, pages]);

  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <div className="pointer-events-none fixed top-4 right-4 z-30 flex gap-2 md:top-5 md:right-6">
        <div className="pointer-events-auto">
          <LangToggle />
        </div>
        <div className="pointer-events-auto">
          <ThemeToggle />
        </div>
      </div>

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
        <motion.div
          className="flex h-full"
          style={{ width: `${pages.length * 100}%` }}
          animate={{ x: `-${(index * 100) / pages.length}%` }}
          transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
        >
          {pages.map(({ id, Component }, i) => (
            <div key={id} className="h-full overflow-y-auto" style={{ width: `${100 / pages.length}%` }}>
              <motion.div
                className="h-full"
                animate={{ opacity: index === i ? 1 : 0.3, y: index === i ? 0 : 10 }}
                transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
              >
                <Component />
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>

      <PageRail pages={pages} index={index} onGo={goTo} />
    </div>
  );
}

export function PortfolioApp() {
  return (
    <LangProvider>
      <MotionConfig reducedMotion="user">
        <PortfolioShell />
      </MotionConfig>
    </LangProvider>
  );
}
