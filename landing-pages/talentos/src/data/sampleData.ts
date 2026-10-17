import {
  RoleProfile,
  Candidate,
  FeatureItem,
  WorkflowStep,
  TalentGrowthPath,
  HRIntegration,
  PricingPlan,
  FAQItem,
} from '../types';

export const availableRoles: RoleProfile[] = [
  {
    id: 'role-1',
    title: 'Staff Systems Architect',
    department: 'Platform Engineering',
    openCount: 2,
    location: 'Remote (US/EU)',
    hiringManager: 'Dr. Aris Thorne',
    requiredSkills: [
      { name: 'Distributed Systems', weight: 95 },
      { name: 'Cloud Architecture & Kubernetes', weight: 90 },
      { name: 'Observability & Reliability', weight: 85 },
      { name: 'Technical Mentorship', weight: 80 },
    ],
  },
  {
    id: 'role-2',
    title: 'Lead Product Designer',
    department: 'Design & UX',
    openCount: 1,
    location: 'San Francisco / Hybrid',
    hiringManager: 'Chloe Vance',
    requiredSkills: [
      { name: 'Design Systems Governance', weight: 95 },
      { name: 'Complex Workflow Prototyping', weight: 90 },
      { name: 'Quantitative User Research', weight: 80 },
      { name: 'Cross-functional Communication', weight: 85 },
    ],
  },
  {
    id: 'role-3',
    title: 'Senior Growth Engineer',
    department: 'Product Growth',
    openCount: 3,
    location: 'Remote',
    hiringManager: 'Kenji Sato',
    requiredSkills: [
      { name: 'Full-stack TypeScript & React', weight: 90 },
      { name: 'Experimentation & A/B Statistical Rigor', weight: 85 },
      { name: 'Lifecycle Event Pipelines', weight: 80 },
      { name: 'Fast Iteration Velocity', weight: 85 },
    ],
  },
];

export const sampleCandidates: Candidate[] = [
  {
    id: 'cand-1',
    name: 'Elena Rostova',
    initials: 'ER',
    roleApplied: 'Staff Systems Architect',
    stage: 'technical',
    experienceYears: 11,
    currentCompany: 'Apex Cloud Systems',
    location: 'Berlin, Germany',
    structuredScore: 4.8,
    reviewerName: 'Dr. Aris Thorne (VP Eng)',
    reviewerRole: 'Hiring Manager',
    reviewerNotes: 'Exceptional depth in distributed consensus algorithms. Demonstrated rare ability to translate architectural tradeoffs to non-technical stakeholders.',
    skills: [
      { name: 'Distributed Systems', proficiency: 96, evidence: 'Led multi-region Kafka replication across 12 zones' },
      { name: 'Cloud Architecture & Kubernetes', proficiency: 92, evidence: 'Authored internal service mesh deployment standard' },
      { name: 'Observability & Reliability', proficiency: 88, evidence: 'Reduced P99 latency anomalies by 40% in previous role' },
      { name: 'Technical Mentorship', proficiency: 90, evidence: 'Mentored 6 engineers into senior/staff titles' },
    ],
    aiAssistance: {
      evidenceSummary: 'Candidate profile shows extensive verified open-source contributions to distributed databases and 8+ years scaling high-concurrency systems.',
      suggestedQuestions: [
        'How do you manage network partition split-brain risk in distributed raft clusters?',
        'Can you walk through a scenario where you convinced product leaders to delay a launch for architectural resiliency?',
      ],
      potentialStrengths: [
        'Demonstrated large-scale distributed systems ownership',
        'Transparent architectural decision record (ADR) methodology',
      ],
      verificationPoints: [
        'Confirm hands-on familiarity with recent eBPF observability tools',
        'Review experience with international cross-timezone team coordination',
      ],
    },
  },
  {
    id: 'cand-2',
    name: 'Marcus Thorne',
    initials: 'MT',
    roleApplied: 'Staff Systems Architect',
    stage: 'structured',
    experienceYears: 9,
    currentCompany: 'HyperScale Labs',
    location: 'Seattle, WA',
    structuredScore: 4.5,
    reviewerName: 'Priya Raman (Staff Engineer)',
    reviewerRole: 'Peer Technical Reviewer',
    reviewerNotes: 'Very strong cloud infrastructure fundamentals. Code design was remarkably clean and well-tested. Recommended for final executive chat.',
    skills: [
      { name: 'Distributed Systems', proficiency: 88, evidence: 'Designed microservice event routing for 10M DAU' },
      { name: 'Cloud Architecture & Kubernetes', proficiency: 94, evidence: 'Managed multi-tenant EKS clusters running 1,200 pods' },
      { name: 'Observability & Reliability', proficiency: 85, evidence: 'Implemented OpenTelemetry tracing across all APIs' },
      { name: 'Technical Mentorship', proficiency: 82, evidence: 'Ran bi-weekly architecture design critique workshops' },
    ],
    aiAssistance: {
      evidenceSummary: 'Candidate exhibits deep Kubernetes native tooling mastery and pragmatic infrastructure cost governance.',
      suggestedQuestions: [
        'How do you balance developer agility with strict infrastructure security policies?',
        'Describe an outage caused by unexpected traffic spikes and your remediation steps.',
      ],
      potentialStrengths: [
        'Practical Kubernetes operational excellence',
        'Strong focus on developer experience and CI/CD pipelines',
      ],
      verificationPoints: [
        'Deep-dive into database schema migration strategies under zero-downtime constraints',
      ],
    },
  },
  {
    id: 'cand-3',
    name: 'Aisha Patel',
    initials: 'AP',
    roleApplied: 'Lead Product Designer',
    stage: 'offer',
    experienceYears: 8,
    currentCompany: 'Lumina Design Studio',
    location: 'London, UK',
    structuredScore: 4.9,
    reviewerName: 'Chloe Vance',
    reviewerRole: 'Head of Design',
    reviewerNotes: 'Unanimous team endorsement. Her design system governance presentation was one of the clearest we have seen. Collaborative, thoughtful, and rigorous.',
    skills: [
      { name: 'Design Systems Governance', proficiency: 98, evidence: 'Built design token library consumed by 40+ engineering squads' },
      { name: 'Complex Workflow Prototyping', proficiency: 92, evidence: 'Created high-fidelity Figma variable prototypes for fintech console' },
      { name: 'Quantitative User Research', proficiency: 86, evidence: 'Synthesized 50+ user interviews into actionable journey maps' },
      { name: 'Cross-functional Communication', proficiency: 95, evidence: 'Partnered with VP of Product to define 2026 UX roadmap' },
    ],
    aiAssistance: {
      evidenceSummary: 'Exceptional portfolio illustrating end-to-end design token pipelines, WCAG AAA accessibility, and collaborative design-engineering synergy.',
      suggestedQuestions: [
        'How do you measure the adoption rate and ROI of a shared design system?',
        'Tell us about a time user research disproved a strongly held product hypothesis.',
      ],
      potentialStrengths: [
        'Industry-recognized design tokens leadership',
        'Empathetic research synthesis and clear visual hierarchy',
      ],
      verificationPoints: [
        'Confirm preferred working overlap hours with US Pacific time',
      ],
    },
  },
  {
    id: 'cand-4',
    name: 'David Kim',
    initials: 'DK',
    roleApplied: 'Lead Product Designer',
    stage: 'technical',
    experienceYears: 7,
    currentCompany: 'Vanguard Interfaces',
    location: 'Austin, TX',
    structuredScore: 4.3,
    reviewerName: 'Chloe Vance',
    reviewerRole: 'Head of Design',
    reviewerNotes: 'High creative ceiling and great visual polish. We want to spend more time exploring his design token tokenization approach in the next round.',
    skills: [
      { name: 'Design Systems Governance', proficiency: 86, evidence: 'Maintained component library across web and mobile' },
      { name: 'Complex Workflow Prototyping', proficiency: 94, evidence: 'Built interactive canvas data exploration tools' },
      { name: 'Quantitative User Research', proficiency: 80, evidence: 'Led quarterly usability test cohorts with beta customers' },
      { name: 'Cross-functional Communication', proficiency: 88, evidence: 'Embedded directly with core frontend platform squad' },
    ],
    aiAssistance: {
      evidenceSummary: 'Strong visual craft and micro-interaction focus with solid foundations in accessible typography and layout ergonomics.',
      suggestedQuestions: [
        'How do you ensure consistency across diverse cross-platform native interfaces?',
      ],
      potentialStrengths: [
        'Inventive micro-interaction and motion design skill',
      ],
      verificationPoints: [
        'Evaluate experience with enterprise accessibility audits',
      ],
    },
  },
  {
    id: 'cand-5',
    name: 'Jordan Lee',
    initials: 'JL',
    roleApplied: 'Senior Growth Engineer',
    stage: 'screen',
    experienceYears: 6,
    currentCompany: 'ScaleMetric',
    location: 'Toronto, Canada',
    structuredScore: 4.4,
    reviewerName: 'Kenji Sato',
    reviewerRole: 'Growth Engineering Lead',
    reviewerNotes: 'Quick analytical thinker with impressive understanding of activation funnels and behavioral telemetry.',
    skills: [
      { name: 'Full-stack TypeScript & React', proficiency: 92, evidence: 'Shipped 18 self-serve onboarding experiments in 6 months' },
      { name: 'Experimentation & A/B Statistical Rigor', proficiency: 89, evidence: 'Calculated p-values and sample sizes for 300k user trials' },
      { name: 'Lifecycle Event Pipelines', proficiency: 84, evidence: 'Integrated Segment, Braze, and custom event webhooks' },
      { name: 'Fast Iteration Velocity', proficiency: 90, evidence: 'Maintained 2-day idea-to-production deployment cycle' },
    ],
    aiAssistance: {
      evidenceSummary: 'Proven track record of product-led growth optimization, disciplined experiment tracking, and rigorous hypothesis validation.',
      suggestedQuestions: [
        'How do you prevent multi-variant experiments from degrading web core vitals performance?',
      ],
      potentialStrengths: [
        'Exceptional experiment throughput and statistical integrity',
      ],
      verificationPoints: [
        'Verify background with backend database indexing for analytics querying',
      ],
    },
  },
  {
    id: 'cand-6',
    name: 'Sophia Martinez',
    initials: 'SM',
    roleApplied: 'Senior Growth Engineer',
    stage: 'technical',
    experienceYears: 5,
    currentCompany: 'CloudFlow Corp',
    location: 'New York, NY',
    structuredScore: 4.6,
    reviewerName: 'Kenji Sato',
    reviewerRole: 'Growth Engineering Lead',
    reviewerNotes: 'Strong frontend architectural fundamentals paired with deep growth intuition. Ready for structured behavioral review.',
    skills: [
      { name: 'Full-stack TypeScript & React', proficiency: 94, evidence: 'Architected next-gen checkout flow with 99.98% uptime' },
      { name: 'Experimentation & A/B Statistical Rigor', proficiency: 87, evidence: 'Managed feature flag rollouts using LaunchDarkly' },
      { name: 'Lifecycle Event Pipelines', proficiency: 86, evidence: 'Built custom telemetry middleware for React 19' },
      { name: 'Fast Iteration Velocity', proficiency: 91, evidence: 'Consistently delivered sprint epics ahead of forecast' },
    ],
    aiAssistance: {
      evidenceSummary: 'Strong software engineering craftsmanship combined with clear understanding of conversion ergonomics.',
      suggestedQuestions: [
        'Walk through your testing strategy for high-stakes billing and upgrade modals.',
      ],
      potentialStrengths: [
        'Resilient code architecture and defensive error boundary patterns',
      ],
      verificationPoints: [
        'Explore experience collaborating with product marketing copywriters',
      ],
    },
  },
];

export const talentFeatures: FeatureItem[] = [
  {
    icon: 'Briefcase',
    title: 'Role & Skill Profiles',
    description: 'Define clear, structured capability rubrics instead of vague buzzwords, aligning hiring managers and recruiters.',
    tag: 'Objective Competency Matrices',
  },
  {
    icon: 'Users',
    title: 'Candidate Pipeline Management',
    description: 'Track talent stages from initial screening to executive reviews with clean team ownership and zero dropped balls.',
    tag: 'End-to-End Visibility',
  },
  {
    icon: 'FileCheck',
    title: 'Structured Interview Rubrics',
    description: 'Equip every interviewer with standardized scorecards and consistent question frameworks to eliminate unconscious bias.',
    tag: 'Fair & Consistent Evaluations',
  },
  {
    icon: 'MessageSquare',
    title: 'Collaborative Consensus',
    description: 'Capture written reviewer debriefs and compare evaluations side-by-side before making final human-led offers.',
    tag: 'Transparent Decision Debriefs',
  },
  {
    icon: 'TrendingUp',
    title: 'Skills-Gap Visualization',
    description: 'Map candidate competencies against current team strengths to identify complementary potential and team balance.',
    tag: 'Team Capability Mapping',
  },
  {
    icon: 'BrainCircuit',
    title: 'Explainable AI Assistance',
    description: 'Synthesize resume evidence and generate tailored interview probes while keeping human evaluators fully in the driver seat.',
    tag: 'Human Oversight by Design',
  },
];

export const humanAIWorkflowSteps: WorkflowStep[] = [
  {
    step: '01',
    title: 'Define Role Requirements',
    description: 'Hiring managers define concrete skills, competency weights, and work samples required for success.',
    humanRole: 'Calibrate team expectations & must-haves',
    aiSupport: 'Suggest objective competency descriptors based on similar successful roles',
  },
  {
    step: '02',
    title: 'Review Relevant Evidence',
    description: 'Review portfolio artifacts, project milestones, and verified work history without demographic bias.',
    humanRole: 'Examine candidate projects and problem-solving depth',
    aiSupport: 'Summarize verifiable project achievements and surface relevant skill markers',
  },
  {
    step: '03',
    title: 'Conduct Structured Interviews',
    description: 'Interviewers use shared rubrics to evaluate specific competency dimensions consistently across candidates.',
    humanRole: 'Lead human-to-human technical and cultural dialogues',
    aiSupport: 'Provide suggested situational follow-up questions linked to role criteria',
  },
  {
    step: '04',
    title: 'Compare Against Competency Criteria',
    description: 'Synthesize structured feedback from all interviewers into a transparent, explainable decision matrix.',
    humanRole: 'Participate in team hiring debrief and debate tradeoffs',
    aiSupport: 'Highlight consensus areas and flag discrepancies between reviewer scores',
  },
  {
    step: '05',
    title: 'Make a Human-Led Decision',
    description: 'Hiring managers make the final hiring offer with complete documentation and transparent audit trails.',
    humanRole: 'Executive decision-making and candidate offer extension',
    aiSupport: 'Generate structured feedback summaries to ensure audit compliance',
  },
];

export const internalGrowthPaths: TalentGrowthPath[] = [
  {
    domain: 'Staff Architecture',
    currentStrength: 'Strong distributed system design',
    upskillOpportunity: 'Cross-organizational technical consensus & ADR governance',
    internalProject: 'Lead multi-region data sovereignty initiative',
    growthImpact: 'Accelerates transition to Principal Engineer',
  },
  {
    domain: 'Product Design',
    currentStrength: 'Exceptional visual polish and interaction craft',
    upskillOpportunity: 'Design token CI/CD automation & multi-brand systems',
    internalProject: 'Deploy unified enterprise component library across 3 business units',
    growthImpact: 'Positions designer for Design Director track',
  },
  {
    domain: 'Growth Engineering',
    currentStrength: 'High experiment velocity and telemetry integration',
    upskillOpportunity: 'Bayesian statistical modeling for low-traffic funnels',
    internalProject: 'Architect enterprise self-serve upgrade trial engine',
    growthImpact: 'Expands scope toward Head of Growth Engineering',
  },
];

export const hrIntegrations: HRIntegration[] = [
  {
    name: 'Greenhouse',
    category: 'Applicant Tracking System',
    status: 'Verified Sync',
    description: 'Two-way synchronization for candidate records, interview scorecards, and offer approvals.',
    syncLatency: '< 15s',
  },
  {
    name: 'Lever',
    category: 'Talent Acquisition',
    status: 'Verified Sync',
    description: 'Automatic candidate requisition sync and stage transition webhooks.',
    syncLatency: '< 20s',
  },
  {
    name: 'Workday',
    category: 'Enterprise HRIS',
    status: 'Verified Sync',
    description: 'Seamless employee provisioning and role competency mapping at scale.',
    syncLatency: '< 30s',
  },
  {
    name: 'Ashby',
    category: 'Modern Recruiting',
    status: 'Verified Sync',
    description: 'Unified pipeline metrics, scheduling links, and offer letter generation.',
    syncLatency: '< 10s',
  },
  {
    name: 'Slack',
    category: 'Team Communication',
    status: 'Verified Sync',
    description: 'Instant notification of completed scorecards and executive debrief reminders.',
    syncLatency: 'Real-time',
  },
  {
    name: 'BambooHR',
    category: 'People Operations',
    status: 'Verified Sync',
    description: 'One-click new hire handoff to employee onboarding and compliance workflows.',
    syncLatency: '< 25s',
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Recruiter',
    priceMonthly: '$180',
    period: '/ month',
    description: 'Structured hiring tools and competency rubrics for growing startups making 5-15 key hires annually.',
    features: [
      'Up to 5 active role pipelines',
      'Standard competency rubric library',
      'Structured interview scorecards',
      'Explainable AI evidence summaries',
      'Greenhouse & Lever ATS integration',
      'Standard email & community support',
    ],
    cta: 'Start 14-Day Free Trial',
    popular: false,
  },
  {
    name: 'Growth',
    priceMonthly: '$450',
    period: '/ month',
    description: 'Comprehensive talent intelligence and collaborative debrief tools for scaling organizations hiring across multiple teams.',
    features: [
      'Unlimited active role profiles',
      'Custom competency matrices & skill weights',
      'Cross-reviewer calibration & consensus tools',
      'Skills-gap visualization across departments',
      'All 6 verified ATS & HRIS integrations',
      'Internal talent mobility & growth mapping',
      'Priority hiring operations support',
    ],
    cta: 'Explore Talent Intelligence',
    popular: true,
  },
  {
    name: 'Enterprise',
    priceMonthly: 'Custom',
    period: '/ month',
    description: 'Custom competency architecture, EEOC & GDPR compliance governance, and dedicated talent advisory for Global 2000.',
    features: [
      'Everything in Growth, plus:',
      'Dedicated enterprise VPC or private cloud deployment',
      'Custom bias-mitigation audits & adverse impact reports',
      'Custom HRIS integration (Workday, SAP SuccessFactors)',
      'Single Sign-On (SSO/SAML) & role-based governance',
      'Dedicated talent intelligence strategist',
      'Enterprise hiring SLA & 99.99% uptime',
    ],
    cta: 'Request Enterprise Briefing',
    popular: false,
  },
];

export const faqItems: FAQItem[] = [
  {
    question: 'How does TalentOS ensure that AI assists rather than replaces human hiring decisions?',
    answer: 'TalentOS is built around explainable human-in-the-loop architecture. Our AI assists by summarizing verified resume evidence, suggesting relevant technical questions, and highlighting discrepancies. The AI never assigns a black-box hire/reject score, and final hiring decisions require explicit human reviewer sign-off.',
  },
  {
    question: 'How does TalentOS protect against demographic or unconscious bias in recruitment?',
    answer: 'TalentOS enforces structured evaluation rubrics where candidates are measured against objective, role-specific competency criteria rather than subjective gut feeling. Demographic attributes are completely excluded from skill analysis, ensuring fair, consistent evaluation across all candidates.',
  },
  {
    question: 'Can we integrate TalentOS with our current ATS (Greenhouse, Lever, Ashby)?',
    answer: 'Yes! TalentOS provides two-way, SOC2-certified integrations with leading applicant tracking systems including Greenhouse, Lever, Ashby, and Workday. Candidate stages and scorecard debriefs synchronize automatically.',
  },
  {
    question: 'How does the role-to-skills comparison work in the interactive demo?',
    answer: 'The interactive demo calculates competency alignment based on role requirements defined by the hiring manager. When you adjust skill weightings or select different candidates, the alignment visual recalculates instantly using deterministic, transparent rules.',
  },
  {
    question: 'What is internal talent mobility and skills-gap visualization?',
    answer: 'TalentOS maps competencies not only for external candidates but also for existing team members. This helps engineering and design leaders identify internal promotion candidates, upskilling opportunities, and mentorship pairings.',
  },
  {
    question: 'Is any real candidate or proprietary corporate data used on this landing page?',
    answer: 'No. All candidate profiles, names, reviewer notes, and companies featured in this interactive demonstration are completely synthetic, designed strictly to showcase structured hiring workflows and interface design.',
  },
];
