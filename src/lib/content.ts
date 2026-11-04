export type Lang = "fr" | "en";

export const ui = {
  fr: {
    pageLabels: {
      accueil: "Accueil",
      "a-propos": "À propos",
      competences: "Compétences",
      projets: "Projets",
      contact: "Contact",
    },
    sectionHeaders: {
      about: "01 — À propos",
      skills: "02 — Compétences",
      projects: "03 — Projets",
      contact: "04 — Contact",
    },
    navHint: "→ naviguer avec les flèches du clavier, ou en bas de l'écran",
    education: "Formation",
    experience: "Parcours",
    visitSite: "Visiter le site",
    sourceCode: "Code source",
    contactLine: "N'hésite pas à m'écrire.",
    linkedin: "LinkedIn",
    github: "GitHub",
    cvLabel: "CV (PDF)",
    themeLight: "Passer au thème clair",
    themeDark: "Passer au thème sombre",
    langSwitch: "Switch to English",
    sectionsNav: "Sections",
    prevPage: "Page précédente",
    nextPage: "Page suivante",
    goTo: (label: string) => `Aller à ${label}`,
    architectureCaption: "Visibilité appliquée par la base, pas par l'interface",
    demoTitle: "Essaie le principe — tape des mots-clés de recherche",
    demoPlaceholder: "ex. robotique, bases de données, sécurité",
    demoButton: "Chercher",
    demoEmpty: "Aucune correspondance dans ce petit échantillon de démo — essaie « robotique » ou « sécurité ».",
    demoFooter:
      "Démo : recoupement de mots-clés sur 8 profils fictifs, calculé dans le navigateur. La vraie Profino classe par similarité d'embeddings sur de vraies publications récentes.",
    demoChips: ["robotique", "bases de données", "sécurité", "apprentissage automatique"],
  },
  en: {
    pageLabels: {
      accueil: "Home",
      "a-propos": "About",
      competences: "Skills",
      projets: "Projects",
      contact: "Contact",
    },
    sectionHeaders: {
      about: "01 — About",
      skills: "02 — Skills",
      projects: "03 — Projects",
      contact: "04 — Contact",
    },
    navHint: "→ navigate with the keyboard arrows, or at the bottom of the screen",
    education: "Education",
    experience: "Experience",
    visitSite: "Visit site",
    sourceCode: "Source code",
    contactLine: "Feel free to reach out.",
    linkedin: "LinkedIn",
    github: "GitHub",
    cvLabel: "Resume (PDF)",
    themeLight: "Switch to light theme",
    themeDark: "Switch to dark theme",
    langSwitch: "Passer au français",
    sectionsNav: "Sections",
    prevPage: "Previous page",
    nextPage: "Next page",
    goTo: (label: string) => `Go to ${label}`,
    architectureCaption: "Visibility enforced by the database, not the interface",
    demoTitle: "Try the idea — type search keywords",
    demoPlaceholder: "e.g. robotics, databases, security",
    demoButton: "Search",
    demoEmpty: "No match in this small demo sample — try “robotics” or “security”.",
    demoFooter:
      "Demo: keyword overlap over 8 fictional profiles, computed in the browser. The real Profino ranks by embedding similarity over real recent publications.",
    demoChips: ["robotics", "databases", "security", "machine learning"],
  },
} as const;

export const profile = {
  fr: {
    name: "Patrick Nzudom",
    role: "Étudiant en génie informatique — Polytechnique Montréal",
    pitch:
      "Je construis des systèmes qui fonctionnent, du microcontrôleur à l'application web complète. En échange à l'Universidad de Sevilla à l'hiver 2026.",
    email: "pnzudom@gmail.com",
    linkedin: "https://www.linkedin.com/in/patrick-nzudom/",
    github: "https://github.com/patricknzudom",
    cvHref: "/cv/Patrick-Nzudom-CV-fr.pdf",
  },
  en: {
    name: "Patrick Nzudom",
    role: "Computer Engineering Student — Polytechnique Montréal",
    pitch:
      "I build systems that work, from microcontroller to full web application. On exchange at the Universidad de Sevilla in winter 2026.",
    email: "pnzudom@gmail.com",
    linkedin: "https://www.linkedin.com/in/patrick-nzudom/",
    github: "https://github.com/patricknzudom",
    cvHref: "/cv/Patrick-Nzudom-Resume-en.pdf",
  },
} as const;

export const bio = {
  fr: "Étudiant en génie informatique à Polytechnique Montréal, j'aime comprendre un système de bout en bout — qu'il s'agisse d'un microcontrôleur qui lit un capteur infrarouge ou d'une base de données qui doit tenir sous charge. J'ai appris la rigueur du logiciel embarqué en stage chez Neptronic, et je l'applique maintenant à des applications web que je conçois et déploie moi-même, comme Babillard et Profino.",
  en: "A computer engineering student at Polytechnique Montréal, I like understanding a system end to end — whether it's a microcontroller reading an infrared sensor or a database that has to hold up under load. I learned the discipline of embedded software interning at Neptronic, and now apply it to web applications I design and deploy myself, like Babillard and Profino.",
} as const;

export const education = {
  fr: [
    {
      school: "Polytechnique Montréal",
      program: "Baccalauréat en génie informatique, formation d'ingénieur",
      place: "Montréal, QC",
      period: "Jan. 2023 – Mai 2027 (prévu)",
    },
    {
      school: "Universidad de Sevilla",
      program: "Échange étudiant, génie informatique",
      place: "Séville, Espagne",
      period: "Jan. 2026 – Juin 2026",
    },
  ],
  en: [
    {
      school: "Polytechnique Montréal",
      program: "Bachelor of Engineering, Computer Engineering",
      place: "Montreal, QC",
      period: "Jan. 2023 – May 2027 (expected)",
    },
    {
      school: "Universidad de Sevilla",
      program: "Exchange semester, Computer Engineering",
      place: "Seville, Spain",
      period: "Jan. 2026 – June 2026",
    },
  ],
} as const;

export const experience = {
  fr: [
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
  ],
  en: [
    {
      role: "Web Developer Intern",
      org: "Voyages en Direct",
      place: "Montreal, QC",
      period: "October 2026 – present",
      detail: "Kubernetes, GitOps, CI/CD, SEO and performance.",
    },
    {
      role: "Embedded Software Developer Intern",
      org: "Neptronic",
      place: "Montreal, QC",
      period: "September – December 2025",
      detail: "BACnet, Modbus, automated tests on embedded hardware with Robot Framework.",
    },
    {
      role: "Embedded Software Developer Intern",
      org: "Neptronic",
      place: "Montreal, QC",
      period: "May – August 2025",
      detail:
        "Engineering software design and development, refactoring of active systems, regression testing on hardware.",
    },
  ],
} as const;

export const skills = {
  fr: [
    {
      category: "Langages",
      items: ["Java", "Python", "JavaScript", "TypeScript", "C/C++", "SQL", "VHDL", "Assembleur"],
    },
    {
      category: "Frameworks & bibliothèques",
      items: ["Angular", "NestJS", "React", "Node.js", "Docker", "Robot Framework", "JUnit", "Jest"],
    },
    { category: "Bases de données", items: ["MySQL", "SQL Server", "MongoDB"] },
    { category: "Calcul scientifique", items: ["Pandas", "NumPy", "Matplotlib"] },
    { category: "Pratiques", items: ["Git", "Agile", "UML", "Sécurité informatique", "Environnements cloud"] },
  ],
  en: [
    {
      category: "Languages",
      items: ["Java", "Python", "JavaScript", "TypeScript", "C/C++", "SQL", "VHDL", "Assembly"],
    },
    {
      category: "Frameworks & libraries",
      items: ["Angular", "NestJS", "React", "Node.js", "Docker", "Robot Framework", "JUnit", "Jest"],
    },
    { category: "Databases", items: ["MySQL", "SQL Server", "MongoDB"] },
    { category: "Scientific computing", items: ["Pandas", "NumPy", "Matplotlib"] },
    { category: "Practices", items: ["Git", "Agile", "UML", "Computer security", "Cloud environments"] },
  ],
} as const;

export type Project = {
  name: string;
  period: string;
  description: string;
  stack: string[];
  href?: string;
  repo?: string;
};

export const featuredProjects: Record<Lang, Project[]> = {
  fr: [
    {
      name: "Babillard",
      period: "2026",
      description:
        "Plateforme communautaire pour les étudiant·es de Montréal : événements publiés par les associations étudiantes et annonces de logement entre étudiant·es, sur une carte. Authentification par courriel universitaire et visibilité appliquée au niveau de la base de données (Postgres RLS), pas de l'interface.",
      stack: ["Next.js", "Supabase", "Postgres (RLS)", "Tailwind", "Vercel"],
      href: "https://notrebabillard.ca",
      repo: "https://github.com/patricknzudom/Babillard",
    },
    {
      name: "Profino",
      period: "2026",
      description:
        "Trouve le corps professoral pertinent pour des études supérieures à partir d'un profil de recherche, et aide à écrire le courriel de contact. Recherche gratuite et sans compte ; le compte sert à sauvegarder le profil et le suivi des contacts.",
      stack: ["Next.js", "Supabase", "Gemini", "Stripe"],
      href: "https://profino.ca",
      repo: "https://github.com/patricknzudom/Profino",
    },
  ],
  en: [
    {
      name: "Babillard",
      period: "2026",
      description:
        "Community platform for Montreal students: events published by student associations and housing listings between students, shown on a map. University-email authentication, with visibility enforced at the database level (Postgres RLS) rather than in the interface.",
      stack: ["Next.js", "Supabase", "Postgres (RLS)", "Tailwind", "Vercel"],
      href: "https://notrebabillard.ca",
      repo: "https://github.com/patricknzudom/Babillard",
    },
    {
      name: "Profino",
      period: "2026",
      description:
        "Finds relevant faculty for graduate studies from a research profile, and helps draft the outreach email. Free, account-free search; an account is only needed to save a profile and track contacts.",
      stack: ["Next.js", "Supabase", "Gemini", "Stripe"],
      href: "https://profino.ca",
      repo: "https://github.com/patricknzudom/Profino",
    },
  ],
};

export const otherProjects: Record<Lang, Project[]> = {
  fr: [
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
  ],
  en: [
    {
      name: "PolyAI",
      period: "2024 – present",
      description:
        "Web developer for the PolyAI student technical society, organizing learning and collaboration events such as the Learnathon.",
      stack: ["TypeScript", "Angular", "NestJS"],
      href: "https://polyai.ca",
    },
    {
      name: "Multi-Robot Exploration System",
      period: "Sept. – Dec. 2025",
      description:
        "Autonomous exploration with two AgileX Limo robots, built through a full agile process (preliminary design, critical design and readiness reviews).",
      stack: ["ROS2", "Docker"],
    },
    {
      name: "Tactical Role-Playing Game Platform",
      period: "Jan. – Apr. 2025",
      description:
        "Minimalist tactical role-playing game built as a team, with an emphasis on software quality assurance and continuous verification.",
      stack: ["TypeScript", "Angular", "NestJS"],
    },
    {
      name: "Infrared-Communicating Robots",
      period: "Jan. – Apr. 2024",
      description:
        "Two robots communicating over infrared and RS-232 protocols on an AVR ATmega324PA microcontroller, with a line-following sensor and piezo components.",
      stack: ["C++", "AVR GCC"],
    },
    {
      name: "Object-Oriented Text Game",
      period: "Nov. – Dec. 2023",
      description:
        "Text-based game designed to illustrate how objects and classes interact, aimed at people starting out with programming.",
      stack: ["C++"],
    },
    {
      name: "Markov Chains",
      period: "Jan. – Apr. 2022",
      description: "Simulation of Markov chain applications, with results presented in LaTeX.",
      stack: ["Python", "LaTeX"],
    },
  ],
};
