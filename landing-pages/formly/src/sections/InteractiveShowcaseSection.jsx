import React, { useState } from 'react';
import { 
  Laptop, 
  Smartphone, 
  Plus, 
  Trash2, 
  Check, 
  Settings, 
  Eye, 
  Sparkles, 
  GitFork, 
  Type, 
  Mail, 
  Star, 
  ListChecks, 
  Sliders, 
  Send,
  Zap,
  CheckCircle2,
  RefreshCw
} from 'lucide-react';
import Badge from '../components/Badge.jsx';
import Button from '../components/Button.jsx';
import { fireConfetti } from '../utils/confetti.js';

export default function InteractiveShowcaseSection({ onOpenDemo }) {
  const [deviceMode, setDeviceMode] = useState('desktop'); // 'desktop' | 'mobile'
  const [activeStep, setActiveStep] = useState(1);
  const [liveResponses, setLiveResponses] = useState(3842);
  const [selectedFieldId, setSelectedFieldId] = useState('f2');
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [userRating, setUserRating] = useState(5);
  const [companySize, setCompanySize] = useState('10-50');

  const [activeFields, setActiveFields] = useState([
    { id: 'f1', type: 'text', label: 'Company / Project Name', placeholder: 'Acme Technologies' },
    { id: 'f2', type: 'choice', label: 'Team Size Range', options: ['1-10', '10-50', '50-250', '250+'] },
    { id: 'f3', type: 'rating', label: 'Experience Satisfaction', value: 5 },
    { id: 'f4', type: 'email', label: 'Primary Contact Email', placeholder: 'name@company.com' }
  ]);

  const handleTestSubmit = (e) => {
    e.preventDefault();
    setDemoSubmitted(true);
    setLiveResponses((prev) => prev + 1);
    fireConfetti(0.5, 0.6);
  };

  const resetTestForm = () => {
    setDemoSubmitted(false);
  };

  return (
    <section id="showcase" style={{ paddingTop: '80px', paddingBottom: '100px', backgroundColor: '#FAFBFD' }}>
      <div className="container-wide">
        {/* Header */}
        <div className="section-header">
          <Badge color="blue" icon={Sparkles}>
            Product Showcase
          </Badge>
          <h2 className="section-title">
            From blank canvas to <span className="gradient-text">beautiful form</span>.
          </h2>
          <p className="section-subtitle">
            Experience the flow of a modern no-code canvas. Intuitive enough for non-technical creators, yet engineered with deep logic and enterprise reliability.
          </p>

          {/* Interactive Device & Mode Bar */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: '#FFFFFF',
              padding: '6px 12px',
              borderRadius: '9999px',
              boxShadow: '0 2px 8px rgba(15, 23, 42, 0.06)',
              border: '1px solid #E2E8F0',
              marginTop: '16px'
            }}
          >
            <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#64748B', paddingLeft: '8px' }}>
              Preview Device:
            </span>
            <div style={{ display: 'flex', gap: '4px' }}>
              <button
                type="button"
                onClick={() => setDeviceMode('desktop')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  backgroundColor: deviceMode === 'desktop' ? '#6366F1' : 'transparent',
                  color: deviceMode === 'desktop' ? '#FFFFFF' : '#475569',
                  transition: 'all 150ms ease'
                }}
              >
                <Laptop size={15} />
                <span>Desktop View</span>
              </button>
              <button
                type="button"
                onClick={() => setDeviceMode('mobile')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  backgroundColor: deviceMode === 'mobile' ? '#6366F1' : 'transparent',
                  color: deviceMode === 'mobile' ? '#FFFFFF' : '#475569',
                  transition: 'all 150ms ease'
                }}
              >
                <Smartphone size={15} />
                <span>Mobile View</span>
              </button>
            </div>
          </div>
        </div>

        {/* Big Showcase Canvas Container */}
        <div
          style={{
            maxWidth: deviceMode === 'mobile' ? '460px' : '1200px',
            margin: '0 auto',
            backgroundColor: '#FFFFFF',
            borderRadius: '28px',
            border: '1px solid #E2E8F0',
            boxShadow: '0 25px 60px -15px rgba(99, 102, 241, 0.15)',
            overflow: 'hidden',
            transition: 'max-width 300ms cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Top Control Bar */}
          <div
            style={{
              padding: '16px 24px',
              backgroundColor: '#FAFBFD',
              borderBottom: '1px solid #E2E8F0',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FF5F56' }}></span>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FFBD2E' }}></span>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#27C93F' }}></span>
              </div>
              <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0F172A' }}>
                Formly Studio &bull; Enterprise Onboarding Flow
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8125rem', color: '#10B981', fontWeight: 700 }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981', animation: 'pulse-soft 2s infinite' }}></span>
                <span>{liveResponses.toLocaleString()} Live Submissions</span>
              </div>
              <Button variant="primary" size="sm" onClick={() => onOpenDemo && onOpenDemo('builder')}>
                Open in Full Editor
              </Button>
            </div>
          </div>

          {/* Canvas Working Layout */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: deviceMode === 'mobile' ? '1fr' : '220px 1fr 280px',
              minHeight: '480px'
            }}
          >
            {/* Left Tools (Hidden on Mobile) */}
            {deviceMode !== 'mobile' && (
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRight: '1px solid #E2E8F0',
                  padding: '20px 16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>
                  Form Elements
                </div>
                {[
                  { icon: Type, name: 'Short Answer' },
                  { icon: Mail, name: 'Email Input' },
                  { icon: ListChecks, name: 'Multiple Choice' },
                  { icon: Star, name: 'Rating Star' },
                  { icon: Sliders, name: 'Range Slider' },
                  { icon: GitFork, name: 'Conditional Jump' }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      backgroundColor: '#F8FAFC',
                      border: '1px solid #EEF2F6',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      color: '#334155',
                      cursor: 'pointer'
                    }}
                  >
                    <item.icon size={15} color="#6366F1" />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Center: Live Interactive Form Simulator */}
            <div
              style={{
                backgroundColor: '#F8FAFC',
                padding: deviceMode === 'mobile' ? '24px 16px' : '36px 48px',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  padding: deviceMode === 'mobile' ? '20px' : '32px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 8px 24px -4px rgba(15, 23, 42, 0.05)'
                }}
              >
                {demoSubmitted ? (
                  <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        backgroundColor: '#ECFDF5',
                        color: '#10B981',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 16px auto'
                      }}
                    >
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '6px' }}>
                      Submission Confirmed!
                    </h3>
                    <p style={{ color: '#64748B', fontSize: '0.875rem', marginBottom: '20px' }}>
                      Data piped to Slack and HubSpot instantly. Response counter incremented to {liveResponses.toLocaleString()}.
                    </p>
                    <Button variant="secondary" size="sm" icon={RefreshCw} onClick={resetTestForm}>
                      Test Another Submission
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleTestSubmit}>
                    <div style={{ marginBottom: '24px' }}>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          backgroundColor: '#EEF2FF',
                          color: '#4F46E5',
                          padding: '3px 8px',
                          borderRadius: '6px'
                        }}
                      >
                        Step 1 of 2
                      </span>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginTop: '8px', color: '#0F172A' }}>
                        Join the Formly Growth Beta
                      </h3>
                      <p style={{ fontSize: '0.8125rem', color: '#64748B' }}>
                        Experience frictionless keyboard navigation and real-time validation.
                      </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                          Company or Project Name
                        </label>
                        <input
                          type="text"
                          required
                          defaultValue="Acme Robotics"
                          style={{
                            width: '100%',
                            padding: '10px 14px',
                            borderRadius: '10px',
                            border: '1.5px solid #E2E8F0',
                            fontSize: '0.875rem',
                            outline: 'none',
                            boxSizing: 'border-box'
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                          Team Size (Triggers Conditional Branch)
                        </label>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                          {['1-10', '10-50', '50-250', '250+'].map((tier) => (
                            <button
                              key={tier}
                              type="button"
                              onClick={() => setCompanySize(tier)}
                              style={{
                                padding: '6px 12px',
                                borderRadius: '8px',
                                fontSize: '0.8125rem',
                                fontWeight: 600,
                                backgroundColor: companySize === tier ? '#6366F1' : '#F8FAFC',
                                color: companySize === tier ? '#FFFFFF' : '#475569',
                                border: companySize === tier ? '1px solid #6366F1' : '1px solid #E2E8F0',
                                cursor: 'pointer'
                              }}
                            >
                              {tier}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                          Satisfaction Rating
                        </label>
                        <div style={{ display: 'flex', gap: '6px' }}>
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => setUserRating(star)}
                              style={{
                                width: '36px',
                                height: '36px',
                                borderRadius: '8px',
                                backgroundColor: star <= userRating ? '#FEF3C7' : '#F1F5F9',
                                color: star <= userRating ? '#D97706' : '#94A3B8',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 700,
                                fontSize: '1rem',
                                border: 'none',
                                cursor: 'pointer'
                              }}
                            >
                              ★
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end' }}>
                      <Button variant="primary" size="md" type="submit" iconRight={Send}>
                        Submit Response (Interactive)
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Right: Field Configuration & Conditional Indicator (Hidden on Mobile) */}
            {deviceMode !== 'mobile' && (
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderLeft: '1px solid #E2E8F0',
                  padding: '20px 18px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}
              >
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>
                  Logic &amp; Workflow
                </div>

                <div
                  style={{
                    backgroundColor: '#FDF2F8',
                    border: '1px solid rgba(236, 72, 153, 0.25)',
                    borderRadius: '12px',
                    padding: '12px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8125rem', fontWeight: 700, color: '#DB2777', marginBottom: '4px' }}>
                    <GitFork size={14} /> Branch Status
                  </div>
                  <p style={{ fontSize: '0.75rem', color: '#9D174D', lineHeight: 1.4 }}>
                    Current selection: <strong>{companySize}</strong> seats.
                    {companySize === '50-250' || companySize === '250+'
                      ? ' Triggers Enterprise Routing logic path.'
                      : ' Directs to Standard Self-serve queue.'}
                  </p>
                </div>

                <div style={{ marginTop: 'auto', backgroundColor: '#F8FAFC', padding: '12px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>
                    Active Webhook
                  </div>
                  <div style={{ fontSize: '0.6875rem', color: '#64748B', fontFamily: 'monospace' }}>
                    POST https://api.formly.io/v1/ingest
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
