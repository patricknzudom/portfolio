"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Lang } from "@/lib/content";

type LangContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
};

const LangContext = createContext<LangContextValue | null>(null);

function applyLang(lang: Lang) {
  document.documentElement.lang = lang;
}

/**
 * Même schéma que le thème : choix explicite persisté dans localStorage, sinon détection de la
 * langue du navigateur (anglais si le navigateur n'indique pas le français), avec le français
 * comme filet de sécurité. Posée côté client pour éviter de dupliquer tout le contenu sur deux
 * routes alors que le site est une seule page qui se feuillette.
 */
export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem("lang");
    } catch {
      // stockage indisponible — on retombe sur la langue du navigateur
    }
    const browser = typeof navigator !== "undefined" ? navigator.language.toLowerCase() : "fr";
    const detected: Lang = browser.startsWith("fr") ? "fr" : "en";
    const initial: Lang = stored === "en" || stored === "fr" ? stored : stored === null ? detected : "fr";
    setLangState(initial);
    applyLang(initial);
  }, []);

  function setLang(next: Lang) {
    setLangState(next);
    applyLang(next);
    try {
      localStorage.setItem("lang", next);
    } catch {
      // per-viewer only — pas grave si ça ne persiste pas
    }
  }

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang doit être utilisé à l'intérieur de LangProvider");
  return ctx;
}
