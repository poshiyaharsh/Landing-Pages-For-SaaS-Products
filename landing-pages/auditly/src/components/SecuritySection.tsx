import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Key, 
  Server, 
  Database, 
  FileCheck, 
  ArrowRight, 
  CheckCircle2,
  Eye,
  FolderGit2
} from 'lucide-react';

export const SecuritySection: React.FC = () => {
  const securityPrinciples = [
    { title: 'Controlled Access', desc: 'Enforce principle of least privilege across internal roles and external auditor scopes.' },
    { title: 'Clear Ownership', desc: 'Every requirement, evidence file, and risk finding must have an explicitly named human owner.' },
    { title: 'Traceable Activity', desc: 'Immutable chronological logging of all state updates, document views, and export generations.' },
    { title: 'Document Handling Controls', desc: 'Granular permissions restricting evidence download access to authorized personnel.' },
    { title: 'Role-Based Authorization Concepts', desc: 'Structured role taxonomy ensuring separation between control owners and auditing observers.' },
    { title: 'Explicit Retention Policies', desc: 'Configurable automated archiving and verifiable disposal cadences for expired audit records.' },
  ];

  return (
    <section id="security" className="py-20 bg-white border-b border-[#DFE6EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold text-[#3569D4] uppercase tracking-wider font-mono bg-[#EAF1FF] px-2.5 py-1 rounded">
            SECURITY & PRIVACY ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#142033] mt-3 tracking-tight">
            Trust starts with transparent design.
          </h2>
          <p className="text-base text-[#64748B] mt-3 leading-relaxed">
            We build compliance tooling on transparent operational foundations: discrete permission boundaries, explicit record ownership, and auditable data handling.
          </p>
        </div>

        {/* Technical Architecture Flow Diagram: User → Access Control → Compliance Workspace → Activity Record */}
        <div className="bg-[#101927] rounded-2xl p-6 sm:p-10 border border-[#283955] text-white shadow-enterprise mb-14">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-mono text-[#3569D4] font-semibold uppercase tracking-wider">
              OPERATIONAL DATA FLOW
            </span>
            <h3 className="text-xl font-display font-bold mt-1 text-white">
              End-to-End Governance Architecture
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              User identity authentication, scope enforcement, unified workspace execution, and immutable ledger logging.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {/* Step 1: User */}
            <div className="bg-[#172236] p-5 rounded-xl border border-[#283955] text-center space-y-2 relative">
              <div className="w-10 h-10 rounded-lg bg-[#142C4E] text-[#3569D4] flex items-center justify-center mx-auto">
                <Key className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-white font-mono">1. User Identity</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Hardware token MFA & SAML SSO authentication session.
              </p>
            </div>

            {/* Step 2: Access Control */}
            <div className="bg-[#172236] p-5 rounded-xl border border-[#283955] text-center space-y-2 relative">
              <div className="w-10 h-10 rounded-lg bg-[#142C4E] text-[#159B91] flex items-center justify-center mx-auto">
                <Lock className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-white font-mono">2. Access Control</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                RBAC policy evaluation determining read/write privileges.
              </p>
            </div>

            {/* Step 3: Compliance Workspace */}
            <div className="bg-[#172236] p-5 rounded-xl border border-[#3569D4]/50 text-center space-y-2 relative ring-1 ring-[#3569D4]/20">
              <div className="w-10 h-10 rounded-lg bg-[#3569D4] text-white flex items-center justify-center mx-auto">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-white font-mono">3. Compliance Workspace</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Control status tracking, evidence storage & risk registry.
              </p>
            </div>

            {/* Step 4: Activity Record */}
            <div className="bg-[#172236] p-5 rounded-xl border border-[#283955] text-center space-y-2 relative">
              <div className="w-10 h-10 rounded-lg bg-[#142C4E] text-[#17865C] flex items-center justify-center mx-auto">
                <FileCheck className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-white font-mono">4. Activity Record</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Cryptographically hashed audit events logged with event IDs.
              </p>
            </div>
          </div>
        </div>

        {/* 6 Security Principles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {securityPrinciples.map((sp, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-xl border border-[#DFE6EF] bg-[#F6F8FB] hover:bg-white hover:border-[#3569D4]/40 hover:shadow-subtle transition-all"
            >
              <div className="w-8 h-8 rounded-lg bg-white border border-[#DFE6EF] flex items-center justify-center mb-3 text-[#3569D4]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-[#142033]">{sp.title}</h4>
              <p className="text-xs text-[#64748B] mt-1.5 leading-relaxed">{sp.desc}</p>
            </div>
          ))}
        </div>

        {/* Security transparency footer */}
        <div className="mt-10 p-4 bg-[#F6F8FB] border border-[#DFE6EF] rounded-xl text-center text-xs text-[#64748B]">
          <strong>Security Commitment:</strong> Auditly adheres to modern secure software engineering practices. Architectural representations illustrate design controls and do not constitute external certifications or warranties.
        </div>
      </div>
    </section>
  );
};
