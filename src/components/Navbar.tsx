import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Compass } from 'lucide-react';

interface NavbarProps {
  onExploreProgramme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onExploreProgramme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Programme', href: '#programme' },
    { label: 'Academics', href: '#academics' },
    { label: 'Experiences', href: '#experiences' },
    { label: 'Practical Info', href: '#practical' },
    { label: 'Surveys', href: '#surveys' },
  ];

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-[#00b0b9] text-[#0e394c] text-[11px] font-semibold tracking-wider py-2">
        <div className="shell flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#0e394c]/30 animate-pulse"></span>
            <span>UNIVERSITY OF PANNONIA · SUMMER UNIVERSITY 2027</span>
          </div>
          <span className="hidden sm:inline-block text-[#0e394c]/80">
            Veszprém & Lake Balaton, Hungary
          </span>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#e5eaee] transition-all">
        <div className="shell flex items-center justify-between min-h-[82px] gap-6">
          {/* Logo branding */}
          <a href="#" className="flex-shrink-0 flex items-center gap-3 group">
            <img
              src="/images/logo.png"
              alt="University of Pannonia"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-[#193c55]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#00b0b9] transition-colors py-2 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00b0b9] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onExploreProgramme}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-[#285780] hover:bg-[#143651] text-white text-[12px] font-bold tracking-wide transition-all rounded-sm shadow-sm hover:shadow"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Programme</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 text-[#193c55] border border-[#dce4e8] rounded hover:bg-slate-50 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#dce4e8] px-6 py-5 shadow-lg animate-fade-in">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 text-[15px] font-medium text-[#193c55] border-b border-slate-100 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-[#00b0b9]">→</span>
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onExploreProgramme();
                }}
                className="w-full mt-3 py-3 bg-[#285780] text-white text-[13px] font-bold tracking-wide rounded-sm flex items-center justify-center gap-2"
              >
                <Compass className="w-4 h-4" />
                <span>Explore Programme</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
