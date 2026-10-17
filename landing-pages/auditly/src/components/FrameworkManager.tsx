import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Search, 
  Filter, 
  ExternalLink, 
  FileText, 
  User, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  AlertTriangle,
  ChevronRight,
  Layers
} from 'lucide-react';
import { ControlItem, ControlCategory, ControlStatus } from '../types';

interface FrameworkManagerProps {
  controls: ControlItem[];
  onOpenControlModal: (control: ControlItem) => void;
  onOpenEvidenceModal: (evidenceId: string) => void;
}

export const FrameworkManager: React.FC<FrameworkManagerProps> = ({
  controls,
  onOpenControlModal,
  onOpenEvidenceModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ControlCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: (ControlCategory | 'All')[] = [
    'All',
    'Security',
    'Availability',
    'Confidentiality',
    'Processing Integrity',
    'Privacy',
  ];

  const filteredControls = controls.filter(c => {
    const matchesCat = selectedCategory === 'All' || c.category === selectedCategory;
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const statusStyles: Record<ControlStatus, { bg: string; text: string; border: string }> = {
    'Implemented': { bg: 'bg-[#E6F6F0]', text: 'text-[#17865C]', border: 'border-[#17865C]/30' },
    'In Review': { bg: 'bg-[#EAF1FF]', text: 'text-[#3569D4]', border: 'border-[#3569D4]/30' },
    'Needs Attention': { bg: 'bg-[#FDF5E8]', text: 'text-[#C17A18]', border: 'border-[#C17A18]/30' },
    'Not Started': { bg: 'bg-slate-100', text: 'text-slate-600', border: 'border-slate-300' },
  };

  return (
    <section id="frameworks" className="py-20 bg-white border-b border-[#DFE6EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-semibold text-[#3569D4] uppercase tracking-wider font-mono bg-[#EAF1FF] px-2.5 py-1 rounded">
            CONTROL REPOSITORY & MAPPING
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#142033] mt-3 tracking-tight">
            Turn complex requirements into manageable work.
          </h2>
          <p className="text-base text-[#64748B] mt-3 leading-relaxed">
            Break down broad audit criteria into discrete operational controls with clear ownership, linked proof, and scheduled review dates.
          </p>
        </div>

        {/* Category Pills & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-6">
          <div className="flex overflow-x-auto pb-2 md:pb-0 gap-1.5 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#142C4E] text-white shadow-sm'
                    : 'bg-[#F6F8FB] text-[#64748B] hover:text-[#142033] hover:bg-[#EEF2F7]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Filter by control ID or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-[#DFE6EF] bg-[#F6F8FB] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3569D4]/20 focus:border-[#3569D4]"
            />
          </div>
        </div>

        {/* Controls Grid / List */}
        <div className="space-y-3">
          {filteredControls.map((control) => (
            <div
              key={control.id}
              onClick={() => onOpenControlModal(control)}
              className="p-5 rounded-xl border border-[#DFE6EF] bg-[#F6F8FB] hover:bg-white hover:border-[#3569D4]/50 hover:shadow-card transition-all cursor-pointer group flex flex-col lg:flex-row lg:items-center justify-between gap-4"
            >
              {/* Left Column: ID, Category, Title, Description */}
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#142C4E] text-white">
                    {control.id}
                  </span>
                  <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wide">
                    {control.category} Criteria
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">
                    ({control.framework})
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#142033] group-hover:text-[#3569D4] transition-colors">
                  {control.title}
                </h3>

                <p className="text-xs text-[#64748B] leading-relaxed max-w-3xl">
                  {control.description}
                </p>

                {/* Evidence Artifacts Tags */}
                {control.linkedEvidence.length > 0 && (
                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-[11px] text-[#64748B]">Evidence:</span>
                    {control.linkedEvidence.map((ev) => (
                      <span 
                        key={ev}
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenEvidenceModal(ev);
                        }}
                        className="font-mono text-[11px] bg-white border border-[#DFE6EF] hover:border-[#3569D4] text-[#3569D4] px-2 py-0.5 rounded flex items-center gap-1 font-medium"
                      >
                        <FileText className="w-3 h-3" />
                        {ev}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: Metadata & Quick Action */}
              <div className="flex items-center justify-between lg:justify-end gap-6 pt-3 lg:pt-0 border-t lg:border-t-0 border-[#DFE6EF] shrink-0 text-xs">
                <div>
                  <div className="text-[10px] text-[#64748B] uppercase">Responsible Owner</div>
                  <div className="font-semibold text-[#142033] flex items-center gap-1.5 mt-0.5">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    <span>{control.owner}</span>
                  </div>
                </div>

                <div>
                  <div className="text-[10px] text-[#64748B] uppercase">Next Review</div>
                  <div className="font-mono text-[#142033] flex items-center gap-1 mt-0.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{control.nextReview}</span>
                  </div>
                </div>

                <div>
                  <div className="text-[10px] text-[#64748B] uppercase mb-1">Status</div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${statusStyles[control.status].bg} ${statusStyles[control.status].text} ${statusStyles[control.status].border}`}>
                    {control.status}
                  </span>
                </div>

                <div className="hidden sm:block">
                  <span className="p-2 rounded-lg bg-white border border-[#DFE6EF] text-[#64748B] group-hover:text-[#3569D4] group-hover:border-[#3569D4] inline-flex items-center justify-center transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer footer */}
        <div className="mt-8 p-4 bg-[#F6F8FB] border border-[#DFE6EF] rounded-xl text-center text-xs text-[#64748B]">
          <strong>Audit Readiness Notice:</strong> Displayed controls reflect illustrative operational criteria based on standard frameworks. Auditly assists in internal process management; official certification requires formal review by an independent auditing firm.
        </div>
      </div>
    </section>
  );
};
