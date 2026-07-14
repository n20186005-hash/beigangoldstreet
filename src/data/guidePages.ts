export interface GuidePageData {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  tone: "red" | "green" | "gold" | "ink";
  answer?: string;
  sections: { title: string; paragraphs?: string[]; items?: string[]; links?: { label: string; href: string }[] }[];
}

export const guidePages: GuidePageData[] = [
  {
    slug:"accessibility", title:"北港無障礙旅遊", eyebrow:"ACCESSIBILITY", tone:"green", description:"整理北港老街路面、輪椅動線、無障礙廁所與活動人潮風險；未完成現場尺寸核實的資訊會明確標示。", answer:"平日核心路線可走「就近下車—朝天宮外圍—中山路短段—有座位餐廳」，但騎樓高差、廟宇門檻與大型活動人潮仍是主要障礙。",
    sections:[
      {title:"輪椅與嬰兒車最需要留意什麼？",items:["騎樓可能有高差、柱體、攤位與停放機車","廟宇入口與殿內可能有門檻","進香團抵達時廟口人流會突然變密集","戶外停車場地面、坡道與無障礙車位需依現場"]},
      {title:"建議怎麼安排路線？",paragraphs:["縮小範圍比增加景點重要。以朝天宮與中山路核心段為主，每 30 至 45 分鐘安排座位與廁所；水道頭與河岸可視體力另外移動。"]},
      {title:"無障礙廁所在哪裡？",paragraphs:["本站目前尚未完成所有入口照片、門寬、扶手與尿布台的實地核實，因此公廁頁會保留「未確認」。出發前可詢問遊客中心或場館。"],links:[{label:"查看公廁核實狀態",href:"/toilets/"}]},
      {title:"大型活動適合去嗎？",paragraphs:["若使用輪椅、助行器或需要較安靜的空間，應避開迎媽祖遶境高峰。平日早上通常更容易控制步調。"]},
    ]
  },
  {
    slug:"family", title:"北港親子旅遊", eyebrow:"FAMILY TRIP", tone:"gold", description:"把廁所、休息、遮蔭與用餐節奏放在景點數量之前，讓孩子真正看懂北港，而不是一路被拖著走。", answer:"親子半日可走朝天宮—中山路尋找街屋與燈籠—遊客中心休息—提早午餐。夏季避開正午，河岸留到傍晚。",
    sections:[
      {title:"孩子在朝天宮可以看什麼？",items:["找屋脊上的色彩與動物造型","觀察人們如何進出與參拜","比較廟埕和老街空間","理解這是正在使用的信仰場所，不是遊樂場"]},
      {title:"嬰兒車方便嗎？",paragraphs:["核心街區距離不長，但騎樓高差、機車與廟宇門檻會增加推行難度。活動日不建議推車進入最密集人潮。"]},
      {title:"哪裡安排休息？",paragraphs:["優先選有座位的早餐或午餐店、遊客中心與開放中的場館。不要把公廁和尿布台視為理所當然，先看核實狀態。"],links:[{label:"親子時間軸路線",href:"/itineraries/family/"},{label:"公廁與尿布台",href:"/toilets/"}]},
      {title:"下雨怎麼辦？",paragraphs:["縮成朝天宮、騎樓老街與開放中的工藝場館；取消橋梁與河岸，並留意石材與騎樓地面濕滑。"]},
    ]
  },
  {
    slug:"rainy-day", title:"北港雨天備案", eyebrow:"RAINY DAY", tone:"green", description:"下雨仍能逛北港，但要縮短戶外段、確認場館開放，並取消河岸與橋梁等曝露路線。", answer:"雨天優先走朝天宮—中山路騎樓—工藝坊—室內用餐。大雨、雷雨或河川警示時不去女兒橋與高灘地。",
    sections:[
      {title:"兩小時雨天路線",items:["停車後穿雨具進核心區","朝天宮參拜與建築觀察 45 分鐘","沿中山路騎樓散步 30 分鐘","選室內店家吃點心或午餐 45 分鐘"]},
      {title:"哪些景點先取消？",paragraphs:["女兒橋、觀光大橋、北港溪河岸與高灘地停車區都受天候影響。水道頭戶外範圍也應縮短。"]},
      {title:"鞋子與裝備",items:["止滑鞋比長傘更重要","輕便雨衣在人潮中較好移動","相機與手機準備防水袋","不要在廟門口甩傘或堵住入口"]},
      {title:"雨天交通",paragraphs:["公車可能因道路與活動改道，自駕則不要把高灘地當成固定停車選項。"],links:[{label:"停車狀態",href:"/parking/"},{label:"大眾運輸",href:"/transport/"}]},
    ]
  },
  {
    slug:"faq", title:"北港老街常見問題", eyebrow:"FAQ", tone:"red", description:"門票、時間、晚上、停車、公車、長輩、公廁與雨天，一次回答第一次到北港最常遇到的問題。",
    sections:[
      {title:"北港老街需要門票嗎？",paragraphs:["不需要。老街是一般街區，朝天宮可自由參拜；個別展館、體驗與期間活動若收費，以主辦單位公告為準。"]},
      {title:"幾點去最好？",paragraphs:["一般散步建議 09:00–16:00；想吃早餐可在 07:00–09:00 抵達；夏季避開正午曝曬。"]},
      {title:"晚上還有店嗎？",paragraphs:["有部分餐館與小吃，但老街不是每日夜市。傳統店家多在傍晚前後陸續打烊，晚餐先確認目標店家。"]},
      {title:"朝天宮附近哪裡停車？",paragraphs:["一般日期先看北港第一停車場等停車區；活動日依當年公告停外圍並利用接駁。本站不提供推算空位。"],links:[{label:"完整停車指南",href:"/parking/"}]},
      {title:"從高鐵嘉義站怎麼去？",paragraphs:["可查 7235 往北港路線，或預約計程車。班次會變動，去程與回程都要在當日查即時資訊。"]},
      {title:"帶長輩適合嗎？",paragraphs:["適合平日慢走，但應縮小路線、提早用餐並安排座位。大型活動日人潮密集，不利輪椅與助行器。"]},
      {title:"哪裡有廁所？",paragraphs:["先查遊客中心、停車區與園區設施；店家廁所通常依消費規範。無障礙與尿布台仍有待實地核實。"],links:[{label:"公廁整理",href:"/toilets/"}]},
      {title:"下雨天還能玩嗎？",paragraphs:["可以走朝天宮、騎樓老街與開放中的室內場館；大雨時取消河岸、橋梁與高灘地行程。"]},
    ]
  },
  {
    slug:"about", title:"關於北港老街指南", eyebrow:"ABOUT US", tone:"ink", description:"一個服務現場旅客的實用景點站，把停車、公廁、交通與步行路線放在漂亮口號之前。",
    sections:[
      {title:"我們在做什麼？",paragraphs:["北港老街指南整理出發前與抵達後真正會用到的資訊：停車位置、廁所、交通、常見營業時段、美食類型、景點與路線。","我們希望把北港真實的廟埕、商店、巷弄、工藝與進香生活，整理成易讀、可更新的現代導覽。"]},
      {title:"網站定位",paragraphs:["本站以旅客在現場真正需要的資訊為核心，整理北港老街的停車、公廁、交通、景點、美食與步行路線，並標示資料來源與不確定狀態。"]},
      {title:"資料怎麼整理？",paragraphs:["優先引用官方公告與主管機關旅遊資料，再區分現場確認、電話確認、店家社群、旅客回報與尚待確認。無法確認的項目不會包裝成已核實。"],links:[{label:"編輯與核實原則",href:"/editorial-policy/"},{label:"完整資料來源",href:"/sources/"}]},
      {title:"如何支持更完整的資訊？",paragraphs:["若你在現場發現入口、廁所、停車或營業資訊變動，歡迎提供日期與具體描述。請不要傳送含他人臉部、車牌或私人資料的照片。"],links:[{label:"回報資料修正",href:"/corrections/"}]},
    ]
  },
  {
    slug:"editorial-policy", title:"編輯與資料核實原則", eyebrow:"EDITORIAL POLICY", tone:"ink", description:"我們如何區分官方公告、現場確認、店家資訊、旅客回報與尚待確認，並處理容易過期的旅遊資料。",
    sections:[
      {title:"資料狀態分級",items:["官方公告：政府、場館、廟方或交通業者正式資訊","現場資訊：只描述可觀察狀態，不延伸推論","電話資訊：只記錄對方明確提供的內容","店家社群：只描述店家自己公布的內容","旅客回報：需再確認，不直接視為官方","尚待確認：寧可承認不知道，不用舊資料推算"]},
      {title:"我們不做什麼？",items:["不以普通營業時間自動顯示營業中","不擷取未授權評分或評論","不把網路文章改寫成在地人都推薦","不為贊助店家製造第一名","不沿用往年活動日期假裝是今年"]},
      {title:"資料調整方式",paragraphs:["大型活動、交通管制與場館異動依官方公告調整；無法持續確認的營業、停車、公廁與無障礙資訊會明確標示限制，不承諾固定更新頻率。"]},
      {title:"發現錯誤怎麼辦？",paragraphs:["提供頁面、錯誤內容、觀察日期與可公開核對的來源。我們會保留修正記錄。"],links:[{label:"資料修正表單說明",href:"/corrections/"},{label:"更新紀錄",href:"/updates/"}]},
    ]
  },
  {
    slug:"corrections", title:"回報資料修正", eyebrow:"CORRECTIONS", tone:"red", description:"停車入口改了、廁所關閉、場館休館或路線有誤？請提供能核對的日期與描述。",
    sections:[
      {title:"請提供哪些資訊？",items:["需要修正的頁面網址或項目名稱","你在現場觀察到的日期與時間","目前頁面哪一句不正確","官方公告、現場告示或店家公開資訊連結","若提供照片，請遮住人臉、車牌與私人資料"]},
      {title:"哪些回報不能直接採用？",paragraphs:["只有『我朋友說』、無日期截圖、私人群組內容或無法辨識地點的照片，都只能當線索，不能直接改成已核實。"]},
      {title:"目前回報方式",paragraphs:["專用信箱尚未啟用。網站正式綁定網域後會在本頁公布聯絡信箱；在此之前，請勿將個人資料送到不明社群帳號。"]},
      {title:"修正後會怎麼顯示？",paragraphs:["重要修正會在調整紀錄保留摘要；若資訊仍無法確認，狀態會改為尚待確認。"],links:[{label:"查看更新紀錄",href:"/updates/"}]},
    ]
  },
  {
    slug:"sources", title:"資料來源", eyebrow:"SOURCES", tone:"ink", description:"核心旅遊事實優先引用官方或第一方來源；地圖與店家資訊只做定位線索，不等同即時核實。",
    sections:[
      {title:"政府與旅遊資料",links:[{label:"慢遊雲林－雲林縣政府文化觀光處",href:"https://tour.yunlin.gov.tw/"},{label:"雲林縣交通工務局",href:"https://public.yunlin.gov.tw/"},{label:"交通部觀光資訊資料庫",href:"https://media.taiwan.net.tw/"}]},
      {title:"交通資料",links:[{label:"公路客運即時動態資訊網",href:"https://www.taiwanbus.tw/"},{label:"台灣高鐵",href:"https://www.thsrc.com.tw/"}]},
      {title:"場館與廟方",links:[{label:"北港朝天宮",href:"https://www.matsu.org.tw/"},{label:"北港武德宮",href:"https://www.wude.org.tw/"},{label:"北港工藝坊公開社群",href:"https://www.facebook.com/beigang.craft"}]},
      {title:"引用原則",paragraphs:["來源頁面可支持常態事實，不代表能證明此刻正在營業、停車場仍有空位或活動沒有臨時調整。核心頁面會保留資料狀態與行前確認提醒。"]},
    ]
  },
  {
    slug:"updates", title:"調整紀錄", eyebrow:"CHANGELOG", tone:"green", description:"不喊口號式的『最新攻略』，只記錄網站建立過的資料與功能調整。",
    sections:[
      {title:"首發資料建立",items:["建立 10 個景點的結構化資料與來源","整理 5 個停車區、6 個公廁或借廁節點","加入高鐵嘉義站、高鐵雲林站與嘉義市區交通路線編號","建立 30 個地圖點與分類篩選","活動資訊以主辦單位當期公告為準"]},
      {title:"網站基礎",items:["完成首頁、手機導覽與 SVG 示意地圖","完成 canonical、sitemap、robots 與結構化資料","加入 Cloudflare Pages 安全回應標頭","建立資料聲明、編輯政策與修正機制"]},
      {title:"接下來要補的現場資料",items:["公廁入口與無障礙尺寸","停車場收費告示與地面照片","店家營業與付款方式現場核實","公車站牌與候車位置照片","親子休息與尿布台資訊"]},
    ]
  },
  {
    slug:"privacy", title:"隱私說明", eyebrow:"PRIVACY", tone:"ink", description:"本站目前為純靜態旅遊資訊網站，不設帳號、不販售資料，也不要求提供精確位置。",
    sections:[
      {title:"目前收集哪些資料？",paragraphs:["本站首發版本沒有登入、會員、留言、購物車或後端資料庫。一般內容頁不需要提供姓名、電話、電子郵件或精確位置。"]},
      {title:"第三方連結",paragraphs:["點擊 Google 地圖、官方網站、交通查詢或社群平台後，會受第三方自己的隱私政策與追蹤機制約束。"]},
      {title:"網站分析",paragraphs:["若未來啟用 Cloudflare Web Analytics，會在此更新說明。本站不會把分析工具包裝成必要功能，也不因分析而要求登入。"]},
      {title:"回報資料",paragraphs:["未來啟用修正信箱後，回報者應避免傳送身分證件、精確住址、未遮蔽車牌與他人臉部。"],links:[{label:"資料修正原則",href:"/corrections/"}]},
    ]
  },
  {
    slug:"contact", title:"聯絡本站", eyebrow:"CONTACT", tone:"ink", description:"網站目前仍在首發建置期，聯絡信箱會在自訂網域與寄件設定完成後公布。",
    sections:[
      {title:"資料錯誤",paragraphs:["請先查看資料修正頁，準備頁面網址、觀察日期與可核對來源。"],links:[{label:"回報資料修正",href:"/corrections/"}]},
      {title:"店家與場館",paragraphs:["店家可提供官方營業時間、地址、無障礙與付款方式。提供資料不代表獲得排名或推薦。"]},
      {title:"合作與贊助",paragraphs:["首發階段不接受以付款換取『第一名』或『必吃』字樣。未來合作內容會清楚標示，不混入一般編輯推薦。"]},
      {title:"聯絡方式",paragraphs:["正式信箱尚未啟用。請勿將個人資料寄到任何自稱本站但未列在 beigangoldstreet.com 的帳號。"]},
    ]
  },
];
