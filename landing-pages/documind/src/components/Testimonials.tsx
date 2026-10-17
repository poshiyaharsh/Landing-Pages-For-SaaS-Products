import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/sampleData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-docu-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-docu-accent font-semibold">
            USER PERSPECTIVES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-docu-text mt-3">
            Less searching. More understanding.
          </h2>
          <p className="text-base text-docu-secondary mt-4 leading-relaxed">
            How researchers, product strategists, and operations leaders streamline their document workflows.
          </p>
        </div>

        {/* 3 Understated Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-docu-bg border border-docu-border rounded-docu-xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-subtle transition-shadow"
            >
              <div className="space-y-4">
                <Quote className="w-5 h-5 text-docu-accent opacity-60" />
                <p className="text-sm text-docu-text leading-relaxed font-normal">
                  “{t.quote}”
                </p>
              </div>

              <div className="pt-6 border-t border-docu-border/60 mt-6 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-semibold text-docu-text">{t.author}</h4>
                  <p className="text-[11px] text-docu-secondary font-mono mt-0.5">
                    {t.company} · {t.role}
                  </p>
                </div>
                <span className="text-[10px] font-mono font-medium text-docu-accent bg-white border border-docu-border px-2 py-0.5 rounded">
                  {t.metric}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Clear Prototype Disclaimer */}
        <p className="text-[11px] font-mono text-docu-muted text-center mt-8">
          * Illustrative workflow scenarios created to model enterprise feedback patterns. Not verified commercial endorsements.
        </p>
      </div>
    </section>
  );
};
