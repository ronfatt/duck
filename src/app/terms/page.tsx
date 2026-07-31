import React from 'react';
import { FileText } from 'lucide-react';

export const metadata = {
  title: '服务条款与免责声明 Terms & Disclaimer | 8分脆皮烧鸭',
  description: '8分脆皮烧鸭官方网站服务条款、价格变动与AI宣传内容免责声明。',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-charcoal-950 text-stone-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="border-b border-stone-800 pb-6">
          <h1 className="text-3xl font-black text-white flex items-center space-x-2">
            <FileText className="w-8 h-8 text-amber-400" />
            <span>服务条款与免责声明 Terms & Disclaimer</span>
          </h1>
          <p className="text-xs text-stone-400 mt-1">最后更新日期：2026年7月31日</p>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-stone-300 leading-relaxed bg-stone-900 border border-stone-800 p-6 sm:p-8 rounded-2xl">
          <h2 className="text-base font-bold text-white">1. 价格及供应情况声明</h2>
          <p>菜单所标示的价格、份量及今日供应状态可能因各茶餐室档口地点、市场原材料波动或每日限量而出入，最终价格与供应情况请以现场档口公布为准。</p>

          <h2 className="text-base font-bold text-white pt-2">2. AI创意短片与宣传素材说明</h2>
          <p>本网站部分宣传短片与视觉设计标示有“AI创意美食短片”字样，仅用于美食意境与创意呈现。实际菜品外观、配料及档口环境请以现场出炉情况为准。</p>

          <h2 className="text-base font-bold text-white pt-2">3. 知识产权保护</h2>
          <p>本网站所使用的“8分脆皮烧鸭 / 8 Fen Crispy Roast Duck”品牌商标、LOGO、文字内容及原创新闻图片均受知识产权法律保护。</p>
        </div>

      </div>
    </div>
  );
}
