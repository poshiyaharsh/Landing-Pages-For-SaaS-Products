import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/sampleData';

export const FAQSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);

  const toggleAccordion = (id: string) => {
    setOpenIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-20 bg-[#FAF9FC] border-b border-[#E4E2EB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-[#4F46E5] uppercase tracking-wider font-mono bg-[#EEF2FF] px-2.5 py-1 rounded">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#0F172A] mt-3 tracking-tight">
            Everything you need to know about SyncSpace.
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Common questions regarding workspace setup, live presence, document organization, and multi-team scale.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIds.includes(item.id);

            return (
              <div
                key={item.id}
                className="rounded-xl border border-[#E4E2EB] bg-white overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-inset"
                >
                  <span className="flex items-center gap-3 text-sm sm:text-base font-bold text-[#0F172A]">
                    <span className="font-mono text-xs text-[#4F46E5] font-semibold">
                      {String(index + 1).padStart(2, '0')}.
                    </span>
                    <span>{item.question}</span>
                  </span>

                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#4F46E5]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-[#E4E2EB]/60">
                    <p className="pt-2">{item.answer}</p>
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
