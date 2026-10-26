import React, { useState, useRef } from 'react';
import { SUCCESS_STORIES } from '../data/siteData';
import { SuccessStory } from '../types';
import { ChevronLeft, ChevronRight, Maximize2, X, CheckCircle, ShieldCheck } from 'lucide-react';

export const SuccessStoriesCarousel: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState<SuccessStory | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 text-[#0D4F3D] text-xs font-bold tracking-wider uppercase mb-3">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              Verified Landlord Approvals
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-display tracking-tight">
              SUCCESS STORIES
            </h2>
            <p className="mt-2 text-base text-gray-600 max-w-2xl">
              Real renters, real approvals. Browse documented approval letters and lease confirmations from clients who were previously denied.
            </p>
          </div>

          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-emerald-50 hover:border-emerald-300 hover:text-[#0D4F3D] shadow-sm transition-all cursor-pointer"
              aria-label="Previous Stories"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-emerald-50 hover:border-emerald-300 hover:text-[#0D4F3D] shadow-sm transition-all cursor-pointer"
              aria-label="Next Stories"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal scroll track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory focus:outline-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {SUCCESS_STORIES.map((story) => (
            <div
              key={story.id}
              className="min-w-[280px] sm:min-w-[320px] max-w-[320px] snap-start bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group cursor-pointer"
              onClick={() => setSelectedStory(story)}
            >
              <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full text-gray-700 group-hover:bg-[#0D4F3D] group-hover:text-white transition-colors shadow">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider bg-emerald-700/90 text-white px-2 py-0.5 rounded backdrop-blur-xs mb-1">
                    {story.approvalType}
                  </span>
                  <p className="font-bold text-sm leading-snug drop-shadow-sm">{story.outcome}</p>
                </div>
              </div>

              <div className="p-4 bg-white flex items-center justify-between border-t border-gray-50">
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{story.title}</h4>
                  <p className="text-xs text-gray-500">{story.city}</p>
                </div>
                <span className="text-xs font-semibold text-emerald-700 hover:underline">
                  View Proof ➜
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedStory && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedStory(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white">
              <div>
                <h3 className="font-bold text-lg">{selectedStory.title}</h3>
                <p className="text-xs text-emerald-300">
                  {selectedStory.city} • {selectedStory.approvalType}
                </p>
              </div>
              <button
                onClick={() => setSelectedStory(null)}
                className="p-1.5 rounded-full hover:bg-gray-800 text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="overflow-y-auto flex-1 p-4 bg-gray-950 flex items-center justify-center">
              <img
                src={selectedStory.image}
                alt={selectedStory.title}
                className="max-h-[70vh] w-auto object-contain rounded-lg shadow-lg"
              />
            </div>

            <div className="p-4 bg-emerald-50 border-t border-emerald-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-900">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Verified Client Case Outcome: {selectedStory.outcome}</span>
              </div>
              <button
                onClick={() => setSelectedStory(null)}
                className="px-4 py-1.5 text-xs font-bold text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
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
