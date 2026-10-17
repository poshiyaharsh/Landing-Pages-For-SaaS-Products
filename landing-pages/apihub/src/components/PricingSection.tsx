import React, { useState } from 'react';
import { Check, Zap, Sparkles, Shield, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: 'Starter',
      description: 'Ideal for independent developers, weekend prototypes, and small proof-of-concepts.',
      monthlyPrice: 0,
      annualPrice: 0,
      popular: false,
      badge: 'Free Tier',
      features: [
        '100,000 monthly simulated requests',
        'Up to 5 mock API services',
        'OpenAPI 3.1 & Postman sync',
        'Interactive endpoint explorer',
        'Community Discord & Forum support'
      ],
      ctaText: 'Start for Free'
    },
    {
      name: 'Developer',
      description: 'Engineered for fast-moving engineering teams scaling production APIs.',
      monthlyPrice: 49,
      annualPrice: 39,
      popular: true,
      badge: 'Most Popular',
      features: [
        '2,500,000 monthly API requests',
        'Unlimited mock servers & edge endpoints',
        'Automated CI schema drift blocking',
        'SDK Codegen (TypeScript, Python, Go)',
        'Slack, Linear & GitHub Webhook alerts',
        'Up to 15 developer seats',
        'Standard 99.9% uptime SLA'
      ],
      ctaText: 'Start Developer Trial'
    },
    {
      name: 'Platform',
      description: 'For enterprise organizations demanding multi-region routing, custom domains, and strict compliance.',
      monthlyPrice: 199,
      annualPrice: 159,
      popular: false,
      badge: 'High Throughput',
      features: [
        '25,000,000 monthly API requests',
        'Global edge proxy with 42 global PoPs',
        'mTLS Mutual TLS 1.3 certificate support',
        'Custom domain with auto SSL (api.yourcompany.com)',
        'SSO / SAML 2.0 & fine-grained RBAC',
        'Dedicated Technical Account Manager',
        '99.99% enterprise uptime SLA'
      ],
      ctaText: 'Configure Platform'
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-[#020617] border-t border-slate-800 font-mono relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/60 text-cyan-300 text-xs tracking-wide mb-4">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            TRANSPARENT VALUE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Predictable plans for API development
          </h2>
          <p className="mt-4 text-zinc-400 font-sans text-base leading-relaxed">
            Start building for free with complete OpenAPI 3.1 support. Upgrade seamlessly as request volumes expand.
          </p>

          {/* Billing Switch */}
          <div className="mt-8 inline-flex items-center gap-3 p-1 rounded-xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                !isAnnual ? 'bg-slate-800 text-white shadow-sm' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Monthly billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all flex items-center gap-1.5 ${
                isAnnual ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-semibold shadow-sm' : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span>Annual billing</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded font-bold ${
                isAnnual ? 'bg-black/20 text-black' : 'bg-cyan-950 text-cyan-400'
              }`}>
                Save 20%
              </span>
            </button>
          </div>

          <div className="mt-3 text-xs text-zinc-500 font-mono">
            * Illustrative pricing plans for platform demonstration purposes.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={idx}
                className={`relative flex flex-col justify-between rounded-2xl p-8 transition-all duration-200 ${
                  plan.popular 
                    ? 'bg-[#0B0F19] border-2 border-cyan-500 shadow-2xl shadow-cyan-950/50' 
                    : 'bg-[#0B0F19]/60 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-black text-xs font-mono font-bold tracking-wider uppercase shadow-lg">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white tracking-tight">{plan.name}</h3>
                    {!plan.popular && (
                      <span className="text-[11px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                        {plan.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-sans text-zinc-400 min-h-[36px]">{plan.description}</p>

                  <div className="mt-6 mb-8 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white font-mono tracking-tight">
                      ${price}
                    </span>
                    <span className="text-xs text-zinc-400 font-mono">
                      / month {isAnnual && price > 0 ? '(billed annually)' : ''}
                    </span>
                  </div>

                  <div className="space-y-3 pt-6 border-t border-slate-800">
                    <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Features included:</div>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-300 font-sans">
                        <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800">
                  <button
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full py-3 px-4 rounded-xl font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-black shadow-lg shadow-cyan-950/40'
                        : 'bg-slate-800 hover:bg-slate-700 text-white'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-center text-[11px] text-zinc-500 font-mono mt-3">
                    Instant sandbox access &bull; No card required
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
