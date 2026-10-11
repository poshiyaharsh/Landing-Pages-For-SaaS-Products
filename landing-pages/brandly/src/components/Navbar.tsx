import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onStartWorkspace: () => void;
  onSignIn: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartWorkspace, onSignIn }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Platform', href: '#platform' },
    { label: 'Features', href: '#features' },
    { label: 'Brand Kits', href: '#brand-kits' },
    { label: 'Guidelines', href: '#guidelines' },
    { label: 'Templates', href: '#templates' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-ivory/90 backdrop-blur-md border-b border-brand-border/80 shadow-subtle py-3.5'
          : 'bg-brand-ivory/40 backdrop-blur-[2px] border-b border-brand-border/40 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brandly Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-ink rounded px-1"
          aria-label="Brandly Home"
        >
          {/* Typographic Monogram */}
          <div className="w-8 h-8 rounded border border-brand-charcoal bg-brand-ink text-brand-ivory flex items-center justify-center shadow-subtle transition-transform group-hover:scale-105">
            <span className="font-serif text-lg font-semibold tracking-tighter">B</span>
          </div>
          <span className="font-serif text-2xl font-medium tracking-tight text-brand-ink">
            Brandly<span className="text-brand-taupe text-xs align-super ml-0.5">®</span>
          </span>
        </a>

        {/* Desktop Center Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-sans font-medium text-brand-charcoal/80 hover:text-brand-ink tracking-wide transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-brand-ink hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTAs */}
        <div className="hidden sm:flex items-center space-x-5">
          <button
            onClick={onSignIn}
            className="text-[13px] font-sans font-medium text-brand-charcoal hover:text-brand-ink tracking-wide transition-colors px-2 py-1"
          >
            Sign In
          </button>
          <button
            onClick={onStartWorkspace}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-brand-ink hover:bg-brand-charcoal text-brand-ivory text-xs font-medium tracking-wider uppercase transition-all shadow-subtle hover:shadow-editorial hover:translate-y-[-1px] active:translate-y-0"
          >
            <span>Start Your Workspace</span>
            <ArrowRight className="w-3.5 h-3.5 text-brand-champagne" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-brand-charcoal hover:text-brand-ink transition-colors"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-brand-ivory border-b border-brand-border px-6 py-6 animate-fade-in shadow-xl">
          <nav className="flex flex-col space-y-4 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-serif text-brand-ink hover:text-brand-olive transition-colors py-1 border-b border-brand-border/40"
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
              className="w-full py-2.5 text-sm font-sans font-medium text-brand-charcoal border border-brand-border rounded bg-brand-soft-white hover:bg-brand-champagne/30 transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onStartWorkspace();
              }}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded bg-brand-ink text-brand-ivory text-xs font-medium tracking-wider uppercase transition-colors"
            >
              <span>Start Your Workspace</span>
              <ArrowRight className="w-3.5 h-3.5 text-brand-champagne" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
