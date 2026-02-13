import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { ArticleJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/json-ld";
import { getArticleBySlug } from "@/data/articles";
import { articleFaqs } from "@/data/article-faqs";

export const metadata = {
  title: "Panduan Lengkap Asuransi Usaha Tani Padi (AUTP) | Cakra Pamungkas",
  description:
    "Panduan lengkap Asuransi Usaha Tani Padi (AUTP): syarat pendaftaran, premi Rp36.000/ha dengan subsidi 80%, risiko yang ditanggung, proses klaim, dan cara mendaftar melalui Poktan, PPL, dan Jasindo.",
};

export default function AUTPArtikelPage() {
  const article = getArticleBySlug("asuransi-usaha-tani-padi");

  return (
    <>
      {article && <ArticleJsonLd article={article} />}
      {article && (
        <BreadcrumbJsonLd
          items={[
            { name: "Beranda", href: "/" },
            { name: "Artikel", href: "/artikel" },
            { name: article.title, href: `/artikel/asuransi-usaha-tani-padi` },
          ]}
        />
      )}
      <FaqJsonLd faqs={articleFaqs["asuransi-usaha-tani-padi"] || []} />
      <article className="bg-white">
      {/* Header */}
      <header className="bg-gradient-to-br from-amber-950 via-amber-900 to-orange-800 py-12 lg:py-20">
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
              REGULASI
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              AUTP
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Asuransi Pertanian
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Perlindungan Petani
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Klaim Asuransi
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Panduan Lengkap Asuransi Usaha Tani Padi (AUTP)
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-amber-200">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">12 Februari 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">6 menit baca</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-700 leading-relaxed mb-8">
            Gagal panen akibat banjir, kekeringan, atau serangan hama merupakan
            ancaman nyata yang dihadapi jutaan petani padi di Indonesia setiap
            musim tanam. Untuk melindungi petani dari kerugian finansial akibat
            risiko-risiko tersebut, pemerintah Indonesia melalui Kementerian
            Pertanian meluncurkan program Asuransi Usaha Tani Padi (AUTP). Dengan
            premi yang sangat terjangkau berkat subsidi pemerintah sebesar 80%,
            AUTP menjadi jaring pengaman penting bagi kesejahteraan petani dan
            keberlanjutan produksi pangan nasional.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Apa Itu Asuransi Usaha Tani Padi (AUTP)?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Asuransi Usaha Tani Padi (AUTP) adalah program perlindungan bagi
            petani padi yang diselenggarakan oleh PT Asuransi Jasa Indonesia
            (Jasindo) bekerja sama dengan Kementerian Pertanian Republik
            Indonesia. Program ini dirancang untuk memberikan ganti rugi kepada
            petani apabila mengalami gagal panen akibat bencana alam, serangan
            Organisme Pengganggu Tumbuhan (OPT), atau penyakit tanaman.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            AUTP pertama kali diperkenalkan pada tahun 2015 berdasarkan Undang-Undang
            Nomor 19 Tahun 2013 tentang Perlindungan dan Pemberdayaan Petani.
            Sejak diluncurkan, program ini terus berkembang dan semakin banyak
            petani yang terdaftar sebagai peserta. Hingga saat ini, AUTP telah
            melindungi jutaan hektar lahan padi di seluruh Indonesia dan menjadi
            salah satu instrumen penting dalam menjaga ketahanan pangan nasional.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
            <p className="text-gray-800 font-medium mb-2">
              Dasar Hukum AUTP
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>UU No. 19 Tahun 2013 tentang Perlindungan dan Pemberdayaan Petani</li>
              <li>Permentan No. 40 Tahun 2015 tentang Fasilitasi Asuransi Pertanian</li>
              <li>Keputusan Menteri Pertanian tentang Pedoman Bantuan Premi AUTP</li>
              <li>Peraturan OJK terkait penyelenggaraan asuransi pertanian</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Mengapa AUTP Penting bagi Petani?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Pertanian padi merupakan sektor yang sangat rentan terhadap berbagai
            risiko, mulai dari perubahan iklim hingga serangan hama. Tanpa
            perlindungan yang memadai, petani yang mengalami gagal panen tidak
            hanya kehilangan pendapatan, tetapi juga modal usaha tani mereka.
            Kondisi ini dapat menyebabkan petani terjebak dalam lingkaran
            kemiskinan dan bahkan meninggalkan profesi sebagai petani.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Perlindungan Finansial
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                AUTP memberikan ganti rugi finansial yang membantu petani
                memulihkan modal usaha tani setelah gagal panen.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>- Jaminan ganti rugi hingga Rp6.000.000/ha</li>
                <li>- Pemulihan modal tanam</li>
                <li>- Mencegah hutang berkepanjangan</li>
                <li>- Menjaga kelangsungan usaha tani</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Keberanian Berusaha Tani
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Dengan adanya jaminan perlindungan, petani lebih berani
                berinvestasi dan mengadopsi teknologi baru.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>- Percaya diri menanam di musim berisiko</li>
                <li>- Berani menggunakan varietas unggul</li>
                <li>- Peningkatan produktivitas lahan</li>
                <li>- Mendorong regenerasi petani muda</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Ketahanan Pangan Nasional
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                AUTP berkontribusi pada stabilitas produksi pangan nasional
                dengan menjaga keberlanjutan usaha tani.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>- Stabilitas produksi beras nasional</li>
                <li>- Mengurangi impor beras</li>
                <li>- Menjaga pasokan pangan domestik</li>
                <li>- Mendukung kedaulatan pangan</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Kesejahteraan Petani
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Program AUTP secara langsung berkontribusi pada peningkatan
                kesejahteraan dan kualitas hidup petani.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>- Mengurangi tingkat kemiskinan petani</li>
                <li>- Jaminan pendapatan minimum</li>
                <li>- Akses ke program pemerintah lainnya</li>
                <li>- Meningkatkan taraf hidup keluarga tani</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Syarat Pendaftaran AUTP
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Untuk dapat menjadi peserta AUTP, petani harus memenuhi beberapa
            persyaratan administratif dan teknis. Berikut adalah syarat-syarat
            yang harus dipenuhi oleh calon peserta AUTP:
          </p>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 my-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Persyaratan Peserta AUTP
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  1. Petani Pemilik dan/atau Penggarap
                </p>
                <p className="text-sm text-gray-600">
                  Merupakan petani yang memiliki lahan sendiri atau menggarap
                  lahan milik orang lain untuk budidaya padi.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  2. Tergabung dalam Kelompok Tani (Poktan)
                </p>
                <p className="text-sm text-gray-600">
                  Petani harus terdaftar sebagai anggota kelompok tani yang
                  terdaftar di Dinas Pertanian setempat.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  3. Memiliki Luas Lahan Maksimal 2 Hektar
                </p>
                <p className="text-sm text-gray-600">
                  Subsidi premi diberikan untuk lahan maksimal 2 hektar per
                  petani per musim tanam. Lahan di atas 2 hektar tetap bisa
                  diasuransikan dengan premi penuh.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  4. Melengkapi Dokumen Administrasi
                </p>
                <p className="text-sm text-gray-600">
                  KTP, kartu tani (jika ada), surat keterangan lahan dari
                  kepala desa, dan data luas lahan yang akan diasuransikan.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Dokumen yang Diperlukan
          </h3>

          <ul className="space-y-4 my-6">
            <li className="flex items-start gap-3">
              <span className="text-amber-600 text-xl">✓</span>
              <div>
                <strong className="text-gray-900">Fotokopi KTP</strong>
                <p className="text-gray-600 text-sm">
                  Kartu Tanda Penduduk yang masih berlaku sebagai identitas
                  peserta asuransi.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 text-xl">✓</span>
              <div>
                <strong className="text-gray-900">Surat Keterangan Lahan</strong>
                <p className="text-gray-600 text-sm">
                  Surat keterangan kepemilikan atau penggarapan lahan dari kepala
                  desa atau lurah setempat.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 text-xl">✓</span>
              <div>
                <strong className="text-gray-900">Data Lahan</strong>
                <p className="text-gray-600 text-sm">
                  Informasi lokasi lahan (desa, kecamatan, kabupaten), luas
                  lahan, jenis varietas padi yang ditanam, dan musim tanam.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 text-xl">✓</span>
              <div>
                <strong className="text-gray-900">Bukti Keanggotaan Poktan</strong>
                <p className="text-gray-600 text-sm">
                  Surat keterangan terdaftar sebagai anggota kelompok tani
                  yang aktif di wilayah setempat.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 text-xl">✓</span>
              <div>
                <strong className="text-gray-900">Bukti Pembayaran Premi (Swadaya)</strong>
                <p className="text-gray-600 text-sm">
                  Bukti pembayaran bagian premi yang ditanggung petani sebesar
                  20% dari total premi.
                </p>
              </div>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Biaya Premi dan Subsidi Pemerintah
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Salah satu keunggulan utama AUTP adalah preminya yang sangat
            terjangkau bagi petani. Pemerintah melalui APBN memberikan subsidi
            sebesar 80% dari total premi, sehingga petani hanya perlu membayar
            20% sisanya. Berikut rincian biaya premi AUTP:
          </p>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Komponen
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Nominal per Hektar
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Persentase
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Total Premi</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp36.000
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">100%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Subsidi Pemerintah (APBN)</td>
                  <td className="px-6 py-4 text-sm font-semibold text-green-700">
                    Rp28.800
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">80%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Bagian Petani (Swadaya)</td>
                  <td className="px-6 py-4 text-sm font-semibold text-amber-700">
                    Rp7.200
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">20%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
            <p className="text-gray-800 font-medium mb-2">
              Premi Sangat Terjangkau
            </p>
            <p className="text-gray-700">
              Dengan membayar hanya <strong>Rp7.200 per hektar per musim tanam</strong>,
              petani sudah mendapatkan perlindungan asuransi dengan nilai
              pertanggungan hingga <strong>Rp6.000.000 per hektar</strong>. Ini
              berarti rasio manfaat terhadap premi sangat tinggi, menjadikan
              AUTP sebagai investasi perlindungan yang sangat menguntungkan bagi
              petani.
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Perlu dicatat bahwa beberapa Pemerintah Daerah (Pemda) juga
            memberikan subsidi tambahan dari APBD, sehingga di beberapa
            daerah petani bisa mendapatkan premi yang lebih rendah atau bahkan
            gratis. Kebijakan ini bervariasi di setiap kabupaten/kota, sehingga
            petani perlu menanyakan informasi terbaru kepada Dinas Pertanian
            setempat atau Penyuluh Pertanian Lapangan (PPL).
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Cakupan dan Lingkup Perlindungan
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            AUTP memberikan perlindungan kepada petani terhadap kerusakan
            tanaman padi yang disebabkan oleh berbagai risiko. Perlindungan
            berlaku untuk satu musim tanam, yaitu sejak tanam hingga panen
            (kurang lebih 4 bulan). Berikut adalah lingkup perlindungan AUTP:
          </p>

          <div className="space-y-6 my-8">
            <div className="border-l-4 border-amber-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Periode Perlindungan
              </h4>
              <p className="text-gray-700 mb-3">
                Jaminan berlaku sejak tanaman padi berumur 10 hari setelah
                tanam (HST) atau 30 hari setelah semai hingga panen. Petani
                harus mendaftarkan lahannya sebelum tanaman berumur 30 hari
                setelah tanam.
              </p>
              <p className="text-sm text-gray-600">
                Durasi perlindungan: satu musim tanam (kurang lebih 4 bulan)
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Tingkat Kerusakan yang Dijamin
              </h4>
              <p className="text-gray-700 mb-3">
                Klaim dapat diajukan apabila tanaman padi mengalami kerusakan
                dengan intensitas kerusakan lebih dari 75% dari luas lahan yang
                diasuransikan. Kerusakan ini harus disebabkan oleh risiko yang
                dijamin dalam polis.
              </p>
              <p className="text-sm text-gray-600">
                Ambang batas kerusakan: minimal 75% dari luas lahan tertanggung
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Nilai Pertanggungan
              </h4>
              <p className="text-gray-700 mb-3">
                Nilai pertanggungan atau ganti rugi yang diberikan kepada petani
                adalah sebesar Rp6.000.000 per hektar per musim tanam. Jumlah
                ini dimaksudkan untuk mengganti biaya produksi (benih, pupuk,
                pestisida, dan tenaga kerja) yang telah dikeluarkan petani.
              </p>
              <p className="text-sm text-gray-600">
                Ganti rugi maksimal: Rp6.000.000/hektar/musim tanam
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Risiko yang Ditanggung AUTP
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            AUTP memberikan perlindungan terhadap beberapa jenis risiko utama
            yang sering menyebabkan gagal panen di Indonesia. Berikut adalah
            risiko-risiko yang ditanggung:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Banjir
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Kerusakan tanaman padi akibat genangan air yang berlebihan
                karena curah hujan tinggi, meluapnya sungai, atau kerusakan
                infrastruktur irigasi.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>- Genangan air berkepanjangan</li>
                <li>- Luapan sungai dan waduk</li>
                <li>- Banjir bandang</li>
                <li>- Kerusakan akibat arus air deras</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Kekeringan
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Kerusakan tanaman padi akibat kekurangan air karena musim
                kemarau panjang, berkurangnya debit air irigasi, atau perubahan
                pola cuaca.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>- Musim kemarau berkepanjangan</li>
                <li>- Kegagalan sumber air irigasi</li>
                <li>- Penurunan muka air tanah</li>
                <li>- Dampak El Nino</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Serangan Hama
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Kerusakan tanaman padi akibat serangan hama yang melampaui
                ambang ekonomi dan tidak dapat dikendalikan dengan penanganan
                biasa.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>- Wereng batang cokelat (WBC)</li>
                <li>- Penggerek batang padi</li>
                <li>- Tikus sawah</li>
                <li>- Walang sangit dan hama lainnya</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Penyakit Tanaman
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Kerusakan tanaman padi akibat penyakit yang disebabkan oleh
                jamur, bakteri, atau virus yang menyerang secara masif.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>- Blas (Pyricularia oryzae)</li>
                <li>- Hawar daun bakteri (HDB)</li>
                <li>- Tungro</li>
                <li>- Busuk batang dan penyakit lainnya</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Proses Klaim AUTP: Langkah demi Langkah
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Apabila terjadi kerusakan tanaman padi yang memenuhi syarat klaim,
            petani dapat mengajukan klaim asuransi melalui prosedur berikut.
            Proses klaim dirancang agar mudah dan dapat diakses oleh petani
            dengan bantuan petugas terkait.
          </p>

          <div className="space-y-6 my-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Laporan Kerusakan
                </h4>
                <p className="text-gray-700">
                  Petani melaporkan adanya kerusakan tanaman kepada Ketua
                  Kelompok Tani (Poktan) atau Penyuluh Pertanian Lapangan (PPL)
                  paling lambat 7 hari setelah kejadian kerusakan. Laporan harus
                  mencakup lokasi lahan, perkiraan luas kerusakan, dan penyebab
                  kerusakan.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Pemberitahuan ke Jasindo
                </h4>
                <p className="text-gray-700">
                  Ketua Poktan atau PPL meneruskan laporan kerusakan kepada
                  PT Asuransi Jasa Indonesia (Jasindo) melalui formulir
                  pemberitahuan kerusakan. Pemberitahuan ini harus disertai
                  data awal seperti nomor polis, nama petani, dan lokasi lahan
                  yang rusak.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Verifikasi dan Survei Lapangan
                </h4>
                <p className="text-gray-700">
                  Tim verifikasi yang terdiri dari petugas Jasindo, petugas
                  Dinas Pertanian, PPL, dan Pengamat Hama (POPT-PHP) akan
                  melakukan survei lapangan untuk memverifikasi kerusakan.
                  Survei dilakukan dalam waktu paling lambat 30 hari setelah
                  laporan diterima. Tim akan menilai tingkat kerusakan dan
                  penyebabnya.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Berita Acara Hasil Pemeriksaan
                </h4>
                <p className="text-gray-700">
                  Setelah survei lapangan, tim verifikasi menyusun Berita Acara
                  Hasil Pemeriksaan Kerusakan (BAHPK) yang memuat data luas
                  kerusakan, intensitas kerusakan, penyebab kerusakan, dan
                  rekomendasi klaim. Dokumen ini ditandatangani oleh seluruh
                  anggota tim verifikasi.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                5
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Persetujuan dan Pencairan Klaim
                </h4>
                <p className="text-gray-700">
                  Berdasarkan BAHPK, Jasindo akan memproses klaim dan
                  mencairkan ganti rugi kepada petani. Pencairan klaim
                  dilakukan melalui transfer ke rekening petani atau melalui
                  mekanisme yang disepakati. Proses pencairan memakan waktu
                  paling lambat 14 hari kerja setelah BAHPK disetujui.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Jumlah Klaim dan Pembayaran Ganti Rugi
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Besaran ganti rugi yang diterima petani tergantung pada luas lahan
            yang mengalami kerusakan dan tingkat intensitas kerusakan yang
            terverifikasi oleh tim survei. Berikut adalah rincian pembayaran
            ganti rugi AUTP:
          </p>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Luas Lahan
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Premi Swadaya
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Ganti Rugi Maksimal
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">0,5 Hektar</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Rp3.600</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp3.000.000
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">1 Hektar</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Rp7.200</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp6.000.000
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">2 Hektar (Maks. Subsidi)</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Rp14.400</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Rp12.000.000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8">
            <h4 className="font-bold text-gray-900 mb-3">
              Catatan Penting tentang Ganti Rugi
            </h4>
            <div className="space-y-3 text-sm text-gray-700">
              <p>
                <strong>- Ambang Kerusakan:</strong> Klaim hanya dapat diajukan
                jika kerusakan mencapai lebih dari 75% dari luas lahan yang
                diasuransikan.
              </p>
              <p>
                <strong>- Penyebab Kerusakan:</strong> Kerusakan harus
                disebabkan oleh risiko yang dijamin dalam polis (banjir,
                kekeringan, hama, atau penyakit).
              </p>
              <p>
                <strong>- Waktu Pencairan:</strong> Ganti rugi dicairkan paling
                lambat 14 hari kerja setelah Berita Acara Hasil Pemeriksaan
                Kerusakan disetujui.
              </p>
              <p>
                <strong>- Satu Klaim per Musim:</strong> Setiap polis hanya
                berlaku untuk satu kali klaim dalam satu musim tanam.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Manfaat AUTP bagi Petani
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Program AUTP memberikan berbagai manfaat yang signifikan bagi
            petani, baik secara langsung maupun tidak langsung. Berikut adalah
            manfaat utama yang dapat diperoleh petani dari keikutsertaan dalam
            program AUTP:
          </p>

          <ul className="space-y-4 my-6">
            <li className="flex items-start gap-3">
              <span className="text-amber-600 text-xl">✓</span>
              <div>
                <strong className="text-gray-900">Jaminan Modal Usaha Tani</strong>
                <p className="text-gray-600 text-sm">
                  Ganti rugi AUTP membantu petani memulihkan modal untuk musim
                  tanam berikutnya, termasuk biaya benih, pupuk, pestisida, dan
                  tenaga kerja.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 text-xl">✓</span>
              <div>
                <strong className="text-gray-900">Mengurangi Risiko Finansial</strong>
                <p className="text-gray-600 text-sm">
                  Petani tidak perlu menanggung seluruh kerugian akibat gagal
                  panen seorang diri, karena sebagian risiko telah dialihkan
                  kepada pihak asuransi.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 text-xl">✓</span>
              <div>
                <strong className="text-gray-900">Mencegah Jeratan Hutang</strong>
                <p className="text-gray-600 text-sm">
                  Tanpa asuransi, petani yang gagal panen sering terpaksa
                  berhutang untuk membiayai musim tanam berikutnya. AUTP
                  membantu memutus siklus hutang ini.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 text-xl">✓</span>
              <div>
                <strong className="text-gray-900">Mendorong Adopsi Teknologi</strong>
                <p className="text-gray-600 text-sm">
                  Dengan jaminan perlindungan, petani lebih berani menggunakan
                  varietas unggul, pupuk berimbang, dan teknologi pertanian
                  modern yang membutuhkan investasi lebih besar.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 text-xl">✓</span>
              <div>
                <strong className="text-gray-900">Meningkatkan Akses Perbankan</strong>
                <p className="text-gray-600 text-sm">
                  Keikutsertaan dalam AUTP dapat meningkatkan kelayakan kredit
                  petani di lembaga keuangan, karena risiko gagal bayar akibat
                  gagal panen berkurang.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 text-xl">✓</span>
              <div>
                <strong className="text-gray-900">Stabilitas Pendapatan Keluarga</strong>
                <p className="text-gray-600 text-sm">
                  AUTP membantu menjaga stabilitas pendapatan keluarga petani,
                  sehingga kebutuhan sehari-hari seperti pendidikan anak dan
                  kesehatan tetap terpenuhi meskipun terjadi gagal panen.
                </p>
              </div>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Cara Mendaftar AUTP
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Pendaftaran AUTP dilakukan secara kolektif melalui Kelompok Tani
            (Poktan) dengan pendampingan Penyuluh Pertanian Lapangan (PPL) dan
            difasilitasi oleh PT Asuransi Jasa Indonesia (Jasindo). Berikut
            adalah langkah-langkah pendaftaran AUTP:
          </p>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 my-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Alur Pendaftaran AUTP
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    Hubungi Ketua Kelompok Tani atau PPL
                  </p>
                  <p className="text-sm text-gray-600">
                    Sampaikan minat untuk mengikuti program AUTP kepada ketua
                    Poktan atau PPL di wilayah Anda. Mereka akan memberikan
                    informasi lengkap tentang persyaratan dan prosedur
                    pendaftaran.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    Siapkan Dokumen Persyaratan
                  </p>
                  <p className="text-sm text-gray-600">
                    Lengkapi semua dokumen yang diperlukan termasuk fotokopi KTP,
                    surat keterangan lahan, dan data lahan yang akan
                    diasuransikan. Pastikan data luas lahan akurat.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    Pengajuan Secara Kolektif melalui Poktan
                  </p>
                  <p className="text-sm text-gray-600">
                    Ketua Poktan mengumpulkan data dan dokumen seluruh anggota
                    yang mendaftar, kemudian mengajukan pendaftaran secara
                    kolektif ke Jasindo melalui PPL atau Dinas Pertanian.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    Pembayaran Premi Swadaya
                  </p>
                  <p className="text-sm text-gray-600">
                    Bayar bagian premi swadaya (20% = Rp7.200/ha) melalui ketua
                    Poktan atau langsung ke rekening yang ditentukan Jasindo.
                    Simpan bukti pembayaran dengan baik.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  5
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    Penerbitan Polis Asuransi
                  </p>
                  <p className="text-sm text-gray-600">
                    Setelah pendaftaran dan pembayaran premi terverifikasi,
                    Jasindo akan menerbitkan polis asuransi yang berlaku untuk
                    satu musim tanam. Pastikan data dalam polis sesuai dengan
                    kondisi lahan sebenarnya.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Peran Masing-Masing Pihak
          </h3>

          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h4 className="text-lg font-bold text-amber-800 mb-3">
                Kelompok Tani (Poktan)
              </h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>- Mengkoordinasi pendaftaran anggota</li>
                <li>- Mengumpulkan dokumen persyaratan</li>
                <li>- Mengumpulkan premi swadaya</li>
                <li>- Membantu proses pelaporan klaim</li>
                <li>- Menjadi penghubung petani dan PPL</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h4 className="text-lg font-bold text-green-800 mb-3">
                PPL (Penyuluh Pertanian)
              </h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>- Mensosialisasikan program AUTP</li>
                <li>- Membantu proses pendaftaran</li>
                <li>- Memverifikasi data lahan petani</li>
                <li>- Mendampingi proses klaim</li>
                <li>- Berkoordinasi dengan Jasindo</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h4 className="text-lg font-bold text-blue-800 mb-3">
                PT Jasindo (Asuransi)
              </h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>- Menerbitkan polis asuransi</li>
                <li>- Memproses klaim petani</li>
                <li>- Melakukan survei kerusakan</li>
                <li>- Mencairkan ganti rugi</li>
                <li>- Menyediakan layanan informasi</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Kesimpulan
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Asuransi Usaha Tani Padi (AUTP) merupakan program strategis
            pemerintah yang dirancang untuk melindungi petani dari risiko gagal
            panen. Dengan premi yang sangat terjangkau yaitu hanya Rp7.200 per
            hektar (setelah subsidi 80%), petani mendapatkan perlindungan
            finansial dengan nilai pertanggungan hingga Rp6.000.000 per hektar.
            Program ini tidak hanya melindungi individual petani, tetapi juga
            berkontribusi pada stabilitas produksi pangan nasional.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Bagi petani yang belum terdaftar, sangat disarankan untuk segera
            bergabung dalam program AUTP. Hubungi Kelompok Tani (Poktan) atau
            Penyuluh Pertanian Lapangan (PPL) di wilayah Anda untuk mendapatkan
            informasi lebih lanjut tentang prosedur pendaftaran. Dengan
            perlindungan AUTP, petani dapat berusaha tani dengan lebih tenang
            dan fokus pada peningkatan produktivitas, karena risiko kerugian
            akibat gagal panen telah ditanggung bersama.
          </p>

          <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl p-8 my-12">
            <p className="text-xl font-bold mb-3">
              Lindungi Usaha Tani Anda Sekarang!
            </p>
            <p className="text-amber-100">
              Jangan menunggu sampai gagal panen terjadi. Segera daftarkan
              lahan padi Anda ke program AUTP melalui Kelompok Tani atau
              Penyuluh Pertanian Lapangan di wilayah Anda. Dengan premi hanya
              Rp7.200 per hektar, masa depan usaha tani Anda akan lebih
              terlindungi. Informasi lebih lanjut dapat diperoleh melalui Dinas
              Pertanian setempat atau kantor cabang PT Jasindo terdekat.
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-white font-medium rounded-xl hover:bg-amber-700 transition-colors"
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
