"use client";

import { skills, ui } from "@/lib/content";
import { useLang } from "@/components/LangContext";

export function SkillsPage() {
  const { lang } = useLang();

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-16 md:px-16 md:py-20">
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="font-mono text-sm text-[var(--color-trace)]">{ui[lang].sectionHeaders.skills}</h2>

        <div className="mt-6 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {skills[lang].map((group) => (
            <div key={group.category}>
              <h3 className="font-mono text-xs text-[var(--color-ink-soft)]">{group.category}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-none border border-[var(--color-line)] px-2.5 py-1 font-mono text-xs text-[var(--color-ink)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
