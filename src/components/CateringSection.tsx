'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Building, Users, Send, CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import { CATERING_PACKAGES } from '@/data/catering';

export default function CateringSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    eventDate: '',
    guestCount: '20',
    serviceType: 'Corporate Lunch 便当盒预订',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const waText = encodeURIComponent(
      `【团体餐/活动咨询】\n姓名: ${formData.name}\n公司/机构: ${formData.company}\n电话: ${formData.phone}\n日期: ${formData.eventDate}\n预计人数: ${formData.guestCount}人\n服务需求: ${formData.serviceType}\n备注: ${formData.message}`
    );

    setTimeout(() => {
      window.open(`https://wa.me/60168888888?text=${waText}`, '_blank');
    }, 800);
  };

  return (
    <section className="py-16 bg-charcoal-900 text-stone-100 border-t border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800">
            团体餐与活动包办 Catering & Events
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">
            不只一份饭，也能照顾一班人。
          </h2>
          <p className="text-stone-300 text-sm mt-2">
            公司午餐会、社区集会、开张派对全鸭宴与便当盒快捷预订！
          </p>
        </div>

        {/* Catering Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {CATERING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-stone-950 border border-stone-800 hover:border-amber-500/50 p-6 rounded-2xl flex flex-col justify-between shadow-xl"
            >
              <div>
                <span className="px-2.5 py-0.5 rounded bg-amber-950 text-amber-300 text-[10px] font-bold border border-amber-800">
                  {pkg.guestCount}
                </span>
                <h3 className="text-xl font-black text-white mt-2 mb-1">{pkg.nameCn}</h3>
                <p className="text-xs text-stone-400 font-mono mb-4">{pkg.priceEstimate}</p>
                <p className="text-xs text-stone-300 mb-4">{pkg.descriptionCn}</p>

                <ul className="space-y-1.5 text-xs text-stone-300 border-t border-stone-800 pt-3">
                  {pkg.itemsIncluded.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800">
                <a
                  href="https://wa.me/60168888888?text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E8%AF%A2%E4%B9%B0%E5%9B%A2%E4%BD%93%E4%BC%9A%E8%AE%AE%E4%BF%BF%E5%BD%93%E6%88%96%E5%85%A8%E9%B9%AD%E5%AE%B4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs flex items-center justify-center space-x-1 shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>查询团体餐 WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Enquiry Form Card */}
        <div className="bg-stone-950 border border-stone-800 p-6 sm:p-8 rounded-3xl max-w-3xl mx-auto shadow-2xl">
          <h3 className="text-xl font-black text-white mb-1">活动与便当预订表单</h3>
          <p className="text-xs text-stone-400 mb-6">填表后将自动跳转 WhatsApp 与团队客服进行核对</p>

          {submitted ? (
            <div className="p-6 bg-emerald-950/80 border border-emerald-700 text-center rounded-2xl space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
              <h4 className="text-lg font-bold text-white">预订咨询信息已生成！</h4>
              <p className="text-xs text-emerald-200">正在跳转至 WhatsApp... 如未自动跳转请点击上方联系按钮。</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-300 mb-1">姓名 Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="如：黄经理 / May"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-2 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-300 mb-1">公司/机构 Company</label>
                  <input
                    type="text"
                    placeholder="如：Tech Corp / 社区委员会"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-2 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-300 mb-1">联系电话 Phone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="如：016-8888888"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-2 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-300 mb-1">预定日期 Date</label>
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-300 mb-1">需求描述 Requirements</label>
                <textarea
                  rows={2}
                  placeholder="请输入大概人数、配送地址或特殊需求..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-2 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-amber-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-amber-gradient text-stone-950 font-black text-xs flex items-center justify-center space-x-2 shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span>提交并通过 WhatsApp 确认表单</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
