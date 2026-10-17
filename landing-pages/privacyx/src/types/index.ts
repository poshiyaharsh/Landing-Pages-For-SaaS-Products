export type RequestType = 'all' | 'dsar' | 'deletion' | 'opt_out' | 'portability';
export type RequestStatus = 'all' | 'pending_verification' | 'in_progress' | 'completed';

export interface PrivacyRequest {
  id: string;
  type: 'dsar' | 'deletion' | 'opt_out' | 'portability';
  typeLabel: string;
  requesterEmail: string;
  subjectName: string;
  status: 'pending_verification' | 'in_progress' | 'completed';
  submittedDate: string;
  dueDate: string;
  daysRemaining: number;
  dataCategories: string[];
  assignedTeam: string;
  notes: string;
}

export interface ConsentRecord {
  purpose: string;
  status: 'Opted-In' | 'Withdrawn' | 'Required';
  subjectCount: string;
  consentRate: string;
  lastUpdated: string;
}

export interface DataCategoryInventory {
  category: string;
  purposes: string[];
  systemsOfRecord: string[];
  retentionWindow: string;
  isSensitive: boolean;
}

export interface PolicyTask {
  id: string;
  title: string;
  framework: string;
  deadline: string;
  completed: boolean;
  owner: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
  highlight: string;
}

export interface PrivacyWorkflowStep {
  step: string;
  title: string;
  description: string;
  complianceControl: string;
}

export interface PrivacyPrinciple {
  title: string;
  description: string;
  operationalPractice: string;
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
