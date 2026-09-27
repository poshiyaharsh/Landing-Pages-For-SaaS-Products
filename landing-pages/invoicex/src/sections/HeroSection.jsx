import React, { useState } from 'react';
import {
  ArrowRight,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle2,
  AlertCircle,
  FileText,
  CreditCard,
  Send,
  Plus,
  ChevronRight,
  Eye,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { HERO_METRICS, RECENT_INVOICES } from '../data/mockData';

export const HeroSection = () => {
  const [invoices, setInvoices] = useState(RECENT_INVOICES);
  const [selectedInvoice, setSelectedInvoice] = useState(invoices[0]);

  const handlePayInvoice = (e, invId) => {
    e.stopPropagation();
    setInvoices((prev) =>
      prev.map((inv) => {
        if (inv.id === invId) {
          const nextStatus = inv.status === 'paid' ? 'pending' : 'paid';
          if (nextStatus === 'paid') {
            confetti({
              particleCount: 30,
              spread: 45,
              origin: { y: 0.6 },
              colors: ['#10B981', '#4F46E5', '#2563EB']
            });
          }
          const updated = { ...inv, status: nextStatus };
          if (selectedInvoice.id === invId) setSelectedInvoice(updated);
          return updated;
        }
        return inv;
      })
    );
  };

  const handleCtaClick = (e, targetId) => {
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
      id="hero"
      style={{
        position: 'relative',
        paddingTop: '64px',
        paddingBottom: '96px',
        overflow: 'hidden'
      }}
    >
      {/* Background Lighting & Grid */}
      <div className="bg-grid-fintech" />
      <div className="glow-ambient-fintech" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Hero Copy */}
        <div className="text-center mx-auto" style={{ maxWidth: '840px', marginBottom: '52px' }}>
          {/* Badge */}
          <div
            className="section-tag section-tag-emerald"
            style={{
              boxShadow: '0 2px 10px rgba(16, 185, 129, 0.12)',
              cursor: 'default'
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }} />
            <span>The Modern Standard for Business Cashflow</span>
          </div>

          {/* Main Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5.2vw, 4.3rem)',
              fontWeight: '800',
              lineHeight: 1.12,
              letterSpacing: '-0.04em',
              color: '#0F172A',
              fontFamily: 'var(--font-heading)',
              marginBottom: '22px'
            }}
          >
            Get paid faster.
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #4F46E5 0%, #2563EB 50%, #059669 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}
            >
              Manage smarter.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.5vw, 1.25rem)',
              lineHeight: 1.6,
              color: '#475569',
              maxWidth: '680px',
              margin: '0 auto 32px'
            }}
          >
            InvoiceX brings invoicing, expenses, payments, clients, and revenue analytics into one beautifully simple workspace.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap',
              marginBottom: '20px'
            }}
          >
            <a
              href="#pricing"
              onClick={(e) => handleCtaClick(e, 'pricing')}
              className="btn btn-primary btn-lg"
              style={{
                boxShadow: '0 8px 24px -4px rgba(79, 70, 229, 0.45)',
                fontWeight: '700'
              }}
            >
              <span>Start for free</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="#dashboard-preview"
              onClick={(e) => handleCtaClick(e, 'dashboard-preview')}
              className="btn btn-secondary btn-lg"
              style={{ fontWeight: '600' }}
            >
              <Eye size={17} color="#4F46E5" />
              <span>Explore InvoiceX</span>
            </a>
          </div>

          {/* Small Trust Line */}
          <p style={{ fontSize: '0.84rem', color: '#64748B', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }} />
            No credit card required · Set up your workspace in minutes
          </p>
        </div>

        {/* =========================================================================
            HERO VISUAL: PREMIUM FINTECH DASHBOARD PREVIEW
            ========================================================================= */}
        <div
          style={{
            maxWidth: '1120px',
            margin: '0 auto',
            borderRadius: '24px',
            background: '#FFFFFF',
            border: '1px solid #CBD5E1',
            boxShadow: '0 25px 60px -12px rgba(15, 23, 42, 0.16), 0 0 40px -10px rgba(79, 70, 229, 0.1)',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          {/* Top Window Chrome */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 24px',
              background: '#0B0F19',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              color: '#94A3B8'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }} />
              <span style={{ marginLeft: '12px', fontSize: '0.8rem', color: '#CBD5E1', fontWeight: '600' }}>
                invoicex.app/workspace/overview
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  padding: '3px 8px',
                  borderRadius: '4px',
                  background: 'rgba(16, 185, 129, 0.2)',
                  color: '#34D399',
                  fontWeight: '600'
                }}
              >
                ● Live Cashflow
              </span>
              <span style={{ fontSize: '0.78rem', color: '#94A3B8', fontFamily: 'var(--font-mono)' }}>
                USD ($)
              </span>
            </div>
          </div>

          {/* Dashboard Body */}
          <div style={{ padding: '28px', background: '#F8FAFC' }}>
            {/* Top 4 Metrics Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
                gap: '16px',
                marginBottom: '24px'
              }}
            >
              {/* Card 1: Total Revenue */}
              <div
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '20px',
                  border: '1px solid #E2E8F0',
                  boxShadow: 'var(--shadow-xs)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: '600', color: '#64748B' }}>Total Revenue</span>
                  <span style={{ fontSize: '0.72rem', fontWeight: '700', color: '#059669', background: '#ECFDF5', padding: '2px 6px', borderRadius: '4px' }}>
                    {HERO_METRICS.revenueGrowth}
                  </span>
                </div>
                <div style={{ fontSize: '1.75rem', fontWeight: '800', color: '#0F172A', fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}>
                  {HERO_METRICS.totalRevenue}
                </div>
                <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>vs. $108,400 last period</span>
              </div>

              {/* Card 2: Outstanding Invoices */}
              <div
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '20px',
                  border: '1px solid #E2E8F0',
                  boxShadow: 'var(--shadow-xs)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: '600', color: '#64748B' }}>Outstanding</span>
                  <span style={{ fontSize: '0.72rem', fontWeight: '700', color: '#D97706', background: '#FFFBEB', padding: '2px 6px', borderRadius: '4px' }}>
                    {HERO_METRICS.outstandingCount}
                  </span>
                </div>
                <div style={{ fontSize: '1.75rem', fontWeight: '800', color: '#D97706', fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}>
                  {HERO_METRICS.outstandingAmount}
                </div>
                <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Awaiting settlement</span>
              </div>

              {/* Card 3: Paid Invoices */}
              <div
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '20px',
                  border: '1px solid #E2E8F0',
                  boxShadow: 'var(--shadow-xs)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: '600', color: '#64748B' }}>Paid Amount</span>
                  <span style={{ fontSize: '0.72rem', fontWeight: '700', color: '#059669', background: '#ECFDF5', padding: '2px 6px', borderRadius: '4px' }}>
                    {HERO_METRICS.paidRate} rate
                  </span>
                </div>
                <div style={{ fontSize: '1.75rem', fontWeight: '800', color: '#059669', fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}>
                  {HERO_METRICS.paidAmount}
                </div>
                <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Collected this quarter</span>
              </div>

              {/* Card 4: Operating Expenses */}
              <div
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '20px',
                  border: '1px solid #E2E8F0',
                  boxShadow: 'var(--shadow-xs)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: '600', color: '#64748B' }}>Total Expenses</span>
                  <span style={{ fontSize: '0.72rem', fontWeight: '700', color: '#4F46E5', background: '#EEF2FF', padding: '2px 6px', borderRadius: '4px' }}>
                    -6.2% MoM
                  </span>
                </div>
                <div style={{ fontSize: '1.75rem', fontWeight: '800', color: '#334155', fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}>
                  {HERO_METRICS.totalExpenses}
                </div>
                <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Net Profit: <strong>{HERO_METRICS.netProfit}</strong></span>
              </div>
            </div>

            {/* Split Row: Recent Invoices & Invoice Detail Card */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1.35fr) minmax(0, 1fr)',
                gap: '20px'
              }}
              className="hero-dash-split"
            >
              {/* Left Panel: Recent Invoices List */}
              <div
                style={{
                  background: '#FFFFFF',
                  borderRadius: '18px',
                  border: '1px solid #E2E8F0',
                  padding: '22px',
                  boxShadow: 'var(--shadow-xs)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div>
                    <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#0F172A', fontFamily: 'var(--font-heading)' }}>
                      Recent Invoices
                    </h3>
                    <span style={{ fontSize: '0.75rem', color: '#64748B' }}>
                      Click any row to inspect or toggle payment status
                    </span>
                  </div>

                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    style={{ padding: '6px 12px', fontSize: '0.78rem' }}
                  >
                    <Plus size={13} />
                    <span>New Invoice</span>
                  </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {invoices.map((inv) => {
                    const isSelected = selectedInvoice.id === inv.id;
                    const statusClass =
                      inv.status === 'paid'
                        ? 'badge-paid'
                        : inv.status === 'pending'
                        ? 'badge-pending'
                        : inv.status === 'overdue'
                        ? 'badge-overdue'
                        : 'badge-draft';

                    return (
                      <div
                        key={inv.id}
                        onClick={() => setSelectedInvoice(inv)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '12px 14px',
                          borderRadius: '12px',
                          background: isSelected ? '#F8FAFC' : '#FFFFFF',
                          border: isSelected ? '1px solid #CBD5E1' : '1px solid #F1F5F9',
                          cursor: 'pointer',
                          transition: 'all 150ms ease'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <div
                            style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '8px',
                              background: inv.clientColor,
                              color: '#FFFFFF',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontWeight: '700',
                              fontSize: '0.8rem'
                            }}
                          >
                            {inv.clientLogo}
                          </div>

                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <span style={{ fontSize: '0.875rem', fontWeight: '700', color: '#0F172A' }}>
                                {inv.client}
                              </span>
                              <span style={{ fontSize: '0.72rem', color: '#64748B', fontFamily: 'var(--font-mono)' }}>
                                {inv.id}
                              </span>
                            </div>
                            <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>
                              {inv.items}
                            </span>
                          </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                          <span style={{ fontSize: '0.9rem', fontWeight: '800', color: '#0F172A', fontFamily: 'var(--font-heading)' }}>
                            {inv.amount}
                          </span>

                          <button
                            type="button"
                            onClick={(e) => handlePayInvoice(e, inv.id)}
                            className={`badge-status ${statusClass}`}
                            title="Click to toggle status"
                            style={{ border: 'none', cursor: 'pointer' }}
                          >
                            {inv.status}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Panel: Invoice Detail Card / Quick Bill View */}
              <div
                style={{
                  background: '#FFFFFF',
                  borderRadius: '18px',
                  border: '1px solid #E2E8F0',
                  padding: '22px',
                  boxShadow: 'var(--shadow-xs)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', borderBottom: '1px solid #F1F5F9', paddingBottom: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <FileText size={18} color="#4F46E5" />
                      <span style={{ fontSize: '0.84rem', fontWeight: '800', color: '#0F172A', fontFamily: 'var(--font-heading)' }}>
                        {selectedInvoice.id} · Details
                      </span>
                    </div>

                    <span
                      className={`badge-status ${
                        selectedInvoice.status === 'paid'
                          ? 'badge-paid'
                          : selectedInvoice.status === 'pending'
                          ? 'badge-pending'
                          : selectedInvoice.status === 'overdue'
                          ? 'badge-overdue'
                          : 'badge-draft'
                      }`}
                    >
                      {selectedInvoice.status}
                    </span>
                  </div>

                  {/* Client & Billing Info */}
                  <div style={{ marginBottom: '16px' }}>
                    <span style={{ fontSize: '0.72rem', color: '#94A3B8', textTransform: 'uppercase', fontWeight: '700' }}>Billed To</span>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#0F172A' }}>
                      {selectedInvoice.client}
                    </h4>
                    <span style={{ fontSize: '0.78rem', color: '#64748B' }}>Payment Method: {selectedInvoice.paymentMethod}</span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '16px', background: '#F8FAFC', padding: '10px', borderRadius: '10px' }}>
                    <div>
                      <span style={{ fontSize: '0.7rem', color: '#94A3B8', display: 'block' }}>Issue Date</span>
                      <strong style={{ fontSize: '0.78rem', color: '#1E293B' }}>{selectedInvoice.date}</strong>
                    </div>
                    <div>
                      <span style={{ fontSize: '0.7rem', color: '#94A3B8', display: 'block' }}>Due Date</span>
                      <strong style={{ fontSize: '0.78rem', color: '#1E293B' }}>{selectedInvoice.dueDate}</strong>
                    </div>
                  </div>

                  {/* Line Item */}
                  <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '12px', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#64748B', marginBottom: '6px' }}>
                      <span>{selectedInvoice.items}</span>
                      <span style={{ fontWeight: '700', color: '#0F172A' }}>{selectedInvoice.amount}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#94A3B8' }}>
                      <span>Estimated Tax (0.0%)</span>
                      <span>$0.00</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Total & Quick Action */}
                <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '12px' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#64748B' }}>Total Due</span>
                    <span style={{ fontSize: '1.4rem', fontWeight: '800', color: '#0F172A', fontFamily: 'var(--font-heading)' }}>
                      {selectedInvoice.amount}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => handlePayInvoice(e, selectedInvoice.id)}
                    className={`btn ${selectedInvoice.status === 'paid' ? 'btn-secondary' : 'btn-emerald'}`}
                    style={{ width: '100%', padding: '10px', fontSize: '0.85rem' }}
                  >
                    {selectedInvoice.status === 'paid' ? (
                      <>
                        <CheckCircle2 size={15} color="#10B981" />
                        <span>Payment Received</span>
                      </>
                    ) : (
                      <>
                        <CreditCard size={15} />
                        <span>Simulate Client Payment</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-dash-split {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
