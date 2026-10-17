import React from 'react';
import { ArrowRight, BarChart3, ShieldCheck } from 'lucide-react';

interface FinalCTAProps {
  onScrollToDemo: () => void;
  onOpenModal: (type: 'demo' | 'trial') => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onScrollToDemo, onOpenModal }) => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-slate-950 border-t border-slate-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-cyan-600/20 via-blue-600/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-800/40 text-cyan-400 text-xs font-mono">
          <ShieldCheck className="w-4 h-4" />
          <span>ZERO-RISK ARCHITECTURE EVALUATION</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          See the signal <br />
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
            behind every metric.
          </span>
        </h2>

        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
          Start exploring high-speed queries, unified cross-cloud metrics, and executive insight automation right inside your browser today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onScrollToDemo}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
          >
            <span>Explore the dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => onOpenModal('demo')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700/80 font-semibold text-sm transition-all flex items-center justify-center gap-2"
          >
            <BarChart3 className="w-4 h-4 text-cyan-400" />
            <span>Schedule Briefing</span>
          </button>
        </div>

        <p className="text-xs text-slate-400 font-mono pt-4">
          Free 14-day evaluation environment. Zero credit card or live database credentials required.
        </p>
      </div>
    </section>
  );
};
