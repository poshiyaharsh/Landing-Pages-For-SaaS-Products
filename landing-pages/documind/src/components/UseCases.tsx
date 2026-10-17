import React from 'react';
import { GraduationCap, Briefcase, Scale, TrendingUp, Users, Code, ArrowRight } from 'lucide-react';
import { USE_CASES } from '../data/sampleData';

const iconMap = {
  GraduationCap,
  Briefcase,
  Scale,
  TrendingUp,
  Users,
  Code,
};

export const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-24 bg-white border-b border-docu-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-docu-accent font-semibold">
            TAILORED SOLUTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-docu-text mt-3">
            Intelligence for every kind of document.
          </h2>
          <p className="text-base text-docu-secondary mt-4 leading-relaxed">
            Whether you are auditing complex regulatory mandates, reviewing clinical literature, or reconciling fiscal ledgers, DocuMind adapts to your workflow.
          </p>
        </div>

        {/* 6 Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {USE_CASES.map((uc) => {
            const Icon = iconMap[uc.icon as keyof typeof iconMap] || Briefcase;

            return (
              <div
                key={uc.id}
                className="bg-docu-bg border border-docu-border rounded-docu-xl p-6 flex flex-col justify-between hover:border-docu-accent/40 hover:shadow-subtle transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-md bg-white border border-docu-border group-hover:border-docu-accent/40 flex items-center justify-center text-docu-accent transition-colors shadow-subtle">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-docu-secondary bg-white px-2 py-0.5 rounded border border-docu-border">
                      {uc.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-docu-text mb-2">{uc.title}</h3>

                  <p className="text-xs text-docu-secondary leading-relaxed mb-4">
                    {uc.description}
                  </p>

                  {/* Document Examples */}
                  <div className="space-y-1.5 pt-3 border-t border-docu-border/60">
                    <span className="text-[10px] font-mono text-docu-muted uppercase tracking-wider block">
                      Common Files:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {uc.examples.map((ex) => (
                        <span
                          key={ex}
                          className="px-2 py-0.5 rounded bg-white border border-docu-border text-[11px] text-docu-secondary font-mono"
                        >
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Honest Legal / Disclaimer Note */}
                {uc.disclaimer && (
                  <p className="text-[10px] text-docu-muted italic mt-4 pt-2 border-t border-docu-border/60">
                    * {uc.disclaimer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
