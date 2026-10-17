import React from 'react';
import { AuditlyLogo } from './AuditlyLogo';
import { ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenDemo: () => void;
  onOpenSignIn: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDemo, onOpenSignIn }) => {
  return (
    <footer className="bg-[#101927] text-white border-t border-[#283955] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-[#283955]">
          {/* Brand Info */}
          <div className="col-span-2 space-y-4">
            <AuditlyLogo size="md" variant="dark" />
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Compliance that works for you. An enterprise compliance, risk management, and security governance platform built for teams that take trust seriously.
            </p>
            <div className="text-xs text-slate-400 flex items-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-[#17865C]" />
              <span>Workspace Operational Status: All Systems Verified</span>
            </div>
          </div>

          {/* Platform Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">
              Platform
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#platform" className="hover:text-white transition-colors">Overview</a></li>
              <li><a href="#frameworks" className="hover:text-white transition-colors">Frameworks</a></li>
              <li><a href="#frameworks" className="hover:text-white transition-colors">Controls</a></li>
              <li><a href="#risk" className="hover:text-white transition-colors">Risk Management</a></li>
              <li><a href="#resources" className="hover:text-white transition-colors">Evidence</a></li>
              <li><a href="#reporting" className="hover:text-white transition-colors">Reporting</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">
              Resources
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#resources" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Guides</a></li>
              <li><a href="#security" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#security" className="hover:text-white transition-colors">Security Resources</a></li>
              <li>
                <button onClick={onOpenSignIn} className="hover:text-white transition-colors text-left">
                  Sign In to Workspace
                </button>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">
              Company & Legal
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><button onClick={onOpenDemo} className="hover:text-white transition-colors text-left">Contact / Demo</button></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#security" className="hover:text-white transition-colors">Security Architecture</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 Auditly. All rights reserved.
          </div>

          <div className="text-[11px] text-slate-500 text-center sm:text-right max-w-md">
            Auditly is a compliance management platform. Auditly does not guarantee regulatory compliance, eliminate security vulnerabilities, or substitute for certified external auditors.
          </div>
        </div>
      </div>
    </footer>
  );
};
