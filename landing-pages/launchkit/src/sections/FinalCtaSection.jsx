import React from 'react';
import { Rocket, ArrowRight, Sparkles, Zap, Star, ShieldCheck, Check } from 'lucide-react';
import { fireLaunchCelebration } from '../utils/confetti.js';

export default function FinalCtaSection({ onOpenCta }) {
  const handleLaunchClick = () => {
    fireLaunchCelebration();
    onOpenCta && onOpenCta('final-cta');
  };

  return (
    <section className="py-28 lg:py-40 relative overflow-hidden bg-[#070A11]">
      {/* Central huge animated gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-r from-pink-600/25 via-purple-600/30 to-blue-600/25 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Floating cards around the climax CTA */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#11182C] to-[#0A0D18] border border-white/20 p-8 sm:p-14 lg:p-20 text-center shadow-2xl shadow-violet-950/50 overflow-hidden">
          
          {/* FLOATING CHIP 1: Top Left */}
          <div className="absolute top-8 left-8 hidden sm:flex items-center gap-2.5 bg-slate-900/90 border border-white/10 px-4 py-2 rounded-full text-xs font-mono text-pink-300 animate-float-slow transform -rotate-6">
            <Zap size={14} className="text-pink-400" />
            <span>Instant Provisioning</span>
          </div>

          {/* FLOATING CHIP 2: Bottom Right */}
          <div className="absolute bottom-8 right-8 hidden sm:flex items-center gap-2 bg-slate-900/90 border border-white/10 px-4 py-2 rounded-full text-xs font-mono text-emerald-300 animate-float-medium transform rotate-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>99.98% SLA Guaranteed</span>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-xs font-mono font-bold text-pink-400 uppercase tracking-widest">
              <Sparkles size={14} />
              <span>Launch Readiness Initialized</span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.08]">
              Your next big thing <br />
              <span className="text-gradient-hero">starts here</span>.
            </h2>

            <p className="text-slate-300 text-lg sm:text-xl max-w-xl mx-auto font-normal leading-relaxed">
              Stop stitching together tools. <br className="hidden sm:inline" />
              Start building momentum with LaunchKit.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                type="button"
                onClick={handleLaunchClick}
                className="group relative inline-flex items-center gap-2.5 px-9 py-4.5 rounded-full text-base sm:text-lg font-extrabold text-white bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 hover:from-pink-600 hover:via-purple-700 hover:to-blue-700 shadow-2xl shadow-pink-500/35 hover:shadow-pink-500/60 hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
              >
                <Rocket size={20} className="text-white group-hover:rotate-12 transition-transform" />
                <span>Start Your Launch</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => {
                  const target = document.querySelector('#features');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-8 py-4.5 rounded-full text-base font-bold text-slate-200 bg-white/10 hover:bg-white/15 border border-white/15 transition-all hover:-translate-y-0.5"
              >
                <span>Explore Features</span>
              </button>
            </div>

            {/* Trust points */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <Check size={14} className="text-emerald-400" /> Free 14-day trial
              </span>
              <span className="flex items-center gap-1.5">
                <Check size={14} className="text-emerald-400" /> No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <Check size={14} className="text-emerald-400" /> Deploy in under 10 minutes
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
