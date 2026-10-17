# PrivacyX — Simplified Privacy Management

> **Tagline:** Privacy management, simplified.  
> **Port:** `5203`  
> **Visual Direction:** Minimal security and privacy operations, refined neutral slate (`#0B0F17`), calm sage/teal accents (`#0D9488`, `#14B8A6`), precise status indicators, Article 30 RoPA catalog, and transparent governance workflows.

---

## 1. Product Overview

PrivacyX provides privacy operations management, subject request (DSAR/deletion) orchestration, and automated consent governance. Designed for Data Protection Officers (DPOs), legal counsels, and engineering teams, it replaces chaotic email threads with a transparent, auditable privacy fulfillment workflow.

---

## 2. UI UX Pro Max Design System Reference

- **Design System Location:** `design-system/privacyx/MASTER.md`
- **Archetype:** Minimal Security / Data Governance Workspace
- **Color Palette:**
  - Base Slate: `#0B0F17`
  - Elevated Surface: `#111827` / `#172236`
  - Primary Accent (Teal / Sage): `#0D9488` / `#14B8A6`
  - Status Indicators: Emerald (`#10B981`), Amber (`#F59E0B`), Cyan (`#06B6D4`)
- **Typography:** Inter with monospace metadata and status tags.

---

## 3. Implemented Capabilities & Demos

1. **Interactive Privacy Operations Console (`#demo`):**
   - **Request Type Filter:** Filter across All, DSAR Access, Right to Erasure / Deletion, Consent Opt-Out, and Portability.
   - **Status Filtering:** Filter by All, Pending Verification, In Progress, and Completed.
   - **Interactive Subject Request Inspector:** Inspect requester identity, affected data categories, assigned team, and remaining statutory days.
   - **Status Transition Controls:** Update fulfillment states live (Pending → In Progress → Completed) with immediate toast notification feedback.
   - **Statutory Compliance Checklist:** Interactive checkboxes for annual Article 30 RoPA reviews, CCPA footer verification, and vendor DPAs.
   - **Synthetic Records Notice:** Transparent disclaimer highlighting simulated demonstration data.
2. **Operational Capabilities (`#features`):** 6 key pillars including Request Intake, Consent Hub, RoPA Inventory, Policy Reviews, Role Permissions, and Audit Receipts.
3. **Fulfillment Lifecycle (`#workflow`):** 5-step operational flow (Receive Request → Authenticate Identity → Assign Downstream Tasks → Execute Operations → Deliver Receipt).
4. **Article 30 RoPA Register (`#inventory`):** Data category inventory table mapping systems of record, permitted purposes, and statutory retention windows.
5. **Operational Privacy Principles (`#principles`):** Data Minimization, Explicit Consent, Traceable Audit Trails, and Controlled Access Governance.
6. **Predictable Operations Pricing (`#pricing`):** Starter ($240/mo), Professional ($580/mo), Enterprise (Custom) with annual discount toggle.
7. **Operational Clarity FAQ (`#faq`):** 6 accordions answering legal advice boundaries, identity challenge tokens, multi-system deletion, and GPC signals.

---

## 4. Run Locally

```bash
cd "landing-pages/privacyx"
npm install
npm run dev
```

Server runs on: [http://localhost:5203](http://localhost:5203)

## 5. Production Build

```bash
npm run build
```
