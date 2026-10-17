import { DocumentItem, DocumentComparisonData } from '../types';

export const SAMPLE_DOCUMENTS: DocumentItem[] = [
  {
    id: 'doc-1',
    title: 'Annual_Report_2026.pdf',
    type: 'pdf',
    fileSize: '4.8 MB',
    lastModified: 'Oct 14, 2026',
    pages: 42,
    collection: 'Financials',
    status: 'indexed',
    excerpt: 'Comprehensive operational performance evaluation detailing cost structures, customer lifetime value expansion, and targeted efficiency metrics.',
    tags: ['Annual Report', 'Operations', 'Finance', 'Audited'],
    summary: {
      executiveSummary: 'The 2026 Annual Review examines operational health across enterprise business units, highlighting resilient revenue expansion despite upward pressure on core operating expenses.',
      keyFindings: [
        'Operating expenses rose by 14.2% primarily driven by compute and infrastructure scaling.',
        'Customer retention reached an all-time benchmark of 96.4%, up 280 bps year-over-year.',
        'Workflow redundancies in vendor procurement represent an immediate $2.4M automation opportunity.'
      ],
      importantNumbers: [
        { label: 'Net Retention', value: '118.5%', change: '+4.2%' },
        { label: 'Operating Margin', value: '28.4%', change: '-1.8%' },
        { label: 'Cloud Unit Cost', value: '$0.042/query', change: '-22%' }
      ],
      decisions: [
        'Approved phased migration to unified vector indexing infrastructure by Q1 2027.',
        'Allocated $6.2M for internal process automation initiatives.'
      ],
      risks: [
        'Prolonged vendor supply lead times for specialized machine-learning hardware.',
        'Regulatory shifts in cross-border document data residency rules in EU/APAC.'
      ],
      recommendedActions: [
        'Review discretionary operating costs in customer success tooling.',
        'Prioritize workflow automation across contract processing.',
        'Track cohort retention metrics monthly at executive committee.'
      ]
    },
    pagesContent: [
      {
        pageNumber: 1,
        heading: '1.0 Executive Overview & Strategic Mandate',
        content: 'During fiscal year 2026, DocuMind enterprise initiatives consolidated legacy document silos into real-time neural indexing nodes. Revenue expansion surpassed internal targets by 12%, though operating expenditures adjusted upward in response to cloud cluster demand.'
      },
      {
        pageNumber: 8,
        heading: '3.2 Core Operational Findings & Margin Analysis',
        content: 'Detailed audit of enterprise operational expenses reveals three structural shifts. First, compute requirements for dense document embeddings escalated cloud operational costs by 14.2%. Second, continuous retrieval precision directly contributed to an increase in enterprise customer retention to 96.4%. Third, repetitive manual document validation across procurement was identified as a primary bottleneck.',
        highlightPassage: 'The report identifies three key findings: rising operating costs, improved customer retention, and an opportunity to automate repetitive workflows.'
      },
      {
        pageNumber: 14,
        heading: '5.1 Capital Allocation & Automation Roadmap',
        content: 'Investment focus shifts toward zero-latency inference caching and automated clause extraction. The executive committee ratified a $6.2M capital budget earmarked for autonomous document ingestion pipelines.'
      }
    ],
    extractedData: [
      { key: 'Fiscal Period', value: 'FY 2026 (Jan 1 - Dec 31)', confidence: '99.8%' },
      { key: 'Primary Auditor', value: 'Deloitte & Touche LLP', confidence: '99.4%' },
      { key: 'Operating Net Income', value: '$34.82 Million USD', confidence: '99.1%' },
      { key: 'Active Enterprise Seats', value: '28,450', confidence: '98.5%' }
    ]
  },
  {
    id: 'doc-2',
    title: 'Product_Strategy.docx',
    type: 'docx',
    fileSize: '1.2 MB',
    lastModified: 'Oct 11, 2026',
    pages: 18,
    collection: 'Product & Tech',
    status: 'indexed',
    excerpt: 'Multi-year product architectural roadmap focusing on agentic document synthesis, zero-data-leakage enterprise sandboxes, and offline vector caches.',
    tags: ['Roadmap', 'Strategy', 'Architecture'],
    summary: {
      executiveSummary: 'Product roadmap setting forth quarterly milestones for DocuMind v3.0, focusing on private self-hosted models, sub-50ms hybrid semantic search, and collaborative multi-user research canvasses.',
      keyFindings: [
        'Enterprise customers demand strict on-premise or VPC isolation for sensitive files.',
        'Semantic search queries without citation highlights suffer 60% lower user trust scores.',
        'Side-by-side visual diffing is the #1 requested feature from corporate legal users.'
      ],
      importantNumbers: [
        { label: 'Target Latency', value: '< 65ms', change: '-40%' },
        { label: 'Index Accuracy', value: '99.4%', change: '+3.1%' },
        { label: 'Active Connectors', value: '14 Integrations', change: '+6' }
      ],
      decisions: [
        'Deprecate legacy keyword-only indexer in favor of BM25 + Dense Hybrid Vector ranking.',
        'Prioritize SOC2 Type II and HIPAA compliance hardening for healthcare tenants.'
      ],
      risks: [
        'Browser WebAssembly memory constraints when rendering 500+ page technical PDFs.'
      ],
      recommendedActions: [
        'Ship client-side PDF rasterization streaming by November sprint.',
        'Conduct usability sessions on the side-by-side document comparison prototype.'
      ]
    },
    pagesContent: [
      {
        pageNumber: 2,
        heading: 'Section 1: Architecture Priorities',
        content: 'Customer research underscores that document intelligence without direct source citations invites skepticism. The v3 release enforces strict source grounding: every synthesized sentence maps to an exact paragraph token coordinate.'
      },
      {
        pageNumber: 5,
        heading: 'Section 2: Privacy Sandboxing & Guardrails',
        content: 'Enterprise documents remain strictly inside client trust boundaries. No customer document vectors are mixed into public foundation training matrices.',
        highlightPassage: 'Strict zero-retention policies guarantee uploaded documents are processed ephemerally in isolated runtime enclaves.'
      }
    ],
    extractedData: [
      { key: 'Target Release', value: 'DocuMind v3.2 Enterprise', confidence: '99.5%' },
      { key: 'Supported Embeddings', value: 'BGE-Large-v1.5 / Custom', confidence: '98.9%' },
      { key: 'Max Context Window', value: '1,000,000 Tokens', confidence: '97.4%' }
    ]
  },
  {
    id: 'doc-3',
    title: 'Market_Research.pdf',
    type: 'pdf',
    fileSize: '3.4 MB',
    lastModified: 'Oct 08, 2026',
    pages: 31,
    collection: 'Executive Briefs',
    status: 'indexed',
    excerpt: 'Global market analysis of intelligent document processing (IDP) and unstructured data extraction trends across North America and Europe.',
    tags: ['Market Intel', 'Research', 'Competitive'],
    summary: {
      executiveSummary: 'Synthesizes enterprise market trends revealing that 82% of enterprise data remains locked in unstructured PDFs, memos, and slide decks, accelerating IDP adoption.',
      keyFindings: [
        'The global Intelligent Document Intelligence market will reach $11.4B by 2028.',
        'Finance and legal departments report an average of 14.5 hours spent per week per analyst searching for citations.',
        'Organizations using semantic retrieval report a 68% decrease in repetitive research inquiries.'
      ],
      importantNumbers: [
        { label: 'Market CAGR', value: '31.2%', change: '+5.4%' },
        { label: 'Unstructured Data', value: '82%', change: 'Stable' },
        { label: 'Time Saved/Wk', value: '14.5 hrs', change: '+3.2h' }
      ],
      decisions: [
        'Focus direct sales efforts on mid-market legal firms and financial advisory teams.',
        'Introduce self-serve starter tier to capture technical researchers and solo analysts.'
      ],
      risks: [
        'Commoditization of basic generic LLM wrappers that lack deep document-coordinate awareness.'
      ],
      recommendedActions: [
        'Differentiate DocuMind through strict auditability, deterministic citations, and speed.'
      ]
    },
    pagesContent: [
      {
        pageNumber: 4,
        heading: 'Industry Dynamics & Market Size',
        content: 'Organizations ingest an estimated 3.2 million documents per billion dollars of gross revenue. Traditional optical character recognition (OCR) fails on complex tabular forms, necessitating visual-semantic multimodal encoders.',
        highlightPassage: 'Finance and legal teams spend approximately 14.5 hours every week simply hunting down specific figures across disparate PDF disclosures.'
      }
    ],
    extractedData: [
      { key: 'Total Addressable Market', value: '$11.4 Billion by 2028', confidence: '99.0%' },
      { key: 'Key Growth Vertical', value: 'Banking & Legal Compliance', confidence: '98.2%' }
    ]
  },
  {
    id: 'doc-4',
    title: 'Employee_Handbook.pdf',
    type: 'pdf',
    fileSize: '2.1 MB',
    lastModified: 'Sep 29, 2026',
    pages: 26,
    collection: 'Legal & Policy',
    status: 'indexed',
    excerpt: 'Comprehensive internal policies covering remote work protocols, data handling guidelines, parental leave, and professional development stipends.',
    tags: ['HR', 'Policy', 'Handbook', 'Compliance'],
    summary: {
      executiveSummary: 'Internal corporate governance manual covering working standards, intellectual property assignments, remote equipment allowances, and data governance obligations.',
      keyFindings: [
        'Core collaboration hours designated as 10:00 AM - 3:00 PM EST.',
        'Annual remote learning and equipment stipend refreshed at $1,800 per full-time team member.',
        'All client-associated documents must be stored inside approved DocuMind cryptographic vaults.'
      ],
      importantNumbers: [
        { label: 'Annual Stipend', value: '$1,800/yr', change: '+$300' },
        { label: 'Parental Leave', value: '16 Weeks', change: '+4 wks' },
        { label: 'Core Hours', value: '10am - 3pm EST', change: 'Standard' }
      ],
      decisions: [
        'Standardized 30-day notice for international remote work relocation.'
      ],
      risks: [
        'Shadow IT document usage violating client non-disclosure requirements.'
      ],
      recommendedActions: [
        'Mandate DocuMind workspace onboarding for all incoming hires in Week 1.'
      ]
    },
    pagesContent: [
      {
        pageNumber: 7,
        heading: 'Section 4: Remote Work & Equipment Stipends',
        content: 'Full-time employees receive an annual stipend of $1,800 for remote office ergonomics and continuous learning. Hardware refreshes occur on a 24-month depreciation cycle.'
      },
      {
        pageNumber: 12,
        heading: 'Section 9: Document Classification & Data Protection',
        content: 'All internal research papers, contracts, and financial spreadsheets are classified as Tier 2 Confidential. Uploading to public, non-sandboxed consumer AI tools constitutes a direct policy violation.'
      }
    ],
    extractedData: [
      { key: 'Effective Date', value: 'October 1, 2026', confidence: '99.9%' },
      { key: 'Policy Owner', value: 'People & Legal Ops', confidence: '99.7%' },
      { key: 'Review Cadence', value: 'Bi-Annual', confidence: '98.9%' }
    ]
  },
  {
    id: 'doc-5',
    title: 'Project_Proposal.docx',
    type: 'docx',
    fileSize: '950 KB',
    lastModified: 'Oct 15, 2026',
    pages: 12,
    collection: 'Executive Briefs',
    status: 'ready',
    excerpt: 'Strategic proposal outlining the automation of intake contracts, reduction of onboarding churn, and consolidation of multi-department review cycles.',
    tags: ['Proposal', 'Operations', 'Q4 Initiative'],
    summary: {
      executiveSummary: 'Proposes modernizing enterprise client intake through intelligent document classification, targeted OCR preprocessing, and automated citation matching.',
      keyFindings: [
        'Manual client intake takes an average of 9.2 business days.',
        'Standardized automated extraction can compress the onboarding cycle to under 24 hours.',
        'Key recommendations center on streamlining onboarding, automating repetitive tasks, and establishing KPIs.'
      ],
      importantNumbers: [
        { label: 'Intake Cycle', value: '24 Hours', change: '-89%' },
        { label: 'Estimated ROI', value: '340%', change: 'Yr 1' },
        { label: 'Budget Request', value: '$240,000', change: 'CapEx' }
      ],
      decisions: [
        'Initiate 6-week pilot with Northstar operations unit.'
      ],
      risks: [
        'Legacy integration latency with on-premise ERP databases.'
      ],
      recommendedActions: [
        'Streamline the onboarding process across commercial clients.',
        'Automate repetitive operational tasks in contract review.',
        'Establish clear performance indicators and SLA dashboards.'
      ]
    },
    pagesContent: [
      {
        pageNumber: 2,
        heading: 'Section 2: Problem Statement & Friction Points',
        content: 'Current client onboarding requires five disparate teams to manually parse complex 80-page financial instruments. This introduces human transcription errors and decelerates revenue realization.',
        highlightPassage: 'The proposal highlights three primary recommendations: 1. Streamline the onboarding process. 2. Automate repetitive operational tasks. 3. Establish clear performance indicators.'
      },
      {
        pageNumber: 6,
        heading: 'Section 4: Proposed Implementation Architecture',
        content: 'By establishing DocuMind as the primary intake gate, documents are parsed in under 8 seconds. Extracted entities are normalized into JSON schema definitions and dispatched to verification queues.'
      }
    ],
    extractedData: [
      { key: 'Proposal Sponsor', value: 'VP Operations & Strategy', confidence: '99.4%' },
      { key: 'Implementation Timeline', value: '10 Weeks', confidence: '98.7%' },
      { key: 'Anticipated Annual Savings', value: '$720,000 / year', confidence: '97.9%' }
    ]
  },
  {
    id: 'doc-6',
    title: 'Financial_Overview.xlsx',
    type: 'xlsx',
    fileSize: '3.1 MB',
    lastModified: 'Oct 16, 2026',
    pages: 6,
    collection: 'Financials',
    status: 'indexed',
    excerpt: 'Consolidated financial balance sheet, quarterly cash flow variance analysis, and departmental OPEX distributions for FY2026.',
    tags: ['Finance', 'Spreadsheet', 'Budget', 'OPEX'],
    summary: {
      executiveSummary: 'Tabular financial ledger detailing revenue by product line, infrastructure gross margin variance, and headcount projections across engineering and go-to-market.',
      keyFindings: [
        'Gross margins expanded to 78.4% reflecting server consolidation.',
        'Sales and marketing expense stabilized at 32% of total recognized revenue.',
        'Cash reserves stand at $41.2M with 28 months of runway at current run rates.'
      ],
      importantNumbers: [
        { label: 'Gross Margin', value: '78.4%', change: '+3.2%' },
        { label: 'Cash Runway', value: '28 Months', change: '+6 mos' },
        { label: 'ARR Run-Rate', value: '$52.8M', change: '+38%' }
      ],
      decisions: [
        'Pre-purchase reserved cloud instances to secure 32% discount for 2027.'
      ],
      risks: [
        'Foreign exchange fluctuations in European regional billing tiers.'
      ],
      recommendedActions: [
        'Rebalance cloud spend allocations quarterly against active seat growth.'
      ]
    },
    pagesContent: [
      {
        pageNumber: 1,
        heading: 'Sheet 1: Consolidated Income Statement',
        content: 'Revenue: $52,800,000 | Cost of Goods Sold: $11,404,800 | Gross Profit: $41,395,200 (78.4% Margin) | Research & Development: $14,200,000 | Sales & Marketing: $16,896,000 | G&A: $5,120,000 | Operating Income: $5,179,200'
      },
      {
        pageNumber: 2,
        heading: 'Sheet 2: Cash Flow & Capital Reserve Variance',
        content: 'Operating cash flow generated: $8,420,000 | Capital Expenditures: $1,240,000 | Free Cash Flow: $7,180,000 | Ending Cash Balance: $41,200,000 with zero long-term debt liabilities.'
      }
    ],
    extractedData: [
      { key: 'Total Recognized ARR', value: '$52,800,000 USD', confidence: '99.9%' },
      { key: 'Gross Margin Rate', value: '78.4%', confidence: '99.8%' },
      { key: 'Net Working Capital', value: '$38.4 Million', confidence: '99.3%' }
    ]
  }
];

export const SAMPLE_COMPARISON_DATA: DocumentComparisonData = {
  titleA: 'Policy_V1.pdf',
  versionA: 'Version 1.4 (Archived 2025)',
  titleB: 'Policy_V2.pdf',
  versionB: 'Version 2.0 (Active 2026)',
  clausesA: [
    {
      id: 'c1',
      title: 'Clause 2.1 — Data Retention Period',
      text: 'Customer document vectors and extracted cache indices shall be maintained for a mandatory period of 36 months from initial upload before scheduled purge.',
      status: 'removed',
      annotation: 'Deprecated 36-month storage window'
    },
    {
      id: 'c2',
      title: 'Clause 4.3 — Physical Audit Trails',
      text: 'Department compliance managers must maintain physical, printed audit logs signed semi-annually and stored in fireproof company vaults.',
      status: 'removed',
      annotation: 'Manual paper audits eliminated'
    },
    {
      id: 'c3',
      title: 'Clause 6.2 — Remote Equipment Stipend',
      text: 'Full-time remote personnel are eligible for a maximum equipment reimbursement allowance of $500 per fiscal year upon manual receipt submission.',
      status: 'modified',
      annotation: 'Increased allowance in V2'
    },
    {
      id: 'c4',
      title: 'Clause 8.1 — Security Review Frequency',
      text: 'Information security audits of cloud storage and API endpoints shall take place on an annual review cadence every November.',
      status: 'modified',
      annotation: 'Cadence changed to quarterly in V2'
    },
    {
      id: 'c5',
      title: 'Clause 11.0 — Intellectual Property',
      text: 'All inventions, software models, and documentation created during working hours remain the exclusive intellectual property of the organization.',
      status: 'unchanged'
    }
  ],
  clausesB: [
    {
      id: 'c1-b',
      title: 'Clause 2.1 — Ephemeral Data Retention & GDPR Alignment',
      text: 'Customer document vectors and extracted cache indices shall be retained for a strictly enforced maximum of 12 months, or purged immediately upon tenant deletion request, in full compliance with updated GDPR Article 17.',
      status: 'added',
      annotation: 'Storage minimized from 36 to 12 months'
    },
    {
      id: 'c2-b',
      title: 'Clause 4.3 — Cryptographic Immutable Audit Trails',
      text: 'All document access, prompt queries, and exports are cryptographically logged in append-only tamper-evident event streams accessible via SOC2 compliance exports.',
      status: 'added',
      annotation: 'Automated cryptographic event logging'
    },
    {
      id: 'c3-b',
      title: 'Clause 6.2 — Remote Equipment & Learning Allowance',
      text: 'Full-time remote personnel are provided an expanded annual allowance of $850 for certified ergonomics and hardware upgrades via automatic expense cards.',
      status: 'modified',
      annotation: 'Upgraded from $500 to $850/yr'
    },
    {
      id: 'c4-b',
      title: 'Clause 8.1 — Continuous Quarterly Security Audits',
      text: 'Information security audits and penetration vulnerability testing shall occur on a mandatory quarterly schedule with third-party verification.',
      status: 'modified',
      annotation: 'Shifted from annual to quarterly'
    },
    {
      id: 'c5-b',
      title: 'Clause 11.0 — Intellectual Property',
      text: 'All inventions, software models, and documentation created during working hours remain the exclusive intellectual property of the organization.',
      status: 'unchanged'
    }
  ],
  summary: {
    additions: 2,
    removals: 2,
    modifications: 2,
    keyTakeaway: 'Version 2.0 significantly modernizes data privacy compliance by slashing retention from 36 to 12 months, automating tamper-evident audit logs, and elevating employee equipment stipends.',
    impactLevel: 'High'
  }
};

export const PRESET_QUESTIONS = [
  'What are the main findings in this report?',
  'What are the main recommendations in the project proposal?',
  'Summarize the financial performance overview',
  'What are the key risks mentioned in the documents?',
  'Find important dates, stipends, and deadlines',
  'Compare Policy_V1.pdf and Policy_V2.pdf'
];

export const PRESET_ANSWERS: Record<string, { text: string; citations: Array<{ id: string; docId: string; docTitle: string; section: string; page: number; excerpt: string }> }> = {
  'What are the main findings in this report?': {
    text: 'The report identifies three key findings:\n\n1. **Rising operating costs:** Infrastructure and cloud compute expenditures escalated by 14.2% year-over-year.\n2. **Improved customer retention:** Enterprise account retention reached an all-time record of 96.4%, driven by retrieval reliability.\n3. **Automation opportunity:** Identified a $2.4M immediate cost savings opportunity by automating repetitive procurement workflows.',
    citations: [
      {
        id: 'cit-1',
        docId: 'doc-1',
        docTitle: 'Annual_Report_2026.pdf',
        section: 'Section 3.2 — Core Operational Findings',
        page: 8,
        excerpt: 'The report identifies three key findings: rising operating costs, improved customer retention, and an opportunity to automate repetitive workflows.'
      }
    ]
  },
  'What are the main recommendations in the project proposal?': {
    text: 'The proposal highlights three primary recommendations:\n\n1. **Streamline the onboarding process:** Consolidate client intake from 9.2 days to under 24 hours using automated document ingestion.\n2. **Automate repetitive operational tasks:** Eliminate manual transcription errors across complex multi-page financial filings.\n3. **Establish clear performance indicators:** Implement live SLA monitoring dashboards and accuracy thresholds.',
    citations: [
      {
        id: 'cit-2',
        docId: 'doc-5',
        docTitle: 'Project_Proposal.docx',
        section: 'Section 2 — Problem Statement & Recommendations',
        page: 2,
        excerpt: 'The proposal highlights three primary recommendations: 1. Streamline the onboarding process. 2. Automate repetitive operational tasks. 3. Establish clear performance indicators.'
      },
      {
        id: 'cit-3',
        docId: 'doc-5',
        docTitle: 'Project_Proposal.docx',
        section: 'Section 4 — Implementation Architecture',
        page: 6,
        excerpt: 'By establishing DocuMind as the primary intake gate, documents are parsed in under 8 seconds.'
      }
    ]
  },
  'Summarize the financial performance overview': {
    text: 'Financial performance across FY2026 remains robust:\n\n- **Total ARR Run-Rate:** Reached $52.8M, representing a 38% annual growth trajectory.\n- **Gross Margin:** Stood at 78.4%, reflecting significant server optimization and caching efficiency.\n- **Cash Runway:** Over $41.2M in liquid cash reserves supporting 28 months of operational runway with zero debt.',
    citations: [
      {
        id: 'cit-4',
        docId: 'doc-6',
        docTitle: 'Financial_Overview.xlsx',
        section: 'Sheet 1 — Consolidated Income Statement',
        page: 1,
        excerpt: 'Gross Profit: $41,395,200 (78.4% Margin) | Ending Cash Balance: $41,200,000'
      }
    ]
  },
  'What are the key risks mentioned in the documents?': {
    text: 'Synthesizing across internal filings and annual audits, two primary risk vectors are highlighted:\n\n1. **Hardware & Compute Constraints:** Supply-chain latency in procurement for high-density neural inference hardware.\n2. **Cross-Border Regulatory Divergence:** Tightening data residency requirements in EU and APAC requiring isolated regional tenancy.',
    citations: [
      {
        id: 'cit-5',
        docId: 'doc-1',
        docTitle: 'Annual_Report_2026.pdf',
        section: 'Section 5.1 — Risk Disclosures',
        page: 14,
        excerpt: 'Regulatory shifts in cross-border document data residency rules in EU/APAC.'
      }
    ]
  },
  'Find important dates, stipends, and deadlines': {
    text: 'Key dates and employee provisions identified:\n\n- **Remote Stipend:** $1,800/year for equipment and continuing education (Employee Handbook).\n- **Policy Effective Date:** October 1, 2026.\n- **Hardware Refresh Cycle:** 24-month depreciation window.\n- **Core Working Hours:** 10:00 AM – 3:00 PM EST.',
    citations: [
      {
        id: 'cit-6',
        docId: 'doc-4',
        docTitle: 'Employee_Handbook.pdf',
        section: 'Section 4 — Remote Work & Stipends',
        page: 7,
        excerpt: 'Full-time employees receive an annual stipend of $1,800 for remote office ergonomics and continuous learning.'
      }
    ]
  },
  'Compare Policy_V1.pdf and Policy_V2.pdf': {
    text: 'Comparison between Policy_V1.pdf and Policy_V2.pdf shows three pivotal updates:\n\n1. **Data Retention:** Cut from 36 months down to 12 months to satisfy strict privacy mandates.\n2. **Audit Logs:** Replaced manual signed paper logs with immutable cryptographic event logs.\n3. **Remote Allowance:** Elevated from $500/yr to $850/yr with quarterly security reviews.',
    citations: [
      {
        id: 'cit-7',
        docId: 'doc-4',
        docTitle: 'Policy_V2.pdf',
        section: 'Clause 2.1 — Ephemeral Data Retention',
        page: 1,
        excerpt: 'Customer document vectors and extracted cache indices shall be retained for a strictly enforced maximum of 12 months.'
      }
    ]
  }
};

export const FAQ_ITEMS = [
  {
    q: 'What is DocuMind?',
    a: 'DocuMind is an AI-powered document intelligence workspace that transforms unstructured files (PDFs, Word documents, spreadsheets, text memos) into searchable, understandable, and actionable knowledge. Every answer generated by DocuMind includes exact document coordinate citations so you can verify answers instantly.'
  },
  {
    q: 'Which document formats are supported?',
    a: 'DocuMind natively supports PDF (.pdf), Microsoft Word (.docx), Microsoft Excel (.xlsx), and plain text (.txt). In this interactive web prototype, you can upload and test parsing for all four formats directly in your browser.'
  },
  {
    q: 'Can I ask questions about multiple documents?',
    a: 'Yes. DocuMind allows you to query individual documents, specific tagged collections (such as "Legal & Policy" or "Financials"), or your entire document library simultaneously. Citations will indicate the exact document and page number for each assertion.'
  },
  {
    q: 'How does document summarization work?',
    a: 'DocuMind breaks lengthy files into structured semantic sections: Executive Overview, Key Findings, Important Numbers, Strategic Decisions, Identified Risks, and Recommended Actions. This structure allows executives, analysts, and researchers to digest 50-page reports in under 90 seconds.'
  },
  {
    q: 'Can I compare two documents?',
    a: 'Yes. The Document Comparison engine provides side-by-side diffing between document versions (e.g., Policy_V1.pdf vs Policy_V2.pdf). Added text is highlighted in green, removed clauses in red, and altered values in amber, accompanied by an executive change summary.'
  },
  {
    q: 'Does DocuMind support scanned PDFs?',
    a: 'In a full production deployment, DocuMind connects to high-accuracy multimodal optical character recognition (OCR) and layout-aware vision models to parse scanned documents and hand-annotated forms. In this client-side prototype, text-based PDFs and sample files are processed locally.'
  },
  {
    q: 'How are my documents processed?',
    a: 'Uploaded files are parsed into semantic chunks, vectorized into isolated tenant index spaces, and queried with hybrid BM25 + dense neural retrieval. In this demonstration prototype, interactions are safely handled in local browser memory without transmitting your private files to third-party servers.'
  },
  {
    q: 'Can I export summaries?',
    a: 'Yes! You can copy synthesized answers to your clipboard, save answers to your personal workspace library, and export executive summaries in markdown or plain text format with a single click.'
  },
  {
    q: 'Can teams share document collections?',
    a: 'Yes. On the Team plan, workspaces support collaborative collections, role-based access control (Admin, Editor, Reviewer, Viewer), shared answer libraries, and team-wide search permissions.'
  },
  {
    q: 'Is there a free plan?',
    a: 'Yes, DocuMind provides a generous Free tier featuring an essential personal document workspace, standard semantic search, and summary capabilities with up to 10 active documents so you can experience the workflow before upgrading.'
  }
];

export const TESTIMONIALS = [
  {
    quote: 'DocuMind helps our team get to the important information without manually reviewing every page.',
    author: 'Operations Lead',
    company: 'Northstar',
    role: 'Enterprise Operations',
    metric: '9.2h saved weekly'
  },
  {
    quote: 'We needed a cleaner way to explore long reports. The document workspace makes the process easier to follow.',
    author: 'Research Manager',
    company: 'Meridian',
    role: 'Market Intelligence',
    metric: '68% faster review'
  },
  {
    quote: 'The ability to organize source references alongside answers makes our document workflow more transparent.',
    author: 'Product Lead',
    company: 'Studio North',
    role: 'Product Strategy',
    metric: '100% citation verified'
  }
];

export const USE_CASES = [
  {
    id: 'students-researchers',
    title: 'Students & Researchers',
    badge: 'Academic & Science',
    description: 'Summarize dense academic papers, extract methodologies, cross-examine literature reviews, and pinpoint exact citations without skimming endless pages.',
    examples: ['Dissertation literature reviews', 'Meta-analysis papers', 'Lab trial protocols'],
    icon: 'GraduationCap'
  },
  {
    id: 'business-teams',
    title: 'Business & Strategy Teams',
    badge: 'Operations',
    description: 'Unpack quarterly reviews, RFP proposals, competitor teardowns, and board decks. Arrive at meetings with verified data points ready to share.',
    examples: ['Quarterly QBR decks', 'RFP client responses', 'Annual operating plans'],
    icon: 'Briefcase'
  },
  {
    id: 'legal-compliance',
    title: 'Legal & Compliance Teams',
    badge: 'Governance',
    description: 'Organize complex regulatory policies, track version revisions across contracts, and isolate critical indemnification or compliance clauses for human review.',
    examples: ['Master service agreements', 'GDPR/HIPAA compliance logs', 'Vendor contract addendums'],
    icon: 'Scale',
    disclaimer: 'Provides semantic reference extraction; does not constitute certified legal counsel.'
  },
  {
    id: 'finance-teams',
    title: 'Finance & Accounting Teams',
    badge: 'Fiscal Planning',
    description: 'Extract balance sheet line items, compare audit revisions, track OPEX variances across fiscal quarters, and eliminate manual spreadsheet transcription.',
    examples: ['10-K & 10-Q SEC filings', 'Vendor pricing schedules', 'CapEx budget sheets'],
    icon: 'TrendingUp'
  },
  {
    id: 'hr-people-ops',
    title: 'HR & People Operations',
    badge: 'Talent & Culture',
    description: 'Instant answers for employee handbook questions, benefits schedules, parental leave policies, and onboarding checklists without repetitive emails.',
    examples: ['Employee handbooks', 'Health benefit schedules', 'Remote relocation guidelines'],
    icon: 'Users'
  },
  {
    id: 'dev-technical',
    title: 'Developers & Technical Teams',
    badge: 'Engineering',
    description: 'Navigate lengthy technical specifications, architectural decision records (ADRs), API documentation, and security audit checklists in seconds.',
    examples: ['Architecture design records', 'Security compliance audits', 'API reference manuals'],
    icon: 'Code'
  }
];
