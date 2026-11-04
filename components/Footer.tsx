"use client";

import Logo from "./Logo";
import { useContent } from "./LanguageProvider";

export default function Footer() {
  const { profile, ui } = useContent();

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-500 sm:flex-row">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <Logo markSize={24} />
          <span className="font-mono text-xs">{ui.footer.built}</span>
        </div>
        <p className="text-center sm:text-right">
          © 2026 {profile.name}. {ui.footer.rights}
        </p>
      </div>
    </footer>
  );
}
