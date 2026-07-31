import React from 'react';
import { Compass, Clock, MapPin, Navigation, MessageCircle, ExternalLink, Flame } from 'lucide-react';
import { TODAY_STATUS } from '@/data/today';

export default function StatusCard() {
  return (
    <div className="w-full bg-stone-900/95 border border-amber-500/50 rounded-2xl p-5 shadow-2xl backdrop-blur-md text-stone-100 space-y-4">
      {/* Top Status Header */}
      <div className="flex items-center justify-between border-b border-stone-800 pb-3">
        <div className="flex items-center space-x-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-black text-emerald-400 uppercase tracking-wide">
            {TODAY_STATUS.statusBadgeTextCn}
          </span>
        </div>
        <span className="px-2.5 py-0.5 rounded-full bg-amber-950 text-amber-300 border border-amber-800 text-[10px] font-bold">
          每日现烧 · 限量出炉
        </span>
      </div>

      {/* Main Info */}
      <div className="space-y-2">
        <h3 className="text-lg font-black text-white flex items-center space-x-2">
          <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0" />
          <span>今日营业地点：{TODAY_STATUS.activeLocationNameCn}</span>
        </h3>
        
        <p className="text-xs text-amber-200/90 font-medium pl-7">
          地标/档位：{TODAY_STATUS.foodCourtNameCn}
        </p>

        <div className="flex items-center space-x-2 text-xs text-stone-300 pl-7">
          <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <span>营业时间：{TODAY_STATUS.operatingHours}</span>
        </div>
      </div>

      {/* Roasting Batch Times */}
      <div className="bg-stone-950 p-3 rounded-xl border border-stone-800 space-y-1">
        <p className="text-[11px] font-bold text-amber-400 flex items-center space-x-1">
          <Flame className="w-3.5 h-3.5 fill-amber-400" />
          <span>今日明火出炉时间 Roasting Batches:</span>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] text-stone-300">
          {TODAY_STATUS.roastingBatches.map((batch, idx) => (
            <span key={idx}>✓ {batch}</span>
          ))}
        </div>
      </div>

      <p className="text-[11px] text-amber-300/80 italic">
        {TODAY_STATUS.noticeCn}
      </p>

      {/* 3 Navigation Buttons */}
      <div className="grid grid-cols-3 gap-2 pt-1 text-xs">
        <a
          href={TODAY_STATUS.wazeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 rounded-xl bg-sky-900 hover:bg-sky-800 text-sky-100 font-bold border border-sky-700 flex items-center justify-center space-x-1 shadow"
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>Waze 导航</span>
        </a>

        <a
          href={TODAY_STATUS.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-black flex items-center justify-center space-x-1 shadow"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span>Google 地图</span>
        </a>

        <a
          href={`https://wa.me/${TODAY_STATUS.whatsappNumber}?text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E8%AF%A2%E4%B9%B0%E4%BB%8A%E6%97%A5%E7%83%A7%E9%B9%AD%E6%88%96%E9%A2%84%E8%AE%A2`}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold flex items-center justify-center space-x-1 shadow"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white text-emerald-700" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
