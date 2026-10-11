import React from 'react';
import { X, Check, Copy, Palette, Type, FolderOpen, ArrowRight } from 'lucide-react';
import { BrandKitIdentity } from '../types';

interface BrandKitModalProps {
  brand: BrandKitIdentity | null;
  onClose: () => void;
  onCopyHex: (hex: string) => void;
  onOpenWorkspace: (brandName: string) => void;
}

export const BrandKitModal: React.FC<BrandKitModalProps> = ({
  brand,
  onClose,
  onCopyHex,
  onOpenWorkspace,
}) => {
  if (!brand) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-ink/75 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="brandkit-modal-title"
    >
      <div
        className="bg-brand-soft-white border border-brand-border rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-10 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-brand-champagne/40 text-brand-charcoal transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] tracking-[0.25em] uppercase font-mono px-2 py-0.5 rounded bg-brand-champagne/50 text-brand-charcoal border border-brand-border">
              {brand.category}
            </span>
            <span className="text-xs text-brand-taupe font-mono">
              Identity System #{brand.id}
            </span>
          </div>
          <h2 id="brandkit-modal-title" className="font-serif text-3xl sm:text-4xl font-normal text-brand-ink">
            {brand.name}
          </h2>
          <p className="font-serif italic text-base text-brand-charcoal/80 mt-1">
            "{brand.tagline}"
          </p>
        </div>

        {/* Featured Image & Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 items-center bg-brand-ivory p-6 rounded-md border border-brand-border">
          <div className="aspect-[4/3] rounded overflow-hidden shadow-subtle border border-brand-border/60 bg-brand-champagne/20">
            <img
              src={brand.featuredVisual}
              alt={brand.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-brand-taupe block mb-1">
                Visual Art Direction
              </span>
              <p className="text-xs text-brand-charcoal leading-relaxed">
                {brand.visualDirection}
              </p>
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-brand-taupe block mb-1">
                Studio Philosophy
              </span>
              <p className="text-xs text-brand-charcoal leading-relaxed">
                {brand.description}
              </p>
            </div>
            <div className="flex items-center gap-4 pt-2 border-t border-brand-border text-[11px] font-mono text-brand-taupe">
              <span>{brand.assetsCount} Approved Files</span>
              <span>•</span>
              <span>{brand.guidelinesCount} Standards</span>
              <span>•</span>
              <span>{brand.templatesCount} Templates</span>
            </div>
          </div>
        </div>

        {/* Color Palette Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Palette className="w-4 h-4 text-brand-taupe" />
            <h4 className="text-xs font-mono uppercase tracking-widest text-brand-ink font-semibold">
              Calibrated Color Tokens
            </h4>
            <span className="text-[11px] text-brand-taupe ml-auto">Click to copy HEX</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {brand.palette.map((color) => (
              <button
                key={color.hex}
                onClick={() => onCopyHex(color.hex)}
                className="group p-3 rounded border border-brand-border bg-brand-soft-white hover:border-brand-ink text-left transition-all hover:shadow-subtle"
              >
                <div
                  className="w-full h-12 rounded border border-black/10 mb-2 transition-transform group-hover:scale-[1.02]"
                  style={{ backgroundColor: color.hex }}
                />
                <span className="font-serif text-sm font-medium text-brand-ink block truncate">
                  {color.name}
                </span>
                <span className="text-[10px] font-mono text-brand-taupe block truncate">
                  {color.role}
                </span>
                <span className="text-[11px] font-mono text-brand-charcoal font-semibold mt-1 flex items-center justify-between">
                  {color.hex}
                  <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-brand-olive" />
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Typography Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Type className="w-4 h-4 text-brand-taupe" />
            <h4 className="text-xs font-mono uppercase tracking-widest text-brand-ink font-semibold">
              Typography Pairing
            </h4>
          </div>
          <div className="space-y-3">
            {brand.typography.map((type, idx) => (
              <div
                key={idx}
                className="p-4 rounded border border-brand-border bg-brand-ivory flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-brand-taupe block">
                    {type.role} — {type.family}
                  </span>
                  <p className="font-serif text-xl sm:text-2xl text-brand-ink mt-0.5">
                    {type.sample}
                  </p>
                </div>
                <span className="text-[11px] font-mono text-brand-taupe px-2.5 py-1 rounded bg-brand-soft-white border border-brand-border self-start sm:self-auto">
                  Web & Editorial
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Footer */}
        <div className="pt-4 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-taupe font-mono">
            All files synced to Brandly cloud storage with cryptographic checksums.
          </p>
          <button
            onClick={() => {
              onClose();
              onOpenWorkspace(brand.name);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded bg-brand-ink hover:bg-brand-charcoal text-brand-ivory text-xs font-medium tracking-wider uppercase transition-colors shadow-subtle"
          >
            Open in Workspace
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
