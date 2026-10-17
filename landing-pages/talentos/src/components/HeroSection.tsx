import React from 'react';
import { ArrowRight, Users, CheckCircle2, ShieldCheck, HeartHandshake, Sparkles, Layers } from 'lucide-react';

interface HeroSectionProps {
  onScrollToDemo: () => void;
  onOpenModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToDemo, onOpenModal }) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-violet-600/20 via-indigo-600/15 to-teal-600/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-teal-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-semibold uppercase tracking-wider shadow-inner">
            <HeartHandshake className="w-3.5 h-3.5 text-violet-400" />
            <span>BETTER HIRING STARTS WITH PEOPLE</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Build teams around <br />
            <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-teal-300 bg-clip-text text-transparent">
              potential.
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            Bring candidate information, skills, interviews, and hiring collaboration together to help teams make more structured, thoughtful hiring decisions.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenModal}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-teal-500 hover:opacity-95 text-white font-bold text-sm tracking-wide shadow-xl shadow-violet-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <span>Explore talent intelligence</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onScrollToDemo}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white border border-white/15 font-semibold text-sm transition-all flex items-center justify-center gap-2"
            >
              <Users className="w-4 h-4 text-violet-400" />
              <span>See the hiring workflow</span>
            </button>
          </div>

          {/* Principles bar */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-teal-400" />
              <span>Structured Objective Rubrics</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-violet-400" />
              <span>Human-in-the-Loop Consensus</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Explainable AI Synthesis</span>
            </div>
          </div>
        </div>

        {/* Hero Visual: Structured Recruiting Dashboard Preview */}
        <div className="mt-14 relative max-w-5xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/30 via-indigo-500/25 to-teal-500/30 rounded-3xl blur-xl opacity-50" />
          <div className="relative rounded-3xl bg-[#121A2D] border border-white/10 p-4 sm:p-7 shadow-2xl overflow-hidden">
            {/* Window bar */}
            <div className="flex flex-wrap items-center justify-between pb-4 mb-5 border-b border-white/10 gap-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-xs text-slate-300">
                  Open Role: <strong className="text-white">Staff Systems Architect</strong> (Platform Engineering)
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-teal-300">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                <span>2 Open Positions • 4 Final Stage Debriefs Pending</span>
              </div>
            </div>

            {/* Candidate Card & Skills Comparison Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
              {/* Candidate 1 Highlight */}
              <div className="p-4 rounded-2xl bg-[#0B0F19] border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-violet-600/30 border border-violet-500/40 text-violet-300 font-bold text-xs flex items-center justify-center font-mono">
                      ER
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">Elena Rostova</h4>
                      <span className="text-[10px] text-slate-400 font-mono">11 yrs • Apex Cloud</span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-teal-950 text-teal-300 border border-teal-800/40 text-[10px] font-mono">
                    Score: 4.8 / 5
                  </span>
                </div>
                <div className="space-y-1.5 text-[11px] text-slate-300">
                  <div className="flex justify-between font-mono text-[10px]">
                    <span className="text-slate-400">Distributed Systems</span>
                    <span className="text-teal-400">96%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div className="w-[96%] h-full bg-teal-400 rounded-full" />
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-white/10 text-[11px] text-slate-400">
                  <span className="text-violet-400 font-semibold">Reviewer Debrief:</span> "Exceptional depth in multi-region consensus algorithms."
                </div>
              </div>

              {/* Candidate 2 Highlight */}
              <div className="p-4 rounded-2xl bg-[#0B0F19] border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 font-bold text-xs flex items-center justify-center font-mono">
                      MT
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">Marcus Thorne</h4>
                      <span className="text-[10px] text-slate-400 font-mono">9 yrs • HyperScale</span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-violet-950 text-violet-300 border border-violet-800/40 text-[10px] font-mono">
                    Score: 4.5 / 5
                  </span>
                </div>
                <div className="space-y-1.5 text-[11px] text-slate-300">
                  <div className="flex justify-between font-mono text-[10px]">
                    <span className="text-slate-400">Kubernetes & Mesh</span>
                    <span className="text-indigo-400">94%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div className="w-[94%] h-full bg-indigo-400 rounded-full" />
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-white/10 text-[11px] text-slate-400">
                  <span className="text-violet-400 font-semibold">Reviewer Debrief:</span> "Remarkably clean infrastructure-as-code fundamentals."
                </div>
              </div>

              {/* Explainable AI Assistance Callout */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-violet-950/40 to-[#0B0F19] border border-violet-500/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-violet-300 text-xs font-semibold mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                    <span>Explainable Evidence Summary</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Both finalists exceed technical thresholds. Elena offers greater consensus architecture depth; Marcus brings stronger developer experience automation.
                  </p>
                </div>
                <div className="pt-2 border-t border-white/10 text-[10px] font-mono text-teal-300">
                  Decision Recommendation: Convene hiring committee debrief
                </div>
              </div>
            </div>

            <div className="text-center pt-2">
              <button
                onClick={onScrollToDemo}
                className="text-xs font-semibold text-violet-400 hover:text-violet-300 inline-flex items-center gap-1 group font-mono"
              >
                <span>Launch Interactive Candidate Evaluation Workspace</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
