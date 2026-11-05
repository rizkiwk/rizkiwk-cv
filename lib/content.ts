/**
 * Bilingual content layer (Indonesian + English).
 *
 * Architecture:
 *  - `lib/data.ts` stays the ENGLISH source of truth (no duplication).
 *  - This file adds the INDONESIAN overrides + all UI strings for both languages.
 *  - `getContent(lang)` assembles a fully-localized content object with the same
 *    shape the components expect, so components just swap `import { profile }`
 *    for `const { profile } = useContent()`.
 *
 * To add/adjust a translation: edit the `id` overrides or `makeUI()` below.
 */
import { projects } from "./projects";
import { shortOf } from "./about";
import {
  profile,
  experiences,
  skillGroups,
  certifications,
  education,
  languages,
  stats,
} from "./data";

export type Lang = "en" | "id";

/* ----------------------------------------------------------------------------
 * Indonesian overrides — keyed to the English source in data.ts.
 * Anything not overridden falls back to the original English value.
 * ------------------------------------------------------------------------- */
const idProfile = {
  role: "Technical Partner · Fullstack Engineer Berbasis AI",
  tagline: "Membangun produk Web, Mobile & Web3 — berbasis AI",
  summary:
    "10+ tahun membangun produk. Saya memulai sebagai web developer, berkembang menjadi fullstack engineer, dan kini memimpin inisiatif teknologi sambil merilis produk di ranah web, mobile, AI, dan Web3. Baru-baru ini membangun Pump Crush (gim Web3) dan Traceori (produk berbantuan AI). Saya bekerja dengan React, Next.js, Node.js, Flutter, React Native, dan Android — memanfaatkan alur kerja pengembangan berbantuan AI dengan Claude Code untuk mengubah ide menjadi produk siap produksi secara cepat dan efisien.",
  bio: "Technical Partner · Visioner · Bermotivasi Tinggi",
};

const idExp: Record<string, { role?: string; highlights?: string[] }> = {
  "Warunet": {
    role: "Kepala Teknologi Informasi",
    highlights: [
      "Memimpin strategi IT dan eksekusi engineering di Warunet.",
    ],
  },
  "Freelance · Self-Employed": {
    role: "Pengembang Produk Independen",
    highlights: [
      "Membangun produk berbantuan AI, Web3, dan SaaS secara menyeluruh.",
      "Merilis Pump Crush (gim Web3) dan Traceori (produk berbantuan AI).",
      "Memanfaatkan Claude Code dan alur kerja AI modern untuk membuat prototipe, membangun, dan men-deploy aplikasi siap produksi dengan cepat.",
    ],
  },
  "Jenaka Creative": {
    role: "Kepala Teknologi",
    highlights: [
      "Memimpin arah teknologi dan eksekusi engineering di seluruh produk.",
      "Merancang dan merilis solusi full-stack & mobile untuk klien dan produk internal.",
    ],
  },
  "Pets.id": {
    role: "Full-Stack Engineer",
    highlights: [
      "Mengembangkan aplikasi native Android Pets.id (fase 2).",
      "Membangun aplikasi React Native baru untuk Pets.id.",
      "Membangun aplikasi web baru Pets.id menggunakan React.js.",
    ],
  },
  "Tinggal.com (OneStandard Group Pte Ltd)": {
    role: "Full-Stack Developer",
    highlights: [
      "Membuat & mengembangkan Tinggal Information Resources System (TIRS).",
      "Membangun website kemitraan backend & frontend antara Tinggal.com dan PT. KAI.",
      "Bekerja dengan Jenkins, dan web scraping menggunakan Selenium dan Python.",
    ],
  },
  "Mimpi Properti (PT. Nara Putra Teknologi)": {
    role: "Full-Stack Developer",
    highlights: [
      "Membuat & mengembangkan aplikasi Android Pazpo.",
      "Membangun sistem chat backend Pazpo menggunakan Node.js & Socket.io.",
      "Mengembangkan database SQL Server, server & API sistem Pazpo.",
    ],
  },
  "PT Sinarmas Multifinance": {
    role: "Software Engineer",
    highlights: [
      "Memelihara sistem internal MUFFIN (Multifinance Integrated System).",
      "Menangani perbaikan bug dan stabilitas sistem MUFFIN.",
    ],
  },
  "CAQ Technology": {
    role: "Web Developer Lepas",
    highlights: [
      "Mengembangkan & memelihara Growingpublishing.com dan Bossiniofficefurniture.com.",
      "Membangun aplikasi Android: kalkulator biaya kuliah, info penyakit, dan transportasi umum Bali.",
    ],
  },
  "PT. Anugerah Gelindo": {
    role: "Web Programmer & Android Developer",
    highlights: [
      "Mengembangkan & memelihara Propertykita.com (web, mobile web, dan aplikasi Android).",
      "Menyiapkan dan mendukung SEO untuk Propertykita.com.",
      "Membangun alat pendukung kata kunci & konten SEO serta blog pendukung.",
    ],
  },
};

const idProjDesc: Record<string, string> = {
  traceori:
    "Produk berbantuan AI yang dibangun secara mandiri — mengubah alur kerja AI menjadi aplikasi nyata siap produksi. Tayang di web.",
  "pump-crush":
    "Gim Web3 yang dibangun menyeluruh — memadukan mekanika blockchain dengan gameplay yang menarik. Dikembangkan mandiri menggunakan alur kerja modern berbantuan AI.",
  "pet-shop":
    "Website toko hewan 3 halaman yang bersih dan cepat (beranda, produk, kontak) dengan filter kategori instan dan formulir kontak yang berfungsi. Konten tersimpan di file data sederhana agar mudah diperbarui.",
  "card-vault":
    "Aplikasi mobile Flutter untuk menyimpan dan mengatur kartu secara aman — proyek publik yang paling aktif dikembangkan, dengan fokus pada UX mobile yang bersih.",
  "app-senter":
    "Aplikasi senter native Android (com.senter.flashlight), dibangun dengan Kotlin dan disiapkan untuk rilis Play Store dengan kebijakan privasi tersendiri.",
  "mri-protocol-assistant":
    "Aplikasi Flutter yang menjelajahi domain pencitraan medis — asisten untuk protokol MRI, menunjukkan pengembangan produk lintas domain dengan Dart.",
  "quiz-math":
    "Aplikasi kuis matematika native Android yang dibangun dengan Kotlin — pengalaman belajar yang terfokus dan ter-gamifikasi.",
  "react-exchange-currencies":
    "Aplikasi React untuk mengonversi mata uang menggunakan data nilai tukar langsung.",
  "waru-wms":
    "Sistem manajemen gudang multi-tenant untuk operator 3PL, di mana barang yang disimpan milik para principal. Invarian inti ditegakkan secara struktural — lewat tipe dan constraint database — bukan sekadar konvensi.",
  "padel-ops":
    "Lapisan operasional untuk venue padel berbasis ledger menit-lapangan: checklist shift berbukti, keausan aset per jam main, komisi pelatih, rekonsiliasi kas, dan deteksi kebocoran pendapatan.",
  "chem-packaging-erp":
    "ERP single-tenant di ERPNext v15 untuk produsen cetak botol dengan kepatuhan kemasan barang berbahaya UN — aplikasi Frappe kustom plus stack Docker. Pekerjaan klien.",
  "ai-desk":
    "Kontrol jarak jauh perangkat Android berbasis persetujuan: streaming layar dan injeksi input lewat internet, dengan inti C dan lapisan relay di Docker. Arsitektur, model keamanan, dan peta jalan bertahap didokumentasikan lebih dulu.",
  "multi-agent-core":
    "Inti multi-agen yang dapat dipakai ulang: route, worker paralel berkonteks segar, evaluator rubrik, lalu sintesis — dengan recall memori berjenjang dan ritual yang ditegakkan CI. Diakses remote-only.",
  "agent-vscode-extension":
    "Ekstensi VS Code (v1.13) yang menstrukturkan niat pengguna secara lokal sebelum memanggil model, dan memakai kontrak boot serta graf pengetahuan dari core — tanpa server MCP, tanpa panggilan API model langsung.",
};

const idSkillLabel: Record<string, string> = {
  "Backend & Systems": "Backend & Sistem",
};

const idStatLabel: Record<string, string> = {
  "Years building": "Tahun berkarya",
  "Roles & companies": "Peran & perusahaan",
  "Flagship products": "Produk unggulan",
  "Repos · public & private": "Repo · publik & privat",
};

const idLangName: Record<string, string> = {
  Indonesian: "Indonesia",
  English: "Inggris",
};

const idLangLevel: Record<string, string> = {
  "Native / Bilingual": "Asli / Dwibahasa",
  "Limited Working": "Kerja Terbatas",
};

const idEduDegree = "Sarjana, Teknologi Informasi";

/* ----------------------------------------------------------------------------
 * UI strings — were previously hardcoded inside components.
 * ------------------------------------------------------------------------- */
function makeUI(lang: Lang, loc: string, yrs: string) {
  if (lang === "id") {
    return {
      nav: {
        about: "Tentang",
        experience: "Pengalaman",
        projects: "Proyek",
        skills: "Keahlian",
        contact: "Kontak",
      },
      hero: {
        badge: "Membangun produk · terbuka untuk kolaborasi",
        viewWork: "Lihat karya saya",
        getInTouch: "Hubungi saya",
      },
      sections: {
        about: { subtitle: "siapa saya", title: "Tentang" },
        experience: { subtitle: "linimasa karier", title: "Pengalaman" },
        projects: { subtitle: "karya pilihan", title: "Proyek" },
        skills: { subtitle: "perangkat", title: "Keahlian & Stack" },
      },
      about: {
        paragraphs: [
          `Saya seorang Technical Partner dan fullstack engineer berbasis AI yang berbasis di ${loc}, dengan ${yrs} tahun merilis produk nyata di ranah web, mobile, AI, dan Web3.`,
          `Dari pekerjaan web lepas pada 2012 hingga memimpin IT di Warunet saat ini — sambil membangun produk independen di sela waktu — saya telah merilis di seluruh stack: aplikasi web responsif, mobile native & lintas-platform, backend real-time, dan desain database.`,
          `Belakangan saya membangun secara berbasis AI. Baru-baru ini saya merilis Pump Crush (gim Web3) dan Traceori (produk berbantuan AI), menggunakan Claude Code dan alur kerja AI modern untuk bergerak dari ide ke produksi dengan cepat. Perangkat saya mencakup React, Next.js, Flutter, React Native, Kotlin, Node.js — dan lainnya.`,
        ],
        education: "Pendidikan",
        languages: "Bahasa",
        certifications: "Sertifikasi",
      },
      projects: {
        filters: { All: "Semua", Product: "Produk", Web: "Web", Mobile: "Mobile", Other: "Lainnya" } as Record<string, string>,
        featured: "Unggulan",
        viewAll: "Lihat semua repositori",
        status: { Live: "Tayang", "In production": "Dalam produksi" } as Record<string, string>,
        visibility: { All: "Semua sumber", public: "Publik", private: "Privat" } as Record<string, string>,
        legend: "Publik = kode sumber terbuka di GitHub. Privat = proyek proprietari atau pekerjaan klien — kode tidak dibuka, detail tersedia atas permintaan.",
        privateBadge: "Privat",
        publicBadge: "Publik",
        sourcePrivate: "Kode privat",
        details: "Lihat detail",
        shots: "foto",
        loadMore: "Tampilkan lebih banyak",
      },
      modal: {
        close: "Tutup",
        prev: "Sebelumnya",
        next: "Berikutnya",
        zoom: "Perbesar",
        gallery: "Galeri",
        about: "Tentang proyek ini",
        liveSite: "Buka situs",
        source: "Kode sumber",
        privateNote: "Kode privat — detail tersedia atas permintaan",
        language: "Bahasa",
        updated: "Diperbarui",
        created: "Dibuat",
        tags: "Tag & topik",
      },
      experience: { current: "Peran saat ini" },
      contact: {
        eyebrow: "05 — mari bicara",
        heading: "Punya produk untuk dibangun atau posisi untuk diisi?",
        body: "Saya terbuka untuk peluang engineering full-stack & mobile, kepemimpinan teknis, dan kolaborasi menarik. Cara tercepat menghubungi saya adalah email.",
      },
      footer: {
        built: "dibangun dengan Next.js & Tailwind",
        rights: `Dirancang & dikoding dari ${loc}.`,
      },
      toggle: { label: "Ganti bahasa", next: "EN" },
    };
  }

  return {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      badge: "Building products · open to collaboration",
      viewWork: "View my work",
      getInTouch: "Get in touch",
    },
    sections: {
      about: { subtitle: "who i am", title: "About" },
      experience: { subtitle: "career timeline", title: "Experience" },
      projects: { subtitle: "selected work", title: "Projects" },
      skills: { subtitle: "the toolkit", title: "Skills & Stack" },
    },
    about: {
      paragraphs: [
        `I'm a Technical Partner and AI-augmented fullstack engineer based in ${loc}, with ${yrs} years of shipping real products across web, mobile, AI, and Web3.`,
        `From freelance web work in 2012 to leading IT at Warunet today — while building independent products on the side — I've shipped across the entire stack: responsive web apps, native & cross-platform mobile, real-time backends, and database design.`,
        `Lately I build AI-augmented. I recently shipped Pump Crush (a Web3 game) and Traceori (an AI-assisted product), using Claude Code and modern AI workflows to go from idea to production fast. My toolkit spans React, Next.js, Flutter, React Native, Kotlin, Node.js — and more.`,
      ],
      education: "Education",
      languages: "Languages",
      certifications: "Certifications",
    },
    projects: {
      filters: { All: "All", Product: "Product", Web: "Web", Mobile: "Mobile", Other: "Other" } as Record<string, string>,
      featured: "Featured",
      viewAll: "View all repositories",
      status: { Live: "Live", "In production": "In production" } as Record<string, string>,
      visibility: { All: "All sources", public: "Public", private: "Private" } as Record<string, string>,
      legend: "Public = source open on GitHub. Private = proprietary or client work — source not public, details on request.",
      privateBadge: "Private",
      publicBadge: "Public",
      sourcePrivate: "Source private",
      details: "View details",
      shots: "shots",
      loadMore: "Show more",
    },
    modal: {
      close: "Close",
      prev: "Previous",
      next: "Next",
      zoom: "Zoom",
      gallery: "Gallery",
      about: "About this project",
      liveSite: "Open live site",
      source: "Source code",
      privateNote: "Source is private — details on request",
      language: "Language",
      updated: "Updated",
      created: "Created",
      tags: "Tags & topics",
    },
    experience: { current: "Current role" },
    contact: {
      eyebrow: "05 — let's talk",
      heading: "Have a product to build or a role to fill?",
      body: "I'm open to full-stack & mobile engineering opportunities, technical leadership, and interesting collaborations. The fastest way to reach me is email.",
    },
    footer: {
      built: "built with Next.js & Tailwind",
      rights: `Designed & coded from ${loc}.`,
    },
    toggle: { label: "Switch language", next: "ID" },
  };
}

/* ----------------------------------------------------------------------------
 * Assemble the fully-localized content object.
 * ------------------------------------------------------------------------- */
export function getContent(lang: Lang) {
  const isID = lang === "id";

  return {
    lang,
    profile: isID ? { ...profile, ...idProfile } : profile,
    experiences: experiences.map((e) =>
      isID
        ? {
            ...e,
            role: idExp[e.company]?.role ?? e.role,
            highlights: idExp[e.company]?.highlights ?? e.highlights,
          }
        : e,
    ),
    projects: projects.map((p) =>
      isID
        ? { ...p, description: p.about ? shortOf(p.about.id) : idProjDesc[p.name] ?? p.description }
        : p,
    ),
    skillGroups: skillGroups.map((g) =>
      isID ? { ...g, label: idSkillLabel[g.label] ?? g.label } : g,
    ),
    stats: stats.map((s) =>
      isID ? { ...s, label: idStatLabel[s.label] ?? s.label } : s,
    ),
    education: isID ? { ...education, degree: idEduDegree } : education,
    languages: languages.map((l) =>
      isID
        ? { name: idLangName[l.name] ?? l.name, level: idLangLevel[l.level] ?? l.level }
        : l,
    ),
    certifications,
    ui: makeUI(lang, profile.location, profile.yearsExperience),
  };
}

export type Content = ReturnType<typeof getContent>;
