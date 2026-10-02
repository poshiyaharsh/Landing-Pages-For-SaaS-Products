# CodePilot — AI Developer Platform

> **“Ship better code, faster.”**
>
> A developer-first SaaS landing page built for high-velocity engineering teams, platform infrastructure engineers, and autonomous software development.

[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](../../LICENSE)

---

## Table of Contents

1. [Product Overview](#product-overview)
2. [Product Concept & Visual Direction](#product-concept--visual-direction)
3. [Key Features & Modules](#key-features--modules)
4. [Color System & Design Tokens](#color-system--design-tokens)
5. [Typography](#typography)
6. [Interactive Components Architecture](#interactive-components-architecture)
7. [Tech Stack](#tech-stack)
8. [Project Structure](#project-structure)
9. [Installation & Setup](#installation--setup)
10. [Development Commands](#development-commands)
11. [Production Build & Optimization](#production-build--optimization)
12. [Deployment Guide](#deployment-guide)
13. [Environment Variables](#environment-variables)
14. [Responsive Behavior](#responsive-behavior)
15. [Micro-Interactions & Animation Details](#micro-interactions--animation-details)
16. [Security & Zero-Retention Architecture](#security--zero-retention-architecture)

---

## Product Overview

**CodePilot** is an AI developer platform and developer productivity SaaS engineered to bring context-aware intelligence directly into the code editor, terminal, and CI/CD pull request lifecycle.

Rather than treating AI as an isolated web chatbot or decorative overlay, CodePilot embeds AST-level comprehension, runtime stacktrace analysis, continuous automated PR review guardrails, and deterministic test synthesis directly into the developer's daily workflow.

---

## Product Concept & Visual Direction

The visual identity combines:
- **Dark Developer UI**: Deep `#090A0C` background with subtle `#1E242F` borders and charcoal surfaces.
- **Terminal-Inspired Aesthetics**: Natural line reveals, monospace telemetry logs, blinking terminal cursors, and CLI command chips.
- **Precision Engineering**: Clean tabular layouts, Git-native branch states, pull request diffs with green positive and amber security warnings.
- **Restrained Accents**: Electric green (`#00F59B`), Cyan (`#00E5FF`), and subtle purple accents for syntax and category tokens.
- **Zero AI Clutter**: No cartoon illustrations, stock photography, oversized generic cards, or uncontrolled neon glows.

---

## Key Features & Modules

1. **AI Code Completion (`<HeroWorkspace />`, `<FeatureGrid />`)**: Context-aware whole-line and multi-line completions grounded in repository imports and custom types.
2. **AI Code Review (`<CodeReview />`)**: GitHub-inspired pull request interface evaluating PR #248 with automated security warnings, token expiration audits, and one-click patch commits.
3. **Debugging Copilot (`<CodeEditorShowcase />`)**: Full-width immersive IDE showing a runtime 401 error in `fetchWrapper.ts`, live explanation, and interactive diff injection.
4. **Automated Testing**: Synthesizes 100% boundary test suites in Vitest, Jest, and PyTest with zero manual fixture toil.
5. **Codebase Intelligence**: Semantic AST queries with exact file and line citations.
6. **One-Click Shipping (`<Workflow />`)**: 4-step execution chain (01 WRITE → 02 REVIEW → 03 TEST → 04 SHIP) linked by terminal telemetry.
7. **Command Palette (`<CommandPalette />`, `<CommandPaletteModal />`)**: Global `⌘K` / `Ctrl+K` searchable command interface with `/explain`, `/refactor`, `/test`, `/debug`, `/review`, `/docs`, `/optimize`, and `/ship`.
8. **Ecosystem Integrations (`<Integrations />`)**: 12 native integrations across GitHub, GitLab, Bitbucket, VS Code, JetBrains, Slack, Linear, Jira, Docker, AWS, Vercel, and PostgreSQL.
9. **Supported Technologies (`<TechStack />`)**: 18 language and framework targets including TypeScript, Python, Go, Rust, Java, React, Next.js, and FastAPI.
10. **Security & Data Privacy (`<Security />`)**: Zero training retention, containerized memory sandboxes, TLS 1.3 encrypted data flow, and role-based access governance.

---

## Color System & Design Tokens

| Token | Hex Value | Semantic Usage |
|---|---|---|
| `codepilot-bg` | `#090A0C` | Root page background |
| `codepilot-panel` | `#0D0F12` | Window frame & card background |
| `codepilot-surface` | `#12151B` | Inner controls & secondary elements |
| `codepilot-border` | `#1E242F` | Subtle borders & dividers |
| `codepilot-border-highlight`| `#2A3444` | Hover states & active boundaries |
| `brand-green` | `#00F59B` | Electric green primary CTA & positive states |
| `brand-cyan` | `#00E5FF` | Secondary cyan accents & code tokens |
| `brand-purple` | `#A78BFA` | AST syntax keywords & language badges |
| `brand-amber` | `#F59E0B` | Warning badges & security cautions |
| `brand-red` | `#EF4444` | Deletion diff lines & runtime errors |

---

## Typography

- **Marketing Typography**: `Inter` (`wght@300;400;500;600;700;800`), clean, legible, high-contrast.
- **Technical Typography**: `JetBrains Mono` (`wght@300;400;500;600;700`), utilized across code editors, command palettes, terminal logs, git commit badges, and metadata chips.

---

## Interactive Components Architecture

```text
src/
├── components/
│   ├── Navbar.tsx               # Sticky navbar, command trigger, GitHub stars, mobile drawer
│   ├── Hero.tsx                 # Headline, CTAs, trust badge, and embedded workspace
│   ├── HeroWorkspace.tsx        # Realistic IDE: file tree, calculateInvoice editor, terminal
│   ├── TrustBar.tsx             # Fictional enterprise monochrome logos & claimed metrics
│   ├── ProblemSolution.tsx      # 6 friction points & animated workflow evolution toggle
│   ├── FeatureGrid.tsx          # 6 high-density technical feature modules
│   ├── CodeEditorShowcase.tsx   # Immersive 3-column IDE with interactive 401 diff fix
│   ├── CodeReview.tsx           # GitHub PR #248 interface with checklist & inline review diff
│   ├── Workflow.tsx             # 4-step pipeline: WRITE, REVIEW, TEST, SHIP with telemetry
│   ├── CommandPalette.tsx       # In-page interactive command runner (/explain, /ship...)
│   ├── CommandPaletteModal.tsx  # Global Cmd+K / Ctrl+K keyboard shortcut palette
│   ├── Integrations.tsx         # 12 cards with category filters & connection tags
│   ├── TechStack.tsx            # Polyglot compiler chips with extension details
│   ├── Security.tsx             # Architecture flow diagram & enterprise privacy specs
│   ├── Testimonials.tsx         # 3 verified senior engineering testimonial cards
│   ├── Pricing.tsx              # Free, Pro ($20), Team ($40) with yearly 20% discount toggle
│   ├── FAQ.tsx                  # Animated accordion covering 8 technical questions
│   ├── FinalCTA.tsx             # Final dark CTA with terminal initialization visual
│   ├── Footer.tsx               # Technical SaaS footer with status indicator
│   └── InteractiveModals.tsx    # Start Free, Sign In, Docs, and Team Sales modals
├── data/
│   └── codepilotData.ts         # Centralized typed mock data and commands
├── types/
│   └── index.ts                 # TypeScript interfaces and data contracts
├── App.tsx                      # Root component orchestrating modal states and layouts
├── main.tsx                     # Vite DOM entry point
└── index.css                    # Tailwind directives, custom scrollbars, and terminal cursor
```

---

## Tech Stack

- **Framework**: React 19 (`react`, `react-dom`)
- **Language**: TypeScript 5.7 (`strict: true`, `noUnusedLocals: true`)
- **Bundler & Tooling**: Vite 6.2 (`@vitejs/plugin-react`)
- **Styling**: Tailwind CSS 3.4 + PostCSS + Autoprefixer
- **Icons**: Lucide React (`lucide-react`)
- **Motion**: Restrained CSS transitions & Framer Motion

---

## Installation & Setup

```bash
# Navigate to the project directory
cd landing-pages/codepilot

# Install dependencies
npm install

# Start local development server
npm run dev
```

The application will be available at: `http://localhost:5180/`

---

## Development Commands

```bash
# Start Vite development server
npm run dev

# Run TypeScript check and production build
npm run build

# Preview production build locally
npm run preview
```

---

## Production Build & Optimization

The production build runs strict TypeScript verification and creates an optimized static bundle:

```bash
npm run build
```

Assets are hashed and gzipped, with minimal CSS and zero external image dependencies.

---

## Deployment Guide

CodePilot is a purely client-side single page application and can be deployed directly to:
- **Vercel**: `vercel deploy`
- **Cloudflare Pages**: Point build output to `dist`
- **Netlify**: Run `npm run build`, publish directory `dist`
- **GitHub Pages**: Deploy `dist` directory via GitHub Actions

---

## Environment Variables

No mandatory runtime environment variables are required. For production API integrations, optional variables can be added:

```env
VITE_API_ENDPOINT=https://api.codepilot.internal/v1
VITE_TELEMETRY_ENABLED=false
```

---

## Responsive Behavior

- **Desktop (1280px+)**: Multi-column IDE layouts, 3-column file-editor-copilot showcases, side-by-side terminal telemetry, and full bento grids.
- **Tablet (768px – 1024px)**: Graceful adaptation of code panels, single-row command palette, and 2-column feature grids.
- **Mobile (320px – 640px)**: Compact slide-down hamburger navigation, horizontal code scrolling on diff blocks without page overflow, touch-friendly tap targets, and streamlined command controls.

---

## Micro-Interactions & Animation Details

- **Navbar Blur**: Dynamic transition from transparent to backdrop-blurred surface on scroll.
- **Terminal Typing**: Sequenced line appearance simulation with natural delay and blinking cursor.
- **Interactive Code Patching**: Clicking **Apply Fix** in either the Hero IDE or the Immersive Showcase smoothly transitions code diffs in real time.
- **Command Palette (`⌘K`)**: Global keydown listeners for `Cmd+K` and `Ctrl+K` opening instant navigation.
- **Accordion FAQ**: Animated state toggles with smooth height expansion and chevron rotation.
- **Interactive Copy**: Click-to-copy code snippets and CLI recipes with immediate tactile visual feedback.

---

## Security & Zero-Retention Architecture

- **Zero Training Retention**: Source code is never retained or indexed for foundation model retraining.
- **Isolated Workspaces**: Vector memory graphs are generated locally and purged on session termination.
- **Encrypted Channels**: TLS 1.3 enforced for all inference telemetry.
