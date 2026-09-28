# SupportIQ

**AI-Powered Customer Support Platform**

> **Tagline:** Your support team, supercharged by AI.  
> **Category:** AI Customer Support / SaaS  
> **Status:** ✅ Production-Ready

---

## Overview

SupportIQ is a premium, production-quality landing page for an AI-powered customer support platform. The page showcases how AI understands customer intent, finds approved knowledge, drafts helpful replies, and keeps human teams connected to every conversation across all channels.

The landing page follows one example support request from first customer message through AI understanding, context gathering, knowledge matching, response generation, and final resolution — all visualized in an interactive, animated hero section.

---

## Core Value Proposition

**Your support team, supercharged by AI.**

SupportIQ helps modern businesses handle customer conversations with:
- **AI-powered automation** that understands intent and sentiment
- **Omnichannel support** bringing all channels into one intelligent inbox
- **Intelligent ticket management** with priority signals and routing
- **Connected knowledge bases** that surface the right answer at the right time
- **Customer sentiment analysis** to spot urgency and frustration early

---

## Features

### Hero Section
- **Animated conversation demo** showing AI resolving a billing support request in real-time
- Step-by-step visualization: customer message → AI understanding → knowledge match → AI response → resolution
- Smooth state-driven animations with proper timing and sequencing
- Floating status indicators with sentiment tracking

### Product Sections
1. **Problem/Solution Flow** — Three key pain points with elegant card interactions
2. **Five Core Features** with interactive mini-dashboards:
   - AI Chatbot with live conversation preview
   - Omnichannel Inbox showing email, chat, and social channels
   - Intelligent Tickets with priority queue
   - Connected Knowledge with source indicators
   - Sentiment Intelligence with weekly trends
3. **AI Understanding Showcase** — Interactive 4-step analysis breakdown
4. **Before/After Comparison** — Visual workflow improvements
5. **Analytics Dashboard** — Live support metrics and conversation volume chart
6. **AI Copilot** — Agent workspace with suggested replies and knowledge sources
7. **Customer Journey** — 4-step flow from message to resolution
8. **Security & Trust** — Role-based access and controlled knowledge
9. **Testimonial** — Fictional customer story (clearly marked as illustrative)
10. **Pricing Preview** — Three-tier pricing with monthly/yearly toggle
11. **FAQ Section** — 6 common questions with smooth accordion
12. **Final CTA** — Compelling close with dual CTAs

---

## Design System

### Color Palette

**Foundation**
- Background: `#F8FAFC` (cool light gray)
- Ink (primary text): `#111A32` (deep navy)
- Muted text: `#64738B` (slate)
- Paper (cards): `#FFFFFF`

**Primary Accent**
- Electric Indigo: `#395CE7`
- Indigo Dark: `#2849CF`

**Secondary Accent**
- Teal: `#19A99D`

**Semantic Colors**
- Success: `#21A790` (emerald)
- Warning: `#D3973C` (amber)
- Error: `#CF7373` (rose)

**Gradients**
- Brand gradient: `linear-gradient(140deg, #4268F0, #304CC6)`
- AI indicator: `linear-gradient(145deg, #4669E8, #28AEB6)`

### Typography

**Display Font:** Manrope (700, 800 weight)
- Hero headlines
- Section titles
- Feature headings
- Brand identity

**UI Font:** DM Sans (400, 500, 600, 700 weight)
- Body copy
- Navigation
- Buttons
- Labels
- Metadata

**Type Scale**
- Hero (desktop): 69px / tight leading / -3.5px letter spacing
- Section headings: 34–46px / tight leading / -2px letter spacing
- Feature titles: 29px
- Body text: 11–14px / 1.75–1.85 line height
- UI labels: 7–10px

### Spacing & Layout

**Container:** 1160px max-width  
**Grid gaps:** 16–100px depending on section density  
**Section padding:** 104px vertical (desktop), 67–69px (mobile)  
**Card padding:** 18–25px  
**Component gaps:** 8–32px based on hierarchy

### Interactive Elements

**Micro-interactions:**
- Button hover: lift (-2px translateY) + shadow enhancement
- Card hover: lift (-4px translateY) + shadow
- Problem cards: bottom gradient rule on hover
- Link hover: gap increase (8px → 12px)
- FAQ accordion: smooth grid-template-rows transition
- Analysis steps: background change + icon color shift

**Animations:**
- Hero conversation: 5-step state-driven sequence (3s intervals)
- Floating labels: fade + slide in
- Message bubbles: fade + translateY
- Intent panel: fade + background color shift
- Card entrance: scale + fade
- Scroll indicators: continuous bob animation

**Reduced motion:** All animations respect `prefers-reduced-motion`

---

## Tech Stack

- **React 19** — Component library with hooks
- **JavaScript (ES6+)** — Modern syntax
- **Vite 6** — Lightning-fast build tool
- **Vanilla CSS** — Custom design tokens and responsive layout
- **Lucide React** — Professional SVG icon library
- **No frameworks** — Pure React, no UI component dependencies

---

## Project Structure

```
supportiq/
├── index.html                 # SEO metadata, Open Graph, Twitter cards
├── package.json               # Independent Vite project
├── vite.config.js             # Vite configuration
├── public/
│   └── favicon.svg            # Brand icon
└── src/
    ├── App.jsx                # Main component with all sections
    ├── main.jsx               # React entry point
    └── index.css              # Design system, components, responsive
```

**Component Architecture:**
- `Navbar` — Sticky header with scroll state
- `Hero` — Animated conversation demo
- `ConversationDemo` — State-driven AI resolution flow
- `Problems` — Pain point cards
- `Features` — 5 core feature blocks with `MiniVisual` components
- `Intelligence` — Interactive AI understanding breakdown
- `Comparison` — Before/after workflow
- `Analytics` — Support metrics dashboard
- `Copilot` — Agent workspace preview
- `Journey` — Customer journey timeline
- `Security` — Trust signals
- `Testimonials` — Social proof
- `Pricing` — Three-tier pricing with toggle
- `FAQ` — Accordion component
- `FinalCTA` — Conversion section
- `Footer` — Site navigation and links

---

## Development

### Setup

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Server runs at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output in `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## Responsive Design

Tested and optimized across:

**Desktop:**
- 1440px+
- 1280px
- 1024px

**Tablet:**
- 768px
- 850px breakpoint for layout shifts

**Mobile:**
- 390px (iPhone 12/13/14)
- 375px (iPhone SE, smaller devices)
- 360px (Android standard)
- 320px (minimum supported width)

**Key responsive features:**
- Fluid typography with `clamp()`
- Grid layouts collapse to single column on mobile
- Navigation transforms into hamburger menu
- Hero visual scales and repositions
- Feature sections stack vertically
- Analytics charts remain legible
- Pricing cards stack on mobile
- Footer layout adapts to 2-column grid

**No horizontal overflow** at any viewport size.

---

## Accessibility

✅ **Semantic HTML** — Proper heading hierarchy, landmarks  
✅ **Keyboard navigation** — All interactive elements accessible via keyboard  
✅ **Focus indicators** — Visible 3px focus rings  
✅ **Color contrast** — WCAG AA compliant (navy on white, blue on white)  
✅ **ARIA labels** — Navigation, buttons, toggles, expandable sections  
✅ **Reduced motion** — Animations disabled when `prefers-reduced-motion` is set  
✅ **Alt text** — Meaningful descriptions for visual elements  
✅ **Screen reader friendly** — Proper document structure and semantic markup

---

## Performance

**Build output:**
- HTML: 1.34 KB (gzipped: 0.63 KB)
- CSS: 49.14 KB (gzipped: 11.80 KB)
- JS: 266.86 KB (gzipped: 81.30 KB)

**Optimizations:**
- Single CSS file with minified production build
- Tree-shaken React bundle
- No external dependencies beyond React and Lucide icons
- Inline SVG for graphics (no image requests)
- Google Fonts preconnect
- CSS animations (GPU-accelerated)
- Efficient React state management

---

## SEO & Metadata

**Title:** SupportIQ — AI Customer Support Platform

**Meta Description:**  
*SupportIQ helps customer support teams resolve conversations faster with AI-powered chat, omnichannel support, ticket management, knowledge automation, and sentiment intelligence.*

**Open Graph:**  
- Title, description, type (website)
- Prepared for og:image

**Twitter Card:**  
- summary_large_image card type

**Theme Color:** `#F8FAFC` (light mode)

---

## Design Principles Applied

1. **Premium SaaS aesthetic** — Refined typography, restrained color palette, professional spacing
2. **Visual hierarchy** — Clear content progression from hero through features to conversion
3. **Whitespace** — Generous breathing room around content blocks
4. **Conversational UI** — Hero demonstrates actual product interaction
5. **Trust signals** — Security section, testimonials, illustrative customer logos
6. **Progressive disclosure** — Information revealed through interaction (FAQ, analysis steps)
7. **Consistent iconography** — Lucide React icons throughout (no emoji)
8. **Purposeful animation** — Animations support understanding, not decoration
9. **Mobile-first responsive** — Intentional layouts at every breakpoint
10. **Accessibility first** — Keyboard, screen reader, reduced motion support

---

## Content Notes

All content is **illustrative and fictional** for product concept presentation:

- **Company logos** (Northstar, Vertex, Lumio, Orbit, Nova, Acme) — fictional brands
- **Testimonial** (Morgan Chen, Northstar) — fictional person and company
- **Pricing** — representative pricing structure
- **Metrics** (2,840 conversations, 64% AI resolution) — demo data
- **Customer names** (Jamie D., etc.) — fictional personas

These are clearly labeled throughout the page as illustrative/representative content.

---

## Git Workflow

```bash
# Check status
git status

# Stage changes
git add .

# Commit
git commit -m "feat: enhance SupportIQ with premium animations and interactions"

# Push to main
git push origin main
```

---

## Browser Support

- **Chrome/Edge** 90+ ✅
- **Firefox** 88+ ✅
- **Safari** 14+ ✅
- **Mobile Safari** iOS 14+ ✅
- **Chrome Android** Latest ✅

**Progressive enhancement:**
- `backdrop-filter` with fallback
- CSS Grid with fallback
- Modern JavaScript (ES6+) — transpiled by Vite

---

## License

Part of the **Landing Pages for SaaS Products** repository.  
Licensed under the MIT License.

---

## Design Methodology

Built using the **[UI/UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)** design intelligence framework:

- Product-specific color palettes and semantic tokens
- Curated typography pairings (Manrope + DM Sans)
- Hero-centric layout hierarchy
- Interaction design and motion profiles
- WCAG AA/AAA contrast compliance
- Keyboard accessibility patterns
- Pre-delivery quality checklist

---

## Related Projects

Explore other landing pages in this repository:

- **[MailForge](../mailforge/)** — AI Email Marketing Platform
- **[InvoiceX](../invoicex/)** — Smart Invoicing SaaS
- **[Meetly AI](../meetly-ai/)** — AI Meeting Assistant
- **[FlowPilot](../flowpilot/)** — AI Project Management
- **[Aurelia Coffee](../aurelia-coffee/)** — Specialty Coffee Brand Experience
- **[DataPulse](../datapulse/)** — Business Analytics Platform

---

**Built with care for modern support teams.**  
*© 2026 SupportIQ — Illustrative product concept*
