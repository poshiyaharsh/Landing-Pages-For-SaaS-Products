import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldAlert, BellRing, FileCheck2, ArrowUpRight } from 'lucide-react';
import { SECURITY_OVERVIEW_CARDS } from '../data/securenestData';

const iconMap: Record<string, React.ReactNode> = {
  Activity: <Activity className="w-5 h-5 text-cyber-emerald" />,
  ShieldAlert: <ShieldAlert className="w-5 h-5 text-cyber-cyan" />,
  BellRing: <BellRing className="w-5 h-5 text-amber-400" />,
  FileCheck2: <FileCheck2 className="w-5 h-5 text-emerald-400" />
};

export const SecurityOverview: React.FC = () => {
  return (
    <section id="platform" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-card border border-cyber-border text-xs font-mono tracking-widest uppercase text-cyber-emerald">
            <span>●</span>
            <span>One Security Command Center</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Everything your security team needs.{' '}
            <span className="block text-slate-400 font-normal">Nothing it doesn’t.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
            Monitor your environment, identify vulnerabilities, respond to threats, and prove compliance from one unified workspace.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SECURITY_OVERVIEW_CARDS.map((card, idx) => (
            <motion.div
              key={card.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative p-6 sm:p-8 rounded-2xl bg-cyber-dark/80 border border-cyber-border/80 hover:border-cyber-emerald/50 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle card radial hover glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-emerald/5 rounded-full blur-3xl group-hover:bg-cyber-emerald/10 transition-colors pointer-events-none" />

              <div>
                {/* Top header row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm text-cyber-emerald font-semibold tracking-wider">
                      {card.number}
                    </span>
                    <div className="p-2 rounded-lg bg-cyber-card border border-cyber-border">
                      {iconMap[card.icon]}
                    </div>
                  </div>
                  <span className="text-slate-600 group-hover:text-cyber-emerald transition-colors">
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-cyber-emerald transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-6 font-normal">
                  {card.description}
                </p>
              </div>

              {/* Unique Visual per Card */}
              <div className="pt-4 border-t border-cyber-border/60">
                {card.number === '01' && (
                  /* Threat activity timeline visual */
                  <div className="p-4 rounded-xl bg-cyber-card/60 border border-cyber-border/70 space-y-2">
                    <div className="flex justify-between text-[11px] font-mono text-slate-400">
                      <span>INGEST: 14.2k eps</span>
                      <span className="text-cyber-emerald">Anomaly Score: 0.02</span>
                    </div>
                    <div className="grid grid-cols-12 gap-1.5 h-7 items-end">
                      {[30, 45, 20, 60, 40, 85, 50, 65, 30, 95, 40, 25].map((h, i) => (
                        <div
                          key={i}
                          style={{ height: `${h}%` }}
                          className={`rounded-sm transition-all ${
                            i === 9
                              ? 'bg-amber-400/80 shadow-[0_0_8px_rgba(251,191,36,0.5)]'
                              : 'bg-cyber-emerald/40 hover:bg-cyber-emerald/80'
                          }`}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between text-[10px] font-mono text-slate-500">
                      <span>T-60m</span>
                      <span>Realtime Stream</span>
                      <span>NOW</span>
                    </div>
                  </div>
                )}

                {card.number === '02' && (
                  /* Vulnerability severity bars visual */
                  <div className="p-4 rounded-xl bg-cyber-card/60 border border-cyber-border/70 space-y-2.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-300">CVE Prioritization Matrix</span>
                      <span className="text-xs font-bold text-emerald-400">92% Patched</span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-[11px] font-mono">
                        <span className="w-14 text-red-400">Critical</span>
                        <div className="flex-1 h-2 rounded-full bg-slate-800 overflow-hidden">
                          <div className="w-[0%] h-full bg-red-500" />
                        </div>
                        <span className="text-slate-400 w-5 text-right">0</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] font-mono">
                        <span className="w-14 text-amber-400">High</span>
                        <div className="flex-1 h-2 rounded-full bg-slate-800 overflow-hidden">
                          <div className="w-[20%] h-full bg-amber-400" />
                        </div>
                        <span className="text-slate-400 w-5 text-right">2</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] font-mono">
                        <span className="w-14 text-cyber-cyan">Medium</span>
                        <div className="flex-1 h-2 rounded-full bg-slate-800 overflow-hidden">
                          <div className="w-[50%] h-full bg-cyber-cyan" />
                        </div>
                        <span className="text-slate-400 w-5 text-right">7</span>
                      </div>
                    </div>
                  </div>
                )}

                {card.number === '03' && (
                  /* Alert notification stack visual */
                  <div className="p-3 rounded-xl bg-cyber-card/60 border border-cyber-border/70 space-y-2">
                    <div className="p-2 rounded-lg bg-red-950/30 border border-red-500/20 flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                        <span className="text-red-300 font-medium">Suspicious Auth Burst</span>
                      </div>
                      <span className="text-[10px] text-red-400/80">Blocked</span>
                    </div>
                    <div className="p-2 rounded-lg bg-cyber-dark/80 border border-cyber-border/70 flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span className="text-slate-300">Port 8443 Probed</span>
                      </div>
                      <span className="text-[10px] text-slate-500">Filtered</span>
                    </div>
                  </div>
                )}

                {card.number === '04' && (
                  /* Compliance score circles visual */
                  <div className="p-4 rounded-xl bg-cyber-card/60 border border-cyber-border/70">
                    <div className="grid grid-cols-4 gap-2 text-center">
                      {[
                        { name: 'SOC 2', score: '96%' },
                        { name: 'ISO', score: '91%' },
                        { name: 'GDPR', score: '98%' },
                        { name: 'HIPAA', score: '94%' }
                      ].map((item) => (
                        <div key={item.name} className="p-2 rounded-lg bg-cyber-dark/80 border border-cyber-border/50">
                          <div className="text-xs font-bold font-mono text-cyber-emerald">{item.score}</div>
                          <div className="text-[10px] font-mono text-slate-400 mt-0.5">{item.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
