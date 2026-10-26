import React, { useState } from 'react';
import { X, Lock, CheckCircle, ArrowRight, Shield } from 'lucide-react';
import { SITE_CONTACT } from '../data/siteData';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setLoggedIn(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="relative max-w-md w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-[#0D4F3D] text-white px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-700/80 border border-emerald-400/40 flex items-center justify-center">
              <Lock className="w-4 h-4 text-emerald-200" />
            </div>
            <div>
              <h3 className="font-bold font-display text-base sm:text-lg">Client Case Portal</h3>
              <p className="text-[11px] text-emerald-200">RentAgain Secure Access</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-emerald-800 text-emerald-200 hover:text-white transition-colors cursor-pointer min-w-[36px] min-h-[36px] flex items-center justify-center"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-6 overflow-y-auto">
          {!loggedIn ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-gray-500 leading-relaxed">
                Log in to check the status of your rental application, upload requested paystubs, view tradeline updates, or download landlord packets.
              </p>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="client@rentagain.org"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-3 rounded-lg border border-gray-300 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-bold text-gray-700">Password</label>
                  <a href="#reset" className="text-xs text-emerald-700 hover:underline">
                    Forgot?
                  </a>
                </div>
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3.5 py-3 rounded-lg border border-gray-300 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#0D4F3D] hover:bg-emerald-800 text-white font-bold text-sm rounded-xl shadow transition-all cursor-pointer flex items-center justify-center gap-2 min-h-[48px]"
                >
                  <span>Sign In To Portal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="pt-3 border-t border-gray-100 flex flex-col xs:flex-row items-center justify-between text-xs text-gray-500 gap-2">
                <span className="flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-emerald-600" />
                  256-bit TLS Encrypted
                </span>
                <span>Need support? {SITE_CONTACT.phone}</span>
              </div>
            </form>
          ) : (
            <div className="text-center py-4 space-y-4 animate-fadeIn">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-base sm:text-lg">Case Portal Active</h4>
                <p className="text-xs text-gray-500 mt-1">Logged in as {email}</p>
              </div>

              <div className="p-3 bg-gray-50 rounded-xl text-left border border-gray-200 text-xs text-gray-700 space-y-2">
                <div className="flex justify-between items-center pb-1 border-b border-gray-200">
                  <span className="font-bold text-gray-900">Case #RA-84920</span>
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold border border-emerald-200">
                    Active Review
                  </span>
                </div>
                <p>• Specialist: Senior Housing Strategist Assigned</p>
                <p>• Documents: Verification verified via ADP</p>
                <p>• Property Target: Under Landlord Submission</p>
              </div>

              <button
                onClick={() => {
                  setLoggedIn(false);
                  onClose();
                }}
                className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold rounded-lg cursor-pointer min-h-[44px]"
              >
                Close Portal
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
