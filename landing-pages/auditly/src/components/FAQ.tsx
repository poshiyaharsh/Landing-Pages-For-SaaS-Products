import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';
import { FAQ_ITEMS } from '../data/sampleData';

export const FAQ: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-6']);

  const toggleAccordion = (id: string) => {
    setOpenIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-20 bg-white border-b border-[#DFE6EF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-[#3569D4] uppercase tracking-wider font-mono bg-[#EAF1FF] px-2.5 py-1 rounded">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#142033] mt-3 tracking-tight">
            Compliance questions, answered clearly.
          </h2>
          <p className="text-base text-[#64748B] mt-3 leading-relaxed max-w-2xl mx-auto">
            Clear, transparent details on how Auditly helps teams structure compliance operations, map requirements, and maintain audit readiness.
          </p>
        </div>

        {/* 10-Item Accordion */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIds.includes(item.id);

            return (
              <div
                key={item.id}
                className="rounded-xl border border-[#DFE6EF] bg-[#F6F8FB] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#3569D4] focus:ring-inset"
                >
                  <span className="flex items-center gap-3 text-sm sm:text-base font-bold text-[#142033]">
                    <span className="font-mono text-xs text-[#3569D4] font-semibold">
                      {String(index + 1).padStart(2, '0')}.
                    </span>
                    <span>{item.question}</span>
                  </span>

                  <ChevronDown
                    className={`w-4 h-4 text-[#64748B] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#3569D4]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#64748B] leading-relaxed border-t border-[#DFE6EF]/60 bg-white">
                    <p className="pt-2">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Regulatory Distinction Note */}
        <div className="mt-12 p-4 bg-[#F6F8FB] border border-[#DFE6EF] rounded-xl text-center text-xs text-[#64748B]">
          <strong>Notice on Regulatory Independence:</strong> Auditly provides software tools to manage, monitor, and organize compliance workflows. Auditly is not an auditing firm, does not issue certified attestations, and does not replace the independent testing performed by CPA firms or accredited ISO registrars.
        </div>
      </div>
    </section>
  );
};
