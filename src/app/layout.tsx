import type { Metadata } from "next";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-sans/700.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Patrick Nzudom — Génie informatique",
  description:
    "Étudiant en génie informatique à Polytechnique Montréal. Projets : Babillard, Profino, et systèmes embarqués.",
};

// Posée avant l'hydratation pour éviter un flash de thème clair chez une personne qui a choisi
// (ou dont le système préfère) le sombre — ThemeToggle prend ensuite le relais pour les bascules.
const themeInitScript = `
  try {
    var t = localStorage.getItem("theme");
    var d = t ? t === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (d) document.documentElement.classList.add("dark");
  } catch (e) {}
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
