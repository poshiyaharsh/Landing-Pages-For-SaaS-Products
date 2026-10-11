import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Copy, 
  Download, 
  FileText, 
  Mic, 
  CheckCircle, 
  Clock, 
  Volume2, 
  Sparkles,
  Sliders,
  Share2
} from 'lucide-react';
import { SAMPLE_AUDIO_SESSIONS } from '../data/voiceflowData';
import { AudioSample } from '../types';
import { WaveformVisualizer } from './WaveformVisualizer';

interface SpeechToTextDemoProps {
  onToast: (title: string, message?: string, type?: 'success' | 'info' | 'warning') => void;
}

export const SpeechToTextDemo: React.FC<SpeechToTextDemoProps> = ({ onToast }) => {
  const [selectedSessionIndex, setSelectedSessionIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeTurnIndex, setActiveTurnIndex] = useState(0);
  const [showSummaryModal, setShowSummaryModal] = useState(false);

  const currentSession: AudioSample = SAMPLE_AUDIO_SESSIONS[selectedSessionIndex] || SAMPLE_AUDIO_SESSIONS[0];

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          const next = prev + 3;
          if (next > 65) setActiveTurnIndex(2);
          else if (next > 30) setActiveTurnIndex(1);
          else setActiveTurnIndex(0);
          return next;
        });
      }, 200);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
    onToast(
      !isPlaying ? 'Playback Initialized' : 'Playback Paused',
      `${currentSession.title} (${currentSession.duration})`,
      'info'
    );
  };

  const handleReset = () => {
    setIsPlaying(false);
    setProgress(0);
    setActiveTurnIndex(0);
    onToast('Demo Cleared', 'Playback progress and transcript timeline reset.', 'info');
  };

  const handleCopyTranscript = () => {
    const textToCopy = currentSession.transcript
      .map((t) => `${t.speaker} [${t.timestamp}]: ${t.text}`)
      .join('\n\n');

    navigator.clipboard.writeText(textToCopy);
    onToast('Transcript Copied', 'Full diarized transcript copied to clipboard.', 'success');
  };

  const handleDownloadTranscript = () => {
    const content = `VOICEFLOW AI TRANSCRIPTION EXPORT\nSession: ${currentSession.title}\nDuration: ${currentSession.duration}\nLanguage: ${currentSession.language}\n\n` +
      currentSession.transcript
        .map((t) => `[${t.timestamp}] ${t.speaker} (Confidence: ${(t.confidence * 100).toFixed(1)}%):\n${t.text}\n`)
        .join('\n') +
      `\nSUMMARY OVERVIEW:\n${currentSession.summary.overview}\n\nKEY TAKEAWAYS:\n` +
      currentSession.summary.keyTakeaways.map((k) => `• ${k}`).join('\n');

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `voiceflow-transcript-${currentSession.id}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    onToast('Transcript Downloaded', `Saved as voiceflow-transcript-${currentSession.id}.txt`, 'success');
  };

  return (
    <section id="solutions" className="py-24 sm:py-36 bg-vf-bg border-b border-vf-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-vf-cyan block mb-3">
            INTERACTIVE TRANSCRIPTION BENCHMARK
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-vf-text leading-tight mb-4">
            From spoken words to structured insight.
          </h2>
          <p className="text-base sm:text-lg text-vf-text-muted font-sans leading-relaxed">
            Test the live speech transcription interface below. Switch sample recordings, observe speaker separation, and test instant copy/download actions.
          </p>
        </div>

        {/* 3-Column Interactive Transcription Deck */}
        <div className="rounded-2xl border border-vf-border bg-vf-surface/60 backdrop-blur-md shadow-surface overflow-hidden">
          {/* Top Telemetry Header */}
          <div className="bg-vf-bg/80 border-b border-vf-border px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-vf-cyan font-bold uppercase tracking-wider">
                ACTIVE SESSION:
              </span>
              <span className="text-sm font-display font-semibold text-vf-text">
                {currentSession.title}
              </span>
              <span className="text-xs font-mono text-vf-text-muted px-2 py-0.5 rounded bg-vf-surface border border-vf-border">
                {currentSession.duration}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-vf-green flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5" /> 98.6% Mean Confidence
              </span>
              <span className="text-xs font-mono text-vf-text-muted">
                Locale: {currentSession.language}
              </span>
            </div>
          </div>

          {/* 3-Column Work Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
            {/* Left Panel: Audio input controls & sample selector (3 cols) */}
            <div className="lg:col-span-3 border-r border-vf-border/80 bg-vf-bg/40 p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-vf-text-muted block mb-3">
                  AUDIO RECORDING SOURCE
                </span>

                {/* Session Selector */}
                <div className="space-y-2 mb-6">
                  {SAMPLE_AUDIO_SESSIONS.map((sess, idx) => (
                    <button
                      key={sess.id}
                      onClick={() => {
                        setSelectedSessionIndex(idx);
                        setIsPlaying(false);
                        setProgress(0);
                      }}
                      className={`w-full text-left p-3 rounded-xl border text-xs font-mono transition-all ${
                        selectedSessionIndex === idx
                          ? 'border-vf-cyan bg-vf-cyan/15 text-vf-text shadow-cyan-glow'
                          : 'border-vf-border/60 bg-vf-surface/40 text-vf-text-muted hover:border-vf-border'
                      }`}
                    >
                      <span className="text-[9px] text-vf-cyan block uppercase">{sess.category}</span>
                      <span className="font-display font-bold block mt-0.5 truncate">{sess.title}</span>
                      <span className="text-[10px] text-vf-text-muted/80 mt-1 block">{sess.duration}</span>
                    </button>
                  ))}
                </div>

                {/* Audio Controls */}
                <div className="space-y-3 pt-4 border-t border-vf-border/60">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-vf-text-muted block">
                    PLAYBACK EMULATION
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleTogglePlay}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-vf-cyan text-vf-bg font-bold font-mono text-xs uppercase tracking-wider hover:opacity-90 shadow-cyan-glow transition-all"
                    >
                      {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                      <span>{isPlaying ? 'Pause' : 'Play Stream'}</span>
                    </button>
                    <button
                      onClick={handleReset}
                      className="p-2.5 rounded-lg border border-vf-border bg-vf-surface hover:bg-vf-surface-elevated text-vf-text-muted hover:text-vf-text transition-colors"
                      title="Clear / Reset progress"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Status Note */}
              <div className="pt-4 border-t border-vf-border/40 text-[10px] font-mono text-vf-text-muted/80">
                Pre-recorded sample telemetry. Audio decoded in client memory.
              </div>
            </div>

            {/* Center Panel: Waveform Visualizer & Progress Timeline (4 cols) */}
            <div className="lg:col-span-4 p-6 border-r border-vf-border/80 bg-vf-surface/20 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-vf-text-muted block mb-3">
                  ACOUSTIC SPECTRUM & TIMELINE
                </span>

                <WaveformVisualizer
                  mode="horizontal"
                  isActive={isPlaying}
                  stateText={isPlaying ? 'Synthesizing Live Audio' : 'Ready'}
                />

                {/* Playback Scrubber Bar */}
                <div className="mt-6 space-y-1.5 font-mono text-xs">
                  <div className="flex justify-between text-[11px] text-vf-text-muted">
                    <span>PROGRESS</span>
                    <span className="text-vf-cyan font-bold">{progress}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-vf-bg border border-vf-border/60 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-vf-cyan to-vf-violet rounded-full transition-all duration-200"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <div className="mt-8 p-4 rounded-xl bg-vf-bg/80 border border-vf-border/60 space-y-2">
                  <span className="text-[10px] font-mono text-vf-text-muted uppercase">SPEAKER DISTRIBUTION</span>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 rounded bg-vf-cyan" style={{ flex: 6 }} />
                    <div className="flex-1 h-2 rounded bg-vf-violet" style={{ flex: 4 }} />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-vf-text-muted pt-1">
                    <span className="text-vf-cyan">Speaker 01: 60%</span>
                    <span className="text-vf-violet">Speaker 02: 40%</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-vf-border/40 text-[11px] font-mono text-vf-cyan">
                VAD Sensitivity: 0.85 (Noise Gated)
              </div>
            </div>

            {/* Right Panel: Live Diarized Transcript Turns (5 cols) */}
            <div className="lg:col-span-5 p-6 bg-vf-bg/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-vf-border/60">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-vf-text-muted">
                    DIARIZED TURNS & TOKENS
                  </span>
                  <span className="text-[10px] font-mono text-vf-green">3 Turns Parsed</span>
                </div>

                {/* Transcript Conversation Turns */}
                <div className="space-y-3 max-h-[320px] overflow-y-auto pr-1">
                  {currentSession.transcript.map((turn, idx) => {
                    const isTurnActive = activeTurnIndex === idx;
                    return (
                      <div
                        key={turn.id}
                        className={`p-3.5 rounded-xl border transition-all ${
                          isTurnActive
                            ? 'border-vf-cyan bg-vf-surface shadow-cyan-glow'
                            : 'border-vf-border/60 bg-vf-surface/40'
                        }`}
                      >
                        <div className="flex items-center justify-between text-[10px] font-mono mb-1.5">
                          <span className={turn.speaker.includes('01') || turn.speaker.includes('Customer') ? 'text-vf-cyan font-bold' : 'text-vf-violet font-bold'}>
                            {turn.speaker}
                          </span>
                          <span className="text-vf-text-muted">{turn.timestamp}</span>
                        </div>
                        <p className="text-xs font-mono text-vf-text leading-relaxed">
                          {turn.text}
                        </p>
                        <div className="mt-2 pt-1.5 border-t border-vf-border/40 flex items-center justify-between text-[9px] font-mono text-vf-text-muted">
                          <span>Confidence: {(turn.confidence * 100).toFixed(1)}%</span>
                          <span className="text-vf-green capitalize">{turn.sentiment}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="pt-4 mt-4 border-t border-vf-border/60 flex flex-wrap items-center justify-between gap-2">
                <div className="flex gap-2">
                  <button
                    onClick={handleCopyTranscript}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-vf-border bg-vf-surface hover:bg-vf-surface-elevated text-xs font-mono text-vf-text transition-colors"
                  >
                    <Copy className="w-3 h-3 text-vf-cyan" />
                    <span>Copy</span>
                  </button>
                  <button
                    onClick={handleDownloadTranscript}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-vf-border bg-vf-surface hover:bg-vf-surface-elevated text-xs font-mono text-vf-text transition-colors"
                  >
                    <Download className="w-3 h-3 text-vf-cyan" />
                    <span>Download .txt</span>
                  </button>
                </div>

                <button
                  onClick={() => setShowSummaryModal(true)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-vf-surface-elevated border border-vf-cyan/40 text-vf-cyan hover:bg-vf-cyan hover:text-vf-bg text-xs font-mono font-semibold transition-all"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>View Summary</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal: Summary Overview */}
        {showSummaryModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-vf-bg/80 backdrop-blur-md animate-fade-in"
            onClick={() => setShowSummaryModal(false)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="bg-vf-surface border border-vf-border rounded-xl max-w-lg w-full p-6 sm:p-8 shadow-cyan-glow-lg space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-vf-border/60">
                <span className="text-xs font-mono text-vf-cyan uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" /> CONVERSATIONAL INTELLIGENCE SYNTHESIS
                </span>
                <button
                  onClick={() => setShowSummaryModal(false)}
                  className="text-vf-text-muted hover:text-vf-text"
                >
                  ✕
                </button>
              </div>

              <div>
                <h4 className="font-display text-lg font-bold text-vf-text mb-1">
                  {currentSession.title}
                </h4>
                <p className="text-xs text-vf-text-muted leading-relaxed font-sans">
                  {currentSession.summary.overview}
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-vf-text-muted block">
                  ACTION ITEMS EXTRACTED:
                </span>
                {currentSession.summary.actionItems.map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded bg-vf-bg border border-vf-border/60 text-xs font-mono text-vf-text">
                    ✓ {item}
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-vf-border/60 flex justify-end">
                <button
                  onClick={() => setShowSummaryModal(false)}
                  className="px-4 py-2 rounded-lg bg-vf-surface-elevated text-xs font-mono text-vf-text hover:text-vf-cyan transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
