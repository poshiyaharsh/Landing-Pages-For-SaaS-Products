import React from 'react';
import { X, FileText, Download, CheckCircle2, AlertCircle, Clock, ShieldCheck, Hash, User, Calendar } from 'lucide-react';
import { EvidenceItem } from '../types';

interface EvidencePreviewModalProps {
  evidence: EvidenceItem | null;
  isOpen: boolean;
  onClose: () => void;
  onDownloadToast?: (title: string) => void;
}

export const EvidencePreviewModal: React.FC<EvidencePreviewModalProps> = ({
  evidence,
  isOpen,
  onClose,
  onDownloadToast
}) => {
  if (!isOpen || !evidence) return null;

  const handleDownload = () => {
    if (onDownloadToast) {
      onDownloadToast(`Downloaded copy of ${evidence.title}`);
    }
  };

  const statusBadge = {
    'Approved': {
      bg: 'bg-[#E6F6F0]',
      text: 'text-[#17865C]',
      border: 'border-[#17865C]/30',
      icon: <CheckCircle2 className="w-3.5 h-3.5 text-[#17865C]" />
    },
    'Pending Review': {
      bg: 'bg-[#EAF1FF]',
      text: 'text-[#3569D4]',
      border: 'border-[#3569D4]/30',
      icon: <Clock className="w-3.5 h-3.5 text-[#3569D4]" />
    },
    'Expiring Soon': {
      bg: 'bg-[#FDF5E8]',
      text: 'text-[#C17A18]',
      border: 'border-[#C17A18]/30',
      icon: <AlertCircle className="w-3.5 h-3.5 text-[#C17A18]" />
    }
  }[evidence.reviewStatus];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#142033]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-[#DFE6EF] overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-[#F6F8FB] border-b border-[#DFE6EF] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[#3569D4] text-white">
              {evidence.id}
            </span>
            <span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-200 text-slate-700 uppercase">
              {evidence.fileType}
            </span>
            <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${statusBadge.bg} ${statusBadge.text} ${statusBadge.border}`}>
              {statusBadge.icon}
              {evidence.reviewStatus}
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

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          <div>
            <h3 className="text-xl font-display font-bold text-[#142033] font-mono">{evidence.title}</h3>
            <p className="text-xs text-[#64748B] mt-1">Version {evidence.version} • File size: {evidence.fileSize}</p>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-[#F6F8FB] rounded-lg border border-[#DFE6EF] text-xs">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-slate-400" />
              <span className="text-[#64748B]">Document Owner:</span>
              <strong className="text-[#142033]">{evidence.owner}</strong>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-slate-400" />
              <span className="text-[#64748B]">Upload Date:</span>
              <strong className="text-[#142033] font-mono">{evidence.uploadDate}</strong>
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-slate-400" />
              <span className="text-[#64748B]">Linked Control:</span>
              <strong className="text-[#3569D4] font-mono">{evidence.linkedControlId}</strong>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-slate-400" />
              <span className="text-[#64748B]">Expiry / Review:</span>
              <strong className="text-[#142033] font-mono">{evidence.expirationDate || 'N/A'}</strong>
            </div>
          </div>

          {/* Document Content Simulation */}
          <div className="border border-[#DFE6EF] rounded-lg p-5 bg-white shadow-inner">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#DFE6EF]">
              <span className="text-xs font-semibold text-[#142C4E] flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-[#3569D4]" />
                Document Synopsis & Verification
              </span>
              <span className="text-[11px] font-mono text-[#64748B] flex items-center gap-1">
                <Hash className="w-3 h-3" />
                SHA-256: 8f9b...4c21
              </span>
            </div>

            <p className="text-xs text-[#142033] leading-relaxed">
              {evidence.summary}
            </p>

            <div className="mt-4 p-3 bg-[#EEF2F7] rounded text-[11px] text-[#64748B] space-y-1">
              <div><strong>Target Control:</strong> {evidence.linkedControlTitle}</div>
              <div><strong>Integrity Check:</strong> Verified cryptographic signature matches organization repository baseline.</div>
            </div>
          </div>

          <div className="p-3 bg-[#F6F8FB] border border-[#DFE6EF] rounded-lg text-[11px] text-[#64748B]">
            <strong>Evidence Disclaimer:</strong> Demonstration artifact for prototype review. Presence of documentation demonstrates internal tracking and does not alone establish external certification.
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#F6F8FB] border-t border-[#DFE6EF] flex items-center justify-between shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-[#64748B] hover:text-[#142033] transition-colors"
          >
            Close
          </button>
          <button
            onClick={handleDownload}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#142C4E] hover:bg-[#0D1D35] rounded-lg shadow-sm transition-colors flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Artifact Copy</span>
          </button>
        </div>
      </div>
    </div>
  );
};
