import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Shield,
  Activity,
  Server,
  AlertTriangle,
  CheckCircle2,
  Lock,
  Play,
  TrendingDown,
  Sparkles,
  Wifi
} from 'lucide-react';
import { HERO_FEED_ITEMS } from '../data/securenestData';

interface HeroProps {
  onStartProtecting: () => void;
  onViewDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProtecting, onViewDemo }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Ambience & Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-75 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-cyber-emerald/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/3 w-[450px] h-[350px] bg-cyber-cyan/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Copy */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyber-card/90 border border-cyber-border/90 text-xs font-mono tracking-wider uppercase text-slate-300 shadow-sm backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-cyber-emerald animate-ping" />
            <span className="text-cyber-emerald font-semibold">●</span>
            <span className="text-slate-200">Security Operations, Simplified</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]"
          >
            Protect every connection.{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyber-emerald via-emerald-300 to-cyber-cyan">
              Every device. Every day.
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            SecureNest gives your team real-time visibility into threats, vulnerabilities, compliance, and security posture — all from one intelligent command center.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2"
          >
            <button
              onClick={onStartProtecting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-950 bg-cyber-emerald hover:bg-emerald-400 active:scale-[0.98] transition-all rounded-xl shadow-[0_0_30px_rgba(16,185,129,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-emerald"
            >
              <span>Start Protecting</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onViewDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-200 hover:text-white bg-cyber-card/80 hover:bg-cyber-card border border-cyber-border hover:border-slate-700 rounded-xl transition-all backdrop-blur-md focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan"
            >
              <Play className="w-4 h-4 text-cyber-cyan fill-cyber-cyan/20" />
              <span>View Live Demo</span>
            </button>
          </motion.div>

          {/* Micro Trust Proof */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xs sm:text-sm text-slate-500 font-mono tracking-tight pt-1"
          >
            No credit card required · 14-day free trial · SOC 2 Type II certified
          </motion.p>
        </div>

        {/* Floating Realistic Cybersecurity Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 lg:mt-18 relative mx-auto max-w-5xl"
        >
          {/* Subtle Outer Glow Card */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-cyber-emerald/25 via-cyber-cyan/15 to-transparent blur-xl opacity-60 pointer-events-none" />

          {/* Floating Indicators around Dashboard */}
          <div className="hidden lg:flex items-center gap-2 absolute -top-5 -left-6 z-20 px-3 py-1.5 rounded-lg bg-cyber-dark/90 border border-cyber-emerald/40 backdrop-blur-md shadow-lg text-xs font-mono text-cyber-emerald">
            <span className="w-2 h-2 rounded-full bg-cyber-emerald animate-pulse" />
            <span>ENCRYPTED_TUNNEL: ACTIVE</span>
          </div>

          <div className="hidden lg:flex items-center gap-2 absolute -bottom-5 -right-6 z-20 px-3.5 py-1.5 rounded-lg bg-cyber-dark/90 border border-cyber-cyan/40 backdrop-blur-md shadow-lg text-xs font-mono text-cyber-cyan">
            <Wifi className="w-3.5 h-3.5 text-cyber-cyan animate-pulse" />
            <span>GLOBAL_LATENCY: 14ms</span>
          </div>

          {/* Dashboard Container */}
          <div className="relative rounded-2xl bg-cyber-dark/95 border border-cyber-border/90 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-2xl overflow-hidden">
            {/* Top Command Bar */}
            <div className="px-4 sm:px-6 py-3.5 bg-cyber-card/70 border-b border-cyber-border/70 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="h-4 w-[1px] bg-cyber-border" />
                <span className="text-xs font-mono font-semibold tracking-wider text-slate-300 uppercase">
                  SECURENEST COMMAND CENTER
                </span>
                <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-cyber-emerald/10 text-cyber-emerald border border-cyber-emerald/20">
                  v2.4.8-PROD
                </span>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-cyber-emerald animate-pulse" />
                  <span className="text-cyber-emerald font-semibold">ALL SYSTEMS SECURE</span>
                </div>
                <div className="hidden sm:flex items-center gap-1 text-slate-500">
                  <Sparkles className="w-3.5 h-3.5 text-cyber-cyan" />
                  <span>AI Sentinel Engaged</span>
                </div>
              </div>
            </div>

            {/* Main Dashboard Body */}
            <div className="p-4 sm:p-6 lg:p-7 space-y-6">
              {/* Metrics Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {/* Security Score */}
                <div className="p-4 rounded-xl bg-cyber-card/60 border border-cyber-border/70 hover:border-cyber-emerald/40 transition-colors relative overflow-hidden">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span>SECURITY SCORE</span>
                    <Shield className="w-4 h-4 text-cyber-emerald" />
                  </div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-bold font-mono text-white">98</span>
                    <span className="text-xs text-slate-400">/ 100</span>
                  </div>
                  <div className="mt-1 text-xs text-cyber-emerald font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Excellent Posture</span>
                  </div>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-cyber-emerald/5 rounded-full blur-xl pointer-events-none" />
                </div>

                {/* Threats Detected */}
                <div className="p-4 rounded-xl bg-cyber-card/60 border border-cyber-border/70 hover:border-cyber-border transition-colors">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span>THREATS DETECTED</span>
                    <Activity className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-bold font-mono text-white">3</span>
                    <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      0 Critical
                    </span>
                  </div>
                  <div className="mt-1 text-xs text-slate-400">Mitigated in real-time</div>
                </div>

                {/* Protected Assets */}
                <div className="p-4 rounded-xl bg-cyber-card/60 border border-cyber-border/70 hover:border-cyber-cyan/40 transition-colors">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span>ASSETS PROTECTED</span>
                    <Server className="w-4 h-4 text-cyber-cyan" />
                  </div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-bold font-mono text-white">1,248</span>
                  </div>
                  <div className="mt-1 text-xs text-cyber-cyan font-medium flex items-center gap-1">
                    <Lock className="w-3 h-3" />
                    <span>100% Agent Coverage</span>
                  </div>
                </div>

                {/* Open Vulnerabilities */}
                <div className="p-4 rounded-xl bg-cyber-card/60 border border-cyber-border/70 hover:border-cyber-border transition-colors">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span>VULNERABILITIES</span>
                    <AlertTriangle className="w-4 h-4 text-slate-400" />
                  </div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-bold font-mono text-white">12</span>
                    <span className="text-xs text-cyber-emerald flex items-center gap-0.5">
                      <TrendingDown className="w-3 h-3" /> 18%
                    </span>
                  </div>
                  <div className="mt-1 text-xs text-slate-400">Down vs last week</div>
                </div>
              </div>

              {/* Bottom Split: Realistic Activity Graph & Threat Feed */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                {/* Security Activity Graph (7 Cols) */}
                <div className="lg:col-span-7 p-4 sm:p-5 rounded-xl bg-cyber-card/40 border border-cyber-border/70 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
                        SECURITY ACTIVITY & EVENT VELOCITY
                      </h4>
                      <p className="text-[11px] text-slate-500 font-mono">Telemetry updated every 500ms</p>
                    </div>
                    <div className="flex items-center gap-3 text-[11px] font-mono">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-1 rounded-sm bg-cyber-emerald" />
                        <span className="text-slate-400">Threat Ingest</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-1 rounded-sm bg-cyber-cyan" />
                        <span className="text-slate-400">Mitigation</span>
                      </div>
                    </div>
                  </div>

                  {/* SVG Chart Visualization */}
                  <div className="relative w-full h-44 sm:h-52">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 500 160" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="emeraldGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#10B981" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
                        </linearGradient>
                        <linearGradient id="cyanGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      {/* Horizontal Grid lines */}
                      <line x1="0" y1="30" x2="500" y2="30" stroke="#1E293B" strokeDasharray="3 3" strokeWidth="0.8" />
                      <line x1="0" y1="70" x2="500" y2="70" stroke="#1E293B" strokeDasharray="3 3" strokeWidth="0.8" />
                      <line x1="0" y1="110" x2="500" y2="110" stroke="#1E293B" strokeDasharray="3 3" strokeWidth="0.8" />
                      <line x1="0" y1="150" x2="500" y2="150" stroke="#1E293B" strokeWidth="0.8" />

                      {/* Area 1: Cyan Mitigation */}
                      <path
                        d="M0,130 C70,120 120,135 180,95 C240,60 300,105 360,70 C420,40 460,65 500,45 L500,150 L0,150 Z"
                        fill="url(#cyanGrad)"
                      />
                      {/* Cyan Line */}
                      <path
                        d="M0,130 C70,120 120,135 180,95 C240,60 300,105 360,70 C420,40 460,65 500,45"
                        fill="none"
                        stroke="#06B6D4"
                        strokeWidth="2"
                      />

                      {/* Area 2: Emerald Ingest */}
                      <path
                        d="M0,110 C60,95 110,65 170,80 C230,95 280,35 340,55 C400,75 450,25 500,20 L500,150 L0,150 Z"
                        fill="url(#emeraldGrad)"
                      />
                      {/* Emerald Line */}
                      <path
                        d="M0,110 C60,95 110,65 170,80 C230,95 280,35 340,55 C400,75 450,25 500,20"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="2.5"
                      />

                      {/* Live Data Markers */}
                      <circle cx="170" cy="80" r="3.5" fill="#10B981" className="animate-pulse" />
                      <circle cx="340" cy="55" r="3.5" fill="#10B981" />
                      <circle cx="500" cy="20" r="4.5" fill="#10B981" stroke="#05080E" strokeWidth="2" />
                      <circle cx="500" cy="45" r="4" fill="#06B6D4" stroke="#05080E" strokeWidth="2" />
                    </svg>

                    {/* Timeline Labels */}
                    <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-2">
                      <span>00:00</span>
                      <span>04:00</span>
                      <span>08:00</span>
                      <span>12:00</span>
                      <span>16:00</span>
                      <span>20:00</span>
                      <span>LIVE</span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Live Threat Monitor Panel (5 Cols) */}
                <div className="lg:col-span-5 p-4 sm:p-5 rounded-xl bg-cyber-card/40 border border-cyber-border/70 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3 border-b border-cyber-border/60 pb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyber-emerald animate-ping" />
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200">
                        LIVE THREAT MONITOR
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500">Auto-Resolved</span>
                  </div>

                  {/* Activity Feed Items */}
                  <div className="space-y-2.5 my-auto">
                    {HERO_FEED_ITEMS.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-lg bg-cyber-dark/80 border border-cyber-border/60 hover:border-cyber-emerald/30 transition-all flex items-center justify-between gap-3 text-xs"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyber-emerald shrink-0" />
                          <span className="font-mono text-slate-200 truncate">{item.title}</span>
                        </div>
                        <span className="font-mono text-[10px] text-slate-500 shrink-0">{item.time}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Activity summary */}
                  <div className="mt-3 pt-2 border-t border-cyber-border/50 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Autonomous Defense: ON</span>
                    <span className="text-cyber-emerald font-semibold">0 Incidents Pending</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
