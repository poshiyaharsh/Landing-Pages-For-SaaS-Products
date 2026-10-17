import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  ChevronRight, 
  CheckCircle2, 
  MessageSquare, 
  FileText, 
  Layers, 
  Hash, 
  Clock, 
  Users, 
  Plus, 
  MoreHorizontal,
  Flame,
  Check
} from 'lucide-react';
import { SAMPLE_TEAM } from '../data/sampleData';

interface HeroSectionProps {
  onStartFree: () => void;
  onExploreWorkspace: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartFree,
  onExploreWorkspace
}) => {
  const [activeTab, setActiveTab] = useState<'board' | 'doc'>('board');

  return (
    <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden">
      {/* Background subtle spatial grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#4F46E5_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header copy */}
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2FF] border border-[#4F46E5]/20 text-[#4F46E5] text-xs font-semibold tracking-wider uppercase font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            THE WORKSPACE THAT WORKS TOGETHER
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#0F172A] tracking-tight leading-[1.12]">
            One workspace. <br className="hidden sm:inline" />
            <span className="text-[#4F46E5]">Every team.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Plan projects, share knowledge, and keep every conversation connected. SyncSpace brings your team's work into one organized space, so everyone can move forward together.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onStartFree}
              className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-white bg-[#4F46E5] hover:bg-[#4338CA] rounded-xl shadow-sm transition-all duration-150 flex items-center justify-center gap-2 active:scale-95"
            >
              <span>Start for free</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreWorkspace}
              className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-[#E4E2EB] hover:border-slate-300 rounded-xl shadow-subtle transition-all duration-150 flex items-center justify-center gap-2"
            >
              <span>Explore the workspace</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          <div className="pt-1">
            <span className="text-xs text-slate-500 font-medium">
              Set up your workspace in minutes • No credit card required
            </span>
          </div>
        </div>

        {/* Large Spatial Collaborative Product Visual Composition */}
        <div className="mt-12 sm:mt-16 max-w-6xl mx-auto">
          <div className="rounded-2xl border border-[#E4E2EB] bg-white shadow-workspace overflow-hidden">
            {/* Top Workspace Chrome Bar */}
            <div className="px-4 py-3 bg-[#FAF9FC] border-b border-[#E4E2EB] flex items-center justify-between text-xs text-slate-600">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                </div>
                <div className="flex items-center gap-2 pl-2">
                  <span className="font-bold text-[#0F172A] font-display">Acme Corp</span>
                  <span className="text-slate-400">/</span>
                  <span className="font-medium text-[#4F46E5]">Sprint 24 — Product Core</span>
                </div>
              </div>

              {/* Live teammate presence indicator */}
              <div className="flex items-center gap-3">
                <div className="flex items-center -space-x-1.5">
                  <span className="w-6 h-6 rounded-full bg-emerald-500 text-white font-bold text-[10px] flex items-center justify-center ring-2 ring-white">
                    ML
                  </span>
                  <span className="w-6 h-6 rounded-full bg-indigo-600 text-white font-bold text-[10px] flex items-center justify-center ring-2 ring-white">
                    AR
                  </span>
                  <span className="w-6 h-6 rounded-full bg-purple-600 text-white font-bold text-[10px] flex items-center justify-center ring-2 ring-white">
                    SC
                  </span>
                  <span className="w-6 h-6 rounded-full bg-amber-600 text-white font-bold text-[10px] flex items-center justify-center ring-2 ring-white">
                    MV
                  </span>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>4 live collaborating</span>
                </div>
              </div>
            </div>

            {/* Spatial Layout: Left Rail + Center Workspace + Right Discussion Stream */}
            <div className="grid grid-cols-12 min-h-[460px]">
              {/* Left Navigation Rail (Workspaces & Channels) */}
              <aside className="hidden md:block col-span-3 bg-[#FAF9FC] border-r border-[#E4E2EB] p-3 text-xs space-y-4">
                <div>
                  <div className="px-2 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Workspaces
                  </div>
                  <div className="space-y-0.5 mt-1">
                    <button className="w-full text-left px-2.5 py-1.5 rounded-lg bg-[#EEF2FF] text-[#4F46E5] font-semibold flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <Layers className="w-3.5 h-3.5" />
                        <span>Product & Eng</span>
                      </span>
                      <span className="text-[10px] bg-[#4F46E5] text-white px-1.5 py-0.2 rounded-full">
                        6
                      </span>
                    </button>
                    <button className="w-full text-left px-2.5 py-1.5 rounded-lg text-slate-600 hover:bg-slate-200/50 flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5" />
                      <span>Brand Studio</span>
                    </button>
                    <button className="w-full text-left px-2.5 py-1.5 rounded-lg text-slate-600 hover:bg-slate-200/50 flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5" />
                      <span>Growth & Ops</span>
                    </button>
                  </div>
                </div>

                <div>
                  <div className="px-2 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Connected Channels
                  </div>
                  <div className="space-y-0.5 mt-1">
                    <div className="px-2.5 py-1.5 rounded-lg text-slate-800 font-semibold flex items-center justify-between bg-white border border-[#E4E2EB]">
                      <span className="flex items-center gap-2">
                        <Hash className="w-3.5 h-3.5 text-[#4F46E5]" />
                        <span>sprint-24</span>
                      </span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>
                    <div className="px-2.5 py-1.5 rounded-lg text-slate-600 flex items-center gap-2">
                      <Hash className="w-3.5 h-3.5 text-slate-400" />
                      <span>design-system</span>
                    </div>
                    <div className="px-2.5 py-1.5 rounded-lg text-slate-600 flex items-center gap-2">
                      <Hash className="w-3.5 h-3.5 text-slate-400" />
                      <span>launch-roadmap</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="px-2 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Planning Docs
                  </div>
                  <div className="space-y-0.5 mt-1">
                    <div className="px-2.5 py-1.5 rounded-lg text-slate-600 flex items-center gap-2">
                      <FileText className="w-3.5 h-3.5 text-slate-400" />
                      <span className="truncate">Spatial Design v2.4</span>
                    </div>
                    <div className="px-2.5 py-1.5 rounded-lg text-slate-600 flex items-center gap-2">
                      <FileText className="w-3.5 h-3.5 text-slate-400" />
                      <span className="truncate">Q4 Release Goals</span>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Central Project Workspace Panel (Board or Document) */}
              <main className="col-span-12 md:col-span-6 lg:col-span-6 p-4 sm:p-5 bg-white flex flex-col justify-between">
                <div>
                  {/* View Toggles & Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#E4E2EB]">
                    <div>
                      <h3 className="text-sm font-bold text-[#0F172A] font-display">Sprint 24 Board</h3>
                      <p className="text-[11px] text-slate-500">6 tasks in flight • 3 ready for review</p>
                    </div>

                    <div className="flex items-center bg-[#FAF9FC] p-0.5 rounded-lg border border-[#E4E2EB] text-xs">
                      <button
                        onClick={() => setActiveTab('board')}
                        className={`px-2.5 py-1 rounded font-medium transition-all ${
                          activeTab === 'board' ? 'bg-white text-[#4F46E5] font-semibold shadow-xs' : 'text-slate-500'
                        }`}
                      >
                        Board
                      </button>
                      <button
                        onClick={() => setActiveTab('doc')}
                        className={`px-2.5 py-1 rounded font-medium transition-all ${
                          activeTab === 'doc' ? 'bg-white text-[#4F46E5] font-semibold shadow-xs' : 'text-slate-500'
                        }`}
                      >
                        Planning Doc
                      </button>
                    </div>
                  </div>

                  {/* Active View */}
                  {activeTab === 'board' ? (
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      {/* In Progress Column */}
                      <div className="bg-[#FAF9FC] p-2.5 rounded-xl border border-[#E4E2EB] space-y-2">
                        <div className="flex items-center justify-between text-[11px] font-bold text-slate-600 px-1">
                          <span className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-[#4F46E5]" />
                            In Progress
                          </span>
                          <span className="text-[10px] bg-white px-1.5 rounded border border-[#E4E2EB]">2</span>
                        </div>

                        {/* Card 1 */}
                        <div className="p-2.5 rounded-lg bg-white border border-[#E4E2EB] shadow-xs space-y-2">
                          <span className="text-[9px] font-bold font-mono px-1.5 py-0.5 rounded bg-rose-50 text-rose-600 border border-rose-200">
                            URGENT
                          </span>
                          <p className="text-xs font-semibold text-[#0F172A] leading-snug">
                            Website redesign & spatial component library
                          </p>
                          <div className="flex items-center justify-between pt-1 text-[10px] text-slate-500">
                            <span className="flex items-center gap-1">
                              <span className="w-4 h-4 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center text-[8px]">ML</span>
                              <span>Maya Lin</span>
                            </span>
                            <span className="text-[#4F46E5] font-medium">Tomorrow</span>
                          </div>
                        </div>

                        {/* Card 2 */}
                        <div className="p-2.5 rounded-lg bg-white border border-[#E4E2EB] shadow-xs space-y-2">
                          <span className="text-[9px] font-bold font-mono px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-600 border border-indigo-200">
                            HIGH
                          </span>
                          <p className="text-xs font-semibold text-[#0F172A] leading-snug">
                            Design token export pipeline for Web & Mobile
                          </p>
                          <div className="flex items-center justify-between pt-1 text-[10px] text-slate-500">
                            <span className="flex items-center gap-1">
                              <span className="w-4 h-4 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-[8px]">SC</span>
                              <span>Sofia Chen</span>
                            </span>
                            <span>Oct 24</span>
                          </div>
                        </div>
                      </div>

                      {/* Review & Done Column */}
                      <div className="bg-[#FAF9FC] p-2.5 rounded-xl border border-[#E4E2EB] space-y-2">
                        <div className="flex items-center justify-between text-[11px] font-bold text-slate-600 px-1">
                          <span className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                            Review / Done
                          </span>
                          <span className="text-[10px] bg-white px-1.5 rounded border border-[#E4E2EB]">2</span>
                        </div>

                        {/* Card 3 */}
                        <div className="p-2.5 rounded-lg bg-white border border-[#E4E2EB] shadow-xs space-y-2">
                          <span className="text-[9px] font-bold font-mono px-1.5 py-0.5 rounded bg-amber-50 text-amber-600 border border-amber-200">
                            IN REVIEW
                          </span>
                          <p className="text-xs font-semibold text-[#0F172A] leading-snug">
                            Launch checklist & onboarding drip sequences
                          </p>
                          <div className="flex items-center justify-between pt-1 text-[10px] text-slate-500">
                            <span className="flex items-center gap-1">
                              <span className="w-4 h-4 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center text-[8px]">MV</span>
                              <span>Marcus Vance</span>
                            </span>
                            <span>Oct 26</span>
                          </div>
                        </div>

                        {/* Card 4 (Done) */}
                        <div className="p-2.5 rounded-lg bg-white border border-[#E4E2EB] shadow-xs space-y-2 opacity-80">
                          <span className="text-[9px] font-bold font-mono px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center gap-1 w-fit">
                            <Check className="w-2.5 h-2.5" />
                            COMPLETED
                          </span>
                          <p className="text-xs font-semibold text-[#0F172A] leading-snug line-through">
                            Sprint 24 capacity planning
                          </p>
                          <div className="flex items-center justify-between pt-1 text-[10px] text-slate-400">
                            <span>Alex Rivera</span>
                            <span>Yesterday</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-4 p-4 rounded-xl bg-[#FAF9FC] border border-[#E4E2EB] text-xs space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#0F172A] font-display">2026 Spatial Workspace Principles</span>
                        <span className="text-[10px] text-slate-400">Updated 14m ago by Sofia</span>
                      </div>
                      <p className="text-slate-600 leading-relaxed text-[11px]">
                        SyncSpace treats work as connected spatial coordinates. When teams comment on a task, the adjacent architecture spec and design token file update automatically.
                      </p>
                      <div className="p-2.5 bg-white rounded-lg border border-[#E4E2EB] text-[11px] text-[#4F46E5] font-mono">
                        ✓ Linked: TSK-101 (Website Redesign) & TSK-103 (Tokens)
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-[#E4E2EB] text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Interactive product visual</span>
                  <span className="text-[#4F46E5] font-semibold">Continuous workspace sync</span>
                </div>
              </main>

              {/* Right Panel: Contextual Conversation & Live Activity */}
              <aside className="hidden lg:block col-span-3 bg-[#FAF9FC] border-l border-[#E4E2EB] p-4 text-xs space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#E4E2EB]">
                  <span className="font-bold text-[#0F172A] flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-[#4F46E5]" />
                    Contextual Discussion
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>

                {/* Comment thread */}
                <div className="space-y-3">
                  <div className="p-2.5 rounded-lg bg-white border border-[#E4E2EB] space-y-1">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="font-bold text-[#0F172A]">Maya Lin</span>
                      <span className="text-slate-400 font-mono">2m ago</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      "I just moved the spatial component library task into review. @Sofia can you check the hover tokens?"
                    </p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-white border border-[#E4E2EB] space-y-1">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="font-bold text-[#0F172A]">Sofia Chen</span>
                      <span className="text-slate-400 font-mono">Just now</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      "Reviewing now! Added the contrast ratios to the spec doc."
                    </p>
                  </div>
                </div>

                {/* Live collaboration bubble */}
                <div className="p-2.5 bg-[#EEF2FF] border border-[#4F46E5]/20 rounded-lg text-[11px] text-[#4F46E5] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#4F46E5] animate-ping" />
                  <span>Sofia Chen is viewing doc #101</span>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
