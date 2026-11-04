"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/components/LangContext";
import { ui } from "@/lib/content";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);
  const { lang } = useLang();

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem("theme");
    } catch {
      // stockage indisponible (fenêtre privée, etc.) — on retombe sur la préférence système
    }
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initial = stored === "dark" || stored === "light" ? stored : system;
    setTheme(initial);
    applyTheme(initial);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) => {
      try {
        if (localStorage.getItem("theme")) return; // préférence explicite déjà choisie
      } catch {
        // si le stockage échoue, on suit simplement le système
      }
      const next = e.matches ? "dark" : "light";
      setTheme(next);
      applyTheme(next);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // per-viewer only — pas grave si ça ne persiste pas
    }
  }

  // Évite un flash de mauvais thème pendant l'hydratation : on ne rend le bouton qu'une fois su.
  if (theme === null) return <div className="h-7 w-7" aria-hidden="true" />;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? ui[lang].themeLight : ui[lang].themeDark}
      className="flex h-7 w-7 items-center justify-center border border-[var(--color-line)] text-[var(--color-ink-soft)] hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
    >
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        {theme === "dark" ? (
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <>
            <circle cx="12" cy="12" r="4" />
            <path
              strokeLinecap="round"
              d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
            />
          </>
        )}
      </svg>
    </button>
  );
}
