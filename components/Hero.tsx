"use client";

import Image from "next/image";
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useContent } from "./LanguageProvider";

export default function Hero() {
  const { profile, stats, ui } = useContent();

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-72 w-72 animate-pulse-glow rounded-full bg-lab/20 blur-[120px]" />
      <div className="pointer-events-none absolute left-10 bottom-1/4 h-64 w-64 animate-pulse-glow rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1.4fr_1fr]">
        <div className="animate-fade-up">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-lab/30 bg-lab/5 px-4 py-1.5 font-mono text-xs text-lab">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lab opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lab" />
            </span>
            {ui.hero.badge}
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-4 text-xl font-semibold text-gradient sm:text-2xl">
            {profile.role}
          </p>
          <p className="mt-2 font-mono text-sm text-slate-400">
            {profile.headline}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400">
            {profile.summary}
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
            <MapPin size={16} className="text-lab" />
            {profile.location}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-lab px-6 py-3 font-medium text-ink-900 transition-transform hover:scale-105"
            >
              {ui.hero.viewWork}
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href={`mailto:${profile.links.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 font-medium text-slate-200 transition-colors hover:border-lab/50 hover:text-lab"
            >
              <Mail size={18} /> {ui.hero.getInTouch}
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-slate-400 transition-colors hover:text-lab"
            >
              <Github size={22} />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 transition-colors hover:text-lab"
            >
              <Linkedin size={22} />
            </a>
            <a
              href={`mailto:${profile.links.email}`}
              aria-label="Email"
              className="text-slate-400 transition-colors hover:text-lab"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>

        {/* avatar card */}
        <div className="hidden justify-self-center md:block">
          <div className="relative animate-float">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-lab/30 to-accent/20 blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 bg-ink-800/60 p-2 backdrop-blur">
              <Image
                src={profile.avatar}
                alt={profile.name}
                width={300}
                height={300}
                priority
                className="rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-xl border border-white/10 bg-ink-700/90 px-4 py-2 font-mono text-xs text-lab backdrop-blur">
              @{profile.handle}
            </div>
          </div>
        </div>
      </div>

      {/* stats band */}
      <div className="absolute inset-x-0 bottom-0 border-t border-white/5 bg-ink-900/50 backdrop-blur">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 px-6 py-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-bold text-white sm:text-3xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
