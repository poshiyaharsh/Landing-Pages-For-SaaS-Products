import React, { useState } from 'react';
import { ArrowRight, Sparkles, Search, FileText, CheckCircle2, ChevronRight, CornerDownLeft, ExternalLink } from 'lucide-react';
import { DocumentItem } from '../types';

interface HeroSectionProps {
  onOpenAuth: (mode: 'signin' | 'signup') => void;
  onExploreWorkspace: () => void;
  onSelectDocument: (doc: DocumentItem, citationPassage?: string) => void;
  sampleDoc: DocumentItem;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenAuth,
  onExploreWorkspace,
  onSelectDocument,
  sampleDoc,
}) => {
  const [activeTab, setActiveTab] = useState<'assistant' | 'preview'>('assistant');
  const [isAsking, setIsAsking] = useState(false);
  const [heroQuestion, setHeroQuestion] = useState('What are the main findings in this report?');
  const [showAnswer, setShowAnswer] = useState(true);

  const handleSimulateQuestion = (q: string) => {
    setHeroQuestion(q);
    setIsAsking(true);
    setShowAnswer(false);
    setTimeout(() => {
      setIsAsking(false);
      setShowAnswer(true);
    }, 450);
  };

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b border-docu-border/60">
      {/* Subtle background radial dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#E5E7EB_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial & Value Proposition */}
          <div className="lg:col-span-5 space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-docu-accent-soft border border-docu-accent/20 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-docu-accent animate-pulse-subtle" />
              <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-docu-accent">
                AI-POWERED DOCUMENT INTELLIGENCE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-docu-text leading-[1.12]">
              Your documents. <br />
              <span className="text-docu-text">Now truly </span>
              <span className="text-docu-accent relative">
                intelligent.
                <svg
                  className="absolute left-0 -bottom-1 w-full text-docu-accent/25 h-1.5"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                >
                  <path d="M0,5 Q50,0 100,5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-docu-secondary leading-relaxed font-normal">
              Ask questions, uncover insights, and turn scattered files into useful knowledge. DocuMind helps you understand your documents without spending hours searching through them.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => onOpenAuth('signup')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium bg-docu-accent hover:bg-docu-accent-hover text-white rounded-docu shadow-subtle transition-all"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreWorkspace}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium bg-docu-surface hover:bg-docu-subtle text-docu-text border border-docu-border rounded-docu transition-colors"
              >
                <span>Explore the Workspace</span>
              </button>
            </div>

            {/* Supporting Note */}
            <p className="text-xs font-mono text-docu-muted flex items-center gap-1.5 pt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-docu-muted/60" />
              <span>Upload. Ask. Understand.</span>
            </p>

            {/* Three Capability Indicators */}
            <div className="pt-6 border-t border-docu-border grid grid-cols-3 gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-docu-text">
                  <Sparkles className="w-3.5 h-3.5 text-docu-accent" />
                  <span>AI Answers</span>
                </div>
                <p className="text-[11px] text-docu-secondary leading-snug">
                  Grounded with coordinate citations
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-docu-text">
                  <Search className="w-3.5 h-3.5 text-docu-accent" />
                  <span>Smart Search</span>
                </div>
                <p className="text-[11px] text-docu-secondary leading-snug">
                  Semantic retrieval by meaning
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-docu-text">
                  <FileText className="w-3.5 h-3.5 text-docu-accent" />
                  <span>Instant Briefs</span>
                </div>
                <p className="text-[11px] text-docu-secondary leading-snug">
                  Structured 6-part executive summaries
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Polished Product Mockup */}
          <div className="lg:col-span-7">
            <div className="bg-docu-surface border border-docu-border rounded-docu-xl shadow-modal overflow-hidden">
              {/* Mockup Window Chrome */}
              <div className="px-4 py-3 bg-docu-subtle/80 border-b border-docu-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-docu-muted pl-2 hidden sm:inline">
                    documind-workspace / Annual_Report_2026.pdf
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-50 text-docu-success border border-emerald-200">
                    <CheckCircle2 className="w-2.5 h-2.5" /> Vector Index Active
                  </span>
                  <span className="text-[10px] font-mono text-docu-muted hidden sm:inline">
                    Sample Data
                  </span>
                </div>
              </div>

              {/* Workspace Split Layout */}
              <div className="grid grid-cols-1 md:grid-cols-12 min-h-[460px]">
                {/* Left Sub-panel: Document Preview Mini-view */}
                <div className="md:col-span-5 border-r border-docu-border bg-docu-bg/50 p-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-docu-border">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-docu-accent" />
                        <span className="text-xs font-semibold text-docu-text truncate max-w-[130px]">
                          Annual_Report.pdf
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-docu-muted">Page 08 / 42</span>
                    </div>

                    {/* Miniature Page Content */}
                    <div className="bg-white border border-docu-border rounded-docu p-3 shadow-subtle space-y-2 text-[11px]">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-docu-muted">
                        Section 3.2 · Core Findings
                      </div>
                      <p className="text-docu-secondary leading-relaxed line-clamp-3">
                        Detailed audit of enterprise operational expenses reveals three structural shifts. Compute requirements escalated cloud operational costs by 14.2%...
                      </p>

                      {/* Highlighted snippet */}
                      <div className="p-2 bg-docu-accent-soft border-l-2 border-docu-accent rounded text-[11px] text-docu-text font-medium leading-snug">
                        “The report identifies three key findings: rising operating costs, improved customer retention, and an opportunity to automate repetitive workflows.”
                      </div>

                      <p className="text-docu-secondary text-[10px] leading-relaxed line-clamp-2">
                        Continuous retrieval precision directly contributed to an increase in enterprise customer retention to 96.4%...
                      </p>
                    </div>

                    {/* Small document library badge */}
                    <div className="pt-2">
                      <span className="text-[10px] font-mono text-docu-muted uppercase tracking-wider block mb-1.5">
                        Active Workspace Files (6)
                      </span>
                      <div className="space-y-1">
                        {['Annual_Report_2026.pdf', 'Product_Strategy.docx', 'Market_Research.pdf'].map(
                          (file, i) => (
                            <div
                              key={file}
                              className={`flex items-center justify-between px-2 py-1 rounded text-[11px] ${
                                i === 0
                                  ? 'bg-docu-accent-soft text-docu-accent font-medium'
                                  : 'text-docu-secondary hover:bg-white'
                              }`}
                            >
                              <span className="truncate">{file}</span>
                              <span className="text-[9px] font-mono">{i === 0 ? 'Active' : 'Ready'}</span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Open Full Preview CTA */}
                  <button
                    onClick={() =>
                      onSelectDocument(
                        sampleDoc,
                        'The report identifies three key findings: rising operating costs, improved customer retention, and an opportunity to automate repetitive workflows.'
                      )
                    }
                    className="mt-3 flex items-center justify-center gap-1.5 py-1.5 text-xs text-docu-accent hover:text-docu-accent-hover font-medium border border-docu-accent/30 rounded bg-white hover:bg-docu-accent-soft transition-colors"
                  >
                    <span>Inspect Document Page 08</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>

                {/* Right Sub-panel: AI Assistant Conversation */}
                <div className="md:col-span-7 p-4 sm:p-5 flex flex-col justify-between bg-white">
                  <div className="space-y-4">
                    {/* Assistant Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-docu-border">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-docu-accent flex items-center justify-center text-white">
                          <Sparkles className="w-3 h-3" />
                        </div>
                        <span className="text-xs font-semibold text-docu-text">DocuMind Intelligence</span>
                      </div>
                      <span className="text-[10px] font-mono text-docu-muted">Grounding: Strict</span>
                    </div>

                    {/* Question / User Bubble */}
                    <div className="flex justify-end">
                      <div className="max-w-[85%] bg-docu-subtle border border-docu-border text-docu-text text-xs p-3 rounded-docu leading-relaxed">
                        {heroQuestion}
                      </div>
                    </div>

                    {/* AI Answer Bubble */}
                    {isAsking ? (
                      <div className="flex items-center gap-2 text-xs text-docu-muted py-4">
                        <div className="w-3.5 h-3.5 border-2 border-docu-accent/30 border-t-docu-accent rounded-full animate-spin" />
                        <span>Traversing Annual_Report_2026.pdf vector embeddings...</span>
                      </div>
                    ) : showAnswer ? (
                      <div className="space-y-3">
                        <div className="bg-docu-surface border border-docu-border rounded-docu p-3.5 shadow-subtle space-y-2">
                          <p className="text-xs text-docu-text leading-relaxed">
                            The report identifies three key findings: <strong className="font-semibold text-docu-text">rising operating costs</strong>, <strong className="font-semibold text-docu-text">improved customer retention</strong>, and an <strong className="font-semibold text-docu-text">opportunity to automate repetitive workflows</strong>.
                          </p>

                          {/* Interactive Source Reference Tag */}
                          <div className="pt-2 border-t border-docu-border/60 flex items-center justify-between">
                            <button
                              onClick={() =>
                                onSelectDocument(
                                  sampleDoc,
                                  'The report identifies three key findings: rising operating costs, improved customer retention, and an opportunity to automate repetitive workflows.'
                                )
                              }
                              className="group inline-flex items-center gap-1.5 px-2 py-1 bg-docu-subtle hover:bg-docu-accent-soft border border-docu-border hover:border-docu-accent/30 rounded text-[11px] font-mono text-docu-secondary hover:text-docu-accent transition-colors"
                            >
                              <FileText className="w-3 h-3 text-docu-accent" />
                              <span>Source: Annual_Report.pdf · Page 08</span>
                              <ChevronRight className="w-3 h-3 opacity-60 group-hover:translate-x-0.5 transition-transform" />
                            </button>

                            <span className="text-[10px] font-mono text-docu-success">
                              99.4% Match
                            </span>
                          </div>
                        </div>

                        {/* Quick Prompts to try */}
                        <div className="space-y-1.5">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-docu-muted block">
                            Suggested Inquiries:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            <button
                              onClick={() =>
                                handleSimulateQuestion('What are the main findings in this report?')
                              }
                              className="px-2 py-1 rounded text-[10px] bg-docu-subtle hover:bg-docu-accent-soft text-docu-secondary hover:text-docu-accent border border-docu-border transition-colors truncate"
                            >
                              Main findings?
                            </button>
                            <button
                              onClick={() =>
                                handleSimulateQuestion(
                                  'What was the customer retention benchmark percentage?'
                                )
                              }
                              className="px-2 py-1 rounded text-[10px] bg-docu-subtle hover:bg-docu-accent-soft text-docu-secondary hover:text-docu-accent border border-docu-border transition-colors truncate"
                            >
                              Retention benchmark?
                            </button>
                            <button
                              onClick={() =>
                                handleSimulateQuestion('What is the estimated automation savings?')
                              }
                              className="px-2 py-1 rounded text-[10px] bg-docu-subtle hover:bg-docu-accent-soft text-docu-secondary hover:text-docu-accent border border-docu-border transition-colors truncate"
                            >
                              Automation savings?
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>

                  {/* Question Input Field Mock */}
                  <div className="pt-3 border-t border-docu-border mt-3">
                    <div className="flex items-center gap-2 px-3 py-2 bg-docu-subtle rounded-docu border border-docu-border focus-within:border-docu-accent focus-within:bg-white transition-all">
                      <input
                        type="text"
                        value={heroQuestion}
                        onChange={(e) => setHeroQuestion(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSimulateQuestion(heroQuestion)}
                        placeholder="Ask anything about Annual_Report_2026.pdf..."
                        className="w-full text-xs bg-transparent text-docu-text focus:outline-none placeholder:text-docu-muted"
                      />
                      <button
                        onClick={() => handleSimulateQuestion(heroQuestion)}
                        className="p-1 rounded bg-docu-accent text-white hover:bg-docu-accent-hover transition-colors shrink-0"
                        aria-label="Send question"
                      >
                        <CornerDownLeft className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
