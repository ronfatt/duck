import React from 'react';
import Link from 'next/link';
import { Flame, MapPin, MessageCircle, Clock, CheckCircle } from 'lucide-react';

export default function FinalCTASection() {
  return (
    <section className="py-20 bg-amber-gradient text-stone-950 relative overflow-hidden shadow-2xl">
      <div className="absolute -right-12 -bottom-12 w-80 h-80 bg-red-900/30 rounded-full filter blur-2xl" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-stone-950/80 text-amber-300 text-xs font-bold uppercase mb-6 backdrop-blur-md border border-amber-400/40">
          <Clock className="w-4 h-4 text-amber-400 animate-spin" />
          <span>每日数量有限 · 售完即止 Limited Quantity Daily</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-black text-white drop-shadow-lg tracking-tight leading-none mb-4">
          今日只烘两批，先到先得！
        </h2>

        <p className="text-base sm:text-xl text-stone-900 font-bold max-w-2xl mx-auto mb-8 leading-relaxed">
          想吃最香脆的8分脆皮烧鸭？建议午餐12点前到达档口或提早 WhatsApp 留号预订！
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
          <Link
            href="/locations"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-stone-950 hover:bg-stone-900 text-amber-300 font-black text-base flex items-center justify-center space-x-2 shadow-2xl border border-amber-400/50 hover:scale-105 transition-all"
          >
            <MapPin className="w-5 h-5 text-amber-400" />
            <span>找最近分行 Find Outlets</span>
          </Link>

          <a
            href="https://wa.me/60168888888?text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E7%AB%8B%E5%8D%B3%E9%A2%84%E8%AE%A2%E4%BB%8A%E6%97%A5%E7%83%A7%E9%B9%AD%E6%88%96%E7%83%A7%E8%82%89"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-black text-base flex items-center justify-center space-x-2 shadow-2xl hover:scale-105 transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-white text-emerald-700" />
            <span>WhatsApp 留号预订 Order Now</span>
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-stone-900">
          <span className="flex items-center space-x-1">
            <CheckCircle className="w-4 h-4 text-red-900" />
            <span>支持现场包办全鸭</span>
          </span>
          <span className="flex items-center space-x-1">
            <CheckCircle className="w-4 h-4 text-red-900" />
            <span>支持外卖打包Grab/Panda</span>
          </span>
          <span className="flex items-center space-x-1">
            <CheckCircle className="w-4 h-4 text-red-900" />
            <span>支持现金 / Touch &apos;n Go / GrabPay</span>
          </span>
        </div>

      </div>
    </section>
  );
}
