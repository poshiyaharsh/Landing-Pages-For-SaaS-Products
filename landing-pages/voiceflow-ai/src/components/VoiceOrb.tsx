import React from 'react';

interface VoiceOrbProps {
  isActive?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  isListening?: boolean;
  isSpeaking?: boolean;
  audioLevel?: number;
}

export const VoiceOrb: React.FC<VoiceOrbProps> = ({
  isActive = false,
  size = 'lg',
  className = '',
  isListening,
  isSpeaking,
  audioLevel,
}) => {
  const activeState = isActive || Boolean(isListening) || Boolean(isSpeaking);
  const sizeMap = {
    sm: 'w-36 h-36',
    md: 'w-56 h-56',
    lg: 'w-72 h-72 sm:w-88 sm:h-88',
  };

  return (
    <div className={`relative flex items-center justify-center ${sizeMap[size]} ${className}`}>
      {/* Outer ambient glow */}
      <div
        className={`absolute inset-0 rounded-full transition-all duration-700 ${
          activeState
            ? 'bg-gradient-to-tr from-vf-cyan/30 via-vf-violet/30 to-vf-cyan/20 blur-3xl scale-125'
            : 'bg-gradient-to-tr from-vf-cyan/15 via-vf-violet/15 to-transparent blur-2xl scale-110'
        }`}
      />

      {/* Layer 1: Outermost Ring with subtle dashed border and rotation */}
      <div
        className={`absolute inset-1 rounded-full border border-dashed border-vf-cyan/30 transition-transform duration-1000 ${
          activeState ? 'animate-[spin_12s_linear_infinite]' : 'animate-[spin_30s_linear_infinite]'
        }`}
      />

      {/* Layer 2: Middle Luminous Ring with violet gradient */}
      <div
        className={`absolute inset-5 rounded-full border border-vf-violet/40 transition-transform duration-1000 ${
          activeState ? 'animate-[spin_8s_linear_infinite_reverse]' : 'animate-[spin_20s_linear_infinite_reverse]'
        }`}
      />

      {/* Layer 3: Reactive Sound Particle Waves (SVG circle waveforms) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 200">
        <defs>
          <linearGradient id="orbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#52E8FF" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#8875FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#6C9EFF" stopOpacity="0.6" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Orbiting particles */}
        <circle cx="100" cy="18" r="2.5" fill="#52E8FF" filter="url(#glow)">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 100 100"
            to="360 100 100"
            dur={activeState ? '4s' : '10s'}
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="178" cy="100" r="2" fill="#8875FF" filter="url(#glow)">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 100 100"
            to="-360 100 100"
            dur={activeState ? '6s' : '14s'}
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="40" cy="140" r="1.5" fill="#63E6A5">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 100 100"
            to="360 100 100"
            dur="8s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>

      {/* Core Plasma Orb */}
      <div
        className={`relative w-3/5 h-3/5 rounded-full overflow-hidden flex items-center justify-center shadow-dual-glow transition-all duration-500 ${
          activeState ? 'scale-110' : 'scale-100'
        }`}
        style={{
          background: 'radial-gradient(circle at 35% 35%, #52E8FF 0%, #8875FF 45%, #131A28 85%)',
        }}
      >
        {/* Internal light caustics */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.4)_0%,_transparent_60%)]" />
        <div
          className={`w-full h-full opacity-60 mix-blend-overlay ${
            activeState ? 'animate-orb-pulse' : 'animate-[pulse_5s_ease-in-out_infinite]'
          }`}
          style={{
            background: 'conic-gradient(from 180deg at 50% 50%, #52E8FF 0deg, #8875FF 120deg, #6C9EFF 240deg, #52E8FF 360deg)',
          }}
        />

        {/* Central Audio Waveform Bars (Reactive inside core) */}
        <div className="relative z-10 flex items-center gap-1 h-12 px-3">
          {[0.3, 0.7, 1.0, 0.6, 0.85, 0.4, 0.9, 0.5].map((val, i) => (
            <div
              key={i}
              className="w-1 bg-vf-text rounded-full transition-all duration-150"
              style={{
                height: activeState ? `${Math.max(20, (audioLevel || val) * 100)}%` : `${Math.max(15, val * 45)}%`,
                animation: activeState ? `waveBar ${0.5 + i * 0.15}s ease-in-out infinite alternate` : 'none',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
