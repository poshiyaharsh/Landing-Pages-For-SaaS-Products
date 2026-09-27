// Mock Data for InvoiceX — Smart Invoicing SaaS

export const TRUST_BRANDS = [
  { name: 'Northstar', symbol: '✦', metric: '4,200+ active businesses' },
  { name: 'Vertex', symbol: '▲', metric: '99.8% on-time settlement' },
  { name: 'Lumen', symbol: '●', metric: '$24M+ payments tracked' },
  { name: 'Orbit', symbol: '◈', metric: '10k+ invoices processed' },
  { name: 'Cobalt', symbol: '■', metric: '98% payment visibility' }
];

export const HERO_METRICS = {
  totalRevenue: '$128,450',
  revenueGrowth: '+18.4%',
  outstandingAmount: '$14,200',
  outstandingCount: '4 invoices',
  paidAmount: '$114,250',
  paidRate: '92.4%',
  totalExpenses: '$34,800',
  netProfit: '$93,650'
};

export const RECENT_INVOICES = [
  {
    id: 'INV-1048',
    client: 'Acme Studio',
    clientLogo: 'A',
    clientColor: '#4F46E5',
    date: 'Oct 24, 2026',
    dueDate: 'Nov 07, 2026',
    amount: '$4,280.00',
    status: 'paid',
    items: 'Brand Identity & Web App Design',
    paymentMethod: 'ACH Transfer'
  },
  {
    id: 'INV-1047',
    client: 'Northstar Labs',
    clientLogo: 'N',
    clientColor: '#0EA5E9',
    date: 'Oct 22, 2026',
    dueDate: 'Nov 05, 2026',
    amount: '$2,950.00',
    status: 'pending',
    items: 'Fullstack API Integration Retainer',
    paymentMethod: 'Credit Card'
  },
  {
    id: 'INV-1046',
    client: 'Cobalt Works',
    clientLogo: 'C',
    clientColor: '#8B5CF6',
    date: 'Oct 14, 2026',
    dueDate: 'Oct 28, 2026',
    amount: '$1,840.00',
    status: 'overdue',
    items: 'Q3 Security Audit & Post-Mortem',
    paymentMethod: 'Wire Transfer'
  },
  {
    id: 'INV-1045',
    client: 'Horizon Design',
    clientLogo: 'H',
    clientColor: '#10B981',
    date: 'Oct 10, 2026',
    dueDate: 'Oct 24, 2026',
    amount: '$6,400.00',
    status: 'paid',
    items: 'Design System Architecture',
    paymentMethod: 'ACH Transfer'
  },
  {
    id: 'INV-1044',
    client: 'Apex Robotics',
    clientLogo: 'A',
    clientColor: '#F59E0B',
    date: 'Oct 08, 2026',
    dueDate: 'Oct 22, 2026',
    amount: '$3,120.00',
    status: 'draft',
    items: 'Hardware Telemetry Dashboard',
    paymentMethod: 'Pending Setup'
  }
];

export const EXPENSE_CATEGORIES = [
  { name: 'Software & SaaS', amount: '$12,400', percentage: 36, color: '#4F46E5' },
  { name: 'Operations & Cloud', amount: '$8,600', percentage: 25, color: '#2563EB' },
  { name: 'Growth & Marketing', amount: '$6,200', percentage: 18, color: '#10B981' },
  { name: 'Travel & Events', amount: '$4,100', percentage: 12, color: '#F59E0B' },
  { name: 'Office & Other', amount: '$3,500', percentage: 9, color: '#64748B' }
];

export const ANALYTICS_DATA = {
  '7D': {
    revenue: '$18,420',
    growth: '+6.2%',
    expenses: '$4,150',
    net: '$14,270',
    collectionRate: '98.2%',
    chart: [
      { label: 'Mon', revenue: 2400, expense: 600 },
      { label: 'Tue', revenue: 3800, expense: 800 },
      { label: 'Wed', revenue: 1900, expense: 450 },
      { label: 'Thu', revenue: 4200, expense: 700 },
      { label: 'Fri', revenue: 3100, expense: 900 },
      { label: 'Sat', revenue: 1200, expense: 300 },
      { label: 'Sun', revenue: 1820, expense: 400 }
    ]
  },
  '30D': {
    revenue: '$64,800',
    growth: '+14.8%',
    expenses: '$16,400',
    net: '$48,400',
    collectionRate: '96.5%',
    chart: [
      { label: 'Week 1', revenue: 14200, expense: 3800 },
      { label: 'Week 2', revenue: 17800, expense: 4200 },
      { label: 'Week 3', revenue: 15600, expense: 3900 },
      { label: 'Week 4', revenue: 17200, expense: 4500 }
    ]
  },
  '90D': {
    revenue: '$128,450',
    growth: '+18.4%',
    expenses: '$34,800',
    net: '$93,650',
    collectionRate: '94.8%',
    chart: [
      { label: 'Aug', revenue: 38200, expense: 10400 },
      { label: 'Sep', revenue: 42800, expense: 11600 },
      { label: 'Oct', revenue: 47450, expense: 12800 }
    ]
  },
  '12M': {
    revenue: '$482,000',
    growth: '+32.1%',
    expenses: '$128,000',
    net: '$354,000',
    collectionRate: '97.4%',
    chart: [
      { label: 'Q1', revenue: 98000, expense: 28000 },
      { label: 'Q2', revenue: 114000, expense: 31000 },
      { label: 'Q3', revenue: 128450, expense: 34800 },
      { label: 'Q4 (Est)', revenue: 141550, expense: 34200 }
    ]
  }
};

export const CORE_FEATURES = [
  {
    id: 'invoicing',
    title: 'Create invoices in seconds.',
    category: 'Invoice Generation',
    description: 'Build polished, professional invoices with reusable templates, automatic tax calculations, multi-currency support, and organized client details.',
    highlight: 'Auto-calculating line items & PDF export',
    badge: 'Lightning Fast'
  },
  {
    id: 'expenses',
    title: 'Know where your money goes.',
    category: 'Expense Tracking',
    description: 'Track business expenses, categorize operational spending, upload digital receipts, and keep your financial cashflow organized in one place.',
    highlight: 'Instant receipt tagging & category charts',
    badge: 'Automated Bookkeeping'
  },
  {
    id: 'payments',
    title: 'Never lose track of a payment.',
    category: 'Payment Tracking',
    description: 'See what has been paid, what is pending, and what needs immediate follow-up at a glance. Set automated gentle reminders for clients.',
    highlight: 'Real-time settlement & overdue alerts',
    badge: 'Payment Visibility'
  },
  {
    id: 'analytics',
    title: 'Turn financial data into clarity.',
    category: 'Revenue Analytics',
    description: 'Understand revenue trends, collection performance, monthly burn rates, and business growth through crisp, actionable fintech charts.',
    highlight: 'Comparative period forecasting',
    badge: 'Strategic Growth'
  },
  {
    id: 'clients',
    title: 'Keep every client relationship organized.',
    category: 'Client Management',
    description: 'Manage client billing records, past invoice archives, payment preferences, and lifetime contract value from a single unified portal.',
    highlight: 'Centralized ledger & historical audit',
    badge: 'Client Portal'
  }
];

export const CLIENTS_LIST = [
  { name: 'Acme Studio', contact: 'sarah@acmestudio.com', totalBilled: '$34,800', invoices: 8, status: 'Active' },
  { name: 'Northstar Labs', contact: 'alex@northstarlabs.io', totalBilled: '$28,450', invoices: 6, status: 'Active' },
  { name: 'Cobalt Works', contact: 'marcus@cobalt.co', totalBilled: '$18,900', invoices: 5, status: 'Review' },
  { name: 'Horizon Design', contact: 'elena@horizondesign.com', totalBilled: '$42,100', invoices: 11, status: 'Active' },
  { name: 'Apex Robotics', contact: 'kenji@apexrobotics.ai', totalBilled: '$15,600', invoices: 4, status: 'New' }
];

export const WORKFLOW_STEPS = [
  {
    number: '01',
    title: 'Create',
    subtitle: 'Set up your workspace and add your clients',
    description: 'Configure your company profile, payment methods, and default currency in under 2 minutes. Import your existing client contact list seamlessly.',
    features: ['Quick client directory setup', 'Custom branding & logo upload', 'Default tax & payment terms']
  },
  {
    number: '02',
    title: 'Invoice',
    subtitle: 'Create and send professional invoices in seconds',
    description: 'Pick a template, add your deliverables, and let InvoiceX compute taxes and subtotals. Share direct payment links or export branded PDFs.',
    features: ['One-click itemized line items', 'Multi-currency conversion', 'Shareable client payment link']
  },
  {
    number: '03',
    title: 'Track',
    subtitle: 'Monitor payments, expenses, and revenue from one dashboard',
    description: 'Get instant notifications when clients view or settle invoices. Reconcile operating expenses and forecast net profit with automated charts.',
    features: ['Live payment status updates', 'Automatic overdue reminders', 'Real-time cashflow dashboard']
  }
];

export const WHY_INVOICEX_BENEFITS = [
  {
    title: 'Less administrative work',
    description: 'Cut out manual spreadsheet formulas and redundant email follow-ups. Save up to 5 hours every week on billing operations.',
    iconName: 'Clock'
  },
  {
    title: 'Faster invoice creation',
    description: 'Reusable line-item libraries and saved client profiles allow you to dispatch invoices in less than 30 seconds.',
    iconName: 'Zap'
  },
  {
    title: 'Better payment visibility',
    description: 'Instantly identify which clients pay on time, which invoices are pending, and what capital is outstanding.',
    iconName: 'Eye'
  },
  {
    title: 'Centralized client records',
    description: 'Every statement of work, tax breakdown, and payment receipt is neatly archived under each client profile.',
    iconName: 'FolderCheck'
  },
  {
    title: 'Clear financial reporting',
    description: 'Generate accountant-ready profit and loss statements, expense deductions, and collection rate metrics with one click.',
    iconName: 'BarChart3'
  },
  {
    title: 'Better business decisions',
    description: 'Make informed growth investments with accurate revenue forecasting and clear monthly burn rate tracking.',
    iconName: 'TrendingUp'
  }
];

export const TESTIMONIALS = [
  {
    quote: "InvoiceX replaced the spreadsheet chaos we were dealing with. Now our team knows exactly what has been invoiced, paid, and outstanding with zero guesswork.",
    author: "Maya Patel",
    role: "Founder",
    company: "Northstar Studio",
    metrics: "Average payment time dropped from 24 days to 4 days",
    avatar: "MP"
  },
  {
    quote: "Managing international retainers used to give our ops team a headache. With InvoiceX's automated currency handling and client portals, our cashflow is rock solid.",
    author: "Liam Henderson",
    role: "Managing Director",
    company: "Cobalt Creative Agency",
    metrics: "Over $180k in receivables tracked smoothly",
    avatar: "LH"
  },
  {
    quote: "The revenue analytics section alone is worth ten times the price. I can see my net margins, upcoming revenue cliffs, and tax liability right from my morning coffee.",
    author: "Sofia Rostova",
    role: "Principal Consultant",
    company: "Vertex Strategy Partners",
    metrics: "Eliminated 6 hours of monthly manual reconciliations",
    avatar: "SR"
  }
];

export const PRICING_TIERS = [
  {
    name: 'Starter',
    badge: 'Freelancers & Solopreneurs',
    priceMonthly: 0,
    priceYearly: 0,
    period: 'forever',
    description: 'For independent creators and freelancers getting their billing organized.',
    features: [
      'Up to 10 invoices per month',
      'Client management directory',
      'Basic expense & receipt tracking',
      'Payment tracking & manual reconciliation',
      'Standard PDF invoice templates',
      'Multi-currency support (USD, EUR, GBP)'
    ],
    cta: 'Start Free',
    isPopular: false
  },
  {
    name: 'Growth',
    badge: 'Most Popular for Small Teams',
    priceMonthly: 19,
    priceYearly: 15,
    period: 'per month',
    description: 'For growing businesses and boutique studios scaling client deliverables.',
    features: [
      'Unlimited invoices & estimates',
      'Advanced expense categorizing & receipt OCR',
      'Real-time revenue & cashflow analytics',
      'Automated client payment reminders',
      'Custom branded invoice templates & fonts',
      'Client self-serve payment portal',
      'Export to CSV, Excel, and QuickBooks format'
    ],
    cta: 'Start with Growth',
    isPopular: true
  },
  {
    name: 'Scale',
    badge: 'Fast-Moving Agencies & Consultancies',
    priceMonthly: 49,
    priceYearly: 39,
    period: 'per month',
    description: 'For established agencies managing complex finances, staff, and contracts.',
    features: [
      'Everything in Growth plan',
      'Multi-seat team access & permission roles',
      'Advanced multi-entity financial reporting',
      'Priority live chat & onboarding support',
      'Dedicated account manager',
      'Custom tax rule engine & audit logs',
      'Custom domain client portal (billing.yourbrand.com)'
    ],
    cta: 'Start with Scale',
    isPopular: false
  }
];

export const FAQS = [
  {
    question: 'What is InvoiceX?',
    answer: 'InvoiceX is a smart invoicing and financial management SaaS designed for modern businesses, agencies, and freelancers. It brings invoice generation, expense tracking, payment monitoring, client history, and revenue analytics into one unified, beautifully intuitive workspace.'
  },
  {
    question: 'Can I create unlimited invoices?',
    answer: 'Yes! On our Growth and Scale plans, you can generate and dispatch unlimited invoices, estimates, and recurring billing schedules with zero per-invoice transaction fees.'
  },
  {
    question: 'Can I track business expenses alongside invoicing?',
    answer: 'Absolutely. InvoiceX allows you to record operating expenses, tag them by business categories (such as Software, Marketing, Operations, and Travel), and automatically offset them against revenue to display your real-time net income.'
  },
  {
    question: 'Can I manage multiple clients and payment histories?',
    answer: 'Yes. Every client gets their own dedicated profile containing contact information, payment terms, currency defaults, lifetime invoice history, and current outstanding balances.'
  },
  {
    question: 'Does InvoiceX support payment tracking and reminders?',
    answer: 'Yes. Invoices are categorized into Paid, Pending, Overdue, and Draft states. You can track payment method settlements and configure automatic, polite email reminders for upcoming or overdue balances.'
  },
  {
    question: 'Can I export financial reports for my accountant?',
    answer: 'Yes. You can export complete revenue breakdowns, expense categories, tax summaries, and invoice ledgers in standard CSV, Excel, or PDF formats with a single click.'
  },
  {
    question: 'Is InvoiceX suitable for freelancers and small businesses?',
    answer: 'Definitely. InvoiceX was engineered specifically to solve the administrative friction faced by independent contractors, boutique agencies, and high-velocity small businesses who want to replace messy spreadsheets with clean software.'
  }
];
