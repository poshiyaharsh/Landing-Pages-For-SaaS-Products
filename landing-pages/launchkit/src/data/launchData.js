export const navigationLinks = [
  { label: 'Product', href: '#product' },
  { label: 'Features', href: '#features' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Workflow', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' }
];

export const socialProofStats = [
  { value: '2,000+', label: 'Launches powered' },
  { value: '15M+', label: 'Visitors tracked' },
  { value: '98%', label: 'Founder satisfaction' }
];

export const trustCompanies = [
  { name: 'VantageHQ', symbol: '▲' },
  { name: 'HyperloopX', symbol: '⚡' },
  { name: 'Pulseflow', symbol: '●' },
  { name: 'AeroScale', symbol: '◆' },
  { name: 'Monolith', symbol: '■' },
  { name: 'Synthetix', symbol: '✦' }
];

export const comparisonOldWay = [
  { name: 'Landing Page Builder', cost: '$49/mo', icon: 'Layout' },
  { name: 'Analytics Platform', cost: '$99/mo', icon: 'BarChart2' },
  { name: 'SEO Audit Scanner', cost: '$89/mo', icon: 'Search' },
  { name: 'Email Campaign Dispatch', cost: '$79/mo', icon: 'Mail' },
  { name: 'Task & Launch Roadmaps', cost: '$29/mo', icon: 'CheckSquare' },
  { name: 'Domain & SSL DNS Tools', cost: '$20/mo', icon: 'Globe' }
];

export const featuresList = [
  {
    id: 'landing-builder',
    step: '01',
    category: 'LANDING PAGE BUILDER',
    title: 'Build pages that convert.',
    description: 'Launch high-converting pages without waiting on developers or wrestling with bloated page editors.',
    badge: 'Drag & Drop Engine',
    color: 'from-pink-500 to-rose-500',
    accentColor: '#EC4899',
    bullets: [
      'Pre-assembled hero blocks with built-in contrast scoring',
      'Dynamic responsive breakpoints: Mobile, Tablet & Desktop',
      '1-click custom domain SSL issuance in <60 seconds',
      'Integrated A/B test variations with statistical auto-routing'
    ],
    uiType: 'builder'
  },
  {
    id: 'campaigns',
    step: '02',
    category: 'MARKETING CAMPAIGNS',
    title: 'Turn attention into momentum.',
    description: 'Create, launch, and optimize omnichannel waitlists, email blasts, and social buzz from one central command center.',
    badge: 'Automated Funnels',
    color: 'from-violet-500 to-blue-500',
    accentColor: '#8B5CF6',
    bullets: [
      'Automated viral waitlist queues with custom referral incentives',
      'Synchronized social broadcast triggers to Twitter/X & LinkedIn',
      'Multi-stage drip sequences tailored to early-adopter signups',
      'Direct CRM sync with real-time conversion pixel tracking'
    ],
    uiType: 'campaigns'
  },
  {
    id: 'analytics',
    step: '03',
    category: 'PRODUCT ANALYTICS',
    title: 'Know what’s actually working.',
    description: 'Track every important signal from first click to conversion without installing 5 complex tracking scripts.',
    badge: 'Zero-Lag Telemetry',
    color: 'from-blue-500 to-cyan-500',
    accentColor: '#3B82F6',
    bullets: [
      'Cookieless, privacy-first session and referrer attribution',
      'Instant funnel drop-off detection with time-on-page telemetry',
      'Cohort retention and activation milestones',
      'Exportable investor-ready CSV & PDF metric decks'
    ],
    uiType: 'analytics'
  },
  {
    id: 'seo-tools',
    step: '04',
    category: 'SEO TOOLS',
    title: 'Get discovered faster.',
    description: 'Optimize every page before you hit publish. Built-in audits verify metadata, OpenGraph cards, and Core Web Vitals.',
    badge: 'Score 94/100',
    color: 'from-amber-500 to-orange-500',
    accentColor: '#F97316',
    bullets: [
      'Automated sitemap.xml & robots.txt generator',
      'Live Google SERP & Twitter Card preview sandbox',
      'Semantic heading validation and broken link crawler',
      'Target keyword density analysis & AI slug suggestions'
    ],
    uiType: 'seo'
  },
  {
    id: 'launch-checklist',
    step: '05',
    category: 'LAUNCH CHECKLIST',
    title: 'Never miss launch day.',
    description: 'Turn your launch strategy into a clear, actionable checklist with automated milestones and team accountability.',
    badge: '82% Complete',
    color: 'from-emerald-500 to-teal-500',
    accentColor: '#10B981',
    bullets: [
      'Pre-populated with top Product Hunt, Hacker News & X launch playbooks',
      'Automated countdown clocks with synchronized team Slack alerts',
      'Asset checklists: badges, demo videos, and press media kits',
      'Post-launch triage tracker for inbound investor & user queries'
    ],
    uiType: 'checklist'
  }
];

export const timelineStages = [
  {
    id: 'idea',
    step: '01',
    title: 'Idea',
    subtitle: 'Define positioning & value proposition',
    badge: 'Concept Stage',
    preview: {
      headline: 'Autonomous Dev Workflows',
      targetAudience: 'Seed Stage Engineering Teams',
      coreValue: 'Cut sprint backlog cycles by 60%',
      validationStatus: 'Passed (94% initial affinity score)',
      metrics: { audience: '12,400', confidence: '92%' }
    }
  },
  {
    id: 'build',
    step: '02',
    title: 'Build',
    subtitle: 'Assemble pages & tracking in hours',
    badge: 'Creation Engine',
    preview: {
      headline: 'Next-Gen Landing Page Assembled',
      targetAudience: 'Pre-launch Waitlist Landing',
      coreValue: 'Zero-code responsive canvas deployed',
      validationStatus: 'Ready to publish (SSL active)',
      metrics: { pages: '3 Live', latency: '42ms' }
    }
  },
  {
    id: 'validate',
    step: '03',
    title: 'Validate',
    subtitle: 'Gather signups & run message tests',
    badge: 'Waitlist Engine',
    preview: {
      headline: 'Early Adopter Waitlist Surging',
      targetAudience: 'Growth & Product Leaders',
      coreValue: 'A/B test Variant B generating +34.8% lift',
      validationStatus: 'Validated Product-Market Signal',
      metrics: { signups: '2,840', viralRate: '1.42x' }
    }
  },
  {
    id: 'launch',
    step: '04',
    title: 'Launch',
    subtitle: 'Broadcast day: Product Hunt & social',
    badge: 'Launch Blitz',
    preview: {
      headline: 'Public Launch Day Command Center',
      targetAudience: 'Global Tech Community',
      coreValue: 'Synchronized campaigns firing across 4 channels',
      validationStatus: '#1 Product of the Day (Live)',
      metrics: { upvotes: '840+', visitors: '24.8K' }
    }
  },
  {
    id: 'grow',
    step: '05',
    title: 'Grow',
    subtitle: 'Analyze cohorts & compound MRR',
    badge: 'Scale Phase',
    preview: {
      headline: 'Sustained Revenue & Retention Engine',
      targetAudience: 'Paying SaaS Subscribers',
      coreValue: 'Net negative churn & recurring expansion',
      validationStatus: 'Compounding MoM Growth',
      metrics: { mrr: '$48,240', nps: '78' }
    }
  }
];

export const dashboardOverview = {
  stats: [
    { label: 'Visitors', value: '24,892', change: '+18.4%', isPositive: true },
    { label: 'Signups', value: '4,280', change: '+27.2%', isPositive: true },
    { label: 'Conversion', value: '17.2%', change: '+4.8%', isPositive: true },
    { label: 'Revenue', value: '$48,240', change: '+32.5%', isPositive: true }
  ],
  healthScores: [
    { label: 'Product Readiness', score: 100, color: 'bg-emerald-500' },
    { label: 'Marketing Funnels', score: 84, color: 'bg-blue-500' },
    { label: 'SEO & Performance', score: 94, color: 'bg-pink-500' },
    { label: 'Telemetry & Analytics', score: 100, color: 'bg-violet-500' }
  ]
};

export const howItWorksSteps = [
  {
    step: 'STEP 01',
    title: 'Build',
    tagline: 'Create your launch foundation.',
    description: 'Assemble high-converting landing pages, configure custom subdomains, connect analytics, and verify SEO scores in under an afternoon.',
    accent: '#8B5CF6',
    gradient: 'from-violet-500 to-indigo-600',
    iconName: 'Layout'
  },
  {
    step: 'STEP 02',
    title: 'Launch',
    tagline: 'Activate campaigns and start driving traffic.',
    description: 'Trigger viral referral waitlists, broadcast product releases, send targeted email drops, and monitor live visitor spikes without crashing.',
    accent: '#EC4899',
    gradient: 'from-pink-500 to-orange-500',
    iconName: 'Rocket'
  },
  {
    step: 'STEP 03',
    title: 'Grow',
    tagline: "Understand what's working and double down.",
    description: 'Track acquisition channels, measure user activation funnels, uncover high-intent cohorts, and compound your recurring MRR momentum.',
    accent: '#3B82F6',
    gradient: 'from-blue-500 to-cyan-500',
    iconName: 'TrendingUp'
  }
];

export const testimonials = [
  {
    id: 'maya',
    quote: 'LaunchKit replaced five different tools for our launch. We went from idea to live campaign in days, and collected over 8,000 signups before writing a single line of backend code.',
    author: 'Maya Patel',
    role: 'Founder',
    company: 'Orbitly',
    avatar: 'MP',
    avatarBg: 'bg-violet-600',
    stats: '8,400+ early waitlist signups'
  },
  {
    id: 'daniel',
    quote: 'The analytics alone changed how we make product decisions. We caught a critical drop-off in our onboarding flow on day one and doubled our conversion rate that same night.',
    author: 'Daniel Kim',
    role: 'Co-founder',
    company: 'Northstar',
    avatar: 'DK',
    avatarBg: 'bg-pink-600',
    stats: '2.4x higher activation rate'
  },
  {
    id: 'olivia',
    quote: 'We finally have one place to see what’s happening across our entire launch. The SEO audit and checklist kept our distributed team aligned without a single status call.',
    author: 'Olivia Chen',
    role: 'Founder',
    company: 'Framebox',
    avatar: 'OC',
    avatarBg: 'bg-cyan-600',
    stats: '#1 Product of the Day'
  }
];

export const pricingPlans = [
  {
    id: 'starter',
    name: 'STARTER',
    price: '$0',
    period: '/month',
    tagline: 'Ideal for solo builders experimenting with new project ideas.',
    badge: null,
    isPopular: false,
    ctaText: 'Start Free',
    features: [
      '1 active project launch',
      'Landing page builder (responsive blocks)',
      'Basic analytics & session tracking',
      'Automated SEO checklist',
      'Launch day countdown playbook',
      'Standard community support'
    ]
  },
  {
    id: 'growth',
    name: 'GROWTH',
    price: '$29',
    period: '/month',
    tagline: 'Everything founders and teams need to validate and scale fast.',
    badge: 'Most Popular',
    isPopular: true,
    ctaText: 'Start Growing →',
    features: [
      'Unlimited project launches',
      'Advanced real-time telemetry & funnels',
      'Automated marketing & email campaigns',
      'Full SEO tools & SERP previews',
      'Team collaboration (up to 5 seats)',
      'Custom domains with 1-click SSL',
      'Viral waitlist referral engine',
      'Priority email & Slack support'
    ]
  },
  {
    id: 'scale',
    name: 'SCALE',
    price: '$79',
    period: '/month',
    tagline: 'For high-velocity venture-backed startups and studios.',
    badge: 'Venture & Scale',
    isPopular: false,
    ctaText: 'Talk to Sales',
    features: [
      'Everything in Growth plan',
      'Advanced workflow automation & webhooks',
      'Executive investor PDF reporting',
      'Unlimited team members & seats',
      'Dedicated launch concierge manager',
      'Custom API & CRM data connectors',
      '99.99% guaranteed uptime SLA'
    ]
  }
];

export const faqList = [
  {
    q: 'What is LaunchKit?',
    a: 'LaunchKit is the all-in-one startup growth platform designed specifically for founders. It consolidates landing page creation, viral waitlist campaigns, cookieless telemetry analytics, SEO pre-launch audits, and step-by-step launch playbooks into one synchronized, high-speed workspace.'
  },
  {
    q: 'Can I build my landing page without coding?',
    a: 'Yes, 100%. LaunchKit includes an intuitive visual block builder with pre-styled, high-converting components. You can customize copy, typography, color palettes, and device breakpoints visually, and publish to your custom domain with instant free SSL.'
  },
  {
    q: 'Does LaunchKit include analytics?',
    a: 'Yes! LaunchKit comes with privacy-first, cookieless analytics built right in. You track unique visitors, conversion milestones, referrer attribution, and drop-off steps with zero complex code installations or external tag manager overhead.'
  },
  {
    q: 'Can I connect my existing website?',
    a: 'Absolutely. You can use LaunchKit’s standalone landing pages, or integrate our lightweight JavaScript snippet onto existing Next.js, Webflow, Framer, or WordPress sites to power waitlists, popups, and tracking.'
  },
  {
    q: 'Is there a free plan?',
    a: 'Yes, our Starter plan is completely free forever for 1 active launch project. You can also test the full-featured Growth plan with a 14-day free trial without entering a credit card.'
  },
  {
    q: 'Can my team collaborate?',
    a: 'Yes, the Growth and Scale plans support multi-seat collaboration, shared checklists, and real-time dashboard updates so your co-founders, marketers, and developers stay fully in sync.'
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes, there are no long-term contracts. You can upgrade, downgrade, or cancel your subscription at any time with a single click inside your billing settings.'
  }
];
