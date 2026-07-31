import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { MapPin, Phone, Clock, Navigation, ExternalLink, MessageCircle, ArrowLeft, ShieldCheck, Car } from 'lucide-react';
import { LOCATIONS } from '@/data/locations';

export function generateStaticParams() {
  return LOCATIONS.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const location = LOCATIONS.find((loc) => loc.slug === slug);

  if (!location) {
    return {
      title: '分行未找到 | 8分脆皮烧鸭',
    };
  }

  return {
    title: `${location.nameCn} (${location.areaName}) | 8分脆皮烧鸭`,
    description: `位于${location.address}的“8分脆皮烧鸭 ${location.nameCn}”。营业时间：${location.openingHours}。点击查看 Waze 导航、Google 地图、周边地标与停车指南。`,
    keywords: [
      location.nameCn,
      location.areaName,
      `${location.areaName}烧鸭`,
      `${location.areaName}烧肉`,
      `${location.areaName}鸡饭`,
      '8分脆皮烧鸭',
      '烧鸭档口'
    ],
    openGraph: {
      title: `${location.nameCn} | 8分脆皮烧鸭 8 Fen Crispy Roast Duck`,
      description: `${location.address} · 营业时间：${location.openingHours}`,
      url: `https://8fenroastduck.com/locations/${location.slug}`,
      images: [
        {
          url: location.stallPhoto,
          alt: location.nameCn,
        },
      ],
    },
    alternates: {
      canonical: `/locations/${location.slug}`,
    },
  };
}

export default async function LocationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = LOCATIONS.find((loc) => loc.slug === slug);

  if (!location) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-charcoal-950 text-stone-100 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          href="/locations"
          className="inline-flex items-center space-x-1.5 text-xs text-amber-400 hover:text-amber-300 font-bold mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>返回所有分行 Back to All Outlets</span>
        </Link>

        {/* Branch Title */}
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-950 text-amber-300 text-xs font-bold border border-red-800 mb-2">
            <span>{location.areaName}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white">{location.nameCn}</h1>
          <p className="text-stone-400 text-sm mt-1">{location.nameEn}</p>
        </div>

        {/* Photo & Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          
          <div className="md:col-span-2 relative h-72 md:h-96 rounded-2xl overflow-hidden border border-stone-800 shadow-2xl">
            <Image
              src={location.stallPhoto}
              alt={location.nameCn}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 bg-stone-900/90 backdrop-blur-md p-4 rounded-xl border border-stone-800 text-xs text-stone-200">
              <p className="font-bold text-amber-400">📍 详细地址 Address:</p>
              <p className="mt-1">{location.address}</p>
            </div>
          </div>

          {/* Quick Actions Panel */}
          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-2xl">
            <div>
              <h3 className="text-lg font-bold text-amber-400 mb-4 border-b border-stone-800 pb-2">
                一键导航与预订 Navigation
              </h3>

              <div className="space-y-3">
                <a
                  href={location.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-sky-900 hover:bg-sky-800 text-sky-100 font-bold text-sm flex items-center justify-center space-x-2 border border-sky-700 shadow"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Waze 导航直接前往</span>
                </a>

                <a
                  href={location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-sm flex items-center justify-center space-x-2 shadow"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Google Maps 地图开启</span>
                </a>

                <a
                  href={`https://wa.me/${location.whatsapp}?text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E8%AF%A2%E4%B9%B0${encodeURIComponent(location.nameCn)}%E7%83%A7%E9%B9%AD`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-sm flex items-center justify-center space-x-2 shadow"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-emerald-700" />
                  <span>WhatsApp 留号预订</span>
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-800 text-xs text-stone-400 space-y-1">
              <p className="flex items-center space-x-1">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>电话: {location.phone}</span>
              </p>
              <p className="flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>营业: {location.openingHours}</span>
              </p>
            </div>

          </div>

        </div>

        {/* Detailed Information Box */}
        <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
          
          <div>
            <h2 className="text-xl font-bold text-white mb-2 flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-amber-400" />
              <span>档口位置与周边地标 Landmark</span>
            </h2>
            <p className="text-sm text-stone-300 leading-relaxed bg-stone-950 p-4 rounded-xl border border-stone-800">
              {location.landmark}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2 flex items-center space-x-2">
              <Car className="w-5 h-5 text-amber-400" />
              <span>停车指南 Parking Tips</span>
            </h2>
            <p className="text-sm text-stone-300 leading-relaxed bg-stone-950 p-4 rounded-xl border border-stone-800">
              {location.parkingTip}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2 flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              <span>品质保证 Food Quality</span>
            </h2>
            <ul className="text-xs sm:text-sm text-stone-300 space-y-2 bg-stone-950 p-4 rounded-xl border border-stone-800">
              <li>✓ 本店所有烧鸭与烧肉均为当天明火炉内精烤，绝不上夜盘。</li>
              <li>✓ 随盘附赠阿和师傅秘密中药提炼淋汁与酸梅酱。</li>
              <li>✓ 每天午餐12点为高峰期，建议提早15分钟到场避免缺货。</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
