import React from 'react';
import { 
  Layers, 
  Check, 
  X, 
  ArrowRight, 
  Sparkles, 
  AlertTriangle, 
  Layout, 
  BarChart2, 
  Search, 
  Mail, 
  CheckSquare, 
  Globe 
} from 'lucide-react';
import { comparisonOldWay } from '../data/launchData.js';

export default function ProblemSolutionSection() {
  return (
    <section id="product" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-pink-600/10 via-violet-600/10 to-blue-600/10 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-pink-400 bg-pink-500/10 border border-pink-500/20 px-3.5 py-1.5 rounded-full inline-block">
            The Modern Paradigm
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
            Launching shouldn&apos;t mean <br />
            <span className="text-gradient-fire">juggling 12 different tools.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            Founders waste weeks configuring disparate plugins, duct-taping webhooks, and paying separate monthly subscriptions. There is a faster way.
          </p>
        </div>

        {/* 2-Column Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* LEFT: THE OLD WAY (CHAOS) */}
          <div className="rounded-3xl bg-slate-900/40 border border-red-500/20 p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/5 blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
                  <X size={14} /> The Old Way
                </span>
                <span className="text-xs font-mono text-slate-400 font-bold">$365/mo + endless tabs</span>
              </div>

              <h3 className="font-display font-bold text-2xl text-white mb-2">
                Fragmented Tool Sprawl
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                Scattered context, desynchronized analytics, and fragile integrations that break right when your Product Hunt traffic spikes.
              </p>

              {/* Scattered App Stack Mock */}
              <div className="space-y-2.5">
                {comparisonOldWay.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-white/5 text-slate-300 text-sm"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-red-400/80" />
                      <span>{item.name}</span>
                    </div>
                    <span className="font-mono text-xs text-red-400/90 font-semibold">{item.cost}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-red-300/80">
              <AlertTriangle size={15} />
              <span>Result: Delayed launches, fragmented data, high burnout</span>
            </div>
          </div>

          {/* RIGHT: THE LAUNCHKIT WAY (UNIFIED) */}
          <div className="rounded-3xl bg-gradient-to-b from-[#11182B] to-[#0A0E18] border border-pink-500/40 p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between shadow-2xl shadow-pink-500/15">
            <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-br from-pink-500/20 via-violet-600/10 to-transparent blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                  <Check size={14} /> The LaunchKit Way
                </span>
                <span className="text-xs font-mono text-pink-400 font-bold bg-pink-500/10 px-2.5 py-0.5 rounded-full border border-pink-500/20">
                  All-In-One Unified
                </span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-2">
                One Platform. One Workflow. <br />
                <span className="text-gradient-hero">Everything Connected.</span>
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Build your page, configure viral waitlists, track privacy-friendly telemetry, optimize SEO scores, and collaborate on your launch checklist inside a single browser tab.
              </p>

              {/* Unified Workspace Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { title: 'Page Builder', desc: 'Pre-tested blocks', color: 'border-pink-500/30 bg-pink-500/5' },
                  { title: 'Privacy Analytics', desc: 'Cookieless & instant', color: 'border-violet-500/30 bg-violet-500/5' },
                  { title: 'Viral Campaigns', desc: 'Referral waitlists', color: 'border-blue-500/30 bg-blue-500/5' },
                  { title: 'SEO Pre-audit', desc: 'Score 94+ auto check', color: 'border-emerald-500/30 bg-emerald-500/5' }
                ].map((feat, i) => (
                  <div key={i} className={`p-3.5 rounded-xl border ${feat.color}`}>
                    <div className="text-white font-bold text-sm flex items-center gap-1.5">
                      <Check size={14} className="text-pink-400" />
                      <span>{feat.title}</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{feat.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300 font-medium">
              <span className="flex items-center gap-2">
                <Sparkles size={14} className="text-pink-400" />
                Go from idea to live launchpad in &lt; 24 hours
              </span>
              <span className="font-mono text-emerald-400 font-bold">100% Synced</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
