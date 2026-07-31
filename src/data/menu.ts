export interface MenuItem {
  id: string;
  nameCn: string;
  nameEn: string;
  category: 'roast-duck' | 'roast-meat' | 'braised' | 'combos' | 'sides-drinks' | 'topping';
  price: number;
  portion: string;
  descriptionCn: string;
  descriptionEn: string;
  image: string;
  tags: string[];
  availability: 'in-stock' | 'low-stock' | 'sold-out' | 'paused';
  availabilityLabelCn: string;
  isPopular?: boolean;
  isLimited?: boolean;
}

export interface Category {
  id: MenuItem['category'];
  nameCn: string;
  nameEn: string;
  iconName: string;
}

export const MENU_CATEGORIES: Category[] = [
  { id: 'roast-duck', nameCn: '招牌脆皮烧鸭', nameEn: 'Signature Roast Duck', iconName: 'Flame' },
  { id: 'roast-meat', nameCn: '烧肉与蜜汁叉烧', nameEn: 'Crispy Siew Yoke & Char Siu', iconName: 'Beef' },
  { id: 'braised', nameCn: '独家古法卤味', nameEn: 'Secret Braised Delicacies', iconName: 'Soup' },
  { id: 'combos', nameCn: '双拼/三拼豪华饭面', nameEn: 'Combo Rice & Noodle Sets', iconName: 'Utensils' },
  { id: 'topping', nameCn: '美味加料与单点', nameEn: 'Add-Ons & Side Items', iconName: 'PlusCircle' },
  { id: 'sides-drinks', nameCn: '靓汤与特调饮料', nameEn: 'Herbal Soups & Drinks', iconName: 'Coffee' },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'duck-whole',
    nameCn: '8分脆皮全鸭 (整只)',
    nameEn: 'Whole 8-Fen Crispy Roast Duck',
    category: 'roast-duck',
    price: 68.0,
    portion: '整只 Whole (适合4-6人)',
    descriptionCn: '选用优质大鸭，经12小时秘方腌制与特制风干，明火精烤至8分金黄脆皮。皮响肉嫩，鲜汁爆满，附送独家秘制烧鸭酱与酸梅酱。',
    descriptionEn: 'Premium large duck marinated for 12 hours with secret herbs, roasted over open fire. Crackling crispy skin with juicy tender meat.',
    image: '/assets/roast_duck_hero.jpg',
    tags: ['镇店之宝', '每日限量', '送礼首选'],
    availability: 'low-stock',
    availabilityLabelCn: '即将售完 Low Stock',
    isPopular: true,
    isLimited: true,
  },
  {
    id: 'duck-rice',
    nameCn: '八分脆皮烧鸭饭',
    nameEn: 'Signature Roast Duck Rice',
    category: 'roast-duck',
    price: 9.5,
    portion: '单人份 Single Portion',
    descriptionCn: '份量十足的现砍脆皮烧鸭，铺在香浓鸭油饭上，淋上秘制鸭汁，配黄瓜片与自家手拉辣椒酱。',
    descriptionEn: 'Generous serving of fresh sliced crispy roast duck over aromatic rice, drizzled with master sauce.',
    image: '/assets/roast_duck_hero.jpg',
    tags: ['街坊最爱', 'CP值爆表'],
    availability: 'in-stock',
    availabilityLabelCn: '今日供应中 In Stock',
    isPopular: true,
  },
  {
    id: 'siew-yoke-rice',
    nameCn: '金牌脆皮烧肉饭',
    nameEn: 'Golden Crispy Roast Pork Rice (Siew Yoke)',
    category: 'roast-meat',
    price: 10.0,
    portion: '单人份 Single Portion',
    descriptionCn: '五花肉皮层爆出黄金蜂窝状，咔嚓一声爆脆，肥瘦相间不腻口，配香米饭与老卤汁。',
    descriptionEn: 'Crispy roast pork belly rice with honeycomb golden crackling skin.',
    image: '/assets/siew_yoke.jpg',
    tags: ['咔嚓爆脆', '超值首选'],
    availability: 'in-stock',
    availabilityLabelCn: '今日供应中 In Stock',
    isPopular: true,
  },
  {
    id: 'char-siu-rice',
    nameCn: '蜜汁焦香叉烧饭',
    nameEn: 'Honey Glazed Char Siu Rice',
    category: 'roast-meat',
    price: 10.0,
    portion: '单人份 Single Portion',
    descriptionCn: '选用优质梅花肉，涂抹纯蜂蜜慢慢火炙烤，微焦边缘带出迷人麦芽甜香。',
    descriptionEn: 'Caramelized honey roasted pork rice with slightly charred edges.',
    image: '/assets/crispy_chicken.png',
    tags: ['蜜汁焦香', '肥瘦适中'],
    availability: 'in-stock',
    availabilityLabelCn: '今日供应中 In Stock',
  },
  {
    id: 'combo-2-meat',
    nameCn: '豪华双拼烧味饭 (烧鸭 + 烧肉/叉烧)',
    nameEn: 'Double Combo Rice (Duck + Siew Yoke/Char Siu)',
    category: 'combos',
    price: 13.0,
    portion: '单人份 Single Portion',
    descriptionCn: '一次满足两个愿望！招牌脆皮烧鸭搭配蜂窝烧肉或蜜汁叉烧，淋上双重精酿汁。',
    descriptionEn: 'Enjoy two legendary roast meat flavors in one box.',
    image: '/assets/siew_yoke.jpg',
    tags: ['超值双拼', '销量冠军'],
    availability: 'in-stock',
    availabilityLabelCn: '今日供应中 In Stock',
    isPopular: true,
  },
  {
    id: 'today-limited-trotter',
    nameCn: '今日限定：秘制古法卤猪脚饭',
    nameEn: 'Today Special: Braised Pork Trotter Rice',
    category: 'combos',
    price: 13.5,
    portion: '每日限量 30 份',
    descriptionCn: '慢火药材炖煮3小时，软烂入味，胶原蛋白满满，卤汁拌饭一绝！',
    descriptionEn: 'Slow braised pork trotter with collagen richness and master herbal gravy.',
    image: '/assets/braised_pork_trotter.jpeg',
    tags: ['今日限定', '售完即止'],
    availability: 'low-stock',
    availabilityLabelCn: '即售罄 Only 5 Left',
    isPopular: true,
    isLimited: true,
  },
  {
    id: 'add-meat',
    nameCn: '加料：加大份烧鸭肉 / 烧肉',
    nameEn: 'Add-On: Extra Roast Meat',
    category: 'topping',
    price: 5.0,
    portion: '加肉 Extra Meat',
    descriptionCn: '老饕必点！给爱吃肉的你准备的加料选项，爽快吃肉。',
    descriptionEn: 'Extra portion of roasted duck or siew yoke.',
    image: '/assets/braised_duck.jpg',
    tags: ['加料必点'],
    availability: 'in-stock',
    availabilityLabelCn: '供应中 In Stock',
  },
  {
    id: 'add-egg-tofu',
    nameCn: '加料：古法卤蛋 + 卤豆腐',
    nameEn: 'Add-On: Braised Egg & Tofu',
    category: 'topping',
    price: 2.5,
    portion: '一份 1 Egg + 1 Tofu',
    descriptionCn: '浸泡在老卤汁里的卤蛋与卤豆腐，吸满汤汁精华。',
    descriptionEn: 'Master stock braised egg and tofu.',
    image: '/assets/food_court_stall.jpeg',
    tags: ['拌饭神器'],
    availability: 'in-stock',
    availabilityLabelCn: '供应中 In Stock',
  },
  {
    id: 'sour-soup',
    nameCn: '老火咸菜酸辣鸭骨汤',
    nameEn: 'Salted Vegetable & Duck Bone Soup',
    category: 'sides-drinks',
    price: 6.0,
    portion: '一碗 Per Bowl',
    descriptionCn: '用烤鸭骨架配上精选咸菜、番茄、酸梅慢火熬煮，开胃解腻。',
    descriptionEn: 'Simmered roast duck carcass with sour mustard greens.',
    image: '/assets/food_court_stall.jpeg',
    tags: ['解腻开胃'],
    availability: 'in-stock',
    availabilityLabelCn: '供应中 In Stock',
  },
];
