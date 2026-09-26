import React from 'react';
import { ArrowRight, Sparkles, Shield, CheckCircle } from 'lucide-react';

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
        padding: '100px 0',
        backgroundColor: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        {/* Floating Glow Card */}
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            borderRadius: '32px',
            background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #0F172A 100%)',
            padding: '72px 40px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            boxShadow: '0 30px 80px -15px rgba(15, 23, 42, 0.4), 0 0 60px -10px rgba(99, 102, 241, 0.3)'
          }}
        >
          {/* Animated decorative waveform & particles */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '800px',
              height: '400px',
              background: 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.2) 0%, transparent 70%)',
              filter: 'blur(50px)',
              pointerEvents: 'none'
            }}
          />

          {/* Waveform graphic overlay in background */}
          <div
            style={{
              position: 'absolute',
              bottom: '10px',
              left: 0,
              right: 0,
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              gap: '6px',
              opacity: 0.12,
              height: '100px',
              pointerEvents: 'none'
            }}
          >
            {[18, 36, 60, 42, 85, 45, 92, 60, 30, 75, 40, 95, 55, 30, 80, 48, 65, 32, 50, 70, 40, 20].map((h, i) => (
              <span
                key={i}
                style={{
                  width: '6px',
                  height: `${h}%`,
                  background: '#818CF8',
                  borderRadius: '3px'
                }}
              />
            ))}
          </div>

          <div style={{ position: 'relative', zIndex: 2, maxWidth: '720px', margin: '0 auto' }}>
            {/* Tag */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: '9999px',
                background: 'rgba(139, 92, 246, 0.2)',
                border: '1px solid rgba(139, 92, 246, 0.35)',
                color: '#DDD6FE',
                fontSize: '0.8125rem',
                fontWeight: '600',
                marginBottom: '24px'
              }}
            >
              <Sparkles size={14} className="pulse-ai" />
              <span>Ready in 2 minutes · No credit card required</span>
            </div>

            {/* Headline */}
            <h2
              style={{
                fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
                fontWeight: '800',
                lineHeight: 1.15,
                color: '#FFFFFF',
                letterSpacing: '-0.03em',
                marginBottom: '20px'
              }}
            >
              Make every meeting count.
            </h2>

            {/* Description */}
            <p
              style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                lineHeight: 1.6,
                color: '#CBD5E1',
                marginBottom: '36px'
              }}
            >
              Stop losing important ideas between meetings. Let Meetly remember the conversation so your team can focus on what happens next.
            </p>

            {/* Buttons */}
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
                className="btn btn-ai btn-lg"
                style={{ fontWeight: '700' }}
              >
                <span>Start for Free</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="#interactive-demo"
                onClick={(e) => handleScrollTo(e, 'interactive-demo')}
                className="btn btn-dark btn-lg"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  background: 'rgba(255, 255, 255, 0.08)'
                }}
              >
                <span>Explore Meetly</span>
              </a>
            </div>

            {/* Guarantee metrics */}
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
                <CheckCircle size={15} color="#34D399" /> Free 5 meetings/mo forever
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Shield size={15} color="#38BDF8" /> SOC2 & GDPR Compliant
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle size={15} color="#34D399" /> One-click calendar connect
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
