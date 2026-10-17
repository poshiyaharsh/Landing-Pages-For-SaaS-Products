import React from 'react';
import { internalGrowthPaths } from '../data/sampleData';
import { TrendingUp, ArrowRight, Award, Compass } from 'lucide-react';

export const TalentDevelopmentSection: React.FC = () => {
  return (
    <section id="growth" className="py-20 md:py-28 bg-[#0B0F19] border-t border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-semibold uppercase">
            <Compass className="w-3.5 h-3.5" />
            <span>CONTINUOUS TALENT MOBILITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Grow your people, retain your advantage.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            The same objective competency matrices used in recruiting unlock clear internal promotion tracks and cross-team project staffing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {internalGrowthPaths.map((path) => (
            <div
              key={path.domain}
              className="p-6 rounded-3xl bg-[#121A2D] border border-white/10 flex flex-col justify-between hover:border-violet-500/40 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-bold text-violet-400 font-mono uppercase tracking-wider">
                    {path.domain}
                  </span>
                  <Award className="w-4 h-4 text-teal-400" />
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">
                    Current Team Baseline
                  </span>
                  <p className="text-xs text-slate-200">{path.currentStrength}</p>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">
                    Identified Growth Catalyst
                  </span>
                  <p className="text-xs text-teal-300 font-medium">{path.upskillOpportunity}</p>
                </div>

                <div className="p-3 rounded-xl bg-[#0B0F19] border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono text-slate-400 block">Staffing Assignment</span>
                  <p className="text-xs text-white font-semibold">{path.internalProject}</p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="text-violet-300">{path.growthImpact}</span>
                <ArrowRight className="w-3.5 h-3.5 text-violet-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
