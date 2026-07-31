import React from 'react';
import CollaborationSection from '@/components/CollaborationSection';

export const metadata = {
  title: '档口与场地合作计划 | 8分脆皮烧鸭 Business Collaboration',
  description: '“一起把好烧味带进更多社区。” 诚邀雪隆区茶餐室东主、美食中心负责人、市集策划人合作开炉。',
};

export default function CollaborationPage() {
  return (
    <div className="min-h-screen bg-charcoal-950 text-stone-100 py-6">
      <CollaborationSection />
    </div>
  );
}
