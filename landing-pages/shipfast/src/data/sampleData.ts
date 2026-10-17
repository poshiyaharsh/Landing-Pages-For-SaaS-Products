import {
  ShipFastFeature,
  LaunchStage,
  EcosystemTool,
  DevUseCase,
  PricingPlan,
  FAQItem,
} from '../types';

export const SAMPLE_FRAMEWORKS = [
  { id: 'nextjs', name: 'Next.js 15 (App Router)', language: 'TypeScript', buildCommand: 'next build' },
  { id: 'react-vite', name: 'Vite + React 19', language: 'TypeScript', buildCommand: 'vite build' },
  { id: 'remix', name: 'Remix / React Router 7', language: 'TypeScript', buildCommand: 'remix build' },
  { id: 'astro', name: 'Astro 4.0 Content & Web', language: 'TypeScript', buildCommand: 'astro build' },
  { id: 'sveltekit', name: 'SvelteKit 2.0', language: 'TypeScript', buildCommand: 'vite build' },
];

export const INITIAL_CHECKLIST_ITEMS = [
  { id: 'auth', label: 'Auth & Session Tokens (Lucia / NextAuth)', category: 'auth' as const, checked: true },
  { id: 'db', label: 'Database Migrations & Prisma / Drizzle Schema', category: 'database' as const, checked: true },
  { id: 'stripe', label: 'Stripe Webhooks & Customer Portal Endpoint', category: 'billing' as const, checked: true },
  { id: 'env', label: 'Environment Variables Sanitization & Vault Sync', category: 'deploy' as const, checked: true },
  { id: 'seo', label: 'OpenGraph Meta Tags & Sitemap XML Generation', category: 'analytics' as const, checked: false },
  { id: 'dns', label: 'Custom Domain SSL & DNS Canonical CNAME Records', category: 'deploy' as const, checked: false },
];

export const SHIPFAST_FEATURES: ShipFastFeature[] = [
  {
    id: 'project-init',
    icon: 'FolderPlus',
    title: 'Project Initialization',
    description: 'Scaffold production-grade monorepos, env templates, and typed database clients in one reproducible CLI command.',
    highlight: 'npx shipfast init acme-app',
  },
  {
    id: 'dev-workflow',
    icon: 'GitPullRequest',
    title: 'Development Workflow',
    description: 'Pre-configured pre-commit git hooks, linting rules, and hot-reloading dev container setups that prevent dependency drift.',
    highlight: 'Unified dev scripts & linters',
  },
  {
    id: 'build-test-visibility',
    icon: 'Activity',
    title: 'Build & Test Visibility',
    description: 'Real-time pipeline telemetry highlighting bundle sizes, test coverage percentages, and TypeScript type-check bottlenecks.',
    highlight: 'Real-time telemetry stream',
  },
  {
    id: 'deployment-prep',
    icon: 'ShieldCheck',
    title: 'Deployment Preparation',
    description: 'Automated dry-run simulations ensuring environment secrets, database schema migrations, and build artifacts pass sanity checks.',
    highlight: 'Pre-flight deployment lint',
  },
  {
    id: 'launch-checklist',
    icon: 'CheckSquare',
    title: 'Launch Checklist',
    description: 'An interactive, auditable go-to-market checklist verifying DNS records, Stripe webhook listener health, and error monitoring.',
    highlight: 'Auditable launch readiness',
  },
  {
    id: 'project-overview',
    icon: 'LayoutDashboard',
    title: 'Project Overview',
    description: 'A single high-level developer dashboard tracking sprint progress, open blocker tickets, deployment versions, and release URLs.',
    highlight: 'Unified developer cockpit',
  },
];

export const FIVE_STAGE_WORKFLOW: LaunchStage[] = [
  {
    stageNumber: '01',
    title: 'Define your project',
    tagline: 'Architecture & Blueprint',
    description: 'Establish project scope, domain naming, target environments, and repository access protocols.',
    terminalSnippet: '$ shipfast project create --name "acme-dashboard" --org "core-eng"',
  },
  {
    stageNumber: '02',
    title: 'Choose your stack',
    tagline: 'Batteries-Included Tooling',
    description: 'Select your preferred web framework, styling setup, authentication provider, and relational database engine.',
    terminalSnippet: '$ shipfast stack select --framework nextjs --orm drizzle --auth lucia',
  },
  {
    stageNumber: '03',
    title: 'Configure and build',
    tagline: 'Deterministic Compilation',
    description: 'Generate type-safe environment schemas, seed initial databases, and run zero-cache production builds.',
    terminalSnippet: '$ shipfast build --env staging --strict-types',
  },
  {
    stageNumber: '04',
    title: 'Test and prepare release',
    tagline: 'Verification & Dry Run',
    description: 'Execute unit test suites, bundle-analyzer verifications, and pre-flight webhook listener tests.',
    terminalSnippet: '$ shipfast test:e2e && shipfast verify:secrets',
  },
  {
    stageNumber: '05',
    title: 'Deploy and launch',
    tagline: 'Production URL & Monitoring',
    description: 'Trigger immutable production deployment, bind DNS canonical records, and notify the engineering team.',
    terminalSnippet: '$ shipfast deploy --prod -> https://acme-dashboard.shipfast.app [LIVE]',
  },
];

export const ECOSYSTEM_TOOLS: EcosystemTool[] = [
  { name: 'Next.js & React', category: 'Frontend & Fullstack', description: 'Zero-config server components, SSR, and dynamic API edge routing.', badge: 'Supported' },
  { name: 'Vite & Tailwind', category: 'SPA & Bundling', description: 'Instant hot module replacement and optimized static asset packaging.', badge: 'Supported' },
  { name: 'GitHub & GitLab', category: 'VCS & CI/CD', description: 'Automated preview branches and commit status check reporting.', badge: 'Supported' },
  { name: 'Vercel / Cloudflare', category: 'Edge Hosting', description: 'Global CDN distribution, edge workers, and instant rollback.', badge: 'Blueprint' },
  { name: 'AWS & Docker', category: 'Container Cloud', description: 'ECS, Fargate, and self-hosted Kubernetes production templates.', badge: 'Blueprint' },
  { name: 'Stripe & Supabase', category: 'Backend & Payments', description: 'Pre-wired billing webhooks and PostgreSQL authentication sync.', badge: 'Supported' },
];

export const DEV_USE_CASES: DevUseCase[] = [
  {
    id: 'indie-hacker',
    title: 'Indie Founders Launching an MVP',
    persona: 'Solo builder going from idea to first paying customer in 48 hours.',
    description: 'Skip boilerplate config, auth routing, and database setup. Focus 100% on core product value and ship an initial release before momentum fades.',
    stackExample: 'Next.js 15 + Tailwind + Drizzle + Stripe',
    impactMetric: 'Launch MVP in < 3 days',
  },
  {
    id: 'side-project',
    title: 'Developers Starting a Side Project',
    persona: 'Software engineer building passion projects on nights and weekends.',
    description: 'Structured checklists keep your project clean and maintainable. Return after weeks away and know immediately what remains before public launch.',
    stackExample: 'Vite + React 19 + TypeScript + Supabase',
    impactMetric: 'Zero setup friction',
  },
  {
    id: 'small-team',
    title: 'Small Teams Preparing a New Release',
    persona: '2-5 engineers shipping continuous feature releases to production.',
    description: 'Eliminate "it worked on my machine" deployment panic with pre-flight checklist verifications and deterministic CI build previews.',
    stackExample: 'Monorepo + TurboRepo + GitHub Actions',
    impactMetric: '100% reproducible deploys',
  },
  {
    id: 'startup-standard',
    title: 'Startups Standardizing Launch Workflow',
    persona: 'Technical co-founders establishing company-wide development standards.',
    description: 'Enforce environment secret validation, database migrations, and test coverage thresholds across every microservice and app.',
    stackExample: 'Microservices + Docker + AWS + Sentry',
    impactMetric: 'Zero unverified releases',
  },
];

export const SHIPFAST_PRICING: PricingPlan[] = [
  {
    id: 'solo',
    name: 'Solo Developer',
    price: '0',
    period: 'forever free',
    description: 'Essential workflow builder and deployment checklist for indie projects.',
    features: [
      'Interactive launch workflow demo',
      'Unlimited local project configurations',
      'Pre-flight deployment readiness checklist',
      'Exportable project configuration files',
      'Framework templates for Next.js & Vite',
      'Community developer documentation'
    ],
    cta: 'Start Building Free',
    popular: false,
  },
  {
    id: 'startup',
    name: 'Startup Founder',
    price: '49',
    period: 'one-time license',
    description: 'Complete production launch kit with pre-built auth, billing, and deploy recipes.',
    features: [
      'Everything in Solo, plus:',
      'Pre-built Stripe checkout & webhook pipelines',
      'Prisma & Drizzle PostgreSQL schemas',
      'Authentication templates (Lucia, NextAuth)',
      'Automated SEO meta tag & sitemap generator',
      'Continuous deployment webhooks & previews',
      'Lifetime updates for major framework releases'
    ],
    cta: 'Get Lifetime License',
    popular: true,
  },
  {
    id: 'team',
    name: 'Engineering Team',
    price: '199',
    period: '/ year',
    description: 'Shared deployment governance, team checklist auditing, and private registry support.',
    features: [
      'Everything in Startup, plus:',
      'Multi-seat workspace & role permissions',
      'Centralized environment variable vault',
      'Automated pull-request pre-flight audits',
      'Private npm package & monorepo orchestration',
      'Priority Discord support & setup assistance'
    ],
    cta: 'Deploy With Team',
    popular: false,
  },
];

export const SHIPFAST_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Which frontend and full-stack frameworks does ShipFast support?',
    answer: 'ShipFast provides optimized workflow configurations for Next.js (App Router), Vite + React, Remix, Astro, and SvelteKit. All templates use TypeScript by default with zero configuration required.',
  },
  {
    id: 'faq-2',
    question: 'Does ShipFast connect directly to my GitHub repository?',
    answer: 'In our production deployment pipeline, ShipFast integrates with GitHub and GitLab via OAuth to read branch statuses and trigger builds. In this interactive demonstration, repository connection is safely simulated client-side.',
  },
  {
    id: 'faq-3',
    question: 'Where are my applications actually hosted and deployed?',
    answer: 'ShipFast is not a closed hosting silo. You maintain 100% ownership of your infrastructure. ShipFast generates deployment recipes for edge platforms (Vercel, Cloudflare Pages) or container clouds (AWS, Render, Fly.io). Actual deployment requires your own configured provider account and credentials.',
  },
  {
    id: 'faq-4',
    question: 'How does ShipFast handle environment secrets and API keys?',
    answer: 'ShipFast includes strict runtime environment schema validation (powered by Zod/T3 env). This ensures your build fails safely at compile time if critical secrets (such as STRIPE_SECRET_KEY or DATABASE_URL) are missing before hitting production.',
  },
  {
    id: 'faq-5',
    question: 'Can I customize the setup checklist with my own team requirements?',
    answer: 'Yes! The launch checklist is completely customizable. You can add company-specific compliance checks, internal QA sign-offs, security audits, or custom webhook monitors.',
  },
  {
    id: 'faq-6',
    question: 'Is the pricing a one-time purchase or recurring subscription?',
    answer: 'The Startup license is an illustrative one-time purchase granting perpetual access to code templates and recipes. The Team tier provides annual workspace seats and shared audit logs.',
  },
];
