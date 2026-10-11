import React from 'react';
import { ShieldCheck, Lock, KeyRound, ServerOff, Eye, Cpu, HardDriveDownload, AlertCircle } from 'lucide-react';

export const SecuritySection: React.FC = () => {
  const securityPillars = [
    {
      icon: <Lock className="w-5 h-5 text-cyan-400" />,
      title: 'Zero Biometric Storage',
      tag: 'ARCHITECTURE',
      description: 'Audio streams are processed purely for linguistic content and acoustic prosody. We never generate, store, or match persistent biometric voiceprints.',
      audit: 'Acoustic-only embeddings'
    },
    {
      icon: <ServerOff className="w-5 h-5 text-violet-400" />,
      title: 'Ephemeral RAM Processing',
      tag: 'RUNTIME',
      description: 'Raw PCM audio chunks live solely in volatile memory during live inference and are purged immediately post-transcription without persistent disk caching.',
      audit: '0s persistent disk retention'
    },
    {
      icon: <KeyRound className="w-5 h-5 text-emerald-400" />,
      title: 'End-to-End Transport TLS 1.3',
      tag: 'TRANSPORT',
      description: 'WebSocket streaming and REST endpoints strictly require modern TLS 1.3 cipher suites with authenticated AES-256-GCM payloads in transit.',
      audit: 'Strict mTLS option'
    },
    {
      icon: <Eye className="w-5 h-5 text-blue-400" />,
      title: 'Explicit Microphone Consent',
      tag: 'GOVERNANCE',
      description: 'Browser audio capture is strictly triggered upon deliberate operator gesture with persistent optical recording indicators and instant abort hotkeys.',
      audit: 'Zero autonomous recording'
    },
    {
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      title: 'Local & On-Premises Isolation',
      tag: 'CONTAINMENT',
      description: 'Deploy speech pipelines within self-contained VPC boundaries or air-gapped container topologies to maintain full data sovereign control.',
      audit: 'VPC air-gap ready'
    },
    {
      icon: <HardDriveDownload className="w-5 h-5 text-violet-400" />,
      title: 'Granular Data Retention Policies',
      tag: 'CONTROL',
      description: 'Configure automated programmatic redacting of recognized PII/PCI entities and define custom automated transcript lifecycle purge schedules.',
      audit: 'Automated PII scrubbing'
    }
  ];

  return (
    <section id="security" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#080B12] relative overflow-hidden">
      {/* Subtle background security matrix glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-950/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4 tracking-wider uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>ENTERPRISE PRIVACY & GOVERNANCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Built with privacy in mind.
          </h2>
          <p className="text-secondary max-w-2xl text-base sm:text-lg">
            Conversational data demands strict architectural boundaries. VoiceFlow AI is engineered from the ground up for transparent recording controls, ephemeral memory processing, and explicit operator consent.
          </p>
        </div>

        {/* Security pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {securityPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#0E1320]/80 border border-border-subtle/80 hover:border-cyan-500/30 rounded-xl p-6 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(82,232,255,0.06)] group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#131A28] border border-border-subtle flex items-center justify-center group-hover:border-cyan-500/30 transition-colors">
                    {pillar.icon}
                  </div>
                  <span className="text-[10px] font-mono tracking-wider text-secondary/60 bg-[#131A28] px-2.5 py-0.5 rounded border border-border-subtle">
                    {pillar.tag}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-secondary leading-relaxed mb-4">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-3 border-t border-border-subtle/40 flex items-center justify-between text-[11px] font-mono text-cyan-400/80">
                <span>Verification</span>
                <span className="text-secondary/80">{pillar.audit}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Disclosure / Technical Scope Notice */}
        <div className="rounded-xl bg-[#131A28]/60 border border-border-subtle p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs text-secondary">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 text-cyan-400">
            <AlertCircle className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <span className="font-semibold text-slate-200 block mb-0.5">Deployment Transparency Notice</span>
            Actual telemetry processing and retention behavior is governed by your configured host deployment, custom API keys, and VPC integration rules. We do not claim external certifications or compliance standards without your dedicated on-premise audit verification.
          </div>
          <div className="shrink-0 font-mono text-[11px] text-cyan-400 bg-[#0E1320] px-3 py-1.5 rounded border border-border-subtle">
            GDPR / CCPA / HIPAA Scope Compatible
          </div>
        </div>
      </div>
    </section>
  );
};
