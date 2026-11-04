import { Boxes, Code2, Globe, Smartphone, type LucideIcon } from "lucide-react";
import { type Project } from "@/lib/data";

/**
 * Default cover for projects that have no screenshot. Fully generated (no image file):
 * a dark gradient tinted by a stable hue derived from the repo name, a faint dot grid,
 * and an icon for the project's category. Deterministic, so SSR and client always agree.
 */
const HUES = [158, 175, 195, 215, 240, 262, 285];

const ICONS: Record<Project["category"], LucideIcon> = {
  Product: Boxes,
  Web: Globe,
  Mobile: Smartphone,
  Other: Code2,
};

const hash = (s: string) => {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
};

export default function ProjectCover({
  project,
  className = "",
}: {
  project: Pick<Project, "repo" | "category" | "language">;
  className?: string;
}) {
  const hue = HUES[hash(project.repo) % HUES.length];
  const Icon = ICONS[project.category] ?? Code2;
  return (
    <div
      aria-hidden
      className={`relative overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 85% 0%, hsl(${hue} 70% 30% / 0.55), transparent 60%), linear-gradient(135deg, hsl(${hue} 45% 15%), hsl(${(hue + 40) % 360} 50% 8%))`,
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="grid h-14 w-14 place-items-center rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm"
          style={{ color: `hsl(${hue} 80% 76%)` }}
        >
          <Icon size={26} strokeWidth={1.6} />
        </span>
      </div>
      <span className="absolute bottom-2 left-3 font-mono text-[10px] uppercase tracking-widest text-white/40">
        {project.language}
      </span>
    </div>
  );
}
