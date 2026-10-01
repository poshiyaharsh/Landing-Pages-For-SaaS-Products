import React from 'react';
import { socialProofStats, trustCompanies } from '../data/launchData.js';

export default function SocialProofSection() {
  return (
    <section className="py-16 border-y border-white/10 bg-[#06080F]/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="text-center mb-10">
          <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-slate-400 font-bold">
            Built for founders who move fast.
          </p>
        </div>

        {/* 3 Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center max-w-3xl mx-auto mb-14">
          {socialProofStats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-slate-900/50 border border-white/5 rounded-2xl p-5 hover:border-pink-500/30 transition-colors"
            >
              <div className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-mono text-slate-400 mt-1 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tasteful Fictional Company Logos Row */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-70 hover:opacity-100 transition-opacity">
          {trustCompanies.map((c, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-slate-300 font-display font-bold text-lg sm:text-xl tracking-tight hover:text-pink-400 transition-colors cursor-default"
            >
              <span className="text-pink-500 text-sm">{c.symbol}</span>
              <span>{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
