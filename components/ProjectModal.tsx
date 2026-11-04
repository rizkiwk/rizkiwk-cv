"use client";

import { useCallback, useEffect, useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Github,
  ExternalLink,
  Lock,
  Images,
} from "lucide-react";
import ProjectCover from "./ProjectCover";
import { type Project } from "@/lib/data";
import { useContent } from "./LanguageProvider";

type Props = { project: Project | null; onClose: () => void };

const withBase = (src: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/${src}`;

export default function ProjectModal({ project, onClose }: Props) {
  const { ui, lang } = useContent();
  const [idx, setIdx] = useState(0);
  const [zoom, setZoom] = useState(false);
  const images = project?.images ?? [];
  const m = ui.modal;

  const prev = useCallback(
    () => setIdx((i) => (i - 1 + images.length) % images.length),
    [images.length],
  );
  const next = useCallback(
    () => setIdx((i) => (i + 1) % images.length),
    [images.length],
  );

  useEffect(() => {
    setIdx(0);
    setZoom(false);
  }, [project]);

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") (zoom ? setZoom(false) : onClose());
      if (images.length > 1) {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
      }
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [project, zoom, images.length, onClose, prev, next]);

  if (!project) return null;
  const p = project;
  const isPrivate = p.visibility === "private";
  const text = p.about ? p.about[lang] : p.description;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink-900/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={p.title}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl border border-white/10 bg-ink-800 shadow-2xl sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* header */}
        <div className="flex items-start justify-between gap-4 border-b border-white/5 px-6 py-4">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              {isPrivate ? (
                <Lock size={13} className="text-amber-300" />
              ) : (
                <Github size={14} />
              )}
              <span
                className={`rounded-md px-1.5 py-0.5 text-[10px] font-medium ${
                  isPrivate ? "bg-amber-400/10 text-amber-300" : "bg-lab/10 text-lab"
                }`}
              >
                {isPrivate ? ui.projects.privateBadge : ui.projects.publicBadge}
              </span>
              {p.status && (
                <span className="rounded-md bg-lab/10 px-1.5 py-0.5 text-[10px] font-medium text-lab">
                  {ui.projects.status[p.status] ?? p.status}
                </span>
              )}
            </div>
            <h2 className="mt-1 truncate text-xl font-semibold text-white">{p.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
            aria-label={m.close}
          >
            <X size={20} />
          </button>
        </div>

        {/* body */}
        <div className="flex-1 overflow-y-auto">
          {images.length === 0 && (
            <ProjectCover project={p} className="h-36 w-full border-b border-white/5" />
          )}
          {images.length > 0 && (
            <div className="border-b border-white/5 bg-ink-900/60 p-4">
              <div className="relative">
                <button
                  onClick={() => setZoom(true)}
                  className="block w-full cursor-zoom-in overflow-hidden rounded-xl border border-white/5 bg-ink-900"
                  aria-label={m.zoom}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={withBase(images[idx].src)}
                    alt={`${p.title} ${idx + 1}`}
                    className="mx-auto max-h-[46vh] w-auto object-contain"
                    loading="eager"
                  />
                </button>
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prev}
                      className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-ink-900/80 p-2 text-white hover:bg-lab hover:text-ink-900"
                      aria-label={m.prev}
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={next}
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-ink-900/80 p-2 text-white hover:bg-lab hover:text-ink-900"
                      aria-label={m.next}
                    >
                      <ChevronRight size={18} />
                    </button>
                  </>
                )}
                <span className="absolute bottom-2 right-2 flex items-center gap-1 rounded-md bg-ink-900/80 px-2 py-0.5 font-mono text-[10px] text-slate-300">
                  <Images size={11} /> {idx + 1}/{images.length}
                </span>
              </div>
              {images.length > 1 && (
                <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                  {images.map((im, i) => (
                    <button
                      key={im.src}
                      onClick={() => setIdx(i)}
                      className={`h-14 w-20 shrink-0 overflow-hidden rounded-md border transition-colors ${
                        i === idx ? "border-lab" : "border-white/10 hover:border-white/30"
                      }`}
                      aria-label={`${m.gallery} ${i + 1}`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={withBase(im.src)}
                        alt=""
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="px-6 py-5">
            <h3 className="mb-2 font-mono text-xs uppercase tracking-widest text-slate-500">
              {m.about}
            </h3>
            <p className="text-[15px] leading-relaxed text-slate-300">{text}</p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              {p.homepage && (
                <a
                  href={p.homepage}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-lab px-4 py-2 text-sm font-medium text-ink-900 hover:bg-lab/90"
                >
                  <ExternalLink size={15} /> {m.liveSite}
                </a>
              )}
              {p.url ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-200 hover:border-lab/50 hover:text-lab"
                >
                  <Github size={15} /> {m.source}
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 text-xs text-amber-200/90">
                  <Lock size={13} /> {m.privateNote}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {zoom && images.length > 0 && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4"
          onClick={(e) => {
            e.stopPropagation();
            setZoom(false);
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withBase(images[idx].src)}
            alt={`${p.title} ${idx + 1}`}
            className="max-h-full max-w-full object-contain"
          />
          <button
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label={m.close}
          >
            <X size={20} />
          </button>
        </div>
      )}
    </div>
  );
}
