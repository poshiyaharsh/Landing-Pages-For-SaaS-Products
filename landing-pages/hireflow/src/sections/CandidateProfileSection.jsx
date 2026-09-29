import React, { useState } from 'react';
import { 
  MapPin, 
  Calendar, 
  Star, 
  CheckCircle2, 
  Clock, 
  Briefcase, 
  Sparkles, 
  Send, 
  Check, 
  ChevronRight,
  Download,
  Bookmark,
  ExternalLink
} from 'lucide-react';

export default function CandidateProfileSection({ onOpenDemo }) {
  const [activeTab, setActiveTab] = useState('AI Analysis');
  const [stageAdvanced, setStageAdvanced] = useState(false);

  const timeline = [
    { stage: 'Application', status: 'completed', date: 'Sep 20, 2026', note: 'Direct applicant via LinkedIn' },
    { stage: 'AI Screening', status: 'completed', date: 'Sep 21, 2026', note: '94% fit score auto-calculated' },
    { stage: 'Shortlisted', status: 'completed', date: 'Sep 22, 2026', note: 'Approved by Marcus Vance' },
    { stage: 'Interview', status: stageAdvanced ? 'completed' : 'current', date: 'Today · 3:30 PM', note: 'Panel interview in progress' },
    { stage: 'Final Review', status: stageAdvanced ? 'current' : 'pending', date: stageAdvanced ? 'Tomorrow · 10:00 AM' : 'Pending', note: 'Executive sign-off' }
  ];

  return (
    <section className="section" id="candidate-profile" style={{ background: 'var(--color-white)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge section-tag">
            <Sparkles size={14} />
            <span>ENTERPRISE CANDIDATE DOSSIER</span>
          </div>
          <h2 className="section-title">
            Deep candidate intelligence at a glance.
          </h2>
          <p className="section-subtitle">
            Every candidate evaluated through multidimensional signals, verified timelines, and instant AI alignment radar.
          </p>
        </div>

        {/* Candidate Profile Experience Card */}
        <div 
          className="card" 
          style={{
            maxWidth: '1060px',
            margin: '0 auto',
            padding: '2.25rem',
            borderRadius: 'var(--radius-2xl)',
            boxShadow: 'var(--shadow-xl)',
            border: '1px solid rgba(226, 232, 240, 0.9)'
          }}
        >
          
          {/* Header Profile Bar */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '1.5rem',
            paddingBottom: '1.75rem',
            borderBottom: '1px solid var(--color-border)',
            marginBottom: '1.75rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div style={{
                width: '76px',
                height: '76px',
                borderRadius: '50%',
                background: 'var(--gradient-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.625rem',
                fontWeight: 800,
                boxShadow: '0 6px 18px rgba(124, 58, 237, 0.3)',
                flexShrink: 0
              }}>
                SM
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', flexWrap: 'wrap' }}>
                  <h3 style={{ fontSize: '1.625rem', fontWeight: 800, color: 'var(--color-text-primary)' }}>
                    Sarah Mitchell
                  </h3>
                  <span style={{
                    padding: '0.25rem 0.625rem',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--color-success-bg)',
                    color: 'var(--color-success)',
                    border: '1px solid rgba(16, 185, 129, 0.2)'
                  }}>
                    Interview Ready
                  </span>
                </div>

                <p style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--color-text-secondary)',
                  marginTop: '0.125rem',
                  marginBottom: '0.5rem'
                }}>
                  Senior Product Designer
                </p>

                {/* Profile Meta info */}
                <div style={{
                  display: 'flex',
                  gap: '1.25rem',
                  fontSize: '0.8125rem',
                  color: 'var(--color-text-secondary)',
                  flexWrap: 'wrap'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                    <Clock size={15} color="var(--color-primary)" />
                    <span>Experience: <strong>7 years</strong></span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                    <MapPin size={15} color="var(--color-primary)" />
                    <span>Location: <strong>New York</strong></span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                    <Calendar size={15} color="var(--color-primary)" />
                    <span>Availability: <strong>2 weeks</strong></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Match Score Badge */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem'
            }}>
              <div style={{ textAlign: 'right' }}>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  lineHeight: 1,
                  background: 'var(--gradient-primary)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  94%
                </div>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  AI MATCH SCORE
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                <button
                  onClick={() => setStageAdvanced(!stageAdvanced)}
                  className="btn btn-primary"
                  style={{
                    padding: '0.5rem 1rem',
                    fontSize: '0.8125rem'
                  }}
                >
                  {stageAdvanced ? (
                    <>
                      <Check size={14} />
                      Advanced to Offer
                    </>
                  ) : (
                    <>
                      Advance to Final
                      <ChevronRight size={14} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Profile Content 2-Column Layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 1fr)',
            gap: '2.5rem'
          }} className="profile-layout">
            
            {/* Left Column: Skills & AI Match Analysis */}
            <div>
              {/* Skills Section */}
              <div style={{ marginBottom: '1.75rem' }}>
                <h4 style={{
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.875rem',
                  color: 'var(--color-text-muted)'
                }}>
                  Verified Skills
                </h4>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {['Figma', 'Product Strategy', 'UX Research', 'Design Systems', 'Prototyping'].map((skill) => (
                    <span
                      key={skill}
                      style={{
                        padding: '0.4375rem 0.875rem',
                        background: 'var(--color-lavender)',
                        color: 'var(--color-primary)',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        border: '1px solid var(--color-lavender-border)'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* AI Match Analysis */}
              <div style={{
                padding: '1.5rem',
                background: 'var(--color-background-soft)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--color-border)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.25rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Sparkles size={18} color="var(--color-primary)" />
                    <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                      AI Match Analysis
                    </h4>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-success)', fontWeight: 600 }}>
                    High Confidence Model
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { label: 'Role Alignment', value: 95, color: '#7c3aed' },
                    { label: 'Experience', value: 93, color: '#2563eb' },
                    { label: 'Skills', value: 97, color: '#10b981' },
                    { label: 'Culture Signals', value: 89, color: '#f59e0b' }
                  ].map((metric) => (
                    <div key={metric.label}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '0.375rem',
                        fontSize: '0.8125rem'
                      }}>
                        <span style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>
                          {metric.label}
                        </span>
                        <span style={{ fontWeight: 700, color: metric.color }}>
                          {metric.value}%
                        </span>
                      </div>
                      <div style={{
                        height: '6px',
                        background: 'var(--color-white)',
                        borderRadius: '3px',
                        overflow: 'hidden'
                      }}>
                        <div style={{
                          height: '100%',
                          width: `${metric.value}%`,
                          background: metric.color,
                          borderRadius: '3px'
                        }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Hiring Timeline */}
            <div>
              <h4 style={{
                fontSize: '0.8125rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '1rem',
                color: 'var(--color-text-muted)'
              }}>
                Recruitment Timeline
              </h4>

              <div style={{ position: 'relative' }}>
                {timeline.map((item, index) => {
                  const isDone = item.status === 'completed';
                  const isCurrent = item.status === 'current';

                  return (
                    <div
                      key={item.stage}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '1rem',
                        paddingBottom: index < timeline.length - 1 ? '1.5rem' : 0,
                        position: 'relative'
                      }}
                    >
                      {/* Vertical connecting line */}
                      {index < timeline.length - 1 && (
                        <div style={{
                          position: 'absolute',
                          left: '13px',
                          top: '26px',
                          width: '2px',
                          height: 'calc(100% - 10px)',
                          background: isDone ? 'var(--color-primary)' : 'var(--color-border)',
                          zIndex: 0
                        }} />
                      )}

                      {/* Timeline status pip */}
                      <div style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: isDone 
                          ? 'var(--color-primary)' 
                          : isCurrent 
                            ? 'var(--color-lavender)' 
                            : 'var(--color-background)',
                        border: `2px solid ${isDone || isCurrent ? 'var(--color-primary)' : 'var(--color-border)'}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        flexShrink: 0,
                        zIndex: 1,
                        boxShadow: isCurrent ? '0 0 10px rgba(124, 58, 237, 0.4)' : 'none'
                      }}>
                        {isDone ? (
                          <CheckCircle2 size={16} />
                        ) : isCurrent ? (
                          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-primary)' }} />
                        ) : (
                          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-border)' }} />
                        )}
                      </div>

                      {/* Stage info */}
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span style={{
                            fontSize: '0.875rem',
                            fontWeight: 700,
                            color: isDone || isCurrent ? 'var(--color-text-primary)' : 'var(--color-text-muted)'
                          }}>
                            {item.stage}
                          </span>
                          <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                            {item.date}
                          </span>
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', marginTop: '0.125rem' }}>
                          {item.note}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .profile-layout {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
