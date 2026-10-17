import React, { useState } from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      id: 'starter',
      name: 'STARTER',
      price: '$0',
      period: '/month',
      description: 'Essential infrastructure management for individual developers and side projects.',
      features: [
        'Single project workspace',
        'Demonstration deployment workflows',
        'Sample monitoring dashboard',
        'Essential infrastructure topology views',
        'Community resources and CLI access',
        '1 environment (Development)',
      ],
      cta: 'Start Free',
      popular: false,
    },
    {
      id: 'pro',
      name: 'PRO',
      price: isAnnual ? '$24' : '$29',
      period: '/month',
      description: 'Expanded capacity and multi-environment management for growing applications.',
      features: [
        'Up to 5 active projects',
        'Production and Staging environments',
        'Advanced dashboard and topology views',
        'Unlimited deployment history',
        'Enhanced operational visibility & alerts',
        'Automated database snapshots',
        'Standard email & community support',
      ],
      cta: 'Choose Pro',
      popular: true,
    },
    {
      id: 'team',
      name: 'TEAM',
      price: isAnnual ? '$79' : '$99',
      period: '/month',
      description: 'Collaborative cloud governance and fine-grained access for engineering teams.',
      features: [
        'Shared collaborative team workspace',
        'Unlimited active projects & environments',
        'Role-based access guardrails (RBAC)',
        'Tamper-evident audit activity history',
        'Centralized billing & cost governance',
        'Custom Slack & webhook alerting',
        'Priority SRE support & onboarding review',
      ],
      cta: 'Explore Team',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-nest-bg border-b border-nest-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-nest-blue font-semibold">
            PREDICTABLE PLANS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-nest-text mt-3">
            Start simple. Scale when you're ready.
          </h2>
          <p className="text-base text-nest-secondary mt-4 leading-relaxed">
            Begin with our free starter plan and upgrade to unlock collaborative team workspaces, multi-environment routing, and granular access guardrails.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="inline-flex items-center gap-3 mt-8 p-1 bg-white border border-nest-border rounded-full shadow-subtle">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                !isAnnual ? 'bg-nest-text text-white' : 'text-nest-secondary hover:text-nest-text'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 transition-colors ${
                isAnnual ? 'bg-nest-text text-white' : 'text-nest-secondary hover:text-nest-text'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-nest-blue-soft text-nest-blue font-semibold">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-nest-xl p-8 flex flex-col justify-between transition-all relative ${
                plan.popular
                  ? 'border-2 border-nest-blue shadow-card'
                  : 'border border-nest-border shadow-subtle'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-nest-blue text-white text-[11px] font-mono font-semibold uppercase tracking-wider rounded-full shadow-subtle flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Most Popular
                </div>
              )}

              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-nest-text mb-2">
                  {plan.name}
                </h3>

                <div className="flex items-baseline gap-1 my-4">
                  <span className="text-4xl font-bold font-display tracking-tight text-nest-text">{plan.price}</span>
                  <span className="text-xs text-nest-secondary font-mono">{plan.period}</span>
                </div>

                <p className="text-xs text-nest-secondary leading-relaxed mb-6">
                  {plan.description}
                </p>

                <div className="border-t border-nest-border/60 pt-6 space-y-3 mb-8">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-nest-muted block mb-2">
                    Included Capabilities:
                  </span>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-nest-secondary">
                      <Check className="w-4 h-4 text-nest-blue shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onSelectPlan(plan.name)}
                className={`w-full py-2.5 px-4 text-xs font-semibold rounded-nest transition-all flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-nest-blue hover:bg-nest-blue-deep text-white shadow-subtle'
                    : 'bg-nest-bg hover:bg-nest-subtle text-nest-text border border-nest-border'
                }`}
              >
                <span>{plan.cta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        <p className="text-[11px] font-mono text-nest-muted text-center mt-10">
          * Illustrative demonstration tiers. Selecting a plan opens the prototype onboarding workflow without requiring payment credentials.
        </p>
      </div>
    </section>
  );
};
