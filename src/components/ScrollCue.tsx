"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/components/LangContext";
import { ui } from "@/lib/content";

/**
 * Remplace l'ancienne indication « naviguer avec les flèches » : un repère discret qui invite à
 * défiler, avec un seul mouvement orchestré (pas une boucle sur tout le site) — immobile si le
 * système demande moins de mouvement.
 */
export function ScrollCue() {
  const { lang } = useLang();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <a
      href="#a-propos"
      className="mt-16 inline-flex items-center gap-2 font-mono text-xs text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]"
    >
      <span>{ui[lang].navHint}</span>
      <svg
        width="10"
        height="10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={animate ? "animate-bounce" : ""}
      >
        <path d="M12 5v14M5 12l7 7 7-7" />
      </svg>
    </a>
  );
}
