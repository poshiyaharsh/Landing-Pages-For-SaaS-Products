import React from 'react';
import { Rocket, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface FinalCTAProps {
  onStartBuilding: () => void;
  onSeeHowItWorks: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onStartBuilding, onSeeHowItWorks }) => {
  return (
    <section className="py-20 lg:py-28 bg-white relative border-t border-slate-200 overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-6">
          <Rocket className="w-3.5 h-3.5" />
          <span>Launch Acceleration</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Your next idea{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500">
            deserves to ship.
          </span>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Make the path from development to launch more organized, visible, and repeatable.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onStartBuilding}
            className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Rocket className="w-4 h-4" />
            <span>Start building</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onSeeHowItWorks}
            className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-sm rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>See how it works</span>
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-xs font-mono text-slate-500">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            100% Code Ownership
          </span>
          <span className="text-slate-300">•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Zero Vendor Lock-in
          </span>
        </div>
      </div>
    </section>
  );
};
