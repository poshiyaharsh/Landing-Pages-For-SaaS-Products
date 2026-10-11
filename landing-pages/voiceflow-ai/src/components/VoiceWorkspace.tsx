import React, { useState } from 'react';
import { 
  Layers, 
  Mic, 
  FileText, 
  MessageSquare, 
  BarChart2, 
  Workflow, 
  Settings, 
  Search, 
  Download, 
  Filter, 
  CheckCircle, 
  Radio, 
  Clock, 
  ChevronRight,
  ShieldAlert,
  Share2,
  Sparkles
} from 'lucide-react';
import { SAMPLE_AUDIO_SESSIONS } from '../data/voiceflowData';

interface VoiceWorkspaceProps {
  onToast: (title: string, message?: string) => void;
}

export const VoiceWorkspace: React.FC<VoiceWorkspaceProps> = ({ onToast }) => {
  const [activeNav, setActiveNav] = useState<'overview' | 'studio' | 'transcripts' | 'conversations' | 'analytics'>('conversations');
  const [activeSessionIndex, setActiveSessionIndex] = useState(0);
  const [searchFilter, setSearchFilter] = useState('');
  const [activeViewTab, setActiveViewTab] = useState<'transcript' | 'summary' | 'insights'>('transcript');

  const session = SAMPLE_AUDIO_SESSIONS[activeSessionIndex] || SAMPLE_AUDIO_SESSIONS[0];

  const handleExport = (format: string) => {
    onToast(`Export Generated: .${format}`, `Exported ${session.title} in structured ${format.toUpperCase()} format.`);
  };

  return (
    <section id="platform" className="py-24 sm:py-36 bg-vf-bg border-b border-vf-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-vf-cyan block mb-3">
            ENTERPRISE APPLICATION MOCKUP
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-vf-text leading-tight mb-4">
            A command center for conversation.
          </h2>
          <p className="text-base sm:text-lg text-vf-text-muted font-sans leading-relaxed">
            Experience the unified operational environment where speech engineering teams calibrate models, inspect live audio queues, and manage multi-agent topologies.
          </p>
        </div>

        {/* 3-Column Studio Application Chrome Shell */}
        <div className="rounded-2xl border border-vf-border bg-vf-surface shadow-cyan-glow-lg overflow-hidden">
          {/* Top Window Bar */}
          <div className="bg-vf-bg px-6 py-3 flex items-center justify-between border-b border-vf-border/80">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-vf-rose/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-vf-amber/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-vf-green/80" />
              </div>
              <span className="text-xs font-mono text-vf-text-muted hidden sm:inline">
                VoiceFlow Workspace · Enterprise Cluster eu-central-1
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono">
              <span className="text-vf-cyan flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 animate-pulse" /> Live Telemetry Synced
              </span>
              <span className="text-vf-text-muted hidden md:inline">API: v2.4-prod</span>
            </div>
          </div>

          {/* 3-Column Interface */}
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[580px]">
            {/* Left Sidebar (2.5 cols) */}
            <div className="md:col-span-3 lg:col-span-2.5 border-r border-vf-border/80 bg-vf-bg/60 p-4 flex flex-col justify-between">
              <div>
                {/* Org Pill */}
                <div className="p-3 mb-4 rounded-xl bg-vf-surface border border-vf-border flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-vf-cyan/20 border border-vf-cyan/40 flex items-center justify-center font-mono text-xs font-bold text-vf-cyan">
                    VF
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-display font-bold text-vf-text block truncate">VoiceLab Core</span>
                    <span className="text-[10px] font-mono text-vf-text-muted block">Enterprise Team</span>
                  </div>
                </div>

                {/* Sidebar Links */}
                <nav className="space-y-1">
                  {[
                    { id: 'overview', label: 'Overview', icon: Layers },
                    { id: 'studio', label: 'Voice Studio', icon: Mic },
                    { id: 'conversations', label: 'Conversations', icon: MessageSquare },
                    { id: 'analytics', label: 'Analytics', icon: BarChart2 },
                    { id: 'integrations', label: 'Integrations', icon: Workflow },
                  ].map((item) => {
                    const Icon = item.icon;
                    const isSel = activeNav === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveNav(item.id as any)}
                        className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-mono transition-colors text-left ${
                          isSel
                            ? 'bg-vf-cyan text-vf-bg font-bold shadow-cyan-glow'
                            : 'text-vf-text-muted hover:bg-vf-surface hover:text-vf-text'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              <div className="pt-4 border-t border-vf-border/60">
                <div className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-vf-text-muted">
                  <Settings className="w-3.5 h-3.5" />
                  <span>Workspace Settings</span>
                </div>
              </div>
            </div>

            {/* Central Area: Sessions list & View Selector (6.5 cols) */}
            <div className="md:col-span-6 lg:col-span-6.5 p-6 sm:p-8 bg-vf-surface/40 overflow-y-auto max-h-[640px]">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-4 mb-6 border-b border-vf-border/60">
                <div>
                  <span className="text-[10px] font-mono text-vf-cyan uppercase tracking-wider block">
                    ACTIVE ARCHIVE
                  </span>
                  <h3 className="font-display text-xl font-bold text-vf-text">
                    {session.title}
                  </h3>
                </div>

                {/* Search in sessions */}
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-vf-text-muted absolute left-2.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search logs..."
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                    className="pl-7 pr-3 py-1 text-xs rounded-lg border border-vf-border bg-vf-bg font-mono text-vf-text focus:border-vf-cyan"
                  />
                </div>
              </div>

              {/* View Tabs */}
              <div className="flex gap-2 pb-4 mb-4 border-b border-vf-border/40 font-mono text-xs">
                {[
                  { id: 'transcript', label: 'Live Transcript' },
                  { id: 'summary', label: 'Executive Summary' },
                  { id: 'insights', label: 'Action Items' },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveViewTab(t.id as any)}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      activeViewTab === t.id
                        ? 'bg-vf-surface border border-vf-cyan/50 text-vf-cyan font-bold shadow-cyan-glow'
                        : 'text-vf-text-muted hover:text-vf-text'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Tab 1: Transcript View */}
              {activeViewTab === 'transcript' && (
                <div className="space-y-3 font-mono text-xs animate-fade-in">
                  {session.transcript.map((t) => (
                    <div key={t.id} className="p-3.5 rounded-xl bg-vf-bg border border-vf-border/60 space-y-1">
                      <div className="flex justify-between text-[10px]">
                        <span className="text-vf-cyan font-bold">{t.speaker}</span>
                        <span className="text-vf-text-muted">{t.timestamp}</span>
                      </div>
                      <p className="text-vf-text leading-relaxed">{t.text}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab 2: Summary View */}
              {activeViewTab === 'summary' && (
                <div className="space-y-4 font-mono text-xs animate-fade-in">
                  <div className="p-4 rounded-xl bg-vf-bg border border-vf-border/60 space-y-2">
                    <span className="text-[10px] text-vf-cyan uppercase">OVERVIEW</span>
                    <p className="text-vf-text/90 font-sans leading-relaxed text-xs">
                      {session.summary.overview}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-vf-bg border border-vf-border/60 space-y-2">
                    <span className="text-[10px] text-vf-cyan uppercase">KEY TAKEAWAYS</span>
                    {session.summary.keyTakeaways.map((item, idx) => (
                      <div key={idx} className="text-vf-text font-sans text-xs flex gap-2">
                        <span className="text-vf-cyan font-mono">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 3: Insights & Action Items */}
              {activeViewTab === 'insights' && (
                <div className="space-y-3 font-mono text-xs animate-fade-in">
                  {session.summary.actionItems.map((act, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-vf-bg border border-vf-border/60 flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-vf-green flex-shrink-0 mt-0.5" />
                      <span className="text-vf-text font-sans text-xs">{act}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Panel: Selected Language, Duration, Status, Export Options (3 cols) */}
            <div className="md:col-span-3 lg:col-span-3 border-t md:border-t-0 md:border-l border-vf-border/80 bg-vf-bg/60 p-6 flex flex-col justify-between">
              <div className="space-y-5 font-mono text-xs">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-vf-text-muted block mb-1">
                    AUDIO METADATA
                  </span>
                  <div className="p-3.5 rounded-xl bg-vf-surface border border-vf-border/80 space-y-2.5">
                    <div className="flex justify-between">
                      <span className="text-vf-text-muted">Language:</span>
                      <span className="text-vf-cyan font-bold">{session.language}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-vf-text-muted">Duration:</span>
                      <span className="text-vf-text">{session.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-vf-text-muted">Status:</span>
                      <span className="text-vf-green font-bold">Completed</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-vf-text-muted">Latency:</span>
                      <span className="text-vf-text">114ms</span>
                    </div>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-widest text-vf-text-muted block mb-1">
                    SPEAKER IDENTIFIERS
                  </span>
                  <div className="p-3 rounded-xl bg-vf-surface border border-vf-border/80 space-y-1.5 text-[11px]">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-vf-cyan" />
                      <span className="text-vf-text">Speaker 01 (Caller)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-vf-violet" />
                      <span className="text-vf-text">Speaker 02 (Agent)</span>
                    </div>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-widest text-vf-text-muted block mb-2">
                    EXPORT ARTIFACTS
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {['json', 'txt', 'csv', 'srt'].map((fmt) => (
                      <button
                        key={fmt}
                        onClick={() => handleExport(fmt)}
                        className="py-2 px-3 rounded-lg border border-vf-border bg-vf-surface hover:bg-vf-surface-elevated text-vf-text text-[11px] font-mono uppercase tracking-wider text-center transition-colors"
                      >
                        .{fmt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-vf-border/60">
                <button
                  onClick={() => onToast('Webhook Triggered', 'Simulated webhook payload dispatched to CRM endpoint.')}
                  className="w-full py-2.5 rounded-lg bg-vf-surface-elevated border border-vf-cyan/40 text-vf-cyan hover:bg-vf-cyan hover:text-vf-bg text-xs font-mono uppercase tracking-wider transition-all"
                >
                  Dispatch Webhook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
