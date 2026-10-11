import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Radio, Mic } from 'lucide-react';

interface NavbarProps {
  onStartBuilding: () => void;
  onSignIn: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartBuilding, onSignIn }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Platform', href: '#platform' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Agent Builder', href: '#agent-builder' },
    { label: 'Integrations', href: '#integrations' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Developers', href: '#developer-api' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-vf-bg/90 backdrop-blur-md border-b border-vf-border shadow-surface py-3.5'
          : 'bg-transparent border-b border-vf-border-subtle py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* VoiceFlow AI Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-vf-cyan rounded-lg p-1"
          aria-label="VoiceFlow AI Home"
        >
          {/* Minimal soundwave integrated with speech symbol forming subtle V */}
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-vf-surface to-vf-surface-elevated border border-vf-border flex items-center justify-center shadow-cyan-glow group-hover:scale-105 transition-transform">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              {/* Outer Speech Silhouette */}
              <path
                d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C10.5 20 9.2 19.6 8 19L4 20L5 16C4.4 14.8 4 13.5 4 12Z"
                stroke="#52E8FF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-70"
              />
              {/* Central Waveform forming V */}
              <path
                d="M8 10L10 15L12 9L14 15L16 10"
                stroke="#8875FF"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl font-bold tracking-tight text-vf-text group-hover:text-glow-cyan transition-all">
              VoiceFlow<span className="text-vf-cyan ml-1 text-sm font-mono">AI</span>
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-mono uppercase tracking-wider text-vf-text-muted hover:text-vf-cyan transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action CTAs */}
        <div className="hidden sm:flex items-center space-x-4">
          <button
            onClick={onSignIn}
            className="text-xs font-mono uppercase tracking-wider text-vf-text-muted hover:text-vf-text transition-colors px-3 py-1.5"
          >
            Sign In
          </button>
          <button
            onClick={onStartBuilding}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-vf-cyan to-vf-violet text-vf-bg text-xs font-bold font-mono uppercase tracking-wider hover:opacity-90 transition-all shadow-cyan-glow hover:shadow-cyan-glow-lg"
          >
            <span>Start Building</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-vf-text-muted hover:text-vf-text transition-colors"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-vf-bg-secondary border-b border-vf-border px-6 py-6 animate-fade-in shadow-2xl">
          <nav className="flex flex-col space-y-4 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono uppercase tracking-wider text-vf-text hover:text-vf-cyan transition-colors py-1 border-b border-vf-border/40"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col space-y-3 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onSignIn();
              }}
              className="w-full py-2.5 text-xs font-mono uppercase tracking-wider text-vf-text border border-vf-border rounded-lg bg-vf-surface hover:bg-vf-surface-elevated transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onStartBuilding();
              }}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-to-r from-vf-cyan to-vf-violet text-vf-bg text-xs font-bold font-mono uppercase tracking-wider transition-all shadow-cyan-glow"
            >
              <span>Start Building</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
