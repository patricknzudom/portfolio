"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/components/LangContext";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LangToggle } from "@/components/LangToggle";
import { ui } from "@/lib/content";

const sectionIds = ["accueil", "a-propos", "competences", "projets", "contact"] as const;

/**
 * Barre fixe en haut, pas de pagination glissante : le site défile normalement (molette, trackpad,
 * tactile), sans rien qui intercepte le défilement dans une page. Le lien actif se met à jour par
 * IntersectionObserver, et le mince filet cuivre en haut de la barre joue le rôle d'une trace
 * d'oscilloscope — un repère de progression qui reprend le vocabulaire du reste du site plutôt
 * qu'une barre de progression générique.
 */
export function SiteNav() {
  const { lang } = useLang();
  const [active, setActive] = useState<string>("accueil");
  const [progress, setProgress] = useState(0);
  const labels = ui[lang].pageLabels;

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let raf = 0;
    function onScroll() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        setProgress(max > 0 ? Math.min(1, Math.max(0, h.scrollTop / max)) : 0);
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    document.title = `${labels[active as keyof typeof labels]} — Patrick Nzudom`;
  }, [active, labels]);

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--color-line)] bg-[var(--color-paper)]">
      <div className="h-[2px] w-full bg-[var(--color-line)]">
        <div
          className="h-full bg-[var(--color-copper)] transition-[width] duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 md:px-16">
        <a href="#accueil" className="font-mono text-sm font-medium text-[var(--color-ink)]">
          PN<span className="text-[var(--color-copper)]">.</span>
        </a>

        <ul className="hidden items-center gap-6 font-mono text-xs sm:flex" aria-label={ui[lang].sectionsNav}>
          {sectionIds.slice(1).map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "page" : undefined}
                className="border-b pb-0.5 transition-colors"
                style={{
                  borderColor: active === id ? "var(--color-copper)" : "transparent",
                  color: active === id ? "var(--color-ink)" : "var(--color-ink-soft)",
                }}
              >
                {labels[id]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LangToggle />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
