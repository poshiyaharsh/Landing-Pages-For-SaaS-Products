import React, { useState } from 'react';
import { Plus, Minus, ChevronDown } from 'lucide-react';
import { FAQS } from '../data/brandData';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 sm:py-36 bg-brand-ivory border-b border-brand-border">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-brand-taupe block mb-3">
            QUESTIONS & ANSWERS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-brand-ink leading-tight mb-4">
            A few things worth knowing.
          </h2>
          <p className="text-base sm:text-lg text-brand-charcoal/80 font-sans leading-relaxed max-w-xl mx-auto">
            Everything you need to know about Brandly workspaces, file standards, permissions, and security.
          </p>
        </div>

        {/* Clean Editorial Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className="rounded-lg border border-brand-border bg-brand-soft-white overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none focus-visible:bg-brand-champagne/20"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-serif text-lg sm:text-xl font-medium text-brand-ink">
                    {faq.question}
                  </span>
                  <span className="w-8 h-8 rounded-full border border-brand-border bg-brand-ivory flex items-center justify-center flex-shrink-0 text-brand-charcoal">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-6 pb-7 sm:px-7 text-xs sm:text-sm text-brand-charcoal/80 font-sans leading-relaxed border-t border-brand-border/60 pt-4 animate-fade-in"
                  >
                    {faq.answer}
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
