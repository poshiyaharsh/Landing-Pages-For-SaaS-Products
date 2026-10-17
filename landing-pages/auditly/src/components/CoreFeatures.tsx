import React, { useState } from 'react';
import { 
  Layers, 
  AlertTriangle, 
  FileText, 
  History, 
  CheckSquare, 
  BarChart3, 
  ArrowRight, 
  CheckCircle2, 
  Sliders, 
  ShieldCheck,
  Calendar,
  Clock,
  User,
  Download
} from 'lucide-react';

interface CoreFeaturesProps {
  onNavigateToModule?: (moduleId: string) => void;
}

export const CoreFeatures: React.FC<CoreFeaturesProps> = ({ onNavigateToModule }) => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 'frameworks',
      number: '01',
      title: 'Compliance Frameworks',
      description: 'Organize requirements and map your internal controls against the frameworks relevant to your organization.',
      badges: ['SOC 2 Type II', 'ISO/IEC 27001', 'GDPR', 'NIST CSF', 'HIPAA'],
      disclaimer: 'Framework templates serve as organizational baselines and do not automatically guarantee compliance certification.',
      preview: {
        header: 'Framework Mapping Matrix',
        subtitle: 'SOC 2 Trust Services Criteria',
        stats: [
          { label: 'Total Requirements', val: '48' },
          { label: 'Controls Mapped', val: '41' },
          { label: 'Implementation', val: '86%' },
        ],
        items: [
          { code: 'CC6.1', name: 'Logical access security perimeter', status: 'Implemented' },
          { code: 'CC6.2', name: 'User registration & access lifecycle', status: 'Implemented' },
          { code: 'CC6.3', name: 'Revocation of terminated credentials', status: 'In Review' },
        ]
      }
    },
    {
      id: 'risk',
      number: '02',
      title: 'Risk Management',
      description: 'Identify, assess, assign, and track risks through a structured workflow.',
      badges: ['5×5 Matrix', 'Risk Register', 'Likelihood Scoring', 'Mitigation Owners'],
      disclaimer: 'Risk scores reflect internal criteria and facilitate proactive threat management modeling.',
      preview: {
        header: 'Risk Register & Impact Grid',
        subtitle: 'Likelihood × Impact Assessment',
        stats: [
          { label: 'Critical Risks', val: '2' },
          { label: 'High Risks', val: '4' },
          { label: 'Moderate', val: '5' },
        ],
        items: [
          { code: 'RSK-104', name: 'Legacy host patching delays', status: 'Critical' },
          { code: 'RSK-101', name: 'Excessive privileged access in prod', status: 'High' },
          { code: 'RSK-103', name: 'Missing automated restore log', status: 'High' },
        ]
      }
    },
    {
      id: 'evidence',
      number: '03',
      title: 'Evidence Collection',
      description: 'Keep supporting documents, control evidence, and review notes organized and easy to find.',
      badges: ['Document Library', 'Metadata & Hashes', 'Linked Controls', 'Review Cadences'],
      disclaimer: 'Evidence tracking organizes records for inspection; auditor verification requires independent evaluation.',
      preview: {
        header: 'Centralized Evidence Library',
        subtitle: 'Cryptographic Hashing & Linked Verification',
        stats: [
          { label: 'Approved Artifacts', val: '35' },
          { label: 'Pending Review', val: '4' },
          { label: 'Expiring Soon', val: '2' },
        ],
        items: [
          { code: 'PDF', name: 'Access_Review_Q3.pdf (2.4 MB)', status: 'Approved' },
          { code: 'PDF', name: 'Backup_Test_Report.pdf (1.8 MB)', status: 'Approved' },
          { code: 'DOCX', name: 'Incident_Response_Policy.docx', status: 'In Review' },
        ]
      }
    },
    {
      id: 'audit-trail',
      number: '04',
      title: 'Audit Trails',
      description: 'Maintain a clear record of important activities, changes, reviews, and decisions.',
      badges: ['Timestamped Activity', 'Actor & Role Identity', 'Event Identifiers', 'Resource Tagging'],
      disclaimer: 'Chronological activity feed for operational accountability. Distinct from tamper-resistant hardware logs.',
      preview: {
        header: 'Chronological Activity Ledger',
        subtitle: 'Event Stream & Modification Trace',
        stats: [
          { label: 'Events Today', val: '28' },
          { label: 'Control Edits', val: '12' },
          { label: 'Evidence Adds', val: '6' },
        ],
        items: [
          { code: 'EVT-9042', name: 'Remediation task assigned to M. Vance', status: '11:04 AM' },
          { code: 'EVT-9041', name: 'Risk assessment updated on RSK-104', status: '10:36 AM' },
          { code: 'EVT-9040', name: 'Control review completed by D. Chen', status: '10:18 AM' },
        ]
      }
    },
    {
      id: 'remediation',
      number: '05',
      title: 'Remediation Workflows',
      description: 'Assign corrective actions, establish deadlines, and track work through completion.',
      badges: ['Task Kanban', 'Owner Accountability', 'Priority Flags', 'Overdue Tracking'],
      disclaimer: 'Action item tracking links identified control weaknesses to explicit resolution deadlines.',
      preview: {
        header: 'Remediation Action Kanban',
        subtitle: 'To Do • In Progress • Completed',
        stats: [
          { label: 'To Do', val: '3' },
          { label: 'In Progress', val: '4' },
          { label: 'Completed', val: '14' },
        ],
        items: [
          { code: 'CRITICAL', name: 'Review privileged access for production', status: 'Overdue' },
          { code: 'HIGH', name: 'Update incident response documentation', status: 'In Progress' },
          { code: 'MEDIUM', name: 'Collect automated database backup logs', status: 'In Progress' },
        ]
      }
    },
    {
      id: 'reporting',
      number: '06',
      title: 'Compliance Reporting',
      description: 'Turn control status and risk information into reports that stakeholders can understand.',
      badges: ['Executive Summaries', 'CSV Telemetry Export', 'Control Breakdown', 'Auditor Packs'],
      disclaimer: 'Reports reflect internal operational metrics from current workspace data.',
      preview: {
        header: 'Stakeholder Readiness Report',
        subtitle: 'Auditor & Executive Export Packages',
        stats: [
          { label: 'SOC 2 Ready', val: '86%' },
          { label: 'ISO 27001', val: '78%' },
          { label: 'GDPR Score', val: '81%' },
        ],
        items: [
          { code: 'PDF', name: 'SOC 2 Q3 Executive Summary Package', status: 'Generated' },
          { code: 'CSV', name: 'Control_Status_Matrix_Export.csv', status: 'Ready' },
          { code: 'CSV', name: 'Risk_Register_Telemetry.csv', status: 'Ready' },
        ]
      }
    }
  ];

  return (
    <section id="platform" className="py-20 bg-white border-b border-[#DFE6EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold text-[#3569D4] uppercase tracking-wider font-mono bg-[#EAF1FF] px-2.5 py-1 rounded">
            CORE PLATFORM CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#142033] mt-3 tracking-tight">
            Everything you need to manage compliance.
          </h2>
          <p className="text-base text-[#64748B] mt-3 leading-relaxed">
            Six interconnected modules built to replace scattered documents and bring operational rigor to every audit cycle.
          </p>
        </div>

        {/* Feature Navigation Tabs */}
        <div className="flex overflow-x-auto pb-4 gap-2 border-b border-[#DFE6EF] scrollbar-none mb-8">
          {features.map((f, idx) => (
            <button
              key={f.id}
              onClick={() => setActiveFeature(idx)}
              className={`px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                activeFeature === idx
                  ? 'bg-[#142C4E] text-white shadow-sm'
                  : 'bg-[#F6F8FB] text-[#64748B] hover:text-[#142033] hover:bg-[#EEF2F7]'
              }`}
            >
              <span className="font-mono opacity-60">{f.number}</span>
              <span>{f.title}</span>
            </button>
          ))}
        </div>

        {/* Active Feature Showcase */}
        {(() => {
          const current = features[activeFeature];
          return (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F6F8FB] border border-[#DFE6EF] rounded-2xl p-6 sm:p-10 shadow-subtle">
              {/* Left Column: Feature Narrative */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#3569D4]">
                  <span>FEATURE {current.number}</span>
                  <span>•</span>
                  <span>ENTERPRISE GOVERNANCE</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#142033]">
                  {current.title}
                </h3>

                <p className="text-sm text-[#64748B] leading-relaxed">
                  {current.description}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {current.badges.map((b, i) => (
                    <span 
                      key={i}
                      className="px-2.5 py-1 rounded bg-white border border-[#DFE6EF] text-xs font-medium text-[#142033]"
                    >
                      {b}
                    </span>
                  ))}
                </div>

                <div className="p-3 bg-white rounded-lg border border-[#DFE6EF] text-[11px] text-[#64748B] leading-relaxed">
                  <strong>Important Notice:</strong> {current.disclaimer}
                </div>

                <div className="pt-2">
                  <a
                    href={`#${current.id}`}
                    onClick={(e) => {
                      if (onNavigateToModule) {
                        e.preventDefault();
                        onNavigateToModule(current.id);
                      }
                    }}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#3569D4] hover:text-[#2853B8] transition-colors"
                  >
                    <span>View interactive {current.title.toLowerCase()} module</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Realistic Feature Interactive Preview Box */}
              <div className="lg:col-span-7">
                <div className="bg-white rounded-xl border border-[#DFE6EF] shadow-card p-5 sm:p-6 space-y-4">
                  {/* Card Title */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#DFE6EF]">
                    <div>
                      <h4 className="text-sm font-bold text-[#142033] font-display">{current.preview.header}</h4>
                      <p className="text-[11px] text-[#64748B]">{current.preview.subtitle}</p>
                    </div>
                    <span className="font-mono text-xs font-semibold bg-[#EAF1FF] text-[#3569D4] px-2 py-0.5 rounded">
                      Live Telemetry
                    </span>
                  </div>

                  {/* 3 Metric Pills */}
                  <div className="grid grid-cols-3 gap-2">
                    {current.preview.stats.map((s, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-[#F6F8FB] border border-[#DFE6EF] text-center">
                        <div className="text-[10px] text-[#64748B] uppercase">{s.label}</div>
                        <div className="text-lg font-bold font-display text-[#142033] mt-0.5">{s.val}</div>
                      </div>
                    ))}
                  </div>

                  {/* Sample rows */}
                  <div className="space-y-2 pt-1">
                    <div className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider">
                      Operational Items Preview
                    </div>
                    {current.preview.items.map((row, idx) => (
                      <div 
                        key={idx}
                        className="p-3 rounded-lg border border-[#DFE6EF] bg-[#F6F8FB]/50 hover:bg-white transition-colors flex items-center justify-between text-xs"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="font-mono font-bold text-[#142C4E] bg-white px-2 py-0.5 rounded border border-[#DFE6EF] text-[11px]">
                            {row.code}
                          </span>
                          <span className="font-medium text-[#142033] truncate">{row.name}</span>
                        </div>
                        <span className="font-semibold text-xs px-2 py-0.5 rounded ml-2 shrink-0 bg-[#EAF1FF] text-[#3569D4]">
                          {row.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
};
