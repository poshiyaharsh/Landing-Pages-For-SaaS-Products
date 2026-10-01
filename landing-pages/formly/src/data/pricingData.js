export const pricingPlans = [
  {
    id: 'free',
    name: 'Free',
    tagline: 'For individuals and indie creators getting started.',
    monthlyPrice: 0,
    yearlyPrice: 0,
    badge: null,
    popular: false,
    ctaText: 'Start Building Free',
    ctaVariant: 'outline',
    features: [
      { text: 'Unlimited forms created', included: true },
      { text: 'Up to 500 responses / month', included: true },
      { text: 'Basic drag-and-drop builder', included: true },
      { text: 'Standard templates library', included: true },
      { text: 'Google Sheets & Email sync', included: true },
      { text: 'Conditional logic & branching', included: false },
      { text: 'Remove Formly branding', included: false },
      { text: 'Custom webhooks & API', included: false }
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'For creators, fast-growing startups, and modern teams.',
    monthlyPrice: 29,
    yearlyPrice: 22,
    badge: 'Most Popular',
    popular: true,
    ctaText: 'Start 14-Day Free Trial',
    ctaVariant: 'primary',
    features: [
      { text: 'Everything in Free, plus:', included: true },
      { text: 'Up to 10,000 responses / month', included: true },
      { text: 'Advanced conditional logic & skips', included: true },
      { text: 'Custom fonts, CSS & brand domains', included: true },
      { text: 'Remove Formly badge completely', included: true },
      { text: 'Full 150+ third-party integrations', included: true },
      { text: 'Real-time telemetry & drop-off analytics', included: true },
      { text: 'File uploads up to 100MB / file', included: true }
    ]
  },
  {
    id: 'business',
    name: 'Business',
    tagline: 'For organizations that need advanced workflows & scale.',
    monthlyPrice: 89,
    yearlyPrice: 69,
    badge: 'Scale & Security',
    popular: false,
    ctaText: 'Contact Sales / Demo',
    ctaVariant: 'outline',
    features: [
      { text: 'Everything in Pro, plus:', included: true },
      { text: 'Unlimited monthly responses', included: true },
      { text: 'Multi-seat team workspace with roles', included: true },
      { text: 'SOC2 Type II & HIPAA compliance', included: true },
      { text: 'Dedicated webhook workers & SLA', included: true },
      { text: 'Custom domain SSL certificates', included: true },
      { text: 'Priority 24/7 Slack & chat support', included: true },
      { text: 'Dedicated onboarding specialist', included: true }
    ]
  }
];
