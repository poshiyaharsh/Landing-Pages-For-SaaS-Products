import React from 'react';
import { ArrowRight, ShieldCheck, Users } from 'lucide-react';

interface FinalCTAProps {
  onScrollToDemo: () => void;
  onOpenModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onScrollToDemo, onOpenModal }) => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#0B0F19] border-t border-white/10">
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-violet-600/25 via-teal-600/15 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-semibold">
          <ShieldCheck className="w-4 h-4 text-teal-400" />
          <span>HUMAN-CENTERED TALENT REVOLUTION</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Better teams begin <br />
          <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-teal-300 bg-clip-text text-transparent">
            with better decisions.
          </span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
          Equip your hiring managers and interviewers with objective competency rubrics, transparent debrief tools, and explainable AI support today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenModal}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-teal-500 hover:opacity-95 text-white font-bold text-sm tracking-wide shadow-xl shadow-violet-500/25 transition-all flex items-center justify-center gap-2"
          >
            <span>Explore talent intelligence</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onScrollToDemo}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white border border-white/15 font-semibold text-sm transition-all flex items-center justify-center gap-2"
          >
            <Users className="w-4 h-4 text-violet-400" />
            <span>Launch hiring demo</span>
          </button>
        </div>

        <p className="text-xs text-slate-400 font-mono pt-4">
          14-day zero-risk trial • Full ATS sync • SOC2 & EEOC adverse impact compliant
        </p>
      </div>
    </section>
  );
};
