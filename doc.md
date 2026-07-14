[![景點 ｜北港 北港朝天宮 媽祖廟 在信仰之後.是一棟非常有美學藝術的廟宇建築! - PAPA女王 Vs. 喵星人N](https://images.openai.com/static-rsc-4/0ykfD9LBtEKPjtSCQVkDZtA4J_Wgs2EeJXf5B6msHyU4WJACHav5636-aimAUczFamSE0c0tMQCCYIZZbq342S8QUCAw1XyTQlM0jSe9ymgHl0NPxp_envxvJAXtiEN1960y8cIvj5bO-pAPXK_YhcpLN5S26IXoWvfweZPKpTg?purpose=inline)](https://papacat.xyz/5913-%E6%99%AF%E9%BB%9E-%EF%BD%9C%E5%8C%97%E6%B8%AF-%E5%8C%97%E6%B8%AF%E6%9C%9D%E5%A4%A9%E5%AE%AE-%E5%AA%BD%E7%A5%96%E5%BB%9F-%E5%9C%A8%E4%BF%A1%E4%BB%B0%E4%B9%8B%E5%BE%8C-%E5%85%B6%E5%AF%A6%E4%BB%96/?utm_source=chatgpt.com)

# beigangoldstreet.com 完整建站方案

## 一、最终定位

### 网站名称

**北港老街指南**

英文副标题：

**Beigang Old Street Guide**

建议品牌标语：

> **停車、美食、交通、廁所與一日遊**

首页 H1：

> **北港老街旅遊指南：停車、美食、交通、景點與一日遊**

网站定位：

> 一个服务北港游客的非官方实用景点站，帮助用户在出发前和抵达现场后，快速解决停车、公厕、交通、营业时间、美食、行程和活动管制等问题。

北港老街的实际范围以朝天宫庙口到北港大桥一带为主，历史上是通往北港溪港口的商业通道，沿街仍保留部分二层式街屋，并形成麻油、糕饼、小吃和宗教用品商圈。因此，网站视觉不能只做成一般旅游博客，而应同时表现**信仰、商业老街、传统工艺和真实生活感**。([慢遊雲林][1])

网站页脚和关于页面必须明确写：

> 本站为北港老街非官方旅遊資訊網站，與北港朝天宮、雲林縣政府及任何公家機關無隸屬關係。營業時間、交通與活動資訊可能臨時調整，出發前請以現場及主辦單位公告為準。

---

# 二、品牌与视觉方向

## 核心视觉概念

北港老街不适合以下常见风格：

* 通用蓝白色旅游网站
* 过度仿古的深红金色宫庙网站
* 日式文青老街风
* 满屏龙、神像、香炉和金色纹样
* 看起来像政府官方网站的设计

更合适的方向是：

> **现代地方导览设计 + 北港庙埕色彩 + 老街生活质感**

北港的视觉重点应来自：

* 朝天宫屋脊和剪黏轮廓
* 中山路通往庙口的街道透视
* 红灯笼
* 旧砖墙和米白街屋
* 麻油和糕饼的暖金色
* 北港溪与传统青绿色
* 艺阁、灯会和宗教工艺

北港工艺坊本身就是围绕当地宗教工艺、历史街巷和地方文化形成的展示据点；农历三月的北港迎妈祖又包含艺阁、阵头和民俗表演，这些元素可以成为设计语言，但不应直接堆砌在每个页面。([慢遊雲林][2])

## 建议配色

```css
:root {
  --bg-paper: #f7f0e3;
  --bg-warm: #efe1cc;
  --text-ink: #2f2924;
  --text-muted: #6f655c;

  --beigang-red: #9f2f24;
  --lantern-red: #c64735;
  --sesame-gold: #b78336;
  --temple-gold: #d5ad57;
  --river-green: #42675d;
  --brick-brown: #7a4b38;

  --border-soft: #d9c9b5;
  --surface: #fffaf2;

  --status-open: #3f6e58;
  --status-notice: #a66b22;
  --status-alert: #a83a2d;
}
```

配色使用原则：

* 主背景以米白和纸张色为主。
* 红色用于品牌、按钮和重要标题。
* 金色只做细节，不能大面积铺满。
* 青绿色用于地图、正常状态和河岸内容。
* 警告状态使用橙红，不要让所有卡片都变成红色。

## 字体建议

网站正文优先使用系统字体，减少外部字体请求：

```css
body {
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "PingFang TC",
    "Noto Sans TC",
    "Microsoft JhengHei",
    sans-serif;
}

h1,
h2,
h3 {
  font-family:
    "Noto Serif TC",
    "Songti TC",
    "PMingLiU",
    serif;
}
```

标题可以使用宋体风格，正文必须使用易读的黑体。不要把书法字体用于长文。

---

# 三、Logo 设计建议

## Logo 构成

建议制作三个版本：

1. 横版 Logo：网站页头使用
2. 方形图标：社交账号和 OG 头像
3. 简化 favicon：浏览器标签使用

图形可以由以下元素组合：

* 简化的朝天宫屋顶轮廓
* 一盏红灯笼
* 从老街延伸向庙口的两条透视线
* “北港老街”四字

不要直接使用：

* 朝天宫官方标志
* 妈祖神像
* 宫庙印章
* 官方活动 Logo
* 过于复杂的龙凤剪黏图案

推荐 Logo 文字：

```text
北港老街
BEIGANG OLD STREET GUIDE
```

图标的核心识别应该是“街道通往庙宇”，而不是单独一座庙。这能体现网站涵盖老街、美食、交通和周边景点，而不仅是朝天宫介绍站。

---

# 四、首页完整结构

## 1. 顶部提醒栏

用于显示临时资讯：

> 北港大型活動期間可能實施交通管制，出發前請查看最新活動資訊。

提醒栏只在确实有重要信息时出现，不要全年挂着红色警告。

## 2. 页头导航

桌面端导航：

```text
首頁
停車
交通
美食
景點
行程
地圖
活動
```

手机端建议保留底部固定导航：

```text
首頁｜地圖｜停車｜美食｜行程
```

## 3. Hero 首屏

背景图使用：

> 从中山路朝向北港朝天宫拍摄的街景。

这比朝天宫单独正面照更能表现“北港老街”。

首屏文案：

```text
北港老街旅遊指南

停車、美食、交通、廁所與一日遊，
第一次來北港也能快速規劃行程。
```

按钮：

```text
查看停車場
開啟旅遊地圖
規劃一日遊
```

Hero 不要铺满整个屏幕，手机端控制在约480至560px高度，避免用户看不到实用入口。

## 4. 最新整理状态

标题不要写“实时资讯”，因为这是纯静态站。

建议写：

```text
最新旅遊資訊
最後整理：2026年7月14日
```

显示四张状态卡：

| 项目 | 显示内容        |
| -- | ----------- |
| 停车 | 推荐停车区域及施工提醒 |
| 交通 | 接驳、公车和管制情况  |
| 景点 | 临时休馆或开放变化   |
| 活动 | 当前节庆和进香资讯   |

每个状态都必须有：

* 最后核实日期
* 信息来源
* “现场公告为准”说明
* `正常、注意、施工、未知`状态

不要根据普通营业时间自动显示“营业中”，否则遇到临时休息会产生错误。

## 5. 四个核心快捷入口

使用大尺寸图标卡片：

```text
哪裡停車
哪裡有廁所
今天吃什麼
第一次怎麼逛
```

这四个入口应出现在首屏下方，不要先展示历史长文。

## 6. 第一次来北港

制作一个简单流程：

```text
停車
↓
北港朝天宮
↓
中山路老街
↓
巷弄與工藝景點
↓
美食與伴手禮
```

提供三个路线按钮：

* 2小时快速路线
* 半日经典路线
* 北港完整一日游

## 7. 北港老街地图

首页先使用轻量的 SVG 示意地图，标出：

* 朝天宫
* 中山路老街
* 北港大桥
* 游客中心
* 工艺坊
* 水道头
* 主要停车区域
* 公厕

互动地图放在独立的 `/map/` 页面，不要让首页直接加载大型地图脚本。

## 8. 按时间找美食

不要只做“十大美食”。

首页按时间展示：

```text
早上吃什麼
中午吃什麼
下午茶與冰品
晚餐還有哪些店
```

例如：

* 早餐：煎盘粿、麵线糊、土豆油饭
* 午餐：鸭肉饭、假鱼肚、羹汤
* 下午：花生、麻荖、传统饼铺
* 晚上：仍营业的餐厅和夜间小吃

## 9. 精选景点

首页展示6至8个，不要一次列几十个：

* 北港朝天宫
* 北港老街
* 北港游客中心
* 北港工艺坊
* 水道头文化园区
* 北港女儿桥
* 北港义民庙
* 大复戏院

## 10. 活动专区

重点覆盖：

* 北港灯会
* 北港迎妈祖
* 各地进香团抵达
* 艺阁活动
* 糕饼麻油节
* 交通与道路管制

活动页面需要把“活动介绍”和“游客怎么应对”分开。

## 11. FAQ

首页最后处理高频问题：

* 北港老街需要门票吗？
* 北港老街几点去最好？
* 北港老街晚上还有店吗？
* 朝天宫附近哪里停车？
* 从高铁嘉义站怎么到北港？
* 带长辈适合走哪条路线？
* 北港老街哪里有厕所？
* 下雨天还能玩吗？

---

# 五、网站信息架构

## 顶级栏目

```text
/
├── parking/
├── toilets/
├── transport/
├── map/
├── food/
├── souvenirs/
├── attractions/
├── itineraries/
├── events/
├── updates/
├── guides/
├── faq/
└── about/
```

## 第一阶段页面

### 实用信息

```text
/parking/
/toilets/
/transport/
/opening-hours/
/map/
/accessibility/
/family/
/rainy-day/
```

### 行程规划

```text
/itineraries/first-visit/
/itineraries/two-hours/
/itineraries/half-day/
/itineraries/one-day/
/itineraries/family/
/itineraries/seniors/
/itineraries/photography/
```

### 美食内容

```text
/food/
/food/breakfast/
/food/duck-rice/
/food/jian-pan-guo/
/food/noodle-paste/
/food/fish-maw-soup/
/food/desserts/
/food/dinner/
```

### 伴手礼

```text
/souvenirs/
/souvenirs/sesame-oil/
/souvenirs/peanuts/
/souvenirs/traditional-cakes/
```

### 景点页面

```text
/attractions/beigang-old-street/
/attractions/chaotian-temple/
/attractions/visitor-center/
/attractions/beigang-craft/
/attractions/waterworks-cultural-park/
/attractions/daughter-bridge/
/attractions/tourist-bridge/
/attractions/yimin-temple/
/attractions/dafu-theater/
/attractions/wude-temple/
```

### 活动页面

```text
/events/
/events/beigang-lantern-festival/
/events/beigang-mazu-procession/
/events/pilgrimage-season/
/events/traffic-control/
```

### 信任页面

```text
/about/
/editorial-policy/
/corrections/
/sources/
/privacy/
/contact/
```

---

# 六、每类页面的标准模板

## 景点页

页面顶部先给出实用信息：

```text
開放時間
門票
建議停留
地址
距離朝天宮
最近停車場
最近廁所
無障礙情況
最後核實
```

正文结构：

```text
## 這個景點值得去嗎？
## 主要看什麼？
## 建議停留多久？
## 怎麼走？
## 哪裡最好拍？
## 帶長輩或小孩方便嗎？
## 附近還可以去哪裡？
## 資訊來源與更新日期
```

不要先写1000字历史，再把地址放到文章底部。

## 停车页

停车场列表至少包含：

| 字段    | 内容                  |
| ----- | ------------------- |
| 当前状态  | 正常、施工、活动限制、未知       |
| 车辆类型  | 汽车、机车、大客车           |
| 收费    | 现场收费或已确认价格          |
| 开放时间  | 固定或活动限定             |
| 步行距离  | 到朝天宫约几分钟            |
| 公厕    | 有、无、附近              |
| 地面    | 柏油、碎石、草地            |
| 遮阳    | 有、少量、无              |
| 无障碍车位 | 已确认、未确认             |
| 最后核实  | 日期                  |
| 导航    | Google Maps、Apple地图 |

排序方式：

1. 当前可用性
2. 距离朝天宫
3. 车型
4. 费用

不要单纯按照“推荐排名”排序。

## 公厕页

公厕字段：

* 开放时间
* 是否无障碍
* 是否有尿布台
* 是否需要消费
* 距离朝天宫
* 入口位置照片
* 最后核实时间

这是很容易获得长尾流量，也最能形成站点实用价值的页面。

## 美食页

每家店记录：

* 主打品项
* 适合早餐、午餐或晚餐
* 常见营业时间
* 可能售完时间
* 内用或外带
* 是否有冷气
* 付款方式
* 预算范围
* 从朝天宫步行时间
* 最近一次核实
* 不是“实时排队情况”

不要使用未经许可的点评网站评分，也不要把网络评论改写成“在地人都推荐”。

## 行程页

采用时间轴：

```text
08:00 北港早餐
09:00 北港朝天宮
10:00 中山路老街
11:00 工藝坊與巷弄
12:00 北港午餐
14:00 水道頭文化園區
16:30 女兒橋與河岸
```

每个节点包含：

* 步行时间
* 停留时间
* 公厕
* 休息点
* 雨天替代方案
* Google／Apple导航按钮

---

# 七、互动地图方案

## 首页地图

使用自己绘制的 SVG 导览图，优点是：

* 加载速度快
* 风格统一
* 无需API Key
* 可以清楚表现步行关系
* 不会让地图抢走页面视觉重点

## 完整地图页

`/map/` 可以使用 MapLibre 或 Leaflet，但只在该页面加载脚本。

地图图层：

```text
景點
美食
早餐
停車場
公廁
無障礙廁所
拍照點
公車站
休息點
伴手禮
施工與管制
```

地图点打开后显示：

```text
名稱
分類
目前狀態
步行距離
營業時間
最後核實
查看詳情
開始導航
```

建议将地点数据在构建时输出为：

```text
/public/data/map-places.json
```

用户点击筛选时由浏览器读取，不需要后端。

不要在每篇文章嵌入完整地图。景点页只放静态小地图和外部导航按钮。

---

# 八、Astro 技术方案

## 最终技术栈

```text
Astro
TypeScript
Astro Content Collections
原生 Astro Components
原生 CSS / CSS Variables
少量 Vanilla JavaScript
Cloudflare Pages
GitHub
```

不建议首发加入：

* React
* Vue
* 数据库
* Cloudflare D1
* Pages Functions
* 登录系统
* 在线后台
* 大型UI组件库

这类地方景点站的大部分内容都能在构建阶段完成。

Astro 的静态站不需要安装 Cloudflare adapter；Content Collections 可以从 Markdown、MDX、JSON、YAML 等本地内容中加载并提供类型检查，适合管理景点、美食和停车资料。([docs.astro.build][3])

## 初始化

```bash
pnpm create astro@latest beigang-old-street
cd beigang-old-street

pnpm astro add sitemap
pnpm install
pnpm dev
```

初始化选择：

```text
Template: Empty
TypeScript: Strict
Install dependencies: Yes
Initialize Git: Yes
```

## Astro 配置

```js
// astro.config.mjs
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://beigangoldstreet.com",
  output: "static",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  integrations: [sitemap()],
});
```

必须设置 `site`，否则 canonical、sitemap 和社交分享地址容易出现相对路径问题。

---

# 九、推荐项目目录

```text
beigang-old-street/
├── public/
│   ├── favicon.svg
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   ├── manifest.webmanifest
│   ├── robots.txt
│   ├── _headers
│   ├── _redirects
│   ├── maps/
│   └── data/
│
├── src/
│   ├── assets/
│   │   ├── brand/
│   │   ├── attractions/
│   │   ├── food/
│   │   ├── parking/
│   │   ├── toilets/
│   │   └── og/
│   │
│   ├── components/
│   │   ├── layout/
│   │   ├── cards/
│   │   ├── map/
│   │   ├── seo/
│   │   ├── place/
│   │   └── common/
│   │
│   ├── content/
│   │   ├── attractions/
│   │   ├── food/
│   │   ├── parking/
│   │   ├── toilets/
│   │   ├── events/
│   │   ├── itineraries/
│   │   ├── guides/
│   │   └── updates/
│   │
│   ├── data/
│   │   ├── site.ts
│   │   ├── navigation.ts
│   │   ├── alerts.json
│   │   └── map-categories.ts
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── PlaceLayout.astro
│   │   ├── GuideLayout.astro
│   │   └── ArticleLayout.astro
│   │
│   ├── pages/
│   ├── styles/
│   │   ├── tokens.css
│   │   ├── global.css
│   │   ├── typography.css
│   │   └── utilities.css
│   │
│   ├── utils/
│   │   ├── dates.ts
│   │   ├── seo.ts
│   │   ├── maps.ts
│   │   └── schema.ts
│   │
│   └── content.config.ts
│
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

---

# 十、内容数据模型

## 景点数据示例

```yaml
title: 北港朝天宮
description: 北港老街核心景點與重要媽祖信仰中心。
category: temple

address: 雲林縣北港鎮中山路178號

geo:
  lat: 23.568
  lng: 120.304

admission:
  type: free
  note: 免費參觀

openingHours:
  summary: 每日開放，實際時間以廟方公告為準

recommendedDuration: 60
walkMinutesFromChaotianTemple: 0

facilities:
  toilet: true
  accessibleToilet: unknown
  babyChanging: unknown
  seating: true

accessibility:
  wheelchair: partial
  stroller: partial
  note: 大型活動期間人潮密集

photo:
  bestTime: 清晨或傍晚
  note: 避免阻礙參拜與祭祀動線

status: open
verifiedAt: 2026-07-14
updatedAt: 2026-07-14

officialUrl: ""
mapUrl: ""
sourceUrls: []
```

## 状态枚举

```ts
type PlaceStatus =
  | "open"
  | "limited"
  | "temporarily-closed"
  | "construction"
  | "seasonal"
  | "unknown";
```

前端文字：

```ts
const statusLabels = {
  open: "正常開放",
  limited: "部分開放",
  "temporarily-closed": "暫停開放",
  construction: "施工調整",
  seasonal: "期間限定",
  unknown: "尚待確認",
};
```

宁愿显示“尚待确认”，也不要根据旧资料推断状态。

## Content Collections 配置示意

```ts
// src/content.config.ts
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const attractions = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/attractions",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),

    address: z.string(),
    geo: z.object({
      lat: z.number(),
      lng: z.number(),
    }),

    recommendedDuration: z.number().optional(),
    status: z.enum([
      "open",
      "limited",
      "temporarily-closed",
      "construction",
      "seasonal",
      "unknown",
    ]),

    verifiedAt: z.coerce.date(),
    updatedAt: z.coerce.date(),

    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  attractions,
};
```

Astro 的 `glob()` loader 支持本地 Markdown、MDX、JSON、YAML 和 TOML，适合把不同类型资料拆成可维护的独立文件。([docs.astro.build][4])

---

# 十一、组件设计

建议优先完成这些组件：

```text
SiteHeader.astro
MobileBottomNav.astro
SiteFooter.astro

Hero.astro
QuickActions.astro
LatestNotice.astro
StatusBadge.astro
VerifiedDate.astro

AttractionCard.astro
FoodCard.astro
ParkingCard.astro
ToiletCard.astro
ItineraryCard.astro

QuickFacts.astro
OpeningHours.astro
FacilityList.astro
NavigationButtons.astro
NearbyPlaces.astro

Breadcrumbs.astro
SEOHead.astro
JsonLd.astro
SourceList.astro
```

所有信息卡片采用统一顺序：

```text
名称
一句话说明
状态
关键资料
步行时间
最后核实
详情按钮
```

---

# 十二、图片规范

## 图片来源

首发尽量使用原创图片，尤其是：

* 朝天宫和中山路街景
* 停车场入口
* 公厕入口
* 公车站牌
* 店家外观
* 菜单和价格
* 路面与无障碍状况
* 路线转弯点
* 夜间街景

搜索结果或旅游博客图片只能用于设计研究，不能直接复制到网站。

## 建议尺寸

| 用途      |     比例 |      建议尺寸 |
| ------- | -----: | --------: |
| 首页 Hero |   16:9 | 1920×1080 |
| OG 图片   | 1.91:1 |  1200×630 |
| 景点封面    |    4:3 |  1200×900 |
| 卡片图     |    4:3 |   800×600 |
| 店家外观    |    3:2 |  1200×800 |
| 地图入口图   |   16:9 |  1200×675 |
| Logo    |    SVG |        矢量 |

使用 Astro 的 `<Image />` 或 `<Picture />` 组件生成响应式尺寸和现代图片格式，并为所有图片写明宽高，减少布局移动。([docs.astro.build][5])

示例：

```astro
---
import { Picture } from "astro:assets";
import hero from "../assets/attractions/beigang-street.jpg";
---

<Picture
  src={hero}
  formats={["avif", "webp"]}
  widths={[640, 960, 1280, 1600]}
  sizes="100vw"
  alt="從北港中山路望向北港朝天宮的老街街景"
  loading="eager"
/>
```

---

# 十三、SEO 与 GEO 结构

## 首页 SEO

```text
SEO Title:
北港老街指南｜停車、美食、交通、景點與一日遊

Meta Description:
北港老街非官方旅遊指南，整理朝天宮附近停車場、公廁、交通、美食、營業時間、景點地圖及半日、一日遊路線。

H1:
北港老街旅遊指南
```

## 页面标题格式

```text
北港老街停車場攻略｜位置、費用與步行時間

北港老街美食指南｜早餐、鴨肉飯與伴手禮

北港朝天宮怎麼去？高鐵、公車與自駕交通

北港一日遊路線｜朝天宮、老街與水道頭
```

不要把每个标题都写成：

```text
2026最新北港老街超完整必吃必玩懶人包
```

除非内容确实按年度重新核实，否则年份会增加维护成本。

## 每页正文结构

所有核心页面采用：

```text
直接答案
快速資訊卡
主要内容
地图或路线
常见问题
最后核实
资料来源
```

每个H2尽量对应用户问题：

```text
## 北港老街哪裡停車最方便？
## 停車場走到朝天宮要多久？
## 進香期間還能開車進去嗎？
```

## Canonical

每页只输出一个 canonical：

```html
<link
  rel="canonical"
  href="https://beigangoldstreet.com/parking/"
/>
```

`www`、`pages.dev`和参数地址全部统一到主域名，避免重复索引。Google建议通过 canonical、重定向和一致的站点地图信号来明确首选URL。([Google for Developers][6])

## Sitemap 与 robots.txt

```txt
User-agent: *
Allow: /

Sitemap: https://beigangoldstreet.com/sitemap-index.xml
```

部署后检查实际生成的 sitemap 文件名，再提交到 Google Search Console。Google建议通过 Search Console、robots.txt 或其他支持方式提交 sitemap。([Google for Developers][7])

## 结构化数据

建议使用：

| 页面   | Schema                       |
| ---- | ---------------------------- |
| 首页   | `WebSite`                    |
| 景点页  | `TouristAttraction`、`Place`  |
| 活动页  | `Event`                      |
| 指南文章 | `Article`                    |
| 面包屑  | `BreadcrumbList`             |
| 餐饮店  | `Restaurant`或`LocalBusiness` |
| 行程列表 | `ItemList`                   |

注意：

* `TouristAttraction`可以帮助表达页面实体。
* 不代表一定会出现Google富媒体结果。
* 只标注页面上真实可见的内容。
* 不为本站本身虚构实体地址或LocalBusiness。
* 不添加未经证实的评分和Review数据。

Google明确表示，结构化数据用于帮助搜索引擎理解页面，并且只有符合受支持类型和规范的页面才可能获得富媒体展示。([Google for Developers][8])

---

# 十四、语言与在地用词

首发只做繁体中文台湾版：

```html
<html lang="zh-Hant-TW">
```

全站统一使用台湾常见用语：

| 不建议  | 网站用语  |
| ---- | ----- |
| 停车   | 停車    |
| 洗手间  | 廁所／公廁 |
| 公交   | 公車    |
| 打车   | 搭計程車  |
| 开放时间 | 開放時間  |
| 营业时间 | 營業時間  |
| 地铁   | 捷運    |
| 视频   | 影片    |
| 信息   | 資訊    |
| 导航   | 導航    |
| 无障碍  | 無障礙   |

首发不建议同时上线英文、日文和简体中文。先把繁体中文资料做完整，再扩展：

```text
/en/
/ja/
```

上线多语言后，应使用对应的 `hreflang` 标记，并确保各语言是完整本地化内容，而不是机械翻译薄页。([Google for Developers][9])

---

# 十五、Cloudflare Pages 部署

## Pages 构建配置

GitHub仓库连接 Cloudflare Pages 后设置：

```text
Production branch: main
Build command: pnpm build
Build output directory: dist
Root directory: /
```

Cloudflare官方的Astro Pages配置同样使用构建命令和`dist`输出目录，并会在代码提交后自动重新构建；拉取请求还可以获得预览部署地址。([Cloudflare Docs][10])

## 自定义域名

在 Cloudflare：

```text
Workers & Pages
→ 选择项目
→ Custom domains
→ Set up a domain
→ beigangoldstreet.com
```

Cloudflare Pages支持在项目设置中直接绑定自定义域名。([Cloudflare Docs][11])

## 域名统一

主域名：

```text
https://beigangoldstreet.com
```

重定向：

```text
www.beigangoldstreet.com
→ beigangoldstreet.com

项目名.pages.dev
→ beigangoldstreet.com
```

建议在Cloudflare的Bulk Redirects中完成301跳转，并保留路径和查询参数。Cloudflare也专门建议将`pages.dev`地址重定向到自定义域名，避免同一内容同时存在于两个主机名。([Cloudflare Docs][12])

---

# 十六、安全响应头

在：

```text
public/_headers
```

加入：

```txt
/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()

/_astro/*
  Cache-Control: public, max-age=31536000, immutable
```

Cloudflare Pages会读取静态目录中的`_headers`文件，并把规则应用到静态响应。([Cloudflare Docs][13])

如果加入地图、YouTube、GA4或其他第三方脚本，再单独制定 Content Security Policy。不要一开始复制一个过度严格的CSP，导致地图或分析脚本无法工作。

---

# 十七、性能标准

## 页面脚本策略

普通文章和景点页：

```text
尽量零客户端JavaScript
```

只有这些功能加载JS：

* 移动导航
* 地图筛选
* 路线筛选
* 图片灯箱
* 静态搜索

建议限制：

```text
普通内容页 JS：尽量低于30KB
地图页 JS：独立加载
首页首图：不懒加载
其他图片：懒加载
所有图片：固定宽高
禁止自动播放影片
不使用大型图标库
```

## Core Web Vitals目标

```text
LCP：低于2.5秒
INP：低于200毫秒
CLS：低于0.1
```

可以使用 Cloudflare Web Analytics观察页面访问和Core Web Vitals；其官方文档说明该工具可提供页面性能数据，并且核心指标采集不使用cookie或localStorage。([Cloudflare Docs][14])

另外接入：

* Google Search Console
* Bing Webmaster Tools
* 可选GA4
* Cloudflare Web Analytics

---

# 十八、内容更新机制

纯静态站最大的风险不是技术，而是资料过期。

## 更新频率

| 内容     | 建议频率      |
| ------ | --------- |
| 大型活动   | 官方公布后立即更新 |
| 交通管制   | 活动前每周检查   |
| 停车场    | 每月，旺季每周   |
| 公车时刻   | 每季度       |
| 景点开放时间 | 每季度       |
| 店家营业时间 | 每3至6个月    |
| 厕所和无障碍 | 每半年实地确认   |
| 行程文章   | 每年全面复核    |
| 历史内容   | 有新资料再调整   |

## 更新记录

每次更新保留日志：

```text
2026-07-14
新增北港老街停車資訊，更新遊客中心與工藝坊開放時間。

2026-07-20
調整半日遊路線，補充夏季避暑與休息點。
```

网站提供独立页面：

```text
/updates/
```

用户看到资料被持续维护，会比看到“2026最新攻略”更信任。

## 资料状态

建议每条资料区分：

```text
官方公告
电话确认
现场确认
店家社交账号
游客回报
尚待确认
```

只有官方或现场确认才能标记为“已核实”。

---

# 十九、初期原创图片清单

上线前至少拍摄：

1. 中山路望向朝天宫
2. 朝天宫白天正面
3. 朝天宫夜景
4. 老街二楼街屋
5. 红灯笼街景
6. 游客中心入口
7. 工艺坊入口
8. 甕墙
9. 安和街巷弄
10. 水道头水塔
11. 女儿桥
12. 观光大桥
13. 第一停车场入口
14. 其他主要停车区域
15. 公厕入口
16. 无障碍坡道
17. 公车站牌
18. 煎盘粿
19. 麵线糊
20. 鸭肉饭
21. 花生伴手礼
22. 麻油店
23. 汉饼店
24. 休息座椅
25. 老街夜间营业情况

停车场、公厕和站牌照片的实用价值，通常比多拍十张宫庙特写更高。

---

# 二十、首发内容规模

建议首发不是5篇文章，而是完成一个基本可用的小型站。

## 首发最低标准

```text
20至25个正式页面
10个景点资料
15家美食或小吃
5个停车区域
5至10个厕所或借厕点
3至5条游览路线
30至50张原创图片
30个以上地图点
```

## 首发优先级

### 第一优先

```text
首页
停车
公厕
交通
地图
营业时间
半日游
一日游
美食总览
早餐
朝天宫
北港老街
游客中心
工艺坊
FAQ
```

### 第二优先

```text
水道头
女儿桥
伴手礼
亲子路线
长辈路线
无障碍
雨天路线
拍照点
活动
交通管制
```

### 第三优先

```text
单独店家页
住宿
两天一夜
英文版
日文版
周边乡镇
```

---

# 二十一、变现设计

## 初期

首发阶段不建议在首屏、停车页和公厕页放大广告。

先建立：

* 搜索流量
* 实用信息可信度
* 原创图片资产
* 在地店家联系
* 导航点击数据

## 后期收入

适合的方式：

1. 北港住宿联盟
2. 嘉义高铁至北港包车
3. 在地导览预约
4. 伴手礼导购
5. 店家赞助展示
6. 节庆专题合作
7. 普通展示广告

赞助内容必须显示：

```text
合作內容
贊助店家
廣告
```

不要让付款店家获得虚假的“第一名”或“在地必吃”评价。

---

# 二十二、上线前检查

## 品牌

* Logo和favicon完成
* 非官方声明清楚
* 全站使用繁体中文台湾用词
* 未使用朝天宫官方标志
* 图片有合法使用权

## 内容

* 所有页面有最后核实日期
* 停车和公厕信息能够实际使用
* 营业时间有来源
* 不使用虚构评分
* 活动旧页面标记为已结束
* 所有地址和经纬度复核

## 技术

* canonical正确
* sitemap正常生成
* robots.txt可访问
* 404页面完成
* OG图片完整
* 手机底部导航正常
* 图片有宽高和alt
* `www`完成301
* `pages.dev`完成301
* Search Console已验证
* 没有混合内容或404资源

## 用户体验

* 手机单手可点击
* 字号至少16px
* 按钮触控区域不小于44px
* 正文不压在复杂图片上
* 红色不作为唯一状态提示
* 路线对长辈和轮椅说明清楚
* 地图不阻塞首页加载

---

# 最终执行方案

| 项目   | 最终选择                      |
| ---- | ------------------------- |
| 域名   | `beigangoldstreet.com`    |
| 网站名称 | 北港老街指南                    |
| 副标题  | 停車、美食、交通、廁所與一日遊           |
| 语言   | 繁体中文台湾                    |
| 技术   | Astro + TypeScript        |
| 渲染   | 100%静态生成                  |
| 内容   | Astro Content Collections |
| 样式   | 原生CSS变量，不使用大型UI框架         |
| 地图   | 首页SVG地图＋独立互动地图            |
| 部署   | Cloudflare Pages          |
| 主域名  | 非www                      |
| 核心优势 | 停车、公厕、交通、营业时间与实用路线        |
| 视觉   | 香火红、麻油金、米纸色、河港青           |
| 内容原则 | 原创、可核实、显示最后更新时间           |

这套站最重要的不是把北港包装得“很古老”，而是把北港真实的庙埕、商店、巷弄、美食和进香生活，整理成一个游客在现场真正用得上的现代导览网站。

[1]: https://tour.yunlin.gov.tw/mainssl/modules/MySpace/BlogInfo.php?xmlid=1037696 "北港鎮形象商圈 - 慢遊雲林"
[2]: https://tour.yunlin.gov.tw/main/modules/MySpace/index.php?xmlid=1036781 "北港工藝坊 - 慢遊雲林"
[3]: https://docs.astro.build/en/guides/integrations-guide/cloudflare/ "@astrojs/cloudflare | Docs"
[4]: https://docs.astro.build/en/guides/content-collections/?utm_source=chatgpt.com "Content collections - Astro Docs"
[5]: https://docs.astro.build/en/guides/images/?utm_source=chatgpt.com "Images - Astro Docs"
[6]: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?utm_source=chatgpt.com "How to specify a canonical URL with rel=\"canonical\" and ..."
[7]: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?utm_source=chatgpt.com "Build and Submit a Sitemap | Google Search Central"
[8]: https://developers.google.com/search/docs/appearance/structured-data/search-gallery?utm_source=chatgpt.com "Structured Data Markup that Google Search Supports"
[9]: https://developers.google.com/search/docs/specialty/international/localized-versions?utm_source=chatgpt.com "Localized Versions of your Pages | Google Search Central"
[10]: https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/ "Astro · Cloudflare Pages docs"
[11]: https://developers.cloudflare.com/pages/configuration/custom-domains/?utm_source=chatgpt.com "Custom domains · Cloudflare Pages docs"
[12]: https://developers.cloudflare.com/pages/how-to/redirect-to-custom-domain/?utm_source=chatgpt.com "Redirecting *.pages.dev to a Custom Domain"
[13]: https://developers.cloudflare.com/pages/configuration/headers/?utm_source=chatgpt.com "Headers · Cloudflare Pages docs"
[14]: https://developers.cloudflare.com/web-analytics/?utm_source=chatgpt.com "Overview · Cloudflare Web Analytics docs"

