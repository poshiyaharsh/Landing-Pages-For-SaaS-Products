import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/sampleData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-nest-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-nest-blue font-semibold">
            ENGINEERING FEEDBACK
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-nest-text mt-3">
            Less infrastructure overhead. More room to build.
          </h2>
          <p className="text-base text-nest-secondary mt-4 leading-relaxed">
            How engineering leads, site reliability teams, and technical founders simplify their cloud operations.
          </p>
        </div>

        {/* 3 Restrained Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-nest-bg border border-nest-border rounded-nest-xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-subtle transition-shadow"
            >
              <div className="space-y-4">
                <Quote className="w-5 h-5 text-nest-blue opacity-70" />
                <p className="text-sm text-nest-text leading-relaxed font-normal">
                  “{t.quote}”
                </p>
              </div>

              <div className="pt-6 border-t border-nest-border/60 mt-6 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold font-display text-nest-text">{t.author}</h4>
                  <p className="text-[11px] text-nest-secondary font-mono mt-0.5">
                    {t.company} · {t.role}
                  </p>
                </div>
                <span className="text-[10px] font-mono font-bold text-nest-blue bg-white border border-nest-border px-2 py-0.5 rounded shadow-subtle">
                  {t.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Disclaimer */}
        <p className="text-[11px] font-mono text-nest-muted text-center mt-8">
          * Illustrative workflow scenarios created to model engineering feedback patterns. Not verified commercial endorsements.
        </p>
      </div>
    </section>
  );
};
