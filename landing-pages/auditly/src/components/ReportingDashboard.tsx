import React, { useState } from 'react';
import { 
  BarChart3, 
  Download, 
  Printer, 
  Calendar, 
  Filter, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  AlertTriangle,
  FileText,
  Share2
} from 'lucide-react';
import { ControlItem, RiskItem, RemediationTask, ComplianceFramework } from '../types';

interface ReportingDashboardProps {
  frameworks: ComplianceFramework[];
  controls: ControlItem[];
  risks: RiskItem[];
  tasks: RemediationTask[];
  onExportCSV: () => void;
  onPrintReport: () => void;
}

export const ReportingDashboard: React.FC<ReportingDashboardProps> = ({
  frameworks,
  controls,
  risks,
  tasks,
  onExportCSV,
  onPrintReport
}) => {
  const [selectedFramework, setSelectedFramework] = useState(frameworks[0].id);
  const [dateRange, setDateRange] = useState('q3-2026');

  const currentFw = frameworks.find(f => f.id === selectedFramework) || frameworks[0];

  const implementedCount = controls.filter(c => c.status === 'Implemented').length;
  const inReviewCount = controls.filter(c => c.status === 'In Review').length;
  const needsAttentionCount = controls.filter(c => c.status === 'Needs Attention').length;
  const notStartedCount = controls.filter(c => c.status === 'Not Started').length;

  return (
    <section id="reporting" className="py-20 bg-[#F6F8FB] border-b border-[#DFE6EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold text-[#3569D4] uppercase tracking-wider font-mono bg-[#EAF1FF] px-2.5 py-1 rounded">
            STAKEHOLDER & EXECUTIVE REPORTING
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#142033] mt-3 tracking-tight">
            Make compliance progress easy to understand.
          </h2>
          <p className="text-base text-[#64748B] mt-3 leading-relaxed">
            Translate technical controls and risk assessments into clear, digestible summaries for leadership, board members, and prospective enterprise buyers.
          </p>
        </div>

        {/* Reporting Dashboard Container */}
        <div className="bg-white rounded-2xl border border-[#DFE6EF] shadow-card overflow-hidden p-6 sm:p-8">
          {/* Top Filter and Export Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#DFE6EF]">
            <div className="flex flex-wrap items-center gap-3">
              <div>
                <label className="block text-[10px] font-bold text-[#64748B] uppercase mb-1">Target Framework</label>
                <select
                  value={selectedFramework}
                  onChange={(e) => setSelectedFramework(e.target.value)}
                  className="px-3 py-1.5 text-xs rounded-lg border border-[#DFE6EF] bg-[#F6F8FB] font-semibold text-[#142C4E]"
                >
                  {frameworks.map((fw) => (
                    <option key={fw.id} value={fw.id}>
                      {fw.name} ({fw.code})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-[#64748B] uppercase mb-1">Audit Period</label>
                <select
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="px-3 py-1.5 text-xs rounded-lg border border-[#DFE6EF] bg-[#F6F8FB] font-medium text-[#142033]"
                >
                  <option value="q3-2026">Q3 2026 (July 1 – Sept 30)</option>
                  <option value="q2-2026">Q2 2026 (Apr 1 – June 30)</option>
                  <option value="annual-2026">Full Year 2026 YTD</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-2.5 self-end sm:self-auto">
              <button
                onClick={onPrintReport}
                className="px-3.5 py-2 text-xs font-semibold text-[#142C4E] bg-[#EEF2F7] hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5 text-[#64748B]" />
                <span>Print Executive Summary</span>
              </button>

              <button
                onClick={onExportCSV}
                className="px-3.5 py-2 text-xs font-semibold text-white bg-[#3569D4] hover:bg-[#2853B8] rounded-lg shadow-sm transition-colors flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export CSV Matrix</span>
              </button>
            </div>
          </div>

          {/* Key Metric Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <div className="p-4 rounded-xl bg-[#F6F8FB] border border-[#DFE6EF]">
              <div className="text-xs text-[#64748B] flex items-center justify-between">
                <span>Readiness Score</span>
                <ShieldCheck className="w-4 h-4 text-[#17865C]" />
              </div>
              <div className="text-3xl font-bold font-display text-[#142033] mt-2">
                {currentFw.overallScore}%
              </div>
              <div className="text-[11px] text-[#17865C] font-semibold mt-1">
                Satisfies {currentFw.status} criteria
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#F6F8FB] border border-[#DFE6EF]">
              <div className="text-xs text-[#64748B] flex items-center justify-between">
                <span>Controls Verified</span>
                <CheckCircle2 className="w-4 h-4 text-[#3569D4]" />
              </div>
              <div className="text-3xl font-bold font-display text-[#142033] mt-2">
                {implementedCount} / {controls.length}
              </div>
              <div className="text-[11px] text-[#3569D4] font-semibold mt-1">
                {Math.round((implementedCount / controls.length) * 100)}% verified with evidence
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#F6F8FB] border border-[#DFE6EF]">
              <div className="text-xs text-[#64748B] flex items-center justify-between">
                <span>Critical Risk Gaps</span>
                <AlertTriangle className="w-4 h-4 text-[#C17A18]" />
              </div>
              <div className="text-3xl font-bold font-display text-[#142033] mt-2">
                {risks.filter(r => r.riskLevel === 'Critical').length}
              </div>
              <div className="text-[11px] text-[#C74747] font-semibold mt-1">
                Active remediation plans assigned
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#F6F8FB] border border-[#DFE6EF]">
              <div className="text-xs text-[#64748B] flex items-center justify-between">
                <span>Action Resolution Rate</span>
                <BarChart3 className="w-4 h-4 text-[#142C4E]" />
              </div>
              <div className="text-3xl font-bold font-display text-[#142033] mt-2">
                {Math.round((tasks.filter(t => t.status === 'completed').length / tasks.length) * 100)}%
              </div>
              <div className="text-[11px] text-[#64748B] font-semibold mt-1">
                {tasks.filter(t => t.status === 'completed').length} of {tasks.length} remediations closed
              </div>
            </div>
          </div>

          {/* Visual Progress Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {/* Control Status Distribution Bar */}
            <div className="p-5 rounded-xl border border-[#DFE6EF] bg-[#F6F8FB]">
              <h4 className="text-xs font-bold text-[#142033] uppercase tracking-wider mb-4">
                Control Implementation Distribution
              </h4>

              {/* Stacked Bar */}
              <div className="w-full h-4 rounded-full overflow-hidden flex bg-slate-200">
                <div style={{ width: `${(implementedCount / controls.length) * 100}%` }} className="bg-[#17865C]" title="Implemented" />
                <div style={{ width: `${(inReviewCount / controls.length) * 100}%` }} className="bg-[#3569D4]" title="In Review" />
                <div style={{ width: `${(needsAttentionCount / controls.length) * 100}%` }} className="bg-[#C17A18]" title="Needs Attention" />
                <div style={{ width: `${(notStartedCount / controls.length) * 100}%` }} className="bg-slate-400" title="Not Started" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#17865C]" />
                  <span className="text-[#64748B]">Implemented: <strong className="text-[#142033]">{implementedCount}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3569D4]" />
                  <span className="text-[#64748B]">In Review: <strong className="text-[#142033]">{inReviewCount}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C17A18]" />
                  <span className="text-[#64748B]">Attention: <strong className="text-[#142033]">{needsAttentionCount}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                  <span className="text-[#64748B]">Not Started: <strong className="text-[#142033]">{notStartedCount}</strong></span>
                </div>
              </div>
            </div>

            {/* Risk Distribution Breakdown */}
            <div className="p-5 rounded-xl border border-[#DFE6EF] bg-[#F6F8FB]">
              <h4 className="text-xs font-bold text-[#142033] uppercase tracking-wider mb-4">
                Risk Classification Posture
              </h4>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-[#C74747] font-semibold">Critical Operational Threats</span>
                  <span className="font-mono font-bold text-[#142033]">{risks.filter(r => r.riskLevel === 'Critical').length} items</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#D97706] font-semibold">High Severity Vulnerabilities</span>
                  <span className="font-mono font-bold text-[#142033]">{risks.filter(r => r.riskLevel === 'High').length} items</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#C17A18] font-semibold">Moderate Governance Risks</span>
                  <span className="font-mono font-bold text-[#142033]">{risks.filter(r => r.riskLevel === 'Moderate').length} items</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#17865C] font-semibold">Low Priority Baselines</span>
                  <span className="font-mono font-bold text-[#142033]">{risks.filter(r => r.riskLevel === 'Low').length} items</span>
                </div>
              </div>
            </div>
          </div>

          {/* Report Footer / Disclaimer */}
          <div className="mt-8 pt-4 border-t border-[#DFE6EF] text-center text-xs text-[#64748B]">
            * Reports generated from active workspace demonstration data. Formal auditor attestation and SOC 2 / ISO certification requires accredited third-party review.
          </div>
        </div>
      </div>
    </section>
  );
};
