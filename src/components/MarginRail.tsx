const sections = [
  { id: "accueil", label: "Accueil" },
  { id: "a-propos", label: "À propos" },
  { id: "competences", label: "Compétences" },
  { id: "projets", label: "Projets" },
  { id: "contact", label: "Contact" },
];

/**
 * Repère de marge façon fiche technique : un trait qui se dessine une fois au chargement
 * (seule animation du site) et des puces par section, utilisées comme mini sommaire.
 * Masqué sur mobile — pas la place pour une colonne de marge en dessous de md.
 */
export function MarginRail() {
  return (
    <div
      className="pointer-events-none fixed inset-y-0 left-0 z-10 hidden w-14 md:flex md:flex-col md:items-center"
      aria-hidden="true"
    >
      <svg width="2" height="100%" className="h-full">
        <line
          x1="1"
          y1="0"
          x2="1"
          y2="100%"
          stroke="var(--color-line)"
          strokeWidth="1"
          strokeDasharray="2000"
          strokeDashoffset="2000"
          className="rail-trace"
          style={{ animation: "draw-rail 1.1s ease-out 0.15s forwards" }}
        />
      </svg>
      <style>{`
        @keyframes draw-rail {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
}

/** Sommaire accessible et cliquable, superposé au trait (le trait est purement décoratif). */
export function MarginNav() {
  return (
    <nav
      className="fixed inset-y-0 left-0 z-20 hidden w-14 flex-col items-center justify-center gap-10 md:flex"
      aria-label="Sections de la page"
    >
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className="group flex items-center"
          title={s.label}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-line)] transition-colors group-hover:bg-[var(--color-copper)]" />
          <span className="sr-only">{s.label}</span>
        </a>
      ))}
    </nav>
  );
}
