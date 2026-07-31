export interface Location {
  id: string;
  slug: string;
  nameCn: string;
  nameEn: string;
  region: 'Kuala Lumpur' | 'Selangor';
  areaName: string;
  address: string;
  phone: string;
  whatsapp: string;
  wazeUrl: string;
  googleMapsUrl: string;
  googleMapsEmbed: string;
  openingHours: string;
  closingDays: string;
  isPopular?: boolean;
  stallPhoto: string;
  landmark: string;
  parkingTip: string;
  grabFoodUrl?: string;
  foodPandaUrl?: string;
}

export const LOCATIONS: Location[] = [
  {
    id: 'taman-muda-cheras',
    slug: 'taman-muda-cheras',
    nameCn: '蕉赖太子园总店 (123美食中心)',
    nameEn: 'Cheras Taman Muda (Flagship Outlet)',
    region: 'Selangor',
    areaName: 'Cheras 太子园',
    address: '123 Food Court, Jalan Muda 1, Taman Muda, 56100 Cheras, Selangor, Malaysia',
    phone: '+60 16-888 8888',
    whatsapp: '60168888888',
    wazeUrl: 'https://waze.com/ul/hw283e1234',
    googleMapsUrl: 'https://maps.google.com/?q=Taman+Muda+Cheras+Food+Court',
    googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15935.5!2d101.76!3d3.12!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc362312345678%3A0x123456789abcdef!2sTaman%20Muda!5e0!3m2!1sen!2smy!4v1680000000000',
    openingHours: '早上 09:30 AM - 下午 03:00 PM (卖完即止)',
    closingDays: '每两周周三休息 Every Alternate Wednesday',
    isPopular: true,
    stallPhoto: '/assets/stall_front.png',
    landmark: '太子园为多早市巴刹对面，123美食中心角头间档口',
    parkingTip: '早市时段巴刹周边较繁忙，建议停在美食中心后方商业区停车场。',
    grabFoodUrl: 'https://grab.onelink.me/123456789',
    foodPandaUrl: 'https://foodpanda.page.link/123456789',
  },
  {
    id: 'kepong-main',
    slug: 'kepong-main',
    nameCn: '甲洞大都会美食中心店',
    nameEn: 'Kepong Metropolitan Food Court',
    region: 'Kuala Lumpur',
    areaName: 'Kepong 甲洞',
    address: 'No. 8, Jalan Kepong Usaha, Kepong, 52100 Kuala Lumpur, Malaysia',
    phone: '+60 16-777 6666',
    whatsapp: '60167776666',
    wazeUrl: 'https://waze.com/ul/hw283e5678',
    googleMapsUrl: 'https://maps.google.com/?q=Kepong+Food+Court',
    googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15934.5!2d101.63!3d3.21!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc478901234567%3A0xabcdef123456789!2sKepong!5e0!3m2!1sen!2smy!4v1680000000000',
    openingHours: '早上 10:00 AM - 下午 03:30 PM',
    closingDays: '每两周周二休息 Every Alternate Tuesday',
    isPopular: true,
    stallPhoto: '/assets/food_court_stall.jpeg',
    landmark: '甲洞大都会公园斜对面，美食中心正门第2间',
    parkingTip: '美食中心附设免费路边停车位，午餐高峰期12点前到达最佳。',
    grabFoodUrl: 'https://grab.onelink.me/987654321',
  },
  {
    id: 'seri-kembangan',
    slug: 'seri-kembangan',
    nameCn: '史里肯邦安沙登新村店',
    nameEn: 'Seri Kembangan Serdang New Village',
    region: 'Selangor',
    areaName: 'Seri Kembangan 史里肯邦安',
    address: 'Lot 45, Jalan SK 6/1, Seri Kembangan, 43300 Selangor, Malaysia',
    phone: '+60 16-555 4444',
    whatsapp: '60165554444',
    wazeUrl: 'https://waze.com/ul/hw283e9999',
    googleMapsUrl: 'https://maps.google.com/?q=Seri+Kembangan+Roast+Duck',
    googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15936.5!2d101.70!3d3.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc356789abcdef%3A0x987654321fedcba!2sSeri%20Kembangan!5e0!3m2!1sen!2smy!4v1680000000000',
    openingHours: '早上 09:30 AM - 下午 03:00 PM',
    closingDays: '每周一休息 Closed Every Monday',
    isPopular: false,
    stallPhoto: '/assets/master_ah_ho.png',
    landmark: '沙登新村巴刹步行3分钟，大众银行附近',
    parkingTip: '店铺前方有收费集中停车场，停车极方便。',
  },
  {
    id: 'ampang-street',
    slug: 'ampang-street',
    nameCn: '安邦大街新新美食城店',
    nameEn: 'Ampang Old Street Outlet',
    region: 'Selangor',
    areaName: 'Ampang 安邦',
    address: 'No. 22, Jalan Pekan Ampang, 68000 Ampang, Selangor, Malaysia',
    phone: '+60 16-333 2222',
    whatsapp: '60163332222',
    wazeUrl: 'https://waze.com/ul/hw283e8888',
    googleMapsUrl: 'https://maps.google.com/?q=Ampang+Roast+Duck',
    googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15935.0!2d101.76!3d3.14!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc378901234567%3A0xabcdef987654321!2sAmpang!5e0!3m2!1sen!2smy!4v1680000000000',
    openingHours: '早上 10:00 AM - 下午 04:00 PM',
    closingDays: '无休 Daily Open',
    isPopular: false,
    stallPhoto: '/assets/stall_front.png',
    landmark: '安邦大街古庙对面，新新美食城入口处',
    parkingTip: '建议停在九皇爷庙后方公开停车坪。',
  }
];
