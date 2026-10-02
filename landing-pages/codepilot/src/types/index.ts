export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface MetricItem {
  value: string;
  label: string;
  subtext?: string;
}

export interface FrictionItem {
  problem: string;
  details: string;
  category: string;
}

export interface FeatureItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  codeSnippet?: string;
  visualType: 'completion' | 'review' | 'debugging' | 'testing' | 'search' | 'shipping';
  badge: string;
}

export interface CommandItem {
  command: string;
  description: string;
  category: 'core' | 'git' | 'quality' | 'ai';
  sampleOutput: string;
  keybinding?: string;
}

export interface IntegrationItem {
  name: string;
  category: 'Version Control' | 'IDE' | 'Collaboration' | 'Infrastructure' | 'Database';
  description: string;
  status: 'Native' | 'Supported' | 'Verified';
  icon: string;
}

export interface TechItem {
  name: string;
  type: 'language' | 'framework';
  popularity: string;
  extension: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarText: string;
  verifiedMetric: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  priceMonthly: number;
  priceYearly: number;
  popular?: boolean;
  ctaText: string;
  features: string[];
  ctaVariant: 'primary' | 'secondary' | 'outline';
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}
