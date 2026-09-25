import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import {
  ArrowRight,
  Play,
  Sparkles,
  GitPullRequest,
  CheckCircle2,
  Clock,
  AlertCircle,
  Zap,
  Activity,
  Layers
} from 'lucide-react';

export const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('kanban');
  const [isSimulating, setIsSimulating] = useState(false);

  const runHeroSimulation = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
    }, 2500);
  };

  return (
    <section
      style={{
        position: 'relative',
        paddingTop: 'calc(var(--space-5xl) + 40px)',
        paddingBottom: 'var(--space-4xl)',
        overflow: 'hidden'
      }}
    >
      {/* Background radial spotlights */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '600px',
          background: 'radial-gradient(ellipse at center, rgba(56, 189, 248, 0.18) 0%, rgba(99, 102, 241, 0.08) 50%, transparent 75%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Hero Top Copy */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto var(--space-3xl)' }}>
          <div style={{ display: 'inline-flex', marginBottom: 'var(--space-lg)' }}>
            <Badge variant="cyan" hasPulse={true}>
              FLOWPILOT 2.0 • AUTONOMOUS PROJECT INTELLIGENCE
            </Badge>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              marginBottom: 'var(--space-lg)'
            }}
          >
            Plan Sprints with AI. <br />
            <span className="text-gradient">Eliminate the Guesswork.</span>
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              maxWidth: '700px',
              margin: '0 auto var(--space-2xl)'
            }}
          >
            FlowPilot transforms natural language requirements into structured sprint backlogs, predicts critical path bottlenecks before they occur, and automates executive status reports.
          </p>

          {/* Action CTAs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              marginBottom: 'var(--space-xl)'
            }}
          >
            <Button variant="primary" size="lg" icon={ArrowRight} href="#demo">
              Start 14-Day Free Pilot
            </Button>
            <Button variant="secondary" size="lg" icon={Play} href="#workflow">
              How It Works
            </Button>
          </div>

          {/* Social Micro-Proof */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              color: 'var(--text-muted)',
              fontSize: '0.85rem'
            }}
          >
            <span style={{ display: 'inline-flex', color: '#10B981' }}>★★★★★</span>
            <span>Rated 4.9/5 by 850+ Engineering Leads</span>
            <span>•</span>
            <span>No credit card required</span>
          </div>
        </div>

        {/* Hero Interactive Terminal / Dashboard Mockup */}
        <div
          style={{
            maxWidth: '1080px',
            margin: '0 auto',
            position: 'relative'
          }}
        >
          {/* Subtle Outer Neon Border Glow */}
          <div
            style={{
              position: 'absolute',
              inset: '-2px',
              borderRadius: '26px',
              background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.4) 0%, rgba(99, 102, 241, 0.2) 50%, rgba(6, 182, 212, 0.4) 100%)',
              filter: 'blur(4px)',
              opacity: 0.7,
              zIndex: 0
            }}
          />

          <div
            className="glass-card"
            style={{
              position: 'relative',
              zIndex: 1,
              padding: 0,
              borderRadius: '24px',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              backgroundColor: 'rgba(8, 14, 28, 0.94)'
            }}
          >
            {/* Terminal Window Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 24px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                backgroundColor: 'rgba(12, 19, 36, 0.6)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#EF4444' }} />
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#F59E0B' }} />
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                <span
                  style={{
                    marginLeft: '12px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)'
                  }}
                >
                  flowpilot-terminal — sprint-intelligence-v2.0
                </span>
              </div>

              {/* View Mode Switcher */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '3px',
                  borderRadius: '8px',
                  gap: '4px'
                }}
              >
                <button
                  type="button"
                  onClick={() => setActiveTab('kanban')}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: activeTab === 'kanban' ? '#FFFFFF' : 'var(--text-muted)',
                    backgroundColor: activeTab === 'kanban' ? 'rgba(56, 189, 248, 0.2)' : 'transparent',
                    border: activeTab === 'kanban' ? '1px solid rgba(56, 189, 248, 0.4)' : 'none'
                  }}
                >
                  AI Backlog
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('timeline')}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: activeTab === 'timeline' ? '#FFFFFF' : 'var(--text-muted)',
                    backgroundColor: activeTab === 'timeline' ? 'rgba(56, 189, 248, 0.2)' : 'transparent',
                    border: activeTab === 'timeline' ? '1px solid rgba(56, 189, 248, 0.4)' : 'none'
                  }}
                >
                  Critical Path
                </button>
              </div>
            </div>

            {/* Prompt Command Bar */}
            <div
              style={{
                padding: '16px 24px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
                backgroundColor: 'rgba(10, 16, 31, 0.7)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, minWidth: '260px' }}>
                <Sparkles size={18} color="#38BDF8" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#7DD3FC' }}>
                  $ flowpilot plan:
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#FFFFFF' }}>
                  "Decompose AI Semantic Vector Search sprint with Stripe usage billing"
                </span>
              </div>
              <button
                type="button"
                onClick={runHeroSimulation}
                disabled={isSimulating}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  borderRadius: '6px',
                  background: isSimulating ? 'rgba(56, 189, 248, 0.3)' : 'rgba(56, 189, 248, 0.15)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  color: '#38BDF8',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600
                }}
              >
                <Zap size={14} />
                <span>{isSimulating ? 'Recalculating...' : 'Simulate Recalculation'}</span>
              </button>
            </div>

            {/* Mockup Body Content */}
            <div style={{ padding: '24px' }}>
              {/* Sprint Metric HUD */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '16px',
                  marginBottom: '24px'
                }}
              >
                <div style={{ padding: '12px 16px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.07)' }}>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginBottom: '4px' }}>CURRENT SPRINT</div>
                  <div style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span>Sprint 28</span>
                    <span style={{ fontSize: '0.7rem', color: '#10B981', background: 'rgba(16, 185, 129, 0.15)', padding: '2px 6px', borderRadius: '4px' }}>Active</span>
                  </div>
                </div>

                <div style={{ padding: '12px 16px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.07)' }}>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginBottom: '4px' }}>PREDICTED VELOCITY</div>
                  <div style={{ color: '#38BDF8', fontWeight: 700, fontSize: '1.1rem' }}>
                    84 / 88 pts <span style={{ fontSize: '0.75rem', color: '#7DD3FC' }}>(95.4%)</span>
                  </div>
                </div>

                <div style={{ padding: '12px 16px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.07)' }}>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginBottom: '4px' }}>ESTIMATED DELIVERY</div>
                  <div style={{ color: '#10B981', fontWeight: 700, fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle2 size={16} />
                    <span>2 Days Ahead of SLA</span>
                  </div>
                </div>

                <div style={{ padding: '12px 16px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.07)' }}>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginBottom: '4px' }}>GIT LINKED PRs</div>
                  <div style={{ color: '#818CF8', fontWeight: 700, fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <GitPullRequest size={16} />
                    <span>14 Synced PRs</span>
                  </div>
                </div>
              </div>

              {/* Kanban vs Timeline View */}
              {activeTab === 'kanban' ? (
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '16px'
                  }}
                >
                  {/* Column 1 */}
                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', borderRadius: '12px', padding: '14px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                      <span>TO DO (AI GENERATED)</span>
                      <span style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '1px 6px', borderRadius: '4px' }}>3</span>
                    </div>
                    <div style={{ background: 'rgba(17, 26, 48, 0.6)', borderRadius: '8px', padding: '12px', border: '1px solid rgba(56, 189, 248, 0.15)', marginBottom: '10px' }}>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#FFFFFF', marginBottom: '6px' }}>
                        Configure Pinecone serverless vector index with BM25 hybrid ranking
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        <span style={{ color: '#38BDF8', fontFamily: 'var(--font-mono)' }}>5 pts</span>
                        <span>Auto-assigned: Alex K.</span>
                      </div>
                    </div>
                    <div style={{ background: 'rgba(17, 26, 48, 0.6)', borderRadius: '8px', padding: '12px', border: '1px solid rgba(56, 189, 248, 0.15)' }}>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#FFFFFF', marginBottom: '6px' }}>
                        Implement Redis sliding-window token bucket rate limiter
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        <span style={{ color: '#38BDF8', fontFamily: 'var(--font-mono)' }}>3 pts</span>
                        <span>Auto-assigned: Dev M.</span>
                      </div>
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', borderRadius: '12px', padding: '14px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '0.8rem', color: '#38BDF8', fontWeight: 600 }}>
                      <span>IN PROGRESS &amp; GIT SYNC</span>
                      <span style={{ background: 'rgba(56, 189, 248, 0.15)', padding: '1px 6px', borderRadius: '4px' }}>2</span>
                    </div>
                    <div style={{ background: 'rgba(17, 26, 48, 0.8)', borderRadius: '8px', padding: '12px', border: '1px solid rgba(56, 189, 248, 0.35)', marginBottom: '10px' }}>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#FFFFFF', marginBottom: '6px' }}>
                        Stripe usage-based metered billing webhook ingestion
                      </div>
                      <div style={{ height: '4px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '2px', overflow: 'hidden', margin: '8px 0' }}>
                        <div style={{ width: '75%', height: '100%', background: 'linear-gradient(90deg, #0284C7, #38BDF8)' }} />
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        <span style={{ color: '#7DD3FC', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <GitPullRequest size={12} /> PR #412 Open
                        </span>
                        <span style={{ color: '#10B981' }}>75% verified</span>
                      </div>
                    </div>
                  </div>

                  {/* Column 3 */}
                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', borderRadius: '12px', padding: '14px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '0.8rem', color: '#10B981', fontWeight: 600 }}>
                      <span>COMPLETED THIS SPRINT</span>
                      <span style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '1px 6px', borderRadius: '4px' }}>4</span>
                    </div>
                    <div style={{ background: 'rgba(17, 26, 48, 0.6)', borderRadius: '8px', padding: '12px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#FFFFFF', marginBottom: '6px', textDecoration: 'line-through', opacity: 0.8 }}>
                        Setup chunking tokenizer with 10% semantic paragraph overlap
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: '#10B981' }}>
                        <span>Merged in PR #408</span>
                        <span>8 pts</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Critical Path View */
                <div style={{ background: 'rgba(17, 26, 48, 0.4)', borderRadius: '12px', padding: '18px', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', color: '#38BDF8', fontSize: '0.9rem', fontWeight: 600 }}>
                    <Activity size={18} />
                    <span>Dynamic Monte Carlo Critical Path Map</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[
                      { name: 'Architecture Review & Schema Migration', days: 'Day 1–3', status: 'Done', color: '#10B981', w: '100%' },
                      { name: 'Core Vector Embedding Pipeline', days: 'Day 4–8', status: 'In Flight', color: '#38BDF8', w: '65%' },
                      { name: 'Stripe Metered Usage & Webhooks', days: 'Day 7–11', status: 'In Flight', color: '#818CF8', w: '40%' },
                      { name: 'Load Testing & Prod Canary Release', days: 'Day 12–14', status: 'Scheduled', color: '#F59E0B', w: '10%' }
                    ].map((step, idx) => (
                      <div key={idx}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '4px' }}>
                          <span style={{ color: '#FFFFFF' }}>{step.name}</span>
                          <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{step.days} • <span style={{ color: step.color }}>{step.status}</span></span>
                        </div>
                        <div style={{ height: '6px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                          <div style={{ width: step.w, height: '100%', background: step.color, borderRadius: '3px' }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
