import React, { useState } from 'react';
import { FAQ_LIST } from '../data/codepilotData';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-28 relative bg-[#07080A] border-t border-codepilot-border" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>DEVELOPER KNOWLEDGE BASE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-codepilot-white mb-6">
            Frequently Asked Questions
          </h2>

          <p className="text-base sm:text-lg text-codepilot-muted leading-relaxed">
            Everything you need to know about inference privacy, editor compatibility, and repository intelligence.
          </p>
        </div>

        {/* Animated Accordion List */}
        <div className="space-y-3 font-sans">
          {FAQ_LIST.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.question}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-codepilot-panel border-brand-green/40 shadow-card-subtle'
                    : 'bg-codepilot-panel/60 border-codepilot-border hover:border-codepilot-border-highlight'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-brand-green font-bold shrink-0">
                      0{idx + 1}
                    </span>
                    <span className="text-base sm:text-lg font-semibold text-codepilot-white">
                      {item.question}
                    </span>
                  </div>

                  <ChevronDown
                    className={`w-4 h-4 text-codepilot-dim transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-brand-green' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-codepilot-muted font-sans leading-relaxed border-t border-codepilot-border/40 animate-fadeIn">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Help Callout */}
        <div className="mt-12 p-5 rounded-xl bg-codepilot-panel border border-codepilot-border flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-5 h-5 text-brand-green" />
            <span className="text-codepilot-text">
              Have questions about self-hosted deployments or VPC private networking?
            </span>
          </div>

          <a
            href="mailto:engineering@codepilot.internal"
            className="px-4 py-2 rounded bg-codepilot-surface hover:bg-codepilot-hover border border-codepilot-border text-brand-green font-semibold transition-colors shrink-0"
          >
            Chat with an Engineer →
          </a>
        </div>
      </div>
    </section>
  );
};
