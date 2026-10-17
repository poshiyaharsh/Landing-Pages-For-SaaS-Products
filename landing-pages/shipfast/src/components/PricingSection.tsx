import React from 'react';
import { SHIPFAST_PRICING } from '../data/sampleData';
import { Check, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <span>Honest Developer Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pay once or scale with your team.{' '}
            <span className="text-blue-600">Zero lock-in.</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Start free with our interactive launch workflow. Upgrade to production boilerplates when you are ready to accept customer credit cards.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {SHIPFAST_PRICING.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular
                  ? 'bg-white border-2 border-blue-600 shadow-2xl scale-[1.02]'
                  : 'bg-slate-50 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-600 text-white text-[10px] font-mono font-bold uppercase tracking-wider rounded-full shadow-md">
                  Most Popular For Founders
                </div>
              )}

              <div>
                <div className="flex items-center justify-between font-mono text-xs text-slate-500 mb-2">
                  <span className="uppercase font-bold tracking-wider">{plan.name}</span>
                  <span className="text-blue-600 font-bold">LIFETIME ACCESS</span>
                </div>

                <div className="flex items-baseline gap-1 my-4">
                  <span className="text-4xl font-extrabold text-slate-900">
                    ${plan.price}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    {plan.period}
                  </span>
                </div>

                <p className="text-xs text-slate-600 mb-6 font-sans leading-relaxed">
                  {plan.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-slate-200/80 mb-8 font-mono text-xs">
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700">
                      <Check className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onSelectPlan(plan.name)}
                className={`w-full py-3 px-4 rounded-xl text-xs font-mono uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20'
                    : 'bg-white hover:bg-slate-100 text-slate-800 border border-slate-300'
                }`}
              >
                <span>{plan.cta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs font-mono text-slate-500">
          * Illustrative developer plans. No live payment gateway or credit card capture active on this prototype.
        </div>
      </div>
    </section>
  );
};
