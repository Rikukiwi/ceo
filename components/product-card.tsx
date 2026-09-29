import Link from "next/link";
import { BUGS, img, vnd, type Product } from "@/lib/products";

export default function ProductCard({ p, i }: { p: Product; i: number }) {
  // LỖI CÀI SẴN: sản phẩm số lẻ (i = 1, 3, 5) thiếu thuộc tính alt
  const alt = BUGS && i % 2 === 1 ? undefined : p.name;
  return (
    <li>
      <Link href={`/products/${p.slug}`} className="group block">
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
        <img src={img(p)} alt={alt} width={600} height={750} loading="lazy"
          className="aspect-[4/5] w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
        <h3 className="mt-3 font-serif text-lg">{p.name}</h3>
        <p className="text-sm text-muted">{vnd(p.price)}</p>
      </Link>
    </li>
  );
}
