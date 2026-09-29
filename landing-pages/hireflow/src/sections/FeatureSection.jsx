import React, { useState } from 'react';
import { 
  FileSearch, 
  Target, 
  CalendarCheck, 
  Kanban, 
  BrainCircuit, 
  Check, 
  Clock, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  User,
  Users,
  Calendar,
  ThumbsUp,
  Sliders,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';

export default function FeatureSection() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [scheduledConfirmed, setScheduledConfirmed] = useState(false);
  const [pipelineSelection, setPipelineSelection] = useState('Sarah Mitchell');

  const featureTabs = [
    { id: 0, label: '01. AI Resume Screening', icon: FileSearch },
    { id: 1, label: '02. Candidate Matching', icon: Target },
    { id: 2, label: '03. Interview Scheduling', icon: CalendarCheck },
    { id: 3, label: '04. Candidate Pipeline', icon: Kanban },
    { id: 4, label: '05. AI Interview Insights', icon: BrainCircuit }
  ];

  return (
    <section className="section" id="features" style={{ background: 'var(--color-background-soft)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge section-tag">
            <Sparkles size={14} />
            <span>INTELLIGENT HIRING SUITE</span>
          </div>
          <h2 className="section-title">
            Enterprise capabilities built for modern recruiters.
          </h2>
          <p className="section-subtitle">
            Explore the five core AI modules powering fast, unbiased, and effective hiring decisions.
          </p>
        </div>

        {/* Feature Navigation Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          marginBottom: '2.5rem',
          flexWrap: 'wrap'
        }}>
          {featureTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeFeature === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFeature(tab.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.625rem 1.125rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  background: isActive ? 'var(--gradient-primary)' : 'var(--color-white)',
                  color: isActive ? '#ffffff' : 'var(--color-text-secondary)',
                  border: `1px solid ${isActive ? 'transparent' : 'var(--color-border)'}`,
                  boxShadow: isActive ? '0 4px 14px rgba(124, 58, 237, 0.25)' : 'var(--shadow-xs)',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer'
                }}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Feature Showcase Card */}
        <div 
          className="card" 
          style={{
            padding: '2.5rem',
            backgroundColor: 'var(--color-white)',
            borderRadius: 'var(--radius-2xl)',
            boxShadow: 'var(--shadow-xl)',
            border: '1px solid rgba(226, 232, 240, 0.9)',
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >

          {/* ========================================================= */}
          {/* FEATURE 01: AI Resume Screening */}
          {/* ========================================================= */}
          {activeFeature === 0 && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)',
              gap: '3rem',
              alignItems: 'center'
            }} className="feature-grid">
              
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--color-primary)',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  marginBottom: '0.75rem'
                }}>
                  <span>FEATURE 01</span>
                  <span>•</span>
                  <span>AI RESUME SCREENING</span>
                </div>

                <h3 style={{
                  fontSize: 'clamp(1.75rem, 3.2vw, 2.35rem)',
                  fontWeight: 800,
                  marginBottom: '1rem',
                  lineHeight: 1.2,
                  letterSpacing: '-0.025em'
                }}>
                  Read thousands of resumes. <span className="gradient-text">In minutes.</span>
                </h3>

                <p style={{
                  fontSize: '1.0625rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '1.75rem'
                }}>
                  HireFlow automatically analyzes resumes against your job requirements and surfaces the candidates worth your attention, eliminating hours of repetitive manual reviews.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    'Instant semantic extraction of real accomplishments',
                    'Cross-references 50+ programming languages & frameworks',
                    'Zero manual keyword boolean query formulation'
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                      <div style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: 'var(--color-lavender)',
                        color: 'var(--color-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <Check size={13} strokeWidth={3} />
                      </div>
                      <span style={{ fontSize: '0.9375rem', color: 'var(--color-text-primary)', fontWeight: 500 }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual: Resume parsing interface */}
              <div style={{
                background: 'var(--color-background)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--color-border)',
                padding: '1.75rem',
                boxShadow: 'var(--shadow-md)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid var(--color-border)',
                  marginBottom: '1.25rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'var(--gradient-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white'
                    }}>
                      <FileSearch size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.9375rem', fontWeight: 700 }}>Resume Analysis</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                        Parsed in 1.4 seconds
                      </div>
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: 'var(--color-white)',
                    padding: '0.375rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid var(--color-border)'
                  }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>AI Match:</span>
                    <span style={{ fontSize: '0.875rem', color: 'var(--color-primary)', fontWeight: 800 }}>92%</span>
                  </div>
                </div>

                {/* Candidate Quick Stats */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1rem',
                  marginBottom: '1.25rem'
                }}>
                  <div style={{
                    background: 'var(--color-white)',
                    padding: '0.875rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)'
                  }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>Verified Experience</div>
                    <div style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>6 years</div>
                    <div style={{ fontSize: '0.6875rem', color: 'var(--color-success)', marginTop: '0.125rem' }}>Exceeds 5yr role req</div>
                  </div>

                  <div style={{
                    background: 'var(--color-white)',
                    padding: '0.875rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)'
                  }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>Education & Signals</div>
                    <div style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>B.S. Comp Sci</div>
                    <div style={{ fontSize: '0.6875rem', color: 'var(--color-text-muted)', marginTop: '0.125rem' }}>Top Tier University</div>
                  </div>
                </div>

                {/* Detected Skills */}
                <div style={{
                  background: 'var(--color-white)',
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)'
                }}>
                  <div style={{
                    fontSize: '0.78125rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--color-text-secondary)',
                    marginBottom: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <span>Skills Detected</span>
                    <span style={{ color: 'var(--color-success)', fontSize: '0.75rem' }}>5/5 Core Match</span>
                  </div>

                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {['React', 'TypeScript', 'Node.js', 'AWS', 'PostgreSQL'].map((skill) => (
                      <span
                        key={skill}
                        style={{
                          padding: '0.375rem 0.75rem',
                          fontSize: '0.8125rem',
                          fontWeight: 600,
                          borderRadius: 'var(--radius-sm)',
                          background: 'var(--color-lavender)',
                          color: 'var(--color-primary)',
                          border: '1px solid var(--color-lavender-border)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.375rem'
                        }}
                      >
                        <CheckCircle2 size={12} color="var(--color-primary)" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* FEATURE 02: Candidate Matching */}
          {/* ========================================================= */}
          {activeFeature === 1 && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)',
              gap: '3rem',
              alignItems: 'center'
            }} className="feature-grid">
              
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--color-primary)',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  marginBottom: '0.75rem'
                }}>
                  <span>FEATURE 02</span>
                  <span>•</span>
                  <span>CANDIDATE MATCHING</span>
                </div>

                <h3 style={{
                  fontSize: 'clamp(1.75rem, 3.2vw, 2.35rem)',
                  fontWeight: 800,
                  marginBottom: '1rem',
                  lineHeight: 1.2,
                  letterSpacing: '-0.025em'
                }}>
                  Match skills to opportunities <span className="gradient-text">instantly.</span>
                </h3>

                <p style={{
                  fontSize: '1.0625rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '1.75rem'
                }}>
                  Go beyond keywords. HireFlow evaluates skills, experience, role requirements, and candidate profiles to identify strong matches with holistic multi-dimensional scoring.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    'Multi-factor weighted evaluation (Skills, Experience, Role Fit)',
                    'Culture and collaborative signal detection',
                    'Transparent matching breakdown with no black-box scores'
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                      <div style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: 'var(--color-lavender)',
                        color: 'var(--color-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <Check size={13} strokeWidth={3} />
                      </div>
                      <span style={{ fontSize: '0.9375rem', color: 'var(--color-text-primary)', fontWeight: 500 }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual: Candidate comparison interface */}
              <div style={{
                background: 'var(--color-background)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--color-border)',
                padding: '1.75rem',
                boxShadow: 'var(--shadow-md)'
              }}>
                {/* Candidate Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid var(--color-border)',
                  marginBottom: '1.25rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                    <div style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      background: 'var(--gradient-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 700
                    }}>
                      SM
                    </div>
                    <div>
                      <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                        Sarah Mitchell
                      </div>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>
                        Candidate Comparison: Senior Product Designer
                      </div>
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary)' }}>
                      94%
                    </div>
                    <div style={{ fontSize: '0.6875rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                      OVERALL MATCH
                    </div>
                  </div>
                </div>

                {/* Criteria Breakdown Progress */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  {[
                    { label: 'Skills', score: 98, color: '#7c3aed' },
                    { label: 'Experience', score: 92, color: '#2563eb' },
                    { label: 'Role Fit', score: 95, color: '#10b981' },
                    { label: 'Culture Signals', score: 89, color: '#f59e0b' }
                  ].map((criterion) => (
                    <div key={criterion.label} style={{
                      background: 'var(--color-white)',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--color-border)'
                    }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '0.375rem',
                        fontSize: '0.8125rem'
                      }}>
                        <span style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>
                          {criterion.label}
                        </span>
                        <span style={{ fontWeight: 700, color: criterion.color }}>
                          {criterion.score}%
                        </span>
                      </div>
                      <div style={{
                        height: '6px',
                        background: 'var(--color-background-soft)',
                        borderRadius: '3px',
                        overflow: 'hidden'
                      }}>
                        <div style={{
                          height: '100%',
                          width: `${criterion.score}%`,
                          background: criterion.color,
                          borderRadius: '3px',
                          transition: 'width 0.8s ease'
                        }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* FEATURE 03: Interview Scheduling */}
          {/* ========================================================= */}
          {activeFeature === 2 && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)',
              gap: '3rem',
              alignItems: 'center'
            }} className="feature-grid">
              
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--color-primary)',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  marginBottom: '0.75rem'
                }}>
                  <span>FEATURE 03</span>
                  <span>•</span>
                  <span>INTERVIEW SCHEDULING</span>
                </div>

                <h3 style={{
                  fontSize: 'clamp(1.75rem, 3.2vw, 2.35rem)',
                  fontWeight: 800,
                  marginBottom: '1rem',
                  lineHeight: 1.2,
                  letterSpacing: '-0.025em'
                }}>
                  Stop chasing <span className="gradient-text">calendars.</span>
                </h3>

                <p style={{
                  fontSize: '1.0625rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '1.75rem'
                }}>
                  Let candidates and interviewers find the right time automatically. Automated multi-party coordination, timezone handling, and calendar invites with zero back-and-forth emails.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    'Instant multi-calendar coordination with Google & Outlook',
                    'Candidate self-service booking with dynamic hold buffers',
                    'Automated prep packets sent to interviewers before meetings'
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                      <div style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: 'var(--color-lavender)',
                        color: 'var(--color-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <Check size={13} strokeWidth={3} />
                      </div>
                      <span style={{ fontSize: '0.9375rem', color: 'var(--color-text-primary)', fontWeight: 500 }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual: Modern scheduling calendar */}
              <div style={{
                background: 'var(--color-background)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--color-border)',
                padding: '1.75rem',
                boxShadow: 'var(--shadow-md)'
              }}>
                <div style={{
                  background: 'var(--color-white)',
                  padding: '1.5rem',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem'
                  }}>
                    <div>
                      <span style={{
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        color: 'var(--color-primary)',
                        background: 'var(--color-lavender)',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '4px'
                      }}>
                        Panel Interview
                      </span>
                      <h4 style={{ fontSize: '1.125rem', fontWeight: 700, marginTop: '0.375rem' }}>
                        Interview — Sarah Mitchell
                      </h4>
                    </div>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.375rem',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--color-text-primary)'
                    }}>
                      <Clock size={16} color="var(--color-primary)" />
                      <span>Today · 3:30 PM</span>
                    </div>
                  </div>

                  <div style={{
                    padding: '1rem',
                    background: 'var(--color-background-soft)',
                    borderRadius: 'var(--radius-md)',
                    marginBottom: '1.25rem'
                  }}>
                    <div style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--color-text-muted)',
                      textTransform: 'uppercase',
                      marginBottom: '0.625rem'
                    }}>
                      Confirmed Participants
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {[
                        { role: 'Hiring Manager', name: 'Marcus Vance' },
                        { role: 'Product Lead', name: 'Elena Rostova' },
                        { role: 'Candidate', name: 'Sarah Mitchell' }
                      ].map((p, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8125rem' }}>
                          <span style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>{p.name}</span>
                          <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.75rem' }}>{p.role}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setScheduledConfirmed(!scheduledConfirmed)}
                    className="btn btn-primary"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      background: scheduledConfirmed ? 'var(--color-success)' : 'var(--gradient-primary)'
                    }}
                  >
                    {scheduledConfirmed ? (
                      <>
                        <CheckCircle2 size={18} />
                        Interview Confirmed & Cal Invites Sent
                      </>
                    ) : (
                      <>
                        <CalendarCheck size={18} />
                        Confirm Interview
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* FEATURE 04: Candidate Pipeline */}
          {/* ========================================================= */}
          {activeFeature === 3 && (
            <div>
              <div style={{
                maxWidth: '700px',
                marginBottom: '2rem'
              }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--color-primary)',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  marginBottom: '0.75rem'
                }}>
                  <span>FEATURE 04</span>
                  <span>•</span>
                  <span>CANDIDATE PIPELINE</span>
                </div>

                <h3 style={{
                  fontSize: 'clamp(1.75rem, 3.2vw, 2.35rem)',
                  fontWeight: 800,
                  marginBottom: '0.75rem',
                  letterSpacing: '-0.025em'
                }}>
                  Every candidate. <span className="gradient-text">One clear pipeline.</span>
                </h3>

                <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-secondary)' }}>
                  A visual Kanban recruitment board that organizes candidates by hiring stage, with instant drag-and-drop workflow updates and stage telemetry.
                </p>
              </div>

              {/* Visual: Kanban-style recruitment board */}
              <div style={{
                background: 'var(--color-background)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--color-border)',
                padding: '1.5rem',
                overflowX: 'auto'
              }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(5, minmax(180px, 1fr))',
                  gap: '1rem',
                  minWidth: '920px'
                }}>
                  {[
                    { stage: 'Applied', count: 42, color: '#64748b' },
                    { stage: 'AI Screening', count: 18, color: '#7c3aed' },
                    { stage: 'Shortlisted', count: 6, color: '#2563eb' },
                    { stage: 'Interview', count: 3, color: '#0891b2' },
                    { stage: 'Offer', count: 2, color: '#10b981' }
                  ].map((col, idx) => (
                    <div 
                      key={col.stage}
                      style={{
                        background: 'var(--color-white)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--color-border)',
                        padding: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: '260px'
                      }}
                    >
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingBottom: '0.75rem',
                        borderBottom: '1px solid var(--color-border-light)',
                        marginBottom: '0.75rem'
                      }}>
                        <span style={{ fontWeight: 700, fontSize: '0.875rem' }}>{col.stage}</span>
                        <span style={{
                          fontSize: '0.75rem',
                          background: 'var(--color-background)',
                          padding: '0.125rem 0.5rem',
                          borderRadius: 'var(--radius-full)',
                          fontWeight: 600,
                          color: col.color
                        }}>
                          {col.count}
                        </span>
                      </div>

                      {/* Display candidate cards in respective columns */}
                      {idx === 3 && (
                        <div style={{
                          padding: '0.75rem',
                          background: 'var(--color-lavender-subtle)',
                          border: '1px solid var(--color-primary-light)',
                          borderRadius: 'var(--radius-md)',
                          marginBottom: '0.5rem',
                          boxShadow: 'var(--shadow-xs)'
                        }}>
                          <div style={{ fontWeight: 700, fontSize: '0.8125rem' }}>Sarah Mitchell</div>
                          <div style={{ fontSize: '0.6875rem', color: 'var(--color-text-secondary)' }}>Senior Product Designer</div>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginTop: '0.5rem'
                          }}>
                            <span style={{ fontSize: '0.6875rem', color: 'var(--color-primary)', fontWeight: 800 }}>94% Match</span>
                            <span style={{ fontSize: '0.625rem', background: '#ecfdf5', color: '#059669', padding: '0.125rem 0.375rem', borderRadius: '4px', fontWeight: 600 }}>
                              Today 3:30PM
                            </span>
                          </div>
                        </div>
                      )}

                      {idx === 2 && (
                        <div style={{
                          padding: '0.75rem',
                          background: 'var(--color-white)',
                          border: '1px solid var(--color-border)',
                          borderRadius: 'var(--radius-md)',
                          marginBottom: '0.5rem',
                          boxShadow: 'var(--shadow-xs)'
                        }}>
                          <div style={{ fontWeight: 700, fontSize: '0.8125rem' }}>Alex Morgan</div>
                          <div style={{ fontSize: '0.6875rem', color: 'var(--color-text-secondary)' }}>Frontend Engineer</div>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginTop: '0.5rem'
                          }}>
                            <span style={{ fontSize: '0.6875rem', color: 'var(--color-primary)', fontWeight: 800 }}>91% Match</span>
                            <span style={{ fontSize: '0.625rem', background: 'var(--color-lavender)', color: 'var(--color-primary)', padding: '0.125rem 0.375rem', borderRadius: '4px', fontWeight: 600 }}>
                              Recommended
                            </span>
                          </div>
                        </div>
                      )}

                      {idx === 1 && (
                        <div style={{
                          padding: '0.75rem',
                          background: 'var(--color-white)',
                          border: '1px solid var(--color-border)',
                          borderRadius: 'var(--radius-md)',
                          boxShadow: 'var(--shadow-xs)'
                        }}>
                          <div style={{ fontWeight: 700, fontSize: '0.8125rem' }}>David Chen</div>
                          <div style={{ fontSize: '0.6875rem', color: 'var(--color-text-secondary)' }}>Product Manager</div>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginTop: '0.5rem'
                          }}>
                            <span style={{ fontSize: '0.6875rem', color: '#d97706', fontWeight: 800 }}>87% Match</span>
                            <span style={{ fontSize: '0.625rem', background: '#fffbeb', color: '#b45309', padding: '0.125rem 0.375rem', borderRadius: '4px', fontWeight: 600 }}>
                              In Review
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* FEATURE 05: AI Interview Insights */}
          {/* ========================================================= */}
          {activeFeature === 4 && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)',
              gap: '3rem',
              alignItems: 'center'
            }} className="feature-grid">
              
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--color-primary)',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  marginBottom: '0.75rem'
                }}>
                  <span>FEATURE 05</span>
                  <span>•</span>
                  <span>AI INTERVIEW INSIGHTS</span>
                </div>

                <h3 style={{
                  fontSize: 'clamp(1.75rem, 3.2vw, 2.35rem)',
                  fontWeight: 800,
                  marginBottom: '1rem',
                  lineHeight: 1.2,
                  letterSpacing: '-0.025em'
                }}>
                  Turn interviews into <span className="gradient-text">actionable insights.</span>
                </h3>

                <p style={{
                  fontSize: '1.0625rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '1.75rem'
                }}>
                  AI summarizes interview conversations, identifies key signals, and helps recruiters review candidates consistently across unbiased structured criteria.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    'Automated post-interview conversation transcript synthesis',
                    'Key competency score benchmarking across all applicants',
                    'Human-in-the-loop audit trail with verified quotes'
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                      <div style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: 'var(--color-lavender)',
                        color: 'var(--color-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <Check size={13} strokeWidth={3} />
                      </div>
                      <span style={{ fontSize: '0.9375rem', color: 'var(--color-text-primary)', fontWeight: 500 }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual: Interview analysis panel */}
              <div style={{
                background: 'var(--color-background)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--color-border)',
                padding: '1.75rem',
                boxShadow: 'var(--shadow-md)'
              }}>
                <div style={{
                  background: 'var(--color-white)',
                  padding: '1.5rem',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingBottom: '0.875rem',
                    borderBottom: '1px solid var(--color-border)',
                    marginBottom: '1rem'
                  }}>
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>Interview Summary</h4>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Panel Evaluation (45 min call)</span>
                    </div>

                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      padding: '0.25rem 0.625rem',
                      background: 'var(--color-success-bg)',
                      color: 'var(--color-success)',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.75rem',
                      fontWeight: 700
                    }}>
                      <ThumbsUp size={12} />
                      Strong Candidate Signal
                    </span>
                  </div>

                  {/* Criteria Scores */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', marginBottom: '1rem' }}>
                    <div style={{ padding: '0.625rem', background: 'var(--color-background)', borderRadius: '6px', textAlign: 'center' }}>
                      <div style={{ fontSize: '0.6875rem', color: 'var(--color-text-secondary)' }}>Communication</div>
                      <div style={{ fontSize: '1.125rem', fontWeight: 800, color: 'var(--color-primary)' }}>92%</div>
                    </div>
                    <div style={{ padding: '0.625rem', background: 'var(--color-background)', borderRadius: '6px', textAlign: 'center' }}>
                      <div style={{ fontSize: '0.6875rem', color: 'var(--color-text-secondary)' }}>Technical Fit</div>
                      <div style={{ fontSize: '1.125rem', fontWeight: 800, color: '#2563eb' }}>95%</div>
                    </div>
                    <div style={{ padding: '0.625rem', background: 'var(--color-background)', borderRadius: '6px', textAlign: 'center' }}>
                      <div style={{ fontSize: '0.6875rem', color: 'var(--color-text-secondary)' }}>Role Alignment</div>
                      <div style={{ fontSize: '1.125rem', fontWeight: 800, color: '#10b981' }}>90%</div>
                    </div>
                  </div>

                  {/* Key Strengths */}
                  <div style={{
                    padding: '0.875rem',
                    background: 'var(--color-background-soft)',
                    borderRadius: 'var(--radius-md)',
                    marginBottom: '1rem'
                  }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
                      Key Strengths Identified:
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                      {['Strong technical depth', 'Clear communication', 'Excellent problem solving'].map((str) => (
                        <div key={str} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.78125rem', color: 'var(--color-text-secondary)' }}>
                          <CheckCircle2 size={13} color="var(--color-success)" />
                          <span>{str}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Disclaimer Label */}
                  <div style={{
                    fontSize: '0.6875rem',
                    color: 'var(--color-text-muted)',
                    fontStyle: 'italic',
                    textAlign: 'center'
                  }}>
                    Product UI Concept — AI insights are advisory to support human hiring managers.
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .feature-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}