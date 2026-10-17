import React from 'react';
import { SyncSpaceLogo } from './SyncSpaceLogo';

interface FooterProps {
  onOpenSignup: () => void;
  onOpenLogin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSignup, onOpenLogin }) => {
  return (
    <footer className="bg-[#FAF9FC] text-slate-600 border-t border-[#E4E2EB] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-[#E4E2EB]">
          {/* Brand Info */}
          <div className="col-span-2 space-y-4">
            <SyncSpaceLogo size="md" />
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              One workspace. Every team. Bring projects, knowledge, conversations, and decisions together in one beautifully organized workspace.
            </p>
            <div className="text-xs text-slate-400 flex items-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Multiplayer Sync: 99.98% Operational</span>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] font-mono">
              Product
            </h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li><a href="#features" className="hover:text-[#4F46E5] transition-colors">Shared Workspaces</a></li>
              <li><a href="#workspace-demo" className="hover:text-[#4F46E5] transition-colors">Visual Sprint Boards</a></li>
              <li><a href="#features" className="hover:text-[#4F46E5] transition-colors">Knowledge Docs</a></li>
              <li><a href="#features" className="hover:text-[#4F46E5] transition-colors">Live Collaboration</a></li>
              <li><a href="#pricing" className="hover:text-[#4F46E5] transition-colors">Pricing Plans</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] font-mono">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li><a href="#use-cases" className="hover:text-[#4F46E5] transition-colors">Product & Engineering</a></li>
              <li><a href="#use-cases" className="hover:text-[#4F46E5] transition-colors">Design & Creative</a></li>
              <li><a href="#use-cases" className="hover:text-[#4F46E5] transition-colors">Marketing & Ops</a></li>
              <li><a href="#use-cases" className="hover:text-[#4F46E5] transition-colors">Remote & Hybrid</a></li>
              <li>
                <button onClick={onOpenLogin} className="hover:text-[#4F46E5] transition-colors text-left">
                  Workspace Log in
                </button>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] font-mono">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li><a href="#" className="hover:text-[#4F46E5] transition-colors">About Us</a></li>
              <li><button onClick={onOpenSignup} className="hover:text-[#4F46E5] transition-colors text-left">Start Free</button></li>
              <li><a href="#" className="hover:text-[#4F46E5] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#4F46E5] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#4F46E5] transition-colors">Security Architecture</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 SyncSpace Inc. All rights reserved.
          </div>
          <div className="text-[11px] text-slate-400">
            SyncSpace is an independent SaaS concept designed with UI/UX Pro Max standards.
          </div>
        </div>
      </div>
    </footer>
  );
};
