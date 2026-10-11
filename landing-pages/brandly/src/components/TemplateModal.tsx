import React from 'react';
import { X, Sparkles, Layout, CheckCircle, ArrowRight, Layers } from 'lucide-react';
import { TemplateItem } from '../types';

interface TemplateModalProps {
  template: TemplateItem | null;
  onClose: () => void;
  onUseTemplate: (template: TemplateItem) => void;
}

export const TemplateModal: React.FC<TemplateModalProps> = ({
  template,
  onClose,
  onUseTemplate,
}) => {
  if (!template) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-ink/75 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="template-modal-title"
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

        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] tracking-[0.2em] uppercase font-mono px-2 py-0.5 rounded bg-brand-champagne/50 text-brand-charcoal border border-brand-border">
            {template.category}
          </span>
          <span className="text-xs font-mono text-brand-taupe">
            {template.format}
          </span>
        </div>

        <h3 id="template-modal-title" className="font-serif text-2xl sm:text-3xl font-normal text-brand-ink mb-2">
          {template.title}
        </h3>
        <p className="text-xs sm:text-sm text-brand-charcoal/80 mb-6 leading-relaxed">
          {template.description}
        </p>

        {/* Template Graphic Canvas Preview */}
        <div className="bg-brand-ivory border border-brand-border rounded-md p-8 mb-6 flex flex-col items-center justify-center min-h-[280px] relative overflow-hidden">
          <div
            className="w-full max-w-sm rounded border border-brand-border/80 bg-brand-soft-white p-6 shadow-editorial relative overflow-hidden"
            style={{ borderTopColor: template.colorAccent, borderTopWidth: '4px' }}
          >
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-brand-border/60">
              <span className="text-[10px] font-mono tracking-widest uppercase text-brand-taupe">
                BRANDLY EDITORIAL SPEC
              </span>
              <span className="w-2 h-2 rounded-full bg-brand-olive" />
            </div>

            <div className="space-y-3">
              <div className="h-4 bg-brand-champagne/40 rounded w-3/4" />
              <div className="h-3 bg-brand-champagne/20 rounded w-full" />
              <div className="h-3 bg-brand-champagne/20 rounded w-5/6" />
            </div>

            <div className="mt-6 pt-4 border-t border-brand-border/60 flex items-center justify-between text-[11px] font-mono text-brand-taupe">
              <span>{template.dimensions}</span>
              <span className="px-1.5 py-0.5 rounded bg-brand-ivory border border-brand-border text-brand-ink">
                Ready
              </span>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <span className="text-[11px] font-mono text-brand-taupe">
              Dimensions: {template.dimensions} · Aspect Ratio: {template.aspectRatio}
            </span>
          </div>
        </div>

        {/* Feature List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs text-brand-charcoal">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-brand-olive flex-shrink-0" />
            <span>Pre-configured typography & spacing tokens</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-brand-olive flex-shrink-0" />
            <span>Automatic brand kit color injection</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-brand-olive flex-shrink-0" />
            <span>Export in PNG, PDF, SVG, and vector Figma</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-brand-olive flex-shrink-0" />
            <span>Commercial editorial license included</span>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-brand-border flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-mono uppercase tracking-wider text-brand-taupe hover:text-brand-ink transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => onUseTemplate(template)}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded bg-brand-ink hover:bg-brand-charcoal text-brand-ivory text-xs font-medium tracking-wider uppercase transition-colors shadow-subtle"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-champagne" />
            Use Template in Workspace
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
