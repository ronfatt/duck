'use client';

import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle2, Clock, Calendar } from 'lucide-react';
import { LOCATIONS } from '@/data/locations';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    inquiryType: 'Whole Duck Order 节日全鸭预订',
    outlet: 'taman-muda-cheras',
    date: '',
    quantity: '1',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Format WhatsApp text for automated redirect
    const waText = encodeURIComponent(
      `【预订/咨询表单】\n姓名: ${formData.name}\n电话: ${formData.phone}\n类型: ${formData.inquiryType}\n选择分行: ${formData.outlet}\n取货日期: ${formData.date}\n数量: ${formData.quantity}只\n备注: ${formData.notes}`
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
            联系预订 & 批发合作
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-3">
            节日全鸭预订 / 联系我们
          </h1>
          <p className="text-stone-400 text-sm sm:text-base mt-2">
            中秋拜祭、家庭聚宴、开张自由餐全鸭预订。可指定分行取货或提供配送服务。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Contact Direct Info Cards */}
          <div className="space-y-6">
            <div className="bg-stone-900 border border-stone-800 p-6 rounded-2xl space-y-4 shadow-xl">
              <h3 className="text-lg font-bold text-amber-400 border-b border-stone-800 pb-2">
                直接联系方式 Hotlines
              </h3>
              
              <div className="space-y-3 text-xs sm:text-sm text-stone-300">
                <a
                  href="tel:+60168888888"
                  className="flex items-center space-x-3 p-3 bg-stone-950 rounded-xl hover:bg-stone-800 border border-stone-800 transition-colors"
                >
                  <Phone className="w-5 h-5 text-amber-400" />
                  <div>
                    <p className="font-bold text-white">电话预订 Hotline</p>
                    <p className="text-stone-400 text-xs">+60 16-888 8888</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/60168888888?text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E8%AF%A2%E4%B9%B0%E6%B4%BB%E5%8A%A8%E6%88%96%E9%A2%84%E8%AE%A2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-200 rounded-xl border border-emerald-800 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                  <div>
                    <p className="font-bold text-white">WhatsApp 快速通道</p>
                    <p className="text-emerald-300 text-xs">+60 16-888 8888</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-stone-900 border border-stone-800 p-6 rounded-2xl space-y-3 shadow-xl">
              <h3 className="text-lg font-bold text-amber-400 border-b border-stone-800 pb-2">
                预订须知 Notice
              </h3>
              <ul className="text-xs text-stone-300 space-y-2">
                <li>• 节日全鸭建议提前 1 至 3 天下单预订。</li>
                <li>• 预订送独家秘制酸梅酱与自家凉茶。</li>
                <li>• 可选斩块装盒（现吃）或整只保温袋装（拜祭/远途）。</li>
              </ul>
            </div>
          </div>

          {/* Form Component */}
          <div className="lg:col-span-2 bg-stone-900 border border-stone-800 p-6 sm:p-8 rounded-3xl shadow-2xl">
            <h2 className="text-2xl font-black text-white mb-2">全鸭 / 自由餐预订表单</h2>
            <p className="text-xs text-stone-400 mb-6">提交表单后将自动打开 WhatsApp 与我们团队核对细节</p>

            {submitted ? (
              <div className="p-8 bg-emerald-950/80 border border-emerald-700 text-center rounded-2xl space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">预订表单已准备完成！</h3>
                <p className="text-xs text-emerald-200">
                  正在跳转至 WhatsApp 与专人客服确认，如未自动跳转请点击下方按钮。
                </p>
                <a
                  href={`https://wa.me/60168888888?text=${encodeURIComponent(
                    `【预订咨询】姓名: ${formData.name}, 电话: ${formData.phone}, 需求: ${formData.inquiryType}, 数量: ${formData.quantity}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs"
                >
                  点击直接发送 WhatsApp 消息
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-300 mb-1">您的姓名 Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="例：陈先生 / May"
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
                      placeholder="例：016-8888888"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-stone-950 border border-stone-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-300 mb-1">咨询类型 Inquiry Type</label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full bg-stone-950 border border-stone-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                    >
                      <option value="Whole Duck Order 节日全鸭预订">节日全鸭预订 Whole Duck</option>
                      <option value="Catering / Party 聚餐自由餐包办">聚餐自由餐包办 Catering</option>
                      <option value="Franchise / Wholesale 加盟与批发合作">加盟与批发合作 Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-300 mb-1">提货分行 Pick Up Outlet</label>
                    <select
                      value={formData.outlet}
                      onChange={(e) => setFormData({ ...formData, outlet: e.target.value })}
                      className="w-full bg-stone-950 border border-stone-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                    >
                      {LOCATIONS.map((loc) => (
                        <option key={loc.id} value={loc.nameCn}>
                          {loc.nameCn}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-300 mb-1">取货/用餐日期 Date</label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-stone-950 border border-stone-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-300 mb-1">全鸭数量 Whole Duck Qty</label>
                    <input
                      type="number"
                      min="1"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full bg-stone-950 border border-stone-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-300 mb-1">备注/特殊要求 Special Notes</label>
                  <textarea
                    rows={3}
                    placeholder="如：要求切块/整只不切，或加购额外烧肉/卤脚..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-amber-gradient hover:opacity-95 text-stone-950 font-black text-sm flex items-center justify-center space-x-2 shadow-xl"
                >
                  <Send className="w-4 h-4" />
                  <span>提交并通过 WhatsApp 发送确认</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
