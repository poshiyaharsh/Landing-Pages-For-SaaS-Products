import React from 'react';
import { NestLogo } from './NestLogo';

interface FooterProps {
  onExploreConsole: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onExploreConsole }) => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t border-nest-border py-16 text-xs text-nest-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 space-y-4">
            <NestLogo size="md" />
            <p className="text-xs text-nest-secondary leading-relaxed max-w-sm">
              Infrastructure without the complexity. CloudNest unifies deployments, service topology, real-time observability, and cost governance in one developer-friendly platform.
            </p>
            <div className="pt-2 text-[11px] font-mono text-nest-muted">
              “Everything your infrastructure needs. Nothing it doesn't.”
            </div>
          </div>

          {/* Platform Links */}
          <div className="space-y-3">
            <h4 className="font-mono text-[11px] uppercase tracking-wider font-bold text-nest-text">
              Platform
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={onExploreConsole}
                  className="hover:text-nest-text transition-colors text-left"
                >
                  Overview Console
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#features')}
                  className="hover:text-nest-text transition-colors text-left"
                >
                  Deployments
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#topology')}
                  className="hover:text-nest-text transition-colors text-left"
                >
                  Service Topology
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#monitoring')}
                  className="hover:text-nest-text transition-colors text-left"
                >
                  Observability
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#cost')}
                  className="hover:text-nest-text transition-colors text-left"
                >
                  Cost Visibility
                </button>
              </li>
            </ul>
          </div>

          {/* Developers */}
          <div className="space-y-3">
            <h4 className="font-mono text-[11px] uppercase tracking-wider font-bold text-nest-text">
              Developers
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollTo('#developer-experience')}
                  className="hover:text-nest-text transition-colors text-left"
                >
                  Documentation
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#developer-experience')}
                  className="hover:text-nest-text transition-colors text-left"
                >
                  CLI Tooling
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#developer-experience')}
                  className="hover:text-nest-text transition-colors text-left"
                >
                  API Reference
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#developer-experience')}
                  className="hover:text-nest-text transition-colors text-left"
                >
                  cloudnest.yaml Spec
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#console')}
                  className="hover:text-nest-text transition-colors text-left"
                >
                  Platform Changelog
                </button>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div className="space-y-3">
            <h4 className="font-mono text-[11px] uppercase tracking-wider font-bold text-nest-text">
              Company & Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <span className="text-nest-secondary hover:text-nest-text cursor-pointer">About CloudNest</span>
              </li>
              <li>
                <span className="text-nest-secondary hover:text-nest-text cursor-pointer">Security Standards</span>
              </li>
              <li>
                <span className="text-nest-secondary hover:text-nest-text cursor-pointer">Privacy Policy</span>
              </li>
              <li>
                <span className="text-nest-secondary hover:text-nest-text cursor-pointer">Terms of Service</span>
              </li>
              <li>
                <span className="text-nest-secondary hover:text-nest-text cursor-pointer">Contact SRE Team</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-nest-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-nest-muted">
          <p>© 2026 CloudNest. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span>Client-side Prototype Demonstration</span>
            <span>·</span>
            <span>Zero Remote Credentials Required</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
