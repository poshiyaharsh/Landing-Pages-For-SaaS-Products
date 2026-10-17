import React, { useState } from 'react';
import { X, ShieldCheck, UserCheck, Calendar, FileText, CheckCircle2, Clock, AlertTriangle } from 'lucide-react';
import { ControlItem, ControlStatus } from '../types';

interface ControlDetailModalProps {
  control: ControlItem | null;
  isOpen: boolean;
  onClose: () => void;
  onUpdateStatus: (controlId: string, newStatus: ControlStatus, newOwner?: string) => void;
  onViewEvidence?: (evidenceId: string) => void;
}

export const ControlDetailModal: React.FC<ControlDetailModalProps> = ({
  control,
  isOpen,
  onClose,
  onUpdateStatus,
  onViewEvidence
}) => {
  if (!isOpen || !control) return null;

  const [currentStatus, setCurrentStatus] = useState<ControlStatus>(control.status);
  const [currentOwner, setCurrentOwner] = useState(control.owner);
  const [hasChanges, setHasChanges] = useState(false);

  const statusColors: Record<ControlStatus, { bg: string; text: string; border: string; icon: React.ReactNode }> = {
    'Implemented': {
      bg: 'bg-[#E6F6F0]',
      text: 'text-[#17865C]',
      border: 'border-[#17865C]/30',
      icon: <CheckCircle2 className="w-4 h-4 text-[#17865C]" />
    },
    'In Review': {
      bg: 'bg-[#EAF1FF]',
      text: 'text-[#3569D4]',
      border: 'border-[#3569D4]/30',
      icon: <Clock className="w-4 h-4 text-[#3569D4]" />
    },
    'Needs Attention': {
      bg: 'bg-[#FDF5E8]',
      text: 'text-[#C17A18]',
      border: 'border-[#C17A18]/30',
      icon: <AlertTriangle className="w-4 h-4 text-[#C17A18]" />
    },
    'Not Started': {
      bg: 'bg-slate-100',
      text: 'text-slate-600',
      border: 'border-slate-300',
      icon: <Clock className="w-4 h-4 text-slate-500" />
    }
  };

  const handleSave = () => {
    onUpdateStatus(control.id, currentStatus, currentOwner);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#142033]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-[#DFE6EF] overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-[#F6F8FB] border-b border-[#DFE6EF] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[#142C4E] text-white">
              {control.id}
            </span>
            <span className="text-xs font-medium px-2 py-0.5 rounded bg-slate-200 text-slate-700">
              {control.category}
            </span>
            <span className="text-xs text-[#64748B]">
              Framework: <strong className="text-[#142033]">{control.framework}</strong>
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-md text-[#64748B] hover:text-[#142033] hover:bg-slate-200/50 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          <div>
            <h3 className="text-xl font-display font-bold text-[#142033]">{control.title}</h3>
            <p className="text-sm text-[#64748B] mt-2 leading-relaxed">{control.description}</p>
          </div>

          {control.guidance && (
            <div className="p-3.5 bg-[#EAF1FF]/50 border border-[#3569D4]/20 rounded-lg text-xs text-[#142C4E]">
              <strong className="font-semibold block mb-1 text-[#3569D4]">Implementation Guidance:</strong>
              {control.guidance}
            </div>
          )}

          {/* Operational Controls & Status Select */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-[#F6F8FB] rounded-lg border border-[#DFE6EF]">
            <div>
              <label className="block text-xs font-semibold text-[#142033] mb-1.5">Control Status</label>
              <select
                value={currentStatus}
                onChange={(e) => {
                  setCurrentStatus(e.target.value as ControlStatus);
                  setHasChanges(true);
                }}
                className="w-full px-3 py-2 text-sm rounded-lg border border-[#DFE6EF] bg-white focus:outline-none focus:ring-2 focus:ring-[#3569D4]/20 focus:border-[#3569D4] font-medium"
              >
                <option value="Implemented">Implemented</option>
                <option value="In Review">In Review</option>
                <option value="Needs Attention">Needs Attention</option>
                <option value="Not Started">Not Started</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#142033] mb-1.5">Assigned Owner</label>
              <select
                value={currentOwner}
                onChange={(e) => {
                  setCurrentOwner(e.target.value);
                  setHasChanges(true);
                }}
                className="w-full px-3 py-2 text-sm rounded-lg border border-[#DFE6EF] bg-white focus:outline-none focus:ring-2 focus:ring-[#3569D4]/20 focus:border-[#3569D4]"
              >
                <option value="Sarah Jenkins">Sarah Jenkins (Admin)</option>
                <option value="Marcus Vance">Marcus Vance (Compliance Mgr)</option>
                <option value="Elena Rostova">Elena Rostova (DevOps / SRE)</option>
                <option value="David Chen">David Chen (Internal Auditor)</option>
              </select>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#64748B]">
              <Calendar className="w-4 h-4 text-slate-400" />
              <span>Last Reviewed: <strong className="text-[#142033] font-mono">{control.lastReviewed}</strong></span>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#64748B]">
              <Calendar className="w-4 h-4 text-slate-400" />
              <span>Next Review: <strong className="text-[#142033] font-mono">{control.nextReview}</strong></span>
            </div>
          </div>

          {/* Linked Evidence Section */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <h4 className="text-sm font-semibold text-[#142033] flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#3569D4]" />
                <span>Linked Evidence Artifacts ({control.linkedEvidence.length})</span>
              </h4>
            </div>

            {control.linkedEvidence.length > 0 ? (
              <div className="space-y-2">
                {control.linkedEvidence.map((evId) => (
                  <div
                    key={evId}
                    className="flex items-center justify-between p-3 rounded-lg border border-[#DFE6EF] bg-white hover:border-[#3569D4]/40 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded bg-[#EAF1FF] text-[#3569D4] flex items-center justify-center font-mono text-xs font-bold">
                        PDF
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#142033] font-mono">{evId}</div>
                        <div className="text-[11px] text-[#64748B]">Verified control evidence artifact</div>
                      </div>
                    </div>
                    {onViewEvidence && (
                      <button
                        onClick={() => onViewEvidence(evId)}
                        className="text-xs text-[#3569D4] hover:underline font-medium"
                      >
                        Preview Artifact
                      </button>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 bg-slate-50 border border-dashed border-[#DFE6EF] rounded-lg text-center text-xs text-[#64748B]">
                No evidence documents currently attached to this control.
              </div>
            )}
          </div>

          {/* Compliance Disclaimer Notice */}
          <div className="p-3 bg-[#F6F8FB] border border-[#DFE6EF] rounded-lg text-[11px] text-[#64748B]">
            <strong>Compliance Note:</strong> Control status reflects internal operational documentation and self-assessment records. Official compliance determination requires formal evaluation by accredited external auditors.
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#F6F8FB] border-t border-[#DFE6EF] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#64748B]">Current:</span>
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${statusColors[control.status].bg} ${statusColors[control.status].text} ${statusColors[control.status].border}`}>
              {statusColors[control.status].icon}
              {control.status}
            </span>
          </div>

          <div className="flex items-center gap-3">
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
              Save Control Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
