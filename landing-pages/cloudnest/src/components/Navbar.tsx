import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Terminal } from 'lucide-react';
import { NestLogo } from './NestLogo';

interface NavbarProps {
  onOpenAuth: (mode: 'signin' | 'signup') => void;
  onExploreConsole: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuth, onExploreConsole }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Platform', href: '#console' },
    { label: 'Solutions', href: '#use-cases' },
    { label: 'Developers', href: '#developer-experience' },
    { label: 'Resources', href: '#faq' },
    { label: 'Pricing', href: '#pricing' },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href === '#console') {
      onExploreConsole();
      return;
    }
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-nest-border shadow-subtle py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="focus:outline-none"
            aria-label="CloudNest Home"
          >
            <NestLogo size="md" />
          </a>

          {/* Desktop Center Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-white/80 border border-nest-border/80 rounded-full px-4 py-1.5 shadow-subtle backdrop-blur-sm">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="px-3.5 py-1 text-xs font-medium text-nest-secondary hover:text-nest-text rounded-full hover:bg-nest-subtle transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onOpenAuth('signin')}
              className="text-xs font-semibold text-nest-secondary hover:text-nest-text px-3 py-1.5 rounded-nest hover:bg-nest-subtle transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={() => onOpenAuth('signup')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-nest-blue hover:bg-nest-blue-deep text-white rounded-nest shadow-subtle transition-all hover:gap-2"
            >
              <span>Start Building</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenAuth('signup')}
              className="px-3 py-1.5 text-xs font-semibold bg-nest-blue text-white rounded-nest"
            >
              Start Free
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 rounded-nest border border-nest-border text-nest-text hover:bg-nest-subtle transition-colors"
              aria-label="Toggle navigation"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-nest-border px-4 pt-3 pb-6 space-y-3 shadow-modal animate-fade-in">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="text-left px-3 py-2 text-sm font-medium text-nest-secondary hover:text-nest-text rounded-nest hover:bg-nest-subtle transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="pt-3 border-t border-nest-border flex flex-col gap-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenAuth('signin');
              }}
              className="w-full text-center py-2 text-xs font-semibold text-nest-secondary hover:text-nest-text border border-nest-border rounded-nest"
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenAuth('signup');
              }}
              className="w-full text-center py-2 text-xs font-semibold bg-nest-blue text-white rounded-nest shadow-subtle"
            >
              Start Building Free
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
