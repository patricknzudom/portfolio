import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="competences" className="border-b border-[var(--color-line)] px-6 py-16 md:px-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-medium text-[var(--color-trace)]">Compétences</h2>

        <div className="mt-6 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {skills.map((group) => (
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
    </section>
  );
}
