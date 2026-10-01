import React from 'react';
import { ArrowRight, Shield, MessageSquare, Lock } from 'lucide-react';

interface FinalCTAProps {
  onStartProtecting: () => void;
  onTalkToExpert: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onStartProtecting, onTalkToExpert }) => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden border-t border-cyber-border/70">
      {/* Background Cyber Grid & Dual Radial Glow */}
      <div className="absolute inset-0 bg-cyber-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyber-emerald/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] bg-cyber-cyan/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Large Abstract Geometric Shield/Nest Pattern in Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.035] -z-10">
        <svg width="600" height="600" viewBox="0 0 200 200" fill="none" stroke="currentColor">
          <polygon points="100,20 170,55 170,125 100,185 30,125 30,55" strokeWidth="2" />
          <polygon points="100,40 150,65 150,115 100,165 50,115 50,65" strokeWidth="2" />
          <polygon points="100,60 130,75 130,105 100,145 70,105 70,75" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyber-card border border-cyber-border text-xs font-mono tracking-widest uppercase text-cyber-emerald">
          <Lock className="w-3.5 h-3.5" />
          <span>Enterprise Defense System</span>
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
          Make security your{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-emerald via-emerald-300 to-cyber-cyan">
            strongest advantage.
          </span>
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">
          Get complete visibility across your infrastructure and stay ahead of emerging threats. Deploy in minutes with instant threat containment.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
          <button
            onClick={onStartProtecting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-slate-950 bg-cyber-emerald hover:bg-emerald-400 active:scale-[0.98] transition-all rounded-xl shadow-[0_0_35px_rgba(16,185,129,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-emerald"
          >
            <span>Start Protecting</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onTalkToExpert}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-slate-200 hover:text-white bg-cyber-card border border-cyber-border hover:border-slate-700 rounded-xl transition-all backdrop-blur-md focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan"
          >
            <MessageSquare className="w-4 h-4 text-cyber-cyan" />
            <span>Talk to Security Expert</span>
          </button>
        </div>

        {/* Micro reassurance proof */}
        <p className="text-xs sm:text-sm text-slate-500 font-mono pt-2">
          Instant onboarding · Compliant by default · Dedicated SecOps advisor for Enterprise
        </p>
      </div>
    </section>
  );
};
