import React, { useState } from 'react';
import { 
  Layout, 
  Sparkles, 
  Check, 
  MousePointer, 
  Mail, 
  Send, 
  Share2, 
  TrendingUp, 
  Search, 
  CheckSquare, 
  CheckCircle2, 
  ArrowUpRight,
  Sliders,
  Zap,
  ShieldCheck,
  Globe
} from 'lucide-react';
import { featuresList } from '../data/launchData.js';

export default function FeaturesSection({ onOpenCta }) {
  const [checklistItems, setChecklistItems] = useState([
    { text: 'Landing page ready & responsive', done: true },
    { text: 'Analytics & telemetry connected', done: true },
    { text: 'SEO pre-audit score > 90 verified', done: true },
    { text: 'Email & viral waitlist campaign scheduled', done: true },
    { text: 'Product Hunt & social announcement queued', done: false },
    { text: 'Launch day triage team monitoring active', done: false }
  ]);

  const toggleCheck = (idx) => {
    setChecklistItems((prev) =>
      prev.map((item, i) => (i === idx ? { ...item, done: !item.done } : item))
    );
  };

  const completedCount = checklistItems.filter((i) => i.done).length;
  const progressPercent = Math.round((completedCount / checklistItems.length) * 100);

  return (
    <section id="features" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3.5 py-1.5 rounded-full inline-block">
            Complete Feature Suite
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
            Your entire launch, <br />
            <span className="text-gradient-hero">under one roof.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            From the first wireframe to your 10,000th customer, LaunchKit equips founders with institutional-grade tools built for velocity.
          </p>
        </div>

        {/* 5 Feature Cards Layout */}
        <div className="space-y-12">
          
          {/* FEATURE 01: LANDING PAGE BUILDER */}
          <div className="rounded-3xl bg-[#0B0F19] border border-white/10 p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-pink-500/30 transition-all duration-300">
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-pink-400 bg-pink-500/10 px-2.5 py-1 rounded-md border border-pink-500/20">
                  01 — LANDING PAGE BUILDER
                </span>
                <span className="text-xs font-mono text-slate-400 font-semibold">Zero Dev Overhead</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-4xl text-white">
                Build pages that convert.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Launch high-converting pages without waiting on developers. Combine production-ready blocks, set responsive styling, and publish to custom subdomains with zero build steps.
              </p>
              <ul className="space-y-2 pt-2">
                {[
                  'Pre-assembled hero blocks with built-in contrast scoring',
                  'Live responsive simulator: Desktop, Tablet & Mobile',
                  'Instant custom domain SSL provisioning in under 60 seconds'
                ].map((pt, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-400">
                    <CheckCircle2 size={16} className="text-pink-400 flex-shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Builder UI */}
            <div className="lg:col-span-6 rounded-2xl bg-slate-950 border border-white/10 p-5 shadow-2xl relative overflow-hidden group">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-2 text-white font-bold">
                  <Layout size={14} className="text-pink-400" />
                  Visual Block Editor
                </span>
                <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded text-[10px] font-bold">
                  Live Preview
                </span>
              </div>

              {/* Miniature Block Stack */}
              <div className="space-y-2.5">
                {[
                  { name: '✦ Hero Section Block', desc: 'Heading + CTA + Trust proof', color: 'border-pink-500/30 bg-pink-500/5' },
                  { name: '✦ Social Proof & Logo Cloud', desc: '6 Company tickers with live stats', color: 'border-violet-500/30 bg-violet-500/5' },
                  { name: '✦ Interactive Feature Bento', desc: '3-tier dynamic value cards', color: 'border-blue-500/30 bg-blue-500/5' },
                  { name: '✦ Tiered Pricing Calculator', desc: 'Monthly/Annual billing toggle', color: 'border-emerald-500/30 bg-emerald-500/5' }
                ].map((b, i) => (
                  <div
                    key={i}
                    className={`p-3 rounded-xl border ${b.color} flex items-center justify-between text-xs transition-transform hover:translate-x-1`}
                  >
                    <div>
                      <div className="text-white font-bold">{b.name}</div>
                      <div className="text-slate-400 text-[10px]">{b.desc}</div>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">Draggable</span>
                  </div>
                ))}
              </div>

              {/* Animated Floating Cursor */}
              <div className="absolute bottom-6 right-10 bg-slate-900 border border-white/20 px-3 py-1.5 rounded-full flex items-center gap-2 text-[11px] font-mono text-white shadow-xl animate-bounce">
                <MousePointer size={12} className="text-pink-400 fill-pink-400" />
                <span>Publishing to domain...</span>
              </div>
            </div>
          </div>

          {/* FEATURE 02 & 03: 2-COLUMN SPLIT (MARKETING & ANALYTICS) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* FEATURE 02: MARKETING CAMPAIGNS */}
            <div className="rounded-3xl bg-[#0B0F19] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-violet-500/30 transition-all duration-300">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-mono text-xs font-bold text-violet-400 bg-violet-500/10 px-2.5 py-1 rounded-md border border-violet-500/20">
                    02 — MARKETING CAMPAIGNS
                  </span>
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-2">
                  Turn attention into momentum.
                </h3>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  Create, launch, and optimize omnichannel waitlists, viral referral tiers, and social campaigns from one place.
                </p>

                {/* Campaign Dashboard Mock */}
                <div className="rounded-xl bg-slate-950 border border-white/10 p-4 space-y-3 mb-6">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-mono">Campaign: Early Founder Waitlist</span>
                    <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded text-[10px]">
                      ● Active
                    </span>
                  </div>

                  {/* Progress bars */}
                  <div>
                    <div className="flex justify-between text-xs font-mono text-slate-300 mb-1">
                      <span>Waitlist Goal: 5,000 Signups</span>
                      <span className="text-violet-400 font-bold">4,280 (85.6%)</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-violet-500 to-pink-500 rounded-full w-[85%]" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2 text-center text-xs font-mono">
                    <div className="p-2 rounded-lg bg-slate-900 border border-white/5">
                      <div className="text-slate-400 text-[10px]">Referral Viral Factor</div>
                      <div className="text-white font-bold text-base mt-0.5">1.48x</div>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-900 border border-white/5">
                      <div className="text-slate-400 text-[10px]">Email Open Rate</div>
                      <div className="text-white font-bold text-base mt-0.5">64.2%</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span>Integrated broadcast triggers</span>
                <span className="text-violet-400 font-bold font-mono">Automated Funnels</span>
              </div>
            </div>

            {/* FEATURE 03: PRODUCT ANALYTICS */}
            <div className="rounded-3xl bg-[#0B0F19] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-blue-500/30 transition-all duration-300">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-mono text-xs font-bold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                    03 — PRODUCT ANALYTICS
                  </span>
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-2">
                  Know what’s actually working.
                </h3>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  Track every important signal from first click to conversion with zero-lag privacy-first telemetry.
                </p>

                {/* Analytics Dashboard Mock */}
                <div className="rounded-xl bg-slate-950 border border-white/10 p-4 space-y-4 mb-6">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-mono">Attribution Funnel</span>
                    <span className="text-blue-400 font-bold font-mono">38ms Realtime</span>
                  </div>

                  <div className="space-y-2">
                    {[
                      { step: 'Page Visitors', count: '24,892', pct: '100%', color: 'bg-blue-500' },
                      { step: 'Email Submitted', count: '4,280', pct: '17.2%', color: 'bg-violet-500' },
                      { step: 'Activated Trials', count: '1,490', pct: '34.8%', color: 'bg-emerald-500' }
                    ].map((f, i) => (
                      <div key={i} className="text-xs space-y-1">
                        <div className="flex justify-between text-slate-300">
                          <span>{f.step}</span>
                          <span className="font-mono font-bold text-white">{f.count} ({f.pct})</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                          <div className={`h-full ${f.color} rounded-full`} style={{ width: f.pct }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span>Cookieless, privacy-first</span>
                <span className="text-blue-400 font-bold font-mono">Instant Insights</span>
              </div>
            </div>
          </div>

          {/* FEATURE 04 & 05: 2-COLUMN SPLIT (SEO & LAUNCH CHECKLIST) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* FEATURE 04: SEO TOOLS */}
            <div className="rounded-3xl bg-[#0B0F19] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-orange-500/30 transition-all duration-300">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-mono text-xs font-bold text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded-md border border-orange-500/20">
                    04 — SEO TOOLS
                  </span>
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-2">
                  Get discovered faster.
                </h3>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  Optimize every page before you hit publish. Automated auditing tests meta titles, OpenGraph visuals, speed scores, and keyword coverage.
                </p>

                {/* SEO Audit Panel */}
                <div className="rounded-xl bg-slate-950 border border-white/10 p-4 space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400">SEO Health Audit</span>
                    <span className="text-sm font-mono font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                      Score: 94 / 100
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    {[
                      { item: 'Meta title & description length', pass: true },
                      { item: 'OpenGraph & Twitter Cards preview', pass: true },
                      { item: 'Core Web Vitals & sub-50ms TTFB', pass: true },
                      { item: 'Auto-generated sitemap.xml & robots', pass: true }
                    ].map((audit, i) => (
                      <div key={i} className="flex items-center justify-between text-slate-300 p-1.5 rounded bg-slate-900/60">
                        <span>{audit.item}</span>
                        <span className="text-emerald-400 font-bold flex items-center gap-1 font-mono text-[11px]">
                          <Check size={12} strokeWidth={3} /> PASS
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span>Google SERP Previewer included</span>
                <span className="text-orange-400 font-bold font-mono">Organic Ready</span>
              </div>
            </div>

            {/* FEATURE 05: LAUNCH CHECKLIST */}
            <div className="rounded-3xl bg-[#0B0F19] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-300">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                    05 — LAUNCH CHECKLIST
                  </span>
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-2">
                  Never miss launch day.
                </h3>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  Turn your launch strategy into a clear, actionable checklist with automated milestones and team accountability.
                </p>

                {/* Interactive Checklist UI */}
                <div className="rounded-xl bg-slate-950 border border-white/10 p-4 space-y-3 mb-6">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-mono">Launch Readiness</span>
                    <span className="text-emerald-400 font-mono font-bold">
                      {progressPercent}% Complete
                    </span>
                  </div>

                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-emerald-400 rounded-full transition-all duration-300"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>

                  <div className="space-y-1.5 pt-1">
                    {checklistItems.map((chk, i) => (
                      <div
                        key={i}
                        onClick={() => toggleCheck(i)}
                        className="flex items-center gap-2.5 p-1.5 rounded text-xs cursor-pointer hover:bg-slate-900 transition-colors"
                      >
                        <span
                          className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 transition-colors ${
                            chk.done
                              ? 'bg-emerald-500 border-emerald-500 text-slate-950'
                              : 'border-slate-600 bg-transparent'
                          }`}
                        >
                          {chk.done && <Check size={12} strokeWidth={3} />}
                        </span>
                        <span className={chk.done ? 'text-slate-300 line-through opacity-70' : 'text-white font-medium'}>
                          {chk.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span>Product Hunt & Hacker News Playbooks</span>
                <span className="text-emerald-400 font-bold font-mono">Zero Drift</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
