import React, { useState } from 'react';
import { Sparkles, ArrowRight, Star, CheckCircle, Eye, FileText, ChevronRight } from 'lucide-react';
import { templatesData, templateCategories } from '../data/templatesData.js';
import Badge from '../components/Badge.jsx';
import Button from '../components/Button.jsx';

export default function TemplatesSection({ onSelectTemplate }) {
  const [activeCategory, setActiveCategory] = useState('All Templates');

  const filteredTemplates = activeCategory === 'All Templates'
    ? templatesData
    : templatesData.filter((t) => t.category === activeCategory);

  return (
    <section id="templates" style={{ paddingTop: '100px', paddingBottom: '100px', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <Badge color="yellow" icon={Sparkles}>
            Pre-Built Kits
          </Badge>
          <h2 className="section-title">
            Start with a template. <span className="gradient-text">Make it yours</span>.
          </h2>
          <p className="section-subtitle">
            Skip the blank page paralysis. Launch conversion-tuned forms built on research from over 2 million successful submissions.
          </p>

          {/* Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '24px'
            }}
          >
            {templateCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '7px 16px',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 150ms ease',
                  backgroundColor: activeCategory === cat ? '#0F172A' : '#FFFFFF',
                  color: activeCategory === cat ? '#FFFFFF' : '#475569',
                  border: activeCategory === cat ? '1px solid #0F172A' : '1px solid #E2E8F0',
                  boxShadow: activeCategory === cat ? '0 2px 8px rgba(15, 23, 42, 0.15)' : 'none'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Templates Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '28px'
          }}
        >
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="glass-card"
              style={{
                borderRadius: '24px',
                padding: '24px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #E2E8F0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 200ms ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 16px 32px -8px rgba(99, 102, 241, 0.14)';
                e.currentTarget.style.borderColor = template.accentColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-card)';
                e.currentTarget.style.borderColor = '#E2E8F0';
              }}
            >
              {/* Top Meta info */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: '9999px',
                      backgroundColor: template.accentBg,
                      color: template.accentColor,
                      border: `1px solid ${template.accentColor}30`
                    }}
                  >
                    {template.tag}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8125rem', color: '#64748B', fontWeight: 600 }}>
                    <Star size={14} fill="#F59E0B" color="#F59E0B" />
                    <span>{template.rating}</span>
                    <span>&bull;</span>
                    <span>{template.responses} uses</span>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                  {template.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.5, marginBottom: '20px' }}>
                  {template.description}
                </p>

                {/* Miniature Form Preview Box */}
                <div
                  style={{
                    backgroundColor: '#FAFBFD',
                    borderRadius: '14px',
                    padding: '16px',
                    border: '1px solid #EEF2F6',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    marginBottom: '20px'
                  }}
                >
                  {template.fields.map((field, idx) => (
                    <div
                      key={idx}
                      style={{
                        backgroundColor: '#FFFFFF',
                        borderRadius: '8px',
                        padding: '8px 12px',
                        border: '1px solid #E2E8F0'
                      }}
                    >
                      <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#475569', marginBottom: '3px' }}>
                        {field.label}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>
                        {field.placeholder}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Button */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid #F1F5F9' }}>
                <span style={{ fontSize: '0.8125rem', color: '#64748B', fontWeight: 600 }}>
                  Category: <strong>{template.category}</strong>
                </span>
                <Button
                  variant="primary"
                  size="sm"
                  iconRight={ArrowRight}
                  onClick={() => onSelectTemplate && onSelectTemplate(template)}
                  style={{
                    background: `linear-gradient(135deg, ${template.accentColor} 0%, #0F172A 120%)`
                  }}
                >
                  Use Template
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
