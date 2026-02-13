export interface FaqItem {
  question: string;
  answer: string;
}

/** FAQ data per article slug */
export const articleFaqs: Record<string, FaqItem[]> = {
  "defisiensi-nutrisi-padi": [
    {
      question: "Apa gejala kekurangan nitrogen pada tanaman padi?",
      answer:
        "Gejala defisiensi nitrogen meliputi daun menguning (klorosis) dimulai dari daun tua bagian bawah, pertumbuhan tanaman kerdil dan lambat, jumlah anakan berkurang drastis, serta malai pendek dengan gabah kurang berisi.",
    },
    {
      question: "Bagaimana cara mengatasi defisiensi fosfor pada padi?",
      answer:
        "Defisiensi fosfor dapat diatasi dengan aplikasi pupuk SP-36 atau TSP 100-150 kg/ha sebagai pupuk dasar, pengapuran dengan dolomit untuk menaikkan pH tanah, penambahan pupuk organik, dan inokulasi mikoriza arbuskular yang meningkatkan serapan fosfor hingga 3-5 kali lipat.",
    },
    {
      question:
        "Apa perbedaan gejala defisiensi pada daun tua dan daun muda padi?",
      answer:
        "Unsur hara mobile seperti nitrogen, fosfor, kalium, dan magnesium menunjukkan gejala pada daun tua terlebih dahulu karena unsur ditranslokasi ke daun muda. Sebaliknya, unsur immobile seperti besi, mangan, kalsium, boron, dan tembaga menunjukkan gejala pada daun muda karena tidak dapat dipindahkan dari jaringan tua.",
    },
    {
      question:
        "Berapa biaya uji tanah di Indonesia dan apa saja parameter yang dianalisis?",
      answer:
        "Biaya uji tanah lengkap berkisar Rp150.000-500.000 per sampel. Parameter yang dianalisis meliputi pH tanah, C-organik, N-total, P-tersedia, K-tukar, KTK (Kapasitas Tukar Kation), dan unsur mikro seperti Zn, Fe, Mn, Cu, dan B.",
    },
  ],
  "program-pemerintah-2026": [
    {
      question:
        "Berapa harga pupuk bersubsidi 2026 dan apa syarat mendapatkannya?",
      answer:
        "Harga pupuk bersubsidi 2026 antara lain Urea Rp2.250/kg, NPK Phonska Rp2.300/kg, SP-36 Rp2.400/kg, dan ZA Rp1.700/kg. Syaratnya adalah tergabung dalam kelompok tani, memiliki lahan maksimal 2 hektar, terdaftar dalam sistem e-RDKK, dan memiliki Kartu Tani.",
    },
    {
      question:
        "Berapa bunga KUR Pertanian 2026 dan apa saja jenis pinjamannya?",
      answer:
        "Suku bunga KUR Pertanian 2026 adalah 3% per tahun. Jenisnya meliputi KUR Super Mikro (maks. Rp10 juta), KUR Mikro (maks. Rp50 juta, tanpa jaminan), KUR Kecil (maks. Rp500 juta), dan KUR Khusus Pertanian untuk kelompok (maks. Rp500 juta).",
    },
    {
      question: "Apa saja program pemerintah 2026 untuk petani muda?",
      answer:
        "Pemerintah meluncurkan Program Penumbuhan Wirausaha Muda Pertanian (PWMP) untuk usia 19-39 tahun dengan bantuan modal hingga Rp15 juta, pelatihan kewirausahaan 3 bulan, pendampingan teknis 1 tahun, serta program magang dan pelatihan smart farming.",
    },
    {
      question:
        "Bagaimana cara petani mengakses program bantuan pemerintah 2026?",
      answer:
        "Petani harus bergabung dengan kelompok tani yang terdaftar resmi, mendaftarkan data di SIMLUHTAN, aktif berkomunikasi dengan Penyuluh Pertanian Lapangan (PPL), menyiapkan dokumen pendukung seperti KTP dan surat keterangan usaha tani, serta memanfaatkan aplikasi digital seperti SIPINDO.",
    },
  ],
  "asuransi-usaha-tani-padi": [
    {
      question:
        "Berapa premi AUTP yang harus dibayar petani dan berapa ganti ruginya?",
      answer:
        "Petani hanya membayar Rp7.200 per hektar per musim tanam (20% dari total premi Rp36.000), karena pemerintah mensubsidi 80%. Nilai ganti rugi maksimal adalah Rp6.000.000 per hektar per musim tanam.",
    },
    {
      question: "Apa saja syarat pendaftaran AUTP?",
      answer:
        "Petani harus merupakan pemilik atau penggarap lahan, tergabung dalam Kelompok Tani (Poktan) yang terdaftar, memiliki lahan maksimal 2 hektar untuk subsidi premi, dan melengkapi dokumen berupa fotokopi KTP, surat keterangan lahan dari kepala desa, dan data lahan yang akan diasuransikan.",
    },
    {
      question:
        "Bagaimana proses klaim AUTP jika terjadi gagal panen?",
      answer:
        "Petani melapor ke Ketua Poktan atau PPL dalam 7 hari setelah kerusakan, lalu laporan diteruskan ke PT Jasindo. Tim verifikasi melakukan survei lapangan dalam 30 hari, dan ganti rugi dicairkan maksimal 14 hari kerja setelah disetujui.",
    },
    {
      question: "Risiko apa saja yang ditanggung oleh AUTP?",
      answer:
        "AUTP menanggung kerusakan akibat banjir dan genangan air, kekeringan berkepanjangan, serangan hama (wereng, tikus, penggerek batang), dan penyakit tanaman (blast, hawar daun bakteri, tungro). Klaim dapat diajukan jika kerusakan mencapai lebih dari 75% dari luas lahan.",
    },
  ],
  "manajemen-risiko-agribisnis": [
    {
      question: "Apa saja jenis risiko utama dalam agribisnis?",
      answer:
        "Terdapat empat kategori risiko utama: risiko produksi (cuaca, hama, degradasi tanah), risiko pasar (fluktuasi harga, persaingan impor), risiko finansial (keterbatasan modal, cash flow tidak stabil), dan risiko institusional (perubahan kebijakan, regulasi lahan).",
    },
    {
      question:
        "Apa itu diversifikasi usaha sebagai strategi mitigasi risiko pertanian?",
      answer:
        "Diversifikasi adalah strategi menyebarkan risiko dengan tidak bergantung pada satu jenis tanaman, pasar, atau sumber pendapatan. Contohnya menanam beberapa komoditas dengan musim panen berbeda, mengembangkan usaha pengolahan hasil tani, dan menjual ke berbagai kanal pemasaran.",
    },
    {
      question:
        "Bagaimana teknologi digital membantu manajemen risiko agribisnis?",
      answer:
        "Teknologi digital membantu melalui aplikasi prakiraan cuaca hiper-lokal, sistem informasi harga pasar real-time, sistem peringatan dini hama berbasis sensor dan AI, serta platform marketplace digital yang menghubungkan petani langsung dengan pembeli.",
    },
    {
      question: "Apa manfaat contract farming bagi petani?",
      answer:
        "Contract farming memberikan kepastian harga jual sebelum tanam, akses ke benih dan pupuk berkualitas dari mitra, bantuan teknis budidaya, kemudahan akses pembiayaan karena ada jaminan kontrak, serta mengurangi ketergantungan pada tengkulak.",
    },
  ],
  "revolusi-agritech-4-0": [
    {
      question: "Apa saja fungsi drone dalam pertanian modern?",
      answer:
        "Drone pertanian memiliki empat fungsi utama: penyemprotan pestisida atau pupuk cair (5x lebih cepat dari manual dan hemat pestisida 30%), monitoring dan pemetaan lahan menggunakan kamera multispektral, penanaman benih dengan presisi tinggi, dan identifikasi area yang membutuhkan irigasi.",
    },
    {
      question: "Berapa harga drone pertanian di Indonesia?",
      answer:
        "Harga drone pertanian bervariasi: DJI Agras T40 (kapasitas 40L) sekitar Rp250-300 juta, XAG P100 Pro (kapasitas 50L) sekitar Rp280-350 juta, dan drone buatan lokal (kapasitas 10-16L) sekitar Rp80-150 juta.",
    },
    {
      question: "Apa manfaat sensor IoT untuk pertanian?",
      answer:
        "Sensor IoT memberikan penghematan air hingga 30-40% melalui irigasi otomatis, efisiensi pupuk 25-35% dengan aplikasi presisi sesuai kebutuhan tanaman, deteksi dini masalah melalui alert otomatis, dan data historis untuk perencanaan musim tanam yang lebih baik.",
    },
    {
      question:
        "Apa tantangan adopsi Agritech 4.0 di Indonesia dan bagaimana solusinya?",
      answer:
        "Tantangan utamanya adalah biaya investasi tinggi, literasi digital rendah, infrastruktur internet terbatas, dan ketergantungan listrik. Solusinya meliputi model sharing economy kelompok tani, pelatihan di tingkat desa, subsidi pemerintah untuk alat teknologi, dan kemitraan dengan swasta.",
    },
  ],
  "program-swasembada-2025": [
    {
      question: "Berapa anggaran program swasembada pangan 2025?",
      answer:
        "Pemerintah mengalokasikan anggaran sebesar Rp139,4 triliun untuk program swasembada pangan 2025, dengan porsi terbesar (30,5%) untuk pembukaan lahan baru sebesar Rp42,5 triliun.",
    },
    {
      question:
        "Berapa target luas sawah baru dalam program swasembada 2025?",
      answer:
        "Target pembukaan sawah baru adalah 3 juta hektar yang tersebar di Kalimantan (1,2 juta ha), Sumatera (800 ribu ha), Papua dan Maluku (600 ribu ha), serta Sulawesi dan Nusa Tenggara (400 ribu ha), dilaksanakan secara bertahap dari 2025 hingga 2029.",
    },
    {
      question:
        "Kapan Indonesia ditargetkan mencapai swasembada beras penuh?",
      answer:
        "Indonesia ditargetkan mencapai swasembada beras penuh pada tahun 2027 dengan produksi 35 juta ton, dan berpotensi menjadi eksportir beras pada 2029 dengan produksi 38 juta ton.",
    },
    {
      question:
        "Apa saja tantangan utama program swasembada pangan Indonesia?",
      answer:
        "Tantangan utama meliputi alih fungsi lahan pertanian (80-100 ribu hektar/tahun), perubahan iklim dan cuaca ekstrem, penuaan petani dengan rata-rata usia di atas 50 tahun, fragmentasi lahan dengan kepemilikan rata-rata hanya 0,3-0,5 hektar, serta keterbatasan infrastruktur irigasi.",
    },
  ],
  "subak-hingga-smart-farming": [
    {
      question: "Apa itu Subak dan mengapa diakui UNESCO?",
      answer:
        "Subak adalah organisasi sosial-religius di Bali yang mengatur manajemen air untuk pertanian padi, berlandaskan filosofi Tri Hita Karana. UNESCO mengakuinya sebagai Warisan Budaya Dunia pada tahun 2012 karena merupakan bukti kejeniusan pengelolaan sumber daya berbasis komunitas.",
    },
    {
      question: "Apa itu filosofi Tri Hita Karana dalam sistem Subak?",
      answer:
        "Tri Hita Karana adalah tiga penyebab kesejahteraan yang menjadi landasan Subak, yaitu Parahyangan (hubungan manusia dengan Tuhan), Pawongan (hubungan manusia dengan manusia melalui musyawarah dan keadilan), dan Palemahan (hubungan manusia dengan alam untuk keberlanjutan ekosistem).",
    },
    {
      question:
        "Apa saja teknologi yang digunakan dalam smart farming?",
      answer:
        "Smart farming memanfaatkan sensor tanah dan cuaca IoT untuk monitoring real-time, drone untuk pemetaan lahan dan penyemprotan presisi, serta otomatisasi irigasi berbasis data sensor untuk menghasilkan lebih banyak dengan sumber daya lebih sedikit.",
    },
    {
      question: "Bagaimana Subak dan smart farming bisa bersinergi?",
      answer:
        "Sinergi dicapai melalui model pertanian hybrid yang berjiwa Subak dan berotak digital. Teknologi menjadi alat bantu bagi konsensus sosial Subak, pemupukan presisi mendukung prinsip Palemahan menjaga alam, dan citra pertanian canggih menarik generasi muda sebagai penerus Subak.",
    },
  ],
  "break-even-point-usaha-tani": [
    {
      question: "Apa itu Break Even Point (BEP) dalam usaha tani padi?",
      answer:
        "Break Even Point atau titik impas adalah kondisi di mana total pendapatan sama dengan total biaya produksi sehingga usaha tani tidak untung maupun rugi. BEP menunjukkan berapa kilogram gabah minimum yang harus diproduksi atau berapa harga jual minimum agar petani tidak merugi.",
    },
    {
      question:
        "Berapa BEP usaha tani padi per hektar dan bagaimana rumusnya?",
      answer:
        "Dengan total biaya produksi Rp17.203.750 per hektar, BEP unit adalah 3.128 kg gabah (total biaya dibagi harga jual Rp5.500/kg) dan BEP harga adalah Rp3.128/kg (total biaya dibagi produksi 5.500 kg). Margin keamanan sekitar 43%.",
    },
    {
      question: "Berapa keuntungan bersih usaha tani padi 1 hektar?",
      answer:
        "Dengan produktivitas 5.500 kg/ha dan harga jual Rp5.500/kg, total penerimaan adalah Rp30.250.000. Setelah dikurangi total biaya produksi Rp17.203.750, keuntungan bersih mencapai Rp13.046.250 per musim tanam dengan R/C Ratio 1,76.",
    },
    {
      question: "Bagaimana strategi menurunkan BEP usaha tani padi?",
      answer:
        "Strategi menekan biaya meliputi membuat pupuk organik sendiri, pengendalian hama terpadu, memanfaatkan pupuk bersubsidi, dan mekanisasi. Strategi meningkatkan pendapatan meliputi pemilihan varietas unggul baru, menjual dalam bentuk beras, dan menunda jual saat harga tinggi.",
    },
  ],
  "budidaya-gap-padi": [
    {
      question:
        "Apa itu GAP dalam budidaya padi dan apa manfaatnya?",
      answer:
        "Good Agricultural Practices (GAP) adalah pedoman budidaya pertanian yang baik untuk menghasilkan pangan bermutu tinggi, aman, dan berkelanjutan. Penerapan GAP terbukti meningkatkan produktivitas padi 15-30% dan mengurangi biaya produksi hingga 20%.",
    },
    {
      question:
        "Apa saja varietas padi unggul yang direkomendasikan dalam standar GAP?",
      answer:
        "Varietas unggul yang direkomendasikan antara lain Inpari 32 (potensi 9,8 ton/ha, tahan wereng), Inpari 42 (potensi 10,58 ton/ha, tahan hawar daun), Ciherang (8,0 ton/ha, tekstur pulen), Mekongga (8,4 ton/ha, cocok dataran rendah), dan Inpari HDB (9,1 ton/ha).",
    },
    {
      question:
        "Bagaimana sistem tanam jajar legowo dan apa keunggulannya?",
      answer:
        "Jajar legowo adalah sistem tanam dengan pola baris tanam dan baris kosong. Tipe 2:1 memiliki populasi 213.000 rumpun/ha dengan peningkatan hasil 10-15%. Keunggulannya meliputi sirkulasi udara lebih baik, efek tanaman pinggir, dan kemudahan pengendalian hama.",
    },
    {
      question:
        "Bagaimana pola pengairan berselang yang direkomendasikan GAP?",
      answer:
        "Pengairan berselang dilakukan sesuai fase pertumbuhan: genangan 2-3 cm pada fase vegetatif awal, pengairan berselang basah-kering pada fase vegetatif aktif, genangan kontinu 3-5 cm pada fase pembungaan, dan pengeringan bertahap pada fase pemasakan. Metode ini menghemat air 20-30%.",
    },
  ],
  "ekspor-kopi-indonesia": [
    {
      question:
        "Berapa nilai ekspor kopi Indonesia dan ke negara mana saja?",
      answer:
        "Nilai ekspor kopi Indonesia mencapai US$1,62 miliar. Tujuan ekspor utama adalah Amerika Serikat (US$385,2 juta), Uni Eropa (US$312,4 juta), Jepang (US$248,7 juta), Mesir (US$178,9 juta), dan Malaysia (US$142,3 juta).",
    },
    {
      question:
        "Apa saja jenis kopi Indonesia yang terkenal di pasar global?",
      answer:
        "Indonesia menghasilkan tiga kategori utama: Arabika (25-30% produksi, harga US$3-8/kg, profil fruity dan floral), Robusta (70-75% produksi, harga US$1,5-3/kg, profil earthy dan bold), dan Kopi Luwak yang langka dengan harga US$100-600/kg.",
    },
    {
      question:
        "Dari daerah mana saja kopi terkenal Indonesia berasal?",
      answer:
        "Daerah penghasil kopi terkenal antara lain Gayo Aceh, Toraja Sulawesi Selatan, Kintamani Bali (kopi IG pertama Indonesia), dataran tinggi Ijen Jawa, Flores NTT, serta Mandailing dan Lintong Sumatera Utara.",
    },
    {
      question:
        "Apa itu metode giling basah (wet-hulling) khas kopi Sumatera?",
      answer:
        "Giling basah adalah metode pengolahan khas Sumatera di mana biji kopi dikupas kulitnya saat kadar air masih tinggi (30-35%), menghasilkan biji berwarna kehijauan dengan karakter rasa earthy, herbal, dan body yang sangat tebal.",
    },
  ],
  "adaptasi-perubahan-iklim": [
    {
      question:
        "Apa dampak perubahan iklim terhadap pertanian Indonesia?",
      answer:
        "Perubahan iklim menyebabkan kekeringan berkepanjangan akibat El Nino dan banjir akibat La Nina, mengakibatkan kerugian pertanian mencapai Rp14,9 triliun per tahun. Setiap kenaikan suhu 1 derajat Celsius dapat menurunkan produktivitas padi hingga 7-10%.",
    },
    {
      question:
        "Apa saja varietas padi tahan cuaca ekstrem yang dikembangkan di Indonesia?",
      answer:
        "Indonesia telah mengembangkan varietas padi toleran kekeringan seperti Inpari 38, Inpari 39, dan Situ Bagendit, serta varietas toleran genangan seperti Inpari 30 Ciherang Sub1 yang mampu bertahan hingga 14 hari terendam air.",
    },
    {
      question:
        "Bagaimana cara kerja asuransi usaha tani padi (AUTP)?",
      answer:
        "AUTP adalah program asuransi bersubsidi 80% dengan premi hanya Rp36.000/ha/musim yang melindungi petani dari gagal panen akibat banjir, kekeringan, dan serangan hama. Ganti rugi mencapai Rp6.000.000/ha dengan syarat kerusakan minimal 75%.",
    },
    {
      question:
        "Apa saja strategi adaptasi perubahan iklim yang bisa diterapkan petani?",
      answer:
        "Petani dapat menerapkan penyesuaian kalender tanam menggunakan aplikasi KATAM, pengelolaan air terpadu dengan teknik SRI dan AWD yang menghemat air hingga 30%, diversifikasi tanaman, serta praktik pertanian berkelanjutan seperti agroforestri.",
    },
  ],
  "petani-milenial": [
    {
      question:
        "Berapa jumlah petani milenial di Indonesia dan berapa potensi penghasilannya?",
      answer:
        "Terdapat lebih dari 300.000 petani milenial aktif di Indonesia. Rata-rata omzet mereka 3-5 kali lebih tinggi dari petani konvensional, dengan potensi mulai dari Rp30 juta hingga ratusan juta rupiah per bulan.",
    },
    {
      question:
        "Apa saja model bisnis agribisnis modern yang menguntungkan?",
      answer:
        "Model bisnis populer di kalangan petani milenial meliputi Direct-to-Consumer (D2C) dengan margin 40-60% lebih tinggi, subscription box dengan recurring revenue, B2B ke hotel dan restoran, serta value-added products berupa produk olahan dengan margin 3-10 kali lipat.",
    },
    {
      question: "Apa saja tantangan yang dihadapi petani milenial?",
      answer:
        "Tantangan utama meliputi sulitnya akses modal, keterbatasan akses lahan akibat harga yang terus meningkat, fluktuasi harga komoditas, risiko perubahan iklim, stigma sosial terhadap profesi petani, dan infrastruktur logistik cold chain yang belum merata.",
    },
    {
      question:
        "Bagaimana cara memulai agribisnis untuk anak muda?",
      answer:
        "Mulailah dengan riset pasar dan pilih komoditas bersiklus panen pendek (30-60 hari), susun business plan, mulai dari skala kecil, bangun brand dan kehadiran digital di media sosial, bergabung dengan komunitas petani, lalu diversifikasi setelah bisnis stabil.",
    },
  ],
  "arsitektur-pertanian-indonesia": [
    {
      question:
        "Seberapa besar kontribusi sektor pertanian terhadap ekonomi Indonesia?",
      answer:
        "Sektor pertanian berkontribusi 12-14% terhadap PDB nasional dan menyerap 28,64% tenaga kerja Indonesia. Pada kuartal kedua 2025, pertumbuhan sektor ini mencapai 13,53%, menjadikannya kontributor ekonomi terbesar kedua setelah industri pengolahan.",
    },
    {
      question: "Apa itu sistem Subak di Bali dan mengapa penting?",
      answer:
        "Subak adalah sistem irigasi tradisional Bali yang diakui UNESCO sebagai Warisan Budaya Dunia. Berlandaskan filosofi Tri Hita Karana, Subak mengatur hubungan antara manusia dengan Tuhan (Parahyangan), sesama manusia (Pawongan), dan alam (Palemahan).",
    },
    {
      question:
        "Apa saja teknologi modern yang diterapkan dalam pertanian Indonesia?",
      answer:
        "Teknologi Pertanian 4.0 meliputi drone sprayer yang 5 kali lebih cepat, sensor IoT yang menghemat air dan pupuk hingga 30%, AI monitoring untuk deteksi dini hama, serta pemantauan kesehatan tanaman real-time melalui satelit.",
    },
    {
      question:
        "Apa target kebijakan strategis pemerintah untuk pertanian 2024-2025?",
      answer:
        "Pemerintah menetapkan anggaran Rp139,4 triliun dengan target mencetak 3 juta hektar sawah baru, menyediakan subsidi 9,03 juta ton pupuk, mendistribusikan 1,14 juta unit alsintan, dan melakukan hilirisasi 13 komoditas strategis.",
    },
  ],
  "analisis-strategis-kementan-2026": [
    {
      question:
        "Berapa anggaran Kementerian Pertanian 2026 dan bagaimana alokasinya?",
      answer:
        "Pagu anggaran Kementan 2026 sebesar Rp40,14 triliun, dengan alokasi terbesar Rp23,81 triliun untuk ketersediaan dan konsumsi pangan, Rp8,95 triliun untuk dukungan manajemen, Rp6,62 triliun untuk hilirisasi nilai tambah, dan Rp0,747 triliun untuk SDM.",
    },
    {
      question:
        "Apa itu program Brigade Pangan dan siapa yang bisa bergabung?",
      answer:
        "Brigade Pangan adalah program regenerasi petani yang menargetkan 100.000 anggota berusia 17-39 tahun. Setiap unit terdiri dari 15 orang yang mengelola lahan 200 hektar, dengan potensi penghasilan bersih Rp10 juta per bulan per anggota.",
    },
    {
      question:
        "Berapa target produksi pangan strategis Indonesia tahun 2026?",
      answer:
        "Target produksi 2026 meliputi beras 34,77 juta ton, jagung 16-18 juta ton untuk pakan ternak mandiri, daging sapi 514.000 ton untuk reduksi impor, dan tebu 39-44 juta ton sebagai fondasi gula nasional.",
    },
    {
      question:
        "Bagaimana pemerintah melindungi petani dari risiko gagal panen di 2026?",
      answer:
        "Pemerintah menyediakan AUTP dengan premi hanya Rp36.000/ha (subsidi 80%) serta KUR Pertanian bunga 6% flat dengan plafon Rp300 triliun tanpa agunan untuk pinjaman di bawah Rp100 juta. Distribusi pupuk bersubsidi diamankan melalui sistem digital i-Pubers berbasis KTP.",
    },
  ],
  "transformasi-agraria-2026": [
    {
      question: "Apa saja 5 pilar kebijakan pertanian Indonesia 2026?",
      answer:
        "Lima pilar meliputi: A) Ketersediaan lahan melalui ekstensifikasi dan optimalisasi, B) Kepastian input pupuk bersubsidi senilai Rp46,87 triliun, C) Likuiditas permodalan melalui KUR 6%, D) Efisiensi teknologi Agritech 4.0, dan E) Jaring pengaman risiko melalui AUTP.",
    },
    {
      question: "Bagaimana skema KUR Pertanian 2026 bekerja untuk petani?",
      answer:
        "KUR Pertanian 2026 menawarkan bunga flat 6% dengan plafon Rp295 triliun, 65% dialokasikan untuk sektor produksi. Petani bisa menggunakan skema Yarnen (bayar saat panen) dan mengakses pinjaman melalui digital credit scoring berbasis data satelit.",
    },
    {
      question:
        "Apa manfaat sistem i-Pubers untuk distribusi pupuk bersubsidi?",
      answer:
        "Sistem i-Pubers mengintegrasikan data petani real-time dan memungkinkan penebusan pupuk bersubsidi menggunakan KTP. Sistem ini menutup celah manipulasi stok melalui tracking digital, memastikan 9,55 juta ton pupuk senilai Rp46,87 triliun tepat sasaran.",
    },
    {
      question:
        "Apa dampak ekonomi makro dari kebijakan pertanian 2026?",
      answer:
        "Integrasi 5 pilar kebijakan diharapkan mengendalikan inflasi pangan, menciptakan multiplier effect pedesaan yang menekan urbanisasi, serta mewujudkan kemandirian pangan yang menghemat cadangan devisa dari pengurangan impor.",
    },
  ],
};
