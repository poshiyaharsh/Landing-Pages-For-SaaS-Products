import React from 'react';
import { Rocket, Users, ShieldAlert, Briefcase, BarChart3, Layers, Check } from 'lucide-react';
import { USE_CASES } from '../data/sampleData';

const iconMap = [Rocket, Users, ShieldAlert, Briefcase, BarChart3, Layers];

export const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-24 bg-nest-bg border-b border-nest-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-nest-blue font-semibold">
            TAILORED SOLUTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-nest-text mt-3">
            Built for teams shipping real software.
          </h2>
          <p className="text-base text-nest-secondary mt-4 leading-relaxed">
            From solo technical founders deploying their first backend to platform teams governing hundreds of container microservices.
          </p>
        </div>

        {/* 6 Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {USE_CASES.map((uc, idx) => {
            const Icon = iconMap[idx % iconMap.length];

            return (
              <div
                key={uc.id}
                className="bg-white border border-nest-border rounded-nest-xl p-6 shadow-subtle hover:border-nest-blue/40 hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded bg-nest-bg border border-nest-border flex items-center justify-center text-nest-blue shadow-subtle">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-nest-secondary bg-nest-bg border border-nest-border px-2 py-0.5 rounded font-semibold">
                      {uc.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold font-display text-nest-text mb-2">{uc.title}</h3>

                  <p className="text-xs text-nest-secondary leading-relaxed mb-5">
                    {uc.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-nest-border/60">
                    {uc.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-nest-secondary">
                        <Check className="w-3.5 h-3.5 text-nest-blue shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
