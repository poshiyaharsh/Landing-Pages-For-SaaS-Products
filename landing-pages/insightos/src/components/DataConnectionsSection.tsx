import React from 'react';
import { Database, Cloud, Zap, ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { dataConnectors } from '../data/sampleData';

export const DataConnectionsSection: React.FC = () => {
  return (
    <section id="connectors" className="py-20 md:py-28 bg-slate-900/30 border-t border-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono uppercase">
            <span>ZERO-COPY LAKEHOUSE FABRIC</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Connect your data in minutes, not months.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            InsightOS queries data directly in your cloud warehouse with zero-ETL data virtualization, SOC2 Type II compliance, and role-based cryptographic isolation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {dataConnectors.map((conn) => (
            <div
              key={conn.name}
              className="p-5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-slate-900 text-cyan-400">
                    <Database className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                      conn.status === 'Verified Adapter'
                        ? 'bg-emerald-950 text-emerald-400 border-emerald-800/40'
                        : 'bg-cyan-950 text-cyan-400 border-cyan-800/40'
                    }`}
                  >
                    {conn.status}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1">{conn.name}</h3>
                <span className="text-[11px] font-mono text-slate-400 block mb-2">{conn.category}</span>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {conn.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-900 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Latency: {conn.latency}</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Zero Data Storage in InsightOS Cloud. Your underlying data stays resident in your virtual private cloud.</span>
          </div>
          <span className="text-cyan-400 flex items-center gap-1 cursor-pointer hover:underline">
            Inspect Architecture Whitepaper <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </section>
  );
};
