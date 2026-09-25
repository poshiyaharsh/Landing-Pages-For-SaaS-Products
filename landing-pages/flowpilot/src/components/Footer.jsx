import React, { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setIsSubscribed(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.85 }
    });
  };

  return (
    <footer
      style={{
        backgroundColor: '#04070D',
        borderTop: '1px solid rgba(56, 189, 248, 0.12)',
        paddingTop: 'var(--space-4xl)',
        paddingBottom: 'var(--space-2xl)',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div className="container">
        {/* Top Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 'var(--space-2xl)',
            marginBottom: 'var(--space-3xl)'
          }}
        >
          {/* Brand Info */}
          <div style={{ maxWidth: '320px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #0284C7 0%, #38BDF8 50%, #6366F1 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF'
                }}
              >
                <Sparkles size={18} />
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700, color: '#FFFFFF' }}>
                Flow<span style={{ color: 'var(--color-primary)' }}>Pilot</span>
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px' }}>
              Autonomous project planning and workflow intelligence for modern engineering and product teams.
            </p>
            {/* System Status Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 12px',
                borderRadius: '9999px',
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: '#34D399'
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#10B981',
                  boxShadow: '0 0 8px #10B981'
                }}
              />
              <span>Systems Normal • 99.99% Uptime</span>
            </div>
          </div>

          {/* Links Column 1: Product */}
          <div>
            <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-primary-light)', marginBottom: '16px', fontFamily: 'var(--font-mono)' }}>
              Platform
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['AI Sprint Decomposition', 'Dynamic Critical Path', 'Git-Native Two-Way Sync', 'Monte Carlo Risk Engine', 'Executive Standups'].map((item) => (
                <li key={item}>
                  <a href="#features" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 150ms ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2: Solutions */}
          <div>
            <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-primary-light)', marginBottom: '16px', fontFamily: 'var(--font-mono)' }}>
              Integrations
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['GitHub / GitLab', 'Jira Software & Linear', 'Slack Standup Bot', 'Figma Product Specs', 'Datadog & Sentry', 'REST & GraphQL API'].map((item) => (
                <li key={item}>
                  <a href="#demo" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 150ms ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 3: Newsletter */}
          <div>
            <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-primary-light)', marginBottom: '16px', fontFamily: 'var(--font-mono)' }}>
              Engineering Dispatch
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '14px', lineHeight: 1.5 }}>
              Bi-weekly engineering memos on predictive planning, agentic workflows, and developer velocity.
            </p>
            {isSubscribed ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#34D399', fontSize: '0.875rem' }}>
                <CheckCircle2 size={18} />
                <span>You're on the list! Welcome aboard.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="engineer@company.com"
                  required
                  style={{
                    flex: 1,
                    padding: '10px 14px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(56, 189, 248, 0.2)',
                    color: '#FFFFFF',
                    fontSize: '0.85rem',
                    outline: 'none'
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: '10px 14px',
                    borderRadius: '8px',
                    background: 'var(--color-primary)',
                    color: '#060913',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  aria-label="Subscribe to newsletter"
                >
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-disabled)', fontSize: '0.75rem', marginTop: '12px' }}>
              <ShieldCheck size={14} />
              <span>SOC2 Type II certified. Zero spam policy.</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: 'var(--space-lg)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            color: 'var(--text-disabled)',
            fontSize: '0.85rem'
          }}
        >
          <div>
            © {new Date().getFullYear()} FlowPilot Technologies Inc. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" style={{ color: 'var(--text-muted)' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'var(--text-muted)' }}>Security Architecture</a>
            <a href="#" style={{ color: 'var(--text-muted)' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
