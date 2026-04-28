import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Clock,
  Calendar,
} from "lucide-react";
import { articles, getArticleHref } from "@/data/articles";
import {
  HeroTypingSubtitle,
  AnimatedStats,
  FadeInSection,
  AnimatedArticleCard,
} from "@/components/home-animations";
import {
  CommoditiesSection,
  ServicesSection,
  PadiDocBanner,
} from "@/components/home-sections";

const featuredArticle = articles[0];
const latestArticles = articles.slice(1, 7);

const heroPills = [
  { icon: "🌾", label: "Padi & Beras", bg: "bg-primary-50", border: "border-primary-200", text: "text-primary-700" },
  { icon: "🫚", label: "Jahe Merah", bg: "bg-orange-50", border: "border-orange-200", text: "text-orange-800" },
  { icon: "🌶️", label: "Lada & Cabai", bg: "bg-rose-50", border: "border-rose-200", text: "text-rose-700" },
  { icon: "☕", label: "Kopi & Kakao", bg: "bg-fuchsia-50", border: "border-fuchsia-200", text: "text-fuchsia-700" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — Split Multi-Komoditas */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-white to-primary-50 pt-14 pb-16 lg:pt-20 lg:pb-24">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(220, 252, 231, 0.7) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(220, 252, 231, 0.5) 0%, transparent 40%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left — Copy */}
            <div>
              <HeroTypingSubtitle />
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-gray-900 leading-[1.1] tracking-tight mb-5">
                Pusat Wawasan{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-emerald-600">
                  Agribisnis
                </span>{" "}
                Indonesia
              </h1>
              <p className="text-base lg:text-lg text-gray-500 leading-relaxed mb-8 max-w-xl">
                Dari padi dan jagung hingga rempah-rempah dan hasil bumi — kami
                menyajikan edukasi, analisis, dan layanan agribisnis
                multi-komoditas untuk mendukung kedaulatan pangan Indonesia
                serta menjangkau pasar global.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <Link
                  href="/komoditas"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white text-sm font-bold rounded-xl shadow-lg shadow-primary-600/25 hover:bg-primary-700 transition-colors"
                >
                  Jelajahi Komoditas
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/layanan"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 text-sm font-semibold rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  Lihat Layanan
                </Link>
              </div>
              <div className="flex flex-wrap gap-2">
                {heroPills.map((p) => (
                  <span
                    key={p.label}
                    className={`px-3 py-1 ${p.bg} ${p.border} ${p.text} text-xs font-semibold rounded-full border`}
                  >
                    {p.icon} {p.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — Hero visual */}
            <div className="relative">
              <div className="relative aspect-[4/3] lg:aspect-[5/4] rounded-3xl overflow-hidden border border-primary-100 shadow-xl shadow-primary-900/5">
                <Image
                  src="/images/gambar-petani-manggul-bibit.jpg"
                  alt="Petani Indonesia membawa bibit"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-950/40 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/95 backdrop-blur text-xs font-bold text-primary-700 rounded-full">
                    🌿 Multi-Komoditas
                  </span>
                  <span className="px-3 py-1 bg-white/95 backdrop-blur text-xs font-bold text-emerald-700 rounded-full">
                    🌏 Export Ready
                  </span>
                </div>
              </div>
              {/* Floating accent */}
              <div className="hidden lg:block absolute -top-4 -right-4 w-28 h-28 rounded-full bg-emerald-100/70 blur-2xl" />
              <div className="hidden lg:block absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-primary-100/70 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Komoditas Showcase */}
      <CommoditiesSection />

      {/* Featured Article */}
      <section className="bg-gray-50 py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-primary-600">
                Artikel Unggulan
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mt-1.5">
                Sorotan Utama
              </h2>
            </div>
          </div>
          <FadeInSection direction="up">
            <article className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-black/5 border border-gray-100">
              <div className="grid lg:grid-cols-12 gap-0">
                <div className="relative lg:col-span-5 h-64 lg:h-auto min-h-[340px] overflow-hidden bg-gradient-to-br from-slate-100 to-white">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 41vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-5">
                    <p className="text-[11px] font-bold tracking-widest text-white uppercase">
                      Artikel Unggulan
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-7 p-8 lg:p-12">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-primary-600 text-white text-[11px] font-bold rounded-full tracking-wider">
                      FEATURED
                    </span>
                    <div className="flex items-center gap-1.5 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>2026</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{featuredArticle.readTime} baca</span>
                    </div>
                  </div>
                  <h3 className="text-2xl lg:text-[1.65rem] font-extrabold text-gray-900 leading-snug tracking-tight mb-4">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-6">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-7">
                    {[
                      "Kementan 2026",
                      "Brigade Pangan",
                      "Rp40,14 T",
                      "Agritech 4.0",
                      "Multi-Komoditas",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-gray-100 text-gray-500 text-xs font-medium rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={getArticleHref(featuredArticle.slug)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white text-sm font-bold rounded-xl shadow-lg shadow-primary-600/25 hover:bg-primary-700 transition-colors"
                  >
                    Baca Artikel Lengkap <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          </FadeInSection>
        </div>
      </section>

      {/* Data & Fakta */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection direction="up">
            <div className="text-center mb-12">
              <span className="text-xs font-bold tracking-widest uppercase text-primary-600">
                Data &amp; Fakta
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-extrabold text-gray-900 tracking-tight mt-2 mb-2">
                Sorotan Agribisnis Indonesia
              </h2>
              <p className="text-gray-500">
                Angka dan fakta terkini sektor pertanian &amp; agribisnis nasional
              </p>
            </div>
          </FadeInSection>

          <AnimatedStats />
        </div>
      </section>

      {/* Latest Articles */}
      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection direction="up">
            <div className="flex items-end justify-between mb-10 flex-wrap gap-3">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-primary-600">
                  Konten Terbaru
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mt-2">
                  Artikel &amp; Analisis
                </h2>
                <p className="mt-1.5 text-sm text-gray-500">
                  Insight mendalam dari padi, rempah, hingga agribisnis modern
                </p>
              </div>
              <Link
                href="/artikel"
                className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
              >
                Lihat Semua Artikel <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {latestArticles.map((article, index) => (
              <AnimatedArticleCard key={article.slug} index={index}>
                <article className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all">
                  <div className="relative h-44 bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`inline-block px-2.5 py-1 text-[11px] font-bold rounded-md ${article.categoryColor}`}
                      >
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 leading-snug group-hover:text-primary-700 transition-colors mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-4">
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
              </AnimatedArticleCard>
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

      {/* Layanan Kami */}
      <ServicesSection />

      {/* PadiDoc CTA Banner */}
      <PadiDocBanner />
    </>
  );
}
