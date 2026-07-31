import React from 'react';
import { Star, Quote, ExternalLink } from 'lucide-react';
import { REVIEWS } from '@/data/reviews';

export default function ReviewsSection() {
  return (
    <section className="py-16 bg-charcoal-950 text-stone-100 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800">
            真实食客评价 Customer Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">
            街坊与老饕的好评口碑
          </h2>
          <p className="text-stone-400 text-sm mt-2">
            全网满意度高评价！用真实品质与口感说话。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-stone-900 border border-stone-800 p-6 rounded-2xl relative flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Rating Stars & Source */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-950 text-amber-400 border border-amber-800 text-[10px] font-bold">
                    {rev.source}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-amber-600/30 mb-2" />
                
                <p className="text-stone-200 text-xs sm:text-sm leading-relaxed mb-4">
                  “{rev.contentCn}”
                </p>
                <p className="text-stone-400 text-xs italic">
                  &ldquo;{rev.contentEn}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm">{rev.authorInitials}</h4>
                  <p className="text-[11px] text-amber-400">{rev.authorRole} · {rev.branchName}</p>
                </div>
                <a
                  href={rev.googleReviewUrlPlaceholder}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-stone-500 hover:text-amber-400 flex items-center space-x-1"
                >
                  <span>{rev.date}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
