import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { ArticleJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/json-ld";
import { getArticleBySlug } from "@/data/articles";
import { articleFaqs } from "@/data/article-faqs";

export const metadata = {
  title: "Petani Milenial: Omzet Miliaran dari Agribisnis Modern | Cakra Pamungkas",
  description:
    "Lebih dari 300.000 petani milenial Indonesia membuktikan bahwa pertanian bisa menghasilkan omzet miliaran. Pelajari strategi, model bisnis, dan tips memulai agribisnis modern.",
};

export default function PetaniMilenialArtikelPage() {
  const article = getArticleBySlug("petani-milenial");

  return (
    <>
      {article && <ArticleJsonLd article={article} />}
      {article && (
        <BreadcrumbJsonLd
          items={[
            { name: "Beranda", href: "/" },
            { name: "Artikel", href: "/artikel" },
            { name: article.title, href: `/artikel/petani-milenial` },
          ]}
        />
      )}
      <FaqJsonLd faqs={articleFaqs["petani-milenial"] || []} />
      <article className="bg-white">
      {/* Header */}
      <header className="bg-gradient-to-br from-green-950 via-green-900 to-emerald-800 py-12 lg:py-20">
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
              EKONOMI
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Petani Milenial
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Agribisnis
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Ekonomi Pertanian
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Startup Agri
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Petani Milenial: Omzet Miliaran dari Agribisnis Modern
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-green-200">
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

      {/* Featured Image */}
      <div className="relative h-[400px] lg:h-[600px] bg-gray-100">
        <Image
          src="/images/petani-milenial-300ribu.png"
          alt="Petani Milenial Modern Indonesia - Agribisnis Miliaran Rupiah"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-700 leading-relaxed mb-8">
            Stigma lama bahwa pertanian adalah profesi yang kotor, melelahkan,
            dan tidak menguntungkan kini perlahan sirna. Lebih dari 300.000
            petani milenial di Indonesia telah membuktikan bahwa agribisnis
            modern bisa menghasilkan omzet miliaran rupiah per tahun. Dengan
            sentuhan teknologi, kreativitas pemasaran, dan manajemen bisnis yang
            profesional, generasi muda ini sedang menulis ulang narasi pertanian
            Indonesia.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Fenomena 300.000 Petani Milenial Indonesia
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Data Badan Pusat Statistik (BPS) mencatat bahwa jumlah petani muda
            berusia 20-39 tahun di Indonesia terus meningkat dalam lima tahun
            terakhir. Dari sekitar 200.000 pada tahun 2021, angka tersebut
            melonjak menjadi lebih dari 300.000 pada awal 2026. Fenomena ini
            didorong oleh beberapa faktor utama: meningkatnya kesadaran akan
            potensi ekonomi sektor pertanian, kemudahan akses teknologi dan
            informasi, serta dukungan pemerintah melalui berbagai program
            pemberdayaan petani muda.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Berbeda dengan generasi sebelumnya yang mengandalkan metode
            tradisional, petani milenial cenderung mengadopsi pendekatan
            berbasis data dan teknologi. Mereka tidak hanya menanam dan
            memanen, tetapi juga membangun brand, mengelola rantai pasok
            digital, dan memanfaatkan media sosial untuk pemasaran. Hasilnya,
            banyak dari mereka yang berhasil meraih omzet ratusan juta bahkan
            miliaran rupiah per tahun.
          </p>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
            <p className="text-gray-800 font-medium mb-2">
              Fakta Menarik Petani Milenial Indonesia
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>300.000+ petani milenial aktif di seluruh Indonesia pada 2026</li>
              <li>65% dari mereka memiliki latar belakang pendidikan tinggi (S1/D3)</li>
              <li>Rata-rata omzet petani milenial 3-5x lebih tinggi dari petani konvensional</li>
              <li>78% memanfaatkan media sosial sebagai kanal pemasaran utama</li>
              <li>40% menjalankan model bisnis direct-to-consumer (D2C)</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Profil Petani Muda Sukses dan Strategi Mereka
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Keberhasilan petani milenial bukan sekadar keberuntungan. Di balik
            omzet miliaran yang mereka raih, terdapat strategi bisnis yang
            matang dan eksekusi yang konsisten. Berikut adalah beberapa profil
            dan pola strategi yang umum ditemukan di kalangan petani muda sukses
            Indonesia.
          </p>

          <div className="space-y-6 my-8">
            <div className="border-l-4 border-green-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Petani Hortikultura Premium
              </h4>
              <p className="text-gray-700 mb-3">
                Banyak petani milenial yang fokus pada budidaya hortikultura
                premium seperti selada hidroponik, microgreens, tomat cherry,
                stroberi, dan edible flowers. Mereka menyasar segmen pasar
                menengah ke atas seperti hotel, restoran, kafe, dan supermarket
                premium. Dengan sistem hidroponik atau aquaponik, mereka mampu
                memproduksi sayuran berkualitas tinggi sepanjang tahun tanpa
                bergantung pada musim.
              </p>
              <p className="text-sm text-gray-600">
                Potensi omzet: Rp50-200 juta/bulan untuk lahan 1.000-3.000 m2
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Agripreneur Komoditas Ekspor
              </h4>
              <p className="text-gray-700 mb-3">
                Segmen lain yang menarik minat petani milenial adalah komoditas
                ekspor seperti kopi spesialti, kakao fermentasi, vanilla,
                rempah-rempah organik, dan buah-buahan tropis. Mereka
                mengembangkan kualitas produk sesuai standar internasional,
                membangun traceability system, dan memasarkan langsung ke buyer
                luar negeri melalui platform digital.
              </p>
              <p className="text-sm text-gray-600">
                Potensi omzet: Rp100-500 juta/bulan untuk skala menengah
              </p>
            </div>

            <div className="border-l-4 border-teal-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Peternak Modern dan Integrated Farming
              </h4>
              <p className="text-gray-700 mb-3">
                Tidak sedikit petani milenial yang mengembangkan integrated
                farming system, menggabungkan budidaya tanaman dengan
                peternakan. Misalnya, kombinasi peternakan ayam petelur dengan
                budidaya sayuran organik yang menggunakan pupuk dari kotoran
                ternak. Pendekatan sirkular ini meningkatkan efisiensi dan
                mengurangi biaya produksi secara signifikan.
              </p>
              <p className="text-sm text-gray-600">
                Potensi omzet: Rp80-300 juta/bulan untuk farm terintegrasi
              </p>
            </div>

            <div className="border-l-4 border-lime-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Urban Farmer dan Vertical Farming
              </h4>
              <p className="text-gray-700 mb-3">
                Di kota-kota besar seperti Jakarta, Surabaya, dan Bandung,
                petani milenial memanfaatkan lahan terbatas dengan konsep
                vertical farming dan rooftop farming. Mereka membudidayakan
                sayuran premium di gedung-gedung perkotaan menggunakan teknologi
                LED grow light dan sistem NFT (Nutrient Film Technique). Target
                pasar mereka adalah konsumen urban yang menghargai produk
                segar dan lokal.
              </p>
              <p className="text-sm text-gray-600">
                Potensi omzet: Rp30-100 juta/bulan untuk skala urban farm
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Model Agribisnis Modern yang Menghasilkan Miliaran
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Salah satu kunci keberhasilan petani milenial adalah kemampuan
            mereka dalam membangun model bisnis yang inovatif. Mereka tidak
            sekadar menjual hasil panen mentah ke tengkulak, melainkan
            menciptakan nilai tambah melalui berbagai pendekatan bisnis modern.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            E-Commerce dan Marketplace Pertanian
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Platform e-commerce telah membuka akses pasar yang lebih luas bagi
            petani. Melalui marketplace seperti Tokopedia, Shopee, dan platform
            khusus pertanian seperti TaniHub dan SayurBox, petani milenial
            dapat menjual produk mereka langsung ke konsumen akhir tanpa melalui
            rantai distribusi panjang yang menggerus margin keuntungan. Beberapa
            petani bahkan membangun website dan aplikasi sendiri untuk penjualan
            langsung.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Direct-to-Consumer (D2C)
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Model penjualan langsung ke konsumen melalui platform digital,
                memotong rantai distribusi dan meningkatkan margin keuntungan.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Margin keuntungan 40-60% lebih tinggi</li>
                <li>Kontrol penuh atas branding dan pricing</li>
                <li>Hubungan langsung dengan pelanggan</li>
                <li>Data konsumen untuk pengembangan produk</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Subscription Box
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Model langganan mingguan atau bulanan untuk pengiriman produk
                segar langsung ke rumah pelanggan secara rutin.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Pendapatan berulang (recurring revenue)</li>
                <li>Perencanaan produksi lebih terukur</li>
                <li>Customer retention rate tinggi (70-85%)</li>
                <li>Mengurangi food waste secara signifikan</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                B2B (Business-to-Business)
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Memasok langsung ke hotel, restoran, kafe (HOREKA), katering,
                dan supermarket dengan kontrak jangka panjang.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Volume pesanan besar dan stabil</li>
                <li>Harga kontrak yang terjamin</li>
                <li>Cashflow lebih terperediksikan</li>
                <li>Peluang scaling bisnis lebih cepat</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Value-Added Products
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Mengolah hasil panen menjadi produk bernilai tambah tinggi
                seperti jus, keripik, sambal, atau produk kecantikan berbasis
                herbal.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Margin keuntungan 3-10x lipat</li>
                <li>Shelf life lebih panjang</li>
                <li>Diversifikasi sumber pendapatan</li>
                <li>Brand equity yang lebih kuat</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Social Media Marketing untuk Agribisnis
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Media sosial menjadi senjata utama petani milenial dalam membangun
            brand dan menjangkau pelanggan. Instagram, TikTok, dan YouTube
            menjadi platform favorit untuk menampilkan proses budidaya, edukasi
            pertanian, dan promosi produk. Konten behind-the-scenes dari kebun,
            tutorial menanam, dan cerita inspiratif tentang perjalanan usaha
            tani menjadi magnet yang menarik ribuan bahkan jutaan pengikut.
          </p>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 my-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Strategi Konten yang Efektif di Media Sosial
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  1. Storytelling Autentik
                </p>
                <p className="text-sm text-gray-600">
                  Bagikan perjalanan nyata dari lahan hingga meja makan.
                  Konsumen modern menghargai transparansi dan cerita di balik
                  produk yang mereka beli.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  2. Edukasi dan Tutorial
                </p>
                <p className="text-sm text-gray-600">
                  Konten edukasi seperti cara menanam, tips memilih sayuran
                  segar, dan manfaat pangan organik membangun trust dan
                  authority.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  3. Video Singkat dan Reels
                </p>
                <p className="text-sm text-gray-600">
                  Format video pendek di TikTok dan Instagram Reels sangat
                  efektif untuk menjangkau audiens muda dan viral secara
                  organik.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  4. Kolaborasi dengan Influencer
                </p>
                <p className="text-sm text-gray-600">
                  Bekerja sama dengan food blogger, chef, dan lifestyle
                  influencer untuk memperluas jangkauan pasar dan membangun
                  kredibilitas.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Potensi Pendapatan dan Model Bisnis
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Pertanyaan yang paling sering ditanyakan calon petani milenial
            adalah: berapa sebenarnya potensi penghasilan dari agribisnis
            modern? Jawabannya bervariasi tergantung pada jenis komoditas,
            skala usaha, dan model bisnis yang dipilih. Namun, data dari
            berbagai sumber menunjukkan bahwa agribisnis modern menawarkan
            potensi pendapatan yang sangat menjanjikan.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Jenis Agribisnis
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Modal Awal
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Omzet/Bulan
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    ROI
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Hidroponik Sayuran Premium</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Rp50-150 juta</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp30-100 juta
                  </td>
                  <td className="px-6 py-4 text-sm text-green-600 font-semibold">
                    6-12 bulan
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Kopi Spesialti</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Rp100-300 juta</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp80-250 juta
                  </td>
                  <td className="px-6 py-4 text-sm text-green-600 font-semibold">
                    12-24 bulan
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Peternakan Ayam Organik</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Rp200-500 juta</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp150-400 juta
                  </td>
                  <td className="px-6 py-4 text-sm text-green-600 font-semibold">
                    12-18 bulan
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Urban Vertical Farm</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Rp80-200 juta</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp40-120 juta
                  </td>
                  <td className="px-6 py-4 text-sm text-green-600 font-semibold">
                    8-15 bulan
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Buah-buahan Ekspor</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Rp300-700 juta</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp200-600 juta
                  </td>
                  <td className="px-6 py-4 text-sm text-green-600 font-semibold">
                    18-36 bulan
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Produk Olahan Pertanian</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Rp30-100 juta</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp20-80 juta
                  </td>
                  <td className="px-6 py-4 text-sm text-green-600 font-semibold">
                    4-8 bulan
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Perlu dicatat bahwa angka-angka di atas merupakan estimasi untuk
            skala usaha menengah yang sudah berjalan stabil. Pada tahap awal,
            petani milenial perlu mempersiapkan modal kerja tambahan dan
            memperhitungkan masa inkubasi di mana pendapatan belum stabil.
            Namun dengan perencanaan yang matang dan eksekusi yang konsisten,
            potensi pertumbuhan sangat menjanjikan.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Adopsi Teknologi oleh Petani Muda
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Keunggulan kompetitif utama petani milenial dibanding generasi
            sebelumnya terletak pada kemampuan mereka mengadopsi dan
            memanfaatkan teknologi. Dari precision farming hingga manajemen
            bisnis digital, teknologi menjadi tulang punggung agribisnis
            modern.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Teknologi yang Diadopsi Petani Milenial
          </h3>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gradient-to-br from-green-50 to-lime-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Sistem Irigasi Otomatis
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Sistem irigasi berbasis sensor dan timer yang mengatur
                penyiraman secara otomatis berdasarkan kondisi kelembaban
                tanah dan cuaca.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Hemat air hingga 40% dibanding manual</li>
                <li>Konsistensi penyiraman terjaga</li>
                <li>Monitoring jarak jauh via smartphone</li>
                <li>Integrasi dengan data cuaca lokal</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Aplikasi Manajemen Farm
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Aplikasi mobile untuk mencatat aktivitas harian, mengelola
                inventaris, memantau pertumbuhan tanaman, dan menganalisis
                kinerja farm.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Pencatatan digital aktivitas budidaya</li>
                <li>Tracking biaya dan pendapatan real-time</li>
                <li>Reminder jadwal pemupukan dan panen</li>
                <li>Laporan analitik performa per musim</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                E-Commerce dan Payment Digital
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Platform penjualan online dan sistem pembayaran digital yang
                memudahkan transaksi dan memperluas jangkauan pasar.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Toko online di multiple marketplace</li>
                <li>Pembayaran cashless (QRIS, e-wallet)</li>
                <li>Sistem pre-order untuk produk segar</li>
                <li>Logistik terintegrasi (same-day delivery)</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Greenhouse dan Climate Control
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Sistem greenhouse modern dengan pengaturan suhu, kelembaban,
                dan pencahayaan otomatis untuk kondisi pertumbuhan optimal.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Kontrol iklim mikro untuk kualitas optimal</li>
                <li>Produksi sepanjang tahun tanpa musim</li>
                <li>Perlindungan dari hama dan cuaca ekstrem</li>
                <li>Efisiensi penggunaan pupuk dan air</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Platform Digital yang Mendukung Petani Milenial
          </h3>

          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8">
            <h4 className="font-bold text-gray-900 mb-3">
              Ekosistem Digital Agribisnis Indonesia
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-gray-900">TaniHub / TaniFund</p>
                <p className="text-gray-600">Marketplace dan pendanaan pertanian</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">SayurBox</p>
                <p className="text-gray-600">Penjualan sayuran segar D2C</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">iGrow</p>
                <p className="text-gray-600">Crowdfunding dan investasi agri</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Crowde</p>
                <p className="text-gray-600">Peer-to-peer lending untuk petani</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Pak Tani Digital</p>
                <p className="text-gray-600">Edukasi dan komunitas petani online</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">8villages</p>
                <p className="text-gray-600">Platform informasi budidaya tanaman</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Tantangan yang Dihadapi Petani Milenial
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Meskipun prospek agribisnis modern sangat cerah, petani milenial
            tetap menghadapi berbagai tantangan yang tidak bisa diabaikan.
            Memahami tantangan ini penting agar calon petani muda bisa
            mempersiapkan diri dengan lebih baik.
          </p>

          <ul className="space-y-4 my-6">
            <li className="flex items-start gap-3">
              <span className="text-red-500 text-xl">!</span>
              <div>
                <strong className="text-gray-900">Akses Modal dan Pembiayaan</strong>
                <p className="text-gray-600 text-sm">
                  Lembaga keuangan masih menganggap pertanian sebagai sektor
                  berisiko tinggi. Petani muda tanpa aset jaminan sering
                  kesulitan mendapatkan kredit usaha. Bunga pinjaman untuk
                  sektor pertanian juga cenderung lebih tinggi dibanding
                  sektor lainnya.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 text-xl">!</span>
              <div>
                <strong className="text-gray-900">Keterbatasan Akses Lahan</strong>
                <p className="text-gray-600 text-sm">
                  Harga lahan yang terus meningkat membuat petani muda sulit
                  memiliki lahan sendiri. Banyak yang harus menyewa lahan
                  dengan biaya tinggi, yang menggerus margin keuntungan.
                  Konversi lahan pertanian menjadi permukiman juga memperburuk
                  situasi ini.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 text-xl">!</span>
              <div>
                <strong className="text-gray-900">Fluktuasi Harga Komoditas</strong>
                <p className="text-gray-600 text-sm">
                  Harga hasil pertanian yang tidak stabil menjadi risiko
                  utama. Saat panen raya, harga bisa anjlok drastis, sementara
                  saat paceklik, harga input produksi justru melonjak.
                  Ketidakpastian ini membuat perencanaan bisnis menjadi
                  lebih menantang.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 text-xl">!</span>
              <div>
                <strong className="text-gray-900">Perubahan Iklim dan Risiko Cuaca</strong>
                <p className="text-gray-600 text-sm">
                  Pola cuaca yang semakin tidak menentu akibat perubahan iklim
                  meningkatkan risiko gagal panen. Banjir, kekeringan, dan
                  serangan hama yang semakin intens menjadi ancaman nyata bagi
                  keberlanjutan usaha tani.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 text-xl">!</span>
              <div>
                <strong className="text-gray-900">Stigma Sosial terhadap Profesi Petani</strong>
                <p className="text-gray-600 text-sm">
                  Masyarakat masih memandang rendah profesi petani. Banyak
                  orang tua yang tidak merestui anaknya untuk bertani, padahal
                  potensi ekonominya sangat besar. Stigma ini membuat banyak
                  anak muda enggan terjun ke dunia pertanian.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 text-xl">!</span>
              <div>
                <strong className="text-gray-900">Infrastruktur Logistik yang Belum Merata</strong>
                <p className="text-gray-600 text-sm">
                  Sistem cold chain dan logistik pertanian di Indonesia masih
                  belum memadai, terutama di luar Jawa. Hal ini menyebabkan
                  tingginya angka food loss dan terbatasnya jangkauan pasar
                  untuk produk segar.
                </p>
              </div>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Dukungan Pemerintah dan Program untuk Petani Muda
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Pemerintah Indonesia menyadari pentingnya regenerasi petani dan
            telah meluncurkan berbagai program untuk mendukung petani milenial.
            Program-program ini mencakup bantuan permodalan, pelatihan
            keterampilan, akses teknologi, dan pendampingan usaha.
          </p>

          <div className="bg-green-50 rounded-xl p-6 my-6">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">&#10003;</span>
                <div>
                  <strong>Program Petani Milenial Kementan:</strong> Program
                  flagship Kementerian Pertanian yang menyasar 6.000 petani
                  muda per tahun. Meliputi pelatihan teknis budidaya,
                  manajemen bisnis, dan pemasaran digital. Peserta juga
                  mendapat akses ke lahan praktik dan modal awal usaha.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">&#10003;</span>
                <div>
                  <strong>Kredit Usaha Rakyat (KUR) Pertanian:</strong> Pinjaman
                  dengan bunga subsidi 3-6% per tahun untuk usaha pertanian.
                  Plafon hingga Rp500 juta untuk KUR Kecil dan Rp10 miliar
                  untuk KUR besar. Proses pengajuan semakin dipermudah melalui
                  digitalisasi.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">&#10003;</span>
                <div>
                  <strong>Asuransi Usaha Tani Padi (AUTP):</strong> Program
                  asuransi bersubsidi yang memberikan ganti rugi kepada
                  petani apabila mengalami gagal panen akibat banjir,
                  kekeringan, atau serangan organisme pengganggu tanaman.
                  Premi hanya Rp36.000 per hektare per musim tanam.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">&#10003;</span>
                <div>
                  <strong>Program Kostratani (Komando Strategis Pembangunan
                  Pertanian):</strong> Sistem pendampingan petani berbasis
                  kecamatan yang mengintegrasikan penyuluh pertanian dengan
                  teknologi informasi. Petani muda mendapat akses ke data
                  pasar, rekomendasi budidaya, dan jaringan kelembagaan.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">&#10003;</span>
                <div>
                  <strong>Bantuan Alat dan Mesin Pertanian (Alsintan):</strong>{" "}
                  Program subsidi alat pertanian modern seperti traktor,
                  pompa air, greenhouse kit, dan peralatan pascapanen. Kelompok
                  tani milenial mendapat prioritas dalam distribusi bantuan.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">&#10003;</span>
                <div>
                  <strong>Inkubator Bisnis Pertanian:</strong> Kerjasama antara
                  Kementan, perguruan tinggi, dan sektor swasta dalam
                  menyediakan program inkubasi bagi startup agribisnis.
                  Program ini menawarkan mentoring, co-working space,
                  akses ke investor, dan jaringan bisnis.
                </div>
              </li>
            </ul>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Selain program pemerintah pusat, banyak pemerintah daerah yang
            juga memiliki program khusus untuk petani muda. Daerah seperti
            Jawa Barat, Jawa Tengah, Bali, dan Sulawesi Selatan termasuk
            provinsi yang paling aktif mendukung regenerasi petani melalui
            berbagai inisiatif lokal, mulai dari pemberian lahan kelola hingga
            penyelenggaraan kompetisi agribisnis muda.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Tips Memulai Agribisnis untuk Generasi Muda
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Bagi anak muda yang tertarik terjun ke dunia agribisnis, berikut
            adalah panduan langkah demi langkah yang dapat membantu memulai
            perjalanan menjadi petani milenial yang sukses.
          </p>

          <div className="space-y-6 my-8">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Langkah 1: Riset Pasar dan Pemilihan Komoditas
              </h4>
              <p className="text-gray-700 mb-3">
                Jangan langsung menanam tanpa riset. Pelajari kebutuhan pasar
                di daerah Anda, identifikasi komoditas yang memiliki permintaan
                tinggi namun pasokan terbatas, dan analisis kompetitor yang
                sudah ada. Pilih komoditas yang sesuai dengan kondisi agroklimat
                setempat dan kemampuan modal Anda.
              </p>
              <p className="text-sm text-green-700 font-medium">
                Tips: Mulai dari komoditas dengan siklus panen pendek (30-60
                hari) agar cepat mendapat cashflow.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Langkah 2: Susun Business Plan yang Komprehensif
              </h4>
              <p className="text-gray-700 mb-3">
                Buat rencana bisnis yang mencakup analisis SWOT, proyeksi
                keuangan, strategi pemasaran, rencana operasional, dan exit
                strategy. Business plan yang solid tidak hanya membantu Anda
                tetap fokus, tetapi juga diperlukan jika Anda ingin mengajukan
                pinjaman atau menarik investor.
              </p>
              <p className="text-sm text-green-700 font-medium">
                Tips: Gunakan template business plan dari Kementan atau
                inkubator bisnis pertanian.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Langkah 3: Mulai dari Skala Kecil dan Belajar
              </h4>
              <p className="text-gray-700 mb-3">
                Jangan langsung investasi besar di awal. Mulailah dari skala
                kecil untuk mempelajari seluk-beluk budidaya, memahami karakter
                tanaman atau ternak, dan menguji pasar. Gunakan fase ini untuk
                mengasah keterampilan teknis dan membangun jaringan.
              </p>
              <p className="text-sm text-green-700 font-medium">
                Tips: Manfaatkan lahan pekarangan atau sewa lahan kecil untuk
                eksperimen awal.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Langkah 4: Bangun Brand dan Kehadiran Digital
              </h4>
              <p className="text-gray-700 mb-3">
                Dari hari pertama, mulailah membangun brand agribisnis Anda.
                Buat akun media sosial, dokumentasikan perjalanan Anda, dan
                bangun komunitas pengikut. Branding yang kuat akan menjadi
                aset jangka panjang yang membedakan produk Anda dari kompetitor.
              </p>
              <p className="text-sm text-green-700 font-medium">
                Tips: Konsisten posting minimal 3-5 kali seminggu dengan
                konten yang autentik dan edukatif.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Langkah 5: Bergabung dengan Komunitas dan Jaringan
              </h4>
              <p className="text-gray-700 mb-3">
                Jangan bekerja sendirian. Bergabunglah dengan kelompok tani
                milenial, komunitas agribisnis online, dan asosiasi petani
                muda. Jaringan ini akan membantu Anda belajar dari pengalaman
                orang lain, mendapat akses ke pasar, dan menemukan peluang
                kolaborasi.
              </p>
              <p className="text-sm text-green-700 font-medium">
                Tips: Ikuti kegiatan KTNA (Kontak Tani Nelayan Andalan),
                HKTI, atau komunitas pertanian di Telegram dan WhatsApp.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Langkah 6: Diversifikasi dan Scale Up
              </h4>
              <p className="text-gray-700 mb-3">
                Setelah bisnis berjalan stabil, mulailah memikirkan
                diversifikasi produk dan ekspansi skala. Tambahkan variasi
                komoditas, kembangkan produk olahan, atau perluas area
                pemasaran. Pertimbangkan juga untuk membangun kemitraan
                strategis dengan petani lain atau pelaku usaha di sepanjang
                rantai nilai.
              </p>
              <p className="text-sm text-green-700 font-medium">
                Tips: Reinvestasikan minimal 30-40% dari profit untuk
                pengembangan usaha secara berkelanjutan.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Kesimpulan: Masa Depan Cerah Petani Milenial Indonesia
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Gelombang petani milenial di Indonesia bukan sekadar tren sesaat,
            melainkan sebuah gerakan transformasi yang sedang mengubah wajah
            pertanian nasional. Dengan menggabungkan kearifan lokal dengan
            teknologi modern, kreativitas pemasaran digital, dan semangat
            kewirausahaan, generasi muda ini membuktikan bahwa pertanian bisa
            menjadi pilihan karier yang prestisius dan menguntungkan.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Data menunjukkan bahwa petani milenial yang mengadopsi pendekatan
            agribisnis modern mampu menghasilkan omzet 3-5 kali lipat
            dibanding petani konvensional. Mereka tidak hanya menghasilkan
            pangan, tetapi juga menciptakan lapangan kerja, menggerakkan
            ekonomi pedesaan, dan berkontribusi pada ketahanan pangan
            nasional. Keberhasilan mereka menginspirasi semakin banyak anak
            muda untuk kembali ke desa dan membangun agribisnis.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Namun, transformasi ini tidak bisa terjadi secara mandiri.
            Diperlukan ekosistem yang mendukung: kebijakan pemerintah yang
            pro-petani muda, akses permodalan yang lebih mudah, infrastruktur
            digital dan logistik yang memadai, serta perubahan paradigma
            masyarakat tentang profesi petani. Ketika semua elemen ini bersinergi,
            Indonesia berpotensi menjadi kekuatan agribisnis global yang
            dipimpin oleh generasi muda yang inovatif dan berdaya saing.
          </p>

          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl p-8 my-12">
            <p className="text-xl font-bold mb-3">
              Saatnya Generasi Muda Bertani!
            </p>
            <p className="text-green-100">
              Jika Anda adalah anak muda yang memiliki ketertarikan terhadap
              pertanian, jangan ragu untuk memulai langkah pertama. Riset pasar,
              belajar dari petani sukses, mulai dari skala kecil, dan terus
              berinovasi. Masa depan pertanian Indonesia ada di tangan generasi
              milenial yang berani bermimpi besar dan bertindak nyata. Jadilah
              bagian dari 300.000+ petani milenial yang sedang mengubah wajah
              pertanian Indonesia.
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
    </>
  );
}
