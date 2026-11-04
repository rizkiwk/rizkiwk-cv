"use client";

import { GraduationCap, Languages, Award } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { useContent } from "./LanguageProvider";

export default function About() {
  const { profile, education, languages, certifications, ui } = useContent();

  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <SectionHeading
          index="01"
          subtitle={ui.sections.about.subtitle}
          title={ui.sections.about.title}
        />
      </Reveal>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.3fr_1fr]">
        <Reveal className="space-y-5 text-base leading-relaxed text-slate-400">
          {ui.about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p className="font-mono text-sm text-lab">// {profile.bio}</p>
        </Reveal>

        <Reveal delay={120} className="space-y-6">
          <div className="rounded-2xl border border-white/5 bg-ink-800/40 p-6">
            <div className="mb-3 flex items-center gap-2 text-white">
              <GraduationCap size={18} className="text-lab" />
              <h3 className="font-semibold">{ui.about.education}</h3>
            </div>
            <p className="text-sm text-slate-300">{education.school}</p>
            <p className="text-xs text-slate-500">{education.degree}</p>
          </div>

          <div className="rounded-2xl border border-white/5 bg-ink-800/40 p-6">
            <div className="mb-3 flex items-center gap-2 text-white">
              <Languages size={18} className="text-lab" />
              <h3 className="font-semibold">{ui.about.languages}</h3>
            </div>
            <ul className="space-y-1.5">
              {languages.map((l) => (
                <li
                  key={l.name}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-slate-300">{l.name}</span>
                  <span className="text-xs text-slate-500">{l.level}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/5 bg-ink-800/40 p-6">
            <div className="mb-3 flex items-center gap-2 text-white">
              <Award size={18} className="text-lab" />
              <h3 className="font-semibold">{ui.about.certifications}</h3>
            </div>
            <ul className="space-y-2">
              {certifications.map((c) => (
                <li key={c} className="flex gap-2 text-sm text-slate-400">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-lab" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
