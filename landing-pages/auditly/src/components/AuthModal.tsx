import React, { useState } from 'react';
import { X, ShieldCheck, Calendar, ArrowRight, Lock, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { AuditlyLogo } from './AuditlyLogo';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'demo' | 'signin';
  onSuccessToast?: (msg: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'demo',
  onSuccessToast
}) => {
  const [mode, setMode] = useState<'demo' | 'signin'>(initialMode);
  const [submitted, setSubmitted] = useState(false);

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [framework, setFramework] = useState('SOC 2 Type II');
  const [teamSize, setTeamSize] = useState('20-100');
  const [demoDate, setDemoDate] = useState('2026-10-22');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 }
    });
    if (onSuccessToast) {
      onSuccessToast(
        mode === 'demo'
          ? `Demo scheduled for ${name || 'your team'} on ${demoDate}!`
          : `Signed in to Auditly Demo Workspace.`
      );
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#142033]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl border border-[#DFE6EF] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header strip */}
        <div className="px-6 py-4 bg-[#F6F8FB] border-b border-[#DFE6EF] flex items-center justify-between">
          <AuditlyLogo size="sm" />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-[#64748B] hover:text-[#142033] hover:bg-slate-200/50 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-[#DFE6EF] bg-white">
          <button
            type="button"
            onClick={() => { setMode('demo'); setSubmitted(false); }}
            className={`flex-1 py-3 text-sm font-semibold text-center border-b-2 transition-colors ${
              mode === 'demo'
                ? 'border-[#3569D4] text-[#3569D4] bg-[#EAF1FF]/30'
                : 'border-transparent text-[#64748B] hover:text-[#142033]'
            }`}
          >
            Book a Demo
          </button>
          <button
            type="button"
            onClick={() => { setMode('signin'); setSubmitted(false); }}
            className={`flex-1 py-3 text-sm font-semibold text-center border-b-2 transition-colors ${
              mode === 'signin'
                ? 'border-[#3569D4] text-[#3569D4] bg-[#EAF1FF]/30'
                : 'border-transparent text-[#64748B] hover:text-[#142033]'
            }`}
          >
            Sign In to Workspace
          </button>
        </div>

        {/* Body content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-[#E6F6F0] text-[#17865C] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-display font-bold text-[#142033]">
                {mode === 'demo' ? 'Demo Scheduled!' : 'Welcome to Auditly'}
              </h3>
              <p className="text-sm text-[#64748B] mt-2 max-w-sm mx-auto leading-relaxed">
                {mode === 'demo' 
                  ? `We've reserved your 30-minute tailored walkthrough on ${demoDate}. A calendar invitation has been prepared for ${email || 'your email'}.`
                  : `Signed into the interactive prototype with full Administrator privileges.`}
              </p>
              
              <div className="mt-6 pt-4 border-t border-[#DFE6EF] text-xs text-[#64748B] flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#159B91]" />
                <span>Simulated enterprise environment. No real data required.</span>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="mt-6 w-full py-2.5 px-4 bg-[#142C4E] hover:bg-[#0D1D35] text-white rounded-lg text-sm font-medium transition-colors"
              >
                Return to Platform Preview
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === 'demo' ? (
                <>
                  <div className="text-left mb-2">
                    <h3 className="text-lg font-display font-bold text-[#142033]">See Auditly in Action</h3>
                    <p className="text-xs text-[#64748B] mt-0.5">Experience how security and compliance teams organize controls and evidence.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#142033] mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Sarah Jenkins"
                        className="w-full px-3 py-2 text-sm rounded-lg border border-[#DFE6EF] bg-[#F6F8FB] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3569D4]/20 focus:border-[#3569D4]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#142033] mb-1">Work Email</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="s.jenkins@company.com"
                        className="w-full px-3 py-2 text-sm rounded-lg border border-[#DFE6EF] bg-[#F6F8FB] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3569D4]/20 focus:border-[#3569D4]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#142033] mb-1">Company Name</label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Acme Corp"
                        className="w-full px-3 py-2 text-sm rounded-lg border border-[#DFE6EF] bg-[#F6F8FB] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3569D4]/20 focus:border-[#3569D4]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#142033] mb-1">Company Size</label>
                      <select
                        value={teamSize}
                        onChange={(e) => setTeamSize(e.target.value)}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-[#DFE6EF] bg-[#F6F8FB] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3569D4]/20 focus:border-[#3569D4]"
                      >
                        <option value="1-20">1 - 20 employees</option>
                        <option value="20-100">20 - 100 employees</option>
                        <option value="100-500">100 - 500 employees</option>
                        <option value="500+">500+ employees</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#142033] mb-1">Primary Framework</label>
                      <select
                        value={framework}
                        onChange={(e) => setFramework(e.target.value)}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-[#DFE6EF] bg-[#F6F8FB] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3569D4]/20 focus:border-[#3569D4]"
                      >
                        <option value="SOC 2 Type II">SOC 2 Type II</option>
                        <option value="ISO 27001">ISO/IEC 27001</option>
                        <option value="GDPR">GDPR Readiness</option>
                        <option value="NIST CSF">NIST CSF 2.0</option>
                        <option value="HIPAA">HIPAA Security Rule</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#142033] mb-1">Preferred Demo Date</label>
                      <div className="relative">
                        <input
                          type="date"
                          value={demoDate}
                          onChange={(e) => setDemoDate(e.target.value)}
                          className="w-full px-3 py-2 text-sm rounded-lg border border-[#DFE6EF] bg-[#F6F8FB] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3569D4]/20 focus:border-[#3569D4]"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-2.5 px-4 bg-[#3569D4] hover:bg-[#2853B8] text-white font-medium text-sm rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Confirm Demo Request</span>
                  </button>
                </>
              ) : (
                <>
                  <div className="text-left mb-2">
                    <h3 className="text-lg font-display font-bold text-[#142033]">Sign In to Workspace</h3>
                    <p className="text-xs text-[#64748B] mt-0.5">Access your enterprise compliance controls and audit trails.</p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#142033] mb-1">Corporate Email</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="compliance@enterprise.com"
                      className="w-full px-3 py-2 text-sm rounded-lg border border-[#DFE6EF] bg-[#F6F8FB] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3569D4]/20 focus:border-[#3569D4]"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="block text-xs font-semibold text-[#142033]">Password</label>
                      <span className="text-xs text-[#3569D4] hover:underline cursor-pointer">Forgot?</span>
                    </div>
                    <input
                      type="password"
                      required
                      defaultValue="••••••••••••"
                      className="w-full px-3 py-2 text-sm rounded-lg border border-[#DFE6EF] bg-[#F6F8FB] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3569D4]/20 focus:border-[#3569D4]"
                    />
                  </div>

                  <div className="p-3 bg-[#EEF2F7] rounded-lg text-xs text-[#64748B] flex items-center gap-2">
                    <Lock className="w-4 h-4 text-[#142C4E] shrink-0" />
                    <span>Single Sign-On (Okta / Azure AD SAML) is simulated for this interactive prototype.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 bg-[#142C4E] hover:bg-[#0D1D35] text-white font-medium text-sm rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Sign In with SSO</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </>
              )}
            </form>
          )}
        </div>

        {/* Footer disclaimer */}
        <div className="px-6 py-3 bg-[#F6F8FB] border-t border-[#DFE6EF] text-[11px] text-[#64748B] text-center">
          Auditly prototype demonstration. Built for security teams, compliance officers, and IT administrators.
        </div>
      </div>
    </div>
  );
};
