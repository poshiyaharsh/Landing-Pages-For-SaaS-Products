import React, { useState } from 'react';
import { Menu, X, ArrowRight, Play, Terminal } from 'lucide-react';
import { TestForgeLogo } from './TestForgeLogo';

interface NavbarProps {
  onOpenModal: () => void;
  onScrollToDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal, onScrollToDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Platform', href: '#features' },
    { label: 'QA Runner', href: '#demo' },
    { label: 'Test Lifecycle', href: '#lifecycle' },
    { label: 'Failure Triage', href: '#triage' },
    { label: 'CI Integrations', href: '#ecosystem' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0A0F1D]/85 backdrop-blur-xl font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Status */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#" className="flex items-center gap-2 group">
              <TestForgeLogo />
            </a>
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#10172A] border border-white/10 text-[11px] text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>CI WORKERS: READY (0.4s RUNTIME)</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-xs text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-emerald-400 transition-colors py-1 uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onScrollToDemo}
              className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white rounded-xl border border-white/10 hover:border-white/20 bg-white/5 transition-all flex items-center gap-1.5"
            >
              <Play className="w-3 h-3 text-emerald-400 fill-emerald-400" />
              <span>Run Demo Suite</span>
            </button>
            <button
              onClick={onOpenModal}
              className="px-4 py-2 text-xs font-bold text-slate-950 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:opacity-95 shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-1.5 uppercase tracking-wide"
            >
              <span>Explore TestForge</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onScrollToDemo}
              className="px-2.5 py-1 text-xs font-bold text-slate-950 rounded-lg bg-emerald-400"
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
        <div className="md:hidden border-b border-white/10 bg-[#0A0F1D] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs text-slate-300 hover:text-emerald-400 hover:bg-white/5 rounded uppercase"
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
              className="w-full py-2.5 text-xs font-bold text-center text-slate-950 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 uppercase"
            >
              Explore TestForge
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
