import React, { useState } from 'react';
import {
  FileText,
  PieChart,
  Clock,
  TrendingUp,
  Users,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
  Shield,
  CreditCard
} from 'lucide-react';
import { EXPENSE_CATEGORIES, CLIENTS_LIST } from '../data/mockData';

export const CoreFeaturesSection = () => {
  // Interactive state for Feature 1 (Invoice calculation simulation)
  const [qty, setQty] = useState(2);
  const rate = 1450;
  const subtotal = qty * rate;
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <section id="features" className="section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mx-auto" style={{ maxWidth: '800px', marginBottom: '64px' }}>
          <div className="section-tag section-tag-emerald">
            <Sparkles size={14} />
            <span>Complete Financial Toolkit</span>
          </div>

          <h2 className="section-heading">
            Everything you need to stay financially organized.
          </h2>

          <p className="section-subheading mx-auto">
            From your very first client retainer to multi-currency quarterly reconciliations, InvoiceX simplifies every stage of getting paid.
          </p>
        </div>

        {/* 5 Core Feature Bento Layout */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {/* Top Row: Feature 1 (Invoice Generation) & Feature 2 (Expense Tracking) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: '28px'
            }}
          >
            {/* ================= FEATURE 1: INVOICE GENERATION ================= */}
            <div
              className="fintech-card"
              style={{
                padding: '36px 32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: '#EEF2FF',
                      color: '#4F46E5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <FileText size={22} />
                  </div>
                  <span className="badge-status badge-paid">Auto-Calculating</span>
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#0F172A', fontFamily: 'var(--font-heading)', marginBottom: '10px' }}>
                  Create invoices in seconds.
                </h3>

                <p style={{ fontSize: '0.9375rem', lineHeight: '1.6', color: '#64748B', marginBottom: '24px' }}>
                  Build polished, professional invoices with reusable templates, automatic calculations, and organized client details.
                </p>
              </div>

              {/* Visual: Live Invoice Creation UI */}
              <div
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                  padding: '20px',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', borderBottom: '1px solid #F1F5F9', paddingBottom: '10px' }}>
                  <div>
                    <span style={{ fontSize: '0.72rem', color: '#64748B', display: 'block' }}>Invoice Number</span>
                    <strong style={{ fontSize: '0.85rem', color: '#0F172A', fontFamily: 'var(--font-mono)' }}>INV-2026-089</strong>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '0.72rem', color: '#64748B', display: 'block' }}>Client</span>
                    <strong style={{ fontSize: '0.85rem', color: '#4F46E5' }}>Northstar Labs</strong>
                  </div>
                </div>

                {/* Items & Live Qty Stepper */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8rem', marginBottom: '14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748B', fontWeight: '600' }}>
                    <span>Deliverable Item</span>
                    <span>Qty × Rate</span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#F8FAFC', padding: '8px 10px', borderRadius: '8px' }}>
                    <span style={{ fontWeight: '600', color: '#1E293B' }}>Product UX Sprint</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <button
                        type="button"
                        onClick={() => setQty(Math.max(1, qty - 1))}
                        style={{ width: '20px', height: '20px', borderRadius: '4px', border: '1px solid #CBD5E1', background: '#FFF', cursor: 'pointer', fontWeight: '700' }}
                      >
                        -
                      </button>
                      <span style={{ fontWeight: '700', color: '#0F172A', minWidth: '16px', textAlign: 'center' }}>{qty}</span>
                      <button
                        type="button"
                        onClick={() => setQty(qty + 1)}
                        style={{ width: '20px', height: '20px', borderRadius: '4px', border: '1px solid #CBD5E1', background: '#FFF', cursor: 'pointer', fontWeight: '700' }}
                      >
                        +
                      </button>
                      <span style={{ color: '#64748B' }}>× $1,450</span>
                    </div>
                  </div>
                </div>

                {/* Totals Calculation */}
                <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '10px', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.78rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748B' }}>
                    <span>Subtotal:</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748B' }}>
                    <span>Tax (8.0%):</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#0F172A', fontWeight: '800', fontSize: '0.9rem', marginTop: '4px' }}>
                    <span>Total Due:</span>
                    <span style={{ color: '#059669' }}>${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= FEATURE 2: EXPENSE TRACKING ================= */}
            <div
              className="fintech-card"
              style={{
                padding: '36px 32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: '#ECFDF5',
                      color: '#059669',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <PieChart size={22} />
                  </div>
                  <span className="badge-status badge-paid">Tax Reconciled</span>
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#0F172A', fontFamily: 'var(--font-heading)', marginBottom: '10px' }}>
                  Know where your money goes.
                </h3>

                <p style={{ fontSize: '0.9375rem', lineHeight: '1.6', color: '#64748B', marginBottom: '24px' }}>
                  Track business expenses, categorize spending, and keep your financial activity organized in one place.
                </p>
              </div>

              {/* Visual: Expense Chart & Categories */}
              <div
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                  padding: '20px',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ fontSize: '0.78rem', fontWeight: '700', color: '#64748B', textTransform: 'uppercase' }}>
                    Q4 Operational Categories
                  </span>
                  <span style={{ fontSize: '0.85rem', fontWeight: '800', color: '#0F172A' }}>
                    $34,800 Total
                  </span>
                </div>

                {/* Progress bars for categories */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {EXPENSE_CATEGORIES.map((c) => (
                    <div key={c.name} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.78rem' }}>
                      <span style={{ width: '100px', fontWeight: '600', color: '#334155', flexShrink: 0 }}>{c.name}</span>
                      <div style={{ flex: 1, height: '6px', background: '#F1F5F9', borderRadius: '3px', overflow: 'hidden' }}>
                        <div style={{ width: `${c.percentage}%`, height: '100%', background: c.color }} />
                      </div>
                      <span style={{ fontWeight: '700', color: '#0F172A', minWidth: '55px', textAlign: 'right' }}>{c.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: Feature 3 (Payment Tracking), Feature 4 (Revenue Analytics), Feature 5 (Client Management) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px'
            }}
          >
            {/* ================= FEATURE 3: PAYMENT TRACKING ================= */}
            <div
              className="fintech-card"
              style={{
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: '#FFFBEB',
                    color: '#D97706',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '18px'
                  }}
                >
                  <Clock size={20} />
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0F172A', fontFamily: 'var(--font-heading)', marginBottom: '8px' }}>
                  Never lose track of a payment.
                </h3>

                <p style={{ fontSize: '0.875rem', lineHeight: '1.6', color: '#64748B', marginBottom: '20px' }}>
                  See what has been paid, what is pending, and what needs attention at a glance.
                </p>
              </div>

              {/* Visual: Payment Timeline / Status System */}
              <div
                style={{
                  background: '#F8FAFC',
                  borderRadius: '12px',
                  border: '1px solid #E2E8F0',
                  padding: '16px'
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.8rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle2 size={15} color="#10B981" />
                      <span style={{ fontWeight: '600', color: '#1E293B' }}>Acme Studio</span>
                    </div>
                    <span className="badge-status badge-paid">Paid $4,280</span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Clock size={15} color="#F59E0B" />
                      <span style={{ fontWeight: '600', color: '#1E293B' }}>Northstar Labs</span>
                    </div>
                    <span className="badge-status badge-pending">Pending $2,950</span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <AlertCircle size={15} color="#EF4444" />
                      <span style={{ fontWeight: '600', color: '#1E293B' }}>Cobalt Works</span>
                    </div>
                    <span className="badge-status badge-overdue">Overdue $1,840</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= FEATURE 4: REVENUE ANALYTICS ================= */}
            <div
              className="fintech-card"
              style={{
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: '#EEF2FF',
                    color: '#4F46E5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '18px'
                  }}
                >
                  <TrendingUp size={20} />
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0F172A', fontFamily: 'var(--font-heading)', marginBottom: '8px' }}>
                  Turn financial data into clarity.
                </h3>

                <p style={{ fontSize: '0.875rem', lineHeight: '1.6', color: '#64748B', marginBottom: '20px' }}>
                  Understand revenue trends, payment performance, expenses, and business growth through beautiful analytics.
                </p>
              </div>

              {/* Visual: Revenue Trendline Mini Card */}
              <div
                style={{
                  background: '#F8FAFC',
                  borderRadius: '12px',
                  border: '1px solid #E2E8F0',
                  padding: '16px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                  <span style={{ fontSize: '1.3rem', fontWeight: '800', color: '#0F172A', fontFamily: 'var(--font-heading)' }}>
                    $128,450
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#059669', fontWeight: '700' }}>
                    +18.4% vs last period
                  </span>
                </div>

                {/* Simulated Sparkline */}
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '48px', marginBottom: '8px' }}>
                  {[30, 45, 40, 60, 55, 75, 70, 90, 85, 100].map((h, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        height: `${h}%`,
                        background: i >= 8 ? '#10B981' : '#4F46E5',
                        borderRadius: '2px'
                      }}
                    />
                  ))}
                </div>

                <span style={{ fontSize: '0.72rem', color: '#94A3B8', display: 'block' }}>
                  Consolidated receivables trajectory (90D)
                </span>
              </div>
            </div>

            {/* ================= FEATURE 5: CLIENT MANAGEMENT ================= */}
            <div
              className="fintech-card"
              style={{
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: '#F0FDF4',
                    color: '#16A34A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '18px'
                  }}
                >
                  <Users size={20} />
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0F172A', fontFamily: 'var(--font-heading)', marginBottom: '8px' }}>
                  Keep every client relationship organized.
                </h3>

                <p style={{ fontSize: '0.875rem', lineHeight: '1.6', color: '#64748B', marginBottom: '20px' }}>
                  Manage client information, invoices, payment history, and financial activity from a single workspace.
                </p>
              </div>

              {/* Visual: Client Table Mini */}
              <div
                style={{
                  background: '#F8FAFC',
                  borderRadius: '12px',
                  border: '1px solid #E2E8F0',
                  padding: '14px'
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.78rem' }}>
                  {CLIENTS_LIST.slice(0, 3).map((cl) => (
                    <div key={cl.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <strong style={{ color: '#0F172A', display: 'block' }}>{cl.name}</strong>
                        <span style={{ color: '#94A3B8', fontSize: '0.7rem' }}>{cl.invoices} invoices billed</span>
                      </div>
                      <span style={{ fontWeight: '700', color: '#4F46E5' }}>{cl.totalBilled}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeaturesSection;
