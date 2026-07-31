'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/60168888888?text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E8%AF%A2%E4%B9%B0%E3%80%8C8%E5%88%86%E8%B4%B6%E7%9A%AE%E7%83%A7%E9%B9%AD%E3%80%8D%E7%A7%AF%E6%9E%81%E9%A2%84%E8%AE%A2%E6%88%96%E9%97%AE%E8%B7%AF"
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:flex fixed bottom-6 right-6 z-50 items-center space-x-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-xl shadow-emerald-950/40 hover:scale-105 active:scale-95 transition-all border border-emerald-400/40 group"
      aria-label="WhatsApp Us"
    >
      <MessageCircle className="w-6 h-6 fill-white text-emerald-600 group-hover:rotate-12 transition-transform" />
      <span className="text-sm">WhatsApp 快速查询/预订</span>
    </a>
  );
}
