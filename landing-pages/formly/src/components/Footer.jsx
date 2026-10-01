import React from 'react';
import { Twitter, Github, Linkedin, MessageSquare, ArrowUpRight, Heart } from 'lucide-react';
import Logo from './Logo.jsx';

export default function Footer({ onOpenDemo }) {
  const footerLinks = {
    Product: [
      { label: 'Builder Canvas', href: '#showcase' },
      { label: 'Form Templates', href: '#templates' },
      { label: 'Conditional Logic', href: '#logic' },
      { label: 'Telemetry & Analytics', href: '#analytics' },
      { label: 'Integrations Hub', href: '#integrations' },
      { label: 'Pricing Plans', href: '#pricing' }
    ],
    Resources: [
      { label: 'Documentation', href: '#' },
      { label: 'Help Center & Guides', href: '#' },
      { label: 'Community Templates', href: '#templates' },
      { label: 'Product Changelog', href: '#' },
      { label: 'Form Optimization Blog', href: '#' },
      { label: 'API Reference', href: '#' }
    ],
    Company: [
      { label: 'About Formly', href: '#' },
      { label: 'Careers (We\'re Hiring!)', href: '#' },
      { label: 'Customer Stories', href: '#testimonials' },
      { label: 'Contact Us', href: '#' },
      { label: 'Press Kit', href: '#' }
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Security & Encryption', href: '#' },
      { label: 'GDPR / CCPA Compliance', href: '#' },
      { label: 'Cookie Preferences', href: '#' }
    ]
  };

  const handleLinkClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      e.preventDefault();
      onOpenDemo && onOpenDemo('info');
    }
  };

  return (
    <footer
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid var(--color-border)',
        paddingTop: '80px',
        paddingBottom: '40px',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '48px',
            marginBottom: '64px'
          }}
        >
          {/* Brand Info */}
          <div style={{ maxWidth: '320px', gridColumn: 'span 2' }} className="footer-brand-col">
            <Logo size="md" />
            <p
              style={{
                fontSize: '1rem',
                color: '#64748B',
                marginTop: '16px',
                marginBottom: '24px',
                lineHeight: 1.6
              }}
            >
              Build beautiful forms. Without writing code. Formly brings intuitive drag-and-drop design, smart logic branching, and effortless data workflows to modern product teams.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <a
                href="#"
                aria-label="Twitter"
                onClick={(e) => { e.preventDefault(); onOpenDemo && onOpenDemo('social'); }}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#475569',
                  transition: 'all 150ms ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#6366F1';
                  e.currentTarget.style.borderColor = '#6366F1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#475569';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                }}
              >
                <Twitter size={18} />
              </a>

              <a
                href="#"
                aria-label="GitHub"
                onClick={(e) => { e.preventDefault(); onOpenDemo && onOpenDemo('social'); }}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#475569',
                  transition: 'all 150ms ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#0F172A';
                  e.currentTarget.style.borderColor = '#0F172A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#475569';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                }}
              >
                <Github size={18} />
              </a>

              <a
                href="#"
                aria-label="Discord"
                onClick={(e) => { e.preventDefault(); onOpenDemo && onOpenDemo('social'); }}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#475569',
                  transition: 'all 150ms ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#5865F2';
                  e.currentTarget.style.borderColor = '#5865F2';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#475569';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                }}
              >
                <MessageSquare size={18} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                onClick={(e) => { e.preventDefault(); onOpenDemo && onOpenDemo('social'); }}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#475569',
                  transition: 'all 150ms ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#0A66C2';
                  e.currentTarget.style.borderColor = '#0A66C2';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#475569';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                }}
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                style={{
                  fontSize: '0.9375rem',
                  fontWeight: 700,
                  color: '#0F172A',
                  marginBottom: '18px',
                  letterSpacing: '0.01em'
                }}
              >
                {category}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      style={{
                        fontSize: '0.9rem',
                        color: '#64748B',
                        transition: 'color 150ms ease',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#4F46E5')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#64748B')}
                    >
                      <span>{link.label}</span>
                      {link.href.startsWith('http') && <ArrowUpRight size={12} />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '32px',
            borderTop: '1px solid #F1F5F9',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '0.875rem',
            color: '#94A3B8'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>© {new Date().getFullYear()} Formly Technologies, Inc. All rights reserved.</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#10B981', fontWeight: 500 }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981' }}></span>
              All systems operational (99.99%)
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-brand-col {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </footer>
  );
}
