import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { pricingPlans } from '../data/launchData.js';

export default function PricingSection({ onOpenCta }) {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 lg:py-32 relative bg-[#070A12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-pink-400 bg-pink-500/10 border border-pink-500/20 px-3.5 py-1.5 rounded-full inline-block">
            Transparent Investment
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
            Everything you need <br />
            <span className="text-gradient-hero">to get moving</span>.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            Simple, predictable pricing that scales with your traction. No hidden usage fees or surprises.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span className={`text-xs font-mono font-bold ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>
              Monthly
            </span>
            <button
              type="button"
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-12 h-6 rounded-full bg-slate-800 border border-white/10 p-0.5 relative transition-colors focus:outline-none"
            >
              <div
                className={`w-5 h-5 rounded-full bg-pink-500 transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-xs font-mono font-bold flex items-center gap-1.5 ${isAnnual ? 'text-white' : 'text-slate-400'}`}>
              <span>Annual</span>
              <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {pricingPlans.map((plan) => {
            const price = plan.price === '$0' ? '$0' : isAnnual ? `$${Math.round(parseInt(plan.price.replace('$', '')) * 0.8)}` : plan.price;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-gradient-to-b from-[#131A2F] to-[#0A0F1E] border-2 border-pink-500 shadow-2xl shadow-pink-500/20 lg:-translate-y-2'
                    : 'bg-[#0B0F19] border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-mono font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-pink-500 to-violet-600 shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <h3 className="font-display font-extrabold text-xl text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-slate-400 text-xs min-h-[36px] mb-6">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="font-display font-black text-4xl sm:text-5xl text-white">
                      {price}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {plan.price === '$0' ? 'forever' : '/month'}
                    </span>
                  </div>

                  {/* Button */}
                  <button
                    onClick={() => onOpenCta(plan.id)}
                    className={`w-full py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all mb-8 ${
                      plan.isPopular
                        ? 'bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 text-white shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:-translate-y-0.5'
                        : 'bg-white/10 hover:bg-white/15 text-white border border-white/10'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight size={16} />
                  </button>

                  {/* Features List */}
                  <div className="space-y-3 pt-6 border-t border-white/10">
                    <div className="text-[11px] font-mono uppercase font-bold text-slate-400">
                      Plan Inclusions:
                    </div>
                    <ul className="space-y-2.5">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <Check size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 text-[11px] font-mono text-slate-400 text-center">
                  Instant activation
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Guarantee */}
        <div className="mt-12 text-center text-xs font-mono text-slate-400 flex items-center justify-center gap-2">
          <ShieldCheck size={16} className="text-emerald-400" />
          <span>14-day free trial · No credit card required · Cancel anytime</span>
        </div>
      </div>
    </section>
  );
}
