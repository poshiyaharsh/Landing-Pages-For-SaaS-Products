import React from 'react';
import { privacyWorkflowSteps } from '../data/sampleData';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export const PrivacyWorkflow: React.FC = () => {
  return (
    <section id="workflow" className="py-20 md:py-28 bg-[#0D1322] border-t border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-semibold uppercase">
            <span>FULFILLMENT LIFECYCLE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            How requests move through PrivacyX.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            From initial cryptographic authentication to multi-system deletion queries and compliance certificate generation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {privacyWorkflowSteps.map((step, idx) => (
            <div
              key={step.step}
              className="p-5 rounded-2xl bg-[#111827] border border-white/10 hover:border-teal-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-3xl font-black text-teal-500/30 block mb-3">
                  {step.step}
                </span>
                <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 text-[10px] font-mono text-teal-300">
                <span className="text-slate-500 block uppercase text-[9px]">Compliance Control:</span>
                {step.complianceControl}
              </div>

              {idx < privacyWorkflowSteps.length - 1 && (
                <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-[#1A253A] border border-white/10 text-teal-400">
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
