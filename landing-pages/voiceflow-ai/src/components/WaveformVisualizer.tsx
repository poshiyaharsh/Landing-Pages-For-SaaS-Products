import React, { useState, useEffect } from 'react';
import { Activity, Mic, Volume2, Radio, CheckCircle, RefreshCw } from 'lucide-react';

interface WaveformVisualizerProps {
  mode?: 'horizontal' | 'frequency' | 'circular' | 'meter';
  isActive?: boolean;
  stateText?: string;
  className?: string;
  levelDb?: number;
}

export const WaveformVisualizer: React.FC<WaveformVisualizerProps> = ({
  mode = 'horizontal',
  isActive = false,
  stateText = 'Listening',
  className = '',
  levelDb = -18,
}) => {
  const [pulseIndex, setPulseIndex] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    const interval = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % 24);
    }, 120);
    return () => clearInterval(interval);
  }, [isActive]);

  const barCount = 32;

  // Generate varied heights for waveform visualization
  const getBarHeight = (index: number) => {
    if (!isActive) return 12;
    const offset = Math.sin((index + pulseIndex) * 0.4) * 0.5 + 0.5;
    return Math.max(15, Math.floor(offset * 85));
  };

  if (mode === 'horizontal') {
    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        {/* Status header */}
        <div className="flex items-center justify-between text-[11px] font-mono text-vf-text-muted">
          <div className="flex items-center gap-2">
            <span
              className={`w-2 h-2 rounded-full ${
                isActive ? 'bg-vf-cyan animate-pulse shadow-cyan-glow' : 'bg-vf-text-muted/40'
              }`}
            />
            <span className={isActive ? 'text-vf-cyan font-medium' : 'text-vf-text-muted'}>
              {stateText}
            </span>
          </div>
          <span className="text-[10px] text-vf-text-muted/80">48kHz / 24-bit Opus</span>
        </div>

        {/* Horizontal Bars */}
        <div className="flex items-center gap-1 h-14 px-3 py-2 rounded-lg bg-vf-surface border border-vf-border/60 overflow-hidden">
          {Array.from({ length: barCount }).map((_, i) => (
            <div
              key={i}
              className={`flex-1 rounded-full transition-all duration-150 ${
                isActive
                  ? i % 3 === 0
                    ? 'bg-gradient-to-t from-vf-cyan to-vf-violet'
                    : 'bg-vf-cyan'
                  : 'bg-vf-surface-elevated'
              }`}
              style={{
                height: `${getBarHeight(i)}%`,
                opacity: isActive ? 0.9 : 0.4,
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (mode === 'frequency') {
    return (
      <div className={`p-4 rounded-xl bg-vf-surface border border-vf-border/60 ${className}`}>
        <div className="flex items-center justify-between text-xs font-mono mb-3">
          <span className="text-vf-cyan flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5" /> Frequency Spectrum (FFT)
          </span>
          <span className="text-vf-text-muted text-[10px]">20Hz – 20kHz</span>
        </div>
        <div className="flex items-end gap-1 h-20 pt-2">
          {Array.from({ length: 24 }).map((_, i) => {
            const h = isActive ? Math.max(10, Math.sin(i * 0.35 + pulseIndex * 0.3) * 45 + 50) : 8;
            return (
              <div
                key={i}
                className="flex-1 rounded-t transition-all duration-100"
                style={{
                  height: `${h}%`,
                  background:
                    h > 70
                      ? 'linear-gradient(to top, #52E8FF, #8875FF)'
                      : 'linear-gradient(to top, rgba(82, 232, 255, 0.4), #52E8FF)',
                }}
              />
            );
          })}
        </div>
      </div>
    );
  }

  // Audio level meter mode (dB scale)
  return (
    <div className={`p-3 rounded-lg bg-vf-surface border border-vf-border/40 ${className}`}>
      <div className="flex items-center justify-between text-[11px] font-mono text-vf-text-muted mb-1.5">
        <span className="flex items-center gap-1">
          <Volume2 className="w-3 h-3 text-vf-cyan" /> Audio Level
        </span>
        <span className="text-vf-cyan font-bold">{isActive ? `${levelDb} dB` : '-∞ dB'}</span>
      </div>
      <div className="w-full h-2 rounded-full bg-vf-bg overflow-hidden flex gap-0.5 p-0.5">
        {Array.from({ length: 20 }).map((_, i) => {
          const filled = isActive && i < 14;
          return (
            <div
              key={i}
              className={`flex-1 rounded-sm ${
                filled
                  ? i > 16
                    ? 'bg-vf-rose'
                    : i > 12
                    ? 'bg-vf-amber'
                    : 'bg-vf-cyan'
                  : 'bg-vf-surface-elevated'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};
