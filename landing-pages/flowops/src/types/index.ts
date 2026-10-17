export type NodeType = 'trigger' | 'action' | 'condition' | 'delay';

export interface WorkflowNode {
  id: string;
  type: NodeType;
  title: string;
  subtitle: string;
  icon: string;
  status?: 'idle' | 'running' | 'success' | 'failed';
  enabled: boolean;
  config: Record<string, string>;
}

export interface WorkflowTemplate {
  id: string;
  name: string;
  category: string;
  description: string;
  nodesCount: number;
  triggerName: string;
  samplePath: string[];
}

export interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  highlight: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
