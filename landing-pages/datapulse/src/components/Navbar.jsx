import React, { useState, useEffect } from 'react';
import { Menu, X, Activity } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Platform', 'Insights', 'Integrations', 'Resources', 'Pricing'];

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      background: isScrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
      transition: 'all 0.3s ease',
      padding: '1rem 0'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Logo */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontSize: '1.25rem',
            fontFamily: 'var(--font-heading)',
            fontWeight: 700
          }}>
            <Activity size={28} color="var(--color-primary)" />
            <span>DataPulse</span>
          </div>

          {/* Desktop Navigation */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem'
          }} className="desktop-nav">
            {navLinks.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                style={{
                  color: 'var(--color-text-secondary)',
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--color-text-primary)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }} className="desktop-nav">
            <button className="btn-ghost">Log in</button>
            <button className="btn btn-primary">Start Free</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            style={{
              display: 'none',
              color: 'var(--color-text-primary)'
            }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu" style={{
            display: 'none',
            flexDirection: 'column',
            gap: '1rem',
            marginTop: '1.5rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            {navLinks.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                style={{
                  color: 'var(--color-text-primary)',
                  fontSize: '1rem',
                  fontWeight: 500,
                  padding: '0.5rem 0'
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <button className="btn-ghost" style={{ justifyContent: 'flex-start' }}>
              Log in
            </button>
            <button className="btn btn-primary" style={{ justifyContent: 'center' }}>
              Start Free
            </button>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .mobile-menu {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
}
