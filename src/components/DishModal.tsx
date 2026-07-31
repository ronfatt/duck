'use client';

import React from 'react';
import Image from 'next/image';
import { X, MessageCircle, Flame, Tag } from 'lucide-react';
import { MenuItem } from '@/data/menu';

interface DishModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export default function DishModal({ item, onClose }: DishModalProps) {
  if (!item) return null;

  const waText = encodeURIComponent(
    `你好，我想预订/购买: 【${item.nameCn}】 (${item.portion}) - RM${item.price.toFixed(2)}`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-charcoal-900 border border-amber-600/40 rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image */}
        <div className="relative w-full h-64 bg-stone-950">
          <Image
            src={item.image}
            alt={item.nameCn}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-4 flex flex-wrap gap-1.5">
            {item.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 rounded-full bg-red-700/90 text-amber-200 text-[11px] font-bold shadow-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-black text-amber-400">{item.nameCn}</h3>
              <p className="text-xs text-stone-400 font-medium">{item.nameEn}</p>
              <span className="inline-block mt-1 text-xs text-amber-500 font-medium">
                {item.portion}
              </span>
            </div>
            <div className="text-right">
              <span className="text-2xl font-black text-amber-400">
                RM {item.price.toFixed(2)}
              </span>
            </div>
          </div>

          <p className="text-sm text-stone-300 leading-relaxed border-t border-stone-800 pt-3">
            {item.descriptionCn}
          </p>

          <p className="text-xs text-stone-400 italic">
            {item.descriptionEn}
          </p>

          <div className="pt-3 border-t border-stone-800 flex space-x-3">
            <a
              href={`https://wa.me/60168888888?text=${waText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm text-center flex items-center justify-center space-x-2 shadow-lg shadow-emerald-950/40"
            >
              <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
              <span>WhatsApp 立即预订 / Takeaway</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
