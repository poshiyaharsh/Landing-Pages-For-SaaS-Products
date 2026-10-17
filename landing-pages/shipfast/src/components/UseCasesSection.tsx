import React, { useState } from 'react';
import { DEV_USE_CASES } from '../data/sampleData';

export const UseCasesSection: React.FC = () => {
  const [selectedCaseId, setSelectedCaseId] = useState(DEV_USE_CASES[0].id);

  const activeCase =
    DEV_USE_CASES.find((c) => c.id === selectedCaseId) || DEV_USE_CASES[0];

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <span>Tailored Workflows</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Designed for how modern{' '}
            <span className="text-blue-600">builders ship.</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Whether you're launching your first micro-SaaS or establishing engineering standards for a funded startup.
          </p>
        </div>

        {/* 4 Use Case Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {DEV_USE_CASES.map((uc) => (
            <button
              key={uc.id}
              onClick={() => setSelectedCaseId(uc.id)}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer font-sans ${
                selectedCaseId === uc.id
                  ? 'bg-white border-blue-600 shadow-md ring-2 ring-blue-100'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-white'
              }`}
            >
              <div className="text-xs font-mono font-bold text-blue-600 uppercase mb-1">
                {uc.title.split(' ')[0]}
              </div>
              <div className="text-sm font-bold text-slate-900 truncate">
                {uc.title}
              </div>
            </button>
          ))}
        </div>

        {/* Active Use Case Deep Dive Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 lg:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider">
                Target Persona // {activeCase.persona}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {activeCase.title}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {activeCase.description}
              </p>

              <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-xl flex items-center justify-between text-xs font-mono">
                <span className="text-blue-900 font-semibold">Recommended Stack:</span>
                <span className="text-blue-700 font-bold">{activeCase.stackExample}</span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-xl bg-[#0B0F19] border border-slate-800 p-6 font-mono text-xs text-slate-200 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] text-slate-400">
                  <span>case-study-metric://{activeCase.id}</span>
                  <span className="text-emerald-400 font-bold">VERIFIED</span>
                </div>
                <div className="text-center py-6">
                  <div className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
                    {activeCase.impactMetric}
                  </div>
                  <p className="text-xs text-slate-400 font-sans max-w-xs mx-auto">
                    Average deployment turnaround measured across developer sandbox runs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
