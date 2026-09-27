import React, { useState } from 'react';
import { ANALYTICS_DATA } from '../data/mockData';
import { TrendingUp, DollarSign, ArrowUpRight, BarChart2, CheckCircle2, Calendar } from 'lucide-react';

export const RevenueAnalyticsSection = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('90D'); // '7D' | '30D' | '90D' | '12M'

  const activeData = ANALYTICS_DATA[selectedPeriod];

  // Calculate max value for chart height scaling
  const maxRev = Math.max(...activeData.chart.map((c) => c.revenue));

  return (
    <section id="analytics" className="section" style={{ backgroundColor: '#0B0F19', color: '#F8FAFC' }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mx-auto" style={{ maxWidth: '800px', marginBottom: '56px' }}>
          <div
            className="section-tag"
            style={{
              background: 'rgba(79, 70, 229, 0.2)',
              color: '#A5B4FC',
              borderColor: 'rgba(79, 70, 229, 0.4)'
            }}
          >
            <BarChart2 size={14} />
            <span>Executive Financial Vision</span>
          </div>

          <h2 className="section-heading" style={{ color: '#F8FAFC' }}>
            See the numbers behind your business.
          </h2>

          <p className="section-subheading mx-auto" style={{ color: '#94A3B8' }}>
            Turn scattered invoices and receipt logs into clear strategic insights. Forecast upcoming liquidity, spot payment bottlenecks, and scale your margins.
          </p>

          {/* Timeframe Filters: 7D, 30D, 90D, 12M */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 0.06)',
              padding: '4px',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            {['7D', '30D', '90D', '12M'].map((period) => (
              <button
                key={period}
                type="button"
                onClick={() => setSelectedPeriod(period)}
                style={{
                  padding: '7px 18px',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '0.84rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 150ms ease',
                  background: selectedPeriod === period ? '#4F46E5' : 'transparent',
                  color: selectedPeriod === period ? '#FFFFFF' : '#94A3B8',
                  boxShadow: selectedPeriod === period ? '0 2px 8px rgba(79, 70, 229, 0.4)' : 'none'
                }}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        {/* Analytics Showcase Card */}
        <div
          style={{
            maxWidth: '1120px',
            margin: '0 auto',
            borderRadius: '24px',
            background: '#0F172A',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '36px',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7)'
          }}
        >
          {/* Top KPI Metrics Row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
              marginBottom: '36px',
              paddingBottom: '28px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            <div>
              <span style={{ fontSize: '0.78rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: '700' }}>
                Gross Revenue
              </span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '6px' }}>
                <span style={{ fontSize: '2rem', fontWeight: '800', color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>
                  {activeData.revenue}
                </span>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#34D399', background: 'rgba(16, 185, 129, 0.15)', padding: '2px 6px', borderRadius: '4px' }}>
                  {activeData.growth}
                </span>
              </div>
            </div>

            <div>
              <span style={{ fontSize: '0.78rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: '700' }}>
                Total Expenses
              </span>
              <div style={{ fontSize: '2rem', fontWeight: '800', color: '#E2E8F0', fontFamily: 'var(--font-heading)', marginTop: '6px' }}>
                {activeData.expenses}
              </div>
            </div>

            <div>
              <span style={{ fontSize: '0.78rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: '700' }}>
                Net Margin
              </span>
              <div style={{ fontSize: '2rem', fontWeight: '800', color: '#34D399', fontFamily: 'var(--font-heading)', marginTop: '6px' }}>
                {activeData.net}
              </div>
            </div>

            <div>
              <span style={{ fontSize: '0.78rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: '700' }}>
                Collection Rate
              </span>
              <div style={{ fontSize: '2rem', fontWeight: '800', color: '#818CF8', fontFamily: 'var(--font-heading)', marginTop: '6px' }}>
                {activeData.collectionRate}
              </div>
            </div>
          </div>

          {/* Interactive Chart Area */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#CBD5E1' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '3px', background: '#4F46E5' }} /> Inflow (Revenue)
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#CBD5E1' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '3px', background: '#EF4444' }} /> Outflow (Expenses)
                </span>
              </div>
              <span style={{ fontSize: '0.75rem', color: '#64748B' }}>
                Normalized against trailing period
              </span>
            </div>

            {/* Visual Bars Container */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                gap: '16px',
                height: '240px',
                paddingTop: '20px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              {activeData.chart.map((point, i) => {
                const revHeight = (point.revenue / maxRev) * 100;
                const expHeight = (point.expense / maxRev) * 100;

                return (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px',
                      height: '100%',
                      justifyContent: 'flex-end'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '100%', width: '100%', justifyContent: 'center' }}>
                      <div
                        style={{
                          width: 'clamp(14px, 2.5vw, 28px)',
                          height: `${revHeight}%`,
                          background: 'linear-gradient(180deg, #6366F1 0%, #4F46E5 100%)',
                          borderRadius: '6px 6px 0 0',
                          transition: 'height 400ms cubic-bezier(0.16, 1, 0.3, 1)'
                        }}
                        title={`Revenue: $${point.revenue.toLocaleString()}`}
                      />
                      <div
                        style={{
                          width: 'clamp(14px, 2.5vw, 28px)',
                          height: `${expHeight}%`,
                          background: 'linear-gradient(180deg, #F87171 0%, #EF4444 100%)',
                          borderRadius: '6px 6px 0 0',
                          transition: 'height 400ms cubic-bezier(0.16, 1, 0.3, 1)'
                        }}
                        title={`Expense: $${point.expense.toLocaleString()}`}
                      />
                    </div>
                    <span style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: '600' }}>
                      {point.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueAnalyticsSection;
