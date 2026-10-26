import React from 'react';
import { PageId } from '../types';
import { SITE_CONTACT, SERVICES_LIST } from '../data/siteData';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUp, Lock, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
  onOpenQuestionnaire: () => void;
  onOpenLogin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage, onOpenQuestionnaire, onOpenLogin }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page: PageId, hashId?: string) => {
    setCurrentPage(page);
    if (hashId) {
      setTimeout(() => {
        const el = document.getElementById(hashId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#09392c] text-white border-t border-emerald-900/60 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-emerald-800/60">
          {/* Col 1: Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-800 border border-emerald-400/30 flex items-center justify-center shadow-lg">
                <span className="font-serif font-black text-2xl text-white">R</span>
              </div>
              <div>
                <h3 className="font-display font-extrabold text-2xl tracking-wider text-white">
                  RENT AGAIN
                </h3>
                <p className="text-xs tracking-widest text-emerald-300 font-semibold uppercase mt-0.5">
                  {SITE_CONTACT.tagline}
                </p>
              </div>
            </div>
            <p className="text-sm text-emerald-100/80 leading-relaxed max-w-md">
              We believe everyone deserves a second chance. RentAgain helps renters overcome credit obstacles,
              rental history challenges, and proof of income barriers through personalized, proven housing programs nationwide.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 bg-emerald-900/80 text-emerald-200 px-3 py-1.5 rounded-full border border-emerald-700/50">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Discreet & Confidential
              </span>
              <span className="inline-flex items-center gap-1.5 bg-emerald-900/80 text-emerald-200 px-3 py-1.5 rounded-full border border-emerald-700/50">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                All 50 States
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <p className="text-xs font-bold tracking-widest text-emerald-400 uppercase">Quick Links</p>
            <ul className="space-y-2 text-sm text-emerald-100/85">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('home', 'how-it-works')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('housing-packages')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Housing Approval Program
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('cosigner')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Co-Applicant Program
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('verified-income')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Verified Income Program
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('instant-approval')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Instant Approval Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('home', 'faq-section')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Book & Programs */}
          <div className="space-y-3">
            <p className="text-xs font-bold tracking-widest text-emerald-400 uppercase">Consultations</p>
            <ul className="space-y-2 text-sm text-emerald-100/85">
              <li>
                <button
                  onClick={() => handleNav('book-online')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Book Online
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('book-consultation')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Book Free Consultation
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenQuestionnaire}
                  className="hover:text-white transition-colors cursor-pointer text-left font-semibold text-emerald-300"
                >
                  Start Questionnaire ➜
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenLogin}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <Lock className="w-3.5 h-3.5 text-emerald-400" />
                  Client Login Portal
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="space-y-3">
            <p className="text-xs font-bold tracking-widest text-emerald-400 uppercase">Contact</p>
            <div className="space-y-3 text-sm text-emerald-100/90">
              <a
                href={`tel:${SITE_CONTACT.phoneClean}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-semibold">{SITE_CONTACT.phone}</span>
              </a>
              <a
                href={`mailto:${SITE_CONTACT.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{SITE_CONTACT.email}</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{SITE_CONTACT.coverage}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-200/70 gap-4">
          <p>© {new Date().getFullYear()} RentAgain. All Rights Reserved. New Chapter New Home.</p>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer text-emerald-300 font-medium"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
