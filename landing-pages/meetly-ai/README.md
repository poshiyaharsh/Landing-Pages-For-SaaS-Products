# 🤖 Meetly AI — SaaS Landing Page

> **Every meeting. Remembered. Organized. Actionable.**

Meetly AI is a portfolio-grade, production-ready AI SaaS landing page built for an autonomous meeting intelligence platform. It automatically captures conversations, understands nuanced context, synthesizes executive summaries, and transforms verbal commitments into organized tasks.

Built in accordance with the repository's **[UI/UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)** design intelligence standard.

---

## 🌟 Highlights & Features

- **Interactive Meeting Visualizer**:
  - Live transformation pipeline: `TRANSCRIPT → AI REASONING → EXECUTIVE SUMMARY → ACTION ITEMS`.
  - Realistic multi-speaker conversation with acoustic voiceprint diarization.
  - Interactive task completion with celebratory feedback.
- **Problem & Solution Comparison**:
  - Direct side-by-side contrast between messy, fragmented notes vs. structured Meetly workspaces.
- **5 Core Feature Deep-Dives**:
  - Automatic Transcription (99.4% speech-to-text accuracy)
  - AI Meeting Summaries (Semantic synthesis in seconds)
  - Action-Item Extraction (Automated Linear/Jira ticket synchronization)
  - Speaker Identification (Acoustic voiceprint diarization & talk-time analytics)
  - Semantic Meeting Search (Interactive vector search simulator with audio timestamp jump)
- **3-Step Workflow Architecture**:
  - 01 Meet → 02 Understand → 03 Act
- **Interactive Simulator**:
  - "See Meetly think": live simulated AI reasoning across multiple real-world scenarios (Product Launch, Enterprise Sales Call, Engineering Architecture Review).
- **Ecosystem & Integrations**:
  - Mock integration showcases for Zoom, Google Meet, Microsoft Teams, Slack, Notion, Linear, Jira, and Google Calendar.
- **Role-Based Use Cases**:
  - Customized workflows for Product, Engineering, Sales, Marketing, and Leadership.
- **Transparent Pricing Model**:
  - Free, Pro (highlighted), and Team tiers with interactive Monthly/Annual billing toggle (20% discount).
- **Accessible Accordion FAQ**:
  - 7 comprehensive questions on transcription, privacy, search, and security.

---

## 🎨 Design System & Direction

- **Aesthetic**: Premium, intelligent, calm, professional, enterprise-grade dark & light hybrid.
- **Color System**:
  - Primary Dark: `#0F172A`
  - Secondary Dark: `#1E293B`
  - Primary Accent: `#6366F1` (Indigo)
  - AI Accent: `#8B5CF6` (Violet)
  - Success: `#10B981` (Emerald)
  - Background: `#F8FAFC` & `#FFFFFF`
  - Borders: `#E2E8F0` & `rgba(255, 255, 255, 0.1)`
- **Typography**:
  - Headings & Accents: Plus Jakarta Sans / Inter
  - Monospace Data & Timestamps: JetBrains Mono
- **Iconography**:
  - Pure SVG icons via `lucide-react` (zero emojis used for UI icons).
- **Accessibility**:
  - WCAG AA contrast compliance.
  - Visible focus rings for keyboard navigation.
  - `prefers-reduced-motion` compliance.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Visual Micro-Interactions**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
- **Styling**: Vanilla CSS with comprehensive CSS variable tokens and zero bloated UI libraries.

---

## 📁 Project Structure

```text
meetly-ai/
├── public/
│   └── favicon.svg           # Meetly AI soundwave + spark SVG icon
├── src/
│   ├── assets/               # Static assets & icons
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky glassmorphic navbar with mobile drawer
│   │   └── Footer.jsx        # Footer with status pill, sitemap & copyright
│   ├── data/
│   │   └── mockData.js       # Cohesive realistic transcripts, presets & plans
│   ├── sections/
│   │   ├── HeroSection.jsx           # Signature Transcript -> AI -> Action visualizer
│   │   ├── TrustSection.jsx          # Fictional partner badges & verification
│   │   ├── ProblemSection.jsx        # Pain points & messy vs organized comparison
│   │   ├── FeaturesSection.jsx       # 5 bento feature cards with interactive search
│   │   ├── FeatureShowcaseSection.jsx# Alternating deep-dives (recording & search)
│   │   ├── WorkflowSection.jsx       # 3-step Meet-Understand-Act workflow
│   │   ├── InteractiveDemoSection.jsx# "See Meetly think" interactive simulator
│   │   ├── IntegrationsSection.jsx   # Conferencing & productivity integration grid
│   │   ├── UseCasesSection.jsx       # Departmental workflow tabs
│   │   ├── TestimonialsSection.jsx   # Verified customer story cards
│   │   ├── PricingSection.jsx        # Free, Pro & Team with billing toggle
│   │   ├── FAQSection.jsx            # Smooth accordion component
│   │   └── CTASection.jsx            # Final conversion banner with waveform
│   ├── App.jsx               # Page orchestrator & back-to-top handler
│   ├── index.css             # UI/UX Pro Max design tokens & responsive utilities
│   └── main.jsx              # React application entry point
├── index.html                # SEO meta tags, OpenGraph & web fonts
├── package.json              # Project scripts & dependencies
├── vite.config.js            # Vite configuration
└── README.md                 # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (tested on Node 24)
- npm 9+

### 1. Installation

```bash
cd landing-pages/meetly-ai
npm install
```

### 2. Development Server

```bash
npm run dev
```

Open [http://localhost:5174](http://localhost:5174) in your browser.

### 3. Production Build

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 📸 Screenshots

*(Add production screenshots here)*

---

## ⚖️ Disclaimer

This project is a high-fidelity frontend portfolio concept and user experience demonstration. All testimonials, logos, integrations, and pricing models are fictional placeholders and not real commercial services.
