# CreatorHub — Everything Creators Need to Grow

> **Tagline:** Everything creators need to grow.  
> **Port:** `5200`  
> **Visual Direction:** Vibrant creator economy, warm pink/violet/fuchsia gradient (`#EC4899`, `#8B5CF6`, `#F43F5E`), rich content calendar, creator profile preview, audience-growth visual, monetization overview, campaign progress.

---

## 1. Product Overview

CreatorHub is the all-in-one studio operating system for full-time creators and high-output media entrepreneurs. It consolidates multi-platform content scheduling (YouTube, TikTok, Substack, podcasts, Instagram), cross-network audience metrics, and brand sponsorship CRM into one workspace.

---

## 2. UI UX Pro Max Design System Reference

- **Design System Location:** `design-system/creatorhub/MASTER.md`
- **Archetype:** Vibrant Creator Economy / Editorial Media Workspace
- **Color Palette:**
  - Dark Studio Base: `#0B0A10`
  - Elevated Card: `#140F22` / `#1B142F`
  - Primary Accent (Pink / Rose): `#EC4899` / `#F43F5E`
  - Secondary Accent (Violet): `#8B5CF6`
  - Monetization Success (Emerald): `#10B981`
- **Typography:** Plus Jakarta Sans & Inter with expressive badges and tags.

---

## 3. Implemented Capabilities & Demos

1. **Interactive Creator Studio (`#studio`):**
   - **View Switcher:** Switch between drag-and-drop Calendar grid and streamlined List view.
   - **Platform Filtering:** Filter across All Channels, YouTube, TikTok, Newsletter, Podcast, and Instagram.
   - **Interactive Content Inspector:** Select any card to inspect estimated views, sponsor payout, and scheduled release date.
   - **Editable Content Titles & Status Transitions:** Update titles live and transition statuses between Draft, Scheduled, and Published.
   - **One-Click Caption Copy:** Copy complete social copy and hashtags directly to the system clipboard.
   - **Deliverable Checklist:** Interactive checkboxes for active brand deals (Lumina Audio, Figma Community, Stripe).
   - **Local State Persistence & Reset:** Client-side memory demo state with explicit simulation disclosures.
2. **Studio Capabilities (`#features`):** 6 core pillars including Content Calendar, Audience Intelligence, Brand CRM, and Creator Asset Vault.
3. **The Create-to-Grow Lifecycle (`#workflow`):** 5-step operational pipeline (Plan → Script → Distribute → Measure → Monetize).
4. **Tailored Creator Formats (`#categories`):** Video creators, writers, podcasters, educators, streamers, and multi-platform hybrids.
5. **Brand Collaboration Showcase (`#collaborations`):** Real-time deliverables, contract statuses, and automated rate card logic.
6. **Predictable Creator Pricing (`#pricing`):** Solo ($19/mo), Creator Pro ($49/mo), Studio ($129/mo) with annual discount toggle.
7. **Creator FAQs (`#faq`):** 6 accordions answering API sync, publishing permissions, and editor collaboration.

---

## 4. Run Locally

```bash
cd "landing-pages/creatorhub"
npm install
npm run dev
```

Server runs on: [http://localhost:5200](http://localhost:5200)

## 5. Production Build

```bash
npm run build
```
