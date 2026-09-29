import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Navbar({ onOpenDemo, onOpenAuth }) {
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
    { label: 'Product', href: '#features' },
    { label: 'Solutions', href: '#workflow' },
    { label: 'AI Matching', href: '#ai-intelligence' },
    { label: 'Analytics', href: '#analytics' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Resources', href: '#faq' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      role="banner"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.92)' : 'rgba(255, 255, 255, 0.75)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${isScrolled ? 'var(--color-border)' : 'rgba(226, 232, 240, 0.5)'}`,
        transition: 'all 0.25s ease',
        padding: isScrolled ? '0.75rem 0' : '1.125rem 0'
      }}
    >
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Logo */}
          <a
            href="#"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.625rem',
              textDecoration: 'none'
            }}
            aria-label="HireFlow Home"
          >
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '0.625rem',
              background: 'var(--gradient-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(124, 58, 237, 0.28)'
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="7" r="4"/>
                <path d="M5.5 21a6.5 6.5 0 0 1 13 0"/>
                <path d="m17 11 3 3-3 3" opacity="0.9"/>
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.35rem',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: 'var(--color-text-primary)'
              }}>
                HireFlow
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            role="navigation"
            aria-label="Main menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.75rem'
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  color: 'var(--color-text-secondary)',
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  transition: 'color 0.15s ease',
                  padding: '0.375rem 0.25rem',
                  position: 'relative'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--color-primary)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}
            className="desktop-nav"
          >
            <button
              onClick={() => onOpenAuth && onOpenAuth('Sign In')}
              className="btn-ghost"
              style={{
                fontSize: '0.9375rem',
                fontWeight: 600,
                color: 'var(--color-text-primary)'
              }}
            >
              Sign In
            </button>
            <button
              onClick={() => onOpenDemo ? onOpenDemo('Get Started') : null}
              className="btn btn-primary"
              style={{
                padding: '0.625rem 1.25rem',
                fontSize: '0.875rem'
              }}
            >
              Get Started
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            style={{
              display: 'none',
              padding: '0.5rem',
              color: 'var(--color-text-primary)',
              borderRadius: 'var(--radius-md)'
            }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {isMobileMenuOpen && (
          <div
            className="mobile-menu-container"
            style={{
              display: 'none',
              flexDirection: 'column',
              gap: '0.75rem',
              marginTop: '1rem',
              padding: '1.25rem',
              backgroundColor: 'var(--color-white)',
              borderRadius: 'var(--radius-xl)',
              boxShadow: 'var(--shadow-xl)',
              border: '1px solid var(--color-border)',
              animation: 'fadeIn 0.2s ease-out'
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  color: 'var(--color-text-primary)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  padding: '0.625rem 0.5rem',
                  borderRadius: 'var(--radius-md)',
                  transition: 'background-color 0.15s ease'
                }}
              >
                {link.label}
              </a>
            ))}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.625rem',
              paddingTop: '0.75rem',
              borderTop: '1px solid var(--color-border)',
              marginTop: '0.5rem'
            }}>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenAuth && onOpenAuth('Sign In');
                }}
                className="btn btn-secondary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenDemo && onOpenDemo('Get Started');
                }}
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Get Started
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 860px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
            align-items: center;
            justify-content: center;
          }
          .mobile-menu-container {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
