import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FAQS } from '../data/mockData';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="faq"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
        backgroundColor: '#FFFFFF',
        position: 'relative'
      }}
    >
      <div className="container" style={{ maxWidth: '840px' }}>
        {/* Header */}
        <div className="section-header" style={{ marginBottom: '48px' }}>
          <div className="eyebrow-badge" style={{ marginBottom: '14px' }}>
            <HelpCircle size={14} />
            <span>Got Questions?</span>
          </div>
          <h2>
            Frequently asked <span className="gradient-text">questions.</span>
          </h2>
          <p>
            Everything you need to know about MailForge's AI generation, email editor, and telemetry stack.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: isOpen ? '#FAFBFC' : '#FFFFFF',
                  borderRadius: '14px',
                  border: isOpen ? '1px solid #3B82F6' : '1px solid var(--border-light)',
                  overflow: 'hidden',
                  transition: 'all 200ms ease',
                  boxShadow: isOpen ? '0 4px 16px rgba(37, 99, 235, 0.08)' : 'none'
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    gap: '16px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.0625rem',
                      fontWeight: 700,
                      color: isOpen ? '#0F172A' : '#1E293B'
                    }}
                  >
                    {faq.q}
                  </span>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: isOpen ? '#EFF6FF' : '#F1F5F9',
                      color: isOpen ? '#2563EB' : '#64748B',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 200ms ease'
                    }}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 24px 22px 24px',
                      color: '#475569',
                      fontSize: '0.9375rem',
                      lineHeight: 1.65,
                      borderTop: '1px solid var(--border-subtle)',
                      paddingTop: '14px'
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Help Card */}
        <div
          style={{
            marginTop: '48px',
            backgroundColor: '#FAFBFC',
            border: '1px dashed var(--border-medium)',
            borderRadius: '16px',
            padding: '24px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '1rem' }}>
            Have a question that isn't answered here?
          </div>
          <p style={{ fontSize: '0.875rem', color: '#64748B', maxWidth: '440px' }}>
            Our lifecycle marketing engineers are available around the clock to help evaluate your campaign architecture.
          </p>
          <a
            href="#pricing"
            style={{
              color: '#2563EB',
              fontWeight: 600,
              fontSize: '0.875rem',
              marginTop: '4px',
              textDecoration: 'underline',
              textUnderlineOffset: '3px'
            }}
          >
            Chat with our marketing team →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
