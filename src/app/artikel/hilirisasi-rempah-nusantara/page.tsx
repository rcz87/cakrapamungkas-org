import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { ArticleJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/json-ld";
import { getArticleBySlug } from "@/data/articles";
import { articleFaqs } from "@/data/article-faqs";

export const metadata = {
  title:
    "Hilirisasi Rempah Nusantara: Peluang Besar Ekonomi Lokal | Cakra Pamungkas",
  description:
    "Indonesia negeri rempah dengan potensi besar. Strategi naik kelas dari bahan mentah ke produk bubuk, ekstrak, minyak atsiri, hingga produk herbal untuk menembus pasar global.",
};

export default function HilirisasiRempahNusantaraArtikelPage() {
  const article = getArticleBySlug("hilirisasi-rempah-nusantara");

  return (
    <>
      {article && <ArticleJsonLd article={article} />}
      {article && (
        <BreadcrumbJsonLd
          items={[
            { name: "Beranda", href: "/" },
            { name: "Artikel", href: "/artikel" },
            { name: article.title, href: `/artikel/hilirisasi-rempah-nusantara` },
          ]}
        />
      )}
      <FaqJsonLd faqs={articleFaqs["hilirisasi-rempah-nusantara"] || []} />
      <article className="bg-white">
        {/* Header */}
        <header className="bg-gradient-to-br from-amber-950 via-orange-900 to-rose-800 py-12 lg:py-20">
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
                FEATURED
              </span>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
                Hilirisasi
              </span>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
                Rempah Nusantara
              </span>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
                Ekspor
              </span>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
                Ekonomi Lokal
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Hilirisasi Rempah Nusantara: Peluang Besar Ekonomi Lokal
            </h1>
            <p className="text-xl text-amber-100 leading-relaxed mb-6">
              Rempah Indonesia: Warisan Nusantara yang Siap Naik Kelas ke Pasar
              Dunia
            </p>

            <div className="flex flex-wrap items-center gap-4 text-amber-200">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">6 Mei 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">12 menit baca</span>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative h-[400px] lg:h-[600px] bg-gray-100">
          <Image
            src="/images/hilirisasi-rempah-hero.webp"
            alt="Hilirisasi Rempah Nusantara - Aneka Rempah Indonesia: Kunyit, Jahe, Lada, Kayu Manis, Pala, Cengkeh"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 leading-relaxed mb-8">
              Indonesia sejak dahulu dikenal sebagai negeri rempah. Kekayaan
              alam seperti kunyit, jahe, lada, pala, cengkeh, kayu manis,
              kapulaga, sereh, lengkuas, dan berbagai tanaman aromatik lainnya
              telah menjadi bagian penting dari kehidupan masyarakat Nusantara.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Rempah bukan hanya digunakan sebagai bumbu masakan. Lebih dari
              itu, rempah memiliki nilai budaya, kesehatan, ekonomi, dan
              perdagangan yang sangat besar. Sejak masa lalu, rempah Nusantara
              menjadi komoditas berharga yang menarik perhatian dunia. Bahkan
              sejarah perdagangan global tidak bisa dilepaskan dari peran
              rempah-rempah Indonesia.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Namun di era modern, pasar rempah sudah berubah. Pembeli
              internasional tidak hanya mencari rempah yang wangi, pedas, segar,
              atau berwarna bagus. Mereka juga membutuhkan produk yang aman,
              higienis, stabil kualitasnya, jelas proses produksinya, dan
              memiliki standar mutu yang dapat dipertanggungjawabkan.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Inilah tantangan sekaligus peluang besar bagi Indonesia.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Rempah Bukan Lagi Sekadar Bahan Mentah
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Selama ini, banyak rempah Indonesia masih dijual dalam bentuk
              mentah atau curah. Petani menjual jahe segar, kunyit segar, lada
              kering, pala, atau cengkeh tanpa banyak proses lanjutan. Cara ini
              memang lebih sederhana, tetapi nilai tambahnya masih rendah.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Padahal, rempah dapat memiliki nilai ekonomi yang jauh lebih
              tinggi jika diolah menjadi produk turunan. Misalnya kunyit dapat
              diolah menjadi bubuk kunyit, ekstrak kurkumin, bahan minuman
              herbal, suplemen, kosmetik alami, hingga bahan baku industri
              pangan.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Begitu juga jahe. Dari satu bahan baku, bisa lahir berbagai
              produk seperti jahe bubuk, jahe instan, minyak atsiri, permen
              jahe, minuman kesehatan, dan bahan campuran makanan modern.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
              <p className="text-gray-800 font-medium">
                Artinya, nilai besar rempah tidak berhenti di kebun. Nilai
                terbesarnya justru muncul setelah melalui proses pengolahan
                yang benar.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Standar Mutu Menjadi Kunci
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Pasar internasional sangat memperhatikan kualitas. Produk rempah
              harus memiliki kadar air yang terkendali, warna yang stabil,
              aroma yang kuat, rasa yang khas, serta bebas dari kontaminasi
              berbahaya.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Kadar air menjadi salah satu faktor paling penting. Jika rempah
              terlalu lembap, produk mudah berjamur, menggumpal, berubah warna,
              dan cepat rusak. Karena itu, proses pengeringan harus dilakukan
              secara baik dan higienis.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Selain kadar air, kebersihan juga menjadi faktor utama. Rempah
              yang dikeringkan sembarangan dapat tercampur debu, tanah,
              serangga, jamur, atau benda asing lainnya. Untuk pasar lokal
              mungkin masih sering dianggap biasa, tetapi untuk pasar ekspor
              hal seperti ini bisa langsung membuat produk ditolak.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Di sinilah pentingnya sistem pascapanen modern. Pengeringan,
              sortasi, penggilingan, penyimpanan, dan pengemasan harus
              dilakukan dengan standar yang jelas.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Peluang Besar dari Produk Bubuk dan Ekstrak
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Salah satu bentuk produk rempah yang memiliki pasar luas adalah
              rempah bubuk. Produk seperti kunyit bubuk, jahe bubuk, lada
              bubuk, kayu manis bubuk, dan pala bubuk banyak digunakan oleh
              industri makanan, minuman, restoran, katering, hingga pabrik
              bumbu instan.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Produk bubuk memiliki beberapa keunggulan. Lebih praktis
              digunakan, lebih mudah dikemas, lebih ringan dalam pengiriman,
              dan lebih mudah masuk ke rantai pasok industri.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Selain bubuk, produk ekstrak juga memiliki nilai tinggi. Ekstrak
              rempah digunakan dalam industri herbal, farmasi, kosmetik,
              minuman kesehatan, aromaterapi, dan produk wellness. Tren global
              saat ini semakin mengarah pada bahan alami, dan ini menjadi
              peluang besar bagi rempah Indonesia.
            </p>

            <blockquote className="border-l-4 border-rose-600 bg-rose-50 italic text-gray-800 p-6 my-8 rounded-r-lg">
              <p className="text-lg leading-relaxed">
                &ldquo;Dunia sedang bergerak ke arah produk natural. Indonesia
                jangan cuma jadi penonton sambil pegang cangkul. Kita punya
                bahannya, tinggal naikkan cara mainnya.&rdquo;
              </p>
            </blockquote>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Produk Turunan Rempah yang Bernilai Tinggi
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Berikut beberapa contoh produk turunan dari rempah Nusantara yang
              memiliki potensi pasar besar di industri pangan, herbal,
              kosmetik, hingga farmasi:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-amber-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Jenis Rempah
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Produk Turunan Potensial
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Kunyit
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Bubuk kunyit, ekstrak kurkumin, minuman herbal, kapsul
                      herbal, bahan kosmetik
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Jahe
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Jahe bubuk, jahe instan, minyak jahe, permen jahe,
                      minuman kesehatan
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Lada
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Lada bubuk, minyak lada, bumbu siap pakai, seasoning
                      blend
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Cengkeh
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Minyak cengkeh, bahan farmasi, aromaterapi, bahan
                      perawatan gigi
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Pala
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Bubuk pala, minyak pala, bahan bakery, parfum, oleoresin
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Kayu manis
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Bubuk kayu manis, minyak kayu manis, bahan minuman, bahan
                      roti dan kue
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Sereh
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Minyak sereh, teh herbal, aromaterapi, bahan kosmetik
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Lengkuas
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Bubuk lengkuas, bumbu instan, ekstrak herbal
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Dari tabel ini terlihat bahwa satu jenis rempah bisa memiliki
              banyak cabang produk. Semakin panjang rantai pengolahannya,
              semakin tinggi nilai ekonominya.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Tantangan Pelaku Rempah Lokal
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Meski peluangnya besar, pelaku usaha rempah lokal masih
              menghadapi beberapa tantangan yang perlu diatasi agar bisa naik
              kelas ke pasar premium:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-rose-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Tantangan
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Dampak
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Pengeringan belum standar
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Kadar air tidak stabil dan produk mudah rusak
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Penyimpanan kurang baik
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Rempah mudah berjamur dan kehilangan aroma
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Sortasi belum rapi
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Kualitas produk tidak seragam
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Penggilingan belum higienis
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Risiko kontaminasi meningkat
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Kemasan masih sederhana
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Produk terlihat kurang premium
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Belum ada uji kualitas
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Sulit masuk pasar industri besar
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Belum ada merek kuat
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Produk hanya bersaing di harga murah
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Masalah terbesar bukan karena Indonesia kekurangan rempah.
              Masalahnya adalah banyak produk masih berhenti sebagai bahan
              mentah. Padahal buyer besar mencari produk yang konsisten, aman,
              dan siap pakai.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Strategi Agar Rempah Indonesia Naik Kelas
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Agar rempah lokal bisa bersaing di pasar premium, ada beberapa
              strategi yang perlu dilakukan secara terstruktur dan
              berkelanjutan:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-emerald-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Strategi
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Tujuan
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Perbaikan pascapanen
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Menjaga kualitas sejak awal
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Pengeringan higienis
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Menurunkan risiko jamur dan kontaminasi
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Sortasi bahan baku
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Membuat kualitas lebih seragam
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Pengolahan menjadi bubuk atau ekstrak
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Meningkatkan nilai tambah
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Kemasan modern
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Meningkatkan daya jual
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Uji laboratorium
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Meningkatkan kepercayaan pembeli
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Branding produk
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Tidak hanya jual bahan, tapi jual nilai
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Kemitraan petani dan industri
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Menjaga pasokan dan kualitas
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Dengan langkah ini, rempah Indonesia bisa masuk ke pasar yang
              lebih luas. Tidak hanya pasar tradisional, tetapi juga hotel,
              restoran, pabrik makanan, eksportir, industri herbal, kosmetik,
              hingga marketplace global.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Rempah dan Masa Depan Ekonomi Lokal
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Rempah bisa menjadi sumber ekonomi baru bagi desa dan daerah.
              Banyak wilayah di Indonesia memiliki potensi tanaman rempah,
              tetapi belum semua dikelola secara profesional.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Jika dikelola dengan model bisnis modern, rempah dapat membuka
              lapangan kerja dari hulu sampai hilir. Petani menanam, kelompok
              tani melakukan sortasi, UMKM melakukan pengeringan dan
              penggilingan, koperasi mengelola kemasan, lalu perusahaan daerah
              atau swasta membantu pemasaran.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Model seperti ini bisa menciptakan ekosistem ekonomi yang kuat.
              Bukan hanya menjual hasil panen, tetapi membangun industri
              berbasis potensi lokal.
            </p>

            <div className="bg-gradient-to-r from-amber-50 to-rose-50 border border-amber-200 p-6 my-8 rounded-lg">
              <p className="text-gray-800 font-medium text-lg">
                Indonesia harus mulai melihat rempah sebagai aset strategis.
                Bukan sekadar bahan dapur, tetapi bahan baku masa depan.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Kesimpulan
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Rempah Indonesia memiliki peluang besar untuk naik kelas. Dunia
              membutuhkan bahan alami, produk herbal, bumbu berkualitas, dan
              bahan pangan yang aman. Indonesia memiliki semua modal dasarnya:
              tanah subur, iklim tropis, keanekaragaman hayati, dan sejarah
              panjang sebagai negeri rempah.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Namun untuk menang di pasar global, rempah tidak cukup hanya
              dijual mentah. Produk harus diolah, distandarkan, dikemas,
              diuji, dan dipasarkan dengan strategi yang lebih profesional.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Masa depan rempah Indonesia ada pada hilirisasi. Dari bahan
              mentah menjadi bubuk, ekstrak, minyak atsiri, produk herbal,
              kosmetik alami, hingga bumbu modern siap pakai.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Jika dikelola dengan serius, rempah bukan hanya warisan masa
              lalu. Rempah bisa menjadi mesin ekonomi masa depan Indonesia.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              TL;DR
            </h2>

            <div className="overflow-x-auto my-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Poin Utama
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Inti Penjelasan
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Rempah Indonesia sangat potensial
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Punya nilai sejarah, budaya, kesehatan, dan ekonomi
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Jangan hanya jual mentah
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Nilai tambah ada di pengolahan
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Produk bubuk dan ekstrak menjanjikan
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Cocok untuk pangan, herbal, kosmetik, dan industri
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Standar mutu penting
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Kadar air, kebersihan, kemasan, dan uji kualitas harus
                      diperhatikan
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Peluang besar untuk daerah
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Bisa menjadi penggerak ekonomi lokal
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Kunci sukses
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Hilirisasi, branding, standar kualitas, dan jaringan
                      pasar
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link
                href="/artikel"
                className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Kembali ke Daftar Artikel</span>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
