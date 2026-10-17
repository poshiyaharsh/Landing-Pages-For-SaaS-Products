export type WorkspaceView = 'overview' | 'board' | 'docs' | 'activity';

export type TaskColumnId = 'backlog' | 'in_progress' | 'review' | 'done';

export interface Assignee {
  name: string;
  initials: string;
  bg: string;
  role?: string;
  active?: boolean;
}

export interface TaskItem {
  id: string;
  title: string;
  column: TaskColumnId;
  priority: 'Urgent' | 'High' | 'Medium';
  assignee: Assignee;
  tag: string;
  commentsCount: number;
  dueDate: string;
}

export interface WorkspaceChannel {
  id: string;
  name: string;
  category: 'workspace' | 'channel' | 'doc';
  unreadCount?: number;
}

export interface DocumentSnippet {
  id: string;
  title: string;
  author: string;
  authorInitials: string;
  updatedAt: string;
  readTime: string;
  content: string;
  tags: string[];
}

export interface ActivityEvent {
  id: string;
  user: Assignee;
  action: string;
  target: string;
  timeFormatted: string;
  detail?: string;
}

export interface UseCaseData {
  id: string;
  role: string;
  headline: string;
  description: string;
  tags: string[];
  sampleProject: string;
  activeView: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  priceMonthly: number;
  priceAnnual: number;
  description: string;
  badge?: string;
  highlighted?: boolean;
  features: string[];
  ctaText: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
