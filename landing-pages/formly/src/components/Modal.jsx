import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, Send, Star } from 'lucide-react';
import Button from './Button.jsx';
import Badge from './Badge.jsx';
import { fireConfetti } from '../utils/confetti.js';

export default function Modal({ isOpen, onClose, initialData = null, mode = 'builder' }) {
  const [formData, setFormData] = useState({
    name: 'Sarah Connor',
    email: 'sarah@skynet.ai',
    useCase: 'Product Feedback',
    rating: 5,
    notes: 'Love the super smooth form animations!'
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    fireConfetti(0.5, 0.5);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const title = initialData?.title || (mode === 'signin' ? 'Sign in to Formly' : 'Try Formly Live Builder');

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: 'rgba(15, 23, 42, 0.55)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        animation: 'fadeIn 200ms ease'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '540px',
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          boxShadow: '0 25px 60px -15px rgba(15, 23, 42, 0.3)',
          border: '1px solid rgba(226, 232, 240, 0.9)',
          overflow: 'hidden',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: '20px 24px',
            borderBottom: '1px solid #F1F5F9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'linear-gradient(to right, #FAFBFD, #FFFFFF)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Badge color="purple" icon={Sparkles}>
              Interactive Preview
            </Badge>
            <span style={{ fontSize: '0.875rem', color: '#64748B' }}>Live Simulation</span>
          </div>
          <button
            onClick={onClose}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#64748B',
              backgroundColor: '#F1F5F9',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Content Body */}
        <div style={{ padding: '28px 24px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '24px 12px' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: '#ECFDF5',
                  color: '#10B981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px auto',
                  border: '2px solid rgba(16, 185, 129, 0.3)'
                }}
              >
                <CheckCircle size={36} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '8px' }}>
                Response Recorded!
              </h3>
              <p style={{ color: '#64748B', fontSize: '0.9375rem', marginBottom: '24px', maxWidth: '380px', margin: '0 auto 24px auto' }}>
                Your response was immediately ingested, formatted, and synced across configured webhooks with &lt;40ms latency.
              </p>
              <Button variant="primary" size="md" onClick={handleReset}>
                Done &amp; Close Preview
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '20px' }}>
                <h3 style={{ fontSize: '1.375rem', fontWeight: 800, marginBottom: '6px' }}>{title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#64748B' }}>
                  {initialData?.description || 'Fill out this sample form to experience how your end users interact with Formly.'}
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                    Full Name <span style={{ color: '#EC4899' }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      border: '1.5px solid #E2E8F0',
                      fontSize: '0.9375rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                    Work Email <span style={{ color: '#EC4899' }}>*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      border: '1.5px solid #E2E8F0',
                      fontSize: '0.9375rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                    How would you rate the experience?
                  </label>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData({ ...formData, rating: star })}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          padding: '4px',
                          color: star <= formData.rating ? '#F59E0B' : '#CBD5E1'
                        }}
                      >
                        <Star size={24} fill={star <= formData.rating ? '#F59E0B' : 'transparent'} />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                    Additional Comments
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      border: '1.5px solid #E2E8F0',
                      fontSize: '0.9375rem',
                      outline: 'none',
                      resize: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>

              <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                <Button variant="secondary" size="md" onClick={onClose}>
                  Cancel
                </Button>
                <Button variant="primary" size="md" type="submit" iconRight={Send}>
                  Submit Response
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
