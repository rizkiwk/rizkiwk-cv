import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";
import LanguageProvider from "@/components/LanguageProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rizkiwk.vercel.app"),
  title: `${profile.name} — ${profile.role}`,
  description: profile.summary,
  keywords: [
    "Rizki Wais Kurniawan",
    "rizkiwk",
    "Technical Partner",
    "AI-Augmented Engineer",
    "Fullstack Engineer",
    "Mobile Developer",
    "React",
    "Next.js",
    "Flutter",
    "Node.js",
    "Web3",
    "Claude Code",
    "AI Workflows",
    "Traceori",
    "Pump Crush",
    "Warunet",
    "Jakarta",
  ],
  authors: [{ name: profile.name, url: profile.links.github }],
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.summary,
    type: "profile",
    locale: "en_US",
    images: [{ url: profile.avatar, width: 460, height: 460, alt: profile.name }],
  },
  twitter: {
    card: "summary",
    title: `${profile.name} — ${profile.role}`,
    description: profile.headline,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
