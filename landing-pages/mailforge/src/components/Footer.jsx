import React from 'react';
import { Sparkles, Twitter, Linkedin, Github, Disc as Discord, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

export const Footer = () => {
  const footerLinks = {
    product: [
      { label: 'Features', href: '#features' },
      { label: 'AI Campaigns', href: '#ai-generation' },
      { label: 'Email Builder', href: '#email-builder' },
      { label: 'Analytics', href: '#analytics' },
      { label: 'A/B Testing', href: '#ab-testing' }
    ],
    solutions: [
      { label: 'Startups & Scaleups', href: '#solutions' },
      { label: 'Marketing Teams', href: '#solutions' },
      { label: 'Agencies & Creators', href: '#solutions' },
      { label: 'E-commerce Brands', href: '#solutions' }
    ],
    resources: [
      { label: 'Lifecycle Blog', href: '#resources' },
      { label: 'Email Playbooks', href: '#resources' },
      { label: 'Help Center', href: '#faq' },
      { label: 'API & Documentation', href: '#resources' }
    ],
    company: [
      { label: 'About Us', href: '#company' },
      { label: 'Careers', href: '#company' },
      { label: 'Contact', href: '#company' },
      { label: 'Privacy Policy', href: '#company' }
    ]
  };

  return (
    <footer
      style={{
        backgroundColor: '#090D16',
        color: '#F8FAFC',
        paddingTop: '80px',
        paddingBottom: '40px',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle background ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '-150px',
          left: '20%',
          width: '500px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, rgba(124, 58, 237, 0.06) 50%, transparent 80%)',
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Top Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            marginBottom: '64px'
          }}
        >
          {/* Brand Column */}
          <div style={{ maxWidth: '320px', gridColumn: 'span 2' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
                  border: '1px solid rgba(37, 99, 235, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="5" width="20" height="14" rx="3" stroke="#93C5FD" strokeWidth="1.75" />
                  <path d="M3 6.5L12 13L21 6.5" stroke="#60A5FA" strokeWidth="1.75" strokeLinecap="round" />
                </svg>
                <Sparkles
                  size={12}
                  style={{
                    position: 'absolute',
                    top: '-4px',
                    right: '-4px',
                    color: '#EC4899'
                  }}
                />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: '1.35rem',
                  letterSpacing: '-0.03em',
                  color: '#FFFFFF'
                }}
              >
                Mail<span className="gradient-text">Forge</span>
              </span>
            </div>

            <p style={{ color: '#94A3B8', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '24px' }}>
              Create emails that actually get opened. MailForge combines intelligent campaign generation, visual email design, predictive segmentation, and live telemetry into one unified workspace.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {[
                { icon: Twitter, href: 'https://twitter.com', label: 'Twitter / X' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Github, href: 'https://github.com', label: 'GitHub' },
                { icon: Discord, href: 'https://discord.com', label: 'Discord' }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#CBD5E1',
                      transition: 'all 150ms ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(37, 99, 235, 0.2)';
                      e.currentTarget.style.color = '#38BDF8';
                      e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.4)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.color = '#CBD5E1';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4
              style={{
                fontSize: '0.875rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#FFFFFF',
                marginBottom: '18px'
              }}
            >
              Product
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {footerLinks.product.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    style={{
                      color: '#94A3B8',
                      fontSize: '0.875rem',
                      transition: 'color 150ms ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4
              style={{
                fontSize: '0.875rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#FFFFFF',
                marginBottom: '18px'
              }}
            >
              Solutions
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {footerLinks.solutions.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    style={{
                      color: '#94A3B8',
                      fontSize: '0.875rem',
                      transition: 'color 150ms ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4
              style={{
                fontSize: '0.875rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#FFFFFF',
                marginBottom: '18px'
              }}
            >
              Resources
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {footerLinks.resources.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    style={{
                      color: '#94A3B8',
                      fontSize: '0.875rem',
                      transition: 'color 150ms ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              style={{
                fontSize: '0.875rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#FFFFFF',
                marginBottom: '18px'
              }}
            >
              Company
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    style={{
                      color: '#94A3B8',
                      fontSize: '0.875rem',
                      transition: 'color 150ms ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '32px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '0.8125rem',
            color: '#64748B'
          }}
        >
          <div>
            © 2026 MailForge. All rights reserved. Built for modern high-growth marketing teams.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: '#10B981' }}>
              <ShieldCheck size={14} /> SOC2 Type II & GDPR Compliant
            </span>
            <span>•</span>
            <span>99.98% Uptime SLA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
