export interface TranscriptTurn {
  id: string;
  speaker: string;
  timestamp: string;
  text: string;
  confidence: number;
  sentiment?: 'positive' | 'neutral' | 'negative';
  keywords?: string[];
}

export interface AudioSample {
  id: string;
  title: string;
  duration: string;
  language: string;
  category: string;
  transcript: TranscriptTurn[];
  summary: {
    overview: string;
    keyTakeaways: string[];
    decisions: string[];
    actionItems: string[];
    openQuestions: string[];
  };
}

export interface VoiceAgentNode {
  id: string;
  type: 'voice-input' | 'transcription' | 'intent' | 'ai-response' | 'voice-output' | 'branch' | 'end';
  label: string;
  title: string;
  description: string;
  config: {
    key: string;
    value: string;
  }[];
  active?: boolean;
}

export interface IntegrationItem {
  id: string;
  name: string;
  category: 'Communication' | 'CRM & Sales' | 'Support' | 'Automation' | 'Storage & Cloud' | 'Developer';
  description: string;
  status: 'Available' | 'Ready' | 'Planned';
  badge?: string;
}

export interface UseCaseItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  metrics: string;
  highlights: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
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
  company: string;
  metric: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface VoicePreset {
  id: string;
  name: string;
  gender: 'Female' | 'Male' | 'Neutral';
  style: 'Professional' | 'Conversational' | 'Calm' | 'Energetic';
  language: string;
  accent: string;
  sampleText: string;
}
