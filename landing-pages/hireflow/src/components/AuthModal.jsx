import React, { useState } from 'react';
import { X, Lock, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

export default function AuthModal({ isOpen, onClose }) {
  const [mode, setMode] = useState('Sign In');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signedIn, setSignedIn] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSignedIn(true);
    setTimeout(() => {
      onClose();
      setSignedIn(false);
    }, 1800);
  };

  return (
    <div 
      className="modal-backdrop" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
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
          marginBottom: '1.5rem'
        }}>
          <div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800 }}>
              {signedIn ? 'Welcome Back!' : `${mode} to HireFlow`}
            </h3>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>
              Enterprise Recruiter Workspace Portal
            </p>
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

        {signedIn ? (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'var(--color-success-bg)',
              color: 'var(--color-success)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem'
            }}>
              <ShieldCheck size={28} />
            </div>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>
              Authentication Verified
            </h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
              Connecting to ATS pipeline & candidate database...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '0.375rem' }}>
                Corporate Email
              </label>
              <div style={{ position: 'relative' }}>
                <Mail size={16} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.625rem 0.75rem 0.625rem 2.25rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)',
                    fontSize: '0.9375rem',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.375rem' }}>
                <label style={{ fontSize: '0.8125rem', fontWeight: 600 }}>
                  Password
                </label>
                <a href="#forgot" onClick={(e) => e.preventDefault()} style={{ fontSize: '0.75rem', color: 'var(--color-primary)' }}>
                  Forgot password?
                </a>
              </div>
              <div style={{ position: 'relative' }}>
                <Lock size={16} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.625rem 0.75rem 0.625rem 2.25rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)',
                    fontSize: '0.9375rem',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{
                width: '100%',
                justifyContent: 'center',
                padding: '0.75rem',
                marginTop: '0.5rem'
              }}
            >
              {mode === 'Sign In' ? 'Sign In to Workspace' : 'Create Recruiter Account'}
              <ArrowRight size={16} />
            </button>

            <div style={{
              textAlign: 'center',
              fontSize: '0.8125rem',
              color: 'var(--color-text-secondary)',
              marginTop: '0.5rem'
            }}>
              {mode === 'Sign In' ? (
                <>
                  Don't have a team account?{' '}
                  <button
                    type="button"
                    onClick={() => setMode('Sign Up')}
                    style={{ color: 'var(--color-primary)', fontWeight: 700 }}
                  >
                    Register here
                  </button>
                </>
              ) : (
                <>
                  Already registered?{' '}
                  <button
                    type="button"
                    onClick={() => setMode('Sign In')}
                    style={{ color: 'var(--color-primary)', fontWeight: 700 }}
                  >
                    Sign In
                  </button>
                </>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
