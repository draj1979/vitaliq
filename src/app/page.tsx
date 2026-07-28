import { Logo } from "@/components/Logo";
import { HealthTimeline } from "@/components/HealthTimeline";
import {
  Activity,
  ArrowRight,
  Check,
  FileText,
  Shield,
  Sparkles,
  Users,
} from "@/components/Icons";

const APP_URL = "https://vitaliq-web-e23do5yn3a-el.a.run.app/dashboard";

const TRUSTED = [
  { name: "The Sharma family", sub: "Delhi" },
  { name: "3-gen households", sub: "Mumbai" },
  { name: "Caregiver families", sub: "Bengaluru" },
  { name: "The Iyer family", sub: "Chennai" },
  { name: "Joint families", sub: "Hyderabad" },
  { name: "The Mehta family", sub: "Pune" },
];

const FEATURES = [
  {
    n: "01 — Family Vault",
    title: "One vault for every family member — for good.",
    body: "Upload health reports for your whole household — parents, children, elderly grandparents. VitalIQ extracts biomarkers, tracks trends, and keeps each member's records on their own secure timeline. Nothing lost in WhatsApp folders or email attachments.",
  },
  {
    n: "02 — AI Insights",
    title: "Each member's numbers, in plain language.",
    body: "VitalIQ explains each lab value the way a good doctor would, tracks trends across years, and flags when a pattern matters — for each person in your family, not a one-size-fits-all chart.",
  },
  {
    n: "03 — Future Self",
    title: "Set a commitment. See who you become.",
    body: "Pick a goal — 10,000 steps, no sugar on weekdays, 250 pushups — and a time horizon. VitalIQ generates a photo-realistic projection of your future self, refreshed as you actually follow through.",
  },
];

const DETAIL_ITEMS = [
  {
    Icon: FileText,
    title: "Always verifiable",
    body: "Each AI-extracted biomarker value is shown to you for confirmation before it's saved. Clinical numbers are never auto-committed — you stay in control of what goes on record.",
  },
  {
    Icon: Users,
    title: "Built for the whole household",
    body: "One admin creates the family vault — inviting a spouse, adding children, including aging parents. Each adult sets their own privacy; guardians manage minors' data completely.",
  },
  {
    Icon: Activity,
    title: "Lifestyle guidance only",
    body: "Recommendations cover food, activity, sleep, and hydration — never medication changes, dosing, or diagnosis. When a result warrants a doctor's eye, VitalIQ says so and stops there.",
  },
  {
    Icon: Shield,
    title: "India-first, DPDP Act-aligned",
    body: "All health data stored in India (Mumbai). Granular consent per family member. Delete or export everything in one clear request — no friction, no dark patterns.",
  },
];

const TIERS = [
  {
    name: "Starter",
    price: "₹0",
    per: "",
    desc: "Get your own records into one secure place.",
    features: [
      "1 member profile",
      "Record upload & timeline",
      "Lab report storage",
      "Basic reminders",
    ],
    cta: "Get started",
    variant: "secondary" as const,
  },
  {
    name: "Family",
    price: "₹199",
    per: "/ month",
    desc: "One vault for your household — parents, children, and you.",
    features: [
      "Up to 4 family profiles",
      "AI insights on each member's labs & trends",
      "Lifestyle guidance on food and activity",
      "Future Self visualization",
      "Priority support",
    ],
    cta: "Get started",
    variant: "primary" as const,
    featured: true,
    pill: "Most popular",
  },
  {
    name: "Extended",
    price: "₹399",
    per: "/ month",
    desc: "For larger families — aging parents and grandparents included.",
    features: [
      "Up to 8 family profiles",
      "Caregiver sharing & access controls",
      "One-tap sharing with any doctor",
      "Annual household health summary",
      "Phone support",
    ],
    cta: "Get started",
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
              href={APP_URL}
              className="focus-ring rounded-[6px] px-4 py-2 text-[14px] font-medium text-bone transition-colors"
              style={{ background: "var(--slate-700)" }}
            >
              Get Started
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
              India&apos;s family health vault
            </div>
            <h1
              className="t-display text-[44px] md:text-[60px] lg:text-[72px]"
              style={{ textWrap: "balance" }}
            >
              Every family member&apos;s health
              <br />
              in one place — with the <span className="t-mark">clarity</span>
              <br />
              to act.
            </h1>
            <p className="mt-7 max-w-[540px] text-[17px] leading-[1.55] text-fg2 md:text-[18px]">
              Indian families manage health records as scattered PDFs across WhatsApp, email, and
              paper — for parents, kids, and grandparents at once. VitalIQ is one household vault:
              every member&apos;s records, AI insights on each person&apos;s data, and a future-self
              projection tied to your real commitments.
            </p>
            <div className="mt-9">
              <a
                href={APP_URL}
                className="focus-ring inline-flex items-center gap-2 rounded-[8px] px-7 py-4 text-[16px] font-medium text-white transition-colors"
                style={{ background: "var(--accent-500)" }}
              >
                Get Started <ArrowRight size={16} />
              </a>
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
            Trusted by health-conscious families across India — DPDP Act-aligned, stored in India
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
            Three things your family&apos;s health has always deserved, in one{" "}
            <span style={{ fontStyle: "italic", color: "var(--fg1)" }}>household vault.</span>
          </h2>
          <p className="mt-5 text-[17px] leading-[1.6] text-fg2">
            Records that stop going missing across WhatsApp and email. AI insights that read like a
            doctor explaining, not a spreadsheet. And a future-self projection that makes your
            commitment to change real.
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
                    ♥ Sharma household · 4 members synced
                  </div>
                  <div className="text-[13px] leading-[1.45] text-fg1">
                    &ldquo;Imported <span className="cite-chip">54 reports</span> across 3 members · 3 labs and 5 hospitals · 0 lost.&rdquo;
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
                <div className="mt-auto space-y-2">
                  <div
                    className="rounded-[10px] border p-3.5"
                    style={{ borderColor: "var(--border)", background: "var(--bone-50)" }}
                  >
                    <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.1em]" style={{ color: "var(--slate-500)" }}>
                      Commitment
                    </div>
                    <div className="text-[13px] font-medium text-fg1">250 pushups / day</div>
                    <div className="text-[11px] text-fg3">12-month horizon · Rahul S.</div>
                  </div>
                  <div
                    className="flex items-start gap-2 rounded-[10px] border p-3.5"
                    style={{ borderColor: "var(--accent-100)", background: "var(--accent-50)" }}
                  >
                    <span className="mt-0.5 shrink-0" style={{ color: "var(--accent-700)" }}>
                      <Sparkles size={12} />
                    </span>
                    <div>
                      <div className="mb-0.5 text-[11px] font-semibold" style={{ color: "var(--accent-700)" }}>
                        Future self · 12 months
                      </div>
                      <div className="text-[10px] leading-[1.5]" style={{ color: "var(--accent-700)" }}>
                        Motivational projection — not a medical forecast.
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* ═══ FUTURE SELF ══════════════════════════════════════ */}
      <section className="mx-auto max-w-[1240px] border-t px-6 py-24 md:px-10 md:py-32" style={{ borderColor: "var(--border)" }}>
        <div className="grid items-center gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <div>
            <span className="t-eyebrow">Future Self</span>
            <h2
              className="mt-4 text-[34px] md:text-[44px]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--fg1)", lineHeight: 1.08, letterSpacing: "-0.015em", textWrap: "balance" }}
            >
              The person you could become —{" "}
              <span style={{ fontStyle: "italic", color: "var(--accent-600)" }}>made visible.</span>
            </h2>
            <p className="mt-5 text-[17px] leading-[1.6] text-fg2">
              Health goals stay abstract until you can see the outcome. VitalIQ combines your
              current photo, your health records, and a stated commitment — then generates a
              photo-realistic projection of your future self, refreshed as your real adherence data
              comes in.
            </p>
            <p className="mt-4 text-[14px] leading-[1.6]" style={{ color: "var(--fg3)" }}>
              Every projection carries a persistent, non-dismissible label: this is a motivational
              projection based on your stated commitment — not a medical or scientific forecast.
            </p>
          </div>

          <div
            className="overflow-hidden rounded-[14px] border bg-white"
            style={{ borderColor: "var(--border)", boxShadow: "0 12px 32px rgba(20,24,29,0.08), 0 2px 6px rgba(20,24,29,0.04)" }}
          >
            <div className="flex items-center gap-1.5 border-b px-4 py-2.5" style={{ borderColor: "var(--border)" }}>
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
                Future Self · Rahul S.
              </div>
              <h4
                className="mb-3 text-[18px] leading-[1.3] tracking-[-0.01em]"
                style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--fg1)" }}
              >
                250 pushups / day · 12 months
              </h4>
              <div className="mb-4 rounded-[10px] border p-4" style={{ borderColor: "var(--border)", background: "var(--bone-50)" }}>
                <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.1em]" style={{ color: "var(--fg3)" }}>
                  Based on
                </div>
                <div className="text-[14px] leading-[1.55] text-fg1">
                  Current health records ·{" "}
                  <span className="hl-yellow">87% adherence over 6 months</span> · last updated 3d ago
                </div>
              </div>
              <div
                className="rounded-[10px] border p-4"
                style={{ borderColor: "var(--accent-100)", background: "var(--accent-50)" }}
              >
                <div className="mb-2 flex items-center gap-1.5">
                  <span style={{ color: "var(--accent-700)" }}>
                    <Sparkles size={12} />
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "var(--accent-700)" }}>
                    Projection ready · 12 months
                  </span>
                </div>
                <div
                  className="rounded-[6px] px-2.5 py-1.5 text-[11px] leading-[1.5]"
                  style={{ background: "rgba(21,128,61,0.10)", color: "var(--accent-700)" }}
                >
                  Motivational projection based on your stated commitment — not a medical or scientific forecast.
                </div>
              </div>
            </div>
          </div>
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
              Inside your family vault
            </span>
            <h2
              className="mt-4 text-[34px] md:text-[44px]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--fg-on-dark)", lineHeight: 1.08, letterSpacing: "-0.015em", textWrap: "balance" }}
            >
              Every member, every{" "}
              <span style={{ fontStyle: "italic", color: "var(--teal-300)" }}>visit,</span>{" "}
              in one place.
            </h2>
            <p className="mt-5 max-w-[480px] text-[17px] leading-[1.65]" style={{ color: "rgba(236,238,241,0.75)" }}>
              Indian families scatter health records across WhatsApp, email, and paper — for
              parents, kids, and grandparents at once. VitalIQ is the household vault that keeps
              everyone&apos;s records in one place, so you walk into any visit already knowing the
              whole family&apos;s story.
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
                Family vault · Ananya S.
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
                {["Sharma household", "2022–2026", "Last test 11d ago"].map((tag) => (
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
            tests because no one had the old reports. VitalIQ is our family&apos;s single source of
            truth — I share the full history in one tap, and the AI actually spots patterns a doctor
            would miss across years of scattered reports. We haven&apos;t repeated a test in months.
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
                  href={APP_URL}
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
            Your whole family&apos;s health, in{" "}
            <span style={{ fontStyle: "italic", color: "var(--accent-500)" }}>one vault.</span>
          </h2>
          <p
            className="mx-auto mt-5 max-w-[520px] text-[17px] leading-[1.55]"
            style={{ color: "rgba(236,238,241,0.7)" }}
          >
            VitalIQ is live. Start managing your whole family&apos;s health records today — India&apos;s household health vault is open.
          </p>
          <div className="mt-9 flex justify-center">
            <a
              href={APP_URL}
              className="focus-ring inline-flex items-center gap-2 rounded-[8px] px-7 py-4 text-[16px] font-medium text-white transition-colors"
              style={{ background: "var(--accent-600)" }}
            >
              Get Started <ArrowRight size={16} />
            </a>
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
              India&apos;s family health vault — one household view for every member&apos;s
              records, AI lifestyle guidance, and a future-self projection tied to your commitments.
            </p>
          </div>
          <a
            href={APP_URL}
            className="focus-ring inline-flex shrink-0 items-center gap-2 rounded-[8px] px-6 py-3 text-[14px] font-medium text-white transition-colors"
            style={{ background: "var(--accent-600)" }}
          >
            Get Started
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
