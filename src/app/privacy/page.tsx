import React from 'react';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

export const metadata = {
  title: '隐私政策 Privacy Policy | 8分脆皮烧鸭',
  description: '8分脆皮烧鸭官方网站隐私政策。',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-charcoal-950 text-stone-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="border-b border-stone-800 pb-6">
          <h1 className="text-3xl font-black text-white flex items-center space-x-2">
            <ShieldCheck className="w-8 h-8 text-amber-400" />
            <span>隐私政策 Privacy Policy</span>
          </h1>
          <p className="text-xs text-stone-400 mt-1">最后更新日期：2026年7月31日</p>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-stone-300 leading-relaxed bg-stone-900 border border-stone-800 p-6 sm:p-8 rounded-2xl">
          <h2 className="text-base font-bold text-white">1. 信息的收集与使用</h2>
          <p>“8分脆皮烧鸭”（8 Fen Crispy Roast Duck）非常重视顾客与网站访客的隐私。当您在网站提交预订或咨询表单时，我们仅收集您主动提供的姓名、联系电话、用餐日期及需求内容，以便与您通过 WhatsApp 或电话进行订单确认。</p>

          <h2 className="text-base font-bold text-white pt-2">2. 数据保密与第三方共享</h2>
          <p>我们承诺不会出售、出租或无故向任何未经授权的第三方披露您的个人联系数据。您的信息仅用于订单沟通、配送核对及售后服务。</p>

          <h2 className="text-base font-bold text-white pt-2">3. Cookies 与网站分析</h2>
          <p>为了提升网站使用体验并分析各分行浏览流量，本网站可能使用简单的 Analytics 技术来了解匿名访问统计，不包含个人敏感数据。</p>

          <h2 className="text-base font-bold text-white pt-2">4. 联系我们</h2>
          <p>如果您对隐私政策有任何疑问，请通过官方 WhatsApp (+60 16-888 8888) 与我们联系。</p>
        </div>

      </div>
    </div>
  );
}
