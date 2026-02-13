import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/json-ld";
import { getArticleBySlug } from "@/data/articles";

export const metadata = {
  title: "Update Program Pemerintah 2026 untuk Pertanian | Cakra Pamungkas",
  description:
    "Panduan lengkap program pemerintah 2026 untuk sektor pertanian: subsidi pupuk, asuransi pertanian AUTP, KUR Pertanian, bantuan alsintan, infrastruktur irigasi, dan program petani muda.",
};

export default function ProgramPemerintah2026ArtikelPage() {
  const article = getArticleBySlug("program-pemerintah-2026");

  return (
    <>
      {article && <ArticleJsonLd article={article} />}
      {article && (
        <BreadcrumbJsonLd
          items={[
            { name: "Beranda", href: "/" },
            { name: "Artikel", href: "/artikel" },
            { name: article.title, href: `/artikel/program-pemerintah-2026` },
          ]}
        />
      )}
      <article className="bg-white">
      {/* Header */}
      <header className="bg-gradient-to-br from-amber-950 via-amber-900 to-yellow-800 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Kembali ke Beranda</span>
          </Link>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-amber-600 text-white text-xs font-semibold rounded-full">
              REGULASI
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Program Pemerintah
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Subsidi Pupuk
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Asuransi Pertanian
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Kebijakan 2026
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Update Program Pemerintah 2026 untuk Pertanian Indonesia
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-amber-200">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">12 Februari 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">5 menit baca</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-700 leading-relaxed mb-8">
            Tahun 2026 membawa angin segar bagi sektor pertanian Indonesia.
            Pemerintah melalui Kementerian Pertanian telah merancang serangkaian
            program strategis yang bertujuan untuk meningkatkan kesejahteraan
            petani, memperkuat ketahanan pangan nasional, dan mendorong
            modernisasi sektor pertanian. Dari subsidi pupuk hingga program
            petani muda, berikut adalah panduan lengkap berbagai program
            pemerintah yang dapat dimanfaatkan oleh petani di seluruh Indonesia.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
            <p className="text-gray-800 font-medium mb-2">
              Mengapa Penting Mengetahui Program Ini?
            </p>
            <p className="text-gray-700 text-sm">
              Banyak petani yang belum mengetahui atau belum memanfaatkan
              program-program bantuan pemerintah secara optimal. Dengan memahami
              setiap program yang tersedia, petani dapat meningkatkan
              produktivitas, mengurangi risiko kerugian, dan mengakses modal
              usaha dengan lebih mudah. Artikel ini menyajikan informasi
              terkini per Februari 2026 agar petani tidak tertinggal informasi.
            </p>
          </div>

          {/* Section 1: Subsidi Pupuk */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            1. Program Pupuk Bersubsidi 2026
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Program pupuk bersubsidi tetap menjadi salah satu program andalan
            pemerintah untuk menekan biaya produksi petani. Pada tahun 2026,
            pemerintah mengalokasikan anggaran sebesar Rp33,07 triliun untuk
            subsidi pupuk, meningkat dari tahun sebelumnya sebagai respons
            terhadap kenaikan harga bahan baku global.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Pupuk bersubsidi ditujukan bagi petani yang tergabung dalam kelompok
            tani dan telah terdaftar dalam sistem e-RDKK (Rencana Definitif
            Kebutuhan Kelompok). Program ini mencakup beberapa jenis pupuk
            utama yang paling banyak dibutuhkan oleh petani di Indonesia.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Jenis Pupuk
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    HET Subsidi (/kg)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Harga Non-Subsidi (/kg)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Urea</td>
                  <td className="px-6 py-4 text-sm font-semibold text-green-700">
                    Rp2.250
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Rp7.000 - Rp9.000
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">NPK Phonska</td>
                  <td className="px-6 py-4 text-sm font-semibold text-green-700">
                    Rp2.300
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Rp8.500 - Rp11.000
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">SP-36</td>
                  <td className="px-6 py-4 text-sm font-semibold text-green-700">
                    Rp2.400
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Rp8.000 - Rp10.000
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">ZA</td>
                  <td className="px-6 py-4 text-sm font-semibold text-green-700">
                    Rp1.700
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Rp5.500 - Rp7.000
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Pupuk Organik</td>
                  <td className="px-6 py-4 text-sm font-semibold text-green-700">
                    Rp800
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Rp2.500 - Rp4.000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
            <p className="text-gray-800 font-medium mb-2">
              Syarat Mendapatkan Pupuk Bersubsidi
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Tergabung dalam kelompok tani yang terdaftar resmi</li>
              <li>Memiliki lahan maksimal 2 hektar</li>
              <li>Terdaftar dalam sistem e-RDKK melalui kelompok tani</li>
              <li>Memiliki Kartu Tani atau terdaftar di SIMLUHTAN</li>
              <li>Mengajukan kebutuhan pupuk melalui penyuluh pertanian</li>
            </ul>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Pada tahun 2026, pemerintah juga memperluas cakupan penerima subsidi
            pupuk dengan memasukkan petani hortikultura dan perkebunan rakyat
            skala kecil. Sebelumnya, subsidi hanya difokuskan pada petani
            tanaman pangan. Langkah ini diharapkan mampu mendorong diversifikasi
            produksi pertanian dan meningkatkan pendapatan petani secara
            keseluruhan.
          </p>

          {/* Section 2: Asuransi Pertanian */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            2. Asuransi Usaha Tani Padi (AUTP)
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Program Asuransi Usaha Tani Padi (AUTP) merupakan skema
            perlindungan bagi petani dari risiko gagal panen akibat banjir,
            kekeringan, serangan hama dan penyakit tanaman. Program ini telah
            berjalan sejak 2015 dan terus diperluas jangkauannya pada tahun
            2026 dengan target 3 juta hektar lahan padi yang diasuransikan.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Premi dan Bantuan
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Besaran premi AUTP per musim tanam per hektar pada tahun 2026:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>&#8226; Total premi: Rp180.000/ha/musim</li>
                <li>&#8226; Bantuan pemerintah: 80% (Rp144.000)</li>
                <li>&#8226; Swadaya petani: 20% (Rp36.000)</li>
                <li>&#8226; Ganti rugi klaim: Rp6.000.000/ha</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Risiko yang Ditanggung
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                AUTP memberikan perlindungan terhadap berbagai risiko utama:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>&#8226; Banjir dan genangan air</li>
                <li>&#8226; Kekeringan berkepanjangan</li>
                <li>&#8226; Serangan hama (wereng, tikus)</li>
                <li>&#8226; Penyakit tanaman (blast, BLB)</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Selain AUTP, pemerintah juga mengembangkan Asuransi Usaha Ternak
            Sapi (AUTS) dan mulai merintis skema asuransi untuk komoditas
            jagung, kedelai, serta cabai. Petani dapat mendaftarkan diri melalui
            kelompok tani dengan menghubungi penyuluh pertanian setempat atau
            langsung ke kantor Dinas Pertanian kabupaten/kota.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <p className="text-gray-800 font-medium mb-2">
              Prosedur Klaim AUTP
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Petani melaporkan kejadian kerusakan ke kelompok tani</li>
              <li>Kelompok tani melaporkan ke PPL (Penyuluh Pertanian Lapangan)</li>
              <li>Petugas asuransi melakukan verifikasi lapangan</li>
              <li>Kerusakan minimal 75% dari luas lahan yang diasuransikan</li>
              <li>Klaim dibayarkan maksimal 14 hari kerja setelah verifikasi</li>
            </ul>
          </div>

          {/* Section 3: KUR Pertanian */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            3. Kredit Usaha Rakyat (KUR) Pertanian
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            KUR Pertanian adalah fasilitas kredit dengan bunga rendah yang
            diberikan kepada petani dan pelaku usaha pertanian untuk modal kerja
            maupun investasi. Pada tahun 2026, pemerintah menetapkan suku bunga
            KUR sebesar 3% per tahun untuk sektor pertanian, lebih rendah
            dibanding sektor lainnya sebagai bentuk prioritas pembangunan
            pertanian.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Jenis KUR
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Plafon Maksimal
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Tenor
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">KUR Super Mikro</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp10 juta
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Maks. 3 tahun
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">KUR Mikro</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp50 juta
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Maks. 3 tahun
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">KUR Kecil</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp500 juta
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Maks. 5 tahun
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">KUR Khusus Pertanian</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp500 juta (kelompok)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Maks. 5 tahun
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <ul className="space-y-4 my-6">
            <li className="flex items-start gap-3">
              <span className="text-amber-600 text-xl">&#10003;</span>
              <div>
                <strong className="text-gray-900">Tanpa Jaminan untuk KUR Mikro</strong>
                <p className="text-gray-600 text-sm">
                  Pinjaman hingga Rp50 juta tidak memerlukan agunan tambahan,
                  cukup dengan surat keterangan usaha dari kelurahan.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 text-xl">&#10003;</span>
              <div>
                <strong className="text-gray-900">Proses Pengajuan Dipermudah</strong>
                <p className="text-gray-600 text-sm">
                  Tahun 2026, pengajuan KUR bisa dilakukan secara online melalui
                  aplikasi bank penyalur atau melalui fintech yang bekerja sama.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 text-xl">&#10003;</span>
              <div>
                <strong className="text-gray-900">Grace Period untuk Tanaman Tahunan</strong>
                <p className="text-gray-600 text-sm">
                  Petani tanaman tahunan mendapat masa tenggang pembayaran hingga
                  2 tahun pertama sebelum tanaman mulai berproduksi.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 text-xl">&#10003;</span>
              <div>
                <strong className="text-gray-900">Dijamin oleh Pemerintah</strong>
                <p className="text-gray-600 text-sm">
                  KUR dijamin oleh pemerintah melalui skema penjaminan kredit,
                  sehingga risiko bagi bank penyalur berkurang secara signifikan.
                </p>
              </div>
            </li>
          </ul>

          {/* Section 4: Bantuan Alsintan */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            4. Bantuan Alat dan Mesin Pertanian (Alsintan)
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Program bantuan alsintan bertujuan untuk meningkatkan efisiensi dan
            produktivitas usaha tani melalui mekanisasi pertanian. Pemerintah
            menyalurkan berbagai jenis alat dan mesin pertanian kepada kelompok
            tani di seluruh Indonesia. Pada tahun 2026, anggaran bantuan
            alsintan ditingkatkan menjadi Rp4,5 triliun dengan penambahan
            jenis alat yang lebih modern dan ramah lingkungan.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Alsintan Pra-Panen
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Alat yang digunakan untuk persiapan dan perawatan lahan:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>&#8226; Traktor roda dua dan roda empat</li>
                <li>&#8226; Pompa air dan mesin irigasi</li>
                <li>&#8226; Alat tanam (transplanter)</li>
                <li>&#8226; Cultivator dan hand sprayer</li>
                <li>&#8226; Drone sprayer (program baru 2026)</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Alsintan Pasca-Panen
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Alat yang digunakan untuk pengolahan hasil panen:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>&#8226; Combine harvester (mesin panen)</li>
                <li>&#8226; Mesin perontok (thresher)</li>
                <li>&#8226; Mesin pengering (dryer)</li>
                <li>&#8226; Rice Milling Unit (RMU)</li>
                <li>&#8226; Mesin pengemas (packaging)</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8">
            <h4 className="font-bold text-gray-900 mb-3">
              Cara Mendapatkan Bantuan Alsintan
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-gray-900">Langkah 1:</p>
                <p className="text-gray-600">
                  Kelompok tani mengajukan proposal kebutuhan alsintan ke Dinas
                  Pertanian kabupaten/kota
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Langkah 2:</p>
                <p className="text-gray-600">
                  Dinas Pertanian melakukan verifikasi dan seleksi berdasarkan
                  kebutuhan dan prioritas
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Langkah 3:</p>
                <p className="text-gray-600">
                  Proposal yang lolos diajukan ke Kementerian Pertanian untuk
                  persetujuan anggaran
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Langkah 4:</p>
                <p className="text-gray-600">
                  Alsintan disalurkan ke kelompok tani disertai pelatihan
                  pengoperasian dan pemeliharaan
                </p>
              </div>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Salah satu inovasi baru tahun 2026 adalah program UPJA (Unit
            Pelayanan Jasa Alsintan) yang memungkinkan kelompok tani menyewakan
            alsintan bantuan kepada petani lain di sekitarnya. Skema ini
            bertujuan untuk memaksimalkan utilisasi alsintan sekaligus
            memberikan pendapatan tambahan bagi kelompok tani pengelola.
          </p>

          {/* Section 5: Infrastruktur Irigasi */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            5. Pembangunan dan Rehabilitasi Infrastruktur Irigasi
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Ketersediaan air irigasi merupakan faktor krusial dalam
            keberhasilan usaha tani. Pemerintah melalui Kementerian PUPR dan
            Kementerian Pertanian mengalokasikan anggaran besar untuk
            pembangunan jaringan irigasi baru dan rehabilitasi irigasi yang
            sudah ada. Pada tahun 2026, target rehabilitasi mencapai 500.000
            hektar jaringan irigasi di seluruh Indonesia.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 my-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Program Irigasi 2026
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  1. Rehabilitasi Jaringan Irigasi
                </p>
                <p className="text-sm text-gray-600">
                  Perbaikan saluran irigasi primer, sekunder, dan tersier yang
                  mengalami kerusakan untuk mengembalikan fungsi optimal.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  2. Pembangunan Irigasi Baru
                </p>
                <p className="text-sm text-gray-600">
                  Pembukaan jaringan irigasi di lahan pertanian baru, terutama
                  di luar Pulau Jawa sebagai bagian food estate.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  3. Irigasi Perpipaan
                </p>
                <p className="text-sm text-gray-600">
                  Sistem irigasi modern menggunakan pipa untuk mengurangi
                  kehilangan air dan meningkatkan efisiensi distribusi.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  4. Embung dan Dam Parit
                </p>
                <p className="text-sm text-gray-600">
                  Pembangunan tampungan air skala kecil di tingkat desa untuk
                  cadangan air saat musim kemarau.
                </p>
              </div>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Selain irigasi konvensional, pemerintah juga mulai memperkenalkan
            sistem irigasi tetes (drip irrigation) dan irigasi sprinkler untuk
            lahan hortikultura. Program ini didukung oleh Dana Alokasi Khusus
            (DAK) yang disalurkan ke pemerintah daerah. Petani dapat
            mengusulkan pembangunan atau perbaikan irigasi melalui Perkumpulan
            Petani Pemakai Air (P3A) di wilayah masing-masing.
          </p>

          {/* Section 6: Subsidi Benih */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            6. Program Subsidi Benih Unggul
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Penggunaan benih unggul bersertifikat merupakan salah satu kunci
            peningkatan produktivitas pertanian. Pemerintah menyediakan bantuan
            benih unggul untuk berbagai komoditas strategis nasional. Pada tahun
            2026, program ini diperluas dengan penambahan varietas baru yang
            lebih tahan terhadap perubahan iklim.
          </p>

          <div className="space-y-6 my-8">
            <div className="border-l-4 border-green-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Benih Padi Unggul
              </h4>
              <p className="text-gray-700 mb-3">
                Bantuan benih padi varietas Inpari, Ciherang, dan varietas baru
                tahan kekeringan. Alokasi 25 kg per hektar dengan subsidi
                hingga 100% untuk petani binaan.
              </p>
              <p className="text-sm text-gray-600">
                Target distribusi: 350.000 ton benih padi bersertifikat
              </p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Benih Jagung Hibrida
              </h4>
              <p className="text-gray-700 mb-3">
                Subsidi benih jagung hibrida untuk mendukung program
                swasembada jagung nasional. Petani mendapat bantuan benih 15 kg
                per hektar.
              </p>
              <p className="text-sm text-gray-600">
                Target distribusi: 60.000 ton benih jagung bersertifikat
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Benih Kedelai
              </h4>
              <p className="text-gray-700 mb-3">
                Program khusus benih kedelai varietas Anjasmoro dan Dena untuk
                mengurangi ketergantungan impor kedelai yang masih tinggi.
              </p>
              <p className="text-sm text-gray-600">
                Target distribusi: 25.000 ton benih kedelai bersertifikat
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Benih Hortikultura
              </h4>
              <p className="text-gray-700 mb-3">
                Benih bawang merah, cabai, dan sayuran strategis lainnya. Program
                ini diprioritaskan untuk daerah sentra produksi hortikultura.
              </p>
              <p className="text-sm text-gray-600">
                Bantuan mencakup benih, pupuk organik, dan pendampingan teknis
              </p>
            </div>
          </div>

          {/* Section 7: Stabilisasi Harga Pasar */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            7. Stabilisasi Harga Pasar dan Peran BULOG
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Pemerintah melalui Perum BULOG memiliki peran strategis dalam
            menjaga stabilitas harga komoditas pangan, khususnya beras. Pada
            tahun 2026, kebijakan Harga Pembelian Pemerintah (HPP) diperbarui
            untuk memberikan jaminan harga yang lebih baik kepada petani
            sekaligus menjaga daya beli masyarakat.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Komoditas
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    HPP 2026 (/kg)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Keterangan
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    Gabah Kering Panen (GKP)
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp6.000
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Di tingkat petani
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    Gabah Kering Giling (GKG)
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp7.300
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Di tingkat penggilingan
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    Beras Medium
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp11.500
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Di tingkat BULOG
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    Jagung Pipilan Kering
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp5.500
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Di tingkat petani
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-8 my-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Mekanisme Stabilisasi Harga
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  Saat Panen Raya (Harga Turun)
                </p>
                <p className="text-sm text-gray-600">
                  BULOG melakukan pembelian beras dalam jumlah besar untuk
                  menyerap kelebihan pasokan dan menjaga harga tidak jatuh di
                  bawah HPP.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  Saat Paceklik (Harga Naik)
                </p>
                <p className="text-sm text-gray-600">
                  BULOG melakukan operasi pasar dengan melepas stok beras ke
                  pasar untuk menekan kenaikan harga yang berlebihan.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  Bantuan Pangan (Rastra/BPNT)
                </p>
                <p className="text-sm text-gray-600">
                  Distribusi beras kepada keluarga penerima manfaat sebagai
                  jaring pengaman sosial dan penyerapan produksi petani.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  Cadangan Beras Pemerintah (CBP)
                </p>
                <p className="text-sm text-gray-600">
                  BULOG mengelola stok cadangan minimal 1,5 juta ton untuk
                  mengantisipasi bencana alam dan situasi darurat.
                </p>
              </div>
            </div>
          </div>

          {/* Section 8: Program Petani Muda */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            8. Program Petani Muda dan Regenerasi Pertanian
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Salah satu tantangan terbesar sektor pertanian Indonesia adalah
            aging farmer atau menuanya populasi petani. Rata-rata usia petani
            Indonesia saat ini di atas 50 tahun, dan sedikit generasi muda yang
            tertarik terjun ke sektor pertanian. Untuk mengatasi hal ini,
            pemerintah meluncurkan beberapa program khusus yang menargetkan
            generasi muda.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Program Penumbuhan Wirausaha Muda Pertanian (PWMP)
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Program pendampingan dan pemberian modal bagi pemuda usia 19-39
                tahun yang ingin memulai usaha di bidang pertanian.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>&#8226; Bantuan modal usaha hingga Rp15 juta</li>
                <li>&#8226; Pelatihan kewirausahaan 3 bulan</li>
                <li>&#8226; Pendampingan teknis selama 1 tahun</li>
                <li>&#8226; Akses ke jaringan pemasaran</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Magang dan Pelatihan Pertanian Modern
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Program pelatihan intensif di balai pelatihan pertanian dan
                magang di perusahaan agribisnis modern.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>&#8226; Pelatihan smart farming dan agritech</li>
                <li>&#8226; Magang di perusahaan agribisnis</li>
                <li>&#8226; Sertifikasi kompetensi pertanian</li>
                <li>&#8226; Beasiswa pendidikan pertanian</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Pemerintah juga mendorong integrasi teknologi digital dalam program
            petani muda, termasuk pelatihan penggunaan marketplace pertanian,
            media sosial untuk pemasaran produk, dan aplikasi manajemen usaha
            tani. Pada tahun 2026, target program ini adalah mencetak 100.000
            wirausaha muda pertanian baru di seluruh Indonesia.
          </p>

          <div className="bg-green-50 rounded-xl p-6 my-6">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">&rarr;</span>
                <div>
                  <strong>Duta Petani Muda:</strong> Program seleksi dan
                  pembinaan petani muda inspiratif yang menjadi role model
                  di daerah masing-masing untuk memotivasi generasi muda
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">&rarr;</span>
                <div>
                  <strong>Kompetisi Inovasi Pertanian:</strong> Lomba
                  tingkat nasional untuk ide dan inovasi pertanian dari
                  pemuda dengan hadiah modal usaha dan pendampingan
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">&rarr;</span>
                <div>
                  <strong>Komunitas Digital Farmer:</strong> Platform online
                  yang menghubungkan petani muda di seluruh Indonesia untuk
                  berbagi pengetahuan dan pengalaman
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">&rarr;</span>
                <div>
                  <strong>Akses Lahan untuk Pemuda:</strong> Fasilitasi akses
                  lahan pertanian bagi pemuda melalui kerja sama dengan
                  pemerintah daerah dan BUMN perkebunan
                </div>
              </li>
            </ul>
          </div>

          {/* Section 9: Cara Mengakses Program */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            9. Cara Mengakses Program Pemerintah untuk Pertanian
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Banyak petani yang belum mengetahui cara mengakses program-program
            pemerintah yang tersedia. Berikut panduan praktis langkah demi
            langkah agar petani dapat memanfaatkan berbagai bantuan dan program
            yang telah disiapkan pemerintah.
          </p>

          <div className="space-y-6 my-8">
            <div className="border-l-4 border-amber-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Langkah 1: Bergabung dengan Kelompok Tani
              </h4>
              <p className="text-gray-700 mb-3">
                Hampir semua program pemerintah disalurkan melalui kelompok
                tani. Pastikan Anda terdaftar dalam kelompok tani yang aktif
                dan diakui oleh Dinas Pertanian setempat. Jika belum ada
                kelompok tani di wilayah Anda, hubungi penyuluh pertanian
                untuk membantu membentuk kelompok baru.
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Langkah 2: Daftarkan Data Petani
              </h4>
              <p className="text-gray-700 mb-3">
                Pastikan data Anda teregistrasi dalam sistem SIMLUHTAN
                (Sistem Informasi Manajemen Penyuluhan Pertanian) dan basis
                data petani lainnya. Data yang diperlukan meliputi identitas,
                luas lahan, jenis komoditas, dan lokasi usaha tani.
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Langkah 3: Aktif Berkomunikasi dengan Penyuluh
              </h4>
              <p className="text-gray-700 mb-3">
                Penyuluh Pertanian Lapangan (PPL) adalah ujung tombak
                penyaluran informasi program pemerintah. Jalin komunikasi
                aktif dengan PPL di wilayah Anda untuk mendapatkan informasi
                terbaru tentang program yang tersedia dan persyaratannya.
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Langkah 4: Siapkan Dokumen Pendukung
              </h4>
              <p className="text-gray-700 mb-3">
                Persiapkan dokumen yang umumnya diperlukan seperti KTP, Kartu
                Keluarga, Surat Keterangan Usaha Tani, bukti kepemilikan atau
                sewa lahan, serta RDKK untuk program pupuk bersubsidi. Simpan
                salinan digital semua dokumen untuk mempermudah pengajuan.
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Langkah 5: Manfaatkan Aplikasi Digital
              </h4>
              <p className="text-gray-700 mb-3">
                Pemerintah telah menyediakan berbagai aplikasi digital seperti
                SIPINDO, Toko Tani Indonesia, dan aplikasi perbankan untuk
                KUR. Pelajari dan manfaatkan aplikasi-aplikasi ini untuk
                mengakses informasi dan mengajukan program secara online.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <p className="text-gray-800 font-medium mb-2">
              Kontak Penting untuk Informasi Program
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Dinas Pertanian kabupaten/kota setempat
              </li>
              <li>
                Balai Penyuluhan Pertanian (BPP) kecamatan
              </li>
              <li>
                Call center Kementerian Pertanian: 0800-100-8080
              </li>
              <li>
                Website resmi: pertanian.go.id
              </li>
              <li>
                Kantor cabang bank penyalur KUR (BRI, BNI, Bank Mandiri)
              </li>
            </ul>
          </div>

          {/* Section 10: Kesimpulan */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Kesimpulan: Manfaatkan Peluang untuk Kemajuan Pertanian
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Program-program pemerintah tahun 2026 untuk sektor pertanian
            menunjukkan komitmen serius dalam membangun ketahanan pangan
            nasional dan meningkatkan kesejahteraan petani. Dari subsidi pupuk
            yang meringankan biaya produksi, asuransi pertanian yang melindungi
            dari risiko gagal panen, hingga program petani muda yang menjamin
            regenerasi sektor pertanian, semua dirancang untuk menjawab
            tantangan pertanian Indonesia.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Kunci keberhasilan program-program ini terletak pada partisipasi
            aktif petani dalam mengakses dan memanfaatkan setiap program yang
            tersedia. Jangan ragu untuk bertanya kepada penyuluh pertanian,
            bergabung dengan kelompok tani, dan memanfaatkan teknologi digital
            untuk mendapatkan informasi terkini. Dengan memanfaatkan semua
            sumber daya yang disediakan pemerintah, petani Indonesia dapat
            meningkatkan produktivitas, pendapatan, dan kualitas hidup mereka.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Penting juga bagi petani untuk tidak hanya bergantung pada satu
            program saja. Kombinasikan berbagai program yang ada, misalnya
            menggunakan pupuk bersubsidi, mengikuti AUTP, dan mengajukan KUR
            untuk modal kerja. Pendekatan terpadu ini akan memberikan dampak
            maksimal bagi keberhasilan usaha tani Anda. Masa depan pertanian
            Indonesia yang lebih baik dimulai dari langkah-langkah kecil yang
            kita ambil hari ini.
          </p>

          <div className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-xl p-8 my-12">
            <p className="text-xl font-bold mb-3">
              Jangan Lewatkan Kesempatan!
            </p>
            <p className="text-amber-100">
              Segera hubungi Dinas Pertanian atau penyuluh pertanian di wilayah
              Anda untuk mendapatkan informasi lebih lanjut tentang program-
              program di atas. Pastikan data Anda sudah terdaftar di kelompok
              tani dan sistem informasi pertanian. Bersama-sama, kita wujudkan
              pertanian Indonesia yang maju, mandiri, dan sejahtera.
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-white font-medium rounded-xl hover:bg-amber-700 transition-colors"
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
