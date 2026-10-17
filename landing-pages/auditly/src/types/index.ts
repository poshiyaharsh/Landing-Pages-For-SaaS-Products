export type ControlStatus = 'Implemented' | 'In Review' | 'Needs Attention' | 'Not Started';

export type ControlCategory = 
  | 'Security' 
  | 'Availability' 
  | 'Confidentiality' 
  | 'Processing Integrity' 
  | 'Privacy';

export interface ControlItem {
  id: string; // e.g., 'AC-04'
  title: string;
  category: ControlCategory;
  description: string;
  owner: string;
  status: ControlStatus;
  linkedEvidence: string[];
  lastReviewed: string;
  nextReview: string;
  framework: string; // 'SOC 2', 'ISO 27001', etc.
  guidance?: string;
}

export type RiskLevel = 'Low' | 'Moderate' | 'High' | 'Critical';
export type RiskStatus = 'Active' | 'Mitigated' | 'Accepted' | 'Under Review';

export interface RiskItem {
  id: string; // e.g., 'RSK-104'
  name: string;
  category: string;
  likelihood: number; // 1 to 5
  impact: number;     // 1 to 5
  riskLevel: RiskLevel;
  owner: string;
  status: RiskStatus;
  reviewDate: string;
  description: string;
  mitigationPlan: string;
}

export type EvidenceReviewStatus = 'Approved' | 'Pending Review' | 'Expiring Soon';

export interface EvidenceItem {
  id: string; // e.g., 'EVD-301'
  title: string; // e.g., 'Access_Review_Q3.pdf'
  fileType: 'pdf' | 'docx' | 'xlsx' | 'json';
  fileSize: string;
  linkedControlId: string;
  linkedControlTitle: string;
  owner: string;
  uploadDate: string;
  reviewStatus: EvidenceReviewStatus;
  expirationDate?: string;
  summary: string;
  version: string;
}

export type AuditActionType = 'status_update' | 'evidence_added' | 'owner_assigned' | 'review_completed' | 'report_generated';

export interface AuditEvent {
  id: string; // e.g., 'EVT-9042'
  timestamp: string;
  timeFormatted: string;
  user: string;
  userEmail: string;
  role: string;
  action: string;
  actionType: AuditActionType;
  resource: string;
  details: string;
}

export type TaskPriority = 'Critical' | 'High' | 'Medium' | 'Low';
export type TaskColumn = 'todo' | 'in_progress' | 'completed';

export interface RemediationTask {
  id: string; // e.g., 'TSK-501'
  title: string;
  priority: TaskPriority;
  owner: string;
  dueDate: string;
  isOverdue: boolean;
  linkedControlId: string;
  linkedControlName: string;
  status: TaskColumn;
  notes?: string;
}

export type UserRole = 'Administrator' | 'Compliance Manager' | 'Auditor' | 'Control Owner' | 'Viewer';

export interface TeamMember {
  id: string;
  name: string;
  role: UserRole;
  email: string;
  assignedControls: number;
  pendingTasks: number;
  lastActivity: string;
  department: string;
}

export interface ComplianceFramework {
  id: string;
  code: string;
  name: string;
  version: string;
  description: string;
  totalControls: number;
  implemented: number;
  inReview: number;
  needsAttention: number;
  notStarted: number;
  overallScore: number; // percentage
  status: 'In Progress' | 'Audit Ready' | 'Scheduled';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  priceMonthly: number;
  priceAnnual: number;
  description: string;
  features: string[];
  ctaText: string;
  badge?: string;
  highlighted?: boolean;
}
