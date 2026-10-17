export type DocumentType = 'pdf' | 'docx' | 'xlsx' | 'txt';

export interface DocumentCitation {
  id: string;
  docId: string;
  docTitle: string;
  section: string;
  page: number;
  excerpt: string;
}

export interface DocumentSummary {
  executiveSummary: string;
  keyFindings: string[];
  importantNumbers: Array<{ label: string; value: string; change?: string }>;
  decisions: string[];
  risks: string[];
  recommendedActions: string[];
}

export interface DocumentPage {
  pageNumber: number;
  heading: string;
  content: string;
  highlightPassage?: string;
}

export interface DocumentItem {
  id: string;
  title: string;
  type: DocumentType;
  fileSize: string;
  lastModified: string;
  pages: number;
  collection: string;
  status: 'indexed' | 'processing' | 'ready';
  excerpt: string;
  tags: string[];
  summary: DocumentSummary;
  pagesContent: DocumentPage[];
  extractedData?: Array<{ key: string; value: string; confidence: string }>;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  citations?: DocumentCitation[];
  saved?: boolean;
}

export interface ComparisonClause {
  id: string;
  title: string;
  text: string;
  status: 'unchanged' | 'added' | 'removed' | 'modified';
  annotation?: string;
}

export interface DocumentComparisonData {
  titleA: string;
  versionA: string;
  titleB: string;
  versionB: string;
  clausesA: ComparisonClause[];
  clausesB: ComparisonClause[];
  summary: {
    additions: number;
    removals: number;
    modifications: number;
    keyTakeaway: string;
    impactLevel: 'Low' | 'Medium' | 'High';
  };
}

export interface MetricCard {
  label: string;
  value: string;
  subtext: string;
  change?: string;
  isPositive?: boolean;
}

export interface ToastNotification {
  id: string;
  title: string;
  description?: string;
  type?: 'success' | 'info' | 'warning' | 'purple';
}
