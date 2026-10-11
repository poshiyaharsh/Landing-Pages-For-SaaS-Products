import React, { useState } from 'react';
import { 
  Sparkles, 
  Eye, 
  ArrowRight, 
  Layout, 
  Download, 
  Layers, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { TEMPLATES_DATA } from '../data/brandData';
import { TemplateItem } from '../types';

interface TemplateGalleryProps {
  onOpenTemplateModal: (template: TemplateItem) => void;
  onUseTemplate: (template: TemplateItem) => void;
}

export const TemplateGallery: React.FC<TemplateGalleryProps> = ({
  onOpenTemplateModal,
  onUseTemplate,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Social Media',
    'Presentations',
    'Marketing',
    'Business Documents',
    'Campaigns',
    'Digital Advertising',
  ];

  const filteredTemplates = TEMPLATES_DATA.filter(
    (t) => activeCategory === 'All' || t.category === activeCategory
  );

  return (
    <section id="templates" className="py-24 sm:py-36 bg-brand-soft-white border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-brand-taupe block mb-3">
            CURATED CREATIVE BLUEPRINTS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-brand-ink leading-tight mb-4">
            Beautifully on-brand, by design.
          </h2>
          <p className="text-base sm:text-lg text-brand-charcoal/80 font-sans leading-relaxed">
            Eliminate design paralysis with verified, typography-first editorial layouts. Filter through categories and click any template to inspect layout tokens or clone it directly to your workspace.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none border-b border-brand-border">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded text-xs font-mono transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-brand-ink text-brand-ivory font-medium shadow-subtle'
                  : 'bg-brand-ivory border border-brand-border text-brand-charcoal hover:bg-brand-champagne/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Templates Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              onClick={() => onOpenTemplateModal(template)}
              className="group bg-brand-ivory border border-brand-border hover:border-brand-ink rounded-lg overflow-hidden flex flex-col justify-between shadow-subtle hover:shadow-editorial transition-all duration-300 cursor-pointer"
            >
              {/* Card Canvas Art */}
              <div
                className="aspect-[16/11] bg-brand-soft-white border-b border-brand-border p-6 flex flex-col justify-between relative overflow-hidden transition-colors"
                style={{ borderTopColor: template.colorAccent, borderTopWidth: '3px' }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono tracking-widest uppercase text-brand-taupe">
                    {template.category}
                  </span>
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: template.colorAccent }} />
                </div>

                {/* Minimalist Graphic Blueprint Layout */}
                <div className="space-y-3 py-4">
                  <div className="h-4 bg-brand-champagne/60 rounded w-2/3 group-hover:w-3/4 transition-all" />
                  <div className="h-2.5 bg-brand-champagne/30 rounded w-full" />
                  <div className="h-2.5 bg-brand-champagne/20 rounded w-5/6" />
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-brand-taupe pt-2 border-t border-brand-border/40">
                  <span>{template.dimensions}</span>
                  <span className="text-brand-charcoal font-semibold">{template.format}</span>
                </div>

                {/* Hover Overlay Detail */}
                <div className="absolute inset-0 bg-brand-ink/80 text-brand-ivory opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-between backdrop-blur-[2px]">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-brand-champagne block mb-1">
                      TEMPLATE SPECIFICATION
                    </span>
                    <h5 className="font-serif text-lg font-medium text-brand-ivory">
                      {template.title}
                    </h5>
                    <p className="text-xs text-brand-taupe font-sans mt-2 leading-relaxed">
                      {template.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono text-brand-champagne">
                    <span>Click to inspect preview</span>
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Card Bottom Meta & Button */}
              <div className="p-5 flex flex-col justify-between flex-1 bg-brand-soft-white">
                <div>
                  <h4 className="font-serif text-lg font-medium text-brand-ink group-hover:text-brand-olive transition-colors">
                    {template.title}
                  </h4>
                  <p className="text-xs text-brand-charcoal/70 line-clamp-2 mt-1 leading-relaxed font-sans">
                    {template.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-brand-border/60 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-brand-taupe">
                    {template.aspectRatio} Aspect
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onUseTemplate(template);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-brand-ink hover:bg-brand-charcoal text-brand-ivory text-xs font-mono tracking-wider transition-colors"
                  >
                    <span>Use Template</span>
                    <ArrowRight className="w-3 h-3 text-brand-champagne" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
