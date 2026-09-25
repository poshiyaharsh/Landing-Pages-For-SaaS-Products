import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../data/flowpilotData';
import { Button } from './Button';
import { ArrowRight, Menu, X, Sparkles } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 250ms ease',
        backgroundColor: isScrolled ? 'rgba(6, 9, 19, 0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(56, 189, 248, 0.12)' : '1px solid transparent',
        padding: isScrolled ? '14px 0' : '22px 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #0284C7 0%, #38BDF8 50%, #6366F1 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(56, 189, 248, 0.4)',
              color: '#060913',
              fontWeight: 800,
              fontSize: '18px'
            }}
          >
            <Sparkles size={20} color="#FFFFFF" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.02em', color: '#FFFFFF' }}>
              Flow<span style={{ color: 'var(--color-primary)' }}>Pilot</span>
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                padding: '2px 6px',
                borderRadius: '4px',
                background: 'rgba(56, 189, 248, 0.12)',
                color: 'var(--color-primary-light)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                fontWeight: 600
              }}
            >
              AI 2.0
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
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.925rem',
                fontWeight: 500,
                transition: 'color 150ms ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div style={{ display: 'none', alignItems: 'center', gap: '14px' }} className="desktop-actions">
          <Button variant="outline" size="sm" href="#pricing">
            Sign In
          </Button>
          <Button variant="primary" size="sm" icon={ArrowRight} href="#demo">
            Launch Pilot
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            padding: '8px',
            borderRadius: '8px',
            background: 'rgba(255, 255, 255, 0.05)'
          }}
          className="mobile-toggle"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'rgba(10, 15, 29, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(56, 189, 248, 0.2)',
            padding: '24px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                color: 'var(--text-primary)',
                fontSize: '1.05rem',
                fontWeight: 500,
                padding: '8px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
              }}
            >
              {link.name}
            </a>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px' }}>
            <Button variant="outline" href="#pricing" onClick={() => setIsMobileMenuOpen(false)}>
              Sign In
            </Button>
            <Button variant="primary" icon={ArrowRight} href="#demo" onClick={() => setIsMobileMenuOpen(false)}>
              Launch Pilot
            </Button>
          </div>
        </div>
      )}

      {/* Responsive Inline CSS helper for Navbar */}
      <style>{`
        @media (min-width: 820px) {
          .desktop-nav { display: flex !important; }
          .desktop-actions { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
};
