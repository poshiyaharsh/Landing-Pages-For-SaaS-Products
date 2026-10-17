import React from 'react';
import { testLifecycleSteps } from '../data/sampleData';
import { ArrowRight, Terminal } from 'lucide-react';

export const TestLifecycleSection: React.FC = () => {
  return (
    <section id="lifecycle" className="py-20 md:py-28 bg-[#070B14] border-t border-white/10 font-mono scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#10172A] border border-emerald-500/30 text-emerald-400 text-xs">
            <span>CONTINUOUS QUALITY PIPELINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The QA & release lifecycle.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-sans">
            How modern high-performing engineering teams test faster without compromising release stability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {testLifecycleSteps.map((step, idx) => (
            <div
              key={step.step}
              className="p-5 rounded-2xl bg-[#10172A] border border-white/10 hover:border-emerald-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-3xl font-black text-emerald-500/30 block mb-3">
                  {step.step}
                </span>
                <h3 className="text-sm font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4 font-sans">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 text-[10px] text-emerald-300">
                <span className="text-slate-500 block uppercase text-[9px]">Developer Velocity:</span>
                {step.developerImpact}
              </div>

              {idx < testLifecycleSteps.length - 1 && (
                <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-[#18233C] border border-white/10 text-emerald-400">
                  <ArrowRight className="w-3 h-3" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
