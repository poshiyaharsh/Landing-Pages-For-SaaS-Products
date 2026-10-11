import React, { useState } from 'react';
import { PRICING_DATA } from '../data/voiceflowData.ts';
import { Check, Zap, Sparkles, HelpCircle } from 'lucide-react';

interface PricingProps {
  onSelectPlan?: (planId: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#080B12] relative overflow-hidden">
      {/* Background illumination */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-cyan-900/10 via-violet-900/10 to-transparent blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4 tracking-wider uppercase">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>TRANSPARENT VALUE SCALING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Choose the voice workflow that fits.
          </h2>
          <p className="text-secondary max-w-2xl text-base sm:text-lg mb-8">
            Predictable compute consumption with no hidden audio egress charges. Start in the browser sandbox and scale to dedicated multi-region clusters.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="inline-flex items-center bg-[#0E1320] p-1.5 rounded-full border border-border-subtle shadow-inner">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                !isAnnual
                  ? 'bg-[#192235] text-white shadow-sm border border-cyan-500/30'
                  : 'text-secondary hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-1.5 ${
                isAnnual
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold shadow-md'
                  : 'text-secondary hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full uppercase tracking-wider ${
                isAnnual ? 'bg-black/30 text-white' : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
              }`}>
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {PRICING_DATA.map((plan) => {
            const displayPrice = isAnnual ? plan.priceAnnual : plan.priceMonthly;
            const badge = plan.highlight ? 'RECOMMENDED' : plan.id === 'free' ? 'SANDBOX' : 'ENTERPRISE';
            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 p-8 ${
                  plan.highlight
                    ? 'bg-gradient-to-b from-[#131A28] to-[#0E1320] border-2 border-cyan-500/40 shadow-[0_0_40px_rgba(82,232,255,0.08)] scale-[1.02] md:scale-105 z-10'
                    : 'bg-[#0E1320]/80 border border-border-subtle hover:border-cyan-500/20'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-violet-500 text-black text-[11px] font-mono font-bold uppercase tracking-widest px-3.5 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <Sparkles className="w-3 h-3 fill-black" />
                    MOST POPULAR
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-display font-bold text-white tracking-wide">
                      {plan.name}
                    </h3>
                    <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-500/20 px-2 py-0.5 rounded">
                      {badge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-secondary min-h-[40px] mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="mb-8 pb-6 border-b border-border-subtle">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl sm:text-5xl font-display font-bold text-white tracking-tight">
                        ${displayPrice}
                      </span>
                      <span className="text-sm font-mono text-secondary">
                        {plan.priceMonthly === 0 ? 'forever' : isAnnual ? '/month, billed annually' : '/month'}
                      </span>
                    </div>
                    {isAnnual && plan.priceMonthly > 0 && (
                      <span className="text-[11px] text-emerald-400 font-mono mt-1 block">
                        Regularly ${plan.priceMonthly}/mo (${plan.priceMonthly * 12}/yr)
                      </span>
                    )}
                  </div>

                  <div className="space-y-3.5 mb-8">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-secondary/70 block">
                      Included Capabilities:
                    </span>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                        <div className="w-4 h-4 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0 mt-0.5 text-cyan-400">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => onSelectPlan?.(plan.id)}
                    className={`w-full py-3 px-4 rounded-xl font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                      plan.highlight
                        ? 'bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black font-semibold shadow-[0_0_20px_rgba(82,232,255,0.25)]'
                        : 'bg-[#192235] hover:bg-[#1E293B] text-white border border-border-subtle hover:border-cyan-500/30'
                    }`}
                  >
                    <span>{plan.cta}</span>
                  </button>
                  <p className="text-center text-[10px] font-mono text-secondary/60 mt-3">
                    {plan.id === 'free' ? 'No credit card required' : plan.id === 'business' ? 'Custom SLA & invoicing' : '14-day risk-free sandbox preview'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Prototype Transparency Note */}
        <div className="rounded-xl bg-[#0E1320] border border-border-subtle p-4 max-w-3xl mx-auto flex items-center justify-center gap-2 text-xs font-mono text-secondary/70 text-center">
          <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>Displayed price tiers represent demonstration configurations for prototype evaluation. No real charges or payment authorization will be processed.</span>
        </div>
      </div>
    </section>
  );
};
