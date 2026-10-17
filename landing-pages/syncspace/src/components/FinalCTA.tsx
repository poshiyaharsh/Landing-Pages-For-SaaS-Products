import React from 'react';
import { ArrowRight, ChevronRight, CheckCircle2, Sparkles, Users } from 'lucide-react';

interface FinalCTAProps {
  onStartFree: () => void;
  onExploreWorkspace: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onStartFree, onExploreWorkspace }) => {
  return (
    <section className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
      {/* Subtle spatial background gradient */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] bg-[radial-gradient(#818CF8_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-indigo-300 text-xs font-semibold tracking-wider font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            CONTINUOUS TEAM MOMENTUM
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Give your team's best work <br className="hidden sm:inline" />
            a place to happen.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Bring projects, knowledge, and collaboration together. Set up your team's shared workspace in less than two minutes.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onStartFree}
              className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-white bg-[#4F46E5] hover:bg-[#4338CA] rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <span>Create your workspace</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreWorkspace}
              className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <span>Explore the workspace</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
              Free 14-day Team trial
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-[#818CF8]" />
              Unlimited projects & docs
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#F59E0B]" />
              No credit card required
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
