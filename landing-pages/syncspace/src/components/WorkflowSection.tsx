import React from 'react';
import { ArrowRight, Layers, CheckCircle2, Zap } from 'lucide-react';
import { WORKFLOW_STAGES } from '../data/sampleData';

export const WorkflowSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-[#E4E2EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold text-[#4F46E5] uppercase tracking-wider font-mono bg-[#EEF2FF] px-2.5 py-1 rounded">
            THE MOMENTUM ENGINE
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#0F172A] mt-3 tracking-tight">
            From scattered work to shared momentum.
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Eliminate context switching. A simple 3-stage progression turns fragmented updates into collaborative execution.
          </p>
        </div>

        {/* 3 Connected Stages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {WORKFLOW_STAGES.map((st, idx) => (
            <div
              key={st.number}
              className="p-6 rounded-2xl border border-[#E4E2EB] bg-[#FAF9FC] flex flex-col justify-between relative hover:border-[#4F46E5]/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-xl bg-white border border-[#E4E2EB] text-[#4F46E5] font-mono font-bold text-sm flex items-center justify-center shadow-xs">
                    {st.number}
                  </span>
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-semibold">
                    Stage {st.number}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#0F172A] font-display">
                  {st.title}
                </h3>

                <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                  {st.description}
                </p>
              </div>

              {/* Mini stage visual representation */}
              <div className="mt-6 pt-4 border-t border-[#E4E2EB] text-xs font-mono text-slate-500">
                {idx === 0 && <span>Docs + Tasks + Chats → 1 Workspace</span>}
                {idx === 1 && <span>Clear DRI + Sprint Tags + SLAs</span>}
                {idx === 2 && <span>Live Context + Shorter Delivery Cycles</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
