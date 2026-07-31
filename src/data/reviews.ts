/**
 * CUSTOMER REVIEWS DATASET
 * 
 * NOTE FOR DEVELOPERS & CLIENT:
 * The reviews listed below are development placeholders reflecting authentic Malaysian diner feedback.
 * Replace these placeholders with real verified feedback from:
 * 1. Google Maps / Business Profile Reviews
 * 2. Facebook Page Customer Comments
 * 3. TikTok Diner Video Reviews
 */

export interface Review {
  id: string;
  authorInitials: string;
  authorRole: string;
  rating: number;
  date: string;
  contentCn: string;
  contentEn: string;
  source: 'Google Review' | 'Facebook Diner' | 'TikTok Review';
  branchName: string;
  googleReviewUrlPlaceholder: string;
}

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    authorInitials: 'K. L.',
    authorRole: '街坊老饕 Local Diner',
    rating: 5,
    date: '2026-07-20',
    contentCn: '在蕉赖太子园123美食中心吃到最顶的烧鸭！皮响的声音真的不是打效果，刀一砍下去那个脆皮声巨夸张，肉完全不会柴，RM9.50给这个份量太实在了！',
    contentEn: 'Best roast duck in Cheras Taman Muda 123 Food Court! Crackling skin sound is real, juicy meat, RM9.50 is amazing value.',
    source: 'Google Review',
    branchName: '蕉赖太子园总店',
    googleReviewUrlPlaceholder: 'https://maps.google.com/?q=Taman+Muda+Cheras+Food+Court',
  },
  {
    id: 'rev-2',
    authorInitials: 'M. C.',
    authorRole: '附近上班族 Office Diner',
    rating: 5,
    date: '2026-07-15',
    contentCn: '午餐时间打包双拼饭（烧鸭+烧肉），带回办公室皮居然还是脆的！师傅处理得很卫生，手拉辣椒酱够辣够香，超级开胃。',
    contentEn: 'Packed back to office and the skin was STILL crackling crispy! Chili sauce is legendary.',
    source: 'Facebook Diner',
    branchName: '甲洞大都会店',
    googleReviewUrlPlaceholder: 'https://maps.google.com/?q=Kepong+Food+Court',
  },
  {
    id: 'rev-3',
    authorInitials: 'D. T.',
    authorRole: '熟客 Resident',
    rating: 5,
    date: '2026-07-02',
    contentCn: '吃了二三十年烧腊，8分脆皮烧鸭的风干工艺确实有一手。皮脆而不硬，鸭肉入味无腥味，淋上那勺灵魂鸭汁，赞！',
    contentEn: 'Eating roast meats for 30 years and 8-Fen duck really mastered the drying and roasting process.',
    source: 'Google Review',
    branchName: '沙登新村店',
    googleReviewUrlPlaceholder: 'https://maps.google.com/?q=Seri+Kembangan',
  }
];
