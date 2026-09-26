// Mock Data & Content for Meetly AI

export const TRUST_LOGOS = [
  { name: 'ACME', symbol: '▲', metric: '6,400+ meetings transcribed' },
  { name: 'NORTHSTAR', symbol: '✦', metric: '4.9/5 user satisfaction' },
  { name: 'LUMEN', symbol: '●', metric: '3.2 hrs saved per week' },
  { name: 'VERTEX', symbol: '◆', metric: '99.4% speaker accuracy' },
  { name: 'NOVA', symbol: '❖', metric: 'Enterprise-grade encryption' }
];

export const HERO_TRANSCRIPT_DEMO = {
  meetingTitle: 'Q4 Product Launch & GTM Alignment',
  duration: '24m 18s',
  participants: [
    { name: 'Sarah', role: 'Product Lead', avatar: 'SP', color: '#6366F1' },
    { name: 'Alex', role: 'Tech Lead', avatar: 'AK', color: '#0EA5E9' },
    { name: 'Michael', role: 'Marketing Dir', avatar: 'MR', color: '#8B5CF6' }
  ],
  transcript: [
    {
      id: 1,
      speaker: 'Sarah',
      role: 'Product Lead',
      time: '10:31 AM',
      text: "Let's move the product launch to Thursday so the marketing team has more time."
    },
    {
      id: 2,
      speaker: 'Alex',
      role: 'Tech Lead',
      time: '10:32 AM',
      text: "That works. I'll update the launch timeline today."
    },
    {
      id: 3,
      speaker: 'Michael',
      role: 'Marketing Dir',
      time: '10:33 AM',
      text: "I'll prepare the campaign assets before Wednesday."
    }
  ],
  summary: {
    title: 'Product launch moved to Thursday.',
    overview: 'The team agreed to adjust the general release date to allow full campaign collateral finalization and QA sign-off.',
    decisions: [
      'Launch date changed to Thursday, Oct 24th',
      'Campaign assets due Wednesday by 5:00 PM',
      'Engineering timeline needs updating to reflect QA buffer'
    ]
  },
  actionItems: [
    {
      id: 'act-1',
      assignee: 'Alex',
      role: 'Tech Lead',
      task: 'Update launch timeline',
      due: 'Due Today',
      priority: 'High',
      completed: false
    },
    {
      id: 'act-2',
      assignee: 'Michael',
      role: 'Marketing Dir',
      task: 'Prepare campaign assets',
      due: 'Due Wed',
      priority: 'Medium',
      completed: false
    },
    {
      id: 'act-3',
      assignee: 'Sarah',
      role: 'Product Lead',
      task: 'Send updated calendar invite to executive team',
      due: 'Due Tomorrow',
      priority: 'Normal',
      completed: false
    }
  ]
};

export const DEMO_PRESETS = [
  {
    id: 'launch',
    name: 'Product Launch Sync',
    time: '18 mins · 3 speakers',
    category: 'Product & GTM',
    transcript: [
      {
        speaker: 'Sarah',
        role: 'Product Lead',
        time: '10:31 AM',
        text: "Let's move the product launch to Thursday so the marketing team has more time."
      },
      {
        speaker: 'Alex',
        role: 'Tech Lead',
        time: '10:32 AM',
        text: "That works. I'll update the launch timeline today."
      },
      {
        speaker: 'Michael',
        role: 'Marketing Dir',
        time: '10:33 AM',
        text: "I'll prepare the campaign assets before Wednesday."
      }
    ],
    summary: {
      headline: 'Product launch officially rescheduled to Thursday',
      notes: 'Strategic postponement approved by tech and marketing leads to ensure marketing assets and final QA sync seamlessly.',
      decisions: [
        'Launch date shifted from Tuesday to Thursday 9:00 AM PST',
        'Marketing assets finalized and reviewed by Wednesday evening',
        'Alex to coordinate final staging deploy on Wednesday night'
      ],
      actionItems: [
        { assignee: 'Alex', task: 'Update launch timeline & notify DevOps', due: 'Today, 5 PM', priority: 'High' },
        { assignee: 'Michael', task: 'Finalize paid media assets and landing page copy', due: 'Wednesday', priority: 'Medium' },
        { assignee: 'Sarah', task: 'Distribute GTM schedule to C-suite', due: 'Thursday AM', priority: 'Medium' }
      ],
      insights: [
        { label: 'Sentiment', value: 'High Alignment (96%)' },
        { label: 'Speaking Ratio', value: 'Sarah 42% · Alex 31% · Michael 27%' },
        { label: 'Key Topic', value: 'Launch Cadence & Collateral' }
      ]
    }
  },
  {
    id: 'customer',
    name: 'Enterprise Discovery Call — Acme Corp',
    time: '32 mins · 4 speakers',
    category: 'Sales & Solutions',
    transcript: [
      {
        speaker: 'David',
        role: 'Acme VP Tech',
        time: '02:14 PM',
        text: 'We need SOC2 compliance and automated syncing directly into our Notion and Linear workspaces.'
      },
      {
        speaker: 'Jessica',
        role: 'Meetly Solutions',
        time: '02:15 PM',
        text: 'Both integrations are native. We can activate enterprise SSO and provision a dedicated tenant.'
      },
      {
        speaker: 'David',
        role: 'Acme VP Tech',
        time: '02:17 PM',
        text: 'Send over the security packet and MSA draft. Our infosec lead will review it by Friday.'
      }
    ],
    summary: {
      headline: 'Acme Corp moving forward to Enterprise evaluation',
      notes: 'Prospect confirmed SOC2 compliance and Notion/Linear bi-directional sync as deal prerequisites. Infosec review scheduled for Friday.',
      decisions: [
        'Acme agreed to 50-seat pilot pending SOC2 documentation review',
        'Native Linear integration selected over custom webhook setup',
        'Follow-up technical validation call booked for next Tuesday'
      ],
      actionItems: [
        { assignee: 'Jessica', task: 'Send SOC2 Type II report and standard MSA', due: 'Tomorrow, 11 AM', priority: 'High' },
        { assignee: 'David', task: 'Route security pack to infosec committee', due: 'Friday', priority: 'Medium' },
        { assignee: 'Jessica', task: 'Provision staging sandbox with mock Notion sync', due: 'Monday', priority: 'Medium' }
      ],
      insights: [
        { label: 'Buying Intent', value: 'Strong (Stage 4 Negotiation)' },
        { label: 'Security Focus', value: 'SOC2, SSO, Data Residency' },
        { label: 'Potential ARR', value: '$29,400 / yr' }
      ]
    }
  },
  {
    id: 'engineering',
    name: 'Weekly Tech Architecture Review',
    time: '45 mins · 5 speakers',
    category: 'Engineering & DevOps',
    transcript: [
      {
        speaker: 'Elena',
        role: 'Principal Architect',
        time: '11:05 AM',
        text: 'The Redis cache hit ratio dropped to 74% during peak morning transcription bursts.'
      },
      {
        speaker: 'Kenji',
        role: 'Backend Staff',
        time: '11:08 AM',
        text: "We should implement adaptive TTL caching and cluster read replicas across US-East."
      },
      {
        speaker: 'Elena',
        role: 'Principal Architect',
        time: '11:10 AM',
        text: "Agreed. Let's merge the clustering PR today and benchmark latency before the weekend."
      }
    ],
    summary: {
      headline: 'Redis caching cluster upgrade approved to resolve peak latency',
      notes: 'Identified bottleneck in cache eviction policy during 9-11 AM transcript surges. Read replica clustering will reduce response latency below 45ms.',
      decisions: [
        'Implement Redis read replicas across US-East availability zones',
        'Adopt adaptive TTL eviction based on conversation active state',
        'Freeze non-critical migrations until latency benchmark passes'
      ],
      actionItems: [
        { assignee: 'Kenji', task: 'Merge Redis replica PR & conduct staging benchmark', due: 'Today, 4 PM', priority: 'High' },
        { assignee: 'Elena', task: 'Review Datadog latency dashboard monitors', due: 'Tomorrow', priority: 'Medium' },
        { assignee: 'Kenji', task: 'Document new cluster failover topology', due: 'Friday', priority: 'Low' }
      ],
      insights: [
        { label: 'System Health', value: 'Stable (Action Preventative)' },
        { label: 'Projected Latency', value: '-38% p99 Response Time' },
        { label: 'Infrastructure Cost', value: '+$140 / month' }
      ]
    }
  }
];

export const PROBLEMS = [
  {
    id: 'too-much-info',
    title: 'Too much information',
    description: 'Important decisions and critical nuances disappear inside 45-minute conversations without anyone noticing.',
    painPoint: 'Employees spend 3.8 hours every week re-asking colleagues what was decided.'
  },
  {
    id: 'inconsistent-notes',
    title: 'Notes are inconsistent',
    description: 'Everyone writes meeting notes differently—or forgets to write them at all, leading to confusion and duplicate efforts.',
    painPoint: '71% of knowledge workers state past meeting minutes are outdated or incomplete.'
  },
  {
    id: 'forgotten-actions',
    title: 'Action items get forgotten',
    description: 'Great ideas and verbal commitments made in the room rarely get translated into actual project boards and deadlines.',
    painPoint: 'Over 40% of assigned verbal tasks are dropped before the next sync.'
  }
];

export const CORE_FEATURES = [
  {
    id: 'transcription',
    title: 'Every word, captured automatically.',
    category: 'Transcription',
    description: 'Get pinpoint accurate meeting transcripts without typing a single note. Never miss a critical technical requirement or customer nuance.',
    badge: '99.4% Accuracy',
    highlight: 'Real-time multi-language streaming'
  },
  {
    id: 'summaries',
    title: 'The important parts, instantly.',
    category: 'AI Summaries',
    description: 'Meetly AI condenses 60-minute long conversations into concise summaries, key decisions, and executive takeaways in seconds.',
    badge: 'Instant Delivery',
    highlight: 'Context-aware semantic synthesis'
  },
  {
    id: 'action-items',
    title: 'Turn conversations into action.',
    category: 'Action Items',
    description: 'Automatically identify tasks, assignees, and deadlines discussed during meetings. Sync directly to Jira, Linear, or Notion with one click.',
    badge: 'Zero Manual Entry',
    highlight: 'Auto-detection of commitments'
  },
  {
    id: 'speaker-id',
    title: 'Know who said what.',
    category: 'Speaker ID',
    description: 'Automatically separate speakers with voiceprint identification so your transcripts remain crystal clear, contextual, and accountable.',
    badge: 'Voiceprint Diarization',
    highlight: 'Individual talk-time analytics'
  },
  {
    id: 'meeting-search',
    title: 'Find any conversation in seconds.',
    category: 'Meeting Search',
    description: 'Search across your entire team’s past meetings to instantly rediscover decisions, customer feedback, and technical roadmaps.',
    badge: 'Instant Vector Search',
    highlight: 'Exact timestamp deep links'
  }
];

export const INTEGRATIONS = [
  { name: 'Zoom', category: 'Video Conferencing', status: 'One-click Bot Sync', iconColor: '#2D8CFF' },
  { name: 'Google Meet', category: 'Video Conferencing', status: 'Chrome Extension', iconColor: '#00832D' },
  { name: 'Microsoft Teams', category: 'Video Conferencing', status: 'Native App', iconColor: '#5059C9' },
  { name: 'Slack', category: 'Team Chat', status: 'Digest Bot', iconColor: '#E01E5A' },
  { name: 'Notion', category: 'Knowledge Base', status: 'Auto-Page Export', iconColor: '#000000' },
  { name: 'Linear', category: 'Issue Tracking', status: 'Auto-Ticket Creation', iconColor: '#5E6AD2' },
  { name: 'Jira', category: 'Project Management', status: 'Sprint Sync', iconColor: '#0052CC' },
  { name: 'Google Calendar', category: 'Scheduling', status: 'Auto-Join Meetings', iconColor: '#4285F4' }
];

export const USE_CASES = [
  {
    id: 'product',
    title: 'Product Teams',
    tagline: 'Turn product discussions into clear decisions and tasks.',
    description: 'Capture feature tradeoffs, sprint commitments, and user research interviews without distraction.',
    points: [
      'Extract user feedback quotes directly into PRDs',
      'Synthesize customer interviews into theme tags',
      'Generate Linear issues automatically from sprint planning'
    ]
  },
  {
    id: 'engineering',
    title: 'Engineering Teams',
    tagline: 'Capture technical discussions and implementation decisions.',
    description: 'Preserve architecture decisions, incident post-mortems, and RFC debates for institutional memory.',
    points: [
      'Document architectural decision records (ADRs) effortlessly',
      'Track security & compliance considerations automatically',
      'Eliminate repetitive clarification questions across timezones'
    ]
  },
  {
    id: 'sales',
    title: 'Sales Teams',
    tagline: 'Remember customer conversations and follow-ups.',
    description: 'Focus 100% on the prospect during demo calls. Meetly handles deal notes and CRM data entry.',
    points: [
      'Identify prospect objections and budget constraints instantly',
      'Auto-generate follow-up recap emails within 2 minutes of hanging up',
      'Maintain an audit trail of custom contractual promises'
    ]
  },
  {
    id: 'marketing',
    title: 'Marketing Teams',
    tagline: 'Capture campaign ideas and action items.',
    description: 'Never lose creative brainstorm sparks or multi-channel launch deadlines.',
    points: [
      'Convert brainstorming audio into categorized creative briefs',
      'Track cross-department asset requests and delivery dates',
      'Align copywriters, designers, and media buyers effortlessly'
    ]
  },
  {
    id: 'leadership',
    title: 'Leadership',
    tagline: 'Keep important decisions searchable and accessible.',
    description: 'Stay aligned across department heads and board meetings with zero administrative burden.',
    points: [
      'Skim 5-bullet executive summaries across all weekly 1-on-1s',
      'Search company strategy decisions made months prior in seconds',
      'Maintain transparency across hybrid and distributed staff'
    ]
  }
];

export const TESTIMONIALS = [
  {
    quote: "Meetly gives our team a searchable memory of every important conversation. We reduced our post-meeting alignment overhead by over 70%.",
    author: "Alex Morgan",
    role: "Product Lead",
    company: "Horizon Labs",
    stats: "Saved 4.5 hrs/week per engineer",
    initials: "AM"
  },
  {
    quote: "As an engineering leader managing remote teams in 5 timezones, Meetly ensures no technical consensus is lost between shifts. The Linear task sync is flawless.",
    author: "Elena Rostova",
    role: "VP of Engineering",
    company: "CloudScale Systems",
    stats: "100% meeting recall rate",
    initials: "ER"
  },
  {
    quote: "Our account reps spend their calls listening to prospects rather than frantically typing notes. Deal momentum has never been higher.",
    author: "Marcus Vance",
    role: "Head of Sales",
    company: "PulseAI Enterprise",
    stats: "28% faster sales cycle",
    initials: "MV"
  }
];

export const PRICING_PLANS = [
  {
    name: 'Free',
    priceMonthly: 0,
    priceAnnual: 0,
    period: 'forever',
    description: 'Essential AI transcription and summaries for individuals starting out.',
    features: [
      '5 meetings per month',
      'AI meeting summaries',
      'Basic live transcription',
      'Meeting search across 30 days',
      'Export to Markdown & Text',
      'Web & Mobile browser support'
    ],
    cta: 'Start Free',
    isPopular: false
  },
  {
    name: 'Pro',
    priceMonthly: 19,
    priceAnnual: 15,
    period: 'per month',
    description: 'For founders, product managers, and high-velocity professionals.',
    features: [
      'Unlimited meetings & hours',
      'Advanced AI summaries & executive briefs',
      'Action-item & decision extraction',
      'Speaker identification & talk time',
      'Advanced semantic vector search',
      'Calendar auto-join bot (Zoom, Meet, Teams)',
      'Export to Notion, Linear, Slack & Docs'
    ],
    cta: 'Start Pro',
    isPopular: true
  },
  {
    name: 'Team',
    priceMonthly: 49,
    priceAnnual: 39,
    period: 'per user / month',
    description: 'Shared intelligence and governance for fast-growing departments.',
    features: [
      'Everything in Pro plan',
      'Shared team workspace & video library',
      'Custom vocabulary & acronym training',
      'Granular permission & guest access',
      'Centralized admin billing & SSO',
      'Dedicated Customer Success Manager',
      'SOC2 Type II compliance & audit logs'
    ],
    cta: 'Start Team',
    isPopular: false
  }
];

export const FAQS = [
  {
    question: 'What is Meetly AI?',
    answer: 'Meetly AI is an intelligent meeting assistant that automatically records, transcribes, and synthesizes your business conversations. It identifies key decisions, generates structured executive summaries, and automatically extracts assigned action items so your team never loses momentum.'
  },
  {
    question: 'How does automatic transcription work?',
    answer: 'Meetly connects directly to your calendar or meeting link (via Zoom, Google Meet, or Microsoft Teams) through a non-intrusive assistant bot, or you can record directly via our browser app or upload pre-recorded audio/video files. Our speech-to-text models process audio in real-time with over 99% accuracy.'
  },
  {
    question: 'Can Meetly identify speakers?',
    answer: 'Yes. Meetly uses advanced acoustic voiceprint diarization to distinguish different voices in the room or on the video call. Each transcript segment is tagged with the speaker’s name and title, giving you accurate attribution and talk-time breakdown.'
  },
  {
    question: 'Can I search previous meetings?',
    answer: 'Absolutely. Meetly indexes all past transcripts using semantic vector search. You can search for natural questions like "What did we decide about the Q4 launch date?" or "What feedback did Acme Corp have regarding pricing?" and jump to the exact timestamp and audio snippet in seconds.'
  },
  {
    question: 'Does Meetly work with video meetings?',
    answer: 'Yes, Meetly works natively with Zoom, Google Meet, and Microsoft Teams. It can automatically join your scheduled calendar events, listen silently, and provide immediate post-meeting summaries the second the call concludes.'
  },
  {
    question: 'Is my meeting data secure?',
    answer: 'Security and privacy are foundational to Meetly. All audio, transcripts, and summaries are encrypted in transit (TLS 1.3) and at rest (AES-256). We strictly do not use your proprietary meeting transcripts to train public AI foundation models. Enterprise plans include SOC2 Type II compliance, custom data retention policies, and single sign-on (SSO).'
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes, you can cancel your subscription at any time with a single click inside your billing settings. You retain complete access to all of your historical meetings, exports, and transcript archives even if you downgrade to the Free tier.'
  }
];
