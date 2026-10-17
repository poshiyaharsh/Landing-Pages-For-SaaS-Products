import React from 'react';
import { ArrowRight, Shield, CheckCircle2, Lock, FileText, Database, ShieldCheck } from 'lucide-react';
import { initialPrivacyRequests, initialConsentRecords } from '../data/sampleData';

interface HeroSectionProps {
  onScrollToDemo: () => void;
  onOpenModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToDemo, onOpenModal }) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-[#0B0F17]">
      {/* Background calm ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-teal-600/15 via-emerald-600/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider shadow-inner">
            <Shield className="w-3.5 h-3.5 text-teal-400" />
            <span>PRIVACY OPERATIONS, WITHOUT THE COMPLEXITY</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Privacy management, <br />
            <span className="bg-gradient-to-r from-teal-400 via-emerald-300 to-teal-500 bg-clip-text text-transparent">
              simplified.
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            Organize privacy requests, manage consent records, and keep data-governance tasks visible in one structured workspace.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenModal}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-400 to-emerald-500 hover:opacity-95 text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-teal-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <span>Explore privacy management</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onScrollToDemo}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white border border-white/15 font-semibold text-sm transition-all flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>View the privacy dashboard</span>
            </button>
          </div>

          {/* Trust points */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-teal-400" />
              <span>GDPR Article 15-22 Fulfillment</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>CCPA / CPRA Do-Not-Sell Automation</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-cyan-400" />
              <span>Zero Dark Patterns</span>
            </div>
          </div>
        </div>

        {/* Hero Visual: Privacy Operations Dashboard Preview */}
        <div className="mt-14 relative max-w-5xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 via-emerald-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-50" />
          <div className="relative rounded-3xl bg-[#111827] border border-white/10 p-4 sm:p-7 shadow-2xl overflow-hidden">
            {/* Window bar */}
            <div className="flex flex-wrap items-center justify-between pb-4 mb-5 border-b border-white/10 gap-3 text-xs">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-slate-300 font-bold">PRIVACYX OPERATIONS HUB v3.1</span>
              </div>
              <div className="flex items-center gap-3 text-[11px] font-mono text-teal-300">
                <span>QUEUE STATUS: 5 REQUESTS ACTIVE</span>
                <span className="text-slate-500">• ZERO OVERDUE SLAS</span>
              </div>
            </div>

            {/* Quick 3-Tile Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
              {/* Active Request Snippet */}
              <div className="p-4 rounded-2xl bg-[#0B0F17] border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase text-teal-400 font-bold">Latest DSAR</span>
                  <span className="px-2 py-0.5 rounded-full bg-amber-950 text-amber-300 text-[10px] font-mono">
                    28 Days Left
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white">REQ-1048: Full Subject Copy</h4>
                <p className="text-[11px] text-slate-400 mt-0.5 truncate">c.lindqvist@acme-media.se</p>
                <div className="mt-3 pt-2 border-t border-white/5 text-[10px] font-mono text-slate-500">
                  Assigned: Legal & Privacy Ops
                </div>
              </div>

              {/* Erasure Snippet */}
              <div className="p-4 rounded-2xl bg-[#0B0F17] border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase text-teal-400 font-bold">Right to Erasure</span>
                  <span className="px-2 py-0.5 rounded-full bg-teal-950 text-teal-300 text-[10px] font-mono">
                    In Progress
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white">REQ-1049: Article 17 Purge</h4>
                <p className="text-[11px] text-slate-400 mt-0.5 truncate">j.santiago@cloudline.io</p>
                <div className="mt-3 pt-2 border-t border-white/5 text-[10px] font-mono text-slate-500">
                  Assigned: Data Engineering
                </div>
              </div>

              {/* Consent Metric */}
              <div className="p-4 rounded-2xl bg-[#0B0F17] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono uppercase text-teal-400 font-bold">Analytics Consent</span>
                    <span className="text-emerald-400 text-xs font-mono font-bold">80.7% Opt-In</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Transparent cookie banner with zero pre-ticked checkboxes.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-white/5 text-[10px] font-mono text-teal-400">
                  Global Privacy Control (GPC) Supported
                </div>
              </div>
            </div>

            {/* Jump to demo button */}
            <div className="text-center pt-2">
              <button
                onClick={onScrollToDemo}
                className="text-xs font-semibold text-teal-400 hover:text-teal-300 inline-flex items-center gap-1 group font-mono"
              >
                <span>Launch Interactive Privacy Request Console & Register</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
