import React, { useState } from 'react';
import { Check, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { PRICING_PLANS } from '../data/sampleData';

interface PricingProps {
  onSelectPlan: (planId: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [annualBilling, setAnnualBilling] = useState(true);

  return (
    <section id="pricing" className="py-20 bg-[#F6F8FB] border-b border-[#DFE6EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="text-xs font-semibold text-[#3569D4] uppercase tracking-wider font-mono bg-[#EAF1FF] px-2.5 py-1 rounded">
            TRANSPARENT WORKSPACE TIERS
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#142033] mt-3 tracking-tight">
            A compliance workspace that grows with you.
          </h2>
          <p className="text-base text-[#64748B] mt-3 leading-relaxed">
            Start with our foundational tier to organize your controls, then expand into continuous automated risk registers and multi-framework workflows.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 p-1 rounded-xl bg-white border border-[#DFE6EF] shadow-subtle">
            <button
              onClick={() => setAnnualBilling(false)}
              className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                !annualBilling
                  ? 'bg-[#142C4E] text-white shadow-sm'
                  : 'text-[#64748B] hover:text-[#142033]'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setAnnualBilling(true)}
              className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                annualBilling
                  ? 'bg-[#142C4E] text-white shadow-sm'
                  : 'text-[#64748B] hover:text-[#142033]'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] bg-[#17865C] text-white font-mono px-1.5 py-0.2 rounded font-bold">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isCustom = plan.id === 'enterprise';
            const price = annualBilling ? plan.priceAnnual : plan.priceMonthly;

            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all relative ${
                  plan.highlighted
                    ? 'bg-white border-2 border-[#3569D4] shadow-card ring-1 ring-[#3569D4]/20'
                    : 'bg-white border border-[#DFE6EF] shadow-subtle hover:border-[#CBD5E1]'
                }`}
              >
                {/* Popular badge */}
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#3569D4] text-white text-[10px] font-mono font-bold tracking-wider rounded-full shadow-sm">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-[#142C4E] tracking-tight font-display">
                      {plan.name}
                    </h3>
                  </div>

                  <p className="text-xs text-[#64748B] mt-2 leading-relaxed min-h-[36px]">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mt-6 pb-6 border-b border-[#DFE6EF]">
                    {isCustom ? (
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-extrabold font-display text-[#142033]">Custom</span>
                        <span className="text-xs text-[#64748B] font-medium">/ enterprise quote</span>
                      </div>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-extrabold font-display text-[#142033]">
                          ${price}
                        </span>
                        <span className="text-xs text-[#64748B] font-medium">/ month</span>
                      </div>
                    )}
                    <div className="text-[11px] text-[#64748B] mt-1 font-mono">
                      {isCustom 
                        ? 'Tailored seat & volume licensing'
                        : annualBilling ? 'Billed annually' : 'Billed monthly'}
                    </div>
                  </div>

                  {/* Feature checklist */}
                  <div className="mt-6 space-y-3">
                    <div className="text-[11px] font-bold text-[#142C4E] uppercase tracking-wider">
                      Included Capabilities:
                    </div>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#142033]">
                        <div className="w-4 h-4 rounded-full bg-[#E6F6F0] text-[#17865C] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#DFE6EF]">
                  <button
                    onClick={() => onSelectPlan(plan.id)}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm ${
                      plan.highlighted
                        ? 'bg-[#3569D4] hover:bg-[#2853B8] text-white'
                        : 'bg-[#142C4E] hover:bg-[#0D1D35] text-white'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing disclaimer as mandated in Section 21 */}
        <div className="mt-8 text-center text-xs text-[#64748B]">
          * These prices are illustrative prototype values for demonstration purposes, not confirmed commercial offers.
        </div>
      </div>
    </section>
  );
};
