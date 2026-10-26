import React from 'react';
import { PageId } from '../types';
import { ConsultationScheduler } from '../components/ConsultationScheduler';
import { ShieldCheck, Calendar, Clock, ArrowRight } from 'lucide-react';
import { SITE_CONTACT } from '../data/siteData';

interface BookOnlinePageProps {
  setCurrentPage: (page: PageId) => void;
}

export const BookOnlinePage: React.FC<BookOnlinePageProps> = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-gray-50/50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold tracking-widest text-emerald-800 uppercase bg-emerald-100 px-3.5 py-1.5 rounded-full">
            Direct Calendar
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 font-display">
            BOOK A CONSULTATION
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Speak with an expert to review your rental approval options and find the service that fits your needs.
          </p>
        </div>

        {/* Embedded Interactive Scheduler */}
        <ConsultationScheduler />

        {/* Quick direct assistance card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0D4F3D] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base">Prefer to call directly?</h3>
              <p className="text-xs text-gray-500">
                Our housing intake desk is open nationwide Monday through Saturday.
              </p>
            </div>
          </div>

          <a
            href={`tel:${SITE_CONTACT.phoneClean}`}
            className="w-full sm:w-auto px-6 py-3 bg-[#0D4F3D] hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow cursor-pointer text-center whitespace-nowrap"
          >
            Call {SITE_CONTACT.phone}
          </a>
        </div>
      </div>
    </div>
  );
};
