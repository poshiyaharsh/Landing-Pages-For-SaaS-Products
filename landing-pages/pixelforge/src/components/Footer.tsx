import React from 'react';
import { Layers } from 'lucide-react';
import { FOOTER_COLUMNS } from '../data/pixelforgeData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-studio-border/70 bg-studio-950 text-studio-muted py-16 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-neon-violet to-neon-cyan p-0.5">
                <div className="w-full h-full bg-studio-950 rounded-[7px] flex items-center justify-center">
                  <Layers className="w-4 h-4 text-neon-cyan" />
                </div>
              </div>
              <span className="font-display font-extrabold text-lg text-white tracking-tight">PixelForge</span>
            </div>
            <p className="text-xs text-studio-muted font-normal leading-relaxed">
              Turn ideas into production-ready designs.
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-studio-900 border border-studio-border text-[11px] font-mono text-studio-text">
                <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                <span>Creative Engine Operational</span>
              </div>
            </div>
          </div>

          {/* 4 Link Columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="space-y-3">
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-studio-muted hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-8 border-t border-studio-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-studio-subtle">
          <div>
            © 2026 PixelForge Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Built for Modern Creative Studios</span>
            <span>·</span>
            <span>OKLCH Native</span>
            <span>·</span>
            <span>Zero-Loss Vectors</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
