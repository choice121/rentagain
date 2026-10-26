import React, { useState } from 'react';
import { PageId } from '../types';
import {
  Check,
  ArrowRight,
  ShieldCheck,
  Key,
  DoorOpen,
  Building,
  Home,
  ChevronDown,
  Sparkles,
  Lock,
} from 'lucide-react';

interface InstantApprovalPageProps {
  setCurrentPage: (page: PageId) => void;
  onOpenQuestionnaire: () => void;
}

export const InstantApprovalPage: React.FC<InstantApprovalPageProps> = ({
  setCurrentPage,
  onOpenQuestionnaire,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const instantFaqs = [
    {
      q: 'How quickly can I move in with Instant Approval?',
      a: 'Eligible clients typically move into their new home within 7 to 14 days from case onboarding. We eliminate back-and-forth rejections by executing lease requirements upfront.',
    },
    {
      q: 'What types of properties do you work with?',
      a: 'We work with luxury apartment communities, corporate managed residential buildings, modern townhomes, and private single-family rental homes in all 50 states.',
    },
    {
      q: 'Is my personal information protected?',
      a: '100% confidential and discreet. All communications and documentation are handled under strict privacy standards. You are in direct communication with your dedicated executive case manager.',
    },
    {
      q: 'Are there any hidden costs after the fee?',
      a: 'No hidden fees. Our service fees ($2,500 for apartments / $2,800 for houses) are completely upfront. You will simply pay your standard property security deposit and first month’s rent directly when signing the lease.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#0D4F3D] via-[#09392c] to-[#062920] text-white pt-14 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
            <span className="bg-emerald-900/80 border border-emerald-500/30 text-emerald-200 text-xs font-semibold px-3 py-1 rounded-full">
              Fastest Path: Move In 7-14 Days
            </span>
            <span className="bg-emerald-900/80 border border-emerald-500/30 text-emerald-200 text-xs font-semibold px-3 py-1 rounded-full">
              Nationwide in All 50 States
            </span>
            <span className="bg-emerald-900/80 border border-emerald-500/30 text-emerald-200 text-xs font-semibold px-3 py-1 rounded-full">
              Private & Discreet
            </span>
            <span className="bg-emerald-900/80 border border-emerald-500/30 text-emerald-200 text-xs font-semibold px-3 py-1 rounded-full">
              Dedicated Executive Support
            </span>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold tracking-widest text-emerald-300 uppercase">
              OUR PREMIUM SERVICE
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-display">
              INSTANT APPROVAL SERVICE
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-emerald-200">
              Move Into Your Next Home Without Traditional Approval Barriers.
            </p>
          </div>

          <p className="max-w-2xl mx-auto text-emerald-100/90 text-base sm:text-lg">
            We secure qualifying housing opportunities through our premium Instant Approval Service, helping eligible clients move forward faster.
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
                const el = document.getElementById('pricing-boxes');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-7 py-3.5 bg-emerald-900/80 hover:bg-emerald-900 text-white font-bold text-sm rounded-xl border border-emerald-400/40 transition-all cursor-pointer"
            >
              See Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Signature "We Open Doors" Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold tracking-widest text-emerald-800 uppercase bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
            PREMIUM HOUSING SOLUTIONS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 font-display">
            We Open Doors. <br />
            <span className="text-emerald-800">You Walk Through.</span>
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 text-gray-800 text-base sm:text-lg font-bold">
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 w-full sm:w-60">
              We meet the requirements.
            </div>
            <div className="p-4 rounded-2xl bg-[#0D4F3D] text-white w-full sm:w-60 shadow-lg">
              You get the keys.
            </div>
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 w-full sm:w-60">
              You move forward.
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Options */}
      <section id="pricing-boxes" className="py-24 bg-gray-50 border-b border-gray-100 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              Upfront Pricing • No Hidden Fees
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-display">
              INSTANT APPROVAL SERVICE FEES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Apartments Card */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-md flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0D4F3D] flex items-center justify-center mb-4">
                  <Building className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Residential Unit
                </span>
                <h3 className="text-2xl font-black text-gray-900 font-display mt-1">APARTMENTS</h3>
                <div className="flex items-baseline gap-2 mt-4">
                  <span className="text-5xl font-black text-gray-900">$2,500</span>
                  <span className="text-xs text-gray-500 font-bold uppercase">Flat Fee</span>
                </div>

                <div className="mt-6 space-y-3 pt-6 border-t border-gray-100 text-xs text-gray-700 font-medium">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Move In as Soon as 7-14 Days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Private & Gated Apartment Communities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Complete Requirement Fulfillment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Dedicated Senior Housing Executive</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={onOpenQuestionnaire}
                  className="w-full py-3.5 bg-gray-900 hover:bg-black text-white font-bold text-xs uppercase tracking-wider rounded-xl cursor-pointer transition-colors"
                >
                  Apply For Apartment Approval ➜
                </button>
              </div>
            </div>

            {/* Houses Card */}
            <div className="bg-[#0D4F3D] text-white rounded-3xl p-8 shadow-2xl border-2 border-emerald-400/40 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-800 text-emerald-200 flex items-center justify-center mb-4">
                  <Home className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                  Single Family Home
                </span>
                <h3 className="text-2xl font-black text-white font-display mt-1">HOUSES</h3>
                <div className="flex items-baseline gap-2 mt-4">
                  <span className="text-5xl font-black text-white">$2,800</span>
                  <span className="text-xs text-emerald-200 font-bold uppercase">Flat Fee</span>
                </div>

                <div className="mt-6 space-y-3 pt-6 border-t border-emerald-800/80 text-xs text-emerald-100 font-medium">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>Single-Family Homes, Townhouses & Condos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>Move In as Soon as 7-14 Days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>Private Landlord & Institutional Landlords</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>Dedicated White-Glove Case Specialist</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={onOpenQuestionnaire}
                  className="w-full py-3.5 bg-white hover:bg-emerald-50 text-[#0D4F3D] font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg cursor-pointer transition-all hover:scale-105"
                >
                  Apply For House Approval ➜
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-step process */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              White-Glove Process
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 font-display">HOW IT WORKS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { num: '01', title: 'Consultation', desc: 'We review your situation in private consultation to confirm eligibility.' },
              { num: '02', title: 'Property Selection', desc: 'Choose from qualifying properties that match your location and needs.' },
              { num: '03', title: 'Approval Execution', desc: 'Our team secures the lease and satisfies all requirements.' },
              { num: '04', title: 'Lease Completion', desc: 'All lease documents are finalized and prepared for your signature.' },
              { num: '05', title: 'Move In', desc: 'Receive your keys and move into your new home with full peace of mind.' },
            ].map((st, i) => (
              <div key={i} className="bg-gray-50 p-5 rounded-xl border border-gray-200">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center font-display mb-10">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="space-y-3">
            {instantFaqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 bg-white rounded-xl overflow-hidden">
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
