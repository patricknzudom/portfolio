"use client";

import { useLang } from "@/components/LangContext";
import { ui } from "@/lib/content";

export function LangToggle() {
  const { lang, setLang } = useLang();
  const next = lang === "fr" ? "en" : "fr";

  return (
    <button
      type="button"
      onClick={() => setLang(next)}
      aria-label={ui[lang].langSwitch}
      className="flex h-7 items-center justify-center border border-[var(--color-line)] px-2 font-mono text-xs text-[var(--color-ink-soft)] hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
    >
      {lang === "fr" ? "EN" : "FR"}
    </button>
  );
}
