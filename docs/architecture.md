# Repository Architecture & Standards

This document describes the architectural layout, modular organization, and engineering guidelines of the **Landing-Pages-For-SaaS-Products** repository.

---

## 1. Architectural Philosophy

### A. Independent Projects, Shared Intelligence
The core architectural principle of this repository is **Complete Project Autonomy with Shared Design Intelligence**:

1. **Independent Projects**: Every landing page located inside `landing-pages/` is an isolated, self-contained web project with its own `package.json`, build pipeline, assets, dependencies, and README.
2. **Shared Capability**: Tooling, design intelligence, and skill logic (specifically **UI/UX Pro Max**) are maintained at the repository root (`.agents/skills/ui-ux-pro-max/`), accessible to developers and AI agents without polluting project subfolders.
3. **Zero Monorepo Overhead**: There is deliberately **no root `package.json`**. Projects are never coupled by complex workspace linkers, global node_modules hoisters, or monorepo tools (Lerna/Nx/Turborepo) unless an explicit business requirement emerges.

---

## 2. Directory Hierarchy

```text
Landing-Pages-For-SaaS-Products/
│
├── .agents/                          # Shared Agent Customizations & Skills
│   └── skills/
│       └── ui-ux-pro-max/            # Canonical UI/UX Pro Max Skill
│           ├── SKILL.md
│           ├── data/                 # 50+ styles, 192 palettes, 74 fonts
│           └── scripts/              # search.py design system generator
│
├── .cursor/                          # Editor & Agent Rule Configurations
│   └── rules/
│       └── ui-ux-pro-max.mdc         # Cursor auto-application rule
│
├── docs/                             # Repository-Wide Documentation
│   ├── architecture.md               # System & directory architecture
│   ├── contributing.md               # Contributor workflow & git conventions
│   └── design-system.md              # Global design principles & CLI usage
│
├── landing-pages/                    # Project Directory
│   │
│   ├── aurelia-coffee/               # Specialty Coffee & Roastery Experience
│   │   ├── index.html
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── vite.config.ts
│   │   ├── README.md
│   │   ├── public/assets/images/
│   │   └── src/
│   │       ├── App.tsx
│   │       ├── main.tsx
│   │       ├── index.css
│   │       ├── components/
│   │       ├── context/
│   │       ├── data/
│   │       └── types/
│   │
│   ├── flowpilot/                    # AI Project Management SaaS
│   │   ├── index.html
│   │   ├── package.json
│   │   ├── vite.config.js
│   │   ├── README.md
│   │   ├── design-system/
│   │   │   └── flowpilot/
│   │   │       └── MASTER.md
│   │   ├── public/
│   │   └── src/
│   │       ├── App.jsx
│   │       ├── main.jsx
│   │       ├── index.css
│   │       ├── assets/
│   │       ├── components/
│   │       ├── sections/
│   │       ├── pages/
│   │       ├── data/
│   │       ├── hooks/
│   │       └── utils/
│   │
│   └── [future-project]/
│
├── .gitignore                        # Global Git Ignore Protection
├── CLAUDE.md                         # Claude Code Repository Guidelines
├── LICENSE                           # MIT License
└── README.md                         # Repository Showcase & Table of Projects
```

---

## 3. Project Structure Standard

Every landing page created inside `landing-pages/<project-name>` follows this standardized component anatomy:

```text
src/
├── assets/          # Static assets, SVG illustrations, and icons
├── components/      # Reusable granular UI components (Button, Badge, Card, Navbar, Footer)
├── sections/        # Page sections (HeroSection, FeaturesSection, PricingSection, etc.)
├── pages/           # High-level page views (Home.jsx)
├── data/            # Static data structures, feature lists, pricing models, FAQs
├── hooks/           # Custom React hooks (e.g. useScrollReveal, useIntersectionObserver)
├── utils/           # Formatters, math helpers, text utilities
├── App.jsx          # Root application component
├── main.jsx         # DOM mount entry
└── index.css        # Scoped design system tokens, typography imports, and utilities
```

---

## 4. UI/UX Pro Max Standard Execution

The repository leverages UI/UX Pro Max to guarantee consistent aesthetic rigor without visual homogenization:

```text
Product Specification
         ↓
UI/UX Pro Max Search (CLI)
         ↓
Design System Formulation (Tokens & Typography)
         ↓
Persistence to MASTER.md
         ↓
Component & Section Implementation
         ↓
Responsive & Accessibility Verification
         ↓
Production Build Validation
```

---

## 5. Technology Stack Standards

- **Core**: HTML5, Modern ES6+ JavaScript, TypeScript (when typing benefits complexity).
- **Styling**: Vanilla CSS using custom properties (CSS variables) for design tokens. Zero unneeded runtime dependencies.
- **Icons**: SVG icon libraries (`lucide-react`) exclusively. Emojis are strictly forbidden as UI icons.
- **Micro-Animations**: CSS keyframe transitions and optional light animation libraries (`framer-motion` or GSAP) scoped to user intent.
