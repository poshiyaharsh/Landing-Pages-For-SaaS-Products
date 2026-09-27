import React from 'react';
import { ArrowUp, ShieldCheck } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#0B0F19',
        color: '#94A3B8',
        paddingTop: '80px',
        paddingBottom: '40px',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '48px',
            marginBottom: '64px'
          }}
        >
          {/* Brand Column */}
          <div style={{ maxWidth: '320px', gridColumn: 'span 1.5' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: '#1E293B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.15)'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4C4 2.89543 4.89543 2 6 2H14L20 8V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4Z" stroke="#94A3B8" strokeWidth="1.5" />
                  <path d="M9 13L15 19" stroke="#4F46E5" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M15 13L9 19" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: '800', letterSpacing: '-0.03em', color: '#F8FAFC', fontFamily: 'var(--font-heading)' }}>
                Invoice<span style={{ color: '#818CF8' }}>X</span>
              </span>
            </div>

            <p style={{ fontSize: '0.9375rem', lineHeight: '1.6', color: '#94A3B8', marginBottom: '20px' }}>
              Get paid faster. Manage smarter. Bringing invoicing, expenses, payments, clients, and revenue analytics into one unified workspace.
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 12px',
                borderRadius: '9999px',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                color: '#34D399',
                fontSize: '0.8125rem',
                fontWeight: '600'
              }}
            >
              <ShieldCheck size={14} />
              <span>256-Bit Bank Grade Encryption</span>
            </div>
          </div>

          {/* Column 1: Product */}
          <div>
            <h4 style={{ color: '#F8FAFC', fontSize: '0.9rem', fontWeight: '700', marginBottom: '20px', letterSpacing: '0.04em', textTransform: 'uppercase', fontFamily: 'var(--font-heading)' }}>
              Product
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <li><a href="#features" style={{ color: '#94A3B8' }} onMouseEnter={(e) => e.currentTarget.style.color = '#F8FAFC'} onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}>Features</a></li>
              <li><a href="#pricing" style={{ color: '#94A3B8' }} onMouseEnter={(e) => e.currentTarget.style.color = '#F8FAFC'} onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}>Pricing</a></li>
              <li><a href="#dashboard-preview" style={{ color: '#94A3B8' }} onMouseEnter={(e) => e.currentTarget.style.color = '#F8FAFC'} onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}>Dashboard</a></li>
              <li><a href="#analytics" style={{ color: '#94A3B8' }} onMouseEnter={(e) => e.currentTarget.style.color = '#F8FAFC'} onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}>Revenue Analytics</a></li>
              <li><a href="#features" style={{ color: '#94A3B8' }} onMouseEnter={(e) => e.currentTarget.style.color = '#F8FAFC'} onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}>Integrations</a></li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 style={{ color: '#F8FAFC', fontSize: '0.9rem', fontWeight: '700', marginBottom: '20px', letterSpacing: '0.04em', textTransform: 'uppercase', fontFamily: 'var(--font-heading)' }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <li><a href="#why-invoicex" style={{ color: '#94A3B8' }} onMouseEnter={(e) => e.currentTarget.style.color = '#F8FAFC'} onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}>About Us</a></li>
              <li>
                <a href="#careers" style={{ color: '#94A3B8', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <span>Careers</span>
                  <span style={{ fontSize: '0.7rem', padding: '1px 6px', borderRadius: '4px', background: 'rgba(16, 185, 129, 0.2)', color: '#34D399', fontWeight: '700' }}>Hiring</span>
                </a>
              </li>
              <li><a href="#testimonials" style={{ color: '#94A3B8' }} onMouseEnter={(e) => e.currentTarget.style.color = '#F8FAFC'} onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}>Customer Stories</a></li>
              <li><a href="#contact" style={{ color: '#94A3B8' }} onMouseEnter={(e) => e.currentTarget.style.color = '#F8FAFC'} onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}>Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 style={{ color: '#F8FAFC', fontSize: '0.9rem', fontWeight: '700', marginBottom: '20px', letterSpacing: '0.04em', textTransform: 'uppercase', fontFamily: 'var(--font-heading)' }}>
              Resources
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <li><a href="#faq" style={{ color: '#94A3B8' }} onMouseEnter={(e) => e.currentTarget.style.color = '#F8FAFC'} onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}>Help Center</a></li>
              <li><a href="#faq" style={{ color: '#94A3B8' }} onMouseEnter={(e) => e.currentTarget.style.color = '#F8FAFC'} onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}>Documentation</a></li>
              <li><a href="#blog" style={{ color: '#94A3B8' }} onMouseEnter={(e) => e.currentTarget.style.color = '#F8FAFC'} onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}>Fintech Blog</a></li>
              <li><a href="#guides" style={{ color: '#94A3B8' }} onMouseEnter={(e) => e.currentTarget.style.color = '#F8FAFC'} onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}>Invoice Guides</a></li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4 style={{ color: '#F8FAFC', fontSize: '0.9rem', fontWeight: '700', marginBottom: '20px', letterSpacing: '0.04em', textTransform: 'uppercase', fontFamily: 'var(--font-heading)' }}>
              Legal
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <li><a href="#privacy" style={{ color: '#94A3B8' }} onMouseEnter={(e) => e.currentTarget.style.color = '#F8FAFC'} onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}>Privacy Policy</a></li>
              <li><a href="#terms" style={{ color: '#94A3B8' }} onMouseEnter={(e) => e.currentTarget.style.color = '#F8FAFC'} onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}>Terms of Service</a></li>
              <li><a href="#security" style={{ color: '#94A3B8' }} onMouseEnter={(e) => e.currentTarget.style.color = '#F8FAFC'} onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}>Security Standards</a></li>
              <li><a href="#compliance" style={{ color: '#94A3B8' }} onMouseEnter={(e) => e.currentTarget.style.color = '#F8FAFC'} onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}>Tax Compliance</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.08)', marginBottom: '32px' }} />

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.875rem'
          }}
        >
          <div>
            © 2026 InvoiceX. Demo SaaS product. All financial data is for illustrative purposes.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '0.8rem', color: '#64748B' }}>Smart Invoicing Platform</span>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#CBD5E1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 150ms ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#4F46E5';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.color = '#CBD5E1';
              }}
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
