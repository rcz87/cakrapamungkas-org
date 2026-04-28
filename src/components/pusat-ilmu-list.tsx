"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Search } from "lucide-react";
import type { Article } from "@/data/articles";
import { getArticleHref } from "@/data/articles";

const kategori = [
  { id: "semua", label: "Semua", en: "All", matches: () => true },
  {
    id: "budidaya",
    label: "Budidaya",
    en: "Cultivation",
    matches: (c: string) => ["Budidaya", "Lingkungan"].includes(c),
  },
  {
    id: "rempah",
    label: "Rempah & Komoditas",
    en: "Spices",
    matches: (c: string) => ["Ekspor", "Komoditas"].includes(c),
  },
  {
    id: "manajemen",
    label: "Manajemen",
    en: "Management",
    matches: (c: string) => ["Manajemen", "Agribisnis"].includes(c),
  },
  {
    id: "teknologi",
    label: "Teknologi",
    en: "Technology",
    matches: (c: string) => c === "Teknologi",
  },
  {
    id: "regulasi",
    label: "Regulasi",
    en: "Policy",
    matches: (c: string) => ["Regulasi", "Kebijakan"].includes(c),
  },
];

function levelFromReadTime(rt: string): {
  label: string;
  labelEn: string;
  bg: string;
  text: string;
} {
  const match = rt.match(/(\d+)/);
  const minutes = match ? parseInt(match[1], 10) : 0;
  if (minutes <= 12)
    return {
      label: "Pemula",
      labelEn: "Beginner",
      bg: "bg-primary-50",
      text: "text-primary-700",
    };
  if (minutes <= 22)
    return {
      label: "Menengah",
      labelEn: "Intermediate",
      bg: "bg-amber-50",
      text: "text-amber-800",
    };
  return {
    label: "Lanjutan",
    labelEn: "Advanced",
    bg: "bg-violet-50",
    text: "text-violet-700",
  };
}

export function PusatIlmuList({ articles }: { articles: Article[] }) {
  const [activeKat, setActiveKat] = useState("semua");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const filter = kategori.find((k) => k.id === activeKat);
    return articles.filter((a) => {
      const matchKat = filter?.matches(a.category) ?? true;
      const q = search.toLowerCase();
      const matchSearch =
        q === "" ||
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q);
      return matchKat && matchSearch;
    });
  }, [articles, activeKat, search]);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-white border-b border-gray-100 px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary-600 mb-3">
            Pusat Ilmu · Knowledge Center
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-[3rem] font-black text-gray-900 leading-[1.15] tracking-tight mb-4">
            Belajar Pertanian &amp;
            <br />
            <span className="bg-gradient-to-br from-primary-600 to-emerald-600 bg-clip-text text-transparent">
              Agribisnis Modern
            </span>
          </h1>
          <p className="text-base text-gray-500 leading-relaxed mb-2">
            Panduan praktis, analisis mendalam, dan wawasan terkini seputar
            budidaya, manajemen usaha tani, teknologi, dan regulasi pertanian
            Indonesia.
          </p>
          <p className="text-sm text-gray-400 italic mb-8">
            Practical guides &amp; in-depth analysis on Indonesian agriculture,
            cultivation, agribusiness management, and agritech.
          </p>
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Cari panduan atau artikel... / Search guides..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-primary-100 rounded-2xl text-sm text-gray-700 outline-none focus:border-primary-600 transition-colors shadow-sm shadow-primary-600/10"
            />
          </div>
        </div>
      </section>

      {/* Sticky filter tabs */}
      <section className="sticky top-16 z-20 bg-white border-b border-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex gap-1 overflow-x-auto scrollbar-thin items-center">
          {kategori.map((k) => {
            const isActive = activeKat === k.id;
            return (
              <button
                key={k.id}
                onClick={() => setActiveKat(k.id)}
                className={`px-4 py-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${
                  isActive
                    ? "text-primary-600 border-primary-600"
                    : "text-gray-500 border-transparent hover:text-gray-700"
                }`}
              >
                {k.label}
                <span className="ml-1.5 text-[11px] text-gray-400 italic font-normal">
                  {k.en}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Content grid */}
      <section className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-12 pb-20">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <div className="text-5xl mb-4">🔍</div>
              <p>Tidak ada konten yang sesuai pencarian.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((item) => {
                const lv = levelFromReadTime(item.readTime);
                return (
                  <article
                    key={item.slug}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all"
                  >
                    <div className="h-1.5 bg-gradient-to-r from-primary-700 to-primary-500" />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3.5">
                        <span
                          className={`px-2.5 py-0.5 text-[11px] font-bold rounded ${item.categoryColor}`}
                        >
                          {item.category}
                        </span>
                        <span
                          className={`px-2.5 py-0.5 text-[11px] font-semibold rounded ${lv.bg} ${lv.text}`}
                        >
                          {lv.label} · {lv.labelEn}
                        </span>
                      </div>
                      <h3 className="text-[15px] font-extrabold text-gray-900 leading-snug mb-3 line-clamp-2 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-5">
                        {item.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {item.readTime}
                        </span>
                        <Link
                          href={getArticleHref(item.slug)}
                          className="inline-flex items-center gap-1 text-sm font-bold text-primary-600 hover:text-primary-700 transition-colors"
                        >
                          Baca Panduan <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-white border-t border-gray-100 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-xl mx-auto text-center">
          <span className="text-4xl">📚</span>
          <h2 className="text-2xl sm:text-[1.9rem] font-black text-gray-900 tracking-tight mt-4 mb-3">
            Dapatkan Update Konten Terbaru
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-1.5">
            Panduan budidaya, analisis pasar, dan wawasan agribisnis langsung ke
            inbox Anda.
          </p>
          <p className="text-xs text-gray-400 italic leading-relaxed mb-7">
            Get the latest agricultural guides and market insights directly to
            your inbox.
          </p>
          <form
            className="flex flex-wrap gap-2.5 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Email Anda / Your email..."
              className="flex-1 min-w-[200px] px-4 py-3 text-sm bg-white border-2 border-gray-200 rounded-xl outline-none focus:border-primary-600 transition-colors"
            />
            <button
              type="submit"
              className="px-5 py-3 bg-primary-600 text-white text-sm font-bold rounded-xl hover:bg-primary-700 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
