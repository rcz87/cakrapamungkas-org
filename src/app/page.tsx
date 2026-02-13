import Link from "next/link";
import Image from "next/image";
import {
  Leaf,
  ArrowRight,
  Sprout,
  BookOpen,
  Clock,
  TrendingUp,
  Calendar,
} from "lucide-react";
import { articles, getArticleHref } from "@/data/articles";

const featuredArticle = articles[0];
const latestArticles = articles.slice(1, 10);

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Editorial Style */}
      <section className="relative bg-white pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 border border-primary-100 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-primary-600" />
              <span className="text-sm text-primary-700 font-medium">
                Portal Ilmu & Berita Pertanian Indonesia
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Wawasan{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-emerald-600">
                Pertanian
              </span>{" "}
              Modern
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Artikel mendalam, analisis data, dan panduan praktis untuk memahami
              dinamika sektor pertanian Indonesia dari perspektif akademis dan praktis.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article - Pertanian Modern */}
      <section className="bg-gray-50 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image/Visual Side */}
              <div className="relative lg:order-1 h-64 lg:h-auto overflow-hidden bg-gradient-to-br from-slate-100 to-white">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <p className="text-xs font-semibold text-white uppercase tracking-wide">
                    Artikel Unggulan
                  </p>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 lg:p-12 lg:order-2">
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
                    FEATURED
                  </span>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>2026</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{featuredArticle.readTime} baca</span>
                  </div>
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {featuredArticle.title}
                </h2>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg">
                    Kementan 2026
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg">
                    Brigade Pangan
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg">
                    Rp40,14 T
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg">
                    Smart Farming 4.0
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg">
                    Analisis Strategis
                  </span>
                </div>

                <Link
                  href={getArticleHref(featuredArticle.slug)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors"
                >
                  Baca Artikel Lengkap
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Sorotan Pertanian Indonesia
            </h2>
            <p className="text-gray-600">
              Data dan fakta terkini sektor pertanian nasional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                value: "12-14%",
                label: "Kontribusi PDB Nasional",
                icon: TrendingUp,
                color: "bg-blue-50 text-blue-600"
              },
              {
                value: "28%",
                label: "Penyerapan Tenaga Kerja",
                icon: Sprout,
                color: "bg-green-50 text-green-600"
              },
              {
                value: "34,71 Jt",
                label: "Produksi Beras 2025 (Ton)",
                icon: Leaf,
                color: "bg-amber-50 text-amber-600"
              },
              {
                value: "300 Ribu",
                label: "Petani Milenial Aktif",
                icon: TrendingUp,
                color: "bg-primary-50 text-primary-600"
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles Grid */}
      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Artikel Terbaru
              </h2>
              <p className="mt-2 text-gray-600">
                Insight dan analisis mendalam sektor pertanian Indonesia
              </p>
            </div>
            <Link
              href="/artikel"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
            >
              Lihat Semua Artikel <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.map((article) => (
              <article
                key={article.slug}
                className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="relative h-44 bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-lg ${article.categoryColor}`}>
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-700 transition-colors mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>
                  <Link
                    href={getArticleHref(article.slug)}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    Baca Artikel <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/artikel"
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
            >
              Lihat Semua Artikel <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About/Services Section - Subtle */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              CV. Cakra Pamungkas Mandiri
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Selain menyajikan konten edukasi pertanian, kami juga menyediakan
              layanan jasa maklon penggilingan gabah, perdagangan komoditas, dan
              sarana produksi pertanian untuk mendukung ekosistem agribisnis Indonesia.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/layanan"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors"
            >
              Layanan Kami
            </Link>
            <Link
              href="/download"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors"
            >
              Download Template
            </Link>
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-medium rounded-xl hover:bg-primary-700 transition-colors"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
