import React, { useState } from 'react';
import { FLOWOPS_TEMPLATES } from '../data/sampleData';
import { LayoutTemplate, ArrowRight, CheckCircle2, Copy } from 'lucide-react';

interface TemplatesSectionProps {
  onSelectTemplate: (templateName: string) => void;
}

export const TemplatesSection: React.FC<TemplatesSectionProps> = ({ onSelectTemplate }) => {
  const [selectedId, setSelectedId] = useState(FLOWOPS_TEMPLATES[0].id);

  const activeTemplate =
    FLOWOPS_TEMPLATES.find((t) => t.id === selectedId) || FLOWOPS_TEMPLATES[0];

  return (
    <section id="templates" className="py-20 lg:py-28 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <LayoutTemplate className="w-3.5 h-3.5" />
            <span>Pre-Built Blueprints</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Deploy in minutes with verified{' '}
            <span className="text-blue-600">automation templates.</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Battle-tested workflows configured for RevOps, HR, Support, and Engineering teams.
          </p>
        </div>

        {/* 6 Template Selector Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
          {FLOWOPS_TEMPLATES.map((tmpl) => (
            <button
              key={tmpl.id}
              onClick={() => setSelectedId(tmpl.id)}
              className={`p-3 rounded-xl border text-center transition-all cursor-pointer font-mono text-xs ${
                selectedId === tmpl.id
                  ? 'bg-blue-50 border-blue-600 text-blue-900 font-bold shadow-sm'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              <div className="text-[10px] text-blue-600 uppercase">{tmpl.category.split(' ')[0]}</div>
              <div className="font-semibold text-slate-900 truncate mt-0.5">{tmpl.name}</div>
            </button>
          ))}
        </div>

        {/* Active Template Deep-Dive Preview Card */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 lg:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider">
                Category // {activeTemplate.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {activeTemplate.name}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {activeTemplate.description}
              </p>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => onSelectTemplate(activeTemplate.name)}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs font-mono uppercase tracking-wider rounded-xl shadow-md shadow-blue-500/20 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Use This Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-xs font-mono text-slate-500">
                  {activeTemplate.nodesCount} Pre-Wired Steps
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-xl bg-white border border-slate-200 p-5 font-mono text-xs text-slate-800 shadow-sm space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-[11px] text-slate-400">
                  <span>Trigger: {activeTemplate.triggerName}</span>
                  <span className="text-emerald-600 font-bold">READY</span>
                </div>
                <div className="space-y-2">
                  {activeTemplate.samplePath.map((step, idx) => (
                    <div
                      key={step}
                      className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <span className="font-semibold text-slate-800">{step}</span>
                      </div>
                      <span className="text-[10px] text-slate-400">Step {idx + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
