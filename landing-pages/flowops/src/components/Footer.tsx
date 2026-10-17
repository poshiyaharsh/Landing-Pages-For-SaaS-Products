import React from 'react';
import { Terminal, Code2, Globe } from 'lucide-react';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onBuildWorkflow: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection, onBuildWorkflow }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 font-sans text-xs py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <span className="text-xl font-bold text-white tracking-tight">Flow</span>
              <span className="text-xl font-bold text-blue-500 tracking-tight">Ops</span>
              <span className="ml-2 px-1.5 py-0.5 text-[10px] uppercase font-mono font-bold tracking-wider text-blue-400 bg-blue-950/70 border border-blue-500/30 rounded">
                v2.0-cloud
              </span>
            </div>
            <p className="text-slate-400 text-xs max-w-sm leading-relaxed">
              Automate the work behind your work. Visual workflow orchestration and reliable task automation for modern operations teams.
            </p>
            <div className="flex items-center gap-3 text-slate-400 pt-2">
              <span className="p-2 rounded-lg bg-slate-800 hover:text-white transition-colors cursor-pointer">
                <Terminal className="w-4 h-4" />
              </span>
              <span className="p-2 rounded-lg bg-slate-800 hover:text-white transition-colors cursor-pointer">
                <Code2 className="w-4 h-4" />
              </span>
              <span className="p-2 rounded-lg bg-slate-800 hover:text-white transition-colors cursor-pointer">
                <Globe className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-white uppercase font-bold text-xs tracking-wider mb-3 font-mono">
              Product
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigateSection('features')}
                  className="hover:text-white transition-colors"
                >
                  Visual Builder
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('templates')}
                  className="hover:text-white transition-colors"
                >
                  Pre-Built Templates
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('integrations')}
                  className="hover:text-white transition-colors"
                >
                  App Connectors
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('process')}
                  className="hover:text-white transition-colors"
                >
                  How It Works
                </button>
              </li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-white uppercase font-bold text-xs tracking-wider mb-3 font-mono">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigateSection('faqs')}
                  className="hover:text-white transition-colors"
                >
                  Documentation
                </button>
              </li>
              <li>
                <a href="#templates" className="hover:text-white transition-colors">
                  Blueprint Library
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing Plans
                </a>
              </li>
              <li>
                <span className="text-slate-600">API Webhook Spec</span>
              </li>
            </ul>
          </div>

          {/* Links 3 */}
          <div>
            <h4 className="text-white uppercase font-bold text-xs tracking-wider mb-3 font-mono">
              Operations
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={onBuildWorkflow} className="text-blue-400 hover:underline">
                  Launch Interactive Demo
                </button>
              </li>
              <li>
                <span className="text-slate-500">Zero Code Lock-in</span>
              </li>
              <li>
                <span className="text-slate-500">SOC2 Type II Certified</span>
              </li>
              <li>
                <span className="text-slate-500">99.99% Uptime SLA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            &copy; {new Date().getFullYear()} FlowOps Inc. All rights reserved. Built with UI UX Pro Max.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Security Standards</span>
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
