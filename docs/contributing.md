# Contributing Guide

Thank you for contributing to **Landing-Pages-For-SaaS-Products**! This repository hosts a curated collection of portfolio-quality landing pages built with React, Vite, and the **UI/UX Pro Max** design methodology.

---

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/poshiyaharsh/Landing-Pages-For-SaaS-Products.git
   cd Landing-Pages-For-SaaS-Products
   ```

2. **Inspect the existing structure**:
   ```text
   Landing-Pages-For-SaaS-Products/
   ├── .agents/skills/ui-ux-pro-max/    # Shared design intelligence skill
   ├── docs/                           # Architecture & system guides
   └── landing-pages/                  # Independent landing page projects
       ├── aurelia-coffee/
       └── flowpilot/
   ```

---

## Adding a New Landing Page

Every new landing page must be placed in `landing-pages/<project-name>/` as an independent project.

### 1. Research & Design Generation
Run the UI/UX Pro Max CLI to establish your project's design system:
```bash
python .agents/skills/ui-ux-pro-max/scripts/search.py "<product_type> <keywords>" --design-system -p "<ProjectName>"
```

Persist the design system:
```bash
python .agents/skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system --persist -p "<ProjectName>" --output-dir "landing-pages/<project-name>"
```

### 2. Scaffold the Project
Initialize standard project files:
```text
landing-pages/<project-name>/
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── public/
└── src/
    ├── assets/
    ├── components/
    ├── sections/
    ├── pages/
    ├── data/
    ├── hooks/
    ├── utils/
    ├── App.jsx
    ├── main.jsx
    └── index.css
```

### 3. Local Development
```bash
cd landing-pages/<project-name>
npm install
npm run dev
```

### 4. Build Validation
Ensure the production build compiles with zero errors before committing:
```bash
npm run build
```

---

## Git Commit Convention

We follow conventional commits to maintain an intelligible history:

| Prefix | Description | Example |
|---|---|---|
| `feat:` | New landing page or major feature | `feat: add FlowPilot landing page` |
| `fix:` | Bug fixes, overflow issues, broken links | `fix: resolve mobile navigation drawer overflow` |
| `style:` | CSS token tweaks, animation timing, spacing | `style: improve hero glow and button hover feedback` |
| `refactor:` | Code restructuring without visual changes | `refactor: extract reusable card component` |
| `docs:` | Updates to README or documentation | `docs: update design system specifications` |
| `chore:` | Dependency bumps, tooling configurations | `chore: update vite configuration and gitignore` |

---

## Quality Checklist Before Opening a PR

- [ ] Project lives strictly within `landing-pages/<project-name>/`.
- [ ] No root `package.json` was created or modified.
- [ ] No shared cross-project dependencies or imports.
- [ ] UI/UX Pro Max tokens and rules are defined and respected.
- [ ] Tested across all viewport widths: 320px, 375px, 768px, 1024px, 1440px.
- [ ] No emojis used as icons (Lucide / SVG only).
- [ ] `npm run build` succeeds cleanly.
- [ ] Project-specific `README.md` is populated.
