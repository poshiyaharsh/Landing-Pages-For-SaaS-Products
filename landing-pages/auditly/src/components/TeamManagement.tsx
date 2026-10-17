import React, { useState } from 'react';
import { 
  Users, 
  ShieldCheck, 
  UserCheck, 
  Lock, 
  Info, 
  CheckCircle2, 
  Clock, 
  Briefcase,
  ChevronRight
} from 'lucide-react';
import { TeamMember, UserRole } from '../types';

interface TeamManagementProps {
  teamMembers: TeamMember[];
  onRoleSwitchToast?: (name: string, newRole: string) => void;
}

export const TeamManagement: React.FC<TeamManagementProps> = ({
  teamMembers,
  onRoleSwitchToast
}) => {
  const [selectedRoleFilter, setSelectedRoleFilter] = useState<string>('All');
  const [members, setMembers] = useState<TeamMember[]>(teamMembers);

  const roleDescriptions: Record<UserRole, string> = {
    'Administrator': 'Full access to organization settings, team provisioning, framework mapping, and report generation.',
    'Compliance Manager': 'Manages framework baselines, assigns controls, updates risk registers, and oversees remediation deadlines.',
    'Auditor': 'Read-only access to all control evidence, timestamped activity trails, and report export matrices.',
    'Control Owner': 'Maintains operational controls, uploads evidence artifacts, and completes periodic sign-off reviews.',
    'Viewer': 'Executive visibility into aggregate compliance readiness and high-level risk distribution.',
  };

  const handleRoleChange = (memberId: string, newRole: UserRole) => {
    setMembers(prev => prev.map(m => m.id === memberId ? { ...m, role: newRole } : m));
    const member = members.find(m => m.id === memberId);
    if (onRoleSwitchToast && member) {
      onRoleSwitchToast(member.name, newRole);
    }
  };

  const filteredMembers = members.filter(m => {
    return selectedRoleFilter === 'All' || m.role === selectedRoleFilter;
  });

  return (
    <section className="py-20 bg-white border-b border-[#DFE6EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold text-[#3569D4] uppercase tracking-wider font-mono bg-[#EAF1FF] px-2.5 py-1 rounded">
            ROLE-BASED ACCESS & GOVERNANCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#142033] mt-3 tracking-tight">
            Clear ownership. Better accountability.
          </h2>
          <p className="text-base text-[#64748B] mt-3 leading-relaxed">
            Ensure every compliance requirement has an accountable owner while providing auditors and leadership with appropriate, structured visibility.
          </p>
        </div>

        {/* Roles Summary Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {(['Administrator', 'Compliance Manager', 'Auditor', 'Control Owner', 'Viewer'] as UserRole[]).map((role) => (
            <button
              key={role}
              onClick={() => setSelectedRoleFilter(selectedRoleFilter === role ? 'All' : role)}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                selectedRoleFilter === role
                  ? 'border-[#3569D4] bg-[#EAF1FF]/40 shadow-sm'
                  : 'border-[#DFE6EF] bg-[#F6F8FB] hover:bg-white'
              }`}
            >
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-bold text-[#142C4E]">{role}</span>
                <span className="font-mono text-[10px] text-[#64748B]">
                  {members.filter(m => m.role === role).length}
                </span>
              </div>
              <p className="text-[11px] text-[#64748B] line-clamp-2 leading-relaxed">
                {roleDescriptions[role]}
              </p>
            </button>
          ))}
        </div>

        {/* Team Members Table */}
        <div className="bg-white rounded-2xl border border-[#DFE6EF] shadow-card overflow-hidden">
          <div className="p-4 bg-[#F6F8FB] border-b border-[#DFE6EF] flex items-center justify-between text-xs">
            <span className="font-semibold text-[#142033]">
              Workspace Personnel & Role Assignment ({filteredMembers.length})
            </span>
            {selectedRoleFilter !== 'All' && (
              <button
                onClick={() => setSelectedRoleFilter('All')}
                className="text-[#3569D4] hover:underline font-semibold"
              >
                Show All Roles
              </button>
            )}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#F6F8FB] border-b border-[#DFE6EF] text-[#64748B] font-semibold">
                <tr>
                  <th className="py-3 px-4">Team Member</th>
                  <th className="py-3 px-4">Department</th>
                  <th className="py-3 px-4">Assigned Role</th>
                  <th className="py-3 px-4 text-center">Controls Owned</th>
                  <th className="py-3 px-4 text-center">Pending Tasks</th>
                  <th className="py-3 px-4 text-right">Last Active</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DFE6EF]">
                {filteredMembers.map((member) => (
                  <tr key={member.id} className="hover:bg-[#F6F8FB] transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-[#142033]">{member.name}</div>
                      <div className="font-mono text-[11px] text-[#64748B]">{member.email}</div>
                    </td>

                    <td className="py-3.5 px-4 text-[#64748B]">
                      {member.department}
                    </td>

                    <td className="py-3.5 px-4">
                      <select
                        value={member.role}
                        onChange={(e) => handleRoleChange(member.id, e.target.value as UserRole)}
                        className="px-2.5 py-1 text-xs rounded-md border border-[#DFE6EF] bg-white font-medium text-[#142C4E] focus:outline-none focus:ring-1 focus:ring-[#3569D4]"
                      >
                        <option value="Administrator">Administrator</option>
                        <option value="Compliance Manager">Compliance Manager</option>
                        <option value="Auditor">Auditor</option>
                        <option value="Control Owner">Control Owner</option>
                        <option value="Viewer">Viewer</option>
                      </select>
                    </td>

                    <td className="py-3.5 px-4 text-center font-mono font-semibold text-[#142033]">
                      {member.assignedControls}
                    </td>

                    <td className="py-3.5 px-4 text-center font-mono font-semibold text-[#C17A18]">
                      {member.pendingTasks}
                    </td>

                    <td className="py-3.5 px-4 text-right text-[#64748B]">
                      {member.lastActivity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Prototype RBAC Disclaimer mandated in Section 16 */}
        <div className="mt-8 p-4 bg-[#F6F8FB] border border-[#DFE6EF] rounded-xl text-center text-xs text-[#64748B]">
          <strong>Access Control Architecture Notice:</strong> These role-assignment settings represent prototype interface workflows for testing permissions modeling. They do not constitute actual backend authentication boundaries, which in production require enterprise identity providers (IdP) and cryptographic token enforcement.
        </div>
      </div>
    </section>
  );
};
