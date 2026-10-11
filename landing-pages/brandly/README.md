# Brandly — Luxury Brand Management & Asset Workspace

> **Tagline:** Your entire brand, beautifully organized.  
> **Category:** Brand Management SaaS / Digital Brand Workspace  
> **Visual Direction:** Luxury editorial, minimalist sophistication, refined typography, premium art direction, and understated modern technology.

---

## 1. Project Overview

**Brandly** is a high-end digital brand workspace designed for creative agencies, luxury consumer brands, high-velocity startups, and design teams. Inspired by European art direction and editorial publishing, Brandly brings every element of a brand—logos, color systems, typography pairings, digital guidelines, approved campaign assets, and reusable templates—into one beautifully organized home.

Unlike generic corporate SaaS dashboards, Brandly is engineered with a warm, tactile palette, generous whitespace, high-contrast serif typography, and museum-grade visual hierarchy.

---

## 2. Creative & Design Direction

### Curated Editorial Palette
- **Warm Ivory:** `#F8F6F0` (Default canvas, reduces optical fatigue)
- **Soft White:** `#FFFEFC` (Card surfaces and containers)
- **Ink Black:** `#191919` (Display typography and master wordmarks)
- **Warm Charcoal:** `#33312E` (Secondary headings and UI chrome)
- **Muted Taupe:** `#B8ADA0` (Metadata, borders, and captions)
- **Champagne Beige:** `#E8DFD2` (Subtle accent fills and tags)
- **Muted Olive:** `#777B65` (Status badges and verified compliance highlights)

### Typography Pairing
- **Display Headings:** Playfair Display (Serif with delicate italics and tight optical kerning)
- **Body & Interface:** Plus Jakarta Sans (Clean geometric sans-serif for high legibility across screens)
- **Metadata & Technical Values:** JetBrains Mono (Uppercase with 0.15em–0.25em tracking for color hex codes, dimensions, and versioning)

---

## 3. Key Features & Page Architecture

1. **Refined Sticky Navigation:**
   - Typographic Brandly wordmark with interlocking monogram badge.
   - Smooth navigation links to Platform, Features, Brand Kits, Guidelines, Templates, and Pricing.
   - Interactive mobile drawer menu and responsive breakpoints.

2. **Luxury Editorial Hero:**
   - Oversized headline: *“Your entire brand, beautifully organized.”*
   - Interactive software workspace mockup with live color swatches and active asset inspection.
   - Floating tactile cards displaying stationery specs, fabric swatches, and hex chips.

3. **Brand Trust Strip:**
   - Monochrome wordmarks for illustrative brands: *ATELIER, FORMA, MONOGRAPH, STUDIO NOIR, OBJECTS, COMMON FORM*.

4. **Problem & Solution Comparison:**
   - *The Scattered Brand* (fragmented folders, inconsistent hex values, lost vectors, ad-hoc templates) vs.
   - *The Brandly Workspace* (authoritative home, verified assets, live guidelines, synchronized access).

5. **Feature Showcase (6 Distinct Layouts):**
   - **01 Brand Kits:** Identity board layout with wordmarks, monograms, and swatches.
   - **02 Digital Asset Library:** Interactive searchable grid with category and tag filters.
   - **03 Brand Guidelines:** Digital brand manual with exclusion margin rules and do/don't examples.
   - **04 Templates:** Multi-format editorial template suite for social, print, and presentations.
   - **05 Team Collaboration:** Granular role management (Admin, Editor, Reviewer, Guest) and live audit feed.
   - **06 Brand Consistency:** Verified compliance checklist with 99.8% adherence score.

6. **Interactive Brand Workspace Preview:**
   - Realistic 3-column software interface with tabs for Overview, Kits, Assets, Guidelines, Templates, and Team.
   - Clickable swatches that immediately copy HEX values to clipboard with toast notification.
   - Right-hand inspector panel updating on asset selection.

7. **Brand Identity Gallery (6 Fictional Brands):**
   - *Maison Form* (Contemporary Lifestyle)
   - *Solenne* (Clean Beauty & Skin)
   - *Common Ground* (Specialty Coffee Roasters)
   - *Studio Forma* (Architecture & Spatial Design)
   - *Sunday Objects* (Home Goods & Heirloom Furniture)
   - *Noire Atelier* (Haute Horlogerie & Fashion)
   - Interactive *“View Brand Kit”* modal displaying comprehensive palette tokens and typography.

8. **Brand Asset Search Experience:**
   - Live search input filtering assets in real-time.
   - Category filtering (All, Logos, Photography, Templates, Documents, Icons).
   - Sorting options (Recently Added, Alphabetical, Format).
   - Favorite heart toggle with state persistence.
   - Detailed modal preview with download and share-link actions.

9. **Live Brand Guidelines Experience:**
   - Split-screen document viewer with 6 standards:
     `01. Logo & clear space`, `02. Color palette`, `03. Typography`, `04. Image direction`, `05. Layout & spacing`, `06. Voice & editorial tone`.
   - Dynamic updating of diagrams, specs, and do/don't cards on selection.

10. **4-Stage Workflow Timeline:**
    - `01 COLLECT` → `02 ORGANIZE` → `03 SHARE` → `04 CREATE`.
    - Horizontal on desktop, vertical on mobile devices.

11. **Templates Gallery & Onboarding Dialogs:**
    - High-resolution modal inspector with dimension specs and layout guides.
    - Interactive *“Use Template”* action cloning assets into workspace with confetti feedback.
    - Interactive *“Start Your Workspace”* modal allowing brand naming, category selection, and palette configuration.

12. **Pricing Section:**
    - Centralized pricing data structure.
    - Monthly vs. Annual toggle with dynamic 20% discount calculation.
    - Starter ($0), Professional ($19/mo or $15/mo), Studio ($49/mo or $39/mo).

13. **Comprehensive FAQ:**
    - Accordion handling all 9 key questions with accessible toggle behavior.

14. **Final CTA & Multi-Column Footer:**
    - Open luxury brand book folio composition.
    - Links to platform areas, documentation, legal terms, and social networks.

---

## 4. Technology Stack

- **Framework:** React 19 + TypeScript
- **Bundler & Build Tool:** Vite 6
- **Styling:** Tailwind CSS 3.4 + Custom CSS Design System
- **Icons:** Lucide React (`lucide-react`)
- **Effects:** Canvas Confetti (`canvas-confetti`)
- **Typography:** Google Fonts (`Playfair Display`, `Plus Jakarta Sans`, `JetBrains Mono`)

---

## 5. Project Structure

```text
landing-pages/brandly/
├── public/
│   └── images/
│       ├── hero-workspace.jpg
│       ├── maison-form.jpg
│       └── solenne.jpg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── BrandTrustStrip.tsx
│   │   ├── ProblemSolution.tsx
│   │   ├── FeatureShowcase.tsx
│   │   ├── WorkspacePreview.tsx
│   │   ├── BrandIdentityGallery.tsx
│   │   ├── AssetLibrary.tsx
│   │   ├── GuidelinesShowcase.tsx
│   │   ├── WorkflowSection.tsx
│   │   ├── TemplateGallery.tsx
│   │   ├── CollaborationSection.tsx
│   │   ├── UseCases.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Pricing.tsx
│   │   ├── FAQ.tsx
│   │   ├── FinalCTA.tsx
│   │   ├── Footer.tsx
│   │   ├── Toast.tsx
│   │   ├── AssetModal.tsx
│   │   ├── BrandKitModal.tsx
│   │   ├── TemplateModal.tsx
│   │   └── StartWorkspaceModal.tsx
│   ├── data/
│   │   └── brandData.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 6. Installation & Development

### Prerequisites
- Node.js 18+ or 20+
- npm 9+

### Commands
```bash
# Navigate to the project directory
cd "landing-pages/brandly"

# Install dependencies
npm install

# Start local development server (runs on port 5188)
npm run dev

# Compile TypeScript and create production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 7. Responsive Behavior & Accessibility

- **Responsive Breakpoints:** Fully tailored for 320px, 375px, 768px, 1024px, 1280px, and 1440px+ displays.
- **Mobile Navigation:** Sliding drawer with smooth closing and touch-friendly targets (minimum 44×44px).
- **Reduced Motion:** Full `@media (prefers-reduced-motion: reduce)` compliance to disable unneeded animations for sensitive users.
- **Keyboard Navigation:** All interactive elements feature visible focus rings (`:focus-visible`), ESC key dismissal on modals, and semantic ARIA labeling.

---

## 8. Steps to Connect a Real Backend

To transition Brandly from a front-end prototype to a production cloud application:
1. **Authentication:** Implement Supabase Auth, Auth0, or Clerk for multi-tenant studio login with SSO support.
2. **Database:** Store workspaces, brand kits, assets, guidelines, and audit logs in PostgreSQL using Prisma or Drizzle ORM.
3. **Asset Storage:** Connect Amazon S3 or Cloudflare R2 with signed URLs for high-resolution vector and photo asset storage.
4. **Color & Metadata Extraction:** Deploy a serverless worker using `sharp` to parse uploaded SVG and image assets, auto-extract dominant colors, and calculate dimensions.
5. **Real-Time Collaboration:** Utilize WebSockets or Supabase Realtime for live multiplayer cursor and comment notifications.
6. **Payment Processing:** Integrate Stripe Customer Portal for managing Starter, Professional, and Studio subscription tiers.

---

## 9. License

MIT © 2026 Brandly. Part of the `Landing-Pages-For-SaaS-Products` collection.
