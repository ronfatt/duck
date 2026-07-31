'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, Video, Film, Sparkles } from 'lucide-react';
import { VIDEOS, VideoItem } from '@/data/videos';
import VideoModal from '@/components/VideoModal';

export default function VideosPage() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredVideos = VIDEOS.filter((v) => {
    if (activeFilter === 'all') return true;
    return v.category === activeFilter;
  });

  return (
    <div className="min-h-screen bg-charcoal-950 text-stone-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800">
            现场视频 · 声音测试
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-3">
            砍鸭现场与博主打卡 Videos
          </h1>
          <p className="text-stone-400 text-sm sm:text-base mt-2">
            刀声咔嚓响，热气腾腾出炉！亲自感受8分脆皮烧鸭的真实魅力。
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center items-center space-x-2 mb-10">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeFilter === 'all'
                ? 'bg-amber-600 text-stone-950 shadow-md'
                : 'bg-stone-900 text-stone-300 hover:bg-stone-800'
            }`}
          >
            全部视频 All Videos
          </button>
          <button
            onClick={() => setActiveFilter('kitchen')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeFilter === 'kitchen'
                ? 'bg-amber-600 text-stone-950 shadow-md'
                : 'bg-stone-900 text-stone-300 hover:bg-stone-800'
            }`}
          >
            现场砍鸭 Chopping
          </button>
          <button
            onClick={() => setActiveFilter('craftsmanship')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeFilter === 'craftsmanship'
                ? 'bg-amber-600 text-stone-950 shadow-md'
                : 'bg-stone-900 text-stone-300 hover:bg-stone-800'
            }`}
          >
            出炉过程 Roasting
          </button>
          <button
            onClick={() => setActiveFilter('blogger')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeFilter === 'blogger'
                ? 'bg-amber-600 text-stone-950 shadow-md'
                : 'bg-stone-900 text-stone-300 hover:bg-stone-800'
            }`}
          >
            博主探店 Foodie Reviews
          </button>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((vid) => (
            <div
              key={vid.id}
              onClick={() => setSelectedVideo(vid)}
              className="group bg-stone-900 border border-stone-800 hover:border-amber-500/50 rounded-2xl overflow-hidden cursor-pointer shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="relative aspect-video w-full bg-stone-950">
                <Image
                  src={vid.posterUrl}
                  alt={vid.titleCn}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-amber-600 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-white ml-1" />
                  </div>
                </div>

                <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 text-amber-300 text-xs font-mono">
                  {vid.duration}
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-white group-hover:text-amber-400 transition-colors text-base line-clamp-1">
                  {vid.titleCn}
                </h3>
                <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                  {vid.descriptionCn}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </div>
  );
}
