import {
  TestSuite,
  TestCase,
  PipelineRun,
  CoverageBreakdown,
  FeatureItem,
  TestLifecycleStep,
  CIIntegration,
  PricingPlan,
  FAQItem,
} from '../types';

export const sampleSuites: TestSuite[] = [
  {
    id: 'suite-1',
    name: 'auth-and-session-security.spec.ts',
    category: 'Integration',
    framework: 'Vitest / Node 22',
    testCount: 42,
    passedCount: 40,
    failedCount: 1,
    skippedCount: 1,
    coveragePct: 94.2,
    durationSeconds: 4.8,
  },
  {
    id: 'suite-2',
    name: 'checkout-payment-idempotency.e2e.ts',
    category: 'E2E',
    framework: 'Playwright / Chromium',
    testCount: 28,
    passedCount: 27,
    failedCount: 1,
    skippedCount: 0,
    coveragePct: 91.5,
    durationSeconds: 14.2,
  },
  {
    id: 'suite-3',
    name: 'token-bucket-rate-limiter.test.ts',
    category: 'Unit',
    framework: 'Jest / TS 5.7',
    testCount: 64,
    passedCount: 64,
    failedCount: 0,
    skippedCount: 0,
    coveragePct: 98.4,
    durationSeconds: 1.2,
  },
  {
    id: 'suite-4',
    name: 'rest-api-v2-schema-contracts.test.ts',
    category: 'Contract',
    framework: 'Pact / OpenAPI 3.1',
    testCount: 36,
    passedCount: 36,
    failedCount: 0,
    skippedCount: 0,
    coveragePct: 99.1,
    durationSeconds: 3.4,
  },
];

export const sampleTestCases: TestCase[] = [
  {
    id: 'test-101',
    name: 'should reject stale replay attack with 409 Conflict',
    suiteId: 'suite-1',
    durationMs: 142,
    status: 'failed',
    fileLocation: 'src/auth/__tests__/session.spec.ts:148',
    failure: {
      errorName: 'AssertionError: Expected HTTP 409 Conflict, received HTTP 200 OK',
      expected: 'HTTP 409 Conflict { code: "IDEMPOTENCY_REPLAY_DETECTED" }',
      actual: 'HTTP 200 OK { token: "eyJhbGciOi...", sessionActive: true }',
      diffSnippet: '- Expected: 409 Conflict\n+ Received: 200 OK\n  Location: session.spec.ts:152:12',
      stackTrace: `AssertionError: expected 200 to equal 409
    at Context.<anonymous> (src/auth/__tests__/session.spec.ts:152:12)
    at processImmediate (node:internal/timers:478:21)
    at async Runner.runTest (node_modules/vitest/dist/runner.js:142:9)`,
    },
    tags: ['Security', 'Auth', 'Regression'],
  },
  {
    id: 'test-102',
    name: 'should invalidate bearer token after password rotation',
    suiteId: 'suite-1',
    durationMs: 84,
    status: 'passed',
    fileLocation: 'src/auth/__tests__/session.spec.ts:89',
    tags: ['Auth', 'TokenManagement'],
  },
  {
    id: 'test-103',
    name: 'should enforce PKCE challenge verification on public OAuth clients',
    suiteId: 'suite-1',
    durationMs: 110,
    status: 'passed',
    fileLocation: 'src/auth/__tests__/session.spec.ts:114',
    tags: ['OAuth', 'RFC7636'],
  },
  {
    id: 'test-104',
    name: 'should test webauthn biometric passkey fallback on mobile Safari',
    suiteId: 'suite-1',
    durationMs: 0,
    status: 'skipped',
    fileLocation: 'src/auth/__tests__/session.spec.ts:210',
    tags: ['WebAuthn', 'Passkeys', 'iOS'],
  },
  {
    id: 'test-201',
    name: 'should prevent duplicate charge on concurrent browser form double-click',
    suiteId: 'suite-2',
    durationMs: 840,
    status: 'failed',
    fileLocation: 'e2e/checkout/idempotency.spec.ts:74',
    failure: {
      errorName: 'TimeoutError: locator.waitFor: Timeout 5000ms exceeded waiting for #confirmation-receipt',
      expected: 'Receipt view rendered within 2500ms without secondary webhook dispatch',
      actual: 'Timed out waiting for modal state transition after second click event',
      diffSnippet: '- Expected element: #confirmation-receipt visible\n+ Actual state: #spinner-overlay disabled but modal stalled',
      stackTrace: `TimeoutError: locator.waitFor: Timeout 5000ms exceeded
    at CheckoutPage.completePurchase (e2e/pages/CheckoutPage.ts:48:19)
    at e2e/checkout/idempotency.spec.ts:78:24`,
    },
    tags: ['Payments', 'Stripe', 'FlakyDetection'],
  },
  {
    id: 'test-202',
    name: 'should calculate accurate sales tax based on postal code jurisdiction',
    suiteId: 'suite-2',
    durationMs: 420,
    status: 'passed',
    fileLocation: 'e2e/checkout/tax.spec.ts:32',
    tags: ['TaxCalculation', 'Compliance'],
  },
  {
    id: 'test-301',
    name: 'should replenish tokens precisely at configured bucket fill rate',
    suiteId: 'suite-3',
    durationMs: 18,
    status: 'passed',
    fileLocation: 'packages/limiter/src/__tests__/bucket.test.ts:42',
    tags: ['Unit', 'RateLimiting', 'Core'],
  },
  {
    id: 'test-401',
    name: 'should match OpenAPI 3.1 JSON schema response contracts for GET /v2/workspaces',
    suiteId: 'suite-4',
    durationMs: 44,
    status: 'passed',
    fileLocation: 'contracts/api/__tests__/workspaces.contract.ts:18',
    tags: ['Contract', 'OpenAPI', 'ZeroDrift'],
  },
];

export const samplePipelineRuns: PipelineRun[] = [
  { runId: 'CI-8492', commitSha: '7f9c2a1', branch: 'main', author: 'Elena Rostova', status: 'passed', duration: '1m 42s', testsPassed: 168, testsFailed: 0, flakyCount: 0, timestamp: '14m ago' },
  { runId: 'CI-8491', commitSha: '3d8e410', branch: 'feat/idempotency-guards', author: 'Marcus Thorne', status: 'failed', duration: '2m 10s', testsPassed: 166, testsFailed: 2, flakyCount: 1, timestamp: '1h ago' },
  { runId: 'CI-8490', commitSha: '9a11b82', branch: 'fix/token-refresh-leak', author: 'Sophia Martinez', status: 'passed', duration: '1m 38s', testsPassed: 168, testsFailed: 0, flakyCount: 0, timestamp: '3h ago' },
];

export const coverageBreakdown: CoverageBreakdown[] = [
  { category: 'Line Statement Coverage', percentage: 92.4, coveredLines: 14820, totalLines: 16038 },
  { category: 'Branch Decision Coverage', percentage: 88.6, coveredLines: 4120, totalLines: 4650 },
  { category: 'Function Signature Coverage', percentage: 95.8, coveredLines: 2310, totalLines: 2411 },
];

export const testForgeFeatures: FeatureItem[] = [
  {
    icon: 'FolderTree',
    title: 'Test-Run Organization',
    description: 'Group unit, integration, E2E, and contract suites into a coherent hierarchical dependency tree with parallel workers.',
    highlight: 'Unified Suite Hierarchy',
  },
  {
    icon: 'Bug',
    title: 'Automated Failure Triage',
    description: 'Extract stack traces, highlighted expected vs actual diffs, and pinpoint the exact source code commit that introduced the break.',
    highlight: 'Root-Cause Diff Isolation',
  },
  {
    icon: 'Zap',
    title: 'Flaky Test Detection Engine',
    description: 'Track test stability over rolling 30-day windows. Quarantine intermittent failures before they block main deployment pipelines.',
    highlight: 'Statistical Flake Quarantining',
  },
  {
    icon: 'LineChart',
    title: 'Precision Coverage Visibility',
    description: 'Visualize line, branch, and function coverage deltas directly on pull requests with zero impact on build velocity.',
    highlight: 'PR Delta Coverage Guard',
  },
  {
    icon: 'GitPullRequest',
    title: 'CI/CD Pipeline Context',
    description: 'Deep bidirectional integrations with GitHub Actions, GitLab CI, and CircleCI for instant commit status checks and Slack notifications.',
    highlight: 'Sub-Second Webhook Reporting',
  },
  {
    icon: 'ShieldCheck',
    title: 'Repeatable Quality Reporting',
    description: 'Generate compliance-ready quality scorecards and release readiness certification for engineering leadership and audits.',
    highlight: 'Audit-Ready Release Gates',
  },
];

export const testLifecycleSteps: TestLifecycleStep[] = [
  {
    step: '01',
    title: 'Targeted Suite Selection',
    description: 'Detect changed files and execute only the specific unit and integration suites impacted by the git diff.',
    developerImpact: 'Cuts local test execution times from 12 minutes to 14 seconds',
  },
  {
    step: '02',
    title: 'Parallel Matrix Execution',
    description: 'Distribute tests across cloud workers across Node.js versions, WebKit, Chromium, and Linux architectures.',
    developerImpact: 'Deterministic concurrency without database lock contention',
  },
  {
    step: '03',
    title: 'Intelligent Failure Triage',
    description: 'Surface clean diffs, terminal logs, and reproduction scripts for broken assertions in one click.',
    developerImpact: 'Eliminates 90% of time spent deciphering 1,000-line CI logs',
  },
  {
    step: '04',
    title: 'Regression Verification',
    description: 'Re-run only failed tests against the target branch before certifying clean merge readiness.',
    developerImpact: 'Zero flaky test false alarms blocking emergency hotfixes',
  },
  {
    step: '05',
    title: 'Release Gate Sign-Off',
    description: 'Validate coverage thresholds, zero critical vulnerabilities, and sign the container image with Cosign.',
    developerImpact: 'Confident continuous deployment straight to production clusters',
  },
];

export const ciIntegrations: CIIntegration[] = [
  { name: 'GitHub Actions', category: 'CI/CD Automation', status: 'Native Action', description: 'Real-time PR status checks, inline code annotations, and flaky test auto-tagging.' },
  { name: 'GitLab CI/CD', category: 'DevOps Pipeline', status: 'Native Runner', description: 'Merge request widget integration with JUnit XML test artifact ingestion.' },
  { name: 'Playwright', category: 'E2E Testing', status: 'Zero-Config Adapter', description: 'Trace viewer integration, video recording replay, and parallel sharding.' },
  { name: 'Vitest & Jest', category: 'Unit & Component', status: 'Native Reporter', description: 'Instant watch mode feedback with AST-level test dependency graphing.' },
  { name: 'CircleCI', category: 'Cloud CI', status: 'Verified Orb', description: 'Optimized test splitting based on historical execution run duration.' },
  { name: 'Datadog & Slack', category: 'Observability & Alerts', status: 'Webhook Fabric', description: 'Dispatch triage alerts to Slack channels with direct jump links to stack traces.' },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Developer Core',
    priceMonthly: '$29',
    period: '/ month',
    description: 'Essential test organization, failure inspection, and PR status checks for independent engineers and small squads.',
    features: [
      'Up to 5 active repositories',
      'Unified test-suite tree explorer',
      'Interactive failure diff & stack trace triage',
      'Basic test coverage visualization',
      'GitHub Actions & GitLab CI integration',
      'Community developer support',
    ],
    cta: 'Start 14-Day Free Trial',
    popular: false,
  },
  {
    name: 'Engineering Team',
    priceMonthly: '$119',
    period: '/ month',
    description: 'Comprehensive test analytics, flaky test quarantining, and parallel execution orchestration for scaling teams.',
    features: [
      'Unlimited repositories & test runs',
      'Automated flaky test detection & quarantining',
      'PR delta coverage gates & branch rules',
      'Playwright trace viewer integration',
      'Slack failure alert channel routing',
      'Historical test execution trends (90 days)',
      'Priority engineering support',
    ],
    cta: 'Explore TestForge Team',
    popular: true,
  },
  {
    name: 'Enterprise QA',
    priceMonthly: '$349',
    period: '/ month',
    description: 'Dedicated private test runners, custom compliance gates, and enterprise security governance for high-volume release pipelines.',
    features: [
      'Everything in Team, plus:',
      'Self-hosted test runner / VPC deployment',
      'Custom SLA & 99.99% webhook availability',
      'Enterprise SSO (SAML/Okta) & audit logging',
      'Dedicated developer productivity engineer',
      'Custom test framework adapter support',
      'Unlimited 1-year test run history retention',
    ],
    cta: 'Consult Enterprise Ops',
    popular: false,
  },
];

export const faqItems: FAQItem[] = [
  {
    question: 'How does TestForge capture and display test execution results?',
    answer: 'TestForge uses lightweight reporters for standard test frameworks (Vitest, Jest, Playwright, Cypress, PyTest). When tests execute in your local terminal or CI runner, structured JUnit/JSON telemetry is streamed directly to TestForge via an encrypted HTTPS webhook.',
  },
  {
    question: 'Does TestForge run my source code on third-party servers?',
    answer: 'No. Test execution occurs inside your existing local machine or secure CI runners (GitHub Actions, GitLab runners). TestForge only receives the structured test outcomes, execution timings, assertion diffs, and coverage percentages.',
  },
  {
    question: 'How does the simulated test runner in this demo work?',
    answer: 'The interactive demo provides an authentic frontend simulation of a test run cycle. When you click "Run sample tests", a finite 1.5-second sequence executes, stepping through pending, passed, and failed test assertions with realistic timings.',
  },
  {
    question: 'How does the Flaky Test Detection Engine identify intermittent failures?',
    answer: 'TestForge tracks test outcomes across multiple commits on the same branch. If a test passes on commit A, fails on commit B with identical code, and passes again upon retry, it is mathematically tagged as flaky and flagged for quarantine before it blocks main branch merges.',
  },
  {
    question: 'Can we enforce PR merge blocking based on test failure or coverage drop?',
    answer: 'Yes! TestForge connects directly to GitHub branch protection rules. You can configure gates such as "Require 0 test failures" and "Block merge if test coverage drops by more than 0.5%".',
  },
  {
    question: 'What test frameworks and programming languages are supported?',
    answer: 'TestForge supports TypeScript, JavaScript, Python, Go, Rust, and Java test frameworks via standard JUnit XML and custom reporters (Vitest, Jest, Playwright, Cypress, Mocha, PyTest, Go Test).',
  },
];
