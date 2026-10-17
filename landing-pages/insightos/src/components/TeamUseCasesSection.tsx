import React, { useState } from 'react';
import { teamUseCases } from '../data/sampleData';
import { Check, ArrowRight } from 'lucide-react';

export const TeamUseCasesSection: React.FC = () => {
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const currentRole = teamUseCases[activeRoleIndex];

  return (
    <section id="solutions" className="py-20 md:py-28 bg-slate-950 border-t border-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono uppercase">
            <span>TAILORED WORKSPACES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Every team speaks the same truth.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Curated lens and telemetry workflows for every department without creating isolated data silos.
          </p>
        </div>

        {/* Role Selector Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 gap-2 mb-10 no-scrollbar">
          {teamUseCases.map((role, idx) => (
            <button
              key={role.role}
              onClick={() => setActiveRoleIndex(idx)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border ${
                activeRoleIndex === idx
                  ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              {role.role}
            </button>
          ))}
        </div>

        {/* Selected Role Showcase Card */}
        <div className="rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-950 border border-slate-800 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-800/40 font-mono text-xs text-cyan-400">
                Departmental Focus: {currentRole.role}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                {currentRole.headline}
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                {currentRole.description}
              </p>

              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  Core Telemetry Metrics:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {currentRole.metrics.map((m) => (
                    <div
                      key={m}
                      className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center gap-2 text-xs text-slate-300 font-mono"
                    >
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Illustrative preview panel */}
            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono">
                <span className="text-slate-400">Automated Intelligence Summary</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Synced
                </span>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800/80 font-mono text-xs text-slate-300 leading-relaxed">
                <p className="text-cyan-400 mb-1 font-semibold">{currentRole.sampleReport.split(':')[0]}:</p>
                <p className="text-slate-400">{currentRole.sampleReport.split(':')[1]}</p>
              </div>
              <div className="pt-2 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Data Freshness: 4s ago</span>
                <span className="text-cyan-400 flex items-center gap-1">
                  Export Dashboard <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
