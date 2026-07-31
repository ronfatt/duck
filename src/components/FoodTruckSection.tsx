import React from 'react';
import Link from 'next/link';
import { Truck, Calendar, MapPin, ArrowRight, Building, Users } from 'lucide-react';
import { FOOD_TRUCK_SCHEDULE } from '@/data/foodtruck';

export default function FoodTruckSection() {
  return (
    <section className="py-16 bg-charcoal-950 text-stone-100 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-600/20 text-amber-400 text-xs font-bold uppercase mb-2 border border-amber-500/30">
              <Truck className="w-3.5 h-3.5" />
              <span>流动烟火 · 社区巡回 Food Truck Concept</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              八分烧鸭车，开进你的社区。
            </h2>
            <p className="text-stone-300 text-sm mt-1">
              “今天在这里，明天香到你那里。”
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
            <Link
              href="/food-truck"
              className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs flex items-center space-x-1"
            >
              <span>查看餐车路线 Weekly Route</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Schedule Grid Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {FOOD_TRUCK_SCHEDULE.slice(0, 3).map((item, idx) => (
            <div
              key={idx}
              className="bg-stone-900 border border-stone-800 p-5 rounded-2xl space-y-3 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-400">{item.dayCn}</span>
                <span className="px-2 py-0.5 rounded bg-stone-800 text-[10px] text-stone-300">
                  {item.timeSlot}
                </span>
              </div>
              <h3 className="text-base font-bold text-white">{item.areaCn}</h3>
              <p className="text-xs text-stone-400 line-clamp-2">{item.locationDetailsCn}</p>
            </div>
          ))}
        </div>

        {/* Invitation Callout Card */}
        <div className="bg-stone-900 border border-amber-500/30 p-6 sm:p-8 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-6 items-center shadow-2xl">
          <div>
            <h3 className="text-2xl font-black text-white mb-2">
              想要烧鸭餐车开到你的社区或公司？
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              支持企业午餐派送、社区市集开炉与户外活动合作！只需提交简单表单，我们将安排餐车巡回线路。
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/food-truck#invite-form"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-amber-gradient text-stone-950 font-black text-xs text-center flex items-center justify-center space-x-2 shadow-lg"
            >
              <Users className="w-4 h-4" />
              <span>邀请餐车过来 Invite Truck</span>
            </Link>

            <Link
              href="/catering"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold text-xs text-center flex items-center justify-center space-x-2 border border-stone-700"
            >
              <Building className="w-4 h-4 text-amber-400" />
              <span>企业活动合作 Corporate</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
