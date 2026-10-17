import React, { useState } from 'react';
import { Layers, FileText, CheckCircle2, Copy, ArrowUpRight, TrendingUp, AlertTriangle, ArrowRight } from 'lucide-react';
import { DocumentItem } from '../types';
import { SAMPLE_DOCUMENTS } from '../data/sampleData';

interface SummaryShowcaseProps {
  onSelectDocument: (doc: DocumentItem) => void;
  onToast: (title: string, desc?: string, type?: 'success' | 'info' | 'warning' | 'purple') => void;
}

export const SummaryShowcase: React.FC<SummaryShowcaseProps> = ({ onSelectDocument, onToast }) => {
  const [selectedDocId, setSelectedDocId] = useState<string>('doc-1');
  const activeDoc = SAMPLE_DOCUMENTS.find((d) => d.id === selectedDocId) || SAMPLE_DOCUMENTS[0];

  const handleCopySummary = () => {
    const text = `# ${activeDoc.title} — Executive Summary\n\n${activeDoc.summary.executiveSummary}\n\n## Key Findings\n${activeDoc.summary.keyFindings.map((k) => `- ${k}`).join('\n')}\n\n## Recommended Actions\n${activeDoc.summary.recommendedActions.map((a) => `- ${a}`).join('\n')}`;
    navigator.clipboard.writeText(text);
    onToast('Summary Copied', 'Executive briefing copied in formatted markdown.', 'success');
  };

  return (
    <section className="py-24 bg-white border-b border-docu-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-docu-accent font-semibold">
              EXECUTIVE SYNTHESIS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-docu-text mt-3">
              From pages of information to a clear picture.
            </h2>
            <p className="text-base text-docu-secondary mt-3 leading-relaxed">
              DocuMind compresses 50-page complex filings into structured, scannable intelligence: Overview, Key Findings, Numbers, Decisions, Risks, and Recommended Actions.
            </p>
          </div>

          {/* Document Picker Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-docu-subtle rounded-docu border border-docu-border self-start md:self-auto overflow-x-auto">
            {SAMPLE_DOCUMENTS.slice(0, 3).map((doc) => (
              <button
                key={doc.id}
                onClick={() => setSelectedDocId(doc.id)}
                className={`px-3 py-1.5 rounded text-xs font-medium transition-colors whitespace-nowrap ${
                  selectedDocId === doc.id
                    ? 'bg-white text-docu-text shadow-subtle'
                    : 'text-docu-secondary hover:text-docu-text'
                }`}
              >
                {doc.title.split('.')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Split Layout: Original Document on Left, Structured Summary on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Sample Report View (col-span-5) */}
          <div className="lg:col-span-5 bg-docu-bg border border-docu-border rounded-docu-xl p-6 sm:p-7 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-docu-border">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-docu-accent" />
                  <span className="text-xs font-semibold text-docu-text">{activeDoc.title}</span>
                </div>
                <span className="text-[10px] font-mono text-docu-muted">
                  {activeDoc.pages} Pages · Original Source
                </span>
              </div>

              {/* Mimic a page of the report */}
              <div className="bg-white border border-docu-border rounded-docu p-6 shadow-subtle space-y-3 font-sans text-xs">
                <div className="text-[10px] font-mono uppercase tracking-wider text-docu-muted">
                  Page 01 · Primary Filing Excerpt
                </div>
                <h4 className="text-sm font-bold text-docu-text">
                  {activeDoc.pagesContent[0]?.heading || 'Executive Mandate'}
                </h4>
                <p className="text-docu-secondary leading-relaxed">
                  {activeDoc.pagesContent[0]?.content || activeDoc.excerpt}
                </p>

                {activeDoc.pagesContent[1] && (
                  <div className="mt-4 pt-4 border-t border-docu-border/60">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-docu-muted">
                      Page 08 · Analytical Review
                    </div>
                    <p className="text-docu-secondary leading-relaxed mt-1">
                      {activeDoc.pagesContent[1].content}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={() => onSelectDocument(activeDoc)}
              className="mt-4 flex items-center justify-center gap-1.5 py-2 text-xs text-docu-accent hover:text-docu-accent-hover font-medium border border-docu-accent/30 rounded bg-white hover:bg-docu-accent-soft transition-colors"
            >
              <span>Examine Original Full Text in Reader</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right Column: Organized Summary (col-span-7) */}
          <div className="lg:col-span-7 bg-white border border-docu-border rounded-docu-xl p-6 sm:p-8 shadow-card space-y-6">
            {/* Summary Top Action Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-docu-border">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase font-semibold text-docu-accent bg-docu-accent-soft px-2.5 py-0.5 rounded">
                  DocuMind Synthesized Brief
                </span>
                <span className="text-xs text-docu-muted font-mono">Confidence: 99.4%</span>
              </div>

              <button
                onClick={handleCopySummary}
                className="text-xs font-medium text-docu-secondary hover:text-docu-accent flex items-center gap-1 transition-colors"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Summary</span>
              </button>
            </div>

            {/* 1. Executive Summary */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-docu-muted font-semibold">
                Executive Summary
              </h4>
              <p className="text-sm font-medium text-docu-text leading-relaxed">
                “{activeDoc.summary.executiveSummary}”
              </p>
            </div>

            {/* 2. Important Numbers Metric Cards */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-docu-muted font-semibold">
                Important Numbers & KPIs
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {activeDoc.summary.importantNumbers.map((num, i) => (
                  <div key={i} className="p-3 bg-docu-subtle/70 rounded-docu border border-docu-border">
                    <span className="text-[11px] text-docu-secondary font-medium block">{num.label}</span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-lg font-bold text-docu-text">{num.value}</span>
                      {num.change && (
                        <span className="text-xs text-docu-success font-semibold font-mono">
                          {num.change}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Key Findings & Recommended Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-docu-bg rounded-docu border border-docu-border space-y-2.5">
                <h5 className="text-xs font-mono uppercase tracking-wider font-semibold text-docu-text flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-docu-accent" />
                  Key Findings
                </h5>
                <ul className="space-y-2 text-xs text-docu-secondary leading-relaxed">
                  {activeDoc.summary.keyFindings.map((finding, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-docu-accent mt-1.5 shrink-0" />
                      <span>{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-docu-bg rounded-docu border border-docu-border space-y-2.5">
                <h5 className="text-xs font-mono uppercase tracking-wider font-semibold text-docu-text flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-docu-success" />
                  Recommended Actions
                </h5>
                <ul className="space-y-2 text-xs text-docu-secondary leading-relaxed">
                  {activeDoc.summary.recommendedActions.map((action, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-docu-success mt-1.5 shrink-0" />
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
