import { WorkflowNode, WorkflowTemplate, FeatureItem, PricingPlan, FAQItem } from '../types';

export const INITIAL_HERO_NODES: WorkflowNode[] = [
  {
    id: 'node-1',
    type: 'trigger',
    title: 'New Form Submission',
    subtitle: 'Typeform / Hubspot / Webhook',
    icon: 'FileText',
    enabled: true,
    config: { source: 'Enterprise Contact Form', rate: 'Real-time' },
  },
  {
    id: 'node-2',
    type: 'condition',
    title: 'Validate Incoming Data',
    subtitle: 'Check business email & company size >= 50',
    icon: 'ShieldCheck',
    enabled: true,
    config: { rule: 'Domain !== free_email', priority: 'High Tier' },
  },
  {
    id: 'node-3',
    type: 'action',
    title: 'Enrich Customer Record',
    subtitle: 'Clearbit / Apollo Tech Graph',
    icon: 'Database',
    enabled: true,
    config: { fields: 'Revenue, Tech Stack, Headcount' },
  },
  {
    id: 'node-4',
    type: 'action',
    title: 'Send Team Notification',
    subtitle: 'Slack #enterprise-deals & Email',
    icon: 'Bell',
    enabled: true,
    config: { channel: '#revops-alerts', mention: '@sales-leads' },
  },
  {
    id: 'node-5',
    type: 'action',
    title: 'Update Project Task',
    subtitle: 'Linear / Jira Sprint Board',
    icon: 'CheckSquare',
    enabled: true,
    config: { project: 'SDR Outreach Pipeline', SLA: '15 mins' },
  },
];

export const FLOWOPS_TEMPLATES: WorkflowTemplate[] = [
  {
    id: 'lead-followup',
    name: 'Instant Lead Follow-Up',
    category: 'Sales & Growth',
    description: 'Enrich inbound marketing leads, assign SDR based on territory, and trigger a personalized email sequence in seconds.',
    nodesCount: 5,
    triggerName: 'Inbound Webhook Received',
    samplePath: ['Form Submit', 'Enrich Lead', 'Territory Route', 'Create CRM Contact', 'Slack Alert'],
  },
  {
    id: 'employee-onboarding',
    name: 'New Employee Onboarding',
    category: 'People Ops & HR',
    description: 'Provision Google Workspace, invite to GitHub org, assign Slack channels, and dispatch IT hardware checklist.',
    nodesCount: 6,
    triggerName: 'Greenhouse Offer Accepted',
    samplePath: ['Offer Signed', 'Provision SSO', 'Grant GitHub Access', 'Schedule 1-on-1s', 'Welcome Email'],
  },
  {
    id: 'support-ticket-routing',
    name: 'VIP Support Ticket Routing',
    category: 'Customer Support',
    description: 'Classify ticket sentiment, detect SLA tier, and escalate critical blocker issues directly to on-call engineers.',
    nodesCount: 4,
    triggerName: 'Zendesk Ticket Created',
    samplePath: ['New Ticket', 'Analyze Sentiment', 'Check SLA Tier', 'Page PagerDuty'],
  },
  {
    id: 'project-task-creation',
    name: 'Customer Feedback to Linear Task',
    category: 'Product & Eng',
    description: 'Aggregate user feature requests from Discord and Intercom, de-duplicate, and draft backlog items in Linear.',
    nodesCount: 5,
    triggerName: 'Tag Added in Intercom',
    samplePath: ['Feedback Tagged', 'AI Summary', 'Linear Issue Created', 'Notify Contributor'],
  },
  {
    id: 'report-distribution',
    name: 'Weekly KPI Report Distribution',
    category: 'Finance & Exec',
    description: 'Query PostgreSQL metrics warehouse, generate PDF digest, and broadcast to executive Slack and leadership inbox.',
    nodesCount: 4,
    triggerName: 'Cron Schedule (Mon 08:00 AM)',
    samplePath: ['Cron Trigger', 'Warehouse Query', 'Render Chart PDF', 'Send Exec Briefing'],
  },
  {
    id: 'approval-requests',
    name: 'Multi-Tier Budget Approval',
    category: 'Operations',
    description: 'Route expense requests over $5,000 for dual CFO authorization with timeout reminders and auditable ledger logs.',
    nodesCount: 5,
    triggerName: 'Expense Submitted',
    samplePath: ['Expense Form', 'Threshold Check', 'Interactive Slack Poll', 'Update ERP Ledger'],
  },
];

export const FLOWOPS_FEATURES: FeatureItem[] = [
  {
    id: 'builder',
    icon: 'Network',
    title: 'Visual Workflow Builder',
    description: 'Build complex, multi-step business logic with zero code using an intuitive drag-and-drop node canvas.',
    highlight: 'Zero-code canvas',
  },
  {
    id: 'conditional',
    icon: 'GitFork',
    title: 'Conditional Branching',
    description: 'Handle edge cases effortlessly with if/else gates, regex filters, value mapping, and loop iterators.',
    highlight: 'Dynamic route logic',
  },
  {
    id: 'connections',
    icon: 'Layers',
    title: 'App & Service Connectors',
    description: 'Native authenticated integrations for 150+ SaaS tools including Slack, Salesforce, Linear, Stripe, and PostgreSQL.',
    highlight: '150+ native connectors',
  },
  {
    id: 'templates',
    icon: 'LayoutTemplate',
    title: 'Reusable Workflow Templates',
    description: 'Deploy battle-tested automation blueprints for RevOps, HR, Engineering, and Finance with one click.',
    highlight: '1-click deployment',
  },
  {
    id: 'run-history',
    icon: 'Activity',
    title: 'Run History & Error Visibility',
    description: 'Inspect step-by-step execution payloads, replay failed steps with adjusted inputs, and monitor SLA health.',
    highlight: 'Step-by-step playback',
  },
  {
    id: 'team-management',
    icon: 'Users',
    title: 'Team-Level Governance',
    description: 'Role-based access controls, secret vaults, version history, and environment isolation for staging and prod.',
    highlight: 'SOC2-ready governance',
  },
];

export const FLOWOPS_PRICING: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '0',
    period: 'forever free',
    description: 'Essential workflow builder for individual builders and micro teams.',
    features: [
      '5 active automated workflows',
      '1,000 tasks executed per month',
      '15-minute polling interval',
      'Core integrations (Slack, Sheets, Email)',
      'Community template access',
      '7-day execution logs'
    ],
    cta: 'Start Free',
    popular: false,
  },
  {
    id: 'pro',
    name: 'Professional',
    price: '29',
    period: '/ month',
    description: 'High-speed automation and branch logic for growing business operations.',
    features: [
      'Unlimited active workflows',
      '50,000 tasks executed per month',
      'Instant real-time webhooks',
      'Conditional branching & loops',
      'Premium integrations (Salesforce, Stripe, Jira)',
      '30-day run history & auto-retry engine'
    ],
    cta: 'Start 14-Day Trial',
    popular: true,
  },
  {
    id: 'business',
    name: 'Business',
    price: '79',
    period: '/ month',
    description: 'Enterprise governance, shared team workspaces, and custom API webhooks.',
    features: [
      'Everything in Pro, plus:',
      '250,000 tasks executed per month',
      'Team workspace & role permissions',
      'Dedicated execution worker partitions',
      'Centralized environment secret vault',
      'Audit log exports & priority SLA support'
    ],
    cta: 'Scale Your Ops',
    popular: false,
  },
];

export const FLOWOPS_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How does FlowOps execute multi-step workflows?',
    answer: 'FlowOps listens for triggers (such as webhook events, form submits, or scheduled timers), securely ingests the payload, evaluates conditional filters, and executes downstream actions sequentially or in parallel with automatic retry policies.',
  },
  {
    id: 'faq-2',
    question: 'Do I need programming experience to build automations?',
    answer: 'None at all. The visual drag-and-drop builder allows you to map data fields between apps visually. Advanced developers can also inject lightweight JavaScript expressions or JSON transforms when custom data manipulation is required.',
  },
  {
    id: 'faq-3',
    question: 'How are failed steps and third-party API rate limits handled?',
    answer: 'FlowOps features an intelligent retry engine with exponential backoff and jitter. If an external service experiences an outage or 429 rate limit, FlowOps safely queues the execution payload and retries without dropping data.',
  },
  {
    id: 'faq-4',
    question: 'Can I test my workflow before putting it live?',
    answer: 'Yes! Our interactive test runner allows you to feed sample payloads into any trigger node and inspect step-by-step outputs in a safe sandbox before activating the workflow in production.',
  },
  {
    id: 'faq-5',
    question: 'How is sensitive data and API credentials protected?',
    answer: 'All API tokens, OAuth keys, and webhook secrets are stored in dedicated hardware-encrypted vaults using AES-256 encryption. We enforce zero data retention on transient execution payloads once jobs are processed.',
  },
  {
    id: 'faq-6',
    question: 'Is this interactive landing page connected to live external tools?',
    answer: 'This prototype provides a simulated client-side demonstration of our visual workflow canvas and node execution states. Connecting live third-party accounts (such as Slack or Salesforce) requires an active FlowOps cloud account and authenticated credentials.',
  },
];
