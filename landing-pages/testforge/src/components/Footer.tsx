import React from 'react';
import { TestForgeLogo } from './TestForgeLogo';
import { Terminal, Shield, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-zinc-900 py-16 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand info */}
          <div className="lg:col-span-2">
            <TestForgeLogo />
            <p className="mt-4 text-xs text-zinc-400 leading-relaxed max-w-sm">
              Continuous test intelligence, automated failure triage, and forensic CI trace replay for high-performing engineering teams.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {/* GitHub */}
              <a 
                href="#github" 
                aria-label="GitHub"
                className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-emerald-400 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              {/* Twitter / X */}
              <a 
                href="#twitter" 
                aria-label="Twitter"
                className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-emerald-400 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a 
                href="#linkedin" 
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-emerald-400 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0-.01-3.2 1.6 1.6 0 0 0 .01 3.2m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-xs font-mono font-semibold text-white tracking-wider uppercase mb-4">Platform</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#demo" className="hover:text-emerald-400 transition-colors">Test Runner Demo</a></li>
              <li><a href="#features" className="hover:text-emerald-400 transition-colors">Features & Triage</a></li>
              <li><a href="#lifecycle" className="hover:text-emerald-400 transition-colors">Test Lifecycle</a></li>
              <li><a href="#failure-analysis" className="hover:text-emerald-400 transition-colors">Failure Diagnostics</a></li>
              <li><a href="#ecosystem" className="hover:text-emerald-400 transition-colors">CI/CD Integrations</a></li>
              <li><a href="#pricing" className="hover:text-emerald-400 transition-colors">Pricing & Plans</a></li>
            </ul>
          </div>

          {/* Developer resources */}
          <div>
            <h4 className="text-xs font-mono font-semibold text-white tracking-wider uppercase mb-4">Developers</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#cli" className="hover:text-emerald-400 transition-colors">CLI Documentation</a></li>
              <li><a href="#playwright" className="hover:text-emerald-400 transition-colors">Playwright Plugin</a></li>
              <li><a href="#vitest" className="hover:text-emerald-400 transition-colors">Vitest Reporter</a></li>
              <li><a href="#opentelemetry" className="hover:text-emerald-400 transition-colors">OpenTelemetry Ingest</a></li>
              <li><a href="#github-action" className="hover:text-emerald-400 transition-colors">GitHub Action v2</a></li>
              <li><a href="#status" className="hover:text-emerald-400 transition-colors">System Status (99.98%)</a></li>
            </ul>
          </div>

          {/* SaaS Portfolio catalog */}
          <div>
            <h4 className="text-xs font-mono font-semibold text-white tracking-wider uppercase mb-4">SaaS Portfolio</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="http://localhost:5198" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1">FlowOps (Port 5198) <ExternalLink className="w-3 h-3 text-zinc-600" /></a></li>
              <li><a href="http://localhost:5199" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1">InsightOS (Port 5199) <ExternalLink className="w-3 h-3 text-zinc-600" /></a></li>
              <li><a href="http://localhost:5200" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1">CreatorHub (Port 5200) <ExternalLink className="w-3 h-3 text-zinc-600" /></a></li>
              <li><a href="http://localhost:5201" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1">TalentOS (Port 5201) <ExternalLink className="w-3 h-3 text-zinc-600" /></a></li>
              <li><a href="http://localhost:5202" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1">MarketMind (Port 5202) <ExternalLink className="w-3 h-3 text-zinc-600" /></a></li>
              <li><a href="http://localhost:5203" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1">PrivacyX (Port 5203) <ExternalLink className="w-3 h-3 text-zinc-600" /></a></li>
              <li><a href="http://localhost:5205" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1">APIHub (Port 5205) <ExternalLink className="w-3 h-3 text-zinc-600" /></a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} TestForge Technologies Inc. All rights reserved.
          </div>
          <div className="text-[11px] text-zinc-600 text-center sm:text-right">
            Demonstration prototype. Simulated test runs &amp; diagnostic fixtures.
          </div>
        </div>
      </div>
    </footer>
  );
};
