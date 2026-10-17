import React, { useState, useEffect } from 'react';
import { PromptLabLogo } from './PromptLabLogo';
import { Menu, X, ArrowRight, Activity, Terminal } from 'lucide-react';

interface NavbarProps {
  onOpenAuth: (mode: 'login' | 'signup') => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuth, onNavigateSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Platform', href: '#features' },
    { label: 'Playground', href: '#playground' },
    { label: 'Evaluations', href: '#evaluations' },
    { label: 'Workflow', href: '#workflow' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Documentation', href: '#faqs' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = href.replace('#', '');
    onNavigateSection(target);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#0B0F19]/90 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Status Indicator */}
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <PromptLabLogo size="md" />
            </a>

            {/* Understated status indicator */}
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 text-[11px] font-mono text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>Experimentation workspace</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-cyan-400 hover:bg-slate-800/40 rounded-md transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={() => onOpenAuth('login')}
              className="px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Sign in
            </button>
            <button
              onClick={() => onOpenAuth('signup')}
              className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs font-mono uppercase tracking-wider rounded-lg shadow-md shadow-cyan-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Open the lab</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => onOpenAuth('signup')}
              className="px-3 py-1.5 bg-cyan-500 text-slate-950 text-xs font-mono font-semibold rounded-md"
            >
              Open lab
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-800/60 border border-slate-700"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-[#0F172A] border border-cyan-500/30 rounded-xl shadow-2xl space-y-3 font-mono">
            <div className="flex items-center gap-2 px-2 py-1 text-xs text-cyan-400 border-b border-slate-800 pb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Experimentation workspace</span>
            </div>
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="block w-full text-left px-3 py-2 text-sm text-slate-200 hover:text-cyan-400 hover:bg-slate-800/60 rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth('login');
                }}
                className="w-full py-2 text-center text-xs text-slate-300 bg-slate-800 rounded-lg"
              >
                Sign in
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth('signup');
                }}
                className="w-full py-2.5 text-center text-xs font-semibold bg-cyan-500 text-slate-950 rounded-lg shadow-md"
              >
                Open the lab
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
