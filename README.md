# 北港老街指南

北港老街的實用旅遊資訊網站，重點整理停車、公廁、交通、美食、景點、活動與步行路線。

## 技術

- Astro 7 + TypeScript（strict）
- Astro Content Collections
- 原生 Astro 元件、CSS 與少量 Vanilla JavaScript
- 100% 靜態輸出
- Cloudflare Pages

## 本機開發

```bash
pnpm install
pnpm dev
```

正式檢查與建置：

```bash
pnpm check
pnpm build
pnpm preview
```

## 內容位置

- `src/content/attractions/`：景點資料與完整正文
- `src/data/parking.ts`：停車區與核實狀態
- `src/data/toilets.ts`：公廁與設施狀態
- `src/data/food.ts`：美食品項與時段
- `src/data/itineraries.ts`：路線時間軸
- `src/data/events.ts`：活動與遊客應對
- `public/data/map-places.json`：互動地圖地點

新增或修改容易變動的資訊時，必須同步更新核實日期、資料來源與狀態。無法確認的內容使用「尚待確認」，不要依一般營業時間推算即時狀態。

## Cloudflare Pages

| 設定 | 值 |
| --- | --- |
| Production branch | `main` |
| Build command | `pnpm build` |
| Build output directory | `dist` |
| Root directory | `/` |

`public/_headers` 會加入安全與快取標頭。自訂網域設定為 `beigangoldstreet.com` 後，另在 Cloudflare 設定 301：

- `www.beigangoldstreet.com/*` → `https://beigangoldstreet.com/$1`
- 專案的 `*.pages.dev/*` → `https://beigangoldstreet.com/$1`

重定向需在 Cloudflare 控制台依實際 Pages 專案網域設定，不能只靠倉庫內的相對 `_redirects` 規則完成主機名轉換。

## 資料原則

活動、交通、營業與停車資訊可能臨時調整，正式上線前仍需完成現場資料複核。
