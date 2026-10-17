import React, { useState } from 'react';
import {
  Shield,
  Filter,
  CheckCircle2,
  Clock,
  RotateCcw,
  Search,
  CheckSquare,
  Square,
  Layers,
  FileText,
  AlertCircle,
  Database,
  ArrowRight,
  User,
  Mail,
  Info,
} from 'lucide-react';
import {
  initialPrivacyRequests,
  initialConsentRecords,
  dataInventoryCatalog,
  initialPolicyTasks,
} from '../data/sampleData';
import { PrivacyRequest, RequestType, RequestStatus, PolicyTask } from '../types';

interface InteractivePrivacyDashboardProps {
  onShowToast: (msg: string, type?: 'success' | 'info') => void;
}

export const InteractivePrivacyDashboard: React.FC<InteractivePrivacyDashboardProps> = ({ onShowToast }) => {
  const [requests, setRequests] = useState<PrivacyRequest[]>(initialPrivacyRequests);
  const [policyTasks, setPolicyTasks] = useState<PolicyTask[]>(initialPolicyTasks);
  const [selectedType, setSelectedType] = useState<RequestType>('all');
  const [selectedStatus, setSelectedStatus] = useState<RequestStatus>('all');
  const [selectedRequestId, setSelectedRequestId] = useState<string>(initialPrivacyRequests[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  // Active selected request
  const activeRequest =
    requests.find((r) => r.id === selectedRequestId) || requests[0];

  // Filtering requests
  const filteredRequests = requests.filter((r) => {
    const matchesType = selectedType === 'all' || r.type === selectedType;
    const matchesStatus = selectedStatus === 'all' || r.status === selectedStatus;
    const matchesQuery =
      r.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.requesterEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.subjectName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesStatus && matchesQuery;
  });

  const handleUpdateStatus = (newStatus: 'pending_verification' | 'in_progress' | 'completed') => {
    setRequests((prev) =>
      prev.map((r) => (r.id === activeRequest.id ? { ...r, status: newStatus } : r))
    );
    onShowToast(`Request ${activeRequest.id} status updated to "${newStatus.replace('_', ' ').toUpperCase()}"`, 'success');
  };

  const handleTogglePolicyTask = (taskId: string) => {
    setPolicyTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, completed: !t.completed } : t))
    );
    onShowToast('Compliance review checklist item updated.', 'info');
  };

  const handleReset = () => {
    setRequests(initialPrivacyRequests);
    setPolicyTasks(initialPolicyTasks);
    setSelectedType('all');
    setSelectedStatus('all');
    setSelectedRequestId(initialPrivacyRequests[0].id);
    setSearchQuery('');
    onShowToast('Privacy operations console reset to clean demo state.', 'info');
  };

  return (
    <section id="demo" className="py-20 md:py-28 bg-[#0D1322] border-t border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-semibold uppercase">
            <Shield className="w-3.5 h-3.5" />
            <span>INTERACTIVE PRIVACY OPERATIONS CONSOLE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Manage subject requests & governance.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Track privacy requests, transition fulfillment statuses, inspect data inventory registers, and complete statutory policy audits.
          </p>
        </div>

        {/* Dashboard Console */}
        <div className="rounded-3xl bg-[#111827] border border-white/10 shadow-2xl overflow-hidden">
          {/* Top Filter and Search Bar */}
          <div className="p-4 sm:p-5 bg-[#172236] border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative min-w-[200px]">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="SEARCH ID, EMAIL, SUBJECT..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-[#0B0F17] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-teal-500 font-mono"
              />
            </div>

            {/* Request Type Selector */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              <span className="text-xs font-semibold text-slate-400 font-mono flex items-center gap-1 whitespace-nowrap">
                <Filter className="w-3 h-3 text-teal-400" /> Type:
              </span>
              <div className="inline-flex rounded-xl bg-[#0B0F17] p-1 border border-white/10 text-xs font-mono">
                {(['all', 'dsar', 'deletion', 'opt_out', 'portability'] as RequestType[]).map((tp) => (
                  <button
                    key={tp}
                    onClick={() => setSelectedType(tp)}
                    className={`px-2.5 py-1 rounded-lg capitalize transition-all whitespace-nowrap ${
                      selectedType === tp
                        ? 'bg-teal-500 text-slate-950 font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {tp === 'all' ? 'All Types' : tp.replace('_', ' ')}
                  </button>
                ))}
              </div>
            </div>

            {/* Status Filter & Reset */}
            <div className="flex items-center gap-2">
              <div className="inline-flex rounded-xl bg-[#0B0F17] p-1 border border-white/10 text-xs font-mono">
                {(['all', 'pending_verification', 'in_progress', 'completed'] as RequestStatus[]).map((st) => (
                  <button
                    key={st}
                    onClick={() => setSelectedStatus(st)}
                    className={`px-2 py-0.5 rounded-lg capitalize transition-all ${
                      selectedStatus === st
                        ? 'bg-[#1E293B] text-teal-300 font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {st === 'all' ? 'All' : st.replace('_', ' ')}
                  </button>
                ))}
              </div>

              <button
                onClick={handleReset}
                className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 text-xs font-mono transition-colors"
                title="Reset privacy console"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            </div>
          </div>

          {/* Ethics Banner */}
          <div className="bg-teal-950/40 border-b border-teal-500/20 px-4 py-2 flex items-center justify-between text-[11px] text-teal-300 font-mono">
            <span className="flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              Notice: Synthetic privacy records demonstration. No real personal data collected, stored, or queried.
            </span>
            <span className="hidden md:inline text-slate-400">Total in Queue: {requests.length}</span>
          </div>

          {/* Main 2-Column Workstation */}
          <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: Request Queue (5 Cols) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center justify-between pb-1 font-mono text-xs">
                <span className="font-bold text-white uppercase tracking-wider">
                  Request Queue ({filteredRequests.length})
                </span>
                <span className="text-slate-400 text-[11px]">Click to inspect</span>
              </div>

              <div className="space-y-2.5 max-h-[500px] overflow-y-auto pr-1">
                {filteredRequests.map((req) => {
                  const isSelected = req.id === activeRequest.id;
                  return (
                    <div
                      key={req.id}
                      onClick={() => setSelectedRequestId(req.id)}
                      className={`p-4 rounded-2xl cursor-pointer transition-all border ${
                        isSelected
                          ? 'bg-[#1A253A] border-teal-500 shadow-lg shadow-teal-500/15 ring-1 ring-teal-500'
                          : 'bg-[#0B0F17] border-white/5 hover:border-white/15'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2 font-mono">
                          <span className="font-bold text-teal-400 text-xs">{req.id}</span>
                          <span className="text-[10px] uppercase px-2 py-0.5 rounded bg-white/10 text-slate-300">
                            {req.typeLabel}
                          </span>
                        </div>

                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-full capitalize ${
                            req.status === 'completed'
                              ? 'bg-emerald-950 text-emerald-300 border border-emerald-800/40'
                              : req.status === 'in_progress'
                              ? 'bg-teal-950 text-teal-300 border border-teal-800/40'
                              : 'bg-amber-950 text-amber-300 border border-amber-800/40'
                          }`}
                        >
                          {req.status.replace('_', ' ')}
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-white mb-0.5">{req.subjectName}</h4>
                      <p className="text-xs text-slate-400 truncate font-mono">{req.requesterEmail}</p>

                      <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                        <span>Submitted: {req.submittedDate}</span>
                        <span className="text-teal-400">{req.dueDate}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Request Details, Status Controls & Policy Check (7 Cols) */}
            <div className="lg:col-span-7 space-y-5">
              {/* Request Detail Panel */}
              <div className="p-5 rounded-2xl bg-[#172236] border border-white/10 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-teal-400">{activeRequest.id}</span>
                      <h3 className="text-base font-bold text-white">{activeRequest.typeLabel}</h3>
                    </div>
                    <p className="text-xs text-slate-300 font-mono mt-0.5">
                      Subject: {activeRequest.subjectName} ({activeRequest.requesterEmail})
                    </p>
                  </div>

                  {/* Transition Status Controls */}
                  <div className="flex items-center gap-1 font-mono text-xs">
                    {(['pending_verification', 'in_progress', 'completed'] as const).map((st) => (
                      <button
                        key={st}
                        onClick={() => handleUpdateStatus(st)}
                        className={`px-2.5 py-1 rounded-lg capitalize transition-all ${
                          activeRequest.status === st
                            ? 'bg-teal-500 text-slate-950 font-bold'
                            : 'bg-[#0B0F17] text-slate-400 hover:text-white'
                        }`}
                      >
                        {st.replace('_', ' ')}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Categories Involved */}
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 block mb-2">
                    Data Categories in Scope:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeRequest.dataCategories.map((cat) => (
                      <span
                        key={cat}
                        className="px-2.5 py-1 rounded-lg bg-[#0B0F17] border border-white/10 text-xs text-teal-300 font-mono"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Operations Notes */}
                <div className="p-3.5 rounded-xl bg-[#0B0F17] border border-white/5 space-y-1 text-xs">
                  <div className="flex items-center justify-between font-mono text-[11px] text-slate-400">
                    <span className="text-teal-400 font-bold">Assigned Owner: {activeRequest.assignedTeam}</span>
                    <span>Statutory Deadline: {activeRequest.dueDate}</span>
                  </div>
                  <p className="text-slate-200 leading-relaxed font-sans mt-1">
                    "{activeRequest.notes}"
                  </p>
                </div>
              </div>

              {/* Policy Tasks Checklist */}
              <div className="p-5 rounded-2xl bg-[#172236] border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white uppercase tracking-wider font-mono flex items-center gap-1.5">
                    <CheckSquare className="w-4 h-4 text-teal-400" /> Statutory Compliance Audits
                  </span>
                  <span className="text-xs font-mono text-teal-400">
                    {policyTasks.filter((t) => t.completed).length} / {policyTasks.length} Completed
                  </span>
                </div>

                <div className="space-y-2 pt-1">
                  {policyTasks.map((task) => (
                    <div
                      key={task.id}
                      onClick={() => handleTogglePolicyTask(task.id)}
                      className="p-3 rounded-xl bg-[#0B0F17] border border-white/5 flex items-center justify-between gap-3 cursor-pointer hover:border-white/15 transition-all"
                    >
                      <div className="flex items-start gap-2.5">
                        {task.completed ? (
                          <CheckSquare className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                        ) : (
                          <Square className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                        )}
                        <div>
                          <p
                            className={`text-xs font-medium ${
                              task.completed ? 'line-through text-slate-500' : 'text-slate-200'
                            }`}
                          >
                            {task.title}
                          </p>
                          <span className="text-[10px] font-mono text-slate-500">
                            Framework: {task.framework} • Owner: {task.owner}
                          </span>
                        </div>
                      </div>

                      <span className="text-[10px] font-mono text-teal-400 whitespace-nowrap">
                        Due: {task.deadline}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
