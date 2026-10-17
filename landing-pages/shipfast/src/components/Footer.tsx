import React from 'react';
import { Terminal, Code2, Globe } from 'lucide-react';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onStartBuilding: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection, onStartBuilding }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 font-sans text-xs py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <span className="text-xl font-bold text-white tracking-tight">Ship</span>
              <span className="text-xl font-bold text-blue-500 tracking-tight">Fast</span>
              <span className="ml-2 px-1.5 py-0.5 text-[10px] uppercase font-mono font-bold tracking-wider text-blue-400 bg-blue-950/70 border border-blue-500/30 rounded">
                v1.0.4
              </span>
            </div>
            <p className="text-slate-400 text-xs max-w-sm leading-relaxed">
              From idea to deployed product. The unified developer launch platform coordinating project setup, checklists, and CI/CD pipelines.
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
              Platform
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigateSection('features')}
                  className="hover:text-white transition-colors"
                >
                  Features & Tools
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('workflow-builder')}
                  className="hover:text-white transition-colors"
                >
                  Workflow Builder
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('ecosystem')}
                  className="hover:text-white transition-colors"
                >
                  Ecosystem Recipes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('devex')}
                  className="hover:text-white transition-colors"
                >
                  Developer Experience
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
                <a href="#workflow-builder" className="hover:text-white transition-colors">
                  Setup Checklists
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing Plans
                </a>
              </li>
              <li>
                <span className="text-slate-600">CLI Changelog</span>
              </li>
            </ul>
          </div>

          {/* Links 3 */}
          <div>
            <h4 className="text-white uppercase font-bold text-xs tracking-wider mb-3 font-mono">
              Deployment
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={onStartBuilding} className="text-blue-400 hover:underline">
                  Launch Demo Builder
                </button>
              </li>
              <li>
                <span className="text-slate-500">Next.js 15 App Router</span>
              </li>
              <li>
                <span className="text-slate-500">Vite React 19 Starter</span>
              </li>
              <li>
                <span className="text-slate-500">Zero Cloud Siphon</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            &copy; {new Date().getFullYear()} ShipFast Inc. All rights reserved. Built with UI UX Pro Max.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Security Practices</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
