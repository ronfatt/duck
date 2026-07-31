'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Navigation, Phone, Clock, ExternalLink, MessageCircle } from 'lucide-react';
import { LOCATIONS, Location } from '@/data/locations';

export default function StoreLocatorSection() {
  const [selectedRegion, setSelectedRegion] = useState<'All' | 'Kuala Lumpur' | 'Selangor'>('All');

  const filteredLocations = LOCATIONS.filter((loc) => {
    if (selectedRegion === 'All') return true;
    return loc.region === selectedRegion;
  });

  return (
    <section className="py-16 bg-charcoal-900 text-stone-100 border-t border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-600/20 text-amber-400 text-xs font-bold uppercase mb-2 border border-amber-500/30">
              <MapPin className="w-3.5 h-3.5" />
              <span>寻找附近档口 Find Nearest Outlet</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              分行网点 · 现烧现卖
            </h2>
          </div>

          {/* Region Tabs */}
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            {(['All', 'Selangor', 'Kuala Lumpur'] as const).map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedRegion === region
                    ? 'bg-amber-600 text-stone-950 shadow-md'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                {region === 'All' ? '全部区域 All' : region === 'Selangor' ? '雪兰莪 Selangor' : '吉隆坡 KL'}
              </button>
            ))}
          </div>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredLocations.map((loc) => (
            <div
              key={loc.id}
              className="bg-stone-950 border border-stone-800 hover:border-amber-500/50 rounded-2xl p-6 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Top Badge & Name */}
                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-amber-950 text-amber-400 border border-amber-800/60 text-[10px] font-bold uppercase mb-2">
                      {loc.areaName}
                    </span>
                    <h3 className="text-xl font-black text-white hover:text-amber-400 transition-colors">
                      <Link href={`/locations/${loc.slug}`}>{loc.nameCn}</Link>
                    </h3>
                    <p className="text-xs text-stone-400 font-medium">{loc.nameEn}</p>
                  </div>
                  
                  {loc.isPopular && (
                    <span className="px-2.5 py-1 rounded-full bg-red-700 text-white text-[10px] font-bold shadow">
                      旗舰总店
                    </span>
                  )}
                </div>

                {/* Address & Hours */}
                <div className="mt-4 space-y-2 text-xs text-stone-300">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>{loc.address}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>{loc.openingHours}</span>
                  </div>
                </div>

                <p className="mt-3 text-xs text-amber-200/80 bg-stone-900 p-2.5 rounded-lg border border-stone-800">
                  💡 地标/停车提示: {loc.landmark}
                </p>
              </div>

              {/* Action Nav Buttons */}
              <div className="mt-6 pt-4 border-t border-stone-800 grid grid-cols-3 gap-2 text-center text-xs">
                <a
                  href={loc.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 rounded-xl bg-sky-900/60 hover:bg-sky-800 text-sky-200 font-bold border border-sky-700/50 flex items-center justify-center space-x-1"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Waze 导航</span>
                </a>

                <a
                  href={loc.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-amber-300 font-bold border border-stone-700 flex items-center justify-center space-x-1"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Google 地图</span>
                </a>

                <a
                  href={`https://wa.me/${loc.whatsapp}?text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E8%AF%A2%E4%B9%B0${encodeURIComponent(loc.nameCn)}%E5%BA%97%E9%9D%A2%E7%83%A7%E9%B9%AD%E6%88%96%E9%A2%84%E8%AE%A2`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold flex items-center justify-center space-x-1 shadow"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white text-emerald-700" />
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
