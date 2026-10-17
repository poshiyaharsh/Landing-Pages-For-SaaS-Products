import React from 'react';
import { DocuLogo } from './DocuLogo';

interface FooterProps {
  onExploreWorkspace: () => void;
  onOpenPrivacyModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onExploreWorkspace }) => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t border-docu-border py-16 text-xs text-docu-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <DocuLogo size="md" />
            <p className="text-xs text-docu-secondary leading-relaxed max-w-sm">
              Your documents. Now truly intelligent. DocuMind transforms unstructured files into verifiable, grounded knowledge for modern teams.
            </p>
            <div className="pt-2 text-[11px] font-mono text-docu-muted">
              Designed with minimal AI typography & coordinate precision.
            </div>
          </div>

          {/* Platform Links */}
          <div className="space-y-3">
            <h4 className="font-mono text-[11px] uppercase tracking-wider font-semibold text-docu-text">
              Platform
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={onExploreWorkspace}
                  className="hover:text-docu-text transition-colors text-left"
                >
                  Workspace Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#features')}
                  className="hover:text-docu-text transition-colors text-left"
                >
                  AI Document Chat
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#features')}
                  className="hover:text-docu-text transition-colors text-left"
                >
                  Smart Search
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#features')}
                  className="hover:text-docu-text transition-colors text-left"
                >
                  Document Summaries
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#features')}
                  className="hover:text-docu-text transition-colors text-left"
                >
                  Document Comparison
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h4 className="font-mono text-[11px] uppercase tracking-wider font-semibold text-docu-text">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#faq" className="hover:text-docu-text transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-docu-text transition-colors">
                  Retrieval Guides
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-docu-text transition-colors">
                  Help Center & FAQ
                </a>
              </li>
              <li>
                <a href="#workspace" className="hover:text-docu-text transition-colors">
                  Research Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div className="space-y-3">
            <h4 className="font-mono text-[11px] uppercase tracking-wider font-semibold text-docu-text">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <span className="text-docu-secondary hover:text-docu-text cursor-pointer">About DocuMind</span>
              </li>
              <li>
                <span className="text-docu-secondary hover:text-docu-text cursor-pointer">Security Practices</span>
              </li>
              <li>
                <span className="text-docu-secondary hover:text-docu-text cursor-pointer">Contact Team</span>
              </li>
              <li>
                <span className="text-docu-secondary hover:text-docu-text cursor-pointer">Privacy Policy</span>
              </li>
              <li>
                <span className="text-docu-secondary hover:text-docu-text cursor-pointer">Terms of Service</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-docu-border/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-docu-muted">
          <p>© 2026 DocuMind. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span>Client-side Prototype Release</span>
            <span>·</span>
            <span>Zero Third-Party Training</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
