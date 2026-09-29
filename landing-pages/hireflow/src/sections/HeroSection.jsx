import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Search, 
  Filter, 
  CheckCircle2, 
  FileCheck, 
  Star, 
  BrainCircuit, 
  SlidersHorizontal,
  ChevronRight,
  TrendingUp,
  MapPin,
  Clock
} from 'lucide-react';
import { candidates, trustedCompanies } from '../data/mockData';

export default function HeroSection({ onOpenDemo, onSelectCandidate }) {
  const [activeFilter, setActiveFilter] = useState('All Candidates');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCandidateId, setSelectedCandidateId] = useState(1);

  // Filter candidates dynamically based on search and status tabs
  const filteredCandidates = candidates.filter((candidate) => {
    const matchesSearch = 
      candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;
    if (activeFilter === 'All Candidates') return true;
    if (activeFilter === 'Recommended') return candidate.status === 'Recommended' || candidate.matchScore >= 90;
    if (activeFilter === 'Interview Ready') return candidate.status === 'Interview Ready';
    if (activeFilter === 'New') return candidate.status === 'Screening';
    return true;
  });

  const filterTabs = ['All Candidates', 'Recommended', 'Interview Ready', 'New'];

  return (
    <section 
      className="section bg-radial-hero bg-subtle-grid" 
      style={{
        paddingTop: '3.5rem',
        paddingBottom: '5rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container-wide">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 1.15fr)',
          gap: '3.5rem',
          alignItems: 'center'
        }} className="hero-layout">
          
          {/* Left Column: Hero Copy */}
          <div style={{ maxWidth: '620px' }}>
            {/* Eyebrow */}
            <div 
              className="badge" 
              style={{ 
                marginBottom: '1.25rem',
                backgroundColor: 'rgba(245, 243, 255, 0.9)',
                backdropFilter: 'blur(8px)'
              }}
            >
              <Sparkles size={14} className="text-primary" />
              <span>AI-POWERED RECRUITMENT</span>
            </div>

            {/* Main Heading */}
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5.2vw, 3.85rem)',
              fontWeight: 800,
              lineHeight: 1.12,
              marginBottom: '1.25rem',
              letterSpacing: '-0.03em',
              color: 'var(--color-text-primary)'
            }}>
              Find the <span className="gradient-text">right people</span>, without the endless search.
            </h1>

            {/* Supporting Copy */}
            <p style={{
              fontSize: 'clamp(1.0625rem, 1.8vw, 1.25rem)',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.6,
              marginBottom: '2rem',
              fontWeight: 400
            }}>
              HireFlow brings AI-powered screening, candidate matching, interview scheduling, and hiring insights into one intelligent recruitment workspace.
            </p>

            {/* CTAs */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'center',
              marginBottom: '2.75rem',
              flexWrap: 'wrap'
            }}>
              <button 
                onClick={() => onOpenDemo ? onOpenDemo('Start Hiring Smarter') : null}
                className="btn btn-primary"
                style={{
                  padding: '0.875rem 1.75rem',
                  fontSize: '1rem'
                }}
              >
                Start Hiring Smarter
                <ArrowRight size={18} />
              </button>
              
              <a 
                href="#features"
                className="btn btn-secondary"
                style={{
                  padding: '0.875rem 1.625rem',
                  fontSize: '1rem'
                }}
              >
                See How It Works
              </a>
            </div>

            {/* Trust Section */}
            <div style={{
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(226, 232, 240, 0.8)'
            }}>
              <p style={{
                fontSize: '0.8125rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--color-text-muted)',
                marginBottom: '1rem',
                fontWeight: 600
              }}>
                Trusted by modern hiring teams
              </p>
              
              <div style={{
                display: 'flex',
                gap: '2rem',
                alignItems: 'center',
                flexWrap: 'wrap'
              }}>
                {trustedCompanies.map((company) => (
                  <div
                    key={company}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.375rem',
                      color: '#475569',
                      fontWeight: 700,
                      fontSize: '1rem',
                      letterSpacing: '-0.02em',
                      opacity: 0.85
                    }}
                  >
                    <span style={{
                      display: 'inline-block',
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--color-primary)',
                      opacity: 0.6
                    }} />
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Recruitment Dashboard Mockup & Floating AI Elements */}
          <div style={{ position: 'relative' }}>
            
            {/* Floating Element 1: AI Match Badge (Top Right) */}
            <div
              className="floating-1 glass"
              style={{
                position: 'absolute',
                top: '-24px',
                right: '-16px',
                padding: '0.875rem 1.125rem',
                borderRadius: 'var(--radius-xl)',
                boxShadow: 'var(--shadow-xl)',
                zIndex: 20,
                border: '1px solid rgba(255, 255, 255, 0.95)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div className="match-score" style={{ width: '2.75rem', height: '2.75rem', fontSize: '0.875rem' }}>
                  94%
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                    <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                      AI Match
                    </span>
                    <span style={{ 
                      fontSize: '0.6875rem', 
                      background: 'var(--color-success-bg)', 
                      color: 'var(--color-success)', 
                      padding: '0.125rem 0.375rem', 
                      borderRadius: '4px',
                      fontWeight: 600
                    }}>
                      High Fit
                    </span>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>
                    Strong alignment with role requirements
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Element 2: Resume Scan (Bottom Left) */}
            <div
              className="floating-2 glass"
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '-24px',
                padding: '0.875rem 1.125rem',
                borderRadius: 'var(--radius-xl)',
                boxShadow: 'var(--shadow-xl)',
                zIndex: 20,
                border: '1px solid rgba(255, 255, 255, 0.95)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'var(--color-success-bg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-success)'
                }}>
                  <FileCheck size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                    Resume analyzed
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <CheckCircle2 size={12} color="var(--color-success)" />
                    18 skills detected
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Element 3: Hiring Insight (Top Left / Accent) */}
            <div
              className="floating-3 glass"
              style={{
                position: 'absolute',
                bottom: '85px',
                right: '-28px',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-xl)',
                boxShadow: 'var(--shadow-lg)',
                zIndex: 20,
                border: '1px solid rgba(255, 255, 255, 0.95)',
                maxWidth: '240px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '8px',
                  background: 'var(--color-lavender)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-primary)',
                  flexShrink: 0
                }}>
                  <Sparkles size={14} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                    Top candidate identified
                  </div>
                  <div style={{ fontSize: '0.71875rem', color: 'var(--color-text-secondary)', lineHeight: 1.35 }}>
                    Sarah Mitchell matches <strong>94%</strong> of your requirements.
                  </div>
                </div>
              </div>
            </div>

            {/* Main Interactive Dashboard Card */}
            <div 
              className="card"
              style={{
                padding: '1.75rem',
                backgroundColor: 'var(--color-white)',
                boxShadow: '0 24px 48px -12px rgba(124, 58, 237, 0.14), 0 8px 24px -4px rgba(15, 23, 42, 0.08)',
                borderRadius: 'var(--radius-2xl)',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                position: 'relative',
                zIndex: 10
              }}
            >
              {/* Dashboard Window Header Bar */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '1.125rem',
                borderBottom: '1px solid var(--color-border-light)',
                marginBottom: '1.25rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }} />
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginLeft: '0.5rem'
                  }}>
                    <BrainCircuit size={18} color="var(--color-primary)" />
                    <span style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      fontSize: '1rem',
                      color: 'var(--color-text-primary)'
                    }}>
                      Candidate Intelligence
                    </span>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <span style={{
                    fontSize: '0.75rem',
                    color: 'var(--color-text-muted)',
                    background: 'var(--color-background)',
                    padding: '0.25rem 0.625rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border-light)',
                    fontWeight: 500
                  }}>
                    Live Syncing
                  </span>
                </div>
              </div>

              {/* Search Bar & Actions */}
              <div style={{
                display: 'flex',
                gap: '0.625rem',
                marginBottom: '1rem',
                alignItems: 'center'
              }}>
                <div style={{
                  position: 'relative',
                  flex: 1
                }}>
                  <Search 
                    size={16} 
                    style={{
                      position: 'absolute',
                      left: '0.875rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'var(--color-text-muted)'
                    }} 
                  />
                  <input
                    type="text"
                    placeholder="Search candidates by name, role, or skills..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Search candidates"
                    style={{
                      width: '100%',
                      padding: '0.625rem 0.875rem 0.625rem 2.375rem',
                      fontSize: '0.875rem',
                      background: 'var(--color-background)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--color-text-primary)',
                      outline: 'none',
                      transition: 'border-color 0.15s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      style={{
                        position: 'absolute',
                        right: '0.625rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        fontSize: '0.75rem',
                        color: 'var(--color-text-muted)',
                        padding: '0.25rem'
                      }}
                    >
                      Clear
                    </button>
                  )}
                </div>

                <button 
                  style={{
                    padding: '0.625rem 0.875rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--color-background)',
                    border: '1px solid var(--color-border)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                    fontSize: '0.8125rem',
                    color: 'var(--color-text-secondary)',
                    fontWeight: 500
                  }}
                  title="Filter options"
                >
                  <Filter size={14} />
                  <span className="hide-mobile">Filter</span>
                </button>
              </div>

              {/* Filter Tabs */}
              <div style={{
                display: 'flex',
                gap: '0.375rem',
                marginBottom: '1.25rem',
                overflowX: 'auto',
                paddingBottom: '0.25rem'
              }}>
                {filterTabs.map((tab) => {
                  const isActive = activeFilter === tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveFilter(tab)}
                      style={{
                        padding: '0.375rem 0.875rem',
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        borderRadius: 'var(--radius-full)',
                        background: isActive ? 'var(--gradient-primary)' : 'var(--color-background)',
                        color: isActive ? '#ffffff' : 'var(--color-text-secondary)',
                        border: `1px solid ${isActive ? 'transparent' : 'var(--color-border-light)'}`,
                        transition: 'all 0.15s ease',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>

              {/* Candidate Cards List */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.875rem'
              }}>
                {filteredCandidates.length === 0 ? (
                  <div style={{
                    padding: '2rem',
                    textAlign: 'center',
                    color: 'var(--color-text-muted)',
                    fontSize: '0.875rem'
                  }}>
                    No candidates found matching "{searchQuery}".
                  </div>
                ) : (
                  filteredCandidates.map((candidate) => {
                    const isSelected = selectedCandidateId === candidate.id;
                    const isInterviewReady = candidate.status === 'Interview Ready';
                    const isRecommended = candidate.status === 'Recommended';

                    return (
                      <div
                        key={candidate.id}
                        onClick={() => {
                          setSelectedCandidateId(candidate.id);
                          if (onSelectCandidate) onSelectCandidate(candidate);
                        }}
                        style={{
                          padding: '1.125rem',
                          background: isSelected ? 'var(--color-lavender-subtle)' : 'var(--color-white)',
                          borderRadius: 'var(--radius-xl)',
                          border: `1px solid ${isSelected ? 'var(--color-primary)' : 'var(--color-border)'}`,
                          boxShadow: isSelected ? '0 4px 14px rgba(124, 58, 237, 0.12)' : 'var(--shadow-xs)',
                          transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                          cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                          if (!isSelected) {
                            e.currentTarget.style.borderColor = 'var(--color-primary-light)';
                            e.currentTarget.style.transform = 'translateY(-1px)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isSelected) {
                            e.currentTarget.style.borderColor = 'var(--color-border)';
                            e.currentTarget.style.transform = 'translateY(0)';
                          }
                        }}
                      >
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '1rem'
                        }}>
                          {/* Left: Avatar & Info */}
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', minWidth: 0 }}>
                            <div style={{
                              width: '44px',
                              height: '44px',
                              borderRadius: '50%',
                              background: 'var(--gradient-primary)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'white',
                              fontWeight: 700,
                              fontSize: '0.875rem',
                              flexShrink: 0,
                              boxShadow: '0 2px 8px rgba(124, 58, 237, 0.25)'
                            }}>
                              {candidate.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            
                            <div style={{ minWidth: 0 }}>
                              <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                flexWrap: 'wrap'
                              }}>
                                <span style={{
                                  fontWeight: 700,
                                  fontSize: '0.9375rem',
                                  color: 'var(--color-text-primary)'
                                }}>
                                  {candidate.name}
                                </span>
                                
                                <span style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  padding: '0.125rem 0.5rem',
                                  fontSize: '0.6875rem',
                                  fontWeight: 600,
                                  borderRadius: 'var(--radius-full)',
                                  background: isInterviewReady 
                                    ? 'var(--color-success-bg)' 
                                    : isRecommended 
                                      ? 'var(--color-lavender)' 
                                      : 'var(--color-background)',
                                  color: isInterviewReady 
                                    ? 'var(--color-success)' 
                                    : isRecommended 
                                      ? 'var(--color-primary)' 
                                      : 'var(--color-text-secondary)',
                                  border: `1px solid ${
                                    isInterviewReady 
                                      ? 'rgba(16, 185, 129, 0.2)' 
                                      : isRecommended 
                                        ? 'var(--color-lavender-border)' 
                                        : 'var(--color-border)'
                                  }`
                                }}>
                                  {candidate.status}
                                </span>
                              </div>

                              <div style={{
                                fontSize: '0.8125rem',
                                color: 'var(--color-text-secondary)',
                                marginTop: '0.125rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                              }}>
                                <span>{candidate.role}</span>
                                <span style={{ color: 'var(--color-text-muted)' }}>•</span>
                                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                                  {candidate.experience}
                                </span>
                              </div>

                              {/* Skills */}
                              <div style={{
                                display: 'flex',
                                gap: '0.375rem',
                                flexWrap: 'wrap',
                                marginTop: '0.5rem'
                              }}>
                                {candidate.skills.map((skill) => (
                                  <span
                                    key={skill}
                                    style={{
                                      padding: '0.125rem 0.5rem',
                                      fontSize: '0.6875rem',
                                      fontWeight: 500,
                                      borderRadius: 'var(--radius-sm)',
                                      background: 'var(--color-background-soft)',
                                      color: 'var(--color-text-secondary)',
                                      border: '1px solid var(--color-border-light)'
                                    }}
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Right: Match Score Ring */}
                          <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            flexShrink: 0
                          }}>
                            <div 
                              className="match-score"
                              style={{
                                width: '3.125rem',
                                height: '3.125rem',
                                fontSize: '0.9375rem',
                                background: candidate.matchScore >= 90 ? 'var(--color-lavender)' : '#fffbeb',
                                borderColor: candidate.matchScore >= 90 ? 'var(--color-primary)' : 'var(--color-warning)',
                                color: candidate.matchScore >= 90 ? 'var(--color-primary)' : '#d97706'
                              }}
                            >
                              {candidate.matchScore}%
                            </div>
                            <span style={{
                              fontSize: '0.6875rem',
                              color: 'var(--color-text-muted)',
                              marginTop: '0.25rem',
                              fontWeight: 600,
                              textTransform: 'uppercase',
                              letterSpacing: '0.04em'
                            }}>
                              Match
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Bottom Insight Footer in Dashboard */}
              <div style={{
                marginTop: '1.25rem',
                paddingTop: '0.875rem',
                borderTop: '1px solid var(--color-border-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.78125rem',
                color: 'var(--color-text-secondary)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                  <TrendingUp size={14} color="var(--color-primary)" />
                  <span>3 candidate evaluations completed in the last hour</span>
                </div>
                <span style={{ fontWeight: 600, color: 'var(--color-primary)' }}>
                  Auto-Ranked by AI
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-layout {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .floating-1, .floating-2, .floating-3 {
            display: none !important;
          }
        }
        @media (max-width: 480px) {
          .hide-mobile {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
