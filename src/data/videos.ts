export interface VideoItem {
  id: string;
  titleCn: string;
  titleEn: string;
  videoUrl: string;
  posterUrl: string;
  duration: string;
  category: 'blogger' | 'kitchen' | 'craftsmanship' | 'ai-promo';
  descriptionCn: string;
  descriptionEn: string;
  isAiGenerated?: boolean;
  aiNoticeCn?: string;
}

export const VIDEOS: VideoItem[] = [
  {
    id: 'vid-chopping-1',
    titleCn: '刀起刀落！阿和师傅现场斩鸭爆汁实录',
    titleEn: 'Knife Chop & Juiciness Sizzling Action',
    videoUrl: '/assets/roast_duck_chopping.mp4',
    posterUrl: '/assets/roast_duck_hero.jpg',
    duration: '0:45',
    category: 'kitchen',
    descriptionCn: '真实档口一览，现场大刀剁鸭，清脆声音与满屏喷汁，感受真正8分脆皮的魅力！',
    descriptionEn: 'Real stall footage of Master Ah Ho chopping fresh crispy roast duck with succulent juices.',
    isAiGenerated: false,
  },
  {
    id: 'vid-kitchen-2',
    titleCn: '出炉盛况！每天热气腾腾明火烤鸭',
    titleEn: 'Fresh Out of Oven! Golden Roast Ducks',
    videoUrl: '/assets/roast_duck_kitchen.mp4',
    posterUrl: '/assets/stall_front.png',
    duration: '1:15',
    category: 'craftsmanship',
    descriptionCn: '每天早上9点半第一批烧鸭准时出炉，金黄亮泽，油光淋漓，排队人潮络绎不绝。',
    descriptionEn: 'First batch coming out of oven every morning at 9:30am. Golden skin glistening under fire.',
    isAiGenerated: false,
  },
  {
    id: 'vid-ai-promo-1',
    titleCn: '【AI创意美食短片】脆皮爆汁的美味畅想',
    titleEn: 'AI Creative Roast Duck Culinary Concept',
    videoUrl: '/assets/roast_duck_chopping.mp4',
    posterUrl: '/assets/food_court_stall.jpeg',
    duration: '0:30',
    category: 'ai-promo',
    descriptionCn: '动态视觉呈现，展现金黄鸭皮与香浓酱汁交融的美食艺术。',
    descriptionEn: 'Dynamic visual presentation of roast duck textures and gravy.',
    isAiGenerated: true,
    aiNoticeCn: 'AI创意美食短片，食物与门店情况以现场为准。',
  }
];
