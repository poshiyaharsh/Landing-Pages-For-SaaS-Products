import React from 'react';
import {
  Briefcase,
  Users,
  FileCheck,
  MessageSquare,
  TrendingUp,
  BrainCircuit,
  CheckCircle2,
} from 'lucide-react';
import { talentFeatures } from '../data/sampleData';

const iconMap: Record<string, React.ReactNode> = {
  Briefcase: <Briefcase className="w-5 h-5 text-violet-400" />,
  Users: <Users className="w-5 h-5 text-indigo-400" />,
  FileCheck: <FileCheck className="w-5 h-5 text-teal-400" />,
  MessageSquare: <MessageSquare className="w-5 h-5 text-purple-400" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-cyan-400" />,
  BrainCircuit: <BrainCircuit className="w-5 h-5 text-amber-400" />,
};

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-[#0B0F19] border-t border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-semibold uppercase">
            <span>HUMAN-CENTERED CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Structure, fairness, and speed.
          </h2>
          <p className="text-slate-300 text-base">
            Replace subjective gut-feel hiring with objective competency rubrics, collaborative debriefs, and explainable AI support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {talentFeatures.map((feat) => (
            <div
              key={feat.title}
              className="p-6 sm:p-7 rounded-3xl bg-[#121A2D] border border-white/10 hover:border-violet-500/40 transition-all hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#1B2640] border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {iconMap[feat.icon]}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-violet-300 transition-colors">
                {feat.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {feat.description}
              </p>
              <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-teal-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                <span>{feat.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
