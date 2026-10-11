import React from 'react';
import { ArrowUpRight, Palette, Layers, Eye } from 'lucide-react';
import { BRAND_IDENTITIES } from '../data/brandData';
import { BrandKitIdentity } from '../types';

interface BrandIdentityGalleryProps {
  onViewBrandKit: (brand: BrandKitIdentity) => void;
}

export const BrandIdentityGallery: React.FC<BrandIdentityGalleryProps> = ({
  onViewBrandKit,
}) => {
  return (
    <section id="brand-kits" className="py-24 sm:py-36 bg-brand-soft-white border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-24 pb-8 border-b border-brand-border">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-brand-taupe block mb-3">
              EDITORIAL CURATION
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-brand-ink leading-tight">
              Every brand has its own language.
            </h2>
          </div>
          <p className="max-w-md text-sm text-brand-charcoal/80 font-sans leading-relaxed">
            Six distinct identity systems, each organized within its own dedicated Brandly workspace with calibrated color tokens, typography scales, and guidelines.
          </p>
        </div>

        {/* ASYMMETRICAL LUXURY EDITORIAL MAGAZINE GALLERY (Varied proportions & layouts) */}
        <div className="space-y-16 sm:space-y-24">
          {/* Row 1: Large Featured Anchor (Maison Form) paired with Architectural Split (Studio Forma) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Identity 01: Maison Form — Wide Editorial Canvas (7 cols) */}
            <div className="lg:col-span-7 group bg-brand-ivory border border-brand-border rounded-lg overflow-hidden flex flex-col justify-between shadow-editorial hover:shadow-luxury transition-all duration-300">
              <div className="p-6 sm:p-8 flex items-center justify-between border-b border-brand-border">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand-taupe">
                    01 · {BRAND_IDENTITIES[0].category}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-brand-ink mt-0.5">
                    {BRAND_IDENTITIES[0].name}
                  </h3>
                </div>
                <button
                  onClick={() => onViewBrandKit(BRAND_IDENTITIES[0])}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded border border-brand-border bg-brand-soft-white text-xs font-mono uppercase tracking-wider text-brand-ink hover:bg-brand-ink hover:text-brand-ivory transition-colors"
                >
                  <span>View Brand Kit</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Large Image Aspect */}
              <div className="relative aspect-[16/10] overflow-hidden bg-brand-champagne/30">
                <img
                  src={BRAND_IDENTITIES[0].featuredVisual}
                  alt={BRAND_IDENTITIES[0].name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>

              <div className="p-6 sm:p-8 border-t border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-brand-soft-white">
                <p className="text-xs text-brand-charcoal/80 font-sans italic max-w-sm">
                  "{BRAND_IDENTITIES[0].tagline}"
                </p>
                <div className="flex items-center gap-1.5">
                  {BRAND_IDENTITIES[0].palette.map((c) => (
                    <span
                      key={c.hex}
                      className="w-4 h-4 rounded-full border border-black/10"
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    />
                  ))}
                  <span className="text-[11px] font-mono text-brand-taupe ml-2">
                    {BRAND_IDENTITIES[0].assetsCount} Assets
                  </span>
                </div>
              </div>
            </div>

            {/* Identity 04: Studio Forma — Tall Architectural Column (5 cols) */}
            <div className="lg:col-span-5 group bg-brand-ivory border border-brand-border rounded-lg overflow-hidden flex flex-col justify-between shadow-editorial hover:shadow-luxury transition-all duration-300">
              <div className="p-6 sm:p-8 flex items-center justify-between border-b border-brand-border">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand-taupe">
                    04 · {BRAND_IDENTITIES[3].category}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-brand-ink mt-0.5">
                    {BRAND_IDENTITIES[3].name}
                  </h3>
                </div>
                <button
                  onClick={() => onViewBrandKit(BRAND_IDENTITIES[3])}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-brand-border bg-brand-soft-white text-xs font-mono uppercase tracking-wider text-brand-ink hover:bg-brand-ink hover:text-brand-ivory transition-colors"
                >
                  <span>View Kit</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Architectural Graphic Composition */}
              <div className="p-8 flex-1 flex flex-col justify-center items-center bg-brand-soft-white relative overflow-hidden">
                <div className="w-full max-w-xs border border-brand-charcoal/20 p-6 bg-brand-ivory text-center">
                  <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-brand-taupe block mb-4">
                    MONOCHROME STRUCTURAL SPEC
                  </span>
                  <span className="font-serif text-3xl font-normal tracking-tight text-brand-ink block mb-2">
                    STUDIO FORMA
                  </span>
                  <span className="font-mono text-xs text-brand-charcoal block">
                    BRUTALIST PROPORTIONS · 01:1.618
                  </span>
                </div>
                <div className="mt-6 flex items-center gap-2">
                  {BRAND_IDENTITIES[3].palette.map((c) => (
                    <span
                      key={c.hex}
                      className="w-5 h-5 rounded border border-black/15"
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>
              </div>

              <div className="p-6 border-t border-brand-border bg-brand-ivory/50 flex items-center justify-between text-xs font-mono text-brand-taupe">
                <span>Strict Architectural Grids</span>
                <span>{BRAND_IDENTITIES[3].assetsCount} Files</span>
              </div>
            </div>
          </div>

          {/* Row 2: Three-Way Editorial Triptych (Solenne, Common Ground, Sunday Objects) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Identity 02: Solenne (Clean Beauty) */}
            <div className="group bg-brand-ivory border border-brand-border rounded-lg overflow-hidden flex flex-col justify-between shadow-editorial hover:shadow-luxury transition-all duration-300">
              <div className="p-6 border-b border-brand-border flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand-taupe">
                    02 · {BRAND_IDENTITIES[1].category}
                  </span>
                  <h4 className="font-serif text-2xl font-medium text-brand-ink mt-0.5">
                    {BRAND_IDENTITIES[1].name}
                  </h4>
                </div>
                <button
                  onClick={() => onViewBrandKit(BRAND_IDENTITIES[1])}
                  className="p-1.5 rounded border border-brand-border bg-brand-soft-white hover:bg-brand-ink hover:text-brand-ivory transition-colors"
                  aria-label="View Solenne Brand Kit"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              <div className="aspect-[4/3] overflow-hidden bg-brand-champagne/20">
                <img
                  src={BRAND_IDENTITIES[1].featuredVisual}
                  alt={BRAND_IDENTITIES[1].name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6 border-t border-brand-border bg-brand-soft-white space-y-3">
                <p className="text-xs text-brand-charcoal/80 leading-relaxed font-sans">
                  {BRAND_IDENTITIES[1].visualDirection}
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-brand-border/60">
                  <div className="flex gap-1.5">
                    {BRAND_IDENTITIES[1].palette.map((c) => (
                      <span
                        key={c.hex}
                        className="w-3.5 h-3.5 rounded-full border border-black/10"
                        style={{ backgroundColor: c.hex }}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-brand-taupe">
                    {BRAND_IDENTITIES[1].assetsCount} Assets
                  </span>
                </div>
              </div>
            </div>

            {/* Identity 03: Common Ground (Specialty Coffee) */}
            <div className="group bg-brand-ivory border border-brand-border rounded-lg overflow-hidden flex flex-col justify-between shadow-editorial hover:shadow-luxury transition-all duration-300">
              <div className="p-6 border-b border-brand-border flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand-taupe">
                    03 · {BRAND_IDENTITIES[2].category}
                  </span>
                  <h4 className="font-serif text-2xl font-medium text-brand-ink mt-0.5">
                    {BRAND_IDENTITIES[2].name}
                  </h4>
                </div>
                <button
                  onClick={() => onViewBrandKit(BRAND_IDENTITIES[2])}
                  className="p-1.5 rounded border border-brand-border bg-brand-soft-white hover:bg-brand-ink hover:text-brand-ivory transition-colors"
                  aria-label="View Common Ground Brand Kit"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              {/* Graphic Editorial Texture Art */}
              <div className="aspect-[4/3] bg-[#EBE4D5] p-6 flex flex-col justify-between border-y border-brand-border/60">
                <span className="text-[9px] font-mono text-[#443429] tracking-widest uppercase">
                  UNBLEACHED FIBER SPEC
                </span>
                <div className="text-center py-4">
                  <span className="font-serif text-2xl text-[#443429] font-bold block">
                    COMMON GROUND
                  </span>
                  <span className="text-[10px] font-mono text-[#B86F52] mt-1 block">
                    ETHIOPIA YIRGACHEFFE · LOT 04
                  </span>
                </div>
                <span className="text-[9px] font-mono text-[#443429] text-right">
                  300 GSM RAW KRAFT
                </span>
              </div>

              <div className="p-6 border-t border-brand-border bg-brand-soft-white space-y-3">
                <p className="text-xs text-brand-charcoal/80 leading-relaxed font-sans">
                  {BRAND_IDENTITIES[2].visualDirection}
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-brand-border/60">
                  <div className="flex gap-1.5">
                    {BRAND_IDENTITIES[2].palette.map((c) => (
                      <span
                        key={c.hex}
                        className="w-3.5 h-3.5 rounded-full border border-black/10"
                        style={{ backgroundColor: c.hex }}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-brand-taupe">
                    {BRAND_IDENTITIES[2].assetsCount} Assets
                  </span>
                </div>
              </div>
            </div>

            {/* Identity 05: Sunday Objects (Home Goods) */}
            <div className="group bg-brand-ivory border border-brand-border rounded-lg overflow-hidden flex flex-col justify-between shadow-editorial hover:shadow-luxury transition-all duration-300">
              <div className="p-6 border-b border-brand-border flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand-taupe">
                    05 · {BRAND_IDENTITIES[4].category}
                  </span>
                  <h4 className="font-serif text-2xl font-medium text-brand-ink mt-0.5">
                    {BRAND_IDENTITIES[4].name}
                  </h4>
                </div>
                <button
                  onClick={() => onViewBrandKit(BRAND_IDENTITIES[4])}
                  className="p-1.5 rounded border border-brand-border bg-brand-soft-white hover:bg-brand-ink hover:text-brand-ivory transition-colors"
                  aria-label="View Sunday Objects Brand Kit"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              <div className="aspect-[4/3] bg-brand-champagne/40 p-6 flex flex-col justify-center items-center text-center">
                <div className="w-14 h-14 rounded-full border border-brand-charcoal/30 flex items-center justify-center font-serif text-xl text-brand-charcoal mb-2">
                  SO
                </div>
                <span className="font-serif text-xl text-brand-ink">Sunday Objects</span>
                <span className="text-[10px] font-mono text-brand-taupe mt-1">Tactile Solid Joinery</span>
              </div>

              <div className="p-6 border-t border-brand-border bg-brand-soft-white space-y-3">
                <p className="text-xs text-brand-charcoal/80 leading-relaxed font-sans">
                  {BRAND_IDENTITIES[4].visualDirection}
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-brand-border/60">
                  <div className="flex gap-1.5">
                    {BRAND_IDENTITIES[4].palette.map((c) => (
                      <span
                        key={c.hex}
                        className="w-3.5 h-3.5 rounded-full border border-black/10"
                        style={{ backgroundColor: c.hex }}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-brand-taupe">
                    {BRAND_IDENTITIES[4].assetsCount} Assets
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Cinematic Monochrome Full-Width Banner (Noire Atelier) */}
          <div className="group bg-brand-ink text-brand-ivory border border-brand-border-dark rounded-lg overflow-hidden shadow-luxury p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-champagne block">
                06 · {BRAND_IDENTITIES[5].category}
              </span>
              <h3 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-brand-ivory">
                {BRAND_IDENTITIES[5].name}
              </h3>
              <p className="text-sm text-brand-taupe font-sans leading-relaxed">
                {BRAND_IDENTITIES[5].visualDirection} High-contrast monochrome tailoring and Parisian editorial standards.
              </p>
              <div className="flex items-center gap-3 pt-2">
                {BRAND_IDENTITIES[5].palette.map((c) => (
                  <div key={c.hex} className="flex items-center gap-1 text-[11px] font-mono text-brand-taupe">
                    <span className="w-3.5 h-3.5 rounded border border-white/20" style={{ backgroundColor: c.hex }} />
                    <span className="hidden sm:inline">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <button
                onClick={() => onViewBrandKit(BRAND_IDENTITIES[5])}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-brand-ivory text-brand-ink text-xs font-mono uppercase tracking-wider hover:bg-brand-champagne transition-colors"
              >
                <span>Inspect Brand Kit</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
