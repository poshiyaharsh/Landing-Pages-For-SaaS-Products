import React, { useState } from 'react';
import {
  LayoutDashboard,
  ShieldAlert,
  Search,
  Server,
  FileCheck2,
  FileText,
  Settings,
  Shield,
  Activity,
  ArrowUpRight,
  TrendingDown,
  RefreshCw,
  Clock,
  Layers,
  CheckCircle2
} from 'lucide-react';
import { DASHBOARD_NAV_TABS } from '../data/securenestData';

const iconMap: Record<string, React.ReactNode> = {
  LayoutDashboard: <LayoutDashboard className="w-4 h-4" />,
  ShieldAlert: <ShieldAlert className="w-4 h-4" />,
  Search: <Search className="w-4 h-4" />,
  Server: <Server className="w-4 h-4" />,
  FileCheck2: <FileCheck2 className="w-4 h-4" />,
  FileText: <FileText className="w-4 h-4" />,
  Settings: <Settings className="w-4 h-4" />
};

export const SecurityDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 600);
  };

  return (
    <section id="solutions" className="py-24 md:py-32 relative bg-cyber-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-card border border-cyber-border text-xs font-mono tracking-widest uppercase text-cyber-cyan">
            <span>●</span>
            <span>Interactive Platform Demo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Your security posture at a glance.
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal">
            Unified telemetry across your entire infrastructure. Instant situational awareness in one pane of glass.
          </p>
        </div>

        {/* Full-Width Realistic Dashboard Container */}
        <div className="rounded-2xl border border-cyber-border/90 bg-cyber-dark/90 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl overflow-hidden">
          {/* Top Bar */}
          <div className="px-5 py-3 bg-cyber-card/60 border-b border-cyber-border/70 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
              <span className="font-semibold text-white">SECURENEST WORKSPACE:</span>
              <span className="text-cyber-emerald">production-us-east-1</span>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <div className="flex items-center gap-1.5 text-slate-400">
                <Clock className="w-3.5 h-3.5 text-cyber-emerald" />
                <span>Last updated: Just now</span>
              </div>
              <button
                onClick={handleRefresh}
                className="p-1.5 rounded bg-cyber-dark border border-cyber-border text-slate-400 hover:text-white transition-colors"
                title="Refresh Metrics"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-cyber-emerald' : ''}`} />
              </button>
            </div>
          </div>

          {/* Dashboard Split Body: Sidebar + Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
            {/* Left Sidebar (lg:col-span-3) */}
            <div className="lg:col-span-3 p-4 border-b lg:border-b-0 lg:border-r border-cyber-border/70 bg-cyber-dark/50 flex flex-col justify-between">
              <div className="space-y-1">
                <div className="px-3 py-2 text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
                  NAVIGATION
                </div>
                {DASHBOARD_NAV_TABS.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-mono transition-all text-left ${
                        isActive
                          ? 'bg-cyber-emerald/15 text-cyber-emerald border border-cyber-emerald/30 font-semibold shadow-sm'
                          : 'text-slate-400 hover:text-white hover:bg-cyber-card/60 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={isActive ? 'text-cyber-emerald' : 'text-slate-500'}>
                          {iconMap[tab.icon]}
                        </span>
                        <span>{tab.name}</span>
                      </div>
                      {tab.badge && (
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                          {tab.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Sidebar Footer info */}
              <div className="mt-6 p-3 rounded-xl bg-cyber-card/40 border border-cyber-border/60">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
                  <span>SIEM Synced</span>
                  <span className="text-cyber-emerald">100%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-cyber-emerald w-full" />
                </div>
                <p className="text-[10px] text-slate-500 font-mono mt-2">SOC 2 Type II Audited</p>
              </div>
            </div>

            {/* Main Dashboard Canvas (lg:col-span-9) */}
            <div className="lg:col-span-9 p-5 sm:p-7 space-y-6 bg-cyber-black/40">
              {/* Header Tab Title */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-cyber-border/60 pb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-mono text-white tracking-tight">
                    {activeTab} Overview
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">Real-time enterprise telemetry feed</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-cyber-card border border-cyber-border text-slate-300">
                    Range: Past 24 Hours
                  </span>
                </div>
              </div>

              {/* 5 Core Top Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {/* Security Score */}
                <div className="p-3.5 rounded-xl bg-cyber-card/60 border border-cyber-border/70 hover:border-cyber-emerald/40 transition-colors">
                  <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
                    <span>SCORE</span>
                    <Shield className="w-3.5 h-3.5 text-cyber-emerald" />
                  </div>
                  <div className="text-2xl font-bold font-mono text-white mt-1">98%</div>
                  <div className="text-[11px] text-cyber-emerald font-mono flex items-center gap-0.5 mt-0.5">
                    <CheckCircle2 className="w-3 h-3" /> Grade A+
                  </div>
                </div>

                {/* Threat Level */}
                <div className="p-3.5 rounded-xl bg-cyber-card/60 border border-cyber-border/70 hover:border-emerald-500/40 transition-colors">
                  <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
                    <span>THREAT LEVEL</span>
                    <Activity className="w-3.5 h-3.5 text-cyber-emerald" />
                  </div>
                  <div className="text-2xl font-bold font-mono text-cyber-emerald mt-1">LOW</div>
                  <div className="text-[11px] text-slate-400 font-mono mt-0.5">Stable baseline</div>
                </div>

                {/* Protected Assets */}
                <div className="p-3.5 rounded-xl bg-cyber-card/60 border border-cyber-border/70 hover:border-cyber-cyan/40 transition-colors">
                  <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
                    <span>ASSETS</span>
                    <Server className="w-3.5 h-3.5 text-cyber-cyan" />
                  </div>
                  <div className="text-2xl font-bold font-mono text-white mt-1">1,248</div>
                  <div className="text-[11px] text-cyber-cyan font-mono mt-0.5">Enrolled & healthy</div>
                </div>

                {/* Open Vulnerabilities */}
                <div className="p-3.5 rounded-xl bg-cyber-card/60 border border-cyber-border/70 hover:border-amber-500/40 transition-colors">
                  <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
                    <span>VULNS</span>
                    <Search className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <div className="text-2xl font-bold font-mono text-white mt-1">12</div>
                  <div className="text-[11px] text-cyber-emerald font-mono flex items-center gap-0.5 mt-0.5">
                    <TrendingDown className="w-3 h-3" /> -18% wk
                  </div>
                </div>

                {/* Security Events */}
                <div className="col-span-2 sm:col-span-1 p-3.5 rounded-xl bg-cyber-card/60 border border-cyber-border/70 hover:border-slate-600 transition-colors">
                  <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
                    <span>EVENTS</span>
                    <Layers className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <div className="text-2xl font-bold font-mono text-white mt-1">2,431</div>
                  <div className="text-[11px] text-slate-400 font-mono mt-0.5">All analyzed</div>
                </div>
              </div>

              {/* 4 Interactive Dashboard Panels */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Panel 1: Threat Activity Over Time */}
                <div className="p-4 rounded-xl bg-cyber-card/40 border border-cyber-border/70">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-semibold uppercase text-slate-300">
                      Threat Activity Over Time
                    </span>
                    <span className="text-[11px] font-mono text-cyber-emerald">Anomaly Threshold: Normal</span>
                  </div>
                  <div className="h-32 w-full">
                    <svg className="w-full h-full" viewBox="0 0 320 100" preserveAspectRatio="none">
                      <linearGradient id="dashGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
                      </linearGradient>
                      <path
                        d="M0,80 Q40,65 80,75 T160,35 T240,55 T320,25 L320,100 L0,100 Z"
                        fill="url(#dashGrad)"
                      />
                      <path
                        d="M0,80 Q40,65 80,75 T160,35 T240,55 T320,25"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="2"
                      />
                      <circle cx="160" cy="35" r="3" fill="#10B981" />
                      <circle cx="320" cy="25" r="3.5" fill="#10B981" />
                    </svg>
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                    <span>00:00</span>
                    <span>06:00</span>
                    <span>12:00</span>
                    <span>18:00</span>
                    <span>NOW</span>
                  </div>
                </div>

                {/* Panel 2: Vulnerability Severity Distribution */}
                <div className="p-4 rounded-xl bg-cyber-card/40 border border-cyber-border/70 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-semibold uppercase text-slate-300">
                      Vulnerability Severity
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">Total: 12 open</span>
                  </div>
                  <div className="space-y-2 font-mono text-xs">
                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-red-400">Critical (0)</span>
                        <span className="text-slate-500">0%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                        <div className="h-full bg-red-500 w-0" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-amber-400">High (2)</span>
                        <span className="text-slate-400">16%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                        <div className="h-full bg-amber-400 w-[16%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-cyber-cyan">Medium (7)</span>
                        <span className="text-slate-400">58%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                        <div className="h-full bg-cyber-cyan w-[58%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-slate-400">Low (3)</span>
                        <span className="text-slate-500">26%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                        <div className="h-full bg-slate-500 w-[26%]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Panel 3: Security Events Breakdown */}
                <div className="p-4 rounded-xl bg-cyber-card/40 border border-cyber-border/70">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-semibold uppercase text-slate-300">
                      Security Events (24h)
                    </span>
                    <span className="text-[11px] font-mono text-cyber-cyan">2,431 total</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 my-2 text-center font-mono">
                    <div className="p-2 rounded bg-cyber-dark/80 border border-cyber-border/50">
                      <div className="text-xs font-bold text-white">2,118</div>
                      <div className="text-[10px] text-slate-400">Allowed</div>
                    </div>
                    <div className="p-2 rounded bg-cyber-dark/80 border border-cyber-border/50">
                      <div className="text-xs font-bold text-amber-400">310</div>
                      <div className="text-[10px] text-slate-400">Filtered</div>
                    </div>
                    <div className="p-2 rounded bg-cyber-dark/80 border border-cyber-border/50">
                      <div className="text-xs font-bold text-red-400">3</div>
                      <div className="text-[10px] text-slate-400">Blocked</div>
                    </div>
                  </div>
                  <p className="text-[11px] font-mono text-slate-500">All edge requests inspected with zero latency impact.</p>
                </div>

                {/* Panel 4: Compliance Progress */}
                <div className="p-4 rounded-xl bg-cyber-card/40 border border-cyber-border/70 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-semibold uppercase text-slate-300">
                      Compliance Progress
                    </span>
                    <span className="text-[11px] font-mono text-cyber-emerald">Avg: 95%</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                    <div className="p-2.5 rounded-lg bg-cyber-dark/80 border border-cyber-border/50 flex items-center justify-between">
                      <span className="text-slate-300">SOC 2</span>
                      <span className="font-bold text-cyber-emerald">96%</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-cyber-dark/80 border border-cyber-border/50 flex items-center justify-between">
                      <span className="text-slate-300">ISO 27001</span>
                      <span className="font-bold text-cyber-emerald">91%</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-cyber-dark/80 border border-cyber-border/50 flex items-center justify-between">
                      <span className="text-slate-300">GDPR</span>
                      <span className="font-bold text-cyber-emerald">98%</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-cyber-dark/80 border border-cyber-border/50 flex items-center justify-between">
                      <span className="text-slate-300">HIPAA</span>
                      <span className="font-bold text-cyber-emerald">94%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
