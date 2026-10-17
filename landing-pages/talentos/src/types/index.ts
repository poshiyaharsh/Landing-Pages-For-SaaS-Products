export type CandidateStage = 'all' | 'screen' | 'technical' | 'structured' | 'offer';

export interface CandidateSkill {
  name: string;
  proficiency: number; // 0 - 100
  evidence: string;
}

export interface Candidate {
  id: string;
  name: string;
  initials: string;
  roleApplied: string;
  stage: 'screen' | 'technical' | 'structured' | 'offer';
  experienceYears: number;
  currentCompany: string;
  location: string;
  skills: CandidateSkill[];
  structuredScore: number; // 1 - 5 rubric
  reviewerName: string;
  reviewerRole: string;
  reviewerNotes: string;
  aiAssistance: {
    evidenceSummary: string;
    suggestedQuestions: string[];
    potentialStrengths: string[];
    verificationPoints: string[];
  };
}

export interface RoleProfile {
  id: string;
  title: string;
  department: string;
  openCount: number;
  location: string;
  requiredSkills: { name: string; weight: number }[];
  hiringManager: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
  tag: string;
}

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
  humanRole: string;
  aiSupport: string;
}

export interface TalentGrowthPath {
  domain: string;
  currentStrength: string;
  upskillOpportunity: string;
  internalProject: string;
  growthImpact: string;
}

export interface HRIntegration {
  name: string;
  category: string;
  status: string;
  description: string;
  syncLatency: string;
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
