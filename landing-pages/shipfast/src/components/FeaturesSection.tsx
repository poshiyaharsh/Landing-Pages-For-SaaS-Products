import React from 'react';
import {
  FolderPlus,
  GitPullRequest,
  Activity,
  ShieldCheck,
  CheckSquare,
  LayoutDashboard
} from 'lucide-react';
import { SHIPFAST_FEATURES } from '../data/sampleData';

export const FeaturesSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    FolderPlus: <FolderPlus className="w-5 h-5 text-blue-600" />,
    GitPullRequest: <GitPullRequest className="w-5 h-5 text-indigo-600" />,
    Activity: <Activity className="w-5 h-5 text-emerald-600" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-sky-600" />,
    CheckSquare: <CheckSquare className="w-5 h-5 text-amber-600" />,
    LayoutDashboard: <LayoutDashboard className="w-5 h-5 text-purple-600" />,
  };

  return (
    <section id="features" className="py-20 lg:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <span>Built For Execution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Everything between the first commit and{' '}
            <span className="text-blue-600">launch day.</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Stop stitching together disjointed boilerplate repos, half-baked auth snippets, and unmaintained scripts.
          </p>
        </div>

        {/* 6 Feature Bento Cards with Mini-Visuals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SHIPFAST_FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="rounded-2xl bg-white border border-slate-200 hover:border-blue-400 p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {iconMap[feature.icon] || <Activity className="w-5 h-5 text-blue-600" />}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 px-2 py-0.5 rounded bg-slate-100">
                    MODULE // {feature.id}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {feature.description}
                </p>
              </div>

              {/* Realistic Mini-Visual Snippet */}
              <div className="p-3 bg-[#0B0F19] border border-slate-800 rounded-xl font-mono text-[11px] text-slate-300">
                <div className="flex items-center justify-between text-[10px] text-slate-500 border-b border-slate-800 pb-1.5 mb-2">
                  <span className="text-blue-400 font-semibold">{feature.highlight}</span>
                  <span>cli-spec</span>
                </div>
                <div className="text-slate-300 truncate">
                  {feature.id === 'project-init' && 'init --template saas-pro --auth lucia --db pg'}
                  {feature.id === 'dev-workflow' && 'husky > pre-commit: tsc --noEmit && eslint passed'}
                  {feature.id === 'build-test-visibility' && 'bundle: 48kB | e2e tests: 100% | type errors: 0'}
                  {feature.id === 'deployment-prep' && 'secrets vault: 12/12 env keys validated for prod'}
                  {feature.id === 'launch-checklist' && 'checklist: DNS ssl [OK], stripe hook [OK]'}
                  {feature.id === 'project-overview' && 'sprint: 92% complete | version: v1.0.0-rc2'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
