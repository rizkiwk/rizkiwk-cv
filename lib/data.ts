/**
 * Single source of truth for portfolio content.
 * Career data sourced from Profile.pdf (LinkedIn export, v2 — 3 pages).
 * Project data: flagship products from the CV (Traceori, Pump Crush) +
 * curated public work from github.com/rizkiwk.
 *
 * To update: edit the objects below. No component code needs to change.
 */

export const profile = {
  name: "Rizki Wais Kurniawan",
  handle: "rizkiwk",
  role: "Technical Partner · AI-Augmented Fullstack Engineer",
  tagline: "Building Web, Mobile & Web3 products — AI-augmented",
  headline: "React · Next.js · Node.js · Flutter · Claude Code · AI Workflows",
  location: "Jakarta, Indonesia",
  yearsExperience: "10+",
  avatar: "https://avatars.githubusercontent.com/u/23287391?v=4",
  summary:
    "10+ years building products. I started as a web developer, evolved into a fullstack engineer, and now lead technology initiatives while shipping products across web, mobile, AI, and Web3. Recently built Pump Crush (a Web3 game) and Traceori (an AI-assisted product). I work with React, Next.js, Node.js, Flutter, React Native, and Android — leveraging AI-assisted development workflows with Claude Code to turn ideas into production-ready products quickly and efficiently.",
  bio: "Technical Partner · Visioner · High Motivated",
  links: {
    email: "jobs.rizkiwk@gmail.com",
    phone: "+62 811-8896-280",
    github: "https://github.com/rizkiwk",
    linkedin: "https://www.linkedin.com/in/rizkiwk",
  },
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  duration: string;
  /** Start of an ongoing role (YYYY-MM, or YYYY). When set, `duration` is recomputed at build time. */
  since?: string;
  location?: string;
  highlights?: string[];
  current?: boolean;
};

const rawExperiences: Experience[] = [
  {
    company: "Warunet",
    role: "Head of Information Technology",
    period: "Jun 2026 — Present",
    duration: "1 mo",
    since: "2026-06",
    current: true,
    highlights: [
      "Leading IT strategy and engineering execution at Warunet.",
    ],
  },
  {
    company: "Freelance · Self-Employed",
    role: "Independent Product Builder",
    period: "2023 — Present",
    duration: "3 yrs",
    since: "2023",
    current: true,
    highlights: [
      "Building AI-assisted, Web3, and SaaS products end-to-end.",
      "Shipped Pump Crush (Web3 game) and Traceori (AI-assisted product).",
      "Leverage Claude Code and modern AI workflows to rapidly prototype, build, and deploy production-ready applications.",
    ],
  },
  {
    company: "Jenaka Creative",
    role: "Head of Technology",
    period: "Sep 2018 — Present",
    duration: "7 yrs 10 mos",
    since: "2018-09",
    location: "Jakarta Raya, Indonesia",
    current: true,
    highlights: [
      "Lead the technology direction and engineering execution across products.",
      "Architect and ship full-stack & mobile solutions for clients and in-house products.",
    ],
  },
  {
    company: "Pets.id",
    role: "Full-Stack Engineer",
    period: "Sep 2017 — Sep 2018",
    duration: "1 yr 1 mo",
    location: "Jabodetabek, Indonesia",
    highlights: [
      "Developed the native Android application Pets.id (phase 2).",
      "Built the new React Native application for Pets.id.",
      "Built the new web application for Pets.id using React.js.",
    ],
  },
  {
    company: "Tinggal.com (OneStandard Group Pte Ltd)",
    role: "Full-Stack Developer",
    period: "Mar 2017 — Sep 2017",
    duration: "7 mos",
    location: "Greater Jakarta Area, Indonesia",
    highlights: [
      "Created & developed the Tinggal Information Resources System (TIRS).",
      "Built a backend & frontend partnership website between Tinggal.com and PT. KAI.",
      "Worked with Jenkins, and web scraping using Selenium and Python.",
    ],
  },
  {
    company: "Mimpi Properti (PT. Nara Putra Teknologi)",
    role: "Full-Stack Developer",
    period: "Mar 2016 — Mar 2017",
    duration: "1 yr 1 mo",
    location: "Greater Jakarta Area, Indonesia",
    highlights: [
      "Created & developed the Pazpo Android app.",
      "Built the Pazpo backend chat system using Node.js & Socket.io.",
      "Developed the Pazpo SQL Server database, server & system API.",
    ],
  },
  {
    company: "PT Sinarmas Multifinance",
    role: "Software Engineer",
    period: "Jan 2016 — Jun 2016",
    duration: "6 mos",
    highlights: [
      "Maintained the internal MUFFIN system (Multifinance Integrated System).",
      "Handled bug-fixing and stability for the MUFFIN system.",
    ],
  },
  {
    company: "CAQ Technology",
    role: "Freelance Web Developer",
    period: "Apr 2012 — Apr 2016",
    duration: "4 yrs 1 mo",
    location: "Greater Jakarta Area, Indonesia",
    highlights: [
      "Developed & maintained Growingpublishing.com and Bossiniofficefurniture.com.",
      "Built Android apps: tuition-cost calculator, disease info, and Bali public transport.",
    ],
  },
  {
    company: "PT. Anugerah Gelindo",
    role: "Web Programmer & Android Developer",
    period: "Jun 2014 — Feb 2015",
    duration: "9 mos",
    highlights: [
      "Developed & maintained Propertykita.com (web, mobile web, and Android app).",
      "Set up and supported SEO for Propertykita.com.",
      "Built SEO keyword & content support tools and a supporting blog.",
    ],
  },
];

/** LinkedIn-style span label (inclusive of the start month), evaluated at build time. */
function spanLabel(since: string, now = new Date()): string {
  const [y, m] = since.split("-").map(Number);
  if (!m) {
    const yrs = now.getFullYear() - y;
    return `${yrs} yr${yrs === 1 ? "" : "s"}`;
  }
  const total = (now.getFullYear() - y) * 12 + (now.getMonth() + 1 - m) + 1;
  const yrs = Math.floor(total / 12);
  const mos = total % 12;
  return [yrs && `${yrs} yr${yrs === 1 ? "" : "s"}`, mos && `${mos} mo${mos === 1 ? "" : "s"}`]
    .filter(Boolean)
    .join(" ");
}

export const experiences: Experience[] = rawExperiences.map((e) =>
  e.since ? { ...e, duration: spanLabel(e.since) } : e,
);

export type Project = {
  /** stable key for React/i18n lookups (curated name or repo name) */
  name: string;
  /** GitHub repository name */
  repo: string;
  title: string;
  description: string;
  language: string;
  tags: string[];
  url?: string;
  homepage?: string;
  featured?: boolean;
  category: "Product" | "Web" | "Mobile" | "Other";
  status?: string;
  /** "public" = source on GitHub; "private" = proprietary / client work, no source link. */
  visibility: "public" | "private";
  /** "About this project" text, EN + ID (lib/about.ts) */
  about?: { en: string; id: string };
  images: { src: string; from: string }[];
  stars: number;
  createdAt: string;
  pushedAt: string;
};

/** Hand-written overrides, keyed by repo. Everything else comes from the synced inventory. */
export type Curated = {
  name: string;
  repo: string;
  title: string;
  description: string;
  language: string;
  tags: string[];
  homepage?: string;
  featured?: boolean;
  category: Project["category"];
  status?: string;
  visibility?: "public" | "private";
};

export const curated: Curated[] = [
  {
    name: "traceori",
    repo: "traceori",
    title: "Traceori",
    description:
      "An AI-assisted product built independently — turning AI workflows into a real, production-ready application. Live on the web.",
    language: "AI Product",
    tags: ["AI-Assisted", "Next.js", "Claude Code", "SaaS"],
    homepage: "https://traceori.com",
    featured: true,
    category: "Product",
    status: "Live",
  },
  {
    name: "pump-crush",
    repo: "pumpcrush",
    title: "Pump Crush",
    description:
      "A Web3 game built end-to-end — combining blockchain mechanics with engaging gameplay. Developed independently using modern AI-assisted workflows.",
    language: "Web3",
    tags: ["Web3", "Game", "Blockchain"],
    featured: true,
    category: "Product",
    status: "In production",
  },
  {
    name: "pet-shop",
    repo: "pet-shop",
    title: "Pawsome Pets — Pet Shop Website",
    description:
      "A clean, fast, 3-page pet shop website (home, products, contact) with instant category filtering and a working contact form. Content lives in simple data files for easy updates.",
    language: "TypeScript",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    featured: true,
    category: "Web",
  },
  {
    name: "card-vault",
    repo: "card-vault",
    title: "Card Vault",
    description:
      "A Flutter mobile app for securely storing and organizing cards — the most actively developed public project, with a focus on clean mobile UX.",
    language: "Dart",
    tags: ["Flutter", "Dart", "Mobile"],
    featured: true,
    category: "Mobile",
  },
  {
    name: "app-senter",
    repo: "app-senter",
    title: "Senter — Flashlight App",
    description:
      "A native Android flashlight application (com.senter.flashlight), built with Kotlin and prepared for Play Store release with a dedicated privacy policy.",
    language: "Kotlin",
    tags: ["Kotlin", "Android", "Play Store"],
    category: "Mobile",
  },
  {
    name: "mri-protocol-assistant",
    repo: "mri-protocol-assistant",
    title: "MRI Protocol Assistant",
    description:
      "A Flutter app exploring the medical-imaging domain — an assistant for MRI protocols, demonstrating cross-domain product development with Dart.",
    language: "Dart",
    tags: ["Flutter", "Dart", "Healthcare"],
    category: "Mobile",
  },
  {
    name: "quiz-math",
    repo: "quiz-math",
    title: "Quiz Math",
    description:
      "A native Android math quiz application built with Kotlin — a focused, gamified learning experience.",
    language: "Kotlin",
    tags: ["Kotlin", "Android"],
    category: "Mobile",
  },
  {
    name: "react-exchange-currencies",
    repo: "react-exchange-currencies",
    title: "Currency Exchange",
    description:
      "A React application for converting between currencies using live exchange-rate data.",
    language: "JavaScript",
    tags: ["React", "JavaScript", "API"],
    category: "Web",
  },
  {
    name: "waru-wms",
    repo: "waru-wms",
    title: "WARU-WMS",
    description:
      "Multi-tenant warehouse management system for 3PL operators, where the stock belongs to the principals. Core invariants are enforced structurally — through types and database constraints — rather than by convention.",
    language: "Go",
    tags: ["Go", "PostgreSQL", "Multi-tenant", "Flutter"],
    category: "Product",
  },
  {
    name: "padel-ops",
    repo: "padel-management-system",
    title: "Padel Venue Operations",
    description:
      "Operations layer for padel venues, built around a court-minute ledger: shift checklists with proof, asset wear by play-hours, coach commissions, cash reconciliation and revenue-leak detection.",
    language: "TypeScript",
    tags: ["TypeScript", "Ledger design", "ADRs"],
    category: "Product",
  },
  {
    name: "chem-packaging-erp",
    repo: "warunet-atp-erp-next",
    title: "Chemical Packaging ERP",
    description:
      "Single-tenant ERP on ERPNext v15 for a bottle-molding manufacturer with UN dangerous-goods packaging compliance — a custom Frappe app plus a Docker stack. Client work.",
    language: "Python",
    tags: ["Python", "ERPNext", "Frappe", "Docker"],
    category: "Product",
  },
  {
    name: "ai-desk",
    repo: "ai-desk",
    title: "AiDesk",
    description:
      "Consent-based remote control for Android devices: screen streaming and input injection over the internet, with a C core and a Docker-hosted relay plane. Architecture, security model and phased roadmap documented first.",
    language: "C",
    tags: ["C", "Android", "Docker", "Security"],
    category: "Product",
  },
];


/**
 * Production sites on Vercel, mapped to inventory repos. Mapping was verified from
 * deployment metadata where noted (git meta) and by project/directory name otherwise.
 * Admin panels and login-only apps are intentionally NOT listed.
 */
export type LiveSite = {
  homepage: string;
  /** nicer title / English description when the repo README makes a poor card */
  title?: string;
  description?: string;
};

export const liveSites: Record<string, LiveSite> = {
  asihspa: {
    homepage: "https://asihspa.com",
    title: "Asih Spa",
    description:
      "Bilingual site for a 24-hour mobile massage service in Bali (Canggu to Sanur): treatments, prices and WhatsApp booking.",
  },
  motownpropertybali: {
    homepage: "https://motown-katalog.vercel.app",
    title: "Motown Property Bali",
    description:
      "Two deploy-ready sites for a Bali property agency: a villa & property catalogue and a private-viewing booking flow.",
  },
  "doorprize-spin": {
    homepage: "https://doorprize-spin.vercel.app",
    title: "Doorprize Spin",
    description:
      "Prize-draw stage for a neighbourhood Independence Day event: slot-machine display, operator console and committee panel.",
  },
  "wondergel-band": {
    homepage: "https://wondergel.vercel.app",
    title: "Wondergel",
    description:
      "Bilingual (ID/EN) landing site for a Jakarta indie-pop band active since 1992.",
  },
  "skin-check": {
    homepage: "https://skinai.warunet.id",
    title: "SkinGlow",
    description:
      "AI skin analysis and skincare recommendations in about a minute — a Vite web app.",
  },
  warunet: {
    homepage: "https://warunet.id",
    title: "WaruNet",
    description:
      "Company website for a local ISP and IoT / smart-home / software provider, with an RT/RW panel and WhatsApp gateway in the same repo.",
  },
  "rt-creator-challange": {
    homepage: "https://km2026.warunet.id",
    title: "Kreator Merdeka 2026",
    description:
      "Community video-challenge platform for a neighbourhood Independence Day festival: participant app, sponsor dashboard and admin console in one monorepo.",
  },
  "pet-shop": { homepage: "https://pet-shop-tau-two.vercel.app" },
  traceori: { homepage: "https://traceori.vercel.app" },
  // GitHub "homepage" points to a dead URL; the live app is an admin panel, so no public link.
  "polytron-asset-tracker": { homepage: "" },
};

/**
 * Corrections where GitHub's detected language / our name-based guess is misleading.
 * `language` is the label shown on the card; `category` drives the filter and cover icon.
 */
export const classification: Record<
  string,
  { category?: Project["category"]; language?: string }
> = {
  "erp-next": { category: "Product", language: "Python" },
  "avos-presence": { category: "Product", language: "Node.js" },
  "ai-desk": { category: "Product" },
  "bintang-cosmetic": { category: "Product", language: "C# / .NET" },
  "waru-wms": { category: "Product" },
  "face-flow": { category: "Product" },
  "snackit-game": { category: "Product", language: "Cocos Creator" },
  "snackit-microsite": { category: "Web", language: "Next.js" },
  "taro-spinwheel": { category: "Web", language: "Next.js" },
  "rt011-17-agustus-2026": { category: "Other", language: "TypeScript" },
  "Omdb-App": { category: "Mobile", language: "React Native" },
  "jupedns-ios": { category: "Mobile", language: "iOS" },
  "jenaka_colibri-barakat_id": { category: "Web", language: "PHP" },
  "wp-spinwheel": { category: "Web", language: "WordPress" },
  "asihspa": { language: "Next.js" },
  "motownpropertybali": { language: "Next.js" },
  "polytron-asset-tracker": { category: "Product", language: "Kotlin / Go" },
};

/** Display titles for repos whose name makes a poor card title. */
export const titles: Record<string, string> = {
  "erp-next": "Plastic Packaging ERP",
  "rt011-17-agustus-2026": "RT 011 Festival Workspace",
  "jenaka_colibri-barakat_id": "Barakat Company Website",
  "pdf-reader": "Waru PDF",
  "wp-spinwheel": "WordPress Spin Wheel",
  "jupedns-ios": "Jupedns iOS",
  "Omdb-App": "OMDb Movie App",
  "app-todo": "TaskFlow",
  "pazpo-app-android": "Pazpo Android",
  "snackit-game": "Nano Saving Challenge",
  "snackit-microsite": "Snackit Microsite",
  "warunet-cafe-board-gamification": "Warunet Café Board Gaming",
  "avos-presence": "AVOS Presence",
  "face-flow": "FaceFlow",
  "java-kingdom-army": "Kingdom Army (Java)",
  "java-parking-lot": "Parking Lot (Java)",
  "java-puzzle-string": "Word Search (Java)",
  "react-exchange-currencies": "Currency Exchange",
  "padel-management-system": "Padel Venue Operations",
  "mri-protocol-assistant": "MRI Protocol Assistant",
  "waru-wms": "WARU-WMS",
};

/**
 * Brand weight (0–100) used to order the Projects section, highest first.
 * Judgment call, not a metric: how recognised the brand/institution behind the project is,
 * the scale of its reach, and whether it is the owner's own flagship product.
 * Ties fall back to: has a live site, has a gallery, most recently updated.
 * Anything not listed gets DEFAULT_BRAND_WEIGHT. Edit the numbers to reorder.
 */
export const DEFAULT_BRAND_WEIGHT = 20;
export const brandWeight: Record<string, number> = {
  // national brands / institutions
  "sgmw-multifinance": 95, // vehicle-financing arm of a national automotive brand
  "sippp-harkit": 92, // national mother-and-child referral hospital
  "polytron-asset-tracker": 90, // major national consumer-electronics brand
  // flagship + well-known regional brands
  traceori: 85, // own flagship SaaS, in production
  "atlas-property": 80, // property developer (Arcadia, Casavida)
  warunet: 70,
  "wondergel-band": 66, // band active since 1992
  motownpropertybali: 62,
  "erp-next": 60,
  "warunet-atp-erp-next": 58,
  "waru-wms": 58,
  "taro-spinwheel": 56, // campaign for a national snack brand
  "bintang-cosmetic": 55,
  asihspa: 54,
  "padel-management-system": 52,
  "jagadhita-sinergi-sejati": 50,
  "meitkasim-com": 50,
  "avos-presence": 48,
  "skin-check": 46,
  monto: 45,
  pumpcrush: 45, // own Web3 flagship (repo currently empty)
  "rt-creator-challange": 44,
  "ai-desk": 42,
  "doorprize-spin": 40,
  "kahoot-rt011": 40,
  "snackit-game": 38,
  "rt011-17-agustus-2026": 36,
  "snackit-microsite": 36,
  "face-flow": 36,
  "warunet-cafe-board-gamification": 34,
  "jenaka_colibri-barakat_id": 34,
  "card-vault": 32,
  "mri-protocol-assistant": 32,
  "pet-shop": 30,
  "quiz-math": 30,
  "pdf-reader": 30,
  "pazpo-app-android": 30,
  "app-senter": 28,
  "app-todo": 26,
  "wp-spinwheel": 26,
  "jupedns-ios": 22,
  "Omdb-App": 12,
  "react-exchange-currencies": 10,
  "java-kingdom-army": 8,
  "java-parking-lot": 8,
  "java-puzzle-string": 8,
};

/** Live sites without a public repo of their own (Vercel-only or hosted elsewhere). */
export const vercelOnly: Curated[] = [
  {
    name: "jagadhita-sinergi-sejati",
    repo: "jagadhita-sinergi-sejati",
    title: "Jagadhita Sinergi Sejati",
    description:
      "Company website for a Jakarta-based halal chicken and beef supplier: product list and chat-to-order. Client work.",
    language: "Next.js",
    tags: ["Next.js", "Vercel", "Client work"],
    homepage: "https://jagadhita-sinergi-sejati.vercel.app",
    category: "Web",
    status: "Live",
  },
  {
    name: "meitkasim-com",
    repo: "meitkasim-com",
    title: "Meita Kasim",
    description:
      "Artist website for an indie musician from Jakarta to Vienna: music, visual stories and latest release.",
    language: "Web",
    tags: ["Website", "Vercel", "Music"],
    homepage: "https://meitkasim-com.vercel.app",
    category: "Web",
    status: "Live",
  },
  {
    name: "kahoot-rt011",
    repo: "kahoot-rt011",
    title: "Kuis Merdeka RT 011",
    description:
      "Live quiz for a neighbourhood Independence Day event; players join instantly and play from their phones.",
    language: "Next.js",
    tags: ["Next.js", "Vercel", "Quiz"],
    homepage: "https://quiz-rt011.warunet.id",
    category: "Web",
    status: "Live",
  },
  {
    name: "atlas-property",
    repo: "atlas-property",
    title: "Atlas Property",
    description: "",
    language: "Next.js",
    tags: ["Next.js", "Property", "Website"],
    homepage: "https://atlasproperty.co.id",
    category: "Web",
    status: "Live",
  },
  {
    name: "sippp-harkit",
    repo: "sippp-harkit",
    title: "SIPPP Harkit",
    description: "",
    language: "WordPress",
    tags: ["WordPress", "Training", "Healthcare"],
    homepage: "https://sippp.rsabhk.co.id",
    category: "Web",
    status: "Live",
  },
  {
    name: "sgmw-multifinance",
    repo: "sgmw-multifinance",
    title: "SGMW Multifinance",
    description: "",
    language: "WordPress",
    tags: ["WordPress", "Website", "Finance"],
    homepage: "https://sgmwmultifinance.id",
    category: "Web",
    status: "Live",
  },
];

export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML/CSS"],
  },
  {
    label: "Mobile",
    skills: ["Flutter", "React Native", "Kotlin", "Java (Android)", "Dart"],
  },
  {
    label: "Backend & Systems",
    skills: [
      "Node.js",
      "Socket.io",
      "PHP / Laravel",
      "C#",
      "SQL Server",
      "Enterprise Software",
      "IoT",
    ],
  },
  {
    label: "AI & Web3",
    skills: [
      "Claude Code",
      "AI Workflows",
      "AI-Assisted Dev",
      "Generative AI",
      "Web3",
      "web3.js",
      "Blockchain",
    ],
  },
];

export const certifications = [
  "Generative AI: Elevate your Software Development Career",
  "Increase SEO Traffic with WordPress",
  "Introduction to HTML, CSS, & JavaScript",
];

export const education = {
  school: "Universitas Gunadarma",
  degree: "Bachelor's degree, Information Technology",
};

export const languages = [
  { name: "Indonesian", level: "Native / Bilingual" },
  { name: "English", level: "Limited Working" },
];

/** Quick stats for the hero band. */
export const stats = [
  { value: "10+", label: "Years building" },
  { value: "9", label: "Roles & companies" },
  { value: "2", label: "Flagship products" },
  { value: "60+", label: "Repos · public & private" },
];
