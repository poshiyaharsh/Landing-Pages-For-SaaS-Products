import React, { useState } from 'react';
import { X, ArrowRight, User, Mail, Building, CheckCircle2, Shield } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  onSuccess: (msg: string) => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({
  isOpen,
  onClose,
  title,
  onSuccess,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setSubmitted(true);
    setTimeout(() => {
      onSuccess(`PrivacyX workspace initialized for ${name} (${company || 'Organization'})!`);
      setSubmitted(false);
      setName('');
      setEmail('');
      setCompany('');
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-md rounded-2xl bg-[#111827] border border-teal-500/30 p-6 sm:p-8 shadow-2xl"
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
          <div className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
            <p className="text-xs text-slate-400">Modern privacy operations & data governance sandbox</p>
          </div>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-teal-400 mx-auto animate-bounce" />
            <h4 className="text-lg font-bold text-white">Configuring Privacy Hub...</h4>
            <p className="text-sm text-slate-400">Loading RoPA templates & generating verification keys...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-teal-400" /> Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Henrik Lind"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0F17] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-teal-400" /> Corporate Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="henrik@nordic-privacy.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0F17] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-teal-400" /> Organization Name
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Nordic Compliance Group"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0F17] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 text-sm"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:opacity-95 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-teal-500/25 flex items-center justify-center gap-2"
              >
                <span>Launch Privacy Operations</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-[11px] text-center text-slate-500">
              Disclaimer: Software workflow tool. Does not substitute for formal legal counsel.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
