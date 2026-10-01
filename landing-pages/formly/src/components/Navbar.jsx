import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import Logo from './Logo.jsx';
import Button from './Button.jsx';

export default function Navbar({ onOpenDemo }) {
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
    { label: 'Features', href: '#features' },
    { label: 'Builder', href: '#showcase' },
    { label: 'Templates', href: '#templates' },
    { label: 'Logic', href: '#logic' },
    { label: 'Analytics', href: '#analytics' },
    { label: 'Integrations', href: '#integrations' },
    { label: 'Pricing', href: '#pricing' }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 90,
          transition: 'all 250ms ease',
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.88)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(226, 232, 240, 0.8)' : '1px solid transparent',
          boxShadow: isScrolled ? '0 4px 20px -2px rgba(15, 23, 42, 0.05)' : 'none',
          paddingTop: isScrolled ? '12px' : '20px',
          paddingBottom: isScrolled ? '12px' : '20px'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
            <Logo size="md" />
          </a>

          {/* Desktop Nav Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '28px',
              '@media (min-width: 900px)': { display: 'flex' }
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
                  fontWeight: 500,
                  color: '#475569',
                  transition: 'color 150ms ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#4F46E5')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '12px'
            }}
            className="desktop-actions"
          >
            <button
              onClick={() => onOpenDemo && onOpenDemo('signin')}
              style={{
                fontSize: '0.9375rem',
                fontWeight: 600,
                color: '#334155',
                padding: '8px 16px',
                cursor: 'pointer',
                transition: 'color 150ms ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0F172A')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#334155')}
            >
              Sign In
            </button>
            <Button
              variant="primary"
              size="sm"
              iconRight={ArrowRight}
              onClick={() => onOpenDemo && onOpenDemo('builder')}
            >
              Start Building Free
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E2E8F0',
              color: '#0F172A',
              cursor: 'pointer'
            }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '70px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.4)',
            backdropFilter: 'blur(8px)',
            zIndex: 89,
            display: 'flex',
            flexDirection: 'column'
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderBottomLeftRadius: '24px',
              borderBottomRightRadius: '24px',
              padding: '24px',
              boxShadow: '0 20px 30px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  color: '#1E293B',
                  padding: '10px 0',
                  borderBottom: '1px solid #F1F5F9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span>{link.label}</span>
                <ArrowRight size={16} color="#94A3B8" />
              </a>
            ))}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px' }}>
              <Button
                variant="secondary"
                size="md"
                fullWidth
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo && onOpenDemo('signin');
                }}
              >
                Sign In
              </Button>
              <Button
                variant="primary"
                size="md"
                fullWidth
                iconRight={Sparkles}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo && onOpenDemo('builder');
                }}
              >
                Start Building Free
              </Button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .desktop-actions { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </>
  );
}
