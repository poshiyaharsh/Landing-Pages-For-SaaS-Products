import React from 'react';
import { ArrowRight, Terminal, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

interface FinalCTAProps {
  onOpenDemo: () => void;
  onExplore: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenDemo, onExplore }) => {
  return (
    <section className="py-24 relative overflow-hidden border-t border-emerald-950/40">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-zinc-950 to-black pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-700/50 text-emerald-300 text-xs font-mono font-medium tracking-wide mb-6">
          <Terminal className="w-3.5 h-3.5 text-emerald-400" />
          READY TO ELEVATE YOUR SOFTWARE QUALITY
        </div>

        <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight max-w-3xl mx-auto leading-tight">
          Catch the problems before your users do.
        </h2>

        <p className="mt-6 text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Stop guessing why CI failed. Equip your development team with instant test diagnostics, automated flaky quarantine, and forensic test traces.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onExplore}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-semibold text-sm transition-all duration-200 shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2 group"
          >
            <span>Explore TestForge</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 font-mono text-sm transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Zap className="w-4 h-4 text-emerald-400" />
            <span>Run the Demo Suite</span>
          </button>
        </div>

        {/* Feature badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Zero configuration setup</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>SOC2 Type II & GDPR compliant</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>OpenTelemetry native format</span>
          </div>
        </div>
      </div>
    </section>
  );
};
