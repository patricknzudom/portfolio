/**
 * Démo simplifiée du classement de pertinence de Profino : un jeu de données fictif et un score
 * par recoupement de mots-clés, calculés entièrement dans le navigateur. La vraie application
 * classe par similarité d'embeddings sur de vraies publications (voir src/lib/relevance côté
 * Profino) — ceci n'en est qu'une démonstration du principe, pas une copie de l'algorithme.
 *
 * Simplified demo of Profino's relevance ranking: a fictional dataset and a keyword-overlap
 * score, computed entirely in the browser. The real app ranks by embedding similarity over real
 * publications — this is only a demonstration of the idea, not a copy of the algorithm.
 */
import type { Lang } from "@/lib/content";

export type FacultyProfile = {
  name: string;
  university: string;
  focus: string;
  keywords: string[];
};

const facultySample: Record<Lang, FacultyProfile[]> = {
  fr: [
    {
      name: "A. Moreau",
      university: "Polytechnique Montréal",
      focus: "Systèmes embarqués temps réel pour la robotique mobile",
      keywords: ["robotique", "embarqué", "temps réel", "capteurs", "microcontrôleur"],
    },
    {
      name: "R. Okonkwo",
      university: "McGill",
      focus: "Vision par ordinateur pour la navigation autonome",
      keywords: ["vision par ordinateur", "robotique", "apprentissage automatique", "navigation"],
    },
    {
      name: "S. Lindqvist",
      university: "ÉTS",
      focus: "Sécurité des systèmes distribués et bases de données",
      keywords: ["sécurité", "bases de données", "systèmes distribués", "cryptographie"],
    },
    {
      name: "T. Hoang",
      university: "UdeM",
      focus: "Optimisation de requêtes et bases de données à grande échelle",
      keywords: ["bases de données", "optimisation", "infonuagique", "performance"],
    },
    {
      name: "K. Dubois",
      university: "McGill",
      focus: "Apprentissage automatique appliqué au traitement du langage",
      keywords: ["apprentissage automatique", "traitement du langage", "modèles de langue"],
    },
    {
      name: "N. Petrov",
      university: "Polytechnique Montréal",
      focus: "Multi-robotique et exploration autonome en essaim",
      keywords: ["robotique", "multi-agents", "exploration", "embarqué"],
    },
    {
      name: "F. Abiodun",
      university: "Concordia",
      focus: "Sécurité matérielle et conception de circuits à faible consommation",
      keywords: ["sécurité", "circuits", "matériel", "embarqué", "cryptographie"],
    },
    {
      name: "L. Tremblay",
      university: "ÉTS",
      focus: "Interfaces humain-machine et expérience utilisateur",
      keywords: ["interface utilisateur", "accessibilité", "expérience utilisateur"],
    },
  ],
  en: [
    {
      name: "A. Moreau",
      university: "Polytechnique Montréal",
      focus: "Real-time embedded systems for mobile robotics",
      keywords: ["robotics", "embedded", "real-time", "sensors", "microcontroller"],
    },
    {
      name: "R. Okonkwo",
      university: "McGill",
      focus: "Computer vision for autonomous navigation",
      keywords: ["computer vision", "robotics", "machine learning", "navigation"],
    },
    {
      name: "S. Lindqvist",
      university: "ÉTS",
      focus: "Security of distributed systems and databases",
      keywords: ["security", "databases", "distributed systems", "cryptography"],
    },
    {
      name: "T. Hoang",
      university: "UdeM",
      focus: "Query optimization and large-scale databases",
      keywords: ["databases", "optimization", "cloud computing", "performance"],
    },
    {
      name: "K. Dubois",
      university: "McGill",
      focus: "Machine learning applied to language processing",
      keywords: ["machine learning", "language processing", "language models"],
    },
    {
      name: "N. Petrov",
      university: "Polytechnique Montréal",
      focus: "Multi-robot systems and autonomous swarm exploration",
      keywords: ["robotics", "multi-agent", "exploration", "embedded"],
    },
    {
      name: "F. Abiodun",
      university: "Concordia",
      focus: "Hardware security and low-power circuit design",
      keywords: ["security", "circuits", "hardware", "embedded", "cryptography"],
    },
    {
      name: "L. Tremblay",
      university: "ÉTS",
      focus: "Human-computer interfaces and user experience",
      keywords: ["user interface", "accessibility", "user experience"],
    },
  ],
};

export function matchFaculty(lang: Lang, query: string, limit = 3) {
  const terms = query
    .toLowerCase()
    .split(/[\s,]+/)
    .map((t) => t.trim())
    .filter(Boolean);

  if (terms.length === 0) return [];

  const sample = facultySample[lang];
  const scored = sample.map((person) => {
    const haystack = `${person.focus} ${person.keywords.join(" ")}`.toLowerCase();
    let score = 0;
    for (const term of terms) {
      if (person.keywords.some((k) => k.toLowerCase().includes(term))) score += 2;
      else if (haystack.includes(term)) score += 1;
    }
    return { person, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}
