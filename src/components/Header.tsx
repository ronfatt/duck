'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Flame, MapPin, Menu, X, Phone, Truck, Utensils, Compass } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', labelCn: '首页', labelEn: 'Home' },
    { href: '/today', labelCn: '今日地点', labelEn: "Today's" },
    { href: '/menu', labelCn: '美味菜单', labelEn: 'Menu' },
    { href: '/locations', labelCn: '分行档口', labelEn: 'Locations' },
    { href: '/food-truck', labelCn: '烧鸭餐车', labelEn: 'Truck' },
    { href: '/story', labelCn: '小档口故事', labelEn: 'Story' },
    { href: '/videos', labelCn: '现场视频', labelEn: 'Videos' },
    { href: '/catering', labelCn: '团体包餐', labelEn: 'Catering' },
    { href: '/collaboration', labelCn: '合作计划', labelEn: 'Partner' },
    { href: '/contact', labelCn: '联系预订', labelEn: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-charcoal-950/95 backdrop-blur-md border-b border-amber-600/30 text-rice-cream shadow-xl">
      
      {/* Top Banner Notice */}
      <div className="bg-amber-950/80 border-b border-amber-800/40 py-1 px-4 text-center text-[11px] text-amber-300 font-bold flex items-center justify-center space-x-2">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>【今日开炉】今日营业地点：蕉赖太子园123美食中心档口 · 7:00 AM – 1:30 PM (售完即止)</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 rounded-full bg-amber-gradient flex items-center justify-center shadow-lg shadow-amber-600/20 group-hover:scale-105 transition-transform">
              <Flame className="w-6 h-6 text-rice-cream fill-amber-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-wide text-gold-gradient leading-tight">
                8分脆皮烧鸭
              </span>
              <span className="text-[10px] text-amber-200/80 font-medium tracking-wider uppercase">
                8 Fen Crispy Roast Duck
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all flex flex-col items-center ${
                    isActive
                      ? 'bg-amber-600/30 text-amber-300 border border-amber-500/50'
                      : 'text-stone-300 hover:text-amber-400 hover:bg-stone-900'
                  }`}
                >
                  <span>{link.labelCn}</span>
                  <span className="text-[9px] font-normal opacity-70 uppercase tracking-tighter">
                    {link.labelEn}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center space-x-2">
            <Link
              href="/today"
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 text-xs font-black transition-all shadow-md"
            >
              <Compass className="w-4 h-4" />
              <span>今天去哪里吃</span>
            </Link>
            <a
              href="https://wa.me/60168888888?text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E8%AF%A2%E4%B9%B0%E3%80%8C8%E5%88%86%E8%B4%B6%E7%9A%AE%E7%83%A7%E9%B9%AD%E3%80%8D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-red-700 hover:bg-red-800 text-white text-xs font-bold transition-all shadow-md"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp 询问</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center space-x-2">
            <Link
              href="/today"
              className="px-3 py-1.5 rounded-lg bg-amber-600 text-stone-950 text-xs font-black flex items-center space-x-1"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>今天地点</span>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-stone-900 text-stone-200 hover:text-amber-400 border border-stone-800"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="xl:hidden bg-charcoal-900 border-b border-amber-600/30 px-4 pt-2 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`p-2.5 rounded-xl flex flex-col text-left transition-all ${
                    isActive
                      ? 'bg-amber-600/30 text-amber-300 border border-amber-500/50 font-bold'
                      : 'bg-stone-950 text-stone-300 border border-stone-800 hover:bg-stone-800'
                  }`}
                >
                  <span className="text-xs">{link.labelCn}</span>
                  <span className="text-[9px] text-stone-400 uppercase">{link.labelEn}</span>
                </Link>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col space-y-2">
            <Link
              href="/today"
              onClick={() => setIsOpen(false)}
              className="w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-black text-center text-xs flex items-center justify-center space-x-2"
            >
              <Compass className="w-4 h-4" />
              <span>查看今天营业地点 Today's Location</span>
            </Link>
            <a
              href="https://wa.me/60168888888?text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E8%AF%A2%E4%B9%B0%E3%80%8C8%E5%88%86%E8%B4%B6%E7%9A%AE%E7%83%A7%E9%B9%AD%E3%80%8D"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-red-700 hover:bg-red-800 text-white font-bold text-center text-xs flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp 留号预订</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
