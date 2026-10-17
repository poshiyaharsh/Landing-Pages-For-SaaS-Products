import React from 'react';
import { ArrowRight, Terminal, CheckCircle2, ShieldCheck, Zap, Code2 } from 'lucide-react';

interface FinalCTAProps {
  onOpenWorkspaceModal: () => void;
  onScrollToExplorer: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenWorkspaceModal, onScrollToExplorer }) => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#020617] border-t border-slate-800 font-mono">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 via-slate-950 to-black pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/60 text-cyan-300 text-xs tracking-wide mb-6">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          START BUILDING CONNECTED SYSTEMS
        </div>

        <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight max-w-3xl mx-auto leading-tight">
          Give every integration a clearer path.
        </h2>

        <p className="mt-6 text-zinc-400 font-sans text-lg max-w-2xl mx-auto leading-relaxed">
          Centralize your API catalog, simulate endpoints before deployment, eliminate breaking changes, and empower developers with interactive documentation.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenWorkspaceModal}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-black font-semibold text-sm transition-all duration-200 shadow-xl shadow-cyan-950/50 flex items-center justify-center gap-2 group"
          >
            <span>Explore the API workspace</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onScrollToExplorer}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-zinc-200 text-sm transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span>Interactive Endpoint Explorer</span>
          </button>
        </div>

        {/* Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>Zero configuration CLI</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>SOC2 Type II &amp; ISO 27001</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>42 Edge Points of Presence</span>
          </div>
        </div>
      </div>
    </section>
  );
};
