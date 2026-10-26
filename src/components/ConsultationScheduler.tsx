import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle2, User, Phone, Mail, ShieldCheck, ArrowRight } from 'lucide-react';
import { SITE_CONTACT } from '../data/siteData';

interface ConsultationSchedulerProps {
  initialService?: 'housing' | 'car';
  onBooked?: () => void;
}

export const ConsultationScheduler: React.FC<ConsultationSchedulerProps> = ({
  initialService = 'housing',
  onBooked,
}) => {
  const [selectedService, setSelectedService] = useState<'housing' | 'car'>(initialService);
  const [selectedDate, setSelectedDate] = useState('2026-10-27');
  const [selectedTime, setSelectedTime] = useState('11:00 AM');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [creditSituation, setCreditSituation] = useState('Need advice / Denied recently');
  const [confirmed, setConfirmed] = useState(false);

  // Available days
  const availableDates = [
    { label: 'Tue, Oct 27', value: '2026-10-27' },
    { label: 'Wed, Oct 28', value: '2026-10-28' },
    { label: 'Thu, Oct 29', value: '2026-10-29' },
    { label: 'Fri, Oct 30', value: '2026-10-30' },
    { label: 'Mon, Nov 02', value: '2026-11-02' },
  ];

  // Available times
  const timeSlots = [
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '1:30 PM',
    '2:15 PM',
    '3:00 PM',
    '4:00 PM',
    '5:30 PM',
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
    if (onBooked) onBooked();
  };

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
      {!confirmed ? (
        <form onSubmit={handleBooking} className="divide-y divide-gray-100">
          {/* Header */}
          <div className="bg-[#0D4F3D] text-white p-5 sm:p-8">
            <span className="text-[11px] sm:text-xs font-bold tracking-widest text-emerald-300 uppercase">
              Free 1-on-1 Session
            </span>
            <h3 className="text-xl sm:text-3xl font-extrabold font-display mt-1">
              Book A Free Consultation
            </h3>
            <p className="text-emerald-100/90 text-xs sm:text-sm mt-1 max-w-xl">
              Speak with a dedicated housing approval specialist to review your approval options and recommend the right program.
            </p>
          </div>

          {/* Service Picker */}
          <div className="p-4 sm:p-8 space-y-3 sm:space-y-4">
            <h4 className="font-bold text-gray-900 text-xs sm:text-sm uppercase tracking-wide">
              1. Select Service Type
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div
                onClick={() => setSelectedService('housing')}
                className={`p-3.5 sm:p-4 rounded-xl border-2 transition-all cursor-pointer flex items-start justify-between min-h-[56px] ${
                  selectedService === 'housing'
                    ? 'border-emerald-600 bg-emerald-50/50 shadow-sm ring-1 ring-emerald-600'
                    : 'border-gray-200 hover:border-gray-300 bg-white'
                }`}
              >
                <div>
                  <span className="font-bold text-gray-900 text-sm sm:text-base block">Housing Approval Consultation</span>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Apartments, houses, co-applicant solutions, ADP income verification.
                  </p>
                  <div className="flex items-center gap-3 mt-2.5 text-xs font-semibold text-emerald-800">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> 15 min
                    </span>
                    <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">
                      100% Free
                    </span>
                  </div>
                </div>
                <div
                  className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                    selectedService === 'housing'
                      ? 'border-emerald-600 bg-emerald-600 text-white'
                      : 'border-gray-300'
                  }`}
                >
                  {selectedService === 'housing' && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>
              </div>

              <div
                onClick={() => setSelectedService('car')}
                className={`p-3.5 sm:p-4 rounded-xl border-2 transition-all cursor-pointer flex items-start justify-between min-h-[56px] ${
                  selectedService === 'car'
                    ? 'border-emerald-600 bg-emerald-50/50 shadow-sm ring-1 ring-emerald-600'
                    : 'border-gray-200 hover:border-gray-300 bg-white'
                }`}
              >
                <div>
                  <span className="font-bold text-gray-900 text-sm sm:text-base block">Car Approval Consultation</span>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Vehicle financing & automotive approval guidance and documentation.
                  </p>
                  <div className="flex items-center gap-3 mt-2.5 text-xs font-semibold text-emerald-800">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> 15 min
                    </span>
                    <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">
                      100% Free
                    </span>
                  </div>
                </div>
                <div
                  className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                    selectedService === 'car'
                      ? 'border-emerald-600 bg-emerald-600 text-white'
                      : 'border-gray-300'
                  }`}
                >
                  {selectedService === 'car' && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>
              </div>
            </div>
          </div>

          {/* Date & Time Picker */}
          <div className="p-4 sm:p-8 space-y-4">
            <h4 className="font-bold text-gray-900 text-xs sm:text-sm uppercase tracking-wide flex items-center gap-2">
              <Calendar className="w-4 h-4 text-emerald-700" />
              2. Select Date & Time (US Times)
            </h4>

            {/* Dates row */}
            <div className="flex flex-wrap gap-2">
              {availableDates.map((d) => (
                <button
                  type="button"
                  key={d.value}
                  onClick={() => setSelectedDate(d.value)}
                  className={`px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer border min-h-[40px] flex items-center justify-center ${
                    selectedDate === d.value
                      ? 'bg-[#0D4F3D] text-white border-[#0D4F3D] shadow-sm'
                      : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>

            {/* Time slots */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
              {timeSlots.map((time) => (
                <button
                  type="button"
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`py-2.5 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer border text-center min-h-[42px] flex items-center justify-center ${
                    selectedTime === time
                      ? 'bg-emerald-100 border-emerald-600 text-emerald-900 font-bold ring-1 ring-emerald-600'
                      : 'border-gray-200 text-gray-700 hover:border-gray-300 bg-white'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Client Details */}
          <div className="p-4 sm:p-8 space-y-4">
            <h4 className="font-bold text-gray-900 text-xs sm:text-sm uppercase tracking-wide flex items-center gap-2">
              <User className="w-4 h-4 text-emerald-700" />
              3. Your Contact Information
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="Jordan Vance"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-3 rounded-lg border border-gray-300 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                  <input
                    type="email"
                    required
                    placeholder="jordan@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-3 rounded-lg border border-gray-300 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Phone Number</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                  <input
                    type="tel"
                    required
                    placeholder="(555) 234-5678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-3 rounded-lg border border-gray-300 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
              </div>
            </div>

            <div className="pt-1">
              <label className="block text-xs font-bold text-gray-700 mb-1">
                Current Approval Challenge or Notes (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g., Credit score 570, looking for 2-bed apartment in Phoenix"
                value={creditSituation}
                onChange={(e) => setCreditSituation(e.target.value)}
                className="w-full px-3.5 py-3 rounded-lg border border-gray-300 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-[11px] sm:text-xs text-gray-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Free • No Obligation • Encrypted & Confidential</span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#0D4F3D] hover:bg-emerald-800 text-white font-extrabold text-sm rounded-xl shadow-lg transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2 min-h-[48px]"
              >
                <span>Confirm My Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </form>
      ) : (
        /* Booking Confirmation Screen */
        <div className="p-6 sm:p-12 text-center space-y-6 animate-fadeIn">
          <div className="w-16 h-16 bg-emerald-100 text-[#0D4F3D] rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div>
            <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Appointment Confirmed
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-display mt-3">
              You're Booked!
            </h3>
            <p className="text-gray-600 text-sm max-w-md mx-auto mt-2">
              Your consultation is scheduled with a senior RentAgain housing strategist. A confirmation has been sent to <strong>{email}</strong>.
            </p>
          </div>

          <div className="max-w-md mx-auto bg-gray-50 border border-gray-200 rounded-2xl p-4 sm:p-5 text-left text-xs sm:text-sm space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-500">Service:</span>
              <span className="font-bold text-gray-900">
                {selectedService === 'housing' ? 'Housing Approval Consultation' : 'Car Approval Consultation'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Date & Time:</span>
              <span className="font-bold text-emerald-800">
                {selectedDate} at {selectedTime}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Client:</span>
              <span className="font-bold text-gray-900">{name || 'Client'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Phone:</span>
              <span className="font-bold text-gray-900">{phone || SITE_CONTACT.phone}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => setConfirmed(false)}
              className="w-full sm:w-auto px-5 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold rounded-lg cursor-pointer transition-colors min-h-[44px]"
            >
              Book Another Appointment
            </button>
            <a
              href={`tel:${SITE_CONTACT.phoneClean}`}
              className="w-full sm:w-auto px-5 py-3 bg-[#0D4F3D] hover:bg-emerald-800 text-white text-xs font-bold rounded-lg shadow cursor-pointer transition-colors min-h-[44px] flex items-center justify-center"
            >
              Call Specialist Now: {SITE_CONTACT.phone}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
