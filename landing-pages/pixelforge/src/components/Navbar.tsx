import React, { useState, useEffect } from 'react';
import { Layers, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { NAV_LINKS } from '../data/pixelforgeData';

interface NavbarProps {
  onStartCreating: () => void;
  onSignIn: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartCreating, onSignIn }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-studio-950/80 backdrop-blur-xl border-b border-studio-border/80 shadow-2xl shadow-black/80'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-violet rounded-lg"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-neon-violet to-neon-cyan p-0.5 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
              <div className="w-full h-full bg-studio-950 rounded-[7px] flex items-center justify-center">
                <Layers className="w-4 h-4 text-neon-cyan group-hover:text-neon-violet transition-colors" />
              </div>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-display font-extrabold text-xl tracking-tight text-white group-hover:text-neon-violet transition-colors">
                PixelForge
              </span>
              <span className="text-[9px] uppercase font-mono tracking-widest px-1.5 py-0.5 rounded bg-neon-violet/10 border border-neon-violet/20 text-neon-violet font-semibold hidden sm:inline-block">
                STUDIO v2
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-full bg-studio-900/70 border border-studio-border/70 backdrop-blur-md">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-xs font-medium text-studio-muted hover:text-white rounded-full hover:bg-white/[0.04] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onSignIn}
              className="px-3.5 py-2 text-xs font-medium text-studio-muted hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-violet rounded-lg"
            >
              Sign In
            </button>
            <button
              onClick={onStartCreating}
              className="group relative inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-neon-violetDark to-neon-violet hover:from-neon-violet hover:to-neon-cyan active:scale-[0.98] transition-all rounded-lg shadow-[0_0_20px_rgba(139,92,246,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-violet"
            >
              <Sparkles className="w-3.5 h-3.5 text-neon-cyan" />
              <span>Start Creating</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-studio-muted hover:text-white hover:bg-white/[0.05] border border-studio-border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-violet"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-studio-border bg-studio-950/95 backdrop-blur-2xl px-5 pt-3 pb-6 space-y-4 animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col space-y-1 pt-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-studio-muted hover:text-white hover:bg-white/[0.04] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-studio-border/70 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onSignIn();
              }}
              className="w-full py-2.5 text-center text-sm font-medium text-studio-text hover:text-white bg-studio-900 border border-studio-border rounded-lg"
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onStartCreating();
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-white bg-gradient-to-r from-neon-violet to-neon-cyan rounded-lg shadow-lg shadow-neon-violet/20"
            >
              Start Creating — Free
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
