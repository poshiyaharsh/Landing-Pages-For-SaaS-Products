import React from 'react';
import { Network, GitFork, Layers, LayoutTemplate, Activity, Users } from 'lucide-react';
import { FLOWOPS_FEATURES } from '../data/sampleData';

export const FeaturesSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Network: <Network className="w-5 h-5 text-blue-600" />,
    GitFork: <GitFork className="w-5 h-5 text-indigo-600" />,
    Layers: <Layers className="w-5 h-5 text-purple-600" />,
    LayoutTemplate: <LayoutTemplate className="w-5 h-5 text-amber-600" />,
    Activity: <Activity className="w-5 h-5 text-emerald-600" />,
    Users: <Users className="w-5 h-5 text-sky-600" />,
  };

  return (
    <section id="features" className="py-20 lg:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <span>Orchestration Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Engineered for enterprise scale.{' '}
            <span className="text-blue-600">Built for speed.</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            FlowOps gives operations, engineering, and RevOps teams unified visibility across every automated business process.
          </p>
        </div>

        {/* 6 Feature Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FLOWOPS_FEATURES.map((feat) => (
            <div
              key={feat.id}
              className="rounded-2xl bg-white border border-slate-200 hover:border-blue-400 p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {iconMap[feat.icon] || <Network className="w-5 h-5 text-blue-600" />}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 px-2 py-0.5 rounded bg-slate-100">
                    MODULE // {feat.id}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {feat.description}
                </p>
              </div>

              {/* Realistic Mini-Visual */}
              <div className="p-3 bg-slate-900 text-slate-300 rounded-xl font-mono text-[11px] border border-slate-800">
                <div className="flex items-center justify-between text-[10px] text-slate-500 border-b border-slate-800 pb-1.5 mb-2">
                  <span className="text-blue-400 font-semibold">{feat.highlight}</span>
                  <span>status: 200</span>
                </div>
                <div className="text-slate-300 truncate">
                  {feat.id === 'builder' && 'trigger.on("webhook") -> branch(filter) -> action("slack")'}
                  {feat.id === 'conditional' && 'if (lead.score > 85 && country === "US") route(tier1)'}
                  {feat.id === 'connections' && 'auth: OAuth2 + Bearer token vault encrypted AES-256'}
                  {feat.id === 'templates' && 'template: RevOps Fast-Lead Router [Verified Blueprint]'}
                  {feat.id === 'run-history' && 'run #10842: 12 steps executed in 410ms (0 dropped)'}
                  {feat.id === 'team-management' && 'RBAC: staging-sandbox vs prod-isolated workers'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
