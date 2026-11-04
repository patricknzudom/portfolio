import { profile } from "@/lib/data";
import { HeroField } from "@/components/HeroField";

export function IntroPage() {
  return (
    <div className="relative flex min-h-full flex-col justify-center overflow-hidden px-6 py-16 md:px-16">
      <HeroField />
      <div className="relative z-[1] mx-auto w-full max-w-3xl">
        <p className="font-mono text-sm text-[var(--color-trace)]">{profile.role}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">{profile.name}</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-ink-soft)]">{profile.pitch}</p>

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

        <p className="mt-16 font-mono text-xs text-[var(--color-ink-soft)]">
          → naviguer avec les flèches du clavier, ou en bas de l&apos;écran
        </p>
      </div>
    </div>
  );
}
