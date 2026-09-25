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
│   └── [future-project]/
│
├── .gitignore                        # Global Git ignore rules
├── CLAUDE.md                         # Claude Code environment instructions
├── LICENSE                           # MIT License
└── README.md                         # Repository documentation
```

---

## Running a Project Locally

Every project inside `landing-pages/` is independently runnable. There is no root `package.json` required.

### 1. Run FlowPilot
```bash
# Navigate to FlowPilot
cd landing-pages/flowpilot

# Install dependencies
npm install

# Start development server
npm run dev
```

### 2. Run Aurelia Coffee
```bash
# Navigate to Aurelia Coffee
cd landing-pages/aurelia-coffee

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## Production Builds

Each project can be compiled and previewed independently:

```bash
# Build FlowPilot
cd landing-pages/flowpilot
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
