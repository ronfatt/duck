'use client';

import React from 'react';
import Link from 'next/link';
import { Utensils, MapPin, Compass, MessageCircle } from 'lucide-react';

export default function MobileBottomNav() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-charcoal-950/95 backdrop-blur-md border-t border-amber-600/40 px-2 py-1.5 shadow-2xl">
      <div className="grid grid-cols-4 gap-1 text-center">
        
        {/* 1. Menu */}
        <Link
          href="/menu"
          className="flex flex-col items-center justify-center py-1 text-stone-300 hover:text-amber-400 active:scale-95 transition-all"
        >
          <Utensils className="w-5 h-5 text-amber-500 mb-0.5" />
          <span className="text-[11px] font-bold">菜单 Menu</span>
        </Link>

        {/* 2. Today's Location */}
        <Link
          href="/today"
          className="flex flex-col items-center justify-center py-1 text-stone-300 hover:text-amber-400 active:scale-95 transition-all"
        >
          <Compass className="w-5 h-5 text-amber-400 mb-0.5 animate-pulse" />
          <span className="text-[11px] font-bold">今日地点 Today</span>
        </Link>

        {/* 3. Navigation / Outlets */}
        <Link
          href="/locations"
          className="flex flex-col items-center justify-center py-1 text-stone-300 hover:text-amber-400 active:scale-95 transition-all"
        >
          <MapPin className="w-5 h-5 text-amber-300 mb-0.5" />
          <span className="text-[11px] font-bold">导航 Outlets</span>
        </Link>

        {/* 4. WhatsApp */}
        <a
          href="https://wa.me/60168888888?text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E8%AF%A2%E4%B9%B0%E3%80%8C8%E5%88%86%E8%B4%B6%E7%9A%AE%E7%83%A7%E9%B9%AD%E3%80%8D"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 rounded-xl bg-emerald-600 text-white font-bold active:scale-95 transition-all shadow-md"
        >
          <MessageCircle className="w-5 h-5 fill-white text-emerald-600 mb-0.5" />
          <span className="text-[11px] font-bold">WhatsApp</span>
        </a>

      </div>
    </div>
  );
}
