import { 
  ModelOption, 
  PromptVariant, 
  ExperimentHistoryItem, 
  FeatureData, 
  UseCaseItem, 
  PricingPlan, 
  FAQItem 
} from '../types';

export const AVAILABLE_MODELS: ModelOption[] = [
  { id: 'gpt-4o', name: 'GPT-4o (Omni)', provider: 'OpenAI', contextWindow: '128k tokens', latencyAvg: '480ms', costTier: '$$' },
  { id: 'claude-3-5-sonnet', name: 'Claude 3.5 Sonnet', provider: 'Anthropic', contextWindow: '200k tokens', latencyAvg: '510ms', costTier: '$$' },
  { id: 'llama-3-1-70b', name: 'Llama 3.1 70B', provider: 'Meta', contextWindow: '128k tokens', latencyAvg: '340ms', costTier: '$' },
  { id: 'mistral-large-2', name: 'Mistral Large 2', provider: 'Mistral', contextWindow: '128k tokens', latencyAvg: '420ms', costTier: '$$' },
];

export interface HeroPromptVariant {
  id: string;
  version: string;
  name: string;
  score: number;
  promptText: string;
  sampleOutput: string;
  rubrics: {
    clarity: number;
    adherence: number;
    structure: number;
  };
}

export const SAMPLE_PROMPT_VARIANTS: HeroPromptVariant[] = [
  {
    id: 'v1',
    version: 'v1',
    name: 'v1: Raw Prompt',
    score: 82,
    promptText: `Summarize the support ticket into three actionable bullet points:
Ticket: User encounters 504 gateway timeout when exporting 50k rows in billing dashboard.`,
    sampleOutput: `• The customer is getting a 504 gateway timeout on large billing exports.
• They need help getting their 50k rows exported.
• Recommend checking database timeouts and reporting back.`,
    rubrics: {
      clarity: 82,
      adherence: 80,
      structure: 84,
    },
  },
  {
    id: 'v2',
    version: 'v2',
    name: 'v2: Structured Few-Shot (Optimized)',
    score: 97,
    promptText: `Role: Senior Triage Engineer
Instruction: Synthesize the customer issue into 3 prioritized, technical remediation points.
Format:
1. [Root Cause Analysis]
2. [Immediate Customer Mitigation]
3. [Infrastructure Resolution]

Ticket: User encounters 504 gateway timeout when exporting 50k rows in billing dashboard.`,
    sampleOutput: `1. [Root Cause Analysis]: Synchronous query exceeds 30s reverse-proxy ceiling on unindexed billing records.
2. [Immediate Customer Mitigation]: Provide chunked date-range export filter or execute async CSV export email job.
3. [Infrastructure Resolution]: Migrate export endpoint to background worker queue with presigned S3 download link.`,
    rubrics: {
      clarity: 98,
      adherence: 97,
      structure: 96,
    },
  },
  {
    id: 'v3',
    version: 'v3',
    name: 'v3: JSON Schema Guardrails',
    score: 94,
    promptText: `Extract root cause and remediation into validated JSON schema:
{ "root_cause": string, "priority": "P1"|"P2"|"P3", "mitigation_steps": string[] }`,
    sampleOutput: `{\n  "root_cause": "N+1 query during unindexed ledger aggregation",\n  "priority": "P2",\n  "mitigation_steps": ["Switch to background export worker", "Increase proxy idle timeout"]\n}`,
    rubrics: {
      clarity: 92,
      adherence: 99,
      structure: 91,
    },
  },
];

export interface HeroHistoryItem {
  id: string;
  name: string;
  accuracy: number;
  runsCount: number;
  timestamp: string;
}

export const EXPERIMENT_HISTORY: HeroHistoryItem[] = [
  {
    id: 'exp-1',
    name: 'Ticket Triage Synthesizer',
    accuracy: 97,
    runsCount: 3,
    timestamp: '12m ago',
  },
  {
    id: 'exp-2',
    name: 'Invoice JSON Entity Extraction',
    accuracy: 99,
    runsCount: 5,
    timestamp: '1h ago',
  },
  {
    id: 'exp-3',
    name: 'Sentiment & Risk Classifier',
    accuracy: 94,
    runsCount: 4,
    timestamp: '3h ago',
  },
];

export interface EvalMetricItem {
  id: string;
  name: string;
  score: number;
  benchmark: string;
  description: string;
}

export const SAMPLE_EVAL_METRICS: EvalMetricItem[] = [
  {
    id: 'clarity',
    name: 'Clarity & Conciseness',
    score: 94,
    benchmark: '+14% vs baseline',
    description: 'Measures reading grade level, lack of filler phrases, and direct answers without verbosity.',
  },
  {
    id: 'adherence',
    name: 'Instruction Adherence',
    score: 97,
    benchmark: '+19% vs baseline',
    description: 'Deterministic verification that all required sections, constraints, and negative constraints are obeyed.',
  },
  {
    id: 'consistency',
    name: 'Output Consistency',
    score: 96,
    benchmark: '+11% vs baseline',
    description: 'Variance analysis across repeated iterations to confirm stability across temperature shifts.',
  },
  {
    id: 'relevance',
    name: 'Semantic Relevance',
    score: 95,
    benchmark: '+8% vs baseline',
    description: 'Embedding cosine similarity and factual grounding against source context documents.',
  },
];

export interface PromptLabFeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  highlight: string;
}

export const PROMPTLAB_FEATURES: PromptLabFeatureItem[] = [
  {
    id: 'versioning',
    icon: 'GitBranch',
    title: 'Prompt Versioning',
    description: 'Track, branch, and inspect every prompt revision with visual diffs, semantic version tags, and instant rollback capability.',
    highlight: 'Git-style visual diffs',
  },
  {
    id: 'variants',
    icon: 'Sliders',
    title: 'Variant Testing',
    description: 'Evaluate multiple formulations against identical test inputs in parallel to isolate prompt sensitivity and prompt drift.',
    highlight: 'Parallel multi-variant runs',
  },
  {
    id: 'comparison',
    icon: 'Cpu',
    title: 'Model Comparison',
    description: 'Benchmark outputs across GPT-4o, Claude 3.5 Sonnet, Llama 3.1, and Mistral with normalized latency and cost curves.',
    highlight: 'Cross-provider benchmarking',
  },
  {
    id: 'rubrics',
    icon: 'CheckSquare',
    title: 'Evaluation Rubrics',
    description: 'Automate quality scoring using custom assertions for clarity, instruction adherence, regex matching, and JSON validity.',
    highlight: 'Automated quantitative scoring',
  },
  {
    id: 'history',
    icon: 'History',
    title: 'Experiment History',
    description: 'Revisit past test runs, compare prompt performance curves over time, and catch regressions before pushing to production.',
    highlight: 'Comprehensive audit telemetry',
  },
  {
    id: 'templates',
    icon: 'FileCode',
    title: 'Reusable Templates',
    description: 'Jumpstart experiments with verified system prompt structures for RAG, classification, summarization, and autonomous agents.',
    highlight: 'Pre-tested prompt architectures',
  },
];

export interface WorkflowStepItem {
  stepNumber: string;
  title: string;
  description: string;
  codeSnippet: string;
}

export const WORKFLOW_STEPS: WorkflowStepItem[] = [
  {
    stepNumber: '01',
    title: 'Write a baseline prompt',
    description: 'Define your initial system role, dynamic variables (such as {{product}} and {{audience}}), and target task requirements.',
    codeSnippet: 'system: "You are a senior triage engineer for {{product}} targeting {{audience}}..."',
  },
  {
    stepNumber: '02',
    title: 'Create controlled variations',
    description: 'Formulate structured variations altering temperature, few-shot exemplars, or output schemas into distinct v1, v2, and v3 branches.',
    codeSnippet: 'variant_branch("v2", temperature=0.2, few_shot_examples=2, schema="markdown")',
  },
  {
    stepNumber: '03',
    title: 'Run tests against sample inputs',
    description: 'Execute variants simultaneously across selected models with deterministic mock data or live test suite assertions.',
    codeSnippet: 'batch_runner.execute(variants=["v1", "v2"], dataset="tickets_eval_25.json")',
  },
  {
    stepNumber: '04',
    title: 'Compare results and refine',
    description: 'Inspect side-by-side diffs, automated evaluation rubric scores, and export the winning prompt version directly to code.',
    codeSnippet: 'evaluator.compare_scores(rubrics=["clarity", "adherence"]) -> Winner: v2 (+15%)',
  },
];

export interface PromptLabUseCase {
  id: string;
  title: string;
  description: string;
  examplePrompt: string;
}

export const PROMPTLAB_USE_CASES: PromptLabUseCase[] = [
  {
    id: 'ai-app-dev',
    title: 'AI App Development',
    description: 'Reliable prompt backends for production applications with strict schema enforcement.',
    examplePrompt: `Extract entities from user query and return strict JSON schema:
{
  "intent": "account_upgrade" | "bug_report" | "billing_inquiry",
  "urgency": "low" | "medium" | "critical",
  "entities": { "product_id": string, "customer_id": string }
}`,
  },
  {
    id: 'customer-support',
    title: 'Customer Support Automation',
    description: 'High-adherence agent responses that respect company policy without leaking internal instructions.',
    examplePrompt: `Act as Tier-2 Support Specialist.
Policy: Do not authorize refunds above $150 without manager review.
Input: Customer requests refund for $120 due to billing duplicate.
Response: Empathize, confirm transaction ID, and process refund using template A-4.`,
  },
  {
    id: 'content-generation',
    title: 'Content Generation',
    description: 'Consistent brand voice across high-volume technical assets, changelogs, and documentation.',
    examplePrompt: `Rewrite git commit log into a concise, developer-friendly changelog highlight:
- Add connection pooling to postgres adapter
- Fix race condition on refresh token expiration
Tone: Direct, energetic, clear.`,
  },
  {
    id: 'info-extraction',
    title: 'Information Extraction',
    description: 'Zero-loss data parsing from unstructured documents, receipts, contracts, and PDFs.',
    examplePrompt: `Extract invoice number, total amount, VAT, and vendor name from arbitrary OCR text.
Output: Strict Key-Value pairs with confidence score per extracted field.`,
  },
  {
    id: 'research',
    title: 'Research & Benchmarking',
    description: 'Empirical comparison of frontier and open-weights models across reasoning tasks.',
    examplePrompt: `Solve algorithmic scheduling problem with step-by-step chain-of-thought verification.
Score each reasoning step for logical consistency before stating final schedule.`,
  },
  {
    id: 'structured-output',
    title: 'Structured Output Generation',
    description: 'Deterministic ASTs, SQL queries, and tool calling payloads without syntax breaks.',
    examplePrompt: `Generate parameterized PostgreSQL query for weekly user retention cohorts.
Constraints: Must use window functions, avoid table scans on events_ledger, and output valid SQL only.`,
  },
];

export interface PromptLabIntegration {
  id: string;
  category: string;
  name: string;
  description: string;
  status: string;
}

export const PROMPTLAB_INTEGRATIONS: PromptLabIntegration[] = [
  {
    id: 'openai',
    category: 'Model Provider',
    name: 'OpenAI API (GPT-4o / o1)',
    description: 'Direct BYOK integration for GPT-4o, GPT-4o mini, and o1 reasoning models with latency tracking.',
    status: 'Example workflow',
  },
  {
    id: 'anthropic',
    category: 'Model Provider',
    name: 'Anthropic Claude 3.5',
    description: 'Benchmark against Claude 3.5 Sonnet and Haiku with custom system prompt caching.',
    status: 'Example workflow',
  },
  {
    id: 'open-weights',
    category: 'Open Weights Engine',
    name: 'Meta Llama 3.1 & Mistral',
    description: 'Connect self-hosted vLLM endpoints or managed inference via Together AI and Groq.',
    status: 'Example workflow',
  },
  {
    id: 'langchain',
    category: 'Framework',
    name: 'LangChain & LangSmith',
    description: 'Sync prompt versions directly into production LCEL chains and export prompt registries.',
    status: 'Planned integration',
  },
  {
    id: 'llamaindex',
    category: 'RAG Pipeline',
    name: 'LlamaIndex Synthesizer',
    description: 'Evaluate prompt performance against indexed vector nodes and retrieval chunks.',
    status: 'Planned integration',
  },
  {
    id: 'ci-cd',
    category: 'CI/CD Pipeline',
    name: 'GitHub Actions Prompt CI',
    description: 'Run automated regression test suites on every pull request touching prompt templates.',
    status: 'Planned integration',
  },
];

export interface PromptLabPricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export const PROMPTLAB_PRICING: PromptLabPricingTier[] = [
  {
    id: 'starter',
    name: 'Starter Lab',
    price: '0',
    period: 'forever free',
    description: 'Ideal for indie developers and builders experimenting with baseline prompts.',
    features: [
      'Interactive prompt playground',
      'Up to 3 prompt variants per test',
      'Local deterministic simulations',
      'Basic model evaluation rubrics',
      '7-day experiment history',
      'Export prompt snippets as Python/JS',
    ],
    cta: 'Start in the Lab',
    popular: false,
  },
  {
    id: 'pro',
    name: 'Pro Lab',
    price: '29',
    period: '/ month',
    description: 'Advanced experimentation, multi-model benchmarking, and automated evaluation rubrics.',
    features: [
      'Unlimited prompt versions & variants',
      'Benchmarking across 8+ LLM models',
      'Custom evaluation assertions & rubrics',
      'Automated synthetic test generation',
      'Full experiment history & regression diffs',
      'API access & prompt registry export',
      'Custom variable datasets (CSV upload)',
    ],
    cta: 'Open Pro Lab',
    popular: true,
  },
  {
    id: 'team',
    name: 'Team Studio',
    price: '79',
    period: '/ month',
    description: 'Collaborative prompt governance, shared team libraries, and CI/CD webhooks.',
    features: [
      'Everything in Pro, plus:',
      'Team prompt repository & review workflow',
      'Role-based permissions & audit log',
      'CI/CD prompt evaluation webhooks',
      'Dedicated API rate limits & self-hosted runners',
      'Priority support & onboarding session',
    ],
    cta: 'Initialize Team Lab',
    popular: false,
  },
];

export interface PromptLabFAQItem {
  id: string;
  question: string;
  answer: string;
}

export const PROMPTLAB_FAQS: PromptLabFAQItem[] = [
  {
    id: 'faq-1',
    question: 'How does PromptLab evaluate prompt variations?',
    answer: 'PromptLab runs your prompt variations side-by-side with identical input variables across selected models. It analyzes responses using automated rubrics measuring Clarity, Instruction Adherence, Output Consistency, and Relevance, giving you quantitative benchmarks instead of subjective guesswork.',
  },
  {
    id: 'faq-2',
    question: 'Do I need my own LLM API keys to use the lab?',
    answer: 'For this interactive prototype, PromptLab includes realistic deterministic simulations that allow you to explore prompt formatting, variable substitution, and comparison workflows immediately. In production, you connect your own provider API keys (OpenAI, Anthropic, or open-source endpoints) securely.',
  },
  {
    id: 'faq-3',
    question: 'How is prompt privacy and proprietary IP protected?',
    answer: 'In our production architecture, prompts and test datasets are encrypted in transit and at rest. PromptLab operates under a strict zero-retention policy and never uses your prompts, variables, or evaluation outputs to train public foundational models.',
  },
  {
    id: 'faq-4',
    question: 'Can I export winning prompts directly into our codebase?',
    answer: 'Yes. Once an experiment reveals a winning prompt variant, you can copy it or export it as a configured Python, TypeScript, or JSON snippet ready for LangChain, LlamaIndex, or native SDK integration.',
  },
  {
    id: 'faq-5',
    question: 'Can we define custom evaluation rubrics for our domain?',
    answer: 'Yes. Beyond standard clarity and adherence metrics, you can configure domain-specific rules such as strict JSON schema validation, PII redaction checks, forbidden word filters, or target tone guidelines.',
  },
  {
    id: 'faq-6',
    question: 'How does prompt versioning work across teams?',
    answer: 'PromptLab provides Git-like versioning (v1, v2, v3, etc.) with visual diff views. You can branch experiments, tag stable releases for production, and inspect the exact prompt version that was active during any historical test run.',
  },
];
