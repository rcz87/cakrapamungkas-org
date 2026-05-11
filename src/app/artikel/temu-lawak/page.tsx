import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, MessageCircle, Sprout, Package } from "lucide-react";
import { ArticleJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/json-ld";
import { getArticleBySlug } from "@/data/articles";
import { articleFaqs } from "@/data/article-faqs";

export const metadata = {
  title:
    "Curcuma Xanthorrhiza Rhizoma (Temu Lawak): Emas Kuning Nusantara | Cakra Pamungkas",
  description:
    "Curcuma xanthorrhiza rhizoma (temu lawak) — rimpang herbal asli Indonesia. Klaim BPOM untuk memelihara fungsi hati & nafsu makan. Manfaat, kandungan, pengolahan, peluang bisnis untuk pasar lokal & global.",
  keywords: [
    "Curcuma Xanthorrhiza",
    "Curcuma Xanthorrhiza Rhizoma",
    "Temu Lawak",
    "Javanese Turmeric",
    "Indonesian Herbal",
    "Jamu",
    "Xanthorrhizol",
    "Curcuminoid",
    "Herbal Indonesia",
    "Simplisia",
  ],
};

export default function TemuLawakArtikelPage() {
  const article = getArticleBySlug("temu-lawak");

  return (
    <>
      {article && <ArticleJsonLd article={article} />}
      {article && (
        <BreadcrumbJsonLd
          items={[
            { name: "Beranda", href: "/" },
            { name: "Artikel", href: "/artikel" },
            { name: article.title, href: `/artikel/temu-lawak` },
          ]}
        />
      )}
      <FaqJsonLd faqs={articleFaqs["temu-lawak"] || []} />
      <article className="bg-white">
        {/* Header */}
        <header className="bg-gradient-to-br from-yellow-900 via-amber-800 to-orange-800 py-12 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-yellow-200 hover:text-yellow-100 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Kembali ke Beranda</span>
            </Link>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full">
                FEATURED
              </span>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
                Herbal
              </span>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
                Curcuma xanthorrhiza
              </span>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
                Jamu
              </span>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
                Peluang Bisnis
              </span>
            </div>

            <p className="text-yellow-300 italic text-sm sm:text-base font-medium tracking-wide mb-3">
              Curcuma Xanthorrhiza Rhizoma
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Temu Lawak: Emas Kuning Nusantara yang Punya Nilai Kesehatan dan
              Ekonomi
            </h1>
            <p className="text-xl text-yellow-100 leading-relaxed mb-6">
              Rimpang herbal asli Indonesia (<em>Javanese Turmeric</em>):
              bahan jamu, minuman fungsional, dan bahan baku industri kesehatan
              bernilai tinggi.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-yellow-200">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">11 Mei 2026</span>
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
            src="/images/temu-lawak-hero.jpg"
            alt="Petani memegang rimpang temu lawak segar (Curcuma xanthorrhiza) dengan latar tim sortasi di pelataran rumah produksi"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="prose prose-lg max-w-none">
            {/* TL;DR */}
            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-10 rounded-r-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-3">TL;DR</h2>
              <p className="text-gray-800 leading-relaxed">
                <strong>Temu lawak</strong> adalah tanaman rimpang asli
                Indonesia yang dikenal sebagai bahan jamu, minuman herbal,
                suplemen, dan bahan baku industri kesehatan. Nama ilmiahnya{" "}
                <em>Curcuma xanthorrhiza</em>. Secara tradisional digunakan untuk
                membantu menjaga nafsu makan, pencernaan, stamina, serta
                kesehatan fungsi hati. BPOM mencantumkan klaim yang disetujui
                untuk temulawak antara lain{" "}
                <strong>
                  membantu memelihara kesehatan fungsi hati
                </strong>{" "}
                dan/atau{" "}
                <strong>membantu memperbaiki nafsu makan</strong>.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              1. Apa Itu Temu Lawak?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Temu lawak adalah tanaman herbal dari keluarga jahe-jahean atau{" "}
              <strong>Zingiberaceae</strong>. Bentuknya mirip kunyit, tetapi
              umumnya rimpangnya lebih besar, aromanya lebih tajam, dan rasanya
              cenderung pahit khas herbal.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Di Indonesia, temu lawak sudah lama digunakan sebagai bahan jamu
              tradisional. Tidak heran kalau tanaman ini sering disebut sebagai
              salah satu &ldquo;aset herbal Nusantara&rdquo;. Bukan cuma tanaman
              pekarangan, temu lawak punya potensi masuk ke banyak jalur bisnis:
              jamu, minuman herbal, serbuk instan, simplisia kering, kapsul
              herbal, sampai bahan baku ekstrak.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              2. Kandungan Aktif Temu Lawak
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Kekuatan utama temu lawak ada pada kandungan senyawa aktifnya.
              Beberapa komponen penting yang sering dibahas dalam literatur
              ilmiah adalah:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-yellow-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Kandungan
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Peran Umum
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Kurkuminoid
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Senyawa pigmen kuning yang banyak dikaitkan dengan
                      aktivitas antioksidan dan antiinflamasi
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Xanthorrhizol
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Senyawa khas temu lawak yang banyak diteliti karena
                      aktivitas biologisnya
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Minyak atsiri
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Memberi aroma khas dan berperan dalam karakter herbalnya
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Pati
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Komponen alami rimpang yang memengaruhi tekstur dan hasil
                      pengolahan
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Kajian ilmiah menyebut temu lawak mengandung kurkuminoid dan
              minyak atsiri, dengan xanthorrhizol sebagai salah satu senyawa
              penting yang banyak dikaji.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              3. Manfaat Temu Lawak Menurut Tradisi dan Regulasi
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Secara tradisional, temu lawak banyak digunakan untuk membantu
              nafsu makan, pencernaan, stamina, dan keluhan terkait fungsi hati.
              Namun, dalam artikel publik atau produk komersial, klaim manfaat
              harus hati-hati. Jangan sampai artikel terlihat seperti
              &ldquo;obat segala penyakit&rdquo;. Itu bahaya secara etika dan
              regulasi.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Klaim yang lebih aman digunakan:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-amber-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Area Manfaat
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Narasi Aman untuk Artikel
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Nafsu makan
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Temu lawak dikenal secara tradisional untuk membantu
                      memperbaiki nafsu makan
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Fungsi hati
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Temu lawak dapat digunakan untuk membantu memelihara
                      kesehatan fungsi hati
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Pencernaan
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Secara tradisional digunakan dalam ramuan herbal untuk
                      mendukung kenyamanan pencernaan
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Stamina
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Banyak dikenal masyarakat sebagai bahan jamu untuk menjaga
                      kebugaran tubuh
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              BPOM mencantumkan klaim temulawak sebagai bahan obat alam untuk
              membantu memelihara kesehatan fungsi hati dan/atau membantu
              memperbaiki nafsu makan.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              4. Temu Lawak dalam Budaya Jamu Indonesia
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Temu lawak bukan barang baru. Dari dulu, masyarakat Indonesia
              sudah mengolahnya menjadi jamu rebusan, jamu gendong, minuman
              segar, hingga ramuan keluarga.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Biasanya temu lawak dikombinasikan dengan:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-orange-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Campuran
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Tujuan Rasa / Fungsi
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Gula aren
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Mengurangi rasa pahit
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Asam jawa
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Memberi rasa segar
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Jahe
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Memberi sensasi hangat
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Kunyit
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Memperkuat warna dan karakter herbal
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Madu
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Menambah rasa manis alami
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <blockquote className="border-l-4 border-yellow-600 bg-yellow-50 italic text-gray-800 p-6 my-8 rounded-r-lg">
              <p className="text-lg leading-relaxed">
                &ldquo;Temu lawak punya rasa pahit, tapi justru pahit inilah
                yang memberi identitas. Dalam dunia herbal, pahit itu bukan
                kelemahan — itu karakter. Bahasa bisnisnya:{" "}
                <strong>strong signature taste</strong>. Biar pahit, yang
                penting cuan jangan ikut pahit.&rdquo;
              </p>
            </blockquote>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              5. Cara Pengolahan Temu Lawak
            </h2>

            <figure className="my-8">
              <div className="relative w-full h-[500px] lg:h-[700px] bg-yellow-50 rounded-lg overflow-hidden">
                <Image
                  src="/images/temu-lawak-irisan.jpg"
                  alt="Irisan rimpang temu lawak segar berwarna kuning emas khas - bahan baku simplisia herbal"
                  fill
                  className="object-contain"
                />
              </div>
              <figcaption className="text-center text-sm text-gray-600 italic mt-3">
                Irisan temu lawak segar berwarna kuning emas — bahan baku
                utama untuk simplisia, serbuk, dan ekstrak herbal.
              </figcaption>
            </figure>

            <p className="text-gray-700 leading-relaxed mb-6">
              Temu lawak bisa diolah dalam beberapa bentuk produk. Setiap bentuk
              punya pasar dan nilai jual berbeda.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-amber-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Bentuk Produk
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Proses Utama
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Target Pasar
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Temu lawak segar
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Cuci, sortir, jual langsung
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Tengkulak, pasar tradisional, industri kecil
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Irisan kering / simplisia
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Cuci, iris, jemur/oven, kemas
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Jamu, herbal, industri ekstrak
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Serbuk temu lawak
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Keringkan, giling, ayak
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Minuman herbal, bahan kapsul
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Minuman siap seduh
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Ekstrak/serbuk + pemanis
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Konsumen rumah tangga
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Ekstrak
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Proses ekstraksi lebih lanjut
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Industri suplemen, kosmetik, herbal
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Untuk usaha kecil-menengah, jalur paling realistis biasanya
              dimulai dari <strong>simplisia kering</strong> dan{" "}
              <strong>serbuk temu lawak</strong>. Modal alatnya masih masuk
              akal: mesin iris, oven/pengering, grinder, ayakan, dan kemasan.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              6. Peluang Bisnis Temu Lawak
            </h2>

            <figure className="my-8">
              <div className="relative w-full h-[500px] lg:h-[700px] bg-yellow-50 rounded-lg overflow-hidden">
                <Image
                  src="/images/temu-lawak-produksi.jpg"
                  alt="Pekerja kampung melakukan sortasi temu lawak di pelataran rumah produksi - ekonomi rakyat berbasis herbal Nusantara"
                  fill
                  className="object-contain"
                />
              </div>
              <figcaption className="text-center text-sm text-gray-600 italic mt-3">
                Suasana sortasi temu lawak di pelataran rumah produksi —
                ekonomi rakyat yang menggerakkan rantai pasok herbal dari desa.
              </figcaption>
            </figure>

            <p className="text-gray-700 leading-relaxed mb-6">
              Temu lawak punya peluang bisnis karena masuk ke tiga tren besar:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-emerald-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Tren
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Kenapa Menguntungkan
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Herbal lokal
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Konsumen makin suka produk natural dan tradisional
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Minuman fungsional
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Pasar minuman sehat terus berkembang
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Bahan baku industri
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Produsen jamu, kosmetik, dan suplemen butuh pasokan stabil
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Selain pasar lokal, temu lawak juga pernah masuk dalam agenda
              ekspor produk obat bahan alam Indonesia. BPOM pernah mencatat
              ekspor temulawak ke Kamboja dan menekankan pentingnya keamanan,
              manfaat, serta kualitas dalam pengembangan jamu.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
              <p className="text-gray-800 font-medium">
                Artinya, peluangnya bukan sekadar &ldquo;jual rimpang ke
                pasar&rdquo;. Kalau kualitas bahan baku rapi, kadar air
                terkontrol, warna bagus, dan kemasan profesional, temu lawak
                bisa naik kelas menjadi produk bernilai tambah.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              7. Standar Mutu yang Perlu Diperhatikan
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Dalam bisnis rempah dan herbal, kualitas itu bukan cuma soal
              &ldquo;kering&rdquo;. Ada beberapa aspek penting:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-rose-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Aspek Mutu
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Kenapa Penting
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Kadar air rendah
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Mengurangi risiko jamur
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Warna cerah alami
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Menunjukkan bahan tidak rusak
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Aroma khas kuat
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Menandakan kualitas rimpang baik
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Irisan seragam
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Memudahkan pengeringan merata
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Bebas tanah dan kotoran
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Penting untuk keamanan pangan
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Kemasan rapat
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Menjaga aroma dan mencegah lembap
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Untuk simplisia, masalah terbesar biasanya{" "}
              <strong>jamur, warna kusam, dan aroma hilang</strong>. Jadi
              pengeringan harus serius. Jangan cuma &ldquo;yang penting
              kering&rdquo;, karena pembeli industri biasanya lebih galak
              daripada mantan auditor.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              8. Catatan Keamanan Konsumsi
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Walaupun temu lawak adalah bahan herbal alami, konsumsi tetap
              perlu wajar. Produk herbal sebaiknya tidak diposisikan sebagai
              pengganti obat dokter, terutama untuk penyakit serius.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Untuk produk komersial, pilih bahan baku bersih dan hindari klaim
              berlebihan seperti &ldquo;menyembuhkan liver&rdquo;,
              &ldquo;mengobati kanker&rdquo;, atau &ldquo;pasti menyembuhkan
              penyakit&rdquo;. BPOM juga menekankan bahwa obat bahan alam yang
              terdaftar dan diawasi memiliki jaminan keamanan, khasiat, dan mutu
              yang lebih jelas.
            </p>

            <blockquote className="border-l-4 border-amber-600 bg-amber-50 italic text-gray-800 p-6 my-8 rounded-r-lg">
              <p className="text-lg leading-relaxed">
                Temu lawak dapat menjadi bagian dari gaya hidup sehat dan
                tradisi herbal Indonesia, tetapi penggunaannya tetap perlu
                disesuaikan dengan kondisi tubuh masing-masing.
              </p>
            </blockquote>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              9. Kesimpulan
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Temu lawak adalah salah satu rimpang herbal Indonesia yang punya
              nilai lengkap: budaya, kesehatan, dan ekonomi. Dari sisi tradisi,
              temu lawak sudah lama digunakan sebagai bahan jamu. Dari sisi
              regulasi, klaim yang aman antara lain membantu memelihara
              kesehatan fungsi hati dan membantu memperbaiki nafsu makan. Dari
              sisi bisnis, temu lawak bisa dikembangkan menjadi simplisia,
              serbuk, minuman herbal, hingga bahan baku ekstrak.
            </p>

            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 p-6 my-8 rounded-lg">
              <p className="text-gray-800 font-medium text-lg">
                Kuncinya ada pada <strong>kualitas bahan baku</strong>,{" "}
                <strong>proses pengeringan</strong>,{" "}
                <strong>standar kebersihan</strong>, dan{" "}
                <strong>narasi produk yang jujur</strong>. Kalau digarap serius,
                temu lawak bukan cuma tanaman pekarangan — tapi bisa menjadi
                komoditas herbal bernilai tinggi dari desa untuk pasar modern.
              </p>
            </div>

            {/* Sumber */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Sumber Referensi
            </h2>

            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              <li>
                BPOM —{" "}
                <a
                  href="https://standar-otskk.pom.go.id/otskk-db/kategori/daftar-nama-bahan-obat-bahan-alam-dan-klaim-yang-disetujui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-700 hover:text-yellow-800 underline"
                >
                  Daftar Nama Bahan Obat Bahan Alam dan Klaim yang Disetujui
                </a>
              </li>
              <li>
                Jurnal IKbis —{" "}
                <a
                  href="https://jurnal.ikbis.ac.id/index.php/infokes/article/download/400/248/1372"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-700 hover:text-yellow-800 underline"
                >
                  Pharmacological Activities of Curcuma xanthorrhiza
                </a>
              </li>
              <li>
                BPOM —{" "}
                <a
                  href="https://www.pom.go.id/siaran-pers/indonesia-ekspor-temulawak-ke-kamboja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-700 hover:text-yellow-800 underline"
                >
                  Indonesia Ekspor Temulawak ke Kamboja
                </a>
              </li>
              <li>
                BPOM Intelijen —{" "}
                <a
                  href="https://intelijen.pom.go.id/hot-issue/bangga-konsumsi-obat-bahan-alam-indonesia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-700 hover:text-yellow-800 underline"
                >
                  Bangga Konsumsi Obat Bahan Alam Indonesia
                </a>
              </li>
            </ol>

            {/* CTA Order */}
            <section className="mt-16 not-prose">
              <div className="rounded-2xl bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 border-2 border-yellow-200 p-6 sm:p-10 shadow-sm">
                <div className="text-center mb-8">
                  <span className="inline-block px-3 py-1 bg-yellow-600 text-white text-xs font-bold tracking-wider rounded-full mb-4">
                    HUBUNGI KAMI
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                    Tertarik Order Temu Lawak?
                  </h2>
                  <p className="text-gray-700 max-w-2xl mx-auto">
                    Kami menyediakan temu lawak <strong>basah</strong> (rimpang
                    segar) dan <strong>kering</strong> (simplisia / irisan)
                    untuk kebutuhan jamu, minuman herbal, kuliner, dan industri.
                    Tersedia juga untuk partai besar &amp; inquiry ekspor.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  {/* Basah */}
                  <a
                    href={`https://wa.me/6285228003820?text=${encodeURIComponent(
                      "Halo, saya tertarik order Temu Lawak BASAH (rimpang segar). Mohon info harga, minimum order, dan ketersediaan stok. Terima kasih."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white rounded-xl p-6 border-2 border-yellow-200 hover:border-yellow-500 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-yellow-100 text-yellow-700 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                        <Sprout className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-bold text-yellow-700 uppercase tracking-wider mb-1">
                          Order
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          Temu Lawak Basah
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          Rimpang segar baru panen. Cocok untuk pabrik jamu,
                          pengolah simplisia, dan pasar tradisional.
                        </p>
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 group-hover:text-green-700">
                          <MessageCircle className="w-4 h-4" />
                          Order via WhatsApp
                        </span>
                      </div>
                    </div>
                  </a>

                  {/* Kering */}
                  <a
                    href={`https://wa.me/6285228003820?text=${encodeURIComponent(
                      "Halo, saya tertarik order Temu Lawak KERING (simplisia / irisan kering). Mohon info harga, kadar air, minimum order, dan ketersediaan stok. Terima kasih."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white rounded-xl p-6 border-2 border-amber-200 hover:border-amber-500 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-colors">
                        <Package className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">
                          Order
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          Temu Lawak Kering
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          Simplisia / irisan kering, kadar air terkontrol. Siap
                          untuk industri herbal, ekstrak, kapsul, dan ekspor.
                        </p>
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 group-hover:text-green-700">
                          <MessageCircle className="w-4 h-4" />
                          Order via WhatsApp
                        </span>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-yellow-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-3 sm:gap-6 text-sm">
                    <Link
                      href="/komoditas/kunyit"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-yellow-700 text-white font-semibold rounded-lg hover:bg-yellow-800 transition-colors"
                    >
                      <Package className="w-4 h-4" />
                      Lihat Katalog Ekspor Lengkap
                      <ArrowLeft className="w-4 h-4 rotate-180" />
                    </Link>
                    <span className="text-gray-600 text-center">
                      atau email{" "}
                      <a
                        href="mailto:info@cakrapamungkas.org?subject=Inquiry%20Temu%20Lawak%20(Curcuma%20Xanthorrhiza)"
                        className="font-semibold text-yellow-700 hover:text-yellow-800 underline"
                      >
                        info@cakrapamungkas.org
                      </a>
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 text-center mt-3">
                    Katalog ekspor: spesifikasi pharma-grade, kandungan
                    kurkumin, FOB ports, MOQ, dan dokumentasi lengkap.
                  </p>
                </div>
              </div>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link
                href="/artikel"
                className="inline-flex items-center gap-2 text-yellow-700 hover:text-yellow-800 font-medium transition-colors"
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
