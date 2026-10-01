import React, { useState, useEffect } from 'react';
import { Rocket, ArrowRight, Menu, X, Sparkles } from 'lucide-react';
import { navigationLinks } from '../data/launchData.js';

export default function Navbar({ onOpenCta }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#070A11]/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-500 via-violet-600 to-blue-500 p-[1.5px] shadow-lg shadow-violet-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#070A11] rounded-[10px] flex items-center justify-center">
                <Rocket size={20} className="text-pink-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl tracking-tight text-white flex items-center">
                LaunchKit<span className="text-pink-500 font-bold">.</span>
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 -mt-1 font-semibold">
                Growth Platform
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 bg-slate-900/60 border border-white/5 px-6 py-2 rounded-full backdrop-blur-sm">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-150 relative py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => onOpenCta('login')}
              className="text-sm font-semibold text-slate-300 hover:text-white px-3 py-2 transition-colors duration-150"
            >
              Log in
            </button>
            <button
              onClick={() => onOpenCta('get-started')}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 hover:from-pink-600 hover:via-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Start Building</span>
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            aria-label="Toggle Navigation Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-200 hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[68px] z-40 bg-[#070A11]/95 backdrop-blur-xl md:hidden px-6 py-8 flex flex-col justify-between border-t border-white/10 animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="space-y-4" onClick={(e) => e.stopPropagation()}>
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block text-lg font-semibold text-slate-200 hover:text-pink-400 py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 space-y-3" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCta('login');
              }}
              className="w-full py-3 rounded-xl border border-white/10 text-slate-200 font-semibold text-center hover:bg-white/5"
            >
              Log in
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCta('get-started');
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-violet-600 text-white font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-pink-500/25"
            >
              <span>Start Building →</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
