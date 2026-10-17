import React, { useState } from 'react';
import { Menu, X, ArrowRight, Code, Terminal, Sparkles, ExternalLink } from 'lucide-react';
import { APIHubLogo } from './APIHubLogo';

interface NavbarProps {
  onOpenWorkspaceModal: () => void;
  onScrollToExplorer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWorkspaceModal, onScrollToExplorer }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Explorer', href: '#explorer' },
    { label: 'Platform Features', href: '#features' },
    { label: 'Workflow', href: '#workflow' },
    { label: 'API Reference', href: '#docs' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-[#020617]/90 backdrop-blur-xl font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand */}
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-2">
              <APIHubLogo />
            </a>
            
            <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Edge Gateway: Global Active</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-xs text-zinc-400">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onScrollToExplorer}
              className="px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 text-zinc-300 text-xs transition-all flex items-center gap-2"
            >
              <Code className="w-3.5 h-3.5 text-cyan-400" />
              <span>Endpoint Explorer</span>
            </button>
            <button
              onClick={onOpenWorkspaceModal}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-black font-semibold text-xs tracking-wide transition-all shadow-md shadow-cyan-950/40 flex items-center gap-1.5"
            >
              <span>Explore Workspace</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#0B0F19] px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm text-zinc-300 hover:text-cyan-400 hover:bg-slate-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onScrollToExplorer();
              }}
              className="w-full py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-zinc-200 text-xs font-semibold flex items-center justify-center gap-2"
            >
              <Code className="w-4 h-4 text-cyan-400" />
              <span>Interactive API Explorer</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWorkspaceModal();
              }}
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 text-black text-xs font-semibold flex items-center justify-center gap-2"
            >
              <span>Explore the API Workspace</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
