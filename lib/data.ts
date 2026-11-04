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
  location?: string;
  highlights?: string[];
  current?: boolean;
};

export const experiences: Experience[] = [
  {
    company: "AVOS (avos.co.id)",
    role: "Head of Information Technology",
    period: "Jun 2026 — Present",
    duration: "1 mo",
    current: true,
    highlights: [
      "Leading IT strategy and engineering execution at AVOS.",
      "Building intelligent digital & property solutions.",
    ],
  },
  {
    company: "Freelance · Self-Employed",
    role: "Independent Product Builder",
    period: "2023 — Present",
    duration: "3 yrs",
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
  "quiz-kahoot": {
    title: "Kahoot-style Live Quiz",
    homepage: "",
    description:
      "Live quiz engine in the style of Kahoot — Next.js + Supabase, white-label ready.",
  },
  "dget-quiz": {
    title: "Live Quiz (Next.js)",
    homepage: "",
    description: "Next.js live quiz application with an instant-join player screen.",
  },
};

/** Vercel-only deployments that have no GitHub repo in the account. */
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
