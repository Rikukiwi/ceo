export type Product = { slug: string; name: string; price: number; tone: string; desc: string };
export const BUGS = process.env.NEXT_PUBLIC_SEO_BUGS !== "0";
export const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const products: Product[] = [
  { slug: "ao-thun-oversize-den", name: "Áo thun oversize đen", price: 249000, tone: "#1f2937", desc: "Cotton 100%, form rộng, mặc quanh năm." },
  { slug: "ao-so-mi-linen-trang", name: "Áo sơ mi linen trắng", price: 459000, tone: "#9ca3af", desc: "Linen thoáng mát, hợp đi làm và dạo phố." },
  { slug: "quan-jean-ong-suong", name: "Quần jean ống suông", price: 589000, tone: "#1e3a8a", desc: "Denim dày dặn, ống suông tôn dáng." },
  { slug: "vay-midi-xanh-reu", name: "Váy midi xanh rêu", price: 529000, tone: "#0b3b2a", desc: "Váy midi nhẹ, xòe nhẹ, dễ phối." },
  { slug: "ao-khoac-bomber-kaki", name: "Áo khoác bomber kaki", price: 690000, tone: "#78716c", desc: "Bomber kaki bền, lót mỏng." },
  { slug: "quan-short-kaki-be", name: "Quần short kaki be", price: 319000, tone: "#a16207", desc: "Short kaki co giãn nhẹ, mùa hè." },
];

export const vnd = (n: number) => n.toLocaleString("vi-VN") + "₫";
export const img = (p: Product) =>
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='750'><rect width='100%' height='100%' fill='${p.tone}'/><text x='50%' y='50%' fill='#fff' font-size='30' text-anchor='middle' font-family='sans-serif'>${p.name}</text></svg>`
  );
