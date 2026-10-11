import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/brandData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 sm:py-36 bg-brand-ivory border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-brand-taupe block mb-3">
            STUDIO PERSPECTIVES
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-brand-ink leading-tight mb-4">
            Better organization.<br />
            <span className="italic font-serif text-brand-charcoal">Better brand experiences.</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-charcoal/80 font-sans leading-relaxed">
            Illustrative perspectives from fictional design studios on how a unified brand workspace alters everyday creative velocity.
          </p>
        </div>

        {/* 3 EDITORIAL TESTIMONIAL LAYOUTS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {TESTIMONIALS.map((test, idx) => (
            <div
              key={test.id}
              className="bg-brand-soft-white rounded-lg border border-brand-border p-8 sm:p-10 flex flex-col justify-between shadow-subtle hover:shadow-editorial transition-all duration-300 relative group"
            >
              <div className="space-y-6">
                <Quote className="w-8 h-8 text-brand-taupe/40 stroke-[1.25]" />
                <p className="font-serif text-xl sm:text-2xl text-brand-ink leading-relaxed italic">
                  “{test.quote}”
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-brand-border/60 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-brand-border bg-brand-ivory flex items-center justify-center font-serif text-sm font-bold text-brand-ink">
                  {test.avatarSeed}
                </div>
                <div>
                  <h4 className="font-serif text-base font-medium text-brand-ink">
                    {test.author}
                  </h4>
                  <span className="text-xs text-brand-taupe font-mono block">
                    {test.role}, {test.brand}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <span className="text-[11px] font-mono text-brand-taupe uppercase tracking-widest">
            Fictional concept testimonials representing prototype workflows.
          </span>
        </div>
      </div>
    </section>
  );
};
