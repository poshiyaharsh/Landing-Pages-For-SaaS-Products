import React from 'react';
import { ArrowRight, Terminal, ShieldCheck } from 'lucide-react';

interface FinalCTAProps {
  onScrollToDemo: () => void;
  onOpenModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onScrollToDemo, onOpenModal }) => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#080C14] border-t border-white/10 font-mono">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-amber-600/20 via-yellow-600/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-[#0E1626] border border-amber-500/30 text-amber-400 text-xs">
          <ShieldCheck className="w-4 h-4" />
          <span>INSTITUTIONAL MARKET WORKSPACE</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Make the market <br />
          <span className="bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 bg-clip-text text-transparent">
            easier to understand.
          </span>
        </h2>

        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-sans">
          Eliminate fragmented trading tabs, delayed economic releases, and disorganized analyst notes with one unified financial workstation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenModal}
            className="w-full sm:w-auto px-8 py-4 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs tracking-wider uppercase shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
          >
            <span>Explore market intelligence</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onScrollToDemo}
            className="w-full sm:w-auto px-8 py-4 rounded bg-[#0E1626] hover:bg-[#152038] text-white border border-white/15 text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2"
          >
            <Terminal className="w-4 h-4 text-amber-400" />
            <span>Launch Terminal Sandbox</span>
          </button>
        </div>

        <p className="text-[11px] text-slate-500 pt-4 font-sans">
          Illustrative market dataset demo • SOC2 Type II compliant architecture • Zero live financial risk
        </p>
      </div>
    </section>
  );
};
