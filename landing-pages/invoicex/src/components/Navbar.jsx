import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';

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
    { label: 'Product', href: '#dashboard-preview' },
    { label: 'Features', href: '#features' },
    { label: 'Analytics', href: '#analytics' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Resources', href: '#faq' }
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
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 250ms ease',
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.92)' : 'rgba(248, 250, 252, 0.8)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: isScrolled ? '1px solid #E2E8F0' : '1px solid transparent',
        boxShadow: isScrolled ? '0 4px 20px rgba(15, 23, 42, 0.04)' : 'none'
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
          aria-label="InvoiceX Homepage"
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: '#0B0F19',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: '0 4px 12px rgba(11, 15, 25, 0.2)'
            }}
          >
            {/* SVG Logo mark: Invoice with stylized X */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M4 4C4 2.89543 4.89543 2 6 2H14L20 8V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4Z" stroke="#94A3B8" strokeWidth="1.5" />
              <path d="M14 2V8H20" stroke="#94A3B8" strokeWidth="1.5" />
              <path d="M9 13L15 19" stroke="#4F46E5" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M15 13L9 19" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
            <span style={{ fontSize: '1.3rem', fontWeight: '800', letterSpacing: '-0.035em', color: '#0F172A', fontFamily: 'var(--font-heading)' }}>
              Invoice<span style={{ color: '#4F46E5' }}>X</span>
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
                fontWeight: '600',
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

        {/* Right Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <a
            href="#pricing"
            onClick={(e) => handleLinkClick(e, '#pricing')}
            className="desktop-login"
            style={{
              fontSize: '0.9375rem',
              fontWeight: '600',
              color: '#334155',
              padding: '8px 14px',
              borderRadius: '8px',
              transition: 'all 150ms ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#0F172A')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#334155')}
          >
            Log in
          </a>

          <a
            href="#pricing"
            onClick={(e) => handleLinkClick(e, '#pricing')}
            className="btn btn-primary btn-sm"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '9px 18px',
              fontWeight: '700'
            }}
          >
            <span>Get Started</span>
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
                  borderBottom: '1px solid #F1F5F9',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span>{link.label}</span>
                <ChevronRight size={16} color="#94A3B8" />
              </a>
            ))}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px' }}>
              <a
                href="#pricing"
                onClick={(e) => handleLinkClick(e, '#pricing')}
                className="btn btn-secondary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Log in
              </a>
              <a
                href="#pricing"
                onClick={(e) => handleLinkClick(e, '#pricing')}
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Get Started
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
          .desktop-login {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
