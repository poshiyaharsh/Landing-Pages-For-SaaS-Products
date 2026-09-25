import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/flowpilotData';
import { ChevronDown } from 'lucide-react';

export const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container container-narrow">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-pulse" />
            <span>CLARIFICATIONS &amp; ARCHITECTURE</span>
          </div>
          <h2 className="section-title">
            Frequently Asked <br />
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="section-desc">
            Everything you need to know about FlowPilot data security, integrations, and deployment models.
          </p>
        </div>

        {/* Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: 0,
                  backgroundColor: isOpen ? 'rgba(14, 22, 44, 0.85)' : 'rgba(10, 16, 32, 0.6)',
                  borderColor: isOpen ? 'rgba(56, 189, 248, 0.4)' : 'rgba(56, 189, 248, 0.12)'
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    color: '#FFFFFF',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  <span>{item.question}</span>
                  <div
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 200ms ease',
                      color: 'var(--color-primary)',
                      flexShrink: 0,
                      marginLeft: '16px'
                    }}
                  >
                    <ChevronDown size={20} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 24px 22px 24px',
                      color: 'var(--text-muted)',
                      fontSize: '0.95rem',
                      lineHeight: 1.65,
                      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                      paddingTop: '16px'
                    }}
                  >
                    {item.answer}
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
