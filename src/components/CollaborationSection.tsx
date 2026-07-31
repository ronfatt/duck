'use client';

import React, { useState } from 'react';
import { Store, Truck, Building, Send, CheckCircle2, Handshake } from 'lucide-react';
import { COLLABORATION_OPTIONS } from '@/data/collaboration';

export default function CollaborationSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    partnershipType: '茶餐室/美食中心档口进驻',
    location: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const waText = encodeURIComponent(
      `【档口与场地合作申请】\n申请人: ${formData.name}\n电话: ${formData.phone}\n合作类型: ${formData.partnershipType}\n场地地点: ${formData.location}\n说明: ${formData.message}`
    );

    setTimeout(() => {
      window.open(`https://wa.me/60168888888?text=${waText}`, '_blank');
    }, 800);
  };

  return (
    <section className="py-16 bg-charcoal-950 text-stone-100 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-600/20 text-amber-400 text-xs font-bold uppercase mb-2 border border-amber-500/30">
            <Handshake className="w-3.5 h-3.5" />
            <span>档口与场地合作计划 Business Partnerships</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            一起把好烧味带进更多社区。
          </h2>
          <p className="text-stone-300 text-sm mt-2">
            我们诚邀雪隆区茶餐室东主、美食中心负责人、市集策划人与企业场地合作开炉！
          </p>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {COLLABORATION_OPTIONS.map((opt) => (
            <div
              key={opt.id}
              className="bg-stone-900 border border-stone-800 hover:border-amber-500/50 p-6 rounded-2xl flex flex-col justify-between shadow-xl"
            >
              <div>
                <span className="px-2.5 py-0.5 rounded bg-amber-950 text-amber-300 text-[10px] font-bold border border-amber-800">
                  {opt.targetAudience}
                </span>
                <h3 className="text-xl font-black text-white mt-3 mb-2">{opt.titleCn}</h3>
                <p className="text-xs text-stone-300 mb-4 leading-relaxed">{opt.descriptionCn}</p>

                <ul className="space-y-1.5 text-xs text-stone-300 border-t border-stone-800 pt-3">
                  {opt.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-start space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 mt-0.5 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Collaboration Application Form */}
        <div className="bg-stone-900 border border-stone-800 p-6 sm:p-8 rounded-3xl max-w-3xl mx-auto shadow-2xl">
          <h3 className="text-xl font-black text-white mb-1">提交合作意向申请表单</h3>
          <p className="text-xs text-stone-400 mb-6">不夸大加盟暴富，我们只做真实、共赢、稳健的街坊餐饮合作。</p>

          {submitted ? (
            <div className="p-6 bg-emerald-950/80 border border-emerald-700 text-center rounded-2xl space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
              <h4 className="text-lg font-bold text-white">合作申请信息已确认！</h4>
              <p className="text-xs text-emerald-200">正在跳转至 WhatsApp 与负责团队直接沟通...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-300 mb-1">联系人姓名 Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="如：李先生 / May Chow"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-700 rounded-xl px-4 py-2 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-amber-500"
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
                    className="w-full bg-stone-950 border border-stone-700 rounded-xl px-4 py-2 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-300 mb-1">合作类型 Partnership</label>
                  <select
                    value={formData.partnershipType}
                    onChange={(e) => setFormData({ ...formData, partnershipType: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-700 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="茶餐室/美食中心档口进驻">茶餐室 / 美食中心档口进驻</option>
                    <option value="餐车社区市集与活动开炉">餐车社区市集与活动开炉</option>
                    <option value="企业团体午餐与长期便当">企业团体午餐与长期便当</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-300 mb-1">场地/店铺地点 Address/Area</label>
                  <input
                    type="text"
                    placeholder="如：Cheras 太子园茶餐室角头间"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-700 rounded-xl px-4 py-2 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-300 mb-1">合作细节说明 Additional Notes</label>
                <textarea
                  rows={2}
                  placeholder="介绍您的场地情况或具体合作意向..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-stone-950 border border-stone-700 rounded-xl px-4 py-2 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-amber-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-amber-gradient text-stone-950 font-black text-xs flex items-center justify-center space-x-2 shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span>提交合作意向申请</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
