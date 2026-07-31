import React from 'react';
import Link from 'next/link';
import { Flame, MapPin, Phone, Clock, MessageSquare, Compass, Truck, Handshake, Building } from 'lucide-react';
import { LOCATIONS } from '@/data/locations';

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 text-stone-300 border-t border-amber-900/40 pt-12 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Brand Concept */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-amber-gradient flex items-center justify-center shadow-md">
                <Flame className="w-6 h-6 text-white fill-amber-300" />
              </div>
              <span className="text-xl font-black text-gold-gradient tracking-wide">
                8分脆皮烧鸭
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              马来西亚平民街坊烧味品牌。“小档口，大火候。” 坚持每日风干、明火现烤，皮响肉嫩，新鲜切盘。
            </p>
            <div className="text-xs text-amber-400 font-bold bg-amber-950/60 p-2.5 rounded-xl border border-amber-800/50">
              “小档口，大火候。店面不大，烧鸭认真。”
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider">快速导航 Quick Links</h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/" className="hover:text-amber-400 transition-colors">首页 Home</Link></li>
              <li><Link href="/today" className="hover:text-amber-400 transition-colors text-amber-300 font-bold">今天去哪里吃 Today&apos;s Outlet</Link></li>
              <li><Link href="/menu" className="hover:text-amber-400 transition-colors">美味菜单 Full Menu</Link></li>
              <li><Link href="/locations" className="hover:text-amber-400 transition-colors">分行档口 Outlet Locations</Link></li>
              <li><Link href="/food-truck" className="hover:text-amber-400 transition-colors">八分烧鸭餐车 Food Truck</Link></li>
              <li><Link href="/story" className="hover:text-amber-400 transition-colors">小档口故事 Brand Story</Link></li>
              <li><Link href="/videos" className="hover:text-amber-400 transition-colors">现场斩鸭视频 Kitchen Videos</Link></li>
            </ul>
          </div>

          {/* Column 3: Catering & Partnerships */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider">预订与合作 Catering & Business</h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/catering" className="hover:text-amber-400 transition-colors">团体包餐与公司便当 Catering</Link></li>
              <li><Link href="/collaboration" className="hover:text-amber-400 transition-colors">茶餐室与场地合作 Partnership</Link></li>
              <li><Link href="/contact" className="hover:text-amber-400 transition-colors">节日全鸭预订 Reserve Whole Duck</Link></li>
              <li><Link href="/privacy" className="hover:text-amber-400 transition-colors text-stone-500">隐私政策 Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-amber-400 transition-colors text-stone-500">服务条款 Terms & Disclaimer</Link></li>
            </ul>
          </div>

          {/* Column 4: Hours & Hotline */}
          <div className="space-y-3 text-xs">
            <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider">出炉与联系 Operating Hours</h3>
            <div className="flex items-start space-x-2 text-stone-400">
              <Clock className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-stone-200">每日出炉时间 Roasting Times:</p>
                <p>首批 Morning: 09:30 AM</p>
                <p>次批 Afternoon: 12:00 PM</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-stone-400">
              <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>电话: +60 16-888 8888</span>
            </div>
            <div className="flex items-center space-x-2 text-stone-400">
              <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>WhatsApp: +60 16-888 8888</span>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500">
          <p>© {new Date().getFullYear()} 8分脆皮烧鸭 8 Fen Crispy Roast Duck. All Rights Reserved.</p>
          <p className="mt-2 sm:mt-0">“小档口，大火候。” Malaysian Authentic Roast Meat Brand</p>
        </div>
      </div>
    </footer>
  );
}
