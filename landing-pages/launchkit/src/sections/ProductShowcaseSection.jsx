import React, { useState } from 'react';
import { 
  Sparkles, 
  TrendingUp, 
  CheckCircle2, 
  Activity, 
  ShieldCheck, 
  Calendar, 
  Filter, 
  Layers,
  ArrowRight,
  Flame
} from 'lucide-react';
import { timelineStages, dashboardOverview } from '../data/launchData.js';
import { fireMiniBurst } from '../utils/confetti.js';

export default function ProductShowcaseSection({ onOpenCta }) {
  const [activeStageId, setActiveStageId] = useState('launch');
  const [selectedTimeframe, setSelectedTimeframe] = useState('30D');

  const currentStage = timelineStages.find((s) => s.id === activeStageId) || timelineStages[3];

  return (
    <section id="showcase" className="py-24 lg:py-36 bg-[#060911] relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-r from-violet-600/15 via-pink-600/15 to-blue-600/15 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-pink-400 bg-pink-500/10 border border-pink-500/20 px-3.5 py-1.5 rounded-full inline-block">
            Lifecycle Command Center
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
            From idea <br />
            <span className="text-gradient-hero">to launch day</span>.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            Experience how LaunchKit evolves with your startup across every milestone from customer discovery to scaled expansion.
          </p>
        </div>

        {/* 5-STAGE INTERACTIVE TIMELINE TABS */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 max-w-4xl mx-auto">
          {timelineStages.map((stage) => {
            const isActive = activeStageId === stage.id;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => {
                  setActiveStageId(stage.id);
                  fireMiniBurst(0.5, 0.4);
                }}
                className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 border ${
                  isActive
                    ? 'bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 text-white border-transparent shadow-lg shadow-pink-500/25 -translate-y-0.5'
                    : 'bg-slate-900/80 text-slate-300 border-white/10 hover:border-white/20 hover:bg-slate-800'
                }`}
              >
                <span className="font-mono text-[11px] opacity-80">{stage.step}</span>
                <span>{stage.title}</span>
              </button>
            );
          })}
        </div>

        {/* LARGE DASHBOARD SHOWCASE BROWSER WINDOW */}
        <div className="rounded-3xl bg-[#090D18] border border-white/20 shadow-2xl shadow-violet-950/40 overflow-hidden max-w-6xl mx-auto">
          {/* Top Window Bar */}
          <div className="bg-[#060810] px-6 py-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="font-display font-bold text-sm text-white pl-2">
                Launch Overview · {currentStage.title} Mode
              </span>
              <span className="text-[10px] font-mono text-pink-400 bg-pink-500/10 border border-pink-500/30 px-2 py-0.5 rounded-full font-bold">
                {currentStage.badge}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Date / Timeframe selector */}
              <div className="flex items-center bg-slate-900 border border-white/10 rounded-lg p-1 text-xs font-mono">
                {['7D', '30D', '90D', 'ALL'].map((tf) => (
                  <button
                    key={tf}
                    type="button"
                    onClick={() => setSelectedTimeframe(tf)}
                    className={`px-2.5 py-1 rounded-md transition-colors ${
                      selectedTimeframe === tf ? 'bg-pink-500 text-white font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {tf}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 4 STATS ROW */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 border-b border-white/10 bg-slate-950/40">
            {dashboardOverview.stats.map((s, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-white/5 rounded-2xl p-4 sm:p-5">
                <div className="text-xs font-mono uppercase text-slate-400 mb-1">{s.label}</div>
                <div className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">{s.value}</div>
                <div className="text-xs font-bold text-emerald-400 mt-1 flex items-center gap-1">
                  <TrendingUp size={12} />
                  <span>{s.change}</span>
                  <span className="text-slate-500 font-normal">vs prev cycle</span>
                </div>
              </div>
            ))}
          </div>

          {/* MAIN DASHBOARD INTERFACE (CHART + HEALTH PANEL) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8">
            
            {/* LEFT / CENTER: Growth Overview Chart (Col span 8) */}
            <div className="lg:col-span-8 bg-slate-950/60 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div>
                    <h4 className="font-display font-bold text-lg text-white">Growth Overview</h4>
                    <p className="text-xs text-slate-400">{currentStage.subtitle}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Live Stream Active
                    </span>
                  </div>
                </div>

                {/* Gradient Area Chart */}
                <div className="relative h-60 w-full mb-4">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 700 220" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="mainAreaGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
                        <stop offset="60%" stopColor="#EC4899" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="mainLineGrad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="40%" stopColor="#EC4899" />
                        <stop offset="80%" stopColor="#F97316" />
                        <stop offset="100%" stopColor="#06B6D4" />
                      </linearGradient>
                    </defs>

                    {/* Horizontal grid */}
                    <line x1="0" y1="50" x2="700" y2="50" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                    <line x1="0" y1="110" x2="700" y2="110" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                    <line x1="0" y1="170" x2="700" y2="170" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />

                    {/* Area fill */}
                    <path
                      d="M0,190 Q120,160 220,130 T440,80 T580,40 T700,10 L700,220 L0,220 Z"
                      fill="url(#mainAreaGrad)"
                    />

                    {/* Line stroke */}
                    <path
                      d="M0,190 Q120,160 220,130 T440,80 T580,40 T700,10"
                      fill="none"
                      stroke="url(#mainLineGrad)"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />

                    {/* Interactive datapoint tags */}
                    <circle cx="220" cy="130" r="5" fill="#8B5CF6" />
                    <circle cx="440" cy="80" r="6" fill="#EC4899" className="animate-ping" />
                    <circle cx="440" cy="80" r="5" fill="#FFFFFF" />
                    <circle cx="700" cy="10" r="7" fill="#F97316" />
                  </svg>
                </div>
              </div>

              {/* Dynamic stage callout */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-slate-300">
                  Current Stage Focus: <strong className="text-white">{currentStage.preview.headline}</strong>
                </span>
                <span className="font-mono text-pink-400 font-bold">
                  {currentStage.preview.validationStatus}
                </span>
              </div>
            </div>

            {/* RIGHT: Launch Health Panel (Col span 4) */}
            <div className="lg:col-span-4 bg-slate-950/60 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-display font-bold text-lg text-white">Launch Health</h4>
                  <span className="text-xs font-mono font-bold uppercase text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                    Excellent
                  </span>
                </div>
                <p className="text-xs text-slate-400 mb-6">
                  Composite score across conversion, system availability, and SEO visibility.
                </p>

                {/* Progress Indicators */}
                <div className="space-y-4">
                  {dashboardOverview.healthScores.map((h, i) => (
                    <div key={i} className="space-y-1.5 text-xs">
                      <div className="flex justify-between text-slate-300 font-medium">
                        <span>{h.label}</span>
                        <span className="font-mono font-bold text-white">{h.score}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                        <div
                          className={`h-full ${h.color} rounded-full transition-all duration-500`}
                          style={{ width: `${h.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action trigger */}
              <div className="mt-8 pt-4 border-t border-white/5">
                <button
                  onClick={() => onOpenCta('showcase')}
                  className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Explore Full Workspace</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
