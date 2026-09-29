import React, { useState } from 'react';
import { 
  Sparkles, 
  FileSearch, 
  Target, 
  MessageSquare, 
  TrendingUp, 
  Zap, 
  Send, 
  Bot, 
  User, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export default function AIIntelligenceSection({ onOpenDemo }) {
  const [activePromptIndex, setActivePromptIndex] = useState(0);

  const capabilities = [
    { icon: FileSearch, text: 'Resume understanding', desc: 'Synthesizes non-linear career paths' },
    { icon: Target, text: 'Skill extraction', desc: 'Identifies verified competencies' },
    { icon: Sparkles, text: 'Candidate matching', desc: 'Multi-criteria score evaluation' },
    { icon: MessageSquare, text: 'Interview summaries', desc: 'Automated synthesis & quote tracking' },
    { icon: TrendingUp, text: 'Hiring analytics', desc: 'Real-time velocity & funnel tracking' },
    { icon: Zap, text: 'Smart recommendations', desc: 'Identifies standout high-signal talent' }
  ];

  const cannedConversations = [
    {
      prompt: 'Show me the strongest candidates for the Senior React Developer role.',
      reply: 'I found 12 candidates matching your requirements. 4 candidates have a match score above 90% with verified React, Next.js, and TypeScript depth.',
      candidates: [
        { name: 'Alex Morgan', score: 94, role: 'Senior Frontend Engineer', skills: ['React', 'TypeScript', 'Next.js'] },
        { name: 'Jordan Lee', score: 92, role: 'Staff UI Architect', skills: ['React', 'Redux', 'GraphQL'] }
      ]
    },
    {
      prompt: 'Summarize candidate Sarah Mitchell’s product design interview.',
      reply: 'Sarah demonstrated strong systematic design thinking (95% fit). Interviewers highlighted clear communication, deep Figma workflow mastery, and cross-functional leadership.',
      candidates: [
        { name: 'Sarah Mitchell', score: 94, role: 'Senior Product Designer', skills: ['Figma', 'UX Research', 'Design Systems'] }
      ]
    },
    {
      prompt: 'Which role has the longest interview cycle this quarter?',
      reply: 'Staff DevOps Engineer has an average cycle of 24 days (compared to the 18-day platform benchmark), primarily due to stage-3 take-home assessment review latency.',
      candidates: []
    }
  ];

  const currentChat = cannedConversations[activePromptIndex];

  return (
    <section 
      className="section" 
      id="ai-intelligence"
      style={{
        background: 'linear-gradient(135deg, #6d28d9 0%, #4338ca 50%, #1d4ed8 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative Grid Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.08,
        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
        backgroundSize: '36px 36px',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.15fr)',
          gap: '3.5rem',
          alignItems: 'center'
        }} className="ai-intelligence-grid">
          
          {/* Left Column: AI Value Proposition & Capabilities */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.375rem 0.875rem',
              background: 'rgba(255, 255, 255, 0.18)',
              borderRadius: 'var(--radius-full)',
              marginBottom: '1.25rem',
              fontSize: '0.8125rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.25)'
            }}>
              <Sparkles size={14} />
              <span>RECRUITING COPILOT</span>
            </div>

            <h2 style={{
              fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)',
              fontWeight: 800,
              marginBottom: '1.25rem',
              lineHeight: 1.15,
              color: '#ffffff',
              letterSpacing: '-0.03em'
            }}>
              Your recruiting copilot, always working.
            </h2>

            <p style={{
              fontSize: '1.125rem',
              marginBottom: '2rem',
              color: 'rgba(255, 255, 255, 0.88)',
              lineHeight: 1.6,
              maxWidth: '540px'
            }}>
              Ask complex recruitment questions in natural language. HireFlow synthesizes candidate files, schedules, and interview notes instantly so you can make informed decisions.
            </p>

            {/* 6 Capabilities Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '0.875rem',
              marginBottom: '2rem'
            }}>
              {capabilities.map((cap, index) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      padding: '0.875rem',
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(12px)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid rgba(255, 255, 255, 0.15)'
                    }}
                  >
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Icon size={16} color="white" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#ffffff' }}>
                        {cap.text}
                      </div>
                      <div style={{ fontSize: '0.71875rem', color: 'rgba(255, 255, 255, 0.72)' }}>
                        {cap.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => onOpenDemo ? onOpenDemo('Try AI Copilot') : null}
              className="btn"
              style={{
                background: '#ffffff',
                color: 'var(--color-primary)',
                fontWeight: 700,
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.2)'
              }}
            >
              Test Drive Copilot
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Right Column: Interactive Copilot Chat Mockup */}
          <div>
            <div style={{
              background: '#ffffff',
              borderRadius: 'var(--radius-2xl)',
              padding: '1.75rem',
              boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.35)',
              color: 'var(--color-text-primary)',
              border: '1px solid rgba(255, 255, 255, 0.9)'
            }}>
              
              {/* Chat Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '1rem',
                borderBottom: '1px solid var(--color-border)',
                marginBottom: '1.25rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: 'var(--gradient-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}>
                    <Bot size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '0.9375rem', color: 'var(--color-text-primary)' }}>
                      HireFlow Copilot
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-success)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-success)' }} />
                      Online & connected to ATS
                    </div>
                  </div>
                </div>

                <span style={{
                  fontSize: '0.6875rem',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  background: 'var(--color-lavender)',
                  color: 'var(--color-primary)',
                  fontWeight: 600
                }}>
                  v2.4 Neural Matcher
                </span>
              </div>

              {/* Quick Prompt Selectors */}
              <div style={{
                display: 'flex',
                gap: '0.375rem',
                marginBottom: '1.25rem',
                overflowX: 'auto',
                paddingBottom: '0.25rem'
              }}>
                {cannedConversations.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePromptIndex(i)}
                    style={{
                      padding: '0.3125rem 0.625rem',
                      fontSize: '0.71875rem',
                      fontWeight: 600,
                      borderRadius: 'var(--radius-full)',
                      background: activePromptIndex === i ? 'var(--color-lavender)' : 'var(--color-background)',
                      color: activePromptIndex === i ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                      border: `1px solid ${activePromptIndex === i ? 'var(--color-lavender-border)' : 'var(--color-border)'}`,
                      whiteSpace: 'nowrap'
                    }}
                  >
                    Query {i + 1}
                  </button>
                ))}
              </div>

              {/* Chat Thread */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minHeight: '260px' }}>
                
                {/* Recruiter Message */}
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <div style={{
                    maxWidth: '85%',
                    padding: '0.75rem 1rem',
                    background: 'var(--gradient-primary)',
                    color: 'white',
                    borderRadius: 'var(--radius-lg)',
                    borderBottomRightRadius: '4px',
                    fontSize: '0.875rem',
                    lineHeight: 1.5,
                    boxShadow: 'var(--shadow-sm)'
                  }}>
                    {currentChat.prompt}
                  </div>
                </div>

                {/* AI Copilot Response */}
                <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '0.5rem' }}>
                  <div style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    background: 'var(--color-lavender)',
                    color: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    <Sparkles size={14} />
                  </div>
                  <div style={{
                    maxWidth: '88%',
                    padding: '0.875rem 1rem',
                    background: 'var(--color-background)',
                    borderRadius: 'var(--radius-lg)',
                    borderBottomLeftRadius: '4px',
                    fontSize: '0.875rem',
                    lineHeight: 1.55,
                    color: 'var(--color-text-primary)',
                    border: '1px solid var(--color-border)'
                  }}>
                    {currentChat.reply}
                  </div>
                </div>

                {/* Candidate Previews (if any) */}
                {currentChat.candidates.length > 0 && (
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    marginLeft: '2rem'
                  }}>
                    {currentChat.candidates.map((cand, idx) => (
                      <div
                        key={idx}
                        style={{
                          padding: '0.75rem',
                          background: 'var(--color-white)',
                          borderRadius: 'var(--radius-md)',
                          border: '1px solid var(--color-border)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '0.75rem',
                          boxShadow: 'var(--shadow-xs)'
                        }}
                      >
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '0.8125rem' }}>{cand.name}</div>
                          <div style={{ fontSize: '0.71875rem', color: 'var(--color-text-secondary)' }}>{cand.role}</div>
                          <div style={{ display: 'flex', gap: '0.25rem', marginTop: '0.25rem' }}>
                            {cand.skills.map((s) => (
                              <span key={s} style={{
                                fontSize: '0.625rem',
                                padding: '0.125rem 0.375rem',
                                background: 'var(--color-lavender)',
                                color: 'var(--color-primary)',
                                borderRadius: '3px',
                                fontWeight: 500
                              }}>
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="match-score" style={{ width: '2.5rem', height: '2.5rem', fontSize: '0.78125rem' }}>
                          {cand.score}%
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Chat Input Bar */}
              <div style={{
                marginTop: '1rem',
                paddingTop: '0.875rem',
                borderTop: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <input
                  type="text"
                  readOnly
                  value="Ask HireFlow Copilot anything about candidates..."
                  style={{
                    flex: 1,
                    padding: '0.5rem 0.75rem',
                    fontSize: '0.8125rem',
                    background: 'var(--color-background)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--color-text-muted)',
                    outline: 'none'
                  }}
                />
                <button
                  onClick={() => setActivePromptIndex((prev) => (prev + 1) % cannedConversations.length)}
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--gradient-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    cursor: 'pointer'
                  }}
                  title="Cycle prompt demonstration"
                >
                  <Send size={15} />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .ai-intelligence-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
