import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, Shield } from 'lucide-react';
import { PRICING_PLANS } from '../data/brandData';
import { PricingPlan } from '../types';

interface PricingProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 sm:py-36 bg-brand-soft-white border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-brand-taupe block mb-3">
            MEMBERSHIP & ACCESS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-brand-ink leading-tight mb-4">
            Make room for better branding.
          </h2>
          <p className="text-base sm:text-lg text-brand-charcoal/80 font-sans leading-relaxed max-w-xl mx-auto mb-8">
            Transparent pricing designed for individual creators, boutique design studios, and enterprise brand departments.
          </p>

          {/* Billing Period Selector (Monthly vs Annual) */}
          <div className="inline-flex items-center gap-3 p-1.5 rounded-full border border-brand-border bg-brand-ivory shadow-subtle">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                !isAnnual
                  ? 'bg-brand-ink text-brand-ivory font-medium shadow-subtle'
                  : 'text-brand-charcoal hover:text-brand-ink'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 ${
                isAnnual
                  ? 'bg-brand-ink text-brand-ivory font-medium shadow-subtle'
                  : 'text-brand-charcoal hover:text-brand-ink'
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-1.5 py-0.5 rounded-full text-[9px] bg-brand-champagne text-brand-charcoal font-semibold">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Premium Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan) => {
            const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;
            const periodText = isAnnual ? '/ month, billed annually' : '/ month';

            return (
              <div
                key={plan.id}
                className={`rounded-xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.highlight
                    ? 'border-2 border-brand-ink bg-brand-ivory shadow-editorial'
                    : 'border border-brand-border bg-brand-soft-white shadow-subtle hover:shadow-editorial'
                }`}
              >
                {/* Popular Pill */}
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-brand-ink text-brand-champagne text-[10px] font-mono uppercase tracking-widest border border-brand-charcoal shadow-subtle">
                    Recommended Studio Tier
                  </div>
                )}

                <div>
                  <div className="pb-6 mb-6 border-b border-brand-border">
                    <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-brand-olive font-semibold block mb-1">
                      {plan.name}
                    </span>
                    <h3 className="font-serif text-2xl font-medium text-brand-ink mb-1">
                      {plan.tagline}
                    </h3>
                    <p className="text-xs text-brand-charcoal/70 font-sans leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price Display */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="font-serif text-4xl sm:text-5xl font-medium text-brand-ink">
                        ${price}
                      </span>
                      <span className="text-xs font-mono text-brand-taupe">
                        {periodText}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3.5 mb-8">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-brand-taupe block">
                      Included Capabilities:
                    </span>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-brand-olive flex-shrink-0 mt-0.5" />
                        <span className="text-xs font-sans text-brand-charcoal leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => onSelectPlan(plan)}
                  className={`w-full py-3.5 rounded text-xs font-mono uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
                    plan.highlight
                      ? 'bg-brand-ink hover:bg-brand-charcoal text-brand-ivory shadow-editorial'
                      : 'border border-brand-border bg-brand-ivory hover:bg-brand-champagne/40 text-brand-ink'
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 text-xs font-mono text-brand-taupe">
          <span>Illustrative prototype pricing. No hidden fees. Cancel or change plan anytime.</span>
        </div>
      </div>
    </section>
  );
};
