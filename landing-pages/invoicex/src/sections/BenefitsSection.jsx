import React from 'react';
import { WHY_INVOICEX_BENEFITS } from '../data/mockData';
import { Clock, Zap, Eye, FolderCheck, BarChart3, TrendingUp, CheckCircle } from 'lucide-react';

export const BenefitsSection = () => {
  const iconMap = {
    Clock,
    Zap,
    Eye,
    FolderCheck,
    BarChart3,
    TrendingUp
  };

  return (
    <section id="why-invoicex" className="section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mx-auto" style={{ maxWidth: '800px', marginBottom: '64px' }}>
          <div className="section-tag section-tag-emerald">
            <CheckCircle size={14} />
            <span>The InvoiceX Advantage</span>
          </div>

          <h2 className="section-heading">
            Why growing companies choose InvoiceX.
          </h2>

          <p className="section-subheading mx-auto">
            Traditional accounting software is bloated and intimidating. Spreadsheets are fragile. InvoiceX strikes the perfect balance of simplicity and financial rigor.
          </p>
        </div>

        {/* 6 Benefits Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px'
          }}
        >
          {WHY_INVOICEX_BENEFITS.map((b) => {
            const IconComponent = iconMap[b.iconName] || CheckCircle;

            return (
              <div
                key={b.title}
                className="fintech-card"
                style={{
                  padding: '32px 28px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '18px'
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                    color: '#4F46E5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <IconComponent size={22} />
                </div>

                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#0F172A', fontFamily: 'var(--font-heading)', marginBottom: '8px' }}>
                    {b.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#64748B', margin: 0 }}>
                    {b.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
