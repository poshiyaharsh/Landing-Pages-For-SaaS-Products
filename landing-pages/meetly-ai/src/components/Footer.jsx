import React from 'react';
import { ArrowUp, Github, Twitter, Linkedin, MessageSquare, Sparkles } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#0B1120',
        color: '#94A3B8',
        paddingTop: '80px',
        paddingBottom: '40px',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '240px',
          background: 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none'
        }}
      />

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
                  background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '2px', height: '16px' }}>
                  <span style={{ width: '3px', height: '8px', background: '#6366F1', borderRadius: '2px' }} />
                  <span style={{ width: '3px', height: '14px', background: '#8B5CF6', borderRadius: '2px' }} />
                  <span style={{ width: '3px', height: '10px', background: '#38BDF8', borderRadius: '2px' }} />
                  <span style={{ width: '3px', height: '16px', background: '#6366F1', borderRadius: '2px' }} />
                  <span style={{ width: '3px', height: '6px', background: '#8B5CF6', borderRadius: '2px' }} />
                </div>
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: '800', letterSpacing: '-0.03em', color: '#F8FAFC' }}>
                Meetly <span style={{ color: '#818CF8' }}>AI</span>
              </span>
            </div>

            <p style={{ fontSize: '0.9375rem', lineHeight: '1.6', color: '#94A3B8', marginBottom: '24px' }}>
              Every meeting. Remembered. Organized. Actionable. Transforming conversations into structured knowledge and automated workflow execution.
            </p>

            {/* System Status Pill */}
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
                fontWeight: '500'
              }}
            >
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10B981' }} />
              All Systems Operational
            </div>
          </div>

          {/* Column 1: Product */}
          <div>
            <h4 style={{ color: '#F8FAFC', fontSize: '0.9375rem', fontWeight: '700', marginBottom: '20px', letterSpacing: '0.02em', textTransform: 'uppercase' }}>
              Product
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <li><a href="#features" style={{ color: '#94A3B8' }} onMouseEnter={(e) => e.currentTarget.style.color = '#F8FAFC'} onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}>Features</a></li>
              <li><a href="#hero-preview" style={{ color: '#94A3B8' }} onMouseEnter={(e) => e.currentTarget.style.color = '#F8FAFC'} onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}>Live Visualizer</a></li>
              <li><a href="#integrations" style={{ color: '#94A3B8' }} onMouseEnter={(e) => e.currentTarget.style.color = '#F8FAFC'} onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}>Integrations</a></li>
              <li><a href="#pricing" style={{ color: '#94A3B8' }} onMouseEnter={(e) => e.currentTarget.style.color = '#F8FAFC'} onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}>Pricing</a></li>
              <li>
                <a href="#features" style={{ color: '#94A3B8', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <span>Changelog</span>
                  <span style={{ fontSize: '0.7rem', padding: '1px 6px', borderRadius: '4px', background: 'rgba(99, 102, 241, 0.2)', color: '#A5B4FC' }}>v2.4</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 style={{ color: '#F8FAFC', fontSize: '0.9375rem', fontWeight: '700', marginBottom: '20px', letterSpacing: '0.02em', textTransform: 'uppercase' }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <li><a href="#problem" style={{ color: '#94A3B8' }} onMouseEnter={(e) => e.currentTarget.style.color = '#F8FAFC'} onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}>About Us</a></li>
              <li>
                <a href="#careers" style={{ color: '#94A3B8', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <span>Careers</span>
                  <span style={{ fontSize: '0.7rem', padding: '1px 6px', borderRadius: '4px', background: 'rgba(16, 185, 129, 0.2)', color: '#34D399' }}>We're hiring</span>
                </a>
              </li>
              <li><a href="#contact" style={{ color: '#94A3B8' }} onMouseEnter={(e) => e.currentTarget.style.color = '#F8FAFC'} onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}>Contact</a></li>
              <li><a href="#testimonials" style={{ color: '#94A3B8' }} onMouseEnter={(e) => e.currentTarget.style.color = '#F8FAFC'} onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}>Customer Stories</a></li>
              <li><a href="#press" style={{ color: '#94A3B8' }} onMouseEnter={(e) => e.currentTarget.style.color = '#F8FAFC'} onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}>Press Kit</a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 style={{ color: '#F8FAFC', fontSize: '0.9375rem', fontWeight: '700', marginBottom: '20px', letterSpacing: '0.02em', textTransform: 'uppercase' }}>
              Resources
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <li><a href="#docs" style={{ color: '#94A3B8' }} onMouseEnter={(e) => e.currentTarget.style.color = '#F8FAFC'} onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}>Documentation</a></li>
              <li><a href="#help" style={{ color: '#94A3B8' }} onMouseEnter={(e) => e.currentTarget.style.color = '#F8FAFC'} onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}>Help Center</a></li>
              <li><a href="#blog" style={{ color: '#94A3B8' }} onMouseEnter={(e) => e.currentTarget.style.color = '#F8FAFC'} onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}>Engineering Blog</a></li>
              <li><a href="#api" style={{ color: '#94A3B8' }} onMouseEnter={(e) => e.currentTarget.style.color = '#F8FAFC'} onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}>REST & Webhook API</a></li>
              <li><a href="#community" style={{ color: '#94A3B8' }} onMouseEnter={(e) => e.currentTarget.style.color = '#F8FAFC'} onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}>Community Forum</a></li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4 style={{ color: '#F8FAFC', fontSize: '0.9375rem', fontWeight: '700', marginBottom: '20px', letterSpacing: '0.02em', textTransform: 'uppercase' }}>
              Legal & Trust
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <li><a href="#privacy" style={{ color: '#94A3B8' }} onMouseEnter={(e) => e.currentTarget.style.color = '#F8FAFC'} onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}>Privacy Policy</a></li>
              <li><a href="#terms" style={{ color: '#94A3B8' }} onMouseEnter={(e) => e.currentTarget.style.color = '#F8FAFC'} onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}>Terms of Service</a></li>
              <li><a href="#security" style={{ color: '#94A3B8' }} onMouseEnter={(e) => e.currentTarget.style.color = '#F8FAFC'} onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}>Security & SOC2</a></li>
              <li><a href="#gdpr" style={{ color: '#94A3B8' }} onMouseEnter={(e) => e.currentTarget.style.color = '#F8FAFC'} onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}>GDPR & Compliance</a></li>
              <li><a href="#dpa" style={{ color: '#94A3B8' }} onMouseEnter={(e) => e.currentTarget.style.color = '#F8FAFC'} onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}>Data Processing (DPA)</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.08)', marginBottom: '32px' }} />

        {/* Bottom Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            fontSize: '0.875rem'
          }}
        >
          <div>
            © 2026 Meetly AI. All rights reserved. Built for high-velocity teams.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '0.8rem', color: '#64748B' }}>Frontend SaaS Concept Demo</span>
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
                e.currentTarget.style.background = 'rgba(99, 102, 241, 0.25)';
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
