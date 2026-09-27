import React, { useState } from 'react';
import {
  BarChart3,
  TrendingUp,
  CreditCard,
  Users,
  PieChart,
  ArrowUpRight,
  Filter,
  Download,
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { RECENT_INVOICES, EXPENSE_CATEGORIES, CLIENTS_LIST } from '../data/mockData';

export const DashboardPreviewSection = () => {
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'paid' | 'pending' | 'overdue'

  const filteredInvoices = activeFilter === 'all'
    ? RECENT_INVOICES
    : RECENT_INVOICES.filter((inv) => inv.status === activeFilter);

  return (
    <section id="dashboard-preview" className="section" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mx-auto" style={{ maxWidth: '800px', marginBottom: '56px' }}>
          <div className="section-tag section-tag-emerald">
            <BarChart3 size={14} />
            <span>Unified Financial Intelligence</span>
          </div>

          <h2 className="section-heading">
            A command center for all your cashflow.
          </h2>

          <p className="section-subheading mx-auto">
            Say goodbye to fragmented tools. Monitor receivables, track expenses, reconcile payments, and inspect client accounts in real time.
          </p>
        </div>

        {/* Large Dashboard Container */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            border: '1px solid #E2E8F0',
            boxShadow: 'var(--shadow-xl)',
            overflow: 'hidden'
          }}
        >
          {/* Dashboard Header Bar */}
          <div
            style={{
              padding: '20px 28px',
              borderBottom: '1px solid #E2E8F0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
              background: '#FFFFFF'
            }}
          >
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: '#4F46E5', letterSpacing: '0.04em' }}>
                WORKSPACE OVERVIEW
              </span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0F172A', fontFamily: 'var(--font-heading)' }}>
                Q4 Operating Cashflow & Settlement Hub
              </h3>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  background: '#F1F5F9',
                  color: '#475569',
                  fontSize: '0.8rem',
                  fontWeight: '600'
                }}
              >
                <Calendar size={14} />
                <span>Oct 01 — Oct 31, 2026</span>
              </div>

              <button
                type="button"
                className="btn btn-secondary btn-sm"
                style={{ fontSize: '0.8rem', padding: '6px 12px' }}
              >
                <Download size={14} />
                <span>Export Ledger</span>
              </button>
            </div>
          </div>

          {/* Dashboard Main Grid */}
          <div style={{ padding: '32px 28px' }}>
            {/* Top Row: Revenue Trend Visual + Expense Breakdown */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1.6fr) minmax(0, 1fr)',
                gap: '24px',
                marginBottom: '28px'
              }}
              className="dash-preview-grid"
            >
              {/* Revenue Overview Chart Panel */}
              <div
                style={{
                  background: '#F8FAFC',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                  padding: '24px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#0F172A', fontFamily: 'var(--font-heading)' }}>
                      Revenue & Collection Velocity
                    </h4>
                    <span style={{ fontSize: '0.75rem', color: '#64748B' }}>
                      Daily invoiced volume vs. completed settlements
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.72rem', color: '#4F46E5', fontWeight: '600' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '2px', background: '#4F46E5' }} /> Invoiced
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.72rem', color: '#10B981', fontWeight: '600' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '2px', background: '#10B981' }} /> Settled
                    </span>
                  </div>
                </div>

                {/* Simulated Bar Chart */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    gap: '12px',
                    height: '180px',
                    paddingTop: '20px',
                    borderBottom: '1px solid #E2E8F0'
                  }}
                >
                  {[
                    { day: 'Mon', h1: 65, h2: 55, val: '$4.2k' },
                    { day: 'Tue', h1: 85, h2: 80, val: '$6.8k' },
                    { day: 'Wed', h1: 45, h2: 40, val: '$3.1k' },
                    { day: 'Thu', h1: 95, h2: 90, val: '$8.4k' },
                    { day: 'Fri', h1: 75, h2: 70, val: '$5.9k' },
                    { day: 'Sat', h1: 30, h2: 25, val: '$1.8k' },
                    { day: 'Sun', h1: 50, h2: 48, val: '$3.5k' }
                  ].map((bar, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '6px',
                        height: '100%',
                        justifyContent: 'flex-end'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '100%' }}>
                        <div
                          style={{
                            width: '14px',
                            height: `${bar.h1}%`,
                            background: '#4F46E5',
                            borderRadius: '4px 4px 0 0',
                            transition: 'height 300ms ease'
                          }}
                          title={`Invoiced: ${bar.val}`}
                        />
                        <div
                          style={{
                            width: '14px',
                            height: `${bar.h2}%`,
                            background: '#10B981',
                            borderRadius: '4px 4px 0 0',
                            transition: 'height 300ms ease'
                          }}
                          title={`Settled: ${bar.val}`}
                        />
                      </div>
                      <span style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: '600' }}>
                        {bar.day}
                      </span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '14px', fontSize: '0.78rem', color: '#64748B' }}>
                  <span>Weekly total: <strong style={{ color: '#0F172A' }}>$33,700</strong></span>
                  <span style={{ color: '#059669', fontWeight: '700' }}>94.2% on-time payment conversion</span>
                </div>
              </div>

              {/* Expense Breakdown Panel */}
              <div
                style={{
                  background: '#F8FAFC',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                  padding: '24px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#0F172A', fontFamily: 'var(--font-heading)' }}>
                    Expense Allocation
                  </h4>
                  <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#0F172A' }}>
                    $34,800 Total
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {EXPENSE_CATEGORIES.map((cat) => (
                    <div key={cat.name}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '4px' }}>
                        <span style={{ color: '#334155', fontWeight: '600' }}>{cat.name}</span>
                        <span style={{ color: '#0F172A', fontWeight: '700' }}>{cat.amount} ({cat.percentage}%)</span>
                      </div>
                      <div style={{ width: '100%', height: '6px', background: '#E2E8F0', borderRadius: '3px', overflow: 'hidden' }}>
                        <div
                          style={{
                            width: `${cat.percentage}%`,
                            height: '100%',
                            background: cat.color,
                            borderRadius: '3px'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Row: Recent Invoices Filterable Table */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid #E2E8F0',
                padding: '24px'
              }}
            >
              {/* Header with Filter Pills */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px',
                  marginBottom: '20px'
                }}
              >
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#0F172A', fontFamily: 'var(--font-heading)' }}>
                    Invoices Ledger
                  </h4>
                  <span style={{ fontSize: '0.75rem', color: '#64748B' }}>
                    Showing {filteredInvoices.length} active entries
                  </span>
                </div>

                {/* Filter Pills */}
                <div style={{ display: 'flex', gap: '6px' }}>
                  {['all', 'paid', 'pending', 'overdue'].map((status) => (
                    <button
                      key={status}
                      type="button"
                      onClick={() => setActiveFilter(status)}
                      style={{
                        padding: '4px 12px',
                        borderRadius: '9999px',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        textTransform: 'capitalize',
                        border: 'none',
                        cursor: 'pointer',
                        background: activeFilter === status ? '#0F172A' : '#F1F5F9',
                        color: activeFilter === status ? '#FFFFFF' : '#64748B',
                        transition: 'all 150ms ease'
                      }}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              {/* Table */}
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.84rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid #E2E8F0', color: '#64748B', fontSize: '0.75rem', textTransform: 'uppercase' }}>
                      <th style={{ padding: '12px 14px', fontWeight: '700' }}>Invoice #</th>
                      <th style={{ padding: '12px 14px', fontWeight: '700' }}>Client</th>
                      <th style={{ padding: '12px 14px', fontWeight: '700' }}>Deliverables</th>
                      <th style={{ padding: '12px 14px', fontWeight: '700' }}>Due Date</th>
                      <th style={{ padding: '12px 14px', fontWeight: '700' }}>Amount</th>
                      <th style={{ padding: '12px 14px', fontWeight: '700' }}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredInvoices.map((inv) => (
                      <tr
                        key={inv.id}
                        style={{
                          borderBottom: '1px solid #F1F5F9',
                          transition: 'background 150ms ease'
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F8FAFC')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                      >
                        <td style={{ padding: '14px', fontWeight: '700', color: '#4F46E5', fontFamily: 'var(--font-mono)' }}>
                          {inv.id}
                        </td>
                        <td style={{ padding: '14px', fontWeight: '700', color: '#0F172A' }}>
                          {inv.client}
                        </td>
                        <td style={{ padding: '14px', color: '#475569' }}>
                          {inv.items}
                        </td>
                        <td style={{ padding: '14px', color: '#64748B' }}>
                          {inv.dueDate}
                        </td>
                        <td style={{ padding: '14px', fontWeight: '800', color: '#0F172A', fontFamily: 'var(--font-heading)' }}>
                          {inv.amount}
                        </td>
                        <td style={{ padding: '14px' }}>
                          <span
                            className={`badge-status ${
                              inv.status === 'paid'
                                ? 'badge-paid'
                                : inv.status === 'pending'
                                ? 'badge-pending'
                                : inv.status === 'overdue'
                                ? 'badge-overdue'
                                : 'badge-draft'
                            }`}
                          >
                            {inv.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .dash-preview-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default DashboardPreviewSection;
