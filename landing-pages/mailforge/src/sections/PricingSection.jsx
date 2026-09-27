import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PRICING_PLANS } from '../data/mockData';

export const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('yearly'); // 'monthly' | 'yearly'

  const handleCtaClick = (e, planName) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { x, y },
      colors: ['#2563EB', '#7C3AED', '#EC4899', '#10B981']
    });
  };

  return (
    <section
      id="pricing"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
        backgroundColor: '#FAFBFC',
        borderTop: '1px solid var(--border-light)',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="eyebrow-badge" style={{ marginBottom: '14px' }}>
            <Sparkles size={14} />
            <span>Transparent Pricing</span>
          </div>
          <h2>
            Simple plans for <span className="gradient-text">every growth stage.</span>
          </h2>
          <p>
            Start free with up to 1,000 contacts. Upgrade smoothly as your audience and campaign velocity expand.
          </p>

          {/* Billing Cycle Toggle */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--border-medium)',
              borderRadius: '9999px',
              padding: '4px',
              marginTop: '28px',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              style={{
                padding: '8px 18px',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 600,
                backgroundColor: billingCycle === 'monthly' ? '#0F172A' : 'transparent',
                color: billingCycle === 'monthly' ? '#FFFFFF' : '#64748B',
                transition: 'all 150ms ease'
              }}
            >
              Monthly
            </button>

            <button
              type="button"
              onClick={() => setBillingCycle('yearly')}
              style={{
                padding: '8px 18px',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 600,
                backgroundColor: billingCycle === 'yearly' ? '#0F172A' : 'transparent',
                color: billingCycle === 'yearly' ? '#FFFFFF' : '#64748B',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 150ms ease'
              }}
            >
              <span>Yearly</span>
              <span
                style={{
                  backgroundColor: '#ECFDF5',
                  color: '#059669',
                  border: '1px solid #A7F3D0',
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  padding: '2px 8px',
                  borderRadius: '9999px'
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px',
            alignItems: 'stretch',
            maxWidth: '1100px',
            margin: '0 auto 48px auto'
          }}
        >
          {PRICING_PLANS.map((plan) => {
            const price = billingCycle === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice;
            return (
              <div
                key={plan.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '36px 28px',
                  border: plan.isPopular ? '2px solid #2563EB' : '1px solid var(--border-medium)',
                  boxShadow: plan.isPopular ? '0 20px 40px -10px rgba(37, 99, 235, 0.2)' : 'var(--shadow-sm)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 200ms ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  if (!plan.isPopular) {
                    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  if (!plan.isPopular) {
                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  }
                }}
              >
                {/* Popular Pill */}
                {plan.isPopular && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-13px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'var(--gradient-brand)',
                      color: '#FFFFFF',
                      fontSize: '0.6875rem',
                      fontWeight: 800,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      padding: '4px 14px',
                      borderRadius: '9999px',
                      boxShadow: '0 4px 12px rgba(37, 99, 235, 0.35)'
                    }}
                  >
                    MOST POPULAR
                  </div>
                )}

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A' }}>
                      {plan.name}
                    </h3>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B' }}>
                      {plan.badge}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.5, marginBottom: '24px', minHeight: '42px' }}>
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '28px' }}>
                    <span style={{ fontSize: '2.75rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em' }}>
                      ${price}
                    </span>
                    <span style={{ fontSize: '0.9375rem', color: '#64748B' }}>
                      / month
                    </span>
                    {billingCycle === 'yearly' && price > 0 && (
                      <span style={{ fontSize: '0.75rem', color: '#059669', marginLeft: '6px', fontWeight: 600 }}>
                        (billed annually)
                      </span>
                    )}
                  </div>

                  {/* Features List */}
                  <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '24px', marginBottom: '32px' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#64748B', display: 'block', marginBottom: '14px' }}>
                      What's included:
                    </span>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {plan.features.map((feat, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.875rem', color: '#334155' }}>
                          <div
                            style={{
                              width: '18px',
                              height: '18px',
                              borderRadius: '50%',
                              backgroundColor: plan.isPopular ? '#EFF6FF' : '#F1F5F9',
                              color: plan.isPopular ? '#2563EB' : '#10B981',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0
                            }}
                          >
                            <Check size={12} strokeWidth={2.5} />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  type="button"
                  onClick={(e) => handleCtaClick(e, plan.name)}
                  className={plan.isPopular ? 'btn-primary' : 'btn-secondary'}
                  style={{ width: '100%', padding: '13px 20px', borderRadius: '10px', fontSize: '0.9375rem' }}
                >
                  {plan.cta} <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Security & Guarantee note */}
        <div
          style={{
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            fontSize: '0.8125rem',
            color: '#64748B',
            flexWrap: 'wrap'
          }}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
            <ShieldCheck size={16} style={{ color: '#10B981' }} /> 14-day free trial on Growth & Scale
          </span>
          <span>•</span>
          <span>No credit card required for Starter</span>
          <span>•</span>
          <span>Cancel or switch plans anytime</span>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
