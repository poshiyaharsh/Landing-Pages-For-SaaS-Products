import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { testimonials } from '../data/launchData.js';

export default function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 relative bg-[#06080F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3.5 py-1.5 rounded-full inline-block">
            Founder Endorsements
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
            Built for people <br />
            <span className="text-gradient-hero">who ship</span>.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            Read how early-stage builders and high-velocity teams accelerated their roadmaps with LaunchKit.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-3xl bg-[#0C101E] border border-white/10 p-8 flex flex-col justify-between hover:border-pink-500/40 transition-all duration-300 relative group shadow-xl"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                  <span className="ml-2 text-xs font-mono text-slate-400 font-bold">5.0 Verified</span>
                </div>

                <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-6 font-medium">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div>
                <div className="text-xs font-mono font-bold text-pink-400 mb-4 pb-4 border-b border-white/10">
                  {t.stats}
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-11 h-11 rounded-xl ${t.avatarBg} text-white font-bold flex items-center justify-center font-display text-sm shadow-md`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-white">{t.author}</h4>
                    <p className="text-xs text-slate-400 font-medium">
                      {t.role}, <strong className="text-slate-200">{t.company}</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
