import { featuredProjects, otherProjects, type Project } from "@/lib/data";
import { ProfinoDemo } from "@/components/ProfinoDemo";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";

function StackLine({ stack }: { stack: string[] }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {stack.map((s, i) => (
        <span key={s} className="font-mono text-xs text-[var(--color-trace)]">
          {s}
          {i !== stack.length - 1 ? " ·" : ""}
        </span>
      ))}
    </div>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="mt-5 flex gap-5 font-mono text-xs">
      {project.href && (
        <a
          href={project.href}
          className="border-b border-[var(--color-copper)] text-[var(--color-copper-strong)] hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
        >
          Visiter le site
        </a>
      )}
      {project.repo && (
        <a
          href={project.repo}
          className="border-b border-[var(--color-line)] text-[var(--color-ink-soft)] hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
        >
          Code source
        </a>
      )}
    </div>
  );
}

function CompactRow({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-1 border-t border-[var(--color-line)] py-5 sm:flex-row sm:items-baseline sm:gap-6">
      <div className="sm:w-56 sm:shrink-0">
        <h3 className="font-medium">{project.name}</h3>
        <p className="font-mono text-xs text-[var(--color-ink-soft)]">{project.period}</p>
      </div>
      <div className="flex-1">
        <p className="text-sm leading-relaxed text-[var(--color-ink-soft)]">{project.description}</p>
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1">
          <span className="font-mono text-xs text-[var(--color-trace)]">{project.stack.join(" · ")}</span>
          {project.href && (
            <a
              href={project.href}
              className="font-mono text-xs text-[var(--color-ink-soft)] underline decoration-[var(--color-line)] underline-offset-2 hover:text-[var(--color-ink)]"
            >
              Lien
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function ProjectsPage() {
  const [babillard, profino] = featuredProjects;

  return (
    <div className="min-h-full px-6 py-16 md:px-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-mono text-sm text-[var(--color-trace)]">03 — Projets</h2>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div className="flex flex-col border border-[var(--color-line)] bg-[var(--color-panel)] p-6">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-xl font-semibold">{babillard.name}</h3>
              <span className="font-mono text-xs text-[var(--color-ink-soft)]">{babillard.period}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-soft)]">{babillard.description}</p>
            <StackLine stack={babillard.stack} />
            <ProjectLinks project={babillard} />
          </div>

          <div className="flex flex-col border border-[var(--color-line)] bg-[var(--color-panel)] p-6">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-xl font-semibold">{profino.name}</h3>
              <span className="font-mono text-xs text-[var(--color-ink-soft)]">{profino.period}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-soft)]">{profino.description}</p>
            <StackLine stack={profino.stack} />
            <ProjectLinks project={profino} />
          </div>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <ArchitectureDiagram />
          <ProfinoDemo />
        </div>

        <div className="mt-10">
          {otherProjects.map((p) => (
            <CompactRow key={p.name} project={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
