import React from 'react';
import { Search, Sliders, Play, CheckCircle2, ArrowRight } from 'lucide-react';

export const WorkflowProcess: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Discover Repetitive Work',
      desc: 'Identify manual data entry bottlenecks, delayed handoffs, and repeated Slack requests across your stack.',
      icon: <Search className="w-5 h-5 text-blue-600" />,
    },
    {
      num: '02',
      title: 'Configure Triggers & Actions',
      desc: 'Connect webhooks, map payload attributes visually, and inject branch logic without writing custom scripts.',
      icon: <Sliders className="w-5 h-5 text-indigo-600" />,
    },
    {
      num: '03',
      title: 'Test with Sample Payloads',
      desc: 'Execute dry runs in a safe sandboxed environment to verify step-by-step responses and error handlers.',
      icon: <Play className="w-5 h-5 text-emerald-600" />,
    },
    {
      num: '04',
      title: 'Activate & Monitor',
      desc: 'Deploy with one toggle into production. Track throughput, latency, and SLA performance in real time.',
      icon: <CheckCircle2 className="w-5 h-5 text-sky-600" />,
    },
  ];

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#F8FAFC] relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <span>Implementation Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            From manual task to automated pipeline in{' '}
            <span className="text-blue-600">four steps.</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Replace brittle internal scripts with auditable, resilient workflows.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st) => (
            <div
              key={st.num}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative group hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                  {st.icon}
                </div>
                <span className="text-2xl font-black text-slate-300 font-mono">
                  {st.num}
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 font-sans">
                {st.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
