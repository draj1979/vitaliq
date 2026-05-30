"use client";

import { useState } from "react";
import { ArrowRight, Check } from "@/components/Icons";

const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "01597197-d426-43fe-a151-6301f92d5a0b";

export function WaitlistForm({
  source = "VitalIQ",
  variant = "light",
}: {
  source?: string;
  variant?: "light" | "dark";
}) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");
  const dark = variant === "dark";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || state === "loading") return;
    setState("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          email,
          subject: `New ${source} waitlist signup`,
          from_name: `${source} waitlist`,
        }),
      });
      const data = await res.json();
      setState(data.success ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div
        className="inline-flex items-center gap-2 rounded-[8px] px-4 py-3 text-[14px] font-medium"
        style={{
          color: dark ? "var(--fg-on-dark)" : "var(--teal-700)",
          background: dark ? "rgba(255,255,255,0.08)" : "var(--teal-50)",
        }}
      >
        <Check size={15} />
        You&apos;re on the list — we&apos;ll be in touch.
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-[460px]">
      <div className="flex flex-col gap-2.5 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          aria-label="Email address"
          className="focus-ring min-w-0 flex-1 rounded-[8px] border px-4 py-3.5 text-[15px] outline-none"
          style={{
            background: dark ? "rgba(255,255,255,0.06)" : "white",
            borderColor: dark ? "rgba(236,238,241,0.25)" : "var(--border-strong)",
            color: dark ? "var(--fg-on-dark)" : "var(--fg1)",
          }}
        />
        <button
          type="submit"
          disabled={state === "loading"}
          className="focus-ring inline-flex shrink-0 items-center justify-center gap-2 rounded-[8px] px-6 py-3.5 text-[15px] font-medium text-white transition-colors disabled:opacity-70"
          style={{ background: "var(--accent-500)" }}
        >
          {state === "loading" ? "Joining…" : "Join the waitlist"}
          {state !== "loading" && <ArrowRight size={16} />}
        </button>
      </div>
      <p
        className="mt-2.5 text-[13px]"
        style={{ color: dark ? "rgba(236,238,241,0.6)" : "var(--fg3)" }}
      >
        {state === "error"
          ? "Something went wrong — please try again."
          : "Be first to get access. No spam, just one email when we launch."}
      </p>
    </form>
  );
}
