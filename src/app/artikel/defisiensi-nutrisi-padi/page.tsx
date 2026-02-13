import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/json-ld";
import { getArticleBySlug } from "@/data/articles";

export const metadata = {
  title: "Cara Mengenali Gejala Defisiensi Nutrisi pada Padi | Cakra Pamungkas",
  description:
    "Panduan lengkap mengenali gejala kekurangan unsur hara pada tanaman padi. Pelajari tanda defisiensi nitrogen, fosfor, kalium, dan mikronutrien beserta solusi pemupukan yang tepat.",
};

export default function DefisiensiNutrisiPadiPage() {
  const article = getArticleBySlug("defisiensi-nutrisi-padi");

  return (
    <>
      {article && <ArticleJsonLd article={article} />}
      {article && (
        <BreadcrumbJsonLd
          items={[
            { name: "Beranda", href: "/" },
            { name: "Artikel", href: "/artikel" },
            { name: article.title, href: `/artikel/defisiensi-nutrisi-padi` },
          ]}
        />
      )}
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
              BUDIDAYA
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Defisiensi Nutrisi
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Pemupukan
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Unsur Hara
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-lg">
              Budidaya Padi
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Cara Mengenali Gejala Defisiensi Nutrisi pada Padi
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-green-200">
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
            Tanaman padi membutuhkan setidaknya 16 unsur hara esensial untuk
            tumbuh dan berproduksi secara optimal. Kekurangan salah satu unsur
            saja dapat menyebabkan gangguan pertumbuhan, penurunan kualitas
            gabah, hingga gagal panen. Memahami gejala defisiensi nutrisi
            merupakan keterampilan fundamental bagi setiap petani padi agar
            dapat melakukan tindakan koreksi secara cepat dan tepat sebelum
            kerusakan menjadi permanen.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Di Indonesia, defisiensi unsur hara pada padi masih menjadi
            masalah yang cukup luas. Data dari Balai Penelitian Tanah
            menunjukkan bahwa lebih dari 60% lahan sawah di Jawa mengalami
            kekurangan satu atau lebih unsur hara esensial. Kondisi ini
            diperburuk oleh praktik pemupukan yang tidak berimbang, di mana
            petani cenderung hanya mengandalkan pupuk nitrogen (urea) tanpa
            memperhatikan kebutuhan fosfor, kalium, dan unsur mikro lainnya.
          </p>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
            <p className="text-gray-800 font-medium mb-2">
              Mengapa Diagnosis Defisiensi Nutrisi Penting?
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Mencegah kehilangan hasil panen hingga 20-50%</li>
              <li>Menghemat biaya pemupukan dengan aplikasi yang tepat sasaran</li>
              <li>Menjaga kesehatan tanah untuk keberlanjutan produksi jangka panjang</li>
              <li>Meningkatkan kualitas gabah dan nilai jual hasil panen</li>
              <li>Mengurangi dampak lingkungan akibat over-fertilization</li>
            </ul>
          </div>

          {/* Nitrogen Deficiency */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            1. Defisiensi Nitrogen (N) -- Unsur Hara Paling Kritis
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Nitrogen adalah unsur hara yang paling banyak dibutuhkan oleh
            tanaman padi dan paling sering mengalami defisiensi. Unsur ini
            merupakan komponen utama klorofil, asam amino, dan protein yang
            sangat berperan dalam pertumbuhan vegetatif dan pembentukan malai.
            Tanpa nitrogen yang cukup, tanaman padi tidak dapat melakukan
            fotosintesis secara optimal dan pertumbuhannya akan terhambat
            secara signifikan.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Gejala Defisiensi Nitrogen
          </h3>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Gejala pada Daun
              </h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>Daun menguning (klorosis) dimulai dari daun tua bagian bawah</li>
                <li>Perubahan warna dari hijau muda ke kuning pucat secara merata</li>
                <li>Ujung daun tua mengering dan mati (nekrosis)</li>
                <li>Daun menjadi lebih sempit dan tegak</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Gejala pada Tanaman
              </h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>Pertumbuhan tanaman kerdil dan lambat</li>
                <li>Jumlah anakan berkurang drastis</li>
                <li>Batang kurus dan lemah</li>
                <li>Malai pendek dengan gabah yang kurang berisi</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Dampak terhadap Produksi
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Defisiensi nitrogen yang parah dapat menyebabkan penurunan hasil
            panen hingga 40-60%. Tanaman yang kekurangan nitrogen menghasilkan
            malai yang lebih pendek, jumlah gabah per malai lebih sedikit, dan
            persentase gabah hampa meningkat. Selain itu, kadar protein beras
            juga menurun sehingga kualitas gizi berkurang.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Cara Mengatasi Defisiensi Nitrogen
          </h3>

          <div className="bg-green-50 rounded-xl p-6 my-6">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">&#8594;</span>
                <div>
                  <strong>Aplikasi Urea (46% N):</strong> Berikan 200-300 kg/ha
                  yang dibagi dalam 2-3 kali pemberian pada fase vegetatif
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">&#8594;</span>
                <div>
                  <strong>Gunakan Bagan Warna Daun (BWD):</strong> Alat sederhana
                  untuk menentukan waktu dan dosis pemupukan N yang tepat
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">&#8594;</span>
                <div>
                  <strong>Pupuk Organik:</strong> Tambahkan kompos atau pupuk
                  kandang 2-5 ton/ha untuk melepas N secara bertahap
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">&#8594;</span>
                <div>
                  <strong>Azolla dan Pupuk Hayati:</strong> Manfaatkan Azolla
                  pinnata atau bakteri penambat N seperti Azospirillum
                </div>
              </li>
            </ul>
          </div>

          {/* Phosphorus Deficiency */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            2. Defisiensi Fosfor (P) -- Penghambat Perakaran dan Pembungaan
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Fosfor berperan vital dalam transfer energi (ATP), pembentukan
            asam nukleat, dan perkembangan akar. Unsur ini sangat penting
            pada fase awal pertumbuhan padi untuk pembentukan sistem perakaran
            yang kuat, serta pada fase generatif untuk pembungaan dan
            pengisian gabah. Defisiensi fosfor sering terjadi pada tanah
            masam dengan pH di bawah 5,5 karena fosfor terikat oleh aluminium
            dan besi sehingga tidak tersedia bagi tanaman.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Gejala Defisiensi Fosfor
          </h3>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Gejala Visual
              </h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>Daun berwarna hijau tua gelap hingga keunguan</li>
                <li>Warna kemerahan atau ungu pada batang dan pelepah daun</li>
                <li>Daun tua berubah coklat kemerahan dari ujung</li>
                <li>Sudut daun terhadap batang menjadi lebih sempit (tegak)</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Gejala Pertumbuhan
              </h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>Pertumbuhan sangat lambat dan tanaman kerdil</li>
                <li>Sistem perakaran dangkal dan kurang berkembang</li>
                <li>Pembungaan dan pematangan terlambat 1-2 minggu</li>
                <li>Jumlah anakan produktif berkurang signifikan</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Dampak terhadap Produksi
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Kekurangan fosfor menyebabkan penurunan hasil 15-30% tergantung
            tingkat keparahan. Dampak yang paling merugikan adalah
            keterlambatan pematangan yang dapat mengganggu jadwal tanam musim
            berikutnya. Gabah yang dihasilkan juga cenderung lebih kecil dan
            ringan dengan persentase beras pecah yang lebih tinggi saat
            penggilingan.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Cara Mengatasi Defisiensi Fosfor
          </h3>

          <div className="bg-green-50 rounded-xl p-6 my-6">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">&#8594;</span>
                <div>
                  <strong>Pupuk SP-36 atau TSP:</strong> Aplikasikan 100-150 kg/ha
                  sebagai pupuk dasar sebelum tanam
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">&#8594;</span>
                <div>
                  <strong>Pengapuran:</strong> Naikkan pH tanah dengan dolomit
                  atau kapur pertanian untuk meningkatkan ketersediaan P
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">&#8594;</span>
                <div>
                  <strong>Pupuk Organik:</strong> Bahan organik membantu melepas
                  P yang terikat oleh Al dan Fe dalam tanah masam
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">&#8594;</span>
                <div>
                  <strong>Mikoriza:</strong> Inokulasi mikoriza arbuskular
                  meningkatkan serapan P oleh akar hingga 3-5 kali lipat
                </div>
              </li>
            </ul>
          </div>

          {/* Potassium Deficiency */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            3. Defisiensi Kalium (K) -- Penjaga Ketahanan Tanaman
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Kalium merupakan unsur hara yang berperan krusial dalam regulasi
            stomata, transportasi hasil fotosintesis, aktivasi enzim, dan
            ketahanan tanaman terhadap cekaman biotik maupun abiotik.
            Tanaman padi yang cukup kalium memiliki batang yang lebih kokoh,
            lebih tahan rebah, dan lebih resisten terhadap serangan hama
            penyakit. Defisiensi kalium sering terjadi pada tanah berpasir,
            tanah gambut, dan lahan yang dibudidayakan secara intensif tanpa
            pengembalian jerami.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Gejala Defisiensi Kalium
          </h3>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Gejala Khas pada Daun
              </h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>Tepi daun tua menguning dan mengering (marginal scorch)</li>
                <li>Bercak coklat kecil tersebar di permukaan daun tua</li>
                <li>Ujung daun melengkung ke bawah dan menggulung</li>
                <li>Warna daun hijau gelap kebiruan sebelum menguning</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Dampak pada Tanaman
              </h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>Batang lemah dan mudah rebah (lodging)</li>
                <li>Rentan terhadap serangan penyakit blast dan BLB</li>
                <li>Pengisian gabah tidak sempurna</li>
                <li>Gabah mudah rontok dan banyak yang hampa</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Dampak terhadap Produksi
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Defisiensi kalium dapat menurunkan hasil panen 20-40%. Yang lebih
            berbahaya, tanaman yang kekurangan kalium menjadi sangat rentan
            terhadap serangan hama dan penyakit sehingga kerugian bisa
            berlipat ganda. Kualitas gabah juga menurun dengan persentase
            beras patah yang meningkat dan rendemen giling yang lebih rendah.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Cara Mengatasi Defisiensi Kalium
          </h3>

          <div className="bg-green-50 rounded-xl p-6 my-6">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">&#8594;</span>
                <div>
                  <strong>Pupuk KCl (60% K2O):</strong> Aplikasikan 50-100 kg/ha
                  dibagi dua kali pada 7 HST dan menjelang primordia
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">&#8594;</span>
                <div>
                  <strong>Pengembalian Jerami:</strong> Kembalikan jerami padi ke
                  sawah karena 80% kalium yang diserap tanaman ada di jerami
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">&#8594;</span>
                <div>
                  <strong>Abu Sekam:</strong> Abu pembakaran sekam padi
                  mengandung 20-30% K2O dan dapat digunakan sebagai sumber kalium
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">&#8594;</span>
                <div>
                  <strong>Pupuk NPK Majemuk:</strong> Gunakan pupuk majemuk
                  seperti Phonska (15-15-15) untuk memenuhi kebutuhan N, P, dan K
                  secara bersamaan
                </div>
              </li>
            </ul>
          </div>

          {/* Secondary Nutrients */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            4. Defisiensi Unsur Hara Sekunder (Ca, Mg, S)
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Unsur hara sekunder meliputi kalsium (Ca), magnesium (Mg), dan
            sulfur (S) yang dibutuhkan tanaman dalam jumlah lebih sedikit
            dibanding N, P, K, namun tetap esensial. Defisiensi unsur
            sekunder sering terlewatkan karena gejalanya mirip dengan
            kekurangan unsur makro atau serangan penyakit. Padahal, tanpa
            penanganan yang tepat, defisiensi unsur sekunder dapat membatasi
            respons tanaman terhadap pemupukan N, P, dan K.
          </p>

          <div className="space-y-6 my-8">
            <div className="border-l-4 border-emerald-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Kalsium (Ca) -- Pembangun Dinding Sel
              </h4>
              <p className="text-gray-700 mb-3">
                Kalsium berperan dalam pembentukan dinding sel, pembelahan sel,
                dan sebagai second messenger dalam respon tanaman terhadap
                cekaman. Defisiensi kalsium menyebabkan ujung daun muda
                menggulung, pertumbuhan akar terhambat, dan ujung akar menjadi
                coklat dan busuk. Pada kasus yang parah, titik tumbuh mati
                sehingga tanaman tidak dapat tumbuh lebih lanjut.
              </p>
              <p className="text-sm text-gray-600">
                Penanganan: Aplikasi dolomit 1-2 ton/ha atau gypsum 500 kg/ha
                sebagai pupuk dasar
              </p>
            </div>

            <div className="border-l-4 border-teal-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Magnesium (Mg) -- Inti Klorofil
              </h4>
              <p className="text-gray-700 mb-3">
                Magnesium merupakan atom pusat dalam molekul klorofil dan
                berperan penting dalam fotosintesis serta aktivasi lebih dari
                300 enzim. Gejalanya berupa klorosis interveinal (menguning
                di antara tulang daun) pada daun tua, sementara tulang daun
                tetap hijau membentuk pola bergaris. Daun menjadi rapuh dan
                mudah patah.
              </p>
              <p className="text-sm text-gray-600">
                Penanganan: Aplikasi dolomit (mengandung Ca dan Mg) atau kieserit
                (MgSO4) 100-200 kg/ha
              </p>
            </div>

            <div className="border-l-4 border-lime-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Sulfur (S) -- Penyusun Asam Amino Esensial
              </h4>
              <p className="text-gray-700 mb-3">
                Sulfur dibutuhkan untuk sintesis asam amino metionin dan
                sistein, serta berbagai vitamin dan koenzim. Gejala defisiensi
                sulfur mirip dengan kekurangan nitrogen, yaitu klorosis merata,
                namun dimulai dari daun muda (bukan daun tua seperti pada
                defisiensi N). Seluruh tanaman tampak pucat kekuningan dan
                pertumbuhan terhambat secara seragam.
              </p>
              <p className="text-sm text-gray-600">
                Penanganan: Gunakan pupuk ZA (amonium sulfat, 24% S) sebagai
                pengganti sebagian urea, atau aplikasi gypsum
              </p>
            </div>
          </div>

          {/* Micronutrients */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            5. Defisiensi Unsur Hara Mikro (Fe, Zn, Mn, Cu, B)
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Meskipun dibutuhkan dalam jumlah sangat kecil (ppm), unsur hara
            mikro memainkan peran yang tidak tergantikan dalam berbagai proses
            fisiologis tanaman. Defisiensi unsur mikro semakin sering
            dijumpai pada lahan sawah intensif di Indonesia karena pengurasan
            tanah yang terus-menerus tanpa pengembalian bahan organik.
            Berikut adalah unsur mikro utama yang sering mengalami defisiensi
            pada tanaman padi.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Besi (Fe) -- Klorosis Interveinal
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Defisiensi besi menyebabkan klorosis interveinal pada daun
                muda yang baru terbentuk. Daun tampak kuning pucat hingga
                putih dengan tulang daun tetap hijau. Pada kasus parah,
                seluruh daun muda menjadi putih kertas.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Umum pada tanah berkapur (pH tinggi)</li>
                <li>Sering terjadi di lahan pasang surut</li>
                <li>Penanganan: FeSO4 semprot 2-3% atau aplikasi bahan organik</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Seng (Zn) -- Masalah Terluas di Padi
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Defisiensi seng adalah masalah unsur mikro paling luas pada
                padi di seluruh dunia. Gejalanya berupa bercak coklat
                kemerahan (karat) pada daun tengah, daun muda pendek dan
                sempit, serta pertumbuhan terhambat (kerdil).
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Umum pada tanah alkalin dan lahan baru dibuka</li>
                <li>Diperburuk oleh penggenangan berkepanjangan</li>
                <li>Penanganan: ZnSO4 25 kg/ha atau Zn-EDTA semprot 0,5%</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Mangan (Mn) -- Aktivator Enzim
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Mangan diperlukan dalam reaksi fotolisis air pada fotosintesis.
                Defisiensinya menyebabkan klorosis interveinal pada daun muda
                disertai bercak nekrotik kecil berwarna abu-abu kecoklatan
                yang tersebar di antara tulang daun.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Umum pada tanah berkapur dan tanah organik</li>
                <li>Diperburuk oleh drainase berlebihan</li>
                <li>Penanganan: MnSO4 semprot 0,5-1% atau aplikasi ke tanah 10-20 kg/ha</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Tembaga (Cu) dan Boron (B)
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Defisiensi tembaga menyebabkan daun muda layu dan berwarna
                hijau kebiruan, serta malai tidak keluar sempurna (gabah
                kosong). Defisiensi boron menyebabkan pembungaan abnormal,
                malai tidak berkembang, dan gabah hampa meningkat drastis.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Cu: Umum pada tanah gambut dan organik</li>
                <li>B: Umum pada tanah berpasir dan masam</li>
                <li>Penanganan: CuSO4 5-10 kg/ha, Borax 1-2 kg/ha</li>
              </ul>
            </div>
          </div>

          {/* Visual Diagnosis Guide */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            6. Panduan Diagnosis Visual di Lapangan
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Diagnosis visual merupakan metode paling praktis dan cepat untuk
            mengidentifikasi defisiensi nutrisi di lapangan. Kunci utamanya
            adalah memperhatikan lokasi gejala pada tanaman (daun muda vs daun
            tua), jenis gejala (klorosis, nekrosis, perubahan bentuk), dan
            pola sebarannya. Berikut adalah panduan ringkas untuk membantu
            identifikasi di lapangan.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Gejala
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Lokasi
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Kemungkinan Defisiensi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    Klorosis merata (kuning pucat)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">Daun tua</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Nitrogen (N)
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    Klorosis merata (kuning pucat)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">Daun muda</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Sulfur (S)
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    Warna ungu/kemerahan
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">Daun tua & batang</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Fosfor (P)
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    Tepi daun coklat mengering
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">Daun tua</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Kalium (K)
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    Klorosis interveinal (bergaris)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">Daun tua</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Magnesium (Mg)
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    Klorosis interveinal (bergaris)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">Daun muda</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Besi (Fe) atau Mangan (Mn)
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    Bercak karat coklat kemerahan
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">Daun tengah</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    Seng (Zn)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8">
            <p className="text-gray-800 font-medium mb-2">
              Prinsip Penting dalam Diagnosis Visual
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Unsur mobile (N, P, K, Mg):</strong> Gejala muncul
                pertama pada daun tua karena unsur ditranslokasi ke daun muda
              </li>
              <li>
                <strong>Unsur immobile (Fe, Mn, Ca, B, Cu):</strong> Gejala
                muncul pertama pada daun muda karena unsur tidak dapat
                dipindahkan dari jaringan tua
              </li>
              <li>
                <strong>Konfirmasi laboratorium:</strong> Diagnosis visual
                sebaiknya dikonfirmasi dengan analisis tanah atau jaringan
                tanaman untuk memastikan rekomendasi pemupukan yang tepat
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Teknik Pengamatan di Lapangan
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Saat melakukan diagnosis visual, penting untuk memeriksa tanaman
            secara sistematis. Mulailah dari bagian bawah tanaman dan bergerak
            ke atas. Perhatikan apakah gejala terjadi seragam di seluruh
            petakan atau hanya pada area tertentu. Distribusi gejala yang tidak
            merata sering mengindikasikan masalah drainase, variasi pH tanah,
            atau kerusakan akibat hama, bukan murni defisiensi nutrisi.
          </p>

          <ul className="space-y-4 my-6">
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">&#10003;</span>
              <div>
                <strong className="text-gray-900">Periksa Minimal 20 Rumpun</strong>
                <p className="text-gray-600 text-sm">
                  Ambil sampel pengamatan dari beberapa titik yang mewakili
                  seluruh petakan untuk menghindari kesimpulan yang bias
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">&#10003;</span>
              <div>
                <strong className="text-gray-900">Bandingkan dengan Tanaman Sehat</strong>
                <p className="text-gray-600 text-sm">
                  Selalu bandingkan tanaman yang dicurigai defisiensi dengan
                  tanaman sehat di sekitarnya untuk melihat perbedaan yang jelas
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">&#10003;</span>
              <div>
                <strong className="text-gray-900">Dokumentasikan dengan Foto</strong>
                <p className="text-gray-600 text-sm">
                  Ambil foto gejala dari dekat dan dari kejauhan untuk
                  konsultasi dengan ahli atau penyuluh pertanian
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">&#10003;</span>
              <div>
                <strong className="text-gray-900">Catat Riwayat Pemupukan</strong>
                <p className="text-gray-600 text-sm">
                  Informasi tentang jenis, dosis, dan waktu pemupukan yang
                  telah dilakukan sangat membantu dalam mempersempit diagnosis
                </p>
              </div>
            </li>
          </ul>

          {/* Balanced Fertilization */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            7. Rekomendasi Pemupukan Berimbang untuk Padi
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Pemupukan berimbang adalah kunci utama untuk mencegah defisiensi
            nutrisi sekaligus mengoptimalkan hasil panen. Konsep pemupukan
            berimbang bukan berarti memberikan semua unsur hara dalam jumlah
            yang sama, melainkan menyesuaikan dosis dan jenis pupuk dengan
            kebutuhan tanaman serta status kesuburan tanah. Pendekatan ini
            jauh lebih efisien dan ramah lingkungan dibandingkan pemupukan
            tunggal yang hanya mengandalkan satu jenis pupuk.
          </p>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 my-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Dosis Pupuk Umum untuk Padi Sawah (per Hektar)
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  1. Pupuk Dasar (sebelum/saat tanam)
                </p>
                <p className="text-sm text-gray-600">
                  SP-36: 100 kg/ha, KCl: 50 kg/ha, pupuk organik: 2 ton/ha.
                  Diaplikasikan merata dan dicampur dengan tanah saat
                  pengolahan terakhir.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  2. Pemupukan Pertama (7-14 HST)
                </p>
                <p className="text-sm text-gray-600">
                  Urea: 100 kg/ha atau NPK Phonska: 200 kg/ha.
                  Ditebar merata saat kondisi tanah macak-macak
                  (tidak tergenang).
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  3. Pemupukan Kedua (25-30 HST)
                </p>
                <p className="text-sm text-gray-600">
                  Urea: 100 kg/ha, KCl: 50 kg/ha. Diberikan bersamaan
                  untuk memenuhi kebutuhan N dan K pada fase anakan aktif.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  4. Pemupukan Ketiga (40-45 HST)
                </p>
                <p className="text-sm text-gray-600">
                  Urea: 50-100 kg/ha sesuai kebutuhan berdasarkan BWD.
                  Dosis disesuaikan dengan warna daun menggunakan Bagan
                  Warna Daun.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Prinsip 4T dalam Pemupukan
          </h3>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Tepat Jenis
              </h4>
              <p className="text-sm text-gray-700">
                Pilih jenis pupuk yang sesuai dengan kebutuhan tanaman dan
                kondisi tanah. Lakukan analisis tanah untuk mengetahui unsur
                mana yang defisien sebelum menentukan jenis pupuk.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Tepat Dosis
              </h4>
              <p className="text-sm text-gray-700">
                Berikan pupuk sesuai rekomendasi berdasarkan hasil uji tanah.
                Dosis berlebihan tidak hanya boros tetapi juga merusak
                lingkungan dan dapat meracuni tanaman.
              </p>
            </div>

            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Tepat Waktu
              </h4>
              <p className="text-sm text-gray-700">
                Aplikasikan pupuk pada fase pertumbuhan yang membutuhkan.
                Nitrogen paling dibutuhkan saat anakan aktif, fosfor saat
                awal tanam, dan kalium saat pengisian gabah.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Tepat Cara
              </h4>
              <p className="text-sm text-gray-700">
                Metode aplikasi mempengaruhi efisiensi penyerapan. Pupuk
                diberikan saat tanah dalam kondisi macak-macak, bukan saat
                tergenang, untuk mengurangi kehilangan akibat pencucian.
              </p>
            </div>
          </div>

          {/* Soil Testing */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            8. Pentingnya Uji Tanah dalam Manajemen Nutrisi
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Diagnosis visual memang praktis, namun memiliki keterbatasan
            karena bersifat subjektif dan gejala beberapa defisiensi sering
            tumpang tindih. Uji tanah di laboratorium memberikan data
            kuantitatif yang akurat tentang status kesuburan tanah sehingga
            rekomendasi pemupukan dapat disusun secara presisi. Investasi
            untuk uji tanah sangat kecil dibandingkan dengan potensi
            penghematan dan peningkatan hasil yang dapat dicapai.
          </p>

          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 my-8">
            <p className="text-gray-800 font-medium mb-2">
              Parameter Uji Tanah yang Perlu Dianalisis
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>pH tanah:</strong> Menentukan ketersediaan hampir semua
                unsur hara. pH optimal untuk padi sawah adalah 5,5-7,0
              </li>
              <li>
                <strong>C-organik:</strong> Indikator kesehatan tanah dan
                kapasitas menahan air serta nutrisi
              </li>
              <li>
                <strong>N-total:</strong> Cadangan nitrogen dalam tanah yang
                potensial tersedia bagi tanaman
              </li>
              <li>
                <strong>P-tersedia (Olsen/Bray):</strong> Fosfor yang siap
                diserap oleh akar tanaman
              </li>
              <li>
                <strong>K-tukar:</strong> Kalium yang tersedia dalam larutan
                tanah dan permukaan koloid
              </li>
              <li>
                <strong>KTK (Kapasitas Tukar Kation):</strong> Kemampuan tanah
                menahan dan menyediakan kation hara
              </li>
              <li>
                <strong>Unsur mikro (Zn, Fe, Mn, Cu, B):</strong> Terutama
                penting pada lahan yang telah dibudidayakan intensif
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Cara Pengambilan Sampel Tanah yang Benar
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Kualitas hasil uji tanah sangat ditentukan oleh kualitas
            pengambilan sampel. Ambil sampel tanah dari 10-15 titik secara
            acak diagonal atau zigzag pada setiap petakan yang dianggap
            homogen. Kedalaman pengambilan 0-20 cm untuk lapisan olah.
            Campurkan semua sub-sampel, aduk merata, kemudian ambil sekitar
            500 gram sebagai sampel komposit. Jangan mengambil sampel dari
            bekas tumpukan pupuk, pematang, atau selokan. Sampel harus
            diambil sebelum pemupukan, idealnya 2-4 minggu sebelum musim
            tanam dimulai.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <p className="text-gray-800 font-medium mb-2">
              Laboratorium Uji Tanah di Indonesia
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Balai Penelitian Tanah (Balittanah) Bogor</li>
              <li>Laboratorium Dinas Pertanian Kabupaten/Kota</li>
              <li>Laboratorium Universitas Pertanian setempat</li>
              <li>Laboratorium swasta terakreditasi</li>
            </ul>
            <p className="text-sm text-gray-600 mt-3">
              Biaya uji tanah lengkap berkisar Rp150.000-500.000 per sampel,
              sangat terjangkau dibandingkan potensi kerugian akibat
              pemupukan yang tidak tepat.
            </p>
          </div>

          {/* Conclusion */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Kesimpulan dan Tips Praktis
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Defisiensi nutrisi pada tanaman padi merupakan masalah yang dapat
            dicegah dan diatasi apabila petani memiliki pengetahuan yang
            memadai tentang gejala dan penanganannya. Kunci keberhasilan
            terletak pada kemampuan mendiagnosis secara dini, pemahaman
            tentang kebutuhan nutrisi tanaman pada setiap fase pertumbuhan,
            dan penerapan pemupukan berimbang berdasarkan status kesuburan
            tanah.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Pendekatan terpadu yang menggabungkan penggunaan pupuk anorganik
            dan organik, pengembalian sisa tanaman, pengapuran pada tanah
            masam, serta rotasi tanaman merupakan strategi terbaik untuk
            menjaga keseimbangan nutrisi tanah dalam jangka panjang.
            Jangan lupa bahwa pencegahan selalu lebih baik dan lebih murah
            dibandingkan pengobatan -- lakukan uji tanah secara berkala dan
            terapkan rekomendasi pemupukan spesifik lokasi.
          </p>

          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl p-8 my-12">
            <p className="text-xl font-bold mb-3">
              Tips Praktis untuk Petani
            </p>
            <ul className="space-y-3 text-green-100">
              <li className="flex items-start gap-3">
                <span className="text-white font-bold">1.</span>
                <span>
                  Lakukan uji tanah minimal sekali setiap 2 musim tanam untuk
                  mengetahui status kesuburan lahan Anda secara akurat.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white font-bold">2.</span>
                <span>
                  Gunakan Bagan Warna Daun (BWD) secara rutin untuk menentukan
                  waktu dan dosis pemupukan nitrogen yang optimal.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white font-bold">3.</span>
                <span>
                  Kembalikan jerami ke sawah atau buat kompos untuk menjaga
                  kandungan bahan organik dan unsur hara mikro tanah.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white font-bold">4.</span>
                <span>
                  Hindari pemupukan berlebihan karena selain boros, juga
                  merusak lingkungan dan dapat meracuni tanaman.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white font-bold">5.</span>
                <span>
                  Konsultasikan gejala yang tidak biasa dengan penyuluh
                  pertanian atau ahli kesuburan tanah di daerah Anda.
                </span>
              </li>
            </ul>
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
