import React from 'react';
import { X, Download, Copy, Heart, Check, FileCode, Layers, ShieldCheck } from 'lucide-react';
import { BrandAsset } from '../types';

interface AssetModalProps {
  asset: BrandAsset | null;
  onClose: () => void;
  onToggleFavorite: (id: string) => void;
  onCopyLink: (asset: BrandAsset) => void;
  onDownload: (asset: BrandAsset) => void;
}

export const AssetModal: React.FC<AssetModalProps> = ({
  asset,
  onClose,
  onToggleFavorite,
  onCopyLink,
  onDownload,
}) => {
  if (!asset) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-ink/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="asset-modal-title"
    >
      <div
        className="bg-brand-soft-white border border-brand-border rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-brand-champagne/40 text-brand-charcoal transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] tracking-[0.2em] uppercase font-mono px-2 py-0.5 rounded bg-brand-champagne/40 text-brand-charcoal border border-brand-border">
            {asset.category}
          </span>
          <span className="text-[11px] font-mono text-brand-taupe">
            {asset.format} · {asset.size}
          </span>
          <span className="text-[11px] font-mono text-brand-olive flex items-center gap-1 ml-auto">
            <ShieldCheck className="w-3.5 h-3.5" /> Approved
          </span>
        </div>

        <h3 id="asset-modal-title" className="font-serif text-2xl sm:text-3xl font-medium text-brand-ink mb-2">
          {asset.name}
        </h3>
        <p className="text-sm text-brand-charcoal/80 mb-6 font-sans leading-relaxed">
          {asset.description}
        </p>

        {/* Visual Preview Container */}
        <div className="bg-brand-ivory border border-brand-border rounded-md p-6 mb-6 flex items-center justify-center min-h-[260px] relative overflow-hidden">
          {asset.previewImage ? (
            <img
              src={asset.previewImage}
              alt={asset.name}
              className="max-h-[320px] w-full object-cover rounded shadow-editorial"
            />
          ) : asset.category === 'Logos' || asset.category === 'Icons' ? (
            <div className="flex flex-col items-center justify-center p-8 text-center">
              <div className="w-24 h-24 rounded-full border border-brand-border bg-brand-soft-white flex items-center justify-center shadow-subtle mb-4">
                <span className="font-serif text-3xl font-bold text-brand-ink">
                  {asset.name.charAt(0)}
                </span>
              </div>
              <p className="font-serif text-lg tracking-wide text-brand-charcoal">
                {asset.name}
              </p>
              <span className="text-xs text-brand-taupe font-mono mt-1">
                Vector Precision · Hairline Kerning
              </span>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center p-8">
              <Layers className="w-12 h-12 text-brand-taupe stroke-[1.25] mb-3" />
              <p className="font-serif text-lg text-brand-charcoal">{asset.name}</p>
              <p className="text-xs text-brand-taupe mt-1 font-mono">
                {asset.dimensions || 'Multi-Page Master Spec'}
              </p>
            </div>
          )}

          <button
            onClick={() => onToggleFavorite(asset.id)}
            className={`absolute top-4 right-4 p-2 rounded-full border transition-all ${
              asset.isFavorite
                ? 'bg-rose-50 border-rose-200 text-rose-500'
                : 'bg-brand-soft-white/90 border-brand-border text-brand-taupe hover:text-rose-500'
            }`}
            aria-label={asset.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Heart className={`w-4 h-4 ${asset.isFavorite ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-brand-border text-xs mb-6">
          <div>
            <span className="text-brand-taupe block font-mono text-[10px] tracking-widest uppercase">
              Version
            </span>
            <span className="font-medium text-brand-ink mt-0.5 block">{asset.version}</span>
          </div>
          <div>
            <span className="text-brand-taupe block font-mono text-[10px] tracking-widest uppercase">
              Updated
            </span>
            <span className="font-medium text-brand-ink mt-0.5 block">{asset.updatedDate}</span>
          </div>
          <div>
            <span className="text-brand-taupe block font-mono text-[10px] tracking-widest uppercase">
              Dimensions
            </span>
            <span className="font-medium text-brand-ink mt-0.5 block truncate">
              {asset.dimensions || 'Vector'}
            </span>
          </div>
          <div>
            <span className="text-brand-taupe block font-mono text-[10px] tracking-widest uppercase">
              Color Space
            </span>
            <span className="font-medium text-brand-ink mt-0.5 block">sRGB & Display P3</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => onCopyLink(asset)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded border border-brand-border hover:bg-brand-champagne/30 text-brand-ink text-xs font-medium tracking-wide transition-colors"
          >
            <Copy className="w-3.5 h-3.5" />
            Copy Asset Link
          </button>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => onDownload(asset)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded bg-brand-ink hover:bg-brand-charcoal text-brand-ivory text-xs font-medium tracking-wider uppercase transition-colors shadow-subtle"
            >
              <Download className="w-3.5 h-3.5" />
              Download {asset.format}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
