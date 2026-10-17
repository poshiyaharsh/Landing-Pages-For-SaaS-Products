import React, { useState } from 'react';
import { Menu, X, ArrowRight, Terminal } from 'lucide-react';
import { MarketMindLogo } from './MarketMindLogo';

interface NavbarProps {
  onOpenModal: () => void;
  onScrollToDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal, onScrollToDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Intelligence', href: '#features' },
    { label: 'Terminal', href: '#demo' },
    { label: 'Research Workflow', href: '#workflow' },
    { label: 'Sectors', href: '#sectors' },
    { label: 'Feeds & FIX', href: '#feeds' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#080C14]/90 backdrop-blur-xl font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Status */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#" className="flex items-center gap-2 group">
              <MarketMindLogo />
            </a>
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#0E1626] border border-white/10 text-[11px] text-amber-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>TERMINAL FEED: OK (1.2ms)</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-xs text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-amber-400 transition-colors py-1 uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onScrollToDemo}
              className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white rounded border border-white/10 hover:border-white/20 bg-white/5 transition-all"
            >
              View Dashboard
            </button>
            <button
              onClick={onOpenModal}
              className="px-4 py-2 text-xs font-bold text-slate-950 rounded bg-amber-500 hover:bg-amber-400 transition-all flex items-center gap-1.5 uppercase tracking-wide"
            >
              <span>Explore Market Intelligence</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onScrollToDemo}
              className="px-2.5 py-1 text-xs font-bold text-slate-950 rounded bg-amber-500"
            >
              Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#080C14] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs text-slate-300 hover:text-amber-400 hover:bg-white/5 rounded uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal();
              }}
              className="w-full py-2.5 text-xs font-bold text-center text-slate-950 rounded bg-amber-500 uppercase"
            >
              Explore Market Intelligence
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
