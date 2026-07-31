import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Newspaper, ArrowRight, Calendar } from 'lucide-react';
import { UPDATES } from '@/data/updates';

export default function UpdatesSection() {
  return (
    <section className="py-16 bg-charcoal-900 text-stone-100 border-t border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-600/20 text-amber-400 text-xs font-bold uppercase mb-2 border border-amber-500/30">
              <Newspaper className="w-3.5 h-3.5" />
              <span>最新动向与活动 Updates & News</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              品牌公告与预订活动
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-1 text-amber-400 hover:text-amber-300 font-bold text-xs mt-3 md:mt-0"
          >
            <span>节日整鸭预订 Reserve Whole Duck</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {UPDATES.map((up) => (
            <div
              key={up.id}
              className="bg-stone-950 border border-stone-800 hover:border-amber-500/40 rounded-2xl overflow-hidden shadow-lg transition-all hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="relative h-48 w-full bg-stone-900">
                <Image
                  src={up.image}
                  alt={up.titleCn}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-red-700 text-white text-[10px] font-bold shadow">
                  {up.tagCn}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-1 text-[11px] text-stone-400 mb-2">
                    <Calendar className="w-3.5 h-3.5 text-amber-500" />
                    <span>{up.date}</span>
                  </div>
                  <h3 className="font-bold text-white text-base leading-snug hover:text-amber-400 transition-colors">
                    {up.titleCn}
                  </h3>
                  <p className="text-xs text-stone-300 mt-2 line-clamp-3 leading-relaxed">
                    {up.summaryCn}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-800">
                  <a
                    href="https://wa.me/60168888888?text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E8%AF%A2%E4%B9%B0%E6%B4%BB%E5%8A%A8%E6%88%96%E9%A2%84%E8%AE%A2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-amber-400 hover:underline inline-flex items-center space-x-1"
                  >
                    <span>了解详情 / WhatsApp 预订</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
