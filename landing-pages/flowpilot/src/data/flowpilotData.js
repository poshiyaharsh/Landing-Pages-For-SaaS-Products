export const NAV_LINKS = [
  { name: 'Features', href: '#features' },
  { name: 'Live Simulation', href: '#demo' },
  { name: 'Workflow', href: '#workflow' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' }
];

export const TRUST_METRICS = [
  { value: '4.2x', label: 'Faster Sprint Execution', subtext: 'Based on 500+ engineering teams' },
  { value: '99.4%', label: 'Critical Path Accuracy', subtext: 'AI predictive milestone tracking' },
  { value: '18 hrs', label: 'Saved per PM Weekly', subtext: 'Zero manual status deck creation' },
  { value: '45,000+', label: 'Active Developers', subtext: 'Across 62 countries worldwide' }
];

export const TRUST_LOGOS = [
  { name: 'Vercel', label: 'VERCEL' },
  { name: 'Supabase', label: 'SUPABASE' },
  { name: 'Linear', label: 'LINEAR' },
  { name: 'Datadog', label: 'DATADOG' },
  { name: 'Retool', label: 'RETOOL' },
  { name: 'Postman', label: 'POSTMAN' }
];

export const CORE_FEATURES = [
  {
    id: 'ai-planning',
    tag: 'INTELLIGENT BREAKDOWN',
    title: 'AI Task Planning & Auto-Decomposition',
    description: 'Transform high-level product briefs and raw user stories into structured sprints, prioritized subtasks, and calibrated story points in seconds.',
    iconName: 'Sparkles',
    stats: '85% faster backlog grooming',
    badgeColor: 'cyan',
    highlights: [
      'Natural language PRD to backlog translation',
      'Automatic complexity scoring based on codebase history',
      'Suggested assignees based on domain ownership'
    ]
  },
  {
    id: 'smart-timelines',
    tag: 'DYNAMIC CRITICAL PATH',
    title: 'Smart Project Timelines & Risk Forecasting',
    description: 'Continuous Monte Carlo simulation evaluates PR velocity, holiday schedules, and cross-team dependencies to flag blockers 14 days before they hit.',
    iconName: 'Network',
    stats: '14-day early bottleneck alerts',
    badgeColor: 'blue',
    highlights: [
      'Self-healing Gantt charts that adjust automatically',
      'Dependency graph visualization with risk highlights',
      'Multi-scenario sprint forecasting'
    ]
  },
  {
    id: 'team-collaboration',
    tag: 'REAL-TIME SYNCHRONIZATION',
    title: 'Contextual Team Collaboration',
    description: 'Keep engineers in their flow. Native two-way sync with GitHub, GitLab, Jira, and Slack keeps code commits, pull requests, and tasks unified.',
    iconName: 'Users',
    stats: 'Zero context switching',
    badgeColor: 'purple',
    highlights: [
      'Auto-close tasks from Git commit messages and PR merges',
      'Contextual AI comment summaries in Slack channels',
      'Live multiplayer cursor presence across project boards'
    ]
  },
  {
    id: 'ai-progress',
    tag: 'EXECUTIVE INTELLIGENCE',
    title: 'AI Progress Summaries & Velocity Audits',
    description: 'Skip the endless standup meetings. FlowPilot synthesizes async check-ins, PR merges, and ticket changes into concise morning executive briefs.',
    iconName: 'TrendingUp',
    stats: '60% fewer status meetings',
    badgeColor: 'emerald',
    highlights: [
      'Daily 2-minute audio & text executive standup digest',
      'Sprint velocity anomalies & burnup trend detection',
      'Engineering workload balance heatmaps'
    ]
  },
  {
    id: 'automated-reports',
    tag: 'ZERO-MANUAL REPORTING',
    title: 'Automated Status Reports & Stakeholder Decks',
    description: 'Generate polished, board-ready presentation slides, PDF audits, and weekly stakeholder emails with one click. No copy-pasting numbers.',
    iconName: 'FileCheck',
    stats: '100% automated weekly digests',
    badgeColor: 'amber',
    highlights: [
      'Custom branded executive PDF exports',
      'Automated email digests with custom stakeholder views',
      'Audit trails & SOC2 Type II compliance logging'
    ]
  }
];

export const SIMULATION_PRESETS = [
  {
    id: 'mobile-app',
    prompt: 'Launch React Native Mobile App v2 with Apple Pay & Biometrics in 4 Weeks',
    category: 'Mobile Engineering',
    sprintDuration: '4 Weeks • 2 Sprints',
    confidenceScore: '96% on-time delivery confidence',
    tasksGenerated: 18,
    criticalPath: 'Auth Provider Integration → Stripe API → App Store Sandbox Review',
    stages: [
      {
        title: 'Phase 1: Architecture & Auth',
        status: 'completed',
        progress: 100,
        tasks: ['Configure FaceID / Biometric hooks', 'Setup JWT token refresh loop', 'Apple Developer Team Provisioning']
      },
      {
        title: 'Phase 2: Payment Pipeline',
        status: 'in-progress',
        progress: 68,
        tasks: ['Integrate Apple Pay PKPaymentSheet', 'Webhook idempotency handlers', 'Stripe customer balance ledger']
      },
      {
        title: 'Phase 3: QA & Store Submission',
        status: 'pending',
        progress: 15,
        tasks: ['Testflight staging build distribution', 'Compliance privacy nutrition label', 'Store metadata screenshot automation']
      }
    ]
  },
  {
    id: 'cloud-migration',
    prompt: 'Migrate Distributed Monolith to Kubernetes Microservices on AWS EKS',
    category: 'Infrastructure & DevOps',
    sprintDuration: '6 Weeks • 3 Sprints',
    confidenceScore: '92% on-time delivery confidence',
    tasksGenerated: 24,
    criticalPath: 'Stateful Database Replicas → Helm Chart Ingress → Cutover Canary',
    stages: [
      {
        title: 'Phase 1: Containerization & Helm',
        status: 'completed',
        progress: 100,
        tasks: ['Multi-stage Docker build optimizations', 'ArgoCD GitOps pipeline manifests', 'Secrets Manager Vault integration']
      },
      {
        title: 'Phase 2: Cluster Setup & Ingress',
        status: 'in-progress',
        progress: 55,
        tasks: ['EKS Node Group autoscaling topology', 'ALB Ingress Controller SSL termination', 'Datadog DaemonSet observability']
      },
      {
        title: 'Phase 3: Database & Traffic Cutover',
        status: 'pending',
        progress: 5,
        tasks: ['Postgres logical replication replication lag check', 'DNS Route53 weighted canary deployment', 'Rollback playbook runbook testing']
      }
    ]
  },
  {
    id: 'ai-feature',
    prompt: 'Embed Generative RAG Search & Vector Retrieval into SaaS Workspace',
    category: 'AI / LLM Integration',
    sprintDuration: '3 Weeks • 2 Sprints',
    confidenceScore: '98% on-time delivery confidence',
    tasksGenerated: 14,
    criticalPath: 'Chunking Pipeline → Pinecone Indexing → Latency Streaming API',
    stages: [
      {
        title: 'Phase 1: Embeddings & Vector Store',
        status: 'completed',
        progress: 100,
        tasks: ['Document chunking tokenizer with overlap', 'Batch upsert to Pinecone serverless', 'Hybrid BM25 keyword reranker']
      },
      {
        title: 'Phase 2: Prompt Engine & Context Window',
        status: 'in-progress',
        progress: 80,
        tasks: ['Guardrails against prompt injection', 'Context window token optimization', 'Server-sent events streaming UI']
      },
      {
        title: 'Phase 3: User Eval & Benchmarking',
        status: 'pending',
        progress: 20,
        tasks: ['Ragas retrieval accuracy eval set', 'P99 latency caching with Redis', 'Telemetry feedback thumb ratings']
      }
    ]
  }
];

export const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Connect & Ingest',
    description: 'Plug FlowPilot into your GitHub, Jira, Figma, and Slack in 60 seconds with OAuth. FlowPilot parses your codebase commit history and roadmap context.',
    badge: '1-Click Connect'
  },
  {
    step: '02',
    title: 'AI Blueprint Generation',
    description: 'Type any product goal or upload a PRD. FlowPilot decomposes work, generates calibrated user stories, and automatically detects cross-project dependencies.',
    badge: 'Autonomous Planning'
  },
  {
    step: '03',
    title: 'Live Predictive Execution',
    description: 'As developers write code and open PRs, timelines update automatically. Bottlenecks are flagged days before deadlines slip.',
    badge: 'Continuous Simulation'
  },
  {
    step: '04',
    title: 'Automated Stakeholder Sync',
    description: 'Executive summaries, sprint velocity metrics, and client slide decks are published on autopilot without a single status meeting.',
    badge: 'Instant Visibility'
  }
];

export const TESTIMONIALS = [
  {
    quote: 'FlowPilot cut our sprint planning meetings from 4 hours down to 25 minutes. The AI decomposition is frighteningly accurate to how our senior engineers think.',
    author: 'Elena Rostova',
    role: 'VP of Engineering',
    company: 'HyperScale Systems',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    metrics: '70% reduction in planning overhead'
  },
  {
    quote: 'The critical path simulator alerted us to a third-party API blocker 12 days before our scheduled launch date. We saved easily $80,000 in delayed SLA penalties.',
    author: 'Marcus Vance',
    role: 'Head of Product',
    company: 'Orbit Logistics',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    metrics: 'Saved 2 critical project delays'
  },
  {
    quote: 'Our engineers actually love this because it pulls directly from GitHub pull requests. Nobody has to manually update a Jira board ever again.',
    author: 'Sarah Chen',
    role: 'CTO & Co-Founder',
    company: 'NeuralStack AI',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
    metrics: '100% developer adoption rate'
  }
];

export const PRICING_TIERS = [
  {
    name: 'Starter Pilot',
    description: 'Ideal for fast-moving startups and high-velocity engineering pods.',
    priceMonthly: 29,
    priceYearly: 24,
    badge: null,
    isPopular: false,
    ctaText: 'Start 14-Day Free Trial',
    ctaVariant: 'secondary',
    features: [
      'Up to 15 team members',
      'AI Sprint decomposition (50 goals/mo)',
      'GitHub, GitLab & Slack integration',
      'Real-time dependency timelines',
      'Daily AI executive standup summaries',
      'Standard community support'
    ]
  },
  {
    name: 'Growth Flight',
    description: 'Designed for scaling scale-ups that need deep predictive intelligence.',
    priceMonthly: 79,
    priceYearly: 64,
    badge: 'MOST POPULAR',
    isPopular: true,
    ctaText: 'Deploy Growth Pilot',
    ctaVariant: 'primary',
    features: [
      'Up to 50 team members',
      'Unlimited AI Goal decomposition',
      'Predictive Monte Carlo risk simulation',
      'Two-way Jira & Linear continuous sync',
      'Custom automated stakeholder PDF slides',
      'Workload & burnout heatmaps',
      'Priority 24/7 Slack support'
    ]
  },
  {
    name: 'Enterprise Fleet',
    description: 'Tailored for multi-team organizations with rigorous security & governance.',
    priceMonthly: 199,
    priceYearly: 159,
    badge: 'MAX CONTROL',
    isPopular: false,
    ctaText: 'Schedule Technical Demo',
    ctaVariant: 'secondary',
    features: [
      'Unlimited team members & workspaces',
      'Private VPC & On-Prem LLM deployment',
      'Custom LLM fine-tuning on git history',
      'SSO (SAML, Okta) & RBAC permissioning',
      'Dedicated Customer Success Architect',
      'SOC2 Type II & GDPR compliance guarantees',
      'Custom SLA 99.99% uptime guarantee'
    ]
  }
];

export const FAQ_ITEMS = [
  {
    question: 'How does FlowPilot decompose technical requirements?',
    answer: 'FlowPilot ingests your natural language specifications, RFC documents, or Figma links and cross-references them with your historical git commits and codebase architectures. It identifies logical boundaries, estimates complexity using story point heuristics, and maps dependencies.'
  },
  {
    question: 'Does FlowPilot store or train on our proprietary code?',
    answer: 'No. FlowPilot adheres to strict enterprise privacy policies. We utilize zero-data retention APIs with SOC2 Type II certification. Your source code, commits, and internal documentation are never used to train public or foundational models.'
  },
  {
    question: 'Can we keep our existing Jira or Linear setup?',
    answer: 'Absolutely. FlowPilot is designed to enhance your existing stack rather than force a painful migration. Through bidirectional webhooks, actions taken in FlowPilot sync directly to Jira, Linear, GitHub Issues, or Asana in real time.'
  },
  {
    question: 'How accurate is the predictive critical path forecasting?',
    answer: 'In benchmark evaluations across 500+ active software engineering pods, FlowPilot’s Monte Carlo schedule simulations achieved a 99.4% milestone precision within a 48-hour tolerance window.'
  },
  {
    question: 'Can I trial FlowPilot with my team before committing?',
    answer: 'Yes. Every workspace receives a full-featured 14-day trial with no credit card required. You can invite your team, connect GitHub or Slack, and run live sprint simulations immediately.'
  }
];
