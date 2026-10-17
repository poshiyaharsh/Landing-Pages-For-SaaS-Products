import React, { useState } from 'react';
import { 
  Bot, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Send, 
  ShieldAlert, 
  CheckSquare, 
  Layers, 
  FileText,
  UserCheck
} from 'lucide-react';

interface AutomationShowcaseProps {
  onNavigateToSection?: (sectionId: string) => void;
}

export const AutomationShowcase: React.FC<AutomationShowcaseProps> = ({ onNavigateToSection }) => {
  const [selectedPrompt, setSelectedPrompt] = useState<string>('Summarize the outstanding items in this framework.');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [assistantOutput, setAssistantOutput] = useState<{
    summary: string;
    items: string[];
    actions: { label: string; target: string }[];
  }>({
    summary: 'Three controls need attention, two evidence items are awaiting review, and one remediation task is overdue.',
    items: [
      'Control AC-04 (Access permissions) is scheduled for review on Oct 31.',
      'Control VM-05 (Vendor assessment) has 2 sub-processor bridge letters expiring.',
      'Task TSK-501 (Privileged database credentials) is currently 3 days past SLA window.',
    ],
    actions: [
      { label: 'View Outstanding Items', target: 'dashboard' },
      { label: 'Open Framework', target: 'frameworks' },
      { label: 'Review Tasks', target: 'remediation' },
    ]
  });

  const promptOptions = [
    'Summarize the outstanding items in this framework.',
    'Which controls have evidence expiring within 30 days?',
    'What critical risks lack an assigned remediation owner?',
  ];

  const handleRunQuery = (query: string) => {
    setSelectedPrompt(query);
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      if (query.includes('expiring')) {
        setAssistantOutput({
          summary: 'Two evidence files require renewal within the upcoming 30-day window.',
          items: [
            'Vendor_Assessment.xlsx (EVD-304) expires on Oct 25, 2026.',
            'Backup_Test_Report.pdf (EVD-302) requires monthly drill re-verification on Nov 12.',
          ],
          actions: [
            { label: 'Open Evidence Library', target: 'resources' },
            { label: 'Notify Document Owners', target: 'dashboard' },
          ]
        });
      } else if (query.includes('critical risks')) {
        setAssistantOutput({
          summary: 'All critical and high severity risks currently have assigned owners.',
          items: [
            'RSK-104 (Legacy host patching): Assigned to Elena Rostova (In Progress).',
            'RSK-101 (Excessive privileged access): Assigned to Sarah Jenkins (Active).',
          ],
          actions: [
            { label: 'Inspect Risk Register', target: 'risk' },
            { label: 'View 5×5 Matrix', target: 'risk' },
          ]
        });
      } else {
        setAssistantOutput({
          summary: 'Three controls need attention, two evidence items are awaiting review, and one remediation task is overdue.',
          items: [
            'Control AC-04 (Access permissions) is scheduled for review on Oct 31.',
            'Control VM-05 (Vendor assessment) has 2 sub-processor bridge letters expiring.',
            'Task TSK-501 (Privileged database credentials) is currently 3 days past SLA window.',
          ],
          actions: [
            { label: 'View Outstanding Items', target: 'dashboard' },
            { label: 'Open Framework', target: 'frameworks' },
            { label: 'Review Tasks', target: 'remediation' },
          ]
        });
      }
    }, 600);
  };

  const workflowSteps = [
    { step: '01', title: 'Control Review Approaching', desc: 'Auditly monitors configured review cadences (monthly, quarterly, annual).' },
    { step: '02', title: 'Upcoming Deadline Displayed', desc: 'Visual reminders highlight controls entering their review windows.' },
    { step: '03', title: 'Responsible Owner Identified', desc: 'Accountable individuals receive direct workspace notifications.' },
    { step: '04', title: 'Reminder in Activity Stream', desc: 'Timestamped event is logged to maintain visibility across the team.' },
    { step: '05', title: 'Status Updated Upon Sign-off', desc: 'Owner submits evidence link, marking the control verified.' },
  ];

  return (
    <section className="py-20 bg-[#F6F8FB] border-b border-[#DFE6EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold text-[#3569D4] uppercase tracking-wider font-mono bg-[#EAF1FF] px-2.5 py-1 rounded">
            WORKFLOW ASSISTANCE & AUTOMATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#142033] mt-3 tracking-tight">
            Spend less time coordinating compliance work.
          </h2>
          <p className="text-base text-[#64748B] mt-3 leading-relaxed">
            Eliminate repetitive tracking overhead. Automated cadences prompt control owners before deadlines, while intelligent assistance synthesizes outstanding requirements.
          </p>
        </div>

        {/* 5-Step Process Flow Strip */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-12">
          {workflowSteps.map((ws) => (
            <div key={ws.step} className="p-4 rounded-xl bg-white border border-[#DFE6EF] shadow-subtle flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-[#3569D4] bg-[#EAF1FF] px-2 py-0.5 rounded">
                  STEP {ws.step}
                </span>
                <h4 className="text-xs font-bold text-[#142033] mt-2.5">{ws.title}</h4>
                <p className="text-[11px] text-[#64748B] mt-1 leading-relaxed">{ws.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive AI Assistant Showcase Box */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-[#DFE6EF] shadow-card overflow-hidden">
          <div className="p-4 sm:p-5 bg-[#142C4E] text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#3569D4] flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold font-display">Compliance Intelligence Assistant</h3>
                <p className="text-[11px] text-slate-300">Deterministic synthesis of active framework telemetry</p>
              </div>
            </div>
            <span className="text-[11px] font-mono bg-[#1E3C68] text-slate-200 px-2.5 py-1 rounded border border-[#283955]">
              SOC 2 Context
            </span>
          </div>

          <div className="p-6 space-y-5">
            {/* Sample Query Selectors */}
            <div>
              <label className="block text-xs font-semibold text-[#64748B] uppercase mb-2">
                Select an Operational Inquiry:
              </label>
              <div className="flex flex-wrap gap-2">
                {promptOptions.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleRunQuery(opt)}
                    className={`text-xs px-3 py-1.5 rounded-lg border transition-all text-left ${
                      selectedPrompt === opt
                        ? 'border-[#3569D4] bg-[#EAF1FF] text-[#3569D4] font-semibold'
                        : 'border-[#DFE6EF] bg-[#F6F8FB] text-[#142033] hover:bg-slate-100'
                    }`}
                  >
                    "{opt}"
                  </button>
                ))}
              </div>
            </div>

            {/* Response Box */}
            <div className="p-5 rounded-xl border border-[#DFE6EF] bg-[#F6F8FB] space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold text-[#142C4E]">
                <span className="flex items-center gap-1.5">
                  <Bot className="w-4 h-4 text-[#3569D4]" />
                  <span>Synthesized Workspace Finding</span>
                </span>
                {isProcessing && <span className="text-xs text-[#3569D4] animate-pulse">Analyzing...</span>}
              </div>

              <p className="text-sm font-medium text-[#142033] leading-relaxed">
                "{assistantOutput.summary}"
              </p>

              <div className="space-y-1.5 pt-1">
                {assistantOutput.items.map((it, i) => (
                  <div key={i} className="text-xs text-[#64748B] flex items-start gap-2">
                    <span className="text-[#3569D4] font-bold mt-0.5">•</span>
                    <span>{it}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-[#DFE6EF]">
                {assistantOutput.actions.map((act, i) => (
                  <button
                    key={i}
                    onClick={() => onNavigateToSection && onNavigateToSection(act.target)}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white border border-[#DFE6EF] hover:border-[#3569D4] text-[#142033] hover:text-[#3569D4] transition-colors shadow-subtle flex items-center gap-1"
                  >
                    <span>{act.label}</span>
                    <ArrowRight className="w-3 h-3 text-[#3569D4]" />
                  </button>
                ))}
              </div>
            </div>

            {/* Human in the loop disclaimer */}
            <div className="p-3 bg-[#EEF2F7] rounded-lg text-[11px] text-[#64748B] leading-relaxed">
              <strong>Human-in-the-Loop Governance:</strong> Compliance decisions and regulatory attestations require qualified human review. Assistant summaries compile factual workspace records to streamline coordination and do not replace legal or audit counsel.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
