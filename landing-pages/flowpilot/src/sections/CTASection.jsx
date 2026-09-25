import React, { useState } from 'react';
import { Button } from '../components/Button';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const CTASection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 80,
      origin: { y: 0.65 }
    });
  };

  return (
    <section className="section-padding" style={{ position: 'relative', zIndex: 1, paddingBottom: 'var(--space-5xl)' }}>
      <div className="container">
        <div
          className="glass-card"
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: 'clamp(32px, 6vw, 64px) clamp(20px, 5vw, 48px)',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(14, 22, 44, 0.95) 0%, rgba(10, 16, 32, 0.98) 100%)',
            border: '1px solid rgba(56, 189, 248, 0.35)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 40px rgba(56, 189, 248, 0.15)'
          }}
        >
          {/* Subtle Ambient Pulse Accent */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '9999px',
              background: 'rgba(56, 189, 248, 0.1)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              color: 'var(--color-primary)',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-mono)',
              marginBottom: 'var(--space-lg)'
            }}
          >
            <Sparkles size={14} />
            <span>DEPLOY IN UNDER 2 MINUTES</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.25rem)',
              lineHeight: 1.15,
              marginBottom: 'var(--space-md)'
            }}
          >
            Supercharge Your Sprint Cadence <br />
            <span className="text-gradient">with FlowPilot Today</span>
          </h2>

          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '1.1rem',
              maxWidth: '620px',
              margin: '0 auto var(--space-2xl)',
              lineHeight: 1.6
            }}
          >
            Join 45,000+ developers and engineering managers who have eliminated manual backlog grooming and late deliveries.
          </p>

          {/* Form / Success Feedback */}
          {submitted ? (
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px 28px',
                borderRadius: '12px',
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                color: '#34D399',
                fontWeight: 600,
                fontSize: '1.05rem'
              }}
            >
              <CheckCircle2 size={24} />
              <span>Workspace invited! Check your inbox to begin your trial.</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                maxWidth: '520px',
                margin: '0 auto var(--space-xl)',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                justifyContent: 'center'
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter work email (e.g. alex@company.com)"
                required
                style={{
                  flex: 1,
                  minWidth: '260px',
                  padding: '14px 18px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  color: '#FFFFFF',
                  fontSize: '0.95rem',
                  outline: 'none'
                }}
              />
              <Button type="submit" variant="primary" size="md" icon={ArrowRight}>
                Start Free Trial
              </Button>
            </form>
          )}

          {/* Security & Guarantee Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '20px',
              color: 'var(--text-disabled)',
              fontSize: '0.85rem'
            }}
          >
            <span>✓ 14-day free trial</span>
            <span>✓ No credit card required</span>
            <span>✓ Instant GitHub integration</span>
            <span>✓ SOC2 Type II compliant</span>
          </div>
        </div>
      </div>
    </section>
  );
};
