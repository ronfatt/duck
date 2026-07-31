'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Flame, Star, ShoppingBag, Eye } from 'lucide-react';
import { MENU_ITEMS, MenuItem } from '@/data/menu';
import DishModal from '@/components/DishModal';

export default function SignatureDishesSection() {
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  const popularDishes = MENU_ITEMS.filter((item) => item.isPopular);

  return (
    <section className="py-16 bg-charcoal-900 text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-600/20 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase mb-3">
            <Flame className="w-3.5 h-3.5 fill-amber-400" />
            <span>招牌必点 Signature Specialties</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            镇店金牌烧味 · 镇店美味
          </h2>
          <p className="text-stone-400 text-sm mt-2">
            每一道都是阿和师傅倾心力作，明火现烤，皮脆肉嫩汁爆满。
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularDishes.map((dish) => (
            <div
              key={dish.id}
              onClick={() => setSelectedDish(dish)}
              className="group bg-stone-900 border border-stone-800 hover:border-amber-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-lg cursor-pointer flex flex-col justify-between"
            >
              {/* Dish Image */}
              <div className="relative h-56 w-full bg-stone-950 overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.nameCn}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-80" />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                  {dish.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-full bg-red-700/90 text-amber-200 text-[10px] font-bold shadow-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white group-hover:bg-amber-600 transition-colors">
                  <Eye className="w-4 h-4" />
                </div>
              </div>

              {/* Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-black text-white group-hover:text-amber-400 transition-colors">
                        {dish.nameCn}
                      </h3>
                      <p className="text-xs text-stone-400 font-medium">{dish.nameEn}</p>
                    </div>
                    <span className="text-lg font-black text-amber-400">
                      RM {dish.price.toFixed(2)}
                    </span>
                  </div>

                  <p className="text-xs text-stone-300 mt-3 line-clamp-2 leading-relaxed">
                    {dish.descriptionCn}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-amber-400/90 font-medium">
                    {dish.portion}
                  </span>
                  <span className="text-xs font-bold text-amber-400 flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                    <span>查看详情 Details</span>
                    <ShoppingBag className="w-3.5 h-3.5" />
                  </span>
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
