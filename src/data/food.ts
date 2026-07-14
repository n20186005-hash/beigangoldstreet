export interface FoodItem {
  name: string;
  category: string;
  time: string;
  description: string;
  style: string;
  budget: string;
  dine: string;
  soldOut: string;
  walk: string;
  verified: string;
}

export const foodItems: FoodItem[] = [
  { name: "煎盤粿", category: "早餐", time: "清晨至上午", description: "米粿煎出焦香，搭配蛋、香腸或滷料，是北港早晨很有辨識度的一餐。", style: "鹹香／現煎", budget: "$", dine: "多為內用或外帶", soldOut: "熱門店家可能上午售完", walk: "老街周邊", verified: "品項整理；店家時段需另查" },
  { name: "麵線糊", category: "早餐", time: "早上為主", description: "細麵線與勾芡湯底，適合搭配滷蛋、肉羹等小菜。", style: "溫熱／滑順", budget: "$", dine: "多為小吃店", soldOut: "部分店家只做早場", walk: "朝天宮周邊", verified: "品項整理；店家時段需另查" },
  { name: "土豆油飯", category: "早餐", time: "清晨至中午前", description: "糯米油飯加入花生，是北港常見的在地早餐組合。", style: "飽足／糯香", budget: "$", dine: "內用或外帶", soldOut: "晚到可能售完", walk: "市場與老街周邊", verified: "品項整理；店家時段需另查" },
  { name: "鴨肉飯", category: "午餐", time: "午餐至晚餐（依店家）", description: "切鴨肉、滷汁與白飯的經典組合，可搭配下水湯或小菜。", style: "鹹香／肉食", budget: "$–$$", dine: "多可內用", soldOut: "熱門用餐時段需候位", walk: "朝天宮步行圈", verified: "品項整理；不提供即時排隊" },
  { name: "假魚肚", category: "午餐", time: "中午前後", description: "不是魚肚，而是以炸豬皮等食材呈現柔滑口感的地方小吃。", style: "羹湯／古早味", budget: "$", dine: "多為內用", soldOut: "依當日備料", walk: "中山路周邊", verified: "品項整理；店家時段需另查" },
  { name: "青蛙湯與羹湯", category: "午餐", time: "午餐至傍晚", description: "北港傳統湯品選擇多，點餐前可先確認食材與口味。", style: "湯品／傳統", budget: "$–$$", dine: "內用為主", soldOut: "依當日備料", walk: "廟口周邊", verified: "品項整理；店家資訊待實地補強" },
  { name: "花生與花生糖", category: "下午茶", time: "白天採買", description: "適合邊走邊吃，也方便當作不需冷藏的伴手禮。", style: "甜香／酥脆", budget: "$–$$", dine: "外帶", soldOut: "節慶前後品項變動", walk: "中山路老街", verified: "品項整理" },
  { name: "麻荖", category: "下午茶", time: "白天採買", description: "米香外層裹上糖與芝麻、花生等，是老街常見的傳統點心。", style: "酥脆／甜", budget: "$–$$", dine: "外帶", soldOut: "禮盒以現場為準", walk: "中山路老街", verified: "品項整理" },
  { name: "傳統漢餅", category: "下午茶", time: "白天採買", description: "北港糕餅店多，適合先試吃或買小包裝，再決定是否帶禮盒。", style: "糕餅／送禮", budget: "$$", dine: "外帶", soldOut: "節慶預訂量大", walk: "中山路老街", verified: "品項整理" },
  { name: "麻油料理", category: "晚餐", time: "依餐館營業時間", description: "北港老街的麻油香不只適合採買，也可找提供麻油料理的餐館。", style: "暖香／正餐", budget: "$$", dine: "內用", soldOut: "需先確認晚間營業", walk: "老街及外圍", verified: "店家資訊待實地補強" },
  { name: "在地餐館", category: "晚餐", time: "傍晚至晚間", description: "若傳統小吃已收攤，可將範圍擴大到華南路、文化路周邊餐館。", style: "正餐／多人", budget: "$$", dine: "內用", soldOut: "建議先電話確認", walk: "核心區外 10–20 分鐘", verified: "類型建議，非店家排名" },
  { name: "冰品與豆花", category: "下午茶", time: "午後至晚間（依店家）", description: "夏季散步中途適合安排的休息點，營業季節可能變動。", style: "冰涼／甜", budget: "$", dine: "多可內用", soldOut: "冬季品項可能調整", walk: "老街步行圈", verified: "類型建議" },
];
