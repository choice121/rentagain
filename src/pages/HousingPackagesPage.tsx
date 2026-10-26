import React, { useState } from 'react';
import { PageId } from '../types';
import {
  Check,
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
  Zap,
  Building,
  FileText,
  CreditCard,
  ChevronDown,
  UserCheck,
} from 'lucide-react';

interface HousingPackagesPageProps {
  setCurrentPage: (page: PageId) => void;
  onOpenQuestionnaire: () => void;
}

export const HousingPackagesPage: React.FC<HousingPackagesPageProps> = ({
  setCurrentPage,
  onOpenQuestionnaire,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const housingFaqs = [
    {
      q: 'How long does the Housing Approval Program take?',
      a: 'The Standard Program typically takes 30-45 days to optimize your profile and tradelines. If you have an imminent move-in deadline, our Expedited Package completes file preparation and tradelines in 7 to 14 days with priority processing.',
    },
    {
      q: 'What is a tradeline and how does it help me get approved?',
      a: 'A rental tradeline provides documented, verified proof of on-time rental payments and financial responsibility. Property managers use this verified history to mitigate low credit scores or past leasing disputes.',
    },
    {
      q: 'Will this work if I have a past eviction or broken lease?',
      a: 'Yes. The vast majority of our housing clients have past evictions, broken leases, or rental collections. We address both the screening record and the application narrative so landlords feel secure leasing to you.',
    },
    {
      q: 'Can I use this for single-family rental homes or only apartments?',
      a: 'Our Housing Approval Program is fully valid for private landlord rentals, single-family houses, townhomes, and major corporate apartment complexes nationwide.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#0D4F3D] via-[#09392c] to-[#062920] text-white pt-14 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          {/* Quick metric pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
            <span className="bg-emerald-900/80 border border-emerald-500/30 text-emerald-200 text-xs font-semibold px-3 py-1 rounded-full">
              30-45 Day Program Length
            </span>
            <span className="bg-emerald-900/80 border border-emerald-500/30 text-emerald-200 text-xs font-semibold px-3 py-1 rounded-full">
              Nationwide Service
            </span>
            <span className="bg-emerald-900/80 border border-emerald-500/30 text-emerald-200 text-xs font-semibold px-3 py-1 rounded-full">
              Personalized Strategy
            </span>
            <span className="bg-emerald-900/80 border border-emerald-500/30 text-emerald-200 text-xs font-semibold px-3 py-1 rounded-full">
              Apartment & Housing Focused
            </span>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold tracking-widest text-emerald-300 uppercase">
              HOUSING APPROVAL PROGRAM
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-display">
              Build A Stronger Rental Profile. <br />
              <span className="text-emerald-300">Increase Your Approval Odds.</span>
            </h1>
          </div>

          <p className="max-w-2xl mx-auto text-emerald-100/90 text-base sm:text-lg">
            Our Housing Approval Program helps renters strengthen their approval position through credit-building, rental history documentation, and strategic application preparation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setCurrentPage('book-consultation')}
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#0D4F3D] hover:bg-emerald-50 font-extrabold text-sm rounded-xl shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              Book My Consultation
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('pricing-tiers');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-7 py-3.5 bg-emerald-900/80 hover:bg-emerald-900 text-white font-bold text-sm rounded-xl border border-emerald-400/40 transition-all cursor-pointer"
            >
              See Pricing Options
            </button>
          </div>

          {/* Value highlights */}
          <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto border-t border-emerald-700/40 text-xs font-semibold text-emerald-100">
            <div>✓ Stronger Credit Profile</div>
            <div>✓ Positive Rental History</div>
            <div>✓ Better Approval Odds</div>
            <div>✓ Nationwide Support</div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section id="pricing-tiers" className="py-24 bg-gray-50 border-b border-gray-100 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest text-emerald-800 uppercase bg-emerald-100 px-3 py-1 rounded-full">
              Transparent Pricing
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 font-display">
              CHOOSE THE PROGRAM THAT FITS YOUR TIMELINE
            </h2>
            <p className="text-gray-600 text-base">
              All programs include personalized guidance, nationwide support, and a proven strategy to improve your approval odds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            {/* Standard Package */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Standard Option
                </span>
                <h3 className="text-2xl font-black text-gray-900 font-display mt-1">
                  STANDARD HOUSING PACKAGE
                </h3>
                <div className="flex items-baseline gap-2 mt-4">
                  <span className="text-4xl font-extrabold text-gray-900">$950</span>
                  <span className="text-xs font-semibold text-gray-500">/ one-time fee</span>
                </div>
                <div className="inline-block mt-2 px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-bold">
                  30-45 Days Timeline
                </div>

                <p className="text-xs text-gray-600 mt-4 leading-relaxed">
                  Our most popular option for renters with flexible timelines who want to strengthen their profile the smart way.
                </p>

                <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                  {[
                    'Credit Profile Support',
                    'Rental History Documentation',
                    'Application Assistance & Strategy',
                    '1 Quality Tradeline',
                    'Dedicated Support Specialist',
                    'Nationwide Apartment & House Access',
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
                  className="w-full py-3.5 bg-gray-900 hover:bg-black text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow cursor-pointer transition-colors"
                >
                  Choose Standard Package ➜
                </button>
              </div>
            </div>

            {/* Expedited Package */}
            <div className="bg-[#0D4F3D] text-white rounded-3xl p-8 shadow-2xl border-2 border-emerald-400/40 flex flex-col justify-between relative">
              <div className="absolute -top-4 right-8 bg-gradient-to-r from-emerald-400 to-teal-300 text-[#09392c] text-xs font-extrabold px-3 py-1 rounded-full shadow">
                FASTEST OPTION
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                  Priority Rush
                </span>
                <h3 className="text-2xl font-black text-white font-display mt-1">
                  EXPEDITED HOUSING PACKAGE
                </h3>
                <div className="flex items-baseline gap-2 mt-4">
                  <span className="text-4xl font-extrabold text-white">$1,400</span>
                  <span className="text-xs font-semibold text-emerald-200">/ one-time fee</span>
                </div>
                <div className="inline-block mt-2 px-3 py-1 rounded-full bg-emerald-800 text-emerald-100 text-xs font-bold">
                  7 - 14 Days Turnaround
                </div>

                <p className="text-xs text-emerald-100/90 mt-4 leading-relaxed">
                  Our faster option for renters who need results quickly and want priority documentation and dedicated expedite processing.
                </p>

                <div className="mt-6 pt-6 border-t border-emerald-800/80 space-y-3">
                  {[
                    'Credit Profile Support',
                    'Rental History Documentation',
                    'Application Assistance & Strategy',
                    '2 Quality Tradelines Included',
                    'Priority Expedited Processing',
                    'Dedicated Senior Specialist',
                    'Landlord Packet Ready Delivery',
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
                  Choose Expedited Package ➜
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & What's Included */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold tracking-widest text-emerald-800 uppercase bg-emerald-100 px-3 py-1 rounded-full">
              Full Spectrum Coverage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-display">
              WHAT'S INCLUDED IN EVERY PACKAGE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Dedicated Support',
                desc: "You'll have a dedicated team here to support you every step of the way.",
                icon: UserCheck,
              },
              {
                title: 'Nationwide Service',
                desc: 'Our program is available in all 50 states for apartments and single family homes.',
                icon: Building,
              },
              {
                title: 'Approval Strategy',
                desc: 'We create a personalized strategy tailored to your unique screening profile.',
                icon: Sparkles,
              },
              {
                title: 'Application Assistance',
                desc: 'We guide you through the application process for the best possible outcome.',
                icon: FileText,
              },
              {
                title: 'Rental History Documentation',
                desc: "We provide documented rental history to show landlords you're reliable.",
                icon: ShieldCheck,
              },
              {
                title: 'Credit Profile Support',
                desc: 'We help strengthen your credit profile with verified tradelines.',
                icon: CreditCard,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80 hover:bg-white hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#0D4F3D] flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-1.5">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Steps Process */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              The 5-Step Path
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 font-display">
              HOW IT WORKS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { num: '01', title: 'Consultation', desc: 'We review your situation, goals, and approval challenges.' },
              { num: '02', title: 'Strategy Development', desc: 'We create a personalized plan to strengthen your profile.' },
              { num: '03', title: 'Profile Enhancement', desc: 'We build and enhance your credit and rental profile.' },
              { num: '04', title: 'Application Prep', desc: 'We prepare your application for the best possible results.' },
              { num: '05', title: 'Move Forward', desc: "You're approved and move into your next home with ease." },
            ].map((st, i) => (
              <div key={i} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
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
            {housingFaqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-5 py-4 text-left font-bold text-sm text-gray-900 flex justify-between items-center bg-gray-50/50 hover:bg-gray-50 cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${openFaq === i ? 'rotate-180 text-emerald-800' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 py-3.5 text-xs text-gray-600 bg-white leading-relaxed border-t border-gray-100">
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
