import type { Metadata } from "next";
import ProductCard from "@/components/product-card";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Cửa hàng – Tất cả sản phẩm | Vải Store",
  description: "Xem toàn bộ áo, quần, váy tại Vải Store.",
  alternates: { canonical: "/shop" },
};

export default function Shop() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-8">
      <h1 className="font-serif text-3xl">Tất cả sản phẩm</h1>
      <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3">
        {products.map((p, i) => <ProductCard key={p.slug} p={p} i={i} />)}
      </ul>
    </section>
  );
}
