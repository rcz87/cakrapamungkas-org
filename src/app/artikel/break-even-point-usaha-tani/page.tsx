import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { ArticleJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/json-ld";
import { getArticleBySlug } from "@/data/articles";
import { articleFaqs } from "@/data/article-faqs";

export const metadata = {
  title: "Perhitungan Break Even Point Usaha Tani Padi | Cakra Pamungkas",
  description:
    "Panduan lengkap perhitungan Break Even Point (BEP) usaha tani padi. Pelajari komponen biaya tetap, biaya variabel, rumus BEP, contoh kalkulasi 1 hektar, dan strategi menurunkan titik impas untuk meningkatkan keuntungan petani.",
};

export default function BreakEvenPointUsahaTaniPage() {
  const article = getArticleBySlug("break-even-point-usaha-tani");

  return (
    <>
      {article && <ArticleJsonLd article={article} />}
      {article && (
        <BreadcrumbJsonLd
          items={[
            { name: "Beranda", href: "/" },
            { name: "Artikel", href: "/artikel" },
            { name: article.title, href: `/artikel/break-even-point-usaha-tani` },
          ]}
        />
      )}
      <FaqJsonLd faqs={articleFaqs["break-even-point-usaha-tani"] || []} />
      <article className="bg-white">
      {/* Header */}
      <header className="bg-gradient-to-br from-blue-950 via-blue-900 to-sky-800 py-12 lg:py-20">
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
              MANAJEMEN
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Break Even Point
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Analisis Usaha Tani
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Biaya Produksi
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Keuntungan
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Perhitungan Break Even Point Usaha Tani Padi
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-blue-200">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">12 Februari 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">7 menit baca</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-700 leading-relaxed mb-8">
            Dalam dunia pertanian, memahami kapan usaha tani mulai menghasilkan
            keuntungan adalah kunci keberhasilan. Break Even Point (BEP) atau
            titik impas merupakan alat analisis finansial yang membantu petani
            mengetahui jumlah produksi minimum yang harus dicapai agar seluruh
            biaya produksi tertutupi. Dengan memahami BEP, petani padi dapat
            membuat keputusan yang lebih cerdas tentang skala tanam, penggunaan
            input, dan strategi pemasaran hasil panen.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Apa Itu Break Even Point (BEP)?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Break Even Point atau titik impas adalah kondisi di mana total
            pendapatan (revenue) sama dengan total biaya produksi (total cost).
            Pada titik ini, usaha tani tidak mengalami kerugian maupun
            keuntungan. Dengan kata lain, seluruh biaya yang dikeluarkan untuk
            proses produksi sudah tertutupi oleh hasil penjualan, tetapi belum
            ada laba yang diperoleh.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Dalam konteks usaha tani padi, BEP menunjukkan berapa kilogram gabah
            yang harus diproduksi atau berapa rupiah pendapatan yang harus
            diperoleh agar petani tidak rugi. Analisis BEP sangat penting
            dilakukan sebelum musim tanam dimulai agar petani dapat
            merencanakan kebutuhan input produksi secara efisien.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <p className="text-gray-800 font-medium mb-2">
              Mengapa BEP Penting bagi Petani?
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Mengetahui jumlah produksi minimum agar tidak merugi</li>
              <li>Membantu perencanaan anggaran biaya produksi</li>
              <li>Menjadi dasar penentuan harga jual gabah yang wajar</li>
              <li>Mengukur kelayakan usaha tani sebelum musim tanam</li>
              <li>Memberikan gambaran target produksi yang harus dicapai</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Komponen Biaya Usaha Tani Padi
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Untuk menghitung BEP, langkah pertama adalah memahami seluruh
            komponen biaya yang terlibat dalam usaha tani padi. Biaya produksi
            usaha tani secara umum dibagi menjadi dua kategori utama: biaya
            tetap (fixed cost) dan biaya variabel (variable cost). Pemahaman
            yang tepat tentang kedua jenis biaya ini menjadi fondasi perhitungan
            BEP yang akurat.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Biaya Tetap (Fixed Cost)
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Biaya tetap adalah biaya yang jumlahnya tidak berubah terlepas dari
            besar kecilnya volume produksi. Biaya ini tetap harus dikeluarkan
            meskipun petani tidak berproduksi sama sekali. Dalam usaha tani
            padi, komponen biaya tetap meliputi:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Sewa Lahan
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Biaya sewa lahan sawah per musim tanam yang besarannya sudah
                ditetapkan di awal perjanjian sewa.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Rata-rata Rp5.000.000 - Rp8.000.000 per hektar per musim</li>
                <li>Bervariasi tergantung lokasi dan kesuburan tanah</li>
                <li>Beberapa daerah menerapkan sistem bagi hasil</li>
                <li>Dibayar di muka sebelum musim tanam</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Penyusutan Alat
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Nilai penyusutan peralatan pertanian yang digunakan selama proses
                budidaya padi.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Cangkul, sabit, sprayer: Rp200.000 - Rp500.000/musim</li>
                <li>Traktor (jika milik sendiri): Rp1.000.000 - Rp2.000.000/musim</li>
                <li>Pompa air: Rp300.000 - Rp600.000/musim</li>
                <li>Dihitung berdasarkan umur ekonomis alat</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Pajak Lahan
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Pajak Bumi dan Bangunan (PBB) yang dibebankan atas kepemilikan
                atau penggunaan lahan pertanian.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Besaran tergantung NJOP daerah setempat</li>
                <li>Rata-rata Rp50.000 - Rp200.000 per hektar per tahun</li>
                <li>Dibagi per musim tanam untuk perhitungan BEP</li>
                <li>Wajib dibayar meskipun lahan tidak ditanami</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Iuran Irigasi
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Kontribusi tetap untuk pengelolaan dan pemeliharaan saluran
                irigasi di wilayah persawahan.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Rata-rata Rp200.000 - Rp500.000 per hektar per musim</li>
                <li>Dikelola oleh P3A (Perkumpulan Petani Pemakai Air)</li>
                <li>Mencakup biaya pemeliharaan saluran</li>
                <li>Tetap dibayar per musim tanam</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Biaya Variabel (Variable Cost)
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Biaya variabel adalah biaya yang besarannya berubah sesuai dengan
            volume produksi. Semakin luas lahan yang ditanami atau semakin
            intensif pengelolaan, semakin besar pula biaya variabel yang
            dikeluarkan. Komponen biaya variabel dalam usaha tani padi meliputi:
          </p>

          <div className="space-y-6 my-8">
            <div className="border-l-4 border-green-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Benih Padi
              </h4>
              <p className="text-gray-700 mb-3">
                Kebutuhan benih untuk 1 hektar lahan sawah berkisar antara 25-30
                kg. Harga benih bersertifikat (label biru/ungu) berkisar
                Rp12.000 - Rp15.000 per kg, sedangkan benih hibrida bisa
                mencapai Rp80.000 - Rp120.000 per kg. Pemilihan varietas yang
                tepat akan mempengaruhi produktivitas dan pendapatan.
              </p>
              <p className="text-sm text-gray-600">
                Estimasi biaya: Rp300.000 - Rp450.000 per hektar (benih
                inbrida bersertifikat)
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Pupuk
              </h4>
              <p className="text-gray-700 mb-3">
                Pupuk merupakan komponen biaya variabel terbesar setelah tenaga
                kerja. Kebutuhan pupuk per hektar meliputi Urea (200-300 kg),
                SP-36 (100-150 kg), KCl (50-100 kg), dan pupuk organik
                (1.000-2.000 kg). Harga pupuk bersubsidi jauh lebih rendah
                dibanding harga pasar, sehingga ketersediaan subsidi sangat
                mempengaruhi total biaya produksi.
              </p>
              <p className="text-sm text-gray-600">
                Estimasi biaya: Rp1.500.000 - Rp2.500.000 per hektar
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Pestisida dan Herbisida
              </h4>
              <p className="text-gray-700 mb-3">
                Pengendalian hama, penyakit, dan gulma memerlukan penggunaan
                pestisida dan herbisida. Frekuensi aplikasi tergantung pada
                tingkat serangan organisme pengganggu tanaman (OPT). Rata-rata
                diperlukan 2-4 kali aplikasi per musim tanam dengan berbagai
                jenis bahan aktif sesuai target hama atau penyakit.
              </p>
              <p className="text-sm text-gray-600">
                Estimasi biaya: Rp500.000 - Rp1.000.000 per hektar
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Tenaga Kerja
              </h4>
              <p className="text-gray-700 mb-3">
                Tenaga kerja dibutuhkan pada setiap tahap budidaya: pengolahan
                tanah, persemaian, penanaman, penyiangan, pemupukan,
                pengendalian hama, panen, dan pasca panen. Biaya tenaga kerja
                biasanya merupakan komponen terbesar dari total biaya variabel,
                mencapai 40-50% dari total biaya produksi.
              </p>
              <p className="text-sm text-gray-600">
                Estimasi biaya: Rp3.000.000 - Rp5.000.000 per hektar
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Bahan Bakar dan Pengolahan Tanah
              </h4>
              <p className="text-gray-700 mb-3">
                Biaya pengolahan tanah menggunakan traktor (bajak dan garu),
                termasuk bahan bakar untuk pompa air irigasi. Jika petani
                menggunakan jasa traktor, biaya dihitung per hektar. Pengolahan
                tanah yang baik menjadi fondasi pertumbuhan tanaman yang
                optimal.
              </p>
              <p className="text-sm text-gray-600">
                Estimasi biaya: Rp1.500.000 - Rp2.500.000 per hektar
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Rumus Break Even Point (BEP)
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Terdapat dua pendekatan utama dalam menghitung BEP usaha tani padi,
            yaitu BEP dalam satuan unit produksi (kg gabah) dan BEP dalam satuan
            nilai rupiah. Kedua pendekatan ini saling melengkapi dan memberikan
            perspektif yang berbeda tentang titik impas usaha tani.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-xl p-8 my-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Rumus BEP Usaha Tani
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  1. BEP Unit (kg)
                </p>
                <div className="bg-white rounded-lg p-4 mb-2">
                  <p className="text-center font-mono text-gray-800">
                    BEP (kg) = Total Biaya Produksi / Harga Jual per kg
                  </p>
                </div>
                <p className="text-sm text-gray-600">
                  Menunjukkan berapa kilogram gabah yang harus diproduksi agar
                  seluruh biaya tertutupi.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  2. BEP Harga (Rp/kg)
                </p>
                <div className="bg-white rounded-lg p-4 mb-2">
                  <p className="text-center font-mono text-gray-800">
                    BEP (Rp/kg) = Total Biaya Produksi / Total Produksi (kg)
                  </p>
                </div>
                <p className="text-sm text-gray-600">
                  Menunjukkan harga jual minimum per kilogram gabah agar petani
                  tidak mengalami kerugian.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8">
            <p className="text-gray-800 font-medium mb-2">
              Catatan Penting
            </p>
            <p className="text-gray-700">
              Dalam perhitungan BEP usaha tani, seluruh biaya (tetap dan
              variabel) dijumlahkan menjadi total biaya produksi karena pada
              praktiknya petani perlu menutup seluruh biaya tersebut. Pendekatan
              ini berbeda dengan perhitungan BEP industri manufaktur yang
              memisahkan biaya tetap dan variabel dalam rumusnya. Hal ini karena
              pada usaha tani, output per siklus relatif seragam dan biaya
              variabel per unit sulit diisolasi secara presisi.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Contoh Perhitungan BEP untuk 1 Hektar Sawah
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Berikut adalah contoh perhitungan BEP usaha tani padi untuk lahan
            seluas 1 hektar (10.000 m&sup2;) dalam satu musim tanam. Data yang
            digunakan merupakan rata-rata biaya di wilayah Jawa pada tahun 2026
            dengan asumsi penggunaan input produksi sesuai rekomendasi.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Rincian Biaya Tetap
          </h3>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    No
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Komponen Biaya Tetap
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Biaya (Rp)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">1</td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    Sewa lahan (1 musim tanam)
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp6.000.000
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">2</td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    Penyusutan alat pertanian
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp500.000
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">3</td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    Pajak lahan (PBB per musim)
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp75.000
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">4</td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    Iuran irigasi
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp350.000
                  </td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="px-6 py-4 text-sm text-gray-900"></td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-900">
                    Total Biaya Tetap
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-blue-700">
                    Rp6.925.000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Rincian Biaya Variabel
          </h3>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    No
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Komponen Biaya Variabel
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Volume
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Biaya (Rp)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">1</td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    Benih padi bersertifikat
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    30 kg x Rp13.000
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp390.000
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">2</td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    Pupuk Urea
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    250 kg x Rp2.250
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp562.500
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">3</td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    Pupuk SP-36
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    125 kg x Rp2.400
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp300.000
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">4</td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    Pupuk KCl
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    75 kg x Rp2.350
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp176.250
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">5</td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    Pupuk organik
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    1.500 kg x Rp500
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp750.000
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">6</td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    Pestisida dan herbisida
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    3 kali aplikasi
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp750.000
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">7</td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    Pengolahan tanah (jasa traktor)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    1 hektar
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp2.000.000
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">8</td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    Tenaga kerja tanam
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    15 HOK x Rp80.000
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp1.200.000
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">9</td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    Tenaga kerja pemeliharaan
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    20 HOK x Rp80.000
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp1.600.000
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">10</td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    Tenaga kerja panen dan pasca panen
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Borongan
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp2.200.000
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">11</td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    Karung dan transportasi
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    1 musim
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp350.000
                  </td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="px-6 py-4 text-sm text-gray-900"></td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-900">
                    Total Biaya Variabel
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600"></td>
                  <td className="px-6 py-4 text-sm font-bold text-blue-700">
                    Rp10.278.750
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Rekapitulasi dan Perhitungan BEP
          </h3>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Uraian
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Nilai
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    Total Biaya Tetap (FC)
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp6.925.000
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    Total Biaya Variabel (VC)
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp10.278.750
                  </td>
                </tr>
                <tr className="bg-yellow-50">
                  <td className="px-6 py-4 text-sm font-bold text-gray-900">
                    Total Biaya Produksi (TC = FC + VC)
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-900">
                    Rp17.203.750
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    Harga jual gabah kering panen (GKP)
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp5.500 / kg
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    Produktivitas rata-rata (GKP)
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    5.500 kg / hektar
                  </td>
                </tr>
                <tr className="bg-green-50">
                  <td className="px-6 py-4 text-sm font-bold text-gray-900">
                    BEP Unit (kg) = TC / Harga Jual
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-green-700">
                    3.128 kg gabah
                  </td>
                </tr>
                <tr className="bg-green-50">
                  <td className="px-6 py-4 text-sm font-bold text-gray-900">
                    BEP Harga (Rp/kg) = TC / Produksi
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-green-700">
                    Rp3.128 / kg
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
            <p className="text-gray-800 font-medium mb-2">
              Interpretasi Hasil Perhitungan
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>BEP Unit = 3.128 kg:</strong> Petani harus memproduksi
                minimal 3.128 kg gabah kering panen per hektar agar tidak
                merugi. Karena rata-rata produktivitas mencapai 5.500 kg/ha,
                maka terdapat margin keamanan sebesar 2.372 kg.
              </li>
              <li>
                <strong>BEP Harga = Rp3.128/kg:</strong> Harga jual gabah
                minimum agar tidak merugi adalah Rp3.128 per kg. Dengan harga
                pasar Rp5.500/kg, petani memperoleh margin Rp2.372 per kg gabah.
              </li>
              <li>
                <strong>Margin of Safety:</strong> Selisih antara produksi aktual
                (5.500 kg) dan BEP (3.128 kg) menunjukkan bahwa usaha tani ini
                memiliki margin keamanan sekitar 43%, yang berarti cukup aman
                dari risiko kerugian.
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Analisis Pendapatan dan Keuntungan
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Setelah mengetahui BEP, petani dapat menghitung potensi keuntungan
            dari usaha tani padi. Analisis pendapatan dilakukan dengan
            menghitung total penerimaan (revenue) dari hasil penjualan gabah
            dikurangi total biaya produksi.
          </p>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 my-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Kalkulasi Pendapatan 1 Hektar Padi
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-green-200">
                <span className="text-gray-700">Total Produksi GKP</span>
                <span className="font-semibold text-gray-900">5.500 kg</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-green-200">
                <span className="text-gray-700">Harga Jual GKP</span>
                <span className="font-semibold text-gray-900">Rp5.500 / kg</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-green-200">
                <span className="text-gray-700">Total Penerimaan (Revenue)</span>
                <span className="font-bold text-gray-900">Rp30.250.000</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-green-200">
                <span className="text-gray-700">Total Biaya Produksi</span>
                <span className="font-bold text-red-600">Rp17.203.750</span>
              </div>
              <div className="flex justify-between items-center py-3 bg-green-100 rounded-lg px-4">
                <span className="font-bold text-gray-900">Keuntungan Bersih</span>
                <span className="font-bold text-green-700 text-lg">Rp13.046.250</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-700">R/C Ratio (Revenue/Cost)</span>
                <span className="font-bold text-blue-700">1,76</span>
              </div>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Nilai R/C Ratio sebesar 1,76 menunjukkan bahwa setiap Rp1 yang
            diinvestasikan dalam usaha tani padi menghasilkan penerimaan sebesar
            Rp1,76. Artinya, usaha tani ini layak secara ekonomi karena R/C
            Ratio lebih besar dari 1. Semakin tinggi nilai R/C Ratio, semakin
            menguntungkan usaha tani tersebut.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Strategi Menurunkan Break Even Point
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Menurunkan BEP berarti petani membutuhkan produksi yang lebih sedikit
            untuk mencapai titik impas, sehingga peluang mendapatkan keuntungan
            menjadi lebih besar. Ada dua pendekatan utama: menekan biaya
            produksi dan meningkatkan produktivitas atau harga jual.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Strategi Menekan Biaya Produksi
          </h3>

          <ul className="space-y-4 my-6">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">1.</span>
              <div>
                <strong className="text-gray-900">
                  Penggunaan Pupuk Organik Buatan Sendiri
                </strong>
                <p className="text-gray-600 text-sm">
                  Membuat kompos dari jerami padi dan limbah ternak dapat
                  menghemat biaya pupuk organik hingga 50-70%. Selain itu,
                  pupuk organik buatan sendiri memiliki kualitas yang dapat
                  disesuaikan dengan kebutuhan lahan.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">2.</span>
              <div>
                <strong className="text-gray-900">
                  Pengendalian Hama Terpadu (PHT)
                </strong>
                <p className="text-gray-600 text-sm">
                  Mengombinasikan pengendalian hayati, mekanis, dan kimiawi
                  secara bijak dapat mengurangi penggunaan pestisida kimia
                  hingga 40%. Memanfaatkan musuh alami hama seperti laba-laba,
                  capung, dan parasitoid dapat menekan biaya pengendalian.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">3.</span>
              <div>
                <strong className="text-gray-900">
                  Manfaatkan Pupuk Bersubsidi
                </strong>
                <p className="text-gray-600 text-sm">
                  Pastikan terdaftar sebagai penerima pupuk bersubsidi melalui
                  kelompok tani. Harga pupuk subsidi jauh lebih rendah, misalnya
                  Urea subsidi Rp2.250/kg dibanding non-subsidi yang bisa
                  mencapai Rp5.000-Rp8.000/kg.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">4.</span>
              <div>
                <strong className="text-gray-900">
                  Efisiensi Tenaga Kerja
                </strong>
                <p className="text-gray-600 text-sm">
                  Penggunaan mesin transplanter untuk tanam dan combine
                  harvester untuk panen dapat mengurangi biaya tenaga kerja
                  secara signifikan. Kelompok tani dapat menyewa alat mesin
                  pertanian (alsintan) secara bersama.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">5.</span>
              <div>
                <strong className="text-gray-900">
                  Tanam Jajar Legowo
                </strong>
                <p className="text-gray-600 text-sm">
                  Sistem tanam jajar legowo memungkinkan penggunaan benih yang
                  lebih efisien (hanya 15-20 kg/ha dibanding 25-30 kg/ha pada
                  sistem tegel) sekaligus meningkatkan produktivitas karena
                  efek tanaman pinggir.
                </p>
              </div>
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Strategi Meningkatkan Produktivitas dan Pendapatan
          </h3>

          <ul className="space-y-4 my-6">
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">1.</span>
              <div>
                <strong className="text-gray-900">
                  Pemilihan Varietas Unggul Baru (VUB)
                </strong>
                <p className="text-gray-600 text-sm">
                  Varietas unggul baru seperti Inpari 32, Inpari 42, dan
                  Inpari HDB memiliki potensi hasil 8-10 ton GKP/ha, jauh di
                  atas rata-rata varietas lokal. Gunakan benih bersertifikat
                  untuk memastikan kemurnian genetik.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">2.</span>
              <div>
                <strong className="text-gray-900">
                  Pemupukan Berdasarkan Rekomendasi Spesifik Lokasi
                </strong>
                <p className="text-gray-600 text-sm">
                  Gunakan Perangkat Uji Tanah Sawah (PUTS) atau aplikasi
                  Katam Terpadu dari Litbang Pertanian untuk mengetahui
                  rekomendasi pupuk yang tepat sesuai kondisi tanah. Hal ini
                  mencegah pemborosan pupuk dan mengoptimalkan hasil.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">3.</span>
              <div>
                <strong className="text-gray-900">
                  Jual dalam Bentuk Beras
                </strong>
                <p className="text-gray-600 text-sm">
                  Mengolah gabah menjadi beras dapat meningkatkan nilai jual
                  secara signifikan. Harga beras bisa mencapai 2-3 kali lipat
                  harga gabah. Meskipun ada tambahan biaya penggilingan, margin
                  keuntungan tetap lebih besar.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">4.</span>
              <div>
                <strong className="text-gray-900">
                  Tunda Jual (Tunda Panen)
                </strong>
                <p className="text-gray-600 text-sm">
                  Menyimpan gabah dan menjualnya saat harga tinggi (biasanya di
                  luar musim panen) dapat meningkatkan pendapatan 15-30%. Hal
                  ini memerlukan fasilitas penyimpanan yang memadai dan modal
                  kerja yang cukup.
                </p>
              </div>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Menggunakan BEP untuk Pengambilan Keputusan
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Analisis BEP bukan hanya sekadar perhitungan matematika, tetapi
            merupakan alat strategis yang dapat membantu petani dalam berbagai
            pengambilan keputusan penting. Berikut beberapa penerapan BEP
            dalam konteks manajemen usaha tani:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Keputusan Sewa vs Milik Lahan
              </h4>
              <p className="text-sm text-gray-700">
                Dengan membandingkan BEP antara skenario sewa lahan dan
                pembelian lahan (cicilan), petani dapat menentukan opsi mana
                yang lebih menguntungkan dalam jangka pendek maupun jangka
                panjang. Lahan sendiri menghilangkan biaya sewa yang merupakan
                komponen biaya tetap terbesar.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Evaluasi Kelayakan Investasi
              </h4>
              <p className="text-sm text-gray-700">
                BEP membantu petani menilai apakah investasi pada alat baru
                (misalnya combine harvester) layak dilakukan. Jika investasi
                tersebut mampu menurunkan BEP secara signifikan, maka investasi
                tersebut layak dipertimbangkan meskipun memerlukan modal awal
                yang besar.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Perencanaan Skala Usaha
              </h4>
              <p className="text-sm text-gray-700">
                BEP memberikan informasi tentang luas minimum lahan yang harus
                dikelola agar usaha tani menguntungkan. Petani dengan lahan
                sempit dapat mempertimbangkan untuk bergabung dalam kelompok
                tani atau corporate farming untuk mencapai skala ekonomis.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Negosiasi Harga Jual
              </h4>
              <p className="text-sm text-gray-700">
                Mengetahui BEP harga membekali petani dengan posisi tawar yang
                lebih kuat saat bernegosiasi dengan pedagang pengumpul atau
                penggilingan. Petani dapat menetapkan harga jual minimum yang
                rasional dan tidak merugikan berdasarkan perhitungan biaya
                produksi aktual.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <p className="text-gray-800 font-medium mb-2">
              Analisis Sensitivitas BEP
            </p>
            <p className="text-gray-700 mb-4">
              Petani disarankan untuk melakukan analisis sensitivitas, yaitu
              menghitung BEP dengan beberapa skenario perubahan harga input dan
              output. Contoh skenario yang perlu dipertimbangkan:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Jika harga gabah turun 10% (menjadi Rp4.950/kg), BEP unit naik
                menjadi 3.475 kg
              </li>
              <li>
                Jika biaya pupuk naik 20%, total biaya produksi menjadi
                Rp17.561.500 dan BEP unit menjadi 3.193 kg
              </li>
              <li>
                Jika produktivitas turun 15% (menjadi 4.675 kg), BEP harga
                naik menjadi Rp3.680/kg
              </li>
              <li>
                Kombinasi skenario terburuk: harga turun dan biaya naik
                bersamaan, BEP bisa mendekati produksi aktual
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Kesimpulan
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Perhitungan Break Even Point merupakan langkah fundamental dalam
            manajemen usaha tani padi yang seringkali diabaikan oleh petani.
            Dari contoh perhitungan di atas, usaha tani padi pada lahan 1 hektar
            dengan total biaya produksi Rp17.203.750 memiliki BEP sebesar 3.128
            kg gabah atau setara harga minimum Rp3.128/kg. Dengan produktivitas
            rata-rata 5.500 kg/ha dan harga jual Rp5.500/kg, usaha tani ini
            menghasilkan keuntungan bersih Rp13.046.250 per musim tanam dengan
            R/C Ratio 1,76.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Pemahaman terhadap BEP memungkinkan petani untuk mengidentifikasi
            komponen biaya yang paling berpengaruh, mengevaluasi efisiensi
            penggunaan input, dan merencanakan strategi untuk meningkatkan
            keuntungan. Petani yang secara konsisten menghitung dan menganalisis
            BEP akan memiliki daya saing yang lebih tinggi karena setiap
            keputusan produksi didasarkan pada data dan kalkulasi yang rasional.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Pada akhirnya, keberhasilan usaha tani bukan hanya ditentukan oleh
            besarnya hasil panen, tetapi juga oleh kemampuan petani dalam
            mengelola biaya produksi secara efisien. Dengan menerapkan analisis
            BEP secara rutin setiap musim tanam, petani dapat membuat keputusan
            yang lebih terukur dan meningkatkan kesejahteraan secara
            berkelanjutan.
          </p>

          <div className="bg-gradient-to-r from-blue-600 to-sky-600 text-white rounded-xl p-8 my-12">
            <p className="text-xl font-bold mb-3">
              Mulai Hitung BEP Usaha Tani Anda!
            </p>
            <p className="text-blue-100">
              Catat seluruh pengeluaran dari awal hingga akhir musim tanam.
              Hitung total biaya tetap dan variabel, lalu gunakan rumus BEP
              untuk mengetahui titik impas usaha tani Anda. Dengan data yang
              akurat, Anda dapat membuat keputusan yang lebih cerdas dan
              meningkatkan keuntungan setiap musim tanam. Jadikan perhitungan
              BEP sebagai kebiasaan dalam setiap perencanaan usaha tani.
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
