'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Search, ShoppingBag } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem } from '@/data/menu';
import DishModal from '@/components/DishModal';

export default function MenuClient() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesQuery =
      item.nameCn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.descriptionCn.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-charcoal-950 text-stone-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800">
            8分脆皮烧鸭 · 全目菜谱
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-3">
            招牌美味菜谱 Menu
          </h1>
          <p className="text-stone-400 text-sm sm:text-base mt-2">
            100% 每日新鲜烤制 · 明火斩剁现上盘 · 价格及供应情况以现场为准
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-stone-900 border border-stone-800 p-4 rounded-2xl mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeCategory === 'all'
                  ? 'bg-amber-gradient text-stone-950 shadow-md'
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
              }`}
            >
              全部菜色 All Items
            </button>
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-amber-gradient text-stone-950 shadow-md'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                {cat.nameCn}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="搜索菜名或关键字..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-stone-950 border border-stone-700 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-amber-500"
            />
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
          </div>

        </div>

        {/* Dish Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-stone-900 rounded-2xl border border-stone-800">
            <p className="text-stone-400 text-sm">找不到符合条件“{searchQuery}”的菜色，请尝试其他关键词。</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((dish) => (
              <div
                key={dish.id}
                onClick={() => setSelectedDish(dish)}
                className="bg-stone-900 border border-stone-800 hover:border-amber-500/50 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
              >
                <div className="relative h-52 w-full bg-stone-950">
                  <Image
                    src={dish.image}
                    alt={dish.nameCn}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                    {dish.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-red-700 text-amber-200 text-[10px] font-bold shadow"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-black text-white hover:text-amber-400 transition-colors">
                          {dish.nameCn}
                        </h3>
                        <p className="text-xs text-stone-400">{dish.nameEn}</p>
                      </div>
                      <span className="text-lg font-black text-amber-400">
                        RM {dish.price.toFixed(2)}
                      </span>
                    </div>

                    <p className="text-xs text-stone-300 mt-2 line-clamp-2 leading-relaxed">
                      {dish.descriptionCn}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between">
                    <span className="text-[11px] text-amber-400 font-medium">
                      {dish.portion}
                    </span>
                    <button className="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs flex items-center space-x-1">
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>查看/预订</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      <DishModal item={selectedDish} onClose={() => setSelectedDish(null)} />
    </div>
  );
}
