import React, { useState } from 'react';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { TalentOSLogo } from './TalentOSLogo';

interface NavbarProps {
  onOpenModal: () => void;
  onScrollToDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal, onScrollToDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Platform', href: '#features' },
    { label: 'Hiring Console', href: '#demo' },
    { label: 'Human + AI Workflow', href: '#workflow' },
    { label: 'Internal Mobility', href: '#growth' },
    { label: 'ATS Ecosystem', href: '#integrations' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0B0F19]/85 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Badge */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#" className="flex items-center gap-2 group">
              <TalentOSLogo />
            </a>
            <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs text-teal-300 font-medium font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              <span>Human-Led Intelligence</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-violet-400 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onScrollToDemo}
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white rounded-xl border border-white/10 hover:border-white/20 bg-white/5 transition-all"
            >
              See Hiring Workflow
            </button>
            <button
              onClick={onOpenModal}
              className="px-4 py-2 text-xs font-bold text-white rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-teal-500 hover:opacity-95 shadow-lg shadow-violet-500/20 transition-all flex items-center gap-1.5"
            >
              <span>Explore talent intelligence</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onScrollToDemo}
              className="px-3 py-1.5 text-xs font-bold text-white rounded-lg bg-violet-600"
            >
              Console
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0B0F19] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-violet-400 hover:bg-white/5 rounded-lg"
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
              className="w-full py-3 text-xs font-bold text-center text-white rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-teal-500"
            >
              Explore talent intelligence
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
