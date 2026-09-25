import React from 'react';
import { WORKFLOW_STEPS } from '../data/flowpilotData';
import { Badge } from '../components/Badge';

export const WorkflowSection = () => {
  return (
    <section id="workflow" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-pulse" />
            <span>HOW FLOWPILOT OPERATES</span>
          </div>
          <h2 className="section-title">
            From Raw Requirement to <br />
            <span className="text-gradient">Shipped Production</span>
          </h2>
          <p className="section-desc">
            A frictionless loop running silently alongside your engineers, converting commits and specs into structured momentum.
          </p>
        </div>

        {/* 4-Step Cards Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--space-xl)',
            position: 'relative'
          }}
        >
          {WORKFLOW_STEPS.map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: 'var(--space-xl)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Step Number Top Banner */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 'var(--space-lg)'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.5rem',
                      fontWeight: 800,
                      color: 'var(--color-primary)',
                      background: 'rgba(56, 189, 248, 0.1)',
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid rgba(56, 189, 248, 0.25)'
                    }}
                  >
                    {item.step}
                  </span>
                  <Badge variant="cyan" hasPulse={false}>
                    {item.badge}
                  </Badge>
                </div>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    color: '#FFFFFF',
                    marginBottom: '10px'
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem',
                    lineHeight: 1.6
                  }}
                >
                  {item.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div
                style={{
                  marginTop: 'var(--space-xl)',
                  height: '2px',
                  background: 'linear-gradient(90deg, #38BDF8 0%, transparent 100%)',
                  opacity: 0.4
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
