import React from 'react';
import { createToGrowSteps } from '../data/sampleData';
import { ArrowRight, Sparkles } from 'lucide-react';

export const CreateToGrowWorkflow: React.FC = () => {
  return (
    <section id="workflow" className="py-20 md:py-28 bg-[#0F0C1B] border-t border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-semibold uppercase">
            <span>THE CREATOR PLAYBOOK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            The Create-to-Grow lifecycle.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            How modern independent creators turn spark ideas into repeatable audience momentum and reliable 6-figure revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6 relative">
          {createToGrowSteps.map((step, idx) => (
            <div
              key={step.step}
              className="relative p-6 rounded-2xl bg-[#151025] border border-white/10 hover:border-pink-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-3xl font-black text-pink-500/40 block mb-3">
                  {step.step}
                </span>
                <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 font-mono text-[11px] text-pink-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                <span>{step.tag}</span>
              </div>

              {idx < createToGrowSteps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-[#1F1735] border border-white/20 text-pink-400">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
