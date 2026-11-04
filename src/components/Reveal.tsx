"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Un seul moment de mise au point par section, au premier passage dans le viewport — pas une
 * animation à chaque section pour faire joli, mais le même geste que l'ancienne transition entre
 * pages, maintenant déclenché par le défilement plutôt que par un changement de page.
 */
export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
    >
      {children}
    </motion.div>
  );
}
