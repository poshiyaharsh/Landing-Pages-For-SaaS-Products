import React, { useState } from 'react';
import { X, CheckCircle2, Rocket, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { fireLaunchCelebration } from '../utils/confetti.js';

export default function Modal({ isOpen, onClose, initialTier = 'growth' }) {
  const [startupName, setStartupName] = useState('Nexus AI');
  const [founderEmail, setFounderEmail] = useState('alex@nexus.ai');
  const [category, setCategory] = useState('B2B SaaS / DevTools');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    fireLaunchCelebration();
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-[#0B101E] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-pink-500/10 relative overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative corner glows */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-pink-500/20 to-violet-600/0 blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-500/20 to-transparent blur-2xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center text-pink-400">
              <Rocket size={18} />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">Initialize Your Launchpad</h3>
              <p className="text-xs text-slate-400">14-day free trial · Instant access</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="pt-6 relative z-10">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto animate-bounce">
                <CheckCircle2 size={36} />
              </div>
              <h4 className="font-display font-bold text-2xl text-white">
                Launch Workspace Ready!
              </h4>
              <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                Welcome to LaunchKit. Your dashboard for <strong>{startupName}</strong> is initialized with landing page builder, SEO audit, and telemetry ready to stream.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 text-white font-bold shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all"
                >
                  Enter Command Center →
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-1.5">
                  Startup / Product Name <span className="text-pink-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={startupName}
                  onChange={(e) => setStartupName(e.target.value)}
                  placeholder="e.g. HyperScale, BoltFlow"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-1.5">
                  Work Email <span className="text-pink-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={founderEmail}
                  onChange={(e) => setFounderEmail(e.target.value)}
                  placeholder="founder@company.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-1.5">
                  Product Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/15 text-white text-sm focus:outline-none focus:border-pink-500"
                >
                  <option value="B2B SaaS / DevTools">B2B SaaS / Developer Tools</option>
                  <option value="AI Agent / Foundation Model">AI Agent / AI Product</option>
                  <option value="Fintech & Web3">Fintech & Payments</option>
                  <option value="Consumer Mobile & Web">Consumer App & Community</option>
                  <option value="E-Commerce & Digital Goods">E-Commerce & Digital Goods</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all text-sm"
                >
                  <Sparkles size={16} />
                  <span>Start Free 14-Day Trial</span>
                  <ArrowRight size={16} />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span>No credit card required · Instant cancellation anytime</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
