export const profile = {
  name: "Patrick Nzudom",
  role: "Étudiant en génie informatique — Polytechnique Montréal",
  pitch:
    "Je construis des systèmes qui fonctionnent, du microcontrôleur à l'application web complète. En échange à l'Universidad de Sevilla à l'hiver 2026, et à la recherche d'un stage.",
  email: "pnzudom@gmail.com",
  linkedin: "https://www.linkedin.com/in/patrick-nzudom/",
  github: "https://github.com/patricknzudom",
  cvHref: "/cv/Patrick-Nzudom-CV.pdf",
};

export const bio =
  "Étudiant en génie informatique à Polytechnique Montréal, j'aime comprendre un système de bout en bout — qu'il s'agisse d'un microcontrôleur qui lit un capteur infrarouge ou d'une base de données qui doit tenir sous charge. J'ai appris la rigueur du logiciel embarqué en stage chez Neptronic, et je l'applique maintenant à des applications web que je conçois et déploie moi-même, comme Babillard et Profino.";

export const education = [
  {
    school: "Polytechnique Montréal",
    program: "Baccalauréat en génie informatique, formation d'ingénieur",
    place: "Montréal, QC",
    period: "Jan. 2023 – Mai 2027",
  },
  {
    school: "Universidad de Sevilla",
    program: "Échange étudiant, génie informatique",
    place: "Séville, Espagne",
    period: "Jan. 2026 – Juin 2026",
  },
];

export const experience = [
  {
    role: "Développeur site web — stage",
    org: "Voyages en Direct",
    place: "Montréal, QC",
    period: "Octobre 2026 – présent",
    detail: "Kubernetes, GitOps, CI/CD, SEO et performance.",
  },
  {
    role: "Développeur logiciel embarqué — stage",
    org: "Neptronic",
    place: "Montréal, QC",
    period: "Septembre – Décembre 2025",
    detail: "BACnet, Modbus, tests sur matériel embarqué avec Robot Framework.",
  },
  {
    role: "Développeur logiciel embarqué — stage",
    org: "Neptronic",
    place: "Montréal, QC",
    period: "Mai – Août 2025",
    detail:
      "Conception et développement de logiciels d'ingénierie, refactorisation de systèmes actifs, tests de régression sur matériel.",
  },
];

export const skills = [
  {
    category: "Langages",
    items: ["Java", "Python", "JavaScript", "TypeScript", "C/C++", "SQL", "VHDL", "Assembleur"],
  },
  {
    category: "Frameworks & bibliothèques",
    items: ["Angular", "NestJS", "React", "Node.js", "Docker", "Robot Framework", "JUnit", "Jest"],
  },
  {
    category: "Bases de données",
    items: ["MySQL", "SQL Server", "MongoDB"],
  },
  {
    category: "Calcul scientifique",
    items: ["Pandas", "NumPy", "Matplotlib"],
  },
  {
    category: "Pratiques",
    items: ["Git", "Agile", "UML", "Sécurité informatique", "Environnements cloud"],
  },
];

export type Project = {
  name: string;
  period: string;
  description: string;
  stack: string[];
  href?: string;
  repo?: string;
  featured?: boolean;
};

export const featuredProjects: Project[] = [
  {
    name: "Babillard",
    period: "2026",
    description:
      "Plateforme communautaire pour les étudiant·es de Montréal : événements publiés par les associations étudiantes et annonces de logement entre étudiant·es, sur une carte. Authentification par courriel universitaire et visibilité appliquée au niveau de la base de données (Postgres RLS), pas de l'interface.",
    stack: ["Next.js", "Supabase", "Postgres (RLS)", "Tailwind", "Vercel"],
    href: "https://notrebabillard.ca",
    repo: "https://github.com/patricknzudom/Babillard",
    featured: true,
  },
  {
    name: "Profino",
    period: "2026",
    description:
      "Trouve le corps professoral pertinent pour des études supérieures à partir d'un profil de recherche, et aide à écrire le courriel de contact. Recherche gratuite et sans compte ; le compte sert à sauvegarder le profil et le suivi des contacts.",
    stack: ["Next.js", "Supabase", "Gemini", "Stripe"],
    href: "https://profino.ca",
    repo: "https://github.com/patricknzudom/Profino",
    featured: true,
  },
];

export const otherProjects: Project[] = [
  {
    name: "PolyAI",
    period: "2024 – présent",
    description:
      "Développeur web pour la société technique étudiante PolyAI, et organisation d'événements d'apprentissage et de collaboration comme le Learnathon.",
    stack: ["TypeScript", "Angular", "NestJS"],
    href: "https://polyai.ca",
  },
  {
    name: "Système d'exploration multi-robots",
    period: "Sept. – Déc. 2025",
    description:
      "Exploration autonome avec deux robots AgileX Limo, développée selon un processus agile complet (revues de conception préliminaire, critique et de capacité opérationnelle).",
    stack: ["ROS2", "Docker"],
  },
  {
    name: "Plateforme de jeu de rôle tactique",
    period: "Jan. – Avril 2025",
    description:
      "Jeu de rôle tactique minimaliste développé en équipe, avec un accent sur l'assurance qualité logicielle et la vérification continue.",
    stack: ["TypeScript", "Angular", "NestJS"],
  },
  {
    name: "Robots à communication infrarouge",
    period: "Jan. – Avril 2024",
    description:
      "Deux robots communiquant par protocoles infrarouge et RS-232 sur microcontrôleur AVR ATmega324PA, avec capteur de suivi de ligne et composants piézo.",
    stack: ["C++", "AVR GCC"],
  },
  {
    name: "Jeu textuel orienté objet",
    period: "Nov. – Déc. 2023",
    description:
      "Jeu textuel conçu pour illustrer comment les objets et les classes interagissent, pensé pour les personnes qui débutent en programmation.",
    stack: ["C++"],
  },
  {
    name: "Chaînes de Markov",
    period: "Jan. – Avril 2022",
    description: "Simulation d'applications des chaînes de Markov, avec présentation des résultats en LaTeX.",
    stack: ["Python", "LaTeX"],
  },
];
