import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { PRICING_PLANS } from '../data/sampleData';

interface PricingSectionProps {
  onSelectPlan: (planId: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [annualBilling, setAnnualBilling] = useState(true);

  return (
    <section id="pricing" className="py-20 bg-white border-b border-[#E4E2EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="text-xs font-semibold text-[#4F46E5] uppercase tracking-wider font-mono bg-[#EEF2FF] px-2.5 py-1 rounded">
            TRANSPARENT PLANS
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#0F172A] mt-3 tracking-tight">
            Simple pricing for teams of every scale.
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Start free with your immediate squad, then scale into full multi-department collaboration as your team expands.
          </p>

          {/* Billing Switch */}
          <div className="mt-8 inline-flex items-center gap-3 p-1 rounded-xl bg-[#FAF9FC] border border-[#E4E2EB]">
            <button
              onClick={() => setAnnualBilling(false)}
              className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                !annualBilling ? 'bg-[#0F172A] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setAnnualBilling(true)}
              className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                annualBilling ? 'bg-[#0F172A] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] bg-emerald-600 text-white font-mono px-1.5 py-0.2 rounded font-bold">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = annualBilling ? plan.priceAnnual : plan.priceMonthly;

            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all relative ${
                  plan.highlighted
                    ? 'bg-white border-2 border-[#4F46E5] shadow-card ring-1 ring-[#4F46E5]/20'
                    : 'bg-[#FAF9FC] border border-[#E4E2EB] shadow-subtle hover:border-slate-300'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#4F46E5] text-white text-[10px] font-mono font-bold tracking-wider rounded-full shadow-sm">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <h3 className="text-base font-bold text-[#0F172A] font-display">
                    {plan.name}
                  </h3>

                  <p className="text-xs text-slate-500 mt-2 leading-relaxed min-h-[36px]">
                    {plan.description}
                  </p>

                  <div className="mt-6 pb-6 border-b border-[#E4E2EB]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold font-display text-[#0F172A]">
                        ${price}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">/ user / month</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1 font-mono">
                      {annualBilling ? 'Billed annually' : 'Billed monthly'}
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <div className="text-[11px] font-bold text-[#0F172A] uppercase tracking-wider">
                      Included Capabilities:
                    </div>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#0F172A]">
                        <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#E4E2EB]">
                  <button
                    onClick={() => onSelectPlan(plan.id)}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm ${
                      plan.highlighted
                        ? 'bg-[#4F46E5] hover:bg-[#4338CA] text-white'
                        : 'bg-[#0F172A] hover:bg-slate-800 text-white'
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

        {/* Disclaimer */}
        <div className="mt-8 text-center text-xs text-slate-500">
          * Illustrative pricing plans for prototype demonstration. No payment processing is connected.
        </div>
      </div>
    </section>
  );
};
