import React from 'react';
import Image from 'next/image';
import { Flame, Users, Clock, ShoppingBag } from 'lucide-react';

export default function RealStallSection() {
  const images = [
    { src: '/assets/stall_front.png', title: '太子园档口实景', caption: '热气腾腾出炉，现砍现卖' },
    { src: '/assets/food_court_stall.jpeg', title: '美食中心热照', caption: '街坊食客排队打包' },
    { src: '/assets/master_ah_ho.png', title: '阿和师傅砍鸭', caption: '大刀剁鸭，香汁四溢' },
    { src: '/assets/roast_duck_hero.jpg', title: '明火炉中金黄烧鸭', caption: '8分黄金脆皮' },
  ];

  return (
    <section className="py-16 bg-charcoal-900 text-stone-100 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800">
            档口烟火气 Stall Atmosphere
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">
            每天的烟火气，就是我们的招牌。
          </h2>
          <p className="text-stone-300 text-sm mt-2">
            没有复杂仪式。来到档口，点一份饭，看师父现斩、淋汁、装盘，然后趁热吃。
          </p>
        </div>

        {/* Real Photo Grid / Carousel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="group bg-stone-950 rounded-2xl overflow-hidden border border-stone-800 hover:border-amber-500/50 shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-56 w-full bg-stone-900">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-white text-sm group-hover:text-amber-400 transition-colors">
                  {img.title}
                </h3>
                <p className="text-xs text-stone-400 mt-1">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
