import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Layers, 
  ShieldCheck, 
  AlertTriangle, 
  FileText, 
  CheckSquare, 
  BarChart3, 
  History, 
  Settings, 
  Search, 
  Filter, 
  Sliders, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ChevronRight, 
  Download, 
  ExternalLink,
  ChevronDown,
  Building,
  User,
  RefreshCw
} from 'lucide-react';
import { 
  ControlItem, 
  RiskItem, 
  EvidenceItem, 
  AuditEvent, 
  RemediationTask, 
  ComplianceFramework,
  ControlStatus,
  ControlCategory
} from '../types';

interface ComplianceDashboardProps {
  frameworks: ComplianceFramework[];
  controls: ControlItem[];
  risks: RiskItem[];
  evidence: EvidenceItem[];
  auditEvents: AuditEvent[];
  tasks: RemediationTask[];
  onOpenControl: (control: ControlItem) => void;
  onOpenRisk: (risk: RiskItem) => void;
  onOpenEvidence: (evidence: EvidenceItem) => void;
  onOpenTask: (task: RemediationTask) => void;
  onExportReport: () => void;
}

export const ComplianceDashboard: React.FC<ComplianceDashboardProps> = ({
  frameworks,
  controls,
  risks,
  evidence,
  auditEvents,
  tasks,
  onOpenControl,
  onOpenRisk,
  onOpenEvidence,
  onOpenTask,
  onExportReport
}) => {
  const [activeNav, setActiveNav] = useState<string>('Overview');
  const [selectedFrameworkId, setSelectedFrameworkId] = useState<string>('soc2');
  const [controlSearch, setControlSearch] = useState<string>('');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<string>('All');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('All');

  const selectedFramework = frameworks.find(f => f.id === selectedFrameworkId) || frameworks[0];

  const sidebarItems = [
    { name: 'Overview', icon: LayoutDashboard },
    { name: 'Frameworks', icon: Layers },
    { name: 'Controls', icon: ShieldCheck, badge: controls.length.toString() },
    { name: 'Risk Register', icon: AlertTriangle, badge: risks.length.toString() },
    { name: 'Evidence', icon: FileText, badge: evidence.length.toString() },
    { name: 'Audits', icon: Calendar },
    { name: 'Remediation', icon: CheckSquare, badge: tasks.filter(t => t.status !== 'completed').length.toString() },
    { name: 'Reports', icon: BarChart3 },
    { name: 'Activity Log', icon: History },
    { name: 'Settings', icon: Settings },
  ];

  // Filter controls
  const filteredControls = controls.filter(c => {
    const matchesSearch = c.title.toLowerCase().includes(controlSearch.toLowerCase()) || 
                          c.id.toLowerCase().includes(controlSearch.toLowerCase()) ||
                          c.owner.toLowerCase().includes(controlSearch.toLowerCase());
    const matchesStatus = selectedStatusFilter === 'All' || c.status === selectedStatusFilter;
    const matchesCategory = selectedCategoryFilter === 'All' || c.category === selectedCategoryFilter;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const statusPillStyles: Record<ControlStatus, { bg: string; text: string; border: string }> = {
    'Implemented': { bg: 'bg-[#E6F6F0]', text: 'text-[#17865C]', border: 'border-[#17865C]/30' },
    'In Review': { bg: 'bg-[#EAF1FF]', text: 'text-[#3569D4]', border: 'border-[#3569D4]/30' },
    'Needs Attention': { bg: 'bg-[#FDF5E8]', text: 'text-[#C17A18]', border: 'border-[#C17A18]/30' },
    'Not Started': { bg: 'bg-slate-100', text: 'text-slate-600', border: 'border-slate-300' },
  };

  return (
    <section id="dashboard" className="py-20 bg-[#F6F8FB] border-b border-[#DFE6EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-semibold text-[#3569D4] uppercase tracking-wider font-mono bg-[#EAF1FF] px-2.5 py-1 rounded">
            INTERACTIVE DEMO APPLICATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#142033] mt-3 tracking-tight">
            Your compliance posture, clearly presented.
          </h2>
          <p className="text-base text-[#64748B] mt-3 leading-relaxed">
            Experience the actual Auditly management interface. Switch frameworks, inspect controls, review risk scores, and manage remediation.
          </p>
        </div>

        {/* Master Workspace Application Chrome */}
        <div className="rounded-2xl border border-[#DFE6EF] bg-white shadow-enterprise overflow-hidden flex flex-col min-h-[750px]">
          {/* Top Bar Chrome */}
          <div className="px-5 py-3.5 bg-[#142C4E] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[#0D1D35]">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#159B91]" />
                <span className="font-display font-bold text-sm tracking-tight text-white">
                  Audit<span className="text-[#3569D4]">ly</span> Console
                </span>
              </div>
              <span className="text-slate-400 text-xs hidden sm:inline">•</span>
              
              {/* Framework selector dropdown */}
              <div className="relative">
                <select
                  value={selectedFrameworkId}
                  onChange={(e) => setSelectedFrameworkId(e.target.value)}
                  className="bg-[#1E3C68] text-white text-xs font-semibold px-3 py-1.5 rounded-md border border-[#283955] focus:outline-none focus:ring-1 focus:ring-[#3569D4] cursor-pointer"
                >
                  {frameworks.map((fw) => (
                    <option key={fw.id} value={fw.id} className="bg-[#142033] text-white">
                      {fw.name} ({fw.overallScore}%)
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs w-full sm:w-auto justify-between sm:justify-end">
              <span className="px-2 py-0.5 rounded bg-[#1E3C68] text-slate-300 font-mono text-[11px]">
                {selectedFramework.status}
              </span>
              <button
                onClick={onExportReport}
                className="px-3 py-1.5 bg-[#3569D4] hover:bg-[#2853B8] text-white rounded font-medium transition-colors flex items-center gap-1.5 text-xs shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Report (CSV)</span>
              </button>
            </div>
          </div>

          {/* Body Container: Sidebar + Main Content */}
          <div className="flex-1 flex flex-col md:flex-row">
            {/* Sidebar Navigation */}
            <aside className="w-full md:w-56 bg-[#F6F8FB] border-r border-[#DFE6EF] p-3 flex md:flex-col gap-1 overflow-x-auto md:overflow-visible shrink-0">
              <div className="px-3 py-2 text-[10px] font-bold text-[#64748B] uppercase tracking-wider hidden md:block">
                Workspace Navigation
              </div>

              {sidebarItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeNav === item.name;
                return (
                  <button
                    key={item.name}
                    onClick={() => setActiveNav(item.name)}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all whitespace-nowrap md:whitespace-normal ${
                      isActive
                        ? 'bg-[#142C4E] text-white font-semibold shadow-sm'
                        : 'text-[#64748B] hover:text-[#142033] hover:bg-[#EEF2F7]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <IconComponent className={`w-4 h-4 ${isActive ? 'text-[#3569D4]' : 'text-[#64748B]'}`} />
                      <span>{item.name}</span>
                    </div>
                    {item.badge && (
                      <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                        isActive ? 'bg-[#3569D4] text-white' : 'bg-[#EEF2F7] text-[#142033]'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}

              <div className="mt-auto pt-4 border-t border-[#DFE6EF] hidden md:block">
                <div className="px-3 py-2 bg-white rounded-lg border border-[#DFE6EF]">
                  <div className="text-[10px] text-[#64748B]">Auditor Readiness</div>
                  <div className="text-sm font-bold text-[#142033] font-mono mt-0.5">{selectedFramework.overallScore}%</div>
                  <div className="w-full bg-[#EEF2F7] h-1 rounded-full mt-1.5 overflow-hidden">
                    <div className="bg-[#17865C] h-full" style={{ width: `${selectedFramework.overallScore}%` }} />
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 p-4 sm:p-6 bg-white overflow-y-auto">
              {/* Dynamic View rendering based on activeNav */}
              {activeNav === 'Overview' && (
                <div className="space-y-6">
                  {/* Executive Metric Cards */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 rounded-xl bg-[#F6F8FB] border border-[#DFE6EF]">
                      <div className="text-xs text-[#64748B] flex items-center justify-between">
                        <span>Framework Controls</span>
                        <ShieldCheck className="w-4 h-4 text-[#3569D4]" />
                      </div>
                      <div className="text-2xl font-bold font-display text-[#142033] mt-2">
                        {controls.filter(c => c.status === 'Implemented').length} / {controls.length}
                      </div>
                      <div className="text-[11px] text-[#17865C] font-semibold mt-1">
                        {Math.round((controls.filter(c => c.status === 'Implemented').length / controls.length) * 100)}% Implemented
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#F6F8FB] border border-[#DFE6EF]">
                      <div className="text-xs text-[#64748B] flex items-center justify-between">
                        <span>Evidence Artifacts</span>
                        <FileText className="w-4 h-4 text-[#159B91]" />
                      </div>
                      <div className="text-2xl font-bold font-display text-[#142033] mt-2">
                        {evidence.length} Files
                      </div>
                      <div className="text-[11px] text-[#3569D4] font-semibold mt-1">
                        {evidence.filter(e => e.reviewStatus === 'Approved').length} Approved
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#F6F8FB] border border-[#DFE6EF]">
                      <div className="text-xs text-[#64748B] flex items-center justify-between">
                        <span>Active Risks</span>
                        <AlertTriangle className="w-4 h-4 text-[#C17A18]" />
                      </div>
                      <div className="text-2xl font-bold font-display text-[#142033] mt-2">
                        {risks.filter(r => r.status === 'Active').length} Active
                      </div>
                      <div className="text-[11px] text-[#C74747] font-semibold mt-1">
                        {risks.filter(r => r.riskLevel === 'Critical').length} Critical Attention
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#F6F8FB] border border-[#DFE6EF]">
                      <div className="text-xs text-[#64748B] flex items-center justify-between">
                        <span>Open Remediations</span>
                        <CheckSquare className="w-4 h-4 text-[#142C4E]" />
                      </div>
                      <div className="text-2xl font-bold font-display text-[#142033] mt-2">
                        {tasks.filter(t => t.status !== 'completed').length} Tasks
                      </div>
                      <div className="text-[11px] text-[#C74747] font-semibold mt-1">
                        {tasks.filter(t => t.isOverdue && t.status !== 'completed').length} Overdue SLA
                      </div>
                    </div>
                  </div>

                  {/* Priority Control Review Queue */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-bold text-[#142033] font-display flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#3569D4]" />
                        <span>Controls Requiring Attention or Review</span>
                      </h4>
                      <button 
                        onClick={() => setActiveNav('Controls')}
                        className="text-xs text-[#3569D4] hover:underline font-medium"
                      >
                        View all controls ({controls.length}) →
                      </button>
                    </div>

                    <div className="divide-y divide-[#DFE6EF] border border-[#DFE6EF] rounded-xl overflow-hidden bg-white">
                      {controls.slice(0, 4).map((c) => (
                        <div
                          key={c.id}
                          onClick={() => onOpenControl(c)}
                          className="p-3.5 flex items-center justify-between hover:bg-[#F6F8FB] transition-colors cursor-pointer text-xs"
                        >
                          <div className="flex items-center gap-3">
                            <span className="font-mono font-bold text-[#142C4E] bg-[#EEF2F7] px-2 py-0.5 rounded">
                              {c.id}
                            </span>
                            <div>
                              <div className="font-semibold text-[#142033]">{c.title}</div>
                              <div className="text-[11px] text-[#64748B]">Owner: {c.owner} • Next Review: {c.nextReview}</div>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold border ${statusPillStyles[c.status].bg} ${statusPillStyles[c.status].text} ${statusPillStyles[c.status].border}`}>
                              {c.status}
                            </span>
                            <ChevronRight className="w-4 h-4 text-slate-400" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Split: Upcoming Deadlines & Recent Events */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {/* Upcoming Deadlines */}
                    <div className="p-4 rounded-xl border border-[#DFE6EF] bg-[#F6F8FB]">
                      <div className="flex items-center justify-between pb-3 border-b border-[#DFE6EF] text-xs font-semibold text-[#142033]">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-[#3569D4]" />
                          Upcoming Deadlines & SLAs
                        </span>
                        <span className="text-[11px] text-[#64748B]">Next 14 Days</span>
                      </div>

                      <div className="space-y-2.5 mt-3 text-xs">
                        {tasks.filter(t => t.status !== 'completed').slice(0, 3).map((t) => (
                          <div 
                            key={t.id}
                            onClick={() => onOpenTask(t)}
                            className="p-2.5 bg-white rounded-lg border border-[#DFE6EF] flex items-center justify-between cursor-pointer hover:border-[#3569D4]/40"
                          >
                            <div className="min-w-0 pr-2">
                              <p className="font-semibold text-[#142033] truncate">{t.title}</p>
                              <p className="text-[11px] text-[#64748B]">Due: {t.dueDate} • {t.owner}</p>
                            </div>
                            <span className={`shrink-0 font-mono text-[10px] px-2 py-0.5 rounded font-bold ${
                              t.isOverdue ? 'bg-[#FBEAEA] text-[#C74747]' : 'bg-[#FDF5E8] text-[#C17A18]'
                            }`}>
                              {t.isOverdue ? 'OVERDUE' : 'DUE SOON'}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Live Audit Trail */}
                    <div className="p-4 rounded-xl border border-[#DFE6EF] bg-[#F6F8FB]">
                      <div className="flex items-center justify-between pb-3 border-b border-[#DFE6EF] text-xs font-semibold text-[#142033]">
                        <span className="flex items-center gap-1.5">
                          <History className="w-4 h-4 text-[#159B91]" />
                          Audit Activity Stream
                        </span>
                        <button 
                          onClick={() => setActiveNav('Activity Log')}
                          className="text-[#3569D4] hover:underline text-[11px]"
                        >
                          View Full Log →
                        </button>
                      </div>

                      <div className="space-y-2 mt-3 text-xs">
                        {auditEvents.slice(0, 3).map((e) => (
                          <div key={e.id} className="p-2.5 bg-white rounded-lg border border-[#DFE6EF] flex items-center justify-between">
                            <div>
                              <p className="font-semibold text-[#142033]">{e.action}</p>
                              <p className="text-[11px] text-[#64748B]">{e.resource} • {e.user}</p>
                            </div>
                            <span className="font-mono text-[11px] text-[#3569D4]">{e.timeFormatted}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Controls Tab */}
              {activeNav === 'Controls' && (
                <div className="space-y-4">
                  {/* Search and Filters */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        placeholder="Search controls by ID, title, or owner..."
                        value={controlSearch}
                        onChange={(e) => setControlSearch(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-[#DFE6EF] bg-[#F6F8FB] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3569D4]/20 focus:border-[#3569D4]"
                      />
                    </div>

                    <div className="flex gap-2">
                      <select
                        value={selectedStatusFilter}
                        onChange={(e) => setSelectedStatusFilter(e.target.value)}
                        className="px-3 py-2 text-xs rounded-lg border border-[#DFE6EF] bg-[#F6F8FB] focus:bg-white focus:outline-none"
                      >
                        <option value="All">All Statuses</option>
                        <option value="Implemented">Implemented</option>
                        <option value="In Review">In Review</option>
                        <option value="Needs Attention">Needs Attention</option>
                        <option value="Not Started">Not Started</option>
                      </select>

                      <select
                        value={selectedCategoryFilter}
                        onChange={(e) => setSelectedCategoryFilter(e.target.value)}
                        className="px-3 py-2 text-xs rounded-lg border border-[#DFE6EF] bg-[#F6F8FB] focus:bg-white focus:outline-none"
                      >
                        <option value="All">All Criteria</option>
                        <option value="Security">Security</option>
                        <option value="Availability">Availability</option>
                        <option value="Confidentiality">Confidentiality</option>
                        <option value="Processing Integrity">Processing Integrity</option>
                        <option value="Privacy">Privacy</option>
                      </select>
                    </div>
                  </div>

                  {/* Controls Table */}
                  <div className="border border-[#DFE6EF] rounded-xl overflow-hidden bg-white shadow-subtle">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-[#F6F8FB] border-b border-[#DFE6EF] text-[#64748B] font-semibold">
                          <tr>
                            <th className="py-3 px-4">Control ID</th>
                            <th className="py-3 px-4">Criteria & Title</th>
                            <th className="py-3 px-4">Owner</th>
                            <th className="py-3 px-4">Status</th>
                            <th className="py-3 px-4">Evidence</th>
                            <th className="py-3 px-4">Next Review</th>
                            <th className="py-3 px-4 text-right">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#DFE6EF]">
                          {filteredControls.map((c) => (
                            <tr 
                              key={c.id} 
                              onClick={() => onOpenControl(c)}
                              className="hover:bg-[#F6F8FB] transition-colors cursor-pointer"
                            >
                              <td className="py-3 px-4 font-mono font-bold text-[#142C4E]">
                                {c.id}
                              </td>
                              <td className="py-3 px-4">
                                <div className="font-semibold text-[#142033]">{c.title}</div>
                                <div className="text-[11px] text-[#64748B]">{c.category}</div>
                              </td>
                              <td className="py-3 px-4 text-[#142033] font-medium">
                                {c.owner}
                              </td>
                              <td className="py-3 px-4">
                                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold border ${statusPillStyles[c.status].bg} ${statusPillStyles[c.status].text} ${statusPillStyles[c.status].border}`}>
                                  {c.status}
                                </span>
                              </td>
                              <td className="py-3 px-4 font-mono text-[#3569D4]">
                                {c.linkedEvidence.length} items
                              </td>
                              <td className="py-3 px-4 font-mono text-[#64748B]">
                                {c.nextReview}
                              </td>
                              <td className="py-3 px-4 text-right">
                                <span className="text-[#3569D4] font-semibold hover:underline">
                                  Manage →
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Risk Register Tab */}
              {activeNav === 'Risk Register' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#DFE6EF]">
                    <div>
                      <h4 className="text-sm font-bold text-[#142033]">Operational Risk Register</h4>
                      <p className="text-xs text-[#64748B]">Assessing likelihood and impact across infrastructure and governance.</p>
                    </div>
                  </div>

                  <div className="border border-[#DFE6EF] rounded-xl overflow-hidden bg-white shadow-subtle">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-[#F6F8FB] border-b border-[#DFE6EF] text-[#64748B] font-semibold">
                        <tr>
                          <th className="py-3 px-4">Risk ID</th>
                          <th className="py-3 px-4">Risk Name & Category</th>
                          <th className="py-3 px-4">Score</th>
                          <th className="py-3 px-4">Level</th>
                          <th className="py-3 px-4">Owner</th>
                          <th className="py-3 px-4">Status</th>
                          <th className="py-3 px-4 text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#DFE6EF]">
                        {risks.map((r) => (
                          <tr 
                            key={r.id}
                            onClick={() => onOpenRisk(r)}
                            className="hover:bg-[#F6F8FB] transition-colors cursor-pointer"
                          >
                            <td className="py-3 px-4 font-mono font-bold text-[#142C4E]">{r.id}</td>
                            <td className="py-3 px-4">
                              <div className="font-semibold text-[#142033]">{r.name}</div>
                              <div className="text-[11px] text-[#64748B]">{r.category}</div>
                            </td>
                            <td className="py-3 px-4 font-mono text-[#142033]">
                              {r.likelihood} × {r.impact} = <strong>{r.likelihood * r.impact}</strong>
                            </td>
                            <td className="py-3 px-4">
                              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold ${
                                r.riskLevel === 'Critical' ? 'bg-[#FBEAEA] text-[#C74747]' :
                                r.riskLevel === 'High' ? 'bg-[#FEF3C7] text-[#D97706]' :
                                r.riskLevel === 'Moderate' ? 'bg-[#FDF5E8] text-[#C17A18]' :
                                'bg-[#E6F6F0] text-[#17865C]'
                              }`}>
                                {r.riskLevel}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-[#142033]">{r.owner}</td>
                            <td className="py-3 px-4 font-medium">{r.status}</td>
                            <td className="py-3 px-4 text-right text-[#3569D4] font-semibold hover:underline">
                              Edit →
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Evidence Tab */}
              {activeNav === 'Evidence' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#DFE6EF]">
                    <div>
                      <h4 className="text-sm font-bold text-[#142033]">Document & Evidence Vault</h4>
                      <p className="text-xs text-[#64748B]">Supporting artifacts mapped to controls with cryptographic integrity.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {evidence.map((ev) => (
                      <div
                        key={ev.id}
                        onClick={() => onOpenEvidence(ev)}
                        className="p-4 rounded-xl border border-[#DFE6EF] bg-[#F6F8FB] hover:bg-white hover:border-[#3569D4]/40 hover:shadow-card transition-all cursor-pointer flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-white border border-[#DFE6EF] text-[#142C4E]">
                              {ev.id}
                            </span>
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded uppercase font-semibold bg-[#EEF2F7]">
                              {ev.fileType}
                            </span>
                          </div>
                          <h5 className="text-xs font-bold text-[#142033] font-mono truncate">{ev.title}</h5>
                          <p className="text-[11px] text-[#64748B] mt-1 line-clamp-2">{ev.summary}</p>
                        </div>

                        <div className="mt-4 pt-3 border-t border-[#DFE6EF] flex items-center justify-between text-[11px]">
                          <span className="text-[#3569D4] font-semibold">{ev.reviewStatus}</span>
                          <span className="text-[#64748B]">{ev.fileSize}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Remediation Tab */}
              {activeNav === 'Remediation' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#DFE6EF]">
                    <div>
                      <h4 className="text-sm font-bold text-[#142033]">Remediation Task Queue</h4>
                      <p className="text-xs text-[#64748B]">Corrective actions mapped to control gaps and risk findings.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* To Do */}
                    <div className="p-3 bg-[#F6F8FB] rounded-xl border border-[#DFE6EF]">
                      <div className="font-semibold text-xs text-[#142033] mb-3 flex items-center justify-between">
                        <span>To Do</span>
                        <span className="font-mono text-[10px] bg-white px-2 py-0.5 rounded border border-[#DFE6EF]">
                          {tasks.filter(t => t.status === 'todo').length}
                        </span>
                      </div>
                      <div className="space-y-2.5">
                        {tasks.filter(t => t.status === 'todo').map(t => (
                          <div
                            key={t.id}
                            onClick={() => onOpenTask(t)}
                            className="p-3 bg-white rounded-lg border border-[#DFE6EF] hover:border-[#3569D4]/40 cursor-pointer shadow-subtle text-xs"
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-mono text-[10px] text-slate-500">{t.id}</span>
                              <span className={`text-[10px] font-semibold px-1.5 py-0.2 rounded ${
                                t.priority === 'Critical' ? 'bg-[#FBEAEA] text-[#C74747]' : 'bg-[#FEF3C7] text-[#D97706]'
                              }`}>{t.priority}</span>
                            </div>
                            <p className="font-semibold text-[#142033] line-clamp-2">{t.title}</p>
                            <div className="mt-2 text-[11px] text-[#64748B] flex justify-between">
                              <span>{t.owner}</span>
                              <span className={t.isOverdue ? 'text-red-600 font-semibold' : ''}>{t.dueDate}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* In Progress */}
                    <div className="p-3 bg-[#F6F8FB] rounded-xl border border-[#DFE6EF]">
                      <div className="font-semibold text-xs text-[#142033] mb-3 flex items-center justify-between">
                        <span>In Progress</span>
                        <span className="font-mono text-[10px] bg-white px-2 py-0.5 rounded border border-[#DFE6EF]">
                          {tasks.filter(t => t.status === 'in_progress').length}
                        </span>
                      </div>
                      <div className="space-y-2.5">
                        {tasks.filter(t => t.status === 'in_progress').map(t => (
                          <div
                            key={t.id}
                            onClick={() => onOpenTask(t)}
                            className="p-3 bg-white rounded-lg border border-[#DFE6EF] hover:border-[#3569D4]/40 cursor-pointer shadow-subtle text-xs"
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-mono text-[10px] text-slate-500">{t.id}</span>
                              <span className="text-[10px] font-semibold px-1.5 py-0.2 rounded bg-[#EAF1FF] text-[#3569D4]">{t.priority}</span>
                            </div>
                            <p className="font-semibold text-[#142033] line-clamp-2">{t.title}</p>
                            <div className="mt-2 text-[11px] text-[#64748B] flex justify-between">
                              <span>{t.owner}</span>
                              <span>{t.dueDate}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Completed */}
                    <div className="p-3 bg-[#F6F8FB] rounded-xl border border-[#DFE6EF]">
                      <div className="font-semibold text-xs text-[#142033] mb-3 flex items-center justify-between">
                        <span>Completed</span>
                        <span className="font-mono text-[10px] bg-white px-2 py-0.5 rounded border border-[#DFE6EF]">
                          {tasks.filter(t => t.status === 'completed').length}
                        </span>
                      </div>
                      <div className="space-y-2.5">
                        {tasks.filter(t => t.status === 'completed').map(t => (
                          <div
                            key={t.id}
                            onClick={() => onOpenTask(t)}
                            className="p-3 bg-white rounded-lg border border-[#DFE6EF] hover:border-[#3569D4]/40 cursor-pointer shadow-subtle text-xs opacity-75"
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-mono text-[10px] text-slate-500">{t.id}</span>
                              <span className="text-[10px] font-semibold px-1.5 py-0.2 rounded bg-[#E6F6F0] text-[#17865C]">Verified</span>
                            </div>
                            <p className="font-semibold text-[#142033] line-clamp-2 line-through">{t.title}</p>
                            <div className="mt-2 text-[11px] text-[#64748B] flex justify-between">
                              <span>{t.owner}</span>
                              <span>{t.dueDate}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Activity Log / Audits / Reports Fallback View */}
              {(activeNav === 'Frameworks' || activeNav === 'Audits' || activeNav === 'Reports' || activeNav === 'Activity Log' || activeNav === 'Settings') && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#DFE6EF]">
                    <div>
                      <h4 className="text-sm font-bold text-[#142033]">{activeNav} Workspace View</h4>
                      <p className="text-xs text-[#64748B]">Showing active governance telemetry for {selectedFramework.name}.</p>
                    </div>
                  </div>

                  <div className="p-6 bg-[#F6F8FB] rounded-xl border border-[#DFE6EF] text-center space-y-3">
                    <ShieldCheck className="w-10 h-10 text-[#3569D4] mx-auto" />
                    <h5 className="text-base font-bold text-[#142033]">{activeNav} Configuration</h5>
                    <p className="text-xs text-[#64748B] max-w-md mx-auto">
                      All corresponding sections have dedicated deep-dive modules below on this page. You can jump directly to them or continue exploring controls above.
                    </p>
                    <div className="pt-2 flex justify-center gap-3">
                      <button
                        onClick={() => setActiveNav('Overview')}
                        className="px-4 py-2 text-xs font-semibold bg-[#142C4E] text-white rounded-lg shadow-sm"
                      >
                        Return to Overview
                      </button>
                      <button
                        onClick={() => setActiveNav('Controls')}
                        className="px-4 py-2 text-xs font-semibold bg-white border border-[#DFE6EF] text-[#142033] rounded-lg shadow-subtle"
                      >
                        Browse Controls
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </main>
          </div>

          {/* Footer Bar */}
          <div className="px-5 py-2.5 bg-[#F6F8FB] border-t border-[#DFE6EF] flex items-center justify-between text-[11px] text-[#64748B]">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#17865C]" />
              Continuous compliance telemetry operational
            </span>
            <span className="hidden sm:inline">Prototype workspace with demonstration records</span>
          </div>
        </div>
      </div>
    </section>
  );
};
