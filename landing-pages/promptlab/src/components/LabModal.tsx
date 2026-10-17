import React, { useState } from 'react';
import { X, Terminal, Cpu, CheckCircle2, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface LabModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (msg: string) => void;
  defaultMode?: 'login' | 'signup' | 'start';
}

export const LabModal: React.FC<LabModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  defaultMode = 'start',
}) => {
  const [mode, setMode] = useState<'login' | 'signup' | 'start'>(defaultMode);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [apiKeyAlias, setApiKeyAlias] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !email.includes('@')) {
      setError('Please provide a valid engineer email address.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#06B6D4', '#14B8A6', '#8B5CF6'],
        });
      } catch (err) {
        // fallback
      }
      onSuccess(
        mode === 'login'
          ? `Welcome back to the lab, ${email.split('@')[0]}!`
          : `Sandbox workspace configured for ${email}! Access token generated.`
      );
      onClose();
    }, 700);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lab-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-[#0F172A] border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-950/50 p-6 md:p-8 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
        
        {/* Glow corner */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between pb-4 border-b border-slate-800 relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center">
              <Terminal className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <h3 id="lab-modal-title" className="text-base font-semibold text-white tracking-tight">
                {mode === 'login' ? 'Engineer Access Terminal' : 'Initialize Experiment Lab'}
              </h3>
              <p className="text-[11px] font-mono text-cyan-400/80">workspace: promptlab-sandbox</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4 relative z-10">
          {error && (
            <div className="p-3 text-xs bg-rose-950/60 border border-rose-500/40 text-rose-200 rounded-lg flex items-center gap-2 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
              {error}
            </div>
          )}

          {mode !== 'login' && (
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                Engineer / Team Identifier
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Alex Morgan (Core AI)"
                className="w-full px-3.5 py-2.5 bg-[#0B0F19] border border-slate-700 focus:border-cyan-400 rounded-lg text-sm text-white placeholder-slate-500 outline-none transition-colors font-sans"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
              Work Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="alex@acmelabs.ai"
              className="w-full px-3.5 py-2.5 bg-[#0B0F19] border border-slate-700 focus:border-cyan-400 rounded-lg text-sm text-white placeholder-slate-500 outline-none transition-colors font-sans"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
              BYOK Provider Alias <span className="text-slate-500 lowercase">(optional)</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={apiKeyAlias}
                onChange={(e) => setApiKeyAlias(e.target.value)}
                placeholder="openai-eval-org / anthropic-staging"
                className="w-full px-3.5 py-2.5 bg-[#0B0F19] border border-slate-700 focus:border-cyan-400 rounded-lg text-sm text-white placeholder-slate-500 outline-none transition-colors font-mono text-xs"
              />
              <Cpu className="absolute right-3 top-3 w-4 h-4 text-slate-500" />
            </div>
            <p className="mt-1 text-[11px] text-slate-400">
              * Local simulation sandbox active by default. No live API credentials required to experiment.
            </p>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-2 py-3 px-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-semibold text-sm rounded-lg shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {isLoading ? (
              <span className="inline-block w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <span>{mode === 'login' ? 'Authenticate Session' : 'Enter Experiment Sandbox'}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          <div className="pt-2 text-center">
            <button
              type="button"
              onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
              className="text-xs text-cyan-400 hover:text-cyan-300 underline font-mono cursor-pointer"
            >
              {mode === 'login'
                ? 'Need a new sandbox environment? Initialize here'
                : 'Already have credentials? Access terminal'}
            </button>
          </div>
        </form>

        <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            Zero prompt retention
          </span>
          <span>v2.4.0-stable</span>
        </div>
      </div>
    </div>
  );
};
