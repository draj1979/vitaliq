/**
 * VitalIQ wordmark — a slate-rounded square holding a bone
 * heartbeat (ECG) line with a wellness-green corner-tab, paired
 * with the wordmark "VitalIQ" (italic "IQ") in display serif.
 */
export function Logo({ size = 32, inverse = false }: { size?: number; inverse?: boolean }) {
  const slate = inverse ? "var(--bone)" : "var(--slate-700)";
  const bone = inverse ? "var(--slate-700)" : "var(--bone)";
  const accent = "var(--accent-500)";
  const text = inverse ? "var(--bone)" : "var(--slate-700)";

  return (
    <div className="flex items-center gap-2.5">
      <svg
        width={size}
        height={size}
        viewBox="0 0 56 56"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect x="4" y="4" width="48" height="48" rx="8" fill={slate} />
        <path
          d="M13 30H21L25 19L30 37L34 30H43"
          fill="none"
          stroke={bone}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M52 4v9h-9c0-4.971 4.029-9 9-9z" fill={accent} />
      </svg>
      <span
        className="text-[24px] tracking-[-0.01em]"
        style={{ fontFamily: "var(--font-display)", color: text }}
      >
        Vital
        <em style={{ fontStyle: "italic" }}>IQ</em>
      </span>
    </div>
  );
}

/** Just the rounded mark — used as favicon-style accent. */
export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" aria-hidden="true">
      <rect x="4" y="4" width="48" height="48" rx="8" fill="var(--slate-700)" />
      <path
        d="M13 30H21L25 19L30 37L34 30H43"
        fill="none"
        stroke="var(--bone)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M52 4v9h-9c0-4.971 4.029-9 9-9z" fill="var(--accent-500)" />
    </svg>
  );
}
