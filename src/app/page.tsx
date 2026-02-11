import Link from "next/link";
import {
  Leaf,
  ArrowRight,
  Sprout,
  BookOpen,
  Handshake,
  Download,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-earth-400 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-800/60 border border-primary-700/50 rounded-full mb-6">
              <Sprout className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-primary-200 font-medium">
                CV. Cakra Pamungkas Mandiri
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Solusi{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-emerald-300">
                Pertanian Modern
              </span>{" "}
              untuk Indonesia
            </h1>

            <p className="mt-6 text-lg text-primary-100/80 leading-relaxed max-w-2xl">
              Kami hadir sebagai mitra terpercaya dalam edukasi pertanian, jasa
              maklon, perdagangan gabah, dan sarana produksi pertanian.
              Membangun ekosistem agribisnis yang berkelanjutan.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/padidoc"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-400 transition-colors shadow-lg shadow-primary-900/30"
              >
                <Leaf className="w-5 h-5" />
                Lihat Info PadiDoc
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/layanan"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 border border-white/20 transition-colors"
              >
                Lihat Layanan Kami
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "Agribisnis", label: "Fokus Industri", icon: Sprout },
              { value: "Terpercaya", label: "Mitra Petani", icon: Users },
              { value: "Nasional", label: "Jangkauan Layanan", icon: TrendingUp },
              { value: "Bersertifikat", label: "Legalitas Lengkap", icon: Shield },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-50 rounded-xl mb-3">
                  <stat.icon className="w-6 h-6 text-primary-600" />
                </div>
                <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Apa yang Kami Tawarkan
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Dari hulu ke hilir, kami menyediakan layanan komprehensif untuk
              mendukung pertanian Indonesia yang lebih maju.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Handshake,
                title: "Jasa Maklon",
                description:
                  "Layanan penggilingan dan pengolahan gabah berkualitas dengan standar Bulog. Kerjasama yang transparan dan menguntungkan.",
                href: "/layanan#maklon",
              },
              {
                icon: Sprout,
                title: "Jual Beli Gabah & Saprotan",
                description:
                  "Perdagangan gabah dengan harga kompetitif serta penyediaan sarana produksi pertanian (pupuk, benih, pestisida).",
                href: "/layanan#gabah",
              },
              {
                icon: BookOpen,
                title: "Pusat Edukasi",
                description:
                  "Artikel dan panduan lengkap tentang budidaya, manajemen risiko, dan regulasi terbaru di dunia pertanian.",
                href: "/pusat-ilmu",
              },
              {
                icon: Leaf,
                title: "PadiDoc — Manajemen Penggilingan",
                description:
                  "Aplikasi manajemen penggilingan padi untuk operasional, keuangan, dan produksi. Coming soon!",
                href: "/padidoc",
              },
              {
                icon: Download,
                title: "Download Template",
                description:
                  "Unduh template surat perjanjian sewa lahan, bagi hasil, dan dokumen penting lainnya untuk kebutuhan agribisnis Anda.",
                href: "/download",
              },
              {
                icon: Shield,
                title: "Legalitas & Kepercayaan",
                description:
                  "Badan usaha resmi dengan NIB dan Akta Pendirian CV yang sah. Mitra bisnis yang terpercaya dan profesional.",
                href: "/tentang",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary-200 transition-all"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-100 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {feature.description}
                </p>
                {"external" in feature ? (
                  <a
                    href={feature.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    Selengkapnya <ArrowRight className="w-4 h-4" />
                  </a>
                ) : (
                  <Link
                    href={feature.href}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    Selengkapnya <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-800 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-6">
            <Leaf className="w-8 h-8 text-primary-200" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Manajemen Penggilingan Padi Anda Kurang Maksimal?
          </h2>
          <p className="text-lg text-primary-100/80 mb-8 max-w-2xl mx-auto">
            Gunakan aplikasi PadiDoc untuk mengelola operasional penggilingan padi Anda. 
            Pantau produksi, keuangan, dan performa bisnis secara real-time. Gratis, mudah, dan akurat.
          </p>
          <Link
            href="/padidoc"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-bold rounded-xl hover:bg-primary-50 transition-colors shadow-lg"
          >
            <Leaf className="w-5 h-5" />
            Lihat Info PadiDoc
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Pusat Ilmu Pertanian
              </h2>
              <p className="mt-3 text-gray-600">
                Artikel dan panduan terbaru seputar dunia pertanian.
              </p>
            </div>
            <Link
              href="/pusat-ilmu"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
            >
              Lihat Semua <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Budidaya",
                title: "Teknologi Budidaya GAP untuk Padi Berkualitas",
                excerpt:
                  "Panduan praktis Good Agricultural Practices (GAP) dalam budidaya padi. Dari pemilihan benih hingga pasca panen.",
              },
              {
                category: "Manajemen",
                title: "Manajemen Risiko dalam Agribisnis Modern",
                excerpt:
                  "Strategi mengelola risiko gagal panen, fluktuasi harga, dan tantangan iklim dalam bisnis pertanian.",
              },
              {
                category: "Regulasi",
                title: "Update Program Pemerintah 2026 untuk Pertanian",
                excerpt:
                  "Rangkuman kebijakan dan program terbaru pemerintah yang mendukung sektor pertanian Indonesia.",
              },
            ].map((article) => (
              <article
                key={article.title}
                className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-md transition-all border border-gray-100"
              >
                <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <Sprout className="w-16 h-16 text-primary-400" />
                </div>
                <div className="p-6">
                  <span className="inline-block px-2.5 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-lg">
                    {article.category}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-gray-900 group-hover:text-primary-700 transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <Link
                    href="/pusat-ilmu"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    Baca Selengkapnya <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/pusat-ilmu"
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
            >
              Lihat Semua Artikel <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
