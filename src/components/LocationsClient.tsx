'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Navigation, Clock, ExternalLink, MessageCircle, Info } from 'lucide-react';
import { LOCATIONS } from '@/data/locations';

export default function LocationsClient() {
  const [selectedRegion, setSelectedRegion] = useState<'All' | 'Kuala Lumpur' | 'Selangor'>('All');

  const filteredLocations = LOCATIONS.filter((loc) => {
    if (selectedRegion === 'All') return true;
    return loc.region === selectedRegion;
  });

  return (
    <div className="min-h-screen bg-charcoal-950 text-stone-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800">
            8分脆皮烧鸭 · 分行指引
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-3">
            分行与档口地址 Locations
          </h1>
          <p className="text-stone-400 text-sm sm:text-base mt-2">
            蕉赖太子园、甲洞、沙登、安邦各大美食中心都有我们的明火档口！
          </p>
        </div>

        {/* Region Filter */}
        <div className="flex justify-center items-center space-x-2 mb-10">
          {(['All', 'Selangor', 'Kuala Lumpur'] as const).map((reg) => (
            <button
              key={reg}
              onClick={() => setSelectedRegion(reg)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedRegion === reg
                  ? 'bg-amber-600 text-stone-950 shadow-lg'
                  : 'bg-stone-900 text-stone-300 hover:bg-stone-800 border border-stone-800'
              }`}
            >
              {reg === 'All' ? '全部分行 All Outlets' : reg === 'Selangor' ? '雪兰莪 Selangor' : '吉隆坡 KL'}
            </button>
          ))}
        </div>

        {/* Locations List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredLocations.map((loc) => (
            <div
              key={loc.id}
              className="bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between"
            >
              <div className="relative h-60 w-full bg-stone-950">
                <Image
                  src={loc.stallPhoto}
                  alt={loc.nameCn}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-red-700 text-amber-200 text-xs font-bold shadow-md">
                    {loc.areaName}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-black text-white hover:text-amber-400 transition-colors">
                    <Link href={`/locations/${loc.slug}`}>{loc.nameCn}</Link>
                  </h2>
                  <p className="text-xs text-stone-400 font-medium mb-4">{loc.nameEn}</p>

                  <div className="space-y-2.5 text-xs text-stone-300">
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>{loc.address}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>营业时间: {loc.openingHours}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-stone-400">
                      <Info className="w-4 h-4 text-red-400 flex-shrink-0" />
                      <span>休息日: {loc.closingDays}</span>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-stone-950 rounded-xl border border-stone-800 text-xs text-amber-200">
                    <p className="font-semibold text-amber-400 mb-1">📍 地标与停车指引：</p>
                    <p>{loc.landmark}</p>
                    <p className="text-stone-400 mt-1">{loc.parkingTip}</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-800 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold border border-stone-700"
                  >
                    查看详情 Detail
                  </Link>

                  <a
                    href={loc.wazeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 rounded-xl bg-sky-900 hover:bg-sky-800 text-sky-200 font-bold border border-sky-700 flex items-center justify-center space-x-1"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Waze 导航</span>
                  </a>

                  <a
                    href={loc.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold flex items-center justify-center space-x-1"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Google 地图</span>
                  </a>

                  <a
                    href={`https://wa.me/${loc.whatsapp}?text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E8%AF%A2%E4%B9%B0${encodeURIComponent(loc.nameCn)}%E7%83%A7%E9%B9%AD`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold flex items-center justify-center space-x-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white text-emerald-700" />
                    <span>WhatsApp</span>
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
