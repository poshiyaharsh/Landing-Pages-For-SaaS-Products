import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  CheckSquare, 
  FileText, 
  Activity, 
  ArrowRight, 
  ArrowLeft, 
  Plus, 
  Clock, 
  Calendar, 
  MessageSquare, 
  User, 
  Users,
  Check, 
  MoreHorizontal,
  Flame,
  Layers,
  Sparkles
} from 'lucide-react';
import { 
  WorkspaceView, 
  TaskItem, 
  TaskColumnId, 
  DocumentSnippet, 
  ActivityEvent 
} from '../types';
import { 
  INITIAL_TASKS, 
  SAMPLE_DOCUMENTS, 
  SAMPLE_ACTIVITY, 
  SAMPLE_TEAM 
} from '../data/sampleData';

interface InteractiveWorkspaceProps {
  onTaskMoveToast?: (title: string, column: string) => void;
}

export const InteractiveWorkspace: React.FC<InteractiveWorkspaceProps> = ({ onTaskMoveToast }) => {
  const [activeView, setActiveView] = useState<WorkspaceView>('board');
  const [tasks, setTasks] = useState<TaskItem[]>(INITIAL_TASKS);
  const [selectedDocId, setSelectedDocId] = useState<string>(SAMPLE_DOCUMENTS[0].id);

  const selectedDoc = SAMPLE_DOCUMENTS.find(d => d.id === selectedDocId) || SAMPLE_DOCUMENTS[0];

  const columns: { id: TaskColumnId; label: string; color: string }[] = [
    { id: 'backlog', label: 'Backlog', color: 'bg-slate-400' },
    { id: 'in_progress', label: 'In Progress', color: 'bg-[#4F46E5]' },
    { id: 'review', label: 'Review', color: 'bg-[#D97706]' },
    { id: 'done', label: 'Done', color: 'bg-[#10B981]' },
  ];

  const handleMoveTask = (taskId: string, direction: 'next' | 'prev') => {
    const colOrder: TaskColumnId[] = ['backlog', 'in_progress', 'review', 'done'];
    setTasks(prev => prev.map(t => {
      if (t.id === taskId) {
        const currentIndex = colOrder.indexOf(t.column);
        const newIndex = direction === 'next' 
          ? Math.min(colOrder.length - 1, currentIndex + 1)
          : Math.max(0, currentIndex - 1);
        const newCol = colOrder[newIndex];
        if (onTaskMoveToast && newCol !== t.column) {
          const colLabels: Record<TaskColumnId, string> = {
            'backlog': 'Backlog',
            'in_progress': 'In Progress',
            'review': 'Review',
            'done': 'Done'
          };
          onTaskMoveToast(t.title, colLabels[newCol]);
        }
        return { ...t, column: newCol };
      }
      return t;
    }));
  };

  return (
    <section id="workspace-demo" className="py-20 bg-[#FAF9FC] border-b border-[#E4E2EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-semibold text-[#4F46E5] uppercase tracking-wider font-mono bg-[#EEF2FF] px-2.5 py-1 rounded">
            INTERACTIVE WORKSPACE DEMO
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#0F172A] mt-3 tracking-tight">
            Experience the workspace in action.
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Switch between views to see how projects, documents, and discussions stay connected. Move tasks between stages on the sprint board.
          </p>
        </div>

        {/* Master Workspace Interactive Container */}
        <div className="rounded-2xl border border-[#E4E2EB] bg-white shadow-workspace overflow-hidden flex flex-col min-h-[620px]">
          {/* Top Bar with View Selectors */}
          <div className="px-5 py-3.5 bg-white border-b border-[#E4E2EB] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-sm text-[#0F172A]">SyncSpace Explorer:</span>
              <span className="text-xs text-slate-500 font-mono bg-slate-100 px-2 py-0.5 rounded">
                Sprint 24 — Workspace
              </span>
            </div>

            {/* View Selector Tabs */}
            <div className="flex items-center bg-[#FAF9FC] p-1 rounded-xl border border-[#E4E2EB] self-start sm:self-auto text-xs font-medium">
              <button
                onClick={() => setActiveView('overview')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  activeView === 'overview'
                    ? 'bg-white text-[#4F46E5] shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <LayoutDashboard className="w-3.5 h-3.5" />
                <span>Overview</span>
              </button>

              <button
                onClick={() => setActiveView('board')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  activeView === 'board'
                    ? 'bg-white text-[#4F46E5] shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <CheckSquare className="w-3.5 h-3.5" />
                <span>Board ({tasks.length})</span>
              </button>

              <button
                onClick={() => setActiveView('docs')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  activeView === 'docs'
                    ? 'bg-white text-[#4F46E5] shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Docs (2)</span>
              </button>

              <button
                onClick={() => setActiveView('activity')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  activeView === 'activity'
                    ? 'bg-white text-[#4F46E5] shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                <span>Activity</span>
              </button>
            </div>
          </div>

          {/* Dynamic Content Area */}
          <div className="p-4 sm:p-6 bg-[#FAF9FC] flex-1 overflow-y-auto">
            {/* VIEW 1: OVERVIEW */}
            {activeView === 'overview' && (
              <div className="space-y-6">
                {/* 3 Metric Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-white border border-[#E4E2EB] shadow-xs">
                    <div className="text-xs text-slate-500 flex items-center justify-between">
                      <span>Sprint Velocity</span>
                      <Check className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div className="text-2xl font-bold font-display text-[#0F172A] mt-2">
                      84% Complete
                    </div>
                    <div className="text-[11px] text-emerald-600 font-semibold mt-1">
                      On track for Friday deployment
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-[#E4E2EB] shadow-xs">
                    <div className="text-xs text-slate-500 flex items-center justify-between">
                      <span>Active Teammates</span>
                      <Users className="w-4 h-4 text-[#4F46E5]" />
                    </div>
                    <div className="text-2xl font-bold font-display text-[#0F172A] mt-2">
                      5 Members
                    </div>
                    <div className="text-[11px] text-[#4F46E5] font-semibold mt-1">
                      3 live collaborating right now
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-[#E4E2EB] shadow-xs">
                    <div className="text-xs text-slate-500 flex items-center justify-between">
                      <span>Shared Documents</span>
                      <FileText className="w-4 h-4 text-[#D97706]" />
                    </div>
                    <div className="text-2xl font-bold font-display text-[#0F172A] mt-2">
                      18 Knowledge Docs
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium mt-1">
                      Updated 14 mins ago
                    </div>
                  </div>
                </div>

                {/* Priority items summary */}
                <div className="p-5 bg-white rounded-xl border border-[#E4E2EB] shadow-xs space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-[#E4E2EB]">
                    <span className="font-bold text-xs text-[#0F172A]">Sprint 24 Focus Priorities</span>
                    <button
                      onClick={() => setActiveView('board')}
                      className="text-xs text-[#4F46E5] font-semibold hover:underline"
                    >
                      Open Board →
                    </button>
                  </div>
                  <div className="divide-y divide-[#E4E2EB] text-xs">
                    {tasks.slice(0, 3).map(t => (
                      <div key={t.id} className="py-2.5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] text-slate-400">{t.id}</span>
                          <span className="font-semibold text-[#0F172A]">{t.title}</span>
                        </div>
                        <span className="text-[11px] text-slate-500">{t.assignee.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 2: KANBAN BOARD */}
            {activeView === 'board' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-500 pb-2">
                  <span>Click arrow buttons on any task card to transition stages:</span>
                  <span className="font-mono">{tasks.length} tasks</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
                  {columns.map(col => {
                    const colTasks = tasks.filter(t => t.column === col.id);
                    return (
                      <div key={col.id} className="bg-slate-100/70 p-3 rounded-xl border border-[#E4E2EB] space-y-3">
                        <div className="flex items-center justify-between text-xs font-bold text-[#0F172A] px-1">
                          <span className="flex items-center gap-1.5">
                            <span className={`w-2 h-2 rounded-full ${col.color}`} />
                            {col.label}
                          </span>
                          <span className="text-[10px] bg-white px-2 py-0.5 rounded-full border border-[#E4E2EB] font-mono">
                            {colTasks.length}
                          </span>
                        </div>

                        <div className="space-y-2.5">
                          {colTasks.map(task => (
                            <div
                              key={task.id}
                              className="p-3 bg-white rounded-lg border border-[#E4E2EB] shadow-xs space-y-2 hover:border-[#4F46E5]/40 transition-colors"
                            >
                              <div className="flex items-center justify-between text-[10px]">
                                <span className="font-mono text-slate-400 font-semibold">{task.id}</span>
                                <span className={`px-1.5 py-0.5 rounded font-bold font-mono ${
                                  task.priority === 'Urgent' ? 'bg-rose-50 text-rose-600' :
                                  task.priority === 'High' ? 'bg-indigo-50 text-indigo-600' :
                                  'bg-slate-100 text-slate-600'
                                }`}>
                                  {task.priority}
                                </span>
                              </div>

                              <p className="text-xs font-semibold text-[#0F172A] leading-snug">
                                {task.title}
                              </p>

                              <div className="flex items-center justify-between pt-1 border-t border-[#E4E2EB] text-[11px] text-slate-500">
                                <span className="flex items-center gap-1">
                                  <span className={`w-4 h-4 rounded-full ${task.assignee.bg} text-white font-bold flex items-center justify-center text-[8px]`}>
                                    {task.assignee.initials}
                                  </span>
                                  <span className="text-[10px] truncate max-w-[70px]">{task.assignee.name.split(' ')[0]}</span>
                                </span>

                                <span className="text-[10px] font-mono">{task.dueDate}</span>
                              </div>

                              {/* Interactive movement controls */}
                              <div className="flex items-center justify-between pt-1 text-[10px] text-slate-400">
                                {col.id !== 'backlog' ? (
                                  <button
                                    onClick={() => handleMoveTask(task.id, 'prev')}
                                    className="hover:text-slate-800 flex items-center gap-0.5 p-1"
                                    title="Move to previous stage"
                                  >
                                    <ArrowLeft className="w-3 h-3" />
                                    <span>Prev</span>
                                  </button>
                                ) : <span />}

                                {col.id !== 'done' && (
                                  <button
                                    onClick={() => handleMoveTask(task.id, 'next')}
                                    className="text-[#4F46E5] font-semibold hover:underline flex items-center gap-0.5 p-1 ml-auto"
                                    title="Move to next stage"
                                  >
                                    <span>Next</span>
                                    <ArrowRight className="w-3 h-3" />
                                  </button>
                                )}
                              </div>
                            </div>
                          ))}

                          {colTasks.length === 0 && (
                            <div className="p-4 text-center text-xs text-slate-400 border border-dashed border-[#E4E2EB] rounded-lg">
                              No tasks here
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* VIEW 3: DOCS & PLANNING */}
            {activeView === 'docs' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {/* Doc List Sidebar */}
                <div className="md:col-span-4 bg-white p-3 rounded-xl border border-[#E4E2EB] space-y-2">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1">
                    Knowledge Base Files
                  </div>
                  {SAMPLE_DOCUMENTS.map(doc => (
                    <button
                      key={doc.id}
                      onClick={() => setSelectedDocId(doc.id)}
                      className={`w-full text-left p-3 rounded-lg border transition-all ${
                        selectedDocId === doc.id
                          ? 'border-[#4F46E5] bg-[#EEF2FF]/40 text-[#4F46E5]'
                          : 'border-transparent hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <h4 className="text-xs font-bold truncate">{doc.title}</h4>
                      <div className="text-[10px] text-slate-400 mt-1 flex justify-between">
                        <span>{doc.author}</span>
                        <span>{doc.updatedAt}</span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Doc Reader Content */}
                <div className="md:col-span-8 bg-white p-6 rounded-xl border border-[#E4E2EB] shadow-xs space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E4E2EB]">
                    <div>
                      <h3 className="text-lg font-bold text-[#0F172A] font-display">{selectedDoc.title}</h3>
                      <p className="text-xs text-slate-500">By {selectedDoc.author} • {selectedDoc.readTime}</p>
                    </div>
                    <div className="flex gap-1.5">
                      {selectedDoc.tags.map(t => (
                        <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="prose prose-sm max-w-none text-xs text-slate-700 space-y-3 leading-relaxed">
                    <pre className="p-4 rounded-lg bg-[#FAF9FC] border border-[#E4E2EB] font-sans whitespace-pre-wrap">
                      {selectedDoc.content}
                    </pre>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 4: LIVE ACTIVITY */}
            {activeView === 'activity' && (
              <div className="bg-white p-6 rounded-xl border border-[#E4E2EB] shadow-xs space-y-4 max-w-2xl mx-auto">
                <div className="flex items-center justify-between pb-3 border-b border-[#E4E2EB]">
                  <span className="font-bold text-xs text-[#0F172A]">Workspace Activity Stream</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                <div className="space-y-3">
                  {SAMPLE_ACTIVITY.map(ev => (
                    <div key={ev.id} className="p-3 rounded-lg bg-[#FAF9FC] border border-[#E4E2EB] flex items-start gap-3 text-xs">
                      <span className={`w-6 h-6 rounded-full ${ev.user.bg} text-white font-bold flex items-center justify-center text-[9px] shrink-0 mt-0.5`}>
                        {ev.user.initials}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-[#0F172A]">
                          {ev.user.name} <span className="font-normal text-slate-500">{ev.action}</span> <span className="text-[#4F46E5] font-medium">{ev.target}</span>
                        </p>
                        {ev.detail && (
                          <p className="text-[11px] text-slate-400 mt-0.5">{ev.detail}</p>
                        )}
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono shrink-0">{ev.timeFormatted}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Bar */}
          <div className="px-5 py-2.5 bg-white border-t border-[#E4E2EB] flex items-center justify-between text-[11px] text-slate-400">
            <span>* Simulated interactive frontend workspace. Demonstrates live spatial states.</span>
            <span className="hidden sm:inline">SyncSpace v2.4 Prototype</span>
          </div>
        </div>
      </div>
    </section>
  );
};
