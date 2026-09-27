import React from 'react';
import { ArrowRight, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';

export const CTASection = () => {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      style={{
        padding: '96px 0',
        backgroundColor: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        {/* Glow Banner Card */}
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            borderRadius: '32px',
            background: 'linear-gradient(135deg, #0B0F19 0%, #1E1B4B 50%, #0F172A 100%)',
            padding: '72px 40px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid rgba(79, 70, 229, 0.3)',
            boxShadow: '0 30px 80px -15px rgba(11, 15, 25, 0.45), 0 0 60px -10px rgba(79, 70, 229, 0.3)'
          }}
        >
          {/* Subtle Ambient Radial Glow */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '800px',
              height: '400px',
              background: 'radial-gradient(ellipse at center, rgba(79, 70, 229, 0.25) 0%, transparent 70%)',
              filter: 'blur(50px)',
              pointerEvents: 'none'
            }}
          />

          {/* Decorative Fintech Grid in Background */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              opacity: 0.2,
              pointerEvents: 'none'
            }}
          />

          <div style={{ position: 'relative', zIndex: 2, maxWidth: '720px', margin: '0 auto' }}>
            {/* Tag */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: '9999px',
                background: 'rgba(79, 70, 229, 0.25)',
                border: '1px solid rgba(79, 70, 229, 0.45)',
                color: '#C7D2FE',
                fontSize: '0.8125rem',
                fontWeight: '700',
                marginBottom: '24px'
              }}
            >
              <Zap size={14} color="#A5B4FC" />
              <span>Get started in under 2 minutes · No setup fees</span>
            </div>

            {/* Headline */}
            <h2
              style={{
                fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
                fontWeight: '800',
                lineHeight: 1.15,
                color: '#FFFFFF',
                letterSpacing: '-0.035em',
                fontFamily: 'var(--font-heading)',
                marginBottom: '20px'
              }}
            >
              Stop chasing spreadsheets.
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #818CF8 0%, #34D399 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Start managing smarter.
              </span>
            </h2>

            {/* Description */}
            <p
              style={{
                fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
                lineHeight: 1.6,
                color: '#CBD5E1',
                marginBottom: '36px'
              }}
            >
              Bring your invoices, expenses, clients, and revenue into one simple workspace.
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                flexWrap: 'wrap',
                marginBottom: '28px'
              }}
            >
              <a
                href="#pricing"
                onClick={(e) => handleScrollTo(e, 'pricing')}
                className="btn btn-primary btn-lg"
                style={{ fontWeight: '700', boxShadow: '0 8px 24px -4px rgba(79, 70, 229, 0.5)' }}
              >
                <span>Start for free</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="#features"
                onClick={(e) => handleScrollTo(e, 'features')}
                className="btn btn-dark btn-lg"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  background: 'rgba(255, 255, 255, 0.08)',
                  fontWeight: '600'
                }}
              >
                <span>Explore features</span>
              </a>
            </div>

            {/* Guarantee Pills */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '24px',
                flexWrap: 'wrap',
                fontSize: '0.84rem',
                color: '#94A3B8'
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={15} color="#34D399" /> 10 Free Invoices/month
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={15} color="#818CF8" /> 256-Bit Bank-Level Encryption
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={15} color="#34D399" /> Instant PDF & CSV Exports
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
