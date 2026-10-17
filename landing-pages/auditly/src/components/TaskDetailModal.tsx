import React, { useState } from 'react';
import { X, CheckSquare, Clock, AlertTriangle, Calendar, User, ShieldCheck } from 'lucide-react';
import { RemediationTask, TaskColumn, TaskPriority } from '../types';

interface TaskDetailModalProps {
  task: RemediationTask | null;
  isOpen: boolean;
  onClose: () => void;
  onUpdateTask: (taskId: string, updatedFields: Partial<RemediationTask>) => void;
}

export const TaskDetailModal: React.FC<TaskDetailModalProps> = ({
  task,
  isOpen,
  onClose,
  onUpdateTask
}) => {
  if (!isOpen || !task) return null;

  const [status, setStatus] = useState<TaskColumn>(task.status);
  const [priority, setPriority] = useState<TaskPriority>(task.priority);
  const [owner, setOwner] = useState(task.owner);
  const [notes, setNotes] = useState(task.notes || '');

  const priorityBadges: Record<TaskPriority, { bg: string; text: string; border: string }> = {
    'Critical': { bg: 'bg-[#FBEAEA]', text: 'text-[#C74747]', border: 'border-[#C74747]/30' },
    'High': { bg: 'bg-[#FEF3C7]', text: 'text-[#D97706]', border: 'border-[#D97706]/30' },
    'Medium': { bg: 'bg-[#FDF5E8]', text: 'text-[#C17A18]', border: 'border-[#C17A18]/30' },
    'Low': { bg: 'bg-slate-100', text: 'text-slate-600', border: 'border-slate-300' },
  };

  const handleSave = () => {
    onUpdateTask(task.id, {
      status,
      priority,
      owner,
      notes
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#142033]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white rounded-xl shadow-2xl border border-[#DFE6EF] overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-[#F6F8FB] border-b border-[#DFE6EF] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[#142C4E] text-white">
              {task.id}
            </span>
            <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold border ${priorityBadges[priority].bg} ${priorityBadges[priority].text} ${priorityBadges[priority].border}`}>
              {priority} Priority
            </span>
            {task.isOverdue && status !== 'completed' && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-[#FBEAEA] text-[#C74747] border border-[#C74747]/30">
                <AlertTriangle className="w-3 h-3" />
                Overdue
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-md text-[#64748B] hover:text-[#142033] hover:bg-slate-200/50 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          <div>
            <h3 className="text-lg font-display font-bold text-[#142033]">{task.title}</h3>
            <div className="flex items-center gap-2 mt-2 text-xs text-[#64748B]">
              <ShieldCheck className="w-4 h-4 text-[#3569D4]" />
              <span>Linked to Control: <strong className="font-mono text-[#3569D4]">{task.linkedControlId}</strong> — {task.linkedControlName}</span>
            </div>
          </div>

          {/* Status & Priority Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-[#F6F8FB] rounded-lg border border-[#DFE6EF]">
            <div>
              <label className="block text-xs font-semibold text-[#142033] mb-1.5">Remediation Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as TaskColumn)}
                className="w-full px-3 py-2 text-sm rounded-lg border border-[#DFE6EF] bg-white focus:outline-none focus:ring-2 focus:ring-[#3569D4]/20 focus:border-[#3569D4] font-medium"
              >
                <option value="todo">To Do</option>
                <option value="in_progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#142033] mb-1.5">Priority</label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value as TaskPriority)}
                className="w-full px-3 py-2 text-sm rounded-lg border border-[#DFE6EF] bg-white focus:outline-none focus:ring-2 focus:ring-[#3569D4]/20 focus:border-[#3569D4]"
              >
                <option value="Critical">Critical</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#142033] mb-1.5">Assigned Owner</label>
              <select
                value={owner}
                onChange={(e) => setOwner(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg border border-[#DFE6EF] bg-white focus:outline-none focus:ring-2 focus:ring-[#3569D4]/20 focus:border-[#3569D4]"
              >
                <option value="Marcus Vance">Marcus Vance (Compliance Mgr)</option>
                <option value="Elena Rostova">Elena Rostova (DevOps / SRE)</option>
                <option value="Sarah Jenkins">Sarah Jenkins (Admin)</option>
                <option value="David Chen">David Chen (Internal Auditor)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#142033] mb-1.5">Target Due Date</label>
              <div className="px-3 py-2 text-sm rounded-lg border border-[#DFE6EF] bg-slate-100 font-mono text-[#142033] flex items-center justify-between">
                <span>{task.dueDate}</span>
                <Calendar className="w-4 h-4 text-slate-400" />
              </div>
            </div>
          </div>

          {/* Action Notes */}
          <div>
            <label className="block text-xs font-semibold text-[#142033] mb-1.5">Remediation Notes & Outcome</label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-lg border border-[#DFE6EF] bg-white focus:outline-none focus:ring-2 focus:ring-[#3569D4]/20 focus:border-[#3569D4] leading-relaxed text-xs"
              placeholder="Record task status updates, pull requests, or auditor confirmation..."
            />
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#F6F8FB] border-t border-[#DFE6EF] flex items-center justify-end gap-3 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-[#64748B] hover:text-[#142033] transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#3569D4] hover:bg-[#2853B8] rounded-lg shadow-sm transition-colors"
          >
            Save Task Changes
          </button>
        </div>
      </div>
    </div>
  );
};
