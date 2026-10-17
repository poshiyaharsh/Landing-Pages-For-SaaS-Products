import React, { useState } from 'react';
import { WORKFLOW_STEPS } from '../data/sampleData';
import { ArrowRight, CheckCircle2, ChevronRight, Terminal, Sparkles } from 'lucide-react';

export const ExperimentWorkflow: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = WORKFLOW_STEPS[activeStepIndex];

  return (
    <section id="workflow" className="py-20 lg:py-28 bg-[#080C16] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
            <span>Iterative Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            From an idea to a better prompt,{' '}
            <span className="text-cyan-400">systematically.</span>
          </h2>
          <p className="mt-3 text-slate-300 text-base">
            Replace trial-and-error guesswork with an empirical engineering methodology.
          </p>
        </div>

        {/* 4 Step Selector Buttons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {WORKFLOW_STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer font-mono ${
                  isActive
                    ? 'bg-[#0E1526] border-cyan-500 text-white shadow-lg shadow-cyan-950/40'
                    : 'bg-[#0B0F19] border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs px-2 py-0.5 rounded font-bold ${
                      isActive ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    STAGE {step.stepNumber}
                  </span>
                  {idx < activeStepIndex && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  )}
                </div>
                <div className="text-sm font-semibold text-slate-200 font-sans truncate">
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Interactive Display for Active Step */}
        <div className="rounded-2xl border border-cyan-500/30 bg-[#0E1526] p-6 lg:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                <Terminal className="w-4 h-4" />
                <span>Stage {activeStep.stepNumber} of 4</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {activeStep.title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {activeStep.description}
              </p>

              <div className="pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                  Best Practice Rule:
                </span>
                <div className="p-3 bg-[#0A0E1A] border-l-2 border-cyan-400 rounded-r-lg text-xs font-mono text-cyan-200">
                  {activeStep.codeSnippet}
                </div>
              </div>
            </div>

            {/* Interactive Step Illustration */}
            <div className="lg:col-span-6">
              <div className="rounded-xl bg-[#090D17] border border-slate-800 p-5 font-mono text-xs text-slate-300 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] text-slate-500">
                  <span>pipeline-stage://{activeStep.stepNumber}-eval</span>
                  <span className="text-emerald-400">ready</span>
                </div>
                <div className="space-y-2">
                  <div className="p-2.5 bg-slate-900 rounded border border-slate-800">
                    <span className="text-[10px] text-cyan-400 block mb-1">EXECUTION STATE</span>
                    <p className="text-xs text-slate-200">
                      Active step verified against validation dataset of 25 benchmark prompts.
                    </p>
                  </div>
                  <div className="p-2.5 bg-slate-900 rounded border border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Target Metric</span>
                    <span className="text-cyan-400 font-semibold">&gt; 95% Adherence</span>
                  </div>
                  <div className="p-2.5 bg-slate-900 rounded border border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Regression Check</span>
                    <span className="text-emerald-400 font-semibold">0 Breaking Shifts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
