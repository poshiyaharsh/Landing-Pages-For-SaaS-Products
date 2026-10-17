import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { AuditlyLogo } from './AuditlyLogo';

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenSignIn: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo, onOpenSignIn }) => {
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
    { name: 'Platform', href: '#platform' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Frameworks', href: '#frameworks' },
    { name: 'Security', href: '#security' },
    { name: 'Resources', href: '#resources' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled 
          ? 'bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#DFE6EF] shadow-subtle' 
          : 'bg-[#F6F8FB]/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Left: Auditly Wordmark */}
        <div className="flex items-center gap-8">
          <a href="#" className="focus:outline-none focus:ring-2 focus:ring-[#3569D4] rounded-lg">
            <AuditlyLogo size="md" />
          </a>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#64748B] hover:text-[#142C4E] transition-colors focus:outline-none focus:ring-2 focus:ring-[#3569D4] rounded px-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenSignIn}
            className="px-4 py-2 text-sm font-semibold text-[#142C4E] hover:text-[#3569D4] transition-colors focus:outline-none focus:ring-2 focus:ring-[#3569D4] rounded-lg"
          >
            Sign In
          </button>

          <button
            onClick={onOpenDemo}
            className="px-4 py-2 text-sm font-semibold text-white bg-[#142C4E] hover:bg-[#0D1D35] active:scale-[0.98] transition-all rounded-lg shadow-sm flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#142C4E]"
          >
            <span>Book a Demo</span>
            <ArrowRight className="w-4 h-4 text-[#3569D4]" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={onOpenDemo}
            className="px-3 py-1.5 text-xs font-semibold text-white bg-[#142C4E] rounded-md"
          >
            Demo
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#142033] hover:bg-[#EEF2F7] focus:outline-none focus:ring-2 focus:ring-[#3569D4]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#DFE6EF] shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-3 pb-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-[#142033] hover:bg-[#F6F8FB] rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-[#DFE6EF] flex flex-col gap-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenSignIn(); }}
                className="w-full py-2.5 px-4 text-center text-sm font-semibold text-[#142C4E] bg-[#EEF2F7] rounded-lg hover:bg-slate-200"
              >
                Sign In
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenDemo(); }}
                className="w-full py-2.5 px-4 text-center text-sm font-semibold text-white bg-[#3569D4] rounded-lg hover:bg-[#2853B8] shadow-sm flex items-center justify-center gap-2"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
