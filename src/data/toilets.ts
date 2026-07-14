export interface ToiletPlace {
  name: string;
  type: string;
  hours: string;
  accessible: string;
  changing: string;
  purchase: string;
  walk: string;
  entrance: string;
  status: "confirmed" | "partial" | "unknown";
  note: string;
  mapQuery: string;
}

export const toilets: ToiletPlace[] = [
  { name: "北港朝天宮周邊公共廁所", type: "公共設施", hours: "依廟方與現場開放", accessible: "位置與開放待現場確認", changing: "未確認", purchase: "不需消費", walk: "廟口核心區", entrance: "抵達後依現場指標", status: "partial", note: "大型活動期間可能分流或增設流動廁所。", mapQuery: "北港朝天宮 公廁" },
  { name: "北港遊客中心", type: "旅遊服務設施", hours: "配合遊客中心開放時間", accessible: "未完成現場核實", changing: "未確認", purchase: "不需消費", walk: "距朝天宮約 3–6 分鐘", entrance: "由遊客中心入口詢問", status: "unknown", note: "出發前可先向服務人員確認設施與無障礙動線。", mapQuery: "北港遊客中心" },
  { name: "北港第一停車場周邊", type: "停車區設施", hours: "依停車場現場", accessible: "未確認", changing: "未確認", purchase: "依現場", walk: "距朝天宮約 6–10 分鐘", entrance: "依停車場指標", status: "unknown", note: "活動期間設施可能調整，請勿把流動廁所視為常設。", mapQuery: "北港第一停車場 公廁" },
  { name: "水道頭文化園區", type: "園區設施", hours: "配合園區開放時間", accessible: "未確認", changing: "未確認", purchase: "通常不需消費", walk: "距朝天宮約 18–25 分鐘", entrance: "入園後依指標", status: "unknown", note: "適合安排在水道頭行程節點使用，不建議只為上廁所往返。", mapQuery: "北港水道頭文化園區 公廁" },
  { name: "北港 1911 好庫文化園區", type: "園區設施", hours: "配合園區開放時間", accessible: "未確認", changing: "未確認", purchase: "依現場", walk: "距朝天宮約 18–25 分鐘", entrance: "入園後依指標", status: "unknown", note: "若作為停車轉乘點，可先在此確認設施再進老街。", mapQuery: "北港1911好庫 公廁" },
  { name: "家樂福北港店", type: "商場廁所", hours: "配合商場營業時間", accessible: "依店內標示", changing: "依店內標示", purchase: "遵守店家使用規範", walk: "距朝天宮約 20–30 分鐘", entrance: "由商場入口進入", status: "partial", note: "屬私人營業場所，請尊重店家規則。", mapQuery: "家樂福北港店" },
];
