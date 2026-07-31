import { MetadataRoute } from 'next';
import { LOCATIONS } from '@/data/locations';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://8fenroastduck.com';

  const routes = [
    '',
    '/today',
    '/menu',
    '/locations',
    '/food-truck',
    '/story',
    '/videos',
    '/catering',
    '/collaboration',
    '/contact',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const locationRoutes = LOCATIONS.map((loc) => ({
    url: `${baseUrl}/locations/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...routes, ...locationRoutes];
}
