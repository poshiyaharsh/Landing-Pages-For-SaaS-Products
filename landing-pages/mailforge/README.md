# MailForge

> **Create emails that actually get opened.**

MailForge is an AI-powered email marketing SaaS landing page built for modern growth teams, founders, and lifecycle marketers. It helps teams create, design, personalize, test, and analyze high-performing email campaigns in a unified workspace.

Built in accordance with the repository's **[UI/UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)** design intelligence standard.

---

## Features

- **AI campaign generation**: Generate high-converting campaign structures, subject lines, body copy, and CTAs scored against millions of benchmarked emails.
- **Drag-and-drop email builder**: Visual block-based editor with real-time responsive desktop and mobile previews, customizable styles, and zero Outlook rendering headaches.
- **Audience segmentation**: Behavioral dynamic funnels (Opened Email → Clicked CTA → High Intent) and predictive engagement scoring.
- **A/B testing**: Autonomous 20/80 split testing suite with statistical confidence metrics and automated winner dispatch.
- **Campaign analytics**: Real-time telemetry dashboard with rolling engagement timelines, device breakdown, and historical campaign comparisons.
- **Workflow automation**: 6-step lifecycle architecture (`Describe → Generate → Customize → Audience → Test → Measure`).
- **Interactive UI**: Working mobile navigation, view mode toggles, subject line selectors, pricing cycle switches, and accessible FAQ accordion.

---

## Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler & Build Tool**: [Vite 6](https://vitejs.dev/)
- **Iconography**: [Lucide React](https://lucide.dev/) (SVG only, zero emoji icons)
- **Visual Feedback**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
- **Styling**: Vanilla CSS Design Tokens (Custom color scales, glassmorphism, responsive grid utilities)
- **Typography**: Google Fonts — Plus Jakarta Sans (Headings), Inter (Body), JetBrains Mono (Telemetry/Metrics)

---

## Getting Started

To install dependencies:

```bash
cd landing-pages/mailforge
npm install
```

---

## Development

To launch the local development server:

```bash
npm run dev
```

The application runs locally on `http://localhost:5176`.

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
mailforge/
├── public/
│   └── favicon.svg               # Envelope + AI sparkle logo
├── src/
│   ├── components/
│   │   ├── AnnouncementBar.jsx   # Top release notification banner
│   │   ├── Navbar.jsx            # Sticky blurred navbar with mobile menu
│   │   └── Footer.jsx            # Product links, solutions, legal & social icons
│   ├── data/
│   │   └── mockData.js           # Campaign presets, builder blocks, segments, analytics
│   ├── sections/
│   │   ├── HeroSection.jsx               # Hero with interactive dashboard & email preview
│   │   ├── TrustSection.jsx              # Social proof partner logos & 4-metric row
│   │   ├── ProblemSection.jsx            # 4 pain points & before/after comparison
│   │   ├── FeatureSection.jsx            # 5 deep-dive core feature modules
│   │   ├── WorkflowSection.jsx           # 6-step AI workflow pipeline
│   │   ├── EmailBuilderShowcase.jsx      # Full-width builder showcase with mobile preview
│   │   ├── AnalyticsShowcase.jsx         # Campaign performance telemetry dashboard
│   │   ├── TestimonialsSection.jsx       # Verified founder feedback cards
│   │   ├── PricingSection.jsx            # Starter, Growth & Scale with billing toggle
│   │   ├── FAQSection.jsx                # Accordion FAQ component
│   │   └── CTASection.jsx                # High-impact final conversion banner
│   ├── App.jsx                   # Main page layout & floating back-to-top
│   ├── index.css                 # Design tokens, variables & typography
│   └── main.jsx                  # Application entry point
├── index.html                    # SEO metadata, Open Graph tags & web fonts
├── package.json                  # Dependencies & scripts
├── vite.config.js                # Vite configuration
└── README.md                     # Project documentation
```

---

## Design

MailForge uses a bright, energetic SaaS marketing aesthetic with animated email previews and AI-focused product visuals:
- Strategic gradients (Electric Blue `#2563EB`, Purple `#7C3AED`, Magenta `#EC4899`, Cyan `#06B6D4`)
- Crisp white/light canvas (`#FAFBFC`) paired with deep slate text (`#0F172A`)
- High-contrast dark preview windows for dashboard and email builder representations
- WCAG AA contrast compliance and `prefers-reduced-motion` safety

---

## Notes

This is a frontend portfolio/demo project.
No real email delivery, authentication, payment processing, or production campaign infrastructure is implemented.
