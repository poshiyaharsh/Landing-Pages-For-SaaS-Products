import React, { useState } from 'react';
import { PROMPTLAB_PRICING } from '../data/sampleData';
import { Check, ArrowRight, Sparkles, Terminal } from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#080C16] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
            <span>Transparent Developer Tiers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Predictable plans for every stage of{' '}
            <span className="text-cyan-400">prompt engineering.</span>
          </h2>
          <p className="mt-3 text-slate-300 text-base">
            Start free with local experimentation. Upgrade when your team requires collaborative rubrics, automated evals, and multi-model CI testing.
          </p>

          {/* Billing Toggle */}
          <div className="mt-6 inline-flex items-center p-1 bg-slate-900 border border-slate-800 rounded-xl font-mono text-xs">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1.5 rounded-lg transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                billingCycle === 'annual'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] px-1.5 py-0.2 bg-emerald-950 text-emerald-400 border border-emerald-500/30 rounded">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PROMPTLAB_PRICING.map((plan) => {
            const price =
              billingCycle === 'annual' && plan.price !== '0' && plan.price !== 'Custom'
                ? Math.round(parseInt(plan.price) * 0.8).toString()
                : plan.price;

            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.popular
                    ? 'bg-[#0E1526] border-2 border-cyan-400 shadow-2xl shadow-cyan-950/60 scale-[1.02]'
                    : 'bg-[#0A0E1A] border border-slate-800 hover:border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-cyan-400 text-slate-950 text-[10px] font-mono font-bold uppercase tracking-wider rounded-full shadow-lg">
                    Most Popular for AI Builders
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-slate-400 mb-2">
                    <span className="uppercase tracking-wider">{plan.name}</span>
                    <span className="text-cyan-400">v2.4</span>
                  </div>

                  <div className="flex items-baseline gap-1 my-4">
                    <span className="text-4xl font-extrabold text-white">
                      {price !== 'Custom' ? `$${price}` : 'Custom'}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {plan.period}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 mb-6 font-sans">
                    {plan.description}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-slate-800/80 mb-8 font-mono text-xs">
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectPlan(plan.name)}
                  className={`w-full py-3 px-4 rounded-xl text-xs font-mono uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 shadow-lg shadow-cyan-500/20'
                      : 'bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800'
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center text-xs font-mono text-slate-500">
          * Illustrative pricing tiers shown for platform evaluation. No payment processor connected.
        </div>
      </div>
    </section>
  );
};
