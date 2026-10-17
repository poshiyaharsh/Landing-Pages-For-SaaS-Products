import React, { useState } from 'react';
import { FIVE_STAGE_WORKFLOW } from '../data/sampleData';
import { Terminal, CheckCircle2 } from 'lucide-react';

export const FiveStageWorkflow: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStage = FIVE_STAGE_WORKFLOW[activeStageIndex];

  return (
    <section className="py-20 lg:py-28 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <span>5-Stage Continuous Delivery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Go from blank repository to{' '}
            <span className="text-blue-600">launch-ready workflow.</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            A battle-tested deployment roadmap designed to help founders and engineering teams ship with zero surprises.
          </p>
        </div>

        {/* 5 Stage Horizontal Stepper */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {FIVE_STAGE_WORKFLOW.map((stage, idx) => {
            const isActive = idx === activeStageIndex;
            return (
              <button
                key={stage.stageNumber}
                onClick={() => setActiveStageIndex(idx)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer font-mono ${
                  isActive
                    ? 'bg-blue-50 border-blue-600 text-blue-900 shadow-md font-bold'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs px-2 py-0.5 rounded ${
                      isActive ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    STAGE {stage.stageNumber}
                  </span>
                  {idx < activeStageIndex && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  )}
                </div>
                <div className="text-xs sm:text-sm font-sans font-semibold text-slate-900 truncate">
                  {stage.title}
                </div>
                <div className="text-[11px] text-slate-500 truncate mt-1">
                  {stage.tagline}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Stage Preview Card */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 lg:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-600 font-bold uppercase tracking-wider">
                <Terminal className="w-4 h-4" />
                <span>Stage {activeStage.stageNumber} // {activeStage.tagline}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {activeStage.title}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {activeStage.description}
              </p>

              <div className="pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block mb-2 font-bold">
                  Automated CLI Command:
                </span>
                <div className="p-3 bg-[#0B0F19] text-blue-400 font-mono text-xs rounded-xl border border-slate-800">
                  {activeStage.terminalSnippet}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-xl bg-[#0B0F19] border border-slate-800 p-5 font-mono text-xs text-slate-200 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] text-slate-400">
                  <span>pipeline-state://stage-{activeStage.stageNumber}</span>
                  <span className="text-emerald-400 font-bold">PASSING</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 bg-slate-900 rounded border border-slate-800">
                    <span className="text-[10px] text-blue-400 block mb-1">TASK RUNNER VERIFICATION</span>
                    <p className="text-slate-300">
                      Executed pre-flight checks with zero unhandled exceptions.
                    </p>
                  </div>
                  <div className="p-2.5 bg-slate-900 rounded border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400">Status Check</span>
                    <span className="text-emerald-400 font-bold">Validated</span>
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
