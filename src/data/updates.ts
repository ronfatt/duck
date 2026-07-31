export interface UpdateItem {
  id: string;
  titleCn: string;
  titleEn: string;
  date: string;
  tagCn: string;
  tagEn: string;
  summaryCn: string;
  summaryEn: string;
  image: string;
  link?: string;
}

export const UPDATES: UpdateItem[] = [
  {
    id: 'up-1',
    titleCn: '中秋/节日预订开放！全鸭预订送独家蘸酱与凉茶',
    titleEn: 'Festive Whole Duck Pre-Orders Open! Free Sauce & Herbal Tea',
    date: '2026-07-28',
    tagCn: '节日预订',
    tagEn: 'Festive Pre-Order',
    summaryCn: '迎接节日拜祭与家庭团聚，8分脆皮烧鸭全面开放全鸭预订！提前通过 WhatsApp 预订可享优先提货，并附送独家密制酸梅酱与自家凉茶。',
    summaryEn: 'Pre-order your whole crispy roast duck in advance for family celebrations with free signature sauces & herbal tea.',
    image: '/assets/roast_duck_hero.jpg',
  },
  {
    id: 'up-2',
    titleCn: '【新店预告】梳邦再也 Subang Jaya 第5分行即将震撼试业！',
    titleEn: 'New Branch Announcement: Subang Jaya Outlet Opening Soon!',
    date: '2026-07-15',
    tagCn: '新店开业',
    tagEn: 'New Outlet',
    summaryCn: '应广大学子与街坊要求，8分脆皮烧鸭第5家分行即将落地 Subang SS15，敬请期待开业首三日烧鸭饭优惠！',
    summaryEn: 'Expanding to Subang SS15! Stay tuned for special opening 3-day duck rice promotion.',
    image: '/assets/stall_front.png',
  },
  {
    id: 'up-3',
    titleCn: '每日烧烤批次提醒：早市9:30am与午市12:00pm双批次出炉',
    titleEn: 'Daily Roasting Timings: Fresh Batches at 9:30 AM & 12:00 PM',
    date: '2026-07-01',
    tagCn: '出炉时间',
    tagEn: 'Daily Fresh',
    summaryCn: '为了保障每一块鸭皮保持“8分脆皮”最佳口感，我们坚持分批明火现烤，建议顾客在出炉半小时内享用口感最佳。',
    summaryEn: 'We roast twice daily to ensure ultimate skin crispiness. Recommended to dine within 30 minutes of roasting.',
    image: '/assets/food_court_stall.jpeg',
  }
];
