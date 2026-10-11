import React from 'react';
import { VoiceOrb } from './VoiceOrb.tsx';
import { ArrowRight, BookOpen, Terminal, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onExplore?: () => void;
  onDocs?: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onExplore, onDocs }) => {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#080B12] relative overflow-hidden border-t border-border-subtle">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-r from-cyan-900/15 via-violet-900/15 to-transparent rounded-full blur-[160px] pointer-events-none" />

      {/* Decorative concentric voice ring grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#192235_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-8 tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>JOIN THE NEXT ERA OF CONVERSATIONAL AI</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-tight mb-6 max-w-3xl leading-tight">
          Every conversation has <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
            something to say.
          </span>
        </h2>

        {/* Supporting text */}
        <p className="text-secondary max-w-2xl text-base sm:text-lg mb-12 leading-relaxed">
          Discover the meaning behind spoken words and build more intelligent voice experiences with VoiceFlow AI.
        </p>

        {/* Mini Luminous Voice Orb Centerpiece */}
        <div className="relative mb-12 flex items-center justify-center">
          {/* Pulsing acoustic rings */}
          <div className="absolute w-72 h-72 rounded-full border border-cyan-500/20 animate-ping opacity-30 pointer-events-none" />
          <div className="absolute w-88 h-88 rounded-full border border-violet-500/15 animate-pulse opacity-40 pointer-events-none" />

          {/* Voice Orb */}
          <VoiceOrb size="md" isListening={true} isSpeaking={false} audioLevel={0.65} />
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onExplore}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black font-semibold text-sm sm:text-base transition-all duration-200 shadow-[0_0_30px_rgba(82,232,255,0.3)] hover:shadow-[0_0_40px_rgba(82,232,255,0.5)] flex items-center justify-center gap-2 group"
          >
            <span>Explore the Platform</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={onDocs}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#131A28] hover:bg-[#192235] text-white border border-border-subtle hover:border-cyan-500/30 text-sm sm:text-base transition-all duration-200 flex items-center justify-center gap-2"
          >
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span>Read the Documentation</span>
          </button>
        </div>

        {/* Technical Terminal Indicator */}
        <div className="mt-12 flex items-center gap-3 text-xs font-mono text-secondary/60 bg-[#0E1320] border border-border-subtle px-4 py-2 rounded-full">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span>curl -X POST https://api.voiceflow.ai/v1/sandbox/init</span>
        </div>
      </div>
    </section>
  );
};
