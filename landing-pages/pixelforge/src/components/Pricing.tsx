import React from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { PRICING_PLANS } from '../data/pixelforgeData';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-24 md:py-32 relative bg-studio-950/80 border-t border-studio-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-studio-900 border border-studio-border text-xs font-mono tracking-widest uppercase text-neon-violet">
            <span>●</span>
            <span>TRANSPARENT SUBSCRIPTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
            Choose your creative workflow.
          </h2>
          <p className="text-base sm:text-lg text-studio-muted font-normal">
            Start free, scale into advanced brand token systems, or deploy collaborative agency infrastructure.
          </p>
        </div>

        {/* 3 Pricing Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.isPopular
                  ? 'bg-studio-900 border-2 border-neon-violet/70 shadow-[0_0_40px_rgba(139,92,246,0.18)] md:-translate-y-2'
                  : 'bg-studio-900/60 border border-studio-border/80 hover:border-studio-subtle shadow-xl'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-gradient-to-r from-neon-violet to-neon-cyan text-white font-mono text-[11px] font-bold tracking-wider uppercase flex items-center gap-1 shadow-md">
                  <Sparkles className="w-3 h-3" />
                  <span>RECOMMENDED FOR DESIGNERS</span>
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-display font-extrabold text-white tracking-tight">{plan.name}</h3>
                  <p className="text-xs text-studio-muted mt-1 leading-relaxed">{plan.description}</p>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-1.5 mb-6 pb-6 border-b border-studio-border/70 font-mono">
                  <span className="text-4xl sm:text-5xl font-display font-extrabold text-white">{plan.price}</span>
                  <span className="text-xs text-studio-muted">{plan.period}</span>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-studio-text">
                      <div className="p-0.5 rounded-full bg-neon-violet/15 text-neon-violet shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectPlan(plan.name)}
                className={`w-full py-3.5 px-4 rounded-xl font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 ${
                  plan.isPopular
                    ? 'bg-gradient-to-r from-neon-violet to-neon-cyan hover:opacity-95 text-white shadow-lg shadow-neon-violet/25 active:scale-[0.98]'
                    : 'bg-studio-950 text-studio-text hover:text-white border border-studio-border hover:border-studio-subtle active:scale-[0.98]'
                }`}
              >
                <span>{plan.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
