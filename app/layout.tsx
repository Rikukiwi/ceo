import type { Metadata } from "next";
import Link from "next/link";
import { Inter, Playfair_Display } from "next/font/google";
import { SITE } from "@/lib/products";
import "./globals.css";

const sans = Inter({ subsets: ["latin", "vietnamese"], variable: "--font-sans", display: "swap" });
const serif = Playfair_Display({ subsets: ["latin", "vietnamese"], variable: "--font-serif", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Vải Store – Thời trang basic cho mỗi ngày",
  description: "Áo thun, sơ mi, quần jean, váy chất liệu tốt, giá dễ chịu. Giao toàn quốc.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link href="/" className="font-serif text-xl font-semibold">Vải Store</Link>
          <nav aria-label="Chính" className="flex gap-6 text-sm">
            <Link href="/" className="py-3">Trang chủ</Link>
            <Link href="/shop" className="py-3">Cửa hàng</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="mx-auto mt-20 max-w-6xl px-5 py-10 text-sm text-muted">
          © 2026 Vải Store · <Link href="/shop">Tất cả sản phẩm</Link>
        </footer>
      </body>
    </html>
  );
}
