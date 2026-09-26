import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowRight, Mic } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Product', href: '#hero-preview' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Integrations', href: '#integrations' },
    { label: 'Pricing', href: '#pricing' }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 250ms ease',
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(226, 232, 240, 0.8)' : '1px solid transparent',
        boxShadow: isScrolled ? '0 4px 20px rgba(15, 23, 42, 0.05)' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        {/* Brand Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
          aria-label="Meetly AI Homepage"
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(99, 102, 241, 0.25)',
              position: 'relative'
            }}
          >
            {/* Abstract Soundwave + AI Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '2px', height: '18px' }}>
              <span style={{ width: '3px', height: '8px', background: '#6366F1', borderRadius: '2px' }} />
              <span style={{ width: '3px', height: '16px', background: '#8B5CF6', borderRadius: '2px' }} />
              <span style={{ width: '3px', height: '12px', background: '#38BDF8', borderRadius: '2px' }} />
              <span style={{ width: '3px', height: '18px', background: '#6366F1', borderRadius: '2px' }} />
              <span style={{ width: '3px', height: '6px', background: '#8B5CF6', borderRadius: '2px' }} />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '1.25rem', fontWeight: '800', letterSpacing: '-0.03em', color: '#0F172A' }}>
              Meetly
            </span>
            <span
              style={{
                fontSize: '0.7rem',
                fontWeight: '700',
                letterSpacing: '0.04em',
                padding: '2px 6px',
                borderRadius: '6px',
                background: 'linear-gradient(135deg, #EEF2FF 0%, #F5F3FF 100%)',
                color: '#6366F1',
                border: '1px solid rgba(99, 102, 241, 0.2)'
              }}
            >
              AI
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '32px'
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              style={{
                fontSize: '0.9375rem',
                fontWeight: '500',
                color: '#475569',
                transition: 'color 150ms ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0F172A')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <a
            href="#pricing"
            onClick={(e) => handleLinkClick(e, '#pricing')}
            className="desktop-signin"
            style={{
              fontSize: '0.9375rem',
              fontWeight: '600',
              color: '#334155',
              padding: '8px 14px',
              borderRadius: '8px',
              transition: 'all 150ms ease'
            }}
          >
            Sign In
          </a>
          <a
            href="#interactive-demo"
            onClick={(e) => handleLinkClick(e, '#interactive-demo')}
            className="btn btn-primary btn-sm"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '9px 18px',
              fontWeight: '600'
            }}
          >
            <span>Get Started Free</span>
            <ArrowRight size={15} />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="mobile-toggle"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              border: '1px solid #E2E8F0',
              background: '#FFFFFF',
              color: '#0F172A',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: '#FFFFFF',
            borderBottom: '1px solid #E2E8F0',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
            padding: '20px 24px 28px'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#1E293B',
                  padding: '8px 0',
                  borderBottom: '1px solid #F1F5F9'
                }}
              >
                {link.label}
              </a>
            ))}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px' }}>
              <a
                href="#pricing"
                onClick={(e) => handleLinkClick(e, '#pricing')}
                className="btn btn-secondary"
                style={{ width: '100%' }}
              >
                Sign In
              </a>
              <a
                href="#interactive-demo"
                onClick={(e) => handleLinkClick(e, '#interactive-demo')}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                Get Started Free
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Embedded CSS for responsive breakpoint behavior */}
      <style>{`
        @media (min-width: 860px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        @media (max-width: 859px) {
          .desktop-signin {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
