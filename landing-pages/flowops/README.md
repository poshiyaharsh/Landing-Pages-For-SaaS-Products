# FlowOps — Automate the Work Behind Your Work

> **"Automate the work behind your work."**  
> Connect the tools you use, automate repetitive processes, and give your team more time for the work that moves your business forward.

FlowOps is a visual workflow automation and business process orchestration platform designed for operations, RevOps, engineering, and product teams.

---

## ⚡ Product Vision & Positioning

- **Product Name:** FlowOps
- **Tagline:** Automate the work behind your work.
- **Category:** Workflow Automation & Business Process Orchestration SaaS.
- **Target Audience:** Operations teams, RevOps managers, engineering leads, fast-growing startups, and cross-functional teams.
- **Visual Direction:** Minimal Stark & Linear Clean (`#F8FAFC`, `#0F172A`) with Electric Blue accents (`#2563EB`), connected node graphs, and clear status indicators.

---

## 🚀 Key Features

1. **Interactive Workflow Canvas & Node Explorer:**
   - Visual node sequence with triggers, condition gates, and downstream actions.
   - Live simulated test run executing step-by-step payloads with latency tracking and status feedback.
   - Node configuration inspector drawer.

2. **Flagship Visual Canvas Studio:**
   - Dynamic workflow renaming.
   - Action palette allowing users to add Slack alerts, HubSpot syncs, Linear issues, Stripe actions, and custom webhooks.
   - Step enablement toggles and node deletion.
   - Deterministic test execution engine with step playback and error visibility.

3. **6 Reusable Automation Blueprints:**
   - Instant Lead Follow-Up
   - New Employee Onboarding
   - VIP Support Ticket Routing
   - Customer Feedback to Linear Task
   - Weekly KPI Report Distribution
   - Multi-Tier Budget Approval

4. **6 Core Orchestration Modules:**
   - Visual Workflow Builder
   - Conditional Branching & Loops
   - App & Service Connectors
   - Reusable Workflow Templates
   - Run History & Error Visibility
   - Team-Level Governance

5. **4-Stage Delivery Methodology:**
   - Discover Repetitive Work ➔ Configure Triggers & Actions ➔ Test with Sample Payloads ➔ Activate & Monitor.

6. **150+ App Ecosystem:**
   - Slack, Salesforce, HubSpot, Linear, Stripe, PostgreSQL / Snowflake.

7. **Transparent Developer & Operations Pricing:**
   - Starter ($0), Professional ($29/mo), and Business ($79/mo).

8. **Accessible FAQs & Documentation:**
   - 6 detailed questions addressing webhook triggers, retry policies, data privacy, and simulated demonstration limits.

---

## 🛠️ Tech Stack & Architecture

- **Framework:** React 19 + TypeScript 5.7
- **Bundler:** Vite 6 (Port 5198)
- **Styling:** Tailwind CSS 3.4 + Custom canvas grid styling
- **Icons:** `lucide-react` (Zero emoji used in UI)
- **Delight & Animations:** `canvas-confetti` + responsive CSS transitions

---

## 📦 Getting Started

### Installation

```bash
cd landing-pages/flowops
npm install
```

### Development Server

```bash
npm run dev
# Running on http://localhost:5198
```

### Production Build

```bash
npm run build
# Outputs optimized assets to dist/
```

---

## 🔒 Note on Simulated Demonstrations

FlowOps's web demonstration runs client-side simulations of workflow step execution and webhook ingestion. Actual integration with third-party tools (such as Slack, Salesforce, or Stripe) requires an authenticated cloud account with corresponding API credentials.
