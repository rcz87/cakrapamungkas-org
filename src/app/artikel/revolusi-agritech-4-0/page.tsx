import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { ArticleJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/json-ld";
import { getArticleBySlug } from "@/data/articles";
import { articleFaqs } from "@/data/article-faqs";

export const metadata = {
  title: "Revolusi Agritech 4.0: Drone, IoT & AI dalam Pertanian Indonesia | Cakra Pamungkas",
  description:
    "Teknologi pintar meningkatkan efisiensi produksi hingga 30%. Panduan lengkap drone sprayer, sensor IoT, AI monitoring, dan smart farming untuk petani modern Indonesia.",
};

export default function AgritechArtikelPage() {
  const article = getArticleBySlug("revolusi-agritech-4-0");

  return (
    <>
      {article && <ArticleJsonLd article={article} />}
      {article && (
        <BreadcrumbJsonLd
          items={[
            { name: "Beranda", href: "/" },
            { name: "Artikel", href: "/artikel" },
            { name: article.title, href: `/artikel/revolusi-agritech-4-0` },
          ]}
        />
      )}
      <FaqJsonLd faqs={articleFaqs["revolusi-agritech-4-0"] || []} />
      <article className="bg-white">
      {/* Header */}
      <header className="bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-800 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Kembali ke Beranda</span>
          </Link>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
              TEKNOLOGI
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Agritech 4.0
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Smart Farming
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Drone Pertanian
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Revolusi Agritech 4.0: Drone, IoT & AI dalam Pertanian Modern Indonesia
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-blue-200">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">11 Februari 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">25 menit baca</span>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative h-[400px] lg:h-[600px] bg-gray-100">
        <Image
          src="/images/petani-drone.png"
          alt="Petani Modern Menggunakan Drone untuk Monitoring Pertanian"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-700 leading-relaxed mb-8">
            Revolusi Industri 4.0 telah merambah ke sektor pertanian, menghadirkan
            transformasi digital yang fundamental dalam cara kita menanam, memantau,
            dan mengelola produksi pangan. Teknologi pintar seperti drone, Internet
            of Things (IoT), Artificial Intelligence (AI), dan big data analytics
            kini bukan lagi konsep futuristik, melainkan solusi nyata yang dapat
            meningkatkan efisiensi produksi hingga 30% dengan monitoring real-time.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Apa Itu Agritech 4.0?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Agritech 4.0 atau Agriculture Technology 4.0 adalah penerapan teknologi
            digital canggih dalam sektor pertanian yang mengintegrasikan sistem
            cyber-physical, IoT, cloud computing, dan cognitive computing untuk
            menciptakan ekosistem pertanian yang lebih cerdas, presisi, dan
            berkelanjutan.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <p className="text-gray-800 font-medium mb-2">
              🎯 Tujuan Utama Agritech 4.0
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Meningkatkan produktivitas dan efisiensi pertanian</li>
              <li>Mengurangi biaya operasional hingga 20-30%</li>
              <li>Meminimalkan penggunaan air, pupuk, dan pestisida</li>
              <li>Meningkatkan kualitas dan kuantitas hasil panen</li>
              <li>Mitigasi risiko gagal panen akibat faktor iklim</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Drone Pertanian: Mata di Langit untuk Lahan Anda
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Drone atau Unmanned Aerial Vehicle (UAV) telah menjadi game-changer
            dalam praktik pertanian modern. Dengan kemampuan terbang di atas lahan,
            drone dapat melakukan berbagai fungsi yang sebelumnya membutuhkan waktu
            dan tenaga manusia yang besar.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Fungsi Utama Drone di Pertanian
          </h3>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                🚁 Penyemprotan (Spraying)
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Drone sprayer dapat menyemprotkan pestisida, herbisida, atau pupuk
                cair dengan presisi tinggi.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 5x lebih cepat dari manual</li>
                <li>• Hemat pestisida hingga 30%</li>
                <li>• Jangkau area sulit</li>
                <li>• Lindungi kesehatan petani</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                📸 Monitoring & Mapping
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Kamera multispektral untuk analisis kesehatan tanaman dan pemetaan
                lahan.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Deteksi dini hama/penyakit</li>
                <li>• Analisis NDVI real-time</li>
                <li>• Pemetaan 3D lahan</li>
                <li>• Perhitungan luas otomatis</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                🌱 Seeding (Penanaman)
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Drone khusus dapat menanam benih dengan akurasi tinggi.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Jarak tanam presisi</li>
                <li>• Efisiensi benih optimal</li>
                <li>• Akses lahan sulit</li>
                <li>• Kecepatan 10x manual</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                💧 Irigasi Cerdas
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Identifikasi area yang membutuhkan irigasi berdasarkan kelembaban
                tanah.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Hemat air hingga 40%</li>
                <li>• Deteksi stress air</li>
                <li>• Optimasi jadwal irigasi</li>
                <li>• Laporan kelembaban</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Harga Drone Pertanian di Indonesia
          </h3>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Tipe Drone
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Kapasitas
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Harga
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">DJI Agras T40</td>
                  <td className="px-6 py-4 text-sm text-gray-600">40L tangki</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp250-300 juta
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">XAG P100 Pro</td>
                  <td className="px-6 py-4 text-sm text-gray-600">50L tangki</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp280-350 juta
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Drone Lokal</td>
                  <td className="px-6 py-4 text-sm text-gray-600">10-16L tangki</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp80-150 juta
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Internet of Things (IoT): Sensor Pintar di Lahan
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            IoT dalam pertanian mengacu pada jaringan sensor, perangkat, dan sistem
            yang terhubung untuk mengumpulkan, menganalisis, dan bertindak
            berdasarkan data real-time dari lahan pertanian.
          </p>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 my-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              🌡️ Sensor IoT yang Umum Digunakan
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  1. Sensor Kelembaban Tanah
                </p>
                <p className="text-sm text-gray-600">
                  Monitor kadar air tanah 24/7, trigger irigasi otomatis saat
                  dibutuhkan.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">2. Sensor Cuaca</p>
                <p className="text-sm text-gray-600">
                  Ukur suhu, kelembaban udara, curah hujan, kecepatan angin untuk
                  prediksi cuaca lokal.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">3. Sensor pH Tanah</p>
                <p className="text-sm text-gray-600">
                  Analisis keasaman tanah untuk rekomendasi pupuk yang tepat.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  4. Sensor Nutrisi (NPK)
                </p>
                <p className="text-sm text-gray-600">
                  Deteksi kandungan nitrogen, fosfor, kalium dalam tanah secara
                  real-time.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Manfaat IoT dalam Pertanian
          </h3>

          <ul className="space-y-4 my-6">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">✓</span>
              <div>
                <strong className="text-gray-900">Hemat Air hingga 30-40%</strong>
                <p className="text-gray-600 text-sm">
                  Irigasi otomatis hanya ketika tanah benar-benar membutuhkan.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">✓</span>
              <div>
                <strong className="text-gray-900">Efisiensi Pupuk 25-35%</strong>
                <p className="text-gray-600 text-sm">
                  Aplikasi pupuk presisi sesuai kebutuhan tanaman.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">✓</span>
              <div>
                <strong className="text-gray-900">Deteksi Dini Masalah</strong>
                <p className="text-gray-600 text-sm">
                  Alert otomatis saat ada anomali (suhu ekstrem, kelembaban rendah).
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">✓</span>
              <div>
                <strong className="text-gray-900">Data Historis</strong>
                <p className="text-gray-600 text-sm">
                  Analisis pola musim sebelumnya untuk planning yang lebih baik.
                </p>
              </div>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Artificial Intelligence (AI): Otak Cerdas Pertanian
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            AI dalam pertanian menggunakan machine learning dan deep learning untuk
            menganalisis data dari berbagai sumber (satelit, drone, sensor) dan
            memberikan rekomendasi atau keputusan otomatis untuk optimasi produksi.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Aplikasi AI dalam Pertanian Modern
          </h3>

          <div className="space-y-6 my-8">
            <div className="border-l-4 border-purple-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                🔍 Computer Vision untuk Deteksi Hama & Penyakit
              </h4>
              <p className="text-gray-700 mb-3">
                AI dapat mengidentifikasi lebih dari 100 jenis hama dan penyakit
                tanaman hanya dari foto daun dengan akurasi hingga 95%.
              </p>
              <p className="text-sm text-gray-600">
                Contoh: PlantVillage, Plantix, Crop Doctor
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                📊 Predictive Analytics
              </h4>
              <p className="text-gray-700 mb-3">
                Memprediksi hasil panen, harga komoditas, cuaca ekstrem, dan waktu
                tanam optimal berdasarkan data historis dan real-time.
              </p>
              <p className="text-sm text-gray-600">
                Akurasi prediksi: 85-90% untuk periode 7-14 hari
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                🤖 Robotika Pertanian
              </h4>
              <p className="text-gray-700 mb-3">
                Robot panen otomatis, weeding robot, dan autonomous tractor yang
                dikendalikan AI untuk efisiensi maksimal.
              </p>
              <p className="text-sm text-gray-600">
                Contoh: Iron Ox, FarmWise, Small Robot Company
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                💬 Chatbot & Virtual Assistant
              </h4>
              <p className="text-gray-700 mb-3">
                AI assistant yang bisa menjawab pertanyaan petani tentang budidaya,
                penyakit tanaman, harga pasar, dan rekomendasi praktik terbaik.
              </p>
              <p className="text-sm text-gray-600">
                Tersedia 24/7 dalam bahasa lokal
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Implementasi Agritech 4.0 di Indonesia
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Indonesia sedang dalam fase adopsi teknologi pertanian yang cepat.
            Berbagai startup Agritech lokal bermunculan dengan solusi yang disesuaikan
            dengan konteks dan tantangan pertanian Indonesia.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8">
            <h4 className="font-bold text-gray-900 mb-3">
              🚀 Startup Agritech Indonesia
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-gray-900">• TaniHub</p>
                <p className="text-gray-600">Platform marketplace hasil tani</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">• eFishery</p>
                <p className="text-gray-600">IoT feeder untuk budidaya ikan</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">• Tanihub</p>
                <p className="text-gray-600">Supply chain digital</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">• iGrow</p>
                <p className="text-gray-600">Crowdfunding pertanian</p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Tantangan Adopsi Teknologi
          </h3>

          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
            <li>
              <strong>Biaya Investasi Tinggi:</strong> Drone dan sensor IoT masih
              mahal untuk petani kecil
            </li>
            <li>
              <strong>Literasi Digital Rendah:</strong> Banyak petani belum familiar
              dengan teknologi digital
            </li>
            <li>
              <strong>Infrastruktur Internet:</strong> Koneksi internet di daerah
              rural masih terbatas
            </li>
            <li>
              <strong>Ketergantungan Listrik:</strong> Charging device di daerah
              tanpa listrik stabil
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Solusi dan Rekomendasi
          </h3>

          <div className="bg-green-50 rounded-xl p-6 my-6">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">→</span>
                <div>
                  <strong>Model Sharing Economy:</strong> Kelompok tani bersama-sama
                  membeli atau menyewa drone
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">→</span>
                <div>
                  <strong>Pelatihan & Edukasi:</strong> Workshop dan demo teknologi
                  di tingkat desa
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">→</span>
                <div>
                  <strong>Subsidi Pemerintah:</strong> Program bantuan alat
                  teknologi untuk petani
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">→</span>
                <div>
                  <strong>Kemitraan Swasta:</strong> Kolaborasi dengan perusahaan
                  teknologi
                </div>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Kesimpulan: Masa Depan Pertanian Indonesia
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Revolusi Agritech 4.0 bukan lagi mimpi masa depan, tetapi realitas yang
            sedang terjadi saat ini. Drone yang terbang di atas sawah, sensor yang
            memantau tanah 24/7, dan AI yang memberikan rekomendasi budidaya adalah
            bagian dari ekosistem pertanian modern yang akan membawa Indonesia
            menuju kedaulatan pangan.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Dengan adopsi teknologi yang tepat dan inklusif, petani Indonesia tidak
            hanya akan meningkatkan produktivitas dan pendapatan mereka, tetapi juga
            berkontribusi pada ketahanan pangan nasional dan global. Transformasi
            digital di sektor pertanian adalah investasi untuk masa depan yang lebih
            sejahtera dan berkelanjutan.
          </p>

          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl p-8 my-12">
            <p className="text-xl font-bold mb-3">
              🚀 Saatnya Bertindak!
            </p>
            <p className="text-blue-100">
              Jangan tertinggal dalam revolusi Agritech 4.0. Mulai dari yang kecil:
              gunakan aplikasi cuaca, bergabung dengan kelompok tani yang sudah
              mengadopsi teknologi, atau ikuti pelatihan digital farming. Masa depan
              pertanian Indonesia ada di tangan kita bersama.
            </p>
          </div>
        </div>

        {/* Share & Back */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Beranda
            </Link>
            <Link
              href="/pusat-ilmu"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors"
            >
              Baca Artikel Lainnya
            </Link>
          </div>
        </div>
      </div>
    </article>
    </>
  );
}
