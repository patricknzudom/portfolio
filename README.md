# Portfolio — Patrick Nzudom

🔗 **En ligne : [patrick-nzudom.vercel.app](https://patrick-nzudom.vercel.app)**

Site personnel bilingue (français/anglais) : à propos, parcours, compétences et projets (Babillard,
Profino, et autres).

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
  app/                layout, page, styles globaux
  components/         Nav, Hero, About, Skills, Projects, Contact, bascules thème/langue
  lib/content.ts       contenu du site en français et en anglais (profil, formation, parcours,
                        compétences, projets) + libellés d'interface
public/cv/             CV en PDF (FR et EN), téléchargeable depuis le site
```

Pour mettre à jour le contenu (nouveau projet, nouvelle expérience, etc.), modifier
`src/lib/content.ts` dans les deux langues — les composants s'appuient dessus sans texte codé en dur.

## Déploiement

Pousser sur GitHub ; Vercel redéploie automatiquement sur le dépôt `patricknzudom/portfolio`.
