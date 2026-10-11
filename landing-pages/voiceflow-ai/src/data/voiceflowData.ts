import { 
  AudioSample, 
  VoiceAgentNode, 
  IntegrationItem, 
  UseCaseItem, 
  PricingPlan, 
  Testimonial, 
  FAQItem, 
  VoicePreset 
} from '../types';

export const CAPABILITIES_LIST = [
  { label: 'Speech-to-Text', desc: 'Real-time multi-model transcription with sub-120ms latency' },
  { label: 'Text-to-Speech', desc: 'Ultra-realistic neural synthesis with emotional prosody' },
  { label: 'Voice Activity Detection', desc: 'Sub-millisecond VAD filtering silence and background noise' },
  { label: 'Conversation Intelligence', desc: 'Instant extraction of intents, objections, sentiment, and summaries' },
  { label: 'Speaker Diarization', desc: 'Accurate multi-speaker turn separation without manual tagging' },
  { label: 'Multilingual Processing', desc: 'Native processing across 64+ languages with auto-detection' }
];

export const PIPELINE_STAGES = [
  {
    step: '01',
    name: 'Audio Input',
    desc: 'Microphone stream, SIP telephony, or uploaded audio file encoded via WebRTC/Opus.',
    status: 'Captured'
  },
  {
    step: '02',
    name: 'Transcription',
    desc: 'High-fidelity acoustic modeling converts raw audio into word-level timestamps.',
    status: 'Decoded'
  },
  {
    step: '03',
    name: 'Understanding',
    desc: 'Semantic parser detects speakers, acoustic sentiment, entities, and speech intent.',
    status: 'Analyzed'
  },
  {
    step: '04',
    name: 'Insights',
    desc: 'LLM synthesis extracts key takeaways, friction points, action items, and decisions.',
    status: 'Synthesized'
  },
  {
    step: '05',
    name: 'Action',
    desc: 'Triggers CRM updates, ticket resolution, webhooks, or dynamic voice replies.',
    status: 'Executed'
  }
];

export const SAMPLE_AUDIO_SESSIONS: AudioSample[] = [
  {
    id: 'launch-sync',
    title: 'Q4 Product Launch Planning',
    duration: '00:14.20',
    language: 'English (US)',
    category: 'Product & Engineering',
    transcript: [
      {
        id: 't-1',
        speaker: 'Speaker 01',
        timestamp: '00:00.80',
        text: 'We need to launch the new voice intelligence engine next month to align with Q4 enterprise goals.',
        confidence: 0.988,
        sentiment: 'neutral',
        keywords: ['voice intelligence', 'launch', 'enterprise']
      },
      {
        id: 't-2',
        speaker: 'Speaker 02',
        timestamp: '00:04.40',
        text: "Let's review the campaign timeline and finalize the key milestones before Friday's executive sync.",
        confidence: 0.974,
        sentiment: 'positive',
        keywords: ['timeline', 'milestones', 'executive sync']
      },
      {
        id: 't-3',
        speaker: 'Speaker 01',
        timestamp: '00:09.15',
        text: "I'll share the updated deployment roadmap with the engineering leads this afternoon.",
        confidence: 0.991,
        sentiment: 'positive',
        keywords: ['deployment roadmap', 'engineering leads']
      }
    ],
    summary: {
      overview: 'Participants discussed the upcoming voice intelligence engine release schedule, reviewed milestone deliverables, and agreed to circulate the roadmap before executive review.',
      keyTakeaways: [
        'Launch targeted for next month to satisfy enterprise Q4 commitments',
        'Friday executive sync scheduled for milestone finalization',
        'Engineering deployment roadmap circulation assigned to Speaker 01'
      ],
      decisions: [
        'Approved milestone review cadence for Friday morning',
        'Confirmed release target scope for voice intelligence engine'
      ],
      actionItems: [
        'Speaker 01: Distribute updated roadmap to engineering leads by 3:00 PM',
        'Speaker 02: Prepare executive briefing deck with timeline milestones'
      ],
      openQuestions: [
        'Are multi-region edge clusters provisioned for European latency guarantees?'
      ]
    }
  },
  {
    id: 'support-tier1',
    title: 'Enterprise Support Escalation',
    duration: '00:11.85',
    language: 'English (US)',
    category: 'Customer Support',
    transcript: [
      {
        id: 't-4',
        speaker: 'Customer',
        timestamp: '00:01.00',
        text: "Hello, I'm experiencing sporadic WebRTC stream timeouts on our sandbox environment.",
        confidence: 0.965,
        sentiment: 'negative',
        keywords: ['WebRTC', 'timeouts', 'sandbox']
      },
      {
        id: 't-5',
        speaker: 'Support AI',
        timestamp: '00:05.10',
        text: 'I can help identify the root cause. Could you verify if STUN/TURN port 3478 is unblocked on your firewall?',
        confidence: 0.989,
        sentiment: 'positive',
        keywords: ['STUN/TURN', 'port 3478', 'firewall']
      },
      {
        id: 't-6',
        speaker: 'Customer',
        timestamp: '00:09.20',
        text: 'Checking now—yes, rule was blocking outbound UDP. Whitelisting it fixed the connection immediately.',
        confidence: 0.982,
        sentiment: 'positive',
        keywords: ['outbound UDP', 'whitelisting', 'fixed']
      }
    ],
    summary: {
      overview: 'Customer reported sporadic connection drops on WebRTC media stream; Support AI isolated issue to blocked firewall UDP ports on port 3478 which resolved on whitelisting.',
      keyTakeaways: [
        'Issue attributed to customer firewall rules blocking UDP 3478',
        'Resolved in under 12 seconds with self-service guidance',
        'Customer satisfaction rated positive upon immediate resolution'
      ],
      decisions: [
        'Ticket marked Resolved with zero human tier-2 escalations required'
      ],
      actionItems: [
        'System: Append STUN firewall diagnostic check to onboarding verification docs'
      ],
      openQuestions: []
    }
  },
  {
    id: 'sales-discovery',
    title: 'Fintech Discovery & Architecture',
    duration: '00:15.50',
    language: 'English (UK)',
    category: 'Sales Intelligence',
    transcript: [
      {
        id: 't-7',
        speaker: 'Buyer Lead',
        timestamp: '00:00.90',
        text: 'We currently process 40,000 telephony interactions weekly and need automated sentiment scoring.',
        confidence: 0.978,
        sentiment: 'neutral',
        keywords: ['telephony', 'sentiment scoring', '40k calls']
      },
      {
        id: 't-8',
        speaker: 'Account Exec',
        timestamp: '00:06.10',
        text: 'Our batch pipeline effortlessly digests high concurrency while generating PCI-compliant redacted transcripts.',
        confidence: 0.984,
        sentiment: 'positive',
        keywords: ['batch pipeline', 'PCI-compliant', 'redacted']
      },
      {
        id: 't-9',
        speaker: 'Buyer Lead',
        timestamp: '00:11.40',
        text: 'That meets our compliance threshold. Let us schedule a technical pilot next Tuesday.',
        confidence: 0.993,
        sentiment: 'positive',
        keywords: ['compliance', 'technical pilot']
      }
    ],
    summary: {
      overview: 'High-volume fintech prospect confirmed requirement for automated sentiment triage and PCI-compliant redaction across 40k weekly calls; scheduled pilot.',
      keyTakeaways: [
        'Volume: 40k weekly telephony interactions',
        'Mandatory requirement: Automated PII & PCI audio redaction',
        'Next step: Technical proof of concept deployment'
      ],
      decisions: [
        'Agreement to initiate technical pilot testing next Tuesday'
      ],
      actionItems: [
        'Account Exec: Send security whitepaper and sandbox API credentials by EOD'
      ],
      openQuestions: [
        'Does buyer require on-premise private cloud VPC deployment?'
      ]
    }
  }
];

export const WORKFLOW_NODES: VoiceAgentNode[] = [
  {
    id: 'node-1',
    type: 'voice-input',
    label: '01',
    title: 'Voice Input',
    description: 'Captures caller audio stream via WebRTC or SIP trunk with noise gating.',
    config: [
      { key: 'Sampling Rate', value: '16kHz / 48kHz Adaptive' },
      { key: 'VAD Sensitivity', value: 'High (0.85 threshold)' },
      { key: 'Silence Timeout', value: '750ms' }
    ],
    active: true
  },
  {
    id: 'node-2',
    type: 'transcription',
    label: '02',
    title: 'Speech Recognition',
    description: 'Streaming acoustic model decodes phonemes into text tokens with live confidence scores.',
    config: [
      { key: 'Model', value: 'VoiceFlow Whisper-V3 Turbo' },
      { key: 'Language', value: 'Auto-detect (64 langs)' },
      { key: 'Latency Mode', value: 'Sub-120ms Ultra-Low' }
    ]
  },
  {
    id: 'node-3',
    type: 'intent',
    label: '03',
    title: 'Intent & Entity Detection',
    description: 'Classifies conversational purpose, emotional urgency, and extracts key slot parameters.',
    config: [
      { key: 'Top Intent', value: 'order_status_inquiry' },
      { key: 'Entity Slots', value: 'order_id, user_email' },
      { key: 'Sentiment Gate', value: 'Neutral (+0.12)' }
    ]
  },
  {
    id: 'node-4',
    type: 'ai-response',
    label: '04',
    title: 'Reasoning & LLM Response',
    description: 'Connects to knowledge base and CRM tools to synthesize structured conversational reply.',
    config: [
      { key: 'Model Context', value: 'VoiceFlow Core-70B' },
      { key: 'Tool Calling', value: 'OrderLookup(id), StatusCheck()' },
      { key: 'Temperature', value: '0.2 (Deterministic)' }
    ]
  },
  {
    id: 'node-5',
    type: 'voice-output',
    label: '05',
    title: 'Neural Speech Synthesis',
    description: 'Generates lifelike human speech with calibrated cadence, breath pauses, and pitch inflection.',
    config: [
      { key: 'Voice Clone', value: 'Aura (Professional Female)' },
      { key: 'Audio Output', value: '24kHz PCM Stream' },
      { key: 'Speaking Rate', value: '1.05x speed' }
    ]
  }
];

export const VOICE_PRESETS: VoicePreset[] = [
  {
    id: 'aura',
    name: 'Aura',
    gender: 'Female',
    style: 'Professional',
    language: 'English',
    accent: 'North American',
    sampleText: 'Welcome to VoiceFlow AI. Let us turn your next conversation into something meaningful.'
  },
  {
    id: 'zephyr',
    name: 'Zephyr',
    gender: 'Male',
    style: 'Conversational',
    language: 'English',
    accent: 'British Received',
    sampleText: 'Good afternoon. I have processed the meeting minutes and flagged three critical action items.'
  },
  {
    id: 'serene',
    name: 'Serene',
    gender: 'Female',
    style: 'Calm',
    language: 'English',
    accent: 'Neutral Global',
    sampleText: 'Take your time. I am listening closely and will transcribe each turn with high precision.'
  },
  {
    id: 'vibe',
    name: 'Vibe',
    gender: 'Male',
    style: 'Energetic',
    language: 'English',
    accent: 'West Coast',
    sampleText: 'All systems online! Telemetry streams are synced and your voice agents are ready to deploy.'
  }
];

export const INTEGRATIONS_LIST: IntegrationItem[] = [
  {
    id: 'slack',
    name: 'Slack',
    category: 'Communication',
    description: 'Broadcast instant meeting summaries, key decisions, and action item threads directly to channels.',
    status: 'Available',
    badge: 'Popular'
  },
  {
    id: 'salesforce',
    name: 'Salesforce',
    category: 'CRM & Sales',
    description: 'Automatically populate call logs, customer objections, and deal stage confidence scores.',
    status: 'Available',
    badge: 'Enterprise'
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    category: 'CRM & Sales',
    description: 'Synchronize contact conversation histories, buyer sentiment, and follow-up task dates.',
    status: 'Available'
  },
  {
    id: 'zoom',
    name: 'Zoom Video',
    category: 'Communication',
    description: 'Real-time bot companion ingesting live audio streams for simultaneous diarized transcription.',
    status: 'Available',
    badge: 'Real-time'
  },
  {
    id: 'gdrive',
    name: 'Google Drive',
    category: 'Storage & Cloud',
    description: 'Export searchable PDF & Markdown conversation transcripts to designated team folders.',
    status: 'Available'
  },
  {
    id: 'zapier',
    name: 'Zapier',
    category: 'Automation',
    description: 'Trigger 5,000+ multi-step web workflows whenever specific spoken keywords are detected.',
    status: 'Available'
  },
  {
    id: 'webhooks',
    name: 'Secure Webhooks',
    category: 'Developer',
    description: 'Receive instantaneous HMAC-signed JSON payloads when transcript or summary finishes.',
    status: 'Available',
    badge: 'Developer'
  },
  {
    id: 'rest-api',
    name: 'REST & WebSocket API',
    category: 'Developer',
    description: 'Bidirectional streaming audio API for custom web, mobile, and IoT hardware clients.',
    status: 'Available',
    badge: 'SDK'
  }
];

export const USE_CASES_DATA: UseCaseItem[] = [
  {
    id: 'customer-support',
    title: 'Customer Support',
    subtitle: 'Automated Tier-1 Resolution',
    description: 'Transcribe support calls in real-time, identify recurring customer friction points, and empower agents with live knowledge surfacing.',
    metrics: '78% reduction in post-call logging time',
    highlights: ['Live sentiment alerts', 'Automatic ticket creation', 'Redaction of PII/PCI data']
  },
  {
    id: 'sales-intelligence',
    title: 'Sales Intelligence',
    subtitle: 'Pipeline Telemetry & Deal Triage',
    description: 'Summarize discovery conversations, identify competitor objections, and organize high-priority follow-up commitments.',
    metrics: '3.4x faster CRM pipeline logging',
    highlights: ['Competitor mention tracking', 'Budget & timeline slotting', 'Win/loss speech patterns']
  },
  {
    id: 'meetings-collaboration',
    title: 'Meetings & Collaboration',
    subtitle: 'Never Miss a Spoken Decision',
    description: 'Turn spontaneous team brainstorms and all-hands discussions into structured summaries, key decisions, and designated owners.',
    metrics: '100% searchable verbal repository',
    highlights: ['Automated Slack recap distribution', 'Speaker turn separation', 'Action item assignments']
  },
  {
    id: 'voice-applications',
    title: 'Voice Applications',
    subtitle: 'Conversational Product Interfaces',
    description: 'Build conversational interfaces for websites, connected mobile applications, kiosks, and consumer smart devices.',
    metrics: '<120ms end-to-end voice latency',
    highlights: ['Custom neural voice cloning', 'Contextual interruption handling', 'Zero audio clipping']
  },
  {
    id: 'research-interviews',
    title: 'Research & Interviews',
    subtitle: 'Qualitative Synthesis Engine',
    description: 'Organize dozens of customer interview transcripts and instantly identify recurring themes, quotes, and latent customer desires.',
    metrics: '15+ hours saved per study cohort',
    highlights: ['Semantic topic clustering', 'Quote snippet generator', 'Cross-interview sentiment matrix']
  },
  {
    id: 'contact-centers',
    title: 'Contact Centers',
    subtitle: 'Omnichannel Speech Analytics',
    description: 'Analyze millions of minutes of conversation patterns to identify training opportunities, agent adherence, and customer churn signals.',
    metrics: '99.4% speech-to-text benchmark accuracy',
    highlights: ['Agent compliance auditing', 'Hold-time vs frustration correlation', 'Full telephony PBX ingestion']
  }
];

export const PRICING_DATA: PricingPlan[] = [
  {
    id: 'free',
    name: 'FREE',
    priceMonthly: 0,
    priceAnnual: 0,
    description: 'Sample voice workspace for developers, indie creators, and exploratory experiments.',
    features: [
      'Sample voice workspace with 120 minutes/month',
      'Basic streaming transcript preview',
      'Limited demo agent interactions',
      'Essential analytics dashboard',
      'Community Discord and documentation access',
      'Standard REST API endpoints'
    ],
    cta: 'Start Free',
    highlight: false
  },
  {
    id: 'pro',
    name: 'PRO',
    priceMonthly: 29,
    priceAnnual: 23,
    description: 'For growing teams, modern voice applications, and high-velocity product developers.',
    features: [
      'Expanded voice workflows with 1,500 minutes/month',
      'Advanced conversation view & multi-speaker diarization',
      'Full export options (TXT, JSON, SRT, Markdown)',
      'Natural TTS voice synthesis studio with 4 presets',
      'High-throughput WebSocket streaming API',
      'Dedicated developer sandbox and webhook triggers',
      'Standard email & ticketing support'
    ],
    cta: 'Choose Pro',
    highlight: true
  },
  {
    id: 'business',
    name: 'BUSINESS',
    priceMonthly: 99,
    priceAnnual: 79,
    description: 'For scaling contact centers, enterprise software teams, and collaborative workflows.',
    features: [
      'Unlimited workspace capacity with custom volume scaling',
      'Shared team workspaces & role-based permissions',
      'Advanced conversation intelligence & topic clusters',
      'Custom vocabulary injection & brand pronunciation rules',
      'Custom LLM agent builder with drag-and-drop nodes',
      'Full compliance redaction (PCI / PII data)',
      'Priority 24/7 dedicated support SLA'
    ],
    cta: 'Talk to Sales',
    highlight: false
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'VoiceFlow AI gives our team a clearer way to turn long conversations into useful next steps. The speed and transcript clarity are unmatched.',
    author: 'Elena Rostova',
    role: 'Product Lead',
    company: 'Northstar Labs',
    metric: '4.2x Faster Sprint Synthesis'
  },
  {
    id: 'test-2',
    quote: 'We wanted voice interactions that felt intuitive without sacrificing clarity. This is the exact direction we needed for our conversational agent suite.',
    author: 'Marcus Vance',
    role: 'Engineering Manager',
    company: 'Meridian Systems',
    metric: '98.6% Caller Satisfaction'
  },
  {
    id: 'test-3',
    quote: 'The ability to organize transcripts and identify recurring themes makes our qualitative user research workflow exponentially easier to understand.',
    author: 'Dr. Sarah Lin',
    role: 'Research Lead',
    company: 'Studio North',
    metric: '18 hrs saved per research cycle'
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is VoiceFlow AI?',
    answer: 'VoiceFlow AI is a unified conversational intelligence and voice technology platform. It combines real-time streaming speech recognition, neural text-to-speech generation, multi-speaker diarization, and automated conversation analytics into a single developer-ready workspace.'
  },
  {
    id: 'faq-2',
    question: 'How does speech-to-text work?',
    answer: 'Audio input streams are ingested through WebRTC or WebSocket connections, parsed through voice activity detection (VAD) to filter ambient noise, and processed through state-of-the-art transformer acoustic models to output tokenized text with millisecond-precision timestamps.'
  },
  {
    id: 'faq-3',
    question: 'Can I create voice-enabled applications?',
    answer: 'Yes. VoiceFlow AI provides both a visual Agent Builder and an asynchronous/streaming developer API to assemble custom conversational workflows that listen, reason, and speak with human-grade latency.'
  },
  {
    id: 'faq-4',
    question: 'Does VoiceFlow AI support multiple languages?',
    answer: 'The platform supports over 64 languages with automatic language detection, phonetic normalization, and cross-lingual translation capabilities.'
  },
  {
    id: 'faq-5',
    question: 'Can I analyze conversation transcripts?',
    answer: 'Yes. The built-in conversation intelligence engine automatically extracts meeting overviews, key takeaways, participant decisions, action items, and emotional sentiment curves without manual tagging.'
  },
  {
    id: 'faq-6',
    question: 'Can I integrate the platform with my existing tools?',
    answer: 'VoiceFlow AI connects seamlessly with Slack, Salesforce, HubSpot, Zoom, Google Drive, and Zapier, in addition to standard REST APIs and Webhooks.'
  },
  {
    id: 'faq-7',
    question: 'Is live microphone access required?',
    answer: 'No. Live microphone access is strictly optional and only prompted upon explicit user click. The platform includes rich simulated audio recordings and pre-loaded conversations so you can explore full functionality without granting audio access.'
  },
  {
    id: 'faq-8',
    question: 'How is audio data handled?',
    answer: 'By default, audio streams are processed in ephemeral memory for transcription and discarded immediately unless persistent logging is configured. Data retention controls and PII/PCI redaction can be customized per workspace.'
  },
  {
    id: 'faq-9',
    question: 'Is there a free plan?',
    answer: 'Yes. The Free plan includes 120 minutes of monthly transcription, access to the developer sandbox, and core conversation views with no credit card required.'
  },
  {
    id: 'faq-10',
    question: 'Can developers use an API?',
    answer: 'Yes. Comprehensive Python, JavaScript, and cURL SDKs allow developers to stream audio via WebSockets or submit batch audio URLs via REST endpoints.'
  }
];
