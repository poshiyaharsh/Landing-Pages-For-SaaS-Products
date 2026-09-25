# FlowPilot

AI-powered project management SaaS landing page.

> **Tagline:** Autonomous Project Intelligence & Sprint Workflow Engine  
> **Category:** B2B AI SaaS / Developer Tools / Productivity  
> **Status:** Completed  

---

## Overview

FlowPilot helps high-velocity engineering and product teams plan complex projects, automate sprint backlog grooming, forecast critical path bottlenecks, and communicate progress using autonomous AI workflows. By integrating directly with GitHub, GitLab, Jira, and Slack, FlowPilot eliminates the need for manual status meetings and spreadsheets.

---

## Features

- **AI Task Planning & Auto-Decomposition**: Translates high-level product briefs and user stories into structured sprints, prioritized tickets, and complexity points.
- **Smart Project Timelines & Critical Path**: Real-time Monte Carlo schedule forecasting that flags cross-team blockers up to 14 days before deadlines slip.
- **Contextual Team Collaboration**: Two-way git synchronizer that updates tickets and moves Kanban columns from commit messages and PR merges.
- **AI Progress Summaries & Velocity Audits**: Automated morning executive digests that synthesize async commits and velocity trends in under 2 minutes.
- **Automated Status Reports & Stakeholder Decks**: One-click generation of board-ready PDF progress decks and weekly stakeholder emails.
- **Interactive AI Planner Simulation**: Live playground demonstrating real-time task decomposition and critical path mapping across mobile, cloud, and AI engineering archetypes.
- **Transparent Tiered Pricing**: Interactive monthly/annual billing calculator with 20% annual discount savings.
- **Interactive Technical FAQ**: Keyboard-accessible accordion detailing security architecture, SOC2 Type II compliance, and zero-code retention guarantees.

---

## Design System & Methodology

Designed strictly adhering to the **UI/UX Pro Max** design methodology:

- **Style ID**: Motion-Driven Futuristic Dark Mode (OLED-friendly)
- **Palette**:
  - Base Deep Navy: `#060913`
  - Elevated Surface: `#0A0F1D` & `#111A30`
  - Electric Cyan Primary: `#38BDF8` (`rgba(56, 189, 248, 0.25)` glow)
  - Futuristic Indigo Accent: `#6366F1`
  - Status Emerald: `#10B981`
  - High-Contrast Text: `#F8FAFC` (7:1+ contrast ratio)
- **Typography Pairing**:
  - Display / Headings: `Space Grotesk` (Innovative, tech-forward sans)
  - Body & UI: `DM Sans` (Clean, highly legible grotesque)
  - Metrics & Monospace: `JetBrains Mono`
- **Micro-Interactions**: Ambient background grid overlay, glowing top card beams, pulsing radar status dots, and celebratory confetti upon trial submissions.
- **Accessibility & Performance**:
  - Full semantic HTML structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
  - Keyboard accessible tab indexing and focus rings
  - Full support for `prefers-reduced-motion`

---

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 6
- **Language**: JavaScript (ES Modules)
- **Styling**: Vanilla CSS (Custom tokens & variables, zero bulky utility runtime)
- **Icons**: Lucide React
- **Confetti**: Canvas Confetti

---

## Development

```bash
# Navigate to the project directory
cd landing-pages/flowpilot

# Install project dependencies
npm install

# Start the Vite local development server
npm run dev
```

---

## Build

```bash
# Compile and bundle for production
npm run build
```

---

## Preview

```bash
# Preview the production build locally
npm run preview
```

---

## Project Structure

```text
flowpilot/
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── design-system/
│   └── flowpilot/
│       └── MASTER.md
├── public/
└── src/
    ├── assets/
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   ├── Button.jsx
    │   ├── Badge.jsx
    │   └── Card.jsx
    ├── sections/
    │   ├── HeroSection.jsx
    │   ├── SocialProofSection.jsx
    │   ├── FeaturesSection.jsx
    │   ├── InteractiveDemoSection.jsx
    │   ├── WorkflowSection.jsx
    │   ├── TestimonialsSection.jsx
    │   ├── PricingSection.jsx
    │   ├── FAQSection.jsx
    │   └── CTASection.jsx
    ├── pages/
    │   └── Home.jsx
    ├── data/
    │   └── flowpilotData.js
    ├── hooks/
    │   └── useScrollReveal.js
    ├── utils/
    │   └── formatters.js
    ├── App.jsx
    ├── main.jsx
    └── index.css
```

---

## Status

**Completed** — Production ready, responsive across all breakpoints (320px–1920px), and independently runnable.
