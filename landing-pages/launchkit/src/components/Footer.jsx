import React from 'react';
import { Rocket, Twitter, Linkedin, Github, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Footer({ onOpenCta }) {
  const footerColumns = {
    PRODUCT: [
      { label: 'Features', href: '#features' },
      { label: 'Analytics', href: '#features' },
      { label: 'Landing Pages', href: '#features' },
      { label: 'SEO Audit', href: '#features' },
      { label: 'Campaigns', href: '#features' }
    ],
    COMPANY: [
      { label: 'About Us', href: '#' },
      { label: 'Careers (Hiring)', href: '#' },
      { label: 'Contact Team', href: '#' },
      { label: 'Changelog', href: '#' }
    ],
    RESOURCES: [
      { label: 'Founder Blog', href: '#' },
      { label: 'Launch Guides', href: '#' },
      { label: 'Help Center', href: '#' },
      { label: 'Documentation', href: '#' }
    ],
    LEGAL: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Security & Compliance', href: '#' }
    ]
  };

  const handleLinkClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      e.preventDefault();
      onOpenCta && onOpenCta('info');
    }
  };

  return (
    <footer className="bg-[#05070B] border-t border-white/10 pt-20 pb-12 relative overflow-hidden">
      {/* Decorative gradient glow at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-t from-violet-600/10 via-pink-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 pb-16 border-b border-white/10">
          {/* Brand info */}
          <div className="col-span-2 space-y-5">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-500 to-violet-600 p-[1.5px] shadow-lg shadow-violet-500/20">
                <div className="w-full h-full bg-[#070A11] rounded-[10px] flex items-center justify-center">
                  <Rocket size={20} className="text-pink-400" />
                </div>
              </div>
              <span className="font-display font-black text-2xl tracking-tight text-white">
                LaunchKit<span className="text-pink-500">.</span>
              </span>
            </a>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Everything you need to launch your next big thing. High-converting landing pages, viral marketing, real-time analytics, and verified launch checklists under one roof.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X (formerly Twitter)"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-pink-500/50 hover:bg-slate-800 transition-all duration-200"
              >
                <Twitter size={17} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-200"
              >
                <Linkedin size={17} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-500/50 hover:bg-slate-800 transition-all duration-200"
              >
                <Github size={17} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerColumns).map(([heading, links]) => (
            <div key={heading} className="space-y-4">
              <p className="text-xs font-mono font-bold tracking-widest text-slate-300 uppercase">
                {heading}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-150 flex items-center gap-1 group"
                    >
                      <span>{link.label}</span>
                      {link.href.startsWith('http') && (
                        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 LaunchKit. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              All Systems Operational · 99.98% Uptime
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
