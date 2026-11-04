"use client";

import { MotionConfig } from "framer-motion";
import { IntroPage } from "@/components/pages/IntroPage";
import { AboutPage } from "@/components/pages/AboutPage";
import { SkillsPage } from "@/components/pages/SkillsPage";
import { ProjectsPage } from "@/components/pages/ProjectsPage";
import { ContactPage } from "@/components/pages/ContactPage";
import { SiteNav } from "@/components/SiteNav";
import { LangProvider } from "@/components/LangContext";

/**
 * Site à une seule page, défilement vertical normal — plus de piste qui glisse horizontalement.
 * Chaque section est une ancre (#accueil, #a-propos, …) repérée par SiteNav via
 * IntersectionObserver ; la molette, le trackpad et le tactile fonctionnent partout sans rien qui
 * intercepte le geste, y compris quand une section dépasse la hauteur de l'écran.
 */
function PortfolioShell() {
  return (
    <div className="min-h-dvh">
      <SiteNav />
      <main>
        <IntroPage />
        <AboutPage />
        <SkillsPage />
        <ProjectsPage />
        <ContactPage />
      </main>
    </div>
  );
}

export function PortfolioApp() {
  return (
    <LangProvider>
      <MotionConfig reducedMotion="user">
        <PortfolioShell />
      </MotionConfig>
    </LangProvider>
  );
}
