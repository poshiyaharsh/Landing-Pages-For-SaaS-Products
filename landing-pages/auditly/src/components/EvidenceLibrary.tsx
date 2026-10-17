import React, { useState } from 'react';
import { 
  FileText, 
  Search, 
  Upload, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  ExternalLink, 
  Download, 
  User, 
  Calendar,
  ShieldCheck,
  Plus
} from 'lucide-react';
import { EvidenceItem, EvidenceReviewStatus } from '../types';

interface EvidenceLibraryProps {
  evidence: EvidenceItem[];
  onOpenEvidenceModal: (evidence: EvidenceItem) => void;
  onUploadToast?: (filename: string) => void;
}

export const EvidenceLibrary: React.FC<EvidenceLibraryProps> = ({
  evidence,
  onOpenEvidenceModal,
  onUploadToast
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<EvidenceReviewStatus | 'All'>('All');
  const [typeFilter, setTypeFilter] = useState<string>('All');
  const [isSimulatingUpload, setIsSimulatingUpload] = useState(false);

  const filteredEvidence = evidence.filter(ev => {
    const matchesSearch = ev.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          ev.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          ev.linkedControlTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          ev.owner.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'All' || ev.reviewStatus === statusFilter;
    const matchesType = typeFilter === 'All' || ev.fileType === typeFilter;
    return matchesSearch && matchesStatus && matchesType;
  });

  const statusStyles: Record<EvidenceReviewStatus, { bg: string; text: string; border: string }> = {
    'Approved': { bg: 'bg-[#E6F6F0]', text: 'text-[#17865C]', border: 'border-[#17865C]/30' },
    'Pending Review': { bg: 'bg-[#EAF1FF]', text: 'text-[#3569D4]', border: 'border-[#3569D4]/30' },
    'Expiring Soon': { bg: 'bg-[#FDF5E8]', text: 'text-[#C17A18]', border: 'border-[#C17A18]/30' },
  };

  const fileTypeIcons: Record<string, { label: string; color: string }> = {
    'pdf': { label: 'PDF', color: 'bg-[#EAF1FF] text-[#3569D4]' },
    'docx': { label: 'DOC', color: 'bg-[#E6F6F0] text-[#17865C]' },
    'xlsx': { label: 'XLS', color: 'bg-[#FDF5E8] text-[#C17A18]' },
    'json': { label: 'JSON', color: 'bg-slate-200 text-slate-800' },
  };

  const handleSimulatedUpload = () => {
    setIsSimulatingUpload(true);
    setTimeout(() => {
      setIsSimulatingUpload(false);
      if (onUploadToast) {
        onUploadToast('SOC2_Annual_Penetration_Test_2026.pdf uploaded and mapped to control SE-01.');
      }
    }, 1200);
  };

  return (
    <section id="resources" className="py-20 bg-white border-b border-[#DFE6EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold text-[#3569D4] uppercase tracking-wider font-mono bg-[#EAF1FF] px-2.5 py-1 rounded">
            AUDIT EVIDENCE REPOSITORY
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#142033] mt-3 tracking-tight">
            Every requirement, backed by evidence.
          </h2>
          <p className="text-base text-[#64748B] mt-3 leading-relaxed">
            Keep supporting documents, system configuration exports, policies, and review notes organized and easy to locate for external auditors.
          </p>
        </div>

        {/* Toolbar: Search, Filters, and Simulated Upload Action */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search evidence files by title, control ID, or owner..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-[#DFE6EF] bg-[#F6F8FB] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3569D4]/20 focus:border-[#3569D4]"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="px-3 py-2 text-xs rounded-lg border border-[#DFE6EF] bg-[#F6F8FB] focus:bg-white font-medium text-[#142033]"
            >
              <option value="All">All Verification Statuses</option>
              <option value="Approved">Approved</option>
              <option value="Pending Review">Pending Review</option>
              <option value="Expiring Soon">Expiring Soon</option>
            </select>

            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-3 py-2 text-xs rounded-lg border border-[#DFE6EF] bg-[#F6F8FB] focus:bg-white font-medium text-[#142033]"
            >
              <option value="All">All Formats</option>
              <option value="pdf">PDF Documents</option>
              <option value="docx">Word Policies</option>
              <option value="xlsx">Spreadsheets</option>
              <option value="json">Telemetry / JSON</option>
            </select>

            <button
              onClick={handleSimulatedUpload}
              disabled={isSimulatingUpload}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#3569D4] hover:bg-[#2853B8] rounded-lg shadow-sm transition-colors flex items-center gap-1.5"
            >
              <Upload className={`w-3.5 h-3.5 ${isSimulatingUpload ? 'animate-spin' : ''}`} />
              <span>{isSimulatingUpload ? 'Validating...' : 'Upload Evidence Artifact'}</span>
            </button>
          </div>
        </div>

        {/* Evidence Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredEvidence.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenEvidenceModal(item)}
              className="p-5 rounded-xl border border-[#DFE6EF] bg-[#F6F8FB] hover:bg-white hover:border-[#3569D4]/50 hover:shadow-card transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#DFE6EF]">
                  <div className="flex items-center gap-2">
                    <span className={`w-7 h-7 rounded flex items-center justify-center font-mono text-[10px] font-bold ${fileTypeIcons[item.fileType].color}`}>
                      {fileTypeIcons[item.fileType].label}
                    </span>
                    <span className="font-mono text-xs font-semibold text-[#142C4E]">
                      {item.id}
                    </span>
                  </div>

                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold border ${statusStyles[item.reviewStatus].bg} ${statusStyles[item.reviewStatus].text} ${statusStyles[item.reviewStatus].border}`}>
                    {item.reviewStatus}
                  </span>
                </div>

                {/* Title & snippet */}
                <h3 className="text-sm font-bold text-[#142033] font-mono group-hover:text-[#3569D4] transition-colors truncate">
                  {item.title}
                </h3>
                <p className="text-xs text-[#64748B] mt-1.5 line-clamp-2 leading-relaxed">
                  {item.summary}
                </p>

                {/* Linked control pill */}
                <div className="mt-3.5 p-2 rounded bg-white border border-[#DFE6EF] text-[11px] flex items-center justify-between">
                  <span className="text-[#64748B] flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#3569D4]" />
                    <span>Control:</span>
                  </span>
                  <span className="font-mono font-semibold text-[#142C4E]">
                    {item.linkedControlId}
                  </span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-4 pt-3 border-t border-[#DFE6EF] flex items-center justify-between text-[11px] text-[#64748B]">
                <div className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  <span className="truncate max-w-[110px]">{item.owner}</span>
                </div>

                <div className="flex items-center gap-1 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{item.uploadDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Evidence Integrity Disclaimer */}
        <div className="mt-10 p-4 bg-[#F6F8FB] border border-[#DFE6EF] rounded-xl text-center text-xs text-[#64748B]">
          <strong>Evidence Standard Notice:</strong> Presence of an uploaded file within Auditly indicates internal process documentation and does not alone establish external certification or audit sufficiency.
        </div>
      </div>
    </section>
  );
};
