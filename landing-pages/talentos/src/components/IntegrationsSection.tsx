import React from 'react';
import { Layers, ShieldCheck, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { hrIntegrations } from '../data/sampleData';

export const IntegrationsSection: React.FC = () => {
  return (
    <section id="integrations" className="py-20 md:py-28 bg-[#0D1322] border-t border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-semibold uppercase">
            <span>ATS & HRIS ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Connects seamlessly with your stack.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Two-way data synchronization with leading applicant tracking systems, HRIS directories, and team communication hubs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hrIntegrations.map((item) => (
            <div
              key={item.name}
              className="p-6 rounded-2xl bg-[#121A2D] border border-white/10 hover:border-violet-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1B2640] border border-white/10 flex items-center justify-center text-violet-400 font-bold text-sm">
                    {item.name.slice(0, 2).toUpperCase()}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-teal-950 text-teal-300 border border-teal-800/40">
                    {item.status}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1">{item.name}</h3>
                <span className="text-[11px] font-mono text-slate-400 block mb-2">{item.category}</span>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Sync Latency: {item.syncLatency}</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-4 rounded-2xl bg-[#121A2D] border border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            <span>SOC2 Type II, EEOC adverse impact audit certified. Zero biometric or scraping techniques employed.</span>
          </div>
          <span className="text-violet-400">Illustrative ATS Connector Specifications</span>
        </div>
      </div>
    </section>
  );
};
