import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Flame, ShieldCheck, Award, Heart, ArrowRight, Store } from 'lucide-react';

export const metadata = {
  title: '小档口故事 | 8分脆皮烧鸭 Our Story',
  description: '“小档口，大火候。” 了解8分脆皮烧鸭与阿和师傅的匠心烘烤工艺。不追求奢华装修，只为做好每一份街坊吃得起的金牌脆皮烧鸭。',
};

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-charcoal-950 text-stone-100 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800">
            品牌信念 · 匠心传承
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white mt-3">
            小档口，大火候。
          </h1>
          <p className="text-stone-300 text-sm sm:text-base mt-3">
            “店面不大，烧鸭认真。没有豪华装修，只有每天认真开炉。”
          </p>
        </div>

        {/* Master Photo & Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16 bg-stone-900 border border-stone-800 p-6 sm:p-8 rounded-3xl shadow-2xl">
          <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden border border-stone-800">
            <Image
              src="/assets/master_ah_ho.png"
              alt="8分脆皮烧鸭师傅 阿和"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 bg-stone-950/80 p-3 rounded-xl border border-stone-800 text-xs text-amber-300 font-bold">
              👨‍🍳 创始掌舵人：阿和师傅 (Master Ah Ho)
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-white leading-snug">
              一份好烧味，<br />
              <span className="text-gold-gradient">不应该成为奢侈。</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              我们不追求昂贵包装，也不把烧味卖成奢侈品。我们把功夫放在火候、脆皮、肉汁和每一份饭里。
            </p>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              很多人问为什么取名<strong className="text-amber-400">“8分脆皮”</strong>？
            </p>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              “八分，是保留进步的空间，也是每天继续认真做好下一炉的谦逊；八分脆皮，更是皮响肉嫩的最佳黄金点！”
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <div className="p-3 bg-amber-950/50 rounded-xl border border-amber-800 text-xs text-amber-300 font-bold flex items-center space-x-1">
                <Store className="w-4 h-4 text-amber-400" />
                <span>小档口直营</span>
              </div>
              <div className="p-3 bg-red-950/50 rounded-xl border border-red-800 text-xs text-red-300 font-bold flex items-center space-x-1">
                <Flame className="w-4 h-4 text-red-400" />
                <span>每日明火现烤</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="space-y-8 mb-16">
          <h2 className="text-2xl sm:text-3xl font-black text-white text-center">
            三大坚持 · 守护街坊美味
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-stone-900 border border-stone-800 p-6 rounded-2xl space-y-3 shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-amber-600/20 text-amber-400 flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="text-lg font-bold text-white">少一点包装</h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                不靠豪华装修撑场面，把每一分经营成本都实实在在省下来，回馈给食客。
              </p>
            </div>

            <div className="bg-stone-900 border border-stone-800 p-6 rounded-2xl space-y-3 shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-amber-600/20 text-amber-400 flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="text-lg font-bold text-white">多一点功夫</h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                每天开炉、每天现斩、每天重新开始。每一道工序都不打马虎眼。
              </p>
            </div>

            <div className="bg-stone-900 border border-stone-800 p-6 rounded-2xl space-y-3 shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-amber-600/20 text-amber-400 flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="text-lg font-bold text-white">价格留给街坊</h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                让好烧味回到日常，而不是偶尔才吃得起。高CP值让大家天天享受美味。
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-amber-gradient rounded-3xl p-8 text-center text-stone-950 shadow-2xl">
          <h2 className="text-3xl font-black mb-2">今天，就来吃一份刚出炉的脆皮烧鸭</h2>
          <p className="text-sm font-bold mb-6">蕉赖太子园、甲洞大都会等分行开炉热售中！</p>
          <Link
            href="/today"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl bg-stone-950 text-amber-300 font-bold text-sm hover:scale-105 transition-all shadow-xl"
          >
            <span>今天去哪里吃 Today&apos;s Locations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
