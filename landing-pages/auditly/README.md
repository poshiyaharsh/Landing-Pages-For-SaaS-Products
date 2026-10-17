# Auditly — Enterprise Compliance & Security Management Platform

> **Compliance that works for you.**  
> An enterprise compliance, risk management, and security governance platform built for security teams, compliance officers, IT administrators, auditors, and leadership.

---

## 1. Overview & Product Concept

**Auditly** is an enterprise compliance management workspace designed to organize compliance requirements, monitor control implementation status, manage operational risks, collect audit evidence, track remediation tasks, and maintain clear audit trails in one unified, collaborative environment.

Modern organizations face severe compliance operational overhead:
- Control statuses and evidence files scattered across disconnected spreadsheets, Slack channels, and local drives.
- Ambiguous control ownership and missed review cadences.
- Stressful, weeks-long manual audit preparation scrambles.
- Unstructured risk registers disconnected from engineering ticketing tools.
- Overdue remediation findings without active owner SLAs.

Auditly replaces fragmented spreadsheets with structured governance workflows, providing verifiable accountability, continuous readiness, and transparent auditor handoff.

> **Important Regulatory Notice:** Auditly is a software management platform. Auditly does not guarantee regulatory compliance, eliminate all security risks, or substitute for independent evaluations conducted by accredited CPA firms or external certifying bodies.

---

## 2. Key Features

- **Continuous Compliance Dashboard**: Real-time posture tracking for SOC 2 Type II, ISO/IEC 27001:2022, GDPR, NIST CSF 2.0, and HIPAA Security Rule.
- **Framework & Control Management**: Hierarchical categorization across Trust Services Criteria (Security, Availability, Confidentiality, Processing Integrity, Privacy).
- **Interactive 5×5 Risk Matrix**: Standardized likelihood and impact scoring (1 to 25 pts) with dynamic cell selection, category filtering, and mitigation action tracking.
- **Centralized Evidence Vault**: Document management with SHA-256 integrity simulation, review cadences, expiration dates, and direct control linkages.
- **Chronological Audit Trail**: Timestamped activity ledger tracking status updates, evidence uploads, owner assignments, and report exports with copyable Event IDs (e.g., `EVT-9042`).
- **Remediation Task Kanban**: Action item tracking across *To Do*, *In Progress*, and *Completed* columns with SLA due date warnings and priority classification (Critical, High, Medium, Low).
- **Executive Reporting & CSV Export**: Real-time distribution metrics, control status breakdowns, and one-click formatted CSV matrix downloads (`Auditly_Control_Compliance_Matrix_Q3.csv`).
- **Role-Based Access Governance**: Role taxonomy modeling (Administrator, Compliance Manager, Auditor, Control Owner, Viewer) with transparent prototype authorization disclosures.
- **Workflow Automation & AI Assistance**: Automated review cadence reminders and deterministic synthesis queries for outstanding compliance items.
- **Accessible & Responsive Architecture**: Strict WCAG 2.1 AA color contrast compliance, textual status indicators (never relying on color alone), and responsive layout across desktop, tablet, and mobile.

---

## 3. Technology Stack

- **Core Framework**: React 19 + TypeScript 5.7
- **Bundler & Dev Server**: Vite 6.2 (configured on port `5193`)
- **Styling**: Tailwind CSS 3.4 with custom enterprise navy, blue, teal, success, warning, and critical color tokens
- **Icons**: Lucide React
- **Celebration Effects**: Canvas Confetti (for demo booking interactions)
- **Typography**: Inter (UI), Plus Jakarta Sans (Headings), JetBrains Mono (Technical identifiers, audit event IDs, timestamps)

---

## 4. Design System & Palette

| Token | Hex Value | Semantic Usage |
| :--- | :--- | :--- |
| **Main Background** | `#F6F8FB` | Application and landing page canvas |
| **Primary Surface** | `#FFFFFF` | Cards, modals, tables, and dialogs |
| **Secondary Surface** | `#EEF2F7` | Subtle pill backgrounds, tab containers |
| **Border Color** | `#DFE6EF` | Clean, subtle grid lines and component separators |
| **Primary Navy** | `#142C4E` | Headers, brand accents, primary buttons |
| **Enterprise Blue** | `#3569D4` | Brand highlight, links, active tab rings |
| **Teal Accent** | `#159B91` | Activity indicators, verified badge highlights |
| **Success Green** | `#17865C` | Implemented controls, approved evidence |
| **Warning Amber** | `#C17A18` | Moderate risk, controls needing attention |
| **Critical Red** | `#C74747` | Critical risk findings and overdue tasks (*operational only, never decorative*) |
| **Dark Dashboard** | `#101927` | Console top bar and technical architecture diagram |

---

## 5. Project Structure

```
landing-pages/auditly/
├── public/
├── src/
│   ├── components/
│   │   ├── AuditlyLogo.tsx           # Minimal geometric audit checkmark emblem
│   │   ├── Navbar.tsx                # Sticky navigation with mobile menu drawer
│   │   ├── HeroSection.tsx           # Enterprise hero with live dashboard preview
│   │   ├── CapabilityStrip.tsx       # 6 core platform capabilities
│   │   ├── ProblemSolution.tsx       # Split comparison: Spreadsheets vs Auditly
│   │   ├── CoreFeatures.tsx          # 6 distinctive feature modules with telemetry
│   │   ├── ComplianceDashboard.tsx   # Interactive centerpiece application
│   │   ├── FrameworkManager.tsx      # Control criteria checklist & modal triggers
│   │   ├── RiskRegister.tsx          # 5x5 Heatmap matrix & filterable register
│   │   ├── EvidenceLibrary.tsx       # Document cards, preview & upload dialog
│   │   ├── AuditTrail.tsx            # Chronological activity stream & copy ID
│   │   ├── RemediationBoard.tsx      # 3-column task kanban with status moves
│   │   ├── ReportingDashboard.tsx    # Distribution progress & CSV export
│   │   ├── TeamManagement.tsx        # Role permissions & access modeling
│   │   ├── AutomationShowcase.tsx    # 5-step workflow & AI query assistant
│   │   ├── SecuritySection.tsx       # Data flow diagram & security principles
│   │   ├── UseCases.tsx              # 6 persona modules with enterprise stats
│   │   ├── Testimonials.tsx          # 3 restrained fictional customer cards
│   │   ├── Pricing.tsx               # Starter, Professional, Enterprise tiers
│   │   ├── FAQ.tsx                   # 10 accessible accordion questions
│   │   ├── FinalCTA.tsx              # Closing call to action
│   │   ├── Footer.tsx                # Categorized navigation & legal disclosures
│   │   ├── AuthModal.tsx             # Demo booking & SSO sign-in modal
│   │   ├── ControlDetailModal.tsx    # Control status editor & owner reassignment
│   │   ├── EvidencePreviewModal.tsx  # Document inspection & SHA-256 preview
│   │   ├── RiskDetailModal.tsx       # 5x5 scoring sliders & mitigation editor
│   │   ├── TaskDetailModal.tsx       # Remediation task modal & SLA dates
│   │   └── Toast.tsx                 # Auto-dismissing feedback notifications
│   ├── data/
│   │   └── sampleData.ts             # Centralized datasets (Controls, Risks, FAQs)
│   ├── types/
│   │   └── index.ts                  # TypeScript data interfaces and types
│   ├── App.tsx                       # Master application component & state handlers
│   ├── index.css                     # Base styling, custom scrollbars, animations
│   └── main.tsx                      # Vite React 19 entry point
├── index.html                        # HTML template with Google Fonts
├── package.json                      # Dependencies and scripts
├── postcss.config.js                 # PostCSS Tailwind integration
├── tailwind.config.js                # Custom enterprise color palette & font tokens
├── tsconfig.json                     # Strict TypeScript compiler options
└── vite.config.ts                    # Vite config (port 5193)
```

---

## 6. Installation & Development

### Prerequisites
- Node.js (v18.0.0 or later recommended)
- npm or pnpm

### Getting Started

1. Navigate to the `auditly` folder:
   ```bash
   cd "landing-pages/auditly"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the development server:
   ```bash
   npm run dev
   ```
   The local preview will be available at `http://localhost:5193/`.

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview the production build locally:
   ```bash
   npm run preview
   ```

---

## 7. Interactive Prototype Features & Data Models

- **Live State Updates**: Changes made in the `ControlDetailModal` (updating a control to *Implemented* or reassigning an owner) instantly update dashboard percentages and append a real event entry to the `AuditTrail`.
- **Dynamic 5×5 Matrix Filtering**: Clicking on coordinate cells (e.g. Likelihood 3, Impact 4) or severity distribution bars actively filters the table of operational risks.
- **Task Kanban Progression**: Clicking *Start Task* or *Mark Completed* transitions tasks between *To Do*, *In Progress*, and *Completed* states, dynamically updating overdue indicators and resolution percentages.
- **Real CSV Export**: The *Export CSV Matrix* action in the Reporting section compiles current in-memory controls, statuses, owners, and review dates into a browser-downloadable `.csv` file.
- **Simulated SSO & Demo Booking**: The *Book a Demo* modal collects work email, company size, primary framework of interest, and demo date, triggering a confetti celebration and notification toast.

---

## 8. Backend Integration Requirements (Production Roadmap)

To deploy Auditly with real enterprise organizational records:
1. **Identity & Single Sign-On**: Integrate SAML 2.0 / OIDC with Okta, Azure Active Directory, or Google Workspace with JIT user provisioning.
2. **Cloud Infrastructure Integrations**: Implement read-only connectors for AWS CloudTrail, GCP Cloud Logging, Azure Policy, GitHub Enterprise, and Kubernetes API to automate evidence collection.
3. **Database & Storage**: Store evidence files in encrypted S3/GCS buckets with FIPS 140-3 customer-managed KMS encryption; store audit events in an immutable, append-only database (e.g., PostgreSQL with ledger tables or AWS QLDB).
4. **Notification Pipelines**: Connect review cadences and SLA alerts to Slack incoming webhooks, PagerDuty, and enterprise email relays.

---

## 9. License & Attribution

© 2026 Auditly. All rights reserved. Created for enterprise compliance and risk governance demonstration.
