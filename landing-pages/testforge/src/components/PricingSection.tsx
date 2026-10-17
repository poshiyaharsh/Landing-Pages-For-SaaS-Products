import React, { useState } from 'react';
import { Check, Zap, Sparkles, Shield, Server, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: 'Developer',
      description: 'Ideal for solo engineers, open-source maintainers, and indie software builders.',
      monthlyPrice: 29,
      annualPrice: 24,
      popular: false,
      badge: 'Individual',
      features: [
        'Up to 10,000 monthly test executions',
        'Playwright, Vitest, Jest & Cypress support',
        '7-day trace & video artifact retention',
        'Automatic flaky test quarantine',
        'Single developer workspace',
        'Community Discord & email support'
      ],
      ctaText: 'Start Developer Plan'
    },
    {
      name: 'Team',
      description: 'Engineered for fast-shipping product teams looking to eliminate CI bottlenecks.',
      monthlyPrice: 89,
      annualPrice: 74,
      popular: true,
      badge: 'Most Popular',
      features: [
        'Up to 100,000 monthly test executions',
        'Unlimited parallel shard runners',
        '30-day trace & failure artifact retention',
        'Root cause AI failure diagnostics',
        'GitHub Actions, GitLab CI & Slack triage',
        'Up to 15 engineering seats',
        'Priority support & SLA guarantee'
      ],
      ctaText: 'Start Team Trial'
    },
    {
      name: 'Engineering',
      description: 'Designed for high-scale organizations needing strict compliance and unlimited concurrency.',
      monthlyPrice: 249,
      annualPrice: 199,
      popular: false,
      badge: 'High Velocity',
      features: [
        'Unlimited monthly test runs',
        'Self-hosted runner execution option',
        '90-day forensic trace archive',
        'Custom quarantine rules & branch gating',
        'SSO / SAML 2.0 & audit log export',
        'Dedicated Solutions Architect',
        '99.95% uptime SLA commitment'
      ],
      ctaText: 'Configure Engineering'
    }
  ];

  return (
    <section id="pricing" className="py-24 border-t border-emerald-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-700/40 text-emerald-300 text-xs font-mono font-medium tracking-wide mb-4">
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
            TRANSPARENT VALUE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Predictable pricing for engineering teams
          </h2>
          <p className="mt-4 text-zinc-400 text-base leading-relaxed">
            Every plan includes our core failure triage engine, automated flakiness detection, and test trace viewer.
          </p>

          {/* Billing Switch */}
          <div className="mt-8 inline-flex items-center gap-3 p-1 rounded-xl bg-zinc-900 border border-zinc-800">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                !isAnnual ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Monthly billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all flex items-center gap-1.5 ${
                isAnnual ? 'bg-emerald-500 text-black font-semibold shadow-sm' : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span>Annual billing</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded font-bold ${
                isAnnual ? 'bg-black/20 text-black' : 'bg-emerald-950 text-emerald-400'
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
                    ? 'bg-zinc-900/90 border-2 border-emerald-500 shadow-2xl shadow-emerald-950/40' 
                    : 'bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-500 text-black text-xs font-mono font-bold tracking-wider uppercase shadow-lg">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white tracking-tight">{plan.name}</h3>
                    {!plan.popular && (
                      <span className="text-[11px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-zinc-800">
                        {plan.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-zinc-400 min-h-[36px]">{plan.description}</p>

                  <div className="mt-6 mb-8 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white font-mono tracking-tight">
                      ${price}
                    </span>
                    <span className="text-xs text-zinc-400 font-mono">
                      / month {isAnnual ? '(billed annually)' : ''}
                    </span>
                  </div>

                  <div className="space-y-3 pt-6 border-t border-zinc-800">
                    <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Features included:</div>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-800">
                  <button
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full py-3 px-4 rounded-xl font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                      plan.popular
                        ? 'bg-emerald-500 hover:bg-emerald-400 text-black shadow-lg shadow-emerald-500/20'
                        : 'bg-zinc-800 hover:bg-zinc-700 text-white'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-center text-[11px] text-zinc-500 font-mono mt-3">
                    No credit card required &bull; 14-day sample sandbox
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
