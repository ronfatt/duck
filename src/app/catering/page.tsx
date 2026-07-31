import React from 'react';
import CateringSection from '@/components/CateringSection';

export const metadata = {
  title: '团体包餐与活动预订 | 8分脆皮烧鸭 Catering & Events',
  description: '“不只一份饭，也能照顾一班人。” 8分脆皮烧鸭提供公司午餐便当、团队全鸭宴、户外餐车开炉预订。',
};

export default function CateringPage() {
  return (
    <div className="min-h-screen bg-charcoal-950 text-stone-100 py-6">
      <CateringSection />
    </div>
  );
}
