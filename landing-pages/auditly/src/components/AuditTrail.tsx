import React, { useState } from 'react';
import { 
  History, 
  Search, 
  Copy, 
  Check, 
  Filter, 
  User, 
  Clock, 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import { AuditEvent, AuditActionType } from '../types';

interface AuditTrailProps {
  events: AuditEvent[];
  onCopyEventId: (eventId: string) => void;
}

export const AuditTrail: React.FC<AuditTrailProps> = ({
  events,
  onCopyEventId
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedActionType, setSelectedActionType] = useState<string>('All');

  const handleCopy = (id: string) => {
    onCopyEventId(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredEvents = events.filter(e => {
    const matchesSearch = e.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          e.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          e.resource.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          e.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedActionType === 'All' || e.actionType === selectedActionType;
    return matchesSearch && matchesType;
  });

  const actionTypeBadge: Record<AuditActionType, { label: string; bg: string; text: string }> = {
    'status_update': { label: 'Status Update', bg: 'bg-[#EAF1FF]', text: 'text-[#3569D4]' },
    'evidence_added': { label: 'Evidence Attached', bg: 'bg-[#E6F6F0]', text: 'text-[#17865C]' },
    'owner_assigned': { label: 'Owner Assignment', bg: 'bg-[#EEF2F7]', text: 'text-[#142C4E]' },
    'review_completed': { label: 'Review Sign-off', bg: 'bg-[#E6F6F0]', text: 'text-[#17865C]' },
    'report_generated': { label: 'Report Export', bg: 'bg-[#FDF5E8]', text: 'text-[#C17A18]' },
  };

  return (
    <section id="audit-trail" className="py-20 bg-[#F6F8FB] border-b border-[#DFE6EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold text-[#3569D4] uppercase tracking-wider font-mono bg-[#EAF1FF] px-2.5 py-1 rounded">
            OPERATIONAL TRACEABILITY
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#142033] mt-3 tracking-tight">
            Every important action, accounted for.
          </h2>
          <p className="text-base text-[#64748B] mt-3 leading-relaxed">
            Maintain an unambiguous internal record of control modifications, evidence attachments, status changes, and report generations.
          </p>
        </div>

        {/* Audit Log Card */}
        <div className="bg-white rounded-2xl border border-[#DFE6EF] shadow-card overflow-hidden">
          {/* Controls Bar */}
          <div className="p-4 sm:p-5 bg-[#F6F8FB] border-b border-[#DFE6EF] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search audit trail by actor, event ID, or resource..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-[#DFE6EF] bg-white focus:outline-none focus:ring-2 focus:ring-[#3569D4]/20 focus:border-[#3569D4]"
              />
            </div>

            <div className="flex items-center gap-2">
              <select
                value={selectedActionType}
                onChange={(e) => setSelectedActionType(e.target.value)}
                className="px-3 py-2 text-xs rounded-lg border border-[#DFE6EF] bg-white font-medium text-[#142033]"
              >
                <option value="All">All Event Types</option>
                <option value="status_update">Status Updates</option>
                <option value="evidence_added">Evidence Uploads</option>
                <option value="owner_assigned">Owner Assignments</option>
                <option value="review_completed">Reviews Completed</option>
                <option value="report_generated">Reports Exported</option>
              </select>

              <span className="text-xs text-[#64748B] font-mono hidden sm:inline">
                {filteredEvents.length} events logged
              </span>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#F6F8FB] border-b border-[#DFE6EF] text-[#64748B] font-semibold">
                <tr>
                  <th className="py-3 px-4">Timestamp</th>
                  <th className="py-3 px-4">Event ID</th>
                  <th className="py-3 px-4">Actor & Role</th>
                  <th className="py-3 px-4">Action</th>
                  <th className="py-3 px-4">Target Resource</th>
                  <th className="py-3 px-4 text-right">Event Hash</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DFE6EF]">
                {filteredEvents.map((evt) => (
                  <tr key={evt.id} className="hover:bg-[#F6F8FB] transition-colors">
                    <td className="py-3.5 px-4 font-mono text-[#142033]">
                      <div className="font-semibold">{evt.timeFormatted}</div>
                      <div className="text-[10px] text-slate-400">{evt.timestamp.split('T')[0]}</div>
                    </td>

                    <td className="py-3.5 px-4">
                      <button
                        onClick={() => handleCopy(evt.id)}
                        className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded font-mono font-bold bg-[#F6F8FB] border border-[#DFE6EF] hover:border-[#3569D4] text-[#142C4E] text-[11px] transition-colors"
                        title="Click to copy Event ID"
                      >
                        {copiedId === evt.id ? (
                          <Check className="w-3 h-3 text-[#17865C]" />
                        ) : (
                          <Copy className="w-3 h-3 text-slate-400" />
                        )}
                        <span>{evt.id}</span>
                      </button>
                    </td>

                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-[#142033]">{evt.user}</div>
                      <div className="text-[11px] text-[#64748B]">{evt.role}</div>
                    </td>

                    <td className="py-3.5 px-4">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold ${actionTypeBadge[evt.actionType].bg} ${actionTypeBadge[evt.actionType].text}`}>
                        {evt.action}
                      </span>
                    </td>

                    <td className="py-3.5 px-4 max-w-xs">
                      <div className="font-medium text-[#142033] truncate">{evt.resource}</div>
                      <div className="text-[11px] text-[#64748B] truncate">{evt.details}</div>
                    </td>

                    <td className="py-3.5 px-4 text-right font-mono text-[10px] text-slate-400">
                      SHA256: {evt.id.toLowerCase()}...3a
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Technical Notice */}
        <div className="mt-8 p-4 bg-white border border-[#DFE6EF] rounded-xl text-center text-xs text-[#64748B]">
          <strong>Operational Logging Notice:</strong> This interactive activity feed demonstrates workspace telemetry and internal tracking records. It is distinct from immutable hardware-backed storage or legally mandated audit logs.
        </div>
      </div>
    </section>
  );
};
