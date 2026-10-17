import React from 'react';
import { Terminal, Sparkles, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';

interface FinalCTAProps {
  onOpenLab: () => void;
  onExplorePlayground: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenLab, onExplorePlayground }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#080C16] relative border-t border-slate-800 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-6">
          <Terminal className="w-3.5 h-3.5" />
          <span>Continuous Prompt Optimization</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Stop guessing.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">
            Start experimenting.
          </span>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
          Make prompt improvement a structured part of your AI development workflow.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenLab}
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-bold text-xs font-mono uppercase tracking-wider rounded-xl shadow-xl shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Terminal className="w-4 h-4" />
            <span>Open the lab</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onExplorePlayground}
            className="w-full sm:w-auto px-7 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-mono text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Explore the playground</span>
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-xs font-mono text-slate-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            Zero prompt data retention
          </span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center gap-1.5">
            <Cpu className="w-4 h-4 text-cyan-400" />
            Deterministic benchmark sandbox
          </span>
        </div>
      </div>
    </section>
  );
};
