export const SOCIAL_PROOF_METRICS = [
  {
    label: "Active Marketers",
    value: "50K+",
    subtext: "Global growth teams"
  },
  {
    label: "Emails Created",
    value: "2.4M+",
    subtext: "Generated with MailForge AI"
  },
  {
    label: "Avg. Open Rate",
    value: "38%",
    subtext: "14% higher than industry average"
  },
  {
    label: "Customer Rating",
    value: "4.9/5",
    subtext: "From 1,200+ marketing reviews"
  }
];

export const BRAND_LOGOS = [
  { name: "Nova", tag: "AI Cloud" },
  { name: "Orbit", tag: "Analytics" },
  { name: "Linearix", tag: "DevTools" },
  { name: "Bloom", tag: "E-Commerce" },
  { name: "Vertex", tag: "Fintech" },
  { name: "Looma", tag: "SaaS Ops" }
];

export const PROBLEM_COMPARISON = {
  traditional: [
    { step: "Idea", desc: "Staring at blank doc" },
    { step: "Write", desc: "Writer's block & slow drafting" },
    { step: "Design", desc: "Waiting 3 days for designer" },
    { step: "Segment", desc: "Clunky manual filters" },
    { step: "Test", desc: "Guesswork A/B setup" },
    { step: "Analyze", desc: "Data arrives days late" }
  ],
  mailforge: [
    { step: "Idea", desc: "Single prompt input" },
    { step: "AI Campaign", desc: "Instant subject, copy & CTAs" },
    { step: "Smart Design", desc: "Auto-branded responsive blocks" },
    { step: "Audience", desc: "Predictive engagement clusters" },
    { step: "A/B Test", desc: "Autonomous winner routing" },
    { step: "Insights", desc: "Real-time actionable telemetry" }
  ]
};

export const AI_CAMPAIGN_PRESETS = [
  {
    id: "product-launch",
    name: "Summer Product Launch",
    product: "New Analytics Platform",
    audience: "Growth Teams",
    goal: "Product Launch",
    tone: "Confident + Friendly",
    subject: "Your analytics just got smarter ☀️",
    subjectScore: 94,
    subjectReason: "High emotional resonance + concise value proposition",
    openRateEst: "44.8%",
    previewCopy: "Meet the new command center built for growth leaders. Real-time cohort telemetry, predictive churn alerts, and zero-click automated reports.",
    cta: "Explore Analytics 2.0",
    variations: [
      { text: "Your analytics just got smarter ☀️", score: 94, tag: "High CTR" },
      { text: "Say goodbye to blind spots in your data stack", score: 91, tag: "Curiosity" },
      { text: "Growth leaders: your new telemetry is ready", score: 89, tag: "Targeted" }
    ]
  },
  {
    id: "saas-onboarding",
    name: "Day 3 Activation Series",
    product: "MailForge Pro",
    audience: "Trial Users",
    goal: "Feature Adoption",
    tone: "Helpful + Direct",
    subject: "3 minutes to your first high-converting campaign",
    subjectScore: 96,
    subjectReason: "Clear low-friction timeframe + tangible benefit",
    openRateEst: "48.2%",
    previewCopy: "Ready to test MailForge? Connect your domain in 60 seconds and generate 3 production-ready campaign ideas tailored to your audience.",
    cta: "Launch Quick Campaign",
    variations: [
      { text: "3 minutes to your first high-converting campaign", score: 96, tag: "Top Pick" },
      { text: "Unlock your personalized marketing playbook", score: 92, tag: "Exclusive" },
      { text: "Quick tip: boost opens by 22% with AI subjects", score: 90, tag: "Actionable" }
    ]
  },
  {
    id: "webinar-invite",
    name: "Live Masterclass VIP",
    product: "Growth Masterclass",
    audience: "Marketing Directors",
    goal: "Event Registrations",
    tone: "Authoritative + Urgent",
    subject: "Live this Thursday: The 2026 Email Playbook",
    subjectScore: 93,
    subjectReason: "Time scarcity + concrete calendar anchor",
    openRateEst: "41.5%",
    previewCopy: "Join 500+ lifecycle heads as we dissect campaigns that delivered $4.2M in pipeline with predictive subject lines and micro-segmentation.",
    cta: "Claim Free Seat",
    variations: [
      { text: "Live this Thursday: The 2026 Email Playbook", score: 93, tag: "Urgency" },
      { text: "How top brands hit 42% opens in 2026", score: 91, tag: "Proof" },
      { text: "Private invite: Masterclass with Maya Patel", score: 88, tag: "VIP" }
    ]
  }
];

export const EMAIL_BUILDER_BLOCKS = [
  { id: "text", name: "Text", icon: "Type", count: "12 styles" },
  { id: "image", name: "Image", icon: "Image", count: "WebP / CDN" },
  { id: "button", name: "Button", icon: "Square", count: "Gradients" },
  { id: "divider", name: "Divider", icon: "Minus", count: "Clean lines" },
  { id: "social", name: "Social", icon: "Share2", count: "Icons & links" },
  { id: "columns", name: "Columns", icon: "Columns", count: "1, 2, 3 cols" },
  { id: "video", name: "Video", icon: "PlaySquare", count: "Thumbnail embed" },
  { id: "spacer", name: "Spacer", icon: "Maximize2", count: "Adaptive height" }
];

export const AUDIENCE_SEGMENTS = [
  {
    id: "engaged",
    name: "Engaged Users",
    count: "8,420",
    openRate: "58.4%",
    tag: "High Value",
    color: "#2563EB",
    criteria: "Opened ≥3 emails in past 30 days"
  },
  {
    id: "new-subs",
    name: "New Subscribers",
    count: "4,230",
    openRate: "46.1%",
    tag: "Nurture",
    color: "#8B5CF6",
    criteria: "Signed up within last 14 days"
  },
  {
    id: "high-intent",
    name: "High Intent",
    count: "2,180",
    openRate: "64.2%",
    tag: "VIP Ready",
    color: "#EC4899",
    criteria: "Clicked pricing CTA or visit docs"
  }
];

export const AB_TEST_DATA = {
  campaign: "Summer Feature Announcement",
  sampleSize: 18420,
  testedPercent: "20%",
  duration: "4 hours",
  confidence: "99.4%",
  winner: "Version B",
  variantA: {
    name: "Version A",
    subject: "Meet your new marketing assistant",
    preheader: "Everything you need to automate email design.",
    openRate: 38.4,
    clickRate: 6.9,
    conversions: 182,
    badge: "Baseline"
  },
  variantB: {
    name: "Version B",
    subject: "Your campaigns just got smarter",
    preheader: "Create, test, and personalize with AI in seconds.",
    openRate: 44.7,
    clickRate: 9.4,
    conversions: 274,
    badge: "Winner (+16.4% uplift)"
  }
};

export const ANALYTICS_DATA = {
  overview: {
    openRate: "42.8%",
    openRateDiff: "+6.4%",
    clickRate: "8.7%",
    clickRateDiff: "+2.1%",
    conversions: "3.2%",
    conversionsDiff: "+0.8%",
    unsubscribe: "0.4%",
    unsubscribeDiff: "-0.2%"
  },
  topCampaigns: [
    { name: "Summer Launch", sent: "18,420", openRate: 44.8, clickRate: 9.6, status: "Completed" },
    { name: "Product Update", sent: "24,800", openRate: 39.2, clickRate: 8.1, status: "Active" },
    { name: "Weekly Newsletter", sent: "32,150", openRate: 36.7, clickRate: 7.4, status: "Completed" },
    { name: "Welcome Series", sent: "9,640", openRate: 41.3, clickRate: 9.2, status: "Automated" }
  ],
  devices: [
    { label: "Mobile iOS & Android", pct: 64, color: "#2563EB" },
    { label: "Desktop & Webmail", pct: 36, color: "#8B5CF6" }
  ]
};

export const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Describe your campaign",
    desc: "Input your product, target audience, and key goals in a single plain sentence or brief.",
    highlight: "Zero prompt engineering required"
  },
  {
    step: "02",
    title: "MailForge generates your content",
    desc: "AI produces optimized subject lines, persuasive body copy, hooks, and conversion CTAs.",
    highlight: "Scored against 50M+ emails"
  },
  {
    step: "03",
    title: "Customize your design",
    desc: "Fine-tune responsive drag-and-drop email blocks with one-click brand colors and typography.",
    highlight: "100% mobile-perfect preview"
  },
  {
    step: "04",
    title: "Choose your audience",
    desc: "Select dynamic behavioural segments or let AI target subscribers most likely to convert.",
    highlight: "Predictive engagement filters"
  },
  {
    step: "05",
    title: "Run A/B tests",
    desc: "Automatically split-test subject lines and copy variations to pick the statistically proven winner.",
    highlight: "Autonomous winning variant send"
  },
  {
    step: "06",
    title: "Measure results",
    desc: "Watch real-time opens, clicks, heatmap telemetry, and revenue attribution in a clean dashboard.",
    highlight: "Live streaming analytics"
  }
];

export const TESTIMONIALS = [
  {
    quote: "MailForge completely changed how our marketing team approaches campaigns. We go from idea to polished email in minutes.",
    name: "Maya Patel",
    role: "Growth Lead",
    company: "Nova Labs",
    stats: "44.8% avg. open rate",
    avatarBg: "linear-gradient(135deg, #3B82F6, #8B5CF6)"
  },
  {
    quote: "The AI subject line scoring alone boosted our lifecycle click rates by 34%. It genuinely understands what drives engagement.",
    name: "Marcus Chen",
    role: "Head of Lifecycle",
    company: "Orbit",
    stats: "2.8x higher conversions",
    avatarBg: "linear-gradient(135deg, #8B5CF6, #EC4899)"
  },
  {
    quote: "Designing responsive emails used to be our biggest bottleneck. Now our content marketers ship high-converting newsletters without engineering.",
    name: "Sarah Jenkins",
    role: "Marketing VP",
    company: "Bloom",
    stats: "Saved 12 hrs/week",
    avatarBg: "linear-gradient(135deg, #06B6D4, #3B82F6)"
  },
  {
    quote: "The audience segmentation and automated A/B rollout feels like having two dedicated lifecycle data scientists on our team.",
    name: "Liam Vance",
    role: "Founder",
    company: "Linearix",
    stats: "99.4% test confidence",
    avatarBg: "linear-gradient(135deg, #F59E0B, #EC4899)"
  }
];

export const PRICING_PLANS = [
  {
    id: "starter",
    name: "Starter",
    badge: "Free Forever",
    monthlyPrice: 0,
    yearlyPrice: 0,
    tagline: "For getting started and testing high-converting emails.",
    features: [
      "1,000 contacts",
      "AI campaign generation",
      "Drag & drop email builder",
      "Basic campaign analytics",
      "Standard email delivery speed",
      "Community support"
    ],
    cta: "Start Free",
    isPopular: false
  },
  {
    id: "growth",
    name: "Growth",
    badge: "MOST POPULAR",
    monthlyPrice: 29,
    yearlyPrice: 24,
    tagline: "For growing marketing teams needing scale and speed.",
    features: [
      "10,000 contacts",
      "Unlimited campaigns",
      "AI campaign generation (unlimited)",
      "Advanced predictive segmentation",
      "Automated A/B testing suite",
      "Advanced analytics & heatmap",
      "Custom domain & DKIM setup",
      "Priority email support"
    ],
    cta: "Start Growing",
    isPopular: true
  },
  {
    id: "scale",
    name: "Scale",
    badge: "Enterprise Power",
    monthlyPrice: 99,
    yearlyPrice: 79,
    tagline: "For larger teams, high-volume senders, and agencies.",
    features: [
      "50,000 contacts",
      "Advanced multi-model AI assistant",
      "Deep behavioral segmentation",
      "Multi-step automated customer journeys",
      "Team collaboration & role permissions",
      "Dedicated IP & delivery monitoring",
      "Priority 24/7 support & SLA",
      "Custom CRM & webhook integrations"
    ],
    cta: "Talk to Sales",
    isPopular: false
  }
];

export const FAQS = [
  {
    q: "What is MailForge?",
    a: "MailForge is a modern AI-powered email marketing platform designed for marketers, growth teams, and founders. It combines intelligent campaign generation, a seamless drag-and-drop editor, predictive segmentation, automated A/B testing, and real-time telemetry into one unified workspace."
  },
  {
    q: "Can MailForge generate complete email campaigns?",
    a: "Yes. From a short brief or product link, MailForge creates complete email campaigns: high-converting subject line variations scored against millions of data points, engaging body copy, strategic call-to-actions, and pre-formatted layout structures ready to send."
  },
  {
    q: "Does MailForge include an email builder?",
    a: "Absolutely. MailForge features a fast, drag-and-drop visual email builder with pre-styled modular blocks (text, buttons, heroes, columns, product cards, video embeds, and dividers) that render with 100% responsive precision across Gmail, Apple Mail, Outlook, and mobile clients."
  },
  {
    q: "Can I create audience segments?",
    a: "Yes. You can build segments using behavioral triggers (e.g., opened in last 7 days, clicked specific links, purchase history) or utilize MailForge's AI predictive clustering to identify users most likely to engage with specific campaign topics."
  },
  {
    q: "How does A/B testing work?",
    a: "Set up two or more variations of subject lines, copy, or layouts. MailForge automatically sends the test variants to a designated sample of your audience (e.g., 20%). Once a statistically significant winner is detected, the winning email is dispatched to the remaining subscribers."
  },
  {
    q: "Can I track campaign performance?",
    a: "Yes. MailForge provides comprehensive real-time telemetry including open rates, click-through rates, conversion tracking, device breakdowns, unsubscribe rates, and historical campaign comparisons with clean, interactive charts."
  },
  {
    q: "Is MailForge suitable for small teams?",
    a: "Yes! MailForge was specifically built to give solo founders and lean teams the creative and analytical firepower of an entire enterprise lifecycle marketing department without the complexity or high retainer costs."
  }
];
