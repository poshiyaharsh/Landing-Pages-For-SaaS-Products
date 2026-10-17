export interface ProjectConfig {
  projectName: string;
  framework: string;
  repoConnected: boolean;
  repoName: string;
  checklist: {
    id: string;
    label: string;
    category: 'auth' | 'database' | 'billing' | 'analytics' | 'deploy';
    checked: boolean;
  }[];
}

export interface WorkflowStage {
  id: string;
  name: string;
  status: 'idle' | 'running' | 'completed' | 'failed';
  duration?: string;
  details: string;
}

export interface ShipFastFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
  highlight: string;
}

export interface LaunchStage {
  stageNumber: string;
  title: string;
  tagline: string;
  description: string;
  terminalSnippet: string;
}

export interface EcosystemTool {
  name: string;
  category: string;
  description: string;
  badge: string;
}

export interface DevUseCase {
  id: string;
  title: string;
  persona: string;
  description: string;
  stackExample: string;
  impactMetric: string;
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
