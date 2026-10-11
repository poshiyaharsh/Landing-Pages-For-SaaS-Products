import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Smile, 
  Meh, 
  Frown, 
  CheckCircle, 
  HelpCircle, 
  ListTodo, 
  Bookmark, 
  PieChart, 
  Calendar 
} from 'lucide-react';
import { SAMPLE_AUDIO_SESSIONS } from '../data/voiceflowData';

export const ConversationDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'takeaways' | 'decisions' | 'actions' | 'questions'>('takeaways');

  const summary = SAMPLE_AUDIO_SESSIONS[0].summary;

  const topics = [
    { name: 'Product Feedback & Launch', percentage: 38, count: '1,420 calls', color: '#52E8FF' },
    { name: 'Customer Support & STUN/TURN', percentage: 26, count: '980 calls', color: '#8875FF' },
    { name: 'Scheduling & Executive Sync', percentage: 18, count: '670 calls', color: '#6C9EFF' },
    { name: 'Feature Requests & SDKs', percentage: 12, count: '450 calls', color: '#63E6A5' },
    { name: 'Billing & Enterprise Contracts', percentage: 6, count: '220 calls', color: '#F5A623' },
  ];

  return (
    <section className="py-24 sm:py-36 bg-vf-bg-secondary border-b border-vf-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-vf-cyan block mb-3">
            CONVERSATIONAL ANALYTICS
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-vf-text leading-tight mb-4">
            Find the meaning behind every conversation.
          </h2>
          <p className="text-base sm:text-lg text-vf-text-muted font-sans leading-relaxed">
            Automatically synthesize hours of raw audio discussions into executive summaries, sentiment distributions, topic clusters, and designated owners.
          </p>
        </div>

        {/* Top 4 KPI Metrics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="p-5 rounded-2xl border border-vf-border/80 bg-vf-surface">
            <span className="text-[10px] font-mono uppercase tracking-widest text-vf-text-muted block">
              TOTAL CONVERSATIONS
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="font-mono text-2xl sm:text-3xl font-bold text-vf-text">3,740</span>
              <span className="text-xs font-mono text-vf-green">+14.2%</span>
            </div>
            <span className="text-[10px] font-mono text-vf-text-muted mt-1 block">Ingested this cycle</span>
          </div>

          <div className="p-5 rounded-2xl border border-vf-border/80 bg-vf-surface">
            <span className="text-[10px] font-mono uppercase tracking-widest text-vf-text-muted block">
              AVERAGE DURATION
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="font-mono text-2xl sm:text-3xl font-bold text-vf-text">14m 28s</span>
              <span className="text-xs font-mono text-vf-cyan">-2m 10s</span>
            </div>
            <span className="text-[10px] font-mono text-vf-text-muted mt-1 block">Faster time-to-decision</span>
          </div>

          <div className="p-5 rounded-2xl border border-vf-border/80 bg-vf-surface">
            <span className="text-[10px] font-mono uppercase tracking-widest text-vf-text-muted block">
              TOPIC ENTROPY
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="font-mono text-2xl sm:text-3xl font-bold text-vf-text">0.18</span>
              <span className="text-xs font-mono text-vf-green">Focused</span>
            </div>
            <span className="text-[10px] font-mono text-vf-text-muted mt-1 block">High alignment index</span>
          </div>

          <div className="p-5 rounded-2xl border border-vf-border/80 bg-vf-surface">
            <span className="text-[10px] font-mono uppercase tracking-widest text-vf-text-muted block">
              PIPELINE STATUS
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="font-mono text-2xl sm:text-3xl font-bold text-vf-green">100%</span>
              <span className="text-xs font-mono text-vf-cyan">Operational</span>
            </div>
            <span className="text-[10px] font-mono text-vf-text-muted mt-1 block">Zero transcription backlog</span>
          </div>
        </div>

        {/* Dashboard 2-Column Deck: Topic Clusters & Structured Intelligence Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Topic Analysis & Sentiment Breakdown (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl border border-vf-border bg-vf-surface p-6 sm:p-8 flex flex-col justify-between shadow-surface">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-vf-border/60">
                <div className="flex items-center gap-2">
                  <PieChart className="w-4 h-4 text-vf-cyan" />
                  <h4 className="font-display text-base font-bold text-vf-text">Topic Cluster Analysis</h4>
                </div>
                <span className="text-xs font-mono text-vf-text-muted">30-Day Aggregate</span>
              </div>

              {/* Progress Bars per topic */}
              <div className="space-y-4 mb-8">
                {topics.map((t) => (
                  <div key={t.name} className="space-y-1.5 font-mono text-xs">
                    <div className="flex justify-between text-vf-text">
                      <span className="font-sans text-xs">{t.name}</span>
                      <span className="text-vf-cyan font-bold">{t.percentage}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-vf-bg overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${t.percentage}%`, backgroundColor: t.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Sentiment Distribution */}
              <div className="pt-6 border-t border-vf-border/60">
                <span className="text-[10px] font-mono uppercase tracking-widest text-vf-text-muted block mb-3">
                  ACOUSTIC SENTIMENT DISTRIBUTION
                </span>
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-vf-bg border border-vf-border/60 text-center">
                    <Smile className="w-4 h-4 text-vf-green mx-auto mb-1" />
                    <span className="font-mono text-sm font-bold text-vf-text block">72.4%</span>
                    <span className="text-[9px] font-mono text-vf-text-muted uppercase">Positive</span>
                  </div>
                  <div className="p-3 rounded-xl bg-vf-bg border border-vf-border/60 text-center">
                    <Meh className="w-4 h-4 text-vf-cyan mx-auto mb-1" />
                    <span className="font-mono text-sm font-bold text-vf-text block">21.8%</span>
                    <span className="text-[9px] font-mono text-vf-text-muted uppercase">Neutral</span>
                  </div>
                  <div className="p-3 rounded-xl bg-vf-bg border border-vf-border/60 text-center">
                    <Frown className="w-4 h-4 text-vf-rose mx-auto mb-1" />
                    <span className="font-mono text-sm font-bold text-vf-text block">5.8%</span>
                    <span className="text-[9px] font-mono text-vf-text-muted uppercase">Friction</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-vf-border/40 text-[10px] font-mono text-vf-text-muted text-center">
              Acoustic pitch and prosodic sentiment analysis engine v2.6.
            </div>
          </div>

          {/* Right: Conversation Intelligence Summary with Interactive Tabs (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl border border-vf-border bg-vf-surface p-6 sm:p-8 flex flex-col justify-between shadow-surface">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-vf-border/60">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-vf-cyan block">
                    SYNTHESIZED SESSION REPORT
                  </span>
                  <h4 className="font-display text-lg font-bold text-vf-text mt-0.5">
                    Q4 Enterprise Product Launch Sync
                  </h4>
                </div>

                {/* Filter Tabs */}
                <div className="flex gap-1 overflow-x-auto">
                  {[
                    { id: 'takeaways', label: 'Takeaways' },
                    { id: 'decisions', label: 'Decisions' },
                    { id: 'actions', label: 'Actions' },
                    { id: 'questions', label: 'Open Qs' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                        activeTab === tab.id
                          ? 'bg-vf-cyan text-vf-bg font-bold shadow-cyan-glow'
                          : 'bg-vf-bg border border-vf-border text-vf-text-muted hover:text-vf-text'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Content based on Tab */}
              <div className="space-y-4 min-h-[260px] animate-fade-in font-mono text-xs">
                {activeTab === 'takeaways' && (
                  <div className="space-y-3">
                    <span className="text-[10px] uppercase text-vf-text-muted block">
                      KEY TAKEAWAYS EXTRACTED:
                    </span>
                    {summary.keyTakeaways.map((item, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-vf-bg border border-vf-border/80 flex items-start gap-3">
                        <Bookmark className="w-4 h-4 text-vf-cyan flex-shrink-0 mt-0.5" />
                        <span className="text-vf-text leading-relaxed font-sans text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'decisions' && (
                  <div className="space-y-3">
                    <span className="text-[10px] uppercase text-vf-text-muted block">
                      FORMAL DECISIONS LOGGED:
                    </span>
                    {summary.decisions.map((item, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-vf-bg border border-vf-border/80 flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-vf-green flex-shrink-0 mt-0.5" />
                        <span className="text-vf-text leading-relaxed font-sans text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'actions' && (
                  <div className="space-y-3">
                    <span className="text-[10px] uppercase text-vf-text-muted block">
                      ASSIGNED ACTION ITEMS:
                    </span>
                    {summary.actionItems.map((item, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-vf-bg border border-vf-border/80 flex items-start gap-3">
                        <ListTodo className="w-4 h-4 text-vf-violet flex-shrink-0 mt-0.5" />
                        <span className="text-vf-text leading-relaxed font-sans text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'questions' && (
                  <div className="space-y-3">
                    <span className="text-[10px] uppercase text-vf-text-muted block">
                      UNRESOLVED INQUIRIES:
                    </span>
                    {summary.openQuestions.map((item, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-vf-bg border border-vf-border/80 flex items-start gap-3">
                        <HelpCircle className="w-4 h-4 text-vf-amber flex-shrink-0 mt-0.5" />
                        <span className="text-vf-text leading-relaxed font-sans text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-vf-border/60 flex items-center justify-between text-xs font-mono text-vf-cyan">
              <span>Automatically generated from 00:14.20 conversational audio</span>
              <span>Precision: 99.1%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
