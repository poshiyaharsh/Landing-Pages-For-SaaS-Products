import React from 'react';
import { TRUST_BRANDS } from '../data/brandData';

export const BrandTrustStrip: React.FC = () => {
  return (
    <section className="py-12 bg-brand-soft-white border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-8">
          <p className="text-[11px] font-mono tracking-[0.25em] uppercase text-brand-taupe">
            BRANDS DESERVE BETTER ORGANIZATION.
          </p>
        </div>

        {/* Restrained Monochrome Typographic Wordmarks */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {TRUST_BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="text-center group transition-opacity hover:opacity-100 opacity-70"
            >
              <span className="font-serif text-lg sm:text-xl font-normal tracking-[0.2em] text-brand-charcoal block transition-colors group-hover:text-brand-ink">
                {brand.name}
              </span>
              <span className="text-[9px] font-mono tracking-widest uppercase text-brand-taupe mt-1 block">
                {brand.descriptor}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
