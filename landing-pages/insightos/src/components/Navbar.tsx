import React, { useState } from 'react';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { InsightOSLogo } from './InsightOSLogo';

interface NavbarProps {
  onOpenModal: (type: 'demo' | 'trial') => void;
  onScrollToDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal, onScrollToDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Capabilities', href: '#features' },
    { label: 'Live Console', href: '#demo' },
    { label: 'Data Architecture', href: '#story' },
    { label: 'Role Solutions', href: '#solutions' },
    { label: 'Integrations', href: '#connectors' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Version */}
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-2 group">
              <InsightOSLogo />
            </a>
            <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Engine v4.2 Stable</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-cyan-400 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenModal('demo')}
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900/50 hover:bg-slate-900 transition-all"
            >
              Request Briefing
            </button>
            <button
              onClick={onScrollToDemo}
              className="px-4 py-2 text-xs font-semibold text-slate-950 rounded-lg bg-cyan-400 hover:bg-cyan-300 transition-all shadow-md shadow-cyan-500/20 flex items-center gap-1.5"
            >
              <span>Explore Dashboard</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onScrollToDemo}
              className="px-3 py-1.5 text-xs font-semibold text-slate-950 rounded-md bg-cyan-400"
            >
              Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-slate-300" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-900 rounded-lg"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal('demo');
              }}
              className="w-full py-2.5 text-xs font-semibold text-center text-slate-200 rounded-lg border border-slate-800 bg-slate-900"
            >
              Request Briefing
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal('trial');
              }}
              className="w-full py-2.5 text-xs font-semibold text-center text-slate-950 rounded-lg bg-cyan-400 font-bold"
            >
              Start 14-Day Sandbox
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
