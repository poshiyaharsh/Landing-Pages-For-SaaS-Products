import React from 'react';
import { GitCompare, FileDiff, ArrowRight, ShieldCheck, Check, AlertCircle } from 'lucide-react';
import { SAMPLE_COMPARISON_DATA } from '../data/sampleData';

interface DocumentComparisonProps {
  onOpenComparisonModal: () => void;
}

export const DocumentComparison: React.FC<DocumentComparisonProps> = ({ onOpenComparisonModal }) => {
  const data = SAMPLE_COMPARISON_DATA;

  return (
    <section className="py-24 bg-white border-b border-docu-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-docu-accent font-semibold">
              VERSION DIFFING & AUDIT
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-docu-text mt-3">
              See what changed. Understand why it matters.
            </h2>
            <p className="text-base text-docu-secondary mt-3 leading-relaxed">
              Compare agreements, policies, proposals, and regulatory guidelines side by side. DocuMind highlights additions, deprecations, and value updates automatically.
            </p>
          </div>

          <button
            onClick={onOpenComparisonModal}
            className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2.5 bg-docu-text hover:bg-black text-white text-xs font-medium rounded-docu shadow-subtle transition-all"
          >
            <span>View Comparison Summary</span>
            <ArrowRight className="w-4 h-4 text-docu-muted" />
          </button>
        </div>

        {/* Comparison Showcase Container */}
        <div className="bg-docu-bg border border-docu-border rounded-docu-xl p-6 sm:p-8 shadow-card space-y-6">
          {/* Top Diff Legend Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-docu-border text-xs">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-docu-text flex items-center gap-1.5">
                <FileDiff className="w-4 h-4 text-docu-accent" />
                Live Version Comparison:
              </span>
              <span className="font-mono text-docu-secondary">{data.titleA}</span>
              <span className="text-docu-muted font-mono">→</span>
              <span className="font-mono text-docu-accent font-medium">{data.titleB}</span>
            </div>

            <div className="flex items-center gap-4 text-[11px] font-mono">
              <span className="flex items-center gap-1.5 text-docu-success">
                <span className="w-2.5 h-2.5 rounded bg-emerald-500 inline-block" />
                2 Additions
              </span>
              <span className="flex items-center gap-1.5 text-rose-600">
                <span className="w-2.5 h-2.5 rounded bg-rose-500 inline-block" />
                2 Deprecations
              </span>
              <span className="flex items-center gap-1.5 text-docu-warning">
                <span className="w-2.5 h-2.5 rounded bg-amber-500 inline-block" />
                2 Alterations
              </span>
            </div>
          </div>

          {/* Side-by-side comparison grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Version A Panel */}
            <div className="bg-white border border-docu-border rounded-docu-lg p-5 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-docu-border">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-docu-muted" />
                  <h4 className="text-xs font-bold text-docu-text">{data.titleA}</h4>
                </div>
                <span className="text-[10px] font-mono text-docu-muted">{data.versionA}</span>
              </div>

              <div className="space-y-3">
                {data.clausesA.slice(0, 3).map((clause) => (
                  <div
                    key={clause.id}
                    className={`p-3 rounded-docu text-xs leading-relaxed border ${
                      clause.status === 'removed'
                        ? 'bg-rose-50/50 border-rose-200 text-rose-950 line-through opacity-85'
                        : clause.status === 'modified'
                        ? 'bg-amber-50/40 border-amber-200 text-amber-950'
                        : 'bg-docu-subtle border-docu-border text-docu-secondary'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-[11px] font-mono">{clause.title}</span>
                      <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 rounded bg-white/70">
                        {clause.status}
                      </span>
                    </div>
                    <p>{clause.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Version B Panel */}
            <div className="bg-white border border-docu-accent/40 rounded-docu-lg p-5 space-y-4 shadow-subtle">
              <div className="flex items-center justify-between pb-2 border-b border-docu-border">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-docu-accent" />
                  <h4 className="text-xs font-bold text-docu-text">{data.titleB}</h4>
                </div>
                <span className="text-[10px] font-mono text-docu-accent font-semibold">
                  {data.versionB}
                </span>
              </div>

              <div className="space-y-3">
                {data.clausesB.slice(0, 3).map((clause) => (
                  <div
                    key={clause.id}
                    className={`p-3 rounded-docu text-xs leading-relaxed border ${
                      clause.status === 'added'
                        ? 'bg-emerald-50/60 border-emerald-200 text-emerald-950'
                        : clause.status === 'modified'
                        ? 'bg-amber-50/40 border-amber-200 text-amber-950 font-medium'
                        : 'bg-docu-subtle border-docu-border text-docu-secondary'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-[11px] font-mono">{clause.title}</span>
                      <span
                        className={`text-[10px] uppercase font-mono px-1.5 py-0.2 rounded font-semibold ${
                          clause.status === 'added'
                            ? 'bg-emerald-100 text-docu-success'
                            : 'bg-amber-100 text-docu-warning'
                        }`}
                      >
                        {clause.status}
                      </span>
                    </div>
                    {clause.annotation && (
                      <span className="text-[10px] font-mono text-docu-accent uppercase block mb-0.5">
                        Delta: {clause.annotation}
                      </span>
                    )}
                    <p>{clause.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Summary Bar */}
          <div className="p-4 bg-white rounded-docu border border-docu-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-docu-secondary">
              <ShieldCheck className="w-4 h-4 text-docu-accent shrink-0" />
              <span>
                <strong className="text-docu-text font-semibold">Audit Conclusion:</strong> Version 2.0 slashes retention from 36 to 12 months, enforces append-only event logging, and updates stipend limits.
              </span>
            </div>

            <button
              onClick={onOpenComparisonModal}
              className="text-xs text-docu-accent hover:underline font-semibold font-mono whitespace-nowrap self-end sm:self-auto"
            >
              Examine Full 10-Clause Audit →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
