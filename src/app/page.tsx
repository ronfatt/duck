import React from 'react';
import HeroSection from '@/components/HeroSection';
import StatusCard from '@/components/StatusCard';
import TodayRoastSection from '@/components/TodayRoastSection';
import SignatureDishesSection from '@/components/SignatureDishesSection';
import WhySmallStallSection from '@/components/WhySmallStallSection';
import RealStallSection from '@/components/RealStallSection';
import RoastDuckRadar from '@/components/RoastDuckRadar';
import FoodTruckSection from '@/components/FoodTruckSection';
import BloggerVideosSection from '@/components/BloggerVideosSection';
import ReviewsSection from '@/components/ReviewsSection';
import CateringSection from '@/components/CateringSection';
import CollaborationSection from '@/components/CollaborationSection';
import FinalCTASection from '@/components/FinalCTASection';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Section 1: Hero */}
      <HeroSection />

      {/* Section 1 sub: Status Card */}
      <div className="max-w-4xl mx-auto px-4 -mt-10 relative z-20 mb-12">
        <StatusCard />
      </div>

      {/* Section 2: Today's Roast */}
      <TodayRoastSection />

      {/* Section 3: Signature Product Spotlight */}
      <SignatureDishesSection />

      {/* Section 4: Why a Small Stall */}
      <WhySmallStallSection />

      {/* Section 5: Real Stall Experience */}
      <RealStallSection />

      {/* Section 6: Roast Duck Radar */}
      <RoastDuckRadar />

      {/* Section 7: Food Truck Future */}
      <FoodTruckSection />

      {/* Section 8: Video Stories */}
      <BloggerVideosSection />

      {/* Section 9: Customer Feedback */}
      <ReviewsSection />

      {/* Section 10: Catering and Events */}
      <CateringSection />

      {/* Section 11: Business Collaboration */}
      <CollaborationSection />

      {/* Section 12: Final CTA */}
      <FinalCTASection />
    </div>
  );
}
