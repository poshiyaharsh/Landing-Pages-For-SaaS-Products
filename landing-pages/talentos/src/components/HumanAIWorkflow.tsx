import React from 'react';
import { humanAIWorkflowSteps } from '../data/sampleData';
import { UserCheck, Sparkles, ArrowRight } from 'lucide-react';

export const HumanAIWorkflow: React.FC = () => {
  return (
    <section id="workflow" className="py-20 md:py-28 bg-[#0D1322] border-t border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-semibold uppercase">
            <span>BALANCED WORKFLOW</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Human judgment, assisted by AI.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Every step is designed to keep human evaluators in control while automating administrative friction and evidence synthesis.
          </p>
        </div>

        <div className="space-y-4 max-w-5xl mx-auto">
          {humanAIWorkflowSteps.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-2xl bg-[#121A2D] border border-white/10 hover:border-violet-500/30 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-3xl font-black text-violet-500/40 shrink-0">
                  {step.step}
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="w-full md:w-auto md:min-w-[280px] p-3.5 rounded-xl bg-[#0B0F19] border border-white/5 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-slate-200">
                  <UserCheck className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span className="font-semibold">{step.humanRole}</span>
                </div>
                <div className="flex items-start gap-2 text-violet-300/90 border-t border-white/5 pt-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-violet-400 shrink-0 mt-0.5" />
                  <span>{step.aiSupport}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
