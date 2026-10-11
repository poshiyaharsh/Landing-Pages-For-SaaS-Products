import React, { useState } from 'react';
import { FAQS_DATA as FAQS } from '../data/voiceflowData.ts';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0E1320]/80 border-t border-border-subtle relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4 tracking-wider uppercase">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>KNOWLEDGE BASE & ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Questions about voice intelligence?
          </h2>
          <p className="text-secondary max-w-xl text-base sm:text-lg">
            Detailed answers regarding speech recognition latency, acoustic models, browser capabilities, and integration protocols.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#131A28] border-cyan-500/40 shadow-[0_4px_20px_rgba(82,232,255,0.04)]'
                    : 'bg-[#080B12]/80 border-border-subtle hover:border-border-subtle/80'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base sm:text-lg font-medium transition-colors ${
                    isOpen ? 'text-cyan-300' : 'text-slate-100 hover:text-white'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full bg-[#192235] border border-border-subtle flex items-center justify-center shrink-0 ml-4 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 border-cyan-500/40 text-cyan-400' : 'text-secondary'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-secondary text-sm sm:text-base leading-relaxed border-t border-border-subtle/30 mt-1">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional support contact card */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#131A28]/50 border border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Have custom model requirements?</h4>
              <p className="text-xs text-secondary">Our voice AI engineering architects provide technical consultations.</p>
            </div>
          </div>
          <a
            href="#footer"
            className="px-4 py-2 rounded-lg bg-[#192235] hover:bg-[#202C45] border border-border-subtle text-xs font-mono text-cyan-400 transition-colors"
          >
            Reach Engineering
          </a>
        </div>
      </div>
    </section>
  );
};
