import React, { useState } from 'react';
import { PROMPTLAB_FAQS } from '../data/sampleData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 lg:py-28 bg-[#0B0F19] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Developer Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently asked questions.
          </h2>
          <p className="mt-3 text-slate-300 text-base">
            Honest answers about sandbox simulation, model endpoints, security, and prompt evaluation.
          </p>
        </div>

        {/* 6 FAQ Accordions */}
        <div className="space-y-3 font-mono">
          {PROMPTLAB_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className="rounded-xl border border-slate-800 bg-[#0E1526] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-900/60 transition-colors cursor-pointer"
                >
                  <span className="text-sm font-semibold text-slate-200 font-sans">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-cyan-400 transition-transform duration-200 shrink-0 ml-4 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed border-t border-slate-800/60">
                    <p>{faq.answer}</p>
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
