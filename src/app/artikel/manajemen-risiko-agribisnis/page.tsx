import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export const metadata = {
  title: "Manajemen Risiko dalam Agribisnis Modern | Cakra Pamungkas",
  description:
    "Panduan lengkap manajemen risiko agribisnis: strategi mitigasi gagal panen, fluktuasi harga, diversifikasi usaha, asuransi pertanian, dan pemanfaatan teknologi untuk pengelolaan risiko.",
};

export default function ManajemenRisikoAgribisnisPage() {
  return (
    <article className="bg-white">
      {/* Header */}
      <header className="bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-800 py-12 lg:py-20">
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
              Manajemen Risiko
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Agribisnis
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Gagal Panen
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Fluktuasi Harga
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Manajemen Risiko dalam Agribisnis Modern
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-blue-200">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">12 Februari 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">10 menit baca</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-700 leading-relaxed mb-8">
            Agribisnis merupakan sektor yang penuh dengan ketidakpastian. Mulai
            dari perubahan iklim yang semakin ekstrem, fluktuasi harga komoditas
            di pasar global, hingga serangan hama yang tak terduga, pelaku
            agribisnis menghadapi berbagai risiko yang dapat mengancam
            keberlangsungan usaha mereka. Manajemen risiko yang efektif bukan
            lagi sekadar pilihan, melainkan kebutuhan fundamental bagi setiap
            pelaku agribisnis modern yang ingin bertahan dan berkembang di tengah
            ketidakpastian.
          </p>

          {/* Section 1: Introduction */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Mengapa Manajemen Risiko Penting dalam Agribisnis?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Berbeda dengan sektor industri lainnya, agribisnis memiliki
            karakteristik unik yang membuatnya sangat rentan terhadap risiko.
            Ketergantungan pada faktor alam, siklus produksi yang panjang, serta
            sifat produk yang mudah rusak (perishable) menjadikan manajemen
            risiko sebagai pilar utama keberhasilan usaha pertanian. Data dari
            Kementerian Pertanian menunjukkan bahwa kerugian akibat gagal panen
            di Indonesia mencapai triliunan rupiah setiap tahunnya.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Manajemen risiko dalam agribisnis adalah proses sistematis untuk
            mengidentifikasi, menganalisis, mengevaluasi, dan mengendalikan
            berbagai potensi kerugian yang dapat mempengaruhi operasi dan
            profitabilitas usaha pertanian. Pendekatan proaktif ini memungkinkan
            pelaku agribisnis untuk mempersiapkan diri menghadapi berbagai
            skenario buruk sekaligus memanfaatkan peluang yang muncul.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <p className="text-gray-800 font-medium mb-2">
              Fakta Penting Risiko Agribisnis di Indonesia
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Kerugian gagal panen rata-rata Rp5-8 triliun per tahun</li>
              <li>Fluktuasi harga komoditas bisa mencapai 40-60% dalam setahun</li>
              <li>Hanya 2,5% petani Indonesia yang memiliki asuransi pertanian</li>
              <li>70% petani kecil tidak memiliki strategi mitigasi risiko formal</li>
              <li>Perubahan iklim meningkatkan frekuensi gagal panen hingga 25%</li>
            </ul>
          </div>

          {/* Section 2: Types of Agricultural Risks */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Jenis-Jenis Risiko dalam Agribisnis
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Memahami berbagai jenis risiko yang dihadapi adalah langkah pertama
            dalam membangun strategi manajemen risiko yang komprehensif. Risiko
            dalam agribisnis dapat diklasifikasikan ke dalam empat kategori
            utama yang saling berkaitan dan mempengaruhi satu sama lain.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Risiko Produksi
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Risiko yang berkaitan langsung dengan proses produksi pertanian
                dan faktor-faktor yang mempengaruhi hasil panen.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>- Perubahan cuaca dan iklim ekstrem</li>
                <li>- Serangan hama dan penyakit tanaman</li>
                <li>- Kualitas benih dan input pertanian</li>
                <li>- Degradasi kesuburan tanah</li>
                <li>- Ketersediaan air irigasi</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Risiko Pasar
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Risiko yang timbul dari dinamika penawaran dan permintaan di
                pasar komoditas pertanian.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>- Fluktuasi harga jual komoditas</li>
                <li>- Kenaikan harga input produksi</li>
                <li>- Perubahan preferensi konsumen</li>
                <li>- Persaingan dari produk impor</li>
                <li>- Keterbatasan akses pasar</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Risiko Finansial
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Risiko yang berkaitan dengan aspek keuangan dan permodalan
                dalam menjalankan usaha agribisnis.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>- Keterbatasan akses pembiayaan</li>
                <li>- Suku bunga pinjaman yang tinggi</li>
                <li>- Fluktuasi nilai tukar rupiah</li>
                <li>- Cash flow yang tidak stabil</li>
                <li>- Keterlambatan pembayaran dari pembeli</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Risiko Institusional
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Risiko yang berasal dari kebijakan pemerintah, regulasi, dan
                kelembagaan yang mempengaruhi sektor pertanian.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>- Perubahan kebijakan impor/ekspor</li>
                <li>- Regulasi penggunaan lahan</li>
                <li>- Kebijakan subsidi dan harga dasar</li>
                <li>- Perubahan standar mutu dan sertifikasi</li>
                <li>- Ketidakpastian kepemilikan lahan</li>
              </ul>
            </div>
          </div>

          {/* Section 3: Climate Risk and Crop Failure */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Risiko Iklim dan Gagal Panen
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Perubahan iklim merupakan ancaman terbesar bagi sektor agribisnis
            global, termasuk Indonesia. Fenomena El Nino dan La Nina yang
            semakin intens, curah hujan yang tidak menentu, serta kenaikan suhu
            rata-rata bumi telah mengubah pola musim tanam tradisional yang
            selama ini menjadi pegangan para petani. Dampaknya terhadap
            produktivitas pertanian semakin nyata dan sulit diprediksi.
          </p>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8 my-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Dampak Perubahan Iklim terhadap Pertanian Indonesia
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  1. Kekeringan Berkepanjangan
                </p>
                <p className="text-sm text-gray-600">
                  El Nino menyebabkan musim kemarau lebih panjang, mengurangi
                  ketersediaan air irigasi dan menurunkan produksi padi hingga
                  15-20% di beberapa wilayah.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  2. Banjir dan Genangan
                </p>
                <p className="text-sm text-gray-600">
                  La Nina memicu curah hujan berlebihan yang menyebabkan banjir
                  di lahan pertanian, merusak tanaman dan menghambat proses
                  panen.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  3. Pergeseran Musim Tanam
                </p>
                <p className="text-sm text-gray-600">
                  Pola musim yang berubah membuat kalender tanam tradisional
                  tidak lagi akurat, meningkatkan risiko gagal panen.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  4. Peningkatan Serangan Hama
                </p>
                <p className="text-sm text-gray-600">
                  Suhu yang lebih hangat mempercepat perkembangbiakan hama
                  seperti wereng cokelat dan penggerek batang padi.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Faktor Penyebab Gagal Panen
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Gagal panen merupakan risiko produksi paling signifikan dalam
            agribisnis. Selain faktor iklim, terdapat berbagai penyebab lain
            yang sering kali saling berinteraksi dan memperbesar potensi
            kerugian bagi petani.
          </p>

          <ul className="space-y-4 my-6">
            <li className="flex items-start gap-3">
              <span className="text-red-600 text-xl">!</span>
              <div>
                <strong className="text-gray-900">Serangan Organisme Pengganggu Tanaman (OPT)</strong>
                <p className="text-gray-600 text-sm">
                  Hama wereng, tikus, ulat grayak, dan penyakit blast pada padi
                  dapat menghancurkan hingga 100% hasil panen jika tidak
                  ditangani sejak dini.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 text-xl">!</span>
              <div>
                <strong className="text-gray-900">Kualitas Benih yang Buruk</strong>
                <p className="text-gray-600 text-sm">
                  Penggunaan benih yang tidak bersertifikat atau sudah kadaluarsa
                  menghasilkan daya tumbuh rendah dan rentan terhadap penyakit.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 text-xl">!</span>
              <div>
                <strong className="text-gray-900">Kesalahan Teknis Budidaya</strong>
                <p className="text-gray-600 text-sm">
                  Pemupukan yang tidak tepat dosis dan waktu, pengairan yang
                  tidak sesuai, serta jarak tanam yang salah menurunkan
                  produktivitas secara signifikan.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 text-xl">!</span>
              <div>
                <strong className="text-gray-900">Bencana Alam</strong>
                <p className="text-gray-600 text-sm">
                  Erupsi gunung berapi, gempa bumi, dan tanah longsor dapat
                  menghancurkan lahan pertanian secara permanen di beberapa
                  wilayah Indonesia.
                </p>
              </div>
            </li>
          </ul>

          {/* Section 4: Market Price Fluctuation */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Risiko Fluktuasi Harga Pasar
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Harga komoditas pertanian dikenal sangat volatil karena dipengaruhi
            oleh banyak faktor yang saling terkait. Ketidakmampuan petani untuk
            mengendalikan harga jual produk mereka merupakan salah satu sumber
            ketidakpastian terbesar dalam agribisnis. Seorang petani bisa saja
            berhasil memperoleh panen melimpah, namun justru mengalami kerugian
            karena harga jual anjlok akibat oversupply.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Komoditas
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Harga Terendah (2025)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Harga Tertinggi (2025)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Volatilitas
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Beras Premium</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Rp12.500/kg</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Rp18.000/kg</td>
                  <td className="px-6 py-4 text-sm font-semibold text-red-600">44%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Cabai Rawit</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Rp25.000/kg</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Rp120.000/kg</td>
                  <td className="px-6 py-4 text-sm font-semibold text-red-600">380%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Bawang Merah</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Rp20.000/kg</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Rp65.000/kg</td>
                  <td className="px-6 py-4 text-sm font-semibold text-red-600">225%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Jagung Pipil</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Rp4.500/kg</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Rp7.200/kg</td>
                  <td className="px-6 py-4 text-sm font-semibold text-orange-600">60%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Kedelai Lokal</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Rp9.000/kg</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Rp14.500/kg</td>
                  <td className="px-6 py-4 text-sm font-semibold text-orange-600">61%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Faktor Penyebab Fluktuasi Harga
          </h3>

          <div className="space-y-6 my-8">
            <div className="border-l-4 border-red-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Ketimpangan Supply dan Demand
              </h4>
              <p className="text-gray-700 mb-3">
                Panen raya yang terjadi secara serentak menyebabkan oversupply
                di pasar, sementara gagal panen massal menyebabkan kelangkaan.
                Kedua kondisi ini menciptakan volatilitas harga yang ekstrem.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Rantai Distribusi yang Panjang
              </h4>
              <p className="text-gray-700 mb-3">
                Terdapat 4-6 lapisan perantara antara petani dan konsumen akhir.
                Setiap lapisan menambah margin harga, sementara petani sebagai
                produsen justru mendapat bagian terkecil dari harga jual akhir.
              </p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Pengaruh Pasar Global
              </h4>
              <p className="text-gray-700 mb-3">
                Harga komoditas internasional, kebijakan impor negara lain, dan
                nilai tukar mata uang mempengaruhi harga komoditas domestik
                secara langsung maupun tidak langsung.
              </p>
            </div>

            <div className="border-l-4 border-indigo-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Spekulasi dan Penimbunan
              </h4>
              <p className="text-gray-700 mb-3">
                Praktik spekulasi oleh tengkulak dan penimbunan komoditas
                menjelang hari besar keagamaan turut memperparah fluktuasi harga
                di pasar domestik.
              </p>
            </div>
          </div>

          {/* Section 5: Risk Assessment Methods */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Metode Penilaian Risiko Agribisnis
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Penilaian risiko (risk assessment) adalah proses sistematis untuk
            mengidentifikasi dan mengukur tingkat risiko yang dihadapi usaha
            agribisnis. Dengan melakukan penilaian risiko yang tepat, pelaku
            agribisnis dapat memprioritaskan risiko mana yang perlu ditangani
            terlebih dahulu dan mengalokasikan sumber daya secara efisien.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Langkah-Langkah Penilaian Risiko
          </h3>

          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-8 my-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </span>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    Identifikasi Risiko
                  </p>
                  <p className="text-sm text-gray-600">
                    Buat daftar lengkap semua potensi risiko yang mungkin
                    mempengaruhi usaha, mulai dari risiko produksi, pasar,
                    finansial, hingga institusional. Libatkan seluruh
                    stakeholder untuk mendapatkan perspektif yang komprehensif.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </span>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    Analisis Probabilitas dan Dampak
                  </p>
                  <p className="text-sm text-gray-600">
                    Untuk setiap risiko yang teridentifikasi, estimasikan
                    probabilitas terjadinya (rendah, sedang, tinggi) dan
                    besarnya dampak potensial terhadap usaha (minor, moderat,
                    mayor, katastrofik).
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </span>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    Pemetaan Matriks Risiko
                  </p>
                  <p className="text-sm text-gray-600">
                    Tempatkan setiap risiko pada matriks probabilitas-dampak
                    untuk menentukan prioritas penanganan. Risiko dengan
                    probabilitas tinggi dan dampak besar harus ditangani pertama.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </span>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    Perencanaan Respons Risiko
                  </p>
                  <p className="text-sm text-gray-600">
                    Kembangkan strategi penanganan untuk setiap risiko prioritas:
                    menghindari, mengurangi, mentransfer, atau menerima risiko
                    tersebut sesuai kapasitas dan sumber daya yang tersedia.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  5
                </span>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    Monitoring dan Evaluasi Berkala
                  </p>
                  <p className="text-sm text-gray-600">
                    Lakukan pemantauan secara rutin terhadap risiko yang telah
                    diidentifikasi dan evaluasi efektivitas strategi mitigasi
                    yang diterapkan. Perbarui penilaian risiko minimal setiap
                    musim tanam.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Alat Analisis Risiko yang Umum Digunakan
          </h3>

          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
            <li>
              <strong>Analisis SWOT:</strong> Mengidentifikasi kekuatan,
              kelemahan, peluang, dan ancaman usaha agribisnis secara
              menyeluruh
            </li>
            <li>
              <strong>Analisis Sensitivitas:</strong> Menguji dampak perubahan
              variabel kunci (harga, produktivitas, biaya) terhadap
              profitabilitas usaha
            </li>
            <li>
              <strong>Simulasi Monte Carlo:</strong> Memodelkan berbagai
              skenario risiko secara statistik untuk memperkirakan
              probabilitas hasil tertentu
            </li>
            <li>
              <strong>Value at Risk (VaR):</strong> Mengukur potensi kerugian
              maksimum dalam periode tertentu pada tingkat kepercayaan
              tertentu
            </li>
          </ul>

          {/* Section 6: Risk Mitigation Strategies */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Strategi Mitigasi Risiko Agribisnis
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Mitigasi risiko adalah tindakan yang diambil untuk mengurangi
            probabilitas terjadinya risiko atau meminimalkan dampak negatifnya.
            Dalam agribisnis, terdapat tiga strategi utama mitigasi risiko yang
            terbukti efektif: diversifikasi, asuransi, dan kontrak jual beli.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            1. Diversifikasi Usaha
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Diversifikasi adalah strategi menyebarkan risiko dengan tidak
            bergantung pada satu jenis tanaman, satu pasar, atau satu sumber
            pendapatan. Prinsipnya sederhana: jangan menaruh semua telur dalam
            satu keranjang. Dengan diversifikasi, kerugian dari satu komponen
            usaha dapat dikompensasi oleh keuntungan dari komponen lainnya.
          </p>

          <div className="bg-green-50 rounded-xl p-6 my-6">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">+</span>
                <div>
                  <strong>Diversifikasi Tanaman:</strong> Menanam beberapa
                  jenis komoditas dengan musim panen berbeda, misalnya
                  kombinasi padi, palawija, dan hortikultura
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">+</span>
                <div>
                  <strong>Diversifikasi Vertikal:</strong> Mengembangkan
                  usaha hilir seperti pengolahan produk (keripik, tepung,
                  selai) untuk menambah nilai tambah dan sumber pendapatan
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">+</span>
                <div>
                  <strong>Diversifikasi Pasar:</strong> Menjual produk ke
                  beberapa kanal pemasaran (pasar tradisional, modern,
                  online, ekspor) agar tidak tergantung satu pembeli
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">+</span>
                <div>
                  <strong>Integrasi Ternak-Tanaman:</strong> Mengkombinasikan
                  usaha peternakan dan pertanian sehingga limbah satu usaha
                  menjadi input bagi usaha lainnya
                </div>
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            2. Asuransi Pertanian
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Asuransi pertanian adalah mekanisme transfer risiko di mana petani
            membayar premi kepada perusahaan asuransi sebagai ganti perlindungan
            finansial terhadap kerugian akibat gagal panen atau bencana alam.
            Di Indonesia, pemerintah telah meluncurkan program Asuransi Usaha
            Tani Padi (AUTP) dan Asuransi Usaha Ternak Sapi (AUTS) dengan
            premi yang disubsidi.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Jenis Asuransi
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Premi per Hektar
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Ganti Rugi Maksimal
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    AUTP (Asuransi Usaha Tani Padi)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Rp36.000 (subsidi 80%)
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp6.000.000/ha
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    AUTS (Asuransi Usaha Ternak Sapi)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Rp40.000/ekor (subsidi 80%)
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp10.000.000/ekor
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    Asuransi Indeks Cuaca
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Rp150.000-300.000
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp8.000.000-15.000.000/ha
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            3. Kontrak Jual Beli (Contract Farming)
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Contract farming adalah perjanjian antara petani dengan pembeli
            (perusahaan pengolahan, eksportir, atau retailer) yang menetapkan
            harga, kualitas, dan kuantitas produk sebelum musim tanam dimulai.
            Mekanisme ini memberikan kepastian pasar dan harga bagi petani,
            sekaligus menjamin pasokan bagi pembeli.
          </p>

          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 my-8">
            <p className="text-gray-800 font-medium mb-2">
              Keuntungan Contract Farming
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Harga jual sudah ditentukan sebelum tanam (price certainty)</li>
              <li>Akses ke benih, pupuk, dan input berkualitas dari mitra</li>
              <li>Bantuan teknis budidaya dari perusahaan pembeli</li>
              <li>Kemudahan akses pembiayaan karena ada jaminan kontrak</li>
              <li>Mengurangi ketergantungan pada tengkulak dan perantara</li>
            </ul>
          </div>

          {/* Section 7: Financial Risk Management */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Manajemen Risiko Finansial
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Pengelolaan risiko finansial merupakan aspek kritis dalam
            keberlanjutan usaha agribisnis. Banyak usaha pertanian gagal bukan
            karena masalah produksi, melainkan karena pengelolaan keuangan yang
            buruk. Perencanaan anggaran yang matang, manajemen arus kas yang
            disiplin, dan akses pembiayaan yang tepat adalah kunci ketahanan
            finansial agribisnis.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Perencanaan Anggaran Usaha Tani
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Anggaran usaha tani (farm budget) adalah rencana keuangan yang
            memperkirakan semua pendapatan dan pengeluaran selama satu musim
            tanam atau satu tahun. Anggaran yang baik harus mencakup skenario
            optimis, realistis, dan pesimis untuk mempersiapkan berbagai
            kemungkinan.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Komponen Pendapatan
              </h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">+</span>
                  <span>Proyeksi hasil panen utama</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">+</span>
                  <span>Pendapatan dari produk sampingan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">+</span>
                  <span>Subsidi dan bantuan pemerintah</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">+</span>
                  <span>Pendapatan dari jasa (sewa alat, tenaga kerja)</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Komponen Pengeluaran
              </h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-600">-</span>
                  <span>Biaya benih, pupuk, dan pestisida</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">-</span>
                  <span>Biaya tenaga kerja dan operasional</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">-</span>
                  <span>Biaya sewa lahan dan peralatan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">-</span>
                  <span>Cicilan pinjaman dan bunga kredit</span>
                </li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Akses Pembiayaan dan Kredit
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Akses terhadap pembiayaan yang memadai merupakan tantangan klasik
            bagi pelaku agribisnis, terutama petani kecil. Memahami berbagai
            sumber pembiayaan dan memilih yang paling sesuai dengan kebutuhan
            dan kapasitas usaha adalah bagian penting dari manajemen risiko
            finansial.
          </p>

          <ul className="space-y-4 my-6">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">$</span>
              <div>
                <strong className="text-gray-900">Kredit Usaha Rakyat (KUR) Pertanian</strong>
                <p className="text-gray-600 text-sm">
                  Pinjaman bersubsidi dari pemerintah dengan bunga rendah (3-6%
                  per tahun) khusus untuk pelaku usaha pertanian, dengan plafon
                  hingga Rp500 juta.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">$</span>
              <div>
                <strong className="text-gray-900">Koperasi Simpan Pinjam</strong>
                <p className="text-gray-600 text-sm">
                  Lembaga keuangan berbasis anggota yang menyediakan pinjaman
                  dengan persyaratan lebih fleksibel dan proses lebih cepat
                  dibandingkan perbankan formal.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">$</span>
              <div>
                <strong className="text-gray-900">Platform P2P Lending Pertanian</strong>
                <p className="text-gray-600 text-sm">
                  Fintech yang menghubungkan petani dengan investor melalui
                  platform digital, menawarkan skema bagi hasil atau bunga
                  kompetitif.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">$</span>
              <div>
                <strong className="text-gray-900">Dana Cadangan Darurat</strong>
                <p className="text-gray-600 text-sm">
                  Setiap pelaku agribisnis disarankan menyisihkan 10-20% dari
                  keuntungan sebagai dana cadangan untuk menghadapi situasi
                  darurat dan gagal panen.
                </p>
              </div>
            </li>
          </ul>

          {/* Section 8: Technology for Risk Management */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Teknologi untuk Manajemen Risiko
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Perkembangan teknologi digital telah membuka peluang baru dalam
            pengelolaan risiko agribisnis. Berbagai aplikasi dan platform
            berbasis teknologi kini tersedia untuk membantu petani dan pelaku
            agribisnis membuat keputusan yang lebih tepat berdasarkan data dan
            analisis yang akurat.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Aplikasi Prakiraan Cuaca
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Aplikasi cuaca khusus pertanian yang memberikan informasi
                prakiraan cuaca hiper-lokal untuk perencanaan tanam dan panen.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>- Prakiraan cuaca 14 hari ke depan</li>
                <li>- Peringatan dini cuaca ekstrem</li>
                <li>- Rekomendasi waktu tanam optimal</li>
                <li>- Data curah hujan dan suhu historis</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Sistem Informasi Harga Pasar
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Platform digital yang menyediakan informasi harga komoditas
                secara real-time di berbagai pasar.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>- Harga komoditas real-time multi-pasar</li>
                <li>- Tren dan analisis harga historis</li>
                <li>- Prediksi pergerakan harga</li>
                <li>- Notifikasi otomatis saat harga berubah</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Sistem Peringatan Dini Hama
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Teknologi monitoring dan deteksi dini serangan hama dan
                penyakit tanaman menggunakan sensor dan AI.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>- Deteksi hama via kamera dan AI</li>
                <li>- Peta sebaran hama wilayah</li>
                <li>- Rekomendasi pengendalian terpadu</li>
                <li>- Pelaporan dan koordinasi antar petani</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Platform Marketplace Digital
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                E-commerce khusus produk pertanian yang menghubungkan petani
                langsung dengan pembeli tanpa perantara.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>- Akses langsung ke pasar yang lebih luas</li>
                <li>- Transparansi harga dan negosiasi</li>
                <li>- Sistem pembayaran yang aman</li>
                <li>- Logistik dan pengiriman terintegrasi</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Pemanfaatan Data dan Analitik
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Big data dan analitik memungkinkan pelaku agribisnis untuk membuat
            keputusan berbasis bukti (evidence-based decision making). Data
            historis tentang cuaca, harga, produktivitas, dan biaya dapat
            dianalisis untuk mengidentifikasi pola, memprediksi risiko, dan
            mengoptimalkan strategi usaha.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8">
            <h4 className="font-bold text-gray-900 mb-3">
              Contoh Penerapan Data Analitik dalam Agribisnis
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-gray-900">Prediksi Produktivitas</p>
                <p className="text-gray-600">
                  Menggunakan data historis cuaca dan hasil panen untuk
                  memperkirakan produktivitas musim depan
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Optimasi Input</p>
                <p className="text-gray-600">
                  Analisis data untuk menentukan dosis pupuk dan pestisida
                  yang paling efisien
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Timing Pasar</p>
                <p className="text-gray-600">
                  Prediksi waktu terbaik untuk menjual produk berdasarkan
                  pola harga musiman
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Perencanaan Logistik</p>
                <p className="text-gray-600">
                  Mengoptimalkan rute distribusi dan waktu pengiriman untuk
                  meminimalkan kerugian pasca panen
                </p>
              </div>
            </div>
          </div>

          {/* Section 9: Case Studies */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Studi Kasus: Keberhasilan Manajemen Risiko
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Berbagai pelaku agribisnis di Indonesia telah membuktikan bahwa
            penerapan manajemen risiko yang baik dapat meningkatkan ketahanan
            usaha dan profitabilitas secara signifikan. Berikut adalah beberapa
            contoh keberhasilan yang dapat dijadikan pembelajaran.
          </p>

          <div className="space-y-6 my-8">
            <div className="border-l-4 border-green-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Kelompok Tani Makmur Jaya, Subang - Diversifikasi Padi-Ikan
              </h4>
              <p className="text-gray-700 mb-3">
                Kelompok tani ini menerapkan sistem mina padi (tumpangsari
                padi-ikan) di lahan seluas 50 hektar. Ketika harga gabah turun
                drastis pada musim panen raya, pendapatan dari budidaya ikan
                nila di sawah mampu menutupi kerugian. Total pendapatan
                kelompok meningkat 40% dibanding monokultur padi.
              </p>
              <p className="text-sm text-gray-600">
                Strategi: Diversifikasi usaha tani terpadu
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                CV Agro Nusantara, Malang - Contract Farming Sayuran Organik
              </h4>
              <p className="text-gray-700 mb-3">
                Perusahaan ini menjalin kontrak jangka panjang dengan 200
                petani mitra untuk memasok sayuran organik ke jaringan
                supermarket premium. Dengan harga kontrak yang ditetapkan di
                awal, petani mitra terlindungi dari fluktuasi harga pasar
                sementara perusahaan mendapat pasokan yang konsisten dan
                berkualitas.
              </p>
              <p className="text-sm text-gray-600">
                Strategi: Contract farming dengan jaminan harga
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Koperasi Tani Sejahtera, Indramayu - Asuransi dan Dana Cadangan
              </h4>
              <p className="text-gray-700 mb-3">
                Koperasi ini mendaftarkan seluruh 350 anggotanya dalam program
                AUTP dan membentuk dana cadangan kolektif dari iuran bulanan.
                Ketika banjir melanda 120 hektar lahan anggota pada 2025, klaim
                asuransi dan dana cadangan memungkinkan petani untuk segera
                melakukan penanaman ulang tanpa menunggu bantuan pemerintah.
              </p>
              <p className="text-sm text-gray-600">
                Strategi: Kombinasi asuransi formal dan tabungan kolektif
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                PT Agri Digital Indonesia, Bogor - Teknologi Prediksi Risiko
              </h4>
              <p className="text-gray-700 mb-3">
                Startup agritech ini mengembangkan platform berbasis AI yang
                mengintegrasikan data satelit, cuaca, dan pasar untuk memberikan
                peringatan dini risiko kepada 5.000 petani pengguna. Platform
                ini berhasil mengurangi kerugian akibat serangan hama hingga
                35% melalui deteksi dini dan rekomendasi pengendalian yang
                tepat waktu.
              </p>
              <p className="text-sm text-gray-600">
                Strategi: Pemanfaatan teknologi digital untuk deteksi dini
              </p>
            </div>
          </div>

          {/* Section 10: Conclusion */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Kesimpulan: Membangun Ketahanan Agribisnis
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Manajemen risiko bukanlah upaya untuk menghilangkan semua risiko
            dalam agribisnis, karena hal tersebut mustahil. Sebaliknya,
            manajemen risiko adalah tentang memahami, mengukur, dan mengelola
            risiko secara cerdas agar pelaku agribisnis dapat bertahan dan
            berkembang di tengah ketidakpastian. Dalam dunia agribisnis yang
            semakin kompleks dan terkoneksi secara global, kemampuan mengelola
            risiko menjadi pembeda antara usaha yang berhasil dan yang gagal.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Kunci keberhasilan manajemen risiko terletak pada pendekatan yang
            holistik dan proaktif. Petani dan pelaku agribisnis perlu
            mengkombinasikan berbagai strategi mitigasi, mulai dari diversifikasi
            usaha, pemanfaatan asuransi pertanian, contract farming, hingga
            adopsi teknologi digital. Tidak ada satu strategi tunggal yang mampu
            melindungi dari semua jenis risiko, sehingga portofolio strategi
            yang komprehensif menjadi sangat penting.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Peran pemerintah, lembaga keuangan, perusahaan swasta, dan
            perguruan tinggi juga sangat krusial dalam membangun ekosistem
            manajemen risiko yang inklusif dan efektif. Kebijakan yang
            mendukung, akses pembiayaan yang terjangkau, teknologi yang tepat
            guna, dan edukasi yang berkelanjutan harus berjalan bersama untuk
            meningkatkan ketahanan seluruh rantai nilai agribisnis Indonesia.
          </p>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8 my-12">
            <p className="text-xl font-bold mb-3">
              Mulai Kelola Risiko Anda Sekarang!
            </p>
            <p className="text-blue-100">
              Jangan menunggu kerugian terjadi untuk mulai mengelola risiko.
              Identifikasi risiko utama usaha Anda, buat rencana mitigasi yang
              realistis, manfaatkan asuransi pertanian bersubsidi, dan gunakan
              teknologi yang tersedia untuk membuat keputusan yang lebih baik.
              Agribisnis yang tangguh adalah agribisnis yang siap menghadapi
              ketidakpastian.
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
  );
}
