import React from 'react';
import { FolderDown, Layers, Share2, Sparkles, ArrowRight } from 'lucide-react';

export const WorkflowSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      action: 'COLLECT',
      title: 'Gather Fragmented Files',
      desc: 'Bring together your existing logos, colors, typography, guidelines, and creative files from disparate drives and inboxes.',
      icon: FolderDown,
      metric: 'Auto-extract vector SVG & hexes',
      visualBadge: 'Universal Ingestion'
    },
    {
      num: '02',
      action: 'ORGANIZE',
      title: 'Structure Brand Kits',
      desc: 'Arrange assets into intuitive categories, brand kits, version histories, and reusable collections with clear metadata tags.',
      icon: Layers,
      metric: 'Instant exclusion zone specs',
      visualBadge: 'Architectural Hierarchy'
    },
    {
      num: '03',
      action: 'SHARE',
      title: 'Centralize Team Access',
      desc: 'Give your entire team and agency partners a single authenticated destination for approved, up-to-date brand resources.',
      icon: Share2,
      metric: 'Role-based guest permissions',
      visualBadge: 'Zero Bottleneck'
    },
    {
      num: '04',
      action: 'CREATE',
      title: 'Ship Consistent Work',
      desc: 'Use your organized assets and templates to create consistent brand experiences across social, pitch decks, and web.',
      icon: Sparkles,
      metric: '100% on-brand compliance',
      visualBadge: 'Flawless Execution'
    }
  ];

  return (
    <section className="py-24 sm:py-36 bg-brand-ivory border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-brand-taupe block mb-3">
            THE TRANSFORMATION WORKFLOW
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-brand-ink leading-tight mb-4">
            From scattered files to a clear identity.
          </h2>
          <p className="text-base sm:text-lg text-brand-charcoal/80 font-sans leading-relaxed">
            A linear, four-stage journey engineered to transform messy asset directories into an unshakeable, museum-quality design workspace.
          </p>
        </div>

        {/* Horizontal Timeline on Desktop / Vertical on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Subtle Desktop Connecting Hairline */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-[1px] bg-brand-border/80 z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="group relative z-10 bg-brand-soft-white rounded-lg border border-brand-border p-6 sm:p-8 flex flex-col justify-between shadow-subtle hover:shadow-editorial transition-all duration-300"
              >
                <div>
                  {/* Step Header with Icon Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full border border-brand-border bg-brand-ivory text-brand-ink flex items-center justify-center group-hover:bg-brand-ink group-hover:text-brand-ivory transition-colors shadow-subtle">
                      <Icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-brand-taupe group-hover:text-brand-ink transition-colors">
                      {step.num}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-brand-olive font-semibold block mb-1">
                    STAGE {step.num} — {step.action}
                  </span>

                  <h3 className="font-serif text-xl font-medium text-brand-ink mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-charcoal/80 font-sans leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Footer Micro-Detail */}
                <div className="pt-6 mt-6 border-t border-brand-border/60 flex items-center justify-between text-[11px] font-mono text-brand-taupe">
                  <span>{step.visualBadge}</span>
                  <span className="text-brand-charcoal font-semibold">✓</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
