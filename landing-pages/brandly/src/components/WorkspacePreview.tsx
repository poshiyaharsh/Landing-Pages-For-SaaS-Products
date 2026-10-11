import React, { useState } from 'react';
import { 
  Layers, 
  Palette, 
  Type, 
  Folder, 
  BookOpen, 
  Layout, 
  Users, 
  Settings, 
  Search, 
  Copy, 
  Check, 
  Download, 
  ExternalLink,
  ShieldCheck,
  ChevronRight,
  Info,
  Sliders,
  Sparkles
} from 'lucide-react';
import { BRAND_IDENTITIES } from '../data/brandData';

interface WorkspacePreviewProps {
  onCopyHex: (hex: string) => void;
  onOpenAssetModal: (asset: any) => void;
}

export const WorkspacePreview: React.FC<WorkspacePreviewProps> = ({
  onCopyHex,
  onOpenAssetModal,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'kits' | 'assets' | 'guidelines' | 'templates' | 'team'>('overview');
  const [selectedAssetIndex, setSelectedAssetIndex] = useState(0);
  const [searchFilter, setSearchFilter] = useState('');

  const brand = BRAND_IDENTITIES[0]; // Maison Form

  const workspaceAssets = [
    {
      name: 'Primary Wordmark Vector',
      format: 'SVG',
      size: '18 KB',
      category: 'Logos',
      updated: 'Oct 8, 2026',
      notes: 'Master wordmark for digital headers, web navigation, and stationery headers.',
      dimensions: 'Vector · Scalable'
    },
    {
      name: 'Ceramic Vessel Still Life',
      format: 'JPG',
      size: '14.2 MB',
      category: 'Photography',
      updated: 'Oct 6, 2026',
      notes: 'Natural side-window lighting, raw travertine plinth, soft shadows.',
      dimensions: '5840 × 3893 px'
    },
    {
      name: 'Instagram Story Drop Template',
      format: 'FIG',
      size: '2.8 MB',
      category: 'Templates',
      updated: 'Oct 4, 2026',
      notes: '6-slide carousel grid with 4:5 and 9:16 aspect ratios for product launches.',
      dimensions: '1080 × 1920 px'
    },
    {
      name: 'Digital Brand Manual v4',
      format: 'PDF',
      size: '8.4 MB',
      category: 'Guidelines',
      updated: 'Sep 29, 2026',
      notes: 'Complete standard for logo exclusion zone, color matrices, and typography.',
      dimensions: '48 Pages · A4'
    },
    {
      name: 'Interlocking Monogram Emblem',
      format: 'SVG',
      size: '12 KB',
      category: 'Icons',
      updated: 'Sep 22, 2026',
      notes: 'Emblem for favicon, wax stamps, garment labels, and micro-touchpoints.',
      dimensions: '24 × 24 px grid'
    }
  ];

  const filteredAssets = workspaceAssets.filter((a) =>
    a.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
    a.category.toLowerCase().includes(searchFilter.toLowerCase())
  );

  const currentSelectedAsset = workspaceAssets[selectedAssetIndex] || workspaceAssets[0];

  return (
    <section id="platform" className="py-24 sm:py-32 bg-brand-ivory border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-brand-taupe block mb-3">
            INTERACTIVE SYSTEM DEMO
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-brand-ink leading-tight mb-5">
            One workspace. Your whole identity.
          </h2>
          <p className="text-base sm:text-lg text-brand-charcoal/80 font-sans leading-relaxed">
            Click through the live prototype below to experience how Brandly structures visual assets, color systems, guidelines, and team permissions.
          </p>
        </div>

        {/* Realistic Application Mockup Shell */}
        <div className="rounded-xl border border-brand-border bg-brand-soft-white shadow-luxury overflow-hidden">
          {/* Top System Bar */}
          <div className="bg-brand-charcoal text-brand-ivory px-4 sm:px-6 py-3 flex items-center justify-between border-b border-brand-border-dark">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono tracking-wider text-brand-taupe ml-2 hidden sm:inline">
                Brandly Workspace · Maison Form (Production)
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Sync Active
              </span>
              <span className="text-brand-taupe hidden sm:inline">v2.4.0</span>
            </div>
          </div>

          {/* Main 3-Column Software Interface */}
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[580px]">
            {/* Left Sidebar */}
            <div className="md:col-span-3 lg:col-span-2 border-r border-brand-border bg-brand-ivory/60 p-4 flex flex-col justify-between">
              <div>
                {/* Brand Selector Head */}
                <div className="p-2.5 mb-4 rounded bg-brand-soft-white border border-brand-border flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded bg-brand-ink text-brand-ivory flex items-center justify-center font-serif text-sm font-bold">
                    M
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-serif font-bold text-brand-ink block truncate">
                      {brand.name}
                    </span>
                    <span className="text-[10px] font-mono text-brand-taupe block truncate">
                      {brand.category}
                    </span>
                  </div>
                </div>

                {/* Sidebar Navigation Items */}
                <nav className="space-y-1">
                  {[
                    { id: 'overview', label: 'Overview', icon: Layers },
                    { id: 'kits', label: 'Brand Kits', icon: Palette },
                    { id: 'assets', label: 'Assets (142)', icon: Folder },
                    { id: 'guidelines', label: 'Guidelines', icon: BookOpen },
                    { id: 'templates', label: 'Templates', icon: Layout },
                    { id: 'team', label: 'Team (4)', icon: Users },
                  ].map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id as any)}
                        className={`w-full flex items-center gap-2.5 px-3 py-2 rounded text-xs transition-colors font-sans text-left ${
                          isActive
                            ? 'bg-brand-ink text-brand-ivory font-medium shadow-subtle'
                            : 'text-brand-charcoal hover:bg-brand-champagne/40'
                        }`}
                      >
                        <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-brand-champagne' : 'text-brand-taupe'}`} />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Sidebar Footer */}
              <div className="pt-4 border-t border-brand-border mt-6">
                <div className="flex items-center gap-2 px-3 py-2 text-xs text-brand-taupe">
                  <Settings className="w-3.5 h-3.5" />
                  <span>Workspace Settings</span>
                </div>
              </div>
            </div>

            {/* Central Area: Main View based on Active Tab */}
            <div className="md:col-span-6 lg:col-span-7 p-6 sm:p-8 overflow-y-auto max-h-[640px] bg-brand-soft-white">
              {/* Tab: Overview */}
              {activeTab === 'overview' && (
                <div className="space-y-8 animate-fade-in">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-brand-taupe block mb-1">
                      BRAND OVERVIEW
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium text-brand-ink">
                      {brand.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-charcoal/80 mt-1 leading-relaxed">
                      {brand.description}
                    </p>
                  </div>

                  {/* Logo Collection Showcase */}
                  <div>
                    <div className="flex items-center justify-between pb-2 mb-3 border-b border-brand-border">
                      <span className="text-xs font-mono uppercase tracking-wider text-brand-charcoal font-semibold">
                        Master Wordmark & Marks
                      </span>
                      <span className="text-[11px] font-mono text-brand-olive flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" /> Verified
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-4 rounded border border-brand-border bg-brand-ivory/50 flex flex-col justify-between">
                        <span className="text-[9px] font-mono text-brand-taupe uppercase">Primary Mark</span>
                        <div className="py-4 text-center">
                          <span className="font-serif text-2xl font-medium text-brand-ink">Maison Form</span>
                        </div>
                        <span className="text-[10px] font-mono text-brand-taupe">Vector SVG · High Res</span>
                      </div>

                      <div className="p-4 rounded border border-brand-border bg-brand-charcoal text-brand-ivory flex flex-col justify-between">
                        <span className="text-[9px] font-mono text-brand-taupe uppercase">Reverse Mark</span>
                        <div className="py-4 text-center">
                          <span className="font-serif text-2xl font-medium text-brand-ivory">Maison Form</span>
                        </div>
                        <span className="text-[10px] font-mono text-brand-taupe">Soft White Canvas</span>
                      </div>
                    </div>
                  </div>

                  {/* Color Palette (Clickable Swatches with Copy HEX) */}
                  <div>
                    <div className="flex items-center justify-between pb-2 mb-3 border-b border-brand-border">
                      <span className="text-xs font-mono uppercase tracking-wider text-brand-charcoal font-semibold">
                        Approved Color Palette
                      </span>
                      <span className="text-[11px] font-mono text-brand-taupe">Click swatch to copy HEX</span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {brand.palette.map((color) => (
                        <button
                          key={color.hex}
                          onClick={() => onCopyHex(color.hex)}
                          className="p-2.5 rounded border border-brand-border hover:border-brand-ink bg-brand-ivory text-left transition-all group"
                        >
                          <div
                            className="h-10 rounded border border-black/10 mb-2 transition-transform group-hover:scale-105"
                            style={{ backgroundColor: color.hex }}
                          />
                          <span className="font-serif text-xs font-medium text-brand-ink block truncate">
                            {color.name}
                          </span>
                          <span className="text-[10px] font-mono text-brand-taupe block">
                            {color.role}
                          </span>
                          <span className="text-[10px] font-mono text-brand-charcoal font-bold mt-1 flex items-center justify-between">
                            {color.hex}
                            <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-brand-olive" />
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Typography Specimen */}
                  <div>
                    <div className="flex items-center justify-between pb-2 mb-3 border-b border-brand-border">
                      <span className="text-xs font-mono uppercase tracking-wider text-brand-charcoal font-semibold">
                        Typography System
                      </span>
                      <span className="text-[11px] font-mono text-brand-taupe">Google Fonts & Commercial Web</span>
                    </div>
                    <div className="p-4 rounded border border-brand-border bg-brand-ivory space-y-3">
                      <div>
                        <span className="text-[9px] font-mono text-brand-taupe uppercase">Display Headline</span>
                        <p className="font-serif text-2xl text-brand-ink mt-0.5">
                          Playfair Display · Regular & Italic
                        </p>
                      </div>
                      <div className="pt-2 border-t border-brand-border">
                        <span className="text-[9px] font-mono text-brand-taupe uppercase">Interface & Body</span>
                        <p className="font-sans text-sm text-brand-charcoal mt-0.5">
                          Plus Jakarta Sans · 400 Regular / 600 SemiBold
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Brand Kits */}
              {activeTab === 'kits' && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-brand-taupe block mb-1">
                      ACTIVE BRAND KITS
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-brand-ink">
                      Maison Form Master Kit (v2.4)
                    </h3>
                  </div>

                  <div className="p-4 rounded border border-brand-border bg-brand-ivory flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-medium text-brand-ink font-sans">Core Identity Bundle</h4>
                      <p className="text-[11px] text-brand-charcoal/70">Includes all vector logos, favicon, clear space specs, and color tokens.</p>
                    </div>
                    <button
                      onClick={() => onCopyHex('#2A2927')}
                      className="px-3 py-1.5 rounded bg-brand-ink text-brand-ivory text-xs font-mono hover:bg-brand-charcoal"
                    >
                      Copy All Tokens
                    </button>
                  </div>
                </div>
              )}

              {/* Tab: Assets */}
              {activeTab === 'assets' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl text-brand-ink">Approved Asset Library</h3>
                    <div className="relative">
                      <Search className="w-3.5 h-3.5 text-brand-taupe absolute left-2.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Filter assets..."
                        value={searchFilter}
                        onChange={(e) => setSearchFilter(e.target.value)}
                        className="pl-7 pr-3 py-1 text-xs rounded border border-brand-border bg-brand-ivory"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    {filteredAssets.map((asset, idx) => (
                      <div
                        key={idx}
                        onClick={() => setSelectedAssetIndex(idx)}
                        className={`p-3 rounded border cursor-pointer transition-all flex items-center justify-between ${
                          selectedAssetIndex === idx
                            ? 'border-brand-ink bg-brand-champagne/30 shadow-subtle'
                            : 'border-brand-border bg-brand-ivory/50 hover:bg-brand-ivory'
                        }`}
                      >
                        <div className="min-w-0 pr-2">
                          <span className="text-xs font-serif font-medium text-brand-ink block truncate">
                            {asset.name}
                          </span>
                          <span className="text-[10px] font-mono text-brand-taupe">
                            {asset.category} · {asset.size}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-brand-soft-white border border-brand-border text-brand-charcoal">
                            {asset.format}
                          </span>
                          <ChevronRight className="w-3.5 h-3.5 text-brand-taupe" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab: Guidelines */}
              {activeTab === 'guidelines' && (
                <div className="space-y-4 animate-fade-in">
                  <h3 className="font-serif text-xl text-brand-ink">Live Guidelines Manual</h3>
                  <div className="p-4 rounded border border-brand-border bg-brand-ivory space-y-3">
                    <span className="text-xs font-serif font-bold text-brand-ink">Exclusion Zone Rule</span>
                    <p className="text-xs text-brand-charcoal leading-relaxed">
                      Maintain a clear space equal to 1.5× the height of the capital letter "M" around the perimeter of the primary wordmark.
                    </p>
                    <div className="pt-2 border-t border-brand-border flex justify-between text-[11px] font-mono text-brand-olive">
                      <span>Status: Enforced</span>
                      <span>Updated Sep 29, 2026</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Templates */}
              {activeTab === 'templates' && (
                <div className="space-y-4 animate-fade-in">
                  <h3 className="font-serif text-xl text-brand-ink">Active Brand Templates</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded border border-brand-border bg-brand-ivory">
                      <span className="text-[10px] font-mono text-brand-olive block">Social Kit</span>
                      <h5 className="font-serif text-xs font-medium text-brand-ink mt-1">Editorial Instagram 4:5</h5>
                      <span className="text-[9px] font-mono text-brand-taupe mt-2 block">1080 × 1350 px</span>
                    </div>
                    <div className="p-3.5 rounded border border-brand-border bg-brand-ivory">
                      <span className="text-[10px] font-mono text-brand-olive block">Pitch Deck</span>
                      <h5 className="font-serif text-xs font-medium text-brand-ink mt-1">Studio Presentation 16:9</h5>
                      <span className="text-[9px] font-mono text-brand-taupe mt-2 block">1920 × 1080 px</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Team */}
              {activeTab === 'team' && (
                <div className="space-y-3 animate-fade-in">
                  <h3 className="font-serif text-xl text-brand-ink">Brand Team Governance</h3>
                  <div className="p-3 rounded border border-brand-border bg-brand-ivory flex items-center justify-between">
                    <div>
                      <span className="text-xs font-medium text-brand-ink block">Helena Lindqvist</span>
                      <span className="text-[10px] font-mono text-brand-taupe">Brand Director · Full Admin</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Owner
                    </span>
                  </div>
                  <div className="p-3 rounded border border-brand-border bg-brand-ivory flex items-center justify-between">
                    <div>
                      <span className="text-xs font-medium text-brand-ink block">Julian Vance</span>
                      <span className="text-[10px] font-mono text-brand-taupe">Lead Designer · Editor</span>
                    </div>
                    <span className="text-[10px] font-mono text-brand-charcoal bg-brand-champagne/40 px-2 py-0.5 rounded border border-brand-border">
                      Editor
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Right Panel: Brand Details & Selected Asset Information */}
            <div className="md:col-span-3 lg:col-span-3 border-t md:border-t-0 md:border-l border-brand-border bg-brand-ivory/40 p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 pb-3 mb-4 border-b border-brand-border">
                  <Info className="w-3.5 h-3.5 text-brand-taupe" />
                  <span className="text-[10px] font-mono tracking-widest uppercase text-brand-taupe">
                    INSPECTOR PANEL
                  </span>
                </div>

                {/* Selected Asset Details */}
                <div className="space-y-4">
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-widest text-brand-taupe block mb-0.5">
                      Selected Item
                    </span>
                    <h4 className="font-serif text-sm font-semibold text-brand-ink">
                      {currentSelectedAsset.name}
                    </h4>
                    <span className="text-[10px] font-mono text-brand-olive font-medium mt-0.5 block">
                      {currentSelectedAsset.category} · {currentSelectedAsset.format}
                    </span>
                  </div>

                  <div className="p-3 rounded border border-brand-border bg-brand-soft-white space-y-2 text-[11px] font-mono">
                    <div className="flex justify-between">
                      <span className="text-brand-taupe">Size:</span>
                      <span className="text-brand-charcoal font-medium">{currentSelectedAsset.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-taupe">Updated:</span>
                      <span className="text-brand-charcoal font-medium">{currentSelectedAsset.updated}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-taupe">Dimensions:</span>
                      <span className="text-brand-charcoal font-medium">{currentSelectedAsset.dimensions}</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-widest text-brand-taupe block mb-1">
                      Usage Directives
                    </span>
                    <p className="text-xs text-brand-charcoal/80 leading-relaxed font-sans">
                      {currentSelectedAsset.notes}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-brand-border mt-6">
                <button
                  onClick={() => onCopyHex('#F9F8F5')}
                  className="w-full inline-flex items-center justify-center gap-2 py-2 rounded border border-brand-border bg-brand-soft-white hover:bg-brand-champagne/40 text-brand-ink text-xs font-mono transition-colors shadow-subtle"
                >
                  <Copy className="w-3 h-3" />
                  <span>Copy Asset URI</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
