import React, { useState } from 'react';
import { FAQS } from '../data/mockData';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="section" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="container" style={{ maxWidth: '860px' }}>
        {/* Section Header */}
        <div className="text-center mx-auto" style={{ marginBottom: '56px' }}>
          <div className="section-tag section-tag-ai">
            <HelpCircle size={14} />
            <span>Got Questions?</span>
          </div>

          <h2 className="section-heading">
            Frequently Asked Questions
          </h2>

          <p className="section-subheading mx-auto" style={{ marginBottom: '0' }}>
            Everything you need to know about Meetly AI, transcription accuracy, data privacy, and team onboarding.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.question}
                className="card-light"
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: isOpen ? '1px solid #CBD5E1' : '1px solid #E2E8F0',
                  boxShadow: isOpen ? 'var(--shadow-sm)' : 'none'
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    padding: '22px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    border: 'none',
                    background: '#FFFFFF',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <span style={{ fontSize: '1.05rem', fontWeight: '700', color: '#0F172A' }}>
                    {faq.question}
                  </span>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: isOpen ? '#EEF2FF' : '#F1F5F9',
                      color: isOpen ? '#6366F1' : '#64748B',
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
                      padding: '0 24px 22px',
                      background: '#FFFFFF',
                      fontSize: '0.9375rem',
                      lineHeight: '1.65',
                      color: '#475569',
                      borderTop: '1px solid #F1F5F9'
                    }}
                  >
                    <p style={{ margin: 0, paddingTop: '16px' }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
