import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/sampleData';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-white border-b border-nest-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-nest-blue font-semibold">
            COMMON INQUIRIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-nest-text mt-3">
            Cloud infrastructure, explained clearly.
          </h2>
          <p className="text-base text-nest-secondary mt-4 leading-relaxed max-w-xl mx-auto">
            Honest answers about deployments, provider support, observability, and collaborative cluster management.
          </p>
        </div>

        {/* 10 Accordion Questions */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="border border-nest-border rounded-nest overflow-hidden bg-nest-bg/40 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-white transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-bold font-display text-nest-text flex items-center gap-2.5">
                    <span className="text-xs font-mono text-nest-muted">
                      {idx < 9 ? `0${idx + 1}` : idx + 1}.
                    </span>
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-nest-secondary shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-nest-blue' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-nest-secondary leading-relaxed bg-white border-t border-nest-border/60 animate-fade-in font-normal">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
