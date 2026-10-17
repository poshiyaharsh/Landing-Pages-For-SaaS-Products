import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { SyncSpaceLogo } from './SyncSpaceLogo';

interface NavbarProps {
  onOpenSignup: () => void;
  onOpenLogin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSignup, onOpenLogin }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Product', href: '#features' },
    { name: 'Solutions', href: '#use-cases' },
    { name: 'Resources', href: '#workspace-demo' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E4E2EB] shadow-subtle' 
          : 'bg-[#FAF9FC]/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <div className="flex items-center gap-8">
          <a href="#" className="focus:outline-none focus:ring-2 focus:ring-[#4F46E5] rounded-lg">
            <SyncSpaceLogo size="md" />
          </a>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-[#0F172A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#4F46E5] rounded px-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenLogin}
            className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-[#4F46E5] transition-colors"
          >
            Log in
          </button>

          <button
            onClick={onOpenSignup}
            className="px-4 py-2 text-sm font-semibold text-white bg-[#4F46E5] hover:bg-[#4338CA] active:scale-95 transition-all rounded-xl shadow-sm flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4F46E5]"
          >
            <span>Start for free</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={onOpenSignup}
            className="px-3 py-1.5 text-xs font-semibold text-white bg-[#4F46E5] rounded-lg"
          >
            Start free
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-200/50 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E4E2EB] shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-3 pb-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-slate-800 hover:bg-[#FAF9FC] rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-[#E4E2EB] flex flex-col gap-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenLogin(); }}
                className="w-full py-2.5 px-4 text-center text-sm font-semibold text-slate-700 bg-slate-100 rounded-xl hover:bg-slate-200"
              >
                Log in
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenSignup(); }}
                className="w-full py-2.5 px-4 text-center text-sm font-semibold text-white bg-[#4F46E5] rounded-xl hover:bg-[#4338CA] shadow-sm flex items-center justify-center gap-2"
              >
                <span>Start for free</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
