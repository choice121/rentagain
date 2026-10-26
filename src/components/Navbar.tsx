import React, { useState } from 'react';
import { PageId } from '../types';
import { SERVICES_LIST, SITE_CONTACT } from '../data/siteData';
import { ChevronDown, Menu, X, Phone, Lock, ArrowRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  onOpenQuestionnaire: () => void;
  onOpenLogin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
  onOpenQuestionnaire,
  onOpenLogin,
}) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: PageId, hashId?: string) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    setServicesOpen(false);
    if (hashId) {
      setTimeout(() => {
        const el = document.getElementById(hashId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0D4F3D] text-white shadow-md border-b border-emerald-900/40">
      {/* Top micro bar for phone & announcement */}
      <div className="bg-[#09392c] text-[11px] sm:text-xs font-medium text-emerald-100/90 py-1.5 px-3 sm:px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 truncate">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="truncate">Nationwide Rental Assistance • All 50 States</span>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${SITE_CONTACT.phoneClean}`}
              className="flex items-center gap-1 hover:text-white transition-colors font-bold text-emerald-200"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
              <span className="hidden xs:inline">{SITE_CONTACT.phone}</span>
              <span className="xs:hidden">Call Us</span>
            </a>
            <span className="hidden sm:inline text-emerald-700">|</span>
            <button
              onClick={onOpenLogin}
              className="hidden sm:flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
            >
              <Lock className="w-3 h-3 text-emerald-300" />
              <span>Client Portal</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 sm:gap-3.5 text-left group cursor-pointer focus:outline-none"
          >
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br from-emerald-600 to-[#09392c] border border-emerald-400/30 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform shrink-0">
              <span className="font-serif font-extrabold text-xl sm:text-2xl text-white tracking-tighter">
                R
              </span>
            </div>
            <div>
              <div className="font-display font-extrabold text-lg sm:text-xl tracking-wider text-white leading-none">
                RENT AGAIN
              </div>
              <p className="text-[9px] sm:text-[10px] tracking-widest text-emerald-200/80 font-semibold mt-1 uppercase">
                {SITE_CONTACT.tagline}
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-3">
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors cursor-pointer ${
                currentPage === 'home'
                  ? 'text-white bg-emerald-800/60'
                  : 'text-emerald-100/90 hover:text-white hover:bg-emerald-800/40'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('home', 'how-it-works')}
              className="px-3 py-2 text-sm font-semibold text-emerald-100/90 hover:text-white hover:bg-emerald-800/40 rounded-md transition-colors cursor-pointer"
            >
              How It Works
            </button>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-md transition-colors cursor-pointer ${
                  ['housing-packages', 'cosigner', 'verified-income', 'instant-approval'].includes(currentPage)
                    ? 'text-white bg-emerald-800/60'
                    : 'text-emerald-100/90 hover:text-white hover:bg-emerald-800/40'
                }`}
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesOpen && (
                <div className="absolute left-0 mt-1 w-72 bg-white rounded-xl shadow-2xl py-2 z-50 border border-gray-100 text-gray-800 animate-fadeIn">
                  <div className="px-3 py-2 border-b border-gray-100">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Housing Solutions</p>
                  </div>
                  {SERVICES_LIST.map((svc) => (
                    <button
                      key={svc.id}
                      onClick={() => handleNavClick(svc.page)}
                      className="w-full text-left px-4 py-2.5 hover:bg-emerald-50 transition-colors flex flex-col group cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-gray-900 group-hover:text-[#0D4F3D]">
                          {svc.name}
                        </span>
                        <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          {svc.price}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500 line-clamp-1 mt-0.5">
                        {svc.shortDesc}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('home', 'faq-section')}
              className="px-3 py-2 text-sm font-semibold text-emerald-100/90 hover:text-white hover:bg-emerald-800/40 rounded-md transition-colors cursor-pointer"
            >
              FAQ
            </button>

            <button
              onClick={() => handleNavClick('book-online')}
              className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors cursor-pointer ${
                currentPage === 'book-online'
                  ? 'text-white bg-emerald-800/60'
                  : 'text-emerald-100/90 hover:text-white hover:bg-emerald-800/40'
              }`}
            >
              Book Online
            </button>
          </nav>

          {/* Right Action Buttons (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenLogin}
              className="px-3.5 py-2 text-xs font-semibold text-emerald-200 hover:text-white border border-emerald-400/30 rounded-lg hover:border-emerald-300 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Lock className="w-3.5 h-3.5" />
              Log In
            </button>

            <button
              onClick={() => handleNavClick('book-consultation')}
              className="px-4 py-2 text-xs font-bold text-white bg-emerald-700/80 hover:bg-emerald-700 border border-emerald-400/40 rounded-lg transition-all shadow-sm cursor-pointer"
            >
              Book Consultation
            </button>

            <button
              onClick={onOpenQuestionnaire}
              className="px-4 py-2.5 text-xs font-extrabold tracking-wide text-[#0D4F3D] bg-white hover:bg-emerald-50 rounded-lg shadow-md transition-all hover:scale-105 cursor-pointer flex items-center gap-1.5"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Right Actions & Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenQuestionnaire}
              className="px-3 py-2 text-xs font-bold bg-white text-[#0D4F3D] rounded-lg shadow-sm active:scale-95 transition-transform"
            >
              Get Started
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 min-w-[44px] min-h-[44px] text-white hover:bg-emerald-800/80 rounded-lg focus:outline-none cursor-pointer flex items-center justify-center"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#09392c] border-t border-emerald-800/80 px-4 pt-3 pb-8 space-y-3 max-h-[85vh] overflow-y-auto shadow-2xl">
          <div className="flex flex-col space-y-1">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left px-3 py-3 rounded-lg text-sm font-bold min-h-[44px] flex items-center ${
                currentPage === 'home' ? 'bg-emerald-800 text-white' : 'text-emerald-100 hover:bg-emerald-800/40'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('home', 'how-it-works')}
              className="text-left px-3 py-3 rounded-lg text-sm font-semibold text-emerald-100 hover:bg-emerald-800/40 min-h-[44px] flex items-center"
            >
              How It Works
            </button>

            <div className="pt-2 pb-1 px-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">Programs & Services</span>
            </div>
            {SERVICES_LIST.map((svc) => (
              <button
                key={svc.id}
                onClick={() => handleNavClick(svc.page)}
                className={`text-left px-3 py-2.5 rounded-lg text-sm flex items-center justify-between min-h-[44px] ${
                  currentPage === svc.page ? 'bg-emerald-800 text-white font-bold' : 'text-emerald-100 hover:bg-emerald-800/40'
                }`}
              >
                <div className="flex flex-col">
                  <span className="font-semibold">{svc.name}</span>
                  <span className="text-[11px] text-emerald-300">{svc.turnaround}</span>
                </div>
                <span className="text-xs bg-emerald-900/90 text-emerald-200 font-bold px-2.5 py-1 rounded-md border border-emerald-700/60">
                  {svc.price}
                </span>
              </button>
            ))}

            <button
              onClick={() => handleNavClick('home', 'faq-section')}
              className="text-left px-3 py-3 rounded-lg text-sm font-semibold text-emerald-100 hover:bg-emerald-800/40 min-h-[44px] flex items-center"
            >
              FAQ
            </button>

            <button
              onClick={() => handleNavClick('book-online')}
              className={`text-left px-3 py-3 rounded-lg text-sm font-bold min-h-[44px] flex items-center ${
                currentPage === 'book-online' ? 'bg-emerald-800 text-white' : 'text-emerald-100 hover:bg-emerald-800/40'
              }`}
            >
              Book Online
            </button>

            <button
              onClick={() => handleNavClick('book-consultation')}
              className={`text-left px-3 py-3 rounded-lg text-sm font-bold min-h-[44px] flex items-center ${
                currentPage === 'book-consultation' ? 'bg-emerald-800 text-white' : 'text-emerald-100 hover:bg-emerald-800/40'
              }`}
            >
              Book a Free Consultation
            </button>
          </div>

          <div className="pt-4 border-t border-emerald-800/80 flex flex-col gap-2.5">
            <a
              href={`tel:${SITE_CONTACT.phoneClean}`}
              className="w-full py-3.5 text-center text-sm font-extrabold text-[#0D4F3D] bg-white rounded-xl shadow flex items-center justify-center gap-2 min-h-[48px]"
            >
              <Phone className="w-4 h-4" />
              Call Now: {SITE_CONTACT.phone}
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogin();
              }}
              className="w-full py-3 text-center text-xs font-semibold text-emerald-200 bg-emerald-950/70 rounded-xl border border-emerald-700/60 flex items-center justify-center gap-2 min-h-[44px]"
            >
              <Lock className="w-3.5 h-3.5" />
              Client Case Portal Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
