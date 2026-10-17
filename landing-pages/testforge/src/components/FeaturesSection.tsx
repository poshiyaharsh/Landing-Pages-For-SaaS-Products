import React from 'react';
import {
  FolderTree,
  Bug,
  Zap,
  LineChart,
  GitPullRequest,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { testForgeFeatures } from '../data/sampleData';

const iconMap: Record<string, React.ReactNode> = {
  FolderTree: <FolderTree className="w-5 h-5 text-emerald-400" />,
  Bug: <Bug className="w-5 h-5 text-rose-400" />,
  Zap: <Zap className="w-5 h-5 text-amber-400" />,
  LineChart: <LineChart className="w-5 h-5 text-teal-400" />,
  GitPullRequest: <GitPullRequest className="w-5 h-5 text-cyan-400" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-emerald-300" />,
};

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-[#0A0F1D] border-t border-white/10 font-mono scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#10172A] border border-emerald-500/30 text-emerald-400 text-xs">
            <span>DEVELOPER TOOLING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Developer tools that save hours, not seconds.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-sans">
            Replace noisy CI logs and endless scrolling with structured failure triage, flaky test isolation, and precision PR coverage gates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testForgeFeatures.map((feat) => (
            <div
              key={feat.title}
              className="p-6 rounded-2xl bg-[#10172A] border border-white/10 hover:border-emerald-500/40 transition-all hover:-translate-y-1 group"
            >
              <div className="w-11 h-11 rounded-xl bg-[#18233C] border border-white/10 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                {iconMap[feat.icon]}
              </div>
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                {feat.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4 font-sans">
                {feat.description}
              </p>
              <div className="pt-3 border-t border-white/5 flex items-center gap-2 text-[11px] text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{feat.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
