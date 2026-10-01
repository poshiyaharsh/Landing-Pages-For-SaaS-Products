import React, { useState, useEffect } from 'react';
import { ShieldCheck, Menu, X, ArrowRight, Lock } from 'lucide-react';
import { NAV_LINKS } from '../data/securenestData';

interface NavbarProps {
  onStartProtecting: () => void;
  onSignIn: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartProtecting, onSignIn }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-cyber-dark/85 backdrop-blur-xl border-b border-cyber-border/70 shadow-2xl shadow-black/60'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-emerald rounded-lg"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-cyber-emerald/10 border border-cyber-emerald/30 group-hover:border-cyber-emerald/60 transition-colors shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              <ShieldCheck className="w-5 h-5 text-cyber-emerald transition-transform group-hover:scale-105" />
              <div className="absolute inset-0 rounded-lg bg-cyber-emerald/10 blur-sm -z-10 group-hover:bg-cyber-emerald/20 transition-all" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-lg tracking-tight text-white group-hover:text-cyber-emerald transition-colors">
                SecureNest
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest px-1.5 py-0.5 rounded bg-cyber-emerald/10 border border-cyber-emerald/20 text-cyber-emerald font-semibold hidden sm:inline-block">
                OPS
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-cyber-card/60 border border-cyber-border/80 backdrop-blur-md">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-slate-300 hover:text-white rounded-full hover:bg-white/[0.04] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onSignIn}
              className="px-3.5 py-2 text-xs lg:text-sm font-medium text-slate-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-emerald rounded-lg"
            >
              Sign In
            </button>
            <button
              onClick={onStartProtecting}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs lg:text-sm font-semibold text-slate-950 bg-cyber-emerald hover:bg-emerald-400 active:scale-[0.98] transition-all rounded-lg shadow-[0_0_20px_rgba(16,185,129,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyber-emerald focus-visible:ring-offset-cyber-black"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Start Protecting</span>
              <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05] border border-cyber-border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-emerald"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-cyber-border bg-cyber-dark/95 backdrop-blur-2xl px-5 pt-3 pb-6 space-y-4 animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col space-y-2 pt-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.04] rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-cyber-border/70 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onSignIn();
              }}
              className="w-full py-2.5 text-center text-sm font-medium text-slate-300 hover:text-white bg-cyber-card border border-cyber-border rounded-lg"
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onStartProtecting();
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-slate-950 bg-cyber-emerald hover:bg-emerald-400 rounded-lg shadow-lg shadow-emerald-500/20"
            >
              Start Protecting
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
