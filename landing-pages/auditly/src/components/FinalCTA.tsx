import React from 'react';
import { ArrowRight, ChevronRight, ShieldCheck, CheckCircle2, History } from 'lucide-react';

interface FinalCTAProps {
  onOpenDemo: () => void;
  onExplorePlatform: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenDemo, onExplorePlatform }) => {
  return (
    <section className="py-24 bg-[#142C4E] text-white relative overflow-hidden">
      {/* Background subtle mesh grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E3C68] border border-[#283955] text-slate-200 text-xs font-semibold tracking-wider font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#159B91]" />
            ORGANIZED GOVERNANCE WORKSPACE
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Make compliance a clearer process.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Bring controls, evidence, risks, and remediation together in one organized workspace. Replace chaotic spreadsheets with structured accountability.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-[#142C4E] bg-white hover:bg-slate-100 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4 text-[#3569D4]" />
            </button>

            <button
              onClick={onExplorePlatform}
              className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-white bg-[#1E3C68] hover:bg-[#284f88] border border-[#283955] rounded-lg transition-all flex items-center justify-center gap-2"
            >
              <span>Explore the Platform</span>
              <ChevronRight className="w-4 h-4 text-slate-300" />
            </button>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#159B91]" />
              Structured SOC 2 & ISO Baselines
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#3569D4]" />
              Continuous Evidence Tracking
            </span>
            <span className="flex items-center gap-1.5">
              <History className="w-4 h-4 text-[#159B91]" />
              Audit-Ready Chronological Records
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
