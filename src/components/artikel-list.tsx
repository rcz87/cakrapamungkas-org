"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Search } from "lucide-react";
import type { Article } from "@/data/articles";
import { getArticleHref } from "@/data/articles";

const PER_PAGE = 6;

const categoryFilters = [
  { id: "semua", label: "Semua", matches: () => true },
  {
    id: "rempah",
    label: "Rempah & Komoditas",
    matches: (c: string) => ["Ekspor", "Komoditas"].includes(c),
  },
  {
    id: "kebijakan",
    label: "Kebijakan",
    matches: (c: string) => c === "Kebijakan",
  },
  {
    id: "teknologi",
    label: "Teknologi",
    matches: (c: string) => c === "Teknologi",
  },
  {
    id: "agribisnis",
    label: "Agribisnis",
    matches: (c: string) => ["Agribisnis", "Manajemen"].includes(c),
  },
  {
    id: "budidaya",
    label: "Budidaya",
    matches: (c: string) => ["Budidaya", "Lingkungan"].includes(c),
  },
  {
    id: "regulasi",
    label: "Regulasi",
    matches: (c: string) => c === "Regulasi",
  },
  {
    id: "sejarah",
    label: "Sejarah",
    matches: (c: string) => ["Sejarah & Ekonomi", "Kearifan Lokal"].includes(c),
  },
];

export function ArtikelList({ articles }: { articles: Article[] }) {
  const [activeKat, setActiveKat] = useState("semua");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const featured = articles.filter((a) => a.featured).slice(0, 3);

  const filtered = useMemo(() => {
    const filter = categoryFilters.find((k) => k.id === activeKat);
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

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const paginated = filtered.slice(
    (safePage - 1) * PER_PAGE,
    safePage * PER_PAGE,
  );

  return (
    <>
      {/* Hero — dark green */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-950 to-primary-900 px-4 sm:px-6 lg:px-8 pt-16 pb-14">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 30% 60%, rgba(22,163,74,0.2) 0%, transparent 55%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary-400 mb-3">
              Artikel · Articles
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-black text-white leading-[1.1] tracking-tight mb-4">
              Wawasan &amp; Analisis
              <br />
              <span className="text-primary-400">Agribisnis Indonesia</span>
            </h1>
            <p className="text-base text-white/70 leading-relaxed mb-2">
              Kumpulan artikel, analisis mendalam, dan insight seputar pertanian
              modern, rempah ekspor, agribisnis, teknologi, dan kebijakan
              pertanian Indonesia.
            </p>
            <p className="text-sm text-white/40 italic leading-relaxed mb-7">
              In-depth articles, analysis &amp; insights on Indonesian
              agriculture, spice exports, agribusiness, and agritech.
            </p>
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
              <input
                type="text"
                placeholder="Cari artikel... / Search articles..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                className="w-full pl-12 pr-4 py-3.5 bg-white/10 backdrop-blur border-2 border-white/20 rounded-xl text-sm text-white placeholder-white/50 outline-none focus:border-primary-400 transition-colors"
              />
            </div>
          </div>

          {/* Featured 3 preview */}
          <div className="flex flex-col gap-2.5">
            {featured.map((a) => (
              <Link
                key={a.slug}
                href={getArticleHref(a.slug)}
                className="flex gap-4 items-start px-4 py-3.5 bg-white/[0.07] border border-white/10 rounded-2xl hover:bg-white/[0.12] transition-colors"
              >
                <div className="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden bg-white/5">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span
                    className={`inline-block px-2 py-0.5 text-[10px] font-bold rounded ${a.categoryColor} mb-1.5`}
                  >
                    {a.category}
                  </span>
                  <p className="text-[13px] font-semibold text-white leading-snug line-clamp-2">
                    {a.title}
                  </p>
                  <p className="text-[11px] text-white/45 mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {a.readTime}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky filter tabs */}
      <section className="sticky top-16 z-20 bg-white border-b border-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex gap-1 overflow-x-auto scrollbar-thin items-center">
          {categoryFilters.map((k) => {
            const isActive = activeKat === k.id;
            return (
              <button
                key={k.id}
                onClick={() => {
                  setActiveKat(k.id);
                  setPage(1);
                }}
                className={`px-4 py-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${
                  isActive
                    ? "text-primary-600 border-primary-600"
                    : "text-gray-500 border-transparent hover:text-gray-700"
                }`}
              >
                {k.label}
              </button>
            );
          })}
          <span className="ml-auto px-3 text-xs text-gray-400 whitespace-nowrap">
            {filtered.length} artikel
          </span>
        </div>
      </section>

      {/* Articles grid */}
      <section className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-12 pb-16">
        <div className="max-w-7xl mx-auto">
          {paginated.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <div className="text-5xl mb-4">🔍</div>
              <p>Tidak ada artikel yang sesuai.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginated.map((a) => (
                <article
                  key={a.slug}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all flex flex-col"
                >
                  <Link
                    href={getArticleHref(a.slug)}
                    className="block relative h-40 overflow-hidden"
                  >
                    <Image
                      src={a.image}
                      alt={a.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {a.featured && (
                      <span className="absolute top-3 left-3 px-2.5 py-0.5 bg-primary-600 text-white text-[10px] font-bold tracking-wider rounded-full">
                        FEATURED
                      </span>
                    )}
                  </Link>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`px-2.5 py-0.5 text-[11px] font-bold rounded ${a.categoryColor}`}
                      >
                        {a.category}
                      </span>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {a.readTime}
                      </span>
                    </div>
                    <h3 className="text-[15px] font-bold text-gray-900 leading-snug mb-2 line-clamp-2 group-hover:text-primary-700 transition-colors">
                      {a.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 flex-1 mb-4">
                      {a.excerpt}
                    </p>
                    <Link
                      href={getArticleHref(a.slug)}
                      className="inline-flex items-center gap-1 text-sm font-bold text-primary-600 hover:text-primary-700 transition-colors mt-auto"
                    >
                      Baca Selengkapnya <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center flex-wrap gap-2 mt-10">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={safePage === 1}
                className="px-4 py-2.5 text-sm font-semibold rounded-lg border border-gray-200 bg-white disabled:text-gray-300 disabled:cursor-not-allowed text-gray-700 hover:bg-gray-50 transition-colors"
              >
                ← Sebelumnya
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => {
                const isActive = safePage === p;
                return (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`px-4 py-2.5 text-sm font-bold rounded-lg border transition-colors ${
                      isActive
                        ? "bg-primary-600 text-white border-primary-600"
                        : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    {p}
                  </button>
                );
              })}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={safePage === totalPages}
                className="px-4 py-2.5 text-sm font-semibold rounded-lg border border-gray-200 bg-white disabled:text-gray-300 disabled:cursor-not-allowed text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Berikutnya →
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-white border-t border-gray-100 px-4 sm:px-6 lg:px-8 py-14">
        <div className="max-w-xl mx-auto text-center">
          <span className="text-4xl">📬</span>
          <h2 className="text-2xl sm:text-[1.8rem] font-black text-gray-900 tracking-tight mt-3 mb-3">
            Jangan Ketinggalan Artikel Terbaru
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-1.5">
            Analisis pasar rempah, kebijakan pertanian, dan panduan agribisnis
            langsung ke inbox Anda.
          </p>
          <p className="text-xs text-gray-400 italic leading-relaxed mb-6">
            Market analysis, agricultural policy &amp; agribusiness guides —
            delivered to your inbox.
          </p>
          <form
            className="flex flex-wrap gap-2.5 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="email@anda.com"
              className="flex-1 min-w-[180px] px-4 py-3 text-sm bg-white border-2 border-gray-200 rounded-xl outline-none focus:border-primary-600 transition-colors"
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
