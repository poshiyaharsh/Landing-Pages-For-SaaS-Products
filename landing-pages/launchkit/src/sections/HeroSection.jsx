import React, { useState } from 'react';
import { 
  Rocket, 
  ArrowRight, 
  TrendingUp, 
  CheckCircle, 
  Search, 
  Users, 
  Zap, 
  BarChart3, 
  Sparkles,
  Star,
  Play,
  Activity
} from 'lucide-react';
import { fireMiniBurst } from '../utils/confetti.js';

export default function HeroSection({ onOpenCta }) {
  const [activeMetricTab, setActiveMetricTab] = useState('signups');

  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-36 overflow-hidden">
      {/* Background Gradients & Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-pink-600/15 via-violet-600/20 to-blue-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-pink-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Content: Editorial Copy */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-pink-500/30 text-xs font-semibold text-pink-300 shadow-lg shadow-pink-500/10 backdrop-blur-sm animate-pulse-glow">
            <Rocket size={14} className="text-pink-400" />
            <span>Built for ambitious founders</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[1.04] text-white">
            Everything you need <br />
            to launch your next <br />
            <span className="text-gradient-hero">BIG THING.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            LaunchKit brings your landing pages, marketing, analytics, SEO, and launch workflow into one powerful growth platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenCta('hero-primary')}
              className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-extrabold text-white bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 hover:from-pink-600 hover:via-purple-700 hover:to-blue-700 shadow-xl shadow-pink-500/30 hover:shadow-pink-500/50 hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
            >
              <span>Start Your Launch</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => {
                const target = document.querySelector('#how-it-works');
                if (target) target.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-base font-bold text-slate-200 bg-slate-900/80 border border-white/15 hover:border-white/30 hover:bg-slate-800 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Play size={16} className="text-pink-400 fill-pink-400" />
              <span>Explore LaunchKit</span>
            </button>
          </div>

          {/* Subtext */}
          <p className="text-xs font-mono text-slate-400 tracking-wide">
            No credit card required · Free 14-day trial
          </p>
        </div>

        {/* HERO VISUAL: Floating Browser Window Composition */}
        <div className="relative mt-16 lg:mt-24 max-w-5xl mx-auto">
          
          {/* FLOATING CARD 1: Launch Progress 82% (Top Left) */}
          <div className="absolute -top-10 -left-6 sm:-left-12 z-20 hidden sm:flex items-center gap-3.5 bg-[#0D1322]/90 backdrop-blur-xl border border-white/15 rounded-2xl px-5 py-3.5 shadow-2xl shadow-pink-500/10 animate-float-slow transform -rotate-3 hover:rotate-0 transition-transform">
            <div className="w-10 h-10 rounded-xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center text-pink-400">
              <Zap size={20} />
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Launch Progress</div>
              <div className="text-lg font-black text-white flex items-center gap-2">
                <span>82% Complete</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </div>
            </div>
          </div>

          {/* FLOATING CARD 2: +34.8% Growth (Top Right) */}
          <div className="absolute -top-8 -right-6 sm:-right-10 z-20 hidden sm:flex items-center gap-3.5 bg-[#0D1322]/90 backdrop-blur-xl border border-white/15 rounded-2xl px-5 py-3.5 shadow-2xl shadow-blue-500/10 animate-float-medium transform rotate-3 hover:rotate-0 transition-transform">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <TrendingUp size={20} />
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Weekly Acceleration</div>
              <div className="text-lg font-black text-emerald-400 flex items-center gap-1.5">
                <span>+34.8% Growth</span>
                <span className="text-[11px] text-slate-400 font-normal">MoM</span>
              </div>
            </div>
          </div>

          {/* FLOATING CARD 3: SEO Score 94/100 (Bottom Left) */}
          <div className="absolute -bottom-8 -left-6 sm:-left-10 z-20 hidden md:flex items-center gap-3 bg-[#0D1322]/90 backdrop-blur-xl border border-white/15 rounded-2xl px-4 py-3 shadow-2xl shadow-emerald-500/10 animate-float-fast transform rotate-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-bold text-xs">
              94
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Core Web Vitals</div>
              <div className="text-sm font-bold text-white flex items-center gap-1">
                <CheckCircle size={14} className="text-emerald-400" />
                <span>SEO Score 94/100</span>
              </div>
            </div>
          </div>

          {/* FLOATING CARD 4: 12.4K Visitors (Middle Right) */}
          <div className="absolute top-1/2 -right-12 -translate-y-1/2 z-20 hidden lg:flex items-center gap-3 bg-[#0D1322]/90 backdrop-blur-xl border border-white/15 rounded-2xl px-4 py-3 shadow-2xl shadow-purple-500/10 animate-float-slow">
            <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Users size={18} />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Realtime Audience</div>
              <div className="text-sm font-bold text-white">12.4K Visitors Live</div>
            </div>
          </div>

          {/* FLOATING CARD 5: Campaign Live ● Active (Bottom Right) */}
          <div className="absolute -bottom-6 -right-6 sm:-right-8 z-20 hidden sm:flex items-center gap-2.5 bg-[#0D1322]/90 backdrop-blur-xl border border-white/15 rounded-2xl px-4 py-2.5 shadow-2xl shadow-orange-500/10 animate-float-medium transform -rotate-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono font-bold text-white">Campaign Live</span>
            <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full">
              Active
            </span>
          </div>

          {/* MAIN BROWSER WINDOW MOCKUP */}
          <div className="rounded-3xl bg-[#0B0F19] border border-white/20 shadow-2xl shadow-violet-900/30 overflow-hidden relative">
            {/* Browser Header Bar */}
            <div className="bg-[#080B14] px-5 py-3.5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-3 text-xs font-mono text-slate-400 hidden sm:inline-block">
                  https://app.launchkit.io/command-center
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-pink-500/15 border border-pink-500/30 text-[11px] font-mono text-pink-300 font-bold">
                  <Activity size={12} className="animate-spin text-pink-400" />
                  Live Sync
                </span>
              </div>
            </div>

            {/* Dashboard Inside Browser */}
            <div className="p-5 sm:p-7 space-y-6">
              {/* Top KPI metric bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {[
                  { label: 'Total Signups', val: '4,280', delta: '+27.2%', color: 'text-pink-400' },
                  { label: 'Traffic Velocity', val: '24,892', delta: '+18.4%', color: 'text-violet-400' },
                  { label: 'Conversion Rate', val: '17.2%', delta: '+4.8%', color: 'text-blue-400' },
                  { label: 'Pipeline Value', val: '$48,240', delta: '+32.5%', color: 'text-emerald-400' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-900/70 border border-white/5 rounded-2xl p-4">
                    <div className="text-[11px] font-mono uppercase text-slate-400 mb-1">{item.label}</div>
                    <div className="text-xl sm:text-2xl font-black text-white tracking-tight">{item.val}</div>
                    <div className={`text-xs font-bold ${item.color} mt-1 flex items-center gap-1`}>
                      <TrendingUp size={12} />
                      <span>{item.delta}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Main Growth Chart Area */}
              <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-5">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div>
                    <h3 className="font-display font-bold text-base text-white">Live Acquisition Velocity</h3>
                    <p className="text-xs text-slate-400">Real-time visitor-to-signup conversion trajectory</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {['signups', 'visitors', 'conversion'].map((t) => (
                      <button
                        key={t}
                        onClick={() => {
                          setActiveMetricTab(t);
                          fireMiniBurst(0.7, 0.4);
                        }}
                        className={`text-xs font-mono capitalize px-3 py-1 rounded-lg border transition-colors ${
                          activeMetricTab === t
                            ? 'bg-pink-500/20 border-pink-500 text-pink-300 font-bold'
                            : 'bg-slate-800 border-white/5 text-slate-400 hover:text-white'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* SVG Area Sparkline Chart */}
                <div className="relative h-44 sm:h-52 w-full">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 600 180" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="heroChartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#EC4899" stopOpacity="0.45" />
                        <stop offset="60%" stopColor="#8B5CF6" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="heroLineGrad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#EC4899" />
                        <stop offset="50%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#06B6D4" />
                      </linearGradient>
                    </defs>

                    {/* Horizontal grid lines */}
                    <line x1="0" y1="40" x2="600" y2="40" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                    <line x1="0" y1="90" x2="600" y2="90" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                    <line x1="0" y1="140" x2="600" y2="140" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />

                    {/* Area fill */}
                    <path
                      d="M0,150 Q100,120 180,90 T360,65 T480,30 T600,10 L600,180 L0,180 Z"
                      fill="url(#heroChartGrad)"
                    />

                    {/* Stroke line */}
                    <path
                      d="M0,150 Q100,120 180,90 T360,65 T480,30 T600,10"
                      fill="none"
                      stroke="url(#heroLineGrad)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />

                    {/* Pulsing focal dots */}
                    <circle cx="180" cy="90" r="5" fill="#EC4899" className="animate-ping" />
                    <circle cx="180" cy="90" r="4" fill="#FFFFFF" />

                    <circle cx="480" cy="30" r="5" fill="#06B6D4" className="animate-ping" />
                    <circle cx="480" cy="30" r="4" fill="#FFFFFF" />

                    <circle cx="600" cy="10" r="6" fill="#F97316" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
