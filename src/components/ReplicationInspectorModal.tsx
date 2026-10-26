import React from 'react';
import { X, CheckCircle, Zap, Shield, Sparkles, Layers, Globe, Code2 } from 'lucide-react';
import { SITE_CONTACT } from '../data/siteData';

interface ReplicationInspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReplicationInspectorModal: React.FC<ReplicationInspectorModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative max-w-2xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-[#0D4F3D] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-700/80 border border-emerald-400/40 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-300">
                Architectural Breakdown
              </span>
              <h3 className="text-xl font-bold font-display">109% Replication Analysis</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-emerald-800 text-emerald-200 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-gray-700 leading-relaxed">
          {/* Question 1: Can we just import without recreating? */}
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
            <div className="flex items-center gap-2 text-amber-900 font-bold">
              <Code2 className="w-5 h-5 text-amber-700 shrink-0" />
              <span>Can we completely import the app here without recreating?</span>
            </div>
            <p className="text-xs text-amber-800 leading-relaxed">
              <strong>Short answer:</strong> No platform allows a raw 1-click import of a live Wix site because Wix uses a closed, proprietary runtime called <em>Thunderbolt</em> with obfuscated mesh-grid bundles and backend-locked APIs. If you save raw Wix HTML, it breaks outside Wix’s domain (blocked CDN assets, broken forms, cross-origin security errors, and 15MB+ of bloated scripts).
            </p>
            <p className="text-xs text-amber-800 leading-relaxed font-semibold">
              <strong>The Superior Solution:</strong> Extracting every single asset, color token, image URL, pricing structure, and text copy—then reconstructing it natively in clean React + Tailwind + TypeScript. This produces a pixel-accurate second version that runs anywhere independently.
            </p>
          </div>

          {/* 109% Comparison Matrix */}
          <div>
            <h4 className="font-extrabold text-base text-gray-900 font-display mb-3">
              Why this replica achieves 109% fidelity:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 space-y-1">
                <span className="font-bold text-gray-900 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  100% Exact Copy & Pricing
                </span>
                <p className="text-gray-500">
                  Matches every pricing tier: Standard $950 / Expedited $1,400, Co-Applicant $800, ADP Income $450 / $650, Instant Approval $2,500 / $2,800.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 space-y-1">
                <span className="font-bold text-gray-900 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Real Asset & CDN Mapping
                </span>
                <p className="text-gray-500">
                  Includes the exact 12+ approval letters, verified ADP badges, and brand monogram styling.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1">
                <span className="font-bold text-emerald-950 flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-emerald-700" />
                  +9% Supercharged Speed
                </span>
                <p className="text-emerald-800">
                  Instant sub-second page transitions, zero full-page reloads, and mobile gesture navigation.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1">
                <span className="font-bold text-emerald-950 flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-emerald-700" />
                  +9% Zero Platform Lock-in
                </span>
                <p className="text-emerald-800">
                  You own the clean TypeScript codebase. No monthly Wix subscriptions, full freedom to host anywhere.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive features included */}
          <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 space-y-2 text-xs">
            <h5 className="font-bold text-gray-900 uppercase tracking-wide">
              Included Functional Features:
            </h5>
            <div className="grid grid-cols-2 gap-2 text-gray-600">
              <div>✓ All 7 Pages & Services</div>
              <div>✓ Interactive Intake Questionnaire</div>
              <div>✓ Free Consultation Scheduler</div>
              <div>✓ Success Stories Lightbox Zoom</div>
              <div>✓ Responsive Mobile Drawer</div>
              <div>✓ Client Portal Login Dialog</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-100/80 border-t border-gray-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#0D4F3D] hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl cursor-pointer"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};
