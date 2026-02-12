import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, TrendingUp, Target } from "lucide-react";

export const metadata = {
  title: "Transformasi Agraria 2026: Strategi Besar Kedaulatan Pangan | Cakra Pamungkas",
  description:
    "Analisis strategis kebijakan Kementerian Pertanian 2026 melalui 5 Pilar (Poin A-E) untuk menciptakan Break of Structure dalam ekosistem pangan nasional Indonesia.",
};

export default function TransformasiAgrariaPage() {
  return (
    <article className="bg-white">
      {/* Header */}
      <header className="bg-gradient-to-br from-emerald-950 via-green-900 to-teal-800 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Kembali ke Beranda</span>
          </Link>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full">
              KEBIJAKAN 2026
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Kedaulatan Pangan
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Strategi Nasional
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              5 Pilar
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Transformasi Agraria 2026: Strategi Besar Menuju Kedaulatan Pangan dan Stabilitas Ekonomi Nasional
          </h1>

          <p className="text-xl text-emerald-100 mb-6">
            Analisis strategis kebijakan Kementerian Pertanian 2026 melalui pendekatan 5 Pilar (Poin A-E) untuk menciptakan Break of Structure dalam ekosistem pangan nasional.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-emerald-200">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">12 Februari 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">35 menit baca</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm">Analisis Kebijakan</span>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative h-[400px] lg:h-[600px] bg-gray-100">
        <Image
          src="/images/desa-petani.png"
          alt="Transformasi Pertanian Indonesia 2026"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="prose prose-lg max-w-none">
          
          <p className="lead text-xl text-gray-700 leading-relaxed mb-8">
            Tahun 2026 diprediksi menjadi periode krusial dalam sejarah ekonomi Indonesia. Di tengah dinamika 
            geopolitik global yang seringkali mengganggu rantai pasok energi dan pangan, Indonesia mengambil 
            langkah ofensif melalui serangkaian kebijakan pertanian yang terintegrasi.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Kebijakan ini bukan sekadar rutinitas birokrasi, melainkan sebuah <strong>"Break of Structure" (BOS)</strong> dari 
            pola-pola pertanian tradisional menuju ekosistem industri berbasis data dan teknologi.
          </p>

          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 my-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              🎯 Lima Pilar Strategi 2026
            </h3>
            <p className="text-gray-700 mb-4">
              Pemerintah melalui Kementerian Pertanian telah memetakan lima pilar utama yang dikenal sebagai <strong>Poin A hingga E</strong>:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Poin A:</strong> Ketersediaan Lahan (Ekstansifikasi & Oplah)</li>
              <li><strong>Poin B:</strong> Kepastian Input/Pupuk Bersubsidi</li>
              <li><strong>Poin C:</strong> Likuiditas Permodalan (KUR 6%)</li>
              <li><strong>Poin D:</strong> Efisiensi Teknologi (Agritech 4.0)</li>
              <li><strong>Poin E:</strong> Jaring Pengaman Risiko (AUTP)</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            I. Poin A: Rekayasa Struktur Produksi – Perluasan Lahan dan Optimalisasi Masif
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Basis dari setiap keberhasilan pangan adalah ketersediaan lahan yang produktif. Pemerintah menyadari 
            bahwa tekanan konversi lahan di Pulau Jawa mengharuskan adanya pergeseran "Market Structure" produksi 
            ke luar Jawa.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            1.1 Ekstansifikasi: Proyek Strategis Cetak Sawah Baru
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Target cetak sawah baru di tahun 2026 bukan sekadar pembukaan lahan hutan, melainkan pengembangan 
            lahan rawa dan lahan suboptimal yang telah melalui studi kelayakan hidrologi yang ketat.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 my-8">
            <h4 className="font-bold text-gray-900 mb-3">Fokus Pematangan Lahan:</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">→</span>
                <div>
                  <strong>Pematangan Lahan:</strong> Penanganan keasaman tanah (pH) melalui pengapuran masif dan pencucian tanah
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">→</span>
                <div>
                  <strong>Infrastruktur Irigasi:</strong> Pembangunan jaringan tersier untuk distribusi air merata
                </div>
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            1.2 Optimalisasi Lahan (Oplah): Meningkatkan Indeks Pertanaman
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Di lahan yang sudah ada, pemerintah melakukan "Intervention Order Block" dengan meningkatkan 
            produktivitas per unit area. Strategi Oplah bertujuan mengubah lahan IP 100 (panen sekali) menjadi 
            IP 200 atau 300 (panen dua-tiga kali).
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            II. Poin B: Reformasi Subsidi Pupuk – Antara Volume dan Akurasi Digital
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Pupuk tetap menjadi "Demand Zone" terbesar dalam aktivitas tani. Masalah klasik kelangkaan pupuk 
            di masa lalu direspon dengan kebijakan anggaran yang sangat agresif di tahun 2026.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              💰 Alokasi Anggaran Rp46,87 Triliun
            </h3>
            <p className="text-gray-700 mb-3">
              Pemerintah mengalokasikan dana hampir <strong>47 triliun rupiah</strong> untuk menyediakan 
              <strong> 9,55 juta ton</strong> pupuk bersubsidi. Ini adalah volume tertinggi dalam lima tahun terakhir.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Sistem i-Pubers: Mengintegrasikan data petani secara real-time</li>
              <li>Penebusan dengan KTP: Transparansi dan KYC (Know Your Customer)</li>
              <li>Menutup celah "mafia pupuk" melalui tracking digital</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            III. Poin C: KUR Pertanian 2026 – Mesin Penggerak Likuiditas
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Poin C adalah instrumen yang paling menarik dari perspektif ekonomi makro. <strong>Kredit Usaha Rakyat (KUR) 
            Pertanian 2026</strong> dirancang sebagai bensin bagi mesin produksi nasional.
          </p>

          <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl p-8 my-12">
            <h3 className="text-2xl font-bold mb-6">
              💡 Keunggulan KUR 2026
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-emerald-100 mb-2">Suku Bunga Flat 6%</h4>
                <p className="text-sm text-emerald-50">
                  Biaya modal (Cost of Capital) jauh di bawah tingkat inflasi pangan, menjadikannya "Cheap Money" 
                  yang sangat menguntungkan bagi petani.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-emerald-100 mb-2">Skema Yarnen (Bayar Panen)</h4>
                <p className="text-sm text-emerald-50">
                  Petani membayar seluruh kewajiban hanya setelah hasil panen terjual, sesuai dengan siklus cash flow pertanian.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-emerald-100 mb-2">Plafon Rp295 Triliun</h4>
                <p className="text-sm text-emerald-50">
                  Minimal 65% dari total plafon untuk sektor produksi, memastikan likuiditas mengalir ke produktivitas.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-emerald-100 mb-2">Digital Credit Scoring</h4>
                <p className="text-sm text-emerald-50">
                  Data satelit dan riwayat produksi menjadi kolateral baru, menggantikan agunan fisik tradisional.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            IV. Poin D: Modernisasi dan Pendampingan Teknologi – Agritech 4.0
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Tanpa teknologi, peningkatan lahan hanya akan berujung pada inefisiensi biaya tenaga kerja yang terus naik.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            4.1 Balai Besar Penerapan Modernisasi Pertanian (BBPMP)
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Pembentukan <strong>33 balai di tiap provinsi</strong> memastikan bahwa transfer teknologi tidak hanya 
            terjadi di pusat. Balai ini berfungsi sebagai pusat pelatihan bagi petani milenial untuk mengoperasikan:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <div className="text-3xl mb-3">🚁</div>
              <h4 className="font-bold text-gray-900 mb-2">Drone Sprayer</h4>
              <p className="text-sm text-gray-700">
                Untuk pemupukan dan pengendalian hama yang lebih presisi dan hemat air.
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <div className="text-3xl mb-3">🚜</div>
              <h4 className="font-bold text-gray-900 mb-2">Autonomous Tractor</h4>
              <p className="text-sm text-gray-700">
                Traktor tanpa awak untuk percepatan pengolahan lahan skala luas di luar Jawa.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            4.2 Bimbingan Mekanisasi dan Pasca-Panen
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Salah satu kelemahan ekonomi pertanian kita adalah tingginya angka <em>losses</em> (kehilangan hasil) 
            yang mencapai 10-15%. Pendampingan teknologi di tahun 2026 fokus pada penggunaan <strong>Combine 
            Harvester</strong> yang mampu memanen sekaligus merontokkan gabah dengan tingkat kehilangan di bawah 3%.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            V. Poin E: Asuransi Usaha Tani Padi (AUTP) – Mitigasi Risiko Ekstrim
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Dalam perspektif manajemen risiko, pertanian adalah bisnis dengan volatilitas tinggi. Poin E 
            bertindak sebagai "Stop Loss" bagi para petani.
          </p>

          <div className="bg-rose-50 border-l-4 border-rose-500 p-6 my-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              🛡️ Struktur Premi Bersubsidi 80%
            </h3>
            <p className="text-gray-700 mb-3">
              Total premi asuransi adalah <strong>Rp180.000 per hektare</strong>. Pemerintah mensubsidi 
              Rp144.000, sehingga beban riil petani hanya <strong>Rp36.000</strong>.
            </p>
            <div className="bg-white rounded-lg p-4 mt-4">
              <h4 className="font-bold text-rose-900 mb-2">Analisis Rasio Risk/Reward:</h4>
              <p className="text-sm text-gray-700">
                Dengan membayar Rp36.000, petani mendapatkan perlindungan senilai <strong>Rp6.000.000</strong>. 
                Ini adalah asuransi dengan leverage yang sangat tinggi, memberikan ketenangan psikologis bagi 
                petani untuk menanam di lahan-lahan yang rawan bencana.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            VI. Analisis Ekonomi Makro: Dampak Sistemik Kebijakan 2026
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Secara agregat, integrasi Poin A hingga E akan menciptakan dampak ekonomi yang luar biasa:
          </p>

          <div className="space-y-6 my-8">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                6.1 Pengendalian Inflasi Pangan (Volatile Foods)
              </h3>
              <p className="text-gray-700">
                Ketersediaan stok yang melimpah akibat optimalisasi lahan (Poin A) dan dukungan input (Poin B) 
                akan menjaga harga di tingkat konsumen tetap stabil. Stabilitas harga pangan adalah prasyarat 
                bagi pertumbuhan ekonomi nasional yang berkelanjutan.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                6.2 Multiplier Effect Pedesaan
              </h3>
              <p className="text-gray-700">
                Alokasi KUR yang masif (Poin C) akan menghidupkan sektor pendukung di desa, mulai dari bengkel 
                alat mesin pertanian (Poin D), toko saprotan, hingga jasa logistik. Ini akan menekan angka 
                urbanisasi dan menciptakan pusat-pusat pertumbuhan ekonomi baru di luar perkotaan.
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                6.3 Kemandirian dan Reduksi Impor
              </h3>
              <p className="text-gray-700">
                Dengan peningkatan produksi padi dan jagung secara signifikan, Indonesia dapat menghemat cadangan 
                devisa yang selama ini digunakan untuk impor pangan. Devisa tersebut dapat dialokasikan untuk 
                pembangunan industri bernilai tambah tinggi lainnya.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            VII. Tantangan Pelaksanaan dan Psikologi Ekonomi
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Meskipun secara desain kebijakan ini terlihat sempurna, terdapat tantangan besar dalam implementasinya:
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
            <li>
              <strong>Psikologi Adaptasi:</strong> Mengubah cara pikir petani dari tradisional ke digital membutuhkan 
              edukasi berkelanjutan dari penyuluh lapangan
            </li>
            <li>
              <strong>Infrastruktur Data:</strong> Akurasi e-RDKK adalah jantung dari kebijakan ini. Jika data di 
              tingkat desa tidak valid, maka distribusi subsidi pupuk dan asuransi akan mengalami mismatch
            </li>
            <li>
              <strong>Integritas Penyaluran:</strong> Diperlukan pengawasan ketat untuk memastikan tidak ada pemotongan 
              bantuan atau penyelewengan dana KUR di tingkat oknum lapangan
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            VIII. Kesimpulan: Menuju Indonesia sebagai Lumbung Pangan Dunia
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Kebijakan Pemerintah Tahun 2026 yang terangkum dalam Poin A hingga E merupakan sebuah manifesto kemajuan. 
            Kita tidak lagi hanya bicara tentang bertahan hidup, tapi tentang memimpin pasar pangan regional.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6 font-semibold text-lg">
            Sinergi antara ketersediaan lahan yang luas, pupuk yang terjamin, modal yang murah dan melimpah, 
            teknologi yang mutakhir, serta perlindungan risiko yang kuat, akan membawa Indonesia masuk ke era 
            keemasan pertanian.
          </p>

          <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-8 my-10">
            <p className="text-xl text-gray-800 text-center leading-relaxed">
              Inilah saatnya bagi para pemangku kepentingan, dari perbankan hingga petani di pelosok, untuk 
              bergerak dalam satu irama demi mewujudkan <strong>kedaulatan pangan yang abadi</strong>.
            </p>
          </div>

          <div className="bg-slate-100 rounded-xl p-6 my-8 text-sm text-gray-600">
            <p className="font-semibold mb-2">Catatan Akhir:</p>
            <p>
              Laporan ini disusun berdasarkan tinjauan dokumen resmi kebijakan strategis nasional tahun anggaran 2026. 
              Data angka (Rp46,87 T, 9,55 Juta Ton, KUR 6%) adalah parameter acuan resmi untuk tahun berjalan.
            </p>
          </div>
        </div>

        {/* Navigation */}
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
              href="/artikel"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition-colors"
            >
              Baca Artikel Lainnya
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
