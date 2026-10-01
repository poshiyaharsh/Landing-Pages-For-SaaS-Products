# SecureNest — Premium Cybersecurity SaaS Platform

> **“Protect every connection. Every device. Every day.”**

SecureNest is an all-in-one cybersecurity command center engineered for startups, enterprises, IT teams, security teams, and developers. Built with precision, performance, and enterprise-grade aesthetics inspired by Linear, Vercel, Raycast, and Stripe.

---

## 🛡️ Core Capabilities

- **Command Center Dashboard:** Real-time visibility into overall security score (98%), system integrity status, telemetry ingestion, and live mitigation metrics.
- **Threat Monitoring:** Live regional defense map spanning North America, Europe, Asia, and India with sub-second event streaming.
- **Vulnerability Scanner:** Continuous CVE indexing across 1,248 assets with severity categorization (Critical 0, High 2, Medium 7, Low 3) and interactive on-demand scanning.
- **Security Alerts:** Intelligent deduplication and triage interface with multi-level severity filtering (Critical, High, Medium, Low) and lifecycle status tracking (*Investigating*, *Resolved*, *Ignored*).
- **Compliance Automation:** Continuous audit readiness for **SOC 2 Type II (96%)**, **ISO 27001 (91%)**, **GDPR (98%)**, and **HIPAA (94%)** with interactive progress rings.
- **Security Reports:** Instant generation of executive-ready security summaries and one-click PDF export simulations.
- **Zero-Trust Foundation:** 6 foundational security pillars (End-to-End Encryption, RBAC, Tamper-Proof Audit Logs, Continuous Monitoring, Secure API Access, Enterprise SSO).
- **Interactive Modals:** Dynamic modal workflows for free trial provisioning, live demo scheduling, enterprise console sign-in, and security specialist consultations with celebratory particle bursts.

---

## 🎨 Visual Direction & Design Tokens

- **Aesthetic:** Premium Dark Cybersecurity SaaS (Deep Charcoal `#05080E`, Card Surfaces `#090E18`, Borders `#1E293B`).
- **Atmospheric Lighting:** Subtle Emerald `#10B981` and Cyan `#06B6D4` status glows, 36px fine cyber grid background (`rgba(255,255,255,0.035)`), soft radial vignettes.
- **Typography:** Inter (`sans`) for high-contrast legible headings and copy; JetBrains Mono (`mono`) for technical labels, telemetry timestamps, and metrics.
- **Strict Anti-Tropes:** Zero matrix rain, zero skulls, zero lock clipart, zero generic illustrations, zero excessive sci-fi neon clutter.

---

## 🚀 Tech Stack

- **Framework:** React 19 + TypeScript + Vite 6
- **Styling:** Tailwind CSS 3.4 (custom cyber theme tokens, dark scrollbars, cyber grid)
- **Animations:** Framer Motion 12
- **Icons:** Lucide React
- **Micro-Interactions:** Canvas Confetti

---

## 📂 Architecture

```
landing-pages/securenest/
├── design-system/
│   └── securenest/
│       └── MASTER.md            # Master design tokens & style guide
├── src/
│   ├── components/
│   │   ├── Navbar.tsx           # Sticky glassmorphic navbar with mobile drawer
│   │   ├── Hero.tsx             # Floating Command Center with telemetry sparkline & live feed
│   │   ├── TrustBar.tsx         # Fictional enterprise client logos (Nexora, Cloudgrid, etc.)
│   │   ├── SecurityOverview.tsx # 4 command center feature cards with technical micro-visuals
│   │   ├── SecurityDashboard.tsx# Full-width interactive posture dashboard with tabs & metrics
│   │   ├── ThreatMonitor.tsx    # Split layout with live regional threat map & status telemetry
│   │   ├── VulnerabilityScanner.tsx # Interactive CVE scanner with animated progress & remediation
│   │   ├── SecurityAlerts.tsx   # Filterable alert management interface with status toggles
│   │   ├── Compliance.tsx       # SOC 2, ISO 27001, GDPR, HIPAA cards with SVG progress rings
│   │   ├── Reports.tsx          # Monthly security report preview & export actions
│   │   ├── HowItWorks.tsx       # 3-step horizontal workflow (Connect → Detect → Protect)
│   │   ├── Integrations.tsx     # 10 top connectors & 50+ integrations badge
│   │   ├── SecurityTrust.tsx    # 6 zero-trust foundation pillars
│   │   ├── Testimonials.tsx     # 3 professional peer review cards
│   │   ├── Pricing.tsx          # Starter ($29), Professional ($99), Enterprise (Custom)
│   │   ├── FAQ.tsx              # 7 accessible accordion FAQ items
│   │   ├── FinalCTA.tsx         # High-impact CTA with abstract geometric shield backdrop
│   │   ├── Footer.tsx           # 4-column directory, live system operational indicator
│   │   └── Modal.tsx            # Multi-mode modal (Trial, Demo, Sign-In, Expert)
│   ├── data/
│   │   └── securenestData.ts    # Centralized data store and TypeScript types
│   ├── utils/
│   │   └── confetti.ts          # Particle celebration utility
│   ├── App.tsx                  # Root page assembly & modal state management
│   ├── main.tsx                 # React DOM mount entry
│   └── index.css                # Global cyber grid & typography styles
├── index.html                   # SEO metadata, geometric favicon, web fonts
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Visit `http://localhost:5176` in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## 📄 License
MIT License. © 2026 SecureNest Inc. All rights reserved.
