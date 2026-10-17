import React from 'react';
import { 
  Layers, 
  Users, 
  MessageSquare, 
  CheckSquare, 
  BookOpen, 
  Eye, 
  ArrowRight,
  Hash,
  CheckCircle2,
  Calendar,
  Sparkles
} from 'lucide-react';
import { CORE_FEATURES } from '../data/sampleData';

interface FeaturesSectionProps {
  onExploreFeature?: (id: string) => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onExploreFeature }) => {
  const iconMap: Record<string, React.ReactNode> = {
    'shared-workspaces': <Layers className="w-5 h-5 text-[#4F46E5]" />,
    'live-collaboration': <Users className="w-5 h-5 text-[#10B981]" />,
    'connected-conversations': <MessageSquare className="w-5 h-5 text-[#7C3AED]" />,
    'visual-project-planning': <CheckSquare className="w-5 h-5 text-[#2563EB]" />,
    'central-knowledge-hub': <BookOpen className="w-5 h-5 text-[#D97706]" />,
    'team-wide-visibility': <Eye className="w-5 h-5 text-[#E11D48]" />,
  };

  return (
    <section id="features" className="py-20 bg-white border-b border-[#E4E2EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold text-[#4F46E5] uppercase tracking-wider font-mono bg-[#EEF2FF] px-2.5 py-1 rounded">
            COLLABORATIVE ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#0F172A] mt-3 tracking-tight">
            Everything your team needs. <br className="hidden sm:inline" />
            Nothing getting in the way.
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Six interconnected capabilities designed to replace tool sprawl with spatial clarity, live context, and effortless momentum.
          </p>
        </div>

        {/* 6 Feature Bento Cards with Distinct Mini-Visuals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_FEATURES.map((feat) => (
            <div
              key={feat.id}
              className="p-6 rounded-2xl border border-[#E4E2EB] bg-[#FAF9FC] hover:bg-white hover:border-[#4F46E5]/40 hover:shadow-card transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Header & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E4E2EB] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    {iconMap[feat.id]}
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white border border-[#E4E2EB] text-[#4F46E5]">
                    {feat.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#0F172A] font-display group-hover:text-[#4F46E5] transition-colors">
                  {feat.title}
                </h3>

                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {feat.description}
                </p>

                {/* Specific mini-visual per feature */}
                <div className="mt-5 p-3 rounded-xl bg-white border border-[#E4E2EB] shadow-xs text-xs">
                  {feat.id === 'shared-workspaces' && (
                    <div className="space-y-1.5 font-mono text-[11px]">
                      <div className="flex items-center justify-between text-slate-700">
                        <span>📁 Product & Engineering</span>
                        <span className="text-emerald-600 font-bold">Active</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-500">
                        <span>📁 Brand Creative Studio</span>
                        <span>4 channels</span>
                      </div>
                    </div>
                  )}

                  {feat.id === 'live-collaboration' && (
                    <div className="flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="font-semibold text-slate-800">3 teammates active</span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono">Real-time sync</span>
                    </div>
                  )}

                  {feat.id === 'connected-conversations' && (
                    <div className="space-y-1 text-[11px]">
                      <div className="flex items-center gap-1 font-bold text-[#0F172A]">
                        <span>Maya:</span>
                        <span className="font-normal text-slate-600 truncate">"Token export PR ready for review"</span>
                      </div>
                      <div className="text-[10px] text-slate-400">Linked to Task #103</div>
                    </div>
                  )}

                  {feat.id === 'visual-project-planning' && (
                    <div className="grid grid-cols-3 gap-1 text-[10px] text-center font-mono font-bold">
                      <span className="p-1 rounded bg-slate-100 text-slate-700">Backlog (2)</span>
                      <span className="p-1 rounded bg-indigo-50 text-indigo-700">In Dev (3)</span>
                      <span className="p-1 rounded bg-emerald-50 text-emerald-700">Done (8)</span>
                    </div>
                  )}

                  {feat.id === 'central-knowledge-hub' && (
                    <div className="flex items-center justify-between text-[11px] text-slate-700">
                      <span className="font-semibold">📄 2026 Spatial Design Specs</span>
                      <span className="font-mono text-[10px] text-slate-400">v2.4</span>
                    </div>
                  )}

                  {feat.id === 'team-wide-visibility' && (
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-600">Sprint 24 Health</span>
                      <span className="font-bold text-emerald-600 font-mono">92% on schedule</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#E4E2EB] flex items-center justify-between text-[11px]">
                <span className="text-slate-500">{feat.miniSnippet}</span>
                <span className="text-[#4F46E5] font-semibold flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                  Explore →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
