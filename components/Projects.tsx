"use client";

import { useMemo, useState } from "react";
import { Github, ExternalLink, Star, Lock, Images } from "lucide-react";
import ProjectCover from "./ProjectCover";
import ProjectModal from "./ProjectModal";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { type Project } from "@/lib/data";
import { useContent } from "./LanguageProvider";

const FILTERS = ["All", "Product", "Web", "Mobile", "Other"] as const;
type Filter = (typeof FILTERS)[number];
const VIS_FILTERS = ["All", "public", "private"] as const;
type VisFilter = (typeof VIS_FILTERS)[number];

const langColor: Record<string, string> = {
  TypeScript: "bg-sky-400",
  JavaScript: "bg-yellow-400",
  Dart: "bg-cyan-400",
  Kotlin: "bg-purple-400",
  Java: "bg-orange-400",
  HTML: "bg-red-400",
  Web3: "bg-emerald-400",
  "AI Product": "bg-fuchsia-400",
  Go: "bg-teal-400",
  Python: "bg-blue-400",
  C: "bg-slate-300",
};

const withBase = (src: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/${src}`;

function ProjectCard({ p, onOpen }: { p: Project; onOpen: (p: Project) => void }) {
  const { ui } = useContent();
  const cover = p.images[0];
  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => onOpen(p)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(p);
        }
      }}
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/5 bg-ink-800/40 transition-all hover:-translate-y-1 hover:border-lab/40 hover:bg-ink-800/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-lab"
    >
      <div className="relative h-40 w-full overflow-hidden border-b border-white/5 bg-ink-900">
        {cover ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={withBase(cover.src)}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute bottom-2 right-2 flex items-center gap-1 rounded-md bg-ink-900/80 px-2 py-0.5 font-mono text-[10px] text-slate-300">
              <Images size={11} /> {p.images.length} {ui.projects.shots}
            </span>
          </>
        ) : (
          <ProjectCover
            project={p}
            className="h-full w-full transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
      <div className="mb-3 flex items-start justify-between">
        <div className="flex items-center gap-2 text-slate-500">
          {p.visibility === "private" ? (
            <Lock size={16} className="text-amber-300" />
          ) : (
            <Github size={18} />
          )}
          <span className="font-mono text-xs">{p.name}</span>
          <span
            className={`rounded-md px-1.5 py-0.5 text-[10px] font-medium ${
              p.visibility === "private"
                ? "bg-amber-400/10 text-amber-300"
                : "bg-lab/10 text-lab"
            }`}
          >
            {p.visibility === "private"
              ? ui.projects.privateBadge
              : ui.projects.publicBadge}
          </span>
        </div>
        {p.status ? (
          <span
            className={`flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] font-medium ${
              p.status === "Live"
                ? "bg-lab/10 text-lab"
                : "bg-amber-400/10 text-amber-300"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                p.status === "Live" ? "bg-lab" : "bg-amber-300"
              }`}
            />
            {ui.projects.status[p.status] ?? p.status}
          </span>
        ) : (
          p.featured && (
            <span className="flex items-center gap-1 rounded-full bg-lab/10 px-2 py-0.5 text-[10px] font-medium text-lab">
              <Star size={10} /> {ui.projects.featured}
            </span>
          )
        )}
      </div>

      <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-lab">
        {p.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
        {p.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span
            key={t}
            className="rounded-md border border-white/5 bg-ink-700/60 px-2 py-0.5 text-[11px] text-slate-400"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
        <span className="flex items-center gap-2 text-xs text-slate-500">
          <span
            className={`h-2.5 w-2.5 rounded-full ${
              langColor[p.language] ?? "bg-slate-400"
            }`}
          />
          {p.language}
        </span>
        <div className="flex items-center gap-3">
          {p.homepage && (
            <a
              href={p.homepage}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-slate-400 transition-colors hover:text-lab"
              aria-label="Live site"
            >
              <ExternalLink size={16} />
            </a>
          )}
          {p.url && (
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-slate-400 transition-colors hover:text-lab"
              aria-label="Source code"
            >
              <Github size={16} />
            </a>
          )}
          {!p.url && !p.homepage && (
            <span className="flex items-center gap-1 font-mono text-[11px] text-slate-500">
              <Lock size={11} /> {ui.projects.sourcePrivate}
            </span>
          )}
        </div>
      </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const { projects, ui } = useContent();
  const [filter, setFilter] = useState<Filter>("All");
  const [vis, setVis] = useState<VisFilter>("All");
  const [open, setOpen] = useState<Project | null>(null);
  const [limit, setLimit] = useState(12);

  const visible = useMemo(
    () =>
      projects.filter(
        (p) =>
          (filter === "All" || p.category === filter) &&
          (vis === "All" || p.visibility === vis),
      ),
    [filter, vis, projects],
  );

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <SectionHeading
          index="03"
          subtitle={ui.sections.projects.subtitle}
          title={ui.sections.projects.title}
        />
      </Reveal>

      <Reveal className="mb-3 flex flex-wrap gap-2">
        {VIS_FILTERS.map((v) => (
          <button
            key={v}
            onClick={() => setVis(v)}
            className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
              vis === v
                ? "bg-lab text-ink-900"
                : "border border-white/10 text-slate-400 hover:border-lab/40 hover:text-lab"
            }`}
          >
            {ui.projects.visibility[v] ?? v}
          </button>
        ))}
      </Reveal>

      <Reveal className="mb-3 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
              filter === f
                ? "bg-lab text-ink-900"
                : "border border-white/10 text-slate-400 hover:border-lab/40 hover:text-lab"
            }`}
          >
            {ui.projects.filters[f] ?? f}
          </button>
        ))}
      </Reveal>

      <p className="mb-8 flex items-start gap-2 text-xs leading-relaxed text-slate-500">
        <Lock size={12} className="mt-0.5 shrink-0 text-amber-300" />
        {ui.projects.legend}
      </p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.slice(0, limit).map((p, i) => (
          <Reveal as="div" key={p.name} delay={(i % 12) * 60} className="h-full">
            <ProjectCard p={p} onOpen={setOpen} />
          </Reveal>
        ))}
      </div>

      {visible.length > limit && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setLimit((l) => l + 12)}
            className="rounded-full border border-white/10 px-6 py-2.5 text-sm text-slate-300 transition-colors hover:border-lab/50 hover:text-lab"
          >
            {ui.projects.loadMore} ({visible.length - limit})
          </button>
        </div>
      )}

      <ProjectModal project={open} onClose={() => setOpen(null)} />

      <Reveal className="mt-10 text-center">
        <a
          href="https://github.com/rizkiwk?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-lab/50 hover:text-lab"
        >
          <Github size={18} /> {ui.projects.viewAll}
        </a>
      </Reveal>
    </section>
  );
}
