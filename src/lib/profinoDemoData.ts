/**
 * Démo simplifiée du classement de pertinence de Profino : un jeu de données fictif et un score
 * par recoupement de mots-clés, calculés entièrement dans le navigateur. La vraie application
 * classe par similarité d'embeddings sur de vraies publications (voir src/lib/relevance côté
 * Profino) — ceci n'en est qu'une démonstration du principe, pas une copie de l'algorithme.
 */
export type FacultyProfile = {
  name: string;
  university: string;
  focus: string;
  keywords: string[];
};

export const facultySample: FacultyProfile[] = [
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
];

export function matchFaculty(query: string, limit = 3) {
  const terms = query
    .toLowerCase()
    .split(/[\s,]+/)
    .map((t) => t.trim())
    .filter(Boolean);

  if (terms.length === 0) return [];

  const scored = facultySample.map((person) => {
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
