import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section id="accueil" className="border-b border-[var(--color-line)] px-6 pt-20 pb-16 md:px-16 md:pt-28 md:pb-24">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-sm text-[var(--color-trace)]">{profile.role}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">{profile.name}</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-ink-soft)]">{profile.pitch}</p>

        <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          <a href="#projets" className="border-b border-[var(--color-copper)] pb-0.5 font-medium text-[var(--color-copper-strong)] hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]">
            Voir les projets
          </a>
          <a
            href={profile.cvHref}
            download
            className="border-b border-[var(--color-line)] pb-0.5 text-[var(--color-ink-soft)] hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
          >
            Télécharger le CV
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-[var(--color-ink-soft)]">
          <a href={`mailto:${profile.email}`} className="hover:text-[var(--color-ink)]">
            {profile.email}
          </a>
          <a href={profile.linkedin} className="hover:text-[var(--color-ink)]">
            linkedin.com/in/patrick-nzudom
          </a>
          <a href={profile.github} className="hover:text-[var(--color-ink)]">
            github.com/patricknzudom
          </a>
        </div>
      </div>
    </section>
  );
}
