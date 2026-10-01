import React from 'react';
import { Layout, Rocket, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { howItWorksSteps } from '../data/launchData.js';

export default function HowItWorksSection({ onOpenCta }) {
  const icons = {
    Layout,
    Rocket,
    TrendingUp
  };

  return (
    <section id="how-it-works" className="py-24 lg:py-32 relative overflow-hidden bg-[#070A12]">
      {/* Background flowing gradient line */}
      <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500/20 via-pink-500/40 to-blue-500/20 pointer-events-none hidden lg:block -translate-y-8" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-pink-400 bg-pink-500/10 border border-pink-500/20 px-3.5 py-1.5 rounded-full inline-block">
            Linear Execution
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
            Launch in <span className="text-gradient-fire">three simple steps</span>.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            No endless setup or integration loops. Focus on your product while LaunchKit handles the growth mechanics.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {howItWorksSteps.map((step, idx) => {
            const Icon = icons[step.iconName] || Rocket;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-[#0C101E] border border-white/10 p-8 flex flex-col justify-between hover:border-pink-500/40 transition-all duration-300 relative group shadow-xl hover:-translate-y-1"
              >
                <div>
                  {/* Step Badge & Number */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-pink-400 bg-pink-500/10 border border-pink-500/20 px-3 py-1 rounded-full">
                      {step.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                      <Icon size={24} />
                    </div>
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-2">
                    {step.title}
                  </h3>
                  <div className="text-sm font-semibold text-slate-200 mb-3">
                    {step.tagline}
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Step Visual Preview Card */}
                <div className="rounded-xl bg-slate-950 p-4 border border-white/5 space-y-2.5">
                  {idx === 0 && (
                    <>
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span>Landing Page Layout</span>
                        <span className="text-emerald-400 font-bold">100% Ready</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                        <div className="h-full bg-violet-500 rounded-full w-full" />
                      </div>
                      <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                        <CheckCircle2 size={12} className="text-pink-400" />
                        <span>SSL &amp; custom domain live</span>
                      </div>
                    </>
                  )}

                  {idx === 1 && (
                    <>
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span>Waitlist Signups</span>
                        <span className="text-pink-400 font-bold">+184 Today</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                        <div className="h-full bg-pink-500 rounded-full w-[78%]" />
                      </div>
                      <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                        <CheckCircle2 size={12} className="text-pink-400" />
                        <span>Viral referral loop activated</span>
                      </div>
                    </>
                  )}

                  {idx === 2 && (
                    <>
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span>Conversion Rate</span>
                        <span className="text-blue-400 font-bold">17.2%</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                        <div className="h-full bg-cyan-400 rounded-full w-[88%]" />
                      </div>
                      <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                        <CheckCircle2 size={12} className="text-blue-400" />
                        <span>Telemetry pipelines streaming</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
