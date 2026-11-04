"use client";

import { useState, type FormEvent } from "react";
import { matchFaculty, type FacultyProfile } from "@/lib/profinoDemoData";

/**
 * Pas une capture d'écran : un vrai petit classeur par mots-clés, pour montrer le principe que
 * Profino applique (profil → corps professoral pertinent) plutôt que de se contenter de le décrire.
 */
export function ProfinoDemo() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<{ person: FacultyProfile; score: number }[] | null>(null);
  const [searched, setSearched] = useState(false);

  function run(q: string) {
    setResults(matchFaculty(q));
    setSearched(true);
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    run(query);
  }

  const maxScore = results && results.length > 0 ? results[0].score : 1;

  return (
    <div className="border border-[var(--color-line)] bg-[var(--color-panel)] p-5">
      <p className="font-mono text-xs text-[var(--color-ink-soft)]">
        Essaie le principe — tape des mots-clés de recherche
      </p>
      <form onSubmit={onSubmit} className="mt-3 flex gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="ex. robotique, bases de données, sécurité"
          className="min-w-0 flex-1 border border-[var(--color-line)] bg-transparent px-3 py-2 text-sm outline-none placeholder:text-[var(--color-ink-soft)] focus:border-[var(--color-copper)]"
        />
        <button
          type="submit"
          className="shrink-0 border border-[var(--color-copper)] px-3 py-2 font-mono text-xs text-[var(--color-copper-strong)] hover:bg-[var(--color-copper)] hover:text-[var(--color-panel)]"
        >
          Chercher
        </button>
      </form>

      <div className="mt-4 min-h-24">
        {!searched && (
          <div className="flex flex-wrap gap-2">
            {["robotique", "bases de données", "sécurité", "apprentissage automatique"].map((ex) => (
              <button
                key={ex}
                type="button"
                onClick={() => {
                  setQuery(ex);
                  run(ex);
                }}
                className="border border-[var(--color-line)] px-2 py-1 font-mono text-xs text-[var(--color-ink-soft)] hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
              >
                {ex}
              </button>
            ))}
          </div>
        )}

        {searched && results && results.length === 0 && (
          <p className="text-sm text-[var(--color-ink-soft)]">
            Aucune correspondance dans ce petit échantillon de démo — essaie « robotique » ou « sécurité ».
          </p>
        )}

        {searched && results && results.length > 0 && (
          <ul className="space-y-3">
            {results.map(({ person, score }) => (
              <li key={person.name} className="border-t border-[var(--color-line)] pt-3 first:border-t-0 first:pt-0">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-medium">
                    {person.name} <span className="font-normal text-[var(--color-ink-soft)]">— {person.university}</span>
                  </span>
                </div>
                <p className="mt-0.5 text-sm text-[var(--color-ink-soft)]">{person.focus}</p>
                <div className="mt-1.5 h-1 w-full bg-[var(--color-line)]">
                  <div
                    className="h-1 bg-[var(--color-trace)] transition-[width] duration-500"
                    style={{ width: `${Math.max(12, (score / maxScore) * 100)}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <p className="mt-4 text-xs text-[var(--color-ink-soft)]">
        Démo : recoupement de mots-clés sur 8 profils fictifs, calculé dans le navigateur. La vraie
        Profino classe par similarité d&apos;embeddings sur de vraies publications récentes.
      </p>
    </div>
  );
}
