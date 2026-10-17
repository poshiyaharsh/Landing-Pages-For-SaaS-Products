import React, { useState } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { CreatorHubLogo } from './CreatorHubLogo';

interface NavbarProps {
  onOpenModal: () => void;
  onScrollToStudio: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal, onScrollToStudio }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Studio Tools', href: '#features' },
    { label: 'Interactive Studio', href: '#studio' },
    { label: 'Growth Journey', href: '#workflow' },
    { label: 'Creator Formats', href: '#categories' },
    { label: 'Brand Deals', href: '#collaborations' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0B0A10]/85 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Badge */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#" className="flex items-center gap-2 group">
              <CreatorHubLogo />
            </a>
            <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-xs text-pink-400 font-medium">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Creator Economy OS</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-pink-400 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onScrollToStudio}
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white rounded-xl border border-white/10 hover:border-white/20 bg-white/5 transition-all"
            >
              Explore Studio
            </button>
            <button
              onClick={onOpenModal}
              className="px-4 py-2 text-xs font-bold text-white rounded-xl bg-gradient-to-r from-pink-500 to-violet-600 hover:opacity-95 shadow-lg shadow-pink-500/20 transition-all flex items-center gap-1.5"
            >
              <span>Build your creator hub</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onScrollToStudio}
              className="px-3 py-1.5 text-xs font-bold text-white rounded-lg bg-pink-500"
            >
              Studio
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
        <div className="md:hidden border-b border-white/10 bg-[#0B0A10] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-pink-400 hover:bg-white/5 rounded-lg"
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
              className="w-full py-3 text-xs font-bold text-center text-white rounded-xl bg-gradient-to-r from-pink-500 to-violet-600"
            >
              Build your creator hub
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
