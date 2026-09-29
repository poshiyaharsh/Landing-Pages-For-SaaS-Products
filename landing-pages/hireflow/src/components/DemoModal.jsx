import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function DemoModal({ isOpen, onClose, initialContext = 'Product Demo' }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    hiringVolume: '10-50 hires/yr'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after brief celebration
    }, 2500);
  };

  return (
    <div 
      className="modal-backdrop" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="modal-dialog" 
        onClick={(e) => e.stopPropagation()}
        style={{ padding: '2rem' }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1.25rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'var(--color-lavender)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-primary)'
            }}>
              <Sparkles size={16} />
            </div>
            <h3 id="modal-title" style={{ fontSize: '1.25rem', fontWeight: 800 }}>
              {initialContext || 'Experience HireFlow'}
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close dialog"
            style={{
              padding: '0.375rem',
              borderRadius: '50%',
              color: 'var(--color-text-secondary)',
              cursor: 'pointer'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'var(--color-success-bg)',
              color: 'var(--color-success)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem'
            }}>
              <CheckCircle2 size={32} />
            </div>
            <h4 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              You're on the priority list!
            </h4>
            <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: '1.5rem' }}>
              We've dispatched an interactive sandbox invitation and recruiter onboarding credentials to <strong>{formData.email || 'your email'}</strong>.
            </p>
            <button
              onClick={onClose}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Back to Experience
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              Join forward-thinking hiring teams accelerating candidate matching and screening by 4.8× with zero keyword drop-off.
            </p>

            <div>
              <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '0.375rem' }}>
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="Sarah Mitchell"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.625rem 0.875rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  fontSize: '0.9375rem',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '0.375rem' }}>
                Work Email
              </label>
              <input
                type="email"
                required
                placeholder="s.mitchell@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.625rem 0.875rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  fontSize: '0.9375rem',
                  outline: 'none'
                }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '0.375rem' }}>
                  Company Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Acme Talent"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.625rem 0.875rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)',
                    fontSize: '0.9375rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '0.375rem' }}>
                  Annual Volume
                </label>
                <select
                  value={formData.hiringVolume}
                  onChange={(e) => setFormData({ ...formData, hiringVolume: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.625rem 0.875rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)',
                    fontSize: '0.9375rem',
                    background: 'white',
                    outline: 'none'
                  }}
                >
                  <option>1-10 hires/yr</option>
                  <option>10-50 hires/yr</option>
                  <option>50-200 hires/yr</option>
                  <option>200+ hires/yr</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{
                width: '100%',
                justifyContent: 'center',
                padding: '0.875rem',
                marginTop: '0.5rem',
                fontSize: '1rem'
              }}
            >
              Get Instant Access
              <ArrowRight size={18} />
            </button>

            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textAlign: 'center' }}>
              Instant 14-day access • No credit card required • GDPR Compliant
            </span>
          </form>
        )}
      </div>
    </div>
  );
}
