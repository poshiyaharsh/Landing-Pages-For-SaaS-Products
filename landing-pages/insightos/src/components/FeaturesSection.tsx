import React from 'react';
import {
  Layers,
  BarChart3,
  TrendingUp,
  Filter,
  Clock,
  Users2,
  CheckCircle2,
} from 'lucide-react';
import { featuresList } from '../data/sampleData';

const iconMap: Record<string, React.ReactNode> = {
  Layers: <Layers className="w-5 h-5 text-cyan-400" />,
  BarChart3: <BarChart3 className="w-5 h-5 text-blue-400" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-emerald-400" />,
  Filter: <Filter className="w-5 h-5 text-indigo-400" />,
  Clock: <Clock className="w-5 h-5 text-sky-400" />,
  Users2: <Users2 className="w-5 h-5 text-violet-400" />,
};

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-slate-950 border-t border-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <span>DECISION ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Built for clarity, speed, and shared context.
          </h2>
          <p className="text-slate-400 text-base">
            Replace fragmented BI tools, spreadsheet wrangling, and stale exports with a single synchronized intelligence operating system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuresList.map((feat) => (
            <div
              key={feat.title}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {iconMap[feat.icon] || <Layers className="w-5 h-5 text-cyan-400" />}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-cyan-300 transition-colors">
                {feat.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                {feat.description}
              </p>
              <div className="pt-3 border-t border-slate-800/60 flex items-center gap-2 text-xs font-mono text-cyan-400/90">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{feat.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
