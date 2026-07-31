export interface RouteStop {
  dayCn: string;
  dayEn: string;
  areaCn: string;
  areaEn: string;
  locationDetailsCn: string;
  timeSlot: string;
  status: 'active' | 'upcoming' | 'catering-booked' | 'rest-day';
  wazeUrl?: string;
  googleMapsUrl?: string;
}

export const FOOD_TRUCK_SCHEDULE: RouteStop[] = [
  {
    dayCn: '星期一 Monday',
    dayEn: 'Monday',
    areaCn: '安邦 Ampang Commercial Centre',
    areaEn: 'Ampang',
    locationDetailsCn: '安邦大街商业区大路旁停车位（RHB Bank 对面）',
    timeSlot: '11:00 AM – 2:00 PM',
    status: 'active',
    wazeUrl: 'https://waze.com/ul/hw283e8888',
    googleMapsUrl: 'https://maps.google.com/?q=Ampang',
  },
  {
    dayCn: '星期二 Tuesday',
    dayEn: 'Tuesday',
    areaCn: '蕉赖 Cheras Taman Muda',
    areaEn: 'Cheras',
    locationDetailsCn: '太子园早市巴刹旁旁公开停车坪',
    timeSlot: '10:30 AM – 2:00 PM',
    status: 'active',
    wazeUrl: 'https://waze.com/ul/hw283e1234',
    googleMapsUrl: 'https://maps.google.com/?q=Cheras',
  },
  {
    dayCn: '星期三 Wednesday',
    dayEn: 'Wednesday',
    areaCn: '企业午餐专场 Corporate Lunch Stop',
    areaEn: 'Cyberjaya / Tech Park',
    locationDetailsCn: '赛城科技园区大楼门口（企业预约午餐盒发放）',
    timeSlot: '11:30 AM – 2:00 PM',
    status: 'catering-booked',
  },
  {
    dayCn: '星期四 Thursday',
    dayEn: 'Thursday',
    areaCn: '梳邦再也 Subang SS15',
    areaEn: 'Subang Jaya',
    locationDetailsCn: 'SS15 商业街大学路旁停车点',
    timeSlot: '11:00 AM – 2:30 PM',
    status: 'upcoming',
    wazeUrl: 'https://waze.com/ul/hw283e7777',
    googleMapsUrl: 'https://maps.google.com/?q=Subang+SS15',
  },
  {
    dayCn: '星期五 Friday',
    dayEn: 'Friday',
    areaCn: '沙登新村 Serdang New Village',
    areaEn: 'Seri Kembangan',
    locationDetailsCn: '大众银行斜对面夜市集广场前',
    timeSlot: '4:30 PM – 8:00 PM (晚餐晚市)',
    status: 'active',
    wazeUrl: 'https://waze.com/ul/hw283e9999',
    googleMapsUrl: 'https://maps.google.com/?q=Seri+Kembangan',
  },
  {
    dayCn: '星期六 Saturday',
    dayEn: 'Saturday',
    areaCn: '社区市集与嘉年华 Community Fair',
    areaEn: 'Community Event',
    locationDetailsCn: '周末社区创意市集或户外活动流动开炉',
    timeSlot: '10:00 AM – 4:00 PM',
    status: 'upcoming',
  },
  {
    dayCn: '星期日 Sunday',
    dayEn: 'Sunday',
    areaCn: '设备保养与休整 Rest Day',
    areaEn: 'Rest Day',
    locationDetailsCn: '全车深度清洁与烤炉维护休整',
    timeSlot: '全天休息 Closed',
    status: 'rest-day',
  },
];
