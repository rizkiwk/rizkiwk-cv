"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getContent, type Content, type Lang } from "@/lib/content";

type LanguageContextValue = Content & {
  setLang: (lang: Lang) => void;
  toggle: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "rizkiwk-lang";

function isLang(v: unknown): v is Lang {
  return v === "en" || v === "id";
}

export default function LanguageProvider({ children }: { children: ReactNode }) {
  // SSR-safe default ("en") — matches server render to avoid hydration mismatch.
  const [lang, setLang] = useState<Lang>("en");

  // After mount: restore saved choice, or detect browser language.
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLang(saved)) {
      setLang(saved);
      return;
    }
    const browser = navigator.language?.toLowerCase() ?? "";
    setLang(browser.startsWith("id") ? "id" : "en");
  }, []);

  // Persist + reflect on <html lang="..."> for a11y/SEO.
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<LanguageContextValue>(() => {
    const content = getContent(lang);
    return {
      ...content,
      setLang,
      toggle: () => setLang((prev) => (prev === "en" ? "id" : "en")),
    };
  }, [lang]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

/** Access the current language + fully-localized content. */
export function useContent(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useContent() must be used within <LanguageProvider>");
  }
  return ctx;
}
