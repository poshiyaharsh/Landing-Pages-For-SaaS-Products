import React, { useState } from 'react';
import { PRICING_TIERS } from '../data/flowpilotData';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { Check, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const handleCtaClick = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 }
    });
  };

  return (
    <section id="pricing" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-pulse" />
            <span>TRANSPARENT PRICING</span>
          </div>
          <h2 className="section-title">
            Simple Plans for Teams of <br />
            <span className="text-gradient">Every Scale</span>
          </h2>
          <p className="section-desc">
            All plans include a 14-day free trial. No credit card required to explore.
          </p>

          {/* Billing Interval Switcher */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '6px',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              marginTop: 'var(--space-lg)'
            }}
          >
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              style={{
                padding: '8px 18px',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: !isAnnual ? '#FFFFFF' : 'var(--text-muted)',
                backgroundColor: !isAnnual ? 'rgba(56, 189, 248, 0.25)' : 'transparent',
                transition: 'all 200ms ease'
              }}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              style={{
                padding: '8px 18px',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: isAnnual ? '#FFFFFF' : 'var(--text-muted)',
                backgroundColor: isAnnual ? 'rgba(56, 189, 248, 0.25)' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 200ms ease'
              }}
            >
              <span>Annual Billing</span>
              <span
                style={{
                  fontSize: '0.7rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#34D399',
                  background: 'rgba(16, 185, 129, 0.15)',
                  padding: '2px 6px',
                  borderRadius: '4px'
                }}
              >
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: 'var(--space-xl)',
            alignItems: 'stretch'
          }}
        >
          {PRICING_TIERS.map((tier, idx) => {
            const price = isAnnual ? tier.priceYearly : tier.priceMonthly;

            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: 'var(--space-2xl) var(--space-xl)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  border: tier.isPopular
                    ? '2px solid rgba(56, 189, 248, 0.6)'
                    : '1px solid rgba(56, 189, 248, 0.14)',
                  boxShadow: tier.isPopular
                    ? '0 0 30px rgba(56, 189, 248, 0.2), inset 0 1px 1px rgba(255,255,255,0.2)'
                    : 'none',
                  backgroundColor: tier.isPopular ? 'rgba(12, 20, 42, 0.9)' : 'rgba(10, 16, 32, 0.7)'
                }}
              >
                {/* Popular Badge */}
                {tier.badge && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px'
                    }}
                  >
                    <Badge variant={tier.isPopular ? 'cyan' : 'indigo'} hasPulse={tier.isPopular}>
                      {tier.badge}
                    </Badge>
                  </div>
                )}

                <div>
                  <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '8px' }}>
                    {tier.name}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px', minHeight: '44px' }}>
                    {tier.description}
                  </p>

                  {/* Price */}
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '24px' }}>
                    <span style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>$</span>
                    <span
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '3rem',
                        fontWeight: 800,
                        color: '#FFFFFF'
                      }}
                    >
                      {price}
                    </span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>/ member / mo</span>
                  </div>

                  {/* Feature Checks */}
                  <ul
                    style={{
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                      marginBottom: 'var(--space-2xl)',
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                      paddingTop: '20px'
                    }}
                  >
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                        <Check size={16} color="#38BDF8" style={{ flexShrink: 0 }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button
                  variant={tier.ctaVariant}
                  size="md"
                  onClick={handleCtaClick}
                  style={{ width: '100%' }}
                >
                  {tier.ctaText}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
