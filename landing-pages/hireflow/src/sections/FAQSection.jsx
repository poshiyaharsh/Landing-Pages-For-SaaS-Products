import React, { useState } from 'react';
import { ChevronDown, Sparkles, HelpCircle } from 'lucide-react';
import { faqs } from '../data/mockData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section" id="faq" style={{ background: 'var(--color-background-soft)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge section-tag">
            <HelpCircle size={14} />
            <span>ANSWERS & CLARITY</span>
          </div>
          <h2 className="section-title">
            Frequently asked questions.
          </h2>
          <p className="section-subtitle">
            Everything you need to know about our recruitment platform, AI safety, and enterprise rollout.
          </p>
        </div>

        {/* Accordion List */}
        <div style={{
          maxWidth: '820px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.875rem'
        }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                style={{
                  background: 'var(--color-white)',
                  border: `1px solid ${isOpen ? 'var(--color-primary)' : 'var(--color-border)'}`,
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isOpen ? 'var(--shadow-md)' : 'var(--shadow-xs)'
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1.25rem 1.5rem',
                    background: 'transparent',
                    textAlign: 'left',
                    gap: '1rem',
                    cursor: 'pointer'
                  }}
                >
                  <span style={{
                    fontSize: '1.0625rem',
                    fontWeight: 700,
                    color: isOpen ? 'var(--color-primary)' : 'var(--color-text-primary)',
                    lineHeight: 1.35
                  }}>
                    {faq.question}
                  </span>

                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: isOpen ? 'var(--color-lavender)' : 'var(--color-background)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isOpen ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                    flexShrink: 0,
                    transition: 'transform 0.2s ease',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 1.5rem 1.5rem',
                    color: 'var(--color-text-secondary)',
                    fontSize: '0.9375rem',
                    lineHeight: 1.7,
                    animation: 'fadeIn 0.2s ease-out',
                    borderTop: '1px solid var(--color-border-light)',
                    paddingTop: '1rem'
                  }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
