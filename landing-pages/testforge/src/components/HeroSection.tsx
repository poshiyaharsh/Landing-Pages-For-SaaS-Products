import React from 'react';
import { ArrowRight, Play, CheckCircle2, XCircle, AlertTriangle, Terminal, ShieldCheck, GitBranch } from 'lucide-react';
import { sampleSuites } from '../data/sampleData';

interface HeroSectionProps {
  onScrollToDemo: () => void;
  onOpenModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToDemo, onOpenModal }) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-[#0A0F1D] font-mono">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-emerald-600/15 via-teal-600/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs uppercase tracking-widest shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>QUALITY BUILT INTO EVERY RELEASE</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Ship with <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              confidence.
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed max-w-2xl mx-auto">
            Organize test suites, understand failures, track coverage, and give your team a clearer view of software quality from development through release.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenModal}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:opacity-95 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-xl shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Explore TestForge</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onScrollToDemo}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#10172A] hover:bg-[#18233C] text-slate-200 border border-white/10 text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <Play className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
              <span>Run the demo suite</span>
            </button>
          </div>

          {/* Technical Badges */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Sub-Second Failure Diffs</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>Statistical Flake Quarantine</span>
            </div>
            <div className="flex items-center gap-1.5">
              <GitBranch className="w-4 h-4 text-cyan-400" />
              <span>Zero Build Slowdown</span>
            </div>
          </div>
        </div>

        {/* Hero Visual: Test Runner & Suite Tree Preview */}
        <div className="mt-14 relative max-w-5xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-50" />
          <div className="relative rounded-2xl bg-[#10172A] border border-white/15 p-4 sm:p-6 shadow-2xl overflow-hidden">
            {/* Window bar */}
            <div className="flex flex-wrap items-center justify-between pb-3 mb-4 border-b border-white/10 gap-3 text-xs">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white font-bold">TESTFORGE RUNNER: CI-8492</span>
                <span className="text-slate-400 font-sans">• branch: main • commit: 7f9c2a1</span>
              </div>
              <div className="flex items-center gap-3 text-[11px] text-emerald-400">
                <span>168 PASSED (100%)</span>
                <span className="text-slate-400">• TOTAL DURATION: 1m 42s</span>
              </div>
            </div>

            {/* Quick 3-Tile Status Strip */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-5">
              {sampleSuites.slice(0, 3).map((suite) => (
                <div key={suite.id} className="p-3.5 rounded-xl bg-[#0A0F1D] border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white truncate max-w-[170px]">{suite.name}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 font-bold">
                      {suite.coveragePct}% cov
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" /> {suite.passedCount} passed
                    </span>
                    {suite.failedCount > 0 ? (
                      <span className="flex items-center gap-1 text-rose-400">
                        <XCircle className="w-3.5 h-3.5" /> {suite.failedCount} fail
                      </span>
                    ) : (
                      <span className="text-slate-500">0 failed</span>
                    )}
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 rounded-full"
                      style={{ width: `${suite.coveragePct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Code Failure Diff Preview */}
            <div className="p-4 rounded-xl bg-[#0A0F1D] border border-white/10 text-xs space-y-2">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-rose-400 font-bold flex items-center gap-1.5">
                  <XCircle className="w-3.5 h-3.5" /> FAILED: should reject stale replay attack with 409 Conflict
                </span>
                <span className="text-slate-500">src/auth/__tests__/session.spec.ts:148</span>
              </div>
              <pre className="p-3 rounded bg-[#070B14] text-[11px] text-slate-300 overflow-x-auto leading-relaxed border border-rose-500/20">
                <span className="text-rose-400">- Expected HTTP Status: 409 Conflict</span>{'\n'}
                <span className="text-emerald-400">+ Received HTTP Status: 200 OK</span>{'\n'}
                <span className="text-slate-500">  at Context.&lt;anonymous&gt; (src/auth/__tests__/session.spec.ts:152:12)</span>
              </pre>
            </div>

            {/* Jump to interactive demo */}
            <div className="text-center pt-3">
              <button
                onClick={onScrollToDemo}
                className="text-xs text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 group font-mono"
              >
                <span>Launch Interactive QA Runner (Execute Test Suite Simulation)</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
