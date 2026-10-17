export interface ModelOption {
  id: string;
  name: string;
  provider: 'OpenAI' | 'Anthropic' | 'Meta' | 'Mistral';
  contextWindow: string;
  latencyAvg: string;
  costTier: string;
}

export interface EvaluationScores {
  clarity: number; // 0-100
  adherence: number; // 0-100
  consistency: number; // 0-100
  relevance: number; // 0-100
  overallScore: number;
}

export interface PromptVariant {
  id: string;
  version: string; // e.g. 'v1', 'v2', 'v3'
  label: string;
  promptTemplate: string;
  model: string;
  temperature: number;
  output?: string;
  executionTime?: string;
  tokenCount?: number;
  scores?: EvaluationScores;
  status: 'idle' | 'running' | 'completed';
}

export interface ExperimentHistoryItem {
  id: string;
  timestamp: string;
  promptTitle: string;
  baselineVersion: string;
  variantVersion: string;
  winningVariant: string;
  accuracyDelta: string;
  latencyAvg: string;
}

export interface FeatureData {
  id: string;
  number: string;
  title: string;
  description: string;
  badge: string;
  miniSnippet: string;
}

export interface UseCaseItem {
  id: string;
  category: string;
  headline: string;
  description: string;
  samplePrompt: string;
  metrics: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  priceMonthly: number;
  priceAnnual: number;
  description: string;
  features: string[];
  ctaText: string;
  badge?: string;
  highlighted?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
