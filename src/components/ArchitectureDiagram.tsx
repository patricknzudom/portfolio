"use client";

import { useEffect, useState } from "react";

const nodes = [
  { x: 10, label: "Navigateur", sub: "Next.js (RSC)" },
  { x: 200, label: "Vercel", sub: "édge + fonctions" },
  { x: 390, label: "Supabase", sub: "Postgres · RLS" },
];

const boxW = 118;
const boxH = 52;
const y = 20;

/**
 * Pas une illustration : le schéma réel de la requête qui passe entre le navigateur, Vercel et
 * Postgres — la ligne « visibilité appliquée par la base, pas par l'interface » que décrit
 * Babillard, montrée plutôt que citée. Le point qui voyage s'arrête si le système demande moins
 * de mouvement.
 */
export function ArchitectureDiagram() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <div className="border border-[var(--color-line)] bg-[var(--color-panel)] p-5">
      <p className="font-mono text-xs text-[var(--color-ink-soft)]">
        Visibilité appliquée par la base, pas par l&apos;interface
      </p>
      <svg viewBox="0 0 518 92" className="mt-4 w-full" role="img" aria-label="Schéma : navigateur, Vercel, puis Supabase avec Postgres et la sécurité au niveau des lignes">
        {nodes.slice(0, -1).map((n, i) => {
          const from = n.x + boxW;
          const to = nodes[i + 1].x;
          const pathId = `path-${i}`;
          return (
            <g key={n.label}>
              <path
                id={pathId}
                d={`M ${from} ${y + boxH / 2} L ${to} ${y + boxH / 2}`}
                stroke="var(--color-line)"
                strokeWidth="1"
                fill="none"
              />
              {animate && (
                <circle r="2.6" fill="var(--color-copper)">
                  <animateMotion dur="2.4s" begin={`${i * 0.5}s`} repeatCount="indefinite">
                    <mpath href={`#${pathId}`} />
                  </animateMotion>
                </circle>
              )}
            </g>
          );
        })}

        {nodes.map((n) => (
          <g key={n.label}>
            <rect
              x={n.x}
              y={y}
              width={boxW}
              height={boxH}
              fill="var(--color-panel)"
              stroke="var(--color-line)"
              strokeWidth="1"
            />
            <text
              x={n.x + boxW / 2}
              y={y + 22}
              textAnchor="middle"
              fontSize="12"
              fontWeight="600"
              fill="var(--color-ink)"
              fontFamily="var(--font-sans)"
            >
              {n.label}
            </text>
            <text
              x={n.x + boxW / 2}
              y={y + 38}
              textAnchor="middle"
              fontSize="9.5"
              fill="var(--color-ink-soft)"
              fontFamily="var(--font-mono)"
            >
              {n.sub}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
