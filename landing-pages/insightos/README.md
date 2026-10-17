# InsightOS — Executive Analytics & Decision Intelligence

> **Tagline:** Make every decision data-driven.  
> **Port:** `5199`  
> **Visual Direction:** Premium executive analytics, dark institutional palette (`#080C14`), electric cyan accents (`#38BDF8`), sub-second telemetry visualization, and transparent business intelligence workflows.

---

## 1. Product Overview

InsightOS unifies fragmented data warehouses, BI charts, and metric definitions into a single, synchronized decision workspace. Built for executives, analysts, and cross-functional leadership, it enables multi-segment exploration, cohort analysis, and automated insight generation.

---

## 2. UI UX Pro Max Design System Reference

- **Design System Location:** `design-system/insightos/MASTER.md`
- **Archetype:** Executive Analytics / High-Density Business Intelligence
- **Color Palette:**
  - Deep Navy Base: `#080C14`
  - Surface Glass: `#0E1626` / `#162035`
  - Primary Accent (Cyan): `#38BDF8`
  - Success / Growth (Emerald): `#10B981`
  - Muted Borders: `rgba(255, 255, 255, 0.08)`
- **Typography:** Inter / system monospace tabular numerals for instant readability.

---

## 3. Implemented Capabilities & Demos

1. **Interactive Executive Console (`#demo`):**
   - **Segment Cohort Switcher:** All Segments, Enterprise, Mid-Market, SMB with dynamically recalculating metrics.
   - **Time Horizon Controls:** 7D, 30D, 90D, YTD, 1Y with scaled financial velocity.
   - **Interactive SVG Chart:** Hover-responsive datapoints with ARR velocity curves and benchmark comparisons.
   - **Conversion Funnel Visualization:** Stage-by-stage pipeline progression with conversion percentages.
   - **Automated AI Insight Panel:** Synthesized executive recommendations with confidence ratings.
   - **Data Grid Mode:** Tabular dimension inspection with variance tracking.
   - **Filter Reset & CSV Export Simulation:** Honest, instant frontend demonstration feedback.
2. **Core Capabilities (`#features`):** 6 key pillars including Unified Metrics, Executive Dashboards, Anomaly Exploration, and Zero-ETL Lakehouse connectivity.
3. **Decision Lifecycle (`#story`):** 4-stage workflow (Observe → Investigate → Understand → Act).
4. **Tailored Workspaces (`#solutions`):** Department-specific views for Executives, Product, Marketing, Sales, Finance, and Operations.
5. **Zero-Copy Lakehouse Fabric (`#connectors`):** Snowflake, BigQuery, Databricks, PostgreSQL, ClickHouse, and Stripe adapter specs.
6. **Transparent Pricing (`#pricing`):** Emerging ($249/mo), Growth ($699/mo), Enterprise (Custom) with annual discount toggle.
7. **Interactive FAQs (`#faq`):** 6 accordions addressing latency, security, and permissions.

---

## 4. Run Locally

```bash
cd "landing-pages/insightos"
npm install
npm run dev
```

Server runs on: [http://localhost:5199](http://localhost:5199)

## 5. Production Build

```bash
npm run build
```
