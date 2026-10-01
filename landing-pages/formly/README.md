# Formly

Premium No-Code Form Builder SaaS landing page.

> **Tagline:** Build beautiful forms. Without writing code.  
> **Category:** No-Code SaaS / Developer Tools / Productivity & Growth  
> **Status:** Completed  

---

## Overview

**Formly** is a playful, modern, and production-ready SaaS landing page for an advanced no-code form builder. Formly empowers marketing coordinators, product managers, growth designers, and indie hackers to create high-converting, personalized forms with drag-and-drop simplicity, intelligent conditional logic branching, deep telemetry analytics, and 150+ seamless ecosystem integrations.

---

## Features

- **Hero Builder Canvas with Organic Floating Elements**:
  - Live Formly Studio preview with 3-column architecture (Component Sidebar, Canvas, and Properties Panel).
  - Floating components with depth, soft shadows, and subtle floating animations (`+ Add Question`, `If → Company Size = 50+`, `1,284 Responses`, `+12.8% Conversion`, `✓ Form Published`).
  - Interactive "Publish" action triggering celebratory confetti.
- **Social Proof & Ecosystem Numbers**:
  - Crisp SVG geometric logo placeholders (BoltFlow, NovaSphere, VertexLabs, HyperScale, LuminaTech, AcmeCloud).
  - 4 key metrics: `10,000+` forms created, `2M+` responses collected, `99.9%` guaranteed uptime, `150+` ecosystem integrations.
- **5 Premium Feature Cards**:
  - **Drag & Drop Builder**: Visual canvas engine with 30+ interactive field types.
  - **Conditional Logic**: Dynamic branching and intelligent skip rules (+38% completion).
  - **Beautiful Templates**: 80+ curated themes across departments.
  - **Smart Analytics**: Real-time response velocity, drop-off analysis, and telemetry.
  - **Powerful Integrations**: Direct zero-code data pipelines into Slack, Google Sheets, Notion, HubSpot, and webhooks.
- **Interactive Product Showcase (`From blank canvas to beautiful form.`)**:
  - Desktop vs Mobile device preview switcher.
  - Functional form simulator with live submission counter and instant response feedback.
- **Rich Templates Library (`Start with a template. Make it yours.`)**:
  - Customer Feedback, Event Registration, Lead Generation, Job Application, Product Survey, and Contact Form.
  - Category filter pills with miniature form card previews and interactive modal triggers.
- **Dynamic Conditional Logic Visualizer (`Make every form feel personal.`)**:
  - Interactive flow branching: Click between `Design`, `Development`, and `Growth & Marketing` to watch animated paths light up and questions reconfigure.
- **Deep Analytics & Drop-off Dashboard (`Turn every response into insight.`)**:
  - Time range filter (7d, 30d, 90d) with response volume bars.
  - Device distribution (Mobile 58%, Desktop 36%, Tablet 6%).
  - Field-by-field drop-off funnel analysis.
- **Integrations Hub (`Connect Formly to your entire workflow.`)**:
  - Real-time search filter across Slack, Google Sheets, Notion, HubSpot, Zapier, Webhooks, Email, and Calendars with connection state toggles.
- **Simple 3-Step Flow (`How Formly Works`)**:
  - `01 — Choose`, `02 — Build`, `03 — Publish` with visual component snippets.
- **Customer Testimonials**:
  - 3 authentic cards highlighting ease of use, design fidelity, and no-code operational agility.
- **Transparent Tiered Pricing**:
  - Free, Pro (highlighted as Most Popular with gradient ring), and Business tiers.
  - Monthly vs Annual billing toggle with 25% discount calculator.
- **High-Impact Final CTA & Responsive Footer**:
  - Vibrant gradient lighting, floating form components, trust badges, comprehensive navigation links, and operational status.

---

## Design System & Methodology

Formly is engineered adhering strictly to the **UI/UX Pro Max** design methodology:

- **Style ID**: Playful Modern SaaS Glassmorphism
- **Color Palette**:
  - Clean Light Background: `#FAFAFD`
  - Primary Indigo/Violet: `#6366F1` / `#4F46E5`
  - Vivid Pink: `#EC4899` / `#DB2777`
  - Electric Sky Blue: `#0EA5E9`
  - Fresh Mint / Emerald: `#10B981`
  - Playful Amber / Gold: `#F59E0B`
  - Deep Slate Neutrals: `#0F172A`, `#1E293B`, `#64748B`
- **Typography Pairing**:
  - Brand & Display: `Outfit` (punchy, geometric, modern SaaS feel)
  - UI & Body: `Plus Jakarta Sans` (approachable, friendly, readable)
- **Accessibility & Motion**:
  - Semantic HTML5 structure
  - Visible focus states and keyboard navigation
  - Strict compliance with `prefers-reduced-motion`
  - 100% Lucide SVG icons (no emojis used as UI icons)

---

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 6
- **Language**: JavaScript (ES Modules)
- **Styling**: Vanilla CSS (Custom Design Tokens, zero runtime bloat)
- **Icons**: Lucide React
- **Confetti**: Canvas Confetti

---

## Development

```bash
# Navigate to the project directory
cd landing-pages/formly

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
landing-pages/formly/
├── design-system/
│   └── formly/
│       └── MASTER.md
├── dist/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Badge.jsx
│   │   ├── Button.jsx
│   │   ├── Footer.jsx
│   │   ├── Logo.jsx
│   │   ├── Modal.jsx
│   │   └── Navbar.jsx
│   ├── data/
│   │   ├── analyticsData.js
│   │   ├── featuresData.js
│   │   ├── integrationsData.js
│   │   ├── pricingData.js
│   │   ├── templatesData.js
│   │   └── testimonialsData.js
│   ├── sections/
│   │   ├── AnalyticsSection.jsx
│   │   ├── ConditionalLogicSection.jsx
│   │   ├── CtaSection.jsx
│   │   ├── FeaturesSection.jsx
│   │   ├── HeroSection.jsx
│   │   ├── HowItWorksSection.jsx
│   │   ├── IntegrationsSection.jsx
│   │   ├── InteractiveShowcaseSection.jsx
│   │   ├── PricingSection.jsx
│   │   ├── SocialProofSection.jsx
│   │   ├── TemplatesSection.jsx
│   │   └── TestimonialsSection.jsx
│   ├── utils/
│   │   └── confetti.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── README.md
└── vite.config.js
```
