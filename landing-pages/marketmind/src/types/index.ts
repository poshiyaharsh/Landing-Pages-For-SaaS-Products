export type TimeHorizon = '1D' | '1W' | '1M' | '1Y' | '5Y';
export type SectorFilter = 'all' | 'technology' | 'semiconductors' | 'energy' | 'macro' | 'crypto';

export interface AssetDatapoint {
  time: string;
  value: number;
}

export interface MarketAsset {
  symbol: string;
  name: string;
  sector: 'technology' | 'semiconductors' | 'energy' | 'macro' | 'crypto';
  price: string;
  changeValue: string;
  changePercent: string;
  isPositive: boolean;
  marketCap: string;
  volume24h: string;
  beta: string;
  series: AssetDatapoint[];
  thesisSummary: string;
}

export interface MacroIndicator {
  code: string;
  label: string;
  current: string;
  baseline: string;
  variance: string;
  status: 'neutral' | 'bullish' | 'caution';
}

export interface SyntheticEvent {
  id: string;
  time: string;
  headline: string;
  sector: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  impactAnalysis: string;
}

export interface SectorPerformanceItem {
  sector: string;
  change: string;
  isPositive: boolean;
  leaders: string[];
  weight: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
  highlight: string;
}

export interface ResearchWorkflowStep {
  step: string;
  title: string;
  description: string;
  telemetry: string;
}

export interface DataFeed {
  name: string;
  category: string;
  protocol: string;
  latency: string;
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
