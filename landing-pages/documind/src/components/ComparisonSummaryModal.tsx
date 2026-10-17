import React, { useState } from 'react';
import { X, CheckCircle, AlertTriangle, FileDiff, ArrowRight, ShieldAlert } from 'lucide-react';
import { SAMPLE_COMPARISON_DATA } from '../data/sampleData';

interface ComparisonSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onToast?: (title: string, desc?: string, type?: 'success' | 'info' | 'warning' | 'purple') => void;
}

export const ComparisonSummaryModal: React.FC<ComparisonSummaryModalProps> = ({
  isOpen,
  onClose,
  onToast,
}) => {
  const [filter, setFilter] = useState<'all' | 'added' | 'removed' | 'modified'>('all');
  const data = SAMPLE_COMPARISON_DATA;

  if (!isOpen) return null;

  const handleExportDiff = () => {
    navigator.clipboard.writeText(
      `DocuMind Comparison Audit: ${data.titleA} (${data.versionA}) vs ${data.titleB} (${data.versionB})\nSummary: ${data.summary.keyTakeaway}\nAdditions: ${data.summary.additions} | Removals: ${data.summary.removals} | Modifications: ${data.summary.modifications}`
    );
    onToast?.('Audit Copied', 'Comparison summary and clause diff exported to clipboard.', 'success');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-docu-text/40 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-docu-surface border border-docu-border rounded-docu-lg shadow-modal overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-docu-border bg-docu-subtle/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-white border border-docu-border flex items-center justify-center text-docu-accent shrink-0">
              <FileDiff className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-docu-text">
                Document Version Comparison Audit
              </h3>
              <div className="flex items-center gap-2 text-xs text-docu-secondary mt-0.5">
                <span className="font-medium text-docu-text">{data.titleA}</span>
                <ArrowRight className="w-3 h-3 text-docu-muted" />
                <span className="font-medium text-docu-accent">{data.titleB}</span>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-docu-muted hover:text-docu-text rounded-md hover:bg-docu-subtle transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Executive Impact Cards */}
        <div className="p-6 border-b border-docu-border bg-white space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            <div className="p-3.5 bg-emerald-50/60 border border-emerald-100 rounded-docu">
              <span className="text-[11px] font-mono uppercase tracking-wider text-docu-success font-semibold block">
                + Additions
              </span>
              <span className="text-2xl font-bold text-docu-success mt-0.5 block">
                {data.summary.additions} Clauses
              </span>
              <span className="text-[11px] text-emerald-700/80 mt-1 block">GDPR & cryptographic logs</span>
            </div>

            <div className="p-3.5 bg-rose-50/60 border border-rose-100 rounded-docu">
              <span className="text-[11px] font-mono uppercase tracking-wider text-rose-600 font-semibold block">
                - Removals
              </span>
              <span className="text-2xl font-bold text-rose-600 mt-0.5 block">
                {data.summary.removals} Clauses
              </span>
              <span className="text-[11px] text-rose-700/80 mt-1 block">Deprecated paper audits</span>
            </div>

            <div className="p-3.5 bg-amber-50/60 border border-amber-100 rounded-docu">
              <span className="text-[11px] font-mono uppercase tracking-wider text-docu-warning font-semibold block">
                ~ Alterations
              </span>
              <span className="text-2xl font-bold text-docu-warning mt-0.5 block">
                {data.summary.modifications} Clauses
              </span>
              <span className="text-[11px] text-amber-700/80 mt-1 block">Cadence & stipend updates</span>
            </div>

            <div className="p-3.5 bg-docu-subtle/80 border border-docu-border rounded-docu">
              <span className="text-[11px] font-mono uppercase tracking-wider text-docu-secondary font-semibold block">
                Impact Rating
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <ShieldAlert className="w-5 h-5 text-docu-accent" />
                <span className="text-lg font-bold text-docu-text">{data.summary.impactLevel} Priority</span>
              </div>
              <span className="text-[11px] text-docu-muted mt-1 block">Immediate legal alignment</span>
            </div>
          </div>

          <div className="p-3.5 bg-docu-accent-soft/60 border border-docu-accent/20 rounded-docu text-xs text-docu-text leading-relaxed">
            <span className="font-semibold text-docu-accent uppercase tracking-wider font-mono mr-2">
              Executive Summary:
            </span>
            {data.summary.keyTakeaway}
          </div>
        </div>

        {/* Filter controls */}
        <div className="flex items-center justify-between px-6 py-2.5 border-b border-docu-border bg-docu-subtle/30 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="text-docu-muted font-mono mr-1">Filter Clauses:</span>
            {(['all', 'added', 'removed', 'modified'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setFilter(mode)}
                className={`px-2.5 py-1 rounded text-xs capitalize font-medium transition-colors ${
                  filter === mode
                    ? 'bg-docu-text text-white'
                    : 'bg-white border border-docu-border text-docu-secondary hover:text-docu-text'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>

          <button
            onClick={handleExportDiff}
            className="text-xs text-docu-accent hover:underline font-medium"
          >
            Copy Diff Audit
          </button>
        </div>

        {/* Clauses List */}
        <div className="flex-1 overflow-y-auto p-6 bg-docu-bg space-y-4">
          {data.clausesB
            .filter((c) => {
              if (filter === 'all') return true;
              return c.status === filter;
            })
            .map((clause) => {
              const prevClause = data.clausesA.find(
                (a) => a.title.split('—')[0].trim() === clause.title.split('—')[0].trim()
              );

              return (
                <div
                  key={clause.id}
                  className="bg-white border border-docu-border rounded-docu p-4 shadow-subtle space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-docu-text">{clause.title}</span>
                    <span
                      className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded font-medium ${
                        clause.status === 'added'
                          ? 'bg-emerald-50 text-docu-success border border-emerald-200'
                          : clause.status === 'removed'
                          ? 'bg-rose-50 text-rose-600 border border-rose-200'
                          : clause.status === 'modified'
                          ? 'bg-amber-50 text-docu-warning border border-amber-200'
                          : 'bg-docu-subtle text-docu-muted'
                      }`}
                    >
                      {clause.status}
                    </span>
                  </div>

                  {prevClause && clause.status === 'modified' && (
                    <div className="p-2.5 rounded bg-rose-50/50 border border-rose-100 text-xs text-rose-900 line-through">
                      <span className="font-mono text-[10px] text-rose-500 uppercase block mb-0.5">
                        Previous in {data.titleA}:
                      </span>
                      {prevClause.text}
                    </div>
                  )}

                  <div
                    className={`p-2.5 rounded text-xs leading-relaxed ${
                      clause.status === 'added'
                        ? 'bg-emerald-50/60 border border-emerald-100 text-emerald-950'
                        : clause.status === 'modified'
                        ? 'bg-amber-50/50 border border-amber-100 text-amber-950 font-medium'
                        : 'bg-docu-subtle text-docu-secondary'
                    }`}
                  >
                    {clause.annotation && (
                      <span className="font-mono text-[10px] text-docu-accent font-semibold uppercase block mb-1">
                        Delta Note: {clause.annotation}
                      </span>
                    )}
                    {clause.text}
                  </div>
                </div>
              );
            })}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-docu-border bg-white flex items-center justify-between text-xs text-docu-muted">
          <span>Demonstration diff comparison · Mapped to static Policy sample coordinates</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-docu-text text-white hover:bg-black rounded-docu font-medium transition-colors"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};
