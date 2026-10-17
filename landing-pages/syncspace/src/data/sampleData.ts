import { 
  TaskItem, 
  WorkspaceChannel, 
  DocumentSnippet, 
  ActivityEvent, 
  UseCaseData, 
  PricingPlan, 
  FAQItem,
  Assignee
} from '../types';

export const SAMPLE_TEAM: Record<string, Assignee> = {
  maya: { name: 'Maya Lin', initials: 'ML', bg: 'bg-emerald-500', role: 'Head of Product', active: true },
  alex: { name: 'Alex Rivera', initials: 'AR', bg: 'bg-indigo-600', role: 'Staff Engineer', active: true },
  sofia: { name: 'Sofia Chen', initials: 'SC', bg: 'bg-purple-600', role: 'Lead Designer', active: false },
  marcus: { name: 'Marcus Vance', initials: 'MV', bg: 'bg-amber-600', role: 'Product Marketing', active: false },
  david: { name: 'David Kim', initials: 'DK', bg: 'bg-cyan-600', role: 'Operations Lead', active: true },
};

export const SAMPLE_CHANNELS: WorkspaceChannel[] = [
  { id: 'ch-1', name: 'product-sprint-24', category: 'channel', unreadCount: 3 },
  { id: 'ch-2', name: 'design-system', category: 'channel' },
  { id: 'ch-3', name: 'launch-roadmap', category: 'channel', unreadCount: 1 },
  { id: 'ws-1', name: 'Product & Engineering', category: 'workspace' },
  { id: 'ws-2', name: 'Brand & Creative Studio', category: 'workspace' },
  { id: 'ws-3', name: 'Customer Operations', category: 'workspace' },
  { id: 'doc-1', name: '2026 Product Vision', category: 'doc' },
  { id: 'doc-2', name: 'Q4 Launch Playbook', category: 'doc' },
];

export const INITIAL_TASKS: TaskItem[] = [
  {
    id: 'TSK-101',
    title: 'Website redesign & spatial component library',
    column: 'in_progress',
    priority: 'Urgent',
    assignee: SAMPLE_TEAM.maya,
    tag: 'Design System',
    commentsCount: 6,
    dueDate: 'Tomorrow'
  },
  {
    id: 'TSK-102',
    title: 'Sprint 24 capacity planning & engineering kickoff',
    column: 'done',
    priority: 'High',
    assignee: SAMPLE_TEAM.alex,
    tag: 'Sprint Mgmt',
    commentsCount: 4,
    dueDate: 'Yesterday'
  },
  {
    id: 'TSK-103',
    title: 'Design token export pipeline for Web & Mobile',
    column: 'in_progress',
    priority: 'High',
    assignee: SAMPLE_TEAM.sofia,
    tag: 'Engineering',
    commentsCount: 8,
    dueDate: 'Oct 24'
  },
  {
    id: 'TSK-104',
    title: 'Launch checklist & onboarding drip sequences',
    column: 'review',
    priority: 'Urgent',
    assignee: SAMPLE_TEAM.marcus,
    tag: 'Marketing',
    commentsCount: 3,
    dueDate: 'Oct 26'
  },
  {
    id: 'TSK-105',
    title: 'Multiplayer presence indicator latency optimization',
    column: 'backlog',
    priority: 'Medium',
    assignee: SAMPLE_TEAM.alex,
    tag: 'Architecture',
    commentsCount: 2,
    dueDate: 'Nov 02'
  },
  {
    id: 'TSK-106',
    title: 'Knowledge hub search indexing with semantic tags',
    column: 'backlog',
    priority: 'Medium',
    assignee: SAMPLE_TEAM.david,
    tag: 'Platform',
    commentsCount: 1,
    dueDate: 'Nov 05'
  }
];

export const SAMPLE_DOCUMENTS: DocumentSnippet[] = [
  {
    id: 'doc-101',
    title: '2026 Spatial Workspace Design Principles',
    author: 'Sofia Chen',
    authorInitials: 'SC',
    updatedAt: '14 mins ago',
    readTime: '4 min read',
    tags: ['Design Guidelines', 'Spatial UX', 'Core Spec'],
    content: `## The Spatial Paradigm
Traditional productivity platforms treat work as isolated files inside disconnected folders. In SyncSpace, every asset lives in relation to its surrounding project.

### Core Tenants:
1. **Persistent Proximity**: Keep conversations directly adjacent to the documents and tasks they inform.
2. **Contextual Presence**: Live teammate cursors and avatars communicate momentum without meeting overhead.
3. **Continuous Transitions**: Move smoothly between high-level roadmaps and granular execution boards without losing your place.`
  },
  {
    id: 'doc-102',
    title: 'Q4 Launch Playbook & Cross-Team Checklist',
    author: 'Marcus Vance',
    authorInitials: 'MV',
    updatedAt: '1 hour ago',
    readTime: '6 min read',
    tags: ['Product Marketing', 'Launch Prep', 'Q4 Goals'],
    content: `## Launch Trajectory
Our objective for Q4 is establishing seamless adoption workflows for distributed design and engineering squads.

- **Milestone 1**: Component library stabilization (Complete)
- **Milestone 2**: Public beta release and customer onboarding feedback
- **Milestone 3**: Enterprise SSO integration and multi-team workspace migration`
  }
];

export const SAMPLE_ACTIVITY: ActivityEvent[] = [
  {
    id: 'act-1',
    user: SAMPLE_TEAM.maya,
    action: 'moved task',
    target: 'Website redesign to In Progress',
    timeFormatted: '2m ago',
    detail: 'Tagged for review by Sofia Chen'
  },
  {
    id: 'act-2',
    user: SAMPLE_TEAM.sofia,
    action: 'published document update',
    target: 'Spatial Workspace Design Principles v2',
    timeFormatted: '14m ago',
    detail: 'Added 3 interactive wireframe references'
  },
  {
    id: 'act-3',
    user: SAMPLE_TEAM.alex,
    action: 'completed task',
    target: 'Sprint 24 capacity planning',
    timeFormatted: '42m ago',
    detail: 'Approved by Maya Lin'
  },
  {
    id: 'act-4',
    user: SAMPLE_TEAM.marcus,
    action: 'commented in channel',
    target: '#launch-roadmap',
    timeFormatted: '1h ago',
    detail: 'Target release window confirmed for Thursday.'
  }
];

export const CORE_FEATURES = [
  {
    id: 'shared-workspaces',
    title: 'Shared Workspaces',
    description: 'Organize projects, docs, tasks, and resources by team with dedicated views and permissions.',
    badge: 'Structure',
    miniSnippet: 'Team Workspaces • Channels • Unified Assets'
  },
  {
    id: 'live-collaboration',
    title: 'Live Collaboration',
    description: 'Experience true team momentum with real-time presence indicators, shared cursors, and live updates.',
    badge: 'Presence',
    miniSnippet: 'Real-time sync • Active teammate avatars'
  },
  {
    id: 'connected-conversations',
    title: 'Connected Conversations',
    description: 'Keep discussions close to the work they concern. Comment on cards, highlight doc sentences, and decide fast.',
    badge: 'Context',
    miniSnippet: 'Inline threads • Contextual mentions'
  },
  {
    id: 'visual-project-planning',
    title: 'Visual Project Planning',
    description: 'Represent tasks with flexible board, list, and milestone views. Plan sprints without switching apps.',
    badge: 'Execution',
    miniSnippet: 'Kanban boards • Sprint milestones • Task tags'
  },
  {
    id: 'central-knowledge-hub',
    title: 'Central Knowledge Hub',
    description: 'An organized home for decisions, architecture notes, and resources. Fast search across every department.',
    badge: 'Docs',
    miniSnippet: 'Rich markdown • Tagging • Knowledge search'
  },
  {
    id: 'team-wide-visibility',
    title: 'Team-Wide Visibility',
    description: 'Surface owners, priorities, progress, and next steps at a glance. Leadership stays informed effortlessly.',
    badge: 'Clarity',
    miniSnippet: 'Executive overview • Progress health metrics'
  }
];

export const WORKFLOW_STAGES = [
  {
    number: '01',
    title: 'Gather everything in one workspace',
    description: 'Unify scattered roadmaps, Slack chats, Notion docs, and Jira tickets into a single cohesive canvas.'
  },
  {
    number: '02',
    title: 'Align the team around ownership and priorities',
    description: 'Give every project a clear DRI, active sprint tags, and visible status stages that everyone understands.'
  },
  {
    number: '03',
    title: 'Move projects forward with shared context',
    description: 'Eliminate status meetings. Teammates jump directly into documents and task threads with full historical background.'
  }
];

export const USE_CASES: UseCaseData[] = [
  {
    id: 'product-eng',
    role: 'Product & Engineering',
    headline: 'Bridge roadmap specs and daily sprint delivery',
    description: 'Align product managers, designers, and developers in one unified pipeline. Turn strategy documents directly into trackable sprint tasks without copy-pasting between separate tools.',
    tags: ['Sprint Boards', 'Architecture Specs', 'Code PR Links'],
    sampleProject: 'Sprint 24 — Mobile App Core',
    activeView: 'Kanban Sprint Board'
  },
  {
    id: 'design-creative',
    role: 'Design & Creative Teams',
    headline: 'Share inspiration, iterations, and brand libraries',
    description: 'Review design system tokens, critique Figma prototypes, and approve campaign assets alongside copywriters and brand managers in real time.',
    tags: ['Design Tokens', 'Asset Reviews', 'Feedback Threads'],
    sampleProject: 'Brand Design System 2.0',
    activeView: 'Asset Canvas & Reviews'
  },
  {
    id: 'marketing-ops',
    role: 'Marketing & Operations',
    headline: 'Coordinate multi-channel launches with clear ownership',
    description: 'Keep content schedules, email campaigns, event logistics, and vendor reviews aligned on one shared timeline with clear delivery deadlines.',
    tags: ['Campaign Timelines', 'Editorial Calendars', 'Launch Checklists'],
    sampleProject: 'Q4 Product Keynote & Launch',
    activeView: 'Milestone Timeline'
  },
  {
    id: 'remote-hybrid',
    role: 'Remote & Hybrid Teams',
    headline: 'Stay connected across timezones without meeting burnout',
    description: 'Replace endless status syncs with lightweight asynchronous presence, ambient activity streams, and structured decision records.',
    tags: ['Async Updates', 'Timezone Presence', 'Decision Records'],
    sampleProject: 'Distributed Team Operations',
    activeView: 'Ambient Activity Stream'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    priceMonthly: 0,
    priceAnnual: 0,
    description: 'Essential shared workspace for small squads and early-stage projects.',
    features: [
      'Up to 5 team members',
      '3 active collaborative project boards',
      'Unlimited documents & notes',
      '7-day activity history',
      'Basic search and task filters'
    ],
    ctaText: 'Start for Free',
    highlighted: false
  },
  {
    id: 'team',
    name: 'Team',
    priceMonthly: 12,
    priceAnnual: 10,
    description: 'Powerful project boards, document collaboration, and team visibility.',
    badge: 'MOST POPULAR',
    features: [
      'Unlimited team members',
      'Unlimited workspaces & project boards',
      'Live multiplayer presence indicators',
      'Full revision history & document export',
      'Advanced permissions & custom task fields',
      'Slack & GitHub notifications sync'
    ],
    ctaText: 'Start 14-Day Free Trial',
    highlighted: true
  },
  {
    id: 'business',
    name: 'Business',
    priceMonthly: 24,
    priceAnnual: 19,
    description: 'Advanced governance, custom integrations, and dedicated enterprise support.',
    features: [
      'Everything in Team, plus:',
      'SAML Single Sign-On (SSO) & SCIM provisioning',
      'Enterprise audit log & retention controls',
      'Custom workspace domain & branding',
      'Dedicated Customer Success Manager',
      '99.9% uptime SLA guarantee'
    ],
    ctaText: 'Contact Sales',
    highlighted: false
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How quickly can our team get started with SyncSpace?',
    answer: 'You can set up your first collaborative workspace in less than two minutes. Create a project board, invite teammates with an email link, and start organizing tasks immediately without complex configuration.'
  },
  {
    id: 'faq-2',
    question: 'How does live collaboration work in the workspace?',
    answer: 'SyncSpace surfaces real-time presence indicators showing which teammates are currently active in a channel or document. You can see live edits, leave contextual comments, and collaborate simultaneously without stepping on each other\'s work.'
  },
  {
    id: 'faq-3',
    question: 'Can we organize work across multiple departments and projects?',
    answer: 'Yes. SyncSpace lets you create distinct workspaces for Product, Engineering, Design, Marketing, and Operations. Each workspace has its own channels, project boards, and knowledge base while allowing cross-team visibility.'
  },
  {
    id: 'faq-4',
    question: 'Can I import our existing docs and tasks from other tools?',
    answer: 'Yes. SyncSpace provides intuitive import flows for Markdown documents, CSV task exports, Notion workspaces, and Trello boards, allowing your team to migrate without losing historical context.'
  },
  {
    id: 'faq-5',
    question: 'What is the difference between the Free and Team plans?',
    answer: 'The Free plan supports up to 5 members with 3 active boards, perfect for small projects. The Team plan unlocks unlimited team members, unlimited workspaces, live multiplayer presence, full document history, and advanced integrations.'
  }
];
