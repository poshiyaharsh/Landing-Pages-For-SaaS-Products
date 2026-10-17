import React from 'react';
import { Layers, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const IntegrationsSection: React.FC = () => {
  const connectors = [
    { name: 'Slack', category: 'Team Comms', desc: 'Post rich channel blocks, interactive approval polls, and DM alerts.', status: 'Native connector' },
    { name: 'Salesforce', category: 'CRM & Pipeline', desc: 'Bi-directional lead sync, account enrichment, and opportunity triggers.', status: 'Native connector' },
    { name: 'HubSpot', category: 'Marketing Automation', desc: 'Sync lifecycle stages, create contacts, and trigger email nurture.', status: 'Native connector' },
    { name: 'Linear', category: 'Issue Tracking', desc: 'Automate backlog creation, triage customer bugs, and update sprints.', status: 'Native connector' },
    { name: 'Stripe', category: 'Billing & Payments', desc: 'Listen to invoice payment failures, dispute webhooks, and subscriptions.', status: 'Native connector' },
    { name: 'PostgreSQL / Snowflake', category: 'Data Warehouse', desc: 'Run parameterized queries, extract nightly cohorts, and sync tables.', status: 'Native connector' },
  ];

  return (
    <section id="integrations" className="py-20 lg:py-28 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Connected Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Connects to your existing{' '}
            <span className="text-blue-600">business stack.</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            No need to replace the tools your team relies on. FlowOps acts as the unified orchestration layer.
          </p>
        </div>

        {/* 6 Connector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {connectors.map((c) => (
            <div
              key={c.name}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-all font-mono group hover:bg-white hover:shadow-lg"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-blue-600 font-bold uppercase">{c.category}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {c.status}
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 font-sans group-hover:text-blue-600 transition-colors">
                {c.name}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans mb-4">
                {c.desc}
              </p>
              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-emerald-600">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  OAuth2 Verified
                </span>
                <span>Ready</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs font-mono text-slate-500">
          * Connector names illustrate supported software workflows. Live data sync requires an authenticated FlowOps account with relevant provider permissions.
        </div>
      </div>
    </section>
  );
};
