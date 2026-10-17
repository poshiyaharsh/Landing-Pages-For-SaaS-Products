import React, { useState } from 'react';
import { X, ArrowRight, User, Mail, GitBranch, CheckCircle2, Terminal } from 'lucide-react';

interface DemoSuiteModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  onSuccess: (msg: string) => void;
}

export const DemoSuiteModal: React.FC<DemoSuiteModalProps> = ({
  isOpen,
  onClose,
  title,
  onSuccess,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [repo, setRepo] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setSubmitted(true);
    setTimeout(() => {
      onSuccess(`TestForge Cloud Runner provisioned for ${repo || 'engineering-monorepo'}! Access webhook dispatched.`);
      setSubmitted(false);
      setName('');
      setEmail('');
      setRepo('');
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-md rounded-2xl bg-[#10172A] border border-emerald-500/40 p-6 sm:p-8 shadow-2xl font-mono"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white tracking-tight">{title}</h3>
            <p className="text-xs text-slate-400 font-sans">Distributed CI Test Runner & Triage Sandbox</p>
          </div>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
            <h4 className="text-base font-bold text-white">Configuring Parallel Matrix...</h4>
            <p className="text-xs text-slate-400">Spawning Vitest & Playwright workers across Linux nodes...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs text-slate-300 mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-emerald-400" /> Developer Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Alex Rivera"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0F1D] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 text-xs"
              />
            </div>

            <div>
              <label className="block text-xs text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-emerald-400" /> Work / GitHub Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="a.rivera@techcorp.io"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0F1D] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 text-xs"
              />
            </div>

            <div>
              <label className="block text-xs text-slate-300 mb-1.5 flex items-center gap-1.5">
                <GitBranch className="w-3.5 h-3.5 text-emerald-400" /> Primary Repository
              </label>
              <input
                type="text"
                value={repo}
                onChange={(e) => setRepo(e.target.value)}
                placeholder="org/core-saas-platform"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0F1D] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 text-xs"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:opacity-95 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
              >
                <span>Initialize TestForge Sandbox</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-[10px] text-center text-slate-500 font-sans">
              14-day full platform evaluation. Works with your existing GitHub Actions without modifying local code.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
