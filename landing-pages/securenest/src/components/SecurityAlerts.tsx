import React, { useState } from 'react';
import { BellRing, ShieldAlert, CheckCircle2, Clock, Filter, Eye, AlertCircle } from 'lucide-react';
import { SECURITY_ALERTS_DATA, AlertItem } from '../data/securenestData';

const severityFilters = ['All', 'Critical', 'High', 'Medium', 'Low'];

export const SecurityAlerts: React.FC = () => {
  const [selectedSeverity, setSelectedSeverity] = useState('All');
  const [alerts, setAlerts] = useState<AlertItem[]>(SECURITY_ALERTS_DATA);

  const handleStatusChange = (id: string, newStatus: AlertItem['status']) => {
    setAlerts((prev) =>
      prev.map((alert) => (alert.id === id ? { ...alert, status: newStatus } : alert))
    );
  };

  const filteredAlerts = alerts.filter((alert) => {
    if (selectedSeverity === 'All') return true;
    return alert.severity.toLowerCase() === selectedSeverity.toLowerCase();
  });

  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-card border border-cyber-border text-xs font-mono tracking-widest uppercase text-amber-400">
            <BellRing className="w-3.5 h-3.5" />
            <span>Intelligent Alert Triage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Security alerts without the noise.
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal">
            Correlate thousands of signals into high-fidelity actionable security alerts. Zero alert fatigue, instant blast radius containment.
          </p>
        </div>

        {/* Alerts Interactive Container */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-cyber-dark/95 border border-cyber-border/90 shadow-2xl overflow-hidden backdrop-blur-xl">
          {/* Filter Bar */}
          <div className="p-4 sm:p-5 bg-cyber-card/60 border-b border-cyber-border/70 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-slate-400" />
              <span className="text-xs font-mono text-slate-300 font-semibold uppercase">Severity Filter:</span>
              <div className="flex items-center gap-1 sm:gap-1.5 flex-wrap">
                {severityFilters.map((sev) => (
                  <button
                    key={sev}
                    onClick={() => setSelectedSeverity(sev)}
                    className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors ${
                      selectedSeverity === sev
                        ? 'bg-cyber-emerald text-slate-950 font-bold shadow-sm'
                        : 'bg-cyber-dark text-slate-400 hover:text-white border border-cyber-border'
                    }`}
                  >
                    {sev}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-xs font-mono text-slate-400">
              Showing <span className="text-white font-bold">{filteredAlerts.length}</span> active alerts
            </div>
          </div>

          {/* Alert Cards Feed */}
          <div className="p-4 sm:p-6 space-y-3.5">
            {filteredAlerts.length === 0 ? (
              <div className="py-12 text-center text-slate-500 font-mono text-sm">
                No alerts found matching severity: {selectedSeverity}
              </div>
            ) : (
              filteredAlerts.map((alert) => {
                const isCritical = alert.severity === 'Critical';
                const isHigh = alert.severity === 'High';
                const isMed = alert.severity === 'Medium';

                return (
                  <div
                    key={alert.id}
                    className="p-4 rounded-xl bg-cyber-card/40 border border-cyber-border/70 hover:border-cyber-border transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    {/* Left: Alert details */}
                    <div className="space-y-1.5 min-w-0">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span
                          className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border uppercase tracking-wider ${
                            isCritical
                              ? 'bg-red-500/10 text-red-400 border-red-500/30'
                              : isHigh
                              ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                              : isMed
                              ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
                              : 'bg-slate-500/10 text-slate-300 border-slate-500/30'
                          }`}
                        >
                          {alert.severity}
                        </span>
                        <h4 className="text-sm font-semibold text-white tracking-tight">{alert.title}</h4>
                      </div>

                      <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                        <span>Target: <span className="text-slate-200">{alert.target}</span></span>
                        <span>·</span>
                        <span className="flex items-center gap-1 text-slate-500">
                          <Clock className="w-3 h-3" />
                          {alert.timestamp}
                        </span>
                      </div>
                    </div>

                    {/* Right: Status actions */}
                    <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                      <span className="text-[11px] font-mono text-slate-500 mr-1 hidden sm:inline">Status:</span>
                      {(['Investigating', 'Resolved', 'Ignored'] as const).map((st) => (
                        <button
                          key={st}
                          onClick={() => handleStatusChange(alert.id, st)}
                          className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors border ${
                            alert.status === st
                              ? st === 'Resolved'
                                ? 'bg-emerald-500/15 text-cyber-emerald border-emerald-500/40 font-bold'
                                : st === 'Investigating'
                                ? 'bg-amber-500/15 text-amber-400 border-amber-500/40 font-bold'
                                : 'bg-slate-700/50 text-slate-300 border-slate-600 font-bold'
                              : 'bg-cyber-dark/80 text-slate-400 hover:text-white border-cyber-border'
                          }`}
                        >
                          {st}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Bottom Action Footer */}
          <div className="p-4 bg-cyber-card/40 border-t border-cyber-border/70 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyber-emerald" />
              <span>PagerDuty, Slack, & Webhook dispatch rules active.</span>
            </div>
            <span className="text-cyber-cyan cursor-pointer hover:underline">Configure alert threshold routing →</span>
          </div>
        </div>
      </div>
    </section>
  );
};
