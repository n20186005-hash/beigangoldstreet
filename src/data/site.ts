export const site = {
  name: "北港老街指南",
  englishName: "Beigang Old Street Guide",
  tagline: "停車、美食、交通、廁所與一日遊",
  url: "https://beigangoldstreet.com",
  description:
    "北港老街旅遊指南，整理朝天宮附近停車場、公廁、交通、美食、營業時間、景點地圖及半日、一日遊路線。",
  updateNotice:
    "本站整理北港旅遊資訊並標示資料來源。營業時間、交通與活動資訊可能臨時調整，出發前請以現場及主辦單位公告為準。",
};

export const navItems = [
  { href: "/", label: "首頁" },
  { href: "/parking/", label: "停車" },
  { href: "/transport/", label: "交通" },
  { href: "/food/", label: "美食" },
  { href: "/attractions/", label: "景點" },
  { href: "/itineraries/", label: "行程" },
  { href: "/map/", label: "地圖" },
  { href: "/events/", label: "活動" },
];

// 北港老街（中山路）實體事實唯一來源。
// 評分來自 Google 地圖商家資料（2026 年 9 月同步），僅作指示性參考，不構成本站評論。
export const attraction = {
  name: "北港老街",
  alternateName: "Beigang Old Street",
  description:
    "北港老街（中山路）是雲林縣北港鎮以朝天宮廟口向北港溪延伸的傳統商街，融合媽祖信仰、糕餅麻油老店、在地小吃與二層式街屋建築。",
  address: {
    streetAddress: "中山路",
    addressLocality: "北港鎮",
    addressRegion: "雲林縣",
    postalCode: "651",
    addressCountry: "TW",
  },
  geo: { lat: 23.5672, lng: 120.3044 },
  plusCode: "H873+PH 北港鎮 台灣雲林縣",
  mapsUrl: "https://maps.app.goo.gl/zhHGbZMsWz8ivkqw8",
  rating: {
    value: 4.4,
    count: 7652,
    source: "Google Maps",
    sourceUrl: "https://maps.app.goo.gl/zhHGbZMsWz8ivkqw8",
  },
};

export const sources = {
  yunlinTourism: {
    name: "慢遊雲林（雲林縣政府文化觀光處）",
    url: "https://tour.yunlin.gov.tw/",
  },
  chaotian: {
    name: "北港朝天宮",
    url: "https://www.matsu.org.tw/",
  },
  taiwanBus: {
    name: "公路客運即時動態資訊網",
    url: "https://www.taiwanbus.tw/",
  },
};
