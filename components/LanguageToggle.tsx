"use client";

import { Languages } from "lucide-react";
import { useContent } from "./LanguageProvider";

export default function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, toggle, ui } = useContent();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={ui.toggle.label}
      title={ui.toggle.label}
      className={`inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-sm font-medium text-slate-300 transition-colors hover:border-lab/50 hover:text-lab ${className}`}
    >
      <Languages size={15} className="text-lab" />
      <span className="font-mono uppercase">{lang}</span>
    </button>
  );
}
