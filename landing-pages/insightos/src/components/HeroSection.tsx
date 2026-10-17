import React from 'react';
import { ArrowRight, BarChart3, TrendingUp, Layers, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

interface HeroSectionProps {
  onScrollToDemo: () => void;
  onOpenModal: (type: 'demo' | 'trial') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToDemo, onOpenModal }) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-indigo-600/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono uppercase tracking-wider shadow-inner">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>BUSINESS INTELLIGENCE, WITH CLARITY</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Make every decision <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              data-driven.
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-slate-400 font-normal leading-relaxed max-w-2xl mx-auto">
            Bring your key metrics together, uncover meaningful changes, and turn business data into decisions your team can explain and act on.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onScrollToDemo}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <span>Explore the dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onOpenModal('demo')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold text-sm transition-all flex items-center justify-center gap-2"
            >
              <BarChart3 className="w-4 h-4 text-cyan-400" />
              <span>See analytics in action</span>
            </button>
          </div>

          {/* Trust badges */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Sub-second Query P99</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Zero-ETL Streaming</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Automated Anomaly Detection</span>
            </div>
          </div>
        </div>

        {/* Hero Preview Teaser */}
        <div className="mt-14 relative max-w-5xl mx-auto">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-purple-500/30 rounded-2xl blur-xl opacity-50" />
          <div className="relative rounded-2xl bg-slate-950 border border-slate-800 p-4 sm:p-6 shadow-2xl overflow-hidden">
            {/* Window bar */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-slate-400">insightos-executive-v4.production.cloud</span>
              </div>
              <div className="flex items-center gap-3 font-mono text-[11px] text-cyan-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Live Feed Active (3,240 events/sec)</span>
              </div>
            </div>

            {/* Quick KPI Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                <span className="text-[11px] font-mono text-slate-400 uppercase">Quarterly ARR</span>
                <p className="text-xl sm:text-2xl font-bold text-white mt-1">$4,850,200</p>
                <span className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1 font-mono">
                  <TrendingUp className="w-3 h-3" /> +18.4% vs target
                </span>
              </div>
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                <span className="text-[11px] font-mono text-slate-400 uppercase">Gross Retention</span>
                <p className="text-xl sm:text-2xl font-bold text-white mt-1">94.8%</p>
                <span className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1 font-mono">
                  <TrendingUp className="w-3 h-3" /> +1.2% this quarter
                </span>
              </div>
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                <span className="text-[11px] font-mono text-slate-400 uppercase">Active Enterprise Accounts</span>
                <p className="text-xl sm:text-2xl font-bold text-white mt-1">418</p>
                <span className="text-[11px] text-cyan-400 flex items-center gap-1 mt-1 font-mono">
                  <Layers className="w-3 h-3" /> 28 pilots progressing
                </span>
              </div>
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                <span className="text-[11px] font-mono text-slate-400 uppercase">Magic Runway Ratio</span>
                <p className="text-xl sm:text-2xl font-bold text-white mt-1">2.41x</p>
                <span className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1 font-mono">
                  Top quartile efficiency
                </span>
              </div>
            </div>

            {/* Quick Chart SVG Preview */}
            <div className="bg-slate-900/40 rounded-xl border border-slate-800/80 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-slate-300">Revenue Velocity Trend (Trailing 6 Months)</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/50">
                  Illustrative Multi-Cloud Telemetry
                </span>
              </div>
              <svg className="w-full h-24 sm:h-32" viewBox="0 0 600 120" fill="none">
                <defs>
                  <linearGradient id="heroGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,100 Q75,85 150,70 T300,50 T450,25 T600,10 L600,120 L0,120 Z"
                  fill="url(#heroGradient)"
                />
                <path
                  d="M0,100 Q75,85 150,70 T300,50 T450,25 T600,10"
                  stroke="#38BDF8"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="150" cy="70" r="4" fill="#38BDF8" className="animate-ping" />
                <circle cx="300" cy="50" r="4" fill="#38BDF8" />
                <circle cx="450" cy="25" r="4" fill="#38BDF8" />
                <circle cx="600" cy="10" r="5" fill="#10B981" />
              </svg>
            </div>

            <div className="mt-4 text-center">
              <button
                onClick={onScrollToDemo}
                className="text-xs font-mono text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 group"
              >
                <span>Jump into Interactive Multi-Segment Sandbox</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
