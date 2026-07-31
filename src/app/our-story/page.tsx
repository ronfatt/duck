import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Flame, ShieldCheck, Award, Heart, ArrowRight } from 'lucide-react';

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-charcoal-950 text-stone-100 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800">
            匠心传承 · 8分脆皮
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white mt-3">
            阿和师傅与烧鸭的故事
          </h1>
          <p className="text-stone-400 text-sm sm:text-base mt-2">
            “不追求高不可及的奢侈饭店，只做街坊最爱吃、天天吃得起的大师级脆皮烧鸭。”
          </p>
        </div>

        {/* Master Photo & Intro */}
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
              为什么叫 <span className="text-gold-gradient">“8分脆皮”</span>？
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              很多人问阿和师傅：“为什么不叫10分脆皮，而叫8分脆皮？”
            </p>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              阿和师傅常说：<strong className="text-amber-400">“烧鸭烤得过脆（10分），鸭肉水份就会流失发柴；烤得不足（6分），皮又不够响脆。”</strong>
            </p>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              “8分脆皮”，恰恰是鸭皮爆脆与鸭肉鲜嫩饱满的最佳平衡点！咬下去第一口是咔嚓声，接着就是浓郁肉汁爆开。8分皮响，10分满分口感！
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <div className="p-3 bg-amber-950/50 rounded-xl border border-amber-800 text-xs text-amber-300 font-bold">
                🔥 12小时风干浸泡
              </div>
              <div className="p-3 bg-red-950/50 rounded-xl border border-red-800 text-xs text-red-300 font-bold">
                🍖 220°C 明火现烘
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Brand Principles */}
        <div className="space-y-8 mb-16">
          <h2 className="text-2xl sm:text-3xl font-black text-white text-center">
            三大坚持 · 守护街坊美味
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-stone-900 border border-stone-800 p-6 rounded-2xl space-y-3 shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-amber-600/20 text-amber-400 flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="text-lg font-bold text-white">坚持当天现烤现砍</h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                绝不上夜盘，绝不卖冻鸭。每天定时分批出炉，保证顾客吃到的都是刚出炉、皮还在咔嚓响的烧鸭。
              </p>
            </div>

            <div className="bg-stone-900 border border-stone-800 p-6 rounded-2xl space-y-3 shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-amber-600/20 text-amber-400 flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="text-lg font-bold text-white">坚持独家古法药材汁</h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                几十味中药材提炼的卤汁，香气沉稳回甘，淋在烫热的鸭肉与鸭油饭上，每一口都让人回味无穷。
              </p>
            </div>

            <div className="bg-stone-900 border border-stone-800 p-6 rounded-2xl space-y-3 shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-amber-600/20 text-amber-400 flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="text-lg font-bold text-white">坚持亲民街坊价格</h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                让上班族、学生和家庭都能用最实惠的价格，享受到大酒楼品质的精致烧蜡美食。
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-amber-gradient rounded-3xl p-8 text-center text-stone-950 shadow-2xl">
          <h2 className="text-3xl font-black mb-2">来我们分行品尝最正宗的8分脆皮烧鸭</h2>
          <p className="text-sm font-bold mb-6">蕉赖太子园、甲洞、沙登等分行热售中！</p>
          <Link
            href="/locations"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl bg-stone-950 text-amber-300 font-bold text-sm hover:scale-105 transition-all shadow-xl"
          >
            <span>查找离您最近的分行 Find Nearby Outlets</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
