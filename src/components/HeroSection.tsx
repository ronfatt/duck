'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Flame, MapPin, Utensils, MessageCircle, Play, Volume2, VolumeX, ShieldCheck } from 'lucide-react';

export default function HeroSection() {
  const [isPlayingVideo, setIsPlayingVideo] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="relative w-full min-h-[88vh] flex items-center justify-center overflow-hidden bg-charcoal-950">
      
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        {isPlayingVideo ? (
          <video
            src="/assets/roast_duck_kitchen.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover scale-105 filter brightness-75"
          />
        ) : (
          <Image
            src="/assets/roast_duck_hero.jpg"
            alt="8分脆皮烧鸭 8 Fen Crispy Roast Duck"
            fill
            priority
            className="object-cover brightness-75 scale-105"
          />
        )}
        
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-charcoal-950/40" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Video Audio Control Toggle */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="absolute top-6 right-6 z-20 p-2.5 rounded-full bg-black/60 text-amber-400 hover:bg-black border border-amber-500/30 text-xs flex items-center space-x-1 backdrop-blur-md"
        aria-label="Toggle Audio"
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        <span className="hidden sm:inline text-[11px] font-medium">{isMuted ? '开启砍鸭声音 Sound' : '静音 Mute'}</span>
      </button>

      {/* Hero Content Box */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 pb-20">
        
        {/* Top Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-600/30 border border-amber-500/50 backdrop-blur-md mb-6 shadow-xl animate-pulse">
          <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
          <span className="text-xs sm:text-sm font-bold text-amber-300 tracking-wider">
            雪隆区人气街坊烧鸭品牌 · 当天现烧现砍
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-none mb-4 drop-shadow-2xl">
          <span className="block text-gold-gradient mb-2">脆皮够响，烧鸭够香。</span>
        </h1>
        <p className="text-base sm:text-xl text-stone-200 font-medium max-w-2xl mx-auto mb-8 drop-shadow leading-relaxed">
          8分脆皮，10分鲜汁。严选大鸭明火烘烤，皮脆如薄饼，肉嫩汁满不柴，平民价格享受专业大厨品质！
        </p>

        {/* Three Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto mb-10">
          
          <Link
            href="/menu"
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-amber-gradient hover:opacity-95 text-stone-950 font-black text-base flex items-center justify-center space-x-2 shadow-xl shadow-amber-900/40 transform hover:-translate-y-0.5 active:translate-y-0 transition-all"
          >
            <Utensils className="w-5 h-5" />
            <span>查看菜单 View Menu</span>
          </Link>

          <Link
            href="/locations"
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-stone-900/90 hover:bg-stone-800 text-amber-300 font-bold text-base border border-amber-500/50 flex items-center justify-center space-x-2 shadow-xl backdrop-blur-md transform hover:-translate-y-0.5 active:translate-y-0 transition-all"
          >
            <MapPin className="w-5 h-5 text-amber-400" />
            <span>找最近分行 Find Outlets</span>
          </Link>

          <a
            href="https://wa.me/60168888888?text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E8%AF%A2%E4%B9%B0%E3%80%8C8%E5%88%86%E8%B4%B6%E7%9A%AE%E7%83%A7%E9%B9%AD%E3%80%8D"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-red-700 hover:bg-red-800 text-white font-bold text-base flex items-center justify-center space-x-2 shadow-xl shadow-red-950/50 transform hover:-translate-y-0.5 active:translate-y-0 transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-white text-red-700" />
            <span>WhatsApp 查询</span>
          </a>

        </div>

        {/* Value Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-stone-800/80 max-w-3xl mx-auto text-xs text-stone-300">
          <div className="flex items-center justify-center space-x-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>100% 每日新鲜现烤</span>
          </div>
          <div className="flex items-center justify-center space-x-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>绝不卖隔夜鸭肉</span>
          </div>
          <div className="flex items-center justify-center space-x-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>独家秘方风干工艺</span>
          </div>
          <div className="flex items-center justify-center space-x-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>单人烧鸭饭仅 RM9.50</span>
          </div>
        </div>

      </div>
    </section>
  );
}
