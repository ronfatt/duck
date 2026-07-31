export interface FAQItem {
  questionCn: string;
  questionEn: string;
  answerCn: string;
  answerEn: string;
}

export const FAQS: FAQItem[] = [
  {
    questionCn: '为什么叫“8分脆皮烧鸭”？是没烤熟吗？',
    questionEn: 'Why is it called 8-Fen Crispy Duck?',
    answerCn: '绝对全熟！“8分脆皮”是指烤制工艺的黄金平衡点——烤鸭皮达8分极致酥脆，同时保留鸭肉10分饱满汁水。若烤得过火（10分全脆），鸭肉水分便会干柴。',
    answerEn: 'It is 100% cooked! "8-Fen" represents the golden balance where skin achieves 80% crackling crispness while retaining 100% meat juiciness.',
  },
  {
    questionCn: '烧鸭是每天新鲜出炉吗？会卖隔夜鸭吗？',
    questionEn: 'Is the duck freshly roasted daily?',
    answerCn: '我们坚决不卖隔夜鸭！所有分行与档口每日分为早市（9:30 AM）与午市（12:00 PM）两批明火现烤出炉，现场剁斩售卖。',
    answerEn: 'We strictly guarantee no overnight meat. All ducks are freshly roasted twice daily at 9:30 AM and 12:00 PM.',
  },
  {
    questionCn: '如何预订节日全鸭或公司午餐盒？',
    questionEn: 'How to pre-order whole ducks or catering?',
    answerCn: '您可以通过网站上的【联系预订】页面填写表单，或直接点击 WhatsApp 按钮发送数量与取货日期即可。',
    answerEn: 'You can pre-order through our website Contact form or click WhatsApp to confirm quantity and date.',
  },
  {
    questionCn: '未来八分烧鸭餐车会到哪个社区开炉？',
    questionEn: 'Where will the food truck go next?',
    answerCn: '您可以查看网站【烧鸭餐车】页面的每周路线表，或提交【邀请餐车过来】表单，我们达到一定预订数后会安排驶入您的社区！',
    answerEn: 'Check our Food Truck page schedule or submit an invitation request to bring our truck to your neighborhood.',
  }
];
