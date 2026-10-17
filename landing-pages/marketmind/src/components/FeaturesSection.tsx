import React from 'react';
import {
  Terminal,
  TrendingUp,
  Layers,
  Activity,
  FileText,
  Zap,
  CheckCircle2,
} from 'lucide-react';
import { marketMindFeatures } from '../data/sampleData';

const iconMap: Record<string, React.ReactNode> = {
  Terminal: <Terminal className="w-5 h-5 text-amber-400" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-emerald-400" />,
  Layers: <Layers className="w-5 h-5 text-cyan-400" />,
  Activity: <Activity className="w-5 h-5 text-yellow-400" />,
  FileText: <FileText className="w-5 h-5 text-indigo-400" />,
  Zap: <Zap className="w-5 h-5 text-amber-300" />,
};

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-[#0B101D] border-t border-white/10 font-mono scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0E1626] border border-amber-500/30 text-amber-400 text-xs">
            <span>INSTITUTIONAL TOOLKIT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            High-caliber market intelligence.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-sans">
            Engineered for analysts, fund managers, and strategy executives who need dense, reliable market telemetry without promotional hype.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {marketMindFeatures.map((feat) => (
            <div
              key={feat.title}
              className="p-6 rounded-xl bg-[#0E1626] border border-white/10 hover:border-amber-500/40 transition-all hover:-translate-y-1 group"
            >
              <div className="w-11 h-11 rounded-lg bg-[#141E33] border border-white/10 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                {iconMap[feat.icon]}
              </div>
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                {feat.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4 font-sans">
                {feat.description}
              </p>
              <div className="pt-3 border-t border-white/5 flex items-center gap-2 text-[11px] text-amber-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>{feat.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
