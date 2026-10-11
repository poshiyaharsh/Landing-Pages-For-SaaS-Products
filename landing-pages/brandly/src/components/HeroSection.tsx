import React from 'react';
import { ArrowRight, Sparkles, Copy, Check, Layers, ShieldCheck, Folder, Palette, Type, SlidersHorizontal } from 'lucide-react';

interface HeroSectionProps {
  onStartWorkspace: () => void;
  onExplorePlatform: () => void;
  onCopyHex: (hex: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartWorkspace,
  onExplorePlatform,
  onCopyHex,
}) => {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-brand-ivory border-b border-brand-border/60">
      {/* Background Subtle Paper Texture & Architectural Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#191919_1px,transparent_1px)] [background-size:24px_24px]" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Editorial Eyebrow & Headline Block */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-border bg-brand-soft-white/80 backdrop-blur-sm text-[11px] font-mono tracking-[0.25em] uppercase text-brand-charcoal mb-6 shadow-subtle animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-olive animate-pulse" />
            THE HOME FOR YOUR BRAND
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-brand-ink leading-[1.08] mb-6 text-balance">
            Your entire brand,<br />
            <span className="italic font-normal font-serif text-brand-charcoal underline decoration-brand-champagne decoration-[1.5px] underline-offset-8">
              beautifully organized.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-brand-charcoal/80 font-sans font-normal leading-relaxed mb-8 text-balance">
            Every logo, color, font, template, guideline, and creative asset — thoughtfully organized in one beautiful workspace. Give your entire team the confidence to create consistently.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <button
              onClick={onStartWorkspace}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded bg-brand-ink hover:bg-brand-charcoal text-brand-ivory text-xs font-medium tracking-widest uppercase transition-all shadow-editorial hover:shadow-luxury hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Create Your Brand Space</span>
              <ArrowRight className="w-4 h-4 text-brand-champagne" />
            </button>

            <button
              onClick={onExplorePlatform}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded border border-brand-border bg-brand-soft-white/90 hover:bg-brand-champagne/30 text-brand-charcoal text-xs font-medium tracking-widest uppercase transition-colors"
            >
              <span>Explore the Platform</span>
            </button>
          </div>

          <p className="text-[12px] font-mono tracking-wider text-brand-taupe uppercase">
            Your brand, one beautifully organized home.
          </p>
        </div>

        {/* HERO VISUAL COMPOSITION: Realistic Software Workspace Preview with Surrounding Brand Book Collateral */}
        <div className="relative max-w-6xl mx-auto mt-6">
          {/* Main Central Workspace Mockup Container */}
          <div className="relative rounded-lg border border-brand-border bg-brand-soft-white shadow-luxury overflow-hidden">
            {/* Top Workspace Chrome / Window Header */}
            <div className="bg-brand-ivory/80 border-b border-brand-border px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-border border border-black/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-brand-border border border-black/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-brand-border border border-black/10" />
                <span className="text-xs font-mono text-brand-taupe ml-3 hidden sm:inline">
                  brandly.workspace / maison-form / master-identity
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-brand-olive bg-brand-soft-white px-2.5 py-1 rounded border border-brand-border">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>v2.4 Synced & Approved</span>
              </div>
            </div>

            {/* Inner Software Workspace Interface */}
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
              {/* Left Sub-Sidebar inside preview */}
              <div className="lg:col-span-3 border-r border-brand-border bg-brand-ivory/40 p-5 hidden sm:block">
                <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-brand-border">
                  <div className="w-7 h-7 rounded bg-brand-ink text-brand-ivory flex items-center justify-center font-serif text-sm font-semibold">
                    M
                  </div>
                  <div>
                    <h4 className="text-xs font-serif font-bold text-brand-ink">Maison Form</h4>
                    <span className="text-[10px] font-mono text-brand-taupe block">Contemporary Living</span>
                  </div>
                </div>

                <div className="space-y-1 text-xs">
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded bg-brand-ink text-brand-ivory font-medium">
                    <Layers className="w-3.5 h-3.5 text-brand-champagne" />
                    <span>Identity Overview</span>
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded text-brand-charcoal hover:bg-brand-champagne/30 transition-colors">
                    <Palette className="w-3.5 h-3.5 text-brand-taupe" />
                    <span>Color Swatches (4)</span>
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded text-brand-charcoal hover:bg-brand-champagne/30 transition-colors">
                    <Type className="w-3.5 h-3.5 text-brand-taupe" />
                    <span>Typography Hierarchy</span>
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded text-brand-charcoal hover:bg-brand-champagne/30 transition-colors">
                    <Folder className="w-3.5 h-3.5 text-brand-taupe" />
                    <span>Approved Assets (142)</span>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-brand-border">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand-taupe block mb-3">
                    Active Brand Kit
                  </span>
                  <div className="p-3 rounded border border-brand-border bg-brand-soft-white">
                    <span className="text-xs font-serif text-brand-ink block font-medium">Clear Space Rule</span>
                    <span className="text-[11px] text-brand-charcoal/80 font-mono block mt-1">1.5× Cap "M" Height</span>
                  </div>
                </div>
              </div>

              {/* Central Software Content: Visual Brand Board */}
              <div className="lg:col-span-9 p-6 sm:p-8 bg-brand-soft-white flex flex-col justify-between">
                {/* Top Quick Status Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-brand-border">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-brand-taupe">
                      CORE IDENTITY BOARD
                    </span>
                    <h3 className="font-serif text-2xl text-brand-ink font-normal mt-0.5">
                      Maison Form — Visual System 2026
                    </h3>
                  </div>

                  {/* Interactive Quick Swatches */}
                  <div className="flex items-center gap-1.5 bg-brand-ivory p-1.5 rounded border border-brand-border">
                    <span className="text-[10px] font-mono text-brand-taupe mr-1 px-1">HEX:</span>
                    {[
                      { name: 'Porcelain', hex: '#F9F8F5' },
                      { name: 'Charcoal', hex: '#2A2927' },
                      { name: 'Dune Sand', hex: '#DED5C6' },
                      { name: 'Olive', hex: '#777B65' }
                    ].map((swatch) => (
                      <button
                        key={swatch.hex}
                        onClick={() => onCopyHex(swatch.hex)}
                        title={`Copy ${swatch.name} (${swatch.hex})`}
                        className="w-6 h-6 rounded-full border border-black/15 transition-transform hover:scale-125 focus:outline-none relative group"
                        style={{ backgroundColor: swatch.hex }}
                        aria-label={`Copy color ${swatch.name}`}
                      >
                        <span className="sr-only">Copy {swatch.hex}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Grid of Brand Collateral inside Software Window */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-6">
                  {/* Card 1: Primary Typography & Mark */}
                  <div className="rounded border border-brand-border p-5 bg-brand-ivory/50 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-brand-taupe block mb-2">
                        01. Master Wordmark
                      </span>
                      <div className="py-4 border-y border-brand-border/60 my-2 text-center">
                        <span className="font-serif text-3xl font-medium tracking-tight text-brand-ink block">
                          Maison Form
                        </span>
                        <span className="text-[9px] font-mono tracking-widest uppercase text-brand-taupe mt-1 block">
                          EST. 2026 · STOCKHOLM
                        </span>
                      </div>
                    </div>
                    <div className="text-[11px] font-mono text-brand-taupe flex justify-between pt-2">
                      <span>Vector SVG</span>
                      <span className="text-brand-olive font-semibold">100% Vector</span>
                    </div>
                  </div>

                  {/* Card 2: Packaging & Object Photography */}
                  <div className="rounded border border-brand-border overflow-hidden bg-brand-ivory flex flex-col">
                    <div className="aspect-[4/3] w-full overflow-hidden bg-brand-champagne/30 relative">
                      <img
                        src="/images/maison-form.jpg"
                        alt="Maison Form ceramic vessel still life"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-brand-ink/80 text-brand-ivory text-[9px] font-mono">
                        Hero Still Life
                      </span>
                    </div>
                    <div className="p-3 bg-brand-soft-white flex-1 flex flex-col justify-between">
                      <span className="text-xs font-serif text-brand-ink">Sculptural Form No. 4</span>
                      <span className="text-[10px] font-mono text-brand-taupe">Asset #MF-IMG-04 · 5840px</span>
                    </div>
                  </div>

                  {/* Card 3: Editorial Typography Specimen */}
                  <div className="rounded border border-brand-border p-5 bg-brand-ivory/50 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-brand-taupe block mb-1">
                        02. Editorial Typography
                      </span>
                      <p className="font-serif text-2xl text-brand-ink leading-tight mt-2">
                        Quietly expressive objects.
                      </p>
                      <p className="font-sans text-[11px] text-brand-charcoal/70 mt-2 leading-relaxed">
                        Playfair Display paired with Plus Jakarta Sans for timeless editorial harmony.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-brand-border/60 text-[10px] font-mono text-brand-taupe flex justify-between">
                      <span>Serif & Sans Scale</span>
                      <span>8pt Baseline</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Row inside Workspace: Guidelines & Digital Preview */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-brand-border">
                  <div className="flex items-center gap-3 p-3 rounded border border-brand-border bg-brand-ivory/40">
                    <div className="w-10 h-10 rounded bg-brand-champagne/40 border border-brand-border flex items-center justify-center flex-shrink-0">
                      <SlidersHorizontal className="w-4 h-4 text-brand-charcoal" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs font-medium text-brand-ink block truncate">
                        Brand Compliance Score
                      </span>
                      <span className="text-[11px] text-brand-olive font-mono block">
                        99.8% Approved Assets Across 14 Touchpoints
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded border border-brand-border bg-brand-ivory/40">
                    <div className="w-10 h-10 rounded bg-brand-champagne/40 border border-brand-border flex items-center justify-center flex-shrink-0">
                      <Layers className="w-4 h-4 text-brand-charcoal" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs font-medium text-brand-ink block truncate">
                        Synchronized Team Workspaces
                      </span>
                      <span className="text-[11px] text-brand-taupe font-mono block truncate">
                        Marketing, Industrial Design & Agency Noir connected
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carefully composed floating tactile cards around workspace for luxury editorial depth */}
          {/* Floating Card Top-Right: Color Swatch Card */}
          <div className="hidden lg:block absolute -top-8 -right-6 w-52 p-4 rounded bg-brand-soft-white border border-brand-border shadow-luxury transform rotate-2 animate-float-gentle pointer-events-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[9px] font-mono tracking-widest uppercase text-brand-taupe">PALETTE CHIP</span>
              <span className="text-[10px] font-mono text-brand-charcoal font-semibold">#777B65</span>
            </div>
            <div className="h-10 rounded bg-[#777B65] mb-2" />
            <div className="flex justify-between items-center text-[10px] font-serif">
              <span className="text-brand-ink font-medium">Muted Olive</span>
              <button
                onClick={() => onCopyHex('#777B65')}
                className="text-brand-olive hover:text-brand-ink font-mono text-[9px] uppercase"
              >
                Copy
              </button>
            </div>
          </div>

          {/* Floating Card Bottom-Left: Business Card / Stationery Spec */}
          <div className="hidden lg:block absolute -bottom-8 -left-6 w-60 p-4 rounded bg-brand-ivory border border-brand-border shadow-luxury transform -rotate-2 pointer-events-auto">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-brand-border/60">
              <span className="text-[9px] font-mono uppercase tracking-widest text-brand-taupe">STATIONERY SPEC</span>
              <span className="text-[9px] font-mono text-brand-olive">350 GSM</span>
            </div>
            <p className="font-serif text-sm font-medium text-brand-ink">
              Maison Form Studio
            </p>
            <p className="font-mono text-[10px] text-brand-taupe mt-0.5">
              Foil Deboss · Raw Cotton Substrate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
