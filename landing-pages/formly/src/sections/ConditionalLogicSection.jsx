import React, { useState } from 'react';
import { 
  GitFork, 
  Palette, 
  Code, 
  Sparkles, 
  Check, 
  ArrowDown, 
  Zap, 
  Layers, 
  Megaphone,
  CheckCircle2
} from 'lucide-react';
import Badge from '../components/Badge.jsx';

export default function ConditionalLogicSection() {
  const [selectedBranch, setSelectedBranch] = useState('design'); // 'design' | 'dev' | 'marketing'

  const branches = {
    design: {
      label: 'Design',
      icon: Palette,
      color: '#EC4899',
      bgColor: '#FDF2F8',
      borderColor: '#F472B6',
      title: 'Show → Design Experience Questions',
      rule: 'IF (Interest EQUALS "Design") THEN DISPLAY:',
      questions: [
        { q: 'Primary Design Tool', opt: 'Figma, Sketch, Adobe XD' },
        { q: 'Design System Maturity', opt: 'Tokens, Reusable Atoms, None' },
        { q: 'Animation Preference', opt: 'Micro-interactions, High 3D, Minimal' }
      ]
    },
    dev: {
      label: 'Development',
      icon: Code,
      color: '#6366F1',
      bgColor: '#EEF2FF',
      borderColor: '#818CF8',
      title: 'Show → Development Experience Questions',
      rule: 'IF (Interest EQUALS "Development") THEN DISPLAY:',
      questions: [
        { q: 'Preferred Framework', opt: 'React 19, Next.js, Vue, Svelte' },
        { q: 'API & Webhook Ingestion', opt: 'REST endpoints, GraphQL, Serverless' },
        { q: 'Backend Environment', opt: 'Node, Python, Go, Cloudflare Workers' }
      ]
    },
    marketing: {
      label: 'Growth & Marketing',
      icon: Megaphone,
      color: '#10B981',
      bgColor: '#ECFDF5',
      borderColor: '#34D399',
      title: 'Show → Campaign & Conversion Tracking',
      rule: 'IF (Interest EQUALS "Growth") THEN DISPLAY:',
      questions: [
        { q: 'Monthly Form Views', opt: '10k - 50k, 50k - 250k, 250k+' },
        { q: 'Attribution Integrations', opt: 'Google Analytics 4, Meta Pixel, Segment' },
        { q: 'Primary Goal', opt: 'Higher completion rate, Rich lead data' }
      ]
    }
  };

  const current = branches[selectedBranch];

  return (
    <section id="logic" style={{ paddingTop: '100px', paddingBottom: '100px', backgroundColor: '#FFFFFF', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <Badge color="pink" icon={GitFork}>
            Intelligent Branching
          </Badge>
          <h2 className="section-title">
            Make every form <span className="gradient-text">feel personal</span>.
          </h2>
          <p className="section-subtitle">
            Nobody likes answering irrelevant questions. Dynamically route respondents through custom personalized paths based on answers they give.
          </p>
        </div>

        {/* Interactive Visual Canvas Container */}
        <div
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            backgroundColor: '#FAFBFD',
            borderRadius: '28px',
            border: '1.5px solid #E2E8F0',
            padding: '48px 36px',
            boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.06)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* ROOT NODE: Trigger Question */}
          <div style={{ textAlign: 'center', maxWidth: '480px', margin: '0 auto 36px auto' }}>
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '20px 24px',
                border: '2px solid #6366F1',
                boxShadow: '0 8px 24px -4px rgba(99, 102, 241, 0.15)',
                display: 'inline-block',
                width: '100%'
              }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#6366F1', textTransform: 'uppercase', marginBottom: '4px' }}>
                Question 01 &bull; Trigger Node
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A' }}>
                &ldquo;What are you interested in?&rdquo;
              </h3>
            </div>

            {/* Connecting Vertical Stem */}
            <div
              style={{
                width: '2px',
                height: '32px',
                backgroundColor: '#CBD5E1',
                margin: '0 auto',
                position: 'relative'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  bottom: '-6px',
                  left: '-4px',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: '#6366F1'
                }}
              />
            </div>
          </div>

          {/* BRANCH SELECTOR NODES (3 options) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
              maxWidth: '720px',
              margin: '0 auto 40px auto',
              position: 'relative'
            }}
            className="branch-selector-grid"
          >
            {Object.entries(branches).map(([key, item]) => {
              const isSelected = selectedBranch === key;
              const Icon = item.icon;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedBranch(key)}
                  style={{
                    backgroundColor: isSelected ? item.bgColor : '#FFFFFF',
                    border: isSelected ? `2px solid ${item.borderColor}` : '1.5px solid #E2E8F0',
                    borderRadius: '16px',
                    padding: '16px 12px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 200ms ease',
                    boxShadow: isSelected ? `0 8px 20px -4px ${item.color}35` : '0 2px 4px rgba(0,0,0,0.03)'
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '12px',
                      backgroundColor: isSelected ? item.color : '#F1F5F9',
                      color: isSelected ? '#FFFFFF' : '#475569',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 10px auto',
                      transition: 'all 200ms ease'
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: isSelected ? '#0F172A' : '#475569' }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '0.6875rem', color: isSelected ? item.color : '#94A3B8', fontWeight: 600, marginTop: '2px' }}>
                    {isSelected ? '● Active Branch' : 'Click to preview'}
                  </div>
                </button>
              );
            })}
          </div>

          {/* DYNAMIC RESULT CONTAINER: Show target questions */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              border: `2px solid ${current.color}40`,
              padding: '28px',
              boxShadow: '0 12px 30px -8px rgba(15, 23, 42, 0.08)',
              position: 'relative'
            }}
          >
            {/* Logic Rule Pill */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
              <span
                style={{
                  fontFamily: 'monospace',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  color: current.color,
                  backgroundColor: current.bgColor,
                  padding: '6px 14px',
                  borderRadius: '8px',
                  border: `1px solid ${current.borderColor}`
                }}
              >
                {current.rule}
              </span>
              <span style={{ fontSize: '0.8125rem', color: '#10B981', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} /> Instant Rule Execution
              </span>
            </div>

            <h4 style={{ fontSize: '1.1875rem', fontWeight: 800, color: '#0F172A', marginBottom: '16px' }}>
              {current.title}
            </h4>

            {/* Questions generated by this branch */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
              {current.questions.map((q, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#FAFBFD',
                    borderRadius: '12px',
                    padding: '14px 16px',
                    border: '1px solid #EEF2F6'
                  }}
                >
                  <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: current.color, marginBottom: '4px' }}>
                    Follow-up 0{idx + 2}
                  </div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#1E293B', marginBottom: '4px' }}>
                    {q.q}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B' }}>
                    {q.opt}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 680px) {
          .branch-selector-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
