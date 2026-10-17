import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, Shield } from 'lucide-react';
import { pricingPlans } from '../data/sampleData';

interface PricingSectionProps {
  onOpenModal: (type: 'demo' | 'trial') => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenModal }) => {
  const [annualBilling, setAnnualBilling] = useState(true);

  return (
    <section id="pricing" className="py-20 md:py-28 bg-slate-950 border-t border-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono uppercase">
            <span>TRANSPARENT VALUE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Predictable compute, infinite insights.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            No punitive per-seat viewer taxes. Scale decision intelligence across your entire organization.
          </p>

          {/* Billing Interval Toggle */}
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
                className={`w-4 h-4 rounded-full bg-cyan-400 transform transition-transform ${
                  annualBilling ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-xs font-semibold flex items-center gap-1.5 ${annualBilling ? 'text-white' : 'text-slate-400'}`}>
              <span>Annual</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800/40 text-[10px] font-mono">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => {
            const displayPrice =
              plan.priceMonthly === 'Custom'
                ? 'Custom'
                : annualBilling
                ? `$${Math.round(parseInt(plan.priceMonthly.replace('$', ''), 10) * 0.8)}`
                : plan.priceMonthly;

            return (
              <div
                key={plan.name}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all relative ${
                  plan.popular
                    ? 'bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-cyan-500/80 shadow-2xl shadow-cyan-500/10'
                    : 'bg-slate-950 border border-slate-800/90 hover:border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 text-xs font-bold tracking-wide flex items-center gap-1 shadow-md">
                    <Sparkles className="w-3 h-3" />
                    MOST POPULAR FOR SCALING ORGS
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-xs text-slate-400 mb-6 min-h-[32px]">{plan.description}</p>

                  <div className="mb-6 flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                      {displayPrice}
                    </span>
                    {plan.priceMonthly !== 'Custom' && (
                      <span className="text-xs text-slate-400 font-mono">/month billed {annualBilling ? 'annually' : 'monthly'}</span>
                    )}
                  </div>

                  <div className="space-y-3 mb-8 pt-6 border-t border-slate-800/80">
                    <span className="text-xs font-mono uppercase text-slate-400 block mb-2">Included Capabilities</span>
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => onOpenModal(plan.priceMonthly === 'Custom' ? 'demo' : 'trial')}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs tracking-wide transition-all flex items-center justify-center gap-2 ${
                      plan.popular
                        ? 'bg-cyan-400 hover:bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-500/25'
                        : 'bg-slate-900 hover:bg-slate-800 text-white border border-slate-800'
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
