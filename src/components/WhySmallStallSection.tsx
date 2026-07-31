import React from 'react';
import { Store, Flame, HeartHandshake, Check } from 'lucide-react';

export default function WhySmallStallSection() {
  const cards = [
    {
      step: '01',
      titleCn: '少一点包装',
      subtitleCn: '不靠豪华装修撑场面。',
      descCn: '省去高昂的大餐厅租金与奢华装潢开销，把每一分成本真正用在买好鸭、买优质中药材上。',
      icon: Store,
    },
    {
      step: '02',
      titleCn: '多一点功夫',
      subtitleCn: '每天开炉、每天现斩、每天重新开始。',
      descCn: '小档口更专注火候！从12小时浸泡风干到220°C明火控制，每一刀砍下去都是极致的咔嚓声。',
      icon: Flame,
    },
    {
      step: '03',
      titleCn: '价格留给街坊',
      subtitleCn: '让好烧味回到日常，而不是偶尔才吃得起。',
      descCn: '单人烧鸭饭仅 RM 9.50。我们希望上班族、学生和隔壁街坊天天都能大口吃肉。',
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="py-16 bg-charcoal-950 text-stone-100 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800">
            品牌真诚态度 Brand Belief
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-3">
            为什么我们坚持小档口？
          </h2>
          <p className="text-stone-300 text-sm sm:text-base mt-3 leading-relaxed">
            因为我们希望把成本放在食材、火候和手艺，而不是昂贵装修。<br className="hidden sm:inline" />
            小档口让我们更靠近社区，也让更多人能够用合理的价格，吃到刚出炉的烧味饭。
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-stone-900 border border-stone-800 hover:border-amber-500/50 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-600/20 text-amber-400 flex items-center justify-center border border-amber-500/30 font-black text-lg">
                      {card.step}
                    </div>
                    <Icon className="w-6 h-6 text-stone-500" />
                  </div>

                  <h3 className="text-xl font-black text-white">{card.titleCn}</h3>
                  <p className="text-xs font-bold text-amber-400 mt-1 mb-3">
                    “{card.subtitleCn}”
                  </p>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    {card.descCn}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-800/80 flex items-center space-x-1.5 text-[11px] text-stone-400">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>小档口，大火候的街坊承诺</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
