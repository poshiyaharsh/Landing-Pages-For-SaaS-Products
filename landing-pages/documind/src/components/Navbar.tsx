import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { DocuLogo } from './DocuLogo';

interface NavbarProps {
  onOpenAuth: (mode: 'signin' | 'signup') => void;
  onExploreWorkspace: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuth, onExploreWorkspace }) => {
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
    { label: 'Platform', href: '#workspace' },
    { label: 'Features', href: '#features' },
    { label: 'Solutions', href: '#use-cases' },
    { label: 'Resources', href: '#faq' },
    { label: 'Pricing', href: '#pricing' },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href === '#workspace') {
      onExploreWorkspace();
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
          ? 'bg-white/95 backdrop-blur-md border-b border-docu-border shadow-subtle py-3'
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
            aria-label="DocuMind Home"
          >
            <DocuLogo size="md" />
          </a>

          {/* Desktop Center Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-docu-surface/80 border border-docu-border/80 rounded-full px-4 py-1.5 shadow-subtle backdrop-blur-sm">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="px-3 py-1 text-xs font-medium text-docu-secondary hover:text-docu-text rounded-full hover:bg-docu-subtle transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onOpenAuth('signin')}
              className="text-xs font-medium text-docu-secondary hover:text-docu-text px-3 py-1.5 rounded-docu hover:bg-docu-subtle transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={() => onOpenAuth('signup')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium bg-docu-text text-white hover:bg-black rounded-docu shadow-subtle transition-all hover:gap-2"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-3.5 h-3.5 text-docu-muted" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenAuth('signup')}
              className="px-2.5 py-1.5 text-xs font-medium bg-docu-text text-white rounded-docu"
            >
              Free Trial
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 rounded-docu border border-docu-border text-docu-text hover:bg-docu-subtle transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-docu-border px-4 pt-3 pb-6 space-y-3 shadow-modal animate-fade-in">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="text-left px-3 py-2 text-sm font-medium text-docu-secondary hover:text-docu-text rounded-docu hover:bg-docu-subtle transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="pt-3 border-t border-docu-border flex flex-col gap-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenAuth('signin');
              }}
              className="w-full text-center py-2 text-sm font-medium text-docu-secondary hover:text-docu-text border border-docu-border rounded-docu"
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenAuth('signup');
              }}
              className="w-full text-center py-2 text-sm font-medium bg-docu-accent text-white rounded-docu shadow-subtle"
            >
              Get Started Free
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
