import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, Shield, Layers } from 'lucide-react';
import confetti from 'canvas-confetti';

interface StartWorkspaceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onWorkspaceCreated: (brandName: string) => void;
}

export const StartWorkspaceModal: React.FC<StartWorkspaceModalProps> = ({
  isOpen,
  onClose,
  onWorkspaceCreated,
}) => {
  const [brandName, setBrandName] = useState('');
  const [category, setCategory] = useState('Contemporary Lifestyle');
  const [selectedTheme, setSelectedTheme] = useState('warm-ivory');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!brandName.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#E8DFD2', '#191919', '#777B65', '#B8ADA0']
        });
      } catch (err) {
        // fallback
      }
      onWorkspaceCreated(brandName.trim());
      onClose();
      setBrandName('');
    }, 600);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-ink/75 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="start-workspace-title"
    >
      <div
        className="bg-brand-soft-white border border-brand-border rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-brand-champagne/40 text-brand-charcoal transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-[10px] tracking-[0.25em] uppercase font-mono px-2 py-0.5 rounded bg-brand-champagne/50 text-brand-charcoal border border-brand-border inline-block mb-2">
            WORKSPACE INITIALIZATION
          </span>
          <h3 id="start-workspace-title" className="font-serif text-2xl sm:text-3xl font-normal text-brand-ink">
            Create Your Brand Space
          </h3>
          <p className="text-xs sm:text-sm text-brand-charcoal/80 mt-1">
            Establish a curated digital home for your logos, colors, typography, and guidelines.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-brand-charcoal mb-1.5">
              Brand Name
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Atelier V, Studio Nord, Aethel"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              className="w-full px-4 py-2.5 rounded border border-brand-border bg-brand-ivory text-brand-ink text-sm focus:border-brand-ink focus:bg-brand-soft-white transition-all font-sans placeholder:text-brand-taupe/60"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-brand-charcoal mb-1.5">
              Brand Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2.5 rounded border border-brand-border bg-brand-ivory text-brand-ink text-sm focus:border-brand-ink focus:bg-brand-soft-white transition-all font-sans cursor-pointer"
            >
              <option value="Contemporary Lifestyle">Contemporary Lifestyle & Goods</option>
              <option value="Clean Beauty & Wellness">Clean Beauty & Wellness</option>
              <option value="Architecture & Interior">Architecture & Interior Design</option>
              <option value="Haute Fashion & Apparel">Haute Fashion & Apparel</option>
              <option value="Specialty Food & Beverage">Specialty Food & Beverage</option>
              <option value="Creative Agency & Studio">Creative Agency & Studio</option>
              <option value="Technology & SaaS">Technology & Digital Platform</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-brand-charcoal mb-2">
              Default Editorial Palette Tone
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={() => setSelectedTheme('warm-ivory')}
                className={`p-3 rounded border text-left transition-all ${
                  selectedTheme === 'warm-ivory'
                    ? 'border-brand-ink bg-brand-champagne/30 shadow-subtle'
                    : 'border-brand-border bg-brand-ivory hover:border-brand-taupe'
                }`}
              >
                <div className="flex gap-1 mb-2">
                  <span className="w-3 h-3 rounded-full bg-[#F8F6F0] border border-black/10" />
                  <span className="w-3 h-3 rounded-full bg-[#191919]" />
                  <span className="w-3 h-3 rounded-full bg-[#E8DFD2]" />
                </div>
                <span className="text-[11px] font-medium text-brand-ink block">Warm Ivory</span>
                <span className="text-[9px] text-brand-taupe font-mono">Editorial Standard</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedTheme('monochrome')}
                className={`p-3 rounded border text-left transition-all ${
                  selectedTheme === 'monochrome'
                    ? 'border-brand-ink bg-brand-champagne/30 shadow-subtle'
                    : 'border-brand-border bg-brand-ivory hover:border-brand-taupe'
                }`}
              >
                <div className="flex gap-1 mb-2">
                  <span className="w-3 h-3 rounded-full bg-[#111111]" />
                  <span className="w-3 h-3 rounded-full bg-[#666666]" />
                  <span className="w-3 h-3 rounded-full bg-[#FFFFFF] border border-black/10" />
                </div>
                <span className="text-[11px] font-medium text-brand-ink block">Studio Noir</span>
                <span className="text-[9px] text-brand-taupe font-mono">High Contrast</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedTheme('earth-olive')}
                className={`p-3 rounded border text-left transition-all ${
                  selectedTheme === 'earth-olive'
                    ? 'border-brand-ink bg-brand-champagne/30 shadow-subtle'
                    : 'border-brand-border bg-brand-ivory hover:border-brand-taupe'
                }`}
              >
                <div className="flex gap-1 mb-2">
                  <span className="w-3 h-3 rounded-full bg-[#777B65]" />
                  <span className="w-3 h-3 rounded-full bg-[#DED5C6]" />
                  <span className="w-3 h-3 rounded-full bg-[#2A2927]" />
                </div>
                <span className="text-[11px] font-medium text-brand-ink block">Muted Olive</span>
                <span className="text-[9px] text-brand-taupe font-mono">Organic Craft</span>
              </button>
            </div>
          </div>

          <div className="pt-2 text-[11px] text-brand-taupe flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-brand-olive" />
            <span>14-day full studio trial · No credit card required</span>
          </div>

          <div className="pt-4 border-t border-brand-border flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-mono uppercase tracking-wider text-brand-taupe hover:text-brand-ink transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !brandName.trim()}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded bg-brand-ink hover:bg-brand-charcoal text-brand-ivory text-xs font-medium tracking-wider uppercase transition-colors shadow-subtle disabled:opacity-50"
            >
              {isSubmitting ? 'Initializing...' : 'Launch Workspace'}
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
