export interface CollaborationOption {
  id: string;
  titleCn: string;
  titleEn: string;
  targetAudience: string;
  descriptionCn: string;
  benefits: string[];
  iconName: string;
}

export const COLLABORATION_OPTIONS: CollaborationOption[] = [
  {
    id: 'coffee-shop-stall',
    titleCn: '茶餐室 / 美食中心档口进驻',
    titleEn: 'Coffee Shop & Food Court Stall Partnership',
    targetAudience: '雪隆区茶餐室东主、美食中心负责人',
    descriptionCn: '您的茶餐室需要吸引稳定的午餐人流？“8分脆皮烧鸭”提供成熟的档口运营模式、稳定的烧制品质与品牌口碑，为您的茶餐室带来高频复购的街坊食客。',
    benefits: [
      '自带高频午餐人流与口碑效应',
      '规范化档口卫生与标准砍鸭流线',
      '合作模式灵活，共享客流红利',
    ],
    iconName: 'Store',
  },
  {
    id: 'food-truck-event',
    titleCn: '餐车社区市集与活动开炉',
    titleEn: 'Food Truck Event & Pop-Up Invitation',
    targetAudience: '市集策展人、商场活动经理、社区主办方',
    descriptionCn: '邀请八分烧鸭餐车驶入您的市集或户外活动！现场现砍现卖的热气腾腾烧鸭饭，是整个活动场地最具吸引力的烟火气焦点。',
    benefits: [
      '现场爆脆剁鸭声与烤香聚拢人气',
      '自带餐车与全套自给能源设备',
      '符合严格食品安全与卫生标准',
    ],
    iconName: 'Truck',
  },
  {
    id: 'corporate-catering-partner',
    titleCn: '企业团体午餐与长期便当供应',
    titleEn: 'Corporate Lunch & Long-Term Meal Supply',
    targetAudience: '行政HR、企业福利采购、工厂与办公大楼',
    descriptionCn: '为您的团队提供高性价比、美味管饱的每日烧味午餐盒。支持定期配送或每周指定日专车送达。',
    benefits: [
      '份量十足，CP值极高',
      '支持按月结算与官方发票开具',
      '准时温热送达',
    ],
    iconName: 'Building',
  },
];
