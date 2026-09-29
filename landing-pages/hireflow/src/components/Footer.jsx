import React from 'react';
import { Users, Linkedin, Twitter, Github, Heart } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    Product: [
      { name: 'AI Screening', href: '#features' },
      { name: 'Candidate Matching', href: '#features' },
      { name: 'Interview Scheduling', href: '#features' },
      { name: 'Candidate Pipeline', href: '#features' },
      { name: 'AI Insights', href: '#ai-intelligence' }
    ],
    Company: [
      { name: 'About', href: '#how-it-works' },
      { name: 'Careers', href: '#how-it-works' },
      { name: 'Contact', href: '#cta' },
      { name: 'Blog', href: '#analytics' }
    ],
    Resources: [
      { name: 'Help Center', href: '#faq' },
      { name: 'Documentation', href: '#faq' },
      { name: 'Recruiting Guide', href: '#faq' },
      { name: 'API', href: '#integrations' }
    ],
    Legal: [
      { name: 'Privacy', href: '#security' },
      { name: 'Terms', href: '#security' },
      { name: 'Security', href: '#security' },
      { name: 'Cookie Policy', href: '#security' }
    ]
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={{
      background: 'var(--color-white)',
      borderTop: '1px solid var(--color-border)',
      padding: '4.5rem 0 2.5rem'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.4fr) repeat(4, minmax(0, 1fr))',
          gap: '3rem',
          marginBottom: '3.5rem'
        }} className="footer-layout">
          
          {/* Brand Info */}
          <div style={{ maxWidth: '320px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.625rem',
              marginBottom: '1rem'
            }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
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
              <span style={{
                fontSize: '1.35rem',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: 'var(--color-text-primary)'
              }}>
                HireFlow
              </span>
            </div>

            <p style={{
              color: 'var(--color-text-secondary)',
              fontSize: '0.9375rem',
              lineHeight: 1.6,
              marginBottom: '1.5rem'
            }}>
              Intelligent hiring, beautifully organized.
            </p>

            {/* Social Icons */}
            <div style={{
              display: 'flex',
              gap: '0.625rem'
            }}>
              {[
                { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
                { icon: Twitter, label: 'X', href: 'https://x.com' },
                { icon: Github, label: 'GitHub', href: 'https://github.com' }
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'var(--color-background-soft)',
                      border: '1px solid var(--color-border-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-text-secondary)',
                      transition: 'all 0.15s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--color-primary)';
                      e.currentTarget.style.borderColor = 'var(--color-primary-light)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--color-text-secondary)';
                      e.currentTarget.style.borderColor = 'var(--color-border-light)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 style={{
                fontSize: '0.8125rem',
                fontWeight: 700,
                marginBottom: '1.25rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--color-text-primary)'
              }}>
                {category}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      style={{
                        color: 'var(--color-text-secondary)',
                        fontSize: '0.875rem',
                        transition: 'color 0.15s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.color = 'var(--color-primary)'}
                      onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid var(--color-border-light)',
          color: 'var(--color-text-muted)',
          fontSize: '0.8125rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            © 2026 HireFlow Technologies Inc. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span style={{ color: 'var(--color-text-secondary)' }}>System Status: 99.99% Uptime</span>
            <span style={{ color: 'var(--color-text-secondary)' }}>Privacy Shield Certified</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-layout {
            grid-template-columns: 1fr 1fr !important;
            gap: 2.5rem !important;
          }
        }
        @media (max-width: 540px) {
          .footer-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
