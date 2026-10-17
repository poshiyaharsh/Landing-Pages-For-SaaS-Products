export type DateRange = '7D' | '30D' | '90D' | 'YTD' | '1Y';
export type CustomerSegment = 'all' | 'enterprise' | 'midmarket' | 'smb';
export type MetricType = 'arr' | 'nrr' | 'cac' | 'ltv';

export interface KPICard {
  id: string;
  label: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
  timeframe: string;
}

export interface RevenuePoint {
  month: string;
  revenue: number;
  target: number;
}

export interface FunnelStage {
  stage: string;
  count: number;
  conversion: string;
}

export interface ActivityItem {
  id: string;
  time: string;
  action: string;
  actor: string;
}

export interface SegmentDataset {
  kpis: KPICard[];
  revenueTrend: RevenuePoint[];
  funnel: FunnelStage[];
  insightAnnotation: {
    title: string;
    body: string;
    confidence: string;
  };
  recentActivity: ActivityItem[];
}

export interface MetricRow {
  metric: string;
  current: string;
  target: string;
  variance: string;
  status: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
  tag: string;
}

export interface DataStoryStep {
  step: string;
  icon: string;
  title: string;
  description: string;
  highlight: string;
}

export interface TeamUseCase {
  role: string;
  headline: string;
  description: string;
  metrics: string[];
  sampleReport: string;
}

export interface DataConnector {
  name: string;
  category: string;
  status: string;
  description: string;
  latency: string;
}

export interface PricingPlan {
  name: string;
  priceMonthly: string;
  description: string;
  popular?: boolean;
  features: string[];
  cta: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
