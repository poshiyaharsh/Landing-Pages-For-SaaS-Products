import React from 'react';
import { BarChart3, TrendingUp, FileText, CheckCircle2, Clock, Search, BookmarkCheck, Database } from 'lucide-react';

export const InsightsDashboard: React.FC = () => {
  const stats = [
    { label: 'Total Ingested Documents', value: '142', sub: '+18 this week', isPositive: true },
    { label: 'Vector Coordinate Chunks', value: '3,840', sub: '99.4% precision', isPositive: true },
    { label: 'Verified Citations Generated', value: '1,290', sub: 'Zero hallucinations reported', isPositive: true },
    { label: 'Saved Knowledge Answers', value: '384', sub: 'Used across 6 teams', isPositive: true },
  ];

  const formatBreakdown = [
    { format: 'PDF Documents', percent: 52, count: '74 files', color: 'bg-rose-500' },
    { format: 'Word (.docx)', percent: 28, count: '40 files', color: 'bg-blue-500' },
    { format: 'Excel (.xlsx)', percent: 15, count: '21 files', color: 'bg-emerald-500' },
    { format: 'Plain Text (.txt)', percent: 5, count: '7 files', color: 'bg-amber-500' },
  ];

  const recentActivity = [
    { doc: 'Annual_Report_2026.pdf', action: 'Vector Index Rebuilt', time: '12m ago', status: 'Optimal' },
    { doc: 'Policy_V2.pdf', action: 'Version Diff Audit Complete', time: '45m ago', status: 'Verified' },
    { doc: 'Project_Proposal.docx', action: 'Executive Summary Exported', time: '2h ago', status: 'Success' },
    { doc: 'Financial_Overview.xlsx', action: 'Tabular Entities Extracted', time: '4h ago', status: 'Extracted' },
  ];

  const frequentSearches = [
    '“procurement workflow automation savings”',
    '“remote employee equipment stipend limit”',
    '“retention rate benchmark FY2026”',
    '“GDPR data retention policy changes”',
  ];

  return (
    <section className="py-24 bg-docu-bg border-b border-docu-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-docu-accent font-semibold">
            WORKSPACE ANALYTICS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-docu-text mt-3">
            Turn your document library into useful knowledge.
          </h2>
          <p className="text-base text-docu-secondary mt-4 leading-relaxed">
            Gain immediate visibility into ingestion health, document format distributions, citation accuracy metrics, and popular team inquiries.
          </p>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white border border-docu-border rounded-docu p-5 shadow-subtle space-y-2"
            >
              <span className="text-xs font-mono text-docu-secondary block">{s.label}</span>
              <div className="text-3xl font-bold text-docu-text">{s.value}</div>
              <div className="flex items-center gap-1.5 text-xs text-docu-success font-medium font-mono">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>{s.sub}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Dashboard Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Format Breakdown Visual (col-span-5) */}
          <div className="lg:col-span-5 bg-white border border-docu-border rounded-docu-xl p-6 shadow-subtle space-y-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-docu-border">
                <h4 className="text-sm font-semibold text-docu-text flex items-center gap-2">
                  <Database className="w-4 h-4 text-docu-accent" />
                  Document Format Breakdown
                </h4>
                <span className="text-xs font-mono text-docu-muted">142 Ingested</span>
              </div>

              {/* Segmented Bar */}
              <div className="h-3 w-full bg-docu-subtle rounded-full overflow-hidden flex my-5">
                {formatBreakdown.map((item) => (
                  <div
                    key={item.format}
                    className={`${item.color} h-full transition-all`}
                    style={{ width: `${item.percent}%` }}
                    title={`${item.format}: ${item.percent}%`}
                  />
                ))}
              </div>

              {/* Legend List */}
              <div className="space-y-3">
                {formatBreakdown.map((item) => (
                  <div key={item.format} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
                      <span className="text-docu-text font-medium">{item.format}</span>
                    </div>
                    <div className="flex items-center gap-3 font-mono">
                      <span className="text-docu-secondary">{item.count}</span>
                      <span className="font-semibold text-docu-text w-10 text-right">
                        {item.percent}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 bg-docu-subtle/80 rounded-docu border border-docu-border text-xs text-docu-secondary flex items-center justify-between">
              <span>All formats vectorized with sub-token layout anchors.</span>
              <CheckCircle2 className="w-4 h-4 text-docu-success shrink-0 ml-2" />
            </div>
          </div>

          {/* Activity Feed & Frequent Searches (col-span-7) */}
          <div className="lg:col-span-7 bg-white border border-docu-border rounded-docu-xl p-6 shadow-subtle space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-docu-border">
              <h4 className="text-sm font-semibold text-docu-text flex items-center gap-2">
                <Clock className="w-4 h-4 text-docu-accent" />
                Live Processing & Ingestion Activity
              </h4>
              <span className="text-xs font-mono text-docu-success">● Engine Online</span>
            </div>

            <div className="space-y-2.5">
              {recentActivity.map((act, i) => (
                <div
                  key={i}
                  className="p-3 bg-docu-bg rounded-docu border border-docu-border flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <FileText className="w-4 h-4 text-docu-accent shrink-0" />
                    <div className="min-w-0">
                      <span className="font-semibold text-docu-text block truncate">{act.doc}</span>
                      <span className="text-[11px] text-docu-secondary">{act.action}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 font-mono text-[11px] shrink-0">
                    <span className="text-docu-muted">{act.time}</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-50 text-docu-success font-medium">
                      {act.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Frequent Searches Pill Shelf */}
            <div className="pt-2 border-t border-docu-border">
              <span className="text-[11px] font-mono uppercase tracking-wider text-docu-muted block mb-2">
                Frequently Queried Concepts (Team-wide):
              </span>
              <div className="flex flex-wrap gap-2 text-xs">
                {frequentSearches.map((s, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-docu-subtle border border-docu-border rounded text-docu-secondary font-mono text-[11px]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footnote */}
        <p className="text-[11px] text-docu-muted text-center mt-6 font-mono">
          Demonstration analytics snapshot · Mapped to local sample workspace telemetry.
        </p>
      </div>
    </section>
  );
};
