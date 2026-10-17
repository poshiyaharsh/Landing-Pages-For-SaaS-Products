import React from 'react';
import { Quote, Building2, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS } from '../data/sampleData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-[#DFE6EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold text-[#3569D4] uppercase tracking-wider font-mono bg-[#EAF1FF] px-2.5 py-1 rounded">
            SIMULATED OPERATIONAL PERSPECTIVES
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#142033] mt-3 tracking-tight">
            A clearer way to manage compliance.
          </h2>
          <p className="text-base text-[#64748B] mt-3 leading-relaxed">
            Restrained feedback demonstrating how compliance and engineering teams navigate audit preparation with structured tools.
          </p>
        </div>

        {/* 3 Restrained Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#F6F8FB] border border-[#DFE6EF] shadow-subtle flex flex-col justify-between"
            >
              <div>
                <Quote className="w-6 h-6 text-[#3569D4]/40 mb-3" />
                <p className="text-sm font-medium text-[#142033] leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DFE6EF]">
                <div className="font-bold text-xs text-[#142C4E]">{t.author}</div>
                <div className="text-[11px] text-[#64748B] flex items-center justify-between mt-0.5">
                  <span>{t.company}</span>
                  <span className="font-mono text-[10px] bg-white border border-[#DFE6EF] px-1.5 py-0.2 rounded text-[#3569D4]">
                    {t.badge}
                  </span>
                </div>
                <div className="text-[10px] text-slate-400 mt-2">
                  * {t.disclaimer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explicit Disclaimer */}
        <div className="mt-8 text-center text-xs text-[#64748B]">
          Note: Quotes represent illustrative enterprise scenarios designed for prototype demonstration and do not constitute certified commercial endorsements.
        </div>
      </div>
    </section>
  );
};
