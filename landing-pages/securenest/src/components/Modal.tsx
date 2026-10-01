import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, Lock, ArrowRight, Loader2 } from 'lucide-react';
import { triggerSecurityCelebration } from '../utils/confetti';

interface ModalProps {
  isOpen: boolean;
  type: 'trial' | 'demo' | 'signin' | 'expert' | null;
  onClose: () => void;
  planName?: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, type, onClose, planName }) => {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen || !type) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      triggerSecurityCelebration();
    }, 700);
  };

  const handleModalClose = () => {
    setIsSuccess(false);
    setEmail('');
    setCompany('');
    onClose();
  };

  const getTitle = () => {
    if (type === 'trial') return planName ? `Start Trial: ${planName} Plan` : 'Start Your 14-Day Free Trial';
    if (type === 'demo') return 'Schedule a Live Platform Demo';
    if (type === 'signin') return 'Sign In to SecureNest Console';
    return 'Talk to a Security Expert';
  };

  const getSubtitle = () => {
    if (type === 'trial') return 'Instant provisioning with sample telemetry or connect your own AWS/GCP accounts.';
    if (type === 'demo') return 'Take a 20-minute guided tour of our real-time threat intelligence engine.';
    if (type === 'signin') return 'Enter your enterprise SSO or verified work email to access the console.';
    return 'Speak with a Senior Security Architect about compliance and infrastructure requirements.';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cyber-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg rounded-2xl bg-cyber-dark border border-cyber-border p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow ambient in modal */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-cyber-emerald/10 blur-2xl rounded-full pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleModalClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white bg-cyber-card border border-cyber-border hover:border-slate-600 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 mx-auto rounded-full bg-cyber-emerald/10 border border-cyber-emerald/30 flex items-center justify-center text-cyber-emerald">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">Access Provisioned</h3>
            <p className="text-sm text-slate-400 max-w-sm mx-auto">
              We've dispatched an invitation and secure access link to{' '}
              <span className="text-white font-mono">{email}</span>.
            </p>
            <button
              onClick={handleModalClose}
              className="mt-4 px-6 py-2.5 rounded-xl font-semibold text-sm text-slate-950 bg-cyber-emerald hover:bg-emerald-400 transition-colors"
            >
              Back to SecureNest
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-cyber-card border border-cyber-border text-[11px] font-mono uppercase text-cyber-emerald">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Zero-Trust Verification</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-sans">
                {getTitle()}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                {getSubtitle()}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                  Work Email <span className="text-cyber-emerald">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-cyber-card border border-cyber-border text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyber-emerald focus:ring-1 focus:ring-cyber-emerald transition-colors font-mono"
                />
              </div>

              {type !== 'signin' && (
                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Security Corp"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-cyber-card border border-cyber-border text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyber-emerald focus:ring-1 focus:ring-cyber-emerald transition-colors font-mono"
                  />
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 rounded-xl font-semibold text-sm text-slate-950 bg-cyber-emerald hover:bg-emerald-400 active:scale-[0.98] disabled:opacity-50 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Verifying Identity…</span>
                  </>
                ) : (
                  <>
                    <span>Confirm & Continue</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="pt-2 text-center">
                <p className="text-[11px] font-mono text-slate-500 flex items-center justify-center gap-1.5">
                  <Lock className="w-3 h-3 text-cyber-emerald" />
                  <span>256-bit TLS encrypted · No credit card required</span>
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
