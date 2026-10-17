# MarketMind — Market Intelligence & Research Terminal

> **Tagline:** Know your market before it moves.  
> **Port:** `5202`  
> **Visual Direction:** Institutional financial-terminal aesthetic, deep charcoal palette (`#080C14`), amber accents (`#F59E0B`), ticker emerald (`#10B981`), deficit red (`#EF4444`), crisp monospace tabular numerals, and transparent research workflows.

---

## 1. Product Overview

MarketMind is an institutional-grade financial intelligence and research terminal. Built for buy-side analysts, macro researchers, and corporate development strategists, it brings multi-asset timeseries, macroeconomic indicators (FRED), sector factor rotation, and contextual event analysis into a dense, distraction-free workspace.

---

## 2. UI UX Pro Max Design System Reference

- **Design System Location:** `design-system/marketmind/MASTER.md`
- **Archetype:** Institutional Financial Terminal / Quantitative Research Workspace
- **Color Palette:**
  - Terminal Charcoal Base: `#080C14`
  - High-Density Surface: `#0E1626` / `#141E33`
  - Primary Ticker Accent (Amber): `#F59E0B`
  - Positive Yield / Momentum (Emerald): `#10B981`
  - Deficit / Inversion Alert (Red): `#EF4444`
- **Typography:** JetBrains Mono and Inter with tabular figures.

---

## 3. Implemented Capabilities & Demos

1. **Interactive Terminal Console (`#demo`):**
   - **Multi-Asset Watchlist:** Instant switching across Broad Market (SPX.MIND), Nova Silicon (NVX.SEMI), Cloud SaaS (CLD.TECH), 10Y Treasury (US10Y.RATE), Energy Grid (NRG.PWR), and Digital Assets (DIG.ASST).
   - **Search & Sector Filtering:** Real-time filtering across Semiconductors, Technology, Macro, Energy, and Crypto.
   - **Timeseries Horizon Controls:** 1D, 1W, 1M, 1Y, and 5Y resolutions.
   - **Interactive SVG Chart:** Hover-responsive datapoints with normalized volatility curves and consensus annotations.
   - **Integrated Research Notes:** Editable investment thesis scratchpad with local session persistence.
   - **Macroeconomic Monitor:** Live Federal Reserve (FRED) prints including Core PCE, Fed Funds target, and 2Y-10Y yield curve inversion spreads.
   - **Contextual Anomaly Feed:** Synthetic corporate disclosures and economic catalyst stream.
2. **Institutional Toolkit (`#features`):** 6 key pillars including Cross-Asset Views, Historical Decompositions, Factor Rotation, and Anomaly Context.
3. **Research Lifecycle (`#workflow`):** 5-stage institutional research progression (Select Market → Historical Patterns → Cross-Indicator Comparison → Contextual Catalysts → Document Thesis).
4. **Sector Factor Performance (`#sectors`):** Real-time industry heatmap showing benchmark weightings and momentum leaders.
5. **Feed Architecture (`#feeds`):** Direct exchange FIX 4.4, FRED REST API, SEC EDGAR XBRL parser, and CBOE volatility fabric.
6. **Workstation Pricing (`#pricing`):** Research Analyst ($95/mo), Professional Terminal ($280/mo), Institutional ($750/mo) with annual discount toggle.
7. **Compliance & Disclosures FAQ (`#faq`):** 6 accordions answering live vs synthetic fixtures, Bloomberg independence, and SEC Rule 17a-4 recordkeeping.

---

## 4. Run Locally

```bash
cd "landing-pages/marketmind"
npm install
npm run dev
```

Server runs on: [http://localhost:5202](http://localhost:5202)

## 5. Production Build

```bash
npm run build
```
