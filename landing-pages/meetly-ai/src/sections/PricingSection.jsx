import React, { useState } from 'react';
import { PRICING_PLANS } from '../data/mockData';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const handleCtaClick = (planName) => {
    confetti({
      particleCount: 30,
      spread: 40,
      origin: { y: 0.7 },
      colors: ['#6366F1', '#8B5CF6', '#10B981']
    });
  };

  return (
    <section id="pricing" className="section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mx-auto" style={{ maxWidth: '780px', marginBottom: '44px' }}>
          <div className="section-tag section-tag-ai">
            <Sparkles size={14} />
            <span>Transparent Pricing</span>
          </div>

          <h2 className="section-heading">
            Simple, predictable plans for every team.
          </h2>

          <p className="section-subheading mx-auto">
            Get started for free or upgrade as your organization scales meeting volume and automated workflows.
          </p>

          {/* Monthly / Annual Billing Toggle */}
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
              onClick={() => setIsAnnual(false)}
              style={{
                padding: '6px 16px',
                borderRadius: '9999px',
                border: 'none',
                background: !isAnnual ? '#FFFFFF' : 'transparent',
                color: !isAnnual ? '#0F172A' : '#64748B',
                fontWeight: '600',
                fontSize: '0.84rem',
                cursor: 'pointer',
                boxShadow: !isAnnual ? '0 2px 6px rgba(0,0,0,0.06)' : 'none',
                transition: 'all 150ms ease'
              }}
            >
              Monthly billing
            </button>

            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              style={{
                padding: '6px 16px',
                borderRadius: '9999px',
                border: 'none',
                background: isAnnual ? '#6366F1' : 'transparent',
                color: isAnnual ? '#FFFFFF' : '#64748B',
                fontWeight: '600',
                fontSize: '0.84rem',
                cursor: 'pointer',
                boxShadow: isAnnual ? '0 2px 8px rgba(99, 102, 241, 0.35)' : 'none',
                transition: 'all 150ms ease',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>Annual billing</span>
              <span
                style={{
                  fontSize: '0.7rem',
                  fontWeight: '700',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  background: isAnnual ? 'rgba(255, 255, 255, 0.25)' : '#DCFCE7',
                  color: isAnnual ? '#FFFFFF' : '#15803D'
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
          {PRICING_PLANS.map((plan) => {
            const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;

            return (
              <div
                key={plan.name}
                style={{
                  borderRadius: '24px',
                  padding: '40px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  background: plan.isPopular ? '#0F172A' : '#FFFFFF',
                  color: plan.isPopular ? '#F8FAFC' : '#0F172A',
                  border: plan.isPopular ? '2px solid #8B5CF6' : '1px solid #E2E8F0',
                  boxShadow: plan.isPopular ? '0 20px 50px -10px rgba(139, 92, 246, 0.35)' : 'var(--shadow-md)',
                  transform: plan.isPopular ? 'scale(1.03)' : 'scale(1)',
                  zIndex: plan.isPopular ? 2 : 1
                }}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-14px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'linear-gradient(135deg, #8B5CF6, #6366F1)',
                      color: '#FFFFFF',
                      fontSize: '0.75rem',
                      fontWeight: '800',
                      letterSpacing: '0.04em',
                      padding: '4px 14px',
                      borderRadius: '9999px',
                      boxShadow: '0 4px 12px rgba(139, 92, 246, 0.4)'
                    }}
                  >
                    MOST POPULAR
                  </div>
                )}

                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '8px' }}>
                    {plan.name}
                  </h3>

                  <p style={{ fontSize: '0.875rem', color: plan.isPopular ? '#94A3B8' : '#64748B', marginBottom: '24px', minHeight: '40px' }}>
                    {plan.description}
                  </p>

                  {/* Price display */}
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '28px' }}>
                    <span style={{ fontSize: '3rem', fontWeight: '800', letterSpacing: '-0.03em' }}>
                      ${price}
                    </span>
                    <span style={{ fontSize: '0.9rem', color: plan.isPopular ? '#94A3B8' : '#64748B' }}>
                      {price === 0 ? 'forever' : isAnnual ? '/ month (billed annually)' : plan.period}
                    </span>
                  </div>

                  {/* Features Divider */}
                  <div style={{ height: '1px', background: plan.isPopular ? 'rgba(255,255,255,0.1)' : '#E2E8F0', marginBottom: '24px' }} />

                  {/* Feature Checklist */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '36px' }}>
                    {plan.features.map((feature, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <div
                          style={{
                            width: '18px',
                            height: '18px',
                            borderRadius: '50%',
                            background: plan.isPopular ? 'rgba(139, 92, 246, 0.25)' : '#EEF2FF',
                            color: plan.isPopular ? '#C084FC' : '#4F46E5',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            marginTop: '2px'
                          }}
                        >
                          <Check size={12} />
                        </div>
                        <span style={{ fontSize: '0.875rem', color: plan.isPopular ? '#E2E8F0' : '#334155' }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  type="button"
                  onClick={() => handleCtaClick(plan.name)}
                  className={`btn ${plan.isPopular ? 'btn-ai' : 'btn-secondary'}`}
                  style={{ width: '100%', fontWeight: '700' }}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Demo Disclaimer notice */}
        <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#94A3B8' }}>
          Pricing shown for demonstration purposes. No real payment integration.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
