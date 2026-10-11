export type AssetCategory = 'All' | 'Logos' | 'Photography' | 'Templates' | 'Documents' | 'Icons';

export interface BrandAsset {
  id: string;
  name: string;
  category: 'Logos' | 'Photography' | 'Templates' | 'Documents' | 'Icons';
  format: 'SVG' | 'PNG' | 'FIG' | 'PDF' | 'JPG';
  size: string;
  updatedDate: string;
  isFavorite: boolean;
  version: string;
  dimensions?: string;
  colorHex?: string;
  previewImage?: string;
  aspect?: string;
  description: string;
}

export interface BrandKitIdentity {
  id: string;
  name: string;
  category: string;
  description: string;
  tagline: string;
  featuredVisual: string;
  visualDirection: string;
  palette: {
    name: string;
    hex: string;
    role: string;
  }[];
  typography: {
    role: string;
    family: string;
    sample: string;
  }[];
  assetsCount: number;
  guidelinesCount: number;
  templatesCount: number;
}

export interface BrandGuidelineSection {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  keyRule: string;
  specs: {
    label: string;
    value: string;
  }[];
  dos: string[];
  donts: string[];
}

export interface TemplateItem {
  id: string;
  title: string;
  category: 'Social Media' | 'Presentations' | 'Marketing' | 'Business Documents' | 'Campaigns' | 'Digital Advertising';
  format: string;
  dimensions: string;
  aspectRatio: string;
  description: string;
  colorAccent: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: 'Owner' | 'Brand Director' | 'Lead Designer' | 'Marketing Lead' | 'Staff Contributor' | 'External Agency';
  avatarInitials: string;
  email: string;
  accessLevel: 'Full Admin' | 'Brand Editor' | 'Reviewer' | 'View Only';
  activeStatus: 'Active Now' | 'Active 2h ago' | 'Active yesterday';
}

export interface ActivityEvent {
  id: string;
  type: 'update' | 'approval' | 'member' | 'template';
  text: string;
  detail: string;
  user: string;
  timestamp: string;
  tag: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  priceMonthly: number;
  priceAnnual: number;
  description: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  brand: string;
  avatarSeed: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
