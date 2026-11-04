type LogoProps = {
  /** pixel size of the square brandmark */
  markSize?: number;
  /** show the "rizkiwk.dev" wordmark next to the mark */
  showWordmark?: boolean;
  /** show the tiny role line under the wordmark */
  showTagline?: boolean;
  className?: string;
};

/**
 * rizkiwk.dev brand logo.
 * Brandmark = gradient squircle (emerald → cyan) + terminal-prompt ">_" glyph.
 * Self-contained SVG (no font dependency), scales cleanly down to 16px.
 */
export default function Logo({
  markSize = 32,
  showWordmark = true,
  showTagline = false,
  className = "",
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width={markSize}
        height={markSize}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="rizkiwk.dev logo"
        role="img"
        className="shrink-0 drop-shadow-[0_2px_10px_rgba(16,185,129,0.35)]"
      >
        <defs>
          <linearGradient
            id="rwLogoBg"
            x1="6"
            y1="4"
            x2="58"
            y2="60"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#6ee7b7" />
            <stop offset="0.52" stopColor="#10b981" />
            <stop offset="1" stopColor="#0ea5e9" />
          </linearGradient>
          <clipPath id="rwLogoSq">
            <rect x="2" y="2" width="60" height="60" rx="16" />
          </clipPath>
        </defs>
        <g clipPath="url(#rwLogoSq)">
          <rect x="2" y="2" width="60" height="60" fill="url(#rwLogoBg)" />
          <ellipse cx="20" cy="8" rx="38" ry="24" fill="#ffffff" opacity="0.16" />
        </g>
        <text
          x="32"
          y="37.5"
          textAnchor="middle"
          fontFamily="var(--font-inter), 'Helvetica Neue', Arial, sans-serif"
          fontWeight="800"
          fontSize="22"
          letterSpacing="-1.5"
          fill="#ffffff"
        >
          RWK
        </text>
        <rect x="23" y="42.5" width="18" height="3" rx="1.5" fill="#ffffff" opacity="0.92" />
      </svg>

      {showWordmark && (
        <span className="leading-tight">
          <span className="font-mono text-lg font-bold text-white">
            rizkiwk<span className="text-lab">.dev</span>
          </span>
          {showTagline && (
            <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-slate-500">
              AI-Augmented Engineer
            </span>
          )}
        </span>
      )}
    </span>
  );
}
