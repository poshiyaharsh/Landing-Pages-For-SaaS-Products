import { 
  ControlItem, 
  RiskItem, 
  EvidenceItem, 
  AuditEvent, 
  RemediationTask, 
  TeamMember, 
  ComplianceFramework, 
  FAQItem, 
  PricingPlan 
} from '../types';

export const SAMPLE_FRAMEWORKS: ComplianceFramework[] = [
  {
    id: 'soc2',
    code: 'SOC 2 Type II',
    name: 'SOC 2 — Demo Workspace',
    version: '2024 Criteria',
    description: 'AICPA Trust Services Criteria: Security, Availability, Confidentiality, Processing Integrity, and Privacy.',
    totalControls: 48,
    implemented: 38,
    inReview: 6,
    needsAttention: 3,
    notStarted: 1,
    overallScore: 86,
    status: 'Audit Ready'
  },
  {
    id: 'iso27001',
    code: 'ISO/IEC 27001',
    name: 'ISO/IEC 27001:2022',
    version: 'Annex A Controls',
    description: 'Information security management system requirements and technical security controls.',
    totalControls: 93,
    implemented: 68,
    inReview: 14,
    needsAttention: 8,
    notStarted: 3,
    overallScore: 78,
    status: 'In Progress'
  },
  {
    id: 'gdpr',
    code: 'GDPR Readiness',
    name: 'EU GDPR Privacy Template',
    version: 'Regulation (EU) 2016/679',
    description: 'Data protection principles, subject access requests, consent records, and cross-border transfer assessments.',
    totalControls: 32,
    implemented: 24,
    inReview: 4,
    needsAttention: 3,
    notStarted: 1,
    overallScore: 81,
    status: 'In Progress'
  },
  {
    id: 'nist',
    code: 'NIST CSF 2.0',
    name: 'NIST Cybersecurity Framework',
    version: 'CSF 2.0',
    description: 'Govern, Identify, Protect, Detect, Respond, and Recover cybersecurity core functions.',
    totalControls: 54,
    implemented: 40,
    inReview: 8,
    needsAttention: 4,
    notStarted: 2,
    overallScore: 80,
    status: 'Scheduled'
  },
  {
    id: 'hipaa',
    code: 'HIPAA Security',
    name: 'HIPAA Security Rule (Illustrative)',
    version: '45 CFR Part 164',
    description: 'Administrative, physical, and technical safeguards for protected health information (ePHI).',
    totalControls: 42,
    implemented: 31,
    inReview: 6,
    needsAttention: 3,
    notStarted: 2,
    overallScore: 76,
    status: 'In Progress'
  }
];

export const INITIAL_CONTROLS: ControlItem[] = [
  {
    id: 'AC-04',
    title: 'Review access permissions',
    category: 'Security',
    description: 'Review assigned access permissions periodically and record the outcome with explicit sign-off from resource owners.',
    owner: 'Sarah Jenkins',
    status: 'In Review',
    linkedEvidence: ['EVD-301', 'EVD-305'],
    lastReviewed: '2026-09-15',
    nextReview: '2026-10-31',
    framework: 'SOC 2',
    guidance: 'Ensure all terminated contractors have their VPN and OAuth tokens revoked within 24 hours.'
  },
  {
    id: 'AC-01',
    title: 'Multi-factor authentication enforcement',
    category: 'Security',
    description: 'Enforce hardware security key or TOTP multi-factor authentication for all production infrastructure and code repositories.',
    owner: 'Elena Rostova',
    status: 'Implemented',
    linkedEvidence: ['EVD-301'],
    lastReviewed: '2026-10-01',
    nextReview: '2027-01-01',
    framework: 'SOC 2',
    guidance: 'Verify that SMS-based 2FA is deprecated across all administrative portals.'
  },
  {
    id: 'CM-02',
    title: 'Production change management & peer review',
    category: 'Processing Integrity',
    description: 'Mandate pull request approvals, automated CI test execution, and signed commit verification prior to merging to release branches.',
    owner: 'Elena Rostova',
    status: 'Implemented',
    linkedEvidence: ['EVD-304'],
    lastReviewed: '2026-09-28',
    nextReview: '2026-12-28',
    framework: 'SOC 2',
    guidance: 'All emergency hotfixes must have retrospective approvals recorded within 48 hours.'
  },
  {
    id: 'IR-01',
    title: 'Incident response protocol and annual tabletop exercise',
    category: 'Availability',
    description: 'Maintain an actionable incident response plan with defined escalation paths, communication templates, and annual simulated crisis testing.',
    owner: 'Marcus Vance',
    status: 'In Review',
    linkedEvidence: ['EVD-303'],
    lastReviewed: '2026-06-12',
    nextReview: '2026-11-15',
    framework: 'SOC 2',
    guidance: 'Next tabletop drill scheduled for November 14th covering simulated ransomware.'
  },
  {
    id: 'DP-03',
    title: 'Cryptographic key management and automatic rotation',
    category: 'Confidentiality',
    description: 'Store encryption keys in FIPS 140-3 validated HSMs and enforce automatic 90-day envelope key rotation for customer databases.',
    owner: 'Elena Rostova',
    status: 'Implemented',
    linkedEvidence: ['EVD-306'],
    lastReviewed: '2026-10-10',
    nextReview: '2027-01-10',
    framework: 'SOC 2',
    guidance: 'KMS policy audits must verify zero unauthorized decrypt API calls.'
  },
  {
    id: 'VM-05',
    title: 'Third-party vendor risk assessment & SOC report review',
    category: 'Security',
    description: 'Evaluate security posture, SOC 2 Type II reports, and sub-processor agreements for all vendors handling sensitive customer data.',
    owner: 'Sarah Jenkins',
    status: 'Needs Attention',
    linkedEvidence: ['EVD-304'],
    lastReviewed: '2026-04-10',
    nextReview: '2026-10-25',
    framework: 'SOC 2',
    guidance: 'Two sub-processors pending updated SOC 2 bridge letters before annual renewal.'
  },
  {
    id: 'AV-02',
    title: 'Database replication and automated backup verification',
    category: 'Availability',
    description: 'Perform continuous point-in-time database backups across multiple availability zones and execute monthly restore validation drills.',
    owner: 'Elena Rostova',
    status: 'Implemented',
    linkedEvidence: ['EVD-302'],
    lastReviewed: '2026-10-12',
    nextReview: '2026-11-12',
    framework: 'SOC 2',
    guidance: 'Restore test completed in 14 minutes, well within 1-hour RTO threshold.'
  },
  {
    id: 'PR-04',
    title: 'Data subject rights and automated erasure workflows',
    category: 'Privacy',
    description: 'Maintain automated pipelines for customer data export and verified cryptographic erasure upon validated consumer request within 30 days.',
    owner: 'David Chen',
    status: 'Needs Attention',
    linkedEvidence: [],
    lastReviewed: '2026-05-20',
    nextReview: '2026-10-28',
    framework: 'SOC 2',
    guidance: 'Need updated deletion confirmation logs from cold storage archive tier.'
  },
  {
    id: 'PI-01',
    title: 'API input validation and transaction boundary checks',
    category: 'Processing Integrity',
    description: 'Enforce strict schema validation and rate limiting on all public API endpoints to prevent injection, overflow, or duplicate debit transactions.',
    owner: 'Elena Rostova',
    status: 'Implemented',
    linkedEvidence: ['EVD-303'],
    lastReviewed: '2026-08-30',
    nextReview: '2026-11-30',
    framework: 'SOC 2'
  },
  {
    id: 'CF-02',
    title: 'Confidential asset classification and DLP labeling',
    category: 'Confidentiality',
    description: 'Tag all internal repositories, datastores, and message streams according to standard 4-tier data sensitivity classification schema.',
    owner: 'Sarah Jenkins',
    status: 'Not Started',
    linkedEvidence: [],
    lastReviewed: '2026-01-15',
    nextReview: '2026-11-05',
    framework: 'SOC 2'
  }
];

export const INITIAL_RISKS: RiskItem[] = [
  {
    id: 'RSK-104',
    name: 'Delayed security patching on legacy staging hosts',
    category: 'Infrastructure Patching',
    likelihood: 4,
    impact: 4,
    riskLevel: 'Critical',
    owner: 'Elena Rostova',
    status: 'Active',
    reviewDate: '2026-10-24',
    description: 'Non-containerized staging instances running obsolete kernel versions could allow lateral privilege escalation if accessed via test credentials.',
    mitigationPlan: 'Migrate remaining legacy staging workloads to ephemeral Kubernetes clusters by end of current sprint.'
  },
  {
    id: 'RSK-101',
    name: 'Excessive privileged access in production accounts',
    category: 'Access & Identity',
    likelihood: 3,
    impact: 4,
    riskLevel: 'High',
    owner: 'Sarah Jenkins',
    status: 'Active',
    reviewDate: '2026-10-31',
    description: '8 engineers currently retain persistent break-glass IAM privileges instead of using temporary Just-in-Time (JIT) session grants.',
    mitigationPlan: 'Implement Okta Access Requests with 4-hour time-to-live policies and require manager approval.'
  },
  {
    id: 'RSK-103',
    name: 'Missing automated backup restoration evidence',
    category: 'Data Backup',
    likelihood: 2,
    impact: 5,
    riskLevel: 'High',
    owner: 'Elena Rostova',
    status: 'Under Review',
    reviewDate: '2026-11-02',
    description: 'While daily snapshots run successfully, automated restore verification script failed to output verifiable SHA256 checksum logs.',
    mitigationPlan: 'Deploy updated CI runner to execute automated table-level restore drill and post signed telemetry to Auditly.'
  },
  {
    id: 'RSK-102',
    name: 'Incomplete third-party vendor SOC 2 review',
    category: 'Vendor Governance',
    likelihood: 2,
    impact: 4,
    riskLevel: 'Moderate',
    owner: 'Marcus Vance',
    status: 'Active',
    reviewDate: '2026-11-10',
    description: 'Two critical analytics vendors have not submitted their 2026 SOC 2 Type II report updates following corporate restructuring.',
    mitigationPlan: 'Issued formal compliance notices to vendor account managers requesting updated security documentation.'
  },
  {
    id: 'RSK-105',
    name: 'Incomplete incident post-mortem documentation',
    category: 'Incident Management',
    likelihood: 3,
    impact: 3,
    riskLevel: 'Moderate',
    owner: 'Marcus Vance',
    status: 'Mitigated',
    reviewDate: '2026-11-15',
    description: 'Minor latency degradation in EU region last month lacked root-cause documentation signed by engineering leads.',
    mitigationPlan: 'Template created in Jira requiring root-cause analysis completion before closing any P1/P2 incidents.'
  },
  {
    id: 'RSK-106',
    name: 'Unencrypted S3 bucket logging endpoints',
    category: 'Cloud Configuration',
    likelihood: 2,
    impact: 3,
    riskLevel: 'Moderate',
    owner: 'Elena Rostova',
    status: 'Mitigated',
    reviewDate: '2026-10-18',
    description: 'CloudTrail bucket access logs were using standard AES-256 instead of organization-mandated customer-managed KMS keys.',
    mitigationPlan: 'Terraform script applied to enforce KMS key encryption across all 14 bucket targets.'
  },
  {
    id: 'RSK-107',
    name: 'Key personnel turnover in SecOps team',
    category: 'Human Resources',
    likelihood: 2,
    impact: 2,
    riskLevel: 'Low',
    owner: 'Sarah Jenkins',
    status: 'Accepted',
    reviewDate: '2026-12-01',
    description: 'Single point of failure for manual cryptographic key ceremonies during offsite hardware token upgrades.',
    mitigationPlan: 'Cross-trained two additional senior site reliability engineers on key ceremony procedures.'
  }
];

export const INITIAL_EVIDENCE: EvidenceItem[] = [
  {
    id: 'EVD-301',
    title: 'Access_Review_Q3.pdf',
    fileType: 'pdf',
    fileSize: '2.4 MB',
    linkedControlId: 'AC-04',
    linkedControlTitle: 'Review access permissions',
    owner: 'Sarah Jenkins',
    uploadDate: '2026-10-14',
    reviewStatus: 'Approved',
    expirationDate: '2026-12-31',
    version: 'v3.2',
    summary: 'Executive sign-off and exported Okta user access list verifying quarterly de-provisioning of 14 inactive engineering credentials.'
  },
  {
    id: 'EVD-302',
    title: 'Backup_Test_Report.pdf',
    fileType: 'pdf',
    fileSize: '1.8 MB',
    linkedControlId: 'AV-02',
    linkedControlTitle: 'Database replication and automated backup verification',
    owner: 'Elena Rostova',
    uploadDate: '2026-10-12',
    reviewStatus: 'Approved',
    expirationDate: '2026-11-12',
    version: 'v1.0',
    summary: 'Automated restoration log proving 100% database recovery of 420GB dataset into isolated VPC sandbox in 14 minutes.'
  },
  {
    id: 'EVD-303',
    title: 'Incident_Response_Policy.docx',
    fileType: 'docx',
    fileSize: '840 KB',
    linkedControlId: 'IR-01',
    linkedControlTitle: 'Incident response protocol and annual tabletop exercise',
    owner: 'Marcus Vance',
    uploadDate: '2026-09-20',
    reviewStatus: 'Pending Review',
    expirationDate: '2027-09-20',
    version: 'v2.4',
    summary: 'Updated incident escalation matrix incorporating new EU data breach reporting guidelines (72-hour window notification).'
  },
  {
    id: 'EVD-304',
    title: 'Vendor_Assessment.xlsx',
    fileType: 'xlsx',
    fileSize: '1.2 MB',
    linkedControlId: 'VM-05',
    linkedControlTitle: 'Third-party vendor risk assessment',
    owner: 'Sarah Jenkins',
    uploadDate: '2026-08-15',
    reviewStatus: 'Expiring Soon',
    expirationDate: '2026-10-25',
    version: 'v4.1',
    summary: 'Risk scoring sheet for 28 tier-1 and tier-2 SaaS vendors. Two vendors require updated bridge letters before expiry.'
  },
  {
    id: 'EVD-305',
    title: 'Security_Training_Record.pdf',
    fileType: 'pdf',
    fileSize: '3.1 MB',
    linkedControlId: 'AC-04',
    linkedControlTitle: 'Review access permissions',
    owner: 'David Chen',
    uploadDate: '2026-10-02',
    reviewStatus: 'Approved',
    expirationDate: '2027-10-02',
    version: 'v1.1',
    summary: 'KnowBe4 phishing simulation completion report showing 98.4% company-wide participation and 0.8% failure rate.'
  },
  {
    id: 'EVD-306',
    title: 'KMS_Key_Rotation_Log.json',
    fileType: 'json',
    fileSize: '320 KB',
    linkedControlId: 'DP-03',
    linkedControlTitle: 'Cryptographic key management',
    owner: 'Elena Rostova',
    uploadDate: '2026-10-10',
    reviewStatus: 'Approved',
    expirationDate: '2027-01-10',
    version: 'v2.0',
    summary: 'AWS CloudTrail cryptographic audit verification showing successful automated rotation of all RDS primary keys.'
  }
];

export const INITIAL_AUDIT_EVENTS: AuditEvent[] = [
  {
    id: 'EVT-9042',
    timestamp: '2026-10-17T11:04:00Z',
    timeFormatted: '11:04 AM',
    user: 'Sarah Jenkins',
    userEmail: 's.jenkins@auditly-demo.internal',
    role: 'Administrator',
    action: 'Remediation task assigned',
    actionType: 'owner_assigned',
    resource: 'TSK-501 (Privileged Access Review)',
    details: 'Task assigned to Marcus Vance with due date set for 2026-10-24.'
  },
  {
    id: 'EVT-9041',
    timestamp: '2026-10-17T10:36:00Z',
    timeFormatted: '10:36 AM',
    user: 'Elena Rostova',
    userEmail: 'e.rostova@auditly-demo.internal',
    role: 'Control Owner',
    action: 'Risk assessment updated',
    actionType: 'status_update',
    resource: 'RSK-104 (Delayed security patching)',
    details: 'Adjusted impact level from 3 to 4 based on latest vulnerability scan advisory.'
  },
  {
    id: 'EVT-9040',
    timestamp: '2026-10-17T10:18:00Z',
    timeFormatted: '10:18 AM',
    user: 'David Chen',
    userEmail: 'd.chen@auditly-demo.internal',
    role: 'Internal Auditor',
    action: 'Control review completed',
    actionType: 'review_completed',
    resource: 'Control AC-04 (Access permissions)',
    details: 'Marked control status as "In Review" and requested updated contractor offboarding logs.'
  },
  {
    id: 'EVT-9039',
    timestamp: '2026-10-17T09:42:00Z',
    timeFormatted: '09:42 AM',
    user: 'Elena Rostova',
    userEmail: 'e.rostova@auditly-demo.internal',
    role: 'Control Owner',
    action: 'Evidence uploaded',
    actionType: 'evidence_added',
    resource: 'Backup_Test_Report.pdf (EVD-302)',
    details: 'File attached and mapped to control AV-02 (Database replication verification).'
  },
  {
    id: 'EVT-9038',
    timestamp: '2026-10-17T09:15:00Z',
    timeFormatted: '09:15 AM',
    user: 'Sarah Jenkins',
    userEmail: 's.jenkins@auditly-demo.internal',
    role: 'Administrator',
    action: 'Report generated',
    actionType: 'report_generated',
    resource: 'SOC 2 Q3 Executive Readiness Summary',
    details: 'Exported executive PDF package and telemetry CSV for external audit preparation.'
  },
  {
    id: 'EVT-9037',
    timestamp: '2026-10-16T16:45:00Z',
    timeFormatted: 'Yesterday, 4:45 PM',
    user: 'Marcus Vance',
    userEmail: 'm.vance@auditly-demo.internal',
    role: 'Compliance Manager',
    action: 'Control owner reassigned',
    actionType: 'owner_assigned',
    resource: 'Control CM-02 (Change Management)',
    details: 'Primary ownership transferred from Sarah Jenkins to Elena Rostova.'
  }
];

export const INITIAL_TASKS: RemediationTask[] = [
  {
    id: 'TSK-501',
    title: 'Review privileged access for production databases',
    priority: 'Critical',
    owner: 'Marcus Vance',
    dueDate: '2026-10-20',
    isOverdue: true,
    linkedControlId: 'AC-04',
    linkedControlName: 'Review access permissions',
    status: 'todo',
    notes: 'Verify 8 break-glass credentials in production AWS accounts and transition to temporary STS tokens.'
  },
  {
    id: 'TSK-502',
    title: 'Update incident response documentation for cloud workloads',
    priority: 'High',
    owner: 'Marcus Vance',
    dueDate: '2026-10-28',
    isOverdue: false,
    linkedControlId: 'IR-01',
    linkedControlName: 'Incident response protocol',
    status: 'in_progress',
    notes: 'Incorporate EU 72-hour regulatory disclosure timelines and legal notification playbook.'
  },
  {
    id: 'TSK-503',
    title: 'Collect automated database backup restoration logs',
    priority: 'Medium',
    owner: 'Elena Rostova',
    dueDate: '2026-11-05',
    isOverdue: false,
    linkedControlId: 'AV-02',
    linkedControlName: 'Database replication and backup verification',
    status: 'in_progress',
    notes: 'Attach signed SHA256 checksum verification logs to evidence artifact EVD-302.'
  },
  {
    id: 'TSK-504',
    title: 'Complete annual security review for tier-1 SaaS vendors',
    priority: 'High',
    owner: 'Sarah Jenkins',
    dueDate: '2026-10-25',
    isOverdue: false,
    linkedControlId: 'VM-05',
    linkedControlName: 'Third-party vendor risk assessment',
    status: 'todo',
    notes: 'Obtain renewed SOC 2 bridge letters from payment gateway and customer telemetry vendors.'
  },
  {
    id: 'TSK-505',
    title: 'Schedule quarterly access review meeting with department heads',
    priority: 'Medium',
    owner: 'Sarah Jenkins',
    dueDate: '2026-10-15',
    isOverdue: false,
    linkedControlId: 'AC-04',
    linkedControlName: 'Review access permissions',
    status: 'completed',
    notes: 'Completed review with Engineering, Sales, and IT departments on October 14.'
  },
  {
    id: 'TSK-506',
    title: 'Verify TLS 1.3 enforcement on external API gateways',
    priority: 'Low',
    owner: 'Elena Rostova',
    dueDate: '2026-10-12',
    isOverdue: false,
    linkedControlId: 'PI-01',
    linkedControlName: 'API input validation',
    status: 'completed',
    notes: 'SSL Labs test score A+ confirmed on api.company.internal and customer ingress proxies.'
  }
];

export const SAMPLE_TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'usr-1',
    name: 'Sarah Jenkins',
    role: 'Administrator',
    email: 's.jenkins@auditly-demo.internal',
    assignedControls: 14,
    pendingTasks: 3,
    lastActivity: '12 mins ago',
    department: 'Information Security & Governance'
  },
  {
    id: 'usr-2',
    name: 'Marcus Vance',
    role: 'Compliance Manager',
    email: 'm.vance@auditly-demo.internal',
    assignedControls: 18,
    pendingTasks: 4,
    lastActivity: '34 mins ago',
    department: 'Risk & Regulatory Compliance'
  },
  {
    id: 'usr-3',
    name: 'David Chen',
    role: 'Auditor',
    email: 'd.chen@auditly-demo.internal',
    assignedControls: 8,
    pendingTasks: 1,
    lastActivity: '2 hours ago',
    department: 'Internal Audit & Advisory'
  },
  {
    id: 'usr-4',
    name: 'Elena Rostova',
    role: 'Control Owner',
    email: 'e.rostova@auditly-demo.internal',
    assignedControls: 12,
    pendingTasks: 2,
    lastActivity: '5 mins ago',
    department: 'Cloud Infrastructure & SRE'
  },
  {
    id: 'usr-5',
    name: 'Maya Patel',
    role: 'Viewer',
    email: 'm.patel@auditly-demo.internal',
    assignedControls: 0,
    pendingTasks: 0,
    lastActivity: '1 day ago',
    department: 'Office of the CIO'
  }
];

export const TESTIMONIALS = [
  {
    quote: "Auditly gives our team a clearer view of control ownership and outstanding evidence.",
    author: "Compliance Lead",
    company: "Northstar",
    badge: "Enterprise SaaS",
    disclaimer: "Illustrative feedback based on simulated deployment"
  },
  {
    quote: "We wanted a structured place to track reviews and remediation instead of relying on scattered spreadsheets.",
    author: "Security Manager",
    company: "Meridian",
    badge: "Fintech Platform",
    disclaimer: "Fictional case demonstration"
  },
  {
    quote: "The dashboard makes it easier to understand what needs attention and who owns the next step.",
    author: "Operations Director",
    company: "Studio North",
    badge: "HealthTech Systems",
    disclaimer: "Simulated customer perspective"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is Auditly?',
    answer: 'Auditly is an enterprise compliance and security management platform designed to help organizations organize compliance requirements, monitor control status, manage risks, collect audit evidence, track remediation tasks, and maintain clear audit trails in one centralized workspace.'
  },
  {
    id: 'faq-2',
    question: 'Which compliance frameworks can be managed?',
    answer: 'Auditly provides structured templates and control mappings for frameworks including SOC 2 (Type I & Type II), ISO/IEC 27001:2022, GDPR, NIST CSF 2.0, HIPAA Security Rule, and custom internal policy frameworks. Framework templates serve as organizational baselines and can be tailored to your environment.'
  },
  {
    id: 'faq-3',
    question: 'Can I customize controls?',
    answer: 'Yes. You can create custom controls, modify description requirements, set customized review cadences (monthly, quarterly, bi-annual, annual), assign cross-functional owners, and configure specific evidence attachment criteria for any operational procedure.'
  },
  {
    id: 'faq-4',
    question: 'How does evidence collection work?',
    answer: 'Evidence items—such as system screenshots, policy documents, vendor assessments, and automated test outputs—can be uploaded directly, tagged with metadata, linked to one or multiple controls, and assigned review dates. Built-in versioning tracks document updates over time.'
  },
  {
    id: 'faq-5',
    question: 'Can teams assign remediation tasks?',
    answer: 'Yes. Auditly includes dedicated remediation workflows where compliance gaps or audit findings can be converted into actionable tasks with priority levels, due dates, assigned owners, and direct linkages to related controls or risks.'
  },
  {
    id: 'faq-6',
    question: 'Does Auditly guarantee compliance?',
    answer: 'No. Auditly is a management platform designed to organize and streamline your compliance processes. Using Auditly does not automatically guarantee regulatory compliance, eliminate security vulnerabilities, or replace the independent verification of accredited external auditors.'
  },
  {
    id: 'faq-7',
    question: 'Can I export compliance reports?',
    answer: 'Yes. You can generate and export comprehensive compliance summaries, control matrices, risk registers, and remediation logs in CSV or formatted print-ready PDF packages for internal leadership review or auditor handoff.'
  },
  {
    id: 'faq-8',
    question: 'How does the audit activity log work?',
    answer: 'The activity log records key operational actions within the workspace—including status modifications, evidence uploads, owner assignments, and report generation—with timestamp, user identity, and event identifiers to maintain internal accountability.'
  },
  {
    id: 'faq-9',
    question: 'Can multiple teams collaborate?',
    answer: 'Yes. Auditly supports role-based access for Administrators, Compliance Managers, Auditors, Control Owners, and Executive Viewers, allowing security, engineering, HR, and legal teams to collaborate with appropriate visibility.'
  },
  {
    id: 'faq-10',
    question: 'Is there a free plan?',
    answer: 'Yes. The Starter plan is completely free and allows teams to explore essential control tracking, manage a sample framework workspace, and experience core evidence organization before upgrading to expanded multi-framework workflows.'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'STARTER',
    priceMonthly: 0,
    priceAnnual: 0,
    description: 'Essential compliance tracking for early-stage teams organizing their initial baseline.',
    features: [
      'Basic compliance workspace',
      '1 active framework template (e.g. SOC 2 demo)',
      'Essential control tracking & status updates',
      'Limited evidence management (up to 25 items)',
      'Basic reporting & CSV export',
      'Up to 3 team members'
    ],
    ctaText: 'Start Free',
    highlighted: false
  },
  {
    id: 'professional',
    name: 'PROFESSIONAL',
    priceMonthly: 49,
    priceAnnual: 39,
    description: 'Comprehensive compliance operations for growing companies managing audits.',
    features: [
      'Multiple framework workspaces (SOC 2, ISO 27001, etc.)',
      'Interactive risk management & 5×5 matrix',
      'Full evidence library with document versioning',
      'Remediation tracking & task board',
      'Comprehensive reporting & audit trail export',
      'Team collaboration with 5 granular role types',
      'Automated review reminders & activity telemetry'
    ],
    ctaText: 'Choose Professional',
    badge: 'MOST POPULAR',
    highlighted: true
  },
  {
    id: 'enterprise',
    name: 'ENTERPRISE',
    priceMonthly: 199,
    priceAnnual: 159,
    description: 'Advanced governance, custom integrations, and dedicated compliance workflows.',
    features: [
      'Unlimited framework workspaces & custom controls',
      'Advanced access controls & SSO / SAML integration',
      'Enterprise risk register with custom scoring models',
      'Expanded compliance reporting & stakeholder views',
      'Configurable automated notification workflows',
      'Dedicated compliance onboarding & enterprise support',
      'Custom retention policies & audit exports'
    ],
    ctaText: 'Book an Enterprise Demo',
    highlighted: false
  }
];

export const CAPABILITY_ITEMS = [
  {
    title: 'Control Management',
    desc: 'Map internal controls against standard requirements with assigned owners and review cadences.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Risk Assessment',
    desc: 'Identify, score, and track operational vulnerabilities using an intuitive 5×5 risk matrix.',
    icon: 'AlertTriangle'
  },
  {
    title: 'Evidence Collection',
    desc: 'Centralize audit artifacts, policies, and system reports with versioning and review tracking.',
    icon: 'FileText'
  },
  {
    title: 'Audit Trails',
    desc: 'Maintain transparent chronological logs of all control modifications, reviews, and assignments.',
    icon: 'History'
  },
  {
    title: 'Remediation Tracking',
    desc: 'Convert control gaps into prioritized action items with due dates and progress visibility.',
    icon: 'CheckSquare'
  },
  {
    title: 'Reporting',
    desc: 'Export clear framework readiness summaries and structured CSV data for leadership and auditors.',
    icon: 'BarChart3'
  }
];

export const USE_CASES = [
  {
    role: 'Compliance Teams',
    headline: 'Organize controls, evidence, and reviews without the chaos',
    description: 'Eliminate disconnected spreadsheets and last-minute audit scrambles. Track control implementation status, map artifacts to specific requirements, and maintain transparent accountability across departments.',
    tags: ['Control Mapping', 'Review Cycles', 'Audit Preparation'],
    stat: '86% readiness visibility'
  },
  {
    role: 'Security Teams',
    headline: 'Track risks, remediation tasks, and technical evidence',
    description: 'Gain clear visibility into open security findings. Score risks with a standardized 5×5 matrix, assign technical remediations to engineering owners, and log cryptographic and access proof.',
    tags: ['Risk Scoring', 'Jira / SRE Alignment', 'Technical Evidence'],
    stat: 'Zero unassigned critical findings'
  },
  {
    role: 'IT Administrators',
    headline: 'Maintain visibility into operational controls and ownership',
    description: 'Ensure access reviews, backup drills, and patch management schedules are fulfilled on time. Receive clear notifications before controls become overdue.',
    tags: ['Access Reviews', 'Backup Logs', 'Scheduled Audits'],
    stat: '100% owner accountability'
  },
  {
    role: 'Internal Auditors',
    headline: 'Review documentation and trace historical activity with ease',
    description: 'Inspect timestamped activity trails for every control. Verify evidence files, review notes, and historical modifications without chasing colleagues across Slack and email.',
    tags: ['Activity Logs', 'Document Inspection', 'Sampling Verification'],
    stat: 'Instant event traceability'
  },
  {
    role: 'Enterprise Leaders',
    headline: 'Understand compliance progress and outstanding risks at a glance',
    description: 'Present clean, executive-level compliance dashboards to board members and prospective customers. Know exactly where your security posture stands without technical ambiguity.',
    tags: ['Executive Summaries', 'Risk Distribution', 'Board Readiness'],
    stat: 'High-level posture clarity'
  },
  {
    role: 'Growing Businesses',
    headline: 'Build repeatable compliance workflows as operations expand',
    description: 'Prepare for SOC 2 Type II or ISO 27001 early without overwhelming your lean team. Establish consistent governance habits that scale seamlessly as your business grows.',
    tags: ['Repeatable Baselines', 'Scalable Processes', 'Turnkey Templates'],
    stat: '5x faster framework onboarding'
  }
];
