import React, { useState } from 'react';
import { PageId } from '../types';
import {
  Check,
  ArrowRight,
  ShieldCheck,
  Clock,
  UserPlus,
  Users,
  ChevronDown,
  Building2,
  DollarSign,
  Award,
} from 'lucide-react';

interface CosignerPageProps {
  setCurrentPage: (page: PageId) => void;
  onOpenQuestionnaire: () => void;
}

export const CosignerPage: React.FC<CosignerPageProps> = ({
  setCurrentPage,
  onOpenQuestionnaire,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const cosignerFaqs = [
    {
      q: 'How quickly will my application be submitted?',
      a: 'Once your initial questionnaire and target property details are received, our co-applicant file is assembled and submitted within 48 to 72 hours.',
    },
    {
      q: 'Will the co-applicant be on the lease?',
      a: 'The co-applicant is listed on the lease application in full compliance with the apartment community’s co-signer/co-applicant policies, providing the required income multiplier and 700+ FICO backing.',
    },
    {
      q: 'What credit score does the co-applicant have?',
      a: 'All co-applicants in our network maintain verified credit scores of 700 or higher with zero negative housing marks and active high-income documentation.',
    },
    {
      q: 'Do I have to meet any specific requirements?',
      a: 'No specific minimum credit score is required on your part — the program is specifically structured to compensate for lower credit, first-time leasing, or income gaps.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#0D4F3D] via-[#09392c] to-[#062920] text-white pt-14 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
            <span className="bg-emerald-900/80 border border-emerald-500/30 text-emerald-200 text-xs font-semibold px-3 py-1 rounded-full">
              48-72 Hours Typical Processing
            </span>
            <span className="bg-emerald-900/80 border border-emerald-500/30 text-emerald-200 text-xs font-semibold px-3 py-1 rounded-full">
              700+ Credit Score Qualified Co-Applicant
            </span>
            <span className="bg-emerald-900/80 border border-emerald-500/30 text-emerald-200 text-xs font-semibold px-3 py-1 rounded-full">
              +$10,000 Income Added
            </span>
            <span className="bg-emerald-900/80 border border-emerald-500/30 text-emerald-200 text-xs font-semibold px-3 py-1 rounded-full">
              Nationwide Service
            </span>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold tracking-widest text-emerald-300 uppercase">
              CO-APPLICANT PROGRAM
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-display">
              Stronger Application. <br />
              <span className="text-emerald-300">Better Approval Odds.</span>
            </h1>
          </div>

          <p className="max-w-2xl mx-auto text-emerald-100/90 text-base sm:text-lg">
            Our Co-Applicant Program adds a qualified co-applicant to your rental application to increase your income, boost your credit profile, and dramatically improve your chances of getting approved.
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
                const el = document.getElementById('coapplicant-fee');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-7 py-3.5 bg-emerald-900/80 hover:bg-emerald-900 text-white font-bold text-sm rounded-xl border border-emerald-400/40 transition-all cursor-pointer"
            >
              See Program Fee
            </button>
          </div>

          {/* Pillars */}
          <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto border-t border-emerald-700/40 text-xs font-semibold text-emerald-100">
            <div>✓ Qualified Co-Applicant (700+)</div>
            <div>✓ +$10,000 Monthly Income</div>
            <div>✓ Application Completed For You</div>
            <div>✓ Higher Approval Potential</div>
          </div>
        </div>
      </section>

      {/* Program Details & Fee */}
      <section id="coapplicant-fee" className="py-24 bg-gray-50 border-b border-gray-100 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              Two Names. Stronger Results.
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-display">
              CO-APPLICANT PROGRAM BREAKDOWN
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Fee Card */}
            <div className="bg-[#0D4F3D] text-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-emerald-500/30">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                Guaranteed Credentials
              </span>
              <h3 className="text-2xl font-black font-display mt-1">PROGRAM FEE</h3>

              <div className="flex items-baseline gap-2 mt-4">
                <span className="text-5xl font-black text-white">$800</span>
                <span className="text-xs text-emerald-200 uppercase font-semibold">Flat Fee</span>
              </div>

              <div className="mt-8 space-y-4 border-t border-emerald-800/80 pt-6">
                <div className="flex justify-between items-center text-xs pb-2 border-b border-emerald-800/50">
                  <span className="text-emerald-200">PROCESSING TIME:</span>
                  <span className="font-bold text-white">48-72 Hours (Volume Dependent)</span>
                </div>
                <div className="flex justify-between items-center text-xs pb-2 border-b border-emerald-800/50">
                  <span className="text-emerald-200">CO-APPLICANT CREDIT:</span>
                  <span className="font-bold text-white">700+ Credit Score</span>
                </div>
                <div className="flex justify-between items-center text-xs pb-2 border-b border-emerald-800/50">
                  <span className="text-emerald-200">INCOME ADDED:</span>
                  <span className="font-bold text-emerald-300">+$10,000 Monthly Income</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-emerald-200">SERVICE AREA:</span>
                  <span className="font-bold text-white">Nationwide - All 50 States</span>
                </div>
              </div>

              <button
                onClick={onOpenQuestionnaire}
                className="w-full mt-8 py-4 bg-white hover:bg-emerald-50 text-[#0D4F3D] font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg cursor-pointer transition-all hover:scale-105"
              >
                Apply With Co-Applicant ➜
              </button>
            </div>

            {/* Right: Who this is for */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 font-display">
                  THIS PROGRAM IS FOR YOU IF:
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Ideal for renters who have the monthly funds to pay rent, but fail rigid screening algorithms.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  "You don't meet the strict 3x income requirement alone",
                  'You need a verified 700+ credit score on your application',
                  "You've been repeatedly denied due to automated screening",
                  'You want to increase your approval chances exponentially',
                  "You're ready to sign and move into your next home now",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-gray-200 shadow-xs">
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-gray-800">{item}</span>
                  </div>
                ))}
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
              End-To-End Execution
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 font-display">
              HOW OUR CO-APPLICANT PROCESS WORKS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { num: '01', title: 'Consultation', desc: 'We assess your property target and application requirements.' },
              { num: '02', title: 'Co-Applicant Match', desc: 'We pair you with a verified 700+ credit co-applicant.' },
              { num: '03', title: 'Preparation', desc: 'Our team completes the co-applicant portion with documentation.' },
              { num: '04', title: 'Submission', desc: 'The completed application is submitted directly to the property.' },
              { num: '05', title: 'Get Approved', desc: 'Sign your lease and move in with peace of mind.' },
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

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center font-display mb-10">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="space-y-3">
            {cosignerFaqs.map((faq, i) => (
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
