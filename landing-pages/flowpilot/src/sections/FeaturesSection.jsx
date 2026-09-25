import React, { useState } from 'react';
import { CORE_FEATURES } from '../data/flowpilotData';
import { Badge } from '../components/Badge';
import {
  Sparkles,
  Network,
  Users,
  TrendingUp,
  FileCheck,
  Check,
  ArrowUpRight
} from 'lucide-react';

const iconMap = {
  Sparkles,
  Network,
  Users,
  TrendingUp,
  FileCheck
};

export const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(CORE_FEATURES[0].id);

  return (
    <section id="features" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-pulse" />
            <span>CORE ARCHITECTURE</span>
          </div>
          <h2 className="section-title">
            Engineered for Autonomous <br />
            <span className="text-gradient">Sprint Execution</span>
          </h2>
          <p className="section-desc">
            Five unified modules designed to eliminate manual project administration and give engineering teams uninterrupted focus.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 'var(--space-xl)',
            marginBottom: 'var(--space-3xl)'
          }}
        >
          {CORE_FEATURES.map((feature, idx) => {
            const Icon = iconMap[feature.iconName] || Sparkles;
            const isSelected = activeFeature === feature.id;

            return (
              <div
                key={feature.id}
                className="glass-card"
                onClick={() => setActiveFeature(feature.id)}
                style={{
                  padding: 'var(--space-xl)',
                  cursor: 'pointer',
                  borderColor: isSelected ? 'rgba(56, 189, 248, 0.45)' : 'rgba(56, 189, 248, 0.14)',
                  backgroundColor: isSelected ? 'rgba(14, 22, 44, 0.85)' : 'rgba(10, 16, 32, 0.65)'
                }}
              >
                {/* Card Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-md)' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(56, 189, 248, 0.1)',
                      border: '1px solid rgba(56, 189, 248, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-primary)'
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <Badge variant={feature.badgeColor} hasPulse={false}>
                    {feature.stats}
                  </Badge>
                </div>

                <div
                  style={{
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-disabled)',
                    letterSpacing: '0.08em',
                    marginBottom: '6px'
                  }}
                >
                  {feature.tag}
                </div>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    color: '#FFFFFF',
                    marginBottom: '12px',
                    lineHeight: 1.3
                  }}
                >
                  {feature.title}
                </h3>

                <p
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.925rem',
                    lineHeight: 1.6,
                    marginBottom: '20px'
                  }}
                >
                  {feature.description}
                </p>

                {/* Highlights List */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '16px' }}>
                  {feature.highlights.map((h, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      <Check size={14} color="#38BDF8" style={{ flexShrink: 0 }} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
