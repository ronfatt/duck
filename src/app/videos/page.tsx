import React from 'react';
import { Metadata } from 'next';
import VideosClient from '@/components/VideosClient';

export const metadata: Metadata = {
  title: '现场斩鸭视频影音 Videos | 8分脆皮烧鸭',
  description: '观看8分脆皮烧鸭大刀斩鸭爆汁实录、出炉热气盛况及美食博主现场听声测试视频。',
  keywords: [
    '砍鸭视频', '脆皮烧鸭视频', '8分脆皮烧鸭博主打卡', '烧鸭声音测试', 'KL roast duck video'
  ],
  openGraph: {
    title: '现场斩鸭视频影音 | 8分脆皮烧鸭 8 Fen Crispy Roast Duck',
    description: '刀起刀落！清脆声音与满屏喷汁，感受真正8分脆皮的魅力。',
    url: 'https://8fenroastduck.com/videos',
    images: ['/assets/roast_duck_hero.jpg'],
  },
  alternates: {
    canonical: '/videos',
  },
};

export default function VideosPage() {
  return <VideosClient />;
}
