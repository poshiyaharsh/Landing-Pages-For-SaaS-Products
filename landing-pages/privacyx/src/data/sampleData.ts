import {
  PrivacyRequest,
  ConsentRecord,
  DataCategoryInventory,
  PolicyTask,
  FeatureItem,
  PrivacyWorkflowStep,
  PrivacyPrinciple,
  PricingPlan,
  FAQItem,
} from '../types';

export const initialPrivacyRequests: PrivacyRequest[] = [
  {
    id: 'REQ-1048',
    type: 'dsar',
    typeLabel: 'DSAR Access Copy',
    requesterEmail: 'c.lindqvist@acme-media.se',
    subjectName: 'Clara Lindqvist',
    status: 'pending_verification',
    submittedDate: '2 days ago',
    dueDate: 'In 28 days',
    daysRemaining: 28,
    dataCategories: ['Identity', 'Billing Invoices', 'Product Telemetry'],
    assignedTeam: 'Legal & Privacy Ops',
    notes: 'Awaiting email verification token confirmation before staging database extraction.',
  },
  {
    id: 'REQ-1049',
    type: 'deletion',
    typeLabel: 'Right to Erasure (RTBF)',
    requesterEmail: 'j.santiago@cloudline.io',
    subjectName: 'Julian Santiago',
    status: 'in_progress',
    submittedDate: '5 days ago',
    dueDate: 'In 25 days',
    daysRemaining: 25,
    dataCategories: ['Account Profile', 'Marketing Tags', 'Cookie Sync'],
    assignedTeam: 'Data Engineering',
    notes: 'PostgreSQL read-replica purged; Snowflake customer telemetry warehouse purge queued.',
  },
  {
    id: 'REQ-1050',
    type: 'opt_out',
    typeLabel: 'Consent Withdrawal',
    requesterEmail: 'a.novak@prague-fin.cz',
    subjectName: 'Alena Novak',
    status: 'completed',
    submittedDate: '12 days ago',
    dueDate: 'Fulfilled on time',
    daysRemaining: 0,
    dataCategories: ['Behavioral Ad Tracking', 'Third-Party Pixels'],
    assignedTeam: 'Growth Marketing',
    notes: 'Braze and Segment suppression webhooks executed with cryptographic receipt archived.',
  },
  {
    id: 'REQ-1051',
    type: 'opt_out',
    typeLabel: 'CCPA Do-Not-Sell',
    requesterEmail: 'm.holloway@cal-retail.com',
    subjectName: 'Marcus Holloway',
    status: 'in_progress',
    submittedDate: '1 day ago',
    dueDate: 'In 44 days',
    daysRemaining: 44,
    dataCategories: ['Commercial Telemetry', 'Cross-Device Fingerprint'],
    assignedTeam: 'Privacy Operations',
    notes: 'Global Privacy Control (GPC) header detected; customer profile flagged as non-monetized.',
  },
  {
    id: 'REQ-1052',
    type: 'portability',
    typeLabel: 'Data Portability (JSON)',
    requesterEmail: 'd.tanaka@tokyo-ops.jp',
    subjectName: 'Daisuke Tanaka',
    status: 'completed',
    submittedDate: '8 days ago',
    dueDate: 'Fulfilled on time',
    daysRemaining: 0,
    dataCategories: ['Project Archives', 'Billing History', 'Support Threads'],
    assignedTeam: 'Platform Security',
    notes: 'Password-encrypted ZIP archive downloaded via single-use signed S3 URL.',
  },
];

export const initialConsentRecords: ConsentRecord[] = [
  { purpose: 'Authentication & Session Security', status: 'Required', subjectCount: '240,500 users', consentRate: '100% (Strict Necessity)', lastUpdated: 'System Baseline' },
  { purpose: 'Product Improvement & Telemetry', status: 'Opted-In', subjectCount: '194,200 users', consentRate: '80.7% Opt-In', lastUpdated: 'Updated 4h ago' },
  { purpose: 'Personalized Email Announcements', status: 'Opted-In', subjectCount: '112,400 users', consentRate: '46.7% Opt-In', lastUpdated: 'Updated 1d ago' },
  { purpose: 'Third-Party Behavioral Retargeting', status: 'Withdrawn', subjectCount: '48,100 users', consentRate: '20.0% Opt-In', lastUpdated: 'Suppression Active' },
];

export const dataInventoryCatalog: DataCategoryInventory[] = [
  {
    category: 'Account Identity & Contacts',
    purposes: ['Authentication', 'Customer Support', 'Security Alerts'],
    systemsOfRecord: ['PostgreSQL Auth DB', 'Auth0 / Okta Directory'],
    retentionWindow: 'Duration of account + 90 days',
    isSensitive: false,
  },
  {
    category: 'Billing & Commercial Invoices',
    purposes: ['Tax Accounting', 'GAAP Revenue Recognition'],
    systemsOfRecord: ['Stripe Billing Ledger', 'NetSuite ERP'],
    retentionWindow: '7 years (Statutory Tax Requirement)',
    isSensitive: true,
  },
  {
    category: 'Product Behavioral Telemetry',
    purposes: ['Feature Adoption', 'Latency Monitoring', 'Anomaly Triage'],
    systemsOfRecord: ['Snowflake Warehouse', 'ClickHouse Cluster'],
    retentionWindow: '180 days rolling window',
    isSensitive: false,
  },
  {
    category: 'Security & Network Audit Logs',
    purposes: ['Intrusion Detection', 'SOC2 Incident Forensics'],
    systemsOfRecord: ['AWS CloudTrail', 'Datadog Log Archives'],
    retentionWindow: '365 days immutable WORM storage',
    isSensitive: true,
  },
];

export const initialPolicyTasks: PolicyTask[] = [
  { id: 'pol-1', title: 'Complete annual Article 30 RoPA processing register audit', framework: 'GDPR / UK GDPR', deadline: 'Dec 15', completed: true, owner: 'Elena Rostova (DPO)' },
  { id: 'pol-2', title: 'Verify CCPA/CPRA Do-Not-Sell link visibility on marketing footers', framework: 'California CPRA', deadline: 'Dec 22', completed: true, owner: 'Frontend Platform' },
  { id: 'pol-3', title: 'Review sub-processor Data Processing Addendums (DPAs)', framework: 'Vendor Governance', deadline: 'Jan 10', completed: false, owner: 'Legal Counsel' },
  { id: 'pol-4', title: 'Automated 180-day telemetry retention purge dry run', framework: 'Data Minimization', deadline: 'Jan 28', completed: false, owner: 'Data Engineering' },
];

export const privacyFeatures: FeatureItem[] = [
  {
    icon: 'Inbox',
    title: 'Privacy Request Queue',
    description: 'Centralize DSAR, deletion, and consent withdrawal requests from web forms and API webhooks in one auditable queue.',
    highlight: 'Unified Request Tracking',
  },
  {
    icon: 'Sliders',
    title: 'Consent Preference Hub',
    description: 'Keep granular user cookie and communication choices synchronized across marketing automation and CRM tools.',
    highlight: 'Real-Time Consent Sync',
  },
  {
    icon: 'Database',
    title: 'Data Inventory Register (RoPA)',
    description: 'Maintain an accurate, automated record of processing activities mapping categories, retention windows, and vendors.',
    highlight: 'Article 30 RoPA Compliance',
  },
  {
    icon: 'CheckSquare',
    title: 'Policy Review & Due Dates',
    description: 'Track regulatory deadlines, annual privacy assessments, and vendor DPA renewals with automated escalation alerts.',
    highlight: 'Automated Statutory Timers',
  },
  {
    icon: 'ShieldCheck',
    title: 'Role-Based Team Ownership',
    description: 'Delegate technical deletion tasks to engineering while keeping legal and DPO reviews strictly compartmentalized.',
    highlight: 'Granular Role Permissions',
  },
  {
    icon: 'FileText',
    title: 'Audit-Proof Activity Logs',
    description: 'Generate timestamped PDF and JSON compliance receipts demonstrating timely request fulfillment for regulators.',
    highlight: 'Tamper-Evident Receipts',
  },
];

export const privacyWorkflowSteps: PrivacyWorkflowStep[] = [
  {
    step: '01',
    title: 'Receive & Intake Request',
    description: 'Subject requests enter via verified web portal or automated Global Privacy Control (GPC) signals.',
    complianceControl: 'Automated timestamping and statutory deadline timer start (30-day countdown)',
  },
  {
    step: '02',
    title: 'Authenticate Subject Identity',
    description: 'Verify the requester identity using two-factor email challenge tokens or existing session credentials.',
    complianceControl: 'Prevents fraudulent data disclosure and social engineering attacks',
  },
  {
    step: '03',
    title: 'Assign Downstream Tasks',
    description: 'Orchestrate database deletion queries and data package exports to designated system owners.',
    complianceControl: 'Clear ownership with automated SLA reminder webhooks',
  },
  {
    step: '04',
    title: 'Execute Data Operations',
    description: 'Systems purge or extract the verified data categories according to documented retention policies.',
    complianceControl: 'Excludes legally mandated records (e.g., tax/statutory ledgers)',
  },
  {
    step: '05',
    title: 'Deliver Receipt & Archive Audit Log',
    description: 'Requester receives a secure confirmation receipt, and the fulfillment trail is immutably archived.',
    complianceControl: 'Audit-ready compliance evidence for supervisory authorities',
  },
];

export const trustPrinciples: PrivacyPrinciple[] = [
  {
    title: 'Data Minimization',
    description: 'Collect and retain only the specific data categories strictly required to deliver business services.',
    operationalPractice: 'Automated 180-day rolling purges on raw event telemetry',
  },
  {
    title: 'Explicit & Revocable Consent',
    description: 'Provide clear, granular toggles for non-essential cookies and marketing communications with instant opt-out.',
    operationalPractice: 'Zero dark patterns or pre-checked consent boxes',
  },
  {
    title: 'Traceable Audit Accountability',
    description: 'Every data access, status modification, and system deletion is recorded with an immutable cryptographic log.',
    operationalPractice: 'WORM log storage compatible with ISO 27701 standards',
  },
  {
    title: 'Controlled Access Governance',
    description: 'Restrict personal data visibility strictly to authorized team members on an authenticated need-to-know basis.',
    operationalPractice: 'Column-level masking and role-based access control (RBAC)',
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter Operations',
    priceMonthly: '$240',
    period: '/ month',
    description: 'Structured privacy intake, consent recording, and DSAR tracking for fast-growing SaaS startups.',
    features: [
      'Up to 50 privacy requests / month',
      'Branded privacy request intake portal',
      'Automated email identity challenge verification',
      'Basic RoPA processing activity register',
      'Consent record tracking for 50,000 subjects',
      'Standard email & community support',
    ],
    cta: 'Start 14-Day Free Sandbox',
    popular: false,
  },
  {
    name: 'Professional Privacy',
    priceMonthly: '$580',
    period: '/ month',
    description: 'Complete privacy operations workstation for mid-market compliance teams and Data Protection Officers.',
    features: [
      'Unlimited privacy request fulfillment',
      'Multi-system deletion webhooks (Stripe, Postgres, Snowflake)',
      'Automated 30-day statutory timer escalations',
      'Full Article 30 RoPA data catalog & vendor register',
      'Consent sync across marketing & product stacks',
      'Tamper-evident audit receipt generator',
      'Priority privacy engineer support',
    ],
    cta: 'Explore Privacy Management',
    popular: true,
  },
  {
    name: 'Enterprise Governance',
    priceMonthly: 'Custom',
    period: '/ month',
    description: 'Dedicated VPC deployment, global privacy regulations (GDPR, CCPA, LGPD), and white-glove DPO advisory.',
    features: [
      'Everything in Professional, plus:',
      'Private cloud / VPC peering deployment option',
      'Custom database connectors and automated redaction',
      'Enterprise SSO (SAML/Okta) & custom RBAC policies',
      'Annual third-party privacy audit readiness review',
      'Dedicated compliance strategist & SLA guarantee',
      'Multi-entity & global subsidiary management',
    ],
    cta: 'Request Enterprise Walkthrough',
    popular: false,
  },
];

export const faqItems: FAQItem[] = [
  {
    question: 'Does PrivacyX provide legal advice or automatically certify regulatory compliance?',
    answer: 'No. PrivacyX provides workflow management, request tracking, and data inventory tooling to organize your team privacy operations. It does not replace qualified legal counsel, nor does using software alone guarantee compliance with GDPR or CCPA.',
  },
  {
    question: 'How does PrivacyX verify the identity of someone submitting a deletion request?',
    answer: 'PrivacyX sends a secure, time-sensitive cryptographic challenge token to the requester verified email address. For logged-in users, existing session tokens are used to eliminate unauthorized third-party deletion attempts.',
  },
  {
    question: 'Can PrivacyX automatically purge user records across multiple databases?',
    answer: 'Yes. In production environments, PrivacyX connects via secure, webhook-triggered adapters to databases (Postgres, MongoDB) and cloud warehouses (Snowflake, BigQuery). It flags legally exempt records (such as tax invoices) while purging eligible personal data.',
  },
  {
    question: 'How does the interactive privacy dashboard handle sample demo data?',
    answer: 'The interactive demo uses synthetic customer records (Clara Lindqvist, Julian Santiago) and mock request queues. No real personal data is collected or queried in the browser demonstration.',
  },
  {
    question: 'What is an Article 30 Record of Processing Activities (RoPA)?',
    answer: 'Under GDPR Article 30, organizations must maintain an inventory of what personal data they process, the legal basis for processing, who has access, and how long it is stored. PrivacyX provides a structured, exportable RoPA catalog.',
  },
  {
    question: 'How does Global Privacy Control (GPC) opt-out detection work?',
    answer: 'PrivacyX detects the Sec-GPC browser header signal transmitted by privacy-conscious browsers, automatically flagging the user session as opted-out of commercial marketing and third-party data sales.',
  },
];
