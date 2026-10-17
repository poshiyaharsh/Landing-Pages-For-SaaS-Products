import React from 'react';
import { Eye, Search, BrainCircuit, Play, ArrowRight } from 'lucide-react';
import { dataStorySteps } from '../data/sampleData';

const stepIcons: Record<string, React.ReactNode> = {
  Eye: <Eye className="w-5 h-5 text-cyan-400" />,
  Search: <Search className="w-5 h-5 text-blue-400" />,
  BrainCircuit: <BrainCircuit className="w-5 h-5 text-indigo-400" />,
  Play: <Play className="w-5 h-5 text-emerald-400" />,
};

export const DataStorySection: React.FC = () => {
  return (
    <section id="story" className="py-20 md:py-28 bg-slate-900/30 border-t border-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono uppercase">
            <span>THE DECISION LIFECYCLE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            From noise to narrative to execution.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            How forward-thinking leadership teams move from raw event streams to confident, unanimous business decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {dataStorySteps.map((step, idx) => (
            <div
              key={step.step}
              className="relative p-6 rounded-2xl bg-slate-950 border border-slate-800/80 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-black text-cyan-500/40">
                    {step.step}
                  </span>
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                    {stepIcons[step.icon]}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800/60 font-mono text-[11px] text-cyan-300">
                <span className="text-slate-400 block text-[9px] uppercase">Telemetry Artifact</span>
                {step.highlight}
              </div>

              {idx < dataStorySteps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-slate-900 border border-slate-700 text-cyan-400">
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
