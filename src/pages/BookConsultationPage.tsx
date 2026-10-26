import React from 'react';
import { PageId } from '../types';
import { ConsultationScheduler } from '../components/ConsultationScheduler';
import { SITE_CONTACT } from '../data/siteData';
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  Phone,
  MessageSquare,
  Award,
  Star,
  Users,
  Target,
  FileSearch,
  Compass,
} from 'lucide-react';

interface BookConsultationPageProps {
  setCurrentPage: (page: PageId) => void;
}

export const BookConsultationPage: React.FC<BookConsultationPageProps> = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#0D4F3D] via-[#09392c] to-[#062920] text-white pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <span className="text-xs font-bold tracking-widest text-emerald-300 uppercase bg-emerald-800/80 px-3.5 py-1.5 rounded-full border border-emerald-500/30">
            BOOK A FREE CONSULTATION
          </span>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-display">
            Let's Find The Right <br />
            <span className="text-emerald-300">Solution For You.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-emerald-100/90 text-base sm:text-lg leading-relaxed">
            Every situation is different. During your free consultation, we'll review your goals, identify your biggest challenges, and recommend the best program to get you approved.
          </p>

          {/* 3 Core Value Props */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto pt-6">
            <div className="p-4 rounded-xl bg-emerald-900/60 border border-emerald-400/30 text-left">
              <span className="text-emerald-300 font-extrabold text-xs tracking-wider uppercase block">
                100% FREE
              </span>
              <p className="text-sm font-bold text-white mt-0.5">No hidden fees. No obligations.</p>
            </div>
            <div className="p-4 rounded-xl bg-emerald-900/60 border border-emerald-400/30 text-left">
              <span className="text-emerald-300 font-extrabold text-xs tracking-wider uppercase block">
                PRIVATE & SECURE
              </span>
              <p className="text-sm font-bold text-white mt-0.5">Your information is safe with us.</p>
            </div>
            <div className="p-4 rounded-xl bg-emerald-900/60 border border-emerald-400/30 text-left">
              <span className="text-emerald-300 font-extrabold text-xs tracking-wider uppercase block">
                EXPERT GUIDANCE
              </span>
              <p className="text-sm font-bold text-white mt-0.5">Real answers from real specialists.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Scheduler */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Scheduler Component */}
          <ConsultationScheduler />

          {/* WHAT WE'LL DISCUSS */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Agenda
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 font-display">
                WHAT WE'LL DISCUSS
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
                <Target className="w-8 h-8 text-emerald-700 mb-3" />
                <h4 className="font-bold text-gray-900 text-base mb-1">Your Goals</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  What type of home and lease terms are you looking to achieve?
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
                <FileSearch className="w-8 h-8 text-emerald-700 mb-3" />
                <h4 className="font-bold text-gray-900 text-base mb-1">Your Situation</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  We'll review your credit score, proof of income, and rental history.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
                <Sparkles className="w-8 h-8 text-emerald-700 mb-3" />
                <h4 className="font-bold text-gray-900 text-base mb-1">Your Options</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  We'll recommend the specific program that best fits your timing and budget.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
                <Compass className="w-8 h-8 text-emerald-700 mb-3" />
                <h4 className="font-bold text-gray-900 text-base mb-1">Your Next Steps</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  You'll leave with an actionable roadmap to submit and get approved.
                </p>
              </div>
            </div>
          </div>

          {/* WHAT TO EXPECT & TRUST METRICS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* What to Expect */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 font-display">WHAT TO EXPECT</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-gray-900">1 ON 1 CONVERSATION</h5>
                    <p className="text-xs text-gray-600 mt-0.5">
                      We'll listen carefully to your situation and answer all your questions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-gray-900">EXPERT EVALUATION</h5>
                    <p className="text-xs text-gray-600 mt-0.5">
                      We'll evaluate your profile and identify opportunities to bypass screening denials.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-gray-900">CUSTOM RECOMMENDATION</h5>
                    <p className="text-xs text-gray-600 mt-0.5">
                      We'll recommend the program that delivers the highest approval odds.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 font-bold">
                    4
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-gray-900">CLEAR ROADMAP</h5>
                    <p className="text-xs text-gray-600 mt-0.5">
                      You'll get a step-by-step plan to reach your goal and sign your lease.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trusted by renters */}
            <div className="bg-[#0D4F3D] text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                  National Track Record
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-display mt-2">
                  TRUSTED BY RENTERS ACROSS THE COUNTRY
                </h3>
                <p className="text-xs text-emerald-100/90 mt-2">
                  We specialize in getting real people approved — especially those rejected by traditional screening algorithms.
                </p>

                <div className="grid grid-cols-3 gap-3 mt-8 pt-6 border-t border-emerald-800">
                  <div className="text-center">
                    <span className="text-3xl font-black text-white font-display block">4.9/5</span>
                    <span className="text-[11px] text-emerald-200 font-semibold">Average Rating</span>
                  </div>
                  <div className="text-center">
                    <span className="text-3xl font-black text-white font-display block">10,000+</span>
                    <span className="text-[11px] text-emerald-200 font-semibold">Happy Clients</span>
                  </div>
                  <div className="text-center">
                    <span className="text-3xl font-black text-white font-display block">100%</span>
                    <span className="text-[11px] text-emerald-200 font-semibold">Satisfaction Focused</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href={`tel:${SITE_CONTACT.phoneClean}`}
                  className="w-full py-3.5 bg-white text-[#0D4F3D] hover:bg-emerald-50 text-xs font-black uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {SITE_CONTACT.phone} Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
