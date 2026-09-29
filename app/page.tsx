import type { Metadata } from "next";
import Link from "next/link";
import GlyphPortal from "@/components/ui/glyph-portal";
import ProductCard from "@/components/product-card";
import { BUGS, products } from "@/lib/products";

// LỖI CÀI SẴN: bản lỗi thì trang chủ thiếu canonical
export const metadata: Metadata = { alternates: { canonical: BUGS ? undefined : "/" } };

export default function Home() {
  return (
    <>
      <GlyphPortal word="VẢI" scrollLength={2.4} enterLabel="Vào cửa hàng" fontWeight={900}>
        <div className="max-w-xl">
          <h1 className="font-serif text-4xl md:text-6xl">Mặc đẹp, bắt đầu từ chất vải.</h1>
          <p className="mt-6 text-base opacity-90">Bộ sưu tập basic mùa mới: cotton, linen, denim. Cuộn xuống để xem.</p>
          <Link href="/shop" className="mt-8 inline-flex min-h-[44px] items-center rounded-lg bg-accent px-6 text-white">
            Xem tất cả sản phẩm
          </Link>
        </div>
      </GlyphPortal>

      <section className="mx-auto max-w-6xl px-5 pt-16" aria-labelledby="new">
        {/* LỖI CÀI SẴN: H1 thứ 2 trong trang + nhảy cấp H2 → H4 */}
        {BUGS ? <h1 id="new" className="font-serif text-3xl">Hàng mới về</h1> : <h2 id="new" className="font-serif text-3xl">Hàng mới về</h2>}
        {BUGS && <h4 className="mt-2 text-sm text-muted">Cập nhật mỗi tuần</h4>}
        <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3">
          {products.map((p, i) => <ProductCard key={p.slug} p={p} i={i} />)}
        </ul>
        {/* LỖI CÀI SẴN: link 404 */}
        {BUGS && <p className="mt-10"><Link href="/khuyen-mai-het-han" className="underline">Khuyến mãi mùa hè</Link></p>}
      </section>
    </>
  );
}
