import React from 'react';
import { ArrowRight, Sparkles, Video, Users, DollarSign, Calendar, TrendingUp } from 'lucide-react';
import { sampleCreatorProfile } from '../data/sampleData';

interface HeroSectionProps {
  onScrollToStudio: () => void;
  onOpenModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToStudio, onOpenModal }) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-pink-600/20 via-violet-600/20 to-purple-600/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-rose-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-semibold uppercase tracking-wider shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>YOUR CREATIVE WORK, GROWING TOGETHER</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] font-display">
            Everything creators <br />
            <span className="bg-gradient-to-r from-pink-400 via-rose-300 to-violet-400 bg-clip-text text-transparent">
              need to grow.
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            Plan content, understand your audience, organize partnerships, and bring your creator business together in one clear workspace.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenModal}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-violet-600 hover:opacity-95 text-white font-bold text-sm tracking-wide shadow-xl shadow-pink-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <span>Build your creator hub</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onScrollToStudio}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white border border-white/15 font-semibold text-sm transition-all flex items-center justify-center gap-2"
            >
              <Video className="w-4 h-4 text-pink-400" />
              <span>Explore creator tools</span>
            </button>
          </div>

          {/* Creator trust bar */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-pink-400" />
              <span>35,000+ Active Creators</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-violet-400" />
              <span>$42M+ Brand Deals Managed</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Multi-Platform Sync (YouTube, TikTok, Substack)</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Dashboard Composition */}
        <div className="mt-14 relative max-w-5xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/30 via-violet-500/30 to-purple-500/30 rounded-3xl blur-xl opacity-60" />
          <div className="relative rounded-3xl bg-[#130E20] border border-white/10 p-4 sm:p-7 shadow-2xl overflow-hidden">
            {/* Top Workspace Header */}
            <div className="flex flex-wrap items-center justify-between pb-4 mb-5 border-b border-white/10 gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                  {sampleCreatorProfile.avatarText}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-white">{sampleCreatorProfile.name}</h3>
                    <span className="text-xs text-pink-400 font-mono">{sampleCreatorProfile.handle}</span>
                  </div>
                  <p className="text-[11px] text-slate-400">{sampleCreatorProfile.niche}</p>
                </div>
              </div>

              {/* Live telemetry highlights */}
              <div className="flex items-center gap-4 text-xs font-mono">
                <div className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-slate-400 block text-[10px]">Follower Base</span>
                  <span className="text-white font-bold">{sampleCreatorProfile.totalFollowers}</span>
                </div>
                <div className="px-3 py-1 rounded-lg bg-pink-500/10 border border-pink-500/20">
                  <span className="text-pink-300 block text-[10px]">30-Day Revenue</span>
                  <span className="text-pink-400 font-bold">{sampleCreatorProfile.monthlyRevenue}</span>
                </div>
              </div>
            </div>

            {/* Quick 3-Card Snapshot Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Content Pipeline Snapshot */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="font-semibold text-white flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-pink-400" /> This Week's Releases
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono">3 on schedule</span>
                </div>
                <div className="space-y-2">
                  <div className="p-2.5 rounded-xl bg-[#0B0A10] border border-white/5 flex items-center justify-between text-xs">
                    <div className="truncate pr-2">
                      <span className="text-pink-400 text-[10px] font-mono block">YouTube Longform</span>
                      <span className="text-slate-200 truncate block">6-Figure Studio Setup 2026</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-violet-950 text-violet-300 text-[10px] whitespace-nowrap">
                      Scheduled
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#0B0A10] border border-white/5 flex items-center justify-between text-xs">
                    <div className="truncate pr-2">
                      <span className="text-violet-400 text-[10px] font-mono block">TikTok Short</span>
                      <span className="text-slate-200 truncate block">3 Overlooked UI Micro-Interactions</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 text-[10px] whitespace-nowrap">
                      Published
                    </span>
                  </div>
                </div>
              </div>

              {/* Active Brand Deals Snapshot */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="font-semibold text-white flex items-center gap-1.5">
                    <DollarSign className="w-4 h-4 text-emerald-400" /> Active Partnerships
                  </span>
                  <span className="text-[10px] text-pink-400 font-mono">$7,500 pending</span>
                </div>
                <div className="space-y-2">
                  <div className="p-2.5 rounded-xl bg-[#0B0A10] border border-white/5 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-white font-semibold block">Lumina Studio Audio</span>
                      <span className="text-slate-400 text-[10px]">Due Nov 24 • Script approved</span>
                    </div>
                    <span className="font-bold text-emerald-400 font-mono">$3,200</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#0B0A10] border border-white/5 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-white font-semibold block">Figma Community</span>
                      <span className="text-slate-400 text-[10px]">Due Dec 02 • Drafting issue</span>
                    </div>
                    <span className="font-bold text-emerald-400 font-mono">$1,500</span>
                  </div>
                </div>
              </div>

              {/* Audience Trajectory Snapshot */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2 text-xs">
                    <span className="font-semibold text-white flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4 text-violet-400" /> Cross-Channel Growth
                    </span>
                    <span className="text-emerald-400 text-[11px] font-mono">+14.2% MoM</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Highest acceleration on TikTok (+82k) driving YouTube subscriber conversions.
                  </p>
                </div>
                <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Engagement Rate</span>
                  <span className="text-pink-400 font-bold">6.8% (Top 5% Niche)</span>
                </div>
              </div>
            </div>

            {/* Jump to studio teaser */}
            <div className="text-center pt-2">
              <button
                onClick={onScrollToStudio}
                className="text-xs font-semibold text-pink-400 hover:text-pink-300 inline-flex items-center gap-1 group"
              >
                <span>Open Full Interactive Creator Studio (Calendar & Campaigns)</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
