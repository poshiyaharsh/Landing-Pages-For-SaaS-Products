import React, { useState } from 'react';
import { X, Rocket, GitBranch, ArrowRight, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BuildModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (msg: string) => void;
  defaultMode?: 'login' | 'signup' | 'start';
}

export const BuildModal: React.FC<BuildModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  defaultMode = 'start',
}) => {
  const [mode, setMode] = useState<'login' | 'signup' | 'start'>(defaultMode);
  const [email, setEmail] = useState('');
  const [projectName, setProjectName] = useState('acme-dashboard');
  const [githubUser, setGithubUser] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !email.includes('@')) {
      setError('Please provide a valid developer email address.');
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
          colors: ['#2563EB', '#10B981', '#38BDF8'],
        });
      } catch (err) {
        // fallback
      }
      onSuccess(
        mode === 'login'
          ? `Welcome back, ${email.split('@')[0]}! Active deployments synced.`
          : `Project workspace initialized for "${projectName}"! CLI token ready.`
      );
      onClose();
    }, 700);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="build-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 md:p-8 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center">
              <Rocket className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <h3 id="build-modal-title" className="text-base font-bold text-slate-900 tracking-tight">
                {mode === 'login' ? 'Developer Access Console' : 'Initialize Project Launch Kit'}
              </h3>
              <p className="text-[11px] font-mono text-slate-500">workspace: local-deploy-sandbox</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="text-slate-400 hover:text-slate-700 p-1 rounded-md hover:bg-slate-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          {error && (
            <div className="p-3 text-xs bg-rose-50 border border-rose-200 text-rose-700 rounded-lg flex items-center gap-2 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              {error}
            </div>
          )}

          {mode !== 'login' && (
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 mb-1.5">
                Initial Project Name
              </label>
              <input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="my-saas-platform"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-lg text-sm text-slate-900 placeholder-slate-400 outline-none transition-colors font-mono"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 mb-1.5">
              Work / Developer Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="alex@founder.dev"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-lg text-sm text-slate-900 placeholder-slate-400 outline-none transition-colors font-sans"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 mb-1.5">
              GitHub Username / Org <span className="text-slate-400 lowercase">(optional)</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={githubUser}
                onChange={(e) => setGithubUser(e.target.value)}
                placeholder="github-username"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-lg text-sm text-slate-900 placeholder-slate-400 outline-none transition-colors font-mono text-xs"
              />
              <GitBranch className="absolute right-3 top-3 w-4 h-4 text-slate-400" />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-2 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {isLoading ? (
              <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <span>{mode === 'login' ? 'Authenticate Session' : 'Start Building Free'}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          <div className="pt-2 text-center">
            <button
              type="button"
              onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
              className="text-xs text-blue-600 hover:text-blue-700 underline font-mono cursor-pointer"
            >
              {mode === 'login'
                ? 'Starting a new project? Scaffold your launch kit'
                : 'Already have a license? Sign in here'}
            </button>
          </div>
        </form>

        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            Zero-lockin code ownership
          </span>
          <span>v1.0.4-prod</span>
        </div>
      </div>
    </div>
  );
};
