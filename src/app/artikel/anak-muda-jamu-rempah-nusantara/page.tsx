import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, Instagram, Sprout } from "lucide-react";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/json-ld";
import { getArticleBySlug } from "@/data/articles";
import { RelatedArticles } from "@/components/related-articles";

export const metadata = {
  alternates: { canonical: "/artikel/anak-muda-jamu-rempah-nusantara" },
  title:
    "Anak Muda, Jamu, dan Perlawanan Sunyi terhadap Lupa | Cakra Pamungkas",
  description:
    "Ketika rempah Nusantara tidak sekadar dijual, tapi dihidupkan kembali. Cerita anak muda yang menjaga jahe, kunyit, dan temulawak tetap relevan di tengah gempuran kopi franchise dan minuman instan.",
  keywords: [
    "Jamu",
    "Rempah Nusantara",
    "Anak Muda Jamu",
    "Kedai Jamu Modern",
    "Temulawak",
    "Jahe",
    "Kunyit",
    "Herbal Indonesia",
    "Functional Drink",
    "Wellness",
    "Pojok Herbal",
  ],
};

export default function AnakMudaJamuArtikelPage() {
  const article = getArticleBySlug("anak-muda-jamu-rempah-nusantara");

  return (
    <>
      {article && <ArticleJsonLd article={article} />}
      {article && (
        <BreadcrumbJsonLd
          items={[
            { name: "Beranda", href: "/" },
            { name: "Artikel", href: "/artikel" },
            {
              name: article.title,
              href: `/artikel/anak-muda-jamu-rempah-nusantara`,
            },
          ]}
        />
      )}
      <article className="bg-white">
        {/* Header */}
        <header className="bg-gradient-to-br from-yellow-900 via-amber-800 to-orange-800 py-12 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/artikel"
              className="inline-flex items-center gap-2 text-yellow-200 hover:text-yellow-100 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Kembali ke Artikel</span>
            </Link>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full">
                FEATURED
              </span>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
                Herbal
              </span>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
                Jamu
              </span>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
                Anak Muda
              </span>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
                Rempah Nusantara
              </span>
            </div>

            <p className="text-yellow-300 italic text-sm sm:text-base font-medium tracking-wide mb-3">
              Ketika rempah Nusantara tidak sekadar dijual, tapi dihidupkan
              kembali
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Anak Muda, Jamu, dan Perlawanan Sunyi terhadap Lupa
            </h1>
            <p className="text-xl text-yellow-100 leading-relaxed mb-6">
              Di tengah gempuran kopi franchise dan minuman instan, masih ada
              anak muda yang memilih menjaga warisan rempah Indonesia tetap
              hidup &mdash; satu cangkir jamu, satu cerita, dalam satu waktu.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-yellow-200">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">12 Mei 2026</span>
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
            src="/images/artikel/6059706376985972407.jpg"
            alt="Tampak depan kedai Pojok Herbal — papan nama @pojokherbal.id dengan jam buka, anak muda berbincang santai di dalam kedai yang dipenuhi rak rempah dan etalase produk herbal"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="prose prose-lg max-w-none">
            {/* Lead */}
            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-10 rounded-r-lg">
              <p className="text-gray-800 leading-relaxed">
                Sore itu, sebuah kedai kecil bercahaya hangat tampak hidup di
                tengah malam. Bukan <em>coffee shop</em> modern dengan mesin
                espresso raksasa atau musik elektronik keras. Tempat itu menjual
                sesuatu yang lebih tua dari republik ini sendiri:{" "}
                <strong>jamu dan rempah Nusantara</strong>. Namun yang menarik
                bukan hanya produknya &mdash; yang menarik adalah siapa yang
                menjaganya.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Anak-anak muda duduk, berbincang, meracik, melayani pelanggan,
              sambil dikelilingi rak-rak berisi aneka herbal, akar, daun
              kering, dan ramuan tradisional. Di tempat seperti inilah kita
              sadar bahwa rempah bukan sekadar komoditas dagang. Ia adalah{" "}
              <strong>identitas budaya</strong>, ilmu kesehatan leluhur,
              sekaligus peluang ekonomi masa depan.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Rempah Indonesia: Harta yang Sering Kita Anggap Biasa
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Indonesia sejak dulu dikenal dunia karena rempahnya. Cengkeh,
              pala, kayu manis, jahe, kunyit, temulawak, kapulaga, hingga lada
              pernah menjadi alasan bangsa-bangsa asing berlayar ribuan kilometer
              menuju Nusantara.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Ironisnya, ketika dunia mulai kembali mencari produk alami dan
              herbal, banyak generasi muda Indonesia justru mulai jauh dari
              rempah-rempahnya sendiri. Padahal hari ini tren global sedang
              berubah ke arah yang sangat menguntungkan kita:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
              <li>Minuman herbal naik daun di pasar Asia maupun Eropa</li>
              <li>
                Produk <em>natural wellness</em> meningkat tajam setelah
                pandemi
              </li>
              <li>
                <em>Functional drink</em> menjadi pasar miliaran dolar global
              </li>
              <li>
                Produk antioksidan dan imun alami semakin dicari konsumen
                premium
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              Dan Indonesia, sebenarnya, duduk di atas &ldquo;tambang
              emas&rdquo; bernama <strong>biodiversitas rempah</strong>.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Kedai Jamu Modern: Tradisi yang Naik Kelas
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Tempat-tempat seperti ini membuktikan satu hal penting: jamu
              tidak harus identik dengan kesan kuno. Dengan konsep sederhana
              namun hangat, jamu bisa tampil modern, nyaman, estetik, dan dekat
              dengan generasi muda.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Bangku kayu, pencahayaan hangat, tanaman hijau, serta rak rempah
              justru menciptakan suasana yang lebih &ldquo;hidup&rdquo;
              dibanding banyak tempat nongkrong modern yang terasa dingin dan
              seragam. Yang dijual bukan cuma minuman &mdash; yang dijual
              adalah:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-8">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <div className="text-amber-700 font-bold text-sm uppercase tracking-wider mb-2">
                  Pengalaman
                </div>
                <p className="text-gray-700 text-sm">
                  Aroma rempah, suara tumbukan, dan ritual menyeduh yang tidak
                  bisa direplikasi mesin espresso.
                </p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <div className="text-amber-700 font-bold text-sm uppercase tracking-wider mb-2">
                  Cerita
                </div>
                <p className="text-gray-700 text-sm">
                  Setiap rimpang punya asal-usul: dari kebun mana, siapa yang
                  menanam, kenapa dipakai.
                </p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <div className="text-amber-700 font-bold text-sm uppercase tracking-wider mb-2">
                  Kesehatan
                </div>
                <p className="text-gray-700 text-sm">
                  Minuman fungsional berbasis bahan alami yang sudah dipakai
                  ratusan tahun oleh nenek moyang.
                </p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <div className="text-amber-700 font-bold text-sm uppercase tracking-wider mb-2">
                  Identitas Lokal
                </div>
                <p className="text-gray-700 text-sm">
                  Bangga jadi orang Indonesia tanpa harus jadi nostalgia
                  kosong.
                </p>
              </div>
            </div>

            <div className="relative h-[300px] sm:h-[450px] rounded-2xl overflow-hidden my-10 shadow-lg">
              <Image
                src="/images/artikel/6059706376985972406.jpg"
                alt="Interior Cafe Djamu Pojok Herbal: bangku dan meja kayu, pencahayaan hangat, etalase rempah dan kulkas botol jamu di dinding belakang"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Temulawak, Jahe, dan Masa Depan Industri Herbal
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Salah satu rempah yang mulai kembali dilirik adalah{" "}
              <strong>temulawak</strong>. Dulu dianggap tanaman kampung,
              sekarang mulai diteliti serius untuk kesehatan pencernaan,
              antiinflamasi, peningkatan nafsu makan, hingga bahan ekstrak
              herbal modern.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Begitu juga jahe, kunyit, kayu manis, dan kapulaga &mdash; semua
              punya nilai ekonomi tinggi kalau dikembangkan serius:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-yellow-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Bentuk Produk
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Pasar &amp; Nilai Tambah
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Bubuk herbal
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Bahan baku jamu instan, suplemen, dan bumbu &mdash; siap
                      retail.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Minuman siap saji
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Functional beverage di kafe, retail modern, dan
                      e-commerce.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Essential oil / minyak atsiri
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Industri aromaterapi, kosmetik, dan personal care
                      premium.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Ekstrak terstandar
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Bahan baku kapsul herbal, suplemen, dan industri farmasi.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      Bahan baku ekspor
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Industri kesehatan global &mdash; pasar yang terus
                      tumbuh setiap tahun.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="relative h-[300px] sm:h-[450px] rounded-2xl overflow-hidden my-10 shadow-lg max-w-md mx-auto">
              <Image
                src="/images/artikel/6059706376985972404.jpg"
                alt="Botol minuman tradisional Djampi Oesodo Kinanti varian Jahe Pletok 250 ml — produk minuman herbal kemasan dari Pojok Herbal"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 500px"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-medium">
                  Jahe Pletok dalam botol &mdash; rempah tradisional yang
                  dikemas modern dan siap dijual ritel.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Anak Muda dan Kebangkitan Rempah Nusantara
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Yang membuat optimis adalah mulai muncul generasi baru yang tidak
              malu menjual jamu. Mereka justru mengemasnya ulang: lebih modern,
              lebih bersih, lebih estetik, dan lebih mudah diterima pasar.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Ini bukan nostalgia. Ini <strong>transformasi</strong>.
            </p>

            <div className="relative h-[300px] sm:h-[450px] rounded-2xl overflow-hidden my-10 shadow-lg">
              <Image
                src="/images/artikel/6059706376985972405.jpg"
                alt="Etalase dan rak produk Pojok Herbal: berbagai kemasan jamu, simplisia dalam toples, dan kulkas berisi botol minuman herbal siap minum"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Karena masa depan industri herbal Indonesia kemungkinan tidak
              lagi berbentuk &ldquo;gendong keliling&rdquo;, tetapi:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
              <li>
                <strong>Cafe herbal</strong> dengan menu fungsional dan
                pengalaman yang Instagrammable
              </li>
              <li>
                <strong>Functional beverage</strong> dalam botol siap minum,
                tersedia di minimarket sampai bandara
              </li>
              <li>
                <strong>Wellness brand</strong> yang punya cerita, sertifikasi,
                dan traceability
              </li>
              <li>
                Produk kesehatan <strong>berbasis rempah</strong> yang masuk ke
                apotek dan ekspor
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              Dan semuanya bisa dimulai dari satu kedai kecil yang sederhana
              &mdash; asal yang menjaganya orang yang tepat.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Menjaga Rempah, Menjaga Identitas
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Di saat banyak orang sibuk mengejar tren luar negeri, masih ada
              anak muda yang memilih menjaga aroma rempah Nusantara tetap
              hidup. Mungkin tempat itu kecil. Mungkin sederhana. Tetapi di
              tempat seperti itulah <strong>budaya bertahan</strong>.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Tempat seperti ini bukan sekadar kedai minuman herbal. Ia adalah
              ruang cerita, ruang belajar, dan ruang perlawanan kecil terhadap
              hilangnya budaya lokal. Dari jahe, kunyit, temulawak, hingga
              berbagai ramuan tradisional lain, semua diracik bukan hanya untuk
              dijual &mdash; tetapi untuk terus dikenalkan kepada generasi
              baru.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Bangsa yang besar bukan hanya bangsa yang mampu menciptakan
              teknologi modern, tetapi juga bangsa yang mampu menjaga akar
              warisannya sendiri. Bisa jadi, masa depan Indonesia tidak hanya
              ada di silikon dan kecerdasan buatan &mdash; tetapi juga di
              jahe, temulawak, kunyit, dan rempah-rempah yang sejak dulu
              tumbuh di tanahnya sendiri.
            </p>

            {/* Shoutout */}
            <section className="mt-16 not-prose">
              <div className="bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 border border-yellow-200 rounded-2xl p-8 sm:p-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-yellow-600 text-white flex items-center justify-center">
                    <Sprout className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-yellow-700 uppercase tracking-wider mb-1">
                      Shoutout
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Untuk anak muda yang masih meracik rempah
                    </h3>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Salah satu ruang yang konsisten mengangkat jamu dan rempah
                  Nusantara dengan cara yang segar dan dekat dengan generasi
                  baru bisa kamu lihat di Instagram{" "}
                  <strong>@pojokherbal.id</strong>. Tempat seperti ini layak
                  didukung &mdash; karena setiap cangkir jamu yang diseduh di
                  sana adalah satu cerita yang tidak hilang ditelan zaman.
                </p>
                <a
                  href="https://instagram.com/pojokherbal.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-semibold rounded-lg hover:from-yellow-700 hover:to-orange-700 transition-all"
                >
                  <Instagram className="w-5 h-5" />
                  Kunjungi @pojokherbal.id
                </a>
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
      <RelatedArticles currentSlug="anak-muda-jamu-rempah-nusantara" />
    </>
  );
}
