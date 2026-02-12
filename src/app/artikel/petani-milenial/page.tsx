import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export const metadata = {
  title: "Revolusi Cangkul Digital: Petani Milenial Omzet Miliaran | Cakra Pamungkas",
  description:
    "Bagaimana 300 ribu petani milenial mengubah stigma 'kerja di sawah' menjadi bisnis miliaran rupiah. Profil sukses agropreneur muda yang memanfaatkan smart farming dan pasar digital.",
};

export default function PetaniMilenialPage() {
  return (
    <article className="bg-white">
      {/* Header */}
      <header className="bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-800 py-12 lg:py-20">
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
              FEATURED
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Petani Milenial
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Agribisnis
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Smart Farming
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Revolusi Cangkul Digital: Bagaimana 300 Ribu Petani Milenial Mengubah Stigma "Kerja di Sawah" Menjadi Bisnis Miliaran Rupiah
          </h1>

          <p className="text-xl text-blue-100 mb-6">
            Menepis anggapan kuno bahwa bertani itu suram dan miskin. Gelombang baru agropreneur muda memanfaatkan smart farming dan pasar digital untuk menciptakan kekayaan di pedesaan.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-blue-200">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">12 Februari 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">20 menit baca</span>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative h-[400px] lg:h-[600px] bg-gray-100">
        <Image
          src="/images/petani-drone.png"
          alt="Petani Milenial dengan Teknologi Drone untuk Smart Farming"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Pendahuluan: Runtuhnya Sebuah Stereotip Kuno
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Selama beberapa dekade, jika Anda meminta seorang anak muda Indonesia untuk menggambar 
            seorang "petani", hasilnya hampir pasti seragam: sosok tua, berkulit legam terbakar 
            matahari, memanggul cangkul berat, dengan latar belakang sawah berlumpur dan gubuk reot.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Gambaran ini menanamkan stigma bawah sadar yang kuat: <strong>bertani itu kotor, 
            melelahkan, dan identik dengan kemiskinan</strong>. Tidak heran jika selama bertahun-tahun, 
            arus urbanisasi tak terbendung. Anak muda desa memilih menjadi buruh pabrik atau pekerja 
            sektor informal di kota daripada meneruskan lahan orang tua mereka. Desa ditinggalkan, 
            dan profesi petani mengalami krisis regenerasi yang parah.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <p className="text-lg font-semibold text-gray-900 mb-2">
              💡 Revolusi Sunyi Sedang Terjadi
            </p>
            <p className="text-gray-700">
              Di balik layar, stereotip usang sedang dihancurkan oleh munculnya generasi baru: 
              <strong> Petani Milenial</strong>. Mereka muda, berpendidikan, melek teknologi, dan 
              yang terpenting, mereka tidak melihat pertanian sebagai "nasib buruk", melainkan 
              sebagai <strong>peluang bisnis bernilai miliaran rupiah</strong>.
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-8">
            Gerakan yang kini diperkirakan telah menjaring lebih dari <strong>300 ribu anak muda 
            aktif</strong> di sektor ini (bagian dari target ambisius pemerintah mencetak 2,5 juta 
            petani milenial) sedang mengubah wajah pedesaan Indonesia selamanya.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Paradigma Baru: Bertani dengan Otak, Bukan Sekadar Otot
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Apa yang membedakan 300 ribu petani baru ini dengan generasi sebelumnya? Perbedaan 
            mendasarnya terletak pada <em>mindset</em> atau pola pikir.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Bagi generasi milenial ini, pertanian bukan lagi sekadar pertanian subsisten (hanya 
            cukup untuk makan sendiri), melainkan sebuah <strong>agribisnis modern</strong>. Mereka 
            memandang lahan—sekecil apapun—sebagai aset produksi yang harus dioptimalkan efisiensinya.
          </p>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 my-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🚀 Transformasi Mindset Petani
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-5 border border-gray-200">
                <h4 className="font-bold text-red-700 mb-3">❌ Petani Konvensional</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Bertani dengan "kira-kira"</li>
                  <li>• Kerja keras fisik tanpa data</li>
                  <li>• Pasrah dipermainkan tengkulak</li>
                  <li>• Subsisten (cukup makan sendiri)</li>
                  <li>• Berdoa meminta hujan</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-5 border border-green-200">
                <h4 className="font-bold text-green-700 mb-3">✅ Petani Milenial</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Bertani berbasis data & analisis</li>
                  <li>• Kerja cerdas dengan teknologi</li>
                  <li>• Jual langsung ke konsumen/ekspor</li>
                  <li>• Orientasi bisnis & profit</li>
                  <li>• Kontrol iklim dengan greenhouse</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-8">
            Mereka sadar bahwa cara bertani konvensional yang hanya mengandalkan "kira-kira" dan 
            kerja fisik yang keras tidak lagi relevan menghadapi perubahan iklim dan tuntutan pasar 
            global. Mereka mengganti <strong>"kerja keras" dengan "kerja cerdas"</strong>.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            "Cangkul Digital": Senjata Agropreneur Masa Kini
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Revolusi ini ditenagai oleh apa yang bisa kita sebut sebagai <strong>"Cangkul Digital"</strong>. 
            Ini adalah metafora untuk serangkaian adopsi teknologi yang mengubah cara bercocok tanam:
          </p>

          <div className="space-y-8 my-10">
            <div className="bg-white border-2 border-blue-100 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                  📊
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    1. Presisi Berbasis Data (Smart Farming)
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Mereka tidak lagi menebar pupuk secara buta. Menggunakan sensor tanah dan 
                    aplikasi IoT (<em>Internet of Things</em>), mereka tahu persis berapa mililiter 
                    air dan gram nutrisi yang dibutuhkan setiap tanaman.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Hasilnya?</strong> Biaya produksi ditekan, kualitas panen meningkat 
                    drastis. Komoditas premium seperti melon hidroponik, sayuran organik eksotis, 
                    atau kopi <em>specialty</em> menjadi primadona dengan harga jual puluhan kali 
                    lipat dari komoditas biasa.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-green-100 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-2xl">
                  🛒
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    2. Memotong Rantai Pasok via E-Commerce
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Penyebab utama kemiskinan petani tradisional adalah rantai distribusi yang terlalu 
                    panjang. Petani milenial memangkas ini. Dengan smartphone di tangan, mereka 
                    menjadi pemasar yang handal.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Marketplace, Instagram, dan TikTok menjadi etalase mereka. Hasil panen di desa 
                    terpencil di Jawa Barat bisa langsung dipesan oleh restoran mewah di Jakarta atau 
                    bahkan pembeli di Singapura dalam hitungan jam.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Profil Sukses: Dari Cemoohan Menjadi Omzet Miliaran
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Kisah sukses dari gerakan ini bukan lagi dongeng, melainkan realitas yang terukur data.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Kita melihat profil anak-anak muda lulusan universitas ternama yang memilih "pulang 
            kampung". Awalnya dicemooh tetangga karena dianggap menyia-nyiakan ijazah untuk "balik 
            ke lumpur". Namun, cemoohan itu berubah menjadi kekaguman ketika mereka melihat hasilnya.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-10">
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200">
              <div className="text-3xl mb-3">🌱</div>
              <h4 className="font-bold text-gray-900 mb-2">Hortikultura Premium</h4>
              <p className="text-sm text-gray-700 mb-3">
                Petani milenial di sektor hortikultura berhasil meraup omzet ratusan juta per bulan 
                hanya dari lahan seluas 500 meter persegi.
              </p>
              <p className="text-xs text-emerald-700 font-semibold">
                Teknologi: Smart greenhouse + Tanaman bernilai tinggi (paprika, tomat ceri premium)
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
              <div className="text-3xl mb-3">🐟</div>
              <h4 className="font-bold text-gray-900 mb-2">Peternakan & Perikanan Modern</h4>
              <p className="text-sm text-gray-700 mb-3">
                Kelompok tani muda fokus pada peternakan terintegrasi atau budidaya sistem bioflok 
                yang hemat lahan namun padat modal dan hasil.
              </p>
              <p className="text-xs text-blue-700 font-semibold">
                Hasil: Omzet miliaran rupiah per tahun dengan manajemen bisnis yang tepat
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl p-8 my-12">
            <h3 className="text-2xl font-bold mb-4">
              💰 Fakta Mengejutkan
            </h3>
            <p className="text-lg leading-relaxed mb-4">
              Dengan manajemen bisnis yang benar, sektor agro adalah <strong>tambang emas</strong>. 
              Omzet miliaran rupiah per tahun bukanlah angka yang mustahil bagi mereka yang berhasil 
              menembus pasar modern dan ekspor.
            </p>
            <p className="text-purple-100">
              <em>"Masa depan yang cerah tidak selalu berada di balik meja kantor di gedung pencakar 
              langit ibu kota. Masa depan bisa jadi ada di desa."</em>
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Kesimpulan: Masa Depan Ada di Desa
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Gerakan 300 ribu petani milenial ini lebih dari sekadar tren ekonomi; ini adalah 
            <strong> gerakan sosial yang krusial</strong> bagi Indonesia. Mereka adalah jawaban atas 
            ancaman krisis pangan di masa depan akibat menuanya demografi petani kita.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Revolusi Cangkul Digital mengajarkan kita satu hal penting: jangan pernah meremehkan 
            kekuatan inovasi yang bertemu dengan kekayaan alam Nusantara.
          </p>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-8 my-10">
            <p className="text-xl text-gray-800 leading-relaxed mb-4">
              Masa depan bisa jadi ada di desa, di tangan anak muda yang memegang kendali drone di 
              satu tangan dan memeriksa kualitas panen premium di tangan lainnya.
            </p>
            <p className="text-lg font-bold text-green-700">
              Paradigma telah bergeser. Menjadi petani kini adalah profesi yang seksi, cerdas, dan 
              menjanjikan kemakmuran. 🌾
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
