export interface AlertItem {
  id: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low' | string;
  title: string;
  target: string;
  source?: string;
  timestamp: string;
  timeAgo?: string;
  status: 'Investigating' | 'Resolved' | 'Ignored' | string;
  details?: string;
}

export interface VulnerabilityItem {
  id: string;
  title: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low' | string;
  status: 'Resolved' | 'Action required' | string;
  cve?: string;
  target: string;
  affectedAsset?: string;
}

export interface ComplianceFramework {
  id?: string;
  name: string;
  score: number;
  controlsCompleted: number;
  totalControls: number;
  attention: string;
  notes?: string;
  lastAudit: string;
  status: string;
}

export interface TestimonialItem {
  id?: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  metrics?: string;
}

export interface PricingPlanItem {
  id?: string;
  name: string;
  price: string;
  period: string;
  description: string;
  highlighted?: boolean;
  isPopular?: boolean;
  cta: string;
  features: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  q?: string;
  a?: string;
}

export const NAV_LINKS = [
  { name: 'Platform', href: '#platform' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'Security', href: '#security' },
  { name: 'Resources', href: '#resources' },
  { name: 'Pricing', href: '#pricing' }
];
export const navigationLinks = NAV_LINKS;

export const TRUST_LOGOS = [
  { name: 'NEXORA', icon: 'Shield' },
  { name: 'CLOUDGRID', icon: 'Network' },
  { name: 'VERTEX', icon: 'Cpu' },
  { name: 'NORTHSTAR', icon: 'Compass' },
  { name: 'QUANTIX', icon: 'Zap' }
];
export const trustCustomers = TRUST_LOGOS;

export const HERO_FEED_ITEMS = [
  { title: 'Suspicious login blocked', time: 'Just now' },
  { title: 'Vulnerability patched', time: '1m ago' },
  { title: 'Endpoint verified', time: '2m ago' },
  { title: 'Firewall policy updated', time: '5m ago' }
];
export const heroLiveFeed = HERO_FEED_ITEMS;

export const SECURITY_OVERVIEW_CARDS = [
  {
    number: '01',
    title: 'Threat Monitoring',
    description: 'Detect suspicious activity across your infrastructure in real time with continuous behavioral anomaly detection.',
    icon: 'Activity'
  },
  {
    number: '02',
    title: 'Vulnerability Scanning',
    description: 'Continuously discover and prioritize security weaknesses before attackers do across all repositories and cloud assets.',
    icon: 'ShieldAlert'
  },
  {
    number: '03',
    title: 'Security Alerts',
    description: 'Turn noisy security events into clear, actionable alerts with automated blast-radius containment.',
    icon: 'BellRing'
  },
  {
    number: '04',
    title: 'Compliance Dashboard',
    description: 'Track compliance posture across frameworks and teams with continuous cryptographic proof.',
    icon: 'FileCheck2'
  }
];
export const securityOverviewCards = SECURITY_OVERVIEW_CARDS;

export const DASHBOARD_NAV_TABS = [
  { id: 'Overview', name: 'Overview', icon: 'LayoutDashboard' },
  { id: 'Threats', name: 'Threats', icon: 'ShieldAlert', badge: '3 Active' },
  { id: 'Vulnerabilities', name: 'Vulnerabilities', icon: 'Search', badge: '12' },
  { id: 'Assets', name: 'Assets', icon: 'Server' },
  { id: 'Compliance', name: 'Compliance', icon: 'FileCheck2' },
  { id: 'Reports', name: 'Reports', icon: 'FileText' },
  { id: 'Settings', name: 'Settings', icon: 'Settings' }
];

export const THREAT_REGIONS = [
  { name: 'North America', threatLevel: 'Normal', activity: '14.2k eps', blocked: '842 / hr' },
  { name: 'Europe', threatLevel: 'Normal', activity: '11.8k eps', blocked: '614 / hr' },
  { name: 'Asia', threatLevel: 'Elevated', activity: '9.4k eps', blocked: '590 / hr' },
  { name: 'India', threatLevel: 'Normal', activity: '7.2k eps', blocked: '435 / hr' }
];
export const threatRegions = THREAT_REGIONS;

export const VULNERABILITY_ITEMS: VulnerabilityItem[] = [
  {
    id: 'v-1',
    title: 'Outdated dependency',
    severity: 'Medium',
    status: 'Resolved',
    target: 'Billing Service (Node.js)'
  },
  {
    id: 'v-2',
    title: 'Weak authentication policy',
    severity: 'High',
    status: 'Action required',
    target: 'Admin Portal (SSO)'
  },
  {
    id: 'v-3',
    title: 'Exposed API endpoint',
    severity: 'Medium',
    status: 'Resolved',
    target: 'Analytics Ingress (k8s)'
  }
];
export const vulnerabilitiesData = VULNERABILITY_ITEMS;

export const SECURITY_ALERTS_DATA: AlertItem[] = [
  {
    id: 'alt-1',
    severity: 'Critical',
    title: 'Suspicious authentication attempt',
    target: 'Production API',
    timestamp: '2 minutes ago',
    status: 'Investigating'
  },
  {
    id: 'alt-2',
    severity: 'High',
    title: 'Multiple failed login attempts',
    target: 'Admin Portal',
    timestamp: '8 minutes ago',
    status: 'Investigating'
  },
  {
    id: 'alt-3',
    severity: 'Medium',
    title: 'Outdated dependency detected',
    target: 'Billing Service',
    timestamp: '21 minutes ago',
    status: 'Resolved'
  },
  {
    id: 'alt-4',
    severity: 'Low',
    title: 'Unusual traffic pattern',
    target: 'Analytics API',
    timestamp: '43 minutes ago',
    status: 'Resolved'
  }
];
export const alertsData = SECURITY_ALERTS_DATA;

export const COMPLIANCE_FRAMEWORKS: ComplianceFramework[] = [
  {
    id: 'soc2',
    name: 'SOC 2',
    score: 96,
    status: '96% compliant',
    controlsCompleted: 42,
    totalControls: 44,
    attention: '2 controls need attention',
    lastAudit: 'Today, 09:30'
  },
  {
    id: 'iso27001',
    name: 'ISO 27001',
    score: 91,
    status: '91% compliant',
    controlsCompleted: 85,
    totalControls: 93,
    attention: '8 controls need attention',
    lastAudit: 'Yesterday'
  },
  {
    id: 'gdpr',
    name: 'GDPR',
    score: 98,
    status: '98% compliant',
    controlsCompleted: 32,
    totalControls: 33,
    attention: '1 control in review',
    lastAudit: '2 days ago'
  },
  {
    id: 'hipaa',
    name: 'HIPAA',
    score: 94,
    status: '94% compliant',
    controlsCompleted: 47,
    totalControls: 50,
    attention: '3 controls need attention',
    lastAudit: '3 days ago'
  }
];
export const complianceFrameworks = COMPLIANCE_FRAMEWORKS;

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Connect',
    description: 'Connect your cloud, endpoints, repositories, and infrastructure in under 5 minutes with zero agent friction.',
    icon: 'Link2'
  },
  {
    step: '02',
    title: 'Detect',
    description: 'SecureNest continuously analyzes your environment for threats, misconfigurations, and vulnerabilities in real time.',
    icon: 'Search'
  },
  {
    step: '03',
    title: 'Protect',
    description: 'Prioritize risks, resolve issues automatically, and continuously prove your security posture to auditors and customers.',
    icon: 'ShieldCheck'
  }
];

export const INTEGRATIONS_LIST = [
  { name: 'AWS', category: 'Cloud Infrastructure', icon: 'Cloud' },
  { name: 'Google Cloud', category: 'Cloud Platform', icon: 'Cloud' },
  { name: 'Azure', category: 'Enterprise Cloud', icon: 'Layers' },
  { name: 'GitHub', category: 'Source Code & CI/CD', icon: 'GitBranch' },
  { name: 'GitLab', category: 'DevSecOps Pipeline', icon: 'GitBranch' },
  { name: 'Slack', category: 'Instant Security Alerts', icon: 'MessageSquare' },
  { name: 'Jira', category: 'Issue Tracking & SLA', icon: 'CheckSquare' },
  { name: 'Docker', category: 'Container Registry', icon: 'Box' },
  { name: 'Kubernetes', category: 'Cluster Orchestration', icon: 'Server' },
  { name: 'Cloudflare', category: 'Edge Network & WAF', icon: 'Globe' }
];
export const integrationsList = INTEGRATIONS_LIST;

export const SECURITY_PILLARS = [
  {
    title: 'End-to-End Encryption',
    description: 'All telemetry and audit streams are encrypted with AES-256-GCM at rest and TLS 1.3 in transit.',
    icon: 'Lock'
  },
  {
    title: 'Role-Based Access Control',
    description: 'Granular permissions, least-privilege scoping, and strict MFA enforcement across teams.',
    icon: 'Users'
  },
  {
    title: 'Audit Logs',
    description: 'Immutable, tamper-evident cryptographic log streams with instant SIEM forwarding.',
    icon: 'FileSpreadsheet'
  },
  {
    title: 'Continuous Monitoring',
    description: 'Round-the-clock automated asset discovery, vulnerability correlation, and threat detection.',
    icon: 'Eye'
  },
  {
    title: 'Secure API Access',
    description: 'Tokenized machine-to-machine authentication, HMAC verification, and strict rate limits.',
    icon: 'KeyRound'
  },
  {
    title: 'Enterprise Authentication',
    description: 'Native SAML 2.0 and OIDC integrations for Okta, Azure AD, Ping, and Google Workspace.',
    icon: 'ShieldCheck'
  }
];
export const trustSecurityPillars = SECURITY_PILLARS;

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    quote: 'SecureNest replaced three separate security tools for our team. We finally have one clear view of our entire security posture.',
    name: 'Alex Morgan',
    role: 'VP of Engineering',
    company: 'Northstar',
    avatar: 'AM'
  },
  {
    quote: 'Passing our SOC 2 Type II audit took days instead of weeks. The automated compliance evidence collector is a game-changer.',
    name: 'Elena Vance',
    role: 'Chief Information Security Officer',
    company: 'Nexora',
    avatar: 'EV'
  },
  {
    quote: 'The real-time threat map and automated containment stopped credential stuffing attempts within seconds of detection.',
    name: 'Marcus Reid',
    role: 'Head of Infrastructure',
    company: 'Vertex',
    avatar: 'MR'
  }
];
export const testimonials = TESTIMONIALS_DATA;

export const PRICING_PLANS: PricingPlanItem[] = [
  {
    name: 'Starter',
    price: '$29',
    period: '/ month',
    description: 'For small teams.',
    highlighted: false,
    cta: 'Start 14-Day Free Trial',
    features: [
      '10 assets included',
      'Threat monitoring',
      'Vulnerability scanning',
      'Security alerts',
      'Basic reports'
    ]
  },
  {
    name: 'Professional',
    price: '$99',
    period: '/ month',
    description: 'For growing teams.',
    highlighted: true,
    cta: 'Start Protecting',
    features: [
      '100 assets included',
      'Advanced monitoring',
      'Continuous scanning',
      'Compliance dashboard',
      'Automated reports',
      'Integrations (50+)'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'annual billing',
    description: 'For large organizations.',
    highlighted: false,
    cta: 'Talk to Security Expert',
    features: [
      'Unlimited assets',
      'Advanced threat detection',
      'SSO & SAML 2.0',
      'Granular RBAC',
      'Custom compliance frameworks',
      'Dedicated support & SLA',
      'Custom integrations'
    ]
  }
];
export const pricingPlans = PRICING_PLANS;

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What is SecureNest?',
    answer: 'SecureNest is an all-in-one cybersecurity command center designed for modern businesses to monitor threats, scan vulnerabilities, manage security alerts, track compliance, and generate executive security reports from a single pane of glass.'
  },
  {
    question: 'How does threat monitoring work?',
    answer: 'SecureNest connects to your cloud providers, container clusters, API gateways, and endpoints using lightweight read-only integrations. It continuously analyzes event telemetry using behavioral anomaly models to detect and mitigate threats in real time.'
  },
  {
    question: 'What infrastructure can I connect?',
    answer: 'You can connect Amazon Web Services, Google Cloud, Microsoft Azure, Kubernetes, Docker, GitHub, GitLab, Cloudflare, and on-premises servers in under 5 minutes with zero kernel disruption.'
  },
  {
    question: 'Does SecureNest support compliance frameworks?',
    answer: 'Yes. SecureNest continuously audits and proves compliance for SOC 2 Type II, ISO 27001, GDPR, and HIPAA. It eliminates manual spreadsheet evidence collection with continuous cryptographic attestation.'
  },
  {
    question: 'Can I export security reports?',
    answer: 'Yes. You can generate executive PDF summaries, auditor-ready compliance bundles, and raw CSV/JSON logs with a single click, or schedule weekly automated deliveries directly to leadership.'
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes. SecureNest provides a full-featured 14-day free trial on both Starter and Professional plans with no credit card required. You can connect your staging or test environment and see results immediately.'
  },
  {
    question: 'How does SecureNest protect customer data?',
    answer: 'Security is our core foundation. SecureNest uses zero-knowledge telemetry analysis: your proprietary source code, secrets, and raw database contents never leave your network. All metadata is encrypted with AES-256-GCM and TLS 1.3.'
  }
];
export const faqList = FAQ_ITEMS;

export const FOOTER_COLUMNS = [
  {
    title: 'Product',
    links: [
      { name: 'Threat Monitoring', href: '#platform' },
      { name: 'Vulnerability Scanning', href: '#platform' },
      { name: 'Security Alerts', href: '#platform' },
      { name: 'Compliance', href: '#platform' },
      { name: 'Reports', href: '#resources' }
    ]
  },
  {
    title: 'Solutions',
    links: [
      { name: 'Startups', href: '#solutions' },
      { name: 'Engineering Teams', href: '#solutions' },
      { name: 'Enterprise', href: '#solutions' },
      { name: 'Security Teams', href: '#solutions' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'Documentation', href: '#resources' },
      { name: 'Security Center', href: '#security' },
      { name: 'API Reference', href: '#resources' },
      { name: 'Blog', href: '#resources' },
      { name: 'Changelog', href: '#resources' }
    ]
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' }
    ]
  }
];
