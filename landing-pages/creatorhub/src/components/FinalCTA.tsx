import React from 'react';
import { ArrowRight, Sparkles, Video } from 'lucide-react';

interface FinalCTAProps {
  onScrollToStudio: () => void;
  onOpenModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onScrollToStudio, onOpenModal }) => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#0B0A10] border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-pink-600/25 via-violet-600/20 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-semibold">
          <Sparkles className="w-4 h-4 text-pink-400" />
          <span>JOIN 35,000+ FULL-TIME CREATORS</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight font-display">
          Build your creative work <br />
          <span className="bg-gradient-to-r from-pink-400 via-rose-300 to-violet-400 bg-clip-text text-transparent">
            into a creator business.
          </span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
          From brainstorming your next viral video to locking down $10,000 brand sponsorships. Take control of your creative operating system today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenModal}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-violet-600 hover:opacity-95 text-white font-bold text-sm tracking-wide shadow-xl shadow-pink-500/25 transition-all flex items-center justify-center gap-2"
          >
            <span>Build your creator hub</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onScrollToStudio}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white border border-white/15 font-semibold text-sm transition-all flex items-center justify-center gap-2"
          >
            <Video className="w-4 h-4 text-pink-400" />
            <span>Explore studio tools</span>
          </button>
        </div>

        <p className="text-xs text-slate-400 font-mono pt-4">
          14-day free trial • Zero credit card required • Connect social accounts anytime
        </p>
      </div>
    </section>
  );
};
