export interface CateringPackage {
  id: string;
  nameCn: string;
  nameEn: string;
  guestCount: string;
  priceEstimate: string;
  itemsIncluded: string[];
  descriptionCn: string;
  isPopular?: boolean;
}

export const CATERING_PACKAGES: CateringPackage[] = [
  {
    id: 'bento-box',
    nameCn: '企业员工便当套餐 (Staff Bento)',
    nameEn: 'Corporate Lunch Bento Box',
    guestCount: '20份起订 (Min 20 pax)',
    priceEstimate: 'RM 12.00 / 份',
    itemsIncluded: [
      '招牌脆皮烧鸭饭 或 双拼烧味饭',
      '自家古法秘制淋汁与手拉辣椒酱',
      '新鲜黄瓜片与卤蛋半颗',
      '瓶装罗汉果夏枯草凉茶',
    ],
    descriptionCn: '专为公司午餐会、会议便当与员工福利设计。独立密封盒装，送达时依然保持温热脆皮！',
    isPopular: true,
  },
  {
    id: 'whole-duck-platter',
    nameCn: '家庭与社团拜祭全鸭宴 (Whole Duck Party)',
    nameEn: 'Whole Duck Celebration Set',
    guestCount: '适合 10 - 15 人宴客',
    priceEstimate: 'RM 188.00 / 套',
    itemsIncluded: [
      '8分脆皮全鸭 (2只全鸭，斩盘或整只保鲜袋装)',
      '金牌蜂窝脆皮烧肉 (500g)',
      '蜜汁焦香叉烧 (500g)',
      '秘制卤鸭骨酸辣汤大煲',
      '特制蘸酱大份装',
    ],
    descriptionCn: '节日庆典、家庭聚餐、社区拜祭的首选豪华烧味拼盘宴，份量十足！',
    isPopular: true,
  },
  {
    id: 'food-truck-on-site',
    nameCn: '八分烧鸭餐车现场开炉 (On-Site Food Truck Catering)',
    nameEn: 'Live Roast Food Truck Event',
    guestCount: '50 - 200 人大型活动',
    priceEstimate: '定制报价 Custom Quote',
    itemsIncluded: [
      '烧鸭餐车直接驶入活动现场',
      '师傅现场剁鸭、淋汁，现做现发',
      '现场烟火气与斩鸭咔嚓爆脆声音体验',
      '全套环保餐具与专人现场服务',
    ],
    descriptionCn: '适合企业开张嘉年华、新楼盘开放日、婚礼户外派对与社区大型节庆活动。',
  },
];
