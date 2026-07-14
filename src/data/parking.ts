export type ParkingStatus = "open" | "notice" | "seasonal" | "unknown";

export interface ParkingArea {
  name: string;
  status: ParkingStatus;
  statusLabel: string;
  vehicle: string;
  fee: string;
  hours: string;
  walk: string;
  toilet: string;
  surface: string;
  shade: string;
  accessible: string;
  note: string;
  sourceLabel: string;
  sourceUrl: string;
  mapQuery: string;
}

export const parkingAreas: ParkingArea[] = [
  {
    name: "北港第一停車場",
    status: "notice",
    statusLabel: "活動期間優先",
    vehicle: "汽車／遊覽車（依現場分流）",
    fee: "依現場告示",
    hours: "依現場及活動公告",
    walk: "到朝天宮約 6–10 分鐘",
    toilet: "附近公共設施",
    surface: "戶外地面",
    shade: "少量或無",
    accessible: "車位配置待現場確認",
    note: "大型活動常被列為主要停車與接駁節點；車位數與進出方式可能因活動調整。",
    sourceLabel: "雲林縣交通工務局",
    sourceUrl: "https://public.yunlin.gov.tw/News_Content.aspx?n=759&s=536398",
    mapQuery: "北港第一停車場",
  },
  {
    name: "北港水道文化園區停車區",
    status: "unknown",
    statusLabel: "行前確認",
    vehicle: "汽車",
    fee: "依現場告示",
    hours: "配合園區與接駁安排",
    walk: "到朝天宮約 18–25 分鐘",
    toilet: "園區開放時可詢問",
    surface: "戶外地面",
    shade: "少量",
    accessible: "未確認",
    note: "2026 年縣府環鎮接駁資訊列出的停車節點之一，適合搭配水道頭行程。",
    sourceLabel: "雲林縣政府 2026 環鎮接駁公告",
    sourceUrl: "https://public.yunlin.gov.tw/News_Content.aspx?n=759&s=580695&sms=9349",
    mapQuery: "北港水道頭文化園區",
  },
  {
    name: "北港 1911 好庫文化園區停車場",
    status: "unknown",
    statusLabel: "行前確認",
    vehicle: "汽車",
    fee: "依現場告示",
    hours: "依園區公告",
    walk: "到朝天宮約 18–25 分鐘",
    toilet: "園區開放時可詢問",
    surface: "戶外地面",
    shade: "少量",
    accessible: "未確認",
    note: "曾被大型活動列為外圍停車場；非活動日的開放範圍請以現場為準。",
    sourceLabel: "雲林縣交通工務局",
    sourceUrl: "https://public.yunlin.gov.tw/News_Content.aspx?n=759&s=536398",
    mapQuery: "北港1911好庫文化園區",
  },
  {
    name: "北港溪高灘地停車區",
    status: "seasonal",
    statusLabel: "受天候影響",
    vehicle: "汽車",
    fee: "舊公告為免費；現況依現場",
    hours: "依河川與活動管制",
    walk: "到朝天宮約 6–12 分鐘",
    toilet: "附近",
    surface: "礫石／戶外",
    shade: "無",
    accessible: "地面條件較不穩定",
    note: "高灘地可能受雨勢、河川水位及工程影響；不要只依導航判斷可否進入。",
    sourceLabel: "雲林縣政府歷史公告；現況待確認",
    sourceUrl: "https://public.yunlin.gov.tw/News_Content.aspx?n=759&s=215973",
    mapQuery: "北港溪高灘地停車場",
  },
  {
    name: "北港家樂福停車場",
    status: "notice",
    statusLabel: "消費與場規優先",
    vehicle: "汽車／機車",
    fee: "依店家與現場規定",
    hours: "配合商場營業時間",
    walk: "到朝天宮約 20–30 分鐘",
    toilet: "店內（營業時間內）",
    surface: "鋪面",
    shade: "部分",
    accessible: "依商場現場配置",
    note: "曾列入活動外圍停車安排；一般日期仍須遵守消費、開放與停車場規範。",
    sourceLabel: "雲林縣交通工務局",
    sourceUrl: "https://public.yunlin.gov.tw/News_Content.aspx?n=759&s=536398",
    mapQuery: "家樂福北港店",
  },
];
