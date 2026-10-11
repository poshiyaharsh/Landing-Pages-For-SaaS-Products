import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Play, 
  Pause, 
  Square, 
  RotateCcw, 
  Mic, 
  MicOff, 
  Radio, 
  Activity, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  Volume2
} from 'lucide-react';
import { VoiceOrb } from './VoiceOrb';
import { WaveformVisualizer } from './WaveformVisualizer';

interface HeroSectionProps {
  onExplorePlatform: () => void;
  onSeeHowItWorks: () => void;
  onToast: (title: string, message?: string, type?: 'success' | 'info' | 'warning') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExplorePlatform,
  onSeeHowItWorks,
  onToast,
}) => {
  const [isListening, setIsListening] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [seconds, setSeconds] = useState(12.48);
  const [transcriptIndex, setTranscriptIndex] = useState(0);

  const transcriptPhrases = [
    '“Your next idea starts with a conversation.”',
    '“Acoustic models decoded with 98.4% confidence.”',
    '“Entity slots parsed: priority_launch, engineering_sync.”',
    '“Synthesizing neural response in sub-120ms latency.”',
  ];

  // Timer simulation when listening
  useEffect(() => {
    let timer: any;
    if (isListening && !isPaused) {
      timer = setInterval(() => {
        setSeconds((prev) => +(prev + 0.1).toFixed(2));
      }, 100);
    }
    return () => clearInterval(timer);
  }, [isListening, isPaused]);

  // Phase transition simulation
  useEffect(() => {
    let phraseTimer: any;
    if (isListening && !isPaused) {
      phraseTimer = setInterval(() => {
        setTranscriptIndex((prev) => (prev + 1) % transcriptPhrases.length);
      }, 3500);
    }
    return () => clearInterval(phraseTimer);
  }, [isListening, isPaused]);

  // Toggle live mic or simulated preview
  const handleToggleListening = () => {
    if (!isListening) {
      setIsListening(true);
      setIsPaused(false);
      onToast(
        'Voice Stream Initialized',
        'Demonstration audio stream active. 48kHz VAD gate engaged.',
        'info'
      );
    } else {
      setIsListening(false);
      setIsPaused(false);
      onToast('Voice Stream Stopped', 'Audio buffer finalized and flushed.', 'info');
    }
  };

  const handlePause = () => {
    if (!isListening) return;
    setIsPaused(!isPaused);
    onToast(
      isPaused ? 'Voice Stream Resumed' : 'Voice Stream Paused',
      isPaused ? 'Acoustic parser reopened' : 'VAD silence gate held',
      'info'
    );
  };

  const handleReset = () => {
    setIsListening(false);
    setIsPaused(false);
    setSeconds(12.48);
    setTranscriptIndex(0);
    onToast('Interface Reset', 'Demonstration values restored to baseline.', 'info');
  };

  const formatSeconds = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const remainder = (sec % 60).toFixed(2);
    return `00:${mins < 10 ? '0' : ''}${mins}:${remainder.padStart(5, '0')}`;
  };

  return (
    <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden bg-vf-bg grid-pattern">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Editorial Eyebrow & Headline */}
        <div className="max-w-4xl mx-auto text-center mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-vf-cyan/30 bg-vf-surface/80 backdrop-blur-md text-[11px] font-mono tracking-[0.25em] uppercase text-vf-cyan mb-6 shadow-cyan-glow">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            INTELLIGENCE IN EVERY CONVERSATION
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-vf-text leading-[1.08] mb-6 text-balance">
            Turn conversations<br />
            <span className="bg-gradient-to-r from-vf-cyan via-vf-violet to-vf-blue bg-clip-text text-transparent">
              into intelligence.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-vf-text-muted font-sans font-normal leading-relaxed mb-8 text-balance">
            Understand speech, uncover meaning, and build natural voice experiences with one intelligent platform for conversational AI.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5">
            <button
              onClick={onExplorePlatform}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-lg bg-gradient-to-r from-vf-cyan to-vf-violet text-vf-bg text-xs font-bold font-mono tracking-widest uppercase transition-all shadow-cyan-glow hover:shadow-cyan-glow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore the Platform</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onSeeHowItWorks}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-vf-border bg-vf-surface/80 hover:bg-vf-surface-elevated text-vf-text text-xs font-medium font-mono tracking-widest uppercase transition-colors"
            >
              <Play className="w-3.5 h-3.5 text-vf-cyan" />
              <span>See How It Works</span>
            </button>
          </div>

          <p className="text-[11px] font-mono tracking-widest text-vf-text-muted/70 uppercase">
            Speech recognition · Conversational AI · Voice analytics
          </p>
        </div>

        {/* HERO VISUAL COMPOSITION: Animated Voice Orb with Floating Technical Telemetry Panels */}
        <div className="relative max-w-5xl mx-auto mt-6">
          <div className="relative rounded-2xl border border-vf-border bg-vf-surface/50 backdrop-blur-xl p-8 sm:p-12 shadow-surface overflow-hidden">
            {/* Top Chrome Header */}
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-vf-border/60">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-vf-rose/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-vf-amber/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-vf-green/80" />
                </div>
                <span className="text-xs font-mono text-vf-text-muted hidden sm:inline">
                  voiceflow.stream / live-telemetry / channel-01
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded bg-vf-bg border border-vf-border text-[10px] font-mono text-vf-cyan flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${isListening ? 'bg-vf-cyan animate-pulse' : 'bg-vf-text-muted'}`} />
                  {isListening ? (isPaused ? 'STREAM PAUSED' : 'ACOUSTIC MODEL STREAMING') : 'IDLE PREVIEW'}
                </span>
              </div>
            </div>

            {/* Central Area: Voice Orb surrounded by Floating Data Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[380px]">
              {/* Left Floating Panel: Live Transcription & Voice Activity */}
              <div className="lg:col-span-4 space-y-4">
                <div className="p-4 rounded-xl border border-vf-border/80 bg-vf-bg/80 backdrop-blur-md shadow-surface">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-vf-border/40">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-vf-cyan">
                      LIVE TRANSCRIPTION
                    </span>
                    <span className="text-[10px] font-mono text-vf-text-muted">Opus v3</span>
                  </div>
                  <p className="font-mono text-sm text-vf-text leading-relaxed min-h-[48px] animate-fade-in">
                    {transcriptPhrases[transcriptIndex]}
                  </p>
                  <div className="mt-3 pt-2 border-t border-vf-border/40 flex items-center justify-between text-[10px] font-mono text-vf-text-muted">
                    <span>SPEECH DETECTED</span>
                    <span className="text-vf-green font-semibold">Active</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-vf-border/80 bg-vf-bg/80 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest uppercase text-vf-text-muted block">
                        VOICE ACTIVITY
                      </span>
                      <span className="font-mono text-lg font-bold text-vf-text block mt-0.5">
                        {formatSeconds(seconds)}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono text-vf-text-muted block">LANGUAGE</span>
                      <span className="font-mono text-xs text-vf-cyan block">English (US)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center: Luminous Voice Orb */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center py-4">
                <VoiceOrb isActive={isListening && !isPaused} size="lg" />
              </div>

              {/* Right Floating Panel: Confidence & Technical Metrics */}
              <div className="lg:col-span-4 space-y-4">
                <div className="p-4 rounded-xl border border-vf-border/80 bg-vf-bg/80 backdrop-blur-md shadow-surface">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-vf-border/40">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-vf-text-muted">
                      CONFIDENCE SCORE
                    </span>
                    <span className="text-[10px] font-mono text-vf-cyan">Acoustic Beam</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-3xl font-bold text-vf-text">98.4%</span>
                    <span className="text-xs font-mono text-vf-green">+0.8% auto-calibrated</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-vf-surface-elevated mt-3 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-vf-cyan to-vf-violet rounded-full w-[98.4%]" />
                  </div>
                </div>

                {/* Real-time Waveform Preview Card */}
                <WaveformVisualizer
                  mode="horizontal"
                  isActive={isListening && !isPaused}
                  stateText={isListening ? (isPaused ? 'Paused' : 'Listening...') : 'Ready for input'}
                  levelDb={isListening && !isPaused ? -14 : -42}
                />
              </div>
            </div>

            {/* Bottom Interaction Control Bar */}
            <div className="mt-8 pt-6 border-t border-vf-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleToggleListening}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono font-semibold uppercase tracking-wider transition-all shadow-subtle ${
                    isListening
                      ? 'bg-vf-rose text-white hover:bg-vf-rose/90 shadow-cyan-glow'
                      : 'bg-vf-cyan text-vf-bg hover:bg-vf-cyan/90 shadow-cyan-glow'
                  }`}
                >
                  {isListening ? <MicOff className="w-3.5 h-3.5" /> : <Mic className="w-3.5 h-3.5" />}
                  <span>{isListening ? 'Stop Listening' : 'Start Listening (Demo)'}</span>
                </button>

                <button
                  onClick={handlePause}
                  disabled={!isListening}
                  className="px-4 py-2.5 rounded-lg border border-vf-border bg-vf-surface hover:bg-vf-surface-elevated text-vf-text text-xs font-mono uppercase tracking-wider disabled:opacity-40 transition-colors"
                >
                  {isPaused ? <Play className="w-3.5 h-3.5 text-vf-cyan" /> : <Pause className="w-3.5 h-3.5" />}
                </button>

                <button
                  onClick={handleReset}
                  className="px-4 py-2.5 rounded-lg border border-vf-border bg-vf-surface hover:bg-vf-surface-elevated text-vf-text text-xs font-mono uppercase tracking-wider transition-colors"
                  title="Reset demo parameters"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="text-[11px] font-mono text-vf-text-muted flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-vf-green" />
                <span>Illustrative demonstration data · No microphone required</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
