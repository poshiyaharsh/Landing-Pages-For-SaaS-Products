import React, { useState, useEffect } from 'react';
import { Github, Menu, X, Command, ChevronRight } from 'lucide-react';
import { NAV_ITEMS } from '../data/codepilotData';

interface NavbarProps {
  onStartBuilding: () => void;
  onSignIn: () => void;
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onStartBuilding,
  onSignIn,
  onOpenCommandPalette,
}) => {
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
          ? 'bg-codepilot-bg/90 backdrop-blur-md border-b border-codepilot-border/80 shadow-terminal'
          : 'bg-transparent border-b border-white/[0.04]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="CodePilot Homepage"
        >
          <div className="w-9 h-9 rounded-md bg-codepilot-panel border border-brand-green/30 flex items-center justify-center font-mono font-bold text-brand-green shadow-glow-green group-hover:border-brand-green transition-colors">
            <span className="text-sm font-black">&gt;_</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-mono font-bold tracking-wider text-base text-codepilot-white group-hover:text-brand-green transition-colors">
                CODEPILOT
              </span>
              <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-brand-green/10 border border-brand-green/30 text-brand-green font-semibold">
                v2.4
              </span>
            </div>
            <span className="text-[10px] font-mono text-codepilot-dim -mt-1 hidden sm:inline-block">
              developer.ai
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3 py-1.5 text-sm font-medium text-codepilot-muted hover:text-codepilot-text rounded-md hover:bg-white/[0.03] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {/* Quick Command Palette Button */}
          <button
            onClick={onOpenCommandPalette}
            type="button"
            className="flex items-center gap-2 px-2.5 py-1.5 rounded border border-codepilot-border bg-codepilot-panel/60 hover:bg-codepilot-hover text-codepilot-dim hover:text-codepilot-text text-xs font-mono transition-colors"
            title="Open Command Palette (⌘K)"
          >
            <Command className="w-3.5 h-3.5 text-brand-green" />
            <span className="hidden lg:inline text-codepilot-muted">Quick run</span>
            <kbd className="px-1.5 py-0.5 rounded bg-codepilot-surface text-[10px] border border-codepilot-border text-codepilot-text">
              ⌘K
            </kbd>
          </button>

          {/* GitHub Star Button */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded border border-codepilot-border bg-codepilot-panel hover:bg-codepilot-hover text-codepilot-text text-xs font-mono transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span className="text-codepilot-dim">★</span>
            <span className="font-semibold">14.2k</span>
          </a>

          {/* Sign In */}
          <button
            onClick={onSignIn}
            type="button"
            className="px-3 py-1.5 text-xs font-medium text-codepilot-muted hover:text-codepilot-white transition-colors"
          >
            Sign In
          </button>

          {/* Start Building Free */}
          <button
            onClick={onStartBuilding}
            type="button"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-semibold bg-brand-green text-codepilot-bg hover:bg-[#15f8a3] hover:shadow-glow-green transition-all focus:outline-none"
          >
            <span>Start Building</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenCommandPalette}
            aria-label="Open Command Search"
            className="p-2 text-codepilot-muted hover:text-codepilot-text rounded-md border border-codepilot-border bg-codepilot-panel"
          >
            <Command className="w-4 h-4 text-brand-green" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-codepilot-muted hover:text-codepilot-text rounded-md border border-codepilot-border bg-codepilot-panel"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-codepilot-border bg-codepilot-panel/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-codepilot-border/60">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-codepilot-text hover:text-brand-green rounded-md hover:bg-white/[0.04] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onSignIn();
              }}
              className="w-full py-2.5 rounded-md border border-codepilot-border text-sm font-medium text-codepilot-text hover:bg-white/[0.04] transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onStartBuilding();
              }}
              className="w-full py-2.5 rounded-md text-sm font-semibold bg-brand-green text-codepilot-bg hover:bg-[#15f8a3] transition-colors flex items-center justify-center gap-2"
            >
              <span>Start Building Free</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
