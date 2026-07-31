import React from 'react';
import { Metadata } from 'next';
import FoodTruckClient from '@/components/FoodTruckClient';

export const metadata: Metadata = {
  title: '八分烧鸭餐车巡回 Food Truck Route | 8分脆皮烧鸭',
  description: '“今天在这里，明天香到你那里。” 查询8分脆皮烧鸭餐车每周巡回路线表、停靠地点与营业时间。在线提交社区邀请表单！',
  keywords: [
    '烧鸭餐车', 'Food Truck roast duck', '8分烧鸭餐车路线', '社区餐车巡回', '企业午餐餐车',
    'Malaysian food truck', 'Ampang food truck', 'Cheras food truck'
  ],
  openGraph: {
    title: '八分烧鸭餐车巡回路线 | 8分脆皮烧鸭 8 Fen Crispy Roast Duck',
    description: '“不用找大餐厅，好烧鸭会来找你。” 点击查看本周路线与社区邀请。',
    url: 'https://8fenroastduck.com/food-truck',
    images: ['/assets/stall_front.png'],
  },
  alternates: {
    canonical: '/food-truck',
  },
};

export default function FoodTruckPage() {
  return <FoodTruckClient />;
}
