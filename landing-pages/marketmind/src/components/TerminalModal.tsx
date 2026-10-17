import React, { useState } from 'react';
import { X, ArrowRight, User, Mail, Building, CheckCircle2, ShieldCheck, Terminal } from 'lucide-react';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  onSuccess: (msg: string) => void;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({
  isOpen,
  onClose,
  title,
  onSuccess,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [firm, setFirm] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setSubmitted(true);
    setTimeout(() => {
      onSuccess(`Institutional Terminal key dispatched to ${email} for ${firm || 'Analyst Session'}.`);
      setSubmitted(false);
      setName('');
      setEmail('');
      setFirm('');
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-md rounded-xl bg-[#0E1626] border border-amber-500/40 p-6 sm:p-8 shadow-2xl font-mono"
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
          <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white tracking-tight">{title}</h3>
            <p className="text-xs text-slate-400 font-sans">Institutional Market Terminal Sandbox Access</p>
          </div>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
            <h4 className="text-base font-bold text-white">Initializing Terminal Cross-Connect...</h4>
            <p className="text-xs text-slate-400">Calibrating tick timeseries & generating encrypted session token...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs text-slate-300 mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-amber-400" /> Analyst Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Christian Vance"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#080C14] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 text-xs"
              />
            </div>

            <div>
              <label className="block text-xs text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-amber-400" /> Institutional Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="c.vance@capitalpartners.com"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#080C14] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 text-xs"
              />
            </div>

            <div>
              <label className="block text-xs text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-amber-400" /> Firm / Fund / Strategy Group
              </label>
              <input
                type="text"
                value={firm}
                onChange={(e) => setFirm(e.target.value)}
                placeholder="Vance Capital Macro Research"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#080C14] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 text-xs"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs tracking-wider uppercase transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
              >
                <span>Authorize Terminal Access</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-[10px] text-center text-slate-500">
              Disclaimer: Synthetic demonstration fixtures only. No live order routing or exchange connectivity.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
