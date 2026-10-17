# APIHub — Build, Connect, and Scale Your APIs

> Centralized API workspace for catalog management, interactive endpoint exploration, automated schema validation, and high-throughput edge routing.

APIHub is an enterprise API developer portal and interactive API explorer built with React 19, TypeScript, Vite 6, and Tailwind CSS.

## Key Features

- **Interactive Endpoint Explorer:** Test and inspect REST, GraphQL, and AI inference endpoints with editable HTTP methods, URL paths, JSON request bodies, and headers.
- **Client-Side Simulation Engine:** Deterministic response fixtures, latency simulation (18ms–68ms), response headers, pretty-printed JSON, and client-side execution history.
- **JSON Syntax Validation:** Instant detection of malformed request payloads with accessible error feedback.
- **Developer Documentation Showcase:** Polished parameter tables and multi-language client snippets (cURL, TypeScript SDK, Python, Go).
- **Service Architecture Topology:** Interactive multi-tier routing diagram (Client Apps &rarr; Global Edge Proxy &rarr; Microservices &rarr; Data Stores).
- **Predictable Pricing Model:** Starter, Developer, and Platform tiers with monthly/annual billing discount toggle.
- **Developer Workspace Sandbox Modal:** Provision simulated edge gateway sandboxes with custom domain slugs, primary regions, and auth standards.
- **Full Responsiveness & Accessibility:** Optimized for 375px mobile, 768px tablet, 1024px laptop, and 1440px desktop viewports with zero horizontal overflow.

## Technology Stack

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite 6
- **Styling:** Tailwind CSS 3.4
- **Icons:** Lucide React
- **Aesthetic:** Technical futuristic developer console with JetBrains Mono + IBM Plex Sans, deep midnight slate background (`#020617`), and cyan/emerald/violet syntax highlights.

## Development

```bash
# Install dependencies
npm install

# Run local development server (Port 5205)
npm run dev

# Build production bundle
npm run build
```

## Disclaimer

APIHub is a simulated SaaS developer portal concept. All endpoint executions, latency measurements, and responses are illustrative client-side fixtures and do not dispatch external network requests to live third-party services.
