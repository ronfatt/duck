import React from 'react';
import { Metadata } from 'next';
import ContactClient from '@/components/ContactClient';

export const metadata: Metadata = {
  title: '节日全鸭预订与联系我们 Contact | 8分脆皮烧鸭',
  description: '8分脆皮烧鸭节日全鸭预订、家庭拜祭全鸭、开张自由餐与客服热线。提供 WhatsApp 快速预订通道。',
  keywords: [
    '烧鸭预订', '全鸭预订', '中秋烧鸭预订', '拜祭全鸭', '8分脆皮烧鸭电话', 'WhatsApp 预订烧鸭'
  ],
  openGraph: {
    title: '节日全鸭预订与联系我们 | 8分脆皮烧鸭 8 Fen Crispy Roast Duck',
    description: '提前 1 至 3 天预订送独家秘制酸梅酱与自家凉茶！点击在线提交预订。',
    url: 'https://8fenroastduck.com/contact',
    images: ['/assets/roast_duck_hero.jpg'],
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
