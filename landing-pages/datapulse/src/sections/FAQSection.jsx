import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqData } from '../data/mockData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section" style={{
      background: 'var(--color-bg-panel)'
    }}>
      <div className="container">
        <h2 style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: 'var(--spacing-xl)'
        }}>
          Frequently asked questions
        </h2>

        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {faqData.map((faq, index) => (
            <div
              key={index}
              style={{
                marginBottom: '1rem',
                background: 'var(--color-bg-card)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1.25rem 1.5rem',
                  background: 'transparent',
                  textAlign: 'left',
                  gap: '1rem'
                }}
                aria-expanded={openIndex === index}
              >
                <span style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  lineHeight: 1.4
                }}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp size={20} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                ) : (
                  <ChevronDown size={20} color="var(--color-text-secondary)" style={{ flexShrink: 0 }} />
                )}
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div style={{
                  padding: '0 1.5rem 1.5rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.7,
                  animation: 'fadeIn 0.3s ease'
                }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
