import React from 'react';
import {
  Inbox,
  Sliders,
  Database,
  CheckSquare,
  ShieldCheck,
  FileText,
  CheckCircle2,
} from 'lucide-react';
import { privacyFeatures } from '../data/sampleData';

const iconMap: Record<string, React.ReactNode> = {
  Inbox: <Inbox className="w-5 h-5 text-teal-400" />,
  Sliders: <Sliders className="w-5 h-5 text-emerald-400" />,
  Database: <Database className="w-5 h-5 text-cyan-400" />,
  CheckSquare: <CheckSquare className="w-5 h-5 text-teal-300" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-emerald-300" />,
  FileText: <FileText className="w-5 h-5 text-indigo-400" />,
};

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-[#0B0F17] border-t border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-semibold uppercase">
            <span>OPERATIONAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Structure your privacy obligations.
          </h2>
          <p className="text-slate-300 text-base">
            Turn complex regulatory demands into predictable, automated team workflows across engineering, security, and legal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {privacyFeatures.map((feat) => (
            <div
              key={feat.title}
              className="p-6 sm:p-7 rounded-3xl bg-[#111827] border border-white/10 hover:border-teal-500/40 transition-all hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#1A253A] border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {iconMap[feat.icon]}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-teal-300 transition-colors">
                {feat.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {feat.description}
              </p>
              <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-teal-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                <span>{feat.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
