export type TestFilter = 'all' | 'failed' | 'passed' | 'skipped';

export interface TestCase {
  id: string;
  name: string;
  suiteId: string;
  durationMs: number;
  status: 'passed' | 'failed' | 'skipped';
  fileLocation: string;
  failure?: {
    errorName: string;
    expected: string;
    actual: string;
    stackTrace: string;
    diffSnippet: string;
  };
  tags: string[];
}

export interface TestSuite {
  id: string;
  name: string;
  category: 'Unit' | 'Integration' | 'E2E' | 'Contract' | 'Security';
  framework: string;
  testCount: number;
  passedCount: number;
  failedCount: number;
  skippedCount: number;
  coveragePct: number;
  durationSeconds: number;
}

export interface PipelineRun {
  runId: string;
  commitSha: string;
  branch: string;
  author: string;
  status: 'passed' | 'failed' | 'running';
  duration: string;
  testsPassed: number;
  testsFailed: number;
  flakyCount: number;
  timestamp: string;
}

export interface CoverageBreakdown {
  category: string;
  percentage: number;
  coveredLines: number;
  totalLines: number;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
  highlight: string;
}

export interface TestLifecycleStep {
  step: string;
  title: string;
  description: string;
  developerImpact: string;
}

export interface CIIntegration {
  name: string;
  category: string;
  status: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  priceMonthly: string;
  period: string;
  description: string;
  popular?: boolean;
  features: string[];
  cta: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
