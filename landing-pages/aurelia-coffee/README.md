# Aurelia Coffee

Luxury specialty coffee roastery and aesthetic café landing page.

> **Tagline:** Slow Mornings. Rich Moments.  
> **Category:** Food & Beverage / Specialty Coffee / Brand Experience  
> **Status:** Completed  

---

## Overview

Aurelia Coffee is a boutique specialty coffee roastery and curated aesthetic café. The digital experience translates the sensory warmth and artisanal craftsmanship of third-wave coffee into an elegant, interactive web application featuring an interactive drink customizer, dynamic cart and checkout drawer, sensory ritual explorer, and time-of-day moment guides.

---

## Features

- **Interactive Drink Customizer**: Modal enabling bean origin selection, oat/almond/whole milk choices, sweetness level, temperature, and custom notes.
- **Cart & Order Drawer**: Real-time order summary with dynamic subtotals, taxes, and instant checkout flow with celebratory animations.
- **Favorites & Wishlist**: Bookmark signature roasts and single origins for quick reordering.
- **Real-time Search Modal**: Instant filtering across the beverage database by flavor notes (floral, citrus, caramel, cocoa) and roast levels.
- **The Ritual Experience**: Step-by-step visual brewing guides for Pour Over, French Press, Aeropress, and 18-hour Cold Drip.
- **Curated Menu**: Categorized tabs for Milk Creations, Single Origin Espresso, Cold Brews, and Artisanal Teas.
- **Signature Moments by Time of Day**: Tailored suggestions matching circadian energy (Morning Serenity, Midday Clarity, Twilight Unwind).
- **Interactive Story & Sourcing**: Visual timeline tracing direct-trade farms in Ethiopia, Colombia, and Guatemala.
- **Café Locator & Table Inquiry**: Interactive visit hours, location map guide, and reservation requests.

---

## Design System & UX Standards

Designed following the **UI/UX Pro Max** design methodology:

- **Aesthetic**: Warm Minimalist Luxury & Organic Editorial
- **Color Palette**:
  - Espresso Deep (`#16100C`)
  - Warm Cream Canvas (`#FAF6F0`)
  - Champagne Gold (`#C5A059`)
  - Terracotta Roast (`#9B4B27`)
  - Card Milk Surface (`#F3ECE1`)
  - Muted Text (`#6E6259`)
- **Typography Pairing**:
  - Display / Headings: `Cormorant Garamond` (Editorial serif)
  - Body & UI: `Plus Jakarta Sans` (Contemporary sans-serif)
  - Metadata / Pricing: `JetBrains Mono`
- **Motion & Interaction**: Framer Motion smooth spring transitions, subtle grain texture overlay, non-intrusive drawer slide-outs.
- **Accessibility**: High-contrast text (>4.5:1 ratio), focus rings, semantic tags, and full keyboard navigation.

---

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 6
- **Language**: TypeScript
- **Styling**: Vanilla CSS with modern custom properties & design tokens
- **Animations**: Framer Motion 12
- **Icons**: Lucide React
- **Effects**: Canvas Confetti

---

## Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Project Structure

```text
aurelia-coffee/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── public/
│   └── assets/
│       └── images/          # High-resolution café & beverage assets
└── src/
    ├── App.tsx              # Main application orchestrator
    ├── main.tsx             # React DOM root entry
    ├── index.css            # Complete design system & token definitions
    ├── components/          # Reusable UI & section components
    │   ├── Navbar.tsx
    │   ├── Hero.tsx
    │   ├── FeaturedCoffee.tsx
    │   ├── ExperienceRitual.tsx
    │   ├── MenuSection.tsx
    │   ├── SignatureMoments.tsx
    │   ├── OurStory.tsx
    │   ├── SocialGallery.tsx
    │   ├── LocationSection.tsx
    │   ├── Footer.tsx
    │   ├── CartDrawer.tsx
    │   ├── CheckoutModal.tsx
    │   ├── CustomizeModal.tsx
    │   ├── FavoritesDrawer.tsx
    │   ├── SearchModal.tsx
    │   └── ToastContainer.tsx
    ├── context/             # Global coffee store & cart provider
    ├── data/                # Menu database and tasting notes
    └── types/               # TypeScript interfaces & types
```
