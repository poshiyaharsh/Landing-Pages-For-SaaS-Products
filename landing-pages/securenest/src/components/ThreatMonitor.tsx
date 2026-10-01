import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Globe, Shield, Activity, ShieldAlert, Cpu } from 'lucide-react';
import { THREAT_REGIONS } from '../data/securenestData';

const featureBullets = [
  'Real-time event detection across distributed edge nodes',
  'Behavioral anomaly detection powered by heuristic AI',
  'Continuous endpoint monitoring for servers, laptops, and containers',
  'Suspicious activity tracking with automated blast-radius containment',
  'Automated threat prioritization with zero alert fatigue'
];

export const ThreatMonitor: React.FC = () => {
  return (
    <section id="security" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Explanatory Content (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-card border border-cyber-border text-xs font-mono tracking-widest uppercase text-cyber-emerald">
              <Activity className="w-3.5 h-3.5" />
              <span>Real-Time Defense</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              See threats before they become incidents.
            </h2>

            <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
              SecureNest inspects network flows, API traffic, and endpoint telemetry in real-time. Block malicious actors milliseconds before perimeter penetration occurs.
            </p>

            <ul className="space-y-3 pt-2">
              {featureBullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="p-0.5 rounded-full bg-cyber-emerald/10 text-cyber-emerald shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm sm:text-base text-slate-300 font-normal">{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 flex items-center gap-6 border-t border-cyber-border/70 text-xs font-mono text-slate-400">
              <div>
                <span className="text-white font-bold text-sm block">12ms</span>
                Avg Inspection Latency
              </div>
              <div className="h-6 w-[1px] bg-cyber-border" />
              <div>
                <span className="text-cyber-emerald font-bold text-sm block">99.99%</span>
                Uptime SLA
              </div>
            </div>
          </div>

          {/* Right Column: Large Threat Monitoring Map & Metrics (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl bg-cyber-dark/90 border border-cyber-border/80 shadow-2xl p-6 sm:p-8 backdrop-blur-xl overflow-hidden">
              {/* Subtle map glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyber-emerald/5 blur-3xl rounded-full pointer-events-none" />

              {/* Threat Map Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-cyber-border/70 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-cyber-emerald" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200">
                    LIVE THREAT MAP
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-cyber-emerald animate-ping" />
                  <span className="text-cyber-emerald">Global Nodes Synchronized</span>
                </div>
              </div>

              {/* Realistic Regional Grid Representation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {THREAT_REGIONS.map((region) => (
                  <div
                    key={region.name}
                    className="p-4 rounded-xl bg-cyber-card/60 border border-cyber-border/70 hover:border-cyber-emerald/40 transition-all flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-sm font-semibold text-white">{region.name}</span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                          region.threatLevel === 'Normal'
                            ? 'bg-cyber-emerald/10 text-cyber-emerald border-cyber-emerald/30'
                            : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                        }`}
                      >
                        {region.threatLevel}
                      </span>
                    </div>

                    <div className="flex items-baseline justify-between text-xs font-mono text-slate-400 mt-2">
                      <span>Telemetry Ingest:</span>
                      <span className="text-white font-semibold">{region.activity}</span>
                    </div>
                    <div className="flex items-baseline justify-between text-xs font-mono text-slate-400 mt-1">
                      <span>Mitigated / hr:</span>
                      <span className="text-cyber-cyan">{region.blocked}</span>
                    </div>

                    {/* Mini node pulse bar */}
                    <div className="w-full h-1 bg-slate-800 rounded-full mt-3 overflow-hidden">
                      <div className="w-full h-full bg-cyber-emerald/80 animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Threat Status Summary Bar */}
              <div className="p-4 rounded-xl bg-cyber-card/70 border border-cyber-border flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyber-emerald/10 border border-cyber-emerald/20 text-cyber-emerald">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Threat Level</div>
                    <div className="text-base font-bold font-mono text-cyber-emerald">LOW (SECURE)</div>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-xs font-mono">
                  <div>
                    <div className="text-slate-400 text-[10px] uppercase">Blocked Attempts</div>
                    <div className="text-base font-bold text-white">2,481</div>
                  </div>
                  <div className="h-6 w-[1px] bg-cyber-border" />
                  <div>
                    <div className="text-slate-400 text-[10px] uppercase">Active Incidents</div>
                    <div className="text-base font-bold text-cyber-emerald">0</div>
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
