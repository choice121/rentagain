import React, { useState } from 'react';
import { PageId } from '../types';
import { SERVICES_LIST, COMMON_CHALLENGES, GENERAL_FAQS, SITE_CONTACT } from '../data/siteData';
import { SuccessStoriesCarousel } from '../components/SuccessStoriesCarousel';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  Phone,
  ChevronDown,
  Building,
  Users,
  FileCheck2,
  Zap,
  Award,
  HeartHandshake,
  Headphones,
  Check,
  ShieldAlert,
  FileQuestion,
  FileX,
  Briefcase,
  UserX,
  MapPin,
  FileCheck,
} from 'lucide-react';

interface HomePageProps {
  setCurrentPage: (page: PageId) => void;
  onOpenQuestionnaire: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setCurrentPage, onOpenQuestionnaire }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const renderChallengeIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-emerald-700" />;
      case 'FileQuestion':
        return <FileQuestion className="w-6 h-6 text-emerald-700" />;
      case 'FileX':
        return <FileX className="w-6 h-6 text-emerald-700" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-emerald-700" />;
      case 'UserX':
        return <UserX className="w-6 h-6 text-emerald-700" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-emerald-700" />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6 text-emerald-700" />;
      case 'Clock':
      default:
        return <Clock className="w-6 h-6 text-emerald-700" />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#0D4F3D] via-[#09392c] to-[#062920] text-white pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none opacity-20">
          <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-emerald-400 rounded-full blur-[140px]" />
          <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-teal-300 rounded-full blur-[160px]" />
        </div>

        <div className="relative max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-500/30 text-emerald-200 text-xs font-bold tracking-widest uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
            A BETTER PATH FORWARD
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-display leading-[1.08] text-white">
            Get Back Into Housing — <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-200 to-emerald-400">
              Even If You've Been Denied Before.
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-xl text-emerald-100/90 leading-relaxed font-normal">
            We help renters overcome common approval challenges with personalized solutions designed to improve your approval odds and get you moving forward.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenQuestionnaire}
              className="w-full sm:w-auto px-8 py-4 bg-white text-[#0D4F3D] hover:bg-emerald-50 font-extrabold text-base rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('how-it-works');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-7 py-4 bg-emerald-900/60 hover:bg-emerald-900/90 text-white font-semibold text-base rounded-xl border border-emerald-400/30 transition-all cursor-pointer"
            >
              See How It Works
            </button>
          </div>

          {/* Trust badges bar */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-emerald-700/40 text-xs sm:text-sm font-semibold text-emerald-100">
            <div className="flex items-center justify-center gap-2 py-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Nationwide Assistance</span>
            </div>
            <div className="flex items-center justify-center gap-2 py-2">
              <Users className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Thousands Helped</span>
            </div>
            <div className="flex items-center justify-center gap-2 py-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Flexible Solutions</span>
            </div>
            <div className="flex items-center justify-center gap-2 py-2">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Fast Turnaround</span>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & SECOND CHANCE STATEMENT */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold tracking-widest text-emerald-800 uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            WE BELIEVE EVERYONE DESERVES A SECOND CHANCE
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 font-display tracking-tight leading-tight">
            A Rental Denial Doesn't Have To Be The End Of The Story.
          </h2>

          <div className="max-w-3xl mx-auto space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            <p>
              Many renters struggle with credit issues, rental history challenges, income concerns, collections, or previous denials.
            </p>
            <p className="font-medium text-gray-800">
              At Rent Again, we focus on helping clients understand their options and create a clear path forward toward securing housing.
            </p>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES CAROUSEL */}
      <SuccessStoriesCarousel />

      {/* HOW IT WORKS (3 STEPS) */}
      <section id="how-it-works" className="py-24 bg-white border-b border-gray-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest text-emerald-800 uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
              Clear Roadmap
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 font-display">
              HOW IT WORKS
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Getting approved shouldn't be a guessing game. Our three-step framework turns obstacles into approvals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="bg-gray-50/80 rounded-2xl p-8 border border-gray-200/80 hover:shadow-lg transition-shadow relative">
              <span className="text-5xl font-black font-display text-emerald-900/20 block mb-4">
                01
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Tell Us About Your Situation
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Complete a short questionnaire so we can better understand your housing goals and approval challenges.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#0D4F3D] text-white rounded-2xl p-8 shadow-xl relative md:-translate-y-2">
              <div className="absolute top-4 right-4 bg-emerald-700 text-xs px-2.5 py-0.5 rounded-full font-bold text-emerald-100">
                Strategic Match
              </div>
              <span className="text-5xl font-black font-display text-emerald-300/30 block mb-4">
                02
              </span>
              <h3 className="text-xl font-bold text-white mb-2">
                Receive Your Personalized Strategy
              </h3>
              <p className="text-sm text-emerald-100/90 leading-relaxed">
                We'll review your information and identify the most effective path forward based on your circumstances.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-50/80 rounded-2xl p-8 border border-gray-200/80 hover:shadow-lg transition-shadow relative">
              <span className="text-5xl font-black font-display text-emerald-900/20 block mb-4">
                03
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Move Forward With Confidence
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our team guides you through the next steps designed to improve your housing opportunities and secure your lease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="py-24 bg-gray-50/70 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div>
              <span className="text-xs font-bold tracking-widest text-emerald-800 uppercase bg-emerald-100 px-3 py-1 rounded-full">
                Tailored Programs
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 font-display mt-2">
                OUR SERVICES
              </h2>
              <p className="text-gray-600 text-base mt-2 max-w-xl">
                Choose the program engineered for your unique rental situation.
              </p>
            </div>
            <button
              onClick={() => setCurrentPage('housing-packages')}
              className="mt-4 md:mt-0 text-sm font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1.5 cursor-pointer group"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_LIST.map((svc) => (
              <div
                key={svc.id}
                className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                onClick={() => setCurrentPage(svc.page)}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                      {svc.badge}
                    </span>
                    <span className="text-xs font-semibold text-gray-500">{svc.turnaround}</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0D4F3D] transition-colors mb-2">
                    {svc.name}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed mb-6">
                    {svc.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="font-extrabold text-lg text-gray-900">{svc.price}</span>
                  <span className="text-xs font-bold text-emerald-800 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Details ➜
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 CORE PILLARS */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#effae5]/60 border border-emerald-100">
              <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center mb-4 shadow">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 uppercase font-display mb-2">
                EXPERIENCE
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We've worked with thousands of renters facing unique housing situations, giving us unmatched insight into property manager expectations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#effae5]/60 border border-emerald-100">
              <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center mb-4 shadow">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 uppercase font-display mb-2">
                PERSONALIZED SOLUTIONS
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                No two renters are the same. Every strategy is tailored specifically to your circumstances, budget, and local market criteria.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#effae5]/60 border border-emerald-100">
              <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center mb-4 shadow">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 uppercase font-display mb-2">
                SUPPORT
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our team remains available throughout the process, answering questions and communicating directly when you need guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMON CHALLENGES WE HELP WITH (8 CARDS) */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest text-emerald-800 uppercase bg-emerald-100 px-3 py-1 rounded-full">
              Real Obstacles Overcome
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 font-display">
              COMMON CHALLENGES WE HELP WITH
            </h2>
            <p className="text-gray-600 text-base">
              Regardless of what is on your record or screening report, we have a solution mapped out.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMMON_CHALLENGES.map((ch) => (
              <div
                key={ch.id}
                className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4">
                  {renderChallengeIcon(ch.iconName)}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{ch.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{ch.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq-section" className="py-24 bg-white border-b border-gray-100 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-3">
            <span className="text-xs font-bold tracking-widest text-emerald-800 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Clear Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-display">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-gray-600 text-sm">
              Everything you need to know about RentAgain programs and the approval process.
            </p>
          </div>

          <div className="space-y-4">
            {GENERAL_FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 bg-gray-50/50 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <span className="text-base font-bold text-gray-900">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFaqIndex === idx ? 'rotate-180 text-emerald-800' : ''
                    }`}
                  />
                </button>
                {openFaqIndex === idx && (
                  <div className="px-6 py-4 bg-white text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CALL TO ACTION BANNER */}
      <section className="py-20 bg-gradient-to-r from-[#0D4F3D] to-[#09392c] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display">
            Your Next Home Could Be Closer Than You Think.
          </h2>
          <p className="text-emerald-100 text-base sm:text-lg max-w-2xl mx-auto">
            Stop guessing and start moving forward with a clear housing strategy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenQuestionnaire}
              className="w-full sm:w-auto px-8 py-4 bg-white text-[#0D4F3D] hover:bg-emerald-50 font-extrabold text-base rounded-xl shadow-xl transition-all hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Start My Housing Plan</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentPage('book-consultation')}
              className="w-full sm:w-auto px-8 py-4 bg-emerald-900/80 hover:bg-emerald-900 text-white font-bold text-base rounded-xl border border-emerald-400/40 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Speak With A Specialist</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
