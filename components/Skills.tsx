"use client";

import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { useContent } from "./LanguageProvider";

export default function Skills() {
  const { skillGroups, ui } = useContent();

  return (
    <section
      id="skills"
      className="border-y border-white/5 bg-ink-800/20 py-24"
    >
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading
            index="04"
            subtitle={ui.sections.skills.subtitle}
            title={ui.sections.skills.title}
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal as="div" key={group.label} delay={i * 80}>
              <div className="h-full rounded-2xl border border-white/5 bg-ink-800/40 p-6 transition-colors hover:border-lab/30">
                <h3 className="mb-4 flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-lab">
                  <span className="h-px w-6 bg-lab/50" />
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-lg border border-white/5 bg-ink-700/60 px-3 py-1.5 text-sm text-slate-300 transition-colors hover:border-lab/40 hover:text-white"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
