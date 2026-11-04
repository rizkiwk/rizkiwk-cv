"use client";

import { useEffect, useState } from "react";
import { Menu, X, Github } from "lucide-react";
import { profile } from "@/lib/data";
import Logo from "./Logo";
import LanguageToggle from "./LanguageToggle";
import { useContent } from "./LanguageProvider";

const SECTION_IDS = ["about", "experience", "projects", "skills", "contact"] as const;

export default function Nav() {
  const { ui } = useContent();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const sections = SECTION_IDS.map((id) => ({ id, label: ui.nav[id] }));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-ink-900/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="transition-opacity hover:opacity-80">
          <Logo markSize={32} />
        </a>

        {/* desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-sm text-slate-400 transition-colors hover:text-lab"
            >
              {s.label}
            </a>
          ))}
          <LanguageToggle />
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-lab/40 px-4 py-1.5 text-sm font-medium text-lab transition-colors hover:bg-lab/10"
          >
            <Github size={15} /> GitHub
          </a>
        </div>

        {/* mobile actions */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            className="text-slate-300"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      {open && (
        <div className="border-t border-white/5 bg-ink-800/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col px-6 py-4">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="py-3 text-slate-300 transition-colors hover:text-lab"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
