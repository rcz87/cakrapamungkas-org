import type { Metadata } from "next";
import { articles } from "@/data/articles";
import { getDynamicArticles } from "@/lib/articles-db";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { ArtikelList } from "@/components/artikel-list";

export const metadata: Metadata = {
  title: "Artikel — Wawasan & Analisis Agribisnis Indonesia | Cakra Pamungkas",
  description:
    "Kumpulan artikel, analisis mendalam, dan insight seputar pertanian modern, rempah ekspor, agribisnis, teknologi, dan kebijakan pertanian Indonesia.",
  alternates: { canonical: "/artikel" },
};

export default async function ArtikelPage() {
  const dynamicArticles = await getDynamicArticles();
  const allArticles = [...dynamicArticles, ...articles];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Beranda", href: "/" },
          { name: "Artikel", href: "/artikel" },
        ]}
      />
      <ArtikelList articles={allArticles} />
    </>
  );
}
