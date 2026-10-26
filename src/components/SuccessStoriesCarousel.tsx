import React, { useState, useRef } from 'react';
import { SUCCESS_STORIES } from '../data/siteData';
import { SuccessStory } from '../types';
import { ChevronLeft, ChevronRight, Maximize2, X, CheckCircle, ShieldCheck, MoveHorizontal } from 'lucide-react';

export const SuccessStoriesCarousel: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState<SuccessStory | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 text-[#0D4F3D] text-xs font-bold tracking-wider uppercase mb-3">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              Verified Landlord Approvals
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 font-display tracking-tight">
              SUCCESS STORIES
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-2xl">
              Real renters, real approvals. Browse documented approval letters and lease confirmations from clients who were previously denied.
            </p>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-3 mt-4 md:mt-0">
            {/* Mobile swipe hint */}
            <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 font-medium md:hidden">
              <MoveHorizontal className="w-3.5 h-3.5" />
              Swipe to explore
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                className="p-2.5 sm:p-3 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-emerald-50 hover:border-emerald-300 hover:text-[#0D4F3D] shadow-sm transition-all cursor-pointer min-w-[40px] min-h-[40px] flex items-center justify-center"
                aria-label="Previous Stories"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-2.5 sm:p-3 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-emerald-50 hover:border-emerald-300 hover:text-[#0D4F3D] shadow-sm transition-all cursor-pointer min-w-[40px] min-h-[40px] flex items-center justify-center"
                aria-label="Next Stories"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal scroll track with smooth touch snapping */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory focus:outline-none -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {SUCCESS_STORIES.map((story) => (
            <div
              key={story.id}
              className="min-w-[250px] sm:min-w-[320px] max-w-[280px] sm:max-w-[320px] snap-start bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group cursor-pointer shrink-0"
              onClick={() => setSelectedStory(story)}
            >
              <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                <div className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-xs p-1.5 sm:p-2 rounded-full text-gray-700 group-hover:bg-[#0D4F3D] group-hover:text-white transition-colors shadow">
                  <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="inline-block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-emerald-700/90 text-white px-2 py-0.5 rounded backdrop-blur-xs mb-1">
                    {story.approvalType}
                  </span>
                  <p className="font-bold text-xs sm:text-sm leading-snug drop-shadow-sm">{story.outcome}</p>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 bg-white flex items-center justify-between border-t border-gray-50">
                <div>
                  <h4 className="font-bold text-gray-900 text-xs sm:text-sm line-clamp-1">{story.title}</h4>
                  <p className="text-[11px] text-gray-500">{story.city}</p>
                </div>
                <span className="text-xs font-semibold text-emerald-700 shrink-0">
                  Proof ➜
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal (Mobile Optimized) */}
      {selectedStory && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4"
          onClick={() => setSelectedStory(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 bg-gray-900 text-white">
              <div className="pr-4">
                <h3 className="font-bold text-sm sm:text-lg line-clamp-1">{selectedStory.title}</h3>
                <p className="text-xs text-emerald-300">
                  {selectedStory.city} • {selectedStory.approvalType}
                </p>
              </div>
              <button
                onClick={() => setSelectedStory(null)}
                className="p-2 rounded-full hover:bg-gray-800 text-gray-300 hover:text-white transition-colors cursor-pointer min-w-[40px] min-h-[40px] flex items-center justify-center shrink-0"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            <div className="overflow-y-auto flex-1 p-2 sm:p-4 bg-gray-950 flex items-center justify-center">
              <img
                src={selectedStory.image}
                alt={selectedStory.title}
                className="max-h-[65vh] sm:max-h-[70vh] w-auto object-contain rounded shadow-lg"
              />
            </div>

            <div className="p-3 sm:p-4 bg-emerald-50 border-t border-emerald-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-900">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Verified: {selectedStory.outcome}</span>
              </div>
              <button
                onClick={() => setSelectedStory(null)}
                className="w-full sm:w-auto px-4 py-2 text-xs font-bold text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer text-center"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
