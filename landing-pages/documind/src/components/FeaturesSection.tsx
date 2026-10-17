import React from 'react';
import { MessageSquareText, FileText, Search, GitCompare, TableProperties, FolderKanban, Sparkles, ArrowRight, Check, CheckCircle2 } from 'lucide-react';
import { DocumentItem } from '../types';

interface FeaturesSectionProps {
  onSelectDocument: (doc: DocumentItem, citationPassage?: string) => void;
  onOpenComparison: () => void;
  sampleDoc: DocumentItem;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  onSelectDocument,
  onOpenComparison,
  sampleDoc,
}) => {
  return (
    <section id="features" className="py-24 bg-white border-b border-docu-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-docu-accent font-semibold">
            PLATFORM CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-docu-text mt-3">
            Everything you need to understand your documents.
          </h2>
          <p className="text-base text-docu-secondary mt-4 leading-relaxed">
            Six specialized intelligence engines engineered to dismantle information silos, verify claims with coordinates, and organize institutional knowledge.
          </p>
        </div>

        {/* 6 Varied Feature Modules */}
        <div className="space-y-12">
          {/* Feature 01: Ask Your Documents (Heroic Wide Card) */}
          <div className="bg-docu-bg border border-docu-border rounded-docu-xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-docu-accent-soft text-docu-accent text-xs font-mono font-medium">
                <MessageSquareText className="w-3.5 h-3.5" />
                <span>Feature 01</span>
              </div>
              <h3 className="text-2xl font-bold text-docu-text">Ask Your Documents</h3>
              <p className="text-sm text-docu-secondary leading-relaxed">
                Ask natural-language questions and find answers strictly grounded in your uploaded documents. No hallucinated figures, no ungrounded extrapolations.
              </p>
              <ul className="space-y-2 text-xs text-docu-secondary pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-docu-accent" />
                  <span>Exact token coordinates link directly to page paragraphs</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-docu-accent" />
                  <span>Multi-file synthesis across entire collections simultaneously</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-7 bg-white border border-docu-border rounded-docu-lg p-5 shadow-subtle space-y-3 font-sans">
              <div className="text-[11px] font-mono text-docu-muted uppercase tracking-wider flex items-center justify-between pb-2 border-b border-docu-border">
                <span>Grounded Query Thread</span>
                <span className="text-docu-success flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Grounded in Annual_Report_2026.pdf
                </span>
              </div>

              {/* User question */}
              <div className="bg-docu-subtle p-3 rounded-docu text-xs text-docu-text font-medium flex items-center justify-between">
                <span>“What are the primary operational bottlenecks identified for FY2026?”</span>
                <span className="text-[10px] text-docu-muted font-mono">10:42 AM</span>
              </div>

              {/* AI Answer with coordinates */}
              <div className="p-3.5 bg-docu-surface border border-docu-border rounded-docu space-y-2 text-xs leading-relaxed">
                <p className="text-docu-text">
                  The primary bottleneck is identified as <strong className="font-semibold text-docu-text">manual document validation across procurement workflows</strong>, which currently introduces human transcription lag and consumes an estimated $2.4M annually.
                </p>

                <div className="pt-2 flex items-center justify-between border-t border-docu-border/60">
                  <button
                    onClick={() =>
                      onSelectDocument(
                        sampleDoc,
                        'The report identifies three key findings: rising operating costs, improved customer retention, and an opportunity to automate repetitive workflows.'
                      )
                    }
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-docu-accent-soft hover:bg-docu-accent/15 rounded text-[11px] font-mono text-docu-accent transition-colors"
                  >
                    <span>Source: Annual_Report.pdf · Page 08 · Section 3.2</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                  <span className="text-[10px] font-mono text-docu-muted">Score: 0.984</span>
                </div>
              </div>
            </div>
          </div>

          {/* Grid of Features 02 & 03 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Feature 02: Intelligent Summaries */}
            <div className="bg-docu-bg border border-docu-border rounded-docu-xl p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-docu-accent-soft text-docu-accent text-xs font-mono font-medium">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Feature 02</span>
                </div>
                <h3 className="text-xl font-bold text-docu-text">Intelligent Summaries</h3>
                <p className="text-sm text-docu-secondary leading-relaxed">
                  Turn lengthy reports into concise summaries, key takeaways, and actionable insights with structured sections: Overview, Numbers, Risks, and Actions.
                </p>

                {/* Visual: Executive Summary Breakdown */}
                <div className="bg-white border border-docu-border rounded-docu-lg p-4 space-y-3 shadow-subtle text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-docu-border">
                    <span className="font-semibold text-docu-text">Executive Briefing Card</span>
                    <span className="text-[10px] font-mono bg-emerald-50 text-docu-success px-2 py-0.5 rounded">
                      Scannable in 60s
                    </span>
                  </div>

                  <div className="p-2.5 bg-docu-subtle/70 rounded text-[11px] text-docu-secondary leading-relaxed">
                    <strong className="text-docu-text block mb-0.5 font-semibold">Executive Overview:</strong>
                    Operational evaluation reveals solid customer retention (96.4%) offset by 14.2% compute expenditure scaling.
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2 bg-docu-surface border border-docu-border rounded">
                      <span className="text-docu-muted block text-[10px]">Identified Risk</span>
                      <span className="font-medium text-docu-text">Cross-border residency</span>
                    </div>
                    <div className="p-2 bg-docu-surface border border-docu-border rounded">
                      <span className="text-docu-muted block text-[10px]">Action Recommended</span>
                      <span className="font-medium text-docu-text">Automate contract review</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 03: Semantic Document Search */}
            <div className="bg-docu-bg border border-docu-border rounded-docu-xl p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-docu-accent-soft text-docu-accent text-xs font-mono font-medium">
                  <Search className="w-3.5 h-3.5" />
                  <span>Feature 03</span>
                </div>
                <h3 className="text-xl font-bold text-docu-text">Semantic Document Search</h3>
                <p className="text-sm text-docu-secondary leading-relaxed">
                  Search by meaning, not just filenames or exact keywords. Find passages when you only remember the concept, intent, or numerical context.
                </p>

                {/* Visual: Search result with highlighted excerpt */}
                <div className="bg-white border border-docu-border rounded-docu-lg p-4 space-y-2.5 shadow-subtle text-xs">
                  <div className="flex items-center gap-2 p-2 bg-docu-subtle rounded border border-docu-border">
                    <Search className="w-3.5 h-3.5 text-docu-muted shrink-0" />
                    <span className="text-docu-text font-mono text-[11px]">
                      Query: “stipend for remote hardware and learning”
                    </span>
                  </div>

                  <div className="p-2.5 bg-docu-surface border border-docu-border rounded space-y-1 text-[11px]">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-docu-text">Employee_Handbook.pdf</span>
                      <span className="text-[10px] font-mono text-docu-accent">P. 07 · Sec. 4</span>
                    </div>
                    <p className="text-docu-secondary leading-snug">
                      “...Full-time personnel receive an annual stipend of <span className="bg-docu-accent-soft text-docu-accent font-semibold px-1 rounded">$1,800 for remote office ergonomics</span> and continuous learning...”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid of Features 04 & 05 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Feature 04: Document Comparison */}
            <div className="bg-docu-bg border border-docu-border rounded-docu-xl p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-docu-accent-soft text-docu-accent text-xs font-mono font-medium">
                  <GitCompare className="w-3.5 h-3.5" />
                  <span>Feature 04</span>
                </div>
                <h3 className="text-xl font-bold text-docu-text">Document Comparison</h3>
                <p className="text-sm text-docu-secondary leading-relaxed">
                  Compare reports, policies, proposals, and contracts to understand what changed. Visual side-by-side highlighting spots alterations instantly.
                </p>

                {/* Visual: Side-by-side diff preview */}
                <div className="bg-white border border-docu-border rounded-docu-lg p-4 shadow-subtle space-y-2.5 text-xs">
                  <div className="flex items-center justify-between text-[11px] font-mono border-b border-docu-border pb-1.5">
                    <span className="text-docu-muted">Policy_V1.pdf vs Policy_V2.pdf</span>
                    <button
                      onClick={onOpenComparison}
                      className="text-docu-accent hover:underline flex items-center gap-1"
                    >
                      <span>Full Diff</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2 bg-rose-50/60 border border-rose-100 rounded text-rose-950">
                      <span className="text-[10px] font-mono text-rose-600 block mb-0.5">- Removed in V2</span>
                      36-month mandatory storage retention period.
                    </div>
                    <div className="p-2 bg-emerald-50/60 border border-emerald-100 rounded text-emerald-950">
                      <span className="text-[10px] font-mono text-docu-success block mb-0.5">+ Added in V2</span>
                      Strict 12-month GDPR ephemeral purge.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 05: Structured Data Extraction */}
            <div className="bg-docu-bg border border-docu-border rounded-docu-xl p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-docu-accent-soft text-docu-accent text-xs font-mono font-medium">
                  <TableProperties className="w-3.5 h-3.5" />
                  <span>Feature 05</span>
                </div>
                <h3 className="text-xl font-bold text-docu-text">Structured Data Extraction</h3>
                <p className="text-sm text-docu-secondary leading-relaxed">
                  Organize critical information into clear fields and tables. Extract dates, amounts, entity names, and balance sheet metrics with confidence scores.
                </p>

                {/* Visual: Clean mini table */}
                <div className="bg-white border border-docu-border rounded-docu-lg p-3.5 shadow-subtle text-xs overflow-hidden">
                  <table className="w-full text-left text-[11px]">
                    <thead className="text-docu-muted font-mono uppercase text-[9px] border-b border-docu-border">
                      <tr>
                        <th className="pb-1.5">Extracted Entity</th>
                        <th className="pb-1.5">Normalized Value</th>
                        <th className="pb-1.5 text-right">Confidence</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-docu-border/60 font-mono">
                      <tr>
                        <td className="py-1.5 text-docu-secondary font-sans">Operating Net Income</td>
                        <td className="py-1.5 text-docu-text font-semibold">$34.82M</td>
                        <td className="py-1.5 text-right text-docu-success">99.1%</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 text-docu-secondary font-sans">Active Enterprise Seats</td>
                        <td className="py-1.5 text-docu-text font-semibold">28,450</td>
                        <td className="py-1.5 text-right text-docu-success">98.5%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 06: Organized Knowledge Workspace (Full-Width Card) */}
          <div className="bg-docu-bg border border-docu-border rounded-docu-xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-docu-accent-soft text-docu-accent text-xs font-mono font-medium">
                <FolderKanban className="w-3.5 h-3.5" />
                <span>Feature 06</span>
              </div>
              <h3 className="text-2xl font-bold text-docu-text">Organized Knowledge Workspace</h3>
              <p className="text-sm text-docu-secondary leading-relaxed">
                Keep your documents, conversations, and discoveries connected in one workspace. Build curated collections for teams, tag documents, and save synthesized answers.
              </p>
              <ul className="space-y-2 text-xs text-docu-secondary pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-docu-accent" />
                  <span>Custom collections: Financials, Legal & Policy, Executive Briefs</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-docu-accent" />
                  <span>Saved answers library for fast reference and cross-team sharing</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-7 bg-white border border-docu-border rounded-docu-lg p-5 shadow-subtle space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold text-docu-text pb-2 border-b border-docu-border">
                <span>Collections & Saved Knowledge</span>
                <span className="text-xs font-mono text-docu-muted">4 Active Groups</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                {['Financials (2)', 'Legal & Policy (2)', 'Executive Briefs (2)', 'Product & Tech (1)'].map(
                  (col) => (
                    <div
                      key={col}
                      className="p-2.5 rounded bg-docu-subtle/70 border border-docu-border hover:border-docu-accent/40 text-center transition-colors"
                    >
                      <span className="font-medium text-docu-text text-[11px] block truncate">{col}</span>
                    </div>
                  )
                )}
              </div>

              <div className="p-3 bg-docu-subtle/50 rounded-docu border border-docu-border flex items-center justify-between text-xs">
                <div>
                  <span className="font-semibold text-docu-text block">Saved Answer: Q4 OPEX Breakdown</span>
                  <span className="text-[11px] text-docu-secondary">Pinned by Operations Team · 2 citations</span>
                </div>
                <span className="text-[11px] font-mono text-docu-accent bg-white px-2 py-0.5 rounded border border-docu-border">
                  Saved
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
