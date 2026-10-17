import React, { useState } from 'react';
import { Layers, Palette, BarChart3, Globe, ArrowRight, Check } from 'lucide-react';
import { USE_CASES } from '../data/sampleData';

export const UseCasesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const iconList = [
    <Layers className="w-5 h-5 text-[#4F46E5]" />,
    <Palette className="w-5 h-5 text-[#7C3AED]" />,
    <BarChart3 className="w-5 h-5 text-[#059669]" />,
    <Globe className="w-5 h-5 text-[#2563EB]" />,
  ];

  const current = USE_CASES[activeTab];

  return (
    <section id="use-cases" className="py-20 bg-[#FAF9FC] border-b border-[#E4E2EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold text-[#4F46E5] uppercase tracking-wider font-mono bg-[#EEF2FF] px-2.5 py-1 rounded">
            TAILORED TEAM SCENARIOS
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#0F172A] mt-3 tracking-tight">
            Built for how your specific team creates.
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            From technical engineering sprints to cross-functional marketing launches and async distributed operations.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex overflow-x-auto pb-4 gap-2 border-b border-[#E4E2EB] scrollbar-none mb-8 justify-start sm:justify-center">
          {USE_CASES.map((uc, idx) => (
            <button
              key={uc.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                activeTab === idx
                  ? 'bg-[#4F46E5] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-[#E4E2EB]'
              }`}
            >
              <span>{uc.role}</span>
            </button>
          ))}
        </div>

        {/* Active Use Case Card */}
        <div className="bg-white rounded-2xl border border-[#E4E2EB] p-6 sm:p-10 shadow-workspace grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-[#FAF9FC] border border-[#E4E2EB] flex items-center justify-center">
                {iconList[activeTab]}
              </div>
              <span className="text-xs font-bold text-[#4F46E5] uppercase font-mono tracking-wider">
                {current.role}
              </span>
            </div>

            <h3 className="text-2xl font-bold font-display text-[#0F172A]">
              {current.headline}
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              {current.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {current.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-[#FAF9FC] border border-[#E4E2EB] text-xs font-medium text-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#FAF9FC] rounded-xl border border-[#E4E2EB] p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E4E2EB]">
              <span className="text-xs font-bold text-[#0F172A]">Illustrative Workspace Setup:</span>
              <span className="text-[11px] font-mono text-[#4F46E5] bg-[#EEF2FF] px-2 py-0.5 rounded font-semibold">
                {current.activeView}
              </span>
            </div>

            <div className="p-4 bg-white rounded-xl border border-[#E4E2EB] space-y-2">
              <div className="text-[10px] text-slate-400 font-mono uppercase">Target Project</div>
              <div className="text-sm font-bold text-[#0F172A]">{current.sampleProject}</div>
              <p className="text-xs text-slate-500">Configured with automated channel sync and assigned DRI stakeholders.</p>
            </div>

            <div className="p-3 bg-white rounded-lg border border-[#E4E2EB] text-xs text-slate-600 flex items-center justify-between">
              <span>Average Meeting Reduction:</span>
              <span className="font-bold text-emerald-600 font-mono">4.5 hrs / week</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
