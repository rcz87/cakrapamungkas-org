import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export const metadata = {
  title: "Ekspor Kopi Indonesia: US$1,62 Miliar di Pasar Global | Cakra Pamungkas",
  description:
    "Indonesia sebagai produsen kopi terbesar ke-4 dunia mencatatkan ekspor US$1,62 miliar. Panduan lengkap jenis kopi, asal daerah, pasar spesialti, strategi branding, dan peluang petani kopi Indonesia di pasar global.",
};

export default function EksporKopiIndonesiaArtikelPage() {
  return (
    <article className="bg-white">
      {/* Header */}
      <header className="bg-gradient-to-br from-orange-950 via-orange-900 to-amber-800 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-orange-300 hover:text-orange-200 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Kembali ke Beranda</span>
          </Link>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-orange-600 text-white text-xs font-semibold rounded-full">
              KOMODITAS
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Kopi Indonesia
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Ekspor Komoditas
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Kopi Spesialti
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Pasar Global
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Ekspor Kopi Indonesia: US$1,62 Miliar di Pasar Global
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-orange-200">
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

      {/* Featured Image */}
      <div className="relative h-[400px] lg:h-[600px] bg-gray-100">
        <Image
          src="/images/kopi.png"
          alt="Ekspor Kopi Indonesia - Kopi Spesialti Premium"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-700 leading-relaxed mb-8">
            Indonesia merupakan produsen kopi terbesar keempat di dunia setelah
            Brasil, Vietnam, dan Kolombia. Dengan luas lahan perkebunan kopi
            mencapai 1,24 juta hektar dan produksi tahunan sekitar 774 ribu ton,
            kopi Indonesia telah menjadi komoditas unggulan yang menembus pasar
            global dengan nilai ekspor mencapai US$1,62 miliar. Keunikan cita rasa
            kopi Nusantara yang berasal dari berbagai terroir dan metode pengolahan
            tradisional menjadikannya primadona di kalangan penikmat kopi dunia.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Indonesia: Raksasa Kopi Keempat Dunia
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Sejarah kopi Indonesia dimulai sejak era kolonial Belanda pada abad
            ke-17, ketika tanaman kopi pertama kali dibawa ke Pulau Jawa. Sejak
            saat itu, kopi telah menjadi bagian tak terpisahkan dari kehidupan
            sosial, budaya, dan ekonomi masyarakat Indonesia. Hari ini, lebih dari
            2 juta keluarga petani menggantungkan penghidupan mereka pada budidaya
            kopi yang tersebar di 34 provinsi.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Posisi Indonesia sebagai produsen kopi keempat terbesar dunia bukan
            sekadar angka statistik. Di balik peringkat tersebut terdapat
            keragaman varietas, ketinggian tanam, iklim mikro, dan tradisi
            pengolahan yang menghasilkan profil rasa yang tidak ditemukan di negara
            penghasil kopi manapun. Dari Sabang hingga Merauke, setiap daerah
            memiliki karakter kopi yang unik dan khas.
          </p>

          <div className="bg-orange-50 border-l-4 border-orange-600 p-6 my-8">
            <p className="text-gray-800 font-medium mb-2">
              Fakta Kunci Kopi Indonesia
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Produsen kopi terbesar ke-4 dunia dengan produksi 774 ribu ton/tahun</li>
              <li>Luas perkebunan kopi mencapai 1,24 juta hektar</li>
              <li>96% perkebunan kopi dikelola oleh petani rakyat (smallholder)</li>
              <li>Nilai ekspor kopi mencapai US$1,62 miliar pada 2025</li>
              <li>Tujuan ekspor utama: Amerika Serikat, Jepang, Uni Eropa, dan Mesir</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Nilai Ekspor US$1,62 Miliar: Komposisi dan Tren
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Berdasarkan data Badan Pusat Statistik dan Kementerian Perdagangan,
            ekspor kopi Indonesia pada tahun 2025 mencatatkan nilai US$1,62
            miliar, meningkat signifikan dibandingkan tahun sebelumnya. Peningkatan
            ini didorong oleh naiknya harga kopi di pasar internasional serta
            meningkatnya permintaan terhadap kopi spesialti asal Indonesia.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Negara Tujuan
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Volume (ribu ton)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Nilai (US$ juta)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Amerika Serikat</td>
                  <td className="px-6 py-4 text-sm text-gray-600">68,5</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    385,2
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Jepang</td>
                  <td className="px-6 py-4 text-sm text-gray-600">42,3</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    248,7
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Uni Eropa</td>
                  <td className="px-6 py-4 text-sm text-gray-600">55,8</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    312,4
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Mesir</td>
                  <td className="px-6 py-4 text-sm text-gray-600">38,1</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    178,9
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Malaysia</td>
                  <td className="px-6 py-4 text-sm text-gray-600">29,6</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    142,3
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Negara lainnya</td>
                  <td className="px-6 py-4 text-sm text-gray-600">87,4</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    352,5
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Tren ekspor kopi Indonesia menunjukkan pergeseran yang menarik.
            Meskipun volume ekspor relatif stabil, nilai ekspornya terus meningkat
            berkat peningkatan proporsi kopi olahan dan kopi spesialti yang
            memiliki harga jual lebih tinggi dibandingkan kopi biji mentah (green
            bean). Strategi value addition ini menjadi kunci pertumbuhan nilai
            ekspor kopi Indonesia ke depan.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Jenis Kopi Indonesia: Arabika, Robusta, dan Luwak
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Indonesia memiliki keunggulan dalam menghasilkan berbagai jenis kopi
            berkualitas tinggi. Tiga kategori utama kopi Indonesia yang mendunia
            adalah Arabika, Robusta, dan Kopi Luwak yang legendaris.
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Kopi Arabika
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Ditanam di ketinggian 1.000-2.000 mdpl dengan cita rasa kompleks,
                asam yang cerah, dan aroma floral.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Pangsa produksi: 25-30%</li>
                <li>Harga premium: US$3-8/kg</li>
                <li>Pasar utama: Eropa, AS, Jepang</li>
                <li>Profil: fruity, floral, winey</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Kopi Robusta
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Ditanam di ketinggian 200-800 mdpl dengan body tebal, rasa kuat,
                dan kadar kafein lebih tinggi.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Pangsa produksi: 70-75%</li>
                <li>Harga: US$1,5-3/kg</li>
                <li>Pasar utama: Italia, Mesir, India</li>
                <li>Profil: earthy, nutty, bold</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Kopi Luwak
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Kopi paling langka dan mahal di dunia, diproses secara alami
                melalui pencernaan musang luwak.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Produksi sangat terbatas</li>
                <li>Harga: US$100-600/kg</li>
                <li>Pasar: kolektor global</li>
                <li>Profil: smooth, less bitter</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Komposisi produksi kopi Indonesia didominasi oleh Robusta (sekitar
            70-75%) yang sebagian besar ditanam di Sumatera Selatan, Lampung, dan
            Bengkulu. Sementara itu, Arabika yang bernilai lebih tinggi
            diproduksi terutama di dataran tinggi Sumatera Utara, Aceh, Sulawesi
            Selatan, Bali, dan Flores. Kopi Luwak, meskipun volumenya sangat
            kecil, memberikan kontribusi signifikan terhadap citra premium kopi
            Indonesia di pasar internasional.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Asal Daerah Kopi Terkenal Indonesia
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Keragaman geografis Indonesia menghasilkan profil rasa kopi yang
            sangat beragam. Setiap daerah penghasil kopi memiliki karakteristik
            unik yang dipengaruhi oleh ketinggian, jenis tanah vulkanik, iklim
            mikro, dan tradisi pengolahan setempat. Berikut adalah daerah-daerah
            penghasil kopi paling terkenal di Indonesia.
          </p>

          <div className="space-y-6 my-8">
            <div className="border-l-4 border-orange-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Kopi Gayo (Aceh)
              </h4>
              <p className="text-gray-700 mb-3">
                Ditanam di dataran tinggi Gayo pada ketinggian 1.200-1.700 mdpl,
                kopi Gayo dikenal dengan body yang tebal, keasaman rendah hingga
                sedang, dan aroma rempah yang khas. Kopi Gayo telah memperoleh
                sertifikasi Geographical Indication (GI) dan menjadi salah satu
                kopi Arabika paling dicari di pasar Eropa dan Amerika.
              </p>
              <p className="text-sm text-gray-600">
                Profil rasa: herbal, spicy, earthy, dark chocolate
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Kopi Toraja (Sulawesi Selatan)
              </h4>
              <p className="text-gray-700 mb-3">
                Berasal dari pegunungan Tana Toraja di ketinggian 1.400-1.800
                mdpl, kopi Toraja memiliki karakter body penuh dengan keasaman
                yang seimbang. Cita rasanya yang kompleks dengan sentuhan buah
                tropis dan rempah menjadikannya favorit di Jepang dan Korea
                Selatan. Key Coffee, salah satu roaster terbesar Jepang, telah
                mengimpor kopi Toraja sejak tahun 1970-an.
              </p>
              <p className="text-sm text-gray-600">
                Profil rasa: tropical fruit, spice, walnut, caramel
              </p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Kopi Kintamani (Bali)
              </h4>
              <p className="text-gray-700 mb-3">
                Ditanam di lereng Gunung Batur dan Gunung Agung pada ketinggian
                900-1.500 mdpl, kopi Kintamani memiliki cita rasa yang cerah
                dengan keasaman sitrus yang khas. Sistem tumpang sari dengan
                tanaman jeruk memberikan sentuhan citrus alami yang unik. Kopi
                Kintamani adalah kopi pertama di Indonesia yang mendapat
                sertifikasi Indikasi Geografis (IG).
              </p>
              <p className="text-sm text-gray-600">
                Profil rasa: citrus, lemon, fresh, medium body
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Java Coffee (Jawa)
              </h4>
              <p className="text-gray-700 mb-3">
                Kopi Jawa memiliki sejarah panjang dan menjadi begitu ikonik
                hingga kata &quot;Java&quot; digunakan secara global sebagai
                sinonim untuk kopi. Ditanam di perkebunan besar warisan kolonial
                seperti Jampit, Blawan, dan Kayumas di dataran tinggi Ijen,
                kopi Jawa dikenal dengan body sedang, rasa bersih, dan keasaman
                halus.
              </p>
              <p className="text-sm text-gray-600">
                Profil rasa: clean, sweet, nutty, mild acidity
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Kopi Flores (Nusa Tenggara Timur)
              </h4>
              <p className="text-gray-700 mb-3">
                Ditanam di dataran tinggi Bajawa dan Manggarai pada ketinggian
                1.200-1.800 mdpl, kopi Flores semakin mendapat pengakuan
                internasional berkat profil rasanya yang unik. Tanah vulkanik
                dari Gunung Kelimutu dan iklim kering memberikan karakter
                cokelat dan rempah yang khas.
              </p>
              <p className="text-sm text-gray-600">
                Profil rasa: chocolate, tobacco, spice, full body
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Kopi Mandailing & Lintong (Sumatera Utara)
              </h4>
              <p className="text-gray-700 mb-3">
                Kopi Mandailing dan Lintong ditanam di sekitar Danau Toba pada
                ketinggian 1.000-1.500 mdpl. Proses giling basah (wet-hulling)
                yang khas Sumatera memberikan karakter earthy, herbal, dan body
                yang sangat tebal. Kopi Sumatera dikenal sebagai salah satu kopi
                paling berkarakter di dunia dan menjadi komponen utama dalam
                berbagai espresso blend premium.
              </p>
              <p className="text-sm text-gray-600">
                Profil rasa: earthy, herbal, tobacco, cedar, full body
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Pasar Kopi Spesialti di Eropa dan Amerika
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Pasar kopi spesialti global mengalami pertumbuhan yang luar biasa
            dalam dekade terakhir, dengan nilai pasar diperkirakan mencapai
            US$83,5 miliar pada tahun 2025. Indonesia berada dalam posisi
            strategis untuk mengambil porsi lebih besar dari pasar ini berkat
            keragaman dan keunikan kopi yang dimilikinya.
          </p>

          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-8 my-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Tren Pasar Kopi Spesialti Global
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  1. Third Wave Coffee Movement
                </p>
                <p className="text-sm text-gray-600">
                  Konsumen semakin menghargai asal-usul, proses pengolahan, dan
                  profil rasa unik kopi. Single origin Indonesia menjadi favorit
                  di specialty coffee shop Eropa dan AS.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  2. Direct Trade & Transparansi
                </p>
                <p className="text-sm text-gray-600">
                  Roaster dan importir semakin banyak yang membeli langsung dari
                  petani Indonesia, memotong rantai distribusi dan meningkatkan
                  pendapatan petani.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  3. Sustainability & Ethical Sourcing
                </p>
                <p className="text-sm text-gray-600">
                  Sertifikasi Fair Trade, Rainforest Alliance, dan Organic
                  semakin menjadi syarat wajib untuk memasuki pasar Eropa dan
                  Amerika.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  4. Micro-lot & Nano-lot
                </p>
                <p className="text-sm text-gray-600">
                  Kopi dari lahan kecil dengan proses spesial dihargai sangat
                  premium. Indonesia dengan jutaan petani kecilnya memiliki
                  potensi besar di segmen ini.
                </p>
              </div>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Di Amerika Serikat, kopi Indonesia menduduki peringkat kelima dalam
            daftar negara asal kopi spesialti yang paling dicari oleh roaster.
            Kopi Sumatera, khususnya Gayo dan Mandailing, secara konsisten
            muncul dalam menu specialty coffee shop di kota-kota besar seperti
            New York, San Francisco, Portland, dan Seattle. Di Eropa, pasar
            Skandinavia (Norwegia, Swedia, Finlandia) dan Jerman menunjukkan
            apresiasi tertinggi terhadap kopi single origin Indonesia.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Strategi Premium Pricing dan Branding
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Salah satu tantangan terbesar kopi Indonesia di pasar global adalah
            keluar dari jebakan komoditas (commodity trap) di mana kopi hanya
            dihargai berdasarkan volume dan bukan kualitas. Strategi premium
            pricing dan branding yang tepat menjadi kunci untuk meningkatkan
            nilai tambah ekspor kopi Indonesia.
          </p>

          <ul className="space-y-4 my-6">
            <li className="flex items-start gap-3">
              <span className="text-orange-600 text-xl">&#10003;</span>
              <div>
                <strong className="text-gray-900">Indikasi Geografis (IG)</strong>
                <p className="text-gray-600 text-sm">
                  Perlindungan hukum untuk kopi berdasarkan asal daerah. Kopi
                  Gayo, Kintamani, dan Toraja telah mendapat sertifikasi IG yang
                  meningkatkan nilai jual 20-40% di pasar internasional.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 text-xl">&#10003;</span>
              <div>
                <strong className="text-gray-900">Sertifikasi Internasional</strong>
                <p className="text-gray-600 text-sm">
                  Sertifikasi Organic, Fair Trade, Rainforest Alliance, dan UTZ
                  membuka akses ke pasar premium Eropa dan Amerika dengan harga
                  jual 30-50% lebih tinggi.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 text-xl">&#10003;</span>
              <div>
                <strong className="text-gray-900">Cup of Excellence & Kompetisi</strong>
                <p className="text-gray-600 text-sm">
                  Partisipasi dalam kompetisi kopi internasional seperti Cup of
                  Excellence meningkatkan visibilitas dan harga lelang kopi
                  Indonesia hingga US$50-150/kg.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 text-xl">&#10003;</span>
              <div>
                <strong className="text-gray-900">Storytelling & Terroir Marketing</strong>
                <p className="text-gray-600 text-sm">
                  Membangun narasi unik tentang asal-usul kopi, budaya lokal
                  petani, dan proses tradisional untuk menciptakan nilai
                  emosional yang meningkatkan willingness-to-pay konsumen.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 text-xl">&#10003;</span>
              <div>
                <strong className="text-gray-900">Ekspor Kopi Olahan (Roasted)</strong>
                <p className="text-gray-600 text-sm">
                  Beralih dari ekspor biji mentah (green bean) ke kopi sangrai
                  (roasted) dan kopi bubuk bermerek dapat meningkatkan nilai
                  ekspor hingga 3-5 kali lipat.
                </p>
              </div>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Metode Pengolahan Kopi Indonesia
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Metode pengolahan (processing) kopi memiliki pengaruh besar terhadap
            profil rasa akhir. Indonesia dikenal dengan beberapa metode
            pengolahan yang unik dan khas, yang menjadi daya tarik tersendiri
            bagi pasar kopi spesialti global.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Giling Basah (Wet-Hulling)
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Metode khas Sumatera yang menghasilkan karakter earthy, herbal,
                dan body tebal. Biji kopi dikupas kulitnya saat kadar air masih
                tinggi (30-35%), menghasilkan warna biji kehijauan yang khas.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Asal: Sumatera (Gayo, Mandailing, Lintong)</li>
                <li>Karakter: earthy, herbal, heavy body</li>
                <li>Kadar air pengupasan: 30-35%</li>
                <li>Waktu pengeringan: 2-4 hari</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Proses Basah (Washed/Fully Washed)
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Metode yang menghasilkan rasa bersih (clean cup) dengan keasaman
                cerah. Buah kopi difermentasi untuk melepas mucilage sebelum
                dicuci bersih dan dikeringkan.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Asal: Jawa, Bali, Flores</li>
                <li>Karakter: clean, bright acidity, medium body</li>
                <li>Fermentasi: 12-36 jam</li>
                <li>Waktu pengeringan: 7-14 hari</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-green-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Proses Kering (Natural/Dry Process)
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Buah kopi dikeringkan utuh di bawah sinar matahari, menghasilkan
                rasa manis, fruity, dan body penuh. Metode ini semakin populer
                di kalangan produsen kopi spesialti Indonesia.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Asal: berbagai daerah (eksperimen)</li>
                <li>Karakter: fruity, sweet, full body, winey</li>
                <li>Pengeringan buah utuh: 14-30 hari</li>
                <li>Harga premium: 20-50% lebih tinggi</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-amber-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Honey Process
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Metode hybrid antara washed dan natural di mana sebagian
                mucilage dibiarkan menempel pada biji saat pengeringan,
                menghasilkan rasa manis alami dengan kompleksitas tinggi.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Variasi: Yellow, Red, Black Honey</li>
                <li>Karakter: sweet, complex, balanced</li>
                <li>Semakin populer di kompetisi</li>
                <li>Harga premium: 30-60% lebih tinggi</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Inovasi dalam metode pengolahan menjadi salah satu strategi penting
            untuk meningkatkan nilai jual kopi Indonesia. Banyak petani dan
            pengolah kopi muda Indonesia kini bereksperimen dengan metode
            fermentasi anaerob, carbonic maceration, dan proses eksperimental
            lainnya yang menghasilkan profil rasa unik dan bernilai sangat tinggi
            di pasar kopi spesialti.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Tantangan dalam Ekspor Kopi Indonesia
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Meskipun memiliki potensi besar, ekspor kopi Indonesia menghadapi
            berbagai tantangan yang perlu diatasi secara sistematis untuk
            mempertahankan dan meningkatkan daya saing di pasar global.
          </p>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
            <p className="text-gray-800 font-medium mb-2">
              Tantangan Utama Ekspor Kopi Indonesia
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Konsistensi Kualitas:</strong> Variasi kualitas antar
                musim dan antar petani masih tinggi, menyulitkan pemenuhan
                standar ekspor yang konsisten
              </li>
              <li>
                <strong>Infrastruktur Pasca Panen:</strong> Fasilitas
                pengolahan, pengeringan, dan penyimpanan yang belum memadai
                di tingkat petani menyebabkan kerusakan kualitas
              </li>
              <li>
                <strong>Regulasi Uni Eropa (EUDR):</strong> Regulasi deforestasi
                Uni Eropa yang berlaku sejak 2025 mensyaratkan bukti bahwa kopi
                tidak berasal dari lahan deforestasi, menambah beban compliance
              </li>
              <li>
                <strong>Perubahan Iklim:</strong> Pergeseran pola hujan, suhu
                yang meningkat, dan serangan hama penggerek buah kopi (PBKo)
                mengancam produktivitas dan kualitas
              </li>
              <li>
                <strong>Regenerasi Petani:</strong> Rata-rata usia petani kopi
                Indonesia di atas 50 tahun, generasi muda kurang tertarik
                bertani kopi
              </li>
              <li>
                <strong>Akses Pembiayaan:</strong> Petani kecil sulit mendapat
                kredit untuk investasi peningkatan kualitas dan sertifikasi
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Persaingan Global yang Semakin Ketat
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Indonesia menghadapi persaingan yang semakin ketat dari negara-negara
            produsen kopi lainnya. Brasil terus mendominasi dengan skala produksi
            masif dan efisiensi tinggi. Vietnam bersaing ketat di segmen Robusta
            dengan harga yang kompetitif. Kolombia dan Ethiopia memimpin di
            segmen kopi spesialti dengan branding yang sudah sangat kuat. Negara-
            negara baru seperti Rwanda, Burundi, dan Myanmar juga mulai muncul
            sebagai pesaing serius di pasar kopi spesialti.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Peluang bagi Petani Kopi Rakyat
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Di tengah berbagai tantangan, terdapat peluang besar bagi petani kopi
            rakyat Indonesia untuk meningkatkan pendapatan dan kesejahteraan
            mereka melalui berbagai inisiatif dan program yang berkembang pesat.
          </p>

          <div className="bg-green-50 rounded-xl p-6 my-6">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">&rarr;</span>
                <div>
                  <strong>Koperasi dan Kelompok Tani:</strong> Bergabung dalam
                  koperasi memungkinkan petani kecil mengakses pasar ekspor
                  langsung, mendapatkan harga lebih baik, dan berbagi biaya
                  sertifikasi. Koperasi Ketiara di Aceh adalah contoh sukses
                  yang mengekspor kopi langsung ke roaster di AS dan Eropa.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">&rarr;</span>
                <div>
                  <strong>Direct Trade dan E-Commerce:</strong> Platform digital
                  memungkinkan petani menjual kopi langsung ke roaster dan
                  konsumen global tanpa melalui banyak perantara, meningkatkan
                  margin keuntungan hingga 2-3 kali lipat.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">&rarr;</span>
                <div>
                  <strong>Coffee Tourism (Wisata Kopi):</strong> Mengembangkan
                  agrowisata kopi di daerah-daerah produsen seperti Gayo, Toraja,
                  dan Kintamani untuk menambah sumber pendapatan dan membangun
                  brand awareness langsung.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">&rarr;</span>
                <div>
                  <strong>Pelatihan Cupping dan Processing:</strong> Program
                  pelatihan dari lembaga seperti SCA (Specialty Coffee
                  Association) dan SCAI (Specialty Coffee Association of
                  Indonesia) membantu petani memahami standar kualitas dan
                  meningkatkan skill pengolahan.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">&rarr;</span>
                <div>
                  <strong>Carbon Credit dan Agroforestri:</strong> Perkebunan
                  kopi yang dikelola secara agroforestri dapat menghasilkan
                  pendapatan tambahan dari program kredit karbon, sekaligus
                  memenuhi syarat regulasi EUDR.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">&rarr;</span>
                <div>
                  <strong>Value Addition Lokal:</strong> Mengolah kopi menjadi
                  produk roasted, ground coffee, atau ready-to-drink di tingkat
                  lokal sebelum diekspor untuk meningkatkan nilai jual hingga
                  3-5 kali lipat.
                </div>
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Peran Pemerintah dan Dukungan Kebijakan
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Pemerintah Indonesia melalui Kementerian Pertanian dan Kementerian
            Perdagangan telah meluncurkan berbagai program untuk mendukung
            peningkatan ekspor kopi. Program peremajaan tanaman kopi, bantuan
            sarana pengolahan, fasilitasi sertifikasi, dan promosi melalui
            pameran internasional seperti SCAA Expo, World of Coffee, dan
            Specialty Coffee Expo menjadi bagian dari strategi nasional
            pengembangan kopi Indonesia.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Selain itu, program Gerakan Nasional Peningkatan Mutu Kopi (GNPMK)
            yang berfokus pada praktik Good Agriculture Practices (GAP) dan Good
            Handling Practices (GHP) di tingkat petani bertujuan meningkatkan
            konsistensi kualitas kopi Indonesia secara nasional. Dukungan
            permodalan melalui Kredit Usaha Rakyat (KUR) sektor pertanian juga
            semakin mudah diakses oleh petani kopi.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Prospek Masa Depan Kopi Indonesia
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Masa depan ekspor kopi Indonesia sangat menjanjikan dengan beberapa
            tren positif yang mendukung. Permintaan global terhadap kopi terus
            meningkat, terutama di pasar berkembang seperti China, India, dan
            Asia Tenggara. Pasar kopi spesialti yang tumbuh 12-15% per tahun
            memberikan ruang besar bagi kopi Indonesia yang memiliki karakter
            unik dan keragaman luar biasa.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Aspek
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Kondisi Saat Ini
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Target 2030
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Nilai Ekspor</td>
                  <td className="px-6 py-4 text-sm text-gray-600">US$1,62 miliar</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    US$2,5 miliar
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Pangsa Kopi Spesialti</td>
                  <td className="px-6 py-4 text-sm text-gray-600">15-20% dari ekspor</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    35-40% dari ekspor
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Ekspor Kopi Olahan</td>
                  <td className="px-6 py-4 text-sm text-gray-600">10% dari total</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    30% dari total
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Sertifikasi Petani</td>
                  <td className="px-6 py-4 text-sm text-gray-600">20% petani bersertifikasi</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    50% petani bersertifikasi
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Produktivitas</td>
                  <td className="px-6 py-4 text-sm text-gray-600">625 kg/ha</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    900 kg/ha
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Digitalisasi rantai pasok kopi melalui blockchain traceability
            memungkinkan konsumen melacak perjalanan kopi dari kebun hingga
            cangkir. Teknologi ini tidak hanya meningkatkan transparansi dan
            kepercayaan konsumen, tetapi juga mempermudah kepatuhan terhadap
            regulasi seperti EUDR. Beberapa startup Indonesia telah
            mengembangkan platform traceability berbasis blockchain yang
            menghubungkan petani langsung dengan roaster global.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Pengembangan varietas kopi tahan perubahan iklim juga menjadi fokus
            penelitian di pusat-pusat riset kopi Indonesia. Varietas Arabika
            hibrida yang tahan terhadap karat daun (leaf rust) dan toleran
            terhadap suhu tinggi dikembangkan untuk menjaga keberlanjutan
            produksi di tengah ancaman perubahan iklim global.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Kesimpulan
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Ekspor kopi Indonesia senilai US$1,62 miliar merupakan cerminan dari
            potensi luar biasa yang dimiliki negeri ini sebagai produsen kopi
            keempat terbesar dunia. Dengan keragaman jenis kopi, keunikan terroir
            dari Sabang hingga Merauke, dan tradisi pengolahan yang khas,
            Indonesia memiliki semua bahan baku untuk menjadi pemimpin di pasar
            kopi spesialti global.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Kunci keberhasilan terletak pada kemampuan Indonesia untuk
            bertransformasi dari eksportir kopi komoditas menjadi penyedia kopi
            berkualitas tinggi dengan brand yang kuat. Peningkatan konsistensi
            kualitas, adopsi sertifikasi internasional, inovasi dalam pengolahan,
            penguatan branding, dan pemberdayaan petani kecil menjadi pilar-pilar
            utama strategi ini.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Dengan dukungan seluruh pemangku kepentingan mulai dari petani,
            pengolah, eksportir, pemerintah, hingga barista dan konsumen domestik
            yang semakin apresiatif terhadap kopi berkualitas, target
            meningkatkan nilai ekspor kopi Indonesia menjadi US$2,5 miliar pada
            2030 bukanlah hal yang mustahil. Masa depan kopi Indonesia berada di
            tangan kita semua.
          </p>

          <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-xl p-8 my-12">
            <p className="text-xl font-bold mb-3">
              Dukung Kopi Indonesia!
            </p>
            <p className="text-orange-100">
              Setiap cangkir kopi Indonesia yang kita nikmati adalah dukungan
              nyata bagi jutaan petani kopi di seluruh Nusantara. Pilihlah kopi
              lokal berkualitas, kenali asal daerahnya, dan ceritakan keunikannya
              kepada dunia. Bersama, kita bisa membawa kopi Indonesia ke puncak
              pasar global.
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white font-medium rounded-xl hover:bg-orange-700 transition-colors"
            >
              Baca Artikel Lainnya
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
