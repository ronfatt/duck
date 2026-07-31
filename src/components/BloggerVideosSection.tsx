'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, Video, Star } from 'lucide-react';
import { VIDEOS, VideoItem } from '@/data/videos';
import VideoModal from '@/components/VideoModal';

export default function BloggerVideosSection() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  return (
    <section className="py-16 bg-charcoal-950 text-stone-100 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-900/40 border border-red-700/50 text-red-300 text-xs font-bold uppercase mb-3">
              <Video className="w-3.5 h-3.5" />
              <span>食客与博主探店 Foodie Highlights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              短视频狂热打卡 · 现场听声测试
            </h2>
          </div>
          <p className="text-stone-400 text-xs sm:text-sm max-w-md mt-2 md:mt-0">
            刀声咔嚓响，油脂横飞！全网食客实测8分脆皮声响。
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VIDEOS.map((vid) => (
            <div
              key={vid.id}
              onClick={() => setSelectedVideo(vid)}
              className="group relative bg-stone-900 rounded-2xl overflow-hidden border border-stone-800 hover:border-amber-500/50 cursor-pointer shadow-xl transition-all hover:-translate-y-1"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video w-full bg-stone-950">
                <Image
                  src={vid.posterUrl}
                  alt={vid.titleCn}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-amber-600/90 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-white ml-1" />
                  </div>
                </div>

                <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 text-amber-300 text-xs font-mono">
                  {vid.duration}
                </span>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-bold text-white group-hover:text-amber-400 transition-colors text-sm line-clamp-1">
                  {vid.titleCn}
                </h3>
                <p className="text-xs text-stone-400 mt-1 line-clamp-2">
                  {vid.descriptionCn}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>

      <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </section>
  );
}
