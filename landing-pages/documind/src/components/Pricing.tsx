import React, { useState } from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      id: 'free',
      name: 'FREE',
      price: '$0',
      period: '/month',
      description: 'Essential document intelligence workspace for solo researchers and analysts.',
      features: [
        'Basic document workspace',
        'Up to 10 active indexed documents',
        'Essential semantic search',
        'Standard executive summaries',
        'Personal workspace vault',
        'Client-side memory sandbox',
      ],
      cta: 'Get Started Free',
      popular: false,
    },
    {
      id: 'pro',
      name: 'PRO',
      price: isAnnual ? '$15' : '$19',
      period: '/month',
      description: 'Expanded capacity and deep reasoning tools for professionals and power researchers.',
      features: [
        'Expanded document capacity',
        'Advanced conversational document chat',
        'Side-by-side document comparisons',
        'Structured tabular data extraction',
        'Unlimited saved answer bank',
        'Priority vector indexing queue',
        'Export to Markdown, PDF, and JSON',
      ],
      cta: 'Choose Pro',
      popular: true,
    },
    {
      id: 'team',
      name: 'TEAM',
      price: isAnnual ? '$39' : '$49',
      period: '/user/month',
      description: 'Collaborative knowledge architecture for operations, legal, and product teams.',
      features: [
        'Shared collaborative workspaces',
        'Multi-user team collections',
        'Role-based permissions & access audit',
        'Shared document knowledge repository',
        'Team-wide semantic search',
        'Centralized administrative billing',
        'Dedicated customer success engineer',
      ],
      cta: 'Explore Team',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-docu-bg border-b border-docu-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-docu-accent font-semibold">
            TRANSPARENT PLANS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-docu-text mt-3">
            Choose a clearer way to work.
          </h2>
          <p className="text-base text-docu-secondary mt-4 leading-relaxed">
            Start with our generous free tier or unlock advanced comparative diffing, team collections, and high-throughput vector processing.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="inline-flex items-center gap-3 mt-8 p-1 bg-white border border-docu-border rounded-full shadow-subtle">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                !isAnnual ? 'bg-docu-text text-white' : 'text-docu-secondary hover:text-docu-text'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 transition-colors ${
                isAnnual ? 'bg-docu-text text-white' : 'text-docu-secondary hover:text-docu-text'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-docu-accent-soft text-docu-accent font-semibold">
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
              className={`bg-white rounded-docu-xl p-8 flex flex-col justify-between transition-all relative ${
                plan.popular
                  ? 'border-2 border-docu-accent shadow-card'
                  : 'border border-docu-border shadow-subtle'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-docu-accent text-white text-[11px] font-mono font-semibold uppercase tracking-wider rounded-full shadow-subtle flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Most Popular
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-docu-text">
                    {plan.name}
                  </h3>
                </div>

                <div className="flex items-baseline gap-1 my-4">
                  <span className="text-4xl font-bold tracking-tight text-docu-text">{plan.price}</span>
                  <span className="text-xs text-docu-secondary font-mono">{plan.period}</span>
                </div>

                <p className="text-xs text-docu-secondary leading-relaxed mb-6">
                  {plan.description}
                </p>

                <div className="border-t border-docu-border/60 pt-6 space-y-3 mb-8">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-docu-muted block mb-2">
                    Included Capabilities:
                  </span>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-docu-secondary">
                      <Check className="w-4 h-4 text-docu-accent shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onSelectPlan(plan.name)}
                className={`w-full py-2.5 px-4 text-xs font-semibold rounded-docu transition-all flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-docu-accent hover:bg-docu-accent-hover text-white shadow-subtle'
                    : 'bg-docu-subtle hover:bg-docu-border text-docu-text'
                }`}
              >
                <span>{plan.cta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-[11px] font-mono text-docu-muted text-center mt-10">
          * Illustrative demonstration tiers. Selecting a plan opens the prototype onboarding workflow without requiring payment credentials.
        </p>
      </div>
    </section>
  );
};
