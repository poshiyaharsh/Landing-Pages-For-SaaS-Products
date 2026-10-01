# Landing Pages for SaaS Products

> A curated collection of portfolio-grade, production-ready landing pages built for SaaS products, high-velocity startups, digital products, brands, and experimental web concepts.

[![Design Standard: UI/UX Pro Max](https://img.shields.io/badge/Design%20Standard-UI%2FUX%20Pro%20Max-38BDF8?style=flat-square)](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](./LICENSE)

---

## About the Collection

**Landing Pages for SaaS Products** is a professional multi-project repository where every landing page is organized as an independent, fully functional application. Rather than generic templates, each project has its own distinctive brand identity, custom design system, tailored typography pairing, and rich interactive components.

---

## Design Standard: UI/UX Pro Max

All landing pages in this repository are engineered using the **[UI/UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)** design methodology.

UI/UX Pro Max provides an empirical design intelligence framework covering:
- Cohesive, product-specific color palettes and semantic tokens
- Curated Google Fonts typography pairings
- Bento grid and hero-centric layout hierarchies
- Interaction design and motion profiles
- Contrast compliance (WCAG AA/AAA) and keyboard accessibility
- Pre-delivery quality checklists

The skill is maintained centrally in `.agents/skills/ui-ux-pro-max/` as a shared development capability.

---

## Projects Overview

| Project | Category | Technology | Highlights | Status |
|---|---|---|---|---|
| **[Aurelia Coffee](./landing-pages/aurelia-coffee)** | Specialty Coffee / Brand Experience | React + TypeScript + Vite | Interactive drink customizer, live cart & checkout drawer, brew rituals, and time-of-day moment guides. | **Completed** |
| **[FlowPilot](./landing-pages/flowpilot)** | AI Project Management / B2B SaaS | React + JavaScript + Vite | AI task auto-decomposition, dynamic critical path forecasting, live interactive planner simulation, and stakeholder reports. | **Completed** |
| **[Meetly AI](./landing-pages/meetly-ai)** | AI Meeting Assistant / SaaS | React + JavaScript + Vite | Live transcript-to-action visualizer, speaker diarization, automated summaries, vector search, and interactive simulator. | **Completed** |
| **[InvoiceX](./landing-pages/invoicex)** | Smart Invoicing / Financial SaaS | React + JavaScript + Vite | Interactive fintech cashflow dashboard, live invoice calculation, expense categorization, and multi-period revenue analytics. | **Completed** |
| **[MailForge](./landing-pages/mailforge)** | AI Email Marketing / SaaS | React + JavaScript + Vite | AI campaign generation, visual email builder, audience segmentation, autonomous A/B testing, and real-time telemetry. | **Completed** |
| **[SupportIQ](./landing-pages/supportiq)** | AI Customer Support / SaaS | React + JavaScript + Vite | AI conversation understanding, shared omnichannel inbox, intelligent ticketing, connected knowledge, and customer sentiment. | **Completed** |
| **[DataPulse](./landing-pages/datapulse)** | Business Analytics / SaaS | React + JavaScript + Vite | Real-time dashboards, AI insights, KPI monitoring, custom reports, data integrations, and futuristic analytics command center. | **Completed** |
| **[HireFlow](./landing-pages/hireflow)** | AI Recruitment / Hiring Intelligence | React + JavaScript + Vite | Interactive candidate intelligence dashboard, live resume analysis, Kanban pipeline, panel scheduling, and AI copilot. | **Completed** |
| **[Formly](./landing-pages/formly)** | No-Code Form Builder / SaaS | React + JavaScript + Vite | Interactive drag-and-drop builder canvas, dynamic conditional logic visualizer, deep telemetry analytics, and 80+ templates. | **Completed** |
| **[LaunchKit](./landing-pages/launchkit)** | Startup Growth Platform / SaaS | React + Tailwind + Vite | High-energy YC-grade startup launchpad, interactive lifecycle timeline, telemetry command center, and SEO audit suite. | **Completed** |
| **Future Projects** | Developer Tools, Fintech & HealthTech | React + Vite | Additional domain-specific SaaS landing pages designed under UI/UX Pro Max standards. | *Planned* |

---

## Repository Structure

```text
Landing-Pages-For-SaaS-Products/
│
├── .agents/skills/ui-ux-pro-max/     # Shared UI/UX Pro Max design intelligence
├── .cursor/rules/                    # Cursor IDE development rules
├── docs/                             # Architecture, contributing & design system guides
│   ├── architecture.md
│   ├── contributing.md
│   └── design-system.md
│
├── landing-pages/                    # Independent project directory
│   ├── aurelia-coffee/               # Independent React + Vite project
│   │   ├── README.md
│   │   ├── package.json
│   │   ├── vite.config.ts
│   │   ├── index.html
│   │   ├── public/
│   │   └── src/
│   │
│   ├── flowpilot/                    # Independent React + Vite project
│   │   ├── README.md
│   │   ├── package.json
│   │   ├── vite.config.js
│   │   ├── index.html
│   │   ├── public/
│   │   └── src/
│   │
│   ├── meetly-ai/                    # Independent React + Vite project
│   │   ├── README.md
│   │   ├── package.json
│   │   ├── vite.config.js
│   │   ├── index.html
│   │   ├── public/
│   │   └── src/
│   │
│   ├── invoicex/                     # Independent React + Vite project
│   │   ├── README.md
│   │   ├── package.json
│   │   ├── vite.config.js
│   │   ├── index.html
│   │   ├── public/
│   │   └── src/
│   │
│   ├── mailforge/                    # Independent React + Vite project
│   │   ├── README.md
│   │   ├── package.json
│   │   ├── vite.config.js
│   │   ├── index.html
│   │   ├── public/
│   │   └── src/
│   │
│   ├── supportiq/                    # Independent React + Vite project
│   │   ├── README.md
│   │   ├── package.json
│   │   ├── vite.config.js
│   │   ├── index.html
│   │   ├── public/
│   │   └── src/
│   │
│   ├── datapulse/                    # Independent React + Vite project
│   │   ├── README.md
│   │   ├── package.json
│   │   ├── vite.config.js
│   │   ├── index.html
│   │   ├── public/
│   │   └── src/
│   │
│   ├── hireflow/                     # Independent React + Vite project
│   │   ├── README.md
│   │   ├── package.json
│   │   ├── vite.config.js
│   │   ├── index.html
│   │   ├── public/
│   │   └── src/
│   │
│   ├── formly/                       # Independent React + Vite project
│   │   ├── README.md
│   │   ├── package.json
│   │   ├── vite.config.js
│   │   ├── index.html
│   │   ├── public/
│   │   └── src/
│   │
│   ├── launchkit/                    # Independent React + Tailwind + Vite project
│   │   ├── README.md
│   │   ├── package.json
│   │   ├── vite.config.js
│   │   ├── tailwind.config.js
│   │   ├── index.html
│   │   ├── public/
│   │   └── src/
│   │
│   └── [future-project]/
│
├── .gitignore                        # Global Git ignore rules
├── CLAUDE.md                         # Claude Code environment instructions
├── LICENSE                           # MIT License
└── README.md                         # Repository documentation
```

---

## Featured Projects

### ✉️ MailForge — AI Email Marketing

**AI Email Marketing Platform**

> Create emails that actually get opened.

MailForge is a modern AI-powered email marketing SaaS platform that helps growth teams create, design, personalize, test, and analyze high-performing email campaigns.

#### Features

- AI campaign generation from a single prompt
- Drag-and-drop email builder with desktop & mobile previews
- Dynamic audience segmentation & behavioral funnels
- Autonomous A/B testing with statistical winner routing
- Real-time campaign performance & telemetry dashboard
- 6-step lifecycle workflow automation
- Premium marketing aesthetic & accessible responsive UI

### 🤖 Meetly AI

**AI Meeting Assistant**

> Every meeting. Remembered. Organized. Actionable.

Meetly AI is a premium AI SaaS landing page concept focused on meeting transcription, summaries, action-item extraction, speaker identification, and intelligent meeting search.

#### Features

- Automatic transcription
- AI meeting summaries
- Action-item extraction
- Speaker identification
- Meeting search
- Interactive AI meeting visualization
- Responsive design
- Premium SaaS UI

### 💳 InvoiceX

**Smart Invoicing SaaS**

> Get paid faster. Manage smarter.

InvoiceX brings invoicing, expenses, payments, clients, and revenue analytics into one unified, beautifully simple workspace.

#### Features

- Invoice generation with auto-calculating line items
- Expense tracking & visual categorization
- Real-time payment tracking & status pipeline
- Revenue analytics with 7D/30D/90D/12M comparative filtering
- Client directory & lifetime billing ledger
- Interactive fintech cashflow dashboard
- Premium fintech aesthetic with responsive design

### 🎯 HireFlow — AI Recruitment

**AI Recruitment & Hiring Intelligence**

> Find the right people, without the endless search.

HireFlow is an AI-powered recruitment platform that helps companies discover, evaluate, organize, and hire the right candidates faster with semantic resume screening, multidimensional matching, panel scheduling, and structured AI interview insights.

#### Features

- Interactive candidate intelligence dashboard with live search & status filters
- Flagship 5-module feature showcase (Screening, Matching, Scheduling, Pipeline, Insights)
- AI Copilot conversational assistant with natural language querying
- Detailed candidate profile dossier with skill tags & progressable timeline
- Executive hiring telemetry dashboard with candidate funnel & time-to-hire trends
- Connected 4-step onboarding timeline and 8 native ecosystem integrations
- Enterprise security, data protection, and responsible AI governance notice
- Transparent pricing with annual 20% discount switch & interactive modals

### ⚡ Formly — No-Code Form Builder

**No-Code Form Builder & Response Intelligence**

> Build beautiful forms. Without writing code.

Formly is a playful, modern, and production-ready SaaS landing page for an advanced no-code form builder that helps teams create high-converting forms with drag-and-drop simplicity, intelligent logic branching, real-time telemetry, and 150+ ecosystem integrations.

#### Features

- Interactive Formly Studio canvas with 3-column architecture (Elements, Canvas, Properties)
- Organic floating elements with depth and subtle rotation (`+ Add Question`, `If → Company Size = 50+`, `1,284 Responses`, `✓ Form Published`)
- Flagship 5-card feature showcase (Drag & Drop, Conditional Logic, Templates, Analytics, Integrations)
- Desktop and Mobile responsive preview simulator with live submissions counter and confetti celebration
- Rich filterable templates library with 6 domain-specific kits and interactive preview modals
- Dynamic conditional logic visualizer with interactive branching pathways
- Deep telemetry analytics dashboard with time-series charts, device breakdowns, and drop-off funnel
- Ecosystem hub with search and instant connection states for Slack, Sheets, Notion, HubSpot, and Webhooks
- 3-tier pricing plans with annual discount switch and interactive onboarding flow

### 🚀 LaunchKit — Startup Growth Platform

**All-In-One Startup Launch & Growth Command Center**

> Everything you need to launch your next big thing.

LaunchKit is a high-energy, ambitious SaaS platform built for founders and fast-moving teams to take ideas from concept to scaled growth with landing page builders, viral waitlist funnels, cookieless telemetry, pre-launch SEO audits, and collaborative launch playbooks.

#### Features

- High-impact editorial hero with oversized typography and floating command center browser window
- Problem/Solution split contrasting the old 12-tool sprawl ($365/mo) with LaunchKit's unified workspace
- 5 core launch capabilities (Landing Page Builder, Marketing Campaigns, Product Analytics, SEO Tools, Launch Checklist)
- Interactive 5-stage lifecycle timeline (Idea → Build → Validate → Launch → Grow) with real-time dashboard telemetry
- Linear 3-step execution flow (Build → Launch → Grow) with glowing gradient connectors
- 3 authentic founder testimonials from high-velocity startups
- 3-tier pricing (Starter $0, Growth $29, Scale $79) with annual 20% discount switch
- Smooth expandable FAQ accordion addressing founder concerns
- High-energy climax final CTA with deployment modal and confetti celebration

---

## Running a Project Locally

Every project inside `landing-pages/` is independently runnable. There is no root `package.json` required.

### 1. Run MailForge
```bash
# Navigate to MailForge
cd landing-pages/mailforge

# Install dependencies
npm install

# Start development server
npm run dev
```

### 2. Run InvoiceX
```bash
# Navigate to InvoiceX
cd landing-pages/invoicex

# Install dependencies
npm install

# Start development server
npm run dev
```

### 3. Run Meetly AI
```bash
# Navigate to Meetly AI
cd landing-pages/meetly-ai

# Install dependencies
npm install

# Start development server
npm run dev
```

### 4. Run FlowPilot
```bash
# Navigate to FlowPilot
cd landing-pages/flowpilot

# Install dependencies
npm install

# Start development server
npm run dev
```

### 5. Run SupportIQ
```bash
cd landing-pages/supportiq
npm install
npm run dev
```

### 6. Run Aurelia Coffee
```bash
# Navigate to Aurelia Coffee
cd landing-pages/aurelia-coffee

# Install dependencies
npm install

# Start development server
npm run dev
```

### 7. Run HireFlow
```bash
# Navigate to HireFlow
cd landing-pages/hireflow

# Install dependencies
npm install

# Start development server
npm run dev
```

### 8. Run Formly
```bash
# Navigate to Formly
cd landing-pages/formly

# Install dependencies
npm install

# Start development server
npm run dev
```

### 9. Run LaunchKit
```bash
# Navigate to LaunchKit
cd landing-pages/launchkit

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## Production Builds

Each project can be compiled and previewed independently:

```bash
# Build LaunchKit
cd landing-pages/launchkit
npm run build
npm run preview

# Build Formly
cd landing-pages/formly
npm run build
npm run preview

# Build HireFlow
cd landing-pages/hireflow
npm run build
npm run preview

# Build MailForge
cd landing-pages/mailforge
npm run build
npm run preview

# Build InvoiceX
cd landing-pages/invoicex
npm run build
npm run preview

# Build Meetly AI
cd landing-pages/meetly-ai
npm run build
npm run preview

# Build FlowPilot
cd landing-pages/flowpilot
npm run build
npm run preview

# Build SupportIQ
cd landing-pages/supportiq
npm run build
npm run preview

# Build Aurelia Coffee
cd landing-pages/aurelia-coffee
npm run build
npm run preview
```

---

## Core Design Principles

1. **Product-Focused UX**: Every interface element serves the specific utility and audience of the product.
2. **Visual Distinctiveness**: Individualized color schemes, typography, and motifs tailored to the industry.
3. **Flawless Responsiveness**: Tested across 320px, 375px, 768px, 1024px, 1440px, and 1920px viewports with zero horizontal overflow.
4. **Accessibility First**: Semantic HTML tags, visible `:focus-visible` rings, high contrast ratios, and `prefers-reduced-motion` compliance.
5. **Modern Interaction Design**: Purposeful micro-interactions, subtle glows, and responsive feedback without gratuitous animation.
6. **Zero Emojis as UI Icons**: Professional SVG iconography (via `lucide-react`) utilized throughout.
7. **Modular Component Architecture**: Reusable tokens, components, and sections with clean data separation.

---

## Documentation Links

- 🏛️ [Repository Architecture & Guidelines](./docs/architecture.md)
- 🎨 [Design System & Methodology](./docs/design-system.md)
- 🤝 [Contributing Guidelines & Git Conventions](./docs/contributing.md)

---

## License

This repository is licensed under the [MIT License](./LICENSE).
