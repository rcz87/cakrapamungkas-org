import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  Sprout,
  ArrowRight,
  Clock,
} from "lucide-react";
import { articles, getArticleHref } from "@/data/articles";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata = {
  title: "Artikel Pertanian | CV. Cakra Pamungkas Mandiri",
  description:
    "Kumpulan artikel seputar pertanian modern, agribisnis, teknologi, dan kearifan lokal Indonesia.",
};

export default function ArtikelPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Beranda", href: "/" },
          { name: "Artikel", href: "/artikel" },
        ]}
      />
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-800/60 border border-primary-700/50 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-primary-200 font-medium">
                Blog & Artikel
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Artikel Pertanian
            </h1>
            <p className="mt-4 text-lg text-primary-100/80 leading-relaxed">
              Kumpulan artikel, analisis, dan insight seputar pertanian modern,
              agribisnis, teknologi, dan kearifan lokal Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={getArticleHref(article.slug)}
                className="block cursor-pointer group"
              >
                <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all h-full">
                  <div className="relative h-44 bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {article.featured && (
                      <div className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`inline-block px-2.5 py-1 text-xs font-semibold rounded-lg ${article.categoryColor}`}
                      >
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-700 transition-colors leading-snug mb-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="w-10 h-10 text-primary-200 mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Butuh Panduan Praktis?
          </h2>
          <p className="text-primary-100/80 mb-8">
            Akses ratusan SOP, template, dan panduan lengkap di Pusat Ilmu kami.
          </p>
          <Link
            href="/pusat-ilmu"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-bold rounded-xl hover:bg-primary-50 transition-colors shadow-lg"
          >
            <Sprout className="w-5 h-5" />
            Lihat Pusat Ilmu
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
