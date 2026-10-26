import React, { useState } from 'react';
import { X, Check, ArrowRight, ArrowLeft, Sparkles, ShieldCheck } from 'lucide-react';
import { PageId } from '../types';

interface QuestionnaireModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToService: (page: PageId) => void;
  onNavigateToBooking: () => void;
}

export const QuestionnaireModal: React.FC<QuestionnaireModalProps> = ({
  isOpen,
  onClose,
  onNavigateToService,
  onNavigateToBooking,
}) => {
  const [step, setStep] = useState(1);
  const [propertyType, setPropertyType] = useState('apartment');
  const [challenge, setChallenge] = useState('credit');
  const [timeline, setTimeline] = useState('asap');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    targetRent: '$1,800',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setSubmitted(true);
    }
  };

  const getRecommendation = () => {
    if (challenge === 'income') {
      return {
        title: 'Verified Income Program (ADP Powered)',
        desc: 'Because your primary hurdle is proof of earnings, our landlord-ready ADP documentation will guarantee you meet the standard 2.5x - 3x rent verification check.',
        page: 'verified-income' as PageId,
        price: 'From $450',
      };
    }
    if (challenge === 'instant' || timeline === 'asap') {
      return {
        title: 'Instant Approval Service (White Glove)',
        desc: 'For urgent timelines and clients seeking guaranteed access without traditional screening barriers, our team secures the property on your behalf.',
        page: 'instant-approval' as PageId,
        price: 'From $2,500',
      };
    }
    if (challenge === 'credit') {
      return {
        title: 'Co-Applicant Program (700+ Score)',
        desc: 'Adding a pre-qualified co-applicant with a 700+ FICO and +$10,000 monthly income overcomes low credit, past charge-offs, and automated score filters.',
        page: 'cosigner' as PageId,
        price: '$800 Flat Fee',
      };
    }
    return {
      title: 'Housing Approval Program (Complete Re-Profile)',
      desc: 'Our full-spectrum program that restores positive rental history documentation, tradelines, and complete property application preparation.',
      page: 'housing-packages' as PageId,
      price: 'From $950',
    };
  };

  const recommendation = getRecommendation();

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative max-w-lg w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col">
        {/* Header */}
        <div className="bg-[#0D4F3D] text-white px-6 py-5 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-emerald-300 uppercase">
              Free Assessment
            </span>
            <h3 className="text-xl font-bold font-display">Personalized Housing Strategy</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-emerald-800 text-emerald-200 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress bar */}
        {!submitted && (
          <div className="w-full bg-gray-100 h-1.5">
            <div
              className="bg-emerald-600 h-1.5 transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        )}

        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleNext} className="space-y-5">
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">
                      Step 1: What type of property are you looking for?
                    </h4>
                    <p className="text-xs text-gray-500">
                      This helps us tailor our verification and landlord approach.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { id: 'apartment', label: 'Apartment Complex' },
                      { id: 'house', label: 'Single Family House' },
                      { id: 'townhouse', label: 'Townhouse / Condo' },
                      { id: 'relocating', label: 'Out-of-State Move' },
                    ].map((opt) => (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => setPropertyType(opt.id)}
                        className={`p-3.5 rounded-xl border text-left text-sm font-semibold transition-all cursor-pointer ${
                          propertyType === opt.id
                            ? 'border-emerald-600 bg-emerald-50/70 text-[#0D4F3D] ring-2 ring-emerald-600/20'
                            : 'border-gray-200 hover:border-gray-300 text-gray-700'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>

                  <div className="pt-2">
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Estimated Monthly Rent Budget
                    </label>
                    <input
                      type="text"
                      value={formData.targetRent}
                      onChange={(e) => setFormData({ ...formData, targetRent: e.target.value })}
                      placeholder="$1,800 / month"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">
                      Step 2: What is your primary approval obstacle?
                    </h4>
                    <p className="text-xs text-gray-500">
                      Select the primary factor that caused past denials or hesitation.
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    {[
                      { id: 'credit', title: 'Credit Score Below 620', desc: 'Low credit, charge-offs, or collections' },
                      { id: 'eviction', title: 'Prior Eviction or Broken Lease', desc: 'Civil court or leasing debt on record' },
                      { id: 'income', title: 'Income Proof / Self-Employed', desc: 'Need verifiable W-2/ADP 3x rent paystubs' },
                      { id: 'instant', title: 'Immediate Move / Past Denials', desc: 'Need keys quickly without traditional delays' },
                    ].map((opt) => (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => setChallenge(opt.id)}
                        className={`w-full p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                          challenge === opt.id
                            ? 'border-emerald-600 bg-emerald-50/70 ring-2 ring-emerald-600/20'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div>
                          <p className="text-sm font-bold text-gray-900">{opt.title}</p>
                          <p className="text-xs text-gray-500">{opt.desc}</p>
                        </div>
                        {challenge === opt.id && <Check className="w-5 h-5 text-emerald-600 shrink-0" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">
                      Step 3: Where should we send your custom roadmap?
                    </h4>
                    <p className="text-xs text-gray-500">
                      Our specialist will review your file and prepare your approval match.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jordan Smith"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-gray-500 pt-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Your information is 100% confidential and never shared with 3rd parties.</span>
                  </div>
                </div>
              )}

              {/* Navigation buttons */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="flex items-center gap-1 text-xs font-semibold text-gray-600 hover:text-gray-900 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                ) : (
                  <div />
                )}

                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#0D4F3D] hover:bg-emerald-800 text-white text-xs font-bold rounded-lg shadow transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>{step === 3 ? 'Generate My Strategy' : 'Next Step'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          ) : (
            /* Result recommendation */
            <div className="space-y-5 text-center py-2 animate-fadeIn">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <Sparkles className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Recommended Solution Match
                </span>
                <h4 className="text-2xl font-extrabold text-gray-900 font-display mt-2">
                  {recommendation.title}
                </h4>
                <p className="text-sm font-semibold text-emerald-700 mt-1">{recommendation.price}</p>
                <p className="text-xs text-gray-600 mt-3 leading-relaxed max-w-md mx-auto">
                  {recommendation.desc}
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl text-left border border-gray-200/80 text-xs text-gray-700 space-y-1.5">
                <p className="font-bold text-gray-900">Next Action Steps:</p>
                <p className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  Your file has been routed to our rental approval department.
                </p>
                <p className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  Review program breakdown or schedule a priority consultation call.
                </p>
              </div>

              <div className="flex flex-col gap-2.5 pt-2">
                <button
                  onClick={() => {
                    onClose();
                    onNavigateToService(recommendation.page);
                  }}
                  className="w-full py-3 bg-[#0D4F3D] hover:bg-emerald-800 text-white font-bold text-sm rounded-xl shadow cursor-pointer transition-all"
                >
                  View {recommendation.title} ➜
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onNavigateToBooking();
                  }}
                  className="w-full py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold text-xs rounded-xl cursor-pointer transition-colors"
                >
                  Book 15-Minute Free Consultation Call
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
