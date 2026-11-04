# Portfolio — Patrick Nzudom

Site personnel : à propos, parcours, compétences et projets (Babillard, Profino, et autres).

Next.js 16 (App Router) · Tailwind CSS v4 · IBM Plex Sans/Mono (auto-hébergées) · déploiement Vercel.

## Démarrer en local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Structure

```
src/
  app/            page unique (layout, page, styles globaux)
  components/     sections : Hero, About, Skills, Projects, Contact, MarginRail
  lib/data.ts     contenu du site (profil, formation, parcours, compétences, projets)
public/cv/        CV en PDF, téléchargeable depuis le site
```

Pour mettre à jour le contenu (nouveau projet, nouvelle expérience, etc.), modifier
`src/lib/data.ts` — les composants s'appuient dessus sans texte codé en dur.

## Déploiement

Pousser sur GitHub, puis importer le dépôt sur [vercel.com/new](https://vercel.com/new). Aucune
variable d'environnement requise.
