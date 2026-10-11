import React, { useState } from 'react';
import { 
  Check, 
  X, 
  ArrowRight, 
  Sliders, 
  BookOpen, 
  Copy, 
  ShieldCheck, 
  ChevronRight,
  Sparkles,
  Maximize2
} from 'lucide-react';
import { BRAND_GUIDELINES } from '../data/brandData';

interface GuidelinesShowcaseProps {
  onCopyHex: (hex: string) => void;
}

export const GuidelinesShowcase: React.FC<GuidelinesShowcaseProps> = ({
  onCopyHex,
}) => {
  const [activeGuidelineIndex, setActiveGuidelineIndex] = useState(0);

  const current = BRAND_GUIDELINES[activeGuidelineIndex];

  return (
    <section id="guidelines" className="py-24 sm:py-36 bg-brand-soft-white border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-brand-taupe block mb-3">
            GOVERNANCE WITHOUT FRICTION
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-brand-ink leading-tight mb-4">
            Consistency, without the complexity.
          </h2>
          <p className="text-base sm:text-lg text-brand-charcoal/80 font-sans leading-relaxed">
            Replace static 80-page PDFs nobody reads with interactive, living web guidelines. Click through the standards on the right to inspect the live documentation preview on the left.
          </p>
        </div>

        {/* Split-Screen Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Side: Visual Preview of Digital Brand Guideline Document */}
          <div className="lg:col-span-7 bg-brand-ivory border border-brand-border rounded-lg p-6 sm:p-10 shadow-editorial relative overflow-hidden transition-all duration-300">
            {/* Top Document Header Bar */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-brand-border">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono tracking-widest uppercase bg-brand-soft-white px-2.5 py-1 rounded border border-brand-border text-brand-charcoal">
                  STANDARD {current.number} / 06
                </span>
                <span className="text-xs font-mono text-brand-olive flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Enforced
                </span>
              </div>
              <span className="text-xs font-mono text-brand-taupe">
                Maison Form Brand Book 2026
              </span>
            </div>

            {/* Document Body */}
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-brand-ink font-medium">
                  {current.title}
                </h3>
                <p className="font-serif italic text-sm text-brand-charcoal/80 mt-1">
                  {current.subtitle}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-brand-charcoal/85 leading-relaxed font-sans">
                {current.summary}
              </p>

              {/* Highlighted Rule Callout */}
              <div className="p-4 rounded border-l-2 border-brand-ink bg-brand-soft-white border border-brand-border/60">
                <span className="text-[10px] font-mono uppercase tracking-widest text-brand-taupe block mb-1">
                  CORE STANDARD GOVERNANCE
                </span>
                <p className="font-serif text-sm sm:text-base text-brand-ink font-medium">
                  "{current.keyRule}"
                </p>
              </div>

              {/* Interactive Visual Canvas depending on active guideline */}
              {current.id === '01' && (
                <div className="p-8 rounded border border-dashed border-brand-charcoal/30 bg-brand-soft-white flex flex-col items-center justify-center text-center relative">
                  <div className="absolute top-2 left-2 text-[9px] font-mono text-brand-taupe">
                    1.5× CAP "M" BOUNDARY
                  </div>
                  <div className="py-6 px-10 border border-brand-olive/50 bg-emerald-50/20 rounded">
                    <span className="font-serif text-3xl font-medium tracking-tight text-brand-ink">
                      Maison Form
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-brand-taupe mt-3">
                    Exclusion Margin Protected on All 4 Cardinal Edges
                  </span>
                </div>
              )}

              {current.id === '02' && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { name: 'Warm Ivory', hex: '#F8F6F0' },
                    { name: 'Ink Black', hex: '#191919' },
                    { name: 'Champagne', hex: '#E8DFD2' },
                    { name: 'Muted Olive', hex: '#777B65' }
                  ].map((c) => (
                    <button
                      key={c.hex}
                      onClick={() => onCopyHex(c.hex)}
                      className="p-3 rounded border border-brand-border bg-brand-soft-white text-left hover:border-brand-ink transition-colors"
                    >
                      <div className="h-10 rounded border border-black/10 mb-2" style={{ backgroundColor: c.hex }} />
                      <span className="text-xs font-serif font-medium text-brand-ink block truncate">{c.name}</span>
                      <span className="text-[10px] font-mono text-brand-taupe block">{c.hex}</span>
                    </button>
                  ))}
                </div>
              )}

              {current.id === '03' && (
                <div className="p-6 rounded border border-brand-border bg-brand-soft-white space-y-4">
                  <div>
                    <span className="text-[9px] font-mono text-brand-taupe uppercase block">Headline 64px / 1.1 Leading</span>
                    <h4 className="font-serif text-2xl text-brand-ink mt-0.5">Quiet Architectural Form</h4>
                  </div>
                  <div className="pt-2 border-t border-brand-border">
                    <span className="text-[9px] font-mono text-brand-taupe uppercase block">Body 15px / 1.6 Leading</span>
                    <p className="font-sans text-xs text-brand-charcoal mt-0.5 leading-relaxed">
                      Every material is chosen with deliberate intention. Unhurried design creates enduring value.
                    </p>
                  </div>
                </div>
              )}

              {current.id === '04' && (
                <div className="aspect-[16/9] rounded overflow-hidden border border-brand-border bg-brand-champagne/30 relative">
                  <img
                    src="/images/maison-form.jpg"
                    alt="Maison Form photographic standard"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded bg-brand-ink/80 text-brand-ivory text-[10px] font-mono backdrop-blur-sm">
                    Natural Daylight · Soft Side Falloff (f/2.8)
                  </div>
                </div>
              )}

              {current.id === '05' && (
                <div className="p-6 rounded border border-brand-border bg-brand-soft-white space-y-3 font-mono text-xs">
                  <div className="flex justify-between pb-2 border-b border-brand-border text-brand-taupe">
                    <span>GRID INCREMENT</span>
                    <span>PIXEL VALUE</span>
                  </div>
                  <div className="flex justify-between text-brand-ink">
                    <span>Base Token (unit-1)</span>
                    <span>8px</span>
                  </div>
                  <div className="flex justify-between text-brand-ink">
                    <span>Card Padding (unit-4)</span>
                    <span>32px</span>
                  </div>
                  <div className="flex justify-between text-brand-ink">
                    <span>Section Rhythm (unit-12)</span>
                    <span>96px</span>
                  </div>
                </div>
              )}

              {current.id === '06' && (
                <div className="p-6 rounded border border-brand-border bg-brand-soft-white space-y-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand-taupe block">
                    EDITORIAL CADENCE PRINCIPLES
                  </span>
                  <p className="font-serif italic text-base text-brand-ink">
                    “Speak with quiet confidence. State facts directly. Respect the user intelligence.”
                  </p>
                  <p className="text-xs text-brand-charcoal/80 font-sans">
                    Never use artificial hype, exaggerated claims, or aggressive urgency countdowns.
                  </p>
                </div>
              )}

              {/* Technical Specifications Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-brand-border">
                {current.specs.map((spec, idx) => (
                  <div key={idx} className="p-2.5 rounded bg-brand-soft-white border border-brand-border/60">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-brand-taupe block">
                      {spec.label}
                    </span>
                    <span className="text-xs font-mono font-medium text-brand-ink mt-0.5 block truncate">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Do & Don't Split Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded border border-emerald-900/20 bg-emerald-50/15">
                  <span className="text-xs font-mono font-semibold text-emerald-800 flex items-center gap-1.5 mb-2">
                    <Check className="w-3.5 h-3.5" /> Approved Practices
                  </span>
                  <ul className="space-y-1.5 text-xs text-brand-charcoal font-sans">
                    {current.dos.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-700 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded border border-rose-900/20 bg-rose-50/15">
                  <span className="text-xs font-mono font-semibold text-rose-800 flex items-center gap-1.5 mb-2">
                    <X className="w-3.5 h-3.5" /> Prohibited Practices
                  </span>
                  <ul className="space-y-1.5 text-xs text-brand-charcoal font-sans">
                    {current.donts.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-rose-700 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Structured List of 6 Brand Standards */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[10px] font-mono tracking-widest uppercase text-brand-taupe block mb-2 px-1">
              SELECT STANDARD TO INSPECT
            </span>

            {BRAND_GUIDELINES.map((guideline, idx) => {
              const isActive = activeGuidelineIndex === idx;
              return (
                <button
                  key={guideline.id}
                  onClick={() => setActiveGuidelineIndex(idx)}
                  className={`w-full text-left p-5 rounded-lg border transition-all duration-200 flex items-center justify-between group ${
                    isActive
                      ? 'border-brand-ink bg-brand-ivory shadow-subtle'
                      : 'border-brand-border bg-brand-soft-white hover:border-brand-charcoal/60 hover:bg-brand-ivory/40'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className={`text-xs font-mono font-semibold mt-0.5 ${
                      isActive ? 'text-brand-ink' : 'text-brand-taupe group-hover:text-brand-charcoal'
                    }`}>
                      {guideline.number}.
                    </span>
                    <div>
                      <h4 className={`font-serif text-lg font-medium transition-colors ${
                        isActive ? 'text-brand-ink' : 'text-brand-charcoal group-hover:text-brand-ink'
                      }`}>
                        {guideline.title}
                      </h4>
                      <p className="text-xs text-brand-taupe font-sans mt-0.5 line-clamp-1">
                        {guideline.subtitle}
                      </p>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 transition-transform ${
                    isActive ? 'text-brand-ink translate-x-1' : 'text-brand-taupe group-hover:text-brand-ink'
                  }`} />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
