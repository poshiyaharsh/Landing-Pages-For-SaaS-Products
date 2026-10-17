import React from 'react';
import { PromptLabLogo } from './PromptLabLogo';
import { Terminal, Github, Twitter, Disc as Discord, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenLab: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection, onOpenLab }) => {
  return (
    <footer className="bg-[#070B14] border-t border-slate-800 text-slate-400 font-mono text-xs py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <PromptLabLogo size="md" />
            <p className="text-slate-400 font-sans text-xs max-w-sm leading-relaxed">
              Build, test, and optimize AI prompts with empirical precision. The structured experimentation laboratory for modern AI engineering teams.
            </p>
            <div className="flex items-center gap-3 text-slate-400 pt-2">
              <span className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-cyan-400 transition-colors cursor-pointer">
                <Terminal className="w-4 h-4" />
              </span>
              <span className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-cyan-400 transition-colors cursor-pointer">
                <Github className="w-4 h-4" />
              </span>
              <span className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-cyan-400 transition-colors cursor-pointer">
                <Twitter className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-white uppercase font-bold text-xs tracking-wider mb-3">
              Platform
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigateSection('playground')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Prompt Playground
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('evaluations')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Evaluation Rubrics
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('features')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Model Comparisons
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('workflow')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Iterative Workflow
                </button>
              </li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-white uppercase font-bold text-xs tracking-wider mb-3">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigateSection('faqs')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Documentation
                </button>
              </li>
              <li>
                <a href="#playground" className="hover:text-cyan-400 transition-colors">
                  Prompt Templates
                </a>
              </li>
              <li>
                <a href="#evaluations" className="hover:text-cyan-400 transition-colors">
                  Benchmark Suites
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-cyan-400 transition-colors">
                  Pricing Plans
                </a>
              </li>
            </ul>
          </div>

          {/* Links 3 */}
          <div>
            <h4 className="text-white uppercase font-bold text-xs tracking-wider mb-3">
              Laboratory
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={onOpenLab} className="text-cyan-400 hover:underline">
                  Launch Sandbox Console
                </button>
              </li>
              <li>
                <span className="text-slate-500">API Documentation (BYOK)</span>
              </li>
              <li>
                <span className="text-slate-500">SOC2 Type II Ready</span>
              </li>
              <li>
                <span className="text-slate-500">Zero Retention Policy</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} PromptLab Inc. All rights reserved. Built with UI UX Pro Max.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Security Whitepaper</span>
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
