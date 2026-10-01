import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Star, Sliders, Type, Check } from 'lucide-react';
import Button from '../components/Button.jsx';
import Badge from '../components/Badge.jsx';

export default function CtaSection({ onOpenDemo }) {
  return (
    <section
      style={{
        paddingTop: '80px',
        paddingBottom: '120px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ position: 'relative' }}>
        {/* Glow backdrop behind card */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(99, 102, 241, 0.22) 0%, rgba(236, 72, 153, 0.15) 50%, transparent 70%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />

        {/* Center Banner Box */}
        <div
          style={{
            backgroundColor: '#0F172A',
            color: '#FFFFFF',
            borderRadius: '32px',
            padding: '72px 40px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.35)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            zIndex: 1
          }}
        >
          {/* Subtle Grid overlay pattern in background */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              opacity: 0.4,
              pointerEvents: 'none'
            }}
          />

          {/* FLOATING UI FRAGMENT 1 (Top Left): Rating Card */}
          <div
            className="animate-float-slow floating-elem"
            style={{
              position: 'absolute',
              top: '40px',
              left: '40px',
              backgroundColor: 'rgba(30, 41, 59, 0.85)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '14px',
              padding: '10px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transform: 'rotate(-4deg)'
            }}
          >
            <div style={{ display: 'flex', gap: '3px', color: '#F59E0B' }}>
              <Star size={14} fill="#F59E0B" />
              <Star size={14} fill="#F59E0B" />
              <Star size={14} fill="#F59E0B" />
              <Star size={14} fill="#F59E0B" />
              <Star size={14} fill="#F59E0B" />
            </div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FFFFFF' }}>5.0 Rating</span>
          </div>

          {/* FLOATING UI FRAGMENT 2 (Bottom Right): Logic Branch */}
          <div
            className="animate-float-medium floating-elem"
            style={{
              position: 'absolute',
              bottom: '40px',
              right: '50px',
              backgroundColor: 'rgba(30, 41, 59, 0.85)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(236, 72, 153, 0.4)',
              borderRadius: '14px',
              padding: '10px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transform: 'rotate(3deg)'
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#EC4899' }}></span>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#F472B6' }}>
              Auto-Routing Active
            </span>
          </div>

          {/* Badge */}
          <div style={{ display: 'inline-flex', marginBottom: '20px' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: '#E2E8F0'
              }}
            >
              <Sparkles size={14} color="#38BDF8" />
              <span>Get started in under 3 minutes</span>
            </span>
          </div>

          {/* Headline */}
          <h2
            style={{
              fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              marginBottom: '20px',
              color: '#FFFFFF'
            }}
          >
            Your next great form <span className="gradient-text">starts here</span>.
          </h2>

          {/* Supporting Text */}
          <p
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
              color: '#94A3B8',
              lineHeight: 1.6,
              maxWidth: '680px',
              margin: '0 auto 36px auto'
            }}
          >
            Build, customize, publish, and understand your forms — all without writing code.
            Join thousands of teams crafting modern response flows.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              marginBottom: '28px'
            }}
          >
            <Button
              variant="primary"
              size="lg"
              iconRight={ArrowRight}
              onClick={() => onOpenDemo && onOpenDemo('builder')}
              style={{
                background: 'linear-gradient(135deg, #6366F1 0%, #A855F7 50%, #EC4899 100%)',
                boxShadow: '0 8px 24px rgba(99, 102, 241, 0.45)'
              }}
            >
              Start Building Free
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => {
                const target = document.querySelector('#templates');
                if (target) target.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#FFFFFF',
                borderColor: 'rgba(255, 255, 255, 0.2)'
              }}
            >
              Explore Templates
            </Button>
          </div>

          {/* Trust points */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '24px',
              fontSize: '0.8125rem',
              color: '#94A3B8'
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Check size={14} color="#10B981" /> No credit card required
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Check size={14} color="#10B981" /> Free plan forever
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Check size={14} color="#10B981" /> 1-Click embed on Webflow, Framer &amp; React
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
