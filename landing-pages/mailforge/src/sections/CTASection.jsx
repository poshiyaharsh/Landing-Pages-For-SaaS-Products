import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export const CTASection = () => {
  const handleConfetti = (e) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    confetti({
      particleCount: 60,
      spread: 80,
      origin: { x, y },
      colors: ['#FFFFFF', '#38BDF8', '#F472B6', '#FBBF24']
    });
  };

  return (
    <section
      style={{
        paddingTop: '80px',
        paddingBottom: '80px',
        backgroundColor: '#FFFFFF',
        position: 'relative'
      }}
    >
      <div className="container">
        <div
          style={{
            position: 'relative',
            borderRadius: '28px',
            background: 'linear-gradient(135deg, #1E1B4B 0%, #2563EB 50%, #7C3AED 80%, #EC4899 100%)',
            padding: '72px 32px',
            textAlign: 'center',
            color: '#FFFFFF',
            boxShadow: '0 25px 50px -12px rgba(37, 99, 235, 0.35)',
            overflow: 'hidden'
          }}
        >
          {/* Animated decorative gradient shapes */}
          <div
            style={{
              position: 'absolute',
              top: '-100px',
              left: '-100px',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              backgroundColor: 'rgba(236, 72, 153, 0.35)',
              filter: 'blur(70px)',
              pointerEvents: 'none'
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-100px',
              right: '-100px',
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              backgroundColor: 'rgba(6, 182, 212, 0.3)',
              filter: 'blur(70px)',
              pointerEvents: 'none'
            }}
          />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '680px', margin: '0 auto' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: '#FFFFFF',
                fontSize: '0.8125rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '20px'
              }}
            >
              <Sparkles size={13} style={{ color: '#FDE047' }} /> Join 50,000+ Marketers
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                color: '#FFFFFF',
                marginBottom: '20px'
              }}
            >
              Your next great campaign starts here.
            </h2>

            <p
              style={{
                fontSize: 'clamp(1.0625rem, 2vw, 1.25rem)',
                lineHeight: 1.6,
                color: '#E0E7FF',
                marginBottom: '36px'
              }}
            >
              Stop staring at blank email templates. Start creating campaigns people want to open.
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                flexWrap: 'wrap',
                marginBottom: '24px'
              }}
            >
              <a
                href="#pricing"
                onClick={handleConfetti}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#FFFFFF',
                  color: '#0F172A',
                  fontWeight: 700,
                  fontSize: '1rem',
                  padding: '14px 30px',
                  borderRadius: '10px',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                  transition: 'all 200ms ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
                }}
              >
                Start Creating Free <ArrowRight size={18} />
              </a>

              <a
                href="#features"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  fontSize: '1rem',
                  padding: '14px 26px',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  transition: 'all 200ms ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.18)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Explore Features
              </a>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '20px',
                fontSize: '0.8125rem',
                color: '#C7D2FE',
                flexWrap: 'wrap'
              }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <CheckCircle2 size={14} style={{ color: '#86EFAC' }} /> 1,000 contacts free forever
              </span>
              <span>•</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <CheckCircle2 size={14} style={{ color: '#86EFAC' }} /> No credit card required
              </span>
              <span>•</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <CheckCircle2 size={14} style={{ color: '#86EFAC' }} /> 60-second setup
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
