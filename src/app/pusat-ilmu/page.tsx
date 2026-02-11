import Link from "next/link";
import {
  BookOpen,
  Sprout,
  BarChart3,
  Landmark,
  ArrowRight,
  Leaf,
} from "lucide-react";

export const metadata = {
  title: "Pusat Ilmu | CV. Cakra Pamungkas Mandiri",
  description:
    "Artikel edukasi pertanian: budidaya, manajemen risiko, dan regulasi terkini.",
};

const categories = [
  {
    name: "Budidaya",
    icon: Sprout,
    color: "bg-green-100 text-green-700",
    description: "Teknik budidaya dan Good Agricultural Practices (GAP)",
  },
  {
    name: "Manajemen",
    icon: BarChart3,
    color: "bg-blue-100 text-blue-700",
    description: "Manajemen risiko dan strategi agribisnis",
  },
  {
    name: "Regulasi",
    icon: Landmark,
    color: "bg-amber-100 text-amber-700",
    description: "Update kebijakan dan program pemerintah",
  },
];

const articles = [
  {
    category: "Budidaya",
    categoryColor: "bg-green-100 text-green-700",
    title: "Teknologi Budidaya GAP untuk Padi Berkualitas",
    excerpt:
      "Panduan praktis menerapkan Good Agricultural Practices (GAP) dalam budidaya padi. Mulai dari pemilihan varietas unggul, pengolahan lahan, sistem tanam, hingga pasca panen yang optimal.",
    readTime: "8 min",
  },
  {
    category: "Budidaya",
    categoryColor: "bg-green-100 text-green-700",
    title: "Cara Mengenali Gejala Defisiensi Nutrisi pada Padi",
    excerpt:
      "Pelajari tanda-tanda kekurangan unsur hara pada tanaman padi dan cara mengatasinya dengan pemupukan yang tepat dan berimbang.",
    readTime: "6 min",
  },
  {
    category: "Manajemen",
    categoryColor: "bg-blue-100 text-blue-700",
    title: "Manajemen Risiko dalam Agribisnis Modern",
    excerpt:
      "Strategi komprehensif mengelola risiko gagal panen, fluktuasi harga pasar, dan tantangan perubahan iklim dalam bisnis pertanian.",
    readTime: "10 min",
  },
  {
    category: "Manajemen",
    categoryColor: "bg-blue-100 text-blue-700",
    title: "Perhitungan Break Even Point Usaha Tani Padi",
    excerpt:
      "Cara menghitung titik impas usaha tani padi untuk membantu petani mengambil keputusan bisnis yang tepat dan menguntungkan.",
    readTime: "7 min",
  },
  {
    category: "Regulasi",
    categoryColor: "bg-amber-100 text-amber-700",
    title: "Update Program Pemerintah 2026 untuk Pertanian",
    excerpt:
      "Rangkuman kebijakan dan program terbaru pemerintah yang mendukung sektor pertanian Indonesia: subsidi pupuk, asuransi pertanian, dan lainnya.",
    readTime: "5 min",
  },
  {
    category: "Regulasi",
    categoryColor: "bg-amber-100 text-amber-700",
    title: "Panduan Lengkap Asuransi Usaha Tani Padi (AUTP)",
    excerpt:
      "Semua yang perlu Anda ketahui tentang AUTP: syarat pendaftaran, premi, klaim, dan manfaat perlindungan bagi petani padi.",
    readTime: "6 min",
  },
];

export default function PusatIlmuPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-800/60 border border-primary-700/50 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-primary-200 font-medium">
                Blog & Edukasi
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Pusat Ilmu Pertanian
            </h1>
            <p className="mt-4 text-lg text-primary-100/80 leading-relaxed">
              Artikel, panduan, dan informasi terkini seputar budidaya,
              manajemen, dan regulasi dunia pertanian Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid sm:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="flex items-center gap-4 bg-gray-50 rounded-xl p-4 border border-gray-100"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${cat.color}`}
                >
                  <cat.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{cat.name}</h3>
                  <p className="text-xs text-gray-500">{cat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.title}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="h-44 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <Sprout className="w-14 h-14 text-primary-400" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`inline-block px-2.5 py-1 text-xs font-semibold rounded-lg ${article.categoryColor}`}
                    >
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-400">
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-700 transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to PadiDoc */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Leaf className="w-10 h-10 text-primary-200 mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Butuh Bantuan Hitung Pupuk?
          </h2>
          <p className="text-primary-100/80 mb-8">
            Coba Aplikasi PadiDoc gratis untuk diagnosa tanaman padi dan
            rekomendasi penanganan yang tepat.
          </p>
          <a
            href="https://padidoc.cakrapamungkas.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-bold rounded-xl hover:bg-primary-50 transition-colors shadow-lg"
          >
            <Leaf className="w-5 h-5" />
            Coba PadiDoc Gratis
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  );
}
