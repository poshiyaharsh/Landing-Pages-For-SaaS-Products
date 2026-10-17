import React, { useState } from 'react';
import { 
  XCircle, 
  CheckCircle2, 
  FileSpreadsheet, 
  AlertCircle, 
  FolderLock, 
  Users, 
  Clock, 
  ArrowRight,
  ShieldCheck,
  Search,
  Check
} from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  const [activeSide, setActiveSide] = useState<'problem' | 'solution'>('solution');

  const painPoints = [
    { title: 'Evidence stored across disconnected systems', desc: 'Screenshots buried in Slack threads, email chains, and local downloads.' },
    { title: 'Unclear control ownership', desc: 'No designated person accountable for reviewing access permissions or backup logs.' },
    { title: 'Manual audit preparation', desc: 'Weeks spent scrambling to gather historical artifacts before external auditor arrival.' },
    { title: 'Risks tracked in separate documents', desc: 'Outdated risk registers disconnected from engineering ticketing systems.' },
    { title: 'Missed remediation deadlines', desc: 'Critical vulnerabilities linger past SLA windows without notification.' },
    { title: 'Limited visibility across teams', desc: 'Security, Legal, and DevOps operate with siloed, conflicting status numbers.' },
  ];

  const auditlyBenefits = [
    { title: 'Unified compliance dashboard', desc: 'Single source of truth tracking overall posture and Trust Services Criteria.' },
    { title: 'Explicit control ownership', desc: 'Every requirement has an assigned owner with automated review cadences.' },
    { title: 'Continuous evidence collection', desc: 'Centralized repository with versioning, cryptographic hashes, and control tags.' },
    { title: 'Standardized 5×5 risk matrix', desc: 'Active scoring of likelihood and impact tied to live remediation tasks.' },
    { title: 'Automated remediation workflows', desc: 'Prioritized kanban board tracking overdue findings and owner SLAs.' },
    { title: 'Traceable internal audit logs', desc: 'Timestamped event IDs recording every status update and evidence submission.' },
  ];

  return (
    <section id="solutions" className="py-20 bg-[#F6F8FB] border-b border-[#DFE6EF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold text-[#3569D4] uppercase tracking-wider font-mono bg-[#EAF1FF] px-2.5 py-1 rounded">
            THE OPERATIONAL SHIFT
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#142033] mt-3 tracking-tight">
            Compliance shouldn't live in scattered spreadsheets.
          </h2>
          <p className="text-base text-[#64748B] mt-3 leading-relaxed">
            Bring compliance work into one structured system, with clear ownership, visible progress, and traceable activity.
          </p>
        </div>

        {/* Interactive Split Comparison Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: Scattered Spreadsheets (Pain) */}
          <div 
            onMouseEnter={() => setActiveSide('problem')}
            className={`rounded-2xl border transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between ${
              activeSide === 'problem'
                ? 'bg-white border-[#C74747]/40 shadow-card'
                : 'bg-white/80 border-[#DFE6EF] shadow-subtle'
            }`}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#DFE6EF]">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#FBEAEA] text-[#C74747] flex items-center justify-center">
                    <XCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#142033]">Fragmented Operations</h3>
                    <p className="text-xs text-[#64748B]">Traditional spreadsheet & folder sprawl</p>
                  </div>
                </div>
                <span className="text-xs font-mono font-medium text-[#C74747] bg-[#FBEAEA] px-2 py-0.5 rounded">
                  Chaotic
                </span>
              </div>

              {/* Spreadsheets Graphic Mockup */}
              <div className="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono space-y-2.5">
                <div className="flex items-center justify-between text-slate-500 pb-2 border-b border-slate-200">
                  <span className="flex items-center gap-1.5 font-sans font-semibold text-slate-700">
                    <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                    SOC2_Control_Tracker_v4_FINAL_final(2).xlsx
                  </span>
                  <span className="text-[10px] text-red-500 font-semibold">Outdated 43 days</span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-[11px] text-slate-600">
                  <div className="p-2 rounded bg-white border border-slate-200">
                    <div className="text-[10px] text-slate-400">Owner</div>
                    <div className="font-semibold text-red-600">Unassigned</div>
                  </div>
                  <div className="p-2 rounded bg-white border border-slate-200">
                    <div className="text-[10px] text-slate-400">Evidence Link</div>
                    <div className="truncate text-slate-400">Dropbox 404...</div>
                  </div>
                  <div className="p-2 rounded bg-white border border-slate-200">
                    <div className="text-[10px] text-slate-400">Review Date</div>
                    <div className="text-amber-700 font-semibold">Overdue</div>
                  </div>
                </div>

                <div className="p-2 rounded bg-amber-50 border border-amber-200 text-[11px] text-amber-800 flex items-center gap-2 font-sans">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Manual email inquiries required for 18 missing backup screenshots.</span>
                </div>
              </div>

              {/* Challenge bullet points */}
              <div className="mt-6 space-y-3">
                {painPoints.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#FBEAEA] text-[#C74747] flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[10px] font-bold">✕</span>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-[#142033]">{item.title}</h4>
                      <p className="text-[11px] text-[#64748B] mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#DFE6EF] text-xs text-[#64748B] italic">
              Result: High stress, wasted engineering hours, and surprise audit findings.
            </div>
          </div>

          {/* Right: Unified Auditly Workspace (Solution) */}
          <div 
            onMouseEnter={() => setActiveSide('solution')}
            className={`rounded-2xl border transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between ${
              activeSide === 'solution'
                ? 'bg-white border-[#3569D4] shadow-card ring-1 ring-[#3569D4]/20'
                : 'bg-white border-[#DFE6EF] shadow-subtle'
            }`}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#DFE6EF]">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#EAF1FF] text-[#3569D4] flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#142033]">Unified Auditly Workspace</h3>
                    <p className="text-xs text-[#64748B]">Structured, accountable compliance operations</p>
                  </div>
                </div>
                <span className="text-xs font-mono font-medium text-[#17865C] bg-[#E6F6F0] px-2 py-0.5 rounded">
                  Structured
                </span>
              </div>

              {/* Auditly Graphic Mockup */}
              <div className="mt-5 p-4 rounded-xl bg-[#F6F8FB] border border-[#DFE6EF] text-xs space-y-2.5">
                <div className="flex items-center justify-between pb-2 border-b border-[#DFE6EF]">
                  <span className="flex items-center gap-1.5 font-semibold text-[#142C4E]">
                    <ShieldCheck className="w-4 h-4 text-[#3569D4]" />
                    Auditly Control Registry & Evidence Pipeline
                  </span>
                  <span className="text-[10px] font-mono text-[#17865C] font-semibold bg-[#E6F6F0] px-1.5 py-0.5 rounded">
                    Continuous Sync
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-white border border-[#DFE6EF]">
                    <div className="text-[10px] text-[#64748B]">Assigned Owner</div>
                    <div className="font-semibold text-[#142033] truncate">Elena Rostova</div>
                  </div>
                  <div className="p-2 rounded bg-white border border-[#DFE6EF]">
                    <div className="text-[10px] text-[#64748B]">Linked Proof</div>
                    <div className="text-[#3569D4] font-mono font-semibold">2 Artifacts (PDF)</div>
                  </div>
                  <div className="p-2 rounded bg-white border border-[#DFE6EF]">
                    <div className="text-[10px] text-[#64748B]">Status</div>
                    <div className="text-[#17865C] font-semibold">Implemented</div>
                  </div>
                </div>

                <div className="p-2 rounded bg-[#EAF1FF] border border-[#3569D4]/20 text-[11px] text-[#142C4E] flex items-center justify-between">
                  <span>Audit Event: <strong className="font-mono">EVT-9042</strong> verified on immutable ledger.</span>
                  <span className="text-[#3569D4] font-semibold font-mono">11:04 AM</span>
                </div>
              </div>

              {/* Benefit bullet points */}
              <div className="mt-6 space-y-3">
                {auditlyBenefits.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#E6F6F0] text-[#17865C] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-[#142033]">{item.title}</h4>
                      <p className="text-[11px] text-[#64748B] mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#DFE6EF] text-xs text-[#17865C] font-medium flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#17865C]" />
              Clear accountability, predictable audit preparation, and proactive risk remediation.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
