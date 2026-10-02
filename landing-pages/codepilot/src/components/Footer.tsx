import React from 'react';
import { Github, Twitter, Linkedin, MessageSquare } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="border-t border-codepilot-border bg-[#050608] text-codepilot-muted font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand Info (col 1 & 2 on mobile, col 1 on md) */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded bg-codepilot-panel border border-brand-green/30 flex items-center justify-center font-mono font-bold text-brand-green shadow-glow-green">
                &gt;_
              </div>
              <span className="font-mono font-bold text-base text-codepilot-white tracking-wider">
                CODEPILOT
              </span>
            </a>

            <p className="text-xs text-codepilot-dim font-mono">
              “Ship better code, faster.”
            </p>

            <div className="flex items-center gap-3 pt-2 text-codepilot-dim">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-green transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-green transition-colors"
                aria-label="X / Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-green transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-green transition-colors"
                aria-label="Discord"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-codepilot-text font-bold mb-3">
              Product
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#features" className="hover:text-codepilot-white transition-colors">Features</a></li>
              <li><a href="#editor-showcase" className="hover:text-codepilot-white transition-colors">AI Assistant</a></li>
              <li><a href="#code-review" className="hover:text-codepilot-white transition-colors">Code Review</a></li>
              <li><a href="#integrations" className="hover:text-codepilot-white transition-colors">Integrations</a></li>
              <li><a href="#pricing" className="hover:text-codepilot-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Developers Links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-codepilot-text font-bold mb-3">
              Developers
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#faq" className="hover:text-codepilot-white transition-colors">Documentation</a></li>
              <li><a href="#command-palette" className="hover:text-codepilot-white transition-colors">API Reference</a></li>
              <li><a href="#workflow" className="hover:text-codepilot-white transition-colors">CLI Tool</a></li>
              <li><a href="#features" className="hover:text-codepilot-white transition-colors">Changelog</a></li>
              <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-codepilot-white transition-colors">GitHub Repository</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-codepilot-text font-bold mb-3">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#product" className="hover:text-codepilot-white transition-colors">About</a></li>
              <li><a href="#testimonials" className="hover:text-codepilot-white transition-colors">Careers <span className="text-[10px] px-1 py-0.5 rounded bg-brand-green/20 text-brand-green font-mono">Hiring</span></a></li>
              <li><a href="#faq" className="hover:text-codepilot-white transition-colors">Contact</a></li>
              <li><a href="#security" className="hover:text-codepilot-white transition-colors">Security Policy</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-codepilot-text font-bold mb-3">
              Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#security" className="hover:text-codepilot-white transition-colors">Privacy Policy</a></li>
              <li><a href="#pricing" className="hover:text-codepilot-white transition-colors">Terms of Service</a></li>
              <li><a href="#security" className="hover:text-codepilot-white transition-colors">Security Architecture</a></li>
              <li><a href="#product" className="hover:text-codepilot-white transition-colors">Telemetry Disclosures</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-codepilot-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-codepilot-dim">
          <div>
            © 2026 CodePilot. All rights reserved. Built for developers who ship.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-brand-green">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
              All Systems Operational (99.9%)
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
