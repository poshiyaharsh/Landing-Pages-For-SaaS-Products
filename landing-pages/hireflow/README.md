# HireFlow — AI Recruitment

> **Find the right people, without the endless search.**

HireFlow is an AI-powered recruitment platform that helps companies discover, evaluate, organize, and hire the right candidates faster. Built as a modern, light-theme enterprise SaaS landing page, it features clean typography, purple-to-blue gradient accents, glassmorphic touches, and interactive product mockups.

Built in accordance with the repository's **[UI/UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)** design intelligence standard.

---

## Features

- **Interactive Hero Recruitment Dashboard**: Live candidate intelligence board with live search, status filtering (`All Candidates`, `Recommended`, `Interview Ready`, `New`), and floating AI match badges.
- **Social Proof & Metrics Row**: 4 core benchmarked metrics (4.8× Faster candidate screening, 72% Less manual review, 38% Shorter cycles, 94% Matching accuracy) with clear demo attribution.
- **Problem & Pain Point Visuals**: 3 visual problem breakdowns illustrating resume overload, keyword filtering traps, and cross-team scheduling gridlock.
- **5-Step Unified Workflow**: Connected pipeline timeline (`Applications → AI Screening → Candidate Matching → Interview → Hiring Decision`) with active stage automation highlight.
- **Flagship 5 Core Feature Modules**:
  1. *AI Resume Screening*: Semantic parsing interface surfacing verified skills (React, TypeScript, Node.js, AWS, PostgreSQL), experience, and 92% match score.
  2. *Candidate Matching*: Multi-criteria radar evaluating skills (98%), experience (92%), role fit (95%), and culture signals (89%).
  3. *Interview Scheduling*: Panel coordination calendar with one-click interview confirmation and automated calendar invites.
  4. *Candidate Pipeline*: Kanban recruitment board across 5 stages (`Applied`, `AI Screening`, `Shortlisted`, `Interview`, `Offer`).
  5. *AI Interview Insights*: Structured post-interview evaluation panel with competency benchmarks and AI recommendations.
- **Recruiting Copilot (AI Intelligence)**: Interactive purple-blue conversational UI with multi-query switcher and live candidate card previews.
- **Enterprise Candidate Profile Dossier**: Detailed candidate profile for Sarah Mitchell featuring skills tags, alignment metrics, and progressable hiring timeline.
- **Recruitment Analytics & Telemetry**: Executive dashboard featuring open roles, active candidate volume, interviews this week, candidate funnel, time-to-hire trend, and source distribution.
- **Ecosystem Integrations**: 8 native integration badges (`LinkedIn`, `Slack`, `Google Calendar`, `Microsoft Teams`, `Gmail`, `Outlook`, `Greenhouse`, `Workday`) with two-way sync indicators.
- **Trust & Governance**: 4 enterprise security cards (`Data Protection`, `Role-Based Access`, `Secure Infrastructure`, `Responsible AI`) with responsible AI human-in-the-loop disclaimer.
- **Demo Testimonials & Transparent Pricing**: 3 recruiter testimonials, Annual/Monthly billing toggle with 20% discount badge, and interactive modal dialogs for demo requests and auth.
- **Accessible Accordion FAQ**: 8 comprehensive questions covering resume parsing, calendar sync, collaboration, ATS integrations, and AI ethics.

---

## Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Bundler & Build Tool**: [Vite](https://vitejs.dev/)
- **Iconography**: [Lucide React](https://lucide.dev/) (SVG only, zero emoji icons)
- **Styling**: Vanilla CSS Design Tokens (Custom color scales, glassmorphism, responsive grid utilities)
- **Typography**: Google Fonts — Plus Jakarta Sans (Headings), Inter (Body)

---

## Getting Started

To install dependencies:

```bash
cd landing-pages/hireflow
npm install
```

---

## Development

To launch the local development server:

```bash
npm run dev
```

The application runs locally on `http://localhost:5173`.

---

## Build

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## Project Structure

```text
hireflow/
├── public/
│   └── favicon.svg               # Minimal abstract hiring flow logo
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Sticky blurred navbar with mobile drawer & CTA triggers
│   │   ├── Footer.jsx            # Product links, solutions, legal & social icons
│   │   ├── DemoModal.jsx         # Interactive demo booking / trial onboarding modal
│   │   └── AuthModal.jsx         # Recruiter sign-in and registration modal
│   ├── data/
│   │   └── mockData.js           # Candidate records, metrics, pricing, FAQs, and integrations
│   ├── sections/
│   │   ├── HeroSection.jsx               # Hero with interactive dashboard & floating AI badges
│   │   ├── MetricsSection.jsx            # 4 benchmarked metric cards with demo note
│   │   ├── ProblemSection.jsx            # 3 visual problem cards (stack, mismatch, calendar)
│   │   ├── WorkflowSection.jsx           # 5-step unified hiring pipeline timeline
│   │   ├── FeatureSection.jsx            # 5 flagship interactive feature modules
│   │   ├── AIIntelligenceSection.jsx     # AI Copilot conversational assistant interface
│   │   ├── CandidateProfileSection.jsx   # Candidate dossier with skills & timeline
│   │   ├── AnalyticsSection.jsx          # Pipeline telemetry & funnel charts
│   │   ├── HowItWorksSection.jsx         # Connected 4-step onboarding timeline
│   │   ├── IntegrationsSection.jsx       # 8 tools ecosystem grid
│   │   ├── SecuritySection.jsx           # Enterprise governance & responsible AI notice
│   │   ├── TestimonialsSection.jsx       # Recruiter testimonial cards
│   │   ├── PricingSection.jsx            # Starter, Growth & Enterprise with billing toggle
│   │   ├── FAQSection.jsx                # Interactive 8-question accordion
│   │   └── CTASection.jsx                # High-impact conversion banner with floating badges
│   ├── App.jsx                   # Main layout and global modal manager
│   ├── index.css                 # Enterprise SaaS tokens, animations & responsive rules
│   └── main.jsx                  # Application entry point
├── index.html                    # SEO tags, OpenGraph, Twitter card metadata
├── package.json
└── vite.config.js
```

---

## Quality & Accessibility Standards

- **Responsive Design**: Tested and optimized across 1440px, 1280px, 1024px, 768px, 430px, 390px, and 375px viewports.
- **Accessibility**: Semantic HTML5 landmark structure, `aria-expanded` states on accordions and mobile drawers, high-contrast text ratios, and `prefers-reduced-motion` fallbacks.
- **Design Purity**: No generic robot graphics or template patterns; real candidate and recruiter interfaces serve as the primary visual foundation.
