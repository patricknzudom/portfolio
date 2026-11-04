import { profile } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-16 md:px-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-medium text-[var(--color-trace)]">Contact</h2>
        <p className="mt-4 max-w-md text-lg leading-relaxed">
          À la recherche d&apos;un stage en génie informatique. N&apos;hésite pas à m&apos;écrire.
        </p>

        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
          <a href={`mailto:${profile.email}`} className="border-b border-[var(--color-copper)] pb-0.5 font-medium text-[var(--color-copper-strong)] hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]">
            {profile.email}
          </a>
          <a href={profile.linkedin} className="border-b border-[var(--color-line)] pb-0.5 text-[var(--color-ink-soft)] hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]">
            LinkedIn
          </a>
          <a href={profile.github} className="border-b border-[var(--color-line)] pb-0.5 text-[var(--color-ink-soft)] hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]">
            GitHub
          </a>
          <a href={profile.cvHref} download className="border-b border-[var(--color-line)] pb-0.5 text-[var(--color-ink-soft)] hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]">
            CV (PDF)
          </a>
        </div>
      </div>

      <p className="mx-auto mt-16 max-w-5xl font-mono text-xs text-[var(--color-ink-soft)]">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </section>
  );
}
