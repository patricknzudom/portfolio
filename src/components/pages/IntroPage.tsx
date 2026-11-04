"use client";

import { profile } from "@/lib/content";
import { useLang } from "@/components/LangContext";
import { HeroField } from "@/components/HeroField";
import { ScrollCue } from "@/components/ScrollCue";

export function IntroPage() {
  const { lang } = useLang();
  const p = profile[lang];

  return (
    <section id="accueil" className="relative flex min-h-[calc(100dvh-49px)] flex-col justify-center overflow-hidden px-6 py-16 md:px-16">
      <HeroField />
      <div className="relative z-[1] mx-auto w-full max-w-3xl">
        <p className="font-mono text-sm text-[var(--color-trace)]">{p.role}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">{p.name}</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-ink-soft)]">{p.pitch}</p>

        <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-[var(--color-ink-soft)]">
          <a href={`mailto:${p.email}`} className="hover:text-[var(--color-ink)]">
            {p.email}
          </a>
          <a href={p.linkedin} className="hover:text-[var(--color-ink)]">
            linkedin.com/in/patrick-nzudom
          </a>
          <a href={p.github} className="hover:text-[var(--color-ink)]">
            github.com/patricknzudom
          </a>
        </div>

        <ScrollCue />
      </div>
    </section>
  );
}
