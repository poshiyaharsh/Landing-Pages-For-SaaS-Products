import React, { useState } from 'react';
import { X, ArrowRight, ShieldCheck } from 'lucide-react';
import { DocuLogo } from './DocuLogo';

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
    }, 600);
  };

  const handleDemoLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onSuccess('demo.analyst@documind.io');
      onClose();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-docu-text/30 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-docu-surface border border-docu-border rounded-docu-lg shadow-modal p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-docu-muted hover:text-docu-text p-1.5 rounded-md hover:bg-docu-subtle transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="mb-6">
          <DocuLogo size="md" showTagline />
          <h2 className="text-xl font-semibold text-docu-text mt-4">
            {mode === 'signup' ? 'Create your DocuMind workspace' : 'Welcome back to DocuMind'}
          </h2>
          <p className="text-sm text-docu-secondary mt-1">
            {mode === 'signup'
              ? 'Start asking questions and extracting intelligence from your documents.'
              : 'Enter your credentials to access your document library and saved answers.'}
          </p>
        </div>

        {/* Mode Toggle */}
        <div className="flex border border-docu-border rounded-docu p-1 mb-5 bg-docu-subtle/50">
          <button
            type="button"
            onClick={() => setMode('signup')}
            className={`flex-1 py-1.5 text-xs font-medium rounded transition-colors ${
              mode === 'signup'
                ? 'bg-docu-surface text-docu-text shadow-subtle'
                : 'text-docu-secondary hover:text-docu-text'
            }`}
          >
            Get Started Free
          </button>
          <button
            type="button"
            onClick={() => setMode('signin')}
            className={`flex-1 py-1.5 text-xs font-medium rounded transition-colors ${
              mode === 'signin'
                ? 'bg-docu-surface text-docu-text shadow-subtle'
                : 'text-docu-secondary hover:text-docu-text'
            }`}
          >
            Sign In
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-docu-text mb-1.5">
              Work Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              required
              className="w-full px-3 py-2 text-sm bg-docu-surface border border-docu-border rounded-docu focus:border-docu-accent focus:ring-1 focus:ring-docu-accent focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-docu-text mb-1.5">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              required
              className="w-full px-3 py-2 text-sm bg-docu-surface border border-docu-border rounded-docu focus:border-docu-accent focus:ring-1 focus:ring-docu-accent focus:outline-none transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-docu-accent hover:bg-docu-accent-hover text-white text-sm font-medium rounded-docu shadow-subtle transition-all disabled:opacity-70"
          >
            {isLoading ? (
              <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <span>{mode === 'signup' ? 'Create Free Workspace' : 'Sign In to Workspace'}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="relative my-5">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-docu-border"></div>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="px-2 bg-docu-surface text-docu-muted">or continue with</span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleDemoLogin}
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-docu-border hover:bg-docu-subtle text-docu-text text-sm font-medium rounded-docu transition-colors"
        >
          <ShieldCheck className="w-4 h-4 text-docu-accent" />
          <span>One-Click Prototype Guest Access</span>
        </button>

        <p className="text-[11px] text-docu-muted text-center mt-5 leading-normal">
          By signing up, you acknowledge this is a prototype demonstration. No real credit card or external AI transmission is required.
        </p>
      </div>
    </div>
  );
};
