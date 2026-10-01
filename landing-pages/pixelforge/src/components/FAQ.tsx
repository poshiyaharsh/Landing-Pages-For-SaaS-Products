import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/pixelforgeData';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 relative bg-studio-950/40 border-t border-studio-border/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-studio-900 border border-studio-border text-xs font-mono tracking-widest uppercase text-neon-cyan">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>CLARITY & ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-studio-muted font-normal">
            Everything you need to know about PixelForge’s generative workflow, token exports, and team collaboration.
          </p>
        </div>

        {/* Accordion Items List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-studio-border/80 bg-studio-900/60 overflow-hidden transition-colors hover:border-studio-subtle"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-violet"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-base sm:text-lg text-white tracking-tight">
                    {item.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-lg bg-studio-950 border border-studio-border text-studio-muted transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-neon-cyan border-neon-cyan/40' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-studio-muted leading-relaxed font-normal border-t border-studio-border/40 animate-in fade-in duration-200">
                    {item.answer}
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
