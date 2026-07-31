'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Compass, MapPin, Navigation, Clock, ExternalLink, MessageCircle, Flame } from 'lucide-react';
import { LOCATIONS } from '@/data/locations';
import { TODAY_STATUS } from '@/data/today';

export default function RoastDuckRadar() {
  const [selectedArea, setSelectedArea] = useState<string>('Cheras');

  return (
    <section className="py-16 bg-charcoal-900 text-stone-100 border-t border-amber-900/40 relative overflow-hidden">
      
      {/* Background Pulse Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-600/20 text-amber-400 text-xs font-bold uppercase mb-2 border border-amber-500/30">
            <Compass className="w-4 h-4 text-amber-400 animate-spin" />
            <span>实时位置定位 Real-Time Location Radar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            烧鸭雷达
          </h2>
          <p className="text-stone-300 text-sm mt-2">
            “闻到香了吗？看看八分今天离你有多近。”
          </p>
        </div>

        {/* Radar Main Card */}
        <div className="bg-stone-950 border border-amber-500/40 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-6 max-w-4xl mx-auto">
          
          {/* Nearest Active Stall Box */}
          <div className="bg-stone-900 border border-stone-800 p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="px-2.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 text-[10px] font-bold">
                今日最热门距离定位 ACTIVE STALL
              </span>
              <h3 className="text-xl font-black text-white">{TODAY_STATUS.activeLocationNameCn}</h3>
              <p className="text-xs text-stone-400">{TODAY_STATUS.foodCourtNameCn}</p>
              <p className="text-xs text-amber-400 flex items-center space-x-1 pt-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{TODAY_STATUS.operatingHours}</span>
              </p>
            </div>

            <div className="flex flex-row sm:flex-col gap-2 w-full sm:w-auto">
              <a
                href={TODAY_STATUS.wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-sky-900 hover:bg-sky-800 text-sky-100 text-xs font-bold flex items-center justify-center space-x-1 shadow"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Waze 一键导航</span>
              </a>
              <a
                href={TODAY_STATUS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 text-xs font-black flex items-center justify-center space-x-1 shadow"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Google 地图打开</span>
              </a>
            </div>
          </div>

          {/* Quick Area Switcher */}
          <div className="pt-2">
            <p className="text-xs font-bold text-stone-400 mb-3">选择您所在的区域探索分行与路线：</p>
            <div className="flex flex-wrap gap-2">
              {['Cheras', 'Kepong', 'Seri Kembangan', 'Ampang', 'Subang'].map((area) => (
                <button
                  key={area}
                  onClick={() => setSelectedArea(area)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedArea === area
                      ? 'bg-amber-600 text-stone-950 shadow-md'
                      : 'bg-stone-900 text-stone-300 hover:bg-stone-800 border border-stone-800'
                  }`}
                >
                  📍 {area} 区域
                </button>
              ))}
            </div>
          </div>

          {/* Outlets Radar Preview List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {LOCATIONS.map((loc) => (
              <div
                key={loc.id}
                className="p-4 rounded-xl bg-stone-900/80 border border-stone-800 flex items-center justify-between text-xs"
              >
                <div>
                  <h4 className="font-bold text-white">{loc.nameCn}</h4>
                  <p className="text-[11px] text-stone-400 truncate max-w-[200px]">{loc.address}</p>
                </div>
                <Link
                  href={`/locations/${loc.slug}`}
                  className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-amber-400 font-bold whitespace-nowrap"
                >
                  导航指南
                </Link>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
