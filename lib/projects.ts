/**
 * Merges the machine-generated repo inventory (lib/repos.generated.json, produced
 * by scripts/sync-repos.mjs) with the hand-curated overrides in lib/data.ts.
 *
 * Every repo of the account (public + private) becomes a project card unless it is
 * empty or excluded by the sync script. Curated entries win on title/description/
 * tags/category/status; generated data supplies gallery, topics and dates. Long-form text comes ONLY from lib/about.ts.
 */
import { about, shortOf } from "./about";
import generated from "./repos.generated.json";
import liveShots from "./live-shots.generated.json";
import { curated, liveSites, vercelOnly, type Project, type Curated } from "./data";

export type RepoImage = { src: string; from: string };

export type GeneratedRepo = {
  name: string;
  description: string;
  language: string;
  topics: string[];
  visibility: "public" | "private";
  url?: string;
  homepage?: string;
  stars: number;
  createdAt: string;
  pushedAt: string;
  sizeKb: number;
  images: RepoImage[];
};

const repos = generated as GeneratedRepo[];
const shots = liveShots as Record<string, RepoImage[]>;

/** Live captures first, then screenshots found inside the repo (max 12). */
const gallery = (key: string, own: RepoImage[]) => [...(shots[key] ?? []), ...own].slice(0, 12);

const MOBILE_LANGS = new Set(["Kotlin", "Dart", "Java", "Swift", "Objective-C"]);
const OTHER_LANGS = new Set(["Shell", "PLpgSQL"]);

const titleCase = (s: string) =>
  s
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());

function inferCategory(r: GeneratedRepo): Project["category"] {
  if (/android|ios|flutter|-app$|^app-/i.test(r.name) || MOBILE_LANGS.has(r.language))
    return "Mobile";
  if (OTHER_LANGS.has(r.language) || /^java-|^github-|^jbbmo/.test(r.name)) return "Other";
  return "Web";
}

function build(): Project[] {
  const byRepo = new Map([...curated, ...vercelOnly].map((c) => [c.repo, c]));
  const seen = new Set<string>();
  const list: Project[] = [];

  for (const r of repos) {
    const c = byRepo.get(r.name);
    seen.add(r.name);
    const isEmpty = r.sizeKb === 0 && !r.description;
    if (isEmpty && !c) continue;

    const live = liveSites[r.name];
    list.push({
      name: c?.name ?? r.name,
      repo: r.name,
      title: c?.title ?? live?.title ?? titleCase(r.name),
      description:
        about[r.name] ? shortOf(about[r.name].en) : c?.description || live?.description || r.description || "",
      language: c?.language ?? (r.language || "—"),
      tags: c?.tags ?? [...new Set([r.language, ...r.topics].filter(Boolean))].slice(0, 5),
      url: r.url,
      homepage: (live ? live.homepage : c?.homepage || r.homepage) || undefined,
      featured: c?.featured,
      category: c?.category ?? inferCategory(r),
      status: c?.status ?? (live?.homepage ? "Live" : undefined),
      visibility: r.visibility,
      about: about[r.name],
      images: gallery(r.name, r.images),
      stars: r.stars,
      createdAt: r.createdAt,
      pushedAt: r.pushedAt,
    });
  }

  // Curated entries whose repo isn't in the inventory (e.g. not on GitHub) still show.
  for (const c of [...curated, ...vercelOnly]) {
    if (seen.has(c.repo)) continue;
    list.push({
      name: c.name,
      repo: c.repo,
      title: c.title,
      description: c.description,
      language: c.language,
      tags: c.tags,
      homepage: c.homepage,
      featured: c.featured,
      category: c.category,
      status: c.status,
      visibility: c.visibility ?? "private",
      about: about[c.repo],
      images: gallery(c.repo, []),
      stars: 0,
      createdAt: "",
      pushedAt: "",
    });
  }

  // Order: projects with a live site first; inside each group featured, then those with a
  // screenshot gallery, then most recently updated.
  const rank = (p: Project) =>
    (p.homepage ? 0 : 4) + (p.featured ? 0 : 2) + (p.images.length > 0 ? 0 : 1);
  const order = (p: Project) => {
    const i = curated.findIndex((c) => c.repo === p.repo);
    return i < 0 ? 999 : i;
  };
  return list.sort(
    (a, b) =>
      rank(a) - rank(b) ||
      (a.featured && b.featured ? order(a) - order(b) : 0) ||
      b.pushedAt.localeCompare(a.pushedAt),
  );
}

export const projects: Project[] = build();

export const projectStats = {
  total: projects.length,
  publicCount: projects.filter((p) => p.visibility === "public").length,
  privateCount: projects.filter((p) => p.visibility === "private").length,
  withGallery: projects.filter((p) => p.images.length > 0).length,
};

export type { Curated };
