import React, { useState } from 'react';
import { X, Sparkles, ArrowRight, CheckCircle2, Users, Layers, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SyncSpaceLogo } from './SyncSpaceLogo';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'signup' | 'login';
  onSuccessToast?: (msg: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'signup',
  onSuccessToast
}) => {
  const [mode, setMode] = useState<'signup' | 'login'>(initialMode);
  const [submitted, setSubmitted] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [workspaceName, setWorkspaceName] = useState('Acme Studio');
  const [teamSize, setTeamSize] = useState('5-20');

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
        mode === 'signup'
          ? `Workspace "${workspaceName}" initialized! Welcome aboard, ${name || 'teammate'}.`
          : `Signed in to SyncSpace workspace.`
      );
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#E4E2EB] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-[#FAF9FC] border-b border-[#E4E2EB] flex items-center justify-between">
          <SyncSpaceLogo size="sm" />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-[#E4E2EB] bg-white">
          <button
            type="button"
            onClick={() => { setMode('signup'); setSubmitted(false); }}
            className={`flex-1 py-3 text-sm font-semibold text-center border-b-2 transition-colors ${
              mode === 'signup'
                ? 'border-[#4F46E5] text-[#4F46E5] bg-[#EEF2FF]/30'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Create Free Workspace
          </button>
          <button
            type="button"
            onClick={() => { setMode('login'); setSubmitted(false); }}
            className={`flex-1 py-3 text-sm font-semibold text-center border-b-2 transition-colors ${
              mode === 'login'
                ? 'border-[#4F46E5] text-[#4F46E5] bg-[#EEF2FF]/30'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Log In to Existing
          </button>
        </div>

        {/* Body content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-display font-bold text-[#0F172A]">
                {mode === 'signup' ? 'Workspace Ready!' : 'Welcome Back'}
              </h3>
              <p className="text-sm text-slate-500 mt-2 max-w-sm mx-auto leading-relaxed">
                {mode === 'signup' 
                  ? `Your collaborative workspace for ${workspaceName} has been initialized. An invite link has been generated for ${email || 'your team'}.`
                  : `Signed in with team access privileges.`}
              </p>

              <button
                type="button"
                onClick={handleReset}
                className="mt-6 w-full py-2.5 px-4 bg-[#4F46E5] hover:bg-[#4338CA] text-white rounded-xl text-sm font-semibold transition-colors"
              >
                Enter Workspace Demo
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === 'signup' ? (
                <>
                  <div className="text-left mb-2">
                    <h3 className="text-lg font-display font-bold text-[#0F172A]">Set up your workspace in minutes</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Free 14-day trial on Team plan. No credit card required.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#0F172A] mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Maya Lin"
                        className="w-full px-3 py-2 text-sm rounded-xl border border-[#E4E2EB] bg-[#FAF9FC] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/20 focus:border-[#4F46E5]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#0F172A] mb-1">Work Email</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="maya@company.com"
                        className="w-full px-3 py-2 text-sm rounded-xl border border-[#E4E2EB] bg-[#FAF9FC] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/20 focus:border-[#4F46E5]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#0F172A] mb-1">Workspace Name</label>
                      <input
                        type="text"
                        value={workspaceName}
                        onChange={(e) => setWorkspaceName(e.target.value)}
                        placeholder="Acme Studio"
                        className="w-full px-3 py-2 text-sm rounded-xl border border-[#E4E2EB] bg-[#FAF9FC] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/20 focus:border-[#4F46E5]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#0F172A] mb-1">Team Size</label>
                      <select
                        value={teamSize}
                        onChange={(e) => setTeamSize(e.target.value)}
                        className="w-full px-3 py-2 text-sm rounded-xl border border-[#E4E2EB] bg-[#FAF9FC] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/20 focus:border-[#4F46E5]"
                      >
                        <option value="1-5">1 - 5 teammates</option>
                        <option value="5-20">5 - 20 teammates</option>
                        <option value="20-50">20 - 50 teammates</option>
                        <option value="50+">50+ teammates</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3 px-4 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold text-sm rounded-xl shadow-sm transition-all flex items-center justify-center gap-2"
                  >
                    <span>Create Free Workspace</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </>
              ) : (
                <>
                  <div className="text-left mb-2">
                    <h3 className="text-lg font-display font-bold text-[#0F172A]">Log In to SyncSpace</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Jump directly into your team's active projects.</p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0F172A] mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="teammate@company.com"
                      className="w-full px-3 py-2 text-sm rounded-xl border border-[#E4E2EB] bg-[#FAF9FC] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/20 focus:border-[#4F46E5]"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="block text-xs font-semibold text-[#0F172A]">Password</label>
                      <span className="text-xs text-[#4F46E5] hover:underline cursor-pointer">Forgot?</span>
                    </div>
                    <input
                      type="password"
                      required
                      defaultValue="••••••••••••"
                      className="w-full px-3 py-2 text-sm rounded-xl border border-[#E4E2EB] bg-[#FAF9FC] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/20 focus:border-[#4F46E5]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-[#0F172A] hover:bg-slate-800 text-white font-semibold text-sm rounded-xl shadow-sm transition-all flex items-center justify-center gap-2"
                  >
                    <span>Log In to Workspace</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </>
              )}
            </form>
          )}
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 bg-[#FAF9FC] border-t border-[#E4E2EB] text-[11px] text-slate-500 text-center">
          Simulated onboarding demo. No backend storage required.
        </div>
      </div>
    </div>
  );
};
