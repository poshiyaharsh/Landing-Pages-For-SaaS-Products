import React, { useState } from 'react';
import { X, ArrowRight, ShieldCheck, Terminal, Check } from 'lucide-react';
import { NestLogo } from './NestLogo';

interface AuthModalProps {
  isOpen: boolean;
  initialMode?: 'signin' | 'signup';
  onClose: () => void;
  onSuccess: (email: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  initialMode = 'signup',
  onClose,
  onSuccess,
}) => {
  const [mode, setMode] = useState<'signin' | 'signup'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onSuccess(email);
      onClose();
    }, 500);
  };

  const handleDemoAccess = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onSuccess('devops.lead@cloudnest.internal');
      onClose();
    }, 350);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-nest-text/40 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-white border border-nest-border rounded-nest-lg shadow-modal p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-nest-muted hover:text-nest-text p-1.5 rounded-md hover:bg-nest-subtle transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="mb-6">
          <NestLogo size="md" />
          <h2 className="text-xl font-bold font-display text-nest-text mt-4">
            {mode === 'signup' ? 'Deploy your first cluster' : 'Sign in to CloudNest Console'}
          </h2>
          <p className="text-xs text-nest-secondary mt-1">
            {mode === 'signup'
              ? 'Get instant access to unified deployments, service topology, and real-time observability.'
              : 'Enter your credentials to access your production infrastructure workspaces.'}
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex border border-nest-border rounded-nest p-1 mb-5 bg-nest-subtle/60 text-xs">
          <button
            type="button"
            onClick={() => setMode('signup')}
            className={`flex-1 py-1.5 font-medium rounded transition-colors ${
              mode === 'signup'
                ? 'bg-white text-nest-text shadow-subtle'
                : 'text-nest-secondary hover:text-nest-text'
            }`}
          >
            Start Free
          </button>
          <button
            type="button"
            onClick={() => setMode('signin')}
            className={`flex-1 py-1.5 font-medium rounded transition-colors ${
              mode === 'signin'
                ? 'bg-white text-nest-text shadow-subtle'
                : 'text-nest-secondary hover:text-nest-text'
            }`}
          >
            Sign In
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-nest-text mb-1.5">
              Work Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="engineer@company.io"
              required
              className="w-full px-3 py-2 text-xs bg-nest-bg border border-nest-border rounded-nest focus:bg-white focus:border-nest-blue focus:ring-1 focus:ring-nest-blue focus:outline-none transition-colors font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-nest-text mb-1.5">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              required
              className="w-full px-3 py-2 text-xs bg-nest-bg border border-nest-border rounded-nest focus:bg-white focus:border-nest-blue focus:ring-1 focus:ring-nest-blue focus:outline-none transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-nest-blue hover:bg-nest-blue-deep text-white text-xs font-semibold rounded-nest shadow-subtle transition-all disabled:opacity-70"
          >
            {isLoading ? (
              <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <span>{mode === 'signup' ? 'Create Free Workspace' : 'Open Cloud Console'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </form>

        <div className="relative my-5">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-nest-border"></div>
          </div>
          <div className="relative flex justify-center text-[11px]">
            <span className="px-2 bg-white text-nest-muted">or demo access</span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleDemoAccess}
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-nest-border hover:bg-nest-subtle text-nest-text text-xs font-medium rounded-nest transition-colors"
        >
          <Terminal className="w-4 h-4 text-nest-blue" />
          <span>One-Click Prototype Guest Access</span>
        </button>

        <p className="text-[10px] text-nest-muted text-center mt-5 leading-normal font-mono">
          Demonstration sandbox · No credit card or external cloud credentials required.
        </p>
      </div>
    </div>
  );
};
