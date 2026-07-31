# 8分脆皮烧鸭 / 8 Fen Crispy Roast Duck - 品牌官方网站与运营指南

本项目为 **8分脆皮烧鸭 (8 Fen Crispy Roast Duck)** 打造的官方品牌网站与流量转化平台。
围绕 **“小档口，大火候。”** 品牌核心理念设计，旨在将 Facebook、TikTok、Instagram 及 Google Search 访问者高效转化为线下档口食客、餐车巡回追随者与商业合作伙伴。

---

## 🚀 快速启动 Quick Start

### 1. 本地运行开发服务器
```bash
cd website
npm run dev
```
访问：[http://localhost:3000](http://localhost:3000)

### 2. 构建生产版本 Production Build
```bash
npm run build
npm start
```

---

## 📄 13 大页面与路由 Architecture

| 路由 Route | 页面名称 Page Name | 核心功能 Description |
| :--- | :--- | :--- |
| `/` | **首页 Home** | 12大核心板块（Hero、今日状态卡、今日出炉状态、招牌商品、小档口优势、真实档口烟火气、烧鸭雷达定位、餐车巡回、视频影音、食客评价、团体包餐、场地合作、终极导航CTA） |
| `/today` | **今天去哪里吃 Today's Location** | 实时查看今日开炉档口、出炉时间表、营业状态与 Waze / Google Maps 导航 |
| `/menu` | **美味菜单 Menu** | 分类菜单（招牌必吃、加料单点、团体套餐）、实时库存状态标签（今日供应中/即将售完/今日售罄）、价格提示 |
| `/locations` | **分行档口 Locations** | 区域筛选（吉隆坡/雪兰莪）、档口实时状态、Waze 与 Google Maps 导航按钮 |
| `/locations/[slug]` | **分行详情 Location Detail** | SEO 本地优化页面（蕉赖太子园、甲洞、沙登新村、安邦大街等），包含停车指引与周边地标 |
| `/food-truck` | **烧鸭餐车 Food Truck** | “今天在这里，明天香到你那里。” 每周巡回路线表、停车点及【社区邀请表格】 |
| `/story` | **小档口故事 Our Story** | 阿和师傅工艺、为什么叫“8分脆皮”（8分脆皮10分口感）、三大品牌坚持 |
| `/videos` | **现场视频 Videos** | 斩鸭爆汁实录、出炉视频、博主探店及标有 AI 提示的创意美食短片库 |
| `/catering` | **团体包餐与活动 Catering** | 办公便当盒、全鸭宴套餐、餐车现场开炉预订及询价表单 |
| `/collaboration` | **档口与场地合作 Collaboration** | 茶餐室档口进驻、餐车市集合作、企业午餐便当合作及申请表单 |
| `/contact` | **联系预订 Contact** | 快捷电话热线、WhatsApp 官方通道及全鸭预订表单 |
| `/privacy` | **隐私政策 Privacy** | 顾客数据保护与表单收集说明 |
| `/terms` | **服务条款 Terms & Disclaimer** | 价格及供应变动提示、AI 宣传短片免责声明 |

---

## 🛠️ 数据配置与修改指南 Data Editing Guide

所有动态数据均存储在 `src/data/` 目录中，方便日后接入 Supabase、Firebase 或 Headless CMS，也可直接修改本地 TS 文件：

### 1. 修改今日营业状态与实时档口 (`src/data/today.ts`)
```typescript
export const TODAY_STATUS = {
  activeLocationNameCn: '蕉赖太子园总店 (123美食中心档口)',
  operatingHours: '7:00 AM – 1:30 PM (售完即止)',
  isOpenNow: true,
  statusBadgeTextCn: '今日热烈供应中 · 烟火开炉',
  wazeUrl: 'https://waze.com/ul/hw283e1234',
  googleMapsUrl: 'https://maps.google.com/?q=Taman+Muda+Cheras+Food+Court',
};
```

### 2. 修改每周餐车巡回路线 (`src/data/foodtruck.ts`)
```typescript
export const FOOD_TRUCK_SCHEDULE = [
  {
    dayCn: '星期一 Monday',
    areaCn: '安邦 Ampang Commercial Centre',
    locationDetailsCn: '安邦大街商业区大路旁停车位',
    timeSlot: '11:00 AM – 2:00 PM',
    status: 'active',
  },
  // 修改或增加其他天数的路线...
];
```

### 3. 修改菜品价格与库存状态 (`src/data/menu.ts`)
每个菜品包含 `availability` 属性：
- `'in-stock'` (今日供应中)
- `'low-stock'` (即将售完)
- `'sold-out'` (今日售罄)
- `'paused'` (暂停供应)

### 4. 替换图片与视频素材 (`public/assets/`)
只需将新的图片或视频覆盖至 `public/assets/` 文件夹中：
- 招牌鸭 Hero: `roast_duck_hero.jpg`
- 阿和师傅照: `master_ah_ho.png`
- 档口实景: `stall_front.png`
- 美食中心: `food_court_stall.jpeg`
- 砍鸭视频: `roast_duck_chopping.mp4`

### 5. 替换 WhatsApp 联系号码
全局将 `60168888888` 替换为您品牌的真实 WhatsApp 电话号码。

---

## 🎨 品牌色彩与设计规范 Color System

- **深烤鸭红 Deep Roast Red**: `#8B1E17` / `#9E1B1B`
- **焦糖金 Caramel Gold**: `#D97706` / `#F59E0B`
- **炭黑底色 Charcoal Black**: `#0F0F10` / `#18181B`
- **暖米白 Warm Rice White**: `#FAFAF9` / `#FFFDF9`
- **葱绿点缀 Fresh Green Accent**: `#15803D`
