import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { pricingPlans } from '../data/sampleData';

interface PricingSectionProps {
  onOpenModal: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenModal }) => {
  const [annualBilling, setAnnualBilling] = useState(true);

  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#0B0A10] border-t border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-semibold uppercase">
            <span>PREDICTABLE CREATOR PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            Invest in your creative business.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            No revenue cut. No hidden platform commissions. You keep 100% of your AdSense, sponsor deals, and subscription income.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-3 pt-4">
            <span className={`text-xs font-semibold ${!annualBilling ? 'text-white' : 'text-slate-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setAnnualBilling(!annualBilling)}
              className="w-12 h-6 rounded-full bg-slate-800 p-1 flex items-center transition-colors focus:outline-none"
              aria-label="Toggle annual billing discount"
            >
              <div
                className={`w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 transform transition-transform ${
                  annualBilling ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-xs font-semibold flex items-center gap-1.5 ${annualBilling ? 'text-white' : 'text-slate-400'}`}>
              <span>Annual</span>
              <span className="px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30 text-[10px] font-mono">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => {
            const basePrice = parseInt(plan.priceMonthly.replace('$', ''), 10);
            const displayPrice = annualBilling ? `$${Math.round(basePrice * 0.8)}` : plan.priceMonthly;

            return (
              <div
                key={plan.name}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all relative ${
                  plan.popular
                    ? 'bg-gradient-to-b from-[#1E1435] to-[#120E22] border-2 border-pink-500 shadow-2xl shadow-pink-500/20'
                    : 'bg-[#140F22] border border-white/10 hover:border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-violet-600 text-white text-xs font-bold tracking-wide flex items-center gap-1 shadow-md whitespace-nowrap">
                    <Sparkles className="w-3 h-3" />
                    MOST POPULAR FOR FULL-TIME CREATORS
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-xs text-slate-300 mb-6 min-h-[32px]">{plan.description}</p>

                  <div className="mb-6 flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black text-white tracking-tight font-display">
                      {displayPrice}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      /month {annualBilling ? 'billed annually' : 'billed monthly'}
                    </span>
                  </div>

                  <div className="space-y-3 mb-8 pt-6 border-t border-white/10">
                    <span className="text-xs font-mono uppercase text-slate-400 block mb-2">What's Included</span>
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <Check className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    onClick={onOpenModal}
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs tracking-wide transition-all flex items-center justify-center gap-2 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-pink-500 via-rose-500 to-violet-600 hover:opacity-95 text-white shadow-lg shadow-pink-500/25'
                        : 'bg-white/10 hover:bg-white/15 text-white'
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[10px] text-center text-slate-400 mt-2 font-mono">
                    Sample illustrative tier. 14-day zero-risk trial.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
