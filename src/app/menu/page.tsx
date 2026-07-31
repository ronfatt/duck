import React from 'react';
import { Metadata } from 'next';
import MenuClient from '@/components/MenuClient';

export const metadata: Metadata = {
  title: '招牌美味菜单 Menu | 8分脆皮烧鸭 8 Fen Crispy Roast Duck',
  description: '8分脆皮烧鸭全目菜谱与价格。包含招牌脆皮烧鸭、金牌脆皮烧肉、蜜汁焦香叉烧、古法卤猪脚、豪华双拼/三拼饭及咸菜酸辣汤。支持 WhatsApp 预订打包！',
  keywords: [
    '8分脆皮烧鸭菜单', '8 Fen Roast Duck Menu', '烧鸭价格', '脆皮烧肉饭', '蜜汁叉烧饭',
    '烧鸭双拼饭', '古法卤猪脚', '烧味套餐价格', 'Malaysian roast duck price'
  ],
  openGraph: {
    title: '招牌美味菜单 | 8分脆皮烧鸭 8 Fen Crispy Roast Duck',
    description: '单人烧鸭饭仅 RM 9.50 起！皮脆肉嫩，100%当天明火现烤。点击查看完整菜谱与价格！',
    url: 'https://8fenroastduck.com/menu',
    images: ['/assets/roast_duck_hero.jpg'],
  },
  alternates: {
    canonical: '/menu',
  },
};

export default function MenuPage() {
  return <MenuClient />;
}
