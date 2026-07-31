export interface TodayStatus {
  activeLocationNameCn: string;
  activeLocationNameEn: string;
  foodCourtNameCn: string;
  areaNameCn: string;
  operatingHours: string;
  isOpenNow: boolean;
  statusBadgeTextCn: string;
  statusBadgeTextEn: string;
  roastingBatches: string[];
  wazeUrl: string;
  googleMapsUrl: string;
  whatsappNumber: string;
  noticeCn: string;
  noticeEn: string;
}

export const TODAY_STATUS: TodayStatus = {
  activeLocationNameCn: '蕉赖太子园总店 (123美食中心档口)',
  activeLocationNameEn: 'Cheras Taman Muda (123 Food Court Stall)',
  foodCourtNameCn: '123 美食中心 (和合美食小厨角头档)',
  areaNameCn: 'Cheras 太子园',
  operatingHours: '7:00 AM – 1:30 PM (每日现烧，售完即止)',
  isOpenNow: true,
  statusBadgeTextCn: '今日热烈供应中 · 烟火开炉',
  statusBadgeTextEn: 'Open & Roasting Fresh Today',
  roastingBatches: [
    '首批 Morning Batch: 09:30 AM (出炉即切)',
    '次批 Lunch Batch: 12:00 PM (热气腾腾)',
  ],
  wazeUrl: 'https://waze.com/ul/hw283e1234',
  googleMapsUrl: 'https://maps.google.com/?q=Taman+Muda+Cheras+Food+Court',
  whatsappNumber: '60168888888',
  noticeCn: '💡 每日现场准备数量有限。午餐高峰期（12:00 PM）建议提早到场或通过 WhatsApp 预留全鸭/双拼饭！',
  noticeEn: 'Daily quantities are limited. Highly recommended to arrive before 12:00 PM or pre-order via WhatsApp!',
};
