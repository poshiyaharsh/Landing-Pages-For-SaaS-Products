import React, { useState } from 'react';
import { 
  CheckSquare, 
  AlertTriangle, 
  Clock, 
  CheckCircle2, 
  User, 
  Calendar, 
  ArrowRight, 
  ArrowLeft,
  Filter,
  ShieldCheck,
  Plus
} from 'lucide-react';
import { RemediationTask, TaskColumn, TaskPriority } from '../types';

interface RemediationBoardProps {
  tasks: RemediationTask[];
  onOpenTaskModal: (task: RemediationTask) => void;
  onMoveTaskStatus: (taskId: string, targetStatus: TaskColumn) => void;
}

export const RemediationBoard: React.FC<RemediationBoardProps> = ({
  tasks,
  onOpenTaskModal,
  onMoveTaskStatus
}) => {
  const [selectedOwner, setSelectedOwner] = useState<string>('All');
  const [selectedPriority, setSelectedPriority] = useState<string>('All');

  const filteredTasks = tasks.filter(t => {
    const matchesOwner = selectedOwner === 'All' || t.owner === selectedOwner;
    const matchesPriority = selectedPriority === 'All' || t.priority === selectedPriority;
    return matchesOwner && matchesPriority;
  });

  const todoTasks = filteredTasks.filter(t => t.status === 'todo');
  const inProgressTasks = filteredTasks.filter(t => t.status === 'in_progress');
  const completedTasks = filteredTasks.filter(t => t.status === 'completed');

  const priorityStyles: Record<TaskPriority, { bg: string; text: string; border: string }> = {
    'Critical': { bg: 'bg-[#FBEAEA]', text: 'text-[#C74747]', border: 'border-[#C74747]/40' },
    'High': { bg: 'bg-[#FEF3C7]', text: 'text-[#D97706]', border: 'border-[#D97706]/40' },
    'Medium': { bg: 'bg-[#FDF5E8]', text: 'text-[#C17A18]', border: 'border-[#C17A18]/40' },
    'Low': { bg: 'bg-slate-100', text: 'text-slate-600', border: 'border-slate-300' },
  };

  const renderTaskCard = (task: RemediationTask) => (
    <div
      key={task.id}
      onClick={() => onOpenTaskModal(task)}
      className="p-4 rounded-xl border border-[#DFE6EF] bg-white hover:border-[#3569D4]/50 hover:shadow-card transition-all cursor-pointer group space-y-3"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] font-bold text-[#142C4E]">
          {task.id}
        </span>
        <div className="flex items-center gap-1.5">
          <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border ${priorityStyles[task.priority].bg} ${priorityStyles[task.priority].text} ${priorityStyles[task.priority].border}`}>
            {task.priority} Priority
          </span>
          {task.isOverdue && task.status !== 'completed' && (
            <span className="inline-flex items-center gap-0.5 text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#FBEAEA] text-[#C74747] border border-[#C74747]/40">
              <AlertTriangle className="w-3 h-3" />
              OVERDUE
            </span>
          )}
        </div>
      </div>

      <h4 className="text-xs font-bold text-[#142033] group-hover:text-[#3569D4] transition-colors leading-snug">
        {task.title}
      </h4>

      <div className="p-2 rounded bg-[#F6F8FB] border border-[#DFE6EF] text-[11px] flex items-center justify-between text-[#64748B]">
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-3 h-3 text-[#3569D4]" />
          <span>Control:</span>
        </span>
        <span className="font-mono font-semibold text-[#142C4E]">
          {task.linkedControlId}
        </span>
      </div>

      {/* Footer & Quick State Buttons */}
      <div className="flex items-center justify-between pt-2 border-t border-[#DFE6EF] text-[11px] text-[#64748B]">
        <div className="flex items-center gap-1">
          <User className="w-3 h-3 text-slate-400" />
          <span className="truncate max-w-[90px]">{task.owner}</span>
        </div>

        <div className="flex items-center gap-1 font-mono">
          <Calendar className="w-3 h-3 text-slate-400" />
          <span className={task.isOverdue && task.status !== 'completed' ? 'text-[#C74747] font-semibold' : ''}>
            {task.dueDate}
          </span>
        </div>
      </div>

      {/* Movement actions */}
      <div className="flex items-center justify-between pt-1 text-[11px]">
        {task.status !== 'todo' ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMoveTaskStatus(task.id, task.status === 'completed' ? 'in_progress' : 'todo');
            }}
            className="text-slate-500 hover:text-[#142033] flex items-center gap-0.5"
            title="Move back"
          >
            <ArrowLeft className="w-3 h-3" />
            <span>Back</span>
          </button>
        ) : <span />}

        {task.status !== 'completed' && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMoveTaskStatus(task.id, task.status === 'todo' ? 'in_progress' : 'completed');
            }}
            className="text-[#3569D4] hover:underline font-semibold flex items-center gap-0.5"
          >
            <span>{task.status === 'todo' ? 'Start Task' : 'Mark Completed'}</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        )}
      </div>
    </div>
  );

  return (
    <section id="remediation" className="py-20 bg-white border-b border-[#DFE6EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold text-[#3569D4] uppercase tracking-wider font-mono bg-[#EAF1FF] px-2.5 py-1 rounded">
            ACTION ITEM MANAGEMENT
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#142033] mt-3 tracking-tight">
            Turn findings into forward progress.
          </h2>
          <p className="text-base text-[#64748B] mt-3 leading-relaxed">
            Convert control gaps and risk assessment outcomes into structured tasks with designated owners, explicit due dates, and tracked SLAs.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 p-4 bg-[#F6F8FB] rounded-xl border border-[#DFE6EF]">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#142C4E]">
              <Filter className="w-4 h-4 text-[#3569D4]" />
              <span>Filter Kanban:</span>
            </div>

            <select
              value={selectedOwner}
              onChange={(e) => setSelectedOwner(e.target.value)}
              className="px-3 py-1.5 text-xs rounded-lg border border-[#DFE6EF] bg-white font-medium text-[#142033]"
            >
              <option value="All">All Assignees</option>
              <option value="Marcus Vance">Marcus Vance</option>
              <option value="Elena Rostova">Elena Rostova</option>
              <option value="Sarah Jenkins">Sarah Jenkins</option>
              <option value="David Chen">David Chen</option>
            </select>

            <select
              value={selectedPriority}
              onChange={(e) => setSelectedPriority(e.target.value)}
              className="px-3 py-1.5 text-xs rounded-lg border border-[#DFE6EF] bg-white font-medium text-[#142033]"
            >
              <option value="All">All Priorities</option>
              <option value="Critical">Critical</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <div className="text-xs text-[#64748B] font-mono">
            {filteredTasks.length} tasks in board
          </div>
        </div>

        {/* 3-Column Kanban Board */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1: To Do */}
          <div className="bg-[#F6F8FB] p-4 rounded-2xl border border-[#DFE6EF] flex flex-col">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#DFE6EF]">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#64748B]" />
                <h3 className="text-sm font-bold text-[#142033]">To Do</h3>
              </div>
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-white border border-[#DFE6EF] text-[#142C4E]">
                {todoTasks.length}
              </span>
            </div>

            <div className="space-y-3 flex-1">
              {todoTasks.map(renderTaskCard)}
              {todoTasks.length === 0 && (
                <div className="p-8 text-center text-xs text-[#64748B] border border-dashed border-[#DFE6EF] rounded-xl bg-white/50">
                  No pending action items in this queue.
                </div>
              )}
            </div>
          </div>

          {/* Column 2: In Progress */}
          <div className="bg-[#F6F8FB] p-4 rounded-2xl border border-[#DFE6EF] flex flex-col">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#DFE6EF]">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#3569D4]" />
                <h3 className="text-sm font-bold text-[#142033]">In Progress</h3>
              </div>
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-white border border-[#DFE6EF] text-[#3569D4]">
                {inProgressTasks.length}
              </span>
            </div>

            <div className="space-y-3 flex-1">
              {inProgressTasks.map(renderTaskCard)}
              {inProgressTasks.length === 0 && (
                <div className="p-8 text-center text-xs text-[#64748B] border border-dashed border-[#DFE6EF] rounded-xl bg-white/50">
                  No tasks currently in progress.
                </div>
              )}
            </div>
          </div>

          {/* Column 3: Completed */}
          <div className="bg-[#F6F8FB] p-4 rounded-2xl border border-[#DFE6EF] flex flex-col">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#DFE6EF]">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#17865C]" />
                <h3 className="text-sm font-bold text-[#142033]">Completed</h3>
              </div>
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-white border border-[#DFE6EF] text-[#17865C]">
                {completedTasks.length}
              </span>
            </div>

            <div className="space-y-3 flex-1">
              {completedTasks.map(renderTaskCard)}
              {completedTasks.length === 0 && (
                <div className="p-8 text-center text-xs text-[#64748B] border border-dashed border-[#DFE6EF] rounded-xl bg-white/50">
                  No completed tasks yet.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
