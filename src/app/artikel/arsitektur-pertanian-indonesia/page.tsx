import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/json-ld";
import { getArticleBySlug } from "@/data/articles";

export const metadata = {
  title: "Arsitektur Pertanian Indonesia: Transformasi Tradisi & Visi Kedaulatan Pangan | Cakra Pamungkas",
  description:
    "Analisis mendalam evolusi sektor pertanian Indonesia dari era Neolitikum hingga Agritech 4.0. Membahas makroekonomi, Subak Bali, dan swasembada pangan 2024-2025.",
};

export default function ArtikelPage() {
  const article = getArticleBySlug("arsitektur-pertanian-indonesia");

  return (
    <>
      {article && <ArticleJsonLd article={article} />}
      {article && (
        <BreadcrumbJsonLd
          items={[
            { name: "Beranda", href: "/" },
            { name: "Artikel", href: "/artikel" },
            { name: article.title, href: `/artikel/arsitektur-pertanian-indonesia` },
          ]}
        />
      )}
      <article className="bg-white">
      {/* Header */}
      <header className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary-300 hover:text-primary-200 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Kembali ke Beranda</span>
          </Link>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
              FEATURED
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Sejarah Pertanian
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Agritech 4.0
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Petani Milenial
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Arsitektur Pertanian Indonesia: Transformasi Tradisi, Dinamika
            Sosio-Ekonomi, dan Visi Kedaulatan Pangan Modern
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-primary-200">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">11 Februari 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">45 menit baca</span>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative h-[400px] lg:h-[600px] bg-gray-100">
        <Image
          src="/images/desa-petani.png"
          alt="Desa Petani Indonesia - Pertanian Tradisional Modern"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-700 leading-relaxed mb-8">
            Sektor pertanian merupakan fundamen eksistensial bagi bangsa
            Indonesia, yang melampaui sekadar fungsi ekonomi dan bertransformasi
            menjadi identitas kultural serta pilar stabilitas nasional. Sebagai
            negara kepulauan dengan kekayaan vulkanik yang melimpah, Indonesia
            memiliki keunggulan komparatif alami yang memposisikannya sebagai
            salah satu pemain kunci dalam rantai pasok pangan global.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Signifikansi Makroekonomi dan Struktur Ketenagakerjaan Nasional
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Pertanian tetap menjadi kontributor ekonomi terbesar kedua bagi
            Indonesia setelah sektor industri pengolahan. Pada kuartal kedua
            tahun 2025, pertumbuhan sektor ini mencapai puncaknya di angka 13,53
            persen, yang didorong oleh peningkatan produksi tanaman pangan dan
            komoditas perkebunan strategis. Data menunjukkan bahwa pada Februari
            2024, sektor ini menyerap sekitar 28,64 persen dari total 142,18 juta
            penduduk yang bekerja, menjadikannya penyedia lapangan kerja terbesar
            di tanah air.
          </p>

          <div className="bg-primary-50 border-l-4 border-primary-600 p-6 my-8">
            <p className="text-gray-800 font-medium mb-2">
              💡 Fakta Penting
            </p>
            <p className="text-gray-700">
              Sektor pertanian berkontribusi <strong>12-14%</strong> terhadap PDB
              nasional dan menyerap <strong>28,64%</strong> tenaga kerja Indonesia.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Evolusi Sejarah: Narasi Adaptasi dan Transformasi Peradaban
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Perkembangan pertanian di Indonesia merupakan narasi panjang tentang
            adaptasi manusia terhadap alam yang dimulai sekitar 7.000 hingga
            10.000 tahun yang lalu pada zaman Neolitikum. Sejarah mencatat bahwa
            domestikasi tanaman pertama kali dilakukan melalui pengamatan
            sederhana terhadap benih-benih yang tumbuh secara alami di sekitar
            pemukiman purba.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Era Kolonial: Komodifikasi dan Disrupsi Struktural
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Memasuki abad ke-17, sistem pertanian Indonesia mengalami disrupsi
            besar dengan kedatangan kekuatan kolonial, terutama melalui VOC dan
            kemudian kebijakan Cultuurstelsel (Tanam Paksa). Pada fase ini,
            orientasi pertanian bergeser dari pemenuhan kebutuhan subsisten
            masyarakat lokal menjadi eksploitasi komoditas ekspor untuk pasar
            Eropa, seperti kopi, teh, tebu, dan karet.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Komoditas Unggulan: Harta Karun Strategis di Pasar Global
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Indonesia memegang posisi dominan untuk beberapa komoditas tropis di
            pasar internasional, yang menjadikannya pilar utama ekspor nasional.
            Sektor perkebunan mencatatkan performa luar biasa, terutama pada
            tahun 2024, di mana permintaan global tetap stabil meskipun terjadi
            dinamika ekonomi dunia.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                ☕ Kopi
              </h4>
              <p className="text-3xl font-bold text-primary-600 mb-2">
                US$1,62 M
              </p>
              <p className="text-sm text-gray-600">
                Nilai ekspor 2024 - Primadona pasar global
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                🌾 Produksi Beras
              </h4>
              <p className="text-3xl font-bold text-primary-600 mb-2">
                34,71 Jt Ton
              </p>
              <p className="text-sm text-gray-600">
                Rekor produksi 2025 - Swasembada tercapai
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Masyarakat dan Kearifan Lokal: Filosofi Keberlanjutan Tradisional
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Pertanian di Indonesia bukan sekadar aktivitas ekonomi, melainkan
            manifestasi dari hubungan spiritual dan harmoni sosial. Berbagai
            daerah memiliki sistem pengelolaan sumber daya alam berbasis
            komunitas yang telah teruji selama berabad-abad sebagai praktik
            pertanian berkelanjutan.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Subak: Harmonisasi Tri Hita Karana di Bali
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Sistem irigasi Subak merupakan contoh kecanggihan tata kelola air
            tradisional yang telah diakui UNESCO sebagai Warisan Budaya Dunia.
            Berlandaskan filosofi "Tri Hita Karana", Subak mengatur hubungan
            antara manusia dengan Tuhan (Parahyangan), manusia dengan sesamanya
            (Pawongan), dan manusia dengan alam (Palemahan).
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Agroteknologi dan Revolusi Digital: Menuju Pertanian 4.0
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Menghadapi tantangan perubahan iklim dan krisis regenerasi petani,
            Indonesia kini melakukan akselerasi dalam pengadopsian teknologi
            pertanian pintar (smart farming). Penggunaan teknologi digital
            diharapkan dapat meningkatkan efisiensi penggunaan sumber daya serta
            memitigasi risiko kegagalan panen.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl p-8 my-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              🚁 Teknologi Modern dalam Pertanian
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary-600">✓</span>
                <span className="text-gray-700">
                  <strong>Drone Sprayer:</strong> Penyemprotan 5x lebih cepat
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600">✓</span>
                <span className="text-gray-700">
                  <strong>Sensor IoT:</strong> Hemat air & pupuk hingga 30%
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600">✓</span>
                <span className="text-gray-700">
                  <strong>AI Monitoring:</strong> Deteksi dini hama & penyakit
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600">✓</span>
                <span className="text-gray-700">
                  <strong>Satelit:</strong> Monitoring kesehatan tanaman real-time
                </span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Regenerasi dan Paradigma Petani Milenial
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Salah satu ancaman terbesar bagi kedaulatan pangan adalah penurunan
            minat generasi muda untuk terjun ke sektor pertanian. Namun, sejak
            tahun 2024, mulai terlihat pergeseran paradigma yang signifikan di
            kalangan milenial dan Gen Z. Munculnya sosok-sosok sukses beromzet
            miliaran rupiah telah mengubah pandangan anak muda terhadap pertanian.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Menteri Pertanian mencatat saat ini sudah ada sekitar{" "}
            <strong>300.000 petani milenial</strong> yang aktif, dengan beberapa
            di antaranya meraih omzet hingga Rp10 miliar per tahun melalui
            pengelolaan ekosistem usaha dari hulu hingga hilir.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Kebijakan Strategis Pemerintah 2024-2025
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Di bawah kepemimpinan Presiden Prabowo Subianto, pemerintah Indonesia
            menetapkan target ambisius untuk mencapai swasembada pangan dalam
            waktu sesingkat-singkatnya. Visi "Asta Cita" menempatkan kemandirian
            pangan sebagai prioritas utama untuk melindungi rakyat dari ancaman
            krisis pangan global dan perang dagang dunia.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8">
            <h4 className="font-bold text-gray-900 mb-2">
              📊 Program Strategis 2025
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Anggaran: <strong>Rp139,4 triliun</strong></li>
              <li>• Target: Cetak sawah <strong>3 juta hektar</strong></li>
              <li>• Subsidi pupuk: <strong>9,03 juta ton</strong></li>
              <li>• Alsintan: <strong>1,14 juta unit</strong></li>
              <li>• Hilirisasi: <strong>13 komoditas strategis</strong></li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Kesimpulan: Arsitektur Masa Depan Pertanian Indonesia
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Pertanian Indonesia kini sedang berada pada titik balik transformasi
            yang krusial. Dari sistem tradisional yang sarat akan kearifan lokal,
            sektor ini sedang bermigrasi menuju model industri modern berbasis
            teknologi digital dan hilirisasi yang inklusif.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Ke depan, resiliensi pertanian Indonesia akan sangat bergantung pada
            kemampuan untuk mengintegrasikan pengetahuan leluhur dengan
            kecanggihan agroteknologi 4.0. Hilirisasi komoditas tropis bukan
            sekadar strategi ekonomi, melainkan jalan menuju kedaulatan bangsa
            yang mandiri, sejahtera, dan berpengaruh di kancah internasional.
          </p>

          <p className="text-gray-700 leading-relaxed font-semibold">
            Dengan menjaga keselarasan antara manusia, alam, dan kemajuan ilmu
            pengetahuan, Indonesia tidak hanya akan mampu memberi makan rakyatnya
            sendiri, tetapi juga menjadi penentu stabilitas pangan global di masa
            depan.
          </p>
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-medium rounded-xl hover:bg-primary-700 transition-colors"
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
