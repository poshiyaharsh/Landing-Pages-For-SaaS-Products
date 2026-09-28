// Mock data for DataPulse analytics

export const kpiData = {
  revenue: {
    label: 'Revenue',
    value: '$2.84M',
    change: '+18.6%',
    trend: 'up'
  },
  users: {
    label: 'Active Users',
    value: '184.2K',
    change: '+12.4%',
    trend: 'up'
  },
  conversion: {
    label: 'Conversion',
    value: '8.72%',
    change: '+2.1%',
    trend: 'up'
  },
  retention: {
    label: 'Retention',
    value: '94.1%',
    change: '+4.8%',
    trend: 'up'
  }
};

export const revenueChartData = [
  { month: 'Jan', value: 2.1, comparison: 1.8 },
  { month: 'Feb', value: 2.3, comparison: 2.0 },
  { month: 'Mar', value: 2.2, comparison: 2.1 },
  { month: 'Apr', value: 2.5, comparison: 2.2 },
  { month: 'May', value: 2.7, comparison: 2.4 },
  { month: 'Jun', value: 2.84, comparison: 2.5 }
];

export const activityFeed = [
  { time: '14:32', event: 'Enterprise conversion detected', type: 'success' },
  { time: '14:31', event: 'Revenue target reached', type: 'success' },
  { time: '14:29', event: 'New data source synchronized', type: 'info' },
  { time: '14:27', event: 'Dashboard report generated', type: 'info' },
  { time: '14:25', event: 'KPI threshold exceeded', type: 'warning' }
];

export const integrations = [
  'Salesforce', 'HubSpot', 'Stripe', 'Shopify', 'PostgreSQL',
  'MySQL', 'Google Analytics', 'Snowflake', 'BigQuery', 'CSV'
];

export const aiInsights = [
  {
    id: 1,
    severity: 'high',
    title: 'Enterprise revenue accelerating',
    metric: 'Revenue',
    description: 'Revenue from enterprise accounts increased 23.8%.',
    timestamp: '2 hours ago'
  },
  {
    id: 2,
    severity: 'medium',
    title: 'Activation improved',
    metric: 'Activation',
    description: 'New-user activation increased 11.4%.',
    timestamp: '4 hours ago'
  },
  {
    id: 3,
    severity: 'high',
    title: 'Churn risk detected',
    metric: 'Retention',
    description: 'Accounts in the SMB segment show increasing churn probability.',
    timestamp: '5 hours ago'
  },
  {
    id: 4,
    severity: 'low',
    title: 'Marketing efficiency improving',
    metric: 'CAC',
    description: 'CAC decreased 8.2% over the last 30 days.',
    timestamp: '6 hours ago'
  }
];

export const testimonials = [
  {
    quote: "DataPulse replaced hours of manual reporting with one live source of truth.",
    name: "Sarah Chen",
    role: "VP of Operations",
    company: "TechFlow",
    size: "250+ employees"
  },
  {
    quote: "We finally see patterns in our data we were missing. The AI insights are remarkable.",
    name: "Michael Torres",
    role: "Head of Analytics",
    company: "GrowthLabs",
    size: "500+ employees"
  },
  {
    quote: "Setting up took minutes. The value was immediate. DataPulse transformed how we make decisions.",
    name: "Emma Williams",
    role: "CEO",
    company: "Streamline",
    size: "120+ employees"
  }
];

export const faqData = [
  {
    question: "What is DataPulse?",
    answer: "DataPulse is a real-time business intelligence platform that consolidates data from across your organization into one live analytics workspace. It combines dashboards, KPI monitoring, AI insights, and custom reporting."
  },
  {
    question: "Which data sources can I connect?",
    answer: "DataPulse integrates with CRMs (Salesforce, HubSpot), databases (PostgreSQL, MySQL, Snowflake, BigQuery), payment systems (Stripe, Shopify), analytics tools (Google Analytics), and custom data sources via CSV import or API."
  },
  {
    question: "Is DataPulse real-time?",
    answer: "Yes. DataPulse updates your dashboards and metrics as data changes in your connected sources. Most integrations sync every 5-15 minutes, with some supporting live streaming."
  },
  {
    question: "How does AI Insights work?",
    answer: "Our AI continuously analyzes your business data to detect significant patterns, anomalies, and opportunities. It explains what's changing, why it matters, and which signals deserve your attention."
  },
  {
    question: "Can I create custom dashboards?",
    answer: "Absolutely. DataPulse provides drag-and-drop dashboard builders, custom KPI configurations, and flexible report templates. Build exactly the views your team needs."
  },
  {
    question: "Does DataPulse support enterprise teams?",
    answer: "Yes. Enterprise plans include advanced role-based permissions, SSO, audit logs, dedicated support, and custom data pipelines for larger organizations."
  },
  {
    question: "Can I export reports?",
    answer: "Yes. Export any dashboard or report to PDF, CSV, or Excel. Schedule automated report delivery to your team via email."
  },
  {
    question: "Is my data secure?",
    answer: "DataPulse uses end-to-end encryption, secure integrations, role-based access controls, and maintains SOC 2 Type II compliance. Your data is isolated and never shared."
  }
];

export const pricingPlans = [
  {
    name: 'Starter',
    description: 'For small teams',
    price: 'Free',
    features: [
      '5 dashboards',
      '3 integrations',
      'KPI monitoring',
      'Basic reports',
      'Email support'
    ],
    cta: 'Start Free',
    highlighted: false
  },
  {
    name: 'Growth',
    description: 'For growing companies',
    price: '$99',
    period: '/month',
    features: [
      'Unlimited dashboards',
      'Unlimited integrations',
      'AI insights',
      'Custom reports',
      'Advanced analytics',
      'Priority support'
    ],
    cta: 'Start Free',
    highlighted: true,
    badge: 'Most Popular'
  },
  {
    name: 'Enterprise',
    description: 'For larger organizations',
    price: 'Custom',
    features: [
      'Everything in Growth',
      'Advanced permissions',
      'SSO',
      'Audit logs',
      'Dedicated support',
      'Custom data pipelines'
    ],
    cta: 'Talk to Sales',
    highlighted: false
  }
];

export const conversionFunnel = [
  { stage: 'Visitors', value: 45200, percentage: 100 },
  { stage: 'Signups', value: 12800, percentage: 28.3 },
  { stage: 'Activated', value: 8960, percentage: 19.8 },
  { stage: 'Paid', value: 3942, percentage: 8.7 }
];

export const geographicData = [
  { region: 'North America', value: 42, growth: '+12%' },
  { region: 'Europe', value: 31, growth: '+18%' },
  { region: 'Asia Pacific', value: 19, growth: '+24%' },
  { region: 'Other', value: 8, growth: '+8%' }
];
