"use client";

import { Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { useContent } from "./LanguageProvider";

export default function Experience() {
  const { experiences, ui } = useContent();

  return (
    <section
      id="experience"
      className="border-y border-white/5 bg-ink-800/20 py-24"
    >
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading
            index="02"
            subtitle={ui.sections.experience.subtitle}
            title={ui.sections.experience.title}
          />
        </Reveal>

        <div className="relative">
          {/* vertical line */}
          <span className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-lab/60 via-white/10 to-transparent md:left-3" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <Reveal as="div" key={exp.company} delay={i * 60}>
                <div className="relative pl-12">
                  {/* node */}
                  <span
                    className={`absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border ${
                      exp.current
                        ? "border-lab bg-lab/20 text-lab"
                        : "border-white/15 bg-ink-700 text-slate-500"
                    }`}
                  >
                    <Briefcase size={12} />
                  </span>

                  <div className="rounded-2xl border border-white/5 bg-ink-800/40 p-6 transition-colors hover:border-lab/30">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-lab">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-mono text-xs text-slate-400">
                          {exp.period}
                        </p>
                        <p className="text-xs text-slate-500">{exp.duration}</p>
                      </div>
                    </div>

                    {exp.location && (
                      <p className="mt-1 text-xs text-slate-500">
                        {exp.location}
                      </p>
                    )}

                    {exp.highlights && (
                      <ul className="mt-4 space-y-2">
                        {exp.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex gap-2 text-sm text-slate-400"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-lab/60" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}

                    {exp.current && (
                      <span className="mt-4 inline-block rounded-full bg-lab/10 px-3 py-1 font-mono text-xs text-lab">
                        {ui.experience.current}
                      </span>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
