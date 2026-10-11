import React from 'react';
import { Activity, Github, Twitter, Linkedin, Disc as Discord, Shield, Terminal } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  return (
    <footer id="footer" className="bg-[#080B12] text-secondary border-t border-border-subtle relative overflow-hidden">
      {/* Top subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-3 group mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 flex items-center justify-center shadow-[0_0_20px_rgba(82,232,255,0.25)] group-hover:shadow-[0_0_25px_rgba(82,232,255,0.4)] transition-all">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5 text-black"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 10v4" />
                  <path d="M8 7v10" />
                  <path d="M12 4v16" />
                  <path d="M16 7v10" />
                  <path d="M20 10v4" />
                  <path d="M7 12l5 6 5-6" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-white tracking-tight flex items-center gap-1">
                  VoiceFlow <span className="text-cyan-400">AI</span>
                </span>
                <span className="text-[10px] font-mono text-secondary tracking-widest uppercase">
                  Speech Intelligence OS
                </span>
              </div>
            </a>

            <p className="text-sm text-secondary/80 max-w-sm mb-6 leading-relaxed">
              Turn conversations into intelligence. Real-time speech recognition, natural voice synthesis, and conversational understanding in one unified developer platform.
            </p>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131A28] border border-border-subtle text-[11px] font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                All Voice Nodes Operational (99.98%)
              </span>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#features" className="hover:text-cyan-400 transition-colors">
                  Speech Recognition
                </a>
              </li>
              <li>
                <a href="#tts-studio" className="hover:text-cyan-400 transition-colors">
                  Voice Generation
                </a>
              </li>
              <li>
                <a href="#intelligence" className="hover:text-cyan-400 transition-colors">
                  Conversation Intelligence
                </a>
              </li>
              <li>
                <a href="#workspace" className="hover:text-cyan-400 transition-colors">
                  Voice Analytics
                </a>
              </li>
              <li>
                <a href="#builder" className="hover:text-cyan-400 transition-colors">
                  Agent Builder
                </a>
              </li>
            </ul>
          </div>

          {/* Developers Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4">
              Developers
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#api" className="hover:text-cyan-400 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#api" className="hover:text-cyan-400 transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#demo" className="hover:text-cyan-400 transition-colors">
                  Interactive Demos
                </a>
              </li>
              <li>
                <a href="#integrations" className="hover:text-cyan-400 transition-colors">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#api" className="hover:text-cyan-400 transition-colors">
                  SDK Changelog
                </a>
              </li>
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4">
              Company & Legal
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#use-cases" className="hover:text-cyan-400 transition-colors">
                  Industry Solutions
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-cyan-400 transition-colors">
                  Privacy & Governance
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-cyan-400 transition-colors">
                  Compute Pricing
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Privacy Framework
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenTerms}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border-subtle/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="text-secondary/70">
            © 2026 VoiceFlow AI. All rights reserved. Built for conversational intelligence.
          </div>

          <div className="flex items-center gap-6 text-secondary/70">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-cyan-400" />
              <span>TLS 1.3 Certified Channels</span>
            </span>
            <span className="text-border-subtle">|</span>
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-violet-400" />
              <span>v2.4.0 Engine</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
