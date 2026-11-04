"use client";

import { bio, education, experience, ui } from "@/lib/content";
import { useLang } from "@/components/LangContext";

export function AboutPage() {
  const { lang } = useLang();

  return (
    <div className="min-h-full px-6 py-16 md:px-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-mono text-sm text-[var(--color-trace)]">{ui[lang].sectionHeaders.about}</h2>

        <div className="mt-6 grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <p className="max-w-md text-balance text-lg leading-relaxed">{bio[lang]}</p>

          <div className="space-y-8">
            <div>
              <h3 className="font-mono text-xs text-[var(--color-ink-soft)]">{ui[lang].education}</h3>
              <dl className="mt-3 space-y-3">
                {education[lang].map((e) => (
                  <div key={e.school} className="flex flex-col gap-0.5 border-l-2 border-[var(--color-line)] pl-3">
                    <dt className="font-medium">{e.school}</dt>
                    <dd className="text-sm text-[var(--color-ink-soft)]">{e.program}</dd>
                    <dd className="font-mono text-xs text-[var(--color-ink-soft)]">
                      {e.place} · {e.period}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h3 className="font-mono text-xs text-[var(--color-ink-soft)]">{ui[lang].experience}</h3>
              <dl className="mt-3 space-y-3">
                {experience[lang].map((e) => (
                  <div key={`${e.org}-${e.period}`} className="flex flex-col gap-0.5 border-l-2 border-[var(--color-line)] pl-3">
                    <dt className="font-medium">
                      {e.role} — {e.org}
                    </dt>
                    <dd className="text-sm text-[var(--color-ink-soft)]">{e.detail}</dd>
                    <dd className="font-mono text-xs text-[var(--color-ink-soft)]">
                      {e.place} · {e.period}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
