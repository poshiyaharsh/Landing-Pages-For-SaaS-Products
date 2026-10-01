import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Layers, 
  Sliders, 
  CheckCircle2, 
  TrendingUp, 
  Plus, 
  GitFork, 
  Eye, 
  Share2, 
  Type, 
  Mail, 
  Star, 
  ListChecks, 
  UploadCloud, 
  ToggleLeft,
  Check,
  Zap
} from 'lucide-react';
import Button from '../components/Button.jsx';
import Badge from '../components/Badge.jsx';
import { fireConfetti } from '../utils/confetti.js';

export default function HeroSection({ onOpenDemo }) {
  const [activeTab, setActiveTab] = useState('canvas'); // 'canvas' | 'preview'
  const [selectedField, setSelectedField] = useState('rating');
  const [isPublished, setIsPublished] = useState(false);
  const [requiredToggle, setRequiredToggle] = useState(true);
  const [fields, setFields] = useState([
    { id: 'name', type: 'text', label: 'What is your full name?', icon: Type, placeholder: 'e.g. Jordan Miller' },
    { id: 'email', type: 'email', label: 'Company Email Address', icon: Mail, placeholder: 'jordan@company.com' },
    { id: 'rating', type: 'rating', label: 'How likely are you to recommend us?', icon: Star, value: 5 },
    { id: 'role', type: 'choice', label: 'Primary Department', icon: ListChecks, options: ['Engineering', 'Design', 'Growth', 'Operations'] }
  ]);

  const handlePublish = () => {
    setIsPublished(true);
    fireConfetti(0.7, 0.4);
    setTimeout(() => {
      setIsPublished(false);
    }, 4000);
  };

  const handleAddField = (type) => {
    const newId = `field_${Date.now()}`;
    const newField = {
      id: newId,
      type: 'text',
      label: 'New Custom Question',
      icon: Type,
      placeholder: 'Enter response here...'
    };
    setFields([...fields, newField]);
    setSelectedField(newId);
  };

  return (
    <section
      style={{
        position: 'relative',
        paddingTop: '140px',
        paddingBottom: '80px',
        overflow: 'hidden'
      }}
    >
      {/* Background Glow Spheres */}
      <div
        style={{
          position: 'absolute',
          top: '5%',
          left: '10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, rgba(99, 102, 241, 0) 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '15%',
          right: '8%',
          width: '460px',
          height: '460px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, rgba(236, 72, 153, 0) 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Top Header & Copy */}
        <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto 56px auto' }}>
          {/* Badge */}
          <div style={{ display: 'inline-flex', marginBottom: '20px' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(236, 72, 153, 0.08) 100%)',
                border: '1px solid rgba(99, 102, 241, 0.2)',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: '#4F46E5',
                boxShadow: '0 2px 8px rgba(99, 102, 241, 0.06)'
              }}
            >
              <Sparkles size={14} color="#6366F1" />
              <span>✦ The smarter way to build forms</span>
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
              fontWeight: 800,
              letterSpacing: '-0.035em',
              lineHeight: 1.1,
              marginBottom: '22px',
              color: '#0F172A'
            }}
          >
            Build <span className="gradient-text">beautiful forms</span>. <br />
            Without writing code.
          </h1>

          {/* Supporting Text */}
          <p
            style={{
              fontSize: 'clamp(1.0625rem, 2vw, 1.25rem)',
              color: '#475569',
              lineHeight: 1.6,
              maxWidth: '720px',
              margin: '0 auto 32px auto'
            }}
          >
            Create powerful, conversion-focused forms with drag-and-drop simplicity,
            smart logic, analytics, and seamless integrations.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              marginBottom: '20px'
            }}
          >
            <Button
              variant="primary"
              size="lg"
              iconRight={ArrowRight}
              onClick={() => onOpenDemo && onOpenDemo('builder')}
            >
              Start Building Free
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => {
                const target = document.querySelector('#templates');
                if (target) target.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Templates
            </Button>
          </div>

          {/* Trust line */}
          <p style={{ fontSize: '0.875rem', color: '#64748B', fontWeight: 500 }}>
            No credit card required &bull; Build your first form in minutes
          </p>
        </div>

        {/* Hero Interactive Workspace with Organic Floating Elements */}
        <div style={{ position: 'relative', maxWidth: '1160px', margin: '0 auto' }}>
          
          {/* FLOATING CARD 1: + Add Question (Top Left) */}
          <div
            className="animate-float-slow floating-elem"
            style={{
              position: 'absolute',
              top: '-24px',
              left: '-32px',
              zIndex: 10,
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '12px 18px',
              boxShadow: 'var(--shadow-floating)',
              border: '1.5px solid rgba(99, 102, 241, 0.25)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              transform: 'rotate(-3deg)'
            }}
            onClick={() => handleAddField('text')}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '10px',
                backgroundColor: '#EEF2FF',
                color: '#6366F1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Plus size={18} strokeWidth={2.5} />
            </div>
            <div>
              <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0F172A' }}>+ Add Question</div>
              <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Click to append field</div>
            </div>
          </div>

          {/* FLOATING CARD 2: Conditional Logic Branch (Top Right) */}
          <div
            className="animate-float-medium floating-elem"
            style={{
              position: 'absolute',
              top: '-32px',
              right: '-24px',
              zIndex: 10,
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '12px 18px',
              boxShadow: 'var(--shadow-floating)',
              border: '1.5px solid rgba(236, 72, 153, 0.25)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              transform: 'rotate(2.5deg)'
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '10px',
                backgroundColor: '#FDF2F8',
                color: '#EC4899',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <GitFork size={18} strokeWidth={2.5} />
            </div>
            <div>
              <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0F172A' }}>
                If &rarr; Company Size = 50+
              </div>
              <div style={{ fontSize: '0.75rem', color: '#EC4899', fontWeight: 600 }}>
                Jump to Enterprise Flow
              </div>
            </div>
          </div>

          {/* FLOATING CARD 3: 1,284 Responses (Bottom Left) */}
          <div
            className="animate-float-fast floating-elem"
            style={{
              position: 'absolute',
              bottom: '40px',
              left: '-48px',
              zIndex: 10,
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '14px 18px',
              boxShadow: 'var(--shadow-floating)',
              border: '1.5px solid rgba(16, 185, 129, 0.25)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              transform: 'rotate(2deg)'
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                backgroundColor: '#ECFDF5',
                color: '#10B981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <TrendingUp size={20} strokeWidth={2.5} />
            </div>
            <div>
              <div style={{ fontSize: '1.0625rem', fontWeight: 800, color: '#0F172A' }}>1,284 Responses</div>
              <div style={{ fontSize: '0.75rem', color: '#10B981', fontWeight: 700 }}>+12.8% Conversion</div>
            </div>
          </div>

          {/* FLOATING CARD 4: Form Published (Bottom Right) */}
          <div
            className="animate-float-medium floating-elem"
            style={{
              position: 'absolute',
              bottom: '30px',
              right: '-36px',
              zIndex: 10,
              backgroundColor: '#0F172A',
              color: '#FFFFFF',
              borderRadius: '16px',
              padding: '12px 20px',
              boxShadow: '0 20px 30px -5px rgba(15, 23, 42, 0.35)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              transform: 'rotate(-2deg)'
            }}
          >
            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                backgroundColor: '#10B981',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Check size={16} strokeWidth={3} />
            </div>
            <div>
              <div style={{ fontSize: '0.875rem', fontWeight: 700 }}>✓ Form Published</div>
              <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Live on custom domain</div>
            </div>
          </div>

          {/* FLOATING MINI PILL: Star rating snippet */}
          <div
            className="animate-pulse-soft floating-elem"
            style={{
              position: 'absolute',
              top: '42%',
              left: '-28px',
              zIndex: 10,
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              padding: '8px 14px',
              boxShadow: 'var(--shadow-floating)',
              border: '1px solid #E2E8F0',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <div style={{ display: 'flex', gap: '2px', color: '#F59E0B' }}>
              <Star size={13} fill="#F59E0B" />
              <Star size={13} fill="#F59E0B" />
              <Star size={13} fill="#F59E0B" />
              <Star size={13} fill="#F59E0B" />
              <Star size={13} fill="#F59E0B" />
            </div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#334155' }}>NPS 4.9</span>
          </div>

          {/* REALISTIC FORMLY BUILDER PREVIEW (SaaS Application Window) */}
          <div className="builder-canvas-wrapper">
            {/* Window Chrome / Header */}
            <div className="builder-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div className="window-dots">
                  <span className="window-dot dot-red"></span>
                  <span className="window-dot dot-yellow"></span>
                  <span className="window-dot dot-green"></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0F172A' }}>
                    Q3 Product Feedback &amp; NPS
                  </span>
                  <span
                    style={{
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      backgroundColor: '#ECFDF5',
                      color: '#059669',
                      padding: '2px 8px',
                      borderRadius: '9999px',
                      border: '1px solid rgba(16, 185, 129, 0.2)'
                    }}
                  >
                    Auto-saved
                  </span>
                </div>
              </div>

              {/* Center Canvas View Switcher */}
              <div
                style={{
                  display: 'flex',
                  backgroundColor: '#F1F5F9',
                  padding: '3px',
                  borderRadius: '10px'
                }}
              >
                <button
                  onClick={() => setActiveTab('canvas')}
                  style={{
                    padding: '5px 14px',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    borderRadius: '8px',
                    backgroundColor: activeTab === 'canvas' ? '#FFFFFF' : 'transparent',
                    color: activeTab === 'canvas' ? '#0F172A' : '#64748B',
                    boxShadow: activeTab === 'canvas' ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
                    transition: 'all 150ms ease'
                  }}
                >
                  Editor Canvas
                </button>
                <button
                  onClick={() => setActiveTab('preview')}
                  style={{
                    padding: '5px 14px',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    borderRadius: '8px',
                    backgroundColor: activeTab === 'preview' ? '#FFFFFF' : 'transparent',
                    color: activeTab === 'preview' ? '#0F172A' : '#64748B',
                    boxShadow: activeTab === 'preview' ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
                    transition: 'all 150ms ease'
                  }}
                >
                  Live Preview
                </button>
              </div>

              {/* Right Publish CTA */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button
                  onClick={() => onOpenDemo && onOpenDemo('preview')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    color: '#475569',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E2E8F0'
                  }}
                >
                  <Eye size={14} />
                  <span>Preview</span>
                </button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={handlePublish}
                  style={{
                    background: isPublished
                      ? '#10B981'
                      : 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)'
                  }}
                >
                  {isPublished ? '✓ Published!' : 'Publish'}
                </Button>
              </div>
            </div>

            {/* Builder 3-Column Work Area */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '220px 1fr 260px',
                minHeight: '440px',
                backgroundColor: '#FAFBFD'
              }}
              className="builder-grid"
            >
              {/* LEFT SIDEBAR: Available Form Blocks */}
              <div
                style={{
                  borderRight: '1px solid var(--color-border)',
                  backgroundColor: '#FFFFFF',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
                className="builder-left-sidebar"
              >
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Form Components
                </div>
                
                {[
                  { icon: Type, label: 'Short Text', tag: 'Text' },
                  { icon: Mail, label: 'Work Email', tag: 'Input' },
                  { icon: Star, label: 'Rating / NPS', tag: 'Score' },
                  { icon: ListChecks, label: 'Multi Choice', tag: 'Choice' },
                  { icon: Sliders, label: 'Numeric Slider', tag: 'Slider' },
                  { icon: UploadCloud, label: 'File Upload', tag: 'Drop' }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleAddField(item.label)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '8px 10px',
                      borderRadius: '8px',
                      backgroundColor: '#F8FAFC',
                      border: '1px solid #EEF2F6',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      color: '#334155',
                      cursor: 'pointer',
                      transition: 'all 150ms ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#EEF2FF';
                      e.currentTarget.style.borderColor = '#C7D2FE';
                      e.currentTarget.style.color = '#4F46E5';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#F8FAFC';
                      e.currentTarget.style.borderColor = '#EEF2F6';
                      e.currentTarget.style.color = '#334155';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <item.icon size={15} color="#6366F1" />
                      <span>{item.label}</span>
                    </div>
                    <span style={{ fontSize: '0.6875rem', color: '#94A3B8' }}>{item.tag}</span>
                  </div>
                ))}

                <div
                  style={{
                    marginTop: 'auto',
                    padding: '12px',
                    borderRadius: '10px',
                    backgroundColor: '#F5F3FF',
                    border: '1px solid rgba(139, 92, 246, 0.2)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', fontWeight: 700, color: '#7C3AED', marginBottom: '4px' }}>
                    <Zap size={14} /> Smart Routing
                  </div>
                  <p style={{ fontSize: '0.6875rem', color: '#6D28D9', lineHeight: 1.4 }}>
                    Drag &amp; connect questions to create dynamic branch trees.
                  </p>
                </div>
              </div>

              {/* CENTER: Canvas with Live Field Stack */}
              <div
                style={{
                  padding: '24px 28px',
                  overflowY: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  backgroundColor: '#F8FAFC'
                }}
              >
                {/* Active Form Canvas Title Card */}
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '14px',
                    padding: '18px 20px',
                    border: '1px solid #E2E8F0',
                    borderLeft: '4px solid #6366F1',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
                  }}
                >
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>
                    Customer Happiness &amp; Product Feedback
                  </h3>
                  <p style={{ fontSize: '0.8125rem', color: '#64748B' }}>
                    Help us improve Formly by sharing 60 seconds of honest feedback.
                  </p>
                </div>

                {/* Form Fields Stack */}
                {fields.map((field, index) => {
                  const isSelected = selectedField === field.id;
                  return (
                    <div
                      key={field.id}
                      onClick={() => setSelectedField(field.id)}
                      className={`form-field-card ${isSelected ? 'active' : ''}`}
                      style={{
                        backgroundColor: '#FFFFFF',
                        borderRadius: '12px',
                        padding: '16px',
                        border: isSelected ? '1.5px solid #6366F1' : '1px solid #E2E8F0',
                        boxShadow: isSelected ? '0 4px 14px rgba(99, 102, 241, 0.12)' : 'none'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span
                            style={{
                              fontSize: '0.6875rem',
                              fontWeight: 700,
                              color: '#6366F1',
                              backgroundColor: '#EEF2FF',
                              padding: '2px 8px',
                              borderRadius: '6px'
                            }}
                          >
                            0{index + 1}
                          </span>
                          <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#1E293B' }}>
                            {field.label}
                          </span>
                        </div>
                        {isSelected && (
                          <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: '#6366F1' }}>
                            Editing
                          </span>
                        )}
                      </div>

                      {/* Field Mock Representation */}
                      {field.type === 'rating' ? (
                        <div style={{ display: 'flex', gap: '6px' }}>
                          {[1, 2, 3, 4, 5].map((star) => (
                            <div
                              key={star}
                              style={{
                                width: '36px',
                                height: '36px',
                                borderRadius: '8px',
                                backgroundColor: star <= 4 ? '#FEF3C7' : '#F1F5F9',
                                color: star <= 4 ? '#D97706' : '#94A3B8',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 700,
                                fontSize: '0.875rem'
                              }}
                            >
                              ★
                            </div>
                          ))}
                        </div>
                      ) : field.type === 'choice' ? (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                          {field.options?.map((opt, i) => (
                            <span
                              key={i}
                              style={{
                                fontSize: '0.8125rem',
                                padding: '6px 12px',
                                borderRadius: '8px',
                                backgroundColor: i === 1 ? '#EEF2FF' : '#F8FAFC',
                                color: i === 1 ? '#4F46E5' : '#475569',
                                border: i === 1 ? '1px solid #C7D2FE' : '1px solid #E2E8F0',
                                fontWeight: i === 1 ? 600 : 500
                              }}
                            >
                              {opt}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <div
                          style={{
                            padding: '10px 14px',
                            backgroundColor: '#F8FAFC',
                            borderRadius: '8px',
                            border: '1px solid #E2E8F0',
                            fontSize: '0.8125rem',
                            color: '#94A3B8'
                          }}
                        >
                          {field.placeholder}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Inline Add Button inside Canvas */}
                <button
                  onClick={() => handleAddField('text')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '12px',
                    borderRadius: '12px',
                    border: '1.5px dashed #CBD5E1',
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                    color: '#6366F1',
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 150ms ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#6366F1';
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#CBD5E1';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
                  }}
                >
                  <Plus size={16} />
                  <span>Insert Next Field or Logic Branch</span>
                </button>
              </div>

              {/* RIGHT SIDEBAR: Properties / Field Settings */}
              <div
                style={{
                  borderLeft: '1px solid var(--color-border)',
                  backgroundColor: '#FFFFFF',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px'
                }}
                className="builder-right-sidebar"
              >
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Field Properties
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: '#475569', marginBottom: '4px' }}>
                    Label Title
                  </label>
                  <input
                    type="text"
                    defaultValue="How likely are you to recommend us?"
                    style={{
                      width: '100%',
                      padding: '8px 10px',
                      borderRadius: '8px',
                      border: '1px solid #E2E8F0',
                      fontSize: '0.8125rem',
                      color: '#0F172A',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                {/* Required Toggle */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', borderTop: '1px solid #F1F5F9' }}>
                  <div>
                    <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#334155' }}>Required Field</div>
                    <div style={{ fontSize: '0.6875rem', color: '#94A3B8' }}>Users cannot skip</div>
                  </div>
                  <button
                    onClick={() => setRequiredToggle(!requiredToggle)}
                    style={{
                      width: '38px',
                      height: '22px',
                      borderRadius: '9999px',
                      backgroundColor: requiredToggle ? '#6366F1' : '#CBD5E1',
                      position: 'relative',
                      transition: 'background-color 200ms ease',
                      cursor: 'pointer'
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        top: '2px',
                        left: requiredToggle ? '18px' : '2px',
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        backgroundColor: '#FFFFFF',
                        transition: 'left 200ms ease',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
                      }}
                    />
                  </button>
                </div>

                {/* Conditional Rules Snippet */}
                <div
                  style={{
                    backgroundColor: '#FDF2F8',
                    border: '1px solid rgba(236, 72, 153, 0.2)',
                    borderRadius: '10px',
                    padding: '10px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', fontWeight: 700, color: '#DB2777', marginBottom: '4px' }}>
                    <GitFork size={13} /> Active Condition
                  </div>
                  <p style={{ fontSize: '0.6875rem', color: '#9D174D', lineHeight: 1.4 }}>
                    If score &le; 3 &rarr; Ask &ldquo;What can we do better?&rdquo;
                  </p>
                </div>

                {/* Small Telemetry Card in Settings */}
                <div
                  style={{
                    marginTop: 'auto',
                    backgroundColor: '#F8FAFC',
                    borderRadius: '10px',
                    padding: '12px',
                    border: '1px solid #E2E8F0'
                  }}
                >
                  <div style={{ fontSize: '0.6875rem', color: '#64748B', fontWeight: 600, marginBottom: '2px' }}>
                    Average Answer Time
                  </div>
                  <div style={{ fontSize: '1.125rem', fontWeight: 800, color: '#0F172A' }}>
                    4.2s <span style={{ fontSize: '0.75rem', color: '#10B981', fontWeight: 600 }}>&bull; Low dropoff</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .floating-elem {
            display: none !important;
          }
          .builder-grid {
            grid-template-columns: 1fr !important;
          }
          .builder-left-sidebar,
          .builder-right-sidebar {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
