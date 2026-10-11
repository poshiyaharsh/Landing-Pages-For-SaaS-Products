import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  ArrowUpDown, 
  Heart, 
  Copy, 
  ExternalLink, 
  Download, 
  FileCode, 
  Image as ImageIcon, 
  Layout, 
  FileText, 
  ShieldCheck,
  Check
} from 'lucide-react';
import { INITIAL_ASSETS } from '../data/brandData';
import { BrandAsset, AssetCategory } from '../types';

interface AssetLibraryProps {
  onOpenAssetModal: (asset: BrandAsset) => void;
  onCopyLink: (asset: BrandAsset) => void;
  onToast: (title: string, message?: string) => void;
}

export const AssetLibrary: React.FC<AssetLibraryProps> = ({
  onOpenAssetModal,
  onCopyLink,
  onToast,
}) => {
  const [assets, setAssets] = useState<BrandAsset[]>(INITIAL_ASSETS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<AssetCategory>('All');
  const [sortBy, setSortBy] = useState<'recent' | 'alphabetical' | 'type'>('recent');

  const categories: AssetCategory[] = [
    'All',
    'Logos',
    'Photography',
    'Templates',
    'Documents',
    'Icons',
  ];

  const handleToggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setAssets((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newState = !item.isFavorite;
          onToast(
            newState ? 'Added to Brand Favorites' : 'Removed from Favorites',
            item.name
          );
          return { ...item, isFavorite: newState };
        }
        return item;
      })
    );
  };

  const filteredAndSortedAssets = useMemo(() => {
    let result = assets.filter((asset) => {
      const matchesCategory =
        selectedCategory === 'All' || asset.category === selectedCategory;
      const matchesQuery =
        asset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        asset.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        asset.format.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });

    if (sortBy === 'recent') {
      // default list order is recent
    } else if (sortBy === 'alphabetical') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'type') {
      result.sort((a, b) => a.format.localeCompare(b.format));
    }

    return result;
  }, [assets, searchQuery, selectedCategory, sortBy]);

  return (
    <section className="py-24 sm:py-32 bg-brand-ivory border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-brand-taupe block mb-3">
            ASSET DISCOVERY ENGINE
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-brand-ink leading-tight mb-4">
            The right asset, right when you need it.
          </h2>
          <p className="text-base sm:text-lg text-brand-charcoal/80 font-sans leading-relaxed">
            Search hundreds of verified brand files by category, format, or tag. Test live filtering, sorting, and modal inspection below.
          </p>
        </div>

        {/* Search, Filter Tabs & Sorting Toolbar */}
        <div className="bg-brand-soft-white p-4 sm:p-6 rounded-lg border border-brand-border shadow-subtle mb-8 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-brand-taupe absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search logos, templates, guidelines…"
                className="w-full pl-10 pr-4 py-2.5 rounded border border-brand-border bg-brand-ivory/50 text-sm font-sans text-brand-ink placeholder:text-brand-taupe focus:border-brand-ink focus:bg-brand-soft-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-brand-taupe hover:text-brand-ink"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sorting Dropdown */}
            <div className="flex items-center gap-2 self-end md:self-auto">
              <ArrowUpDown className="w-3.5 h-3.5 text-brand-taupe" />
              <span className="text-xs font-mono text-brand-taupe uppercase">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 rounded border border-brand-border bg-brand-ivory text-xs font-mono text-brand-charcoal focus:border-brand-ink cursor-pointer"
              >
                <option value="recent">Recently Added</option>
                <option value="alphabetical">Alphabetical (A–Z)</option>
                <option value="type">File Format</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pt-2 border-t border-brand-border/60 scrollbar-none">
            {categories.map((cat) => {
              const count =
                cat === 'All'
                  ? assets.length
                  : assets.filter((a) => a.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded text-xs font-mono transition-all whitespace-nowrap flex items-center gap-2 ${
                    selectedCategory === cat
                      ? 'bg-brand-ink text-brand-ivory font-medium shadow-subtle'
                      : 'bg-brand-ivory border border-brand-border text-brand-charcoal hover:bg-brand-champagne/40'
                  }`}
                >
                  <span>{cat === 'All' ? 'All Assets' : cat}</span>
                  <span className={`text-[10px] ${selectedCategory === cat ? 'text-brand-champagne' : 'text-brand-taupe'}`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Assets Grid */}
        {filteredAndSortedAssets.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedAssets.map((asset) => (
              <div
                key={asset.id}
                onClick={() => onOpenAssetModal(asset)}
                className="group bg-brand-soft-white border border-brand-border hover:border-brand-ink rounded-lg overflow-hidden flex flex-col justify-between shadow-subtle hover:shadow-editorial transition-all duration-300 cursor-pointer"
              >
                {/* Card Top Preview Box */}
                <div className="aspect-[16/10] bg-brand-ivory border-b border-brand-border relative overflow-hidden flex items-center justify-center p-4">
                  {asset.previewImage ? (
                    <img
                      src={asset.previewImage}
                      alt={asset.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : asset.category === 'Logos' ? (
                    <div className="w-16 h-16 rounded-full border border-brand-border bg-brand-soft-white flex items-center justify-center font-serif text-2xl font-bold text-brand-ink group-hover:scale-110 transition-transform">
                      {asset.name.charAt(0)}
                    </div>
                  ) : asset.category === 'Icons' ? (
                    <div className="w-12 h-12 rounded bg-brand-champagne/40 border border-brand-border flex items-center justify-center font-serif text-lg font-bold text-brand-charcoal">
                      ★
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center text-brand-taupe">
                      <FileText className="w-8 h-8 stroke-[1.25] mb-1" />
                      <span className="text-[10px] font-mono">{asset.format} Spec</span>
                    </div>
                  )}

                  {/* Top-Right Favorite Button */}
                  <button
                    onClick={(e) => handleToggleFavorite(asset.id, e)}
                    className={`absolute top-2.5 right-2.5 p-1.5 rounded-full border transition-all ${
                      asset.isFavorite
                        ? 'bg-rose-50 border-rose-200 text-rose-500'
                        : 'bg-brand-soft-white/80 border-brand-border/60 text-brand-taupe hover:text-rose-500'
                    }`}
                    aria-label="Toggle favorite"
                  >
                    <Heart className={`w-3.5 h-3.5 ${asset.isFavorite ? 'fill-current' : ''}`} />
                  </button>

                  {/* Top-Left Category Badge */}
                  <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-brand-ink/80 text-brand-ivory text-[9px] font-mono uppercase tracking-wider backdrop-blur-sm">
                    {asset.category}
                  </span>
                </div>

                {/* Card Info Body */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif text-base font-medium text-brand-ink line-clamp-1 group-hover:text-brand-olive transition-colors">
                      {asset.name}
                    </h4>
                    <p className="text-xs text-brand-charcoal/70 line-clamp-2 mt-1 leading-relaxed font-sans">
                      {asset.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-brand-border/60 flex items-center justify-between text-[11px] font-mono text-brand-taupe">
                    <span className="font-semibold text-brand-charcoal">{asset.format} · {asset.size}</span>
                    <span>{asset.updatedDate}</span>
                  </div>
                </div>

                {/* Card Action Footer Bar */}
                <div className="px-4 py-2.5 bg-brand-ivory/50 border-t border-brand-border flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onCopyLink(asset);
                    }}
                    className="text-[11px] font-mono text-brand-charcoal hover:text-brand-ink flex items-center gap-1 transition-colors"
                  >
                    <Copy className="w-3 h-3 text-brand-taupe" />
                    <span>Copy Link</span>
                  </button>

                  <span className="text-[11px] font-mono text-brand-olive flex items-center gap-1 font-medium">
                    <ShieldCheck className="w-3 h-3" /> Approved
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-brand-soft-white rounded-lg border border-brand-border p-8">
            <Search className="w-10 h-10 text-brand-taupe mx-auto mb-3 stroke-[1.25]" />
            <h4 className="font-serif text-xl text-brand-ink mb-1">No brand assets found</h4>
            <p className="text-xs text-brand-charcoal/70 max-w-sm mx-auto mb-4">
              We couldn't find any assets matching "{searchQuery}" under "{selectedCategory}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-4 py-2 rounded bg-brand-ink text-brand-ivory text-xs font-mono uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
