import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { faqList } from '../data/launchData.js';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (i) => {
    setOpenIdx(openIdx === i ? -1 : i);
  };

  return (
    <section id="faq" className="py-24 lg:py-32 relative bg-[#06080F]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3.5 py-1.5 rounded-full inline-block">
            Frequently Asked Questions
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            Got questions? <br />
            <span className="text-gradient-hero">We have answers</span>.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
            Everything you need to know about LaunchKit’s platform, capabilities, and billing.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqList.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0B0F1A] border border-white/10 overflow-hidden transition-colors hover:border-pink-500/30"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-display font-bold text-base sm:text-lg text-white">
                    {item.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-pink-400' : ''
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-sm leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
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
}
