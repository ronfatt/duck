import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import WhatsAppButton from '@/components/WhatsAppButton';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  metadataBase: new URL('https://8fenroastduck.com'),
  title: {
    default: '8分脆皮烧鸭 8 Fen Crispy Roast Duck | 马来西亚平民街坊价 大师级脆皮烧鸭',
    template: '%s | 8分脆皮烧鸭 8 Fen Crispy Roast Duck',
  },
  description: '马来西亚“8分脆皮烧鸭 8 Fen Crispy Roast Duck”官方网站。小档口，大火候！皮响肉嫩，鲜汁爆满，当天明火现烤现砍。提供蕉赖太子园、甲洞、沙登、安邦分行地址、餐车路线、菜谱价格及 WhatsApp 预订。',
  keywords: [
    '8分脆皮烧鸭', '8 Fen Crispy Roast Duck', '小档口大火候', '马来西亚烧鸭', '蕉赖太子园烧鸭',
    '甲洞烧鸭', '安邦烧鸭饭', '沙登烧鸭', '雪隆烧鸭推荐', '脆皮烧肉', '蜜汁叉烧', '烧鸭餐车',
    'Ampang roast duck rice', 'Cheras roast duck', 'Malaysian roast duck', 'KL Roast Duck'
  ],
  authors: [{ name: '8分脆皮烧鸭 8 Fen Crispy Roast Duck' }],
  creator: '8分脆皮烧鸭',
  publisher: '8分脆皮烧鸭',
  formatDetection: {
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: '8分脆皮烧鸭 8 Fen Crispy Roast Duck | 小档口，大火候。',
    description: '雪隆区超人气街坊烧鸭！皮脆肉嫩，100%当天现烤现砍。点击查看最近分行与菜单！',
    url: 'https://8fenroastduck.com',
    siteName: '8分脆皮烧鸭 8 Fen Crispy Roast Duck',
    images: [
      {
        url: '/assets/roast_duck_hero.jpg',
        width: 1200,
        height: 630,
        alt: '8分脆皮烧鸭 8 Fen Crispy Roast Duck',
      },
    ],
    locale: 'zh_MY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '8分脆皮烧鸭 8 Fen Crispy Roast Duck',
    description: '小档口，大火候。脆皮够响，烧鸭够香！雪隆热门分行地址与菜谱预订。',
    images: ['/assets/roast_duck_hero.jpg'],
  },
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE_HERE',
  },
  other: {
    'geo.region': 'MY-10',
    'geo.placename': 'Kuala Lumpur / Selangor, Malaysia',
    'geo.position': '3.12;101.76',
    'ICBM': '3.12, 101.76',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hans">
      <head>
        <StructuredData />
      </head>
      <body className="bg-charcoal-950 text-stone-100 min-h-screen flex flex-col antialiased selection:bg-amber-600 selection:text-stone-950">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileBottomNav />
        <WhatsAppButton />
      </body>
    </html>
  );
}
