import React from 'react';
import { 
  FileStack, 
  Target, 
  CalendarClock, 
  AlertTriangle, 
  XCircle, 
  Clock, 
  Layers,
  CalendarX,
  UserX
} from 'lucide-react';

export default function ProblemSection() {
  return (
    <section className="section" id="problem" style={{ background: 'var(--color-background-soft)' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge section-tag" style={{ background: 'rgba(239, 68, 68, 0.08)', color: '#dc2626', borderColor: 'rgba(239, 68, 68, 0.2)' }}>
            <AlertTriangle size={14} />
            <span>THE RECRUITMENT BOTTLENECK</span>
          </div>
          <h2 className="section-title">
            Hiring shouldn't feel like<br />searching through a haystack.
          </h2>
          <p className="section-subtitle">
            Traditional recruiting workflows are bogged down by manual parsing, noisy keyword matches, and scheduling gridlock.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          
          {/* Card 1: Too Many Resumes */}
          <div 
            className="card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '2rem',
              backgroundColor: 'var(--color-white)',
              borderRadius: 'var(--radius-xl)'
            }}
          >
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1rem'
              }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(239, 68, 68, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#dc2626'
                }}>
                  <FileStack size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                    Too Many Resumes
                  </h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>
                    Application Overload
                  </span>
                </div>
              </div>

              <p style={{
                fontSize: '0.9375rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.6,
                marginBottom: '1.5rem'
              }}>
                Recruiters spend hours manually reviewing hundreds of applications, leading to recruiter burnout and overlooked top talent.
              </p>
            </div>

            {/* Visual: Stack of resumes with overwhelmed indicator */}
            <div style={{
              background: 'var(--color-background)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.25rem',
              border: '1px solid var(--color-border)',
              position: 'relative'
            }}>
              {/* Stacked cards visual effect */}
              <div style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                <div style={{
                  background: 'var(--color-white)',
                  padding: '0.625rem 0.875rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-xs)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#cbd5e1' }} />
                    <span style={{ fontSize: '0.8125rem', fontWeight: 600 }}>Senior Engineer (420+ PDFs)</span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: '#dc2626', fontWeight: 600 }}>Overwhelmed</span>
                </div>

                <div style={{
                  background: 'var(--color-white)',
                  padding: '0.625rem 0.875rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  opacity: 0.85,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Product Designer (312 PDFs)</span>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--color-text-muted)' }}>Avg 6s review</span>
                </div>

                {/* Overwhelmed Alert Overlay */}
                <div style={{
                  marginTop: '0.5rem',
                  padding: '0.625rem 0.75rem',
                  background: '#fef2f2',
                  border: '1px solid #fecaca',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#991b1b',
                  fontSize: '0.75rem',
                  fontWeight: 600
                }}>
                  <AlertTriangle size={15} color="#dc2626" />
                  <span>34 hrs spent per requisition on screening alone</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Poor Candidate Matching */}
          <div 
            className="card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '2rem',
              backgroundColor: 'var(--color-white)',
              borderRadius: 'var(--radius-xl)'
            }}
          >
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1rem'
              }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(245, 158, 11, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#d97706'
                }}>
                  <Target size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                    Poor Candidate Matching
                  </h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>
                    Keyword Filter Traps
                  </span>
                </div>
              </div>

              <p style={{
                fontSize: '0.9375rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.6,
                marginBottom: '1.5rem'
              }}>
                Strong candidates can disappear beneath keyword-heavy screening, while keyword-stuffed resumes pass through without the actual skills.
              </p>
            </div>

            {/* Visual: Candidate profiles with mismatched keyword indicators */}
            <div style={{
              background: 'var(--color-background)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.25rem',
              border: '1px solid var(--color-border)'
            }}>
              <div style={{
                background: 'var(--color-white)',
                padding: '0.75rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                marginBottom: '0.5rem'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.375rem' }}>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 700 }}>Senior React Lead (10 yrs)</span>
                  <span style={{ 
                    fontSize: '0.6875rem', 
                    padding: '0.125rem 0.375rem', 
                    background: '#fef2f2', 
                    color: '#dc2626', 
                    borderRadius: '4px',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2px'
                  }}>
                    <XCircle size={10} /> Filter Rejected
                  </span>
                </div>
                <div style={{ fontSize: '0.71875rem', color: '#64748b' }}>
                  Missing exact keyword "Next.js 14", despite building enterprise SSR platforms
                </div>
              </div>

              <div style={{
                padding: '0.5rem 0.75rem',
                background: '#fffbeb',
                border: '1px solid #fde68a',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#92400e',
                fontSize: '0.75rem',
                fontWeight: 600
              }}>
                <UserX size={15} color="#d97706" />
                <span>42% of qualified candidates discarded by naive ATS</span>
              </div>
            </div>
          </div>

          {/* Card 3: Endless Coordination */}
          <div 
            className="card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '2rem',
              backgroundColor: 'var(--color-white)',
              borderRadius: 'var(--radius-xl)'
            }}
          >
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1rem'
              }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(124, 58, 237, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-primary)'
                }}>
                  <CalendarClock size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                    Endless Coordination
                  </h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>
                    Scheduling Gridlock
                  </span>
                </div>
              </div>

              <p style={{
                fontSize: '0.9375rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.6,
                marginBottom: '1.5rem'
              }}>
                Scheduling interviews across multi-interviewer teams creates unnecessary delays, causing great candidates to accept competing offers.
              </p>
            </div>

            {/* Visual: Calendar with overlapping schedules */}
            <div style={{
              background: 'var(--color-background)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.25rem',
              border: '1px solid var(--color-border)'
            }}>
              <div style={{
                background: 'var(--color-white)',
                padding: '0.625rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                marginBottom: '0.5rem'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 600, marginBottom: '0.375rem' }}>
                  <span>Thursday Panel Interview</span>
                  <span style={{ color: '#dc2626' }}>Schedule Conflict</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.375rem' }}>
                  <div style={{ padding: '0.375rem', background: '#fee2e2', borderRadius: '4px', fontSize: '0.6875rem', textAlign: 'center', color: '#991b1b', fontWeight: 600 }}>
                    Hiring Mgr: Busy
                  </div>
                  <div style={{ padding: '0.375rem', background: '#ecfdf5', borderRadius: '4px', fontSize: '0.6875rem', textAlign: 'center', color: '#065f46', fontWeight: 600 }}>
                    Lead: Free
                  </div>
                  <div style={{ padding: '0.375rem', background: '#fee2e2', borderRadius: '4px', fontSize: '0.6875rem', textAlign: 'center', color: '#991b1b', fontWeight: 600 }}>
                    Candidate: OOO
                  </div>
                </div>
              </div>

              <div style={{
                padding: '0.5rem 0.75rem',
                background: '#fef2f2',
                border: '1px solid #fecaca',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#991b1b',
                fontSize: '0.75rem',
                fontWeight: 600
              }}>
                <CalendarX size={15} color="#dc2626" />
                <span>+6 days average latency in scheduling panels</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
