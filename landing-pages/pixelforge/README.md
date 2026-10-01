# PixelForge — AI Design & Creative Production Platform

> **“Turn ideas into production-ready designs.”**

PixelForge is an all-in-one AI design and creative production platform engineered for creative directors, brand studios, product designers, and fast-moving creative agencies. Built with an editorial magazine aesthetic, dark cinematic interface, and selective neon luminescence inspired by modern design studios and futuristic creative tooling.

---

## 🎨 Visual Direction & Design Tokens

- **Aesthetic**: Editorial magazine composition meets futuristic creative technology. High contrast, generous whitespace, asymmetric layout grids, and selective neon accents.
- **Color Palette**:
  - Deep Black / Near-Black Background: `#050508`
  - Studio Surface: `#08080C` / `#0D0D14`
  - Studio Borders: `#232336` / `#27273C`
  - Off-White Typography: `#F5F5F7`
  - Electric Violet: `#8B5CF6` / `#7C3AED`
  - Neon Cyan: `#06B6D4` / `#22D3EE`
  - Hot Pink: `#F43F5E` / `#EC4899`
- **Typography**:
  - Display / Headings: *Plus Jakarta Sans* (Weight 700..900, tight kerning)
  - Body Text: *Inter* (Weight 400..600)
  - Metadata & Controls: *JetBrains Mono* (Weight 400..600)
- **Anti-Tropes**: Zero generic SaaS card repetitions, zero cheesy gradients, zero stock illustrations, zero excessive glassmorphism.

---

## ⚡ Core Sections & Feature Highlights

1. **Sticky Minimal Navbar**: Minimalist geometric glyph icon, clean navigation, "Sign In" trigger, and gradient "Start Creating" CTA with responsive mobile drawer.
2. **Editorial Hero Section**: Oversized display headline with neon gradient accenting, dual CTAs, and a realistic floating creative workspace mockup containing design artboards, generative prompt bar, token palettes, and layer hierarchies.
3. **Understated Logo Cloud**: Monochrome text wordmarks for fictional vanguard studios (NOVA, ARC, FRAME, KINETIC, MONO, ORBIT).
4. **Problem → Solution Editorial Split**: Contrasting common creative production friction (tool sprawl, slow feedback, version drift) with PixelForge's unified pipeline and an interactive 3-stage preview (Concept → Refined → Production).
5. **5-Card Bento Feature Grid**:
   - `01` AI Creative Generation (Brief to multi-directional outputs)
   - `02` Smart Design Systems (Reusable OKLCH tokens & typography scales)
   - `03` Production Workspace (Zero tool-switching vector handoffs)
   - `04` Creative Variations (Side-by-side typography and composition matrices)
   - `05` Team Collaboration (Multiplayer cursors & layer-level annotations)
6. **Magazine-Style Editorial Showcase**: Asymmetric collage of fictional creative projects (ORBIT, NEXUS, VOID, AURA, MONO, PULSE) with interactive forkable modal previews.
7. **4-Step Workflow**: Horizontal trajectory (01 IDEA → 02 EXPLORE → 03 BUILD → 04 SHIP) with smooth scroll reveals.
8. **Boundless Canvas Showcase**: Detailed product showcase showing active artboards (Brand System, Campaign Key, Mobile UI), multiplayer cursors, and token inspectors.
9. **Interactive AI Creative Copilot**: Natural-language conversational copilot interface demonstrating the generation of 4 distinct brand directions (Cyber Roast, Solar Flare, Minimalist Ether, Hyper Botanical) with instant refinement triggers.
10. **Interactive Before/After Slider**: Draggable comparison tool illustrating the transformation from raw concept sketches to vector-accurate, production-ready deliverables.
11. **Creative Team Use Cases**: 8 dedicated creative disciplines (Brand Design, Campaigns, Product UI, Marketing, Social Content, Editorial, Startup Launches, Creative Agencies).
12. **Testimonials**: Authentic perspectives from Maya Chen (Nova Studio), Alex Morgan (Arc Labs), and Jordan Lee (Kinetic).
13. **Transparent Pricing**: 3 plans (Starter $0/mo, Creative $19/mo with popular badge, Studio $49/mo) with onboarding modal integration.
14. **Accessible FAQ Accordion**: 7 expandable questions with animated disclosure icons.
15. **Climax Final CTA**: High-impact editorial headline, dual action buttons, and abstract geometric neon backdrop.
16. **Universal Interactive Modal**: Multi-mode modal handling project initialization, live demos, plan upgrades, and project inspections with particle celebration bursts.

---

## 🛠️ Technology Stack

- **Framework**: React 19 + TypeScript + Vite 6
- **Styling**: Tailwind CSS 3.4 (custom studio tokens, custom dark scrollbar, studio grid, neon glows)
- **Animations**: Framer Motion 12
- **Icons**: Lucide React
- **Micro-Interactions**: Canvas Confetti

---

## 📂 Architecture

```
landing-pages/pixelforge/
├── design-system/
│   └── pixelforge/
│       └── MASTER.md            # Master design tokens & style guide
├── src/
│   ├── components/
│   │   ├── Navbar.tsx           # Sticky minimal navbar with mobile drawer
│   │   ├── Hero.tsx             # Editorial hero with floating creative studio canvas
│   │   ├── LogoCloud.tsx        # Monochrome client studio wordmarks
│   │   ├── ProblemSolution.tsx  # Editorial split with interactive stage switcher
│   │   ├── FeatureGrid.tsx      # 5 distinct bento feature compositions
│   │   ├── CreativeShowcase.tsx # Asymmetric magazine collage of fictional projects
│   │   ├── Workflow.tsx         # 4-step horizontal creation trajectory
│   │   ├── CanvasShowcase.tsx   # Product showcase showing multi-artboard canvas
│   │   ├── AIAssistant.tsx      # Interactive AI copilot with 4 direction choices
│   │   ├── BeforeAfter.tsx      # Draggable comparison slider
│   │   ├── UseCases.tsx         # 8 creative team disciplines
│   │   ├── Testimonials.tsx     # 3 editorial studio leader reviews
│   │   ├── Pricing.tsx          # Starter ($0), Creative ($19), Studio ($49)
│   │   ├── FAQ.tsx              # 7 expandable accordion questions
│   │   ├── FinalCTA.tsx         # Dramatic climax CTA with neon backdrop
│   │   ├── Footer.tsx           # Multi-column directory & platform status
│   │   └── Modal.tsx            # Multi-mode workspace modal with confetti triggers
│   ├── data/
│   │   └── pixelforgeData.ts    # Centralized data store and TypeScript types
│   ├── utils/
│   │   └── confetti.ts          # Particle celebration helper
│   ├── App.tsx                  # Root application assembly & modal state management
│   ├── main.tsx                 # React DOM mount entry
│   └── index.css                # Global studio styles, grid patterns & typography
├── index.html                   # SEO metadata, geometric favicon, Google fonts
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Running Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Visit `http://localhost:5177` in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## 📄 License
MIT License. © 2026 PixelForge Inc. All rights reserved.
