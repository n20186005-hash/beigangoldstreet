export interface Itinerary {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  duration: string;
  distance: string;
  pace: string;
  audience: string;
  description: string;
  stops: { time: string; title: string; duration: string; walk: string; toilet: string; rest: string; rain: string }[];
}

export const itineraries: Itinerary[] = [
  {
    slug: "two-hours", title: "北港 2 小時快速路線", shortTitle: "2 小時快速逛", eyebrow: "QUICK WALK", duration: "約 2 小時", distance: "約 1.5 公里", pace: "輕快", audience: "第一次到訪、過境停留", description: "以朝天宮和中山路為核心，保留一個小吃或伴手禮時段，不跨到水道頭。",
    stops: [
      { time: "00:00", title: "停車後走向朝天宮", duration: "10 分", walk: "依停車區約 6–15 分", toilet: "先在停車區確認", rest: "廟口周邊", rain: "沿騎樓前進" },
      { time: "00:15", title: "北港朝天宮", duration: "45 分", walk: "—", toilet: "周邊公共設施", rest: "廟埕外圍", rain: "可照常，注意濕滑" },
      { time: "01:00", title: "中山路老街", duration: "35 分", walk: "出廟口即達", toilet: "遊客中心方向", rest: "店家消費休息", rain: "利用騎樓" },
      { time: "01:35", title: "小吃或伴手禮", duration: "25 分", walk: "老街步行圈", toilet: "依店家規則", rest: "內用店家", rain: "優先選室內" },
    ],
  },
  {
    slug: "half-day", title: "北港半日遊經典路線", shortTitle: "半日經典路線", eyebrow: "HALF DAY", duration: "約 4–5 小時", distance: "約 3 公里", pace: "從容", audience: "一般旅客、家庭", description: "在朝天宮與老街之外加入工藝坊和巷弄，午餐後再決定是否延伸水道頭。",
    stops: [
      { time: "08:30", title: "北港早餐", duration: "45 分", walk: "停車後 5–10 分", toilet: "先在停車區確認", rest: "早餐店", rain: "室內用餐" },
      { time: "09:30", title: "北港朝天宮", duration: "60 分", walk: "老街步行圈", toilet: "周邊公共設施", rest: "廟埕外圍", rain: "可照常" },
      { time: "10:35", title: "中山路老街", duration: "40 分", walk: "出廟口即達", toilet: "遊客中心方向", rest: "騎樓與店家", rain: "利用騎樓" },
      { time: "11:20", title: "北港工藝坊與甕牆", duration: "45 分", walk: "約 5–8 分", toilet: "場館開放時詢問", rest: "工藝坊", rain: "確認場館開放" },
      { time: "12:15", title: "北港午餐", duration: "60 分", walk: "回核心區約 5–10 分", toilet: "依店家規則", rest: "內用店家", rain: "室內用餐" },
    ],
  },
  {
    slug: "one-day", title: "北港完整一日遊路線", shortTitle: "完整一日遊", eyebrow: "FULL DAY", duration: "約 8–9 小時", distance: "約 6–8 公里", pace: "完整", audience: "深度旅行、攝影", description: "早上走老街與工藝巷弄，午後移動到水道頭，傍晚以女兒橋和北港溪河岸收尾。",
    stops: [
      { time: "08:00", title: "北港早餐", duration: "50 分", walk: "依停車區", toilet: "停車區或店家", rest: "早餐店", rain: "室內用餐" },
      { time: "09:00", title: "北港朝天宮", duration: "60 分", walk: "老街步行圈", toilet: "周邊公共設施", rest: "廟埕外圍", rain: "可照常" },
      { time: "10:05", title: "中山路老街", duration: "50 分", walk: "出廟口即達", toilet: "遊客中心方向", rest: "騎樓與店家", rain: "利用騎樓" },
      { time: "11:00", title: "工藝坊與巷弄", duration: "60 分", walk: "約 5–8 分", toilet: "場館開放時詢問", rest: "工藝坊", rain: "改為室內場館" },
      { time: "12:10", title: "北港午餐", duration: "70 分", walk: "約 5–10 分", toilet: "依店家", rest: "內用店家", rain: "室內用餐" },
      { time: "14:00", title: "水道頭文化園區", duration: "70 分", walk: "核心區約 18–25 分，可移車", toilet: "園區開放時", rest: "園區", rain: "縮短戶外停留" },
      { time: "16:30", title: "女兒橋與河岸", duration: "45 分", walk: "依移動方式", toilet: "先在前一站使用", rest: "河岸座椅狀況不一", rain: "取消，回老街室內" },
    ],
  },
  {
    slug: "family", title: "北港親子半日路線", shortTitle: "親子路線", eyebrow: "WITH KIDS", duration: "約 4 小時", distance: "約 2.5 公里", pace: "保留休息", audience: "幼兒與學齡兒童", description: "縮短連續步行，每 45–60 分鐘安排一次廁所或室內休息，避開正午曝曬。",
    stops: [
      { time: "09:00", title: "朝天宮與廟埕觀察", duration: "45 分", walk: "停車後進入", toilet: "先確認周邊公廁", rest: "外圍休息", rain: "可照常" },
      { time: "09:50", title: "老街尋找屋頂與燈籠", duration: "35 分", walk: "出廟口即達", toilet: "遊客中心方向", rest: "騎樓", rain: "沿騎樓" },
      { time: "10:35", title: "遊客中心／室內休息", duration: "30 分", walk: "約 3–6 分", toilet: "現場詢問", rest: "室內", rain: "主要替代點" },
      { time: "11:15", title: "提早午餐或點心", duration: "60 分", walk: "核心步行圈", toilet: "依店家", rest: "內用店家", rain: "室內用餐" },
    ],
  },
  {
    slug: "seniors", title: "北港長輩友善路線", shortTitle: "長輩路線", eyebrow: "EASY PACE", duration: "約 3–4 小時", distance: "約 1.5–2 公里", pace: "慢行", audience: "長輩、輪椅同行者", description: "以核心街區為主，不勉強跨到河岸；大型活動日人潮密集，建議另選平日前往。",
    stops: [
      { time: "08:30", title: "就近下車與早餐", duration: "50 分", walk: "減少長距離步行", toilet: "先使用停車區設施", rest: "內用店家", rain: "室內" },
      { time: "09:30", title: "北港朝天宮", duration: "55 分", walk: "平緩路線優先", toilet: "現場詢問無障礙位置", rest: "避開主動線", rain: "注意地面濕滑" },
      { time: "10:35", title: "中山路短段散步", duration: "35 分", walk: "控制在核心路段", toilet: "遊客中心方向", rest: "每 15–20 分停一次", rain: "利用騎樓" },
      { time: "11:15", title: "提早午餐", duration: "70 分", walk: "選有座位店家", toilet: "訂位時一併確認", rest: "室內座位", rain: "室內" },
    ],
  },
  {
    slug: "photography", title: "北港老街攝影散步", shortTitle: "攝影路線", eyebrow: "PHOTO WALK", duration: "約 5–7 小時", distance: "約 5 公里", pace: "慢走觀察", audience: "街拍與建築攝影", description: "利用清晨斜光拍中山路透視，白天看工藝細節，傍晚再到河岸；參拜空間請保持禮貌。",
    stops: [
      { time: "06:30", title: "中山路晨光", duration: "50 分", walk: "老街主線", toilet: "出發前先處理", rest: "早餐店開門後", rain: "改拍騎樓細節" },
      { time: "07:30", title: "朝天宮外觀與工藝", duration: "75 分", walk: "出老街即達", toilet: "周邊公共設施", rest: "廟埕外圍", rain: "避免器材淋雨" },
      { time: "09:15", title: "巷弄、甕牆與工藝坊", duration: "90 分", walk: "約 5–10 分", toilet: "場館開放時詢問", rest: "工藝坊", rain: "室內工藝細節" },
      { time: "16:30", title: "女兒橋與北港溪", duration: "60 分", walk: "建議移動後再走", toilet: "先在前站使用", rest: "河岸", rain: "取消河岸" },
    ],
  },
];
