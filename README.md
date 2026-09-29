# Vải Store (Next.js + Tailwind + TypeScript)

## Cài đặt (VS Code)
1. Cài Node.js 20+ và Python 3.10+.
2. Giải nén, `File > Open Folder` → `vai-store`. Mở Terminal (Ctrl+`):
   ```
   npm install
   ```
3. Dán code Glyph Portal đầy đủ vào `components/ui/glyph-portal.tsx` (đang là file tạm).
4. Chạy thử: `npm run dev` → http://localhost:3000

## Chạy crawler quét lỗi
Crawler đọc HTML (không chạy JS) nên phải quét bản build:
```
npm run build
npm start                      # giữ terminal này chạy
```
Mở terminal thứ 2:
```
cd ../seo-crawler   # thư mục cùng cấp với vai-store
pip install -r requirements.txt
python main.py --url http://localhost:3000 --max-pages 40 --max-depth 3
```
Báo cáo HTML nằm trong `report_audit/`.

## Lỗi SEO cài sẵn (NEXT_PUBLIC_SEO_BUGS=1 trong .env.local)
| Lỗi | Vị trí |
|---|---|
| Title trùng | /products/ao-so-mi-linen-trang trùng /products/ao-thun-oversize-den |
| Thiếu meta description | /products/quan-jean-ong-suong |
| Canonical sang domain khác | /products/vay-midi-xanh-reu |
| Thiếu canonical | trang chủ |
| Thiếu alt | ảnh sản phẩm thứ 2, 4, 6 |
| Link 404 | /khuyen-mai-het-han (trang chủ) |
| 2 thẻ H1 + nhảy H2→H4 | trang chủ |

Đặt `NEXT_PUBLIC_SEO_BUGS=0`, build lại → bản sạch, chạy crawler để so sánh trước/sau.
