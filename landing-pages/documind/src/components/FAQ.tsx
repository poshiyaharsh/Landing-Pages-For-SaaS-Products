import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/sampleData';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-white border-b border-docu-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-docu-accent font-semibold">
            COMMON INQUIRIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-docu-text mt-3">
            Everything you need to know.
          </h2>
          <p className="text-base text-docu-secondary mt-4 leading-relaxed max-w-xl mx-auto">
            Honest answers about document formats, coordinate citations, privacy sandboxing, and enterprise capabilities.
          </p>
        </div>

        {/* 10 Accordion Questions */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="border border-docu-border rounded-docu overflow-hidden bg-docu-bg/40 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-white transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-docu-text flex items-center gap-2.5">
                    <span className="text-xs font-mono text-docu-muted">
                      {idx < 9 ? `0${idx + 1}` : idx + 1}.
                    </span>
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-docu-secondary shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-docu-accent' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-docu-secondary leading-relaxed bg-white border-t border-docu-border/60 animate-fade-in">
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
