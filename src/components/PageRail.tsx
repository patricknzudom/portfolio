"use client";

import { useLang } from "@/components/LangContext";
import { ui } from "@/lib/content";

type Page = { id: string; label: string };

export function PageRail({
  pages,
  index,
  onGo,
}: {
  pages: Page[];
  index: number;
  onGo: (i: number) => void;
}) {
  const { lang } = useLang();
  const atStart = index === 0;
  const atEnd = index === pages.length - 1;

  return (
    <div className="flex h-14 shrink-0 items-center justify-between border-t border-[var(--color-line)] px-6 md:px-16">
      <span className="font-mono text-xs text-[var(--color-ink-soft)]">
        {String(index + 1).padStart(2, "0")} / {String(pages.length).padStart(2, "0")}
        <span className="ml-3 hidden text-[var(--color-ink)] sm:inline">{pages[index].label}</span>
      </span>

      <div className="flex items-center gap-5">
        <nav className="flex items-center gap-2.5" aria-label={ui[lang].sectionsNav}>
          {pages.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => onGo(i)}
              aria-label={ui[lang].goTo(p.label)}
              aria-current={i === index ? "page" : undefined}
              className="p-1"
            >
              <span
                className="block h-1.5 w-1.5 rounded-full transition-colors"
                style={{
                  background: i === index ? "var(--color-copper)" : "var(--color-line)",
                }}
              />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-1 font-mono text-xs">
          <button
            type="button"
            onClick={() => onGo(index - 1)}
            disabled={atStart}
            aria-label={ui[lang].prevPage}
            className="px-2 py-1 text-[var(--color-ink-soft)] hover:text-[var(--color-ink)] disabled:opacity-30"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => onGo(index + 1)}
            disabled={atEnd}
            aria-label={ui[lang].nextPage}
            className="px-2 py-1 text-[var(--color-ink-soft)] hover:text-[var(--color-ink)] disabled:opacity-30"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
