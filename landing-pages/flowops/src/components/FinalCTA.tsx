import React from 'react';
import { Network, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface FinalCTAProps {
  onBuildWorkflow: () => void;
  onExploreCanvas: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onBuildWorkflow, onExploreCanvas }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] relative border-t border-slate-200 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-6">
          <Network className="w-3.5 h-3.5" />
          <span>Autonomous Business Operations</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Make repetitive work{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500">
            run itself.
          </span>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Connect your stack, eliminate manual handoffs, and give your teams more time for high-leverage growth.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onBuildWorkflow}
            className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Network className="w-4 h-4" />
            <span>Build your first workflow</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onExploreCanvas}
            className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-sm rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Explore canvas demo</span>
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-xs font-mono text-slate-500">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            SOC2 Type II Certified
          </span>
          <span className="text-slate-300">•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            99.99% Uptime Guarantee
          </span>
        </div>
      </div>
    </section>
  );
};
