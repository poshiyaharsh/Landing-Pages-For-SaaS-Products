import React from 'react';
import { 
  Building2, 
  Megaphone, 
  Rocket, 
  ShoppingBag, 
  PenTool, 
  Briefcase,
  ArrowRight
} from 'lucide-react';
import { USE_CASES } from '../data/brandData';

interface UseCasesProps {
  onStartWorkspace: () => void;
}

export const UseCases: React.FC<UseCasesProps> = ({ onStartWorkspace }) => {
  const icons = [
    Building2,
    Megaphone,
    Rocket,
    ShoppingBag,
    PenTool,
    Briefcase
  ];

  return (
    <section className="py-24 sm:py-36 bg-brand-soft-white border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-brand-taupe block mb-3">
            TAILORED WORKSPACES
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-brand-ink leading-tight mb-4">
            Made for teams that care about the details.
          </h2>
          <p className="text-base sm:text-lg text-brand-charcoal/80 font-sans leading-relaxed">
            Whether managing forty global client identities or building your first startup brand guidelines, Brandly molds to your creative velocity.
          </p>
        </div>

        {/* 6 DISTINCT USE-CASE MODULES with unique visual styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {USE_CASES.map((uc, idx) => {
            const Icon = icons[idx] || Briefcase;
            return (
              <div
                key={uc.title}
                className="group bg-brand-ivory border border-brand-border hover:border-brand-ink rounded-lg p-8 flex flex-col justify-between shadow-subtle hover:shadow-editorial transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-brand-border/70">
                    <div className="w-10 h-10 rounded border border-brand-border bg-brand-soft-white flex items-center justify-center text-brand-charcoal group-hover:bg-brand-ink group-hover:text-brand-ivory transition-colors">
                      <Icon className="w-4 h-4 stroke-[1.5]" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded bg-brand-champagne/40 text-brand-charcoal border border-brand-border">
                      {uc.badge}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand-olive block mb-1">
                    {uc.subtitle}
                  </span>

                  <h3 className="font-serif text-2xl font-medium text-brand-ink mb-3 group-hover:text-brand-olive transition-colors">
                    {uc.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-charcoal/80 font-sans leading-relaxed mb-6">
                    {uc.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between text-xs font-mono text-brand-taupe">
                  <span className="truncate pr-2">{uc.metrics}</span>
                  <span className="text-brand-ink font-semibold group-hover:translate-x-1 transition-transform inline-block">
                    →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
