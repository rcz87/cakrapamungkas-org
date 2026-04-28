import type { Metadata } from "next";
import { articles } from "@/data/articles";
import { getDynamicArticles } from "@/lib/articles-db";
import { PusatIlmuList } from "@/components/pusat-ilmu-list";

export const metadata: Metadata = {
  title:
    "Pusat Ilmu — Belajar Pertanian & Agribisnis Modern | Cakra Pamungkas",
  description:
    "Panduan praktis budidaya, manajemen usaha tani, teknologi, dan regulasi pertanian Indonesia. Practical guides on Indonesian agriculture, cultivation, agribusiness, and agritech.",
  alternates: { canonical: "/pusat-ilmu" },
  openGraph: {
    title: "Pusat Ilmu · Indonesian Agriculture Knowledge Center",
    description:
      "Practical guides & in-depth analysis on cultivation, agribusiness management, agritech, and policy.",
    type: "website",
  },
};

export default async function PusatIlmuPage() {
  const dynamicArticles = await getDynamicArticles();
  const allArticles = [...dynamicArticles, ...articles];

  return <PusatIlmuList articles={allArticles} />;
}
