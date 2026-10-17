export type CreatorPlatform = 'all' | 'youtube' | 'tiktok' | 'podcast' | 'newsletter' | 'instagram';
export type ContentStatus = 'draft' | 'scheduled' | 'published';

export interface ContentItem {
  id: string;
  title: string;
  platform: 'youtube' | 'tiktok' | 'podcast' | 'newsletter' | 'instagram';
  status: ContentStatus;
  scheduledDate: string;
  thumbnailGradient: string;
  viewsEstimate: string;
  sponsorName?: string;
  sponsorPayout?: string;
  caption: string;
  tags: string[];
}

export interface CreatorProfile {
  name: string;
  handle: string;
  avatarText: string;
  niche: string;
  totalFollowers: string;
  monthlyRevenue: string;
  monthlyGrowth: string;
  avgEngagement: string;
}

export interface BrandCampaign {
  id: string;
  brand: string;
  deliverable: string;
  payout: string;
  status: 'In Review' | 'Drafting' | 'Scheduled' | 'Completed';
  dueDate: string;
  tasks: { id: string; title: string; completed: boolean }[];
}

export interface AudienceGrowthPoint {
  month: string;
  youtube: number;
  tiktok: number;
  newsletter: number;
}

export interface CreatorCategory {
  category: string;
  headline: string;
  description: string;
  channels: string[];
  primaryMonetization: string;
  sampleWorkflow: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
  highlight: string;
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
