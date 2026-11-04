"use client";

import { Mail, Github, Linkedin, MapPin, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { useContent } from "./LanguageProvider";

export default function Contact() {
  const { profile, ui } = useContent();

  const channels = [
    {
      icon: Mail,
      label: "Email",
      value: profile.links.email,
      href: `mailto:${profile.links.email}`,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "in/rizkiwk",
      href: profile.links.linkedin,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@rizkiwk",
      href: profile.links.github,
    },
  ];

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal className="overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-ink-800/80 to-ink-700/40 p-8 sm:p-12">
        <div className="relative">
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-lab/20 blur-3xl" />

          <p className="mb-3 font-mono text-sm text-lab">{ui.contact.eyebrow}</p>
          <h2 className="max-w-2xl text-3xl font-bold text-white sm:text-4xl">
            {ui.contact.heading}
          </h2>
          <p className="mt-4 max-w-xl text-slate-400">{ui.contact.body}</p>

          <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
            <MapPin size={16} className="text-lab" /> {profile.location}
          </div>

          <a
            href={`mailto:${profile.links.email}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-lab px-7 py-3 font-medium text-ink-900 transition-transform hover:scale-105"
          >
            <Mail size={18} /> {profile.links.email}
          </a>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/5 bg-ink-900/40 p-4 transition-colors hover:border-lab/40"
              >
                <span className="flex items-center gap-3">
                  <c.icon size={18} className="text-lab" />
                  <span>
                    <span className="block text-xs text-slate-500">
                      {c.label}
                    </span>
                    <span className="text-sm text-slate-200">{c.value}</span>
                  </span>
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-slate-500 transition-colors group-hover:text-lab"
                />
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
