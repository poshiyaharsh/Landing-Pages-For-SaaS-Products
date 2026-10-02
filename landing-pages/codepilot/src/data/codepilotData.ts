import {
  NavItem,
  MetricItem,
  FeatureItem,
  CommandItem,
  IntegrationItem,
  TechItem,
  TestimonialItem,
  PricingPlan,
  FAQItem
} from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Product', href: '#product' },
  { label: 'Features', href: '#features' },
  { label: 'Developers', href: '#editor-showcase' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: '#faq' }
];

export const TRUST_LOGOS = [
  { name: 'NEXUS', meta: 'Distributed Systems' },
  { name: 'STACKLAB', meta: 'Cloud Platforms' },
  { name: 'BYTEWORKS', meta: 'DevOps & CI/CD' },
  { name: 'CLOUDCORE', meta: 'Enterprise Infrastructure' },
  { name: 'DEVFORGE', meta: 'Developer Tools' },
  { name: 'VECTOR', meta: 'Real-time Telemetry' },
];

export const TRUST_METRICS: MetricItem[] = [
  {
    value: '10M+',
    label: 'Lines Analyzed',
    subtext: 'Across enterprise mono-repos & open source'
  },
  {
    value: '99.9%',
    label: 'Workflow Uptime',
    subtext: 'High-availability low-latency inference engine'
  },
  {
    value: '40%',
    label: 'Faster Reviews',
    subtext: 'Catching logic bugs before human review cycles'
  }
];

export const FRICTION_POINTS = [
  {
    title: 'Context Switching',
    desc: 'Bouncing between IDE, browser tabs, API docs, Jira, and Slack kills deep cognitive engineering flow.',
    icon: 'shuffle'
  },
  {
    title: 'Debugging Repetitive Issues',
    desc: 'Spending hours tracing missing headers, type coercion bugs, and unhandled null exceptions.',
    icon: 'bug'
  },
  {
    title: 'Manual Code Reviews',
    desc: 'Senior engineers wasting time pointing out styling mistakes and basic boundary bugs instead of architectural design.',
    icon: 'git-pull-request'
  },
  {
    title: 'Slow Documentation Searches',
    desc: 'Digging through outdated internal wikis and sparse library readmes to find how an internal SDK works.',
    icon: 'book-open'
  },
  {
    title: 'Test Failures & Gaps',
    desc: 'Writing boilerplate test harnesses or skipping edge cases because writing mocks takes too long.',
    icon: 'check-square'
  },
  {
    title: 'Repetitive Refactoring',
    desc: 'Renaming patterns and migrating APIs manually across dozens of microservices with fragile regex find-and-replace.',
    icon: 'refresh-cw'
  }
];

export const FEATURES: FeatureItem[] = [
  {
    id: 'completion',
    number: '01',
    title: 'AI Code Completion',
    tagline: 'Context-aware suggestions that understand your entire repository.',
    description: 'Write faster with whole-line and multi-line completions informed by your imports, types, and project-specific design patterns, not generic internet snippets.',
    visualType: 'completion',
    badge: 'Real-time Latency < 40ms',
    codeSnippet: `// Autocomplete understands your custom types and helpers
const userSession = await sessionStore.validateToken(req.headers.authorization);
if (!userSession.isValid) {
  return reply.status(401).send({ error: 'SESSION_EXPIRED', retryAfter: 300 });
}`
  },
  {
    id: 'review',
    number: '02',
    title: 'AI Code Review',
    tagline: 'Catch bugs, security vulnerabilities, and leaks before pull requests merge.',
    description: 'Continuous automated AST & semantic analysis flags logic errors, memory leaks, unhandled rejections, and SQL injections right inside your pull request.',
    visualType: 'review',
    badge: 'Automated PR Guardrails',
    codeSnippet: `// CodePilot flagged PR #248
- const token = jwt.decode(rawToken); // [CodePilot Warning] Unverified JWT decode!
+ const token = await jwt.verify(rawToken, env.JWT_SECRET, { algorithms: ['HS256'] });`
  },
  {
    id: 'debugging',
    number: '03',
    title: 'Debugging Copilot',
    tagline: 'Trace runtime errors, inspect stack traces, and apply one-click verified fixes.',
    description: 'Paste any error stack trace or console output. CodePilot steps through your execution graph, pinpoints the root cause, and generates surgical diffs.',
    visualType: 'debugging',
    badge: 'Root-Cause Pinpointing',
    codeSnippet: `TypeError: Cannot read properties of undefined (reading 'price')
  at calculateInvoice (invoice.service.ts:18:24)
CodePilot: Guard against undefined items array or malformed item payloads.`
  },
  {
    id: 'testing',
    number: '04',
    title: 'Automated Testing',
    tagline: 'Generate comprehensive unit and integration tests for every critical branch.',
    description: 'Produce high-coverage test suites in Vitest, Jest, PyTest, or Go with mock factories and boundary condition fixtures generated in seconds.',
    visualType: 'testing',
    badge: '100% Mock Synthesizer',
    codeSnippet: `describe('calculateInvoice()', () => {
  it('should return 0 when item list is empty', () => {
    expect(calculateInvoice([])).toBe(0);
  });
  it('handles item lists with promotional zero-cost items', () => { ... });
});`
  },
  {
    id: 'intelligence',
    number: '05',
    title: 'Codebase Intelligence',
    tagline: 'Natural language queries grounded in your private repository knowledge graph.',
    description: 'Ask deep architectural questions like "Where do we process Webhook signatures?" and get cited file paths, call graphs, and exact line references.',
    visualType: 'search',
    badge: 'Semantic AST Graph',
    codeSnippet: `> Query: "Where is the Stripe webhook secret verified?"
CodePilot: Verified in src/services/billing/webhook.ts:42 using stripe.webhooks.constructEvent()`
  },
  {
    id: 'shipping',
    number: '06',
    title: 'One-Click Shipping',
    tagline: 'From staged changes to passing CI and clean pull requests in seconds.',
    description: 'Automate commit message synthesis, conventional changelogs, test execution, and pull request draft generation with zero friction.',
    visualType: 'shipping',
    badge: 'Git-Native Workflows',
    codeSnippet: `$ codepilot ship --pr
✓ Running linter & test suite (184/184 passed)
✓ Generating conventional commit: 'feat(billing): sanitize item totals'
✓ PR #249 created: https://github.com/org/repo/pull/249`
  }
];

export const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'WRITE',
    tagline: 'Assisted Generation',
    desc: 'Draft functions, types, and boilerplate with inline suggestions that adapt to your personal coding style.',
    cmd: '$ codepilot generate --component AuthGuard'
  },
  {
    step: '02',
    title: 'REVIEW',
    tagline: 'Semantic Guardrails',
    desc: 'Instant AST & security scans analyze changes locally before pushing to remote branches.',
    cmd: '$ codepilot review --staged'
  },
  {
    step: '03',
    title: 'TEST',
    tagline: 'Deterministic Validation',
    desc: 'Synthesize edge-case assertions and verify mocks without writing endless manual fixture files.',
    cmd: '$ codepilot test --coverage'
  },
  {
    step: '04',
    title: 'SHIP',
    tagline: 'Production Deployment',
    desc: 'Open clean pull requests with AI-generated diff summaries and automatic CI validation.',
    cmd: '$ codepilot ship --release v2.4.0'
  }
];

export const COMMANDS: CommandItem[] = [
  {
    command: '/explain',
    description: 'Deconstruct complex algorithms, legacy patterns, or cryptic regexes into plain engineering terms.',
    category: 'ai',
    keybinding: '⌘ E',
    sampleOutput: 'Explaining auth.middleware.ts: Lines 14-28 implement a sliding window token refresh using Redis TTL.'
  },
  {
    command: '/refactor',
    description: 'Restructure legacy imperative code into clean, testable functional pipelines.',
    category: 'quality',
    keybinding: '⌘ R',
    sampleOutput: 'Converted nested callback chain into async/await with unified Result<T, E> error handling.'
  },
  {
    command: '/test',
    description: 'Synthesize edge-case unit tests with mocks and boundary parameter matrices.',
    category: 'quality',
    keybinding: '⌘ T',
    sampleOutput: 'Generated 4 unit tests covering null items, NaN quantity, and currency rounding.'
  },
  {
    command: '/debug',
    description: 'Analyze active stack trace, inspect variables, and suggest surgical inline patches.',
    category: 'ai',
    keybinding: '⌘ D',
    sampleOutput: 'Pinpointed unhandled Promise rejection in fetchWrapper.ts:34. Missing bearer authorization.'
  },
  {
    command: '/review',
    description: 'Run deep semantic code review across staged git diffs before opening a pull request.',
    category: 'git',
    keybinding: '⌘ Shift+R',
    sampleOutput: 'Review complete: 0 critical vulnerabilities, 1 performance suggestion (memoize filter selector).'
  },
  {
    command: '/docs',
    description: 'Auto-generate TSDoc, JSDoc, or OpenAPI specs directly from function signatures and types.',
    category: 'core',
    keybinding: '⌘ Shift+D',
    sampleOutput: 'Generated complete JSDoc with @param items, @returns number, and @throws InvoiceError.'
  },
  {
    command: '/optimize',
    description: 'Detect N+1 queries, unnecessary re-renders, and excessive memory allocations.',
    category: 'quality',
    keybinding: '⌘ O',
    sampleOutput: 'Optimized loop from O(N^2) to O(N) by introducing a Map index for customer lookups.'
  },
  {
    command: '/ship',
    description: 'Lint, run unit test suites, generate semantic commit messages, and create pull requests.',
    category: 'git',
    keybinding: '⌘ S',
    sampleOutput: 'Built successfully. 184 tests passed. PR #250 created on origin/main.'
  }
];

export const INTEGRATIONS: IntegrationItem[] = [
  {
    name: 'GitHub',
    category: 'Version Control',
    description: 'Deep PR comments, status checks, and automated review bot integration.',
    status: 'Native',
    icon: 'Github'
  },
  {
    name: 'GitLab',
    category: 'Version Control',
    description: 'Merge request scanning, CI/CD pipeline integration, and self-hosted support.',
    status: 'Native',
    icon: 'Gitlab'
  },
  {
    name: 'Bitbucket',
    category: 'Version Control',
    description: 'Enterprise pipeline webhooks, branch protection guards, and code review hooks.',
    status: 'Supported',
    icon: 'GitBranch'
  },
  {
    name: 'VS Code',
    category: 'IDE',
    description: 'Zero-latency extension with inline ghost text, command palette, and chat sidebar.',
    status: 'Native',
    icon: 'Code'
  },
  {
    name: 'JetBrains',
    category: 'IDE',
    description: 'IntelliJ, WebStorm, PyCharm, and GoLand plugin suite with deep AST awareness.',
    status: 'Native',
    icon: 'Cpu'
  },
  {
    name: 'Slack',
    category: 'Collaboration',
    description: 'Real-time PR review alerts, build failure summaries, and interactive query bot.',
    status: 'Native',
    icon: 'MessageSquare'
  },
  {
    name: 'Linear',
    category: 'Collaboration',
    description: 'Link code changes directly to issue tickets with automatic bidirectional state syncing.',
    status: 'Native',
    icon: 'Layers'
  },
  {
    name: 'Jira',
    category: 'Collaboration',
    description: 'Enterprise ticket resolution automation, release note tagging, and audit trail.',
    status: 'Supported',
    icon: 'CheckCircle2'
  },
  {
    name: 'Docker',
    category: 'Infrastructure',
    description: 'Container build optimization, vulnerability CVE audits, and multi-stage Dockerfiles.',
    status: 'Verified',
    icon: 'Box'
  },
  {
    name: 'AWS',
    category: 'Infrastructure',
    description: 'Serverless deployment validations, IAM least-privilege policies, and CloudWatch links.',
    status: 'Verified',
    icon: 'Cloud'
  },
  {
    name: 'Vercel',
    category: 'Infrastructure',
    description: 'Instant preview environment validations and edge function bundle analysis.',
    status: 'Native',
    icon: 'Triangle'
  },
  {
    name: 'PostgreSQL',
    category: 'Database',
    description: 'Schema migration analyzer, index efficiency adviser, and SQL query explainer.',
    status: 'Supported',
    icon: 'Database'
  }
];

export const TECH_LANGUAGES: TechItem[] = [
  { name: 'TypeScript', type: 'language', popularity: 'Primary', extension: '.ts, .tsx' },
  { name: 'JavaScript', type: 'language', popularity: 'Primary', extension: '.js, .mjs' },
  { name: 'Python', type: 'language', popularity: 'Primary', extension: '.py' },
  { name: 'Go', type: 'language', popularity: 'Fast', extension: '.go' },
  { name: 'Rust', type: 'language', popularity: 'Systems', extension: '.rs' },
  { name: 'Java', type: 'language', popularity: 'Enterprise', extension: '.java' },
  { name: 'C#', type: 'language', popularity: 'Enterprise', extension: '.cs' },
  { name: 'C++', type: 'language', popularity: 'Performance', extension: '.cpp, .h' },
  { name: 'PHP', type: 'language', popularity: 'Web', extension: '.php' },
  { name: 'Ruby', type: 'language', popularity: 'Web', extension: '.rb' },
  { name: 'Dart', type: 'language', popularity: 'Mobile', extension: '.dart' },
];

export const TECH_FRAMEWORKS: TechItem[] = [
  { name: 'React', type: 'framework', popularity: 'Frontend', extension: 'Components' },
  { name: 'Next.js', type: 'framework', popularity: 'Fullstack', extension: 'App Router' },
  { name: 'Node.js', type: 'framework', popularity: 'Runtime', extension: 'Express / Fastify' },
  { name: 'Django', type: 'framework', popularity: 'Backend', extension: 'REST / ORM' },
  { name: 'Laravel', type: 'framework', popularity: 'Fullstack', extension: 'Eloquent' },
  { name: 'Spring Boot', type: 'framework', popularity: 'Enterprise', extension: 'JVM' },
  { name: 'FastAPI', type: 'framework', popularity: 'Modern API', extension: 'Pydantic' },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: 'CodePilot feels like having another engineer sitting next to you — without the context switching.',
    author: 'Maya Patel',
    role: 'Senior Software Engineer',
    company: 'Nexus Distributed',
    avatarText: 'MP',
    verifiedMetric: 'Saved 9h/week on PR cycles'
  },
  {
    quote: 'Code reviews became significantly more focused because CodePilot catches the obvious issues before reviewers even open the PR.',
    author: 'Daniel Kim',
    role: 'Engineering Lead',
    company: 'StackLab Cloud',
    avatarText: 'DK',
    verifiedMetric: '42% decrease in production regressions'
  },
  {
    quote: 'The codebase search alone saves us hours every week. Being able to ask how our internal auth pipeline interacts with microservices is magical.',
    author: 'Alex Morgan',
    role: 'Full-Stack Developer',
    company: 'ByteWorks',
    avatarText: 'AM',
    verifiedMetric: 'Onboarded 5x faster to monorepo'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'free',
    name: 'FREE',
    tagline: 'For individual developers exploring AI-assisted workflows.',
    priceMonthly: 0,
    priceYearly: 0,
    ctaText: 'Start Free',
    ctaVariant: 'outline',
    features: [
      '2,000 AI requests / month',
      'Basic code completion in VS Code',
      'Personal projects & public repos',
      'Standard community support',
      'Local syntax diagnostics',
      'Single-file context awareness'
    ]
  },
  {
    id: 'pro',
    name: 'PRO',
    tagline: 'For professional software engineers shipping daily.',
    priceMonthly: 20,
    priceYearly: 16,
    popular: true,
    ctaText: 'Start Pro',
    ctaVariant: 'primary',
    features: [
      'Unlimited projects & repositories',
      'Advanced multi-token AI assistance',
      'Automated code reviews on pull requests',
      'Deep interactive debugging copilot',
      'Whole-codebase semantic intelligence',
      'Priority inference latency (<40ms)',
      'CLI & command palette integration',
      'Fast email & Discord engineer support'
    ]
  },
  {
    id: 'team',
    name: 'TEAM',
    tagline: 'For engineering organizations demanding collaboration & governance.',
    priceMonthly: 40,
    priceYearly: 32,
    ctaText: 'Contact Sales',
    ctaVariant: 'secondary',
    features: [
      'Everything in Pro included',
      'Shared team workspaces & snippets',
      'Team velocity & review analytics',
      'Role-based granular access permissions',
      'Complete audit logs & telemetry tracking',
      'Centralized billing & seat management',
      'Custom repository embeddings & rules',
      'Dedicated Customer Success Engineer'
    ]
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    question: 'What is CodePilot?',
    answer: 'CodePilot is an AI developer platform engineered to integrate directly into your local editor, terminal, and CI/CD pipelines. Rather than functioning as a disconnected web chat, CodePilot lives inside your development environment to assist with writing, reviewing, debugging, testing, and shipping code.'
  },
  {
    question: 'Which programming languages are supported?',
    answer: 'CodePilot provides first-class support for JavaScript, TypeScript, Python, Go, Rust, Java, C#, C++, PHP, Ruby, and Dart. It also understands modern frameworks like React, Next.js, FastAPI, Spring Boot, Django, and Laravel.'
  },
  {
    question: 'Does CodePilot work with VS Code?',
    answer: 'Yes! CodePilot has an official lightweight extension for Visual Studio Code and VS Code forks (Cursor, VSCodium). We also support JetBrains IDEs (IntelliJ, WebStorm, PyCharm, GoLand) and offer a standalone terminal CLI for any terminal user (tmux, Neovim).'
  },
  {
    question: 'Can CodePilot understand my entire repository?',
    answer: 'Yes. CodePilot builds an encrypted local AST and vector graph of your workspace. When you ask a question or request completions, it grounds its reasoning in your actual project imports, custom types, and architecture rather than generic internet code.'
  },
  {
    question: 'How does AI code review work?',
    answer: 'When you stage git changes or submit a pull request, CodePilot analyzes the diff against your repository patterns. It catches logic flaws, missing boundary checks, security vulnerabilities, and unhandled promises, presenting concise actionable suggestions with ready-to-apply diffs.'
  },
  {
    question: 'Is my source code secure?',
    answer: 'Security is paramount. CodePilot does not train base public models on your proprietary source code. All code analysis occurs through encrypted in-transit channels, isolated memory workspaces, and strict zero-retention policies. We provide granular access controls and workspace audit logging.'
  },
  {
    question: 'Can teams use CodePilot together?',
    answer: 'Yes. The Team plan provides shared workspace configuration, team-wide coding rule standards, centralized security policies, and engineering velocity metrics so teams ship with unified quality.'
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Absolutely. There are no lock-in contracts. You can upgrade, downgrade, or cancel your Pro or Team subscription at any time directly through the dashboard with one click.'
  }
];
