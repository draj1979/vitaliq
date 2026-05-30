import { Logo } from "@/components/Logo";
import { HealthTimeline } from "@/components/HealthTimeline";
import { WaitlistForm } from "@/components/WaitlistForm";
import {
  Activity,
  Book,
  Check,
  FileText,
  Shield,
  Sparkles,
} from "@/components/Icons";

const TRUSTED = [
  { name: "Arogya Wellness", sub: "Pune" },
  { name: "HealthFirst Diagnostics", sub: "Labs" },
  { name: "Prana Wellness Studio", sub: "Mumbai" },
  { name: "Sehat Clinic", sub: "Jaipur" },
  { name: "Nirvana Health Hub", sub: "Bengaluru" },
  { name: "Ayur Wellbeing", sub: "Kochi" },
];

const FEATURES = [
  {
    n: "01 — Records",
    title: "Every report, in one place — for good.",
    body: "VitalIQ gathers prescriptions, lab reports, scans, and discharge summaries from every hospital and lab into one secure timeline. Never repeat a test because you couldn't find the last one.",
  },
  {
    n: "02 — Insights",
    title: "Your numbers, finally in plain language.",
    body: "VitalIQ explains each lab value the way a good doctor would, tracks how it has moved across years, and tells you what actually changed — not a wall of reference ranges.",
  },
  {
    n: "03 — Guidance",
    title: "What to eat, how to move, what to take.",
    body: "Personalized, India-aware guidance on food, activity, and medicines — grounded in your own reports and your doctor's advice. Plus reminders and alerts when two medicines may clash.",
  },
];

const DETAIL_ITEMS = [
  {
    Icon: FileText,
    title: "Every report, sourced",
    body: "Each value links back to the original lab PDF or prescription it came from. Your data, always verifiable — never a black box.",
  },
  {
    Icon: Book,
    title: "Grounded in ICMR guidance",
    body: "Recommendations follow ICMR guidelines and your doctor's notes — not generic internet advice or one-size-fits-all charts.",
  },
  {
    Icon: Activity,
    title: "Tuned to you",
    body: "Learns your conditions, allergies, and routine, so food and activity advice fits your life — vegetarian thali included, not a Western meal plan.",
  },
  {
    Icon: Shield,
    title: "Yours, private by design",
    body: "You own your records. Everything is encrypted and DPDP Act-aligned — share with a doctor in one tap, revoke access any time.",
  },
];

const TIERS = [
  {
    name: "Free",
    price: "₹0",
    per: "",
    desc: "For getting your records into one place.",
    features: [
      "1 profile",
      "Record upload & timeline",
      "Lab report storage",
      "Basic reminders",
    ],
    cta: "Join the waitlist",
    variant: "secondary" as const,
  },
  {
    name: "Plus",
    price: "₹199",
    per: "/ month",
    desc: "For staying on top of your own health.",
    features: [
      "Up to 4 family profiles",
      "AI insights on labs & trends",
      "Food, activity & medicine guidance",
      "Medicine interaction alerts",
      "Priority support",
    ],
    cta: "Join the waitlist",
    variant: "primary" as const,
    featured: true,
    pill: "Most popular",
  },
  {
    name: "Family",
    price: "₹399",
    per: "/ month",
    desc: "For the whole family, parents included.",
    features: [
      "Up to 8 profiles",
      "Caregiver sharing & access controls",
      "One-tap sharing with any doctor",
      "Annual health summary",
      "Phone support",
    ],
    cta: "Join the waitlist",
    variant: "dark" as const,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-bone text-fg2">
      {/* ═══ NAV ═══════════════════════════════════════════════ */}
      <nav className="sticky top-0 z-50 border-b border-transparent bg-bone/85 backdrop-blur-md" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-6 md:px-10">
          <Logo size={32} />
          <div className="hidden items-center gap-6 md:flex">
            <a
              href="#pricing"
              className="flex cursor-pointer items-center gap-1 text-[14px] text-fg2 transition-colors hover:text-fg1"
            >
              Pricing
            </a>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#waitlist"
              className="focus-ring rounded-[6px] px-4 py-2 text-[14px] font-medium text-bone transition-colors"
              style={{ background: "var(--slate-700)" }}
            >
              Join the waitlist
            </a>
          </div>
        </div>
      </nav>

      {/* ═══ HERO ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-columns" />
        <div className="relative mx-auto grid max-w-[1240px] items-center gap-12 px-6 py-20 md:grid-cols-[1.05fr_1fr] md:gap-16 md:px-10 md:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.12em]" style={{ color: "var(--teal-700)" }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent-500)" }} />
              For patients and families, by design
            </div>
            <h1
              className="t-display text-[44px] md:text-[60px] lg:text-[72px]"
              style={{ textWrap: "balance" }}
            >
              Every record, every trend,
              <br />
              and the <span className="t-mark">clarity</span>
              <br />
              to act on your health.
            </h1>
            <p className="mt-7 max-w-[540px] text-[17px] leading-[1.55] text-fg2 md:text-[18px]">
              VitalIQ brings every prescription, lab report, and scan into one secure timeline —
              then turns your numbers into plain-language guidance on food, activity, and medicines.
            </p>
            <div id="waitlist" className="mt-9 scroll-mt-24">
              <WaitlistForm source="VitalIQ" />
            </div>
          </div>

          <div className="relative">
            <HealthTimeline />
          </div>
        </div>
      </section>

      {/* ═══ TRUSTED BY ═══════════════════════════════════════ */}
      <section className="border-y bg-bone-50" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto max-w-[1240px] px-6 py-10 md:px-10">
          <div className="text-center text-[12px] tracking-[-0.005em] text-fg3">
            Trusted by wellness clinics and health-conscious families across India
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {TRUSTED.map((f) => (
              <div key={f.name} className="flex items-baseline gap-2 opacity-70">
                <span
                  className="text-[18px] tracking-[-0.01em] text-fg1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {f.name}
                </span>
                <span className="text-[10px] uppercase tracking-[0.14em] text-fg3">
                  {f.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ══════════════════════════════════════════ */}
      <section className="mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
        <div className="mb-14 max-w-[760px]">
          <span className="t-eyebrow">What VitalIQ does</span>
          <h2
            className="mt-4 text-[36px] md:text-[48px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--fg1)", lineHeight: 1.08, letterSpacing: "-0.015em", textWrap: "balance" }}
          >
            Three things your health deserves, in one{" "}
            <span style={{ fontStyle: "italic", color: "var(--fg1)" }}>quiet, private place.</span>
          </h2>
          <p className="mt-5 text-[17px] leading-[1.6] text-fg2">
            Records that stop going missing. Insights that read like a doctor explaining, not a
            spreadsheet. Guidance on food, movement, and medicines that fits your life — and your
            kitchen.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {FEATURES.map((f, i) => (
            <article
              key={f.n}
              className="card-lift flex flex-col rounded-[14px] border bg-white p-7"
              style={{ borderColor: "var(--border)" }}
            >
              <div
                className="mb-5 text-[11px] font-medium uppercase tracking-[0.12em]"
                style={{ color: "var(--teal-700)" }}
              >
                {f.n}
              </div>
              <h3
                className="mb-3 text-[20px] leading-[1.2] tracking-[-0.01em]"
                style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--fg1)" }}
              >
                {f.title}
              </h3>
              <p className="mb-5 text-[14px] leading-[1.6] text-fg2">{f.body}</p>

              {/* Inline mini-visual per feature */}
              {i === 0 && (
                <div
                  className="mt-auto rounded-[10px] border p-4"
                  style={{ borderColor: "var(--border)", background: "var(--bone-50)" }}
                >
                  <div
                    className="mb-2 text-[10px] font-semibold uppercase tracking-[0.1em]"
                    style={{ color: "var(--teal-700)" }}
                  >
                    ♥ VitalIQ · synced
                  </div>
                  <div className="text-[13px] leading-[1.45] text-fg1">
                    &ldquo;Imported <span className="cite-chip">37 reports</span> from 2 labs and
                    4 hospitals · 0 lost · all in one timeline.&rdquo;
                  </div>
                </div>
              )}
              {i === 1 && (
                <div
                  className="mt-auto rounded-[10px] border bg-white p-4"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div
                    className="text-[14px] leading-[1.55] text-fg1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Your Vitamin D has been{" "}
                    <span className="hl-yellow">low every winter for two years</span> — a seasonal
                    pattern, not a one-off.
                    <sup
                      className="ml-0.5 inline-block rounded-[3px] px-1.5 align-super text-[9px] font-semibold text-white"
                      style={{ background: "var(--accent-600)", fontFamily: "var(--font-sans)" }}
                    >
                      2y
                    </sup>
                  </div>
                </div>
              )}
              {i === 2 && (
                <div
                  className="mt-auto flex items-start gap-2.5 rounded-[10px] border p-4"
                  style={{
                    borderColor: "var(--accent-100)",
                    background: "var(--accent-50)",
                  }}
                >
                  <span
                    className="shrink-0"
                    style={{ color: "var(--accent-700)" }}
                  >
                    <Sparkles size={16} />
                  </span>
                  <div>
                    <div
                      className="mb-1 text-[12px] font-semibold leading-tight"
                      style={{ color: "var(--accent-700)" }}
                    >
                      A simple plan, not a lecture
                    </div>
                    <div
                      className="text-[11px] leading-[1.5]"
                      style={{ color: "var(--accent-700)" }}
                    >
                      15 min morning sun, ragi and leafy greens, recheck in 8 weeks.
                    </div>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* ═══ PRODUCT DETAIL — DARK ════════════════════════════ */}
      <section
        className="relative"
        style={{ background: "var(--slate-900)", color: "var(--fg-on-dark)" }}
      >
        <div className="mx-auto grid max-w-[1240px] items-start gap-12 px-6 py-24 md:grid-cols-[1fr_1.05fr] md:gap-16 md:px-10 md:py-32">
          <div>
            <span
              className="text-[12px] font-medium uppercase tracking-[0.12em]"
              style={{ color: "var(--teal-300)" }}
            >
              Inside your health record
            </span>
            <h2
              className="mt-4 text-[34px] md:text-[44px]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--fg-on-dark)", lineHeight: 1.08, letterSpacing: "-0.015em", textWrap: "balance" }}
            >
              One timeline, every{" "}
              <span style={{ fontStyle: "italic", color: "var(--teal-300)" }}>visit,</span>{" "}
              in context.
            </h2>
            <p className="mt-5 max-w-[480px] text-[17px] leading-[1.65]" style={{ color: "rgba(236,238,241,0.75)" }}>
              VitalIQ doesn&apos;t scatter your health across apps and paper folders. Records,
              trends, and guidance live on one surface — so you walk into any visit already knowing
              your own story.
            </p>

            <div className="mt-9 grid gap-5">
              {DETAIL_ITEMS.map((d) => (
                <div key={d.title} className="flex gap-4">
                  <div
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-[8px]"
                    style={{ background: "rgba(118,171,174,0.18)", color: "var(--teal-300)" }}
                  >
                    <d.Icon size={18} />
                  </div>
                  <div>
                    <h4 className="mb-1 text-[15px] font-semibold" style={{ color: "var(--fg-on-dark)" }}>
                      {d.title}
                    </h4>
                    <p className="text-[14px] leading-[1.55]" style={{ color: "rgba(236,238,241,0.7)" }}>
                      {d.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product shot */}
          <div
            className="overflow-hidden rounded-[14px] border bg-white text-fg2"
            style={{
              borderColor: "rgba(255,255,255,0.08)",
              boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
            }}
          >
            <div
              className="flex items-center gap-1.5 border-b px-4 py-2.5"
              style={{ borderColor: "var(--border)" }}
            >
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--slate-200)" }} />
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--slate-200)" }} />
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--slate-200)" }} />
            </div>
            <div className="p-6 md:p-7">
              <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: "var(--teal-700)" }}>
                <span
                  className="text-[13px] leading-none"
                  style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--accent-600)", letterSpacing: 0, textTransform: "none" }}
                >
                  ♥
                </span>
                Health timeline · Ananya S.
              </div>
              <h4
                className="mb-3 text-[18px] leading-[1.3] tracking-[-0.01em]"
                style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--fg1)" }}
              >
                Vitamin D · low across two winters
              </h4>
              <p className="mb-4 text-[14px] leading-[1.6] text-fg2">
                VitalIQ noticed{" "}
                <span className="hl-yellow">
                  your Vitamin D dropped below 20 ng/mL every November to February for two years
                </span>{" "}
                — a seasonal pattern, not a one-off. No need to repeat the test.
              </p>
              <div className="mb-5 flex flex-wrap gap-1.5">
                {["2 labs · 4 hospitals", "2022–2026", "Last test 11d ago"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border bg-bone px-2 py-0.5 text-[10px] text-fg3"
                    style={{ borderColor: "var(--border)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="space-y-2 border-t pt-3" style={{ borderColor: "var(--border)" }}>
                {[
                  { n: "01", title: "Sunlight + diet plan", badge: "Suggested", color: "var(--accent-700)", bg: "var(--accent-50)", border: "rgba(17,99,58,0.25)" },
                  { n: "02", title: "Share with Dr. Mehta", badge: "1 tap", color: "var(--teal-700)", bg: "var(--teal-50)", border: "rgba(78,132,135,0.25)" },
                ].map((r) => (
                  <div key={r.n} className="flex items-center gap-3 py-1.5">
                    <span
                      className="text-[10px] tracking-[0.05em] text-fg4"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {r.n}
                    </span>
                    <span
                      className="text-[14px] text-fg1"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {r.title}
                    </span>
                    <span
                      className="ml-auto rounded-full border px-2 py-0.5 text-[10px] font-medium"
                      style={{
                        color: r.color,
                        background: r.bg,
                        borderColor: r.border,
                      }}
                    >
                      {r.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ QUOTE ═════════════════════════════════════════════ */}
      <section className="mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid items-start gap-12 md:grid-cols-[260px_1fr] md:gap-16">
          <div>
            <div
              className="mb-4 grid h-12 w-12 place-items-center rounded-full text-[14px] font-semibold text-white"
              style={{ background: "var(--slate-700)" }}
            >
              AS
            </div>
            <div className="text-[15px] font-semibold text-fg1">Ananya Sharma</div>
            <div className="text-[13px] text-fg3">Caregiver for her parents</div>
            <div className="text-[13px]" style={{ color: "var(--teal-700)" }}>
              Pune
            </div>
          </div>
          <p
            className="text-[24px] leading-[1.45] md:text-[28px]"
            style={{ fontFamily: "var(--font-display)", color: "var(--fg1)", letterSpacing: "-0.005em", textWrap: "pretty" }}
          >
            My parents see four different specialists, and every visit used to start by redoing
            tests because no one had the old reports. Now everything lives in VitalIQ — I share the
            full history in one tap, and it even flags when a new medicine clashes with another. We
            haven&apos;t repeated a test in months.
          </p>
        </div>
      </section>

      {/* ═══ PRICING ═══════════════════════════════════════════ */}
      <section
        id="pricing"
        className="mx-auto max-w-[1240px] scroll-mt-20 border-t px-6 py-24 md:px-10 md:py-32"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="mb-14 max-w-[760px]">
          <span className="t-eyebrow">Pricing</span>
          <h2
            className="mt-4 text-[36px] md:text-[48px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--fg1)", lineHeight: 1.08, letterSpacing: "-0.015em", textWrap: "balance" }}
          >
            Plans for{" "}
            <span style={{ fontStyle: "italic" }}>you and the people you care for.</span>
          </h2>
          <p className="mt-5 text-[17px] leading-[1.6] text-fg2">
            Every plan keeps your data encrypted, DPDP&nbsp;Act-aligned, and yours to export anytime.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {TIERS.map((t) => {
            const featured = t.featured;
            return (
              <div
                key={t.name}
                className="card-lift relative flex flex-col rounded-[14px] border bg-white p-7 md:p-8"
                style={{
                  borderColor: featured ? "var(--slate-700)" : "var(--border)",
                  boxShadow: featured
                    ? "0 12px 32px rgba(20,24,29,0.10), 0 2px 6px rgba(20,24,29,0.04)"
                    : undefined,
                }}
              >
                <div className="mb-4 flex items-center gap-2">
                  <span className="text-[14px] font-semibold tracking-[-0.005em] text-fg1">
                    {t.name}
                  </span>
                  {t.pill && (
                    <span
                      className="rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.1em] text-white"
                      style={{ background: "var(--accent-600)" }}
                    >
                      {t.pill}
                    </span>
                  )}
                </div>
                <div className="mb-3 flex items-baseline gap-2">
                  <span
                    className="text-[44px] tracking-[-0.02em]"
                    style={{ fontFamily: "var(--font-display)", color: "var(--fg1)", lineHeight: 1 }}
                  >
                    {t.price}
                  </span>
                  {t.per && (
                    <span className="text-[13px] text-fg3">{t.per}</span>
                  )}
                </div>
                <p className="mb-6 text-[14px] leading-[1.55] text-fg2">{t.desc}</p>
                <ul className="mb-7 space-y-2.5 text-[14px] text-fg2">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span style={{ color: "var(--teal-700)" }} className="mt-1 shrink-0">
                        <Check size={14} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#waitlist"
                  className={`focus-ring mt-auto rounded-[8px] px-5 py-3 text-center text-[14px] font-medium transition-colors`}
                  style={
                    t.variant === "primary"
                      ? { background: "var(--accent-600)", color: "white" }
                      : t.variant === "dark"
                        ? { background: "var(--slate-700)", color: "var(--bone)" }
                        : {
                            background: "white",
                            color: "var(--fg1)",
                            border: "1px solid var(--border-strong)",
                          }
                  }
                >
                  {t.cta}
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══ CLOSING CTA ═══════════════════════════════════════ */}
      <section
        className="relative"
        style={{ background: "var(--slate-900)", color: "var(--fg-on-dark)" }}
      >
        <div className="mx-auto max-w-[1240px] px-6 py-24 text-center md:px-10 md:py-32">
          <h2
            className="mx-auto max-w-[760px] text-[44px] md:text-[64px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--fg-on-dark)", lineHeight: 1.05, letterSpacing: "-0.015em", textWrap: "balance" }}
          >
            Your whole health, in{" "}
            <span style={{ fontStyle: "italic", color: "var(--accent-500)" }}>one place.</span>
          </h2>
          <p
            className="mx-auto mt-5 max-w-[520px] text-[17px] leading-[1.55]"
            style={{ color: "rgba(236,238,241,0.7)" }}
          >
            We&apos;re putting the finishing touches on VitalIQ. Join the waitlist to be first in line when we launch.
          </p>
          <div className="mt-9 flex justify-center">
            <WaitlistForm source="VitalIQ" variant="dark" />
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ════════════════════════════════════════════ */}
      <footer
        className="border-t"
        style={{ background: "var(--slate-950)", color: "var(--fg-on-dark)", borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-center md:px-10">
          <div>
            <Logo size={28} inverse />
            <p className="mt-4 max-w-[320px] text-[13px] leading-[1.6]" style={{ color: "rgba(236,238,241,0.55)" }}>
              One secure home for your family&apos;s medical records — with AI guidance on food,
              activity, and medicines.
            </p>
          </div>
          <a
            href="#waitlist"
            className="focus-ring inline-flex shrink-0 items-center gap-2 rounded-[8px] px-6 py-3 text-[14px] font-medium text-white transition-colors"
            style={{ background: "var(--accent-600)" }}
          >
            Join the waitlist
          </a>
        </div>
        <div
          className="border-t"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-3 px-6 py-5 text-[12px] md:flex-row md:items-center md:px-10" style={{ color: "rgba(236,238,241,0.5)" }}>
            <span>© {new Date().getFullYear()} VitalIQ, Inc. · VitalIQ provides wellness guidance and does not replace professional medical advice.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
