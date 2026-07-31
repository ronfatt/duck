import React from 'react';
import { MENU_ITEMS } from '@/data/menu';
import { LOCATIONS } from '@/data/locations';
import { FAQS } from '@/data/faq';

export default function StructuredData() {
  // 1. Restaurant / LocalBusiness Schema
  const restaurantSchema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    'name': '8分脆皮烧鸭 8 Fen Crispy Roast Duck',
    'alternateName': '八分脆皮烧鸭',
    'image': 'https://8fenroastduck.com/assets/roast_duck_hero.jpg',
    '@id': 'https://8fenroastduck.com/#restaurant',
    'url': 'https://8fenroastduck.com',
    'telephone': '+60168888888',
    'priceRange': 'RM 9.50 - RM 68.00',
    'servesCuisine': ['Malaysian Chinese', 'Cantonese Roast Meat', 'Roast Duck', 'Siew Yoke'],
    'slogan': '小档口，大火候。',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '123 Food Court, Jalan Muda 1, Taman Muda',
      'addressLocality': 'Cheras',
      'addressRegion': 'Selangor',
      'postalCode': '56100',
      'addressCountry': 'MY'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 3.12,
      'longitude': 101.76
    },
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        'opens': '07:00',
        'closes': '13:30'
      }
    ],
    'hasMenu': 'https://8fenroastduck.com/menu',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '1280'
    }
  };

  // 2. Menu Schema
  const menuSchema = {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    'name': '8分脆皮烧鸭 菜单',
    'url': 'https://8fenroastduck.com/menu',
    'mainEntityOfPage': 'https://8fenroastduck.com/menu',
    'hasMenuItem': MENU_ITEMS.map((item) => ({
      '@type': 'MenuItem',
      'name': item.nameCn,
      'alternateName': item.nameEn,
      'description': item.descriptionCn,
      'image': `https://8fenroastduck.com${item.image}`,
      'offers': {
        '@type': 'Offer',
        'price': item.price.toFixed(2),
        'priceCurrency': 'MYR',
        'availability': item.availability === 'sold-out' ? 'https://schema.org/OutOfStock' : 'https://schema.org/InStock',
      }
    }))
  };

  // 3. FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': FAQS.map((faq) => ({
      '@type': 'Question',
      'name': faq.questionCn,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answerCn
      }
    }))
  };

  // 4. Organization Schema
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': '8分脆皮烧鸭 8 Fen Crispy Roast Duck',
    'url': 'https://8fenroastduck.com',
    'logo': 'https://8fenroastduck.com/assets/roast_duck_hero.jpg',
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+60168888888',
      'contactType': 'customer service',
      'areaServed': 'MY',
      'availableLanguage': ['Chinese', 'English']
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
    </>
  );
}
