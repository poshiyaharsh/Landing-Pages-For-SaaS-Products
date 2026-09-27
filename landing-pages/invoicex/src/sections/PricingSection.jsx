import React, { useState } from 'react';
import { PRICING_TIERS } from '../data/mockData';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const handleCtaClick = (tierName) => {
    confetti({
      particleCount: 28,
      spread: 45,
      origin: { y: 0.65 },
      colors: ['#4F46E5', '#10B981', '#2563EB']
    });
  };

  return (
    <section id="pricing" className="section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mx-auto" style={{ maxWidth: '800px', marginBottom: '48px' }}>
          <div className="section-tag section-tag-emerald">
            <Sparkles size={14} />
            <span>Simple, Fair Pricing</span>
          </div>

          <h2 className="section-heading">
            Invest in your cashflow clarity.
          </h2>

          <p className="section-subheading mx-auto">
            Choose a plan that fits your business scale. No hidden transaction percentages or surprise surcharge fees.
          </p>

          {/* Monthly / Yearly Billing Toggle */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '6px 8px',
              borderRadius: '9999px',
              background: '#F1F5F9',
              border: '1px solid #E2E8F0',
              marginTop: '4px'
            }}
          >
            <button
              type="button"
              onClick={() => setIsYearly(false)}
              style={{
                padding: '6px 16px',
                borderRadius: '9999px',
                border: 'none',
                background: !isYearly ? '#FFFFFF' : 'transparent',
                color: !isYearly ? '#0F172A' : '#64748B',
                fontWeight: '700',
                fontSize: '0.84rem',
                cursor: 'pointer',
                boxShadow: !isYearly ? '0 2px 6px rgba(0,0,0,0.06)' : 'none',
                transition: 'all 150ms ease'
              }}
            >
              Monthly billing
            </button>

            <button
              type="button"
              onClick={() => setIsYearly(true)}
              style={{
                padding: '6px 16px',
                borderRadius: '9999px',
                border: 'none',
                background: isYearly ? '#4F46E5' : 'transparent',
                color: isYearly ? '#FFFFFF' : '#64748B',
                fontWeight: '700',
                fontSize: '0.84rem',
                cursor: 'pointer',
                boxShadow: isYearly ? '0 2px 8px rgba(79, 70, 229, 0.35)' : 'none',
                transition: 'all 150ms ease',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>Yearly billing</span>
              <span
                style={{
                  fontSize: '0.7rem',
                  fontWeight: '700',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  background: isYearly ? 'rgba(255, 255, 255, 0.25)' : '#DCFCE7',
                  color: isYearly ? '#FFFFFF' : '#15803D'
                }}
              >
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '32px',
            maxWidth: '1120px',
            margin: '0 auto 40px',
            alignItems: 'stretch'
          }}
        >
          {PRICING_TIERS.map((tier) => {
            const price = isYearly ? tier.priceYearly : tier.priceMonthly;

            return (
              <div
                key={tier.name}
                style={{
                  borderRadius: '24px',
                  padding: '40px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  background: tier.isPopular ? '#0B0F19' : '#FFFFFF',
                  color: tier.isPopular ? '#F8FAFC' : '#0F172A',
                  border: tier.isPopular ? '2px solid #4F46E5' : '1px solid #E2E8F0',
                  boxShadow: tier.isPopular ? '0 20px 50px -10px rgba(79, 70, 229, 0.35)' : 'var(--shadow-md)',
                  transform: tier.isPopular ? 'scale(1.02)' : 'scale(1)',
                  zIndex: tier.isPopular ? 2 : 1
                }}
              >
                {/* Popular Pill */}
                {tier.isPopular && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-14px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'linear-gradient(135deg, #4F46E5, #10B981)',
                      color: '#FFFFFF',
                      fontSize: '0.75rem',
                      fontWeight: '800',
                      letterSpacing: '0.04em',
                      padding: '4px 14px',
                      borderRadius: '9999px',
                      boxShadow: '0 4px 12px rgba(79, 70, 229, 0.4)'
                    }}
                  >
                    MOST POPULAR
                  </div>
                )}

                <div>
                  <span style={{ fontSize: '0.78rem', color: tier.isPopular ? '#818CF8' : '#4F46E5', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '8px' }}>
                    {tier.badge}
                  </span>

                  <h3 style={{ fontSize: '1.5rem', fontWeight: '800', fontFamily: 'var(--font-heading)', marginBottom: '8px' }}>
                    {tier.name}
                  </h3>

                  <p style={{ fontSize: '0.875rem', color: tier.isPopular ? '#94A3B8' : '#64748B', marginBottom: '24px', minHeight: '40px' }}>
                    {tier.description}
                  </p>

                  {/* Price */}
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '24px' }}>
                    <span style={{ fontSize: '3rem', fontWeight: '800', letterSpacing: '-0.03em', fontFamily: 'var(--font-heading)' }}>
                      ${price}
                    </span>
                    <span style={{ fontSize: '0.9rem', color: tier.isPopular ? '#94A3B8' : '#64748B' }}>
                      {price === 0 ? 'forever' : isYearly ? '/ month (billed annually)' : tier.period}
                    </span>
                  </div>

                  <div style={{ height: '1px', background: tier.isPopular ? 'rgba(255,255,255,0.1)' : '#E2E8F0', marginBottom: '24px' }} />

                  {/* Features List */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '36px' }}>
                    {tier.features.map((feature, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <div
                          style={{
                            width: '18px',
                            height: '18px',
                            borderRadius: '50%',
                            background: tier.isPopular ? 'rgba(16, 185, 129, 0.2)' : '#ECFDF5',
                            color: tier.isPopular ? '#34D399' : '#059669',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            marginTop: '2px'
                          }}
                        >
                          <Check size={12} />
                        </div>
                        <span style={{ fontSize: '0.875rem', color: tier.isPopular ? '#E2E8F0' : '#334155' }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  type="button"
                  onClick={() => handleCtaClick(tier.name)}
                  className={`btn ${tier.isPopular ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ width: '100%', fontWeight: '700' }}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Demo Disclaimer */}
        <p style={{ textAlign: 'center', fontSize: '0.78rem', color: '#94A3B8' }}>
          * Pricing displayed for demo and architecture preview purposes. No actual payment transactions occur.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
