import React, { useState } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  FileText, 
  Activity, 
  Layers, 
  ChevronRight,
  TrendingUp,
  Sliders,
  ExternalLink
} from 'lucide-react';

interface HeroSectionProps {
  onOpenDemo: () => void;
  onExplorePlatform: () => void;
  onOpenControlDetail?: (id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenDemo,
  onExplorePlatform,
  onOpenControlDetail
}) => {
  const [activeHeroTab, setActiveHeroTab] = useState<'overview' | 'controls' | 'activity'>('overview');

  const heroActivity = [
    { time: '11:04', action: 'Remediation task assigned', target: 'TSK-501 (Privileged Access)', type: 'task' },
    { time: '10:36', action: 'Risk assessment updated', target: 'RSK-104 (Staging Hosts)', type: 'risk' },
    { time: '10:18', action: 'Control review completed', target: 'AC-04 (Access permissions)', type: 'control' },
    { time: '09:42', action: 'Evidence uploaded', target: 'Backup_Test_Report.pdf', type: 'evidence' },
  ];

  return (
    <section className="relative pt-6 pb-16 sm:pt-10 sm:pb-24 overflow-hidden">
      {/* Background subtle mesh grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#142C4E_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top Header Text */}
        <div className="max-w-3xl mx-auto text-center space-y-5">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF1FF] border border-[#3569D4]/20 text-[#3569D4] text-xs font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3569D4] animate-pulse" />
            COMPLIANCE. CLARITY. CONTROL.
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#142033] tracking-tight leading-[1.12]">
            Compliance that <br className="hidden sm:inline" />
            <span className="text-[#3569D4]">works for you.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed font-normal">
            Bring controls, risks, evidence, and audit workflows together in one organized workspace. 
            Auditly helps your team understand what needs attention and move compliance work forward with confidence.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-white bg-[#142C4E] hover:bg-[#0D1D35] rounded-lg shadow-sm transition-all duration-150 flex items-center justify-center gap-2 active:scale-95"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4 text-[#3569D4]" />
            </button>

            <button
              onClick={onExplorePlatform}
              className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-[#142C4E] bg-white hover:bg-[#F6F8FB] border border-[#DFE6EF] hover:border-[#CBD5E1] rounded-lg shadow-subtle transition-all duration-150 flex items-center justify-center gap-2"
            >
              <span>Explore the Platform</span>
              <ChevronRight className="w-4 h-4 text-[#64748B]" />
            </button>
          </div>

          <div className="pt-1">
            <span className="text-xs text-[#64748B] flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#159B91]" />
              Built for teams that take trust seriously.
            </span>
          </div>
        </div>

        {/* Hero Product Visual: Realistic Compliance Dashboard Preview */}
        <div className="mt-12 sm:mt-16 max-w-5xl mx-auto">
          <div className="rounded-2xl border border-[#DFE6EF] bg-white shadow-enterprise overflow-hidden">
            {/* Window control chrome */}
            <div className="px-4 py-3 bg-[#101927] border-b border-[#283955] flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#C74747]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#C17A18]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#17865C]" />
                </div>
                <span className="font-mono text-[11px] text-slate-400 pl-2">auditly.app/workspace/soc2-preview</span>
              </div>

              <div className="flex items-center gap-2 text-[11px]">
                <span className="px-2 py-0.5 rounded bg-[#172236] border border-[#283955] text-slate-300 font-mono">
                  DEMO WORKSPACE
                </span>
              </div>
            </div>

            {/* Dashboard Inner Container */}
            <div className="p-4 sm:p-6 bg-[#F6F8FB]">
              {/* Workspace Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#DFE6EF]">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#3569D4] bg-[#EAF1FF] px-2 py-0.5 rounded font-mono">
                      SOC 2 TYPE II
                    </span>
                    <span className="text-xs text-[#64748B]">Updated 12 mins ago</span>
                  </div>
                  <h2 className="text-xl font-display font-bold text-[#142033] mt-1">
                    Continuous Compliance & Readiness Posture
                  </h2>
                </div>

                {/* Sub-tabs inside hero preview */}
                <div className="flex items-center bg-[#EEF2F7] p-1 rounded-lg self-start sm:self-auto text-xs font-medium">
                  <button
                    onClick={() => setActiveHeroTab('overview')}
                    className={`px-3 py-1.5 rounded-md transition-all ${
                      activeHeroTab === 'overview'
                        ? 'bg-white text-[#142C4E] shadow-sm font-semibold'
                        : 'text-[#64748B] hover:text-[#142033]'
                    }`}
                  >
                    Metrics & Health
                  </button>
                  <button
                    onClick={() => setActiveHeroTab('controls')}
                    className={`px-3 py-1.5 rounded-md transition-all ${
                      activeHeroTab === 'controls'
                        ? 'bg-white text-[#142C4E] shadow-sm font-semibold'
                        : 'text-[#64748B] hover:text-[#142033]'
                    }`}
                  >
                    Sample Controls
                  </button>
                  <button
                    onClick={() => setActiveHeroTab('activity')}
                    className={`px-3 py-1.5 rounded-md transition-all ${
                      activeHeroTab === 'activity'
                        ? 'bg-white text-[#142C4E] shadow-sm font-semibold'
                        : 'text-[#64748B] hover:text-[#142033]'
                    }`}
                  >
                    Live Activity (4)
                  </button>
                </div>
              </div>

              {/* 4 Metric Cards Mandated in Prompt */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-5">
                {/* Metric 1: Control Status */}
                <div className="bg-white p-4 rounded-xl border border-[#DFE6EF] shadow-subtle hover:border-[#3569D4]/40 transition-colors">
                  <div className="flex items-center justify-between text-xs text-[#64748B]">
                    <span>Control Status</span>
                    <CheckCircle2 className="w-4 h-4 text-[#17865C]" />
                  </div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-2xl font-bold font-display text-[#142033]">86%</span>
                    <span className="text-xs font-semibold text-[#17865C]">Implemented</span>
                  </div>
                  <div className="w-full bg-[#EEF2F7] h-1.5 rounded-full mt-3 overflow-hidden">
                    <div className="bg-[#17865C] h-full rounded-full" style={{ width: '86%' }} />
                  </div>
                  <div className="text-[11px] text-[#64748B] mt-2">41 of 48 controls verified</div>
                </div>

                {/* Metric 2: Evidence Collection */}
                <div className="bg-white p-4 rounded-xl border border-[#DFE6EF] shadow-subtle hover:border-[#3569D4]/40 transition-colors">
                  <div className="flex items-center justify-between text-xs text-[#64748B]">
                    <span>Evidence Collection</span>
                    <FileText className="w-4 h-4 text-[#3569D4]" />
                  </div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-2xl font-bold font-display text-[#142033]">74%</span>
                    <span className="text-xs font-semibold text-[#3569D4]">Complete</span>
                  </div>
                  <div className="w-full bg-[#EEF2F7] h-1.5 rounded-full mt-3 overflow-hidden">
                    <div className="bg-[#3569D4] h-full rounded-full" style={{ width: '74%' }} />
                  </div>
                  <div className="text-[11px] text-[#64748B] mt-2">35 artifacts approved</div>
                </div>

                {/* Metric 3: Open Risks */}
                <div className="bg-white p-4 rounded-xl border border-[#DFE6EF] shadow-subtle hover:border-[#3569D4]/40 transition-colors">
                  <div className="flex items-center justify-between text-xs text-[#64748B]">
                    <span>Open Risks</span>
                    <AlertTriangle className="w-4 h-4 text-[#C17A18]" />
                  </div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-2xl font-bold font-display text-[#142033]">12</span>
                    <span className="text-xs font-semibold text-[#C17A18]">Tracked</span>
                  </div>
                  <div className="w-full bg-[#EEF2F7] h-1.5 rounded-full mt-3 overflow-hidden flex">
                    <div className="bg-[#C74747] h-full" style={{ width: '16%' }} title="Critical: 2" />
                    <div className="bg-[#D97706] h-full" style={{ width: '33%' }} title="High: 4" />
                    <div className="bg-[#C17A18] h-full" style={{ width: '42%' }} title="Moderate: 5" />
                    <div className="bg-[#17865C] h-full" style={{ width: '9%' }} title="Low: 1" />
                  </div>
                  <div className="text-[11px] text-[#64748B] mt-2">2 Critical • 4 High • 5 Mod</div>
                </div>

                {/* Metric 4: Pending Reviews */}
                <div className="bg-white p-4 rounded-xl border border-[#DFE6EF] shadow-subtle hover:border-[#3569D4]/40 transition-colors">
                  <div className="flex items-center justify-between text-xs text-[#64748B]">
                    <span>Pending Reviews</span>
                    <Clock className="w-4 h-4 text-[#142C4E]" />
                  </div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-2xl font-bold font-display text-[#142033]">8</span>
                    <span className="text-xs font-semibold text-[#64748B]">Queue</span>
                  </div>
                  <div className="w-full bg-[#EEF2F7] h-1.5 rounded-full mt-3 overflow-hidden">
                    <div className="bg-[#142C4E] h-full rounded-full" style={{ width: '50%' }} />
                  </div>
                  <div className="text-[11px] text-[#64748B] mt-2">Next due in 4 days</div>
                </div>
              </div>

              {/* Dynamic View depending on activeHeroTab */}
              {activeHeroTab === 'overview' && (
                <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {/* Readiness Breakdown */}
                  <div className="lg:col-span-2 bg-white p-4 rounded-xl border border-[#DFE6EF]">
                    <div className="flex items-center justify-between pb-3 border-b border-[#DFE6EF]">
                      <span className="text-xs font-semibold text-[#142033] flex items-center gap-1.5">
                        <Layers className="w-4 h-4 text-[#3569D4]" />
                        Trust Services Criteria Progress
                      </span>
                      <span className="text-[11px] text-[#64748B]">SOC 2 Type II Baseline</span>
                    </div>

                    <div className="space-y-3 mt-3">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="font-medium text-[#142033]">Security (Common Criteria)</span>
                          <span className="font-mono text-[#17865C] font-semibold">91%</span>
                        </div>
                        <div className="w-full bg-[#EEF2F7] h-2 rounded-full overflow-hidden">
                          <div className="bg-[#17865C] h-full rounded-full" style={{ width: '91%' }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="font-medium text-[#142033]">Availability & Disaster Recovery</span>
                          <span className="font-mono text-[#17865C] font-semibold">88%</span>
                        </div>
                        <div className="w-full bg-[#EEF2F7] h-2 rounded-full overflow-hidden">
                          <div className="bg-[#17865C] h-full rounded-full" style={{ width: '88%' }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="font-medium text-[#142033]">Confidentiality & KMS</span>
                          <span className="font-mono text-[#3569D4] font-semibold">82%</span>
                        </div>
                        <div className="w-full bg-[#EEF2F7] h-2 rounded-full overflow-hidden">
                          <div className="bg-[#3569D4] h-full rounded-full" style={{ width: '82%' }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="font-medium text-[#142033]">Processing Integrity & CI/CD</span>
                          <span className="font-mono text-[#3569D4] font-semibold">78%</span>
                        </div>
                        <div className="w-full bg-[#EEF2F7] h-2 rounded-full overflow-hidden">
                          <div className="bg-[#3569D4] h-full rounded-full" style={{ width: '78%' }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Compact Live Activity Feed mandated in Section 5 */}
                  <div className="bg-white p-4 rounded-xl border border-[#DFE6EF] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-[#DFE6EF]">
                        <span className="text-xs font-semibold text-[#142033] flex items-center gap-1.5">
                          <Activity className="w-4 h-4 text-[#159B91]" />
                          Recent Audit Activity
                        </span>
                        <span className="w-2 h-2 rounded-full bg-[#159B91] animate-ping" />
                      </div>

                      <div className="space-y-2.5 mt-3">
                        {heroActivity.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs">
                            <span className="font-mono font-semibold text-[#3569D4] shrink-0 bg-[#EAF1FF] px-1.5 py-0.5 rounded text-[10px]">
                              {item.time}
                            </span>
                            <div className="min-w-0 flex-1">
                              <p className="font-medium text-[#142033] truncate">{item.action}</p>
                              <p className="text-[11px] text-[#64748B] truncate">{item.target}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 mt-3 border-t border-[#DFE6EF] text-[11px] text-[#64748B] flex items-center justify-between">
                      <span>Simulated audit stream</span>
                      <button 
                        onClick={onExplorePlatform}
                        className="text-[#3569D4] hover:underline font-medium"
                      >
                        Open log →
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeHeroTab === 'controls' && (
                <div className="mt-5 bg-white rounded-xl border border-[#DFE6EF] overflow-hidden">
                  <div className="px-4 py-2.5 bg-slate-50 border-b border-[#DFE6EF] text-xs font-semibold text-[#142033] grid grid-cols-12 gap-2">
                    <span className="col-span-2">ID</span>
                    <span className="col-span-5">Control Title</span>
                    <span className="col-span-3">Owner</span>
                    <span className="col-span-2 text-right">Status</span>
                  </div>
                  <div className="divide-y divide-[#DFE6EF] text-xs">
                    <div 
                      onClick={() => onOpenControlDetail && onOpenControlDetail('AC-04')}
                      className="px-4 py-3 grid grid-cols-12 gap-2 items-center hover:bg-[#F6F8FB] cursor-pointer transition-colors"
                    >
                      <span className="col-span-2 font-mono font-bold text-[#142C4E]">AC-04</span>
                      <span className="col-span-5 font-medium text-[#142033]">Review access permissions</span>
                      <span className="col-span-3 text-[#64748B]">Sarah Jenkins</span>
                      <span className="col-span-2 text-right">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-[#EAF1FF] text-[#3569D4] border border-[#3569D4]/20">
                          In Review
                        </span>
                      </span>
                    </div>

                    <div 
                      onClick={() => onOpenControlDetail && onOpenControlDetail('AC-01')}
                      className="px-4 py-3 grid grid-cols-12 gap-2 items-center hover:bg-[#F6F8FB] cursor-pointer transition-colors"
                    >
                      <span className="col-span-2 font-mono font-bold text-[#142C4E]">AC-01</span>
                      <span className="col-span-5 font-medium text-[#142033]">Multi-factor authentication</span>
                      <span className="col-span-3 text-[#64748B]">Elena Rostova</span>
                      <span className="col-span-2 text-right">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-[#E6F6F0] text-[#17865C] border border-[#17865C]/20">
                          Implemented
                        </span>
                      </span>
                    </div>

                    <div 
                      onClick={() => onOpenControlDetail && onOpenControlDetail('VM-05')}
                      className="px-4 py-3 grid grid-cols-12 gap-2 items-center hover:bg-[#F6F8FB] cursor-pointer transition-colors"
                    >
                      <span className="col-span-2 font-mono font-bold text-[#142C4E]">VM-05</span>
                      <span className="col-span-5 font-medium text-[#142033]">Third-party vendor assessment</span>
                      <span className="col-span-3 text-[#64748B]">Sarah Jenkins</span>
                      <span className="col-span-2 text-right">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-[#FDF5E8] text-[#C17A18] border border-[#C17A18]/20">
                          Needs Attention
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {activeHeroTab === 'activity' && (
                <div className="mt-5 bg-white rounded-xl border border-[#DFE6EF] p-4">
                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-lg bg-[#F6F8FB] border border-[#DFE6EF] flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-semibold text-[#3569D4]">11:04 AM</span>
                        <div>
                          <strong className="text-[#142033]">Remediation task assigned</strong>
                          <div className="text-[#64748B]">TSK-501 (Privileged Access) assigned to Marcus Vance</div>
                        </div>
                      </div>
                      <span className="font-mono text-[11px] text-slate-400">EVT-9042</span>
                    </div>

                    <div className="p-3 rounded-lg bg-[#F6F8FB] border border-[#DFE6EF] flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-semibold text-[#3569D4]">10:36 AM</span>
                        <div>
                          <strong className="text-[#142033]">Risk assessment updated</strong>
                          <div className="text-[#64748B]">RSK-104 impact score adjusted by Elena Rostova</div>
                        </div>
                      </div>
                      <span className="font-mono text-[11px] text-slate-400">EVT-9041</span>
                    </div>

                    <div className="p-3 rounded-lg bg-[#F6F8FB] border border-[#DFE6EF] flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-semibold text-[#3569D4]">10:18 AM</span>
                        <div>
                          <strong className="text-[#142033]">Control review completed</strong>
                          <div className="text-[#64748B]">Control AC-04 marked In Review by David Chen</div>
                        </div>
                      </div>
                      <span className="font-mono text-[11px] text-slate-400">EVT-9040</span>
                    </div>

                    <div className="p-3 rounded-lg bg-[#F6F8FB] border border-[#DFE6EF] flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-semibold text-[#3569D4]">09:42 AM</span>
                        <div>
                          <strong className="text-[#142033]">Evidence uploaded</strong>
                          <div className="text-[#64748B]">Backup_Test_Report.pdf attached to AV-02</div>
                        </div>
                      </div>
                      <span className="font-mono text-[11px] text-slate-400">EVT-9039</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Demonstration Values Disclaimer as mandated in Section 5 */}
            <div className="px-4 py-2.5 bg-[#EEF2F7] border-t border-[#DFE6EF] text-[11px] text-[#64748B] flex items-center justify-between">
              <span>* Fictional demonstration values, not verified product performance claims.</span>
              <span className="hidden sm:inline">Interactive prototype preview</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
