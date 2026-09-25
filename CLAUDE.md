# CLAUDE.md — Repository Design & Architecture Guide

## Repository Overview
`Landing-Pages-For-SaaS-Products` is a multi-project repository containing independent, portfolio-grade SaaS and product landing pages.

## Core Rules

1. **Shared Skill Standard**:
   The repository uses the canonical `ui-ux-pro-max` skill located at `.agents/skills/ui-ux-pro-max/`.
   Use the Python search script for generating design systems and searching guidance:
   ```bash
   python .agents/skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system -p "<ProjectName>"
   ```
   Do not duplicate the skill folder into individual landing-page projects.

2. **Project Independence**:
   - Every project resides in `landing-pages/<project-name>/`.
   - Each project has its own `package.json`, `index.html`, `vite.config.*`, `src/`, `public/`, and `README.md`.
   - No root `package.json`. No cross-project code imports.

3. **Development Commands**:
   - `cd landing-pages/<project-name>`
   - `npm install`
   - `npm run dev`
   - `npm run build`

4. **Quality Checklist**:
   - Clean semantic HTML & accessible keyboard navigation.
   - SVG icons only (e.g. `lucide-react`), no emoji icons.
   - Verified responsive design across 320px, 375px, 768px, 1024px, 1440px.
   - Project-specific design tokens and typography pairings.
