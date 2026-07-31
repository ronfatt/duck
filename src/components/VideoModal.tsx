'use client';

import React from 'react';
import { X } from 'lucide-react';
import { VideoItem } from '@/data/videos';

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
}

export default function VideoModal({ video, onClose }: VideoModalProps) {
  if (!video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity">
      <div className="relative w-full max-w-3xl bg-charcoal-900 border border-amber-600/40 rounded-2xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-stone-800 bg-charcoal-950">
          <div>
            <h3 className="text-base font-bold text-amber-400">{video.titleCn}</h3>
            <p className="text-xs text-stone-400">{video.titleEn}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Container */}
        <div className="relative aspect-video bg-black flex items-center justify-center">
          <video
            src={video.videoUrl}
            poster={video.posterUrl}
            controls
            autoPlay
            className="w-full h-full object-contain"
          />
        </div>

        {/* Description */}
        <div className="p-4 bg-charcoal-900 text-stone-300 text-xs sm:text-sm">
          <p>{video.descriptionCn}</p>
        </div>
      </div>
    </div>
  );
}
