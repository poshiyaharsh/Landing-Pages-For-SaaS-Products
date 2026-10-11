import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

interface FinalCTAProps {
  onStartWorkspace: () => void;
  onExplorePlatform: () => void;
  onCopyHex: (hex: string) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  onStartWorkspace,
  onExplorePlatform,
  onCopyHex,
}) => {
  return (
    <section className="py-28 sm:py-40 bg-brand-soft-white border-b border-brand-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-brand-taupe block mb-6">
            THE INVITATION
          </span>

          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-brand-ink leading-[1.08] mb-6 text-balance">
            Your brand deserves<br />
            <span className="italic font-serif text-brand-charcoal underline decoration-brand-champagne decoration-[1.5px] underline-offset-8">
              a beautiful home.
            </span>
          </h2>

          <p className="max-w-xl mx-auto text-base sm:text-lg text-brand-charcoal/80 font-sans leading-relaxed mb-10 text-balance">
            Bring every detail together and give your brand the clarity it deserves. Start organizing in minutes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={onStartWorkspace}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded bg-brand-ink hover:bg-brand-charcoal text-brand-ivory text-xs font-mono uppercase tracking-widest transition-all shadow-editorial hover:shadow-luxury hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Create Your Brand Space</span>
              <ArrowRight className="w-4 h-4 text-brand-champagne" />
            </button>

            <button
              onClick={onExplorePlatform}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded border border-brand-border bg-brand-ivory hover:bg-brand-champagne/30 text-brand-charcoal text-xs font-mono uppercase tracking-widest transition-colors"
            >
              <span>Explore the Platform</span>
            </button>
          </div>

          {/* Visual Composition: Open Luxury Brand Book Spread */}
          <div className="relative max-w-4xl mx-auto rounded-lg border border-brand-border bg-brand-ivory p-6 sm:p-12 shadow-luxury overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left">
              {/* Left Page of Open Brand Book */}
              <div className="border-b md:border-b-0 md:border-r border-brand-border/80 pb-6 md:pb-0 md:pr-8 space-y-4">
                <span className="text-[10px] font-mono tracking-widest uppercase text-brand-taupe block">
                  BRAND BOOK FOLIO — VOL. 01
                </span>
                <span className="font-serif text-3xl font-normal text-brand-ink block">
                  Brandly Systems
                </span>
                <p className="font-serif italic text-sm text-brand-charcoal/70">
                  “Design is intelligence made visible.”
                </p>
                <div className="flex items-center gap-2 pt-2">
                  {[
                    { name: 'Warm Ivory', hex: '#F8F6F0' },
                    { name: 'Soft White', hex: '#FFFEFC' },
                    { name: 'Ink Black', hex: '#191919' },
                    { name: 'Muted Taupe', hex: '#B8ADA0' },
                    { name: 'Champagne', hex: '#E8DFD2' },
                    { name: 'Muted Olive', hex: '#777B65' }
                  ].map((s) => (
                    <button
                      key={s.hex}
                      onClick={() => onCopyHex(s.hex)}
                      className="w-5 h-5 rounded-full border border-black/15 transition-transform hover:scale-125"
                      style={{ backgroundColor: s.hex }}
                      title={`Copy ${s.name} (${s.hex})`}
                    />
                  ))}
                </div>
              </div>

              {/* Right Page of Open Brand Book */}
              <div className="space-y-4">
                <span className="text-[10px] font-mono tracking-widest uppercase text-brand-taupe block">
                  APPROVED REPOSITORIES
                </span>
                <div className="space-y-2 text-xs font-sans text-brand-charcoal">
                  <div className="flex items-center justify-between p-2 rounded bg-brand-soft-white border border-brand-border/60">
                    <span>Vector Assets & Monograms</span>
                    <span className="font-mono text-[10px] text-brand-olive">100% Scalable</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-brand-soft-white border border-brand-border/60">
                    <span>Editorial Typography Scale</span>
                    <span className="font-mono text-[10px] text-brand-olive">8pt Baseline</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-brand-soft-white border border-brand-border/60">
                    <span>Multi-Platform Share Links</span>
                    <span className="font-mono text-[10px] text-brand-olive">Instant Sync</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
