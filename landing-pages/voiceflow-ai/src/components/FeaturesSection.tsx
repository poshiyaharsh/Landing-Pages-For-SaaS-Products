import React, { useState } from 'react';
import { 
  Mic, 
  Volume2, 
  Brain, 
  Users, 
  Globe2, 
  BarChart3, 
  Clock, 
  CheckCircle, 
  Play, 
  Sparkles,
  Layers,
  Tag,
  ShieldCheck
} from 'lucide-react';
import { WaveformVisualizer } from './WaveformVisualizer';

interface FeaturesSectionProps {
  onToast: (title: string, message?: string) => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onToast }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [voiceGender, setVoiceGender] = useState<'Aura' | 'Zephyr'>('Aura');

  const langTranscripts: Record<string, string> = {
    English: '“Welcome to VoiceFlow. Let us turn conversations into intelligence.”',
    Spanish: '“Bienvenido a VoiceFlow. Convirtamos las conversaciones en inteligencia.”',
    French: '“Bienvenue sur VoiceFlow. Transformons vos conversations en intelligence.”',
    German: '“Willkommen bei VoiceFlow. Verwandeln wir Gespräche in Intelligenz.”',
    Japanese: '“VoiceFlowへようこそ。会話をインテリジェンスに変えましょう。”'
  };

  return (
    <section id="capabilities" className="py-24 sm:py-36 bg-vf-bg-secondary border-b border-vf-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-20">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-vf-cyan block mb-3">
            ARCHITECTURAL SUITE
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-vf-text leading-tight mb-5">
            Everything your voice experience needs.
          </h2>
          <p className="text-base sm:text-lg text-vf-text-muted font-sans leading-relaxed">
            Six purpose-built engines engineered to replace dozens of disparate speech microservices with sub-120ms unified intelligence.
          </p>
        </div>

        {/* 6 DISTINCT FEATURE MODULES */}
        <div className="space-y-24 sm:space-y-32">
          {/* FEATURE 01: Speech Recognition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono tracking-widest uppercase text-vf-cyan font-semibold">
                FEATURE 01
              </span>
              <h3 className="font-display text-2xl sm:text-4xl font-bold text-vf-text">
                Speech Recognition
              </h3>
              <p className="text-sm sm:text-base text-vf-text-muted leading-relaxed font-sans">
                Convert spoken language into readable, structured text with millisecond timestamps, automatic punctuation, and phonetic confidence scoring.
              </p>
              <ul className="space-y-2 text-xs font-mono text-vf-text-muted pt-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-vf-cyan" />
                  Continuous streaming WebSockets with &lt;120ms latency
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-vf-cyan" />
                  Word-level timing tokens and confidence distributions
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-vf-cyan" />
                  Automatic noise gating and acoustic echo cancellation
                </li>
              </ul>
            </div>

            {/* Visual: Waveform + Word-level Timing Preview */}
            <div className="lg:col-span-7 bg-vf-surface rounded-2xl border border-vf-border p-6 sm:p-8 shadow-surface space-y-4">
              <WaveformVisualizer mode="horizontal" isActive={true} stateText="Streaming ASR Active" />
              
              <div className="p-4 rounded-xl bg-vf-bg border border-vf-border/80 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-vf-border/40 text-[10px] text-vf-text-muted">
                  <span>TOKEN DECODING STREAM</span>
                  <span className="text-vf-cyan">Model: Whisper-V3 Turbo</span>
                </div>
                <div className="flex flex-wrap gap-1.5 leading-relaxed">
                  {[
                    { word: 'We', time: '00:00.80', conf: '99%' },
                    { word: 'need', time: '00:00.95', conf: '98%' },
                    { word: 'to', time: '00:01.05', conf: '99%' },
                    { word: 'launch', time: '00:01.20', conf: '99%' },
                    { word: 'the', time: '00:01.40', conf: '99%' },
                    { word: 'enterprise', time: '00:01.65', conf: '97%' },
                    { word: 'voice', time: '00:01.95', conf: '99%' },
                    { word: 'model', time: '00:02.15', conf: '98%' },
                    { word: 'this', time: '00:02.35', conf: '99%' },
                    { word: 'month.', time: '00:02.55', conf: '99%' },
                  ].map((tok, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded bg-vf-surface border border-vf-border/60 text-vf-text hover:border-vf-cyan transition-colors group cursor-default"
                      title={`Timestamp: ${tok.time} · Confidence: ${tok.conf}`}
                    >
                      {tok.word}
                      <span className="text-[9px] text-vf-cyan ml-1 opacity-70 group-hover:opacity-100">
                        {tok.conf}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FEATURE 02: Natural Voice Generation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual: Voice selection panel & playback */}
            <div className="lg:col-span-7 order-2 lg:order-1 bg-vf-surface rounded-2xl border border-vf-border p-6 sm:p-8 shadow-surface space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-vf-border/60">
                <span className="text-[10px] font-mono uppercase tracking-widest text-vf-cyan">
                  NEURAL SPEECH SYNTHESIS ENGINE
                </span>
                <span className="text-xs font-mono text-vf-text-muted">48kHz PCM Output</span>
              </div>

              <div className="p-4 rounded-xl bg-vf-bg border border-vf-border/80 space-y-3">
                <span className="text-[10px] font-mono text-vf-text-muted block">INPUT TEXT BUFFER</span>
                <p className="font-mono text-xs text-vf-text leading-relaxed">
                  “Welcome to VoiceFlow AI. Let us turn your next conversation into something meaningful.”
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-vf-border/40 text-[11px] font-mono text-vf-text-muted">
                  <div className="flex gap-2">
                    <button
                      onClick={() => setVoiceGender('Aura')}
                      className={`px-2.5 py-1 rounded border transition-colors ${
                        voiceGender === 'Aura'
                          ? 'border-vf-cyan bg-vf-cyan/15 text-vf-cyan'
                          : 'border-vf-border bg-vf-surface text-vf-text-muted'
                      }`}
                    >
                      Aura (Female)
                    </button>
                    <button
                      onClick={() => setVoiceGender('Zephyr')}
                      className={`px-2.5 py-1 rounded border transition-colors ${
                        voiceGender === 'Zephyr'
                          ? 'border-vf-cyan bg-vf-cyan/15 text-vf-cyan'
                          : 'border-vf-border bg-vf-surface text-vf-text-muted'
                      }`}
                    >
                      Zephyr (Male)
                    </button>
                  </div>

                  <button
                    onClick={() => onToast('Sample Voice Synthesized', `Played preview for ${voiceGender} voice.`)}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-vf-cyan text-vf-bg font-bold font-mono text-xs hover:opacity-90 transition-opacity"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Play Demo</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 space-y-4">
              <span className="text-xs font-mono tracking-widest uppercase text-vf-cyan font-semibold">
                FEATURE 02
              </span>
              <h3 className="font-display text-2xl sm:text-4xl font-bold text-vf-text">
                Natural Voice Generation
              </h3>
              <p className="text-sm sm:text-base text-vf-text-muted leading-relaxed font-sans">
                Transform written content into expressive spoken audio for lifelike voice applications with human breath cadence and emotional inflection.
              </p>
              <ul className="space-y-2 text-xs font-mono text-vf-text-muted pt-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-vf-cyan" />
                  Emotional style modifiers (Calm, Professional, Energetic)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-vf-cyan" />
                  Instant browser demonstration audio player
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-vf-cyan" />
                  Direct audio file downloads (.wav, .mp3, .pcm)
                </li>
              </ul>
            </div>
          </div>

          {/* FEATURE 03: Conversational Intelligence */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono tracking-widest uppercase text-vf-cyan font-semibold">
                FEATURE 03
              </span>
              <h3 className="font-display text-2xl sm:text-4xl font-bold text-vf-text">
                Conversational Intelligence
              </h3>
              <p className="text-sm sm:text-base text-vf-text-muted leading-relaxed font-sans">
                Extract high-leverage topics, intent classifications, customer sentiment, and executive summaries automatically without manual note-taking.
              </p>
              <ul className="space-y-2 text-xs font-mono text-vf-text-muted pt-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-vf-cyan" />
                  Automated semantic topic cluster detection
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-vf-cyan" />
                  Friction point and objection identification
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-vf-cyan" />
                  Structured JSON decision and action item outputs
                </li>
              </ul>
            </div>

            {/* Visual: Topic Clusters & Summary Preview */}
            <div className="lg:col-span-7 bg-vf-surface rounded-2xl border border-vf-border p-6 sm:p-8 shadow-surface space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-vf-border/60">
                <span className="text-[10px] font-mono uppercase tracking-widest text-vf-cyan">
                  SEMANTIC EXTRACTION DECK
                </span>
                <span className="text-xs font-mono text-vf-green">Intent Confidence: 99.2%</span>
              </div>

              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { tag: 'Enterprise Timeline', count: '14 mentions', heat: 'High' },
                  { tag: 'WebRTC Latency', count: '8 mentions', heat: 'Med' },
                  { tag: 'Budget Commitment', count: '5 mentions', heat: 'Action' }
                ].map((item, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-vf-bg border border-vf-border/80">
                    <span className="text-[9px] font-mono text-vf-cyan uppercase">{item.heat} Priority</span>
                    <h5 className="font-display text-xs font-bold text-vf-text mt-0.5">{item.tag}</h5>
                    <span className="text-[10px] font-mono text-vf-text-muted">{item.count}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-vf-bg border border-vf-border/80 font-mono text-xs space-y-2">
                <span className="text-[10px] text-vf-text-muted uppercase">EXECUTIVE SUMMARY</span>
                <p className="text-vf-text/90 leading-relaxed font-sans text-xs">
                  “Participants confirmed the Q4 voice intelligence release schedule, resolved UDP firewall dependencies, and agreed to circulate the roadmap before executive sync.”
                </p>
              </div>
            </div>
          </div>

          {/* FEATURE 04: Speaker Recognition and Diarization */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual: Speaker A vs B timeline turns */}
            <div className="lg:col-span-7 order-2 lg:order-1 bg-vf-surface rounded-2xl border border-vf-border p-6 sm:p-8 shadow-surface space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-vf-border/60">
                <span className="text-[10px] font-mono uppercase tracking-widest text-vf-cyan">
                  SPEAKER DIARIZATION TIMELINE
                </span>
                <span className="text-xs font-mono text-vf-text-muted">Multi-Speaker Turn Separation</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                {/* Speaker 01 */}
                <div className="p-3 rounded-lg bg-vf-bg border-l-2 border-vf-cyan border border-vf-border/60 space-y-1">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-vf-cyan font-bold">SPEAKER 01 (Caller)</span>
                    <span className="text-vf-text-muted">00:00.80</span>
                  </div>
                  <p className="text-vf-text">
                    “We need to launch the new voice intelligence engine next month.”
                  </p>
                </div>

                {/* Speaker 02 */}
                <div className="p-3 rounded-lg bg-vf-bg border-l-2 border-vf-violet border border-vf-border/60 space-y-1">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-vf-violet font-bold">SPEAKER 02 (Lead)</span>
                    <span className="text-vf-text-muted">00:04.40</span>
                  </div>
                  <p className="text-vf-text">
                    “Let's review the campaign timeline and finalize the key milestones.”
                  </p>
                </div>
              </div>

              <div className="p-2.5 rounded bg-vf-bg border border-vf-border/60 text-[10px] font-mono text-vf-text-muted">
                Note: Speaker diarization separates conversational turns without collecting biometric personal identity.
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 space-y-4">
              <span className="text-xs font-mono tracking-widest uppercase text-vf-cyan font-semibold">
                FEATURE 04
              </span>
              <h3 className="font-display text-2xl sm:text-4xl font-bold text-vf-text">
                Speaker Diarization
              </h3>
              <p className="text-sm sm:text-base text-vf-text-muted leading-relaxed font-sans">
                Separate conversational turns and organize multi-person speech with color-coded speaker timelines and silence-filtered segmentation.
              </p>
              <ul className="space-y-2 text-xs font-mono text-vf-text-muted pt-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-vf-cyan" />
                  Accurate multi-party turn detection (up to 16 speakers)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-vf-cyan" />
                  Zero voiceprint biometric storage for privacy compliance
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-vf-cyan" />
                  Exportable subtitle and transcript timestamps (SRT / VTT)
                </li>
              </ul>
            </div>
          </div>

          {/* FEATURE 05: Multilingual Processing */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono tracking-widest uppercase text-vf-cyan font-semibold">
                FEATURE 05
              </span>
              <h3 className="font-display text-2xl sm:text-4xl font-bold text-vf-text">
                Multilingual Processing
              </h3>
              <p className="text-sm sm:text-base text-vf-text-muted leading-relaxed font-sans">
                Build global voice workflows across 64+ languages with automatic dialect detection, phonetic normalization, and cross-lingual translation.
              </p>
              <ul className="space-y-2 text-xs font-mono text-vf-text-muted pt-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-vf-cyan" />
                  Zero-configuration spoken language auto-detection
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-vf-cyan" />
                  Accent-resilient acoustic models trained on 1M+ hours
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-vf-cyan" />
                  Simultaneous transcription and English translation
                </li>
              </ul>
            </div>

            {/* Visual: Language Selector & Live Transcript Card */}
            <div className="lg:col-span-7 bg-vf-surface rounded-2xl border border-vf-border p-6 sm:p-8 shadow-surface space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-vf-border/60">
                <span className="text-[10px] font-mono uppercase tracking-widest text-vf-cyan">
                  LANGUAGE MATRIX SELECTOR
                </span>
                <div className="flex gap-1.5">
                  {['English', 'Spanish', 'French', 'German', 'Japanese'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setSelectedLanguage(lang)}
                      className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                        selectedLanguage === lang
                          ? 'bg-vf-cyan text-vf-bg font-bold'
                          : 'bg-vf-bg border border-vf-border text-vf-text-muted hover:text-vf-text'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-xl bg-vf-bg border border-vf-border/80 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between text-[10px] text-vf-text-muted">
                  <span>DETECTED LOCALE: {selectedLanguage.toUpperCase()}</span>
                  <span className="text-vf-green">Auto-Routed</span>
                </div>
                <p className="text-vf-text text-sm leading-relaxed animate-fade-in font-display">
                  {langTranscripts[selectedLanguage]}
                </p>
              </div>
            </div>
          </div>

          {/* FEATURE 06: Voice Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual: Metric cards & response times */}
            <div className="lg:col-span-7 order-2 lg:order-1 bg-vf-surface rounded-2xl border border-vf-border p-6 sm:p-8 shadow-surface space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-vf-border/60">
                <span className="text-[10px] font-mono uppercase tracking-widest text-vf-cyan">
                  TELEMETRY PATTERN DASHBOARD
                </span>
                <span className="text-xs font-mono text-vf-cyan">Sample Data Benchmark</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-lg bg-vf-bg border border-vf-border/80">
                  <span className="text-[10px] font-mono text-vf-text-muted block">CALL VOLUME</span>
                  <span className="font-mono text-lg font-bold text-vf-text mt-0.5 block">142,890</span>
                  <span className="text-[9px] font-mono text-vf-green">+18.4% monthly</span>
                </div>
                <div className="p-3 rounded-lg bg-vf-bg border border-vf-border/80">
                  <span className="text-[10px] font-mono text-vf-text-muted block">AVG DURATION</span>
                  <span className="font-mono text-lg font-bold text-vf-text mt-0.5 block">04m 12s</span>
                  <span className="text-[9px] font-mono text-vf-cyan">-32s resolution</span>
                </div>
                <div className="p-3 rounded-lg bg-vf-bg border border-vf-border/80">
                  <span className="text-[10px] font-mono text-vf-text-muted block">LATENCY (P95)</span>
                  <span className="font-mono text-lg font-bold text-vf-text mt-0.5 block">118 ms</span>
                  <span className="text-[9px] font-mono text-vf-green">Ultra-Low</span>
                </div>
                <div className="p-3 rounded-lg bg-vf-bg border border-vf-border/80">
                  <span className="text-[10px] font-mono text-vf-text-muted block">SENTIMENT +</span>
                  <span className="font-mono text-lg font-bold text-vf-text mt-0.5 block">84.2%</span>
                  <span className="text-[9px] font-mono text-vf-green">Positive CSAT</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 space-y-4">
              <span className="text-xs font-mono tracking-widest uppercase text-vf-cyan font-semibold">
                FEATURE 06
              </span>
              <h3 className="font-display text-2xl sm:text-4xl font-bold text-vf-text">
                Voice Analytics
              </h3>
              <p className="text-sm sm:text-base text-vf-text-muted leading-relaxed font-sans">
                Turn raw conversation audio into strategic patterns your engineering, customer success, and executive teams can act on immediately.
              </p>
              <ul className="space-y-2 text-xs font-mono text-vf-text-muted pt-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-vf-cyan" />
                  Aggregate customer topic distribution maps
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-vf-cyan" />
                  Caller wait time vs sentiment correlation graphs
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-vf-cyan" />
                  Real-time pipeline throughput health metrics
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
