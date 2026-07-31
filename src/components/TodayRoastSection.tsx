'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Flame, ShoppingBag, Eye, MapPin } from 'lucide-react';
import { MENU_ITEMS, MenuItem } from '@/data/menu';
import DishModal from '@/components/DishModal';

export default function TodayRoastSection() {
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  const getBadgeStyle = (availability: MenuItem['availability']) => {
    switch (availability) {
      case 'in-stock':
        return 'bg-emerald-950 text-emerald-300 border-emerald-700';
      case 'low-stock':
        return 'bg-amber-950 text-amber-300 border-amber-700 animate-pulse';
      case 'sold-out':
        return 'bg-red-950 text-red-300 border-red-800';
      case 'paused':
        return 'bg-stone-800 text-stone-400 border-stone-700';
    }
  };

  return (
    <section className="py-16 bg-charcoal-900 text-stone-100 border-t border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-600/20 text-amber-400 text-xs font-bold uppercase mb-2 border border-amber-500/30">
            <Flame className="w-3.5 h-3.5 fill-amber-400" />
            <span>实时炉况 Live Oven Status</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            今天炉里有什么？
          </h2>
          <p className="text-stone-400 text-sm mt-2">
            100% 当天明火现烤，实时供应状态一览！
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MENU_ITEMS.slice(0, 6).map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedDish(item)}
              className="bg-stone-950 border border-stone-800 hover:border-amber-500/50 rounded-2xl overflow-hidden cursor-pointer shadow-xl transition-all hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="relative h-52 w-full bg-stone-900">
                <Image
                  src={item.image}
                  alt={item.nameCn}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-80" />
                
                {/* Availability Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold border shadow ${getBadgeStyle(item.availability)}`}>
                    ● {item.availabilityLabelCn}
                  </span>
                </div>

                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white">
                  <Eye className="w-4 h-4" />
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-black text-white hover:text-amber-400 transition-colors">
                        {item.nameCn}
                      </h3>
                      <p className="text-xs text-stone-400">{item.nameEn}</p>
                    </div>
                    <span className="text-lg font-black text-amber-400">
                      RM {item.price.toFixed(2)}
                    </span>
                  </div>

                  <p className="text-xs text-stone-300 mt-2 line-clamp-2 leading-relaxed">
                    {item.descriptionCn}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-stone-400 flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>蕉赖太子园档口现售</span>
                  </span>
                  <button className="px-3 py-1.5 rounded-lg bg-amber-600 text-stone-950 font-bold text-xs flex items-center space-x-1">
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>查看详情</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      <DishModal item={selectedDish} onClose={() => setSelectedDish(null)} />
    </section>
  );
}
