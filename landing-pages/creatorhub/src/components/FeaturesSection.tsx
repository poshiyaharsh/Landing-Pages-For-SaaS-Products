import React from 'react';
import {
  Calendar,
  BarChart2,
  Briefcase,
  DollarSign,
  Sparkles,
  FolderHeart,
  CheckCircle2,
} from 'lucide-react';
import { featuresList } from '../data/sampleData';

const iconMap: Record<string, React.ReactNode> = {
  Calendar: <Calendar className="w-5 h-5 text-pink-400" />,
  BarChart2: <BarChart2 className="w-5 h-5 text-violet-400" />,
  Briefcase: <Briefcase className="w-5 h-5 text-rose-400" />,
  DollarSign: <DollarSign className="w-5 h-5 text-emerald-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-amber-400" />,
  FolderHeart: <FolderHeart className="w-5 h-5 text-fuchsia-400" />,
};

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-[#0B0A10] border-t border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-semibold uppercase">
            <span>STUDIO INFRASTRUCTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            Engineered for high-output creators.
          </h2>
          <p className="text-slate-300 text-base">
            Eliminate disorganized spreadsheets, missed sponsor deadlines, and chaotic editor group chats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuresList.map((feat) => (
            <div
              key={feat.title}
              className="p-6 sm:p-7 rounded-3xl bg-[#140F22] border border-white/10 hover:border-pink-500/40 transition-all hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#1F1735] border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-inner">
                {iconMap[feat.icon]}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-pink-300 transition-colors">
                {feat.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {feat.description}
              </p>
              <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-pink-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{feat.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
