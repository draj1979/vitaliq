export function HealthTimeline() {
  return (
    <div
      className="relative overflow-hidden rounded-[14px] border bg-white"
      style={{
        borderColor: "var(--border)",
        boxShadow:
          "0 12px 32px rgba(20,24,29,0.10), 0 2px 6px rgba(20,24,29,0.04)",
      }}
    >
      {/* Window chrome */}
      <div
        className="flex items-center gap-1.5 border-b px-4 py-2.5"
        style={{ borderColor: "var(--border)" }}
      >
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--slate-200)" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--slate-200)" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--slate-200)" }} />
        <span
          className="ml-3 text-[11px] tracking-[-0.01em] text-fg3"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          app.vitaliq.com/family/sharma
        </span>
      </div>

      {/* Body */}
      <div className="p-6 md:p-7">
        {/* Household header */}
        <div className="mb-3 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.12em]" style={{ color: "var(--teal-700)" }}>
          <span
            className="text-[13px] leading-none"
            style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--accent-600)", letterSpacing: 0, textTransform: "none" }}
          >
            ♥
          </span>
          <span>Sharma household</span>
          <span style={{ color: "var(--slate-200)" }}>·</span>
          <span>4 members</span>
        </div>

        {/* Member tabs */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {[
            { name: "Ananya", active: true },
            { name: "Rakesh", active: false },
            { name: "Priya", active: false },
            { name: "Mohan (67)", active: false },
          ].map((m) => (
            <span
              key={m.name}
              className="shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-medium"
              style={
                m.active
                  ? {
                      background: "var(--teal-50)",
                      color: "var(--teal-700)",
                      border: "1px solid var(--teal-100)",
                    }
                  : {
                      color: "var(--fg3)",
                      border: "1px solid var(--border)",
                      background: "white",
                    }
              }
            >
              {m.name}
            </span>
          ))}
        </div>

        <h3
          className="mb-3 text-[19px] leading-[1.3] tracking-[-0.01em]"
          style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--fg1)" }}
        >
          Three years of records, gathered into one timeline.
        </h3>

        <p className="mb-5 text-[14px] leading-[1.55] text-fg2">
          VitalIQ pulled reports from 2 labs and 4 hospitals into one record. Ananya&apos;s{" "}
          <span className="cite-chip">Vitamin D</span> has stayed low two winters running — no need
          to retest, here&apos;s what helps.
        </p>

        {/* Marker rows */}
        <div
          className="space-y-2 border-t pt-4"
          style={{ borderColor: "var(--border)" }}
        >
          <MarkerRow n="01" title="Vitamin D" value="18 ng/mL" status="low" />
          <MarkerRow n="02" title="Blood pressure" value="118/78" status="normal" />
          <MarkerRow n="03" title="Thyroid review" value="TSH 4.1" status="due" />
        </div>
      </div>
    </div>
  );
}

function MarkerRow({
  n,
  title,
  value,
  status,
}: {
  n: string;
  title: string;
  value: string;
  status: "normal" | "low" | "due";
}) {
  const badge = {
    normal: {
      label: "Normal",
      color: "#2F8F6F",
      bg: "#E6F2EC",
      border: "rgba(47,143,111,0.25)",
    },
    low: {
      label: "Low",
      color: "#B07A1A",
      bg: "#FAF1DC",
      border: "rgba(176,122,26,0.25)",
    },
    due: {
      label: "Due in 2 wks",
      color: "var(--teal-700)",
      bg: "var(--teal-50)",
      border: "rgba(78,132,135,0.25)",
    },
  }[status];
  return (
    <div className="flex items-center gap-3 py-1.5">
      <span
        className="text-[10px] tracking-[0.05em] text-fg4"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {n}
      </span>
      <span
        className="text-[14px] tracking-[-0.005em] text-fg1"
        style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
      >
        {title}
      </span>
      <span
        className="text-[11px] text-fg3"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {value}
      </span>
      <span
        className="ml-auto rounded-full border px-2 py-0.5 text-[10px] font-medium"
        style={{
          color: badge.color,
          background: badge.bg,
          borderColor: badge.border,
        }}
      >
        {badge.label}
      </span>
    </div>
  );
}
