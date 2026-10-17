import React from 'react';
import { MarketMindLogo } from './MarketMindLogo';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05080E] border-t border-white/10 text-slate-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Info */}
          <div className="col-span-2 space-y-4">
            <MarketMindLogo size={28} />
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm font-sans">
              MarketMind provides multi-asset market intelligence, historical timeseries analysis, and research workflow tools for institutional analysts and strategy executives.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub Repository"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                aria-label="Twitter Profile"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 1: Terminal */}
          <div className="space-y-3">
            <h4 className="text-white uppercase text-[11px] font-bold tracking-wider">
              Terminal
            </h4>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-amber-400 transition-colors">Cross-Asset Lens</a></li>
              <li><a href="#demo" className="hover:text-amber-400 transition-colors">Interactive Console</a></li>
              <li><a href="#workflow" className="hover:text-amber-400 transition-colors">Research Lifecycle</a></li>
              <li><a href="#sectors" className="hover:text-amber-400 transition-colors">Factor Heatmap</a></li>
              <li><a href="#feeds" className="hover:text-amber-400 transition-colors">Feed Architecture</a></li>
            </ul>
          </div>

          {/* Column 2: Governance & Disclosures */}
          <div className="space-y-3">
            <h4 className="text-white uppercase text-[11px] font-bold tracking-wider">
              Disclosures
            </h4>
            <ul className="space-y-2">
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">Synthetic Data Notice</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">Bloomberg Independence</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">SEC Rule 17a-4 Logging</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">FIX 4.4 Protocols</a></li>
            </ul>
          </div>

          {/* Column 3: SaaS Suite */}
          <div className="space-y-3">
            <h4 className="text-white uppercase text-[11px] font-bold tracking-wider">
              SaaS Suite
            </h4>
            <ul className="space-y-2">
              <li><a href="http://localhost:5198" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1">FlowOps (Port 5198) <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="http://localhost:5199" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1">InsightOS (Port 5199) <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="http://localhost:5200" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1">CreatorHub (Port 5200) <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="http://localhost:5201" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1">TalentOS (Port 5201) <ArrowUpRight className="w-3 h-3" /></a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} MarketMind Financial Intelligence Systems Inc. Built with UI UX Pro Max.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-amber-400/80">Illustrative Terminal Demo</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Security: SOC2 Type II</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
