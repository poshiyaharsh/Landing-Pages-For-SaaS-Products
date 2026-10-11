import React, { useState } from 'react';
import { 
  Palette, 
  Search, 
  BookOpen, 
  LayoutTemplate, 
  Users, 
  CheckCircle2, 
  Copy, 
  Layers, 
  Download, 
  Filter, 
  Sparkles, 
  ShieldCheck, 
  Sliders, 
  Check, 
  X,
  ExternalLink
} from 'lucide-react';

interface FeatureShowcaseProps {
  onCopyHex: (hex: string) => void;
  onExploreAsset: (name: string) => void;
}

export const FeatureShowcase: React.FC<FeatureShowcaseProps> = ({
  onCopyHex,
  onExploreAsset,
}) => {
  // Feature 02 mini interactive search filter state
  const [assetFilter, setAssetFilter] = useState('All');
  const [assetSearchQuery, setAssetSearchQuery] = useState('');

  // Feature 04 template mini category filter state
  const [templateFilter, setTemplateFilter] = useState('All');

  // Mini sample assets for Feature 02
  const sampleLibraryAssets = [
    { name: 'Wordmark Primary', type: 'SVG', cat: 'Logos', ver: 'v2.4', size: '18 KB' },
    { name: 'Ceramic Hero Shot', type: 'JPG', cat: 'Photography', ver: 'v1.1', size: '14 MB' },
    { name: 'Exhibition Poster', type: 'FIG', cat: 'Templates', ver: 'v3.0', size: '2.8 MB' },
    { name: 'Monogram Symbol', type: 'SVG', cat: 'Icons', ver: 'v1.2', size: '12 KB' },
    { name: 'Brand Manual PDF', type: 'PDF', cat: 'Guidelines', ver: 'v4.0', size: '8.4 MB' },
    { name: 'Lookbook Macro', type: 'JPG', cat: 'Photography', ver: 'v2.0', size: '18 MB' },
  ];

  const filteredLibrary = sampleLibraryAssets.filter((a) => {
    const matchesCat = assetFilter === 'All' || a.cat === assetFilter;
    const matchesQuery = a.name.toLowerCase().includes(assetSearchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <section id="features" className="py-24 sm:py-32 bg-brand-soft-white border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-20">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-brand-taupe block mb-3">
            CAPABILITIES & SYSTEMS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-brand-ink leading-tight mb-6">
            Everything your brand needs.<br />
            <span className="italic font-serif text-brand-charcoal">Nothing it doesn't.</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-charcoal/80 font-sans leading-relaxed">
            Six purpose-built architectural modules engineered to replace dozens of disjointed tools with quiet, elevated precision.
          </p>
        </div>

        {/* 6 DISTINCT FEATURE MODULES */}
        <div className="space-y-24 sm:space-y-32">
          {/* FEATURE 01 — Brand Kits */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono tracking-widest uppercase text-brand-olive font-semibold">
                FEATURE 01
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl text-brand-ink font-normal">
                Brand Kits
              </h3>
              <p className="text-sm sm:text-base text-brand-charcoal/80 leading-relaxed font-sans">
                Keep your identity essentials together, from your primary logo to the smallest details of your visual system.
              </p>
              <ul className="space-y-2 text-xs font-sans text-brand-charcoal pt-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-charcoal" />
                  Primary, secondary, and stacked logo variations
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-charcoal" />
                  Scalable hairline icon variations (16px to 128px)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-charcoal" />
                  Calibrated color palette with sRGB and CMYK values
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-charcoal" />
                  Licensed web & desktop typography pairings
                </li>
              </ul>
            </div>

            {/* Visual Direction: Identity Board Layout */}
            <div className="lg:col-span-7 bg-brand-ivory p-6 sm:p-8 rounded-lg border border-brand-border shadow-editorial">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-brand-border">
                <span className="text-[10px] font-mono tracking-widest uppercase text-brand-taupe">
                  IDENTITY BOARD — MAISON FORM
                </span>
                <span className="text-[10px] font-mono text-brand-olive bg-brand-soft-white px-2 py-0.5 rounded border border-brand-border">
                  Active System
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Logo Specimen Card */}
                <div className="p-5 rounded bg-brand-soft-white border border-brand-border text-center">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-brand-taupe block mb-3 text-left">
                    PRIMARY VECTOR WORDMARK
                  </span>
                  <div className="py-6">
                    <span className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-brand-ink">
                      Maison Form
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-brand-taupe">Scalable SVG · Infinite Vector</span>
                </div>

                {/* Monogram Icon Specimen */}
                <div className="p-5 rounded bg-brand-soft-white border border-brand-border flex flex-col justify-between">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-brand-taupe block mb-2">
                    MONOGRAM ICON VARIATION
                  </span>
                  <div className="flex items-center justify-center py-4">
                    <div className="w-16 h-16 rounded border border-brand-charcoal/20 bg-brand-ink text-brand-ivory flex items-center justify-center font-serif text-2xl font-semibold">
                      M
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-brand-taupe text-center">Interlocking Geometry</span>
                </div>

                {/* Color Palette Chips */}
                <div className="p-5 rounded bg-brand-soft-white border border-brand-border sm:col-span-2">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-brand-taupe">
                      APPROVED COLOR PALETTE
                    </span>
                    <span className="text-[10px] font-mono text-brand-taupe">Click chip to copy</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { name: 'Porcelain', hex: '#F9F8F5' },
                      { name: 'Charcoal', hex: '#2A2927' },
                      { name: 'Dune Sand', hex: '#DED5C6' },
                      { name: 'Muted Olive', hex: '#777B65' }
                    ].map((col) => (
                      <button
                        key={col.hex}
                        onClick={() => onCopyHex(col.hex)}
                        className="group text-left p-2 rounded border border-brand-border/60 hover:border-brand-ink transition-colors bg-brand-ivory"
                      >
                        <div className="h-8 rounded border border-black/10 mb-1.5" style={{ backgroundColor: col.hex }} />
                        <span className="text-[10px] font-medium text-brand-ink block truncate">{col.name}</span>
                        <span className="text-[9px] font-mono text-brand-taupe block">{col.hex}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FEATURE 02 — Digital Asset Library */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual Direction: Searchable Interactive Asset Grid */}
            <div className="lg:col-span-7 order-2 lg:order-1 bg-brand-ivory p-6 sm:p-8 rounded-lg border border-brand-border shadow-editorial">
              {/* Interactive Mini Header with Search and Filter */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-brand-border">
                <div className="relative flex-1">
                  <Search className="w-3.5 h-3.5 text-brand-taupe absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={assetSearchQuery}
                    onChange={(e) => setAssetSearchQuery(e.target.value)}
                    placeholder="Search library assets..."
                    className="w-full pl-8 pr-3 py-1.5 rounded border border-brand-border bg-brand-soft-white text-xs font-sans text-brand-ink focus:border-brand-ink"
                  />
                </div>
                <div className="flex items-center gap-1 overflow-x-auto">
                  {['All', 'Logos', 'Photography', 'Templates', 'Guidelines'].map((c) => (
                    <button
                      key={c}
                      onClick={() => setAssetFilter(c)}
                      className={`text-[10px] font-mono px-2 py-1 rounded transition-colors whitespace-nowrap ${
                        assetFilter === c
                          ? 'bg-brand-ink text-brand-ivory'
                          : 'bg-brand-soft-white border border-brand-border text-brand-charcoal hover:bg-brand-champagne/30'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Asset Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[300px] overflow-y-auto pr-1">
                {filteredLibrary.length > 0 ? (
                  filteredLibrary.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => onExploreAsset(item.name)}
                      className="p-3 rounded border border-brand-border bg-brand-soft-white hover:border-brand-charcoal cursor-pointer transition-all flex items-center justify-between group"
                    >
                      <div className="min-w-0 pr-2">
                        <span className="text-xs font-serif font-medium text-brand-ink block truncate group-hover:text-brand-olive transition-colors">
                          {item.name}
                        </span>
                        <span className="text-[10px] font-mono text-brand-taupe">
                          {item.cat} · {item.size}
                        </span>
                      </div>
                      <span className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded bg-brand-champagne/40 text-brand-charcoal border border-brand-border">
                        {item.type}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="col-span-2 text-center py-8 text-xs font-mono text-brand-taupe">
                    No assets matched "{assetSearchQuery}".
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 space-y-4">
              <span className="text-xs font-mono tracking-widest uppercase text-brand-olive font-semibold">
                FEATURE 02
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl text-brand-ink font-normal">
                Digital Asset Library
              </h3>
              <p className="text-sm sm:text-base text-brand-charcoal/80 leading-relaxed font-sans">
                Find the right file without searching through endless folders. Search, preview, and download with instant metadata clarity.
              </p>
              <ul className="space-y-2 text-xs font-sans text-brand-charcoal pt-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-charcoal" />
                  Searchable asset grid with category filter tags
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-charcoal" />
                  Instant image previews with dimension and color space data
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-charcoal" />
                  Multi-format downloads (SVG, PNG, JPG, FIG, PDF)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-charcoal" />
                  Version control indicators and favorite pins
                </li>
              </ul>
            </div>
          </div>

          {/* FEATURE 03 — Brand Guidelines */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono tracking-widest uppercase text-brand-olive font-semibold">
                FEATURE 03
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl text-brand-ink font-normal">
                Brand Guidelines
              </h3>
              <p className="text-sm sm:text-base text-brand-charcoal/80 leading-relaxed font-sans">
                Make your brand standards clear, accessible, and easy to follow. Live rules that keep every partner on-brand.
              </p>
              <ul className="space-y-2 text-xs font-sans text-brand-charcoal pt-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-charcoal" />
                  Logo clear space and minimum size tolerances
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-charcoal" />
                  Typography scale, baseline grid, and tracking rules
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-charcoal" />
                  Do-and-don't visual examples with clear explanations
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-charcoal" />
                  Public or password-protected client brand manuals
                </li>
              </ul>
            </div>

            {/* Visual Direction: Digital Editorial Brand Manual */}
            <div className="lg:col-span-7 bg-brand-ivory p-6 sm:p-8 rounded-lg border border-brand-border shadow-editorial">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-brand-border">
                <span className="text-[10px] font-mono tracking-widest uppercase text-brand-taupe">
                  SECTION 01: LOGO STANDARDS
                </span>
                <span className="text-[10px] font-mono text-brand-charcoal">
                  Rule 1.5× Margin
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* DO Card */}
                <div className="p-5 rounded bg-brand-soft-white border border-emerald-900/20">
                  <div className="flex items-center justify-between mb-3 text-emerald-800 text-[11px] font-mono font-semibold">
                    <span className="flex items-center gap-1">
                      <Check className="w-3.5 h-3.5 text-emerald-700" /> DO: Maintain Clear Space
                    </span>
                  </div>
                  <div className="p-4 rounded border border-dashed border-emerald-700/30 bg-emerald-50/20 text-center my-2">
                    <span className="font-serif text-xl text-brand-ink">Maison Form</span>
                  </div>
                  <p className="text-[11px] text-brand-charcoal/70 mt-2">
                    Allow 1.5× cap-height exclusion zone against all adjacent layout elements.
                  </p>
                </div>

                {/* DONT Card */}
                <div className="p-5 rounded bg-brand-soft-white border border-rose-900/20">
                  <div className="flex items-center justify-between mb-3 text-rose-800 text-[11px] font-mono font-semibold">
                    <span className="flex items-center gap-1">
                      <X className="w-3.5 h-3.5 text-rose-700" /> DON'T: Stretch or Distort
                    </span>
                  </div>
                  <div className="p-4 rounded border border-dashed border-rose-700/30 bg-rose-50/20 text-center my-2">
                    <span className="font-serif text-xl text-brand-ink italic tracking-widest scale-x-125 inline-block opacity-60">
                      Maison Form
                    </span>
                  </div>
                  <p className="text-[11px] text-brand-charcoal/70 mt-2">
                    Never alter letter aspect ratio, add artificial drop shadows, or rotate mark.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FEATURE 04 — Templates */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual Direction: Category Filters & Interactive Template Cards */}
            <div className="lg:col-span-7 order-2 lg:order-1 bg-brand-ivory p-6 sm:p-8 rounded-lg border border-brand-border shadow-editorial">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-brand-border">
                <span className="text-[10px] font-mono tracking-widest uppercase text-brand-taupe">
                  EDITORIAL TEMPLATE SUITE
                </span>
                <span className="text-[10px] font-mono text-brand-taupe">6 Formats</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { name: 'Instagram Story Drop', dim: '1080×1920', tag: 'Social' },
                  { name: 'Studio Pitch Deck', dim: '1920×1080', tag: 'Decks' },
                  { name: 'Press Announcement', dim: '1200×630', tag: 'Marketing' },
                  { name: 'Stationery Card', dim: '85×55mm', tag: 'Print' },
                  { name: 'Capsule Poster', dim: 'A1 Spec', tag: 'Exhibition' },
                  { name: 'Digital Banner', dim: '300×600', tag: 'Ads' },
                ].map((t, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded bg-brand-soft-white border border-brand-border hover:border-brand-ink transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[9px] font-mono text-brand-olive uppercase tracking-wider block mb-1">
                        {t.tag}
                      </span>
                      <h5 className="font-serif text-xs font-medium text-brand-ink line-clamp-2">
                        {t.name}
                      </h5>
                    </div>
                    <span className="text-[10px] font-mono text-brand-taupe mt-3 block">
                      {t.dim}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 space-y-4">
              <span className="text-xs font-mono tracking-widest uppercase text-brand-olive font-semibold">
                FEATURE 04
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl text-brand-ink font-normal">
                Templates
              </h3>
              <p className="text-sm sm:text-base text-brand-charcoal/80 leading-relaxed font-sans">
                Create on-brand content without starting from scratch. Pre-configured templates injected with your brand kit typography and colors.
              </p>
              <ul className="space-y-2 text-xs font-sans text-brand-charcoal pt-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-charcoal" />
                  Social media carousels and story sequences
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-charcoal" />
                  Presentation title slides and investor decks
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-charcoal" />
                  Marketing campaign banners and billboards
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-charcoal" />
                  Tactile print documents and business stationery
                </li>
              </ul>
            </div>
          </div>

          {/* FEATURE 05 — Team Collaboration */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono tracking-widest uppercase text-brand-olive font-semibold">
                FEATURE 05
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl text-brand-ink font-normal">
                Team Collaboration
              </h3>
              <p className="text-sm sm:text-base text-brand-charcoal/80 leading-relaxed font-sans">
                Give everyone the clarity to create confidently. Shared workspaces with clear ownership and role-based permissions.
              </p>
              <ul className="space-y-2 text-xs font-sans text-brand-charcoal pt-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-charcoal" />
                  Team member avatars and real-time status indicators
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-charcoal" />
                  In-context asset comments and revision requests
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-charcoal" />
                  Review status and formal sign-off approvals
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-charcoal" />
                  Granular role permissions: Admin, Editor, Reviewer, View
                </li>
              </ul>
            </div>

            {/* Visual Direction: Team Avatars & Approval Activity Feed */}
            <div className="lg:col-span-7 bg-brand-ivory p-6 sm:p-8 rounded-lg border border-brand-border shadow-editorial">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-brand-border">
                <span className="text-[10px] font-mono tracking-widest uppercase text-brand-taupe">
                  COLLABORATION & GOVERNANCE
                </span>
                <span className="text-[10px] font-mono text-brand-olive flex items-center gap-1">
                  <Users className="w-3 h-3" /> 4 Active Members
                </span>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded bg-brand-soft-white border border-brand-border flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-ink text-brand-ivory flex items-center justify-center font-mono text-xs font-bold">
                      HL
                    </div>
                    <div>
                      <span className="text-xs font-medium text-brand-ink block">Helena Lindqvist</span>
                      <span className="text-[10px] text-brand-taupe font-mono">Brand Director · Full Admin</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Sign-off Authority
                  </span>
                </div>

                <div className="p-3.5 rounded bg-brand-soft-white border border-brand-border flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-charcoal text-brand-ivory flex items-center justify-center font-mono text-xs font-bold">
                      JV
                    </div>
                    <div>
                      <span className="text-xs font-medium text-brand-ink block">Julian Vance</span>
                      <span className="text-[10px] text-brand-taupe font-mono">Lead Designer · Brand Editor</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-champagne/40 text-brand-charcoal border border-brand-border">
                    Editor
                  </span>
                </div>

                <div className="p-3.5 rounded bg-brand-soft-white border border-brand-border flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-taupe text-brand-ink flex items-center justify-center font-mono text-xs font-bold">
                      SN
                    </div>
                    <div>
                      <span className="text-xs font-medium text-brand-ink block">Studio Noir Agency</span>
                      <span className="text-[10px] text-brand-taupe font-mono">External Partner · Guest Access</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-ivory text-brand-taupe border border-brand-border">
                    View & Export
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* FEATURE 06 — Brand Consistency */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual Direction: Brand Compliance Checklist & Consistency Status */}
            <div className="lg:col-span-7 order-2 lg:order-1 bg-brand-ivory p-6 sm:p-8 rounded-lg border border-brand-border shadow-editorial">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-brand-border">
                <span className="text-[10px] font-mono tracking-widest uppercase text-brand-taupe">
                  CONSISTENCY AUDIT LOG
                </span>
                <span className="text-xs font-mono text-brand-olive font-semibold">
                  Score: 99.8% Compliant
                </span>
              </div>

              <div className="space-y-3">
                {[
                  { check: 'Exclusion boundary verified for header assets', status: 'Passed', val: '100%' },
                  { check: 'Color contrast compliance on white & dark surfaces', status: 'Passed', val: '4.8:1 WCAG' },
                  { check: 'Font licensing verified for web & app embeddings', status: 'Passed', val: 'Commercial OK' },
                  { check: 'Vector curves optimized with zero phantom points', status: 'Passed', val: '0 Errors' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded bg-brand-soft-white border border-brand-border flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-brand-olive flex-shrink-0" />
                      <span className="text-xs font-sans text-brand-ink">{item.check}</span>
                    </div>
                    <span className="text-[10px] font-mono text-brand-taupe">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 space-y-4">
              <span className="text-xs font-mono tracking-widest uppercase text-brand-olive font-semibold">
                FEATURE 06
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl text-brand-ink font-normal">
                Brand Consistency
              </h3>
              <p className="text-sm sm:text-base text-brand-charcoal/80 leading-relaxed font-sans">
                Help every touchpoint feel unmistakably yours. Transparent compliance checklists and verified asset indicators that eliminate guesswork.
              </p>
              <ul className="space-y-2 text-xs font-sans text-brand-charcoal pt-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-charcoal" />
                  Structured brand compliance checklist
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-charcoal" />
                  Approved asset status badges on all files
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-charcoal" />
                  Direct brand resource & guidelines links
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-charcoal" />
                  Zero unsupported claims — verified manual & design sign-offs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
