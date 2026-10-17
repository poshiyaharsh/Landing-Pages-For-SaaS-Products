# TalentOS — Build Teams Around Potential

> **Tagline:** Build teams around potential.  
> **Port:** `5201`  
> **Visual Direction:** Human + AI talent intelligence, soft violet (`#7C3AED`) + deep indigo slate + teal (`#0D9488`), humane initials-based candidate profile cards, structured competency rubrics, and explainable AI assistance.

---

## 1. Product Overview

TalentOS brings candidate skills, structured evaluations, and collaborative debriefs together for thoughtful, human-led hiring decisions. It equips hiring teams with objective competency matrices, structured interview rubrics, and explainable evidence summaries without black-box automated rankings.

---

## 2. UI UX Pro Max Design System Reference

- **Design System Location:** `design-system/talentos/MASTER.md`
- **Archetype:** Human-Centered Talent Intelligence / Ethical Assessment Platform
- **Color Palette:**
  - Base Slate: `#0B0F19`
  - Elevated Surface: `#121A2D` / `#17223B`
  - Primary Accent (Soft Violet): `#7C3AED`
  - Secondary Accent (Teal): `#0D9488`
  - Indigo Accent: `#6366F1`
- **Typography:** Inter with clean tabular metrics and humaneInitials badge styling.

---

## 3. Implemented Capabilities & Demos

1. **Interactive Evaluation Workspace (`#demo`):**
   - **Role Pipeline Switcher:** Toggle between Staff Systems Architect, Lead Product Designer, and Senior Growth Engineer.
   - **Stage Filters:** Filter candidates across All, Screen, Technical, Structured, and Offer.
   - **Candidate Selection & Profile Inspector:** Select any candidate to review their verified competencies, experience, and current company.
   - **Objective Competency Rubric:** Visual proficiency matching bars with concrete project evidence.
   - **Human Reviewer Debriefs:** Direct quotes and scores from hiring managers and peer engineers.
   - **Explainable AI Assistant Panel:** Advisory-only evidence summaries and suggested structured interview probes.
   - **Stage Transition Controls:** Move candidates between stages with live feedback toast notifications.
2. **Platform Capabilities (`#features`):** 6 key pillars including Role Profiles, Pipeline Management, Structured Rubrics, Collaborative Consensus, Skills-Gap Mapping, and Explainable AI.
3. **Human + AI Workflow (`#workflow`):** 5-stage framework (Define Requirements → Review Evidence → Structured Interviews → Compare Criteria → Human-Led Decision).
4. **Internal Talent Mobility (`#growth`):** Upskilling trajectories, mentorship pairings, and internal project staffing.
5. **ATS & HRIS Ecosystem (`#integrations`):** Two-way synchronization with Greenhouse, Lever, Workday, Ashby, Slack, and BambooHR.
6. **Transparent Pricing (`#pricing`):** Recruiter ($180/mo), Growth ($450/mo), Enterprise (Custom) with annual discount toggle.
7. **Fairness & Privacy FAQs (`#faq`):** 6 accordions answering bias prevention, EEOC adverse impact standards, and GDPR compliance.

---

## 4. Run Locally

```bash
cd "landing-pages/talentos"
npm install
npm run dev
```

Server runs on: [http://localhost:5201](http://localhost:5201)

## 5. Production Build

```bash
npm run build
```
