import React, { useState } from 'react';
import { 
  Users, 
  Shield, 
  Clock, 
  CheckCircle, 
  Filter, 
  UserPlus, 
  Activity, 
  ChevronDown,
  Sparkles,
  Lock
} from 'lucide-react';
import { TEAM_MEMBERS, ACTIVITY_FEED } from '../data/brandData';
import { TeamMember, ActivityEvent } from '../types';

interface CollaborationSectionProps {
  onToast: (title: string, message?: string) => void;
}

export const CollaborationSection: React.FC<CollaborationSectionProps> = ({
  onToast,
}) => {
  const [members, setMembers] = useState<TeamMember[]>(TEAM_MEMBERS);
  const [activeFeedFilter, setActiveFeedFilter] = useState<string>('all');
  const [selectedMemberRole, setSelectedMemberRole] = useState<{ [id: string]: string }>({
    'usr-01': 'Full Admin',
    'usr-02': 'Brand Editor',
    'usr-03': 'Reviewer',
    'usr-04': 'View Only',
  });

  const handleRoleChange = (memberId: string, newRole: string) => {
    setSelectedMemberRole((prev) => ({ ...prev, [memberId]: newRole }));
    const member = members.find((m) => m.id === memberId);
    onToast(`Role Updated for ${member?.name}`, `Permissions set to: ${newRole}`);
  };

  const filteredFeed = ACTIVITY_FEED.filter((item) => {
    if (activeFeedFilter === 'all') return true;
    if (activeFeedFilter === 'approvals') return item.type === 'approval';
    if (activeFeedFilter === 'updates') return item.type === 'update';
    if (activeFeedFilter === 'access') return item.type === 'member';
    return true;
  });

  return (
    <section className="py-24 sm:py-36 bg-brand-ivory border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-brand-taupe block mb-3">
            TEAM GOVERNANCE & AUDIT LOGS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-brand-ink leading-tight mb-4">
            Your whole team, on the same page.
          </h2>
          <p className="text-base sm:text-lg text-brand-charcoal/80 font-sans leading-relaxed">
            Eliminate conflicting edits and unauthorized file downloads. Granular permission tiers empower marketing velocity while protecting your core identity.
          </p>
        </div>

        {/* 2-Column Interface: Team Directory on Left, Live Activity Feed on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Team Directory & Roles (7 cols) */}
          <div className="lg:col-span-7 bg-brand-soft-white rounded-lg border border-brand-border p-6 sm:p-8 flex flex-col justify-between shadow-editorial">
            <div>
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-brand-border">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-ink text-brand-ivory flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-medium text-brand-ink">
                      Team Directory & Workspaces
                    </h3>
                    <span className="text-[10px] font-mono text-brand-taupe uppercase">
                      4 Active Collaborators
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onToast('Guest Invitation Triggered', 'Invite link copied to clipboard for external agency.')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-brand-ivory border border-brand-border text-brand-charcoal hover:bg-brand-ink hover:text-brand-ivory text-xs font-mono transition-colors"
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  <span>Invite Member</span>
                </button>
              </div>

              {/* Members List with Interactive Role Pickers */}
              <div className="space-y-4">
                {members.map((member) => (
                  <div
                    key={member.id}
                    className="p-4 rounded border border-brand-border bg-brand-ivory/40 hover:bg-brand-ivory transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-full border border-brand-border bg-brand-soft-white flex items-center justify-center font-serif text-sm font-bold text-brand-ink shadow-subtle">
                        {member.avatarInitials}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-serif font-medium text-brand-ink">
                            {member.name}
                          </h4>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        </div>
                        <span className="text-xs text-brand-charcoal/70 font-sans block">
                          {member.role} · {member.email}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-auto">
                      <span className="text-[10px] font-mono text-brand-taupe uppercase hidden sm:inline">
                        Access:
                      </span>
                      <select
                        value={selectedMemberRole[member.id]}
                        onChange={(e) => handleRoleChange(member.id, e.target.value)}
                        className="px-2.5 py-1.5 rounded border border-brand-border bg-brand-soft-white text-xs font-mono text-brand-charcoal cursor-pointer focus:border-brand-ink"
                      >
                        <option value="Full Admin">Full Admin</option>
                        <option value="Brand Editor">Brand Editor</option>
                        <option value="Reviewer">Reviewer</option>
                        <option value="View Only">View Only</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-brand-border/60 flex items-center justify-between text-xs font-mono text-brand-taupe">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-brand-olive" /> Role changes reflect in real-time
              </span>
              <span>Audit Log: Encrypted</span>
            </div>
          </div>

          {/* Right Column: Live Activity Audit Feed (5 cols) */}
          <div className="lg:col-span-5 bg-brand-soft-white rounded-lg border border-brand-border p-6 sm:p-8 flex flex-col justify-between shadow-editorial">
            <div>
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-brand-border">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-brand-charcoal" />
                  <h3 className="font-serif text-xl font-medium text-brand-ink">
                    Activity & Approvals
                  </h3>
                </div>

                {/* Filter Tabs */}
                <div className="flex items-center gap-1">
                  {[
                    { id: 'all', label: 'All' },
                    { id: 'approvals', label: 'Sign-offs' },
                    { id: 'updates', label: 'Edits' }
                  ].map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setActiveFeedFilter(f.id)}
                      className={`text-[10px] font-mono px-2 py-1 rounded transition-colors ${
                        activeFeedFilter === f.id
                          ? 'bg-brand-ink text-brand-ivory font-medium'
                          : 'bg-brand-ivory text-brand-taupe hover:text-brand-ink'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Feed Stream */}
              <div className="space-y-4">
                {filteredFeed.map((event) => (
                  <div
                    key={event.id}
                    className="p-3.5 rounded border border-brand-border/80 bg-brand-ivory/50 flex flex-col gap-1.5 relative group hover:border-brand-charcoal transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-mono uppercase tracking-wider text-brand-olive font-semibold px-1.5 py-0.5 rounded bg-brand-champagne/40 border border-brand-border">
                        {event.tag}
                      </span>
                      <span className="text-[10px] font-mono text-brand-taupe">
                        {event.timestamp}
                      </span>
                    </div>

                    <h5 className="font-serif text-sm font-medium text-brand-ink">
                      “{event.text}”
                    </h5>

                    <p className="text-xs text-brand-charcoal/70 leading-relaxed font-sans">
                      {event.detail}
                    </p>

                    <div className="pt-2 mt-1 border-t border-brand-border/40 flex items-center justify-between text-[10px] font-mono text-brand-taupe">
                      <span>Author: {event.user}</span>
                      <span className="text-emerald-700 font-medium">Logged</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-brand-border/60 text-xs font-mono text-brand-taupe text-center">
              Fictional sample audit logs for demonstration.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
