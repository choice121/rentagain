import React, { useState } from 'react';
import { PageId } from '../types';
import {
  Check,
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
  Building,
  FileCheck2,
  ChevronDown,
  Lock,
  BarChart3,
  BadgeCheck,
} from 'lucide-react';

interface VerifiedIncomePageProps {
  setCurrentPage: (page: PageId) => void;
  onOpenQuestionnaire: () => void;
}

export const VerifiedIncomePage: React.FC<VerifiedIncomePageProps> = ({
  setCurrentPage,
  onOpenQuestionnaire,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const incomeFaqs = [
    {
      q: 'Will landlords accept ADP verification?',
      a: 'Yes! ADP is the gold-standard payroll software utilized by Fortune 500 corporations and millions of employers. Landlords and screening agencies (such as AppFolio, RealPage, and Yardi) universally recognize and accept ADP verified documentation.',
    },
    {
      q: 'How long does income processing take?',
      a: 'Both our Standard and Premium packages are delivered within 48 to 72 hours. Priority expedited processing is included with the Premium package.',
    },
    {
      q: 'Can this work if I am self-employed or paid in cash?',
      a: 'Absolutely. A major portion of our clients are 1099 freelancers, independent contractors, small business owners, and gig economy workers whose actual earnings are not reflected on standard W-2 stubs.',
    },
    {
      q: 'What rent multiplier do you format for?',
      a: 'We review your target rental rate and structure your verified income profile to comfortably satisfy the standard 2.5x to 3.5x gross income multiplier demanded by property leasing agents.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#0D4F3D] via-[#09392c] to-[#062920] text-white pt-14 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
            <span className="bg-emerald-900/80 border border-emerald-500/30 text-emerald-200 text-xs font-semibold px-3 py-1 rounded-full">
              Fast Turnaround 48-72 Hours
            </span>
            <span className="bg-emerald-900/80 border border-emerald-500/30 text-emerald-200 text-xs font-semibold px-3 py-1 rounded-full">
              ADP Powered Trusted Software
            </span>
            <span className="bg-emerald-900/80 border border-emerald-500/30 text-emerald-200 text-xs font-semibold px-3 py-1 rounded-full">
              Landlord Ready Documentation
            </span>
            <span className="bg-emerald-900/80 border border-emerald-500/30 text-emerald-200 text-xs font-semibold px-3 py-1 rounded-full">
              Nationwide Virtual Service
            </span>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold tracking-widest text-emerald-300 uppercase">
              INCOME VERIFICATION SERVICE
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-display">
              Verify Your Income. <br />
              <span className="text-emerald-300">Strengthen Your Approval.</span>
            </h1>
          </div>

          <p className="max-w-2xl mx-auto text-emerald-100/90 text-base sm:text-lg">
            Our Income Verification Service helps you properly document and verify your income so you can meet rental requirements and get approved with confidence.
          </p>

          {/* ADP Callout Banner */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-emerald-400/30 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold text-emerald-100">
            <span className="font-extrabold text-white text-base tracking-wider bg-red-600 px-2 py-0.5 rounded">
              ADP
            </span>
            <span>The #1 payroll platform trusted by millions of businesses nationwide.</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setCurrentPage('book-consultation')}
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#0D4F3D] hover:bg-emerald-50 font-extrabold text-sm rounded-xl shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              Book My Consultation
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('income-packages');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-7 py-3.5 bg-emerald-900/80 hover:bg-emerald-900 text-white font-bold text-sm rounded-xl border border-emerald-400/40 transition-all cursor-pointer"
            >
              View Packages
            </button>
          </div>
        </div>
      </section>

      {/* Pricing packages */}
      <section id="income-packages" className="py-24 bg-gray-50 border-b border-gray-100 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              Clear Options
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-display">
              CHOOSE THE INCOME VERIFICATION PACKAGE THAT FITS YOUR NEEDS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
            {/* Standard */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Essential Tier
                </span>
                <h3 className="text-2xl font-black text-gray-900 font-display mt-1">STANDARD</h3>
                <p className="text-xs text-gray-500">Income Verification Package</p>

                <div className="flex items-baseline gap-2 mt-4">
                  <span className="text-4xl font-black text-gray-900">$450</span>
                  <span className="text-xs text-gray-500 font-medium">/ 48-72h turnaround</span>
                </div>

                <p className="text-xs text-gray-600 mt-4 leading-relaxed">
                  Essential documentation to meet basic rental income requirements and satisfy 2.5x-3x rent screening rules.
                </p>

                <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                  {[
                    'Income Requirement Review (2.5x-3x Rent)',
                    'Paystubs (4 Weeks)',
                    'Bank Statements (1-2 Months)',
                    'Income Summary Report',
                    'Landlord-Ready Documentation Packet',
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-gray-700 font-medium">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={onOpenQuestionnaire}
                  className="w-full py-3.5 bg-gray-900 hover:bg-black text-white font-bold text-xs uppercase tracking-wider rounded-xl cursor-pointer transition-colors"
                >
                  Choose Standard ➜
                </button>
              </div>
            </div>

            {/* Premium */}
            <div className="bg-[#0D4F3D] text-white rounded-3xl p-8 shadow-2xl border-2 border-emerald-400/40 flex flex-col justify-between relative">
              <div className="absolute -top-4 right-8 bg-gradient-to-r from-emerald-400 to-teal-300 text-[#09392c] text-xs font-extrabold px-3 py-1 rounded-full shadow">
                MOST POPULAR
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                  Full Service
                </span>
                <h3 className="text-2xl font-black text-white font-display mt-1">PREMIUM</h3>
                <p className="text-xs text-emerald-200">Income Verification Package</p>

                <div className="flex items-baseline gap-2 mt-4">
                  <span className="text-4xl font-black text-white">$650</span>
                  <span className="text-xs text-emerald-200 font-medium">/ priority 48-72h</span>
                </div>

                <p className="text-xs text-emerald-100/90 mt-4 leading-relaxed">
                  Complete income verification with advanced documentation, full ADP payroll setup, and strategic structuring.
                </p>

                <div className="mt-6 pt-6 border-t border-emerald-800/80 space-y-3">
                  {[
                    'Everything in Standard Package',
                    'ADP Payroll Setup & Income Structuring',
                    'Business Overview (If Applicable)',
                    'Detailed Income Analysis Report',
                    'Custom Income Plan & Recommendations',
                    'Priority Expedited Processing',
                    'Direct Dedicated Case Strategist',
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-emerald-100 font-medium">
                      <Check className="w-4 h-4 text-emerald-300 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={onOpenQuestionnaire}
                  className="w-full py-3.5 bg-white hover:bg-emerald-50 text-[#0D4F3D] font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg cursor-pointer transition-all hover:scale-105"
                >
                  Choose Premium ➜
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Powered by ADP Trust Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl font-extrabold text-gray-900 font-display">
              Powered by ADP. Trusted by Millions.
            </h2>
            <p className="text-gray-600 text-sm">
              We partner with ADP, the #1 payroll software in the world, to provide accurate, professional, and landlord-ready income verification.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <Lock className="w-6 h-6 text-emerald-700 mb-3" />
              <h4 className="font-bold text-gray-900 text-sm">Secure</h4>
              <p className="text-xs text-gray-500 mt-1">Bank-level security and encryption to protect your personal data.</p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <BarChart3 className="w-6 h-6 text-emerald-700 mb-3" />
              <h4 className="font-bold text-gray-900 text-sm">Accurate</h4>
              <p className="text-xs text-gray-500 mt-1">Real-time payroll data structured to satisfy strict property metrics.</p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <BadgeCheck className="w-6 h-6 text-emerald-700 mb-3" />
              <h4 className="font-bold text-gray-900 text-sm">Reliable</h4>
              <p className="text-xs text-gray-500 mt-1">Trusted by 1M+ businesses and accepted by property managers everywhere.</p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <FileCheck2 className="w-6 h-6 text-emerald-700 mb-3" />
              <h4 className="font-bold text-gray-900 text-sm">Professional</h4>
              <p className="text-xs text-gray-500 mt-1">Certified landlord-ready documents packaged for immediate approval.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              Streamlined Flow
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 font-display">
              HOW OUR INCOME VERIFICATION PROCESS WORKS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { num: '01', title: 'Consultation', desc: 'We review your situation and target rent goals.' },
              { num: '02', title: 'Info Submission', desc: 'You provide income details and required information.' },
              { num: '03', title: 'ADP Setup', desc: 'We process payroll and structure your income ratios.' },
              { num: '04', title: 'Documentation', desc: 'We generate professional, landlord-ready documents.' },
              { num: '05', title: 'You Get Approved', desc: 'Submit your verified package and secure your new home.' },
            ].map((st, i) => (
              <div key={i} className="bg-white p-5 rounded-xl border border-gray-200">
                <span className="font-display font-black text-2xl text-emerald-700 block mb-2">
                  {st.num}
                </span>
                <h4 className="font-bold text-sm text-gray-900 mb-1">{st.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center font-display mb-10">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="space-y-3">
            {incomeFaqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-5 py-4 text-left font-bold text-sm text-gray-900 flex justify-between items-center hover:bg-gray-50 cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${openFaq === i ? 'rotate-180 text-emerald-800' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 py-3.5 text-xs text-gray-600 leading-relaxed border-t border-gray-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
