# Rizki Wais Kurniawan — Portfolio & CV

Live: https://rizkiwk.github.io/rizkiwk-cv/

Personal portfolio website for **Rizki Wais Kurniawan** — Technical Partner & AI-Augmented Fullstack Engineer.

Built with **Next.js 16 · TypeScript · Tailwind CSS**. Static-rendered, fast, and
exported as a static site and deployed to GitHub Pages.

---

## ✨ Features

- **Single-page, dark-mode** design with a "lab" emerald/sky accent.
- **Reveal-on-scroll** animations (IntersectionObserver, no heavy deps).
- **Filterable projects** grid (All / Web / Mobile), sourced from real GitHub work.
- **Career timeline** with all roles from the CV.
- **SEO-ready**: Open Graph, Twitter card, semantic metadata.
- **One file to edit content** — everything lives in [`lib/data.ts`](lib/data.ts).

---

## 🚀 Run locally

You need [Node.js](https://nodejs.org) 18.18+ (tested on Node 23).

```bash
npm install      # first time only
npm run dev      # http://localhost:3000
```

Build & preview the production output:

```bash
npm run build
npm start
```

---

## 🔄 Sync projects from GitHub

The Projects section lists every repository of the account (public **and** private,
minus a few excluded patterns) with README, metadata and a screenshot gallery:

```bash
node scripts/sync-repos.mjs   # needs an authenticated `gh`; writes lib/repos.generated.json + public/shots/
```

Private repos show a lock badge and no source link. Hand-written overrides
(title, description, tags, featured flag) live in `curated[]` in `lib/data.ts`
and are merged in `lib/projects.ts`. Gallery images are picked from screenshot-like
paths in each repo; review `public/shots/` after a sync — anything client-sensitive
should be deleted and the repo added to `EXCLUDE` in the script.

---

## ✏️ Update your content

Open [`lib/data.ts`](lib/data.ts). No component code needs to change.

| What | Where |
| --- | --- |
| Name, role, summary, links | `profile` |
| Jobs / timeline | `experiences[]` |
| Project overrides | `curated[]` (merged with the synced inventory) |
| Skill groups | `skillGroups[]` |
| Certifications / education / languages | bottom of file |

---

## ☁️ Deploy (GitHub Pages)

Every push to `main` runs [`.github/workflows/pages.yml`](.github/workflows/pages.yml),
which builds a static export (`output: "export"`) and publishes it to GitHub Pages.
The `basePath` (`/rizkiwk-cv`) is applied only in CI, so `npm run dev` still serves from `/`.

---

## 🗂️ Structure

```
app/            # Next.js App Router (layout, page, global styles)
components/     # Section components (Hero, Experience, Projects, ...)
lib/data.ts     # ← single source of truth for all content
```

---
