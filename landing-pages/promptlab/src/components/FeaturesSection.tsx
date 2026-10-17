import React from 'react';
import { GitBranch, Sliders, Cpu, CheckSquare, History, FileCode, ArrowRight } from 'lucide-react';
import { PROMPTLAB_FEATURES } from '../data/sampleData';

interface FeaturesSectionProps {
  onLearnMore?: (featureId: string) => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onLearnMore }) => {
  const iconMap: Record<string, React.ReactNode> = {
    GitBranch: <GitBranch className="w-5 h-5 text-cyan-400" />,
    Sliders: <Sliders className="w-5 h-5 text-teal-400" />,
    Cpu: <Cpu className="w-5 h-5 text-indigo-400" />,
    CheckSquare: <CheckSquare className="w-5 h-5 text-emerald-400" />,
    History: <History className="w-5 h-5 text-amber-400" />,
    FileCode: <FileCode className="w-5 h-5 text-violet-400" />,
  };

  return (
    <section id="features" className="py-20 lg:py-28 bg-[#0B0F19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
            <span>Precision Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Your entire prompt workflow,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
              under one roof.
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Say goodbye to messy spreadsheets, unsaved chat windows, and untracked prompt revisions.
          </p>
        </div>

        {/* 6 Feature Bento Cards with Mini-Visuals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROMPTLAB_FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="rounded-2xl bg-[#0E1526] border border-slate-800 hover:border-cyan-500/40 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/30 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {iconMap[feature.icon] || <Cpu className="w-5 h-5 text-cyan-400" />}
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400/80 px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/20">
                    Feature // {feature.id}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {feature.description}
                </p>
              </div>

              {/* Realistic Mini-Visual */}
              <div className="p-3 bg-[#080C16] border border-slate-800/90 rounded-xl font-mono text-[11px] text-slate-300">
                <div className="flex items-center justify-between text-[10px] text-slate-500 border-b border-slate-800 pb-1.5 mb-2">
                  <span className="text-cyan-400/90 font-semibold">{feature.highlight}</span>
                  <span>demo-trace</span>
                </div>
                <div className="text-slate-300 truncate">
                  {feature.id === 'versioning' && 'git branch: prompt/v3-cot-chain -> score +14%'}
                  {feature.id === 'variants' && 'diff: - zero-shot + few-shot-reasoning (tokens -18)'}
                  {feature.id === 'comparison' && 'GPT-4o vs Claude 3.5: accuracy parity, -40ms latency'}
                  {feature.id === 'rubrics' && 'criteria: [clarity: 98%, tone: 92%, safety: 100%]'}
                  {feature.id === 'history' && 'run #412: 12 variants evaluated against 50 eval rows'}
                  {feature.id === 'templates' && 'pattern: [role] + [context] + [schema] + [guardrails]'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
