import React from 'react';
import { testimonials } from '../data/mockData';

export default function TestimonialsSection() {
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
          Trusted by growing teams
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                background: 'var(--color-bg-card)'
              }}
            >
              {/* Quote */}
              <p style={{
                fontSize: '1.125rem',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
                flex: 1
              }}>
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--color-border)'
              }}>
                {/* Avatar placeholder */}
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  flexShrink: 0
                }}>
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <div style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    marginBottom: '0.25rem'
                  }}>
                    {testimonial.name}
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-text-secondary)'
                  }}>
                    {testimonial.role} • {testimonial.company}
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: 'var(--color-text-secondary)',
                    marginTop: '0.25rem'
                  }}>
                    {testimonial.size}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
