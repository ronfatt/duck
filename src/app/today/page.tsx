import React from 'react';
import StatusCard from '@/components/StatusCard';
import RoastDuckRadar from '@/components/RoastDuckRadar';
import TodayRoastSection from '@/components/TodayRoastSection';
import { Compass, Flame, Clock } from 'lucide-react';
import { TODAY_STATUS } from '@/data/today';

export const metadata = {
  title: "今日去哪里吃 | 8分脆皮烧鸭 Today's Operating Location",
  description: '查询8分脆皮烧鸭今天在哪个档口与茶餐室开炉。查看实时营业状态、出炉时间与一键 Waze / Google Maps 导航。',
};

export default function TodayPage() {
  return (
    <div className="min-h-screen bg-charcoal-950 text-stone-100 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800">
            实时开炉信息 Live Status
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-3">
            今天去哪里吃？
          </h1>
          <p className="text-stone-300 text-sm sm:text-base mt-2">
            “今天在哪里开炉，就到哪里吃！” 一键定位离您最近的8分脆皮烧鸭档口。
          </p>
        </div>

        {/* Live Status Card */}
        <div className="mb-12">
          <StatusCard />
        </div>

        {/* Today Roast List */}
        <div className="mb-12">
          <TodayRoastSection />
        </div>

        {/* Radar Feature */}
        <div>
          <RoastDuckRadar />
        </div>

      </div>
    </div>
  );
}
