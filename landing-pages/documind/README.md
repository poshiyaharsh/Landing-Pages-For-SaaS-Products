# DocuMind — AI-Powered Document Intelligence Platform

> **Your documents. Now truly intelligent.**  
> A premium, minimalist AI document platform that transforms complex documents into searchable, understandable, and actionable knowledge with deterministic coordinate citations, instant summaries, and side-by-side comparative audits.

---

## 1. Product Overview & Vision

**DocuMind** bridges the gap between massive, unstructured document silos (PDFs, Word documents, financial spreadsheets, technical memos) and fast executive decision-making. 

Instead of relying on brittle keyword matching or generic chatbot wrappers that hallucinate answers, DocuMind enforces **strict token and coordinate grounding**: every generated answer is directly linked to an exact paragraph on a specific document page.

### Core Value Pillars
- **Simplicity:** Uncluttered light-first surfaces, subtle borders, and precise alignment.
- **Intelligence:** Semantic retrieval that understands context, intent, and numerical structures.
- **Trust & Precision:** Verifiable source citations mapping directly to document coordinates.
- **Organization:** Collections, saved answer banks, and structured table extractions.
- **Security & Privacy:** Ephemeral client-side sandboxing with clear deletion controls.

---

## 2. Platform Capabilities & Features

### 01. Ask Your Documents (Conversational Intelligence)
- Natural language inquiries grounded strictly in verified document text.
- Interactive token coordinate badges linking directly to page paragraphs.
- Multi-file synthesis across entire workspace collections.

### 02. Intelligent Summaries
- Structured 6-part executive briefing cards:
  - **Executive Summary**
  - **Key Findings**
  - **Important Numbers & Financial KPIs**
  - **Strategic Decisions**
  - **Identified Risks**
  - **Recommended Actions**
- One-click copy and Markdown export.

### 03. Semantic Document Search
- Concept and meaning-based search beyond exact filenames or keywords.
- Dynamic filtering across PDFs, Word Docs, Spreadsheets, and Collections.
- Excerpt highlighting with confidence score percentages (e.g., 99.4% Match).

### 04. Document Comparison & Diff Audit
- Side-by-side clause inspection between document revisions (e.g., `Policy_V1.pdf` vs `Policy_V2.pdf`).
- Color-coded diff markers:
  - **Green:** Additions (e.g., GDPR 12-month retention, immutable audit trails).
  - **Red / Strikethrough:** Deprecations (e.g., manual paper logs).
  - **Amber:** Alterations (e.g., stipend updates, quarterly cadence).
- Executive Comparison Audit modal with clause filtering and exportable change logs.

### 05. Structured Data Extraction
- Automatic detection of tabular coordinates, fiscal periods, audit firms, and balance sheet line items.
- Normalized key-value schema with confidence ratings.

### 06. Organized Knowledge Workspace
- 3-column real application workspace:
  - **Left Sidebar:** Overview, All Documents, Collections, Recent Activity, Saved Answers.
  - **Center Library:** Live search, format chips (PDF, DOCX, XLSX), document metadata cards, and preview links.
  - **Right Assistant:** Persistent conversational grounding, suggested prompt chips, copy, and pin-to-workspace actions.

### 07. Document Ingestion & Upload Zone
- Drag-and-drop file upload with format validation (`.pdf`, `.docx`, `.xlsx`, `.txt`, max 25 MB).
- Multi-stage simulated ingestion pipeline: Header Validation $\rightarrow$ Coordinate Extraction $\rightarrow$ Vector Indexing $\rightarrow$ Ready.
- Ephemeral local browser sandboxing notice.

---

## 3. Technology Stack

- **Core Framework:** React 19 (TypeScript)
- **Build Tool & Bundler:** Vite 6
- **Styling & Design System:** Tailwind CSS 3.4
- **Iconography:** Lucide React (`lucide-react`)
- **Typography:** Inter (headings & body), JetBrains Mono (metadata, coordinates, technical badges)
- **Effects:** Canvas Confetti (`canvas-confetti`), subtle custom micro-animations

---

## 4. Visual Identity & Design System

The visual design follows a light-first, minimalist document editor aesthetic:

| Token | Hex Value | Semantic Role |
| :--- | :--- | :--- |
| `Background` | `#F7F8FA` | Page background, clean neutral canvas |
| `Primary Surface` | `#FFFFFF` | Cards, modal sheets, reading surfaces |
| `Secondary Surface` | `#F1F3F5` | Sub-panels, input fields, subtle chips |
| `Primary Text` | `#17191D` | Headlines, primary body copy, titles |
| `Secondary Text` | `#666D78` | Excerpts, descriptions, secondary copy |
| `Muted Text` | `#8B929D` | Footers, timestamps, labels |
| `Border` | `#E5E7EB` | Subtle structural division |
| `Primary Accent` | `#6256E8` | Purple intelligence actions, active tabs |
| `Soft Accent` | `#EFEDFF` | Citation highlights, prompt pills |
| `Success` | `#23865B` | Grounded verification, additions, healthy index |
| `Warning` | `#B7791F` | Alterations, cautions, notices |

---

## 5. Project Structure

```
landing-pages/documind/
├── index.html                   # HTML template with Google Fonts (Inter + JetBrains Mono)
├── package.json                 # Project dependencies & scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # DocuMind color tokens, typography & shadow scales
├── tsconfig.json                # TypeScript compiler configuration
├── vite.config.ts               # Vite configuration (port 5189)
├── public/                      # Static assets & favicon
└── src/
    ├── App.tsx                  # Main app assembling landing sections & modals
    ├── index.css                # Global styles, font settings & custom scrollbars
    ├── main.tsx                 # React DOM mount point
    ├── types/
    │   └── index.ts             # TypeScript interfaces (DocumentItem, ChatMessage, etc.)
    ├── data/
    │   └── sampleData.ts        # Sample document corpus, presets, FAQs, testimonials
    └── components/
        ├── AuthModal.tsx        # Sign In & Get Started dialog
        ├── CapabilityStrip.tsx  # 5 core capability highlights
        ├── ComparisonSummaryModal.tsx # Side-by-side policy diff audit modal
        ├── DocuLogo.tsx         # Document outline + purple spark wordmark
        ├── DocumentChat.tsx     # Dedicated grounded Q&A dialogue showcase
        ├── DocumentComparison.tsx # Version diffing section
        ├── DocumentPreviewModal.tsx # High-fidelity reading & coordinate viewer
        ├── DocumentWorkspace.tsx# 3-column interactive application prototype
        ├── FAQ.tsx              # 10 accessible accordion questions
        ├── FeaturesSection.tsx  # 6 feature modules with varied layouts
        ├── FinalCTA.tsx         # Closing call-to-action with grounded preview
        ├── Footer.tsx           # Categorized navigation & copyright
        ├── HeroSection.tsx      # Minimalist editorial hero with live preview
        ├── InsightsDashboard.tsx# Ingestion analytics & format breakdown
        ├── Navbar.tsx           # Sticky navigation with mobile menu
        ├── Pricing.tsx          # 3 tiers with annual/monthly discount toggle
        ├── ProblemSolution.tsx  # Split comparison: Document chaos vs DocuMind
        ├── SecuritySection.tsx  # Privacy sandboxing & responsible architecture
        ├── SmartSearch.tsx      # Semantic search with query filters
        ├── SummaryShowcase.tsx  # 6-part executive summary vs original report
        ├── Testimonials.tsx     # Understated user workflow perspectives
        ├── Toast.tsx            # Non-intrusive notification banner
        ├── UploadExperience.tsx # Drag & drop file ingestion pipeline
        └── UseCases.tsx         # 6 specialized solutions (Legal, Finance, HR, etc.)
```

---

## 6. Installation & Development

### Prerequisites
- Node.js `v18.0.0` or higher
- npm `v9.0.0` or higher

### 1. Install Dependencies
```bash
cd landing-pages/documind
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The server will start locally at: `http://localhost:5189/`

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

## 7. Sample Document Corpus

The prototype includes six pre-indexed realistic sample documents:

1. **`Annual_Report_2026.pdf`** (42 Pages, Financials) — Operational review, customer retention (96.4%), and $2.4M procurement automation opportunity.
2. **`Product_Strategy.docx`** (18 Pages, Product & Tech) — Architectural roadmap, sub-65ms hybrid vector search, and privacy sandboxing.
3. **`Market_Research.pdf`** (31 Pages, Executive Briefs) — Unstructured document processing market growth to $11.4B by 2028.
4. **`Employee_Handbook.pdf`** (26 Pages, Legal & Policy) — Remote equipment stipend ($1,800/yr), 16-week parental leave, and compliance standards.
5. **`Project_Proposal.docx`** (12 Pages, Executive Briefs) — Client intake automation compressing onboarding from 9.2 days to 24 hours.
6. **`Financial_Overview.xlsx`** (6 Sheets, Financials) — $52.8M ARR run-rate, 78.4% gross margin, and $41.2M liquid reserves.

---

## 8. Steps to Connect a Real Backend / LLM Pipeline

To transition this interactive prototype into a full production SaaS backend:

1. **Document Storage & Ingestion Pipeline:**
   - Configure Amazon S3 or Google Cloud Storage with presigned upload URLs.
   - Run asynchronous ingestion workers using AWS Lambda or Celery/Redis.
2. **Text & Coordinate Extraction:**
   - Integrate PDF parser libraries (e.g., `PyMuPDF`, `pdfplumber`, or AWS Textract) to preserve bounding box coordinates for each token.
3. **Dense Vector Embeddings & Vector DB:**
   - Generate embeddings using models such as `text-embedding-3-large` or self-hosted `BGE-Large-en-v1.5`.
   - Store vectors in Pinecone, Qdrant, Milvus, or pgvector with metadata filtering (e.g., tenant ID, document ID, page number).
4. **Hybrid Retrieval (BM25 + Dense Semantic):**
   - Implement reciprocal rank fusion (RRF) combining lexical keywords with semantic vector similarity.
5. **Grounded Generation & Citation Enforcement:**
   - Pass retrieved chunks with coordinate metadata into Claude 3.5 Sonnet or Gemini 1.5 Pro.
   - Enforce system prompts requiring exact quote tags `[DocTitle:Page:Token]` in every synthesized sentence.
6. **Authentication & Multi-Tenancy:**
   - Connect Clerk, Auth0, or Supabase Auth with Row-Level Security (RLS) guaranteeing strict cross-tenant data isolation.

---

## 9. License

© 2026 DocuMind. All rights reserved. Built for intelligent enterprise document workflows.
