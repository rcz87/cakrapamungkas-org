import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export const metadata = {
  title: "Adaptasi Perubahan Iklim: Varietas Tahan Cuaca Ekstrem | Cakra Pamungkas",
  description:
    "Strategi adaptasi perubahan iklim untuk pertanian Indonesia. Panduan lengkap varietas tahan kekeringan & banjir, teknologi prediksi cuaca satelit, asuransi pertanian, dan praktik berkelanjutan.",
};

export default function AdaptasiPerubahanIklimArtikelPage() {
  return (
    <article className="bg-white">
      {/* Header */}
      <header className="bg-gradient-to-br from-teal-950 via-teal-900 to-cyan-800 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-teal-300 hover:text-teal-200 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Kembali ke Beranda</span>
          </Link>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-teal-600 text-white text-xs font-semibold rounded-full">
              LINGKUNGAN
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Perubahan Iklim
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Varietas Unggul
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Mitigasi Risiko
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Pertanian Berkelanjutan
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Adaptasi Perubahan Iklim: Varietas Tahan Cuaca Ekstrem
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-teal-200">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">12 Februari 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">9 menit baca</span>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative h-[400px] lg:h-[600px] bg-gray-100">
        <Image
          src="/images/adaptasi-perubahan-iklim.png"
          alt="Adaptasi Perubahan Iklim - Varietas Padi Tahan Cuaca Ekstrem"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-700 leading-relaxed mb-8">
            Perubahan iklim telah menjadi ancaman nyata bagi sektor pertanian
            Indonesia. Dengan meningkatnya frekuensi cuaca ekstrem, mulai dari
            kekeringan berkepanjangan akibat El Nino hingga banjir dahsyat yang
            dipicu La Nina, petani di seluruh Nusantara menghadapi tantangan yang
            belum pernah terjadi sebelumnya. Pengembangan varietas tanaman tahan
            cuaca ekstrem dan strategi adaptasi yang komprehensif menjadi kunci
            untuk menjaga ketahanan pangan nasional di tengah ketidakpastian
            iklim global.
          </p>

          {/* Section 1: Introduction */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Dampak Perubahan Iklim terhadap Pertanian Indonesia
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Indonesia, sebagai negara kepulauan tropis yang terletak di garis
            khatulistiwa, sangat rentan terhadap dampak perubahan iklim.
            Peningkatan suhu rata-rata global sebesar 1,2 derajat Celsius
            sejak era pra-industri telah memicu perubahan drastis pada pola
            curah hujan, musim tanam, dan ekosistem pertanian di seluruh
            wilayah Indonesia. Data dari Badan Meteorologi, Klimatologi, dan
            Geofisika (BMKG) menunjukkan bahwa suhu rata-rata Indonesia telah
            meningkat sekitar 0,3 derajat Celsius per dekade dalam 30 tahun
            terakhir.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Sektor pertanian menyumbang sekitar 13% dari Produk Domestik Bruto
            (PDB) Indonesia dan menyerap lebih dari 29% tenaga kerja nasional.
            Ketika iklim berubah, dampaknya tidak hanya dirasakan oleh petani
            secara langsung, tetapi juga mengancam stabilitas ekonomi dan
            ketahanan pangan lebih dari 270 juta penduduk Indonesia. Gagal panen
            akibat cuaca ekstrem telah menyebabkan kerugian triliunan rupiah
            setiap tahunnya, memperparah kemiskinan di pedesaan dan mendorong
            urbanisasi yang tidak terkendali.
          </p>

          <div className="bg-teal-50 border-l-4 border-teal-600 p-6 my-8">
            <p className="text-gray-800 font-medium mb-2">
              Fakta Penting Perubahan Iklim di Indonesia
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Suhu rata-rata meningkat 0,3 derajat Celsius per dekade</li>
              <li>Curah hujan semakin tidak menentu dengan intensitas lebih tinggi</li>
              <li>Musim kemarau cenderung lebih panjang 2-4 minggu dari normal</li>
              <li>Frekuensi banjir meningkat 40% dalam 20 tahun terakhir</li>
              <li>Kerugian pertanian akibat cuaca ekstrem mencapai Rp14,9 triliun per tahun</li>
            </ul>
          </div>

          {/* Section 2: El Nino & La Nina */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Pola Cuaca Ekstrem: El Nino dan La Nina
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Fenomena El Nino-Southern Oscillation (ENSO) merupakan salah satu
            pendorong utama variabilitas iklim di Indonesia. Siklus El Nino dan
            La Nina membawa dampak yang bertolak belakang namun sama-sama
            destruktif bagi sektor pertanian. Dengan intensifikasi perubahan
            iklim global, kedua fenomena ini semakin sering terjadi dan semakin
            ekstrem dampaknya.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                El Nino: Kekeringan Ekstrem
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                El Nino menyebabkan penurunan drastis curah hujan di Indonesia,
                memicu kekeringan panjang yang menghancurkan lahan pertanian.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Curah hujan turun hingga 40-60%</li>
                <li>Musim kemarau lebih panjang 1-3 bulan</li>
                <li>Puso lahan sawah mencapai 500.000 hektar</li>
                <li>Kebakaran hutan dan lahan meningkat drastis</li>
                <li>Krisis air untuk irigasi pertanian</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                La Nina: Banjir dan Genangan
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                La Nina membawa curah hujan berlebih yang menyebabkan banjir,
                genangan berkepanjangan, dan tanah longsor di area pertanian.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Curah hujan meningkat 30-50% di atas normal</li>
                <li>Banjir merendam ribuan hektar sawah</li>
                <li>Genangan menghambat proses penyerbukan</li>
                <li>Peningkatan serangan hama dan penyakit</li>
                <li>Erosi tanah dan hilangnya unsur hara</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            El Nino super tahun 2023-2024 menjadi salah satu yang terkuat dalam
            catatan sejarah, menyebabkan kekeringan parah di Jawa Timur, Nusa
            Tenggara, dan Sulawesi Selatan. Ratusan ribu hektar lahan padi
            mengalami puso, memaksa pemerintah mengimpor beras dalam jumlah
            besar untuk menjaga stabilitas stok nasional. Sebaliknya, La Nina
            yang menyusul pada akhir 2024 hingga awal 2025 membawa banjir besar
            di Kalimantan dan Jawa Barat, menenggelamkan lahan pertanian
            produktif selama berminggu-minggu.
          </p>

          {/* Section 3: Impact on Crop Yields */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Dampak terhadap Produktivitas Tanaman dan Ketahanan Pangan
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Cuaca ekstrem secara langsung mempengaruhi produktivitas tanaman
            pangan utama Indonesia. Padi, jagung, kedelai, dan berbagai
            komoditas hortikultura mengalami penurunan hasil panen yang
            signifikan ketika terjadi anomali iklim. Studi dari Kementerian
            Pertanian menunjukkan bahwa setiap kenaikan suhu 1 derajat Celsius
            dapat menurunkan produktivitas padi hingga 7-10%.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Komoditas
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Dampak Kekeringan
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Dampak Banjir
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Potensi Kerugian/Tahun
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Padi</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Puso hingga 30% luas tanam</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Genangan merusak fase generatif</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp5,2 triliun
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Jagung</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Hasil turun 25-40%</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Pembusukan akar dan batang</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp3,1 triliun
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Kedelai</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Gagal berbunga & berbuah</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Busuk polong dan biji</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp1,8 triliun
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Hortikultura</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Kualitas turun drastis</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Peningkatan penyakit jamur</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp4,8 triliun
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Ketidakstabilan produksi ini berdampak langsung pada ketahanan pangan
            nasional. Fluktuasi pasokan menyebabkan lonjakan harga pangan yang
            memberatkan masyarakat berpenghasilan rendah. Pada saat El Nino
            2023-2024, harga beras di pasar tradisional melonjak hingga 25-30%,
            memaksa pemerintah melakukan operasi pasar dan menambah impor untuk
            menstabilkan harga. Kondisi ini menegaskan urgensi pengembangan
            varietas tanaman yang tahan terhadap cekaman iklim.
          </p>

          {/* Section 4: Climate-Resilient Varieties */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Varietas Tanaman Tahan Cuaca Ekstrem
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Indonesia melalui Badan Riset dan Inovasi Nasional (BRIN) bersama
            berbagai lembaga penelitian telah mengembangkan sejumlah varietas
            tanaman yang memiliki toleransi tinggi terhadap cekaman abiotik
            seperti kekeringan, genangan, salinitas, dan suhu tinggi. Varietas
            unggul ini menjadi garda terdepan dalam strategi adaptasi perubahan
            iklim di sektor pertanian.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Padi Toleran Kekeringan
          </h3>

          <div className="space-y-6 my-8">
            <div className="border-l-4 border-amber-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Inpari 38 Tadah Hujan Agritan
              </h4>
              <p className="text-gray-700 mb-3">
                Varietas padi yang dirancang khusus untuk lahan tadah hujan
                dengan kemampuan bertahan pada kondisi kekeringan moderat.
                Memiliki sistem perakaran dalam yang efisien menyerap air dari
                lapisan tanah yang lebih dalam.
              </p>
              <p className="text-sm text-gray-600">
                Potensi hasil: 6,5-8,2 ton/ha | Umur panen: 112-120 hari |
                Toleransi kekeringan: Moderat-Tinggi
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Inpari 39 Tadah Hujan Agritan
              </h4>
              <p className="text-gray-700 mb-3">
                Pengembangan lanjutan dari Inpari 38 dengan peningkatan
                toleransi kekeringan dan ketahanan terhadap wereng coklat.
                Cocok untuk daerah dengan curah hujan tidak menentu di Jawa
                Timur, NTB, dan NTT.
              </p>
              <p className="text-sm text-gray-600">
                Potensi hasil: 7,0-8,5 ton/ha | Umur panen: 110-118 hari |
                Toleransi kekeringan: Tinggi
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Situ Bagendit
              </h4>
              <p className="text-gray-700 mb-3">
                Varietas padi gogo yang telah teruji di berbagai kondisi
                lahan kering. Memiliki mekanisme penggulungan daun untuk
                mengurangi transpirasi saat kekurangan air dan mampu
                memulihkan diri setelah stress kekeringan.
              </p>
              <p className="text-sm text-gray-600">
                Potensi hasil: 5,0-6,5 ton/ha | Umur panen: 110-120 hari |
                Toleransi kekeringan: Tinggi
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Padi Toleran Genangan (Submergence-Tolerant)
          </h3>

          <div className="space-y-6 my-8">
            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Inpari 30 Ciherang Sub1
              </h4>
              <p className="text-gray-700 mb-3">
                Varietas padi dengan gen Sub1 (submergence tolerance 1) yang
                memungkinkan tanaman bertahan hingga 14 hari terendam air.
                Setelah air surut, tanaman dapat kembali tumbuh normal dan
                menghasilkan gabah. Gen Sub1 berasal dari padi liar FR13A
                yang diintrogresikan melalui teknik marker-assisted
                backcrossing.
              </p>
              <p className="text-sm text-gray-600">
                Potensi hasil: 7,2-9,0 ton/ha | Toleransi genangan: 14 hari |
                Pemulihan pasca genangan: Sangat Baik
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Inpari 22
              </h4>
              <p className="text-gray-700 mb-3">
                Varietas padi yang dikembangkan untuk wilayah rawan banjir di
                Kalimantan dan pesisir utara Jawa. Memiliki kemampuan elongasi
                batang yang cepat mengikuti kenaikan permukaan air, sehingga
                daun tetap berada di atas genangan untuk melakukan fotosintesis.
              </p>
              <p className="text-sm text-gray-600">
                Potensi hasil: 6,8-8,3 ton/ha | Toleransi genangan: 10-12 hari |
                Adaptasi wilayah: Rawa dan pasang surut
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Varietas Tanaman Pangan Lain yang Adaptif
          </h3>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Jagung Toleran Kekeringan
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Varietas Bisi 226 dan NK Sumo mampu bertahan pada kondisi
                defisit air dengan mekanisme osmotic adjustment dan sistem
                perakaran yang ekstensif.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Potensi hasil: 10-12 ton/ha</li>
                <li>Toleran kekeringan fase vegetatif</li>
                <li>Tahan rebah batang saat angin kencang</li>
                <li>Umur genjah: 95-100 hari</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Kedelai Tahan Cekaman
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Varietas Dega-1 dan Dena-1 memiliki ketahanan terhadap
                kekeringan dan salinitas tanah, ideal untuk lahan marginal
                yang terdampak perubahan iklim.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Potensi hasil: 2,5-3,5 ton/ha</li>
                <li>Toleran salinitas rendah-sedang</li>
                <li>Adaptif di lahan kering</li>
                <li>Umur genjah: 73-78 hari</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Singkong Tahan Kering
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Varietas UJ-5 (Kasetsart) dan Malang-4 sangat adaptif di
                daerah beriklim kering dengan curah hujan rendah. Mampu
                berproduksi optimal di NTT dan NTB.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Potensi hasil: 30-40 ton/ha</li>
                <li>Tahan kekeringan hingga 4 bulan</li>
                <li>Kadar pati tinggi: 25-30%</li>
                <li>Umur panen fleksibel: 8-12 bulan</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Sorgum Adaptif Iklim
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Sorgum varietas Numbu dan Super-1 menjadi alternatif pangan
                yang sangat tahan terhadap kekeringan dan bisa tumbuh di
                tanah marginal.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Potensi hasil: 4-6 ton biji/ha</li>
                <li>Sangat tahan kekeringan</li>
                <li>Bisa ditanam di lahan marginal</li>
                <li>Kebutuhan air 50% lebih sedikit dari padi</li>
              </ul>
            </div>
          </div>

          {/* Section 5: Satellite Technology */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Teknologi Prediksi Cuaca Berbasis Satelit
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Kemajuan teknologi penginderaan jauh (remote sensing) dan satelit
            cuaca telah memberikan alat bantu yang sangat berharga bagi petani
            dan pengambil kebijakan dalam mengantisipasi cuaca ekstrem.
            Indonesia saat ini memanfaatkan data dari berbagai konstelasi
            satelit untuk sistem peringatan dini dan perencanaan pertanian
            yang lebih akurat.
          </p>

          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-8 my-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Sistem Pemantauan Satelit untuk Pertanian
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  1. Satelit LAPAN-A2/LAPAN-IPB
                </p>
                <p className="text-sm text-gray-600">
                  Satelit milik Indonesia yang memantau kondisi vegetasi,
                  kelembaban tanah, dan titik panas kebakaran lahan secara
                  berkala di seluruh wilayah Indonesia.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  2. Sistem KATAM (Kalender Tanam)
                </p>
                <p className="text-sm text-gray-600">
                  Platform BMKG yang memberikan rekomendasi waktu tanam optimal
                  berdasarkan analisis data satelit cuaca, curah hujan, dan
                  pola iklim historis.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  3. Sentinel-2 (ESA)
                </p>
                <p className="text-sm text-gray-600">
                  Satelit Eropa dengan resolusi tinggi yang digunakan untuk
                  monitoring indeks vegetasi (NDVI) dan estimasi luas tanam
                  serta prediksi produksi pangan.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  4. Himawari-9 (JMA)
                </p>
                <p className="text-sm text-gray-600">
                  Satelit meteorologi geostationary yang memberikan citra cuaca
                  real-time setiap 10 menit untuk wilayah Asia-Pasifik termasuk
                  Indonesia.
                </p>
              </div>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Aplikasi berbasis satelit seperti SIPI (Sistem Informasi Pertanian
            Indonesia) dan iCROPS kini dapat diakses oleh penyuluh pertanian
            dan petani melalui smartphone. Platform ini menyediakan informasi
            prakiraan cuaca harian, peringatan dini El Nino/La Nina, peta
            kerentanan banjir dan kekeringan, serta rekomendasi teknis
            budidaya yang disesuaikan dengan kondisi iklim terkini. Akurasi
            prediksi cuaca berbasis satelit telah mencapai 80-85% untuk
            rentang 7 hari ke depan.
          </p>

          {/* Section 6: Adaptation Strategies */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Strategi Adaptasi untuk Petani
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Adaptasi terhadap perubahan iklim membutuhkan pendekatan
            menyeluruh yang mencakup aspek teknis budidaya, manajemen air,
            diversifikasi usaha tani, dan penguatan kapasitas petani. Berikut
            adalah strategi-strategi kunci yang dapat diterapkan oleh petani
            Indonesia untuk menghadapi cuaca ekstrem.
          </p>

          <div className="space-y-6 my-8">
            <div className="border-l-4 border-teal-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Penyesuaian Kalender Tanam
              </h4>
              <p className="text-gray-700 mb-3">
                Menggeser waktu tanam sesuai dengan prediksi awal musim hujan
                dari BMKG. Penggunaan aplikasi KATAM Terpadu membantu petani
                menentukan waktu tanam optimal berdasarkan data historis curah
                hujan dan prediksi iklim. Penyesuaian ini terbukti mengurangi
                risiko gagal panen hingga 20-30%.
              </p>
            </div>

            <div className="border-l-4 border-teal-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Pengelolaan Air Terpadu
              </h4>
              <p className="text-gray-700 mb-3">
                Membangun embung (kolam penampung air hujan), menerapkan
                teknik irigasi hemat air seperti SRI (System of Rice
                Intensification), dan mengoptimalkan saluran drainase untuk
                antisipasi banjir. Teknik AWD (Alternate Wetting and Drying)
                pada sawah dapat menghemat penggunaan air hingga 30% tanpa
                mengurangi hasil panen.
              </p>
            </div>

            <div className="border-l-4 border-teal-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Diversifikasi Tanaman
              </h4>
              <p className="text-gray-700 mb-3">
                Menerapkan pola tanam tumpangsari dan rotasi tanaman yang
                melibatkan kombinasi tanaman tahan kering dan tahan basah.
                Misalnya, menanam padi pada musim hujan, kemudian beralih ke
                jagung atau palawija yang lebih tahan kering pada musim
                kemarau. Diversifikasi ini mengurangi risiko gagal panen
                total dan menstabilkan pendapatan petani.
              </p>
            </div>

            <div className="border-l-4 border-teal-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Konservasi Tanah dan Air
              </h4>
              <p className="text-gray-700 mb-3">
                Menerapkan teknik mulsa organik, terasering, penanaman cover
                crop, dan pembuatan rorak (parit buntu) untuk mengurangi erosi,
                meningkatkan infiltrasi air, dan menjaga kelembaban tanah.
                Aplikasi bahan organik (kompos) meningkatkan kapasitas menahan
                air tanah hingga 20%, sangat bermanfaat saat kekeringan.
              </p>
            </div>

            <div className="border-l-4 border-teal-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Pertanian Vertikal dan Hidroponik
              </h4>
              <p className="text-gray-700 mb-3">
                Untuk komoditas hortikultura, sistem pertanian vertikal
                (vertical farming) dan hidroponik dalam greenhouse memberikan
                kendali penuh terhadap kondisi tumbuh tanaman, mengeliminasi
                ketergantungan pada cuaca luar. Meskipun investasi awal tinggi,
                sistem ini semakin terjangkau dan cocok untuk pertanian
                peri-urban.
              </p>
            </div>
          </div>

          {/* Section 7: Government Programs */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Program Pemerintah untuk Adaptasi Iklim
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Pemerintah Indonesia telah menyusun berbagai kebijakan dan program
            untuk membantu sektor pertanian beradaptasi terhadap perubahan iklim.
            Komitmen ini dituangkan dalam Rencana Aksi Nasional Adaptasi
            Perubahan Iklim (RAN-API) dan berbagai regulasi turunannya yang
            melibatkan kementerian/lembaga terkait.
          </p>

          <div className="bg-teal-50 rounded-xl p-6 my-6">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-teal-600 text-xl">&#10003;</span>
                <div>
                  <strong>Program KATAM Terpadu:</strong> Kalender Tanam
                  Terpadu yang memberikan rekomendasi waktu tanam, varietas, dan
                  teknik budidaya berdasarkan prediksi iklim. Telah menjangkau
                  34 provinsi dan 514 kabupaten/kota.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-600 text-xl">&#10003;</span>
                <div>
                  <strong>Sekolah Lapang Iklim (SLI):</strong> Program
                  pelatihan intensif bagi petani untuk memahami informasi iklim
                  dan menerapkan strategi adaptasi. Lebih dari 50.000 petani
                  telah mengikuti program ini sejak 2019.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-600 text-xl">&#10003;</span>
                <div>
                  <strong>Bantuan Benih Varietas Adaptif:</strong> Distribusi
                  gratis benih varietas tahan cuaca ekstrem kepada kelompok
                  tani di daerah rawan bencana iklim. Anggaran Rp1,2 triliun
                  dialokasikan untuk tahun 2025-2026.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-600 text-xl">&#10003;</span>
                <div>
                  <strong>Pembangunan Infrastruktur Irigasi:</strong> Rehabilitasi
                  dan pembangunan jaringan irigasi baru sepanjang 500.000 hektar
                  untuk meningkatkan ketahanan pasokan air pertanian.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-600 text-xl">&#10003;</span>
                <div>
                  <strong>Dana Adaptasi Desa (DAD):</strong> Alokasi khusus
                  dari Dana Desa untuk program adaptasi perubahan iklim
                  tingkat desa, termasuk pembangunan embung, pompanisasi, dan
                  rehabilitasi lahan kritis.
                </div>
              </li>
            </ul>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Selain program nasional, kerjasama internasional juga berperan
            penting. Indonesia aktif dalam Climate-Smart Agriculture (CSA)
            bersama FAO, program IRRI untuk pengembangan padi adaptif, dan
            Green Climate Fund untuk pembiayaan proyek adaptasi. Kolaborasi
            ini telah menghasilkan transfer teknologi dan pendanaan yang
            signifikan untuk memperkuat ketahanan pertanian Indonesia.
          </p>

          {/* Section 8: Insurance & Risk Mitigation */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Asuransi Pertanian dan Mitigasi Risiko
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Asuransi pertanian merupakan instrumen penting dalam melindungi
            petani dari kerugian akibat cuaca ekstrem. Program Asuransi Usaha
            Tani Padi (AUTP) yang diluncurkan pemerintah sejak 2015 telah
            memberikan jaring pengaman finansial bagi jutaan petani Indonesia
            yang menghadapi risiko gagal panen.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                AUTP (Asuransi Usaha Tani Padi)
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Program asuransi bersubsidi untuk petani padi yang melindungi
                dari risiko gagal panen akibat banjir, kekeringan, dan
                serangan OPT (Organisme Pengganggu Tanaman).
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Premi: Rp36.000/ha/musim (subsidi 80%)</li>
                <li>Ganti rugi: Rp6.000.000/ha</li>
                <li>Syarat klaim: Kerusakan minimal 75%</li>
                <li>Target 2026: 3 juta hektar terasuransi</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                AUTK (Asuransi Usaha Ternak)
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Asuransi untuk peternak sapi dan kerbau yang melindungi dari
                risiko kematian ternak akibat penyakit, bencana alam, dan
                kehilangan karena cuaca ekstrem.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Premi: Rp200.000/ekor/tahun (subsidi 80%)</li>
                <li>Ganti rugi: Rp10.000.000/ekor</li>
                <li>Mencakup sapi, kerbau, dan kambing</li>
                <li>Berlaku untuk bencana alam dan penyakit</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8">
            <h4 className="font-bold text-gray-900 mb-3">
              Strategi Mitigasi Risiko Tambahan
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-gray-900">Index-Based Insurance</p>
                <p className="text-gray-600">
                  Asuransi berbasis indeks cuaca yang menggunakan data satelit
                  untuk otomatisasi klaim tanpa perlu verifikasi lapangan.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Warehouse Receipt System</p>
                <p className="text-gray-600">
                  Sistem resi gudang yang memungkinkan petani menyimpan hasil
                  panen dan menjualnya saat harga lebih baik.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Kontrak Farming</p>
                <p className="text-gray-600">
                  Perjanjian pembelian hasil panen dengan harga tetap sebelum
                  musim tanam untuk menjamin pendapatan petani.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Cadangan Pangan Desa</p>
                <p className="text-gray-600">
                  Lumbung pangan komunitas untuk menjaga stok pangan lokal saat
                  terjadi gagal panen akibat bencana iklim.
                </p>
              </div>
            </div>
          </div>

          {/* Section 9: Sustainable Farming */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Praktik Pertanian Berkelanjutan untuk Ketahanan Iklim
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Pertanian berkelanjutan (sustainable agriculture) tidak hanya
            membantu petani beradaptasi terhadap perubahan iklim, tetapi juga
            berkontribusi pada mitigasi emisi gas rumah kaca dari sektor
            pertanian. Praktik-praktik ini menciptakan sistem pertanian yang
            lebih resilien, produktif, dan ramah lingkungan dalam jangka panjang.
          </p>

          <ul className="space-y-4 my-6">
            <li className="flex items-start gap-3">
              <span className="text-teal-600 text-xl">&#10003;</span>
              <div>
                <strong className="text-gray-900">Pertanian Organik</strong>
                <p className="text-gray-600 text-sm">
                  Penggunaan pupuk organik (kompos, pupuk hijau, bokashi)
                  meningkatkan kandungan bahan organik tanah, memperbaiki
                  struktur tanah, dan meningkatkan kapasitas menahan air.
                  Tanah yang kaya bahan organik lebih tahan terhadap kekeringan
                  dan mampu menyerap air lebih baik saat hujan deras.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-600 text-xl">&#10003;</span>
              <div>
                <strong className="text-gray-900">Agroforestri</strong>
                <p className="text-gray-600 text-sm">
                  Integrasi pohon dengan tanaman pertanian menciptakan
                  mikro-iklim yang lebih stabil, mengurangi suhu permukaan
                  tanah, menyediakan naungan, dan memperbaiki siklus air.
                  Sistem agroforestri terbukti meningkatkan ketahanan lahan
                  terhadap cuaca ekstrem hingga 40%.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-600 text-xl">&#10003;</span>
              <div>
                <strong className="text-gray-900">Pertanian Konservasi (Conservation Agriculture)</strong>
                <p className="text-gray-600 text-sm">
                  Tiga prinsip utama: olah tanah minimum (minimum tillage),
                  penutupan permukaan tanah (soil cover), dan rotasi tanaman.
                  Praktik ini mengurangi erosi tanah, meningkatkan biodiversitas
                  tanah, dan memperbaiki infiltrasi air hujan.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-600 text-xl">&#10003;</span>
              <div>
                <strong className="text-gray-900">Integrated Pest Management (IPM)</strong>
                <p className="text-gray-600 text-sm">
                  Pengendalian hama terpadu yang mengurangi ketergantungan
                  pada pestisida kimia. Dengan perubahan iklim yang mengubah
                  dinamika hama, IPM yang melibatkan musuh alami, varietas
                  tahan, dan monitoring berkala menjadi semakin penting.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-600 text-xl">&#10003;</span>
              <div>
                <strong className="text-gray-900">Biochar dan Pembenah Tanah</strong>
                <p className="text-gray-600 text-sm">
                  Aplikasi biochar (arang dari biomassa) meningkatkan retensi
                  air tanah, memperbaiki pH, menyerap karbon, dan meningkatkan
                  ketersediaan nutrisi. Biochar dari sekam padi atau tongkol
                  jagung dapat meningkatkan hasil panen 15-20% di lahan kering.
                </p>
              </div>
            </li>
          </ul>

          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8 my-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Integrasi Tanaman-Ternak (Crop-Livestock Integration)
            </h3>
            <p className="text-gray-700 mb-4">
              Sistem integrasi tanaman-ternak merupakan pendekatan holistik yang
              menciptakan siklus nutrisi tertutup dan meningkatkan efisiensi
              penggunaan sumber daya. Limbah tanaman menjadi pakan ternak,
              sedangkan kotoran ternak menjadi pupuk organik untuk tanaman.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white/70 rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-1">Padi-Sapi</p>
                <p className="text-gray-600">
                  Jerami padi untuk pakan sapi, kotoran sapi untuk pupuk sawah.
                  Meningkatkan pendapatan petani 30-40%.
                </p>
              </div>
              <div className="bg-white/70 rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-1">Kelapa Sawit-Sapi</p>
                <p className="text-gray-600">
                  Pelepah sawit difermentasi untuk pakan sapi, kotoran sapi
                  dikembalikan ke kebun sebagai pupuk organik.
                </p>
              </div>
              <div className="bg-white/70 rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-1">Mina Padi (Padi-Ikan)</p>
                <p className="text-gray-600">
                  Budidaya ikan di sawah bersamaan dengan padi. Ikan membantu
                  pengendalian gulma dan hama secara alami.
                </p>
              </div>
            </div>
          </div>

          {/* Section 10: Conclusion */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Kesimpulan: Membangun Ketahanan Pangan di Era Perubahan Iklim
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Perubahan iklim bukanlah ancaman yang bisa dihindari, melainkan
            realitas yang harus dihadapi dengan strategi adaptasi yang tepat
            dan terukur. Indonesia memiliki potensi besar untuk menjadi
            pemimpin dalam adaptasi pertanian terhadap perubahan iklim,
            berbekal kekayaan biodiversitas, tradisi pertanian yang panjang,
            dan komitmen kuat dari pemerintah serta masyarakat.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Pengembangan varietas tanaman tahan cuaca ekstrem, pemanfaatan
            teknologi prediksi iklim berbasis satelit, penerapan praktik
            pertanian berkelanjutan, dan penguatan sistem asuransi pertanian
            merupakan pilar-pilar utama dalam membangun ketahanan pangan
            nasional. Keberhasilan adaptasi ini membutuhkan sinergi seluruh
            pemangku kepentingan: pemerintah, lembaga penelitian, sektor
            swasta, dan yang terpenting, petani sebagai aktor utama di
            lapangan.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Investasi dalam riset varietas adaptif, infrastruktur irigasi,
            sistem informasi iklim, dan kapasitas petani bukan sekadar
            pengeluaran, melainkan investasi strategis untuk masa depan
            ketahanan pangan 270 juta rakyat Indonesia. Dengan kolaborasi
            yang kuat dan aksi nyata hari ini, kita dapat memastikan bahwa
            pertanian Indonesia tetap tangguh menghadapi gejolak iklim di
            masa depan.
          </p>

          <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl p-8 my-12">
            <p className="text-xl font-bold mb-3">
              Saatnya Bertindak untuk Ketahanan Iklim!
            </p>
            <p className="text-teal-100">
              Setiap petani dapat berkontribusi dalam adaptasi perubahan iklim.
              Mulai dari langkah sederhana: gunakan varietas tahan cuaca
              ekstrem, ikuti informasi KATAM dari BMKG, terapkan pertanian
              konservasi, dan daftarkan lahan Anda dalam program AUTP. Bersama,
              kita wujudkan pertanian Indonesia yang tangguh dan berkelanjutan
              untuk generasi mendatang.
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white font-medium rounded-xl hover:bg-teal-700 transition-colors"
            >
              Baca Artikel Lainnya
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
