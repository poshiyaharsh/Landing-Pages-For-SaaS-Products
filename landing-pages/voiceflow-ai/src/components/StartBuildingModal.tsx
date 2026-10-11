import React, { useState } from 'react';
import { X, Sparkles, ArrowRight, ShieldCheck, Terminal, Cpu, Check, Copy } from 'lucide-react';
import confetti from 'canvas-confetti';

interface StartBuildingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInitialized: (projectName: string, apiKey: string) => void;
}

export const StartBuildingModal: React.FC<StartBuildingModalProps> = ({
  isOpen,
  onClose,
  onInitialized,
}) => {
  const [projectName, setProjectName] = useState('');
  const [useCase, setUseCase] = useState('Customer Support Assistant');
  const [latencyTier, setLatencyTier] = useState('sub-120ms');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectName.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      try {
        confetti({
          particleCount: 55,
          spread: 70,
          origin: { y: 0.65 },
          colors: ['#52E8FF', '#8875FF', '#63E6A5']
        });
      } catch (err) {
        // fallback
      }
      const fakeKey = `vf_live_${Math.random().toString(36).substring(2, 10)}${Math.random().toString(36).substring(2, 10)}`;
      onInitialized(projectName.trim(), fakeKey);
      onClose();
      setProjectName('');
    }, 500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-vf-bg/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="start-building-title"
    >
      <div
        className="bg-vf-surface border border-vf-border rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-cyan-glow-lg p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-vf-surface-elevated text-vf-text-muted hover:text-vf-text transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-vf-cyan/10 border border-vf-cyan/30 text-[10px] font-mono uppercase tracking-widest text-vf-cyan mb-3">
            <Cpu className="w-3 h-3" />
            VOICE INSTANCE INITIALIZATION
          </div>
          <h3 id="start-building-title" className="font-display text-2xl sm:text-3xl font-bold text-vf-text">
            Start Building with VoiceFlow
          </h3>
          <p className="text-xs sm:text-sm text-vf-text-muted mt-1 leading-relaxed">
            Provision your streaming WebSocket endpoints and generate sandbox telemetry credentials.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-vf-text-muted mb-1.5">
              Project Identifier
            </label>
            <input
              type="text"
              required
              placeholder="e.g. neo-support-agent, call-summarizer-v1"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-vf-border/80 bg-vf-bg text-vf-text text-sm focus:border-vf-cyan focus:ring-1 focus:ring-vf-cyan transition-all font-mono placeholder:text-vf-text-muted/40"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-vf-text-muted mb-1.5">
              Target Conversational Domain
            </label>
            <select
              value={useCase}
              onChange={(e) => setUseCase(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-vf-border/80 bg-vf-bg text-vf-text text-sm focus:border-vf-cyan transition-all font-sans cursor-pointer"
            >
              <option value="Customer Support Assistant">Customer Support & Live Helpdesk</option>
              <option value="Sales Intelligence">Sales Call Diarization & Scoring</option>
              <option value="Meeting Collaboration">Executive Sync & Meeting Notes</option>
              <option value="Voice Application">Interactive Web/App Voice Interface</option>
              <option value="Research Analysis">Qualitative User Research & Interviews</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-vf-text-muted mb-2">
              Streaming Latency Profile
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setLatencyTier('sub-120ms')}
                className={`p-3 rounded-lg border text-left transition-all ${
                  latencyTier === 'sub-120ms'
                    ? 'border-vf-cyan bg-vf-cyan/10 shadow-cyan-glow'
                    : 'border-vf-border/60 bg-vf-bg hover:border-vf-border'
                }`}
              >
                <span className="text-xs font-semibold text-vf-text block">Ultra-Low Latency</span>
                <span className="text-[10px] font-mono text-vf-cyan block mt-0.5">&lt;120ms (WebRTC)</span>
              </button>

              <button
                type="button"
                onClick={() => setLatencyTier('batch-accurate')}
                className={`p-3 rounded-lg border text-left transition-all ${
                  latencyTier === 'batch-accurate'
                    ? 'border-vf-cyan bg-vf-cyan/10 shadow-cyan-glow'
                    : 'border-vf-border/60 bg-vf-bg hover:border-vf-border'
                }`}
              >
                <span className="text-xs font-semibold text-vf-text block">Deep Acoustic Accuracy</span>
                <span className="text-[10px] font-mono text-vf-violet block mt-0.5">Whisper-V3 Large</span>
              </button>
            </div>
          </div>

          <div className="pt-2 text-[11px] text-vf-text-muted flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-vf-green flex-shrink-0" />
            <span>Sandbox environment loaded with 120 free transcription minutes</span>
          </div>

          <div className="pt-4 border-t border-vf-border/60 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-mono uppercase tracking-wider text-vf-text-muted hover:text-vf-text transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !projectName.trim()}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-vf-cyan to-vf-violet text-vf-bg font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-all shadow-cyan-glow disabled:opacity-50"
            >
              {isSubmitting ? 'Provisioning...' : 'Deploy Voice Sandbox'}
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
