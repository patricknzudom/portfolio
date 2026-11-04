"use client";

import { profile, ui } from "@/lib/content";
import { useLang } from "@/components/LangContext";

export function ContactPage() {
  const { lang } = useLang();
  const p = profile[lang];

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-16 md:px-16">
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="font-mono text-sm text-[var(--color-trace)]">{ui[lang].sectionHeaders.contact}</h2>
        <p className="mt-4 max-w-md text-lg leading-relaxed">{ui[lang].contactLine}</p>

        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
          <a
            href={`mailto:${p.email}`}
            className="border-b border-[var(--color-copper)] pb-0.5 font-medium text-[var(--color-copper-strong)] hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
          >
            {p.email}
          </a>
          <a
            href={p.linkedin}
            className="border-b border-[var(--color-line)] pb-0.5 text-[var(--color-ink-soft)] hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
          >
            {ui[lang].linkedin}
          </a>
          <a
            href={p.github}
            className="border-b border-[var(--color-line)] pb-0.5 text-[var(--color-ink-soft)] hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
          >
            {ui[lang].github}
          </a>
          <a
            href={p.cvHref}
            download
            className="border-b border-[var(--color-line)] pb-0.5 text-[var(--color-ink-soft)] hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
          >
            {ui[lang].cvLabel}
          </a>
        </div>

        <p className="mt-16 font-mono text-xs text-[var(--color-ink-soft)]">
          © {new Date().getFullYear()} {p.name}
        </p>
      </div>
    </div>
  );
}
