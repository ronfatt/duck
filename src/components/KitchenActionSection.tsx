'use client';

import React from 'react';
import Image from 'next/image';
import { Flame, Scissors, Volume2 } from 'lucide-react';

export default function KitchenActionSection() {
  return (
    <section className="py-16 bg-charcoal-900 text-stone-100 relative overflow-hidden border-t border-amber-900/30">
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-900/20 rounded-full filter blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Craftsmanship Highlights */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-600/20 border border-amber-500/40 text-amber-400 text-xs font-bold uppercase">
              <Flame className="w-3.5 h-3.5 fill-amber-400" />
              <span>现场实景刀功 · 8分脆皮之秘</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              大刀砍鸭，<br />
              <span className="text-gold-gradient">肉汁喷溅的震撼瞬间！</span>
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              每一只烧鸭在出炉后，必须经过阿和师傅的精准大刀刀功。咔嚓一声皮开肉绽，热气腾腾的浓郁香汁顺着切口流淌，搭配特调古法淋酱，保证你一口入魂！
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-800">
              <div className="bg-stone-950/80 p-4 rounded-xl border border-stone-800">
                <span className="text-2xl font-black text-amber-400">12 小时</span>
                <p className="text-xs text-stone-400 mt-1">秘制中药材浸泡风干</p>
              </div>
              <div className="bg-stone-950/80 p-4 rounded-xl border border-stone-800">
                <span className="text-2xl font-black text-amber-400">220°C</span>
                <p className="text-xs text-stone-400 mt-1">明火精控烘烤至金黄</p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/60168888888?text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E8%AF%A2%E4%B9%B0%E3%80%8C8%E5%88%86%E8%B4%B6%E7%9A%AE%E7%83%A7%E9%B9%AD%E3%80%8D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-amber-gradient hover:opacity-95 text-stone-950 font-bold text-sm shadow-xl"
              >
                <Scissors className="w-4 h-4" />
                <span>预订现场现砍全鸭 Order Fresh Duck</span>
              </a>
            </div>
          </div>

          {/* Right: Embedded Kitchen Video Showcase */}
          <div className="relative rounded-2xl overflow-hidden border border-amber-500/40 shadow-2xl bg-black">
            <video
              src="/assets/roast_duck_chopping.mp4"
              poster="/assets/roast_duck_hero.jpg"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover aspect-4/3"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-amber-200 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-stone-800">
              <span className="font-bold flex items-center space-x-1">
                <Volume2 className="w-4 h-4 text-amber-400" />
                <span>声音实录：咔嚓爆脆声</span>
              </span>
              <span className="text-[11px] text-stone-300">师傅阿和现场斩剁</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
