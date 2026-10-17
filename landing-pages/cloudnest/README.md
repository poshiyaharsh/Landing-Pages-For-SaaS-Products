# CloudNest — Cloud Infrastructure Management Platform

> **Infrastructure without the complexity.**  
> Everything your infrastructure needs. Nothing it doesn't.  
> A premium, developer-friendly cloud management SaaS platform that unifies deployments, live topology visualizations, multi-environment routing, database provisioning, real-time observability, and cost governance.

---

## 1. Product Overview & Vision

**CloudNest** simplifies cloud infrastructure by helping modern software teams deploy applications, manage services, monitor resources, inspect logs, and understand their infrastructure from one clear, unified workspace.

Instead of navigating disparate, fragmented provider consoles (EC2, VPC, IAM, CloudWatch, RDS, S3), CloudNest provides a **developer-friendly control plane**:
- **Simplicity without sacrificing control:** Declarative `cloudnest.yaml` and CLI workflows.
- **Reliable infrastructure management:** Zero-downtime rolling container updates with instant rollbacks.
- **Visual topology:** Interactive service mesh with real-time latency and throughput metrics.
- **Unified observability:** Centralized logs and metrics without requiring SSH key management.
- **Predictable cost governance:** Live spend forecasting and automated idle-instance right-sizing suggestions.

---

## 2. Platform Capabilities & Features

### 01. Application Deployments
- Continuous deployment directly from GitHub and GitLab repositories.
- Zero-downtime rolling releases with automated health check validations.
- Commit-level deployment audit history with single-click rollbacks.

### 02. Infrastructure Overview
- Complete resource inventory across compute, databases, and persistent storage.
- Multi-cluster health metrics and cross-availability-zone status tracking.

### 03. Infrastructure Topology Visualization
- Interactive SVG service mesh connecting Web Applications, API Gateways, Event Workers, In-Memory Caches, Relational Databases, and Object Storage.
- Directional SVG paths with animated data flow indicators.
- Click-to-inspect service nodes showing replica counts, CPU/RAM utilization, endpoints, and connected dependencies.

### 04. Unified Monitoring & Observability
- Cluster-wide request throughput, p95 response latency, and HTTP 5xx error rate meters.
- Time range filters (`Last Hour`, `Last 24 Hours`, `Last 7 Days`) with responsive histogram recalculations.
- Operational audit event timeline tracking configuration changes and pod restarts.

### 05. Log Explorer
- Dark terminal-inspired console interface (`#0B1220`).
- Real-time search across log messages, HTTP status codes, and distributed trace IDs.
- Severity level filtering (`ALL`, `INFO`, `WARN`, `ERROR`).
- One-click log copying and diagnostic detail drawer.

### 06. Stateful Database & Storage Management
- Managed relational datastores (PostgreSQL 16, MySQL 8.0) and in-memory caches (Redis 7.2).
- Storage quota utilization meters, connection pool statistics, and point-in-time snapshot triggers.
- S3-compatible object storage buckets and persistent NVMe volume blocks.

### 07. Cost Visibility & Optimization
- Estimated monthly spending forecast vs. budget threshold limit ($850.00/mo).
- Resource category breakdown (Compute, Databases, Storage, Network Egress).
- Actionable automated recommendations to right-size idle development instances and archive cold snapshots.

### 08. Developer Experience (CLI & YAML)
- Lightweight command-line interface (`cloudnest init`, `cloudnest deploy`).
- Declarative `cloudnest.yaml` specification checked into source control roots.
- Fast copy-to-clipboard actions for configs and terminal installation commands.

---

## 3. Technology Stack

- **Core Framework:** React 19 (TypeScript)
- **Bundler & Dev Server:** Vite 6
- **Styling System:** Tailwind CSS 3.4
- **Iconography:** Lucide React (`lucide-react`)
- **Typography:**
  - Headlines & Brand: Space Grotesk
  - Interface Text: Inter
  - Terminal & Metrics: JetBrains Mono
- **Visuals:** SVG vector topology with CSS animation (`animate-flow`), canvas confetti celebration

---

## 4. Visual Identity & Design System

The visual design follows an enterprise-grade cloud infrastructure aesthetic:

| Token | Hex Value | Role / Semantics |
| :--- | :--- | :--- |
| `Main Background` | `#F7F9FC` | Clean technical page canvas |
| `Primary Surface` | `#FFFFFF` | Cards, modal sheets, tables |
| `Secondary Surface` | `#F0F4F9` | Sub-panels, input fields, subtle chips |
| `Primary Text` | `#111827` | Headings, high-contrast display text |
| `Secondary Text` | `#64748B` | Paragraphs, descriptions, secondary copy |
| `Border` | `#E2E8F0` | Structural dividers, card borders |
| `Primary Blue` | `#3468F5` | Primary actions, branding, active states |
| `Deep Blue` | `#2045B8` | Button hover states, active badges |
| `Soft Blue` | `#EAF1FF` | Light blue badge backgrounds |
| `Cyan Accent` | `#35C5E8` | Gateway nodes, terminal highlights |
| `Success Green` | `#159B69` | Operational health, passed checks |
| `Warning Amber` | `#D97706` | Memory thresholds, rollback warnings |
| `Console Background`| `#0B1220` | Dark terminal surfaces, log explorer |

---

## 5. Project Structure

```
landing-pages/cloudnest/
├── index.html                   # HTML template with Space Grotesk, Inter & JetBrains Mono
├── package.json                 # Project dependencies & npm scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # CloudNest custom color tokens & typography scales
├── tsconfig.json                # TypeScript compiler configuration
├── vite.config.ts               # Vite configuration (port 5191)
├── public/                      # Static assets & SVG favicon
└── src/
    ├── App.tsx                  # Root application wiring all sections & modals
    ├── index.css                # Global base styles, scrollbars & animated SVG flows
    ├── main.tsx                 # React DOM mount point
    ├── types/
    │   └── index.ts             # TypeScript definitions (ServiceItem, DeploymentItem, etc.)
    ├── data/
    │   └── sampleData.ts        # Sample services, topology nodes, logs, and telemetry
    └── components/
        ├── AuthModal.tsx        # Start Building / Sign In dialog with demo guest access
        ├── CapabilityStrip.tsx  # 6 core platform capabilities strip
        ├── CloudConsole.tsx     # 3-column interactive cloud console prototype
        ├── CoreFeatures.tsx     # 6 distinct engineering capability modules
        ├── CostDashboard.tsx    # Monthly spend allocation, trends, and optimization rules
        ├── DatabaseStorage.tsx  # Managed database clusters and persistent volume blocks
        ├── DeploymentLogsModal.tsx # Terminal modal displaying raw build & deploy streams
        ├── DeploymentWorkflow.tsx  # 4-step pipeline with interactive deploy runner
        ├── DeveloperExperience.tsx# CLI commands and declarative cloudnest.yaml tab
        ├── FAQ.tsx              # Accessible accordion with 10 questions
        ├── FinalCTA.tsx         # Closing call-to-action with topology preview
        ├── Footer.tsx           # Multi-column sitemap footer with copyright
        ├── HeroSection.tsx      # Cloud infrastructure hero with live topology preview
        ├── InfrastructureTopology.tsx # Interactive SVG service mesh visualizer
        ├── Integrations.tsx     # Ecosystem connectors (GitHub, Docker, K8s, Terraform)
        ├── LogExplorer.tsx      # Terminal log explorer with severity filtering
        ├── MonitoringDashboard.tsx # Real-time telemetry with 1h/24h/7d range filters
        ├── Navbar.tsx           # Sticky navigation with mobile drawer
        ├── NestLogo.tsx         # Cloud silhouette + geometric connection nodes logo
        ├── Pricing.tsx          # 3 tiers (Starter, Pro, Team) with annual discount toggle
        ├── ProblemSolution.tsx  # Split comparison: Fragmented DevOps vs CloudNest
        ├── SecuritySection.tsx  # Zero-trust ingress & execution pipeline architecture
        ├── ServiceDetailModal.tsx # Inspection dialog for pods, replicas, and ports
        ├── Testimonials.tsx     # Engineering feedback from fictional organizations
        ├── Toast.tsx            # Non-intrusive floating alert notifications
        └── UseCases.tsx         # 6 specialized team workflows (Startups, SREs, etc.)
```

---

## 6. Installation & Development

### Prerequisites
- Node.js `v18.0.0` or higher
- npm `v9.0.0` or higher

### 1. Install Dependencies
```bash
cd landing-pages/cloudnest
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The server will start locally at: `http://localhost:5191/`

### 3. Production Build & Typecheck
```bash
npm run build
```
Generates optimized, minified production assets into the `dist/` folder.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 7. Connecting Real Cloud Infrastructure (Production Roadmap)

To transition this interactive frontend demonstration into a live cloud management product:

1. **Cloud Provider Authentication & IAM:**
   - Configure OAuth / IAM Role delegation for AWS (Cross-Account IAM Roles / STS AssumeRole), GCP Service Accounts, and Azure Managed Identities.
2. **Kubernetes Cluster Agent:**
   - Deploy a lightweight in-cluster daemonset or Helm operator (`cloudnest-agent`) that streams Prometheus metrics and Kubernetes event logs back via mutual TLS (mTLS) gRPC.
3. **CI/CD Pipeline Engine:**
   - Integrate build runner queues using Tekton Pipelines, Argo Workflows, or GitHub Actions runners.
4. **Log Aggregation & Storage:**
   - Stream container stdout/stderr to ClickHouse, Grafana Loki, or OpenSearch for sub-second multi-tenant log indexing.
5. **Cost Allocation & Telemetry:**
   - Query cloud provider billing APIs (AWS Cost Explorer API, GCP Cloud Billing BigQuery exports) and reconcile pod-level CPU/memory consumption via OpenCost.
6. **Declarative State & GitOps:**
   - Parse `cloudnest.yaml` files and generate standard Kubernetes manifests or Terraform HCL modules applied through automated reconcilers.

---

## 8. License

© 2026 CloudNest. All rights reserved. Built for modern cloud infrastructure engineering.
