import React from 'react';
import {
  ShieldCheck,
  Lock,
  Server,
  KeyRound,
  FileText,
  Users,
  Cpu
} from 'lucide-react';

export const Security: React.FC = () => {
  const securityFeatures = [
    {
      title: 'Secure Code Processing',
      desc: 'In-memory AST generation with immediate teardown. Your source code is never used to train public foundation models.',
      icon: <Cpu className="w-5 h-5 text-brand-green" />
    },
    {
      title: 'Encrypted Data in Transit',
      desc: 'TLS 1.3 encryption across all communication pathways between your local editor, CLI, and inference nodes.',
      icon: <Lock className="w-5 h-5 text-brand-cyan" />
    },
    {
      title: 'Workspace Isolation',
      desc: 'Containerized sandboxes isolate every repository’s vector embeddings and inference threads.',
      icon: <Server className="w-5 h-5 text-brand-purple" />
    },
    {
      title: 'Granular Access Controls',
      desc: 'Configure repository-level permissions, branch guardrails, and role-based policies across teams.',
      icon: <KeyRound className="w-5 h-5 text-brand-amber" />
    },
    {
      title: 'Audit Logs & Telemetry',
      desc: 'Inspect detailed logs of every AI prompt, code generation, and PR review action taken in your org.',
      icon: <FileText className="w-5 h-5 text-brand-green" />
    },
    {
      title: 'Enterprise Permissions',
      desc: 'SAML SSO, SCIM provisioning, and team-scoped environment isolation for enterprise control.',
      icon: <Users className="w-5 h-5 text-brand-cyan" />
    }
  ];

  return (
    <section className="py-20 lg:py-28 relative bg-codepilot-bg" id="security">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>DATA INTEGRITY &amp; PRIVACY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-codepilot-white mb-6">
            Your code stays yours.
          </h2>

          <p className="text-base sm:text-lg text-codepilot-muted leading-relaxed">
            Engineered with strict zero-retention principles. Your intellectual property, proprietary algorithms, and repository secrets remain strictly confined to your environment.
          </p>
        </div>

        {/* Technical Flow Diagram: CODE -> SECURE PROCESSING -> ISOLATED WORKSPACE -> DEVELOPER */}
        <div className="mb-16 p-6 sm:p-8 rounded-2xl bg-codepilot-panel border border-codepilot-border shadow-terminal">
          <div className="text-center mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan font-bold">
              TECHNICAL ARCHITECTURE PIPELINE
            </span>
            <p className="text-xs text-codepilot-dim font-mono mt-1">
              Deterministic, isolated data flow with zero cross-tenant contamination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center relative">
            {/* Step 1: CODE */}
            <div className="p-5 rounded-xl bg-codepilot-surface border border-codepilot-border text-center flex flex-col items-center">
              <div className="w-10 h-10 rounded-lg bg-codepilot-bg border border-codepilot-border flex items-center justify-center font-mono font-bold text-xs text-brand-cyan mb-3">
                &lt;/&gt;
              </div>
              <h4 className="font-mono text-sm font-bold text-codepilot-white mb-1">
                CODE
              </h4>
              <p className="text-[11px] text-codepilot-dim font-mono">
                Local repository files &amp; staged git diffs
              </p>
            </div>

            {/* Step 2: SECURE PROCESSING */}
            <div className="p-5 rounded-xl bg-codepilot-surface border border-brand-green/30 text-center flex flex-col items-center shadow-glow-green/10">
              <div className="w-10 h-10 rounded-lg bg-brand-green/10 border border-brand-green/30 flex items-center justify-center font-mono font-bold text-xs text-brand-green mb-3">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="font-mono text-sm font-bold text-brand-green mb-1">
                SECURE PROCESSING
              </h4>
              <p className="text-[11px] text-codepilot-dim font-mono">
                Ephemeral in-memory AST &amp; zero training retention
              </p>
            </div>

            {/* Step 3: ISOLATED WORKSPACE */}
            <div className="p-5 rounded-xl bg-codepilot-surface border border-brand-cyan/30 text-center flex flex-col items-center shadow-glow-cyan/10">
              <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center font-mono font-bold text-xs text-brand-cyan mb-3">
                <Server className="w-5 h-5" />
              </div>
              <h4 className="font-mono text-sm font-bold text-brand-cyan mb-1">
                ISOLATED WORKSPACE
              </h4>
              <p className="text-[11px] text-codepilot-dim font-mono">
                Dedicated sandbox &amp; private vector index
              </p>
            </div>

            {/* Step 4: DEVELOPER */}
            <div className="p-5 rounded-xl bg-codepilot-surface border border-codepilot-border text-center flex flex-col items-center">
              <div className="w-10 h-10 rounded-lg bg-brand-purple/10 border border-brand-purple/30 flex items-center justify-center font-mono font-bold text-xs text-brand-purple mb-3">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="font-mono text-sm font-bold text-brand-purple mb-1">
                DEVELOPER
              </h4>
              <p className="text-[11px] text-codepilot-dim font-mono">
                Sub-40ms response back to your local IDE
              </p>
            </div>
          </div>
        </div>

        {/* 6 Security Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-xl bg-codepilot-panel border border-codepilot-border hover:border-codepilot-border-highlight transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-codepilot-surface border border-codepilot-border flex items-center justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="text-base font-bold text-codepilot-white mb-2">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-codepilot-muted leading-relaxed font-sans">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
