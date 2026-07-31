'use client';

import React, { useState } from 'react';
import { Truck, Calendar, MapPin, Navigation, ExternalLink, Send, CheckCircle2, Users, Building } from 'lucide-react';
import { FOOD_TRUCK_SCHEDULE } from '@/data/foodtruck';

export default function FoodTruckPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    area: '',
    eventType: '社区集市 / 住宅区巡回',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const waText = encodeURIComponent(
      `【餐车社区邀请表单】\n姓名: ${formData.name}\n电话: ${formData.phone}\n邀请地点: ${formData.area}\n活动类型: ${formData.eventType}\n备注: ${formData.notes}`
    );
    setTimeout(() => {
      window.open(`https://wa.me/60168888888?text=${waText}`, '_blank');
    }, 800);
  };

  return (
    <div className="min-h-screen bg-charcoal-950 text-stone-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800">
            八分烧鸭餐车巡回 Food Truck Route
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-3">
            “今天在这里，明天香到你那里。”
          </h1>
          <p className="text-stone-300 text-sm sm:text-base mt-2">
            不用找大餐厅，好烧鸭会来找你。流动明火开炉，把刚出炉的脆皮烧鸭带到你的社区。
          </p>
        </div>

        {/* Weekly Route Schedule */}
        <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-8 mb-16 shadow-2xl">
          <h2 className="text-2xl font-black text-white mb-6 flex items-center space-x-2">
            <Calendar className="w-6 h-6 text-amber-400" />
            <span>本周餐车巡回路线 Weekly Route Schedule</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FOOD_TRUCK_SCHEDULE.map((item, idx) => (
              <div
                key={idx}
                className="bg-stone-950 border border-stone-800 p-5 rounded-2xl space-y-3 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-400">{item.dayCn}</span>
                    <span className="px-2 py-0.5 rounded bg-stone-900 text-[10px] text-amber-200 border border-stone-800">
                      {item.timeSlot}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-white mt-2">{item.areaCn}</h3>
                  <p className="text-xs text-stone-300 mt-1">{item.locationDetailsCn}</p>
                </div>

                <div className="pt-3 border-t border-stone-800 flex items-center justify-between text-xs">
                  {item.wazeUrl ? (
                    <a
                      href={item.wazeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-sky-900 text-sky-200 font-bold flex items-center space-x-1"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Waze 导航</span>
                    </a>
                  ) : (
                    <span className="text-[11px] text-stone-500">根据预订安排</span>
                  )}
                  <span className="text-[10px] text-emerald-400 font-bold">● {item.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Invitation Form Section */}
        <div id="invite-form" className="bg-stone-900 border border-amber-500/40 p-6 sm:p-8 rounded-3xl max-w-3xl mx-auto shadow-2xl">
          <h2 className="text-2xl font-black text-white mb-2">邀请烧鸭餐车开到你的社区</h2>
          <p className="text-xs text-stone-400 mb-6">达到预订数量门槛后，我们将优先规划驶入您的所在区域！</p>

          {submitted ? (
            <div className="p-6 bg-emerald-950/80 border border-emerald-700 text-center rounded-2xl space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
              <h4 className="text-lg font-bold text-white">邀请申请已成功提交！</h4>
              <p className="text-xs text-emerald-200">正在为您打开 WhatsApp 与运营主管直接交流...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-300 mb-1">您的姓名 Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="如：陈先生 / Alex"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-300 mb-1">联系电话 Phone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="如：016-8888888"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-300 mb-1">建议停留地点 Location *</label>
                  <input
                    type="text"
                    required
                    placeholder="如：Puchong Bandar Puteri 商业区"
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-300 mb-1">活动/场地类型 Event Type</label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="社区集市 / 住宅区巡回">社区集市 / 住宅区巡回</option>
                    <option value="办公园区午餐专场">办公园区午餐专场</option>
                    <option value="大型户外嘉年华活动">大型户外嘉年华活动</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-300 mb-1">备注/预估份量 Notes</label>
                <textarea
                  rows={2}
                  placeholder="可注明预计用餐人数或合适停车时间段..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-stone-950 border border-stone-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-amber-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-amber-gradient text-stone-950 font-black text-xs flex items-center justify-center space-x-2 shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span>提交邀请表格并跳转 WhatsApp</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
