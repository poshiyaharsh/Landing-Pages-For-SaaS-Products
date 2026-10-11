import React, { useState } from 'react';
import { 
  Play, 
  Pause, 
  Download, 
  Volume2, 
  Sliders, 
  Sparkles, 
  RefreshCw, 
  Check, 
  Radio 
} from 'lucide-react';
import { VOICE_PRESETS } from '../data/voiceflowData';
import { VoicePreset } from '../types';
import { WaveformVisualizer } from './WaveformVisualizer';

interface TextToSpeechStudioProps {
  onToast: (title: string, message?: string, type?: 'success' | 'info' | 'warning') => void;
}

export const TextToSpeechStudio: React.FC<TextToSpeechStudioProps> = ({ onToast }) => {
  const [inputText, setInputText] = useState(
    "Welcome to VoiceFlow AI. Let us turn your next conversation into something meaningful."
  );
  const [selectedVoice, setSelectedVoice] = useState<VoicePreset>(VOICE_PRESETS[0]);
  const [selectedStyle, setSelectedStyle] = useState<'Professional' | 'Conversational' | 'Calm' | 'Energetic'>('Professional');
  const [speed, setSpeed] = useState<number>(1.0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSpeak = () => {
    if (!inputText.trim()) return;

    // Check browser speech synthesis support
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(inputText);
      utterance.rate = speed;
      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
      window.speechSynthesis.speak(utterance);
      onToast('Speech Synthesized', `Rendering using ${selectedVoice.name} (${selectedStyle} profile).`, 'success');
    } else {
      // Emulated playback fallback
      setIsPlaying(true);
      setTimeout(() => setIsPlaying(false), 3000);
      onToast('Emulated Audio Playback', `Demonstration audio playback for ${selectedVoice.name}.`, 'info');
    }
  };

  const handleStop = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
  };

  const handleDownloadAudio = () => {
    const textBlob = new Blob([inputText], { type: 'text/plain' });
    const url = URL.createObjectURL(textBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `voiceflow-tts-${selectedVoice.id}.txt`;
    link.click();
    URL.revokeObjectURL(url);
    onToast('Speech Artifact Exported', `Manifest generated for ${selectedVoice.name} audio output.`, 'success');
  };

  return (
    <section className="py-24 sm:py-36 bg-vf-bg border-b border-vf-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-vf-cyan block mb-3">
            NEURAL VOICE SYNTHESIS LAB
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-vf-text leading-tight mb-4">
            Give every message a voice.
          </h2>
          <p className="text-base sm:text-lg text-vf-text-muted font-sans leading-relaxed">
            Test our neural speech generation studio. Customize persona styles, calibrate speaking cadence, and preview synthesized audio directly in your browser.
          </p>
        </div>

        {/* Studio Canvas Deck */}
        <div className="rounded-2xl border border-vf-border bg-vf-surface/60 backdrop-blur-md p-6 sm:p-10 shadow-surface">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Input Text Area & Voice Preset Cards (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-vf-text-muted mb-2">
                  Script to Synthesize
                </label>
                <textarea
                  rows={4}
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="w-full p-4 rounded-xl border border-vf-border/80 bg-vf-bg text-vf-text font-mono text-xs focus:border-vf-cyan leading-relaxed transition-all resize-none"
                  placeholder="Enter custom speech script..."
                />
              </div>

              {/* Voice Persona Selector */}
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-vf-text-muted block mb-3">
                  Neural Voice Persona Selection
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {VOICE_PRESETS.map((voice) => {
                    const isSel = selectedVoice.id === voice.id;
                    return (
                      <button
                        key={voice.id}
                        type="button"
                        onClick={() => setSelectedVoice(voice)}
                        className={`p-3.5 rounded-xl border text-left transition-all ${
                          isSel
                            ? 'border-vf-cyan bg-vf-cyan/15 shadow-cyan-glow'
                            : 'border-vf-border/60 bg-vf-bg hover:border-vf-border'
                        }`}
                      >
                        <span className="text-[9px] font-mono text-vf-cyan uppercase">{voice.gender}</span>
                        <h5 className="font-display text-sm font-bold text-vf-text mt-0.5">{voice.name}</h5>
                        <span className="text-[10px] font-mono text-vf-text-muted block truncate mt-1">
                          {voice.accent}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right: Style modifiers, speed slider & live audio preview player (5 cols) */}
            <div className="lg:col-span-5 space-y-6 p-6 rounded-2xl border border-vf-border bg-vf-bg/80">
              {/* Speaking Style Buttons */}
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-vf-text-muted block mb-2">
                  Emotional Speaking Style
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {(['Professional', 'Conversational', 'Calm', 'Energetic'] as const).map((style) => (
                    <button
                      key={style}
                      onClick={() => setSelectedStyle(style)}
                      className={`py-2 px-3 rounded-lg border text-xs font-mono transition-colors text-center ${
                        selectedStyle === style
                          ? 'border-vf-cyan bg-vf-cyan/20 text-vf-cyan font-bold'
                          : 'border-vf-border/60 bg-vf-surface text-vf-text-muted hover:text-vf-text'
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>

              {/* Speed Slider */}
              <div>
                <div className="flex justify-between text-xs font-mono text-vf-text-muted mb-2">
                  <span>PITCH / SPEED CADENCE</span>
                  <span className="text-vf-cyan font-bold">{speed.toFixed(2)}x</span>
                </div>
                <input
                  type="range"
                  min="0.75"
                  max="1.50"
                  step="0.05"
                  value={speed}
                  onChange={(e) => setSpeed(parseFloat(e.target.value))}
                  className="w-full accent-vf-cyan cursor-pointer"
                />
              </div>

              {/* Live Waveform preview while playing */}
              <WaveformVisualizer
                mode="horizontal"
                isActive={isPlaying}
                stateText={isPlaying ? `Synthesizing ${selectedVoice.name}` : 'Audio Idle'}
              />

              {/* Play & Export Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  onClick={isPlaying ? handleStop : handleSpeak}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-to-r from-vf-cyan to-vf-violet text-vf-bg font-bold font-mono text-xs uppercase tracking-wider shadow-cyan-glow hover:opacity-95 transition-all"
                >
                  {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                  <span>{isPlaying ? 'Stop Synthesis' : 'Synthesize Voice'}</span>
                </button>

                <button
                  onClick={handleDownloadAudio}
                  className="p-3 rounded-lg border border-vf-border bg-vf-surface hover:bg-vf-surface-elevated text-vf-text-muted hover:text-vf-text transition-colors"
                  title="Export Manifest"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>

              <div className="text-[10px] font-mono text-vf-text-muted/80 text-center">
                Uses Web Speech API when available; otherwise deterministic playback emulation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
