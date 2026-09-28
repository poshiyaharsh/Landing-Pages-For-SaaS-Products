import React from 'react';
import { FileText, Download } from 'lucide-react';

export default function ReportsSection() {
  return (
    <section className="section">
      <div className="container">
        <h2 style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: 'var(--spacing-xl)'
        }}>
          Custom reports, your way
        </h2>

        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          background: 'var(--color-bg-card)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden'
        }}>
          {/* Report Builder Interface */}
          <div style={{
            padding: '1.5rem',
            borderBottom: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <FileText size={24} color="var(--color-primary)" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                Report Builder
              </h3>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <button className="btn-ghost" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.875rem'
              }}>
                <Download size={16} />
                Export
              </button>
              <select style={{
                padding: '0.5rem 1rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--color-text-primary)',
                fontSize: '0.875rem',
                cursor: 'pointer'
              }}>
                <option>PDF</option>
                <option>CSV</option>
                <option>Excel</option>
              </select>
            </div>
          </div>

          <div style={{ padding: '2rem' }}>
            {/* Widget Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1rem',
              marginBottom: '1.5rem'
            }}>
              {/* KPI Widget */}
              <div style={{
                background: 'var(--color-bg-panel)',
                border: '2px dashed var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem',
                transition: 'all 0.2s ease',
                cursor: 'grab'
              }}>
                <div style={{
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  color: 'var(--color-text-secondary)',
                  marginBottom: '0.5rem',
                  letterSpacing: '0.05em'
                }}>
                  Revenue
                </div>
                <div className="mono" style={{
                  fontSize: '2rem',
                  fontWeight: 600,
                  marginBottom: '0.25rem'
                }}>
                  $2.84M
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: 'var(--color-positive)'
                }}>
                  +18.6%
                </div>
              </div>

              {/* Chart Widget */}
              <div style={{
                gridColumn: 'span 2',
                background: 'var(--color-bg-panel)',
                border: '2px dashed var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem',
                cursor: 'grab'
              }}>
                <div style={{
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  marginBottom: '1rem'
                }}>
                  Revenue Trend
                </div>
                <svg width="100%" height="100" viewBox="0 0 400 100" preserveAspectRatio="none">
                  <polyline
                    points="0,80 100,60 200,40 300,50 400,20"
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              {/* Table Widget */}
              <div style={{
                gridColumn: 'span 3',
                background: 'var(--color-bg-panel)',
                border: '2px dashed var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem',
                cursor: 'grab'
              }}>
                <div style={{
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  marginBottom: '1rem'
                }}>
                  Top Performing Channels
                </div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '2fr 1fr 1fr',
                  gap: '0.75rem',
                  fontSize: '0.875rem'
                }}>
                  <div style={{ color: 'var(--color-text-secondary)' }}>Channel</div>
                  <div style={{ color: 'var(--color-text-secondary)' }}>Revenue</div>
                  <div style={{ color: 'var(--color-text-secondary)' }}>Growth</div>

                  <div>Direct</div>
                  <div className="mono">$1.2M</div>
                  <div style={{ color: 'var(--color-positive)' }}>+22%</div>

                  <div>Organic</div>
                  <div className="mono">$890K</div>
                  <div style={{ color: 'var(--color-positive)' }}>+18%</div>

                  <div>Paid</div>
                  <div className="mono">$750K</div>
                  <div style={{ color: 'var(--color-positive)' }}>+15%</div>
                </div>
              </div>
            </div>

            {/* Filters Section */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              padding: '1rem',
              background: 'rgba(255, 255, 255, 0.02)',
              borderRadius: 'var(--radius-md)',
              flexWrap: 'wrap'
            }}>
              <div style={{ flex: 1, minWidth: '200px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.75rem',
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: 'var(--color-text-secondary)'
                }}>
                  Date Range
                </label>
                <select style={{
                  width: '100%',
                  padding: '0.5rem',
                  background: 'var(--color-bg-card)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--color-text-primary)',
                  fontSize: '0.875rem'
                }}>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                  <option>Last 12 months</option>
                </select>
              </div>

              <div style={{ flex: 1, minWidth: '200px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.75rem',
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: 'var(--color-text-secondary)'
                }}>
                  Metrics
                </label>
                <select style={{
                  width: '100%',
                  padding: '0.5rem',
                  background: 'var(--color-bg-card)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--color-text-primary)',
                  fontSize: '0.875rem'
                }}>
                  <option>All metrics</option>
                  <option>Revenue only</option>
                  <option>Growth metrics</option>
                </select>
              </div>
            </div>

            {/* CTA */}
            <div style={{
              marginTop: '2rem',
              textAlign: 'center'
            }}>
              <button className="btn btn-primary">
                Build your report
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
