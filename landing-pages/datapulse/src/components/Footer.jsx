import React from 'react';
import { Activity } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    Product: ['Platform', 'Dashboards', 'AI Insights', 'Reports', 'Integrations'],
    Company: ['About', 'Careers', 'Contact', 'Security'],
    Resources: ['Documentation', 'Blog', 'Help Center', 'API'],
    Legal: ['Privacy', 'Terms', 'Security']
  };

  return (
    <footer style={{
      background: 'var(--color-bg-panel)',
      borderTop: '1px solid var(--color-border)',
      padding: '4rem 0 2rem'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          {/* Brand */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1rem',
              fontSize: '1.25rem',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700
            }}>
              <Activity size={28} color="var(--color-primary)" />
              <span>DataPulse</span>
            </div>
            <p style={{
              color: 'var(--color-text-secondary)',
              fontSize: '0.875rem',
              lineHeight: 1.6
            }}>
              Your business. Every signal. One place.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                marginBottom: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--color-text-primary)'
              }}>
                {category}
              </h4>
              <ul style={{ listStyle: 'none' }}>
                {links.map(link => (
                  <li key={link} style={{ marginBottom: '0.75rem' }}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      style={{
                        color: 'var(--color-text-secondary)',
                        fontSize: '0.875rem',
                        transition: 'color 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.color = 'var(--color-text-primary)'}
                      onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid var(--color-border)',
          color: 'var(--color-text-secondary)',
          fontSize: '0.875rem',
          textAlign: 'center'
        }}>
          © 2026 DataPulse. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
