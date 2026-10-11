import React, { useState } from 'react';
import { XCircle, CheckCircle, ArrowRight, FolderX, ShieldCheck, Sparkles } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'both' | 'scattered' | 'organized'>('both');

  const scatteredPoints = [
    { title: 'Logos in multiple folders', detail: 'Teams download conflicting PNGs from Slack, email threads, and outdated cloud drives.' },
    { title: 'Outdated guidelines', detail: 'PDF manuals saved in 2022 that nobody reads or updates when logos evolve.' },
    { title: 'Inconsistent color values', detail: 'HEX, RGB, CMYK, and Pantone misalignments across web, print, and social touchpoints.' },
    { title: 'Lost design files', detail: 'Original vector Illustrator and Figma master files vanished in archived personal folders.' },
    { title: 'Duplicate templates', detail: 'Marketing creates ad-hoc decks while sales uses non-compliant slide variations.' },
    { title: 'Endless requests for brand assets', detail: 'Design leads spend hours answering: “Where is the high-res white logo with transparent background?”' }
  ];

  const organizedPoints = [
    { title: 'One organized brand home', detail: 'A single, authoritative URL hosting every visual element, asset version, and rule.' },
    { title: 'Approved assets in one place', detail: 'Only current, verified vector SVGs and high-res photography accessible to teams.' },
    { title: 'Clear brand guidelines', detail: 'Live, interactive web guidelines with exclusion boundaries, typography rules, and do/don’t examples.' },
    { title: 'Consistent templates', detail: 'Pre-formatted social, deck, and print templates tied directly to your active brand kit.' },
    { title: 'Simple team access', detail: 'Role-based permissions for internal staff, freelance collaborators, and agency partners.' },
    { title: 'Organized creative resources', detail: 'Searchable tags, instant copy-to-clipboard color tokens, and instant format exports.' }
  ];

  return (
    <section className="py-24 sm:py-32 bg-brand-ivory border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-brand-taupe block mb-3">
            THE ARCHITECTURE OF CLARITY
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-brand-ink leading-tight mb-6">
            Your brand is more than a folder full of files.
          </h2>
          <p className="text-base sm:text-lg text-brand-charcoal/80 font-sans leading-relaxed">
            Your identity lives everywhere. Brandly brings it together, so every team member knows what to use, where to find it, and how to use it beautifully.
          </p>
        </div>

        {/* Refined Two-Column Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: The Scattered Brand */}
          <div className="rounded-lg border border-brand-border/80 bg-brand-soft-white/60 p-8 sm:p-10 flex flex-col justify-between shadow-subtle relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-brand-taupe/40" />

            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-brand-border">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-champagne/40 border border-brand-border flex items-center justify-center text-brand-charcoal">
                    <FolderX className="w-4 h-4 stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-brand-ink">
                      The Scattered Brand
                    </h3>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-brand-taupe">
                      Disconnected & Fragmented
                    </span>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-brand-ivory border border-brand-border text-brand-taupe">
                  Before Brandly
                </span>
              </div>

              <div className="space-y-5">
                {scatteredPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <XCircle className="w-4 h-4 text-brand-taupe flex-shrink-0 mt-1 stroke-[1.5]" />
                    <div>
                      <h4 className="text-sm font-medium text-brand-ink font-sans">
                        {point.title}
                      </h4>
                      <p className="text-xs text-brand-charcoal/70 mt-0.5 leading-relaxed">
                        {point.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-brand-border/60 text-xs font-mono text-brand-taupe">
              Result: Brand dilution, wasted design hours, and disjointed customer touchpoints.
            </div>
          </div>

          {/* Right Column: The Brandly Workspace */}
          <div className="rounded-lg border-2 border-brand-charcoal/20 bg-brand-soft-white p-8 sm:p-10 flex flex-col justify-between shadow-editorial relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-brand-ink" />

            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-brand-border">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-ink text-brand-ivory flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 stroke-[1.75]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-brand-ink">
                      The Brandly Workspace
                    </h3>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-brand-olive font-semibold">
                      Unified & Curated
                    </span>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-brand-champagne/40 border border-brand-border text-brand-charcoal font-medium">
                  With Brandly
                </span>
              </div>

              <div className="space-y-5">
                {organizedPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <CheckCircle className="w-4 h-4 text-brand-olive flex-shrink-0 mt-1 stroke-[1.75]" />
                    <div>
                      <h4 className="text-sm font-semibold text-brand-ink font-sans">
                        {point.title}
                      </h4>
                      <p className="text-xs text-brand-charcoal/80 mt-0.5 leading-relaxed">
                        {point.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-brand-border flex items-center justify-between text-xs font-mono text-brand-olive">
              <span>Result: 100% brand consistency across all channels</span>
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
