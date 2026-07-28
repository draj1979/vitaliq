/**
 * Inline SVG icons in the Lucide visual style — 24×24 default,
 * stroke 1.5, rounded line caps, currentColor inheritance.
 * Matches the VitalIQ design-system spec without adding the
 * lucide-react dependency.
 */
type Props = { size?: number; className?: string; strokeWidth?: number };

const base = (size: number, sw: number, className?: string) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: sw,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className,
});

export function ArrowRight({ size = 16, className, strokeWidth = 1.5 }: Props) {
  return (
    <svg {...base(size, strokeWidth, className)}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

export function ChevronRight({ size = 14, className, strokeWidth = 1.75 }: Props) {
  return (
    <svg {...base(size, strokeWidth, className)}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export function ChevronDown({ size = 13, className, strokeWidth = 1.5 }: Props) {
  return (
    <svg {...base(size, strokeWidth, className)}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function Check({ size = 14, className, strokeWidth = 2 }: Props) {
  return (
    <svg {...base(size, strokeWidth, className)}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function Book({ size = 18, className, strokeWidth = 1.5 }: Props) {
  return (
    <svg {...base(size, strokeWidth, className)}>
      <path d="M2 4v17a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4M2 4a3 3 0 0 1 3-3h15v18H5a3 3 0 0 0-3 3M2 4a3 3 0 0 0 3 3h13" />
    </svg>
  );
}

export function Filter({ size = 18, className, strokeWidth = 1.5 }: Props) {
  return (
    <svg {...base(size, strokeWidth, className)}>
      <path d="M3 6h18M6 12h12M10 18h4" />
    </svg>
  );
}

export function Settings({ size = 18, className, strokeWidth = 1.5 }: Props) {
  return (
    <svg {...base(size, strokeWidth, className)}>
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function Briefcase({ size = 18, className, strokeWidth = 1.5 }: Props) {
  return (
    <svg {...base(size, strokeWidth, className)}>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

export function Shield({ size = 18, className, strokeWidth = 1.5 }: Props) {
  return (
    <svg {...base(size, strokeWidth, className)}>
      <path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3v8z" />
    </svg>
  );
}

export function FileText({ size = 18, className, strokeWidth = 1.5 }: Props) {
  return (
    <svg {...base(size, strokeWidth, className)}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </svg>
  );
}

export function Sparkles({ size = 18, className, strokeWidth = 1.5 }: Props) {
  return (
    <svg {...base(size, strokeWidth, className)}>
      <path d="m12 3-1.9 5.8L4.3 10.6l5.8 1.9L12 18l1.9-5.5 5.8-1.9-5.8-1.8z" />
      <path d="M19 3v4M21 5h-4" />
    </svg>
  );
}

export function X({ size = 16, className, strokeWidth = 1.75 }: Props) {
  return (
    <svg {...base(size, strokeWidth, className)}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export function Play({ size = 14, className, strokeWidth = 1.5 }: Props) {
  return (
    <svg {...base(size, strokeWidth, className)} fill="currentColor">
      <path d="M6 4v16l13-8z" />
    </svg>
  );
}

export function Activity({ size = 18, className, strokeWidth = 1.5 }: Props) {
  return (
    <svg {...base(size, strokeWidth, className)}>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

export function Heart({ size = 18, className, strokeWidth = 1.5 }: Props) {
  return (
    <svg {...base(size, strokeWidth, className)}>
      <path d="M19 14c1.5-1.5 3-3.3 3-5.5A4.5 4.5 0 0 0 12 5.5 4.5 4.5 0 0 0 2 8.5c0 2.2 1.5 4 3 5.5l7 7 7-7z" />
    </svg>
  );
}

export function Users({ size = 18, className, strokeWidth = 1.5 }: Props) {
  return (
    <svg {...base(size, strokeWidth, className)}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
