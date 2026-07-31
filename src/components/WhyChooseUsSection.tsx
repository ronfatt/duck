import React from 'react';
import { Award, Clock, DollarSign, HeartHandshake, CheckCircle2 } from 'lucide-react';

export default function WhyChooseUsSection() {
  const pillars = [
    {
      icon: Award,
      titleCn: '8分脆皮 10分口感',
      titleEn: 'Optimal 8-Fen Crispness',
      descCn: '不求硬干脆，只做恰到好处的8分黄金脆皮！咬下声清脆，肉质依然保留鲜美肉汁。',
      descEn: 'Perfect balance of crackling skin and tender, juicy duck meat underneath.',
    },
    {
      icon: Clock,
      titleCn: '100% 当天新鲜现烤',
      titleEn: 'Freshly Roasted Daily',
      descCn: '拒绝隔夜鸭！每天分早市9:30与午市12:00两批出炉，现砍现淋秘汁。',
      descEn: 'Two fresh roasting batches every day. Never overnight meat guaranteed.',
    },
    {
      icon: HeartHandshake,
      titleCn: '独家秘方中药酱汁',
      titleEn: 'Secret Master Recipe Sauce',
      descCn: '阿和师傅多年钻研，结合十几味特级药材熬成老卤酱汁，香浓回甘不腻口。',
      descEn: 'Slow-simmered herbal master sauce crafted from proprietary traditional spices.',
    },
    {
      icon: DollarSign,
      titleCn: '街坊平民亲民价格',
      titleEn: 'Neighbourhood Value Pricing',
      descCn: '大厨级烧鸭品质，街坊平民价格！单人烧鸭饭仅 RM 9.50，高CP值第一选。',
      descEn: 'Chef-quality roast duck at friendly neighbourhood prices from RM 9.50.',
    },
  ];

  return (
    <section className="py-16 bg-charcoal-950 text-stone-100 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
            8分脆皮烧鸭 · 品牌承诺
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">
            为什么雪隆街坊都选我们？
          </h2>
          <p className="text-stone-400 text-sm mt-2">
            坚持传统古法挂炉烘烤，把关每一个细节，让您每一口都吃到满足！
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-stone-900/90 border border-stone-800 hover:border-amber-500/50 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-600/20 text-amber-400 flex items-center justify-center mb-4 border border-amber-500/30">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{p.titleCn}</h3>
                <span className="text-[11px] font-medium text-amber-400/90 uppercase block mb-2">{p.titleEn}</span>
                <p className="text-xs text-stone-300 leading-relaxed">{p.descCn}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
