# Repository Design System & Methodology

This document outlines the core design philosophy and methodology enforced across the **Landing-Pages-For-SaaS-Products** repository.

---

## 1. Design Philosophy

Every landing page in this collection must be:

- **Product-Focused**: The visual design, copy, and interactions directly reflect the core utility, value proposition, and audience of the product.
- **Visually Distinctive**: No two landing pages share an identical appearance. Aurelia Coffee embodies warm, organic editorial luxury; FlowPilot commands futuristic, dark-mode cybersecurity and developer-tool precision.
- **Responsive by Architecture**: Layouts are fluid from 320px smartphones to 1920px 4K monitors with zero horizontal overflow.
- **Accessible & Inclusive**: High-contrast ratios (WCAG AA/AAA), keyboard navigability (`:focus-visible`), descriptive alt text, and graceful adaptation under `prefers-reduced-motion`.
- **Performance-Conscious**: Minimal external bundle footprints, vanilla CSS custom properties, fast asset loading, and optimized SVGs.
- **Conversion-Oriented**: Clear visual hierarchy, scannable value cards, prominent primary CTAs, low-friction trial inputs, and genuine social proof.

---

## 2. UI/UX Pro Max Methodology

All projects use **UI/UX Pro Max** as the unified design intelligence engine.

- **Canonical Repository**: [https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.git](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.git)
- **Local Installation**: `.agents/skills/ui-ux-pro-max/`

The methodology governs:

1. **Design System Generation**: Generating project-tailored palettes, semantic role mappings, typography combinations, and component token scales.
2. **Typography Pairings**: Pairings from Google Fonts that evoke precise product personalities (e.g. `Space Grotesk + DM Sans` for AI SaaS, `Cormorant Garamond + Plus Jakarta Sans` for Luxury Beverage).
3. **Harmonious Color Systems**: Tailored Primary, On-Primary, Secondary, Accent/CTA, Background, Surface, Card, Border, and Status colors.
4. **Layout & Visual Hierarchy**: Hero-centric layouts, bento grids, and clear scannability.
5. **UX Patterns & Anti-Patterns**: Pre-delivery checklists (e.g. no emojis as icons, visible focus states, cursor-pointer on interactive elements).
6. **Interaction & Motion Design**: Subtle glows, smooth 150–300ms transitions, and non-distracting micro-interactions.

---

## 3. Project Independence Pattern

Although all projects follow the UI/UX Pro Max methodology, **each project maintains its own self-contained design system**.

```text
landing-pages/
├── aurelia-coffee/
│   ├── src/index.css         # Warm Neutrals, Champagne Gold, Cormorant Garamond
│   └── ...
└── flowpilot/
    ├── design-system/
    │   └── flowpilot/
    │       └── MASTER.md     # Persisted Pro Max Master Token Rules
    ├── src/index.css         # Deep Navy, Electric Cyan, Space Grotesk
    └── ...
```

### Comparative Project Profile

| Project | Industry | Primary Palette | Heading Font | Body Font | Key Aesthetic |
|---|---|---|---|---|---|
| **Aurelia Coffee** | Specialty Beverage | `#16100C`, `#FAF6F0`, `#C5A059` | Cormorant Garamond | Plus Jakarta Sans | Organic Luxury, Editorial Warmth |
| **FlowPilot** | AI SaaS / DevTools | `#060913`, `#38BDF8`, `#6366F1` | Space Grotesk | DM Sans | Futuristic Dark Mode, Electric Glows |

---

## 4. UI/UX Pro Max CLI Workflow

When initiating or revising a landing page, run the bundled CLI script:

```bash
# 1. Generate full design system
python .agents/skills/ui-ux-pro-max/scripts/search.py "<product type> <industry> <keywords>" --design-system -p "<Project Name>"

# 2. Persist the Master design system
python .agents/skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system --persist -p "<Project Name>" --output-dir "landing-pages/<project-name>"

# 3. Domain-specific searches
python .agents/skills/ui-ux-pro-max/scripts/search.py "dark mode glow" --domain style
python .agents/skills/ui-ux-pro-max/scripts/search.py "saas conversion" --domain landing
python .agents/skills/ui-ux-pro-max/scripts/search.py "accessibility contrast" --domain ux
```
