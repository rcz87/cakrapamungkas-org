import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export const metadata = {
  title: "Dari Subak hingga Smart Farming: Evolusi Pertanian Nusantara | Cakra Pamungkas",
  description:
    "Menelusuri kearifan lokal sistem irigasi Subak Bali dan transformasinya di era digital. Eksplorasi mendalam perjalanan pertanian Indonesia dari kearifan kuno menuju inovasi masa depan.",
};

export default function SubakSmartFarmingPage() {
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
              FEATURED
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Kearifan Lokal
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Subak Bali
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Smart Farming
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Dari Subak hingga Smart Farming: Evolusi Pertanian Nusantara
          </h1>

          <p className="text-xl text-emerald-100 mb-6">
            Menelusuri kearifan lokal sistem irigasi Subak Bali dan transformasinya di era digital.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-emerald-200">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">12 Februari 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">30 menit baca</span>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative h-[400px] lg:h-[600px] bg-gray-100">
        <Image
          src="/images/subak-gemini.png"
          alt="Sistem Irigasi Subak Bali - Kearifan Lokal Pertanian Nusantara"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-700 leading-relaxed mb-8">
            Indonesia, sebagai negara agraris dengan bentang alam yang subur, memiliki sejarah pertanian 
            yang sama tuanya dengan peradabannya sendiri. Pertanian di Nusantara bukan sekadar tentang 
            memproduksi pangan; ia adalah denyut nadi budaya, struktur sosial, dan manifestasi spiritual 
            hubungan manusia dengan alam.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Perjalanan panjang ini kini berada di persimpangan yang menarik. Di satu sisi, kita memiliki 
            warisan leluhur yang luar biasa seperti <strong>Subak</strong> di Bali—sebuah bukti kejeniusan 
            pengelolaan sumber daya berbasis komunitas. Di sisi lain, kita menghadapi gelombang revolusi 
            industri 4.0 yang membawa <strong>Smart Farming</strong> (pertanian cerdas) dengan janji 
            efisiensi dan presisi.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            Artikel ini akan menelusuri evolusi tersebut, melihat bagaimana filosofi kuno Subak dapat 
            menjadi fondasi moral bagi penerapan teknologi canggih di era digital, memastikan bahwa 
            kemajuan tidak mencabut akar budaya pertanian kita.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            1. Subak: Lebih dari Sekadar Saluran Air
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Untuk memahami fondasi pertanian Nusantara, kita harus menengok ke Bali. Subak sering 
            disalahartikan hanya sebagai sistem irigasi teknis—parit, bendungan, dan pintu air. Padahal, 
            Subak sejatinya adalah organisasi sosial-religius yang mengatur manajemen air untuk pertanian padi.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Diakui oleh UNESCO sebagai Warisan Budaya Dunia pada tahun 2012, kekuatan Subak terletak pada 
            filosofi intinya: <strong>Tri Hita Karana</strong>.
          </p>

          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 my-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              🌺 Filosofi Tri Hita Karana dalam Subak
            </h3>
            <p className="text-gray-700 mb-4">
              Tiga penyebab kebahagiaan/kesejahteraan yang menjadi landasan operasional Subak:
            </p>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-emerald-900 mb-2">
                  1. Parahyangan (Hubungan Manusia dengan Tuhan)
                </h4>
                <p className="text-sm text-gray-700">
                  Subak terikat dengan ritual di Pura (Pura Ulun Danu Batur dan Pura Subak). Air dianggap 
                  suci, anugerah Dewi Danu, sehingga pengelolaannya harus dilakukan dengan rasa hormat spiritual.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-emerald-900 mb-2">
                  2. Pawongan (Hubungan Manusia dengan Manusia)
                </h4>
                <p className="text-sm text-gray-700">
                  Ini adalah inti demokratis Subak. Semua keputusan—mulai dari jadwal tanam, pembagian air, 
                  hingga gotong royong perbaikan saluran—diputuskan melalui musyawarah (sangkepan) yang 
                  dipimpin oleh <em>Kelian Subak</em> (ketua). Prinsipnya adalah keadilan; petani di hilir 
                  harus mendapatkan air sama adilnya dengan petani di hulu.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-emerald-900 mb-2">
                  3. Palemahan (Hubungan Manusia dengan Alam)
                </h4>
                <p className="text-sm text-gray-700">
                  Subak mengajarkan pengelolaan lingkungan yang berkelanjutan jauh sebelum istilah 
                  "sustainability" menjadi tren. Sistem ini menjaga keseimbangan ekosistem sawah agar tanah 
                  tetap subur dan air tetap mengalir.
                </p>
              </div>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-8 font-semibold">
            Subak adalah bukti bahwa efisiensi tertinggi dapat dicapai melalui kolaborasi dan konsensus, 
            bukan kompetisi.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            2. Angin Perubahan: Tantangan Pertanian Modern
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Meskipun sistem tradisional seperti Subak sangat tangguh, pertanian Nusantara menghadapi tekanan 
            yang belum pernah terjadi sebelumnya di abad ke-21:
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <div className="text-3xl mb-3">🌡️</div>
              <h4 className="font-bold text-gray-900 mb-2">Perubahan Iklim</h4>
              <p className="text-sm text-gray-700">
                Pola curah hujan yang tidak menentu dan kekeringan ekstrem mengacaukan kalender tanam 
                tradisional yang telah digunakan selama berabad-abad.
              </p>
            </div>

            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
              <div className="text-3xl mb-3">👨‍🌾</div>
              <h4 className="font-bold text-gray-900 mb-2">Krisis Regenerasi Petani</h4>
              <p className="text-sm text-gray-700">
                Generasi muda cenderung meninggalkan desa, menciptakan tenaga kerja pertanian yang menua.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <div className="text-3xl mb-3">🏙️</div>
              <h4 className="font-bold text-gray-900 mb-2">Konversi Lahan</h4>
              <p className="text-sm text-gray-700">
                Lahan sawah menyusut akibat pembangunan, sementara populasi yang terus bertambah menuntut 
                produksi pangan yang lebih tinggi.
              </p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-8">
            Kearifan lokal saja, tanpa adaptasi, berisiko kewalahan menghadapi tantangan global ini. 
            Di sinilah teknologi masuk sebagai katalisator yang diperlukan.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            3. Era Smart Farming: Presisi Digital di Lahan Basah
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Jika Subak adalah tentang "harmoni komunal", maka Smart Farming (Pertanian Cerdas 4.0) adalah 
            tentang "presisi berbasis data".
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Smart Farming memanfaatkan teknologi canggih—seperti <em>Internet of Things</em> (IoT), 
            <em>Artificial Intelligence</em> (AI), <em>Big Data</em>, dan drone—untuk mengoptimalkan proses 
            pertanian. Tujuannya adalah menghasilkan lebih banyak dengan sumber daya yang lebih sedikit 
            (more with less).
          </p>

          {/* Smart Farming Visual */}
          <div className="relative h-[400px] lg:h-[500px] bg-gray-100 rounded-xl overflow-hidden my-10">
            <Image
              src="/images/Gemini_Generated_Image_cswilvcswilvcswi.png"
              alt="Ilustrasi Smart Farming dan Teknologi Pertanian Digital Modern"
              fill
              className="object-cover"
            />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Transformasi di Lapangan
          </h3>

          <div className="space-y-6 my-8">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">📡</span>
                Sensor Tanah & Cuaca (IoT)
              </h4>
              <p className="text-gray-700">
                Alih-alih menebak kapan harus menyiram atau memupuk berdasarkan perasaan, petani kini dapat 
                menggunakan sensor yang ditanam di tanah. Sensor ini mengirimkan data real-time ke smartphone 
                tentang kelembapan tanah, kadar pH, dan nutrisi. Ini mencegah pemborosan air dan penggunaan 
                pupuk kimia berlebih.
              </p>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">🚁</span>
                Drone Pertanian
              </h4>
              <p className="text-gray-700">
                Drone digunakan untuk pemetaan lahan yang cepat, memantau kesehatan tanaman dari udara 
                (menggunakan kamera multispektral untuk mendeteksi penyakit dini), dan melakukan penyemprotan 
                pupuk atau pestisida secara presisi hanya di area yang membutuhkan.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">💧</span>
                Otomatisasi Irigasi
              </h4>
              <p className="text-gray-700">
                Sistem irigasi dapat diotomatisasi berdasarkan data sensor. Pintu air dapat terbuka secara 
                otomatis saat tanah kering dan tertutup saat kelembapan cukup, sebuah evolusi teknis dari 
                manajemen air manual di masa lalu.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            4. Sintesis: Ketika Kearifan Lokal Bertemu Teknologi Digital
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Bagian terpenting dari evolusi ini bukanlah menggantikan yang lama dengan yang baru, melainkan 
            mengintegrasikannya. Pertanian Nusantara yang ideal di masa depan adalah <strong>"Hibrida": 
            berjiwa Subak, berotak digital</strong>.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6 font-semibold">
            Bagaimana Subak dan Smart Farming dapat bersinergi?
          </p>

          <div className="space-y-8 my-10">
            <div className="border-l-4 border-emerald-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                A. "Digitalisasi" Subak tanpa Menghilangkan "Rasa"
              </h3>
              <p className="text-gray-700 mb-3">
                Bayangkan sebuah sistem Subak di mana <em>Kelian</em> (ketua) tidak hanya mengandalkan 
                pengamatan visual untuk membagi air, tetapi dibantu oleh data dari sensor debit air yang 
                terpasang di bendungan hulu.
              </p>
              <p className="text-gray-700">
                Data ini membantu pengambilan keputusan dalam musyawarah agar lebih akurat dan adil, terutama 
                di saat musim kering yang ekstrem. <strong>Teknologi menjadi alat bantu bagi konsensus sosial, 
                bukan penggantinya.</strong>
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                B. Efisiensi untuk Keberlanjutan (Palemahan Baru)
              </h3>
              <p className="text-gray-700 mb-3">
                Prinsip <em>Palemahan</em> (menjaga alam) di era modern harus dibantu dengan presisi. 
                Penggunaan pupuk kimia yang berlebihan telah merusak banyak tanah di Indonesia.
              </p>
              <p className="text-gray-700">
                Smart farming, melalui pemupukan presisi, membantu memulihkan kesehatan tanah, yang sejalan 
                dengan tujuan jangka panjang Subak untuk menjaga kesuburan bumi pertiwi.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                C. Menarik Minat Generasi Muda (Pawongan Baru)
              </h3>
              <p className="text-gray-700 mb-3">
                Salah satu ancaman terbesar Subak adalah kurangnya penerus. Smart farming mengubah citra 
                pertanian dari pekerjaan yang "kotor dan melelahkan" menjadi sektor yang "canggih dan 
                berbasis data".
              </p>
              <p className="text-gray-700">
                Ini adalah kunci untuk menarik kembali kaum milenial ke sektor pertanian, memastikan organisasi 
                sosial seperti Subak tetap memiliki anggota di masa depan.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl p-8 my-12">
            <h3 className="text-2xl font-bold mb-4">
              🌾 Model Pertanian Hybrid Ideal
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-emerald-100 mb-2">Jiwa Subak (Tradisi)</h4>
                <ul className="text-sm text-emerald-50 space-y-1">
                  <li>• Musyawarah & gotong royong</li>
                  <li>• Keadilan pembagian sumber daya</li>
                  <li>• Harmoni spiritual dengan alam</li>
                  <li>• Keberlanjutan ekosistem</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-emerald-100 mb-2">Otak Digital (Teknologi)</h4>
                <ul className="text-sm text-emerald-50 space-y-1">
                  <li>• Data real-time untuk keputusan</li>
                  <li>• Efisiensi air & pupuk</li>
                  <li>• Monitoring & prediksi akurat</li>
                  <li>• Otomatisasi yang cerdas</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Kesimpulan: Menjaga Akar, Menumbuhkan Sayap
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Evolusi dari Subak ke Smart Farming bukanlah sebuah garis lurus yang meninggalkan masa lalu. 
            Ini adalah sebuah siklus adaptasi.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Subak mengajarkan kita <em>mengapa</em> kita bertani: untuk menjaga harmoni antara Tuhan, 
            manusia, dan alam. Smart Farming memberi kita alat baru tentang <em>bagaimana</em> kita bertani 
            menghadapi tantangan zaman yang berubah.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6 font-semibold text-lg">
            Masa depan pertanian Nusantara yang gemilang tidak terletak pada memilih salah satu di antaranya, 
            tetapi pada kemampuan kita untuk menggunakan kecanggihan teknologi abad ke-21 dengan kebijaksanaan 
            hati yang telah diwariskan selama seribu tahun.
          </p>

          <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-8 my-10">
            <p className="text-xl text-gray-800 text-center leading-relaxed">
              Dengan cara ini, kita tidak hanya mencapai <strong>ketahanan pangan</strong>, 
              tetapi juga <strong>ketahanan budaya</strong>.
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
