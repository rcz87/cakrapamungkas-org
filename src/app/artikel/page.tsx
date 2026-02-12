import Link from "next/link";
import {
  BookOpen,
  Sprout,
  ArrowRight,
  Clock,
} from "lucide-react";

export const metadata = {
  title: "Artikel Pertanian | CV. Cakra Pamungkas Mandiri",
  description:
    "Kumpulan artikel seputar pertanian modern, agribisnis, teknologi, dan kearifan lokal Indonesia.",
};

const articles = [
  {
    category: "Agribisnis",
    categoryColor: "bg-indigo-100 text-indigo-700",
    title: "Revolusi Cangkul Digital: 300 Ribu Petani Milenial Omzet Miliaran",
    excerpt:
      "Bagaimana petani milenial mengubah stigma 'kerja di sawah' menjadi bisnis miliaran rupiah. Profil sukses agropreneur muda yang memanfaatkan smart farming dan pasar digital untuk menciptakan kekayaan di pedesaan.",
    readTime: "20 min",
    link: "/artikel/petani-milenial",
    featured: true,
  },
  {
    category: "Sejarah & Ekonomi",
    categoryColor: "bg-purple-100 text-purple-700",
    title: "Arsitektur Pertanian Indonesia: Transformasi Tradisi & Visi Kedaulatan Pangan",
    excerpt:
      "Analisis mendalam tentang evolusi sektor pertanian Indonesia dari era Neolitikum hingga adopsi teknologi Agritech 4.0. Membahas signifikansi makroekonomi, produktivitas tenaga kerja, kearifan lokal seperti sistem Subak Bali, hingga kebijakan swasembada pangan.",
    readTime: "45 min",
    link: "/artikel/arsitektur-pertanian-indonesia",
    featured: true,
  },
  {
    category: "Teknologi",
    categoryColor: "bg-blue-100 text-blue-700",
    title: "Revolusi Agritech 4.0: Drone, IoT & AI dalam Pertanian Indonesia",
    excerpt:
      "Implementasi teknologi pintar untuk meningkatkan efisiensi produksi hingga 30% dengan monitoring real-time. Membahas drone, IoT, AI, dan pemantauan satelit untuk pertanian modern.",
    readTime: "25 min",
    link: "/artikel/revolusi-agritech-4-0",
    featured: true,
  },
  {
    category: "Kearifan Lokal",
    categoryColor: "bg-emerald-100 text-emerald-700",
    title: "Dari Subak hingga Smart Farming: Evolusi Pertanian Nusantara",
    excerpt:
      "Menelusuri kearifan lokal sistem irigasi Subak Bali dan transformasinya di era digital. Eksplorasi mendalam perjalanan pertanian Indonesia dari kearifan kuno menuju inovasi masa depan.",
    readTime: "30 min",
    link: "/artikel/subak-hingga-smart-farming",
    featured: true,
  },
  {
    category: "Budidaya",
    categoryColor: "bg-green-100 text-green-700",
    title: "Teknologi Budidaya GAP untuk Padi Berkualitas",
    excerpt:
      "Panduan praktis menerapkan Good Agricultural Practices (GAP) dalam budidaya padi. Mulai dari pemilihan varietas unggul, pengolahan lahan, sistem tanam, hingga pasca panen yang optimal.",
    readTime: "8 min",
    link: "/artikel/budidaya-gap-padi",
  },
  {
    category: "Budidaya",
    categoryColor: "bg-green-100 text-green-700",
    title: "Cara Mengenali Gejala Defisiensi Nutrisi pada Padi",
    excerpt:
      "Pelajari tanda-tanda kekurangan unsur hara pada tanaman padi dan cara mengatasinya dengan pemupukan yang tepat dan berimbang.",
    readTime: "6 min",
    link: "/artikel/defisiensi-nutrisi-padi",
  },
  {
    category: "Manajemen",
    categoryColor: "bg-blue-100 text-blue-700",
    title: "Manajemen Risiko dalam Agribisnis Modern",
    excerpt:
      "Strategi komprehensif mengelola risiko gagal panen, fluktuasi harga pasar, dan tantangan perubahan iklim dalam bisnis pertanian.",
    readTime: "10 min",
    link: "/artikel/manajemen-risiko-agribisnis",
  },
  {
    category: "Manajemen",
    categoryColor: "bg-blue-100 text-blue-700",
    title: "Perhitungan Break Even Point Usaha Tani Padi",
    excerpt:
      "Cara menghitung titik impas usaha tani padi untuk membantu petani mengambil keputusan bisnis yang tepat dan menguntungkan.",
    readTime: "7 min",
    link: "/artikel/break-even-point-usaha-tani",
  },
  {
    category: "Regulasi",
    categoryColor: "bg-amber-100 text-amber-700",
    title: "Update Program Pemerintah 2026 untuk Pertanian",
    excerpt:
      "Rangkuman kebijakan dan program terbaru pemerintah yang mendukung sektor pertanian Indonesia: subsidi pupuk, asuransi pertanian, dan lainnya.",
    readTime: "5 min",
    link: "/artikel/program-pemerintah-2026",
  },
  {
    category: "Regulasi",
    categoryColor: "bg-amber-100 text-amber-700",
    title: "Panduan Lengkap Asuransi Usaha Tani Padi (AUTP)",
    excerpt:
      "Semua yang perlu Anda ketahui tentang AUTP: syarat pendaftaran, premi, klaim, dan manfaat perlindungan bagi petani padi.",
    readTime: "6 min",
    link: "/artikel/asuransi-usaha-tani-padi",
  },
  {
    category: "Regulasi",
    categoryColor: "bg-amber-100 text-amber-700",
    title: "Program Swasembada Pangan 2025: Target & Implementasi",
    excerpt:
      "Mengenal program swasembada pangan nasional 2025, target produksi, komoditas prioritas, dan peran petani dalam mewujudkan kedaulatan pangan Indonesia.",
    readTime: "8 min",
    link: "/artikel/program-swasembada-2025",
  },
  {
    category: "Lingkungan",
    categoryColor: "bg-teal-100 text-teal-700",
    title: "Adaptasi Pertanian Menghadapi Perubahan Iklim",
    excerpt:
      "Strategi dan teknik adaptasi petani Indonesia menghadapi tantangan perubahan iklim: varietas tahan kekeringan, sistem irigasi efisien, dan diversifikasi tanaman.",
    readTime: "12 min",
    link: "/artikel/adaptasi-perubahan-iklim",
  },
  {
    category: "Ekspor",
    categoryColor: "bg-rose-100 text-rose-700",
    title: "Ekspor Kopi Indonesia: Peluang dan Tantangan Pasar Global",
    excerpt:
      "Analisis peluang ekspor kopi Indonesia ke pasar dunia, persyaratan kualitas internasional, sertifikasi, dan strategi penetrasi pasar global.",
    readTime: "15 min",
    link: "/artikel/ekspor-kopi-indonesia",
  },
];

export default function ArtikelPage() {
  return (
    <>
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
                key={article.title} 
                href={article.link} 
                className="block cursor-pointer group"
              >
                <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all h-full">
                  <div className="relative h-44 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                    <Sprout className="w-14 h-14 text-primary-400" />
                    {article.featured && (
                      <div className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
                        ⭐ Featured
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
