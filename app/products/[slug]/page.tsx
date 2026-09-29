import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BUGS, img, products, vnd } from "@/lib/products";

type Props = { params: { slug: string } };
export const dynamicParams = false;
export const generateStaticParams = () => products.map((p) => ({ slug: p.slug }));

export function generateMetadata({ params }: Props): Metadata {
  const i = products.findIndex((p) => p.slug === params.slug);
  const p = products[i];
  if (!p) return {};
  return {
    // LỖI CÀI SẴN: sp #2 trùng title với sp #1; sp #3 thiếu meta description; sp #4 canonical trỏ sang domain khác
    title: BUGS && i === 1 ? `${products[0].name} | Vải Store` : `${p.name} | Vải Store`,
    description: BUGS && i === 2 ? undefined : p.desc,
    alternates: { canonical: BUGS && i === 3 ? "https://cu.example.com/products/vay-midi-xanh-reu" : `/products/${p.slug}` },
  };
}

export default function ProductPage({ params }: Props) {
  const p = products.find((x) => x.slug === params.slug);
  if (!p) notFound();
  return (
    <article className="mx-auto grid max-w-6xl gap-10 px-5 pt-8 md:grid-cols-2">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img(p)} alt={p.name} width={600} height={750} className="w-full rounded-lg" />
      <div>
        <Link href="/shop" className="text-sm text-muted underline">← Về cửa hàng</Link>
        <h1 className="mt-4 font-serif text-4xl">{p.name}</h1>
        <p className="mt-2 text-xl">{vnd(p.price)}</p>
        <p className="mt-6 max-w-prose text-muted">{p.desc}</p>
        <button type="button" className="mt-8 min-h-[44px] rounded-lg bg-brand px-8 text-white transition-colors duration-200 hover:bg-ink">
          Thêm vào giỏ
        </button>
      </div>
    </article>
  );
}
