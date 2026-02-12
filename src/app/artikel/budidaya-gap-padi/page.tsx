import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export const metadata = {
  title: "Teknologi Budidaya GAP untuk Padi Berkualitas | Cakra Pamungkas",
  description:
    "Panduan lengkap Good Agricultural Practices (GAP) untuk budidaya padi berkualitas tinggi. Mulai dari pemilihan varietas unggul, sistem tanam jajar legowo, manajemen pupuk NPK, hingga penanganan pasca panen.",
};

export default function BudidayaGapPadiArtikelPage() {
  return (
    <article className="bg-white">
      {/* Header */}
      <header className="bg-gradient-to-br from-green-950 via-green-900 to-lime-800 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-green-300 hover:text-green-200 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Kembali ke Beranda</span>
          </Link>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-green-600 text-white text-xs font-semibold rounded-full">
              BUDIDAYA
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Good Agricultural Practices
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Budidaya Padi
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Varietas Unggul
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Pasca Panen
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Teknologi Budidaya GAP untuk Padi Berkualitas
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-green-200">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">12 Februari 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">8 menit baca</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-700 leading-relaxed mb-8">
            Good Agricultural Practices (GAP) merupakan pedoman budidaya
            pertanian yang baik dan benar untuk menghasilkan produk pangan yang
            bermutu tinggi, aman dikonsumsi, ramah lingkungan, serta
            berkelanjutan. Dalam konteks budidaya padi, penerapan GAP menjadi
            kunci utama untuk meningkatkan produktivitas dari rata-rata 5,2
            ton/ha menjadi 7-9 ton/ha, sekaligus menjaga kualitas gabah dan
            beras yang dihasilkan agar memenuhi standar pasar domestik maupun
            ekspor.
          </p>

          {/* Section 1: Introduction to GAP */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Mengenal Good Agricultural Practices (GAP)
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            GAP atau Praktik Pertanian yang Baik adalah serangkaian prinsip,
            standar, dan rekomendasi teknis yang diterapkan dalam proses
            produksi pertanian mulai dari persiapan lahan hingga penanganan
            pasca panen. Konsep ini pertama kali diperkenalkan oleh FAO (Food
            and Agriculture Organization) dan telah diadopsi oleh Kementerian
            Pertanian Republik Indonesia melalui Permentan No. 48 Tahun 2009
            tentang Pedoman Budidaya Tanaman Pangan yang Baik dan Benar.
          </p>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
            <p className="text-gray-800 font-medium mb-2">
              Prinsip Utama GAP dalam Budidaya Padi
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Penggunaan benih bermutu dan varietas unggul bersertifikat</li>
              <li>Pengelolaan lahan yang tepat dan berkelanjutan</li>
              <li>Sistem tanam yang efisien dan terstandar</li>
              <li>Pemupukan berimbang sesuai kebutuhan tanaman</li>
              <li>Pengendalian hama terpadu (PHT) ramah lingkungan</li>
              <li>Manajemen air dan irigasi yang efisien</li>
              <li>Penentuan waktu panen yang optimal</li>
              <li>Penanganan pasca panen sesuai standar mutu</li>
            </ul>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Penerapan GAP secara konsisten terbukti mampu meningkatkan
            produktivitas padi sebesar 15-30%, mengurangi biaya produksi hingga
            20%, serta menghasilkan beras dengan kualitas yang lebih seragam
            dan bernilai jual tinggi. Di Indonesia, program GAP telah
            diterapkan di berbagai sentra produksi padi seperti Jawa Barat,
            Jawa Tengah, Jawa Timur, Sulawesi Selatan, dan Sumatera Barat
            dengan hasil yang sangat menggembirakan.
          </p>

          {/* Section 2: Superior Rice Varieties */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Pemilihan Varietas Padi Unggul
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Pemilihan varietas merupakan langkah pertama dan paling krusial
            dalam budidaya padi berbasis GAP. Varietas unggul yang tepat akan
            menentukan potensi hasil, ketahanan terhadap hama penyakit, serta
            kualitas beras yang dihasilkan. Badan Litbang Pertanian telah
            melepas puluhan varietas unggul baru (VUB) yang disesuaikan dengan
            berbagai kondisi agroekologi di Indonesia.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Varietas
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Potensi Hasil
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Umur Panen
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Keunggulan
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Inpari 32
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    9,8 ton/ha
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    120 HST
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Tahan wereng, rendemen tinggi
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Ciherang
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    8,0 ton/ha
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    116 HST
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Tekstur nasi pulen, adaptif luas
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Inpari 42
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    10,58 ton/ha
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    112 HST
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Tahan hawar daun, produksi tinggi
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Mekongga
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    8,4 ton/ha
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    117 HST
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Rasa nasi enak, cocok dataran rendah
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Inpari HDB
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    9,1 ton/ha
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    114 HST
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Tahan hawar daun bakteri
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-lime-50 border-l-4 border-lime-600 p-6 my-8">
            <p className="text-gray-800 font-medium mb-2">
              Tips Memilih Varietas yang Tepat
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Sesuaikan dengan kondisi agroekologi setempat (ketinggian,
                jenis tanah, iklim)
              </li>
              <li>
                Gunakan benih bersertifikat dari penangkar resmi atau
                Balai Benih
              </li>
              <li>
                Pertimbangkan preferensi pasar lokal (pulen, pera, atau
                aromatik)
              </li>
              <li>
                Pilih varietas yang tahan terhadap hama dan penyakit dominan
                di wilayah tersebut
              </li>
              <li>
                Perhatikan umur panen agar sesuai dengan pola tanam dan
                rotasi tanaman
              </li>
            </ul>
          </div>

          {/* Section 3: Land Preparation */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Persiapan Lahan dan Pengelolaan Tanah
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Persiapan lahan yang baik menjadi fondasi keberhasilan budidaya
            padi. Dalam standar GAP, pengelolaan tanah dilakukan secara
            sistematis untuk memastikan struktur tanah optimal, ketersediaan
            hara tercukupi, dan drainase berfungsi dengan baik. Proses ini
            dimulai minimal 2-3 minggu sebelum tanam.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Tahapan Persiapan Lahan Sesuai GAP
          </h3>

          <div className="space-y-6 my-8">
            <div className="border-l-4 border-green-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                1. Pembersihan Lahan
              </h4>
              <p className="text-gray-700 mb-3">
                Bersihkan sisa-sisa jerami dan gulma dari musim sebelumnya.
                Jerami dapat dikembalikan ke lahan sebagai bahan organik
                melalui proses pengomposan atau dibenamkan langsung saat
                pengolahan tanah pertama. Hindari pembakaran jerami karena
                mengurangi bahan organik tanah dan mencemari udara.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                2. Pengolahan Tanah Pertama (Pembajakan)
              </h4>
              <p className="text-gray-700 mb-3">
                Lakukan pembajakan menggunakan traktor tangan atau bajak
                singkal pada kedalaman 20-25 cm. Pengolahan tanah pertama
                bertujuan untuk membalikkan lapisan tanah, membenamkan sisa
                tanaman, dan memperbaiki aerasi tanah. Lakukan saat kondisi
                tanah lembab agar mudah diolah.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                3. Pengolahan Tanah Kedua (Penggaru)
              </h4>
              <p className="text-gray-700 mb-3">
                Dilakukan 1-2 minggu setelah pembajakan pertama. Penggaru
                bertujuan untuk menghaluskan bongkahan tanah, meratakan
                permukaan lahan, dan menciptakan kondisi lumpur yang ideal
                untuk penanaman padi. Tambahkan air secukupnya hingga kondisi
                macak-macak (setinggi 2-3 cm).
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                4. Perataan Lahan (Leveling)
              </h4>
              <p className="text-gray-700 mb-3">
                Ratakan permukaan sawah menggunakan papan perata (land
                leveler) agar ketinggian air merata di seluruh petakan.
                Perataan yang baik sangat penting untuk efisiensi penggunaan
                air, pemerataan pupuk, dan pertumbuhan tanaman yang seragam.
                Toleransi beda tinggi maksimal 2-3 cm dalam satu petakan.
              </p>
            </div>
          </div>

          {/* pH Testing Image Section */}
          <div className="my-12">
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/cek-ph-tanah.png"
                alt="Pengujian pH Tanah Sawah dengan Perangkat Uji"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 60vw"
              />
            </div>
            <p className="text-sm text-gray-500 text-center mt-3 italic">
              Pengujian pH dan kesuburan tanah menggunakan Perangkat Uji Tanah Sawah (PUTS) untuk menentukan rekomendasi pemupukan yang tepat
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-lime-50 rounded-xl p-8 my-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Analisis dan Perbaikan Kesuburan Tanah
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  Uji Tanah (Soil Test)
                </p>
                <p className="text-sm text-gray-600">
                  Lakukan analisis tanah setiap musim tanam untuk mengetahui
                  pH, kandungan C-organik, N, P, K, serta unsur hara mikro.
                  Gunakan Perangkat Uji Tanah Sawah (PUTS) dari Balittan.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  Pengapuran (Liming)
                </p>
                <p className="text-sm text-gray-600">
                  Jika pH tanah di bawah 5,5, aplikasikan kapur dolomit
                  sebanyak 1-2 ton/ha minimal 2 minggu sebelum tanam untuk
                  menetralkan keasaman tanah.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  Bahan Organik
                </p>
                <p className="text-sm text-gray-600">
                  Aplikasikan pupuk kandang matang atau kompos jerami sebanyak
                  2-5 ton/ha untuk meningkatkan C-organik tanah dan
                  memperbaiki struktur tanah.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  Pupuk Hayati
                </p>
                <p className="text-sm text-gray-600">
                  Tambahkan pupuk hayati yang mengandung bakteri penambat N
                  (Azotobacter, Azospirillum) dan pelarut P untuk
                  meningkatkan ketersediaan hara secara alami.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Planting Systems */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Sistem Tanam: Jajar Legowo dan Metode SRI
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Sistem tanam merupakan komponen penting dalam GAP yang menentukan
            populasi tanaman, efisiensi penggunaan cahaya matahari, sirkulasi
            udara, serta kemudahan dalam pemeliharaan. Dua sistem tanam yang
            paling direkomendasikan dalam budidaya padi berbasis GAP adalah
            Jajar Legowo dan System of Rice Intensification (SRI).
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Jajar Legowo 2:1
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Sistem tanam dengan pola 2 baris tanam dan 1 baris kosong.
                Jarak tanam dalam baris 25 cm x 12,5 cm dengan jarak antar
                legowo 50 cm.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Populasi: 213.000 rumpun/ha</li>
                <li>Peningkatan hasil: 10-15%</li>
                <li>Sirkulasi udara lebih baik</li>
                <li>Mudah dalam pemupukan dan PHT</li>
                <li>Efek tanaman pinggir (border effect)</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-lime-50 to-yellow-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Jajar Legowo 4:1
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Sistem tanam dengan pola 4 baris tanam dan 1 baris kosong.
                Jarak tanam dalam baris 25 cm x 12,5 cm dengan jarak antar
                legowo 50 cm.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Populasi: 256.000 rumpun/ha</li>
                <li>Peningkatan hasil: 5-10%</li>
                <li>Lebih banyak tanaman per area</li>
                <li>Cocok untuk lahan sempit</li>
                <li>Lebih efisien dalam penggunaan lahan</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Metode SRI (System of Rice Intensification)
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Metode intensifikasi padi dengan prinsip bibit muda, tanam
                tunggal, jarak lebar, pengairan berselang, dan bahan organik
                tinggi.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Bibit umur 8-12 hari (2 daun)</li>
                <li>Tanam 1 bibit per lubang</li>
                <li>Jarak tanam 30 cm x 30 cm</li>
                <li>Hemat benih hingga 80%</li>
                <li>Peningkatan hasil: 20-50%</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Tanam Pindah (Transplanting) Konvensional
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Metode tanam tradisional dengan bibit umur 21-25 hari dan
                jarak tanam 25 cm x 25 cm. Masih banyak diterapkan di
                berbagai daerah.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Bibit umur 21-25 HSS</li>
                <li>Tanam 2-3 bibit per lubang</li>
                <li>Jarak tanam 25 cm x 25 cm</li>
                <li>Populasi: 160.000 rumpun/ha</li>
                <li>Metode paling familiar bagi petani</li>
              </ul>
            </div>
          </div>

          {/* Section 5: Fertilization Management */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Manajemen Pemupukan Berimbang
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Pemupukan berimbang merupakan salah satu pilar utama dalam GAP
            budidaya padi. Prinsip pemupukan berimbang mengacu pada konsep
            spesifik lokasi (site-specific nutrient management) di mana dosis
            pupuk disesuaikan dengan kebutuhan tanaman dan ketersediaan hara
            dalam tanah. Penggunaan Bagan Warna Daun (BWD) dan Perangkat Uji
            Tanah Sawah (PUTS) menjadi alat bantu penting dalam menentukan
            dosis pupuk yang tepat.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Rekomendasi Pemupukan Standar GAP
          </h3>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Jenis Pupuk
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Dosis/ha
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Waktu Aplikasi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Urea (46% N)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    200-250 kg
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    3x: 7-10 HST, 21-25 HST, 40-45 HST
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    SP-36 (36% P2O5)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    100-150 kg
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    1x: Saat tanam atau 7 HST (pupuk dasar)
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    KCl (60% K2O)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    75-100 kg
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    2x: 7-10 HST dan 30-35 HST
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    NPK Phonska (15-15-15)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    200-300 kg
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    2x: 7-10 HST dan 21-25 HST
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Pupuk Organik
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    2.000-5.000 kg
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    1x: Saat pengolahan tanah terakhir
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <ul className="space-y-4 my-6">
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">&#10003;</span>
              <div>
                <strong className="text-gray-900">
                  Gunakan Bagan Warna Daun (BWD)
                </strong>
                <p className="text-gray-600 text-sm">
                  Tentukan kebutuhan pupuk nitrogen berdasarkan warna daun.
                  Jika warna daun di bawah panel 4, tambahkan urea 25 kg/ha.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">&#10003;</span>
              <div>
                <strong className="text-gray-900">
                  Aplikasikan Pupuk pada Kondisi Macak-macak
                </strong>
                <p className="text-gray-600 text-sm">
                  Pastikan kondisi air sawah setinggi 1-3 cm saat pemupukan
                  agar pupuk tidak larut terbawa air dan terserap optimal oleh
                  akar tanaman.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">&#10003;</span>
              <div>
                <strong className="text-gray-900">
                  Hindari Pemupukan Berlebihan
                </strong>
                <p className="text-gray-600 text-sm">
                  Kelebihan nitrogen menyebabkan tanaman mudah rebah, rentan
                  serangan hama wereng dan penyakit blast, serta menurunkan
                  kualitas gabah.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">&#10003;</span>
              <div>
                <strong className="text-gray-900">
                  Tambahkan Unsur Hara Mikro
                </strong>
                <p className="text-gray-600 text-sm">
                  Suplai Zn, Fe, Mn, Cu, dan B melalui pupuk mikro atau pupuk
                  daun untuk melengkapi kebutuhan hara tanaman secara
                  menyeluruh.
                </p>
              </div>
            </li>
          </ul>

          {/* Section 6: Integrated Pest Management */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Pengendalian Hama Terpadu (PHT)
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Pengendalian Hama Terpadu (PHT) atau Integrated Pest Management
            (IPM) adalah pendekatan pengelolaan hama yang menggabungkan
            berbagai teknik pengendalian secara sinergis untuk menekan populasi
            hama di bawah ambang ekonomi dengan dampak minimal terhadap
            lingkungan. Dalam GAP, PHT menjadi metode utama pengendalian hama
            yang menggantikan ketergantungan pada pestisida kimia.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Hama Utama Padi dan Pengendaliannya
          </h3>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Wereng Batang Coklat (WBC)
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Hama paling merusak yang mengisap cairan batang padi dan
                menularkan virus kerdil.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Gunakan varietas tahan (Inpari 32, Inpari 42)</li>
                <li>Tanam serempak dalam satu hamparan</li>
                <li>Lestarikan musuh alami (laba-laba, Cyrtorhinus)</li>
                <li>Hindari penyemprotan insektisida awal musim</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Penggerek Batang Padi
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Larva yang merusak batang padi dari dalam, menyebabkan sundep
                dan beluk.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Pasang perangkap lampu (light trap)</li>
                <li>Kumpulkan dan musnahkan kelompok telur</li>
                <li>Aplikasikan Trichogramma (parasitoid telur)</li>
                <li>Potong tunggul jerami rata dengan tanah</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Penyakit Blast (Pyricularia oryzae)
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Penyakit jamur yang menyerang daun, leher malai, dan buku
                batang padi.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Gunakan varietas tahan blast</li>
                <li>Kurangi dosis pupuk nitrogen</li>
                <li>Perbaiki drainase lahan</li>
                <li>Fungisida berbahan aktif trisiklazol jika perlu</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Hawar Daun Bakteri (HDB)
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Penyakit bakteri Xanthomonas yang menyebabkan layu dan
                mengeringnya daun padi.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Tanam varietas tahan HDB (Inpari HDB)</li>
                <li>Hindari pemupukan N berlebihan</li>
                <li>Atur jarak tanam tidak terlalu rapat</li>
                <li>Perbaiki sirkulasi udara dalam pertanaman</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
            <p className="text-gray-800 font-medium mb-2">
              Prinsip Kunci PHT dalam GAP
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Budidaya tanaman sehat sebagai pertahanan pertama terhadap
                hama dan penyakit
              </li>
              <li>
                Pelestarian dan pemanfaatan musuh alami (predator, parasitoid,
                patogen)
              </li>
              <li>
                Pengamatan ekosistem sawah secara rutin setiap minggu
              </li>
              <li>
                Petani sebagai ahli PHT yang mampu mengambil keputusan
                berdasarkan kondisi lapangan
              </li>
              <li>
                Pestisida kimia hanya digunakan sebagai pilihan terakhir jika
                populasi hama melebihi ambang ekonomi
              </li>
            </ul>
          </div>

          {/* Section 7: Water Management */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Manajemen Air dan Irigasi
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Pengelolaan air merupakan faktor kritis dalam budidaya padi karena
            padi merupakan tanaman semi-akuatik yang membutuhkan pasokan air
            dalam jumlah besar. Namun, penggenangan terus-menerus justru
            dapat menghambat perkembangan akar dan mengurangi efisiensi
            penyerapan hara. GAP merekomendasikan sistem pengairan berselang
            (intermittent irrigation) untuk mengoptimalkan pertumbuhan tanaman
            sekaligus menghemat air.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Pola Pengairan Berselang (Intermittent Irrigation)
          </h3>

          <div className="space-y-6 my-8">
            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Fase Vegetatif Awal (0-14 HST)
              </h4>
              <p className="text-gray-700 mb-3">
                Pertahankan genangan air setinggi 2-3 cm untuk membantu
                perakaran bibit baru. Jangan menggenang terlalu dalam karena
                dapat menghambat pertumbuhan anakan. Pastikan drainase
                berfungsi baik untuk mencegah genangan berlebih saat hujan
                deras.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Fase Vegetatif Aktif (14-45 HST)
              </h4>
              <p className="text-gray-700 mb-3">
                Terapkan sistem pengairan berselang: genangi sawah setinggi 5
                cm, biarkan air surut secara alami hingga tanah retak-retak
                rambut, kemudian genangi kembali. Siklus ini merangsang
                pertumbuhan akar yang lebih dalam dan kuat serta meningkatkan
                pembentukan anakan produktif.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Fase Primordia - Pembungaan (45-70 HST)
              </h4>
              <p className="text-gray-700 mb-3">
                Fase kritis yang memerlukan ketersediaan air maksimal.
                Pertahankan genangan 3-5 cm secara kontinu. Kekurangan air
                pada fase ini dapat menyebabkan malai hampa dan penurunan
                hasil yang signifikan hingga 30-50%.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Fase Pemasakan (70-100 HST)
              </h4>
              <p className="text-gray-700 mb-3">
                Kurangi pengairan secara bertahap. Pada 10-14 hari sebelum
                panen, keringkan lahan secara total untuk mempercepat
                pemasakan gabah, memudahkan panen, dan meningkatkan kualitas
                gabah dengan kadar air yang optimal.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <p className="text-gray-800 font-medium mb-2">
              Manfaat Pengairan Berselang
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Hemat air irigasi hingga 20-30%</li>
              <li>Meningkatkan efisiensi penyerapan pupuk oleh akar</li>
              <li>Memperkuat sistem perakaran tanaman</li>
              <li>Mengurangi emisi gas metana (CH4) dari sawah</li>
              <li>Menekan perkembangan keong mas dan gulma air</li>
              <li>Meningkatkan aerasi tanah dan aktivitas mikroorganisme</li>
            </ul>
          </div>

          {/* Section 8: Harvest Timing */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Waktu dan Teknik Panen yang Tepat
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Penentuan waktu panen yang tepat menjadi kunci untuk mendapatkan
            gabah dengan kualitas dan kuantitas optimal. Panen terlalu cepat
            menghasilkan gabah dengan kadar air tinggi, butir kapur (chalky
            grain) banyak, dan rendemen giling rendah. Sebaliknya, panen
            terlambat menyebabkan gabah rontok di lapangan, butir retak
            meningkat, dan rentan serangan burung serta hama gudang.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Kriteria Panen Optimal
          </h3>

          <ul className="space-y-4 my-6">
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">&#10003;</span>
              <div>
                <strong className="text-gray-900">
                  Umur Panen Sesuai Varietas
                </strong>
                <p className="text-gray-600 text-sm">
                  Panen pada umur sesuai deskripsi varietas, umumnya 30-35
                  hari setelah berbunga penuh atau ketika 90-95% gabah pada
                  malai telah menguning.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">&#10003;</span>
              <div>
                <strong className="text-gray-900">
                  Kadar Air Gabah 22-26%
                </strong>
                <p className="text-gray-600 text-sm">
                  Gunakan moisture meter untuk mengukur kadar air gabah.
                  Panen optimal saat kadar air 22-26% untuk meminimalkan
                  gabah retak dan kehilangan hasil.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">&#10003;</span>
              <div>
                <strong className="text-gray-900">
                  Gunakan Combine Harvester
                </strong>
                <p className="text-gray-600 text-sm">
                  Mesin panen combine harvester dapat memanen, merontokkan,
                  dan membersihkan gabah sekaligus. Kehilangan hasil hanya
                  1-2% dibandingkan panen manual yang bisa mencapai 5-9%.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">&#10003;</span>
              <div>
                <strong className="text-gray-900">
                  Segera Perontokan Setelah Panen
                </strong>
                <p className="text-gray-600 text-sm">
                  Lakukan perontokan maksimal 12-24 jam setelah pemotongan
                  untuk mencegah penurunan kualitas gabah akibat pemanasan
                  dan fermentasi.
                </p>
              </div>
            </li>
          </ul>

          {/* Section 9: Post-Harvest Handling */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Penanganan Pasca Panen dan Penyimpanan
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Penanganan pasca panen yang tepat sangat menentukan kualitas akhir
            beras yang dihasilkan. Kehilangan hasil pada tahap pasca panen di
            Indonesia masih cukup tinggi, mencapai 10-15% dari total produksi.
            Dengan penerapan standar GAP dalam penanganan pasca panen,
            kehilangan tersebut dapat ditekan hingga di bawah 5%.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Tahapan Penanganan Pasca Panen
          </h3>

          <div className="space-y-6 my-8">
            <div className="border-l-4 border-amber-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                1. Pengeringan (Drying)
              </h4>
              <p className="text-gray-700 mb-3">
                Turunkan kadar air gabah dari 22-26% menjadi 14% untuk
                penyimpanan jangka pendek atau 12% untuk penyimpanan jangka
                panjang. Gunakan lantai jemur bersih, mesin pengering (flat
                bed dryer), atau kombinasi keduanya. Pengeringan dengan mesin
                lebih disarankan karena menghasilkan kadar air yang lebih
                seragam dan tidak tergantung cuaca.
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                2. Pembersihan dan Sortasi
              </h4>
              <p className="text-gray-700 mb-3">
                Bersihkan gabah dari kotoran seperti jerami, gabah hampa,
                batu, dan biji gulma menggunakan aspirator atau mesin
                pembersih gabah (paddy cleaner). Lakukan sortasi untuk
                memisahkan gabah berdasarkan ukuran dan berat jenis
                menggunakan ayakan bertingkat atau gravity separator.
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                3. Pengemasan yang Tepat
              </h4>
              <p className="text-gray-700 mb-3">
                Kemas gabah kering dalam karung yang bersih, kering, dan
                tidak berlubang. Gunakan karung plastik anyaman (PP woven)
                ukuran 50 kg dengan jahitan rapat. Beri label berisi
                informasi varietas, tanggal panen, kadar air, dan asal lahan
                untuk keperluan traceability.
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                4. Penyimpanan Gabah
              </h4>
              <p className="text-gray-700 mb-3">
                Simpan gabah di gudang yang bersih, berventilasi baik, dan
                terlindung dari hujan serta hama gudang. Susun karung di atas
                palet kayu setinggi minimal 15 cm dari lantai dan berjarak 50
                cm dari dinding. Lakukan pengecekan kadar air dan kondisi
                gabah secara berkala setiap 2 minggu sekali.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8">
            <h4 className="font-bold text-gray-900 mb-3">
              Teknologi Pasca Panen Modern
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-gray-900">
                  Hermetic Storage (Silo Kedap)
                </p>
                <p className="text-gray-600">
                  Penyimpanan kedap udara yang mencegah serangan hama gudang
                  tanpa fumigasi kimia, menjaga kualitas gabah hingga 12
                  bulan.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Rice Milling Unit (RMU) Modern
                </p>
                <p className="text-gray-600">
                  Mesin giling terpadu yang menghasilkan rendemen giling
                  tinggi (65-67%) dengan beras kepala lebih banyak dan beras
                  patah minimal.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Color Sorter
                </p>
                <p className="text-gray-600">
                  Mesin sortasi optik yang memisahkan beras berdasarkan warna
                  untuk menghasilkan beras premium tanpa butir kuning atau
                  butir kapur.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Vacuum Packaging
                </p>
                <p className="text-gray-600">
                  Pengemasan hampa udara untuk memperpanjang umur simpan beras
                  hingga 24 bulan tanpa penurunan kualitas rasa dan aroma.
                </p>
              </div>
            </div>
          </div>

          {/* Section 10: GAP Certification */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Manfaat Sertifikasi GAP
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Sertifikasi GAP memberikan jaminan bahwa proses budidaya padi
            telah dilaksanakan sesuai standar praktik pertanian yang baik.
            Sertifikat ini dikeluarkan oleh Lembaga Sertifikasi Produk (LSPro)
            yang terakreditasi oleh Komite Akreditasi Nasional (KAN) melalui
            proses audit dan inspeksi lapangan yang ketat. Bagi petani dan
            kelompok tani, sertifikasi GAP membuka akses ke pasar premium dan
            meningkatkan daya saing produk.
          </p>

          <ul className="space-y-4 my-6">
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">&#10003;</span>
              <div>
                <strong className="text-gray-900">
                  Akses Pasar Premium dan Ekspor
                </strong>
                <p className="text-gray-600 text-sm">
                  Beras bersertifikat GAP memiliki nilai jual 15-30% lebih
                  tinggi karena jaminan kualitas dan keamanan pangan. Produk
                  juga memenuhi persyaratan ekspor ke negara tujuan yang
                  mensyaratkan standar GAP.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">&#10003;</span>
              <div>
                <strong className="text-gray-900">
                  Traceability (Ketelusuran Produk)
                </strong>
                <p className="text-gray-600 text-sm">
                  Setiap kemasan beras dapat ditelusuri hingga ke lahan asal,
                  varietas yang digunakan, proses budidaya, dan penanganan
                  pasca panen yang diterapkan. Ini meningkatkan kepercayaan
                  konsumen.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">&#10003;</span>
              <div>
                <strong className="text-gray-900">
                  Efisiensi Produksi dan Peningkatan Pendapatan
                </strong>
                <p className="text-gray-600 text-sm">
                  Penerapan GAP yang konsisten menurunkan biaya produksi
                  melalui efisiensi penggunaan input (pupuk, pestisida, air)
                  dan meningkatkan pendapatan melalui hasil panen yang lebih
                  tinggi dan harga jual premium.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">&#10003;</span>
              <div>
                <strong className="text-gray-900">
                  Keberlanjutan Lingkungan
                </strong>
                <p className="text-gray-600 text-sm">
                  GAP mendorong praktik pertanian yang ramah lingkungan
                  seperti PHT, pengairan berselang, dan penggunaan bahan
                  organik yang menjaga kelestarian sumber daya alam untuk
                  generasi mendatang.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">&#10003;</span>
              <div>
                <strong className="text-gray-900">
                  Akses Bantuan dan Kemitraan
                </strong>
                <p className="text-gray-600 text-sm">
                  Kelompok tani bersertifikat GAP lebih mudah mengakses
                  program bantuan pemerintah, kredit perbankan, serta
                  kemitraan dengan perusahaan dan eksportir beras.
                </p>
              </div>
            </li>
          </ul>

          <div className="bg-green-50 rounded-xl p-6 my-6">
            <h4 className="font-bold text-gray-900 mb-3">
              Langkah Mendapatkan Sertifikasi GAP
            </h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">&rarr;</span>
                <div>
                  <strong>Pembentukan Kelompok Tani:</strong> Bergabung atau
                  membentuk kelompok tani yang terorganisir dengan minimal 25
                  anggota dan luas lahan kolektif minimal 25 hektar
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">&rarr;</span>
                <div>
                  <strong>Pelatihan dan Pendampingan:</strong> Ikuti pelatihan
                  GAP dari Dinas Pertanian atau penyuluh pertanian lapangan
                  untuk memahami standar dan prosedur yang harus dipenuhi
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">&rarr;</span>
                <div>
                  <strong>Penerapan dan Pencatatan:</strong> Terapkan seluruh
                  standar GAP dan dokumentasikan setiap kegiatan budidaya
                  dalam buku catatan usahatani (farm record)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">&rarr;</span>
                <div>
                  <strong>Pengajuan Sertifikasi:</strong> Ajukan permohonan
                  sertifikasi ke LSPro yang terakreditasi melalui Dinas
                  Pertanian kabupaten/kota setempat
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">&rarr;</span>
                <div>
                  <strong>Audit dan Inspeksi:</strong> Tim auditor akan
                  melakukan inspeksi lapangan, pemeriksaan dokumen, dan
                  pengambilan sampel untuk pengujian laboratorium
                </div>
              </li>
            </ul>
          </div>

          {/* Conclusion */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Kesimpulan: GAP sebagai Kunci Pertanian Padi Berkelanjutan
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Penerapan Good Agricultural Practices (GAP) dalam budidaya padi
            bukan sekadar mengikuti prosedur standar, melainkan sebuah
            paradigma baru dalam mengelola usahatani padi secara profesional,
            efisien, dan berkelanjutan. Dari pemilihan varietas unggul hingga
            penanganan pasca panen, setiap tahapan dalam GAP dirancang untuk
            mengoptimalkan hasil sambil menjaga kelestarian lingkungan dan
            keamanan pangan.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Dengan produktivitas yang meningkat 15-30%, biaya produksi yang
            lebih efisien, kualitas beras yang terjamin, serta akses ke pasar
            premium, GAP menjadi investasi jangka panjang yang sangat
            menguntungkan bagi petani Indonesia. Didukung oleh sertifikasi
            yang diakui secara nasional dan internasional, beras Indonesia
            bersertifikat GAP memiliki daya saing yang semakin kuat di pasar
            global.
          </p>

          <div className="bg-gradient-to-r from-green-600 to-lime-600 text-white rounded-xl p-8 my-12">
            <p className="text-xl font-bold mb-3">
              Mulai Terapkan GAP Sekarang!
            </p>
            <p className="text-green-100">
              Tingkatkan produktivitas dan kualitas padi Anda dengan menerapkan
              Good Agricultural Practices. Hubungi Dinas Pertanian atau
              penyuluh pertanian di daerah Anda untuk mendapatkan pendampingan
              dan pelatihan GAP. Bersama kita wujudkan pertanian padi
              Indonesia yang produktif, berkualitas, dan berkelanjutan.
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 transition-colors"
            >
              Baca Artikel Lainnya
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
