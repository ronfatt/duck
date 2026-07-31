import React from 'react';
import { Metadata } from 'next';
import LocationsClient from '@/components/LocationsClient';

export const metadata: Metadata = {
  title: '分行与档口地址 Outlet Locations | 8分脆皮烧鸭',
  description: '查询8分脆皮烧鸭在雪隆区各大茶餐室与美食中心的档口地址。包含蕉赖太子园123美食中心、甲洞大都会、沙登新村、安邦大街档口，支持 Waze 与 Google Maps 一键导航。',
  keywords: [
    '8分脆皮烧鸭分行', '蕉赖太子园烧鸭', '甲洞烧鸭档口', '沙登烧鸭地址', '安邦烧鸭',
    '8 Fen Roast Duck Outlets', 'Roast duck near me Waze', 'KL roast duck map'
  ],
  openGraph: {
    title: '分行与档口地址 | 8分脆皮烧鸭 8 Fen Crispy Roast Duck',
    description: '蕉赖、甲洞、沙登、安邦热门美食中心明火开炉！点击开启 Waze / Google Maps 导航。',
    url: 'https://8fenroastduck.com/locations',
    images: ['/assets/stall_front.png'],
  },
  alternates: {
    canonical: '/locations',
  },
};

export default function LocationsPage() {
  return <LocationsClient />;
}
