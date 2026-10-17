import {
  DateRange,
  CustomerSegment,
  SegmentDataset,
  MetricRow,
  FeatureItem,
  DataStoryStep,
  TeamUseCase,
  DataConnector,
  PricingPlan,
  FAQItem,
} from '../types';

export const dateRangeMultipliers: Record<DateRange, number> = {
  '7D': 0.12,
  '30D': 0.35,
  '90D': 1.0,
  YTD: 2.1,
  '1Y': 3.8,
};

export const segmentData: Record<CustomerSegment, SegmentDataset> = {
  all: {
    kpis: [
      {
        id: 'arr',
        label: 'Annual Run-Rate (ARR)',
        value: '$14.82M',
        change: '+24.6%',
        changeType: 'positive',
        timeframe: 'vs last 90-day cycle',
      },
      {
        id: 'nrr',
        label: 'Net Revenue Retention',
        value: '124.8%',
        change: '+3.2%',
        changeType: 'positive',
        timeframe: 'expansion velocity',
      },
      {
        id: 'customers',
        label: 'Active Paying Accounts',
        value: '1,420',
        change: '+18.4%',
        changeType: 'positive',
        timeframe: 'net added accounts',
      },
      {
        id: 'efficiency',
        label: 'Burn Efficiency Ratio',
        value: '2.4x',
        change: '+0.5x',
        changeType: 'positive',
        timeframe: 'top quartile efficiency',
      },
    ],
    revenueTrend: [
      { month: 'Nov', revenue: 980, target: 920 },
      { month: 'Dec', revenue: 1040, target: 990 },
      { month: 'Jan', revenue: 1120, target: 1060 },
      { month: 'Feb', revenue: 1220, target: 1150 },
      { month: 'Mar', revenue: 1340, target: 1240 },
      { month: 'Apr', revenue: 1482, target: 1350 },
    ],
    funnel: [
      { stage: 'Qualified Platform Visitors', count: 184500, conversion: '100%' },
      { stage: 'Product Trial Workspaces', count: 24600, conversion: '13.3%' },
      { stage: 'Telemetry Adapter Connected', count: 11800, conversion: '48.0%' },
      { stage: 'Executive Briefing Held', count: 2420, conversion: '20.5%' },
      { stage: 'Commercial Contracts Signed', count: 680, conversion: '28.1%' },
    ],
    insightAnnotation: {
      title: 'CROSS-PORTFOLIO INTELLIGENCE DISCOVERY',
      body: 'Enterprise customer expansion (+38.2%) outpaces CAC growth. Shifting marketing budget to account-based marketing accelerates revenue velocity by an estimated 2.3x.',
      confidence: '98.4%',
    },
    recentActivity: [
      { id: '1', time: '2m ago', actor: 'Automated Anomaly Sentinel', action: 'Detected +14% traffic surge from North America Enterprise proxies.' },
      { id: '2', time: '14m ago', actor: 'Stripe Adapter', action: 'Synchronized $240,000 multi-year expansion contract.' },
      { id: '3', time: '42m ago', actor: 'Executive Bot', action: 'Dispatched weekly ARR variance brief to Slack #c-suite.' },
    ],
  },
  enterprise: {
    kpis: [
      {
        id: 'arr',
        label: 'Enterprise Segment ARR',
        value: '$9.45M',
        change: '+38.2%',
        changeType: 'positive',
        timeframe: 'ACV > $100k',
      },
      {
        id: 'nrr',
        label: 'Enterprise NRR',
        value: '138.4%',
        change: '+6.1%',
        changeType: 'positive',
        timeframe: 'multi-product attach',
      },
      {
        id: 'customers',
        label: 'Global 2000 Logos',
        value: '84',
        change: '+22.0%',
        changeType: 'positive',
        timeframe: 'annual contracts',
      },
      {
        id: 'efficiency',
        label: 'CAC Payback (Enterprise)',
        value: '6.8 mos',
        change: '-2.4 mos',
        changeType: 'positive',
        timeframe: 'fastest quartile',
      },
    ],
    revenueTrend: [
      { month: 'Nov', revenue: 620, target: 580 },
      { month: 'Dec', revenue: 680, target: 630 },
      { month: 'Jan', revenue: 740, target: 690 },
      { month: 'Feb', revenue: 810, target: 760 },
      { month: 'Mar', revenue: 890, target: 820 },
      { month: 'Apr', revenue: 945, target: 880 },
    ],
    funnel: [
      { stage: 'Target Account Outreach', count: 12400, conversion: '100%' },
      { stage: 'Security & Legal Reviews', count: 1850, conversion: '14.9%' },
      { stage: 'POC Lakehouse Verification', count: 920, conversion: '49.7%' },
      { stage: 'Executive Procurement Review', count: 340, conversion: '37.0%' },
      { stage: 'Master Services Agreement', count: 84, conversion: '24.7%' },
    ],
    insightAnnotation: {
      title: 'ENTERPRISE ACCOUNT EXPANSION',
      body: 'Enterprises utilizing automated lakehouse streaming demonstrate 99.2% annual retention. Recommendation: Enable dedicated VPC peering by default.',
      confidence: '99.1%',
    },
    recentActivity: [
      { id: '1', time: '5m ago', actor: 'Procurement Adapter', action: 'MSA signed for 500-seat lakehouse federation.' },
      { id: '2', time: '18m ago', actor: 'Snowflake Connector', action: 'Ingested 4.2TB query log telemetry with zero schema error.' },
      { id: '3', time: '1h ago', actor: 'Compliance Engine', action: 'Verified SOC2 audit trail compliance for Q1.' },
    ],
  },
  midmarket: {
    kpis: [
      {
        id: 'arr',
        label: 'Mid-Market ARR',
        value: '$3.82M',
        change: '+18.4%',
        changeType: 'positive',
        timeframe: 'ACV $25k-$100k',
      },
      {
        id: 'nrr',
        label: 'Mid-Market NRR',
        value: '116.2%',
        change: '+1.8%',
        changeType: 'positive',
        timeframe: 'steady expansion',
      },
      {
        id: 'customers',
        label: 'Mid-Market Customers',
        value: '340',
        change: '+15.1%',
        changeType: 'positive',
        timeframe: 'active organizations',
      },
      {
        id: 'efficiency',
        label: 'Sales Velocity Index',
        value: '4.1x',
        change: '+0.4x',
        changeType: 'positive',
        timeframe: 'LTV to CAC ratio',
      },
    ],
    revenueTrend: [
      { month: 'Nov', revenue: 260, target: 240 },
      { month: 'Dec', revenue: 280, target: 260 },
      { month: 'Jan', revenue: 305, target: 285 },
      { month: 'Feb', revenue: 330, target: 310 },
      { month: 'Mar', revenue: 360, target: 335 },
      { month: 'Apr', revenue: 382, target: 360 },
    ],
    funnel: [
      { stage: 'Inbound Demo Requests', count: 34000, conversion: '100%' },
      { stage: 'Product Walkthrough Completed', count: 8200, conversion: '24.1%' },
      { stage: 'Trial Database Connected', count: 4100, conversion: '50.0%' },
      { stage: 'Custom SLA Proposal', count: 1100, conversion: '26.8%' },
      { stage: 'Annual Subscription Active', count: 340, conversion: '30.9%' },
    ],
    insightAnnotation: {
      title: 'MID-MARKET CONVERSION CATALYST',
      body: 'Teams that invite 3+ cross-functional viewers in the first 7 days close at a 2.8x higher rate. Recommendation: Prompt multi-user invites during onboarding.',
      confidence: '95.6%',
    },
    recentActivity: [
      { id: '1', time: '12m ago', actor: 'Inbound Router', action: '3 mid-market teams activated Slack sync.' },
      { id: '2', time: '35m ago', actor: 'Postgres Connector', action: 'Read-replica throughput increased by 22%.' },
      { id: '3', time: '2h ago', actor: 'Billing Service', action: 'Mid-market cohort upgrade generated +$18k ARR.' },
    ],
  },
  smb: {
    kpis: [
      {
        id: 'arr',
        label: 'Self-Serve SMB ARR',
        value: '$1.55M',
        change: '+12.1%',
        changeType: 'positive',
        timeframe: 'monthly credit card billing',
      },
      {
        id: 'nrr',
        label: 'SMB NRR',
        value: '104.5%',
        change: '+0.9%',
        changeType: 'positive',
        timeframe: 'churn offset by volume',
      },
      {
        id: 'customers',
        label: 'Self-Serve Workspaces',
        value: '996',
        change: '+26.8%',
        changeType: 'positive',
        timeframe: 'organic PLG adoption',
      },
      {
        id: 'efficiency',
        label: 'Organic CAC Payback',
        value: '4.2 mos',
        change: '-0.4 mos',
        changeType: 'positive',
        timeframe: 'product-led growth',
      },
    ],
    revenueTrend: [
      { month: 'Nov', revenue: 100, target: 95 },
      { month: 'Dec', revenue: 110, target: 105 },
      { month: 'Jan', revenue: 120, target: 115 },
      { month: 'Feb', revenue: 130, target: 125 },
      { month: 'Mar', revenue: 142, target: 135 },
      { month: 'Apr', revenue: 155, target: 145 },
    ],
    funnel: [
      { stage: 'Website & Documentation Visitors', count: 138000, conversion: '100%' },
      { stage: 'Instant Free Sandbox Created', count: 14550, conversion: '10.5%' },
      { stage: 'First Dashboard Saved', count: 6780, conversion: '46.6%' },
      { stage: 'Payment Method Attached', count: 2150, conversion: '31.7%' },
      { stage: 'Paid Subscription Retained', count: 996, conversion: '46.3%' },
    ],
    insightAnnotation: {
      title: 'PRODUCT-LED GROWTH ACCELERATION',
      body: 'Zero-configuration Stripe & Postgres adapters drive 72% of self-serve conversions within 48 hours of signup.',
      confidence: '97.2%',
    },
    recentActivity: [
      { id: '1', time: '1m ago', actor: 'Self-Serve Sandbox', action: 'New workspace initialized via GitHub OAuth.' },
      { id: '2', time: '8m ago', actor: 'Stripe Webhook', action: 'Credit card renewal processed successfully.' },
      { id: '3', time: '30m ago', actor: 'Digest Dispatcher', action: 'Weekly PDF scorecard delivered to 480 founders.' },
    ],
  },
};

export const detailedMetricsTable: MetricRow[] = [
  { metric: 'Gross Recognized ARR', current: '$14,820,000', target: '$13,500,000', variance: '+$1,320,000', status: 'Exceeding' },
  { metric: 'Net Revenue Retention (NRR)', current: '124.8%', target: '120.0%', variance: '+4.8%', status: 'Exceeding' },
  { metric: 'Customer Acquisition Cost (CAC)', current: '$4,120', target: '$4,800', variance: '-$680 (14.1%)', status: 'Optimal' },
  { metric: 'CAC Payback Period', current: '7.8 Months', target: '9.0 Months', variance: '-1.2 Months', status: 'Optimal' },
  { metric: 'LTV to CAC Ratio', current: '5.2x', target: '4.0x', variance: '+1.2x', status: 'Exceeding' },
  { metric: 'Gross Margin on Compute', current: '84.6%', target: '82.0%', variance: '+2.6%', status: 'Nominal' },
  { metric: 'Monthly Churn Rate', current: '0.62%', target: '< 0.80%', variance: '-0.18%', status: 'Optimal' },
  { metric: 'Magic Number (Sales Efficiency)', current: '1.42', target: '1.20', variance: '+0.22', status: 'Exceeding' },
];

export const featuresList: FeatureItem[] = [
  {
    icon: 'Layers',
    title: 'Unified Business Metrics',
    description: 'Consolidate billing ledgers, product analytics, and customer support metrics into a single verified ledger.',
    tag: 'Reconciled Source of Truth',
  },
  {
    icon: 'BarChart3',
    title: 'Executive Dashboards',
    description: 'Pixel-perfect, high-density telemetry command centers built for CEOs, board meetings, and business heads.',
    tag: 'Zero Vanity Metrics',
  },
  {
    icon: 'TrendingUp',
    title: 'Trend & Anomaly Exploration',
    description: 'Automated statistical outlier alerts reveal revenue spikes, churn hazards, or conversion bottlenecks in real time.',
    tag: 'Auto-statistical Alerts',
  },
  {
    icon: 'Filter',
    title: 'Segmentation & Drill-Downs',
    description: 'Filter metrics by geography, customer tier, product edition, and acquisition cohort with instant sub-second recalculation.',
    tag: 'Sub-second Slicing',
  },
  {
    icon: 'Clock',
    title: 'Scheduled Executive Briefs',
    description: 'Deliver clean PDF scorecards and Slack alerts straight to leadership before Monday morning executive syncs.',
    tag: 'Automated Digests',
  },
  {
    icon: 'Users2',
    title: 'Shared Decision Context',
    description: 'Annotate anomaly points directly on time-series charts, link Jira/Linear tickets, and keep your entire team aligned.',
    tag: 'Synchronized Team Lens',
  },
];

export const dataStorySteps: DataStoryStep[] = [
  {
    step: '01',
    icon: 'Eye',
    title: 'Observe',
    description: 'Continuous telemetry ingestion surfaces key KPI deviations and real-time trends across billing and product usage.',
    highlight: 'Real-time telemetry stream',
  },
  {
    step: '02',
    icon: 'Search',
    title: 'Investigate',
    description: 'Decompose high-level metrics into cohort segments, customer tiers, and feature-usage funnels with one click.',
    highlight: 'Sub-second cohort decomposition',
  },
  {
    step: '03',
    icon: 'BrainCircuit',
    title: 'Understand',
    description: 'Statistical significance testing separates seasonal noise from durable structural business shifts.',
    highlight: 'Automated 2.5-sigma outlier analysis',
  },
  {
    step: '04',
    icon: 'Play',
    title: 'Act',
    description: 'Annotate findings, export verified board decks, and trigger automated webhook workflows for immediate alignment.',
    highlight: 'Cross-functional executive alignment',
  },
];

export const teamUseCases: TeamUseCase[] = [
  {
    role: 'CEOs & Board',
    headline: 'High-altitude strategic visibility without spreadsheet lag.',
    description: 'Track burn runway, Rule of 40, ARR trajectory, and net retention with verified board-ready precision.',
    metrics: ['Rule of 40', 'Magic Runway Ratio', 'Net ARR Velocity'],
    sampleReport: 'Executive Board Briefing: Q1 ARR reached $14.82M (+24.6% YoY) with 2.4x capital efficiency ratio.',
  },
  {
    role: 'Product Leadership',
    headline: 'Correlate feature engagement with expansion revenue.',
    description: 'Discover which product modules drive retention and which feature pathways trigger customer expansion.',
    metrics: ['Feature Attach Rate', 'Cohort Retention', 'Expansion Trajectory'],
    sampleReport: 'Product Growth Telemetry: Users adopting lakehouse streaming exhibit a 98.4% 12-month retention rate.',
  },
  {
    role: 'Marketing Teams',
    headline: 'Understand true blended and paid CAC payback cycles.',
    description: 'Track lead-to-opportunity velocity and pipeline conversion without relying on unreliable third-party attribution pixels.',
    metrics: ['Blended CAC Payback', 'Opportunity Velocity', 'LTV / CAC'],
    sampleReport: 'Demand Gen Analysis: Enterprise outbound CAC payback compressed from 9.2 to 6.8 months in Q1.',
  },
  {
    role: 'Sales & Revenue Ops',
    headline: 'Identify pipeline bottlenecks before quarter close.',
    description: 'Inspect deal stage durations, contract value drift, and win-loss drivers across rep territories.',
    metrics: ['Pipeline Velocity', 'Stage Conversion %', 'Win Rate vs Competitors'],
    sampleReport: 'RevOps Diagnostic: Stage 3 discovery-to-POC rate improved by +3.4% following automated intent scoring.',
  },
  {
    role: 'Finance & Controllers',
    headline: 'Automated GAAP reconciliation and cohort revenue recognition.',
    description: 'Reconcile Stripe invoices, credit notes, and deferred revenue balances with zero manual spreadsheet copying.',
    metrics: ['Recognized Revenue', 'Deferred Revenue Amortization', 'Invoice Aging'],
    sampleReport: 'Finance Audit Summary: 100% of Q1 billing events reconciled against ERP ledger with zero discrepancies.',
  },
  {
    role: 'Operations & IT',
    headline: 'Sub-second warehouse queries with zero data duplication.',
    description: 'Keep your proprietary customer data in your VPC while giving business teams instant access to aggregated KPIs.',
    metrics: ['P99 Query Latency', 'VPC Egress Cost', 'SOC2 Audit Events'],
    sampleReport: 'Data Infrastructure Report: Zero egress fees incurred; query engine operating within 14ms latency SLA.',
  },
];

export const dataConnectors: DataConnector[] = [
  {
    name: 'Snowflake',
    category: 'Cloud Lakehouse',
    status: 'Verified Adapter',
    description: 'Zero-copy telemetry queries running directly against your Snowflake tables.',
    latency: '< 18ms',
  },
  {
    name: 'Google BigQuery',
    category: 'Analytics Warehouse',
    status: 'Verified Adapter',
    description: 'Direct SQL execution with partition-aware cost optimization.',
    latency: '< 22ms',
  },
  {
    name: 'Databricks',
    category: 'Lakehouse Engine',
    status: 'Verified Adapter',
    description: 'Delta Lake table integration with role-based cryptographic isolation.',
    latency: '< 25ms',
  },
  {
    name: 'PostgreSQL',
    category: 'Relational Database',
    status: 'Verified Adapter',
    description: 'High-speed read replica queries with SSL client certificates.',
    latency: '< 8ms',
  },
  {
    name: 'ClickHouse',
    category: 'Time-Series Engine',
    status: 'Verified Adapter',
    description: 'Sub-second aggregations over billions of customer event rows.',
    latency: '< 5ms',
  },
  {
    name: 'Stripe Billing',
    category: 'Payment Ledger',
    status: 'Verified Adapter',
    description: 'Real-time webhook synchronization for invoices, subscriptions, and MRR.',
    latency: '< 10ms',
  },
  {
    name: 'Salesforce CRM',
    category: 'Sales Pipeline',
    status: 'Verified Adapter',
    description: 'Sync pipeline stages and closed-won ARR with automated reconciliation.',
    latency: '< 30ms',
  },
  {
    name: 'Segment & Kafka',
    category: 'Event Streaming',
    status: 'Verified Adapter',
    description: 'Stream live product telemetry events straight into real-time KPI graphs.',
    latency: '< 12ms',
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Emerging',
    priceMonthly: '$249',
    description: 'Designed for early-stage SaaS startups and fast-moving teams standardizing their business metrics.',
    features: [
      'Up to 5 executive dashboards',
      '3 core warehouse adapters (Postgres, Stripe, Snowflake)',
      'Hourly data refresh frequency',
      'Standard retention & cohort matrices',
      'Export dashboards to PDF / CSV',
      'Email & Slack community support',
    ],
    cta: 'Start 14-Day Sandbox',
    popular: false,
  },
  {
    name: 'Growth',
    priceMonthly: '$699',
    description: 'Comprehensive decision intelligence for scaling organizations with multi-department telemetry needs.',
    features: [
      'Unlimited executive & team dashboards',
      'All 8 verified warehouse and streaming adapters',
      'Real-time streaming refresh (sub-minute)',
      'Automated statistical anomaly detection & alerts',
      'Scheduled Monday morning executive PDF briefs',
      'Custom metric formulas & cohort slicing',
      'Role-based permissions & audit logging',
    ],
    cta: 'Explore Growth Tier',
    popular: true,
  },
  {
    name: 'Enterprise',
    priceMonthly: 'Custom',
    description: 'Dedicated VPC deployment, custom semantic models, and white-glove engineering support for Global 2000.',
    features: [
      'Everything in Growth, plus:',
      'Private cloud / VPC peering deployment',
      'Zero-data retention cryptographic isolation',
      'Custom dbt & semantic layer synchronization',
      'Dedicated senior data architect support',
      '99.99% query availability SLA',
      'Custom SOC2 Type II & HIPAA compliance vault',
    ],
    cta: 'Request Executive Briefing',
    popular: false,
  },
];

export const faqItems: FAQItem[] = [
  {
    question: 'How does InsightOS connect to our existing data infrastructure?',
    answer: 'InsightOS executes zero-copy virtualized queries directly against your data warehouse (Snowflake, BigQuery, Databricks, PostgreSQL). Your raw customer data never leaves your virtual private cloud, eliminating compliance risks and costly ETL pipelines.',
  },
  {
    question: 'Do we need a dedicated data engineering team to maintain dashboards?',
    answer: 'No. InsightOS includes pre-configured SaaS metrics schemas (ARR, NRR, CAC payback, LTV, and cohort retention). Once you link your billing and database adapters, standard dashboards populate automatically.',
  },
  {
    question: 'How does the automated anomaly detection work?',
    answer: 'Our engine computes rolling 30-day baseline averages and standard deviations across all time series. When a metric breaches a 2.5-sigma boundary (such as an unexpected cancellation surge or sudden conversion dip), an annotated notification is dispatched to your configured Slack or email channel.',
  },
  {
    question: 'Can we customize cohort filters, currencies, and time horizons?',
    answer: 'Yes. All charts and KPI summaries support dynamic date ranges (7D, 30D, 90D, YTD, 1Y), multiple currencies with daily foreign exchange updates, and multi-dimensional cohort slicing across customer size, geography, and acquisition channel.',
  },
  {
    question: 'How is data security, SOC2 compliance, and access governance handled?',
    answer: 'InsightOS is SOC2 Type II and GDPR compliant. We provide column-level data masking, role-based access control (RBAC), single sign-on (SSO/SAML), and tamper-evident audit logging of every query executed by your team.',
  },
  {
    question: 'Is the data displayed in the live interactive demo real company data?',
    answer: 'No. The interactive demo features an illustrative enterprise dataset specifically built to demonstrate multi-segment filtering, real-time KPI recalculation, and interactive telemetry visualization. No proprietary or confidential corporate records are accessed.',
  },
];
