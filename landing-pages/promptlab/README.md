# PromptLab — AI Prompt Experimentation and Optimization Laboratory

> **"Build, test, and optimize AI prompts."**  
> Turn prompt experimentation into a measurable, repeatable engineering workflow.

PromptLab is an AI prompt engineering and experimentation platform built with technical precision, developer-first ergonomics, and an OLED dark interface designed to evoke a modern scientific AI laboratory.

---

## 🔬 Product Vision & Positioning

- **Product Name:** PromptLab
- **Tagline:** Build, test, and optimize AI prompts.
- **Category:** AI Prompt Engineering, LLM Experimentation, and Evaluation Platform.
- **Target Audience:** AI Engineers, prompt engineers, developer teams, LLM application builders, and researchers.
- **Design System:** Laboratory Dark System (`#0B0F19`, `#111827`, `#151D2E`) with Electric Cyan (`#06B6D4`), Teal (`#14B8A6`), Violet accents, and monospace code typography.

---

## 🚀 Key Features

1. **Interactive Prompt Playground:**
   - Real-time client-side prompt editor with character counter and dynamic variable injection (`{{product}}`, `{{audience}}`).
   - Model selection between GPT-4o, Claude 3.5 Sonnet, Llama 3.1 70B, and Mistral Large 2.
   - Temperature slider control (`0.0` deterministic to `1.0` creative) with live value readout.
   - Side-by-side multi-variant comparison (Variant A vs. Variant B vs. Variant C).
   - Deterministic local simulation engine with execution latency telemetry and simulated token counters.
   - One-click interpolated prompt copy and instant playground reset.

2. **Hero Experimentation Console:**
   - Multi-column IDE-style preview showcasing experiment history, variable injection payloads, prompt variants, live output responses, and three-layer rubric meters.

3. **6 Visual Feature Bento Modules:**
   - **Prompt Versioning:** Git-style diffs, commit tags, and branch rollback.
   - **Variant Testing:** Parallel execution against identical test inputs to isolate prompt drift.
   - **Model Comparison:** Cross-provider benchmarking with normalized latency curves.
   - **Evaluation Rubrics:** Automated quantitative assertions for clarity, instruction adherence, and schema validity.
   - **Experiment History:** Telemetry logs and regression detection across historical runs.
   - **Reusable Templates:** Verified prompt architectures for RAG, classification, summarization, and agents.

4. **Iterative 4-Step Methodology:**
   - Interactive stepper guiding developers from baseline prompts to controlled variations, sample tests, and empirical rubric comparison.

5. **Rubric Intelligence & Comparative Evaluation:**
   - Custom SVG comparative bar charts evaluating Clarity & Brevity, Instruction Adherence, Output Schema Consistency, Semantic Relevance, and Token Efficiency.
   - Labeled clearly as sample evaluation fixtures to avoid unverified benchmark claims.

6. **6 Production Use Cases:**
   - AI Application Development, Customer Support Automation, Content Generation, Information Extraction, Research & Benchmarking, Structured Output Generation.
   - Includes real prompt templates with copy-to-clipboard functionality.

7. **Ecosystem & Integrations:**
   - Connection blueprints for OpenAI, Anthropic Claude, Meta Llama, LangChain/LangSmith, LlamaIndex, and GitHub Actions CI.

8. **Transparent Developer Pricing:**
   - Starter Lab ($0/mo), Pro Lab ($29/mo), and Team Studio ($79/mo) with monthly/annual billing toggle.

9. **Accessible FAQs & Documentation:**
   - 6 detailed accordion items covering local simulation vs. live endpoints, zero data retention, and export workflows.

---

## 🛠️ Tech Stack & Architecture

- **Framework:** React 19 + TypeScript 5.7
- **Bundler:** Vite 6
- **Styling:** Tailwind CSS 3.4 + Custom dark laboratory design tokens
- **Icons:** `lucide-react` (Zero emoji used in UI)
- **Delight & Animations:** `canvas-confetti` + CSS keyframe micro-interactions

---

## 📦 Getting Started

### Installation

```bash
cd landing-pages/promptlab
npm install
```

### Development Server

```bash
npm run dev
# Running on http://localhost:5196
```

### Production Build

```bash
npm run build
# Outputs optimized assets to dist/
```

---

## 🔒 Note on Simulated Demonstrations

PromptLab's web preview operates a client-side sandbox with realistic deterministic fixtures. It does not execute live billing requests or external LLM API calls without user-provided BYOK (Bring Your Own Key) credentials, preserving security, privacy, and zero data leakage.
