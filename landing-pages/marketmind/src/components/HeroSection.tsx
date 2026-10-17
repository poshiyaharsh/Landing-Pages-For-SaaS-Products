import React from 'react';
import { ArrowRight, Terminal, TrendingUp, TrendingDown, Activity, ShieldCheck, Database } from 'lucide-react';
import { sampleAssets, macroIndicators } from '../data/sampleData';

interface HeroSectionProps {
  onScrollToDemo: () => void;
  onOpenModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToDemo, onOpenModal }) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-[#080C14]">
      {/* Background terminal ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-amber-600/15 via-blue-600/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-amber-950/40 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-widest shadow-inner">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>MARKET CONTEXT. CLEARER DECISIONS.</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] font-mono">
            Know your market <br />
            <span className="bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 bg-clip-text text-transparent">
              before it moves.
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed max-w-2xl mx-auto">
            Bring market indicators, sector trends, company research, and economic context into a focused workspace built to help you investigate what matters.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 font-mono">
            <button
              onClick={onOpenModal}
              className="w-full sm:w-auto px-7 py-3.5 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs tracking-wider uppercase shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Explore market intelligence</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onScrollToDemo}
              className="w-full sm:w-auto px-7 py-3.5 rounded bg-[#0E1626] hover:bg-[#152038] text-slate-200 border border-white/10 text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2"
            >
              <Terminal className="w-4 h-4 text-amber-400" />
              <span>View the dashboard</span>
            </button>
          </div>

          {/* Institutional Trust Badges */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Direct FIX 4.4 Ingestion</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Macroeconomic & FRED Modeling</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Zero Black-Box Scoring</span>
            </div>
          </div>
        </div>

        {/* Hero Visual: Terminal Interface Snapshot */}
        <div className="mt-14 relative max-w-5xl mx-auto font-mono">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-blue-500/20 to-emerald-500/20 rounded-xl blur-xl opacity-50" />
          <div className="relative rounded-xl bg-[#0B101D] border border-white/15 p-4 sm:p-6 shadow-2xl overflow-hidden">
            {/* Top Terminal Bar */}
            <div className="flex flex-wrap items-center justify-between pb-3 mb-4 border-b border-white/10 gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-[#17223B] text-amber-400 font-bold text-[10px]">
                  TERMINAL v5.2
                </span>
                <span className="text-slate-400">MARKETMIND INSTITUTIONAL WORKSPACE</span>
              </div>
              <div className="flex items-center gap-3 text-[11px] text-slate-400">
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> FEED ACTIVE
                </span>
                <span className="text-slate-500">SESSION: CROSS-CONNECT-01</span>
              </div>
            </div>

            {/* Watchlist Strip Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-4">
              {sampleAssets.slice(0, 4).map((asset) => (
                <div key={asset.symbol} className="p-2.5 rounded bg-[#0E1626] border border-white/5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white">{asset.symbol}</span>
                    <span
                      className={`text-[10px] flex items-center gap-0.5 ${
                        asset.isPositive ? 'text-emerald-400' : 'text-rose-400'
                      }`}
                    >
                      {asset.isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                      {asset.changePercent}
                    </span>
                  </div>
                  <p className="text-base font-bold text-slate-200 mt-1">{asset.price}</p>
                  <span className="text-[10px] text-slate-500 block truncate">{asset.name}</span>
                </div>
              ))}
            </div>

            {/* Quick Chart SVG Canvas */}
            <div className="p-4 rounded bg-[#0E1626] border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300 font-bold flex items-center gap-2">
                  <span>NVX.SEMI (Nova Silicon & AI Accelerators)</span>
                  <span className="text-emerald-400 font-mono">+3.93%</span>
                </span>
                <span className="text-[10px] text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30">
                  Illustrative Dataset — Not Live Market Data
                </span>
              </div>

              <svg className="w-full h-24 sm:h-28" viewBox="0 0 600 100" fill="none">
                <defs>
                  <linearGradient id="amberGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,85 Q100,75 200,60 T400,35 T600,10 L600,100 L0,100 Z"
                  fill="url(#amberGrad)"
                />
                <path
                  d="M0,85 Q100,75 200,60 T400,35 T600,10"
                  stroke="#F59E0B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="200" cy="60" r="3" fill="#F59E0B" />
                <circle cx="400" cy="35" r="3" fill="#F59E0B" />
                <circle cx="600" cy="10" r="4" fill="#10B981" />
              </svg>
            </div>

            {/* Jump to demo button */}
            <div className="text-center pt-3">
              <button
                onClick={onScrollToDemo}
                className="text-xs text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 group"
              >
                <span>Open Full Interactive Terminal Console (Watchlist, Charts & Notes)</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
