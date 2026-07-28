# Product Requirements Document
## [Working Title] — Family Health Vault & Future Self

**Version:** 0.1 (MVP scope)
**Market:** India-first (DPDP Act compliance)
**Platform:** Web app, mobile-responsive
**Business model:** Family plan (per-household subscription)

---

## 1. Product Vision

A web app where a family stores everyone's health records in one place, gets AI-generated corrective recommendations on food and exercise based on those records, and can visualize a photo-realistic "future self" tied to specific daily commitments (e.g., "250 pushups/day for 12 months").

The wedge: most health apps serve individuals. Families in India currently manage health records as scattered PDFs across WhatsApp, email, and paper — for parents, kids, and grandparents at once. A single household view, with AI reasoning over each member's data, is the core differentiator.

---

## 2. Primary Persona

**The Household Health Manager** — typically a parent (25–45), tech-comfortable, managing health logistics for a spouse, children, and often aging parents. They currently juggle lab reports across apps/folders and want one place to see "is everyone okay" and "what should we actually do differently."

Secondary: adult family members who log their own food/exercise and want to see the future-self visualization as motivation.

---

## 3. Core Features (MVP)

### 3.1 Health Record Storage
- Upload health reports as PDF or photo per family member.
- AI extracts structured values (biomarkers, dates, ranges, flags) via OCR + LLM parsing.
- User reviews/confirms extracted values before they're saved (critical for trust and liability — never auto-save unverified clinical numbers).
- Records stored per family member, timestamped, versioned (so trends over time are visible).

### 3.2 AI Recommendations Engine
- Given a family member's latest health records + logged food + logged exercise, an AI agent generates corrective suggestions (e.g., "your fasting glucose is trending up — consider reducing refined carbs at dinner and adding a 20-min walk after meals").
- Recommendations are **lifestyle-only** (diet, activity, sleep, hydration) — never medication changes, dosing, or diagnosis. This boundary is a hard product rule, not a soft guideline (see §7).
- Each recommendation cites which data point triggered it, and includes a "talk to your doctor about this" prompt where relevant.

### 3.3 Future Self Visualization
- User uploads a current photo.
- User sets a commitment (e.g., "250 pushups/day," "10,000 steps/day," "no sugar on weekdays") for a chosen time horizon (3/6/12 months).
- System combines: current photo + latest health records + stated commitment + adherence data over time → generates a projected photo-style image via an image-generation model, refreshed periodically as real adherence data comes in.
- **Framed explicitly as a motivational projection, not a medical prediction** — this disclaimer is persistent in the UI, not just in fine print (see §7 and §9).

### 3.4 Family Accounts
- One family admin account creates the household; admin invites members (spouse, adult children) or adds dependent profiles (minor children, elderly parents who may not manage their own account).
- Role-based access: admin can view/manage all members' data; adult members control their own visibility settings (e.g., a spouse may want their records private from other adults); minors' data is fully controlled by the admin/guardian until a defined age.
- Shared family dashboard: household-level view (e.g., upcoming report due dates, flagged trends across members) without exposing granular data of members who've restricted sharing.

---

## 4. Explicit Non-Goals for MVP

To keep this buildable, the MVP explicitly excludes:
- Wearable device integration (Fitbit/Apple Health/Google Fit sync) — v2.
- Real-time chat with human clinicians — v2/v3, likely via partnership rather than in-house.
- Prescription or medication tracking/reminders — deliberately excluded given regulatory risk.
- Insurance integration, e-pharmacy ordering, lab-test booking — later monetization layer, not MVP.
- Native iOS/Android apps — web-responsive only for MVP.

---

## 5. System Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│          Web Client (Next.js) — Cloud Run, asia-south1            │
│   Family Dashboard │ Member Profiles │ Upload UI │ Future Self    │
└───────────────────────────┬──────────────────────────────────────┘
                             │ HTTPS (TLS 1.3)
┌───────────────────────────▼──────────────────────────────────────┐
│         API Layer (NestJS) — Cloud Run, asia-south1               │
│   Auth & RBAC │ Record Ingestion │ Recommendation Orchestrator    │
└───┬───────────────┬───────────────┬───────────────┬──────────────┘
    │               │               │               │
┌───▼────┐   ┌──────▼──────┐  ┌─────▼──────┐  ┌────▼──────────────┐
│ OCR/    │   │ LLM Layer    │  │ Image Gen  │  │ Neon (serverless  │
│ Parsing │   │ (Claude API) │  │ API        │  │ Postgres)         │
│ Service │   │ - extraction │  │ (3rd-party │  │                   │
│         │   │ - reasoning  │  │ img2img)   │  │ Google Cloud      │
│         │   │ - recs       │  │            │  │ Storage (GCS)     │
│         │   │              │  │            │  │ asia-south1       │
└─────────┘   └──────────────┘  └────────────┘  └───────────────────┘

GCP services: Cloud Run │ GCS │ Artifact Registry │ Secret Manager │ Cloud Build
```

**Key architectural notes:**

- **GCP hosting:** both the Next.js frontend and NestJS API run as containers on **Cloud Run** in `asia-south1` (Mumbai). Cloud Run's scale-to-zero model keeps costs low during low-traffic periods; min-instances can be pinned to 1 for the API if cold-start latency is unacceptable. Container images are built via **Cloud Build** and stored in **Artifact Registry**.
- **Secrets:** all credentials (`ANTHROPIC_API_KEY`, `NEON_DATABASE_URL`, JWT secrets, etc.) are stored in **Google Secret Manager** and mounted into Cloud Run at deploy time — never baked into images or environment files.
- **Object storage:** raw uploaded files (PDFs/health photos) are stored in **Google Cloud Storage** (`asia-south1` bucket) to satisfy DPDP Act data-residency requirements. The NestJS API issues **GCS signed URLs** for direct client-to-GCS uploads so binary data never transits the API process.
- **LLM layer:** Claude API handles (a) structured extraction from OCR'd report text, (b) the recommendation-generation reasoning, and (c) the prompt construction for the image model. Claude does not generate images itself — image generation requires a separate provider (see below).
- **Image generation:** photo-realistic "future self" images require a dedicated image-gen API with image-to-image capability (e.g., a Flux- or Stable Diffusion-based service, or a provider offering identity-preserving img2img). This is a distinct vendor integration and cost center from the LLM layer — budget and evaluate separately. Expect meaningfully higher per-generation cost than a text API call, and real limits on likeness accuracy/consistency across regenerations.
- **Data residency:** all health records and images are stored in GCS and Neon, both configured to `asia-south1` (Mumbai), satisfying DPDP Act sensitive-data handling requirements.
- **Database:** Neon (serverless Postgres) is used for all structured data. Neon's branching feature gives each PR an isolated database branch at no extra cost. Connection pooling via Neon's built-in PgBouncer handles Cloud Run's concurrent connection bursts.
- **Storage separation:** raw uploaded files (PDFs/photos) live in GCS; extracted structured values live in Neon (Postgres), referencing the GCS object URL. Never derive recommendations from unverified extraction — always route through the user-confirmation step first.

---

## 6. Data Model (Core Entities)

| Entity | Key Fields |
|---|---|
| `Family` | id, admin_user_id, plan_tier, created_at |
| `FamilyMember` | id, family_id, name, dob, relationship, is_dependent, sharing_settings |
| `HealthRecord` | id, member_id, source_file_url, extracted_data (JSON), extraction_confirmed (bool), report_date, uploaded_at |
| `Biomarker` | id, health_record_id, name, value, unit, reference_range, flag (normal/high/low) |
| `FoodLog` | id, member_id, date, entry_text or structured_meal, source (manual/photo) |
| `ExerciseLog` | id, member_id, date, activity_type, quantity (reps/duration/distance), source |
| `Commitment` | id, member_id, commitment_type, target_value, start_date, horizon_months |
| `Recommendation` | id, member_id, generated_at, trigger_data_refs, recommendation_text, category (food/activity/sleep), doctor_flag (bool) |
| `FutureSelfImage` | id, member_id, base_photo_url, commitment_id, generated_image_url, generated_at, adherence_snapshot |

---

## 7. Guardrails (Non-Negotiable for MVP)

These aren't nice-to-haves — given the regulatory exposure of health-data products, treat them as launch blockers:

1. **No diagnosis, no medication guidance.** The AI agent is scoped to lifestyle recommendations only. Any query pattern resembling "should I take X mg of Y" gets deflected to "please discuss this with your doctor," never answered directly.
2. **Human-verified extraction.** OCR/LLM-extracted biomarker values are shown to the user for confirmation before being saved or used in recommendations. Never silently trust extraction on clinical data.
3. **Persistent disclaimer on Future Self.** The generated image carries a visible, non-dismissible label (e.g., a corner watermark or caption) stating it's a motivational projection based on stated commitments, not a medical or scientific forecast.
4. **Consent architecture per DPDP Act.** Explicit, granular consent capture for each family member whose health data is stored — including a defined process for a dependent transitioning to self-managed consent at adulthood, and a clear data-deletion/export flow (Right to Erasure / data portability).
5. **Minors' data handling.** Extra restriction on who can view/export a minor's health data; no AI-recommendation content directed at a minor without guardian visibility into it.

---

## 8. MVP Build Plan (Suggested Phasing)

**Phase 1 (Foundation — 4–6 weeks):**
- Family account creation, member profiles, RBAC
- Manual health record upload (PDF/photo) + OCR extraction + confirmation UI
- Basic structured storage of biomarkers with trend view (simple line chart per metric)

**Phase 2 (Intelligence — 4–6 weeks):**
- Food/exercise logging (manual entry first)
- Recommendation engine v1: rule-assisted + LLM reasoning over confirmed biomarkers + logs
- Doctor-flag logic for out-of-range values

**Phase 3 (Future Self — 3–4 weeks):**
- Commitment-setting UI
- Image-gen integration (single provider, single horizon length to start — e.g., 12 months only)
- Adherence tracking feeding periodic image refresh

**Phase 4 (Family layer polish — 2–3 weeks):**
- Household dashboard view
- Sharing/privacy settings between adult members
- Dependent-to-adult consent handoff flow

Total rough estimate: **13–19 weeks** to a usable MVP with a small (2–4 engineer) team, excluding clinical/legal review cycles, which should run in parallel rather than after.

---

## 9. Open Questions for You

1. **Clinical oversight:** will there be any licensed clinician (even part-time/advisory) reviewing recommendation logic before launch, or is this pure AI-agent-only for MVP? This affects both legal exposure and user trust messaging.
2. **Image-gen vendor:** do you have a preferred provider, or should I scope a comparison (cost per generation, identity-preservation quality, content-policy fit) as a next step?
3. **Report format variability:** Indian diagnostic labs (Dr. Lal PathLabs, Metropolis, SRL, etc.) each format reports differently — do you want OCR/extraction scoped to a few major lab formats first, or built for arbitrary formats from day one? The former is far faster to get reliable.
4. **Pricing shape:** is the family plan a flat fee regardless of member count, or does it scale with number of profiles (relevant for extended families with elderly parents included)?

---

## 10. Success Metrics (MVP)

- % of uploaded reports successfully auto-extracted without manual correction (target: >70% for supported lab formats)
- Weekly active families (household logs in at least once) as core retention metric — not individual DAU
- % of recommendations marked "helpful" or acted upon by users (in-app feedback)
- Future Self re-generation rate (proxy for whether the commitment/adherence loop is actually driving return visits)
