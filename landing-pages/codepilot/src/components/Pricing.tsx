import React, { useState } from 'react';
import { PRICING_PLANS } from '../data/codepilotData';
import { Check, Sparkles, Zap, ArrowRight } from 'lucide-react';

interface PricingProps {
  onSelectPlan: (planId: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section className="py-20 lg:py-28 relative bg-codepilot-bg" id="pricing">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-green/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>TRANSPARENT DEVELOPER PRICING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-codepilot-white mb-6">
            Built for every stage of development.
          </h2>

          <p className="text-base sm:text-lg text-codepilot-muted leading-relaxed">
            Start free on personal projects. Upgrade to Pro for full-repository intelligence or deploy Team for workspace governance.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 inline-flex items-center p-1 rounded-lg bg-codepilot-panel border border-codepilot-border">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1.5 rounded-md text-xs font-mono transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-codepilot-surface text-codepilot-white font-semibold border border-codepilot-border'
                  : 'text-codepilot-dim hover:text-codepilot-muted'
              }`}
            >
              Monthly Billing
            </button>

            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-4 py-1.5 rounded-md text-xs font-mono transition-all flex items-center gap-1.5 ${
                billingCycle === 'yearly'
                  ? 'bg-brand-green/20 text-brand-green font-semibold border border-brand-green/40 shadow-glow-green'
                  : 'text-codepilot-dim hover:text-codepilot-muted'
              }`}
            >
              <span>Yearly (Save 20%)</span>
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = billingCycle === 'yearly' ? plan.priceYearly : plan.priceMonthly;

            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.popular
                    ? 'bg-codepilot-panel border-2 border-brand-green shadow-terminal shadow-glow-green/20 scale-[1.02] lg:-translate-y-2'
                    : 'bg-codepilot-panel/70 border border-codepilot-border hover:border-codepilot-border-highlight'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-brand-green text-codepilot-bg font-mono font-bold text-[11px] uppercase tracking-wider flex items-center gap-1 shadow-glow-green">
                    <Sparkles className="w-3 h-3" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-mono text-xl font-black tracking-wide text-codepilot-white">
                      {plan.name}
                    </h3>
                    <span className="text-[10px] font-mono text-codepilot-dim uppercase">
                      {plan.id === 'team' ? 'Per Seat' : 'Developer'}
                    </span>
                  </div>

                  <p className="text-xs text-codepilot-muted mb-6 font-sans">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1.5 mb-6 pb-6 border-b border-codepilot-border">
                    <span className="font-mono text-4xl sm:text-5xl font-extrabold text-codepilot-white">
                      ${price}
                    </span>
                    <span className="font-mono text-xs text-codepilot-dim">
                      {plan.id === 'team' ? '/ user / month' : '/ month'}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-codepilot-dim font-bold">
                      Included Capabilities:
                    </div>
                    {plan.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs text-codepilot-text">
                        <Check className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan CTA Button */}
                <div className="pt-4 border-t border-codepilot-border/60">
                  <button
                    onClick={() => onSelectPlan(plan.id)}
                    className={`w-full py-3 rounded-lg text-xs sm:text-sm font-semibold font-mono flex items-center justify-center gap-2 transition-all ${
                      plan.popular
                        ? 'bg-brand-green text-codepilot-bg hover:bg-[#15f8a3] shadow-glow-green'
                        : 'border border-codepilot-border bg-codepilot-surface hover:bg-codepilot-hover text-codepilot-text'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] font-mono text-codepilot-dim text-center mt-2">
                    {plan.id === 'free' ? 'No card required' : 'Cancel or pause anytime'}
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
