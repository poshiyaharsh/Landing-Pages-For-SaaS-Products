import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-ink text-brand-ivory pt-20 pb-12 border-t border-brand-border-dark">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded border border-brand-taupe/40 bg-brand-charcoal text-brand-ivory flex items-center justify-center">
                <span className="font-serif text-lg font-semibold tracking-tighter">B</span>
              </div>
              <span className="font-serif text-2xl font-medium tracking-tight text-brand-ivory">
                Brandly<span className="text-brand-taupe text-xs align-super ml-0.5">®</span>
              </span>
            </div>

            <p className="text-sm text-brand-taupe font-sans max-w-sm leading-relaxed">
              Your entire brand, beautifully organized. The digital brand management workspace built for luxury editorial rigor and creative velocity.
            </p>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-brand-taupe">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-ivory transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-ivory transition-colors"
              >
                Pinterest
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-ivory transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-ivory transition-colors"
              >
                Dribbble
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div className="space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-taupe block">
              Platform
            </span>
            <ul className="space-y-2 text-xs font-sans text-brand-ivory/80">
              <li><a href="#platform" className="hover:text-brand-champagne transition-colors">Overview</a></li>
              <li><a href="#brand-kits" className="hover:text-brand-champagne transition-colors">Brand Kits</a></li>
              <li><a href="#features" className="hover:text-brand-champagne transition-colors">Asset Library</a></li>
              <li><a href="#templates" className="hover:text-brand-champagne transition-colors">Templates</a></li>
              <li><a href="#pricing" className="hover:text-brand-champagne transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-taupe block">
              Resources
            </span>
            <ul className="space-y-2 text-xs font-sans text-brand-ivory/80">
              <li><a href="#guidelines" className="hover:text-brand-champagne transition-colors">Brand Guidelines</a></li>
              <li><a href="#features" className="hover:text-brand-champagne transition-colors">Design Resources</a></li>
              <li><a href="#" className="hover:text-brand-champagne transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-brand-champagne transition-colors">Editorial Blog</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-taupe block">
              Company
            </span>
            <ul className="space-y-2 text-xs font-sans text-brand-ivory/80">
              <li><a href="#" className="hover:text-brand-champagne transition-colors">About</a></li>
              <li><a href="#" className="hover:text-brand-champagne transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-brand-champagne transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-taupe block">
              Legal
            </span>
            <ul className="space-y-2 text-xs font-sans text-brand-ivory/80">
              <li><a href="#" className="hover:text-brand-champagne transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-champagne transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-champagne transition-colors">Security Standards</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-brand-taupe">
          <p>© 2026 Brandly. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Built with Luxury Editorial Rigor</span>
            <span>·</span>
            <span>Stockholm & Paris</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
