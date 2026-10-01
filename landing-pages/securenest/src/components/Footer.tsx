import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { FOOTER_COLUMNS } from '../data/securenestData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-cyber-border/70 bg-cyber-black text-slate-400 py-16 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand Info (Span 2 on mobile, 1 on desktop) */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-cyber-emerald/10 border border-cyber-emerald/30">
                <ShieldCheck className="w-4 h-4 text-cyber-emerald" />
              </div>
              <span className="font-bold text-base text-white tracking-tight">SecureNest</span>
            </div>
            <p className="text-xs text-slate-400 font-normal leading-relaxed">
              Modern security infrastructure for modern teams.
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-dark border border-cyber-border text-[11px] font-mono text-slate-300">
                <span className="w-2 h-2 rounded-full bg-cyber-emerald animate-pulse" />
                <span>All Systems Operational</span>
              </div>
            </div>
          </div>

          {/* 4 Link Columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="space-y-3">
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-white">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-xs text-slate-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-8 border-t border-cyber-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 SecureNest Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>SOC 2 Type II Certified</span>
            <span>·</span>
            <span>ISO 27001 Registered</span>
            <span>·</span>
            <span>GDPR Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
