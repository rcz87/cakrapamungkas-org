import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export const metadata = {
  title: "Program Swasembada 2025: Target & Strategi Pemerintah | Cakra Pamungkas",
  description:
    "Analisis mendalam program swasembada pangan 2025 dengan anggaran Rp139,4 triliun, target 3 juta hektar sawah baru, strategi hilirisasi komoditas, dan tantangan ketahanan pangan Indonesia.",
};

export default function SwasembadaArtikelPage() {
  return (
    <article className="bg-white">
      {/* Header */}
      <header className="bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-800 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Kembali ke Beranda</span>
          </Link>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full">
              KEBIJAKAN
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Swasembada Pangan
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Kebijakan Pertanian
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Program Pemerintah
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Ketahanan Pangan
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Program Swasembada 2025: Target & Strategi Pemerintah untuk Ketahanan Pangan Indonesia
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-purple-200">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">12 Februari 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">15 menit baca</span>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative h-[400px] lg:h-[600px] bg-gray-100">
        <Image
          src="/images/program swasembada.png"
          alt="Program Swasembada Pangan 2025 Indonesia"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-700 leading-relaxed mb-8">
            Swasembada pangan merupakan cita-cita besar bangsa Indonesia yang telah
            dicanangkan sejak era kemerdekaan. Pada tahun 2025, pemerintah kembali
            menegaskan komitmennya melalui program swasembada pangan nasional dengan
            anggaran fantastis sebesar Rp139,4 triliun, target pembukaan 3 juta
            hektar sawah baru, serta strategi hilirisasi komoditas pertanian. Program
            ini menjadi salah satu prioritas utama dalam agenda pembangunan nasional,
            menyentuh aspek produksi, distribusi, hingga kesejahteraan petani.
          </p>

          {/* Section 1: Introduction */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Latar Belakang Program Swasembada Pangan
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Indonesia sebagai negara agraris dengan luas lahan pertanian mencapai
            lebih dari 7 juta hektar seharusnya mampu memenuhi kebutuhan pangan
            domestik secara mandiri. Namun, kenyataannya Indonesia masih mengimpor
            berbagai komoditas pangan strategis, mulai dari beras, jagung, kedelai,
            gula, hingga daging sapi. Ketergantungan pada impor ini menimbulkan
            kerentanan terhadap gejolak harga global dan gangguan rantai pasok
            internasional.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Data Badan Pusat Statistik (BPS) menunjukkan bahwa pada tahun 2024,
            Indonesia masih mengimpor beras sebanyak 3,1 juta ton, kedelai 2,6 juta
            ton, dan gula mentah 3,2 juta ton. Angka-angka ini menjadi pengingat
            bahwa upaya swasembada pangan masih memerlukan kerja keras yang luar biasa
            dari seluruh pemangku kepentingan.
          </p>

          <div className="bg-purple-50 border-l-4 border-purple-600 p-6 my-8">
            <p className="text-gray-800 font-medium mb-2">
              Mengapa Swasembada Pangan Penting?
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Menjamin ketersediaan pangan bagi 280 juta penduduk Indonesia</li>
              <li>Mengurangi ketergantungan pada impor dan menghemat devisa negara</li>
              <li>Menstabilkan harga pangan domestik dari gejolak pasar global</li>
              <li>Meningkatkan kesejahteraan petani dan pekerja sektor pertanian</li>
              <li>Memperkuat kedaulatan dan ketahanan pangan nasional</li>
            </ul>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Pemerintah menyadari bahwa pencapaian swasembada pangan bukan hanya
            soal memperluas lahan pertanian, tetapi juga menyangkut peningkatan
            produktivitas, modernisasi infrastruktur, penguatan rantai pasok, dan
            pemberdayaan petani. Oleh karena itu, program swasembada 2025 dirancang
            dengan pendekatan komprehensif yang mencakup seluruh aspek ekosistem
            pertanian nasional.
          </p>

          {/* Section 2: Budget Allocation */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Alokasi Anggaran: Rp139,4 Triliun untuk Ketahanan Pangan
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Anggaran sebesar Rp139,4 triliun yang dialokasikan untuk program
            swasembada pangan 2025 merupakan salah satu alokasi terbesar dalam
            sejarah pembangunan pertanian Indonesia. Dana ini tersebar di beberapa
            kementerian dan lembaga yang terkait dengan sektor pangan dan pertanian.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Sektor Alokasi
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Anggaran (Rp)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Persentase
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Pembukaan Lahan Baru</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Rp42,5 triliun</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    30,5%
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Infrastruktur Irigasi</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Rp28,3 triliun</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    20,3%
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Subsidi Pupuk & Benih</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Rp25,1 triliun</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    18,0%
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Hilirisasi Komoditas</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Rp18,7 triliun</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    13,4%
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Teknologi & Mekanisasi</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Rp13,9 triliun</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    10,0%
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Pelatihan & SDM Pertanian</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Rp10,9 triliun</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    7,8%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Alokasi anggaran terbesar diarahkan untuk pembukaan lahan baru sebesar
            Rp42,5 triliun atau 30,5% dari total anggaran. Hal ini menunjukkan
            prioritas pemerintah dalam memperluas basis produksi pertanian nasional.
            Infrastruktur irigasi menjadi prioritas kedua dengan alokasi Rp28,3
            triliun, mengingat ketersediaan air merupakan faktor kunci keberhasilan
            pertanian.
          </p>

          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 my-8">
            <p className="text-gray-800 font-medium mb-2">
              Sumber Pendanaan Program Swasembada
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>APBN (Anggaran Pendapatan dan Belanja Negara): 65%</li>
              <li>Dana Transfer Daerah dan Dana Desa: 15%</li>
              <li>Investasi Swasta dan BUMN: 12%</li>
              <li>Pinjaman Luar Negeri dan Hibah: 5%</li>
              <li>Pendanaan Kreatif (Sukuk, Green Bond): 3%</li>
            </ul>
          </div>

          {/* Section 3: Target 3 Million Hectares */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Target Ambisius: 3 Juta Hektar Sawah Baru
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Salah satu pilar utama program swasembada 2025 adalah pembukaan 3 juta
            hektar lahan sawah baru yang tersebar di berbagai provinsi di Indonesia.
            Target ini merupakan upaya terbesar dalam sejarah ekstensifikasi pertanian
            Indonesia sejak program transmigrasi era Orde Baru.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Distribusi Lahan Baru per Wilayah
          </h3>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Kalimantan
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Target pembukaan lahan terbesar dengan potensi lahan gambut dan
                mineral yang masih luas.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Target: 1,2 juta hektar</li>
                <li>Provinsi: Kalbar, Kalteng, Kalsel</li>
                <li>Jenis lahan: Gambut & mineral</li>
                <li>Estimasi produksi: 6 juta ton/tahun</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Sumatera
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Fokus pada rehabilitasi lahan tidur dan konversi lahan perkebunan
                tidak produktif.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Target: 800.000 hektar</li>
                <li>Provinsi: Sumsel, Riau, Jambi</li>
                <li>Jenis lahan: Rawa & pasang surut</li>
                <li>Estimasi produksi: 4 juta ton/tahun</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Papua & Maluku
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Pengembangan food estate baru dengan pendekatan mekanisasi modern.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Target: 600.000 hektar</li>
                <li>Provinsi: Papua, Papua Barat, Maluku</li>
                <li>Jenis lahan: Mineral & aluvial</li>
                <li>Estimasi produksi: 3 juta ton/tahun</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Sulawesi & Nusa Tenggara
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Intensifikasi dan perluasan lahan pertanian eksisting dengan
                teknologi irigasi modern.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Target: 400.000 hektar</li>
                <li>Provinsi: Sulsel, Sulteng, NTB</li>
                <li>Jenis lahan: Tadah hujan & irigasi</li>
                <li>Estimasi produksi: 2 juta ton/tahun</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Pembukaan lahan baru ini akan dilakukan secara bertahap mulai tahun 2025
            hingga 2029, dengan prioritas pada wilayah yang memiliki kesesuaian lahan
            tinggi dan akses infrastruktur yang memadai. Pemerintah juga menekankan
            bahwa pembukaan lahan tidak akan dilakukan di kawasan hutan primer dan
            area konservasi, melainkan difokuskan pada lahan tidur, lahan terdegradasi,
            dan area yang sudah memiliki izin pemanfaatan.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Mekanisme Pembukaan Lahan
          </h3>

          <ul className="space-y-4 my-6">
            <li className="flex items-start gap-3">
              <span className="text-purple-600 text-xl">1.</span>
              <div>
                <strong className="text-gray-900">Survei dan Pemetaan Lahan</strong>
                <p className="text-gray-600 text-sm">
                  Menggunakan teknologi citra satelit dan drone untuk mengidentifikasi
                  lahan potensial yang sesuai untuk pertanian padi.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 text-xl">2.</span>
              <div>
                <strong className="text-gray-900">Analisis Kesesuaian Lahan</strong>
                <p className="text-gray-600 text-sm">
                  Pengujian kualitas tanah, ketersediaan air, topografi, dan faktor
                  iklim untuk memastikan kelayakan pertanian.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 text-xl">3.</span>
              <div>
                <strong className="text-gray-900">Pembersihan dan Penyiapan Lahan</strong>
                <p className="text-gray-600 text-sm">
                  Land clearing dengan alat berat, pembuatan petak sawah, dan
                  pembangunan saluran irigasi primer dan sekunder.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 text-xl">4.</span>
              <div>
                <strong className="text-gray-900">Pengolahan dan Ameliorasi Tanah</strong>
                <p className="text-gray-600 text-sm">
                  Perbaikan kualitas tanah melalui pengapuran, pemberian bahan organik,
                  dan treatment khusus untuk lahan gambut.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 text-xl">5.</span>
              <div>
                <strong className="text-gray-900">Penanaman Perdana dan Pendampingan</strong>
                <p className="text-gray-600 text-sm">
                  Distribusi benih unggul dan pendampingan teknis oleh penyuluh
                  pertanian selama minimal 3 musim tanam pertama.
                </p>
              </div>
            </li>
          </ul>

          {/* Section 4: Commodity Downstream */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Hilirisasi Komoditas Pertanian: Dari Bahan Mentah ke Produk Bernilai Tambah
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Program hilirisasi komoditas pertanian menjadi strategi kunci dalam
            meningkatkan nilai tambah produk pertanian Indonesia. Selama ini,
            Indonesia banyak mengekspor komoditas pertanian dalam bentuk mentah
            dengan harga rendah, sementara mengimpor produk olahan dengan harga
            tinggi. Program hilirisasi bertujuan memutus rantai ketergantungan
            ini.
          </p>

          <div className="space-y-6 my-8">
            <div className="border-l-4 border-purple-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Hilirisasi Kelapa Sawit
              </h4>
              <p className="text-gray-700 mb-3">
                Pengembangan industri oleokimia dan biodiesel B40 dari CPO untuk
                mengurangi ekspor bahan mentah dan meningkatkan nilai tambah
                domestik hingga 300%.
              </p>
              <p className="text-sm text-gray-600">
                Target: Pengolahan 60% CPO di dalam negeri pada 2027
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Hilirisasi Kakao
              </h4>
              <p className="text-gray-700 mb-3">
                Pembangunan pabrik pengolahan cokelat di sentra produksi Sulawesi
                dan Sumatera untuk memproduksi cocoa butter, cocoa powder, dan
                produk cokelat jadi.
              </p>
              <p className="text-sm text-gray-600">
                Target: Indonesia menjadi eksportir cokelat olahan terbesar ASEAN
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Hilirisasi Kopi
              </h4>
              <p className="text-gray-700 mb-3">
                Pengembangan industri kopi specialty dan roasted coffee untuk pasar
                domestik dan ekspor, meningkatkan pendapatan petani kopi hingga 5x
                lipat dibanding menjual biji mentah.
              </p>
              <p className="text-sm text-gray-600">
                Target: Ekspor kopi olahan mencapai USD 2 miliar pada 2028
              </p>
            </div>

            <div className="border-l-4 border-indigo-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Hilirisasi Beras & Turunannya
              </h4>
              <p className="text-gray-700 mb-3">
                Pengembangan produk turunan beras seperti tepung beras, beras
                analog, nasi instan, dan produk pangan olahan berbasis beras
                untuk pasar domestik dan ekspor.
              </p>
              <p className="text-sm text-gray-600">
                Target: Diversifikasi 20% produksi beras ke produk olahan bernilai tinggi
              </p>
            </div>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-600 p-6 my-8">
            <p className="text-gray-800 font-medium mb-2">
              Dampak Ekonomi Hilirisasi Komoditas
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Penciptaan 2,5 juta lapangan kerja baru di sektor agroindustri</li>
              <li>Peningkatan nilai ekspor pertanian hingga 40% pada 2028</li>
              <li>Penghematan devisa impor produk olahan sebesar Rp85 triliun/tahun</li>
              <li>Peningkatan pendapatan petani rata-rata 25-50%</li>
              <li>Pengembangan 500 kawasan industri pertanian terpadu</li>
            </ul>
          </div>

          {/* Section 5: Rice Production */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Target Produksi Beras dan Strategi Pencapaiannya
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Beras merupakan komoditas pangan paling strategis bagi Indonesia, dengan
            konsumsi per kapita sekitar 94 kg per tahun. Untuk memenuhi kebutuhan
            280 juta penduduk, Indonesia memerlukan produksi beras minimal 32 juta
            ton per tahun. Program swasembada 2025 menargetkan produksi beras
            nasional mencapai 35 juta ton pada tahun 2027, memberikan surplus
            3 juta ton sebagai cadangan pangan nasional.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Strategi Peningkatan Produksi Beras
          </h3>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Intensifikasi Lahan Eksisting
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Peningkatan produktivitas lahan sawah yang sudah ada melalui
                optimasi input dan teknologi budidaya.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Target: Produksi 5,5 ton/ha (dari 5,1 ton/ha)</li>
                <li>Distribusi benih unggul bersertifikat</li>
                <li>Optimasi pemupukan berimbang</li>
                <li>Penerapan sistem tanam jajar legowo</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Ekstensifikasi Lahan Baru
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Pembukaan 3 juta hektar sawah baru yang akan berkontribusi
                signifikan terhadap total produksi nasional.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Target: 15 juta ton tambahan pada 2029</li>
                <li>Pembukaan bertahap: 600.000 ha/tahun</li>
                <li>Prioritas lahan dengan IP 200-300</li>
                <li>Pengembangan food estate modern</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Peningkatan Indeks Pertanaman
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Meningkatkan frekuensi tanam dari rata-rata 1,5 kali menjadi
                2-3 kali per tahun melalui perbaikan irigasi.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Target IP rata-rata nasional: 2,5</li>
                <li>Rehabilitasi jaringan irigasi</li>
                <li>Pembangunan waduk dan embung baru</li>
                <li>Penggunaan varietas berumur pendek</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Pengurangan Kehilangan Hasil
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Menekan losses pasca-panen yang saat ini mencapai 10-15% menjadi
                di bawah 5% melalui modernisasi alat dan proses.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Target losses: di bawah 5%</li>
                <li>Mekanisasi panen dan pasca-panen</li>
                <li>Modernisasi penggilingan padi</li>
                <li>Pembangunan gudang penyimpanan modern</li>
              </ul>
            </div>
          </div>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Tahun
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Target Produksi
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Kebutuhan Nasional
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">2025</td>
                  <td className="px-6 py-4 text-sm text-gray-600">31,5 juta ton</td>
                  <td className="px-6 py-4 text-sm text-gray-600">32,0 juta ton</td>
                  <td className="px-6 py-4 text-sm font-semibold text-amber-600">
                    Transisi
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">2026</td>
                  <td className="px-6 py-4 text-sm text-gray-600">33,0 juta ton</td>
                  <td className="px-6 py-4 text-sm text-gray-600">32,2 juta ton</td>
                  <td className="px-6 py-4 text-sm font-semibold text-green-600">
                    Surplus Awal
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">2027</td>
                  <td className="px-6 py-4 text-sm text-gray-600">35,0 juta ton</td>
                  <td className="px-6 py-4 text-sm text-gray-600">32,5 juta ton</td>
                  <td className="px-6 py-4 text-sm font-semibold text-green-600">
                    Swasembada
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">2029</td>
                  <td className="px-6 py-4 text-sm text-gray-600">38,0 juta ton</td>
                  <td className="px-6 py-4 text-sm text-gray-600">33,0 juta ton</td>
                  <td className="px-6 py-4 text-sm font-semibold text-green-600">
                    Ekspor
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section 6: Infrastructure Development */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Pembangunan Infrastruktur Pertanian
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Infrastruktur pertanian yang memadai merupakan prasyarat mutlak bagi
            keberhasilan program swasembada pangan. Pemerintah berencana membangun
            dan merehabilitasi berbagai fasilitas infrastruktur pertanian secara
            masif dalam kurun waktu 2025-2029.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Program Infrastruktur Utama
          </h3>

          <div className="space-y-6 my-8">
            <div className="border-l-4 border-purple-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Jaringan Irigasi Nasional
              </h4>
              <p className="text-gray-700 mb-3">
                Rehabilitasi 1,5 juta hektar jaringan irigasi rusak dan pembangunan
                500.000 hektar jaringan irigasi baru. Termasuk pembangunan 65 waduk
                baru dan 2.000 embung desa untuk menjamin ketersediaan air sepanjang
                tahun.
              </p>
              <p className="text-sm text-gray-600">
                Anggaran: Rp28,3 triliun | Timeline: 2025-2029
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Jalan Usaha Tani (JUT)
              </h4>
              <p className="text-gray-700 mb-3">
                Pembangunan 50.000 km jalan usaha tani untuk menghubungkan lahan
                pertanian dengan pasar dan pusat pengolahan. Jalan ini akan memangkas
                biaya transportasi hasil pertanian hingga 30%.
              </p>
              <p className="text-sm text-gray-600">
                Anggaran: Rp8,5 triliun | Timeline: 2025-2028
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Gudang dan Silo Penyimpanan
              </h4>
              <p className="text-gray-700 mb-3">
                Pembangunan 1.000 gudang modern dan 200 silo beras dengan kapasitas
                total 5 juta ton untuk menyimpan cadangan beras nasional dan
                mengurangi losses pasca-panen.
              </p>
              <p className="text-sm text-gray-600">
                Anggaran: Rp6,2 triliun | Timeline: 2025-2027
              </p>
            </div>

            <div className="border-l-4 border-indigo-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Rice Milling Center Modern
              </h4>
              <p className="text-gray-700 mb-3">
                Pembangunan 300 unit penggilingan padi modern berkapasitas besar
                dengan teknologi sorting, grading, dan packaging otomatis untuk
                meningkatkan kualitas beras nasional.
              </p>
              <p className="text-sm text-gray-600">
                Anggaran: Rp4,8 triliun | Timeline: 2025-2028
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-8 my-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Infrastruktur Digital Pertanian
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  1. Sistem Informasi Pertanian Nasional
                </p>
                <p className="text-sm text-gray-600">
                  Platform digital terintegrasi untuk monitoring produksi, distribusi,
                  dan harga pangan real-time di seluruh Indonesia.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  2. Jaringan Internet Desa Pertanian
                </p>
                <p className="text-sm text-gray-600">
                  Pemasangan 10.000 titik akses internet di kawasan pertanian untuk
                  mendukung digitalisasi dan smart farming.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  3. Pusat Data Cuaca dan Iklim
                </p>
                <p className="text-sm text-gray-600">
                  Pembangunan 500 stasiun cuaca otomatis di sentra produksi pangan
                  untuk prediksi iklim yang lebih akurat.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  4. Marketplace Pertanian Digital
                </p>
                <p className="text-sm text-gray-600">
                  Platform e-commerce khusus pertanian yang menghubungkan petani
                  langsung dengan konsumen dan industri pengolahan.
                </p>
              </div>
            </div>
          </div>

          {/* Section 7: Challenges */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Tantangan dalam Mewujudkan Swasembada Pangan
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Meskipun program swasembada 2025 dirancang dengan sangat ambisius, ada
            sejumlah tantangan besar yang harus dihadapi dan diatasi agar target
            dapat tercapai. Tantangan-tantangan ini mencakup aspek teknis, sosial,
            ekonomi, dan lingkungan.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Tantangan Utama
          </h3>

          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
            <li>
              <strong>Alih Fungsi Lahan Pertanian:</strong> Setiap tahun, sekitar
              80.000-100.000 hektar lahan sawah produktif dikonversi menjadi kawasan
              permukiman dan industri, terutama di Pulau Jawa.
            </li>
            <li>
              <strong>Perubahan Iklim dan Cuaca Ekstrem:</strong> El Nino, La Nina,
              banjir, dan kekeringan semakin sering terjadi dan sulit diprediksi,
              mengancam produktivitas pertanian.
            </li>
            <li>
              <strong>Penuaan Petani:</strong> Rata-rata usia petani Indonesia sudah
              di atas 50 tahun, dan generasi muda kurang tertarik bekerja di sektor
              pertanian.
            </li>
            <li>
              <strong>Fragmentasi Lahan:</strong> Rata-rata kepemilikan lahan petani
              hanya 0,3-0,5 hektar, membuat sulit untuk menerapkan mekanisasi dan
              ekonomi skala.
            </li>
            <li>
              <strong>Keterbatasan Infrastruktur:</strong> Banyak daerah sentra
              produksi pangan masih kekurangan infrastruktur irigasi, jalan, dan
              fasilitas pasca-panen.
            </li>
            <li>
              <strong>Distribusi yang Tidak Merata:</strong> Surplus produksi di
              satu daerah tidak selalu bisa menjangkau daerah defisit karena
              keterbatasan logistik.
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Tantangan Lingkungan dan Sosial
          </h3>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
            <p className="text-gray-800 font-medium mb-2">
              Isu Lingkungan yang Perlu Diperhatikan
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Pembukaan lahan baru berpotensi merusak ekosistem dan biodiversitas
                jika tidak dilakukan dengan prinsip keberlanjutan
              </li>
              <li>
                Drainase lahan gambut untuk pertanian dapat melepaskan emisi karbon
                yang signifikan dan meningkatkan risiko kebakaran
              </li>
              <li>
                Penggunaan pestisida dan pupuk kimia berlebihan mengancam kesehatan
                tanah dan sumber air
              </li>
              <li>
                Konflik lahan dengan masyarakat adat dan komunitas lokal di wilayah
                pembukaan lahan baru
              </li>
              <li>
                Perlunya keseimbangan antara target produksi dan kelestarian
                lingkungan hidup
              </li>
            </ul>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Para ahli lingkungan dan organisasi masyarakat sipil mengingatkan bahwa
            target pembukaan 3 juta hektar lahan baru harus dijalankan dengan sangat
            hati-hati. Pembelajaran dari proyek food estate Kalimantan Tengah yang
            belum mencapai target optimal menjadi catatan penting bagi pelaksanaan
            program ke depan. Pemerintah perlu memastikan bahwa pembukaan lahan
            dilakukan berdasarkan kajian ilmiah yang mendalam dan melibatkan
            partisipasi masyarakat lokal.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Solusi dan Mitigasi Tantangan
          </h3>

          <div className="bg-green-50 rounded-xl p-6 my-6">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">&#8594;</span>
                <div>
                  <strong>Penegakan Lahan Pertanian Pangan Berkelanjutan (LP2B):</strong> Perlindungan
                  hukum terhadap lahan sawah produktif dari alih fungsi
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">&#8594;</span>
                <div>
                  <strong>Asuransi Pertanian:</strong> Perluasan program asuransi usaha
                  tani padi (AUTP) untuk melindungi petani dari risiko gagal panen
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">&#8594;</span>
                <div>
                  <strong>Program Regenerasi Petani:</strong> Insentif dan beasiswa bagi
                  pemuda desa untuk menekuni pertanian modern
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">&#8594;</span>
                <div>
                  <strong>Konsolidasi Lahan:</strong> Program korporasi petani untuk
                  mengoptimalkan pengelolaan lahan skala kecil
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">&#8594;</span>
                <div>
                  <strong>AMDAL Ketat:</strong> Penerapan analisis dampak lingkungan
                  yang ketat untuk setiap proyek pembukaan lahan baru
                </div>
              </li>
            </ul>
          </div>

          {/* Section 8: Role of Technology */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Peran Teknologi dalam Program Swasembada
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Teknologi menjadi pengungkit utama (key enabler) dalam mewujudkan
            swasembada pangan. Pemerintah mengalokasikan Rp13,9 triliun khusus
            untuk pengembangan dan adopsi teknologi pertanian modern. Penerapan
            teknologi diharapkan mampu meningkatkan produktivitas 20-30% sekaligus
            menekan biaya produksi.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Precision Agriculture
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Pertanian presisi menggunakan GPS, sensor, dan analisis data untuk
                mengoptimalkan setiap aspek budidaya.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Pemupukan variable rate</li>
                <li>Irigasi presisi berbasis sensor</li>
                <li>Pemetaan hasil panen per petak</li>
                <li>Analisis kesuburan tanah real-time</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Mekanisasi Pertanian
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Program distribusi alat mesin pertanian (alsintan) modern untuk
                meningkatkan efisiensi kerja petani.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Traktor roda empat dan power tiller</li>
                <li>Transplanter otomatis</li>
                <li>Combine harvester modern</li>
                <li>Dryer dan penggilingan mini</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Bioteknologi Pertanian
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Pengembangan varietas unggul baru yang tahan terhadap perubahan
                iklim dan hama penyakit.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Varietas padi tahan kekeringan</li>
                <li>Varietas tahan genangan (submergence)</li>
                <li>Padi berumur genjah (90-100 hari)</li>
                <li>Benih hibrida produktivitas tinggi</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Sistem Informasi & Big Data
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Pemanfaatan data besar untuk pengambilan keputusan strategis
                di tingkat nasional dan petani.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Dashboard produksi pangan nasional</li>
                <li>Early warning system gagal panen</li>
                <li>Prediksi harga komoditas AI</li>
                <li>Aplikasi mobile panduan budidaya</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Kementerian Pertanian juga menjalin kerjasama dengan berbagai lembaga
            penelitian internasional seperti IRRI (International Rice Research
            Institute), CIMMYT, dan FAO untuk transfer teknologi dan pengembangan
            kapasitas sumber daya manusia. Kerjasama ini diharapkan mempercepat
            adopsi teknologi terbaru yang telah terbukti berhasil di negara-negara
            lain.
          </p>

          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 my-8">
            <p className="text-gray-800 font-medium mb-2">
              Target Adopsi Teknologi 2025-2029
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>50.000 unit alsintan modern didistribusikan ke kelompok tani</li>
              <li>5.000 desa pertanian terhubung dengan platform digital</li>
              <li>100 varietas unggul baru dirilis untuk berbagai agroekosistem</li>
              <li>10.000 penyuluh pertanian dilatih penguasaan teknologi digital</li>
              <li>1.000 startup agritech lokal mendapat dukungan inkubasi</li>
            </ul>
          </div>

          {/* Section 9: Comparison with Other Countries */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Perbandingan dengan Negara Lain: Pelajaran dari Dunia
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Untuk memahami posisi dan tantangan Indonesia dalam mewujudkan
            swasembada pangan, penting untuk melihat bagaimana negara-negara lain
            mengelola ketahanan pangan mereka. Berikut adalah perbandingan dengan
            beberapa negara yang berhasil mencapai atau mendekati swasembada pangan.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Negara
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Status Swasembada
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Strategi Utama
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Produktivitas
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">Thailand</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Eksportir bersih</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Mekanisasi, varietas unggul, infrastruktur irigasi
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    4,5 ton/ha
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">Vietnam</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Eksportir bersih</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Intensifikasi, konsolidasi lahan, ekspor oriented
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    5,8 ton/ha
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">Tiongkok</td>
                  <td className="px-6 py-4 text-sm text-gray-600">95% swasembada beras</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Hybrid rice, teknologi tinggi, subsidi besar
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    7,0 ton/ha
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">India</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Eksportir terbesar dunia</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Green Revolution, subsidi input, MSP
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    4,1 ton/ha
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">Jepang</td>
                  <td className="px-6 py-4 text-sm text-gray-600">100% swasembada beras</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Proteksi impor, subsidi petani, precision farming
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    6,7 ton/ha
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">Indonesia</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Masih impor 3+ juta ton</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Ekstensifikasi, intensifikasi, hilirisasi
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    5,1 ton/ha
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Pelajaran dari Keberhasilan Negara Lain
          </h3>

          <div className="space-y-6 my-8">
            <div className="border-l-4 border-purple-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Vietnam: Transformasi dari Importir ke Eksportir
              </h4>
              <p className="text-gray-700 mb-3">
                Pada tahun 1980-an, Vietnam masih mengimpor beras. Melalui kebijakan
                Doi Moi (reformasi ekonomi), pembebasan harga, investasi irigasi
                masif, dan pengembangan varietas unggul, Vietnam berhasil menjadi
                eksportir beras terbesar kedua dunia dalam waktu hanya 15 tahun.
                Indonesia bisa mengambil pelajaran dari kecepatan dan konsistensi
                kebijakan Vietnam.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Tiongkok: Revolusi Beras Hibrida
              </h4>
              <p className="text-gray-700 mb-3">
                Tiongkok berhasil meningkatkan produktivitas beras secara dramatis
                melalui pengembangan padi hibrida oleh Prof. Yuan Longping. Dengan
                produktivitas 7 ton/ha, Tiongkok mampu memberi makan 1,4 miliar
                penduduknya. Investasi masif dalam riset dan pengembangan benih
                menjadi kunci keberhasilan ini.
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Jepang: Precision Farming dan Proteksi Petani
              </h4>
              <p className="text-gray-700 mb-3">
                Jepang mencapai swasembada beras 100% dengan kombinasi pertanian
                presisi, proteksi tarif impor, subsidi langsung ke petani, dan
                pengembangan teknologi canggih. Meski biaya produksi tinggi, Jepang
                memilih kedaulatan pangan sebagai prioritas keamanan nasional.
              </p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Dari perbandingan ini, terlihat bahwa setiap negara yang berhasil
            mencapai swasembada pangan memiliki komitmen politik jangka panjang,
            investasi besar dalam infrastruktur dan teknologi, serta kebijakan
            yang konsisten lintas pemerintahan. Indonesia perlu memastikan bahwa
            program swasembada 2025 bukan hanya program satu pemerintahan, tetapi
            menjadi agenda bangsa yang berkelanjutan.
          </p>

          {/* Section 10: Conclusion */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Kesimpulan dan Prospek ke Depan
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Program Swasembada 2025 merupakan langkah berani dan ambisius
            pemerintah Indonesia dalam mewujudkan kedaulatan pangan. Dengan
            anggaran Rp139,4 triliun, target 3 juta hektar sawah baru, dan
            berbagai program hilirisasi komoditas, Indonesia memiliki peta jalan
            yang jelas menuju kemandirian pangan.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Namun, keberhasilan program ini sangat bergantung pada beberapa
            faktor kritis. Pertama, konsistensi kebijakan dan komitmen politik
            lintas periode pemerintahan. Kedua, efektivitas dan transparansi
            penggunaan anggaran yang sangat besar. Ketiga, adopsi teknologi
            yang inklusif dan menjangkau seluruh petani, termasuk petani kecil.
            Keempat, keseimbangan antara target produksi dan keberlanjutan
            lingkungan.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Para ekonom memproyeksikan bahwa jika program ini berjalan sesuai
            rencana, Indonesia berpotensi mencapai swasembada beras penuh pada
            tahun 2027 dan bahkan menjadi eksportir beras pada 2029. Pencapaian
            ini tidak hanya akan menghemat devisa negara puluhan triliun rupiah
            per tahun, tetapi juga meningkatkan kesejahteraan jutaan petani dan
            memperkuat posisi Indonesia sebagai negara agraris yang berdaulat.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Yang paling penting, swasembada pangan bukan hanya soal angka
            produksi dan luas lahan. Ini adalah soal martabat bangsa, kedaulatan
            ekonomi, dan jaminan masa depan bagi 280 juta rakyat Indonesia.
            Setiap butir beras yang kita produksi sendiri adalah satu langkah
            lebih dekat menuju Indonesia yang mandiri, berdaya, dan sejahtera.
          </p>

          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl p-8 my-12">
            <p className="text-xl font-bold mb-3">
              Menuju Indonesia Berdaulat Pangan
            </p>
            <p className="text-purple-100">
              Swasembada pangan adalah tanggung jawab bersama. Dari petani di
              sawah hingga konsumen di kota, dari pemerintah pusat hingga
              pemerintah desa, setiap elemen masyarakat memiliki peran dalam
              mewujudkan ketahanan pangan nasional. Mari dukung produk pangan
              lokal, kurangi food waste, dan bersama-sama bangun Indonesia
              yang mandiri pangan untuk generasi mendatang.
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-medium rounded-xl hover:bg-purple-700 transition-colors"
            >
              Baca Artikel Lainnya
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
