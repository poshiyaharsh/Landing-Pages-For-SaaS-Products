import React, { useState } from 'react';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { PrivacyXLogo } from './PrivacyXLogo';

interface NavbarProps {
  onOpenModal: () => void;
  onScrollToDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal, onScrollToDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Capabilities', href: '#features' },
    { label: 'Privacy Console', href: '#demo' },
    { label: 'Fulfillment Flow', href: '#workflow' },
    { label: 'Data Register', href: '#inventory' },
    { label: 'Principles', href: '#principles' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0B0F17]/85 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Status */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#" className="flex items-center gap-2 group">
              <PrivacyXLogo />
            </a>
            <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs text-teal-300 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              <span>Calm Privacy Governance</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-teal-400 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onScrollToDemo}
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white rounded-xl border border-white/10 hover:border-white/20 bg-white/5 transition-all"
            >
              View Privacy Dashboard
            </button>
            <button
              onClick={onOpenModal}
              className="px-4 py-2 text-xs font-bold text-slate-950 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-500 hover:opacity-95 shadow-lg shadow-teal-500/20 transition-all flex items-center gap-1.5"
            >
              <span>Explore privacy management</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onScrollToDemo}
              className="px-3 py-1.5 text-xs font-bold text-slate-950 rounded-lg bg-teal-400"
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
        <div className="md:hidden border-b border-white/10 bg-[#0B0F17] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-teal-400 hover:bg-white/5 rounded-lg"
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
              className="w-full py-3 text-xs font-bold text-center text-slate-950 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-500"
            >
              Explore privacy management
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
