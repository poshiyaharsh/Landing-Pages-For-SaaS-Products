import React from 'react';
import { FolderX, AlertCircle, FileSpreadsheet, Search, CheckCircle2, Sparkles, FileText, ArrowRight, Layers } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  return (
    <section className="py-20 bg-docu-bg border-b border-docu-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-docu-accent font-semibold">
            THE DOCUMENT CHALLENGE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-docu-text mt-3">
            Your information is valuable. <br className="hidden sm:inline" />
            Finding it shouldn't be difficult.
          </h2>
          <p className="text-base text-docu-secondary mt-4 leading-relaxed">
            Bring your documents together and let AI help you find the information that matters without losing hours in disconnected folders.
          </p>
        </div>

        {/* Split Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: Scattered Document Environment */}
          <div className="bg-white border border-rose-200/80 rounded-docu-xl p-6 sm:p-8 flex flex-col justify-between shadow-subtle relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-rose-400" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono uppercase font-semibold text-rose-600 flex items-center gap-1.5">
                  <FolderX className="w-4 h-4" /> Traditional Document Chaos
                </span>
                <span className="text-[11px] font-mono text-docu-muted">Manual Search Overhead</span>
              </div>

              <div className="space-y-4 mb-6">
                {/* Cluttered mock items */}
                <div className="p-3 bg-rose-50/40 border border-rose-100 rounded-docu text-xs space-y-1">
                  <div className="flex items-center justify-between text-rose-900 font-medium">
                    <span className="truncate">annual_report_final_v2_FINAL_revised.pdf</span>
                    <span className="text-[10px] text-rose-600 font-mono">Unindexed</span>
                  </div>
                  <p className="text-[11px] text-rose-700/80">
                    “Which version has the approved Q4 OPEX figure? Skimming 68 pages manually.”
                  </p>
                </div>

                <div className="p-3 bg-docu-subtle border border-docu-border rounded-docu text-xs space-y-1 opacity-80">
                  <div className="flex items-center justify-between text-docu-text font-medium">
                    <span className="truncate">Policy_Update_2025_DRAFT_copy(3).docx</span>
                    <span className="text-[10px] text-docu-muted font-mono">42 MB folder</span>
                  </div>
                  <p className="text-[11px] text-docu-secondary">
                    “Diffing 12 policy clauses against last year’s contract word-for-word.”
                  </p>
                </div>

                <div className="p-3 bg-docu-subtle border border-docu-border rounded-docu text-xs space-y-1 opacity-70">
                  <div className="flex items-center justify-between text-docu-text font-medium">
                    <span className="truncate">Finance_Ledger_Raw_Exports_Oct.xlsx</span>
                    <span className="text-[10px] text-docu-muted font-mono">No metadata</span>
                  </div>
                  <p className="text-[11px] text-docu-secondary">
                    “Re-transcribing table columns into slides for leadership reviews.”
                  </p>
                </div>
              </div>

              {/* Bulleted Pain Points */}
              <ul className="space-y-2.5 text-xs text-docu-secondary border-t border-docu-border/60 pt-5">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                  <span>Searching through lengthy PDFs with brittle Ctrl+F exact keyword matches</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                  <span>Losing critical compliance clauses across forgotten team folders</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                  <span>Spending hours manually comparing versions to identify what changed</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                  <span>Repeatedly answering the same questions that are already documented</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-docu-border/60 flex items-center justify-between text-xs text-rose-700 font-mono">
              <span>Avg. 14.5 hours wasted weekly per analyst</span>
              <AlertCircle className="w-4 h-4 text-rose-500" />
            </div>
          </div>

          {/* Right: Clean DocuMind Workspace */}
          <div className="bg-white border border-docu-accent/30 rounded-docu-xl p-6 sm:p-8 flex flex-col justify-between shadow-card relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-docu-accent" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono uppercase font-semibold text-docu-accent flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" /> The DocuMind Experience
                </span>
                <span className="text-[11px] font-mono text-docu-success font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Real-time Synthesis
                </span>
              </div>

              {/* Organized mock workspace */}
              <div className="space-y-4 mb-6">
                <div className="p-3 bg-docu-accent-soft/50 border border-docu-accent/20 rounded-docu text-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-docu-text flex items-center gap-1.5">
                      <Search className="w-3.5 h-3.5 text-docu-accent" />
                      Semantic Discovery
                    </span>
                    <span className="text-[10px] font-mono bg-white px-1.5 py-0.5 rounded text-docu-accent">
                      Sub-65ms
                    </span>
                  </div>
                  <p className="text-[11px] text-docu-secondary">
                    Natural query: “What were the Q4 operational savings findings?”
                  </p>
                  <div className="p-2 bg-white rounded border border-docu-border text-[11px] text-docu-text">
                    “$2.4M automation opportunity identified across procurement workflows.”
                    <span className="block text-[10px] text-docu-accent font-mono mt-1">
                      Source: Annual_Report_2026.pdf · Page 08
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-docu-subtle border border-docu-border rounded-docu text-xs space-y-1">
                  <div className="flex items-center justify-between text-docu-text font-medium">
                    <span className="flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-docu-accent" />
                      Visual Version Diffing
                    </span>
                    <span className="text-[10px] font-mono text-docu-success">2 Added · 2 Removed</span>
                  </div>
                  <p className="text-[11px] text-docu-secondary">
                    Side-by-side clause verification with colored diff highlights and risk assessment.
                  </p>
                </div>
              </div>

              {/* Bulleted Benefits */}
              <ul className="space-y-2.5 text-xs text-docu-secondary border-t border-docu-border/60 pt-5">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-docu-success shrink-0" />
                  <span>Ground every AI answer with verifiable coordinate citations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-docu-success shrink-0" />
                  <span>Compress 50-page reports into 6-part executive summaries in seconds</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-docu-success shrink-0" />
                  <span>Extract tabular figures and key attributes into structured data fields</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-docu-success shrink-0" />
                  <span>Unified workspace across PDF, DOCX, XLSX, and TXT collections</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-docu-border/60 flex items-center justify-between text-xs text-docu-accent font-mono font-medium">
              <span>96.4% retrieval accuracy benchmark</span>
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
