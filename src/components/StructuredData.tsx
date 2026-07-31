import React from 'react';

export default function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    'name': '8分脆皮烧鸭 8 Fen Crispy Roast Duck',
    'image': 'https://8fenroastduck.com/assets/roast_duck_hero.jpg',
    '@id': 'https://8fenroastduck.com',
    'url': 'https://8fenroastduck.com',
    'telephone': '+60168888888',
    'priceRange': 'RM 9.50 - RM 68.00',
    'servesCuisine': ['Malaysian Chinese', 'Cantonese Roast Meat', 'Roast Duck', 'Siew Yoke'],
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
        'opens': '09:30',
        'closes': '15:00'
      }
    ],
    'hasMenu': 'https://8fenroastduck.com/menu',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '1280'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
