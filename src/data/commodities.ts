export interface Spec {
  label: string;
  value: string;
  note: string;
}

export interface VarietyDetail {
  name: string;
  desc: string;
}

export interface Commodity {
  slug: string;
  name: string;
  en: string;
  icon: string;
  scientificName?: string;
  // Showcase styling
  bg: string;
  border: string;
  tc: string;
  tag: string;
  // Short description (used on showcase + as og description)
  desc: string;
  descEn: string;
  // Showcase data
  specs: Spec[];
  variants: string[];
  markets: string[];
  exportReady: boolean;
  // Detail page extras
  about: string;
  aboutEn: string;
  benefits: string[];
  cultivation: string;
  varietyDetails: VarietyDetail[];
  marketOutlook: string;
}

export const commodities: Commodity[] = [
  {
    slug: "jahe",
    name: "Jahe & Rempah",
    en: "Ginger & Spices",
    icon: "🫚",
    scientificName: "Zingiber officinale",
    bg: "#fff7ed",
    border: "#fed7aa",
    tc: "#9a3412",
    tag: "#ea580c",
    desc: "Jahe merah, jahe gajah, jahe emprit — segar maupun kering. Diproses dengan standar ekspor: sortasi, pengeringan, grading, dan pengemasan vacuum. Cocok untuk buyer farmasi, F&B, dan herbal internasional.",
    descEn:
      "Red ginger, elephant ginger, emprit ginger — fresh or dried. Processed to export standards: sorting, drying, grading, and vacuum packaging. Ideal for pharmaceutical, F&B, and international herbal buyers.",
    specs: [
      { label: "Moisture (Dry)", value: "≤12%", note: "Export standard" },
      { label: "Gingerol Content", value: "High", note: "Red ginger premium" },
      { label: "Packaging", value: "Vacuum / PP Bag", note: "Custom available" },
      { label: "MOQ", value: "500 kg", note: "Minimum order" },
    ],
    variants: [
      "Jahe Merah Segar",
      "Jahe Merah Kering (Slice)",
      "Jahe Gajah Segar",
      "Jahe Emprit",
      "Serbuk Jahe (Powder)",
      "Jahe Sortasi Export Grade",
    ],
    markets: [
      "Industri farmasi & jamu",
      "Ekspor ke Malaysia, Timur Tengah",
      "F&B & minuman kesehatan",
      "Buyer Eropa & Asia",
    ],
    exportReady: true,
    about:
      "Jahe (Zingiber officinale) adalah rimpang aromatik yang menjadi salah satu rempah ekspor unggulan Indonesia. Rasanya pedas-hangat berasal dari senyawa gingerol dan shogaol yang juga dikenal punya khasiat anti-inflamasi dan antioksidan. Indonesia memiliki tiga varietas utama yang masing-masing punya pasar berbeda — jahe merah untuk industri jamu/herbal premium, jahe gajah untuk F&B/kuliner, dan jahe emprit untuk minuman tradisional.",
    aboutEn:
      "Ginger (Zingiber officinale) is an aromatic rhizome that ranks as one of Indonesia's premier export spices. Its pungent-warming flavor comes from gingerol and shogaol — compounds also valued for anti-inflammatory and antioxidant properties. Indonesia produces three main varieties: red ginger (premium for herbal/jamu industry), elephant ginger (F&B and culinary), and emprit ginger (traditional beverages).",
    benefits: [
      "Bahan baku jamu, suplemen kesehatan, dan herbal medicine",
      "Penyedap utama F&B (minuman kesehatan, kue, masakan tradisional)",
      "Ekstrak gingerol untuk kosmetik dan farmasi",
      "Minyak atsiri jahe untuk aromaterapi",
      "Bumbu kuliner pasar Asia Timur, Timur Tengah, dan Eropa",
    ],
    cultivation:
      "Jahe tumbuh optimal di dataran rendah-menengah (200–600 mdpl), curah hujan 2.500–4.000 mm/tahun, dan tanah gembur kaya bahan organik. Periode tanam 8–12 bulan tergantung varietas. Penanganan pascapanen kritis: pencucian, perajangan (untuk slice), pengeringan ke moisture ≤12%, dan pengemasan vacuum untuk standar ekspor. Kami bermitra dengan petani jahe di Jawa Tengah untuk memastikan kualitas dari hulu.",
    varietyDetails: [
      {
        name: "Jahe Merah",
        desc: "Rimpang lebih kecil, warna merah-cokelat, kandungan minyak atsiri & gingerol tertinggi. Premium untuk jamu, suplemen, dan ekspor herbal.",
      },
      {
        name: "Jahe Gajah (Jahe Badak)",
        desc: "Rimpang besar, warna kuning pucat, rasa kurang pedas. Cocok untuk F&B, manisan, dan kebutuhan kuliner skala industri.",
      },
      {
        name: "Jahe Emprit",
        desc: "Ukuran sedang, warna kuning, rasa pedas khas. Banyak dipakai untuk minuman tradisional (wedang) dan bumbu masak.",
      },
    ],
    marketOutlook:
      "Permintaan jahe Indonesia di pasar global terus tumbuh, terutama dari Malaysia, Bangladesh, India, Timur Tengah (UAE, Saudi), dan Eropa. Tren konsumsi suplemen herbal pasca-pandemi mendorong harga jahe merah kering ke level premium. Indonesia adalah salah satu produsen jahe terbesar dunia — peluang nilai tambah ada di pengolahan (slice, powder, oleoresin) bukan sekadar rimpang segar.",
  },
  {
    slug: "kunyit",
    name: "Kunyit & Temulawak",
    en: "Turmeric & Curcuma",
    icon: "🟡",
    scientificName: "Curcuma longa & Curcuma xanthorrhiza",
    bg: "#fefce8",
    border: "#fef08a",
    tc: "#713f12",
    tag: "#ca8a04",
    desc: "Kunyit dan temulawak segar maupun kering dengan kandungan kurkumin tinggi. Produk unggulan untuk pasar herbal, farmasi, food coloring, dan suplemen kesehatan global.",
    descEn:
      "Fresh and dried turmeric and curcuma with high curcumin content. Premium products for herbal, pharmaceutical, food coloring, and global health supplement markets.",
    specs: [
      { label: "Curcumin Content", value: ">3%", note: "Premium dried turmeric" },
      { label: "Moisture (Dry)", value: "≤12%", note: "Export standard" },
      { label: "Color", value: "Deep Orange", note: "High quality grade" },
      { label: "MOQ", value: "300 kg", note: "Minimum order" },
    ],
    variants: [
      "Kunyit Segar",
      "Kunyit Kering (Slice)",
      "Kunyit Powder",
      "Temulawak Segar",
      "Temulawak Kering",
      "Simplisia Export Grade",
    ],
    markets: [
      "Industri jamu & herbal",
      "Suplemen kesehatan",
      "Food coloring industry",
      "Ekspor Eropa, Jepang, Korea",
    ],
    exportReady: true,
    about:
      "Kunyit (Curcuma longa) dan temulawak (Curcuma xanthorrhiza) adalah dua rimpang dari famili Zingiberaceae yang menjadi tulang punggung industri jamu Indonesia. Keduanya kaya akan kurkuminoid — pigmen oranye yang memberikan warna khas dan dipelajari secara luas untuk efek anti-inflamasi serta hepatoprotektif. Temulawak adalah tanaman endemik Indonesia (asli Pulau Jawa) yang tidak dimiliki produsen lain dalam skala komersial — keunggulan kompetitif yang signifikan untuk ekspor herbal.",
    aboutEn:
      "Turmeric (Curcuma longa) and curcuma (Curcuma xanthorrhiza) are two rhizomes from the Zingiberaceae family that anchor Indonesia's jamu (traditional herbal) industry. Both are rich in curcuminoids — the orange pigment delivering their signature color and studied extensively for anti-inflammatory and hepatoprotective effects. Curcuma xanthorrhiza is endemic to Indonesia (native to Java) — a competitive edge no other major producer holds at commercial scale.",
    benefits: [
      "Bahan utama jamu tradisional Indonesia (jamu kunyit asem, temulawak)",
      "Suplemen kesehatan hati (hepatoprotektif) — terutama temulawak",
      "Pewarna alami industri F&B (curry, mustard, kosmetik)",
      "Bahan baku ekstrak kurkumin untuk farmasi & nutrasetikal",
      "Pasar specialty: kunyit emas (golden milk) di Eropa & US",
    ],
    cultivation:
      "Kunyit tumbuh baik di 0–1.300 mdpl, suhu 20–30°C, dengan periode tanam 9–10 bulan. Temulawak butuh dataran rendah-menengah, curah hujan 1.000–4.000 mm/tahun. Pasca panen: dicuci, dirajang tipis, dijemur/oven hingga moisture ≤12%, lalu di-grading berdasarkan ukuran dan warna. Untuk pasar farmasi, kontrol mikrobiologi dan kandungan kurkumin diuji laboratorium.",
    varietyDetails: [
      {
        name: "Kunyit (Curcuma longa)",
        desc: "Rimpang oranye terang, kandungan kurkumin 2–5%. Dikenal global sebagai turmeric — bumbu masak, pewarna, dan suplemen.",
      },
      {
        name: "Temulawak (Curcuma xanthorrhiza)",
        desc: "Endemik Jawa, lebih besar dari kunyit, warna oranye kekuningan. Khasiat dominan: hepatoprotektif. Pasar utama: industri jamu nasional.",
      },
      {
        name: "Simplisia Kering",
        desc: "Bentuk rajangan/slice yang sudah dikeringkan dan di-grading untuk industri farmasi/herbal. Standar Materia Medika Indonesia (MMI).",
      },
    ],
    marketOutlook:
      "Pasar global kurkumin tumbuh cepat didorong tren wellness dan supplement industry di US, Eropa, Jepang, dan Korea. Indonesia bersaing dengan India sebagai produsen utama, namun keunikan temulawak memberi diferensiasi kuat. Buyer biasanya mencari moisture ≤10%, kurkumin >3%, dan dokumentasi pestisida (clean/organic preferred). Peluang nilai tambah: ekstrak kurkumin terstandar (95%+) dan produk fortified.",
  },
  {
    slug: "lada",
    name: "Lada & Cabai",
    en: "Pepper & Chili",
    icon: "🌶️",
    scientificName: "Piper nigrum & Capsicum spp.",
    bg: "#fff1f2",
    border: "#fecdd3",
    tc: "#be123c",
    tag: "#e11d48",
    desc: "Lada hitam, lada putih, cabai kering sortasi. Indonesia adalah produsen lada terbesar ketiga dunia — kami menghubungkan Anda langsung ke sumber.",
    descEn:
      "Black pepper, white pepper, and sorted dried chili. Indonesia is the world's 3rd largest pepper producer — we connect you directly to the source.",
    specs: [
      { label: "Piperine (Pepper)", value: ">5%", note: "Black pepper grade" },
      { label: "Moisture", value: "≤12%", note: "Dried & sorted" },
      { label: "Foreign Matter", value: "<0.5%", note: "Clean sorted grade" },
      { label: "MOQ", value: "200 kg", note: "Minimum order" },
    ],
    variants: [
      "Lada Hitam (Black Pepper)",
      "Lada Putih (White Pepper)",
      "Cabai Merah Kering",
      "Cabai Rawit Kering",
      "Paprika Kering",
    ],
    markets: [
      "Industri bumbu & rempah",
      "Restoran & F&B global",
      "Ekspor ke Eropa, Amerika",
      "Pasar Asia & Timur Tengah",
    ],
    exportReady: true,
    about:
      "Lada (Piper nigrum) dan cabai (Capsicum spp.) adalah dua rempah pedas paling diperdagangkan di dunia. Lada Indonesia, terutama Lada Putih Muntok dari Bangka dan Lada Hitam Lampung, punya reputasi global karena aroma kuat dan kandungan piperin tinggi — senyawa yang memberikan rasa pedas khas. Indonesia masuk top-3 produsen lada dunia bersama Vietnam dan India. Cabai kering Indonesia (cabai rawit, cabai merah, paprika) memenuhi pasar lokal dan ekspor sambal/saus.",
    aboutEn:
      "Pepper (Piper nigrum) and chili (Capsicum spp.) are two of the world's most-traded pungent spices. Indonesian pepper — especially Muntok White Pepper from Bangka and Lampung Black Pepper — holds global recognition for strong aroma and high piperine content, the compound behind its signature heat. Indonesia is a top-3 global pepper producer alongside Vietnam and India. Indonesian dried chilies (cabai rawit, cabai merah, paprika) supply both domestic and export sambal/sauce markets.",
    benefits: [
      "Bumbu wajib dapur global (black pepper di hampir semua kuisin)",
      "Industri sausage, ham, dan processed meat di Eropa",
      "Bahan dasar sambal & saus Asia (cabai kering)",
      "Ekstrak piperin untuk farmasi (penambah bioavailability)",
      "Specialty pepper: Muntok White Pepper sebagai premium ingredient",
    ],
    cultivation:
      "Lada tumbuh sebagai tanaman merambat di dataran rendah hingga 600 mdpl, butuh tiang panjat (junjung) hidup atau mati. Panen pertama 3 tahun setelah tanam, masa produktif 15–20 tahun. Lada hitam dipanen saat masih muda lalu dijemur dengan kulit. Lada putih dipanen matang, direndam, dikuliti, baru dikeringkan. Cabai dipanen rutin setiap 4–7 hari pada masa produktif.",
    varietyDetails: [
      {
        name: "Lada Hitam (Black Pepper)",
        desc: "Buah lada muda dijemur dengan kulit. Aroma kuat, piperin tinggi (>5%). Pasar global terbesar — bumbu universal.",
      },
      {
        name: "Lada Putih (White Pepper)",
        desc: "Buah matang, kulit dikupas. Rasa lebih bersih, harga premium. Lada Putih Muntok punya geographical indication.",
      },
      {
        name: "Cabai Merah Kering",
        desc: "Cabai besar dikeringkan untuk bumbu sambal, oleoresin, paprika powder. Skala besar untuk industri saus.",
      },
      {
        name: "Cabai Rawit Kering",
        desc: "Pedas tinggi, ekspor ke pasar Asia. Bahan baku produk fermented chili dan sambal kemasan.",
      },
    ],
    marketOutlook:
      "Harga lada dunia berfluktuasi mengikuti siklus produksi Vietnam (produsen #1). Diferensiasi Indonesia ada di Muntok White Pepper dan Lampung Black Pepper — geographical indication yang dilindungi. Buyer Eropa (Jerman, Belanda) dan US adalah importir tradisional. Pasar cabai kering tumbuh seiring popularitas Asian cuisine global. Peluang: clean-label, organic certified, dan ground/cracked formats untuk retail.",
  },
  {
    slug: "kopi",
    name: "Kopi & Kakao",
    en: "Coffee & Cacao",
    icon: "☕",
    scientificName: "Coffea robusta, Coffea arabica & Theobroma cacao",
    bg: "#fdf4ff",
    border: "#e9d5ff",
    tc: "#581c87",
    tag: "#7c3aed",
    desc: "Biji kopi robusta dan arabika dari petani pegunungan Jawa Tengah. Kakao fermentasi dan non-fermentasi untuk industri coklat premium. Tersedia green bean maupun roasted.",
    descEn:
      "Robusta and arabica coffee beans from Central Java highland farmers. Fermented and non-fermented cacao beans for premium chocolate industry. Available as green bean or roasted.",
    specs: [
      { label: "Grade", value: "Grade 1–4", note: "Specialty to commercial" },
      { label: "Moisture", value: "≤12.5%", note: "Green bean standard" },
      { label: "Defect", value: "<11%", note: "Grade 1 standard" },
      { label: "MOQ", value: "100 kg", note: "Minimum order" },
    ],
    variants: [
      "Kopi Robusta Green Bean",
      "Kopi Arabika Green Bean",
      "Kopi Roasted (Custom)",
      "Kakao Biji Fermentasi",
      "Kakao Non-Fermentasi",
    ],
    markets: [
      "Specialty coffee roasters",
      "Industri coklat premium",
      "Ekspor ke Eropa & Amerika",
      "Buyer Jepang & Korea",
    ],
    exportReady: true,
    about:
      "Kopi (Coffea spp.) dan kakao (Theobroma cacao) adalah dua dari lima komoditas perkebunan terbesar Indonesia. Kopi Indonesia dikenal dunia lewat single-origin Gayo, Mandheling, Toraja, Bali Kintamani, dan Java Preanger — masing-masing punya profil cita rasa yang unik dipengaruhi tanah vulkanik dan ketinggian. Kakao Indonesia masuk top-3 produsen dunia bersama Pantai Gading dan Ghana. Kami fokus pada green bean dari petani Jawa Tengah dan biji kakao fermentasi untuk industri coklat premium.",
    aboutEn:
      "Coffee (Coffea spp.) and cacao (Theobroma cacao) rank among Indonesia's top five plantation commodities. Indonesian coffee is globally renowned through single-origins like Gayo, Mandheling, Toraja, Bali Kintamani, and Java Preanger — each with distinct flavor profiles shaped by volcanic soil and altitude. Indonesia is a top-3 global cacao producer alongside Côte d'Ivoire and Ghana. We focus on green beans from Central Java farmers and fermented cacao beans for the premium chocolate industry.",
    benefits: [
      "Specialty coffee single-origin untuk roaster boutique global",
      "Robusta untuk blend espresso & instant coffee industry",
      "Kakao fermentasi untuk chocolatier premium (couverture)",
      "Kakao mass untuk industri biskuit & cocoa powder",
      "Cocoa butter dan cocoa liquor untuk industri F&B & kosmetik",
    ],
    cultivation:
      "Arabika tumbuh di ketinggian 1.000–2.000 mdpl dengan iklim sejuk; robusta tahan di dataran lebih rendah (300–800 mdpl). Pemanenan kopi selektif (cherry merah saja) menjamin grade specialty. Pasca panen: wet/dry process, fermentasi, pengeringan ke moisture ≤12.5%, lalu hulling. Kakao butuh dataran rendah, curah hujan tinggi. Fermentasi 5–7 hari adalah kunci profil rasa coklat — non-fermentasi cocok untuk pasar mass-industry, fermentasi untuk premium.",
    varietyDetails: [
      {
        name: "Kopi Robusta",
        desc: "Coffea canephora — kafein tinggi, rasa lebih pahit/full body, harga ekonomis. Pasar utama: blend espresso, instant coffee.",
      },
      {
        name: "Kopi Arabika",
        desc: "Coffea arabica — body lebih ringan, asam buah/floral, premium. Single-origin Indonesia sering masuk specialty market di Eropa, US, Jepang.",
      },
      {
        name: "Kakao Fermentasi",
        desc: "Difermentasi 5–7 hari, profil rasa kompleks. Standar buyer chocolatier premium di Eropa.",
      },
      {
        name: "Kakao Non-Fermentasi",
        desc: "Untuk industri mass-market: cocoa powder, biskuit, snack. Volume besar, margin lebih rendah.",
      },
    ],
    marketOutlook:
      "Specialty coffee global market tumbuh stabil di Eropa, US, dan Asia Timur. Indonesia punya posisi kuat di single-origin segment — buyer mau premium untuk Gayo, Mandheling, Toraja. Pasar kakao Indonesia terdorong fine flavor cocoa initiative dan EU Deforestation Regulation (EUDR) yang memberi peluang traceable supply. Tantangan: konsistensi kualitas pasca-panen di tingkat petani — peluang untuk processor yang bisa memberi premium harga ke petani mitra.",
  },
  {
    slug: "porang",
    name: "Porang",
    en: "Porang (Konjac)",
    icon: "🥔",
    scientificName: "Amorphophallus muelleri",
    bg: "#faf5ff",
    border: "#ddd6fe",
    tc: "#4c1d95",
    tag: "#7c3aed",
    desc: "Porang (Amorphophallus muelleri) adalah umbi bernilai ekspor tinggi dengan kandungan glukomanan tinggi. Sangat diminati Jepang, China, Korea, dan Eropa untuk produksi tepung konjac, shirataki noodles, dan suplemen diet.",
    descEn:
      "Porang (Amorphophallus muelleri) is a high-value export crop with high glucomannan content. Highly sought after by Japan, China, Korea, and Europe for konjac flour, shirataki noodles, and dietary supplements.",
    specs: [
      { label: "Glucomannan", value: ">45%", note: "Dry flour standard" },
      { label: "Moisture (Chip)", value: "≤14%", note: "Porang chip kering" },
      { label: "Export Price", value: "Premium", note: "USD 3–8/kg flour" },
      { label: "MOQ", value: "1 ton", note: "Minimum order (chips)" },
    ],
    variants: [
      "Porang Segar (Umbi)",
      "Porang Chip Kering",
      "Tepung Porang (Konjac Flour)",
      "Porang Sortasi Export Grade",
    ],
    markets: [
      "Jepang — shirataki & konjac",
      "China — industri konjac",
      "Korea & Taiwan",
      "Eropa — health food & suplemen",
    ],
    exportReady: true,
    about:
      "Porang (Amorphophallus muelleri) adalah umbi-umbian asli Indonesia yang naik daun di pasar ekspor sejak 2018. Kandungan glukomanan-nya — sejenis serat larut yang membentuk gel saat berinteraksi dengan air — menjadikan porang bahan baku utama tepung konjac, shirataki noodle, dan suplemen diet rendah kalori. Berbeda dengan konjac Jepang (Amorphophallus konjac), porang Indonesia tumbuh liar/semi-budidaya di hutan jati Jawa Timur dan Madiun, dan kini dibudidayakan secara komersial di banyak daerah termasuk Jawa Tengah.",
    aboutEn:
      "Porang (Amorphophallus muelleri) is an Indonesian native tuber that surged in export markets from 2018 onward. Its glucomannan content — a soluble fiber that forms gel when hydrated — makes porang a key raw material for konjac flour, shirataki noodles, and low-calorie dietary supplements. Unlike Japanese konjac (Amorphophallus konjac), Indonesian porang grows wild or semi-cultivated under teak forests in East Java and Madiun, and is now commercially farmed in many regions including Central Java.",
    benefits: [
      "Bahan baku tepung konjac — premium dietary fiber",
      "Shirataki noodles & rice (low-calorie pasta substitute)",
      "Suplemen diet (weight management, satiety)",
      "Pengental & pembentuk gel di industri F&B (konnyaku)",
      "Bahan baku film biodegradable (riset emerging)",
    ],
    cultivation:
      "Porang tumbuh di bawah naungan (intensitas cahaya 50–60%), dataran rendah-menengah, tanah gembur. Periode tanam 2–3 tahun untuk panen optimal — umbi semakin besar setiap musim. Reproduksi melalui katak (bulbil) di pucuk daun atau biji. Pasca panen: umbi dirajang chip, dikeringkan ke moisture ≤14%, lalu dijual sebagai chip atau diolah lebih lanjut menjadi tepung. Untuk ekspor, kontrol kadar glukomanan (>45%) dan logam berat sangat penting.",
    varietyDetails: [
      {
        name: "Porang Segar (Umbi)",
        desc: "Umbi utuh hasil panen. Pasar lokal untuk processor lanjutan. Margin rendah, volume besar.",
      },
      {
        name: "Porang Chip Kering",
        desc: "Umbi dirajang & dikeringkan. Format ekspor paling umum untuk China & Vietnam yang mengolah lebih lanjut.",
      },
      {
        name: "Tepung Porang (Konjac Flour)",
        desc: "Hasil pengolahan lanjut chip — glukomanan terkonsentrasi >85%. Pasar premium ke Jepang, Korea, Eropa, US.",
      },
      {
        name: "Export Grade Sortasi",
        desc: "Chip yang sudah disortasi ketat (warna, ukuran, moisture, foreign matter) memenuhi spesifikasi buyer Jepang.",
      },
    ],
    marketOutlook:
      "Pasar konjac global didorong tren weight management & low-carb diet di US, Eropa, dan Asia. Jepang adalah konsumen tradisional terbesar (konnyaku, shirataki). China sebagai processor terbesar membeli chip dari Indonesia, mengolah jadi tepung, lalu re-export. Peluang nilai tambah Indonesia: pengolahan tepung lokal supaya tidak hanya menjual chip mentah. Risiko: harga porang sangat fluktuatif tergantung permintaan ekspor — sempat jatuh 2022–2023, mulai recovery seiring pemulihan demand.",
  },
  {
    slug: "jagung",
    name: "Jagung",
    en: "Corn / Maize",
    icon: "🌽",
    scientificName: "Zea mays",
    bg: "#fffbeb",
    border: "#fde68a",
    tc: "#78350f",
    tag: "#b45309",
    desc: "Jagung pipil kering dan basah untuk kebutuhan pakan ternak, industri pangan, dan ekspor. Kami bermitra langsung dengan petani jagung di Jawa Tengah untuk memastikan pasokan stabil dan berkualitas.",
    descEn:
      "Dried and fresh corn kernels for animal feed, food industry, and export. We partner directly with corn farmers in Central Java to ensure stable, quality supply.",
    specs: [
      { label: "Moisture Content", value: "≤14%", note: "Jagung kering pipil" },
      { label: "Aflatoxin", value: "<20 ppb", note: "Food grade standard" },
      { label: "Purity", value: ">98%", note: "Sorted & cleaned" },
      { label: "Capacity", value: "200+ ton/bln", note: "Sourcing capacity" },
    ],
    variants: [
      "Jagung Pipil Kering",
      "Jagung Basah",
      "Jagung Pakan Ternak",
      "Jagung Industri Pangan",
    ],
    markets: [
      "Pabrik pakan ternak",
      "Industri tepung maizena",
      "Ekspor Asia Tenggara",
    ],
    exportReady: true,
    about:
      "Jagung (Zea mays) adalah komoditas pangan-pakan strategis Indonesia, kedua setelah padi dalam alokasi lahan. Sekitar 50–60% jagung domestik diserap industri pakan ternak (ayam, sapi, ikan), sisanya untuk konsumsi pangan langsung, tepung maizena, dan emerging market biofuel. Indonesia berpotensi swasembada jagung dengan ekspansi lahan dan adopsi varietas hibrida tinggi rendemen. Kami fokus pada sourcing jagung pipil kering kualitas pakan dan food grade dari petani mitra Jawa Tengah.",
    aboutEn:
      "Corn (Zea mays) is one of Indonesia's strategic food-feed commodities, second only to rice in land allocation. About 50–60% of domestic corn is absorbed by the animal feed industry (poultry, cattle, fish), with the rest going to direct food consumption, maize flour, and emerging biofuel markets. Indonesia has self-sufficiency potential through land expansion and high-yield hybrid adoption. We focus on sourcing dried kernel corn — both feed and food grade — from partner farmers in Central Java.",
    benefits: [
      "Bahan utama pakan ternak (50–60% kebutuhan industri)",
      "Tepung maizena & corn starch untuk industri pangan",
      "Bahan baku gula jagung (high-fructose corn syrup)",
      "Sweet corn & corn oil",
      "Bioenergi (bioetanol) — pasar emerging",
    ],
    cultivation:
      "Jagung adalah tanaman C4 yang efisien fotosintesis di iklim panas. Tumbuh optimal di dataran rendah-menengah dengan curah hujan 500–800 mm/musim. Periode tanam 90–120 hari untuk varietas hibrida. Panen di kadar air 18–25% lalu dikeringkan ke ≤14% untuk penyimpanan. Kontrol aflatoksin (<20 ppb untuk food grade) krusial — biji yang lembab atau menjamur tidak boleh masuk supply chain pangan/pakan ekspor.",
    varietyDetails: [
      {
        name: "Jagung Pipil Kering (≤14%)",
        desc: "Format standar industri pakan & pangan. Storage-stable, mudah ditransportasi, dan jadi acuan harga.",
      },
      {
        name: "Jagung Basah (Tongkol Segar)",
        desc: "Hasil panen langsung. Untuk pabrik pakan dengan pengeringan in-house atau pasar pangan lokal segar.",
      },
      {
        name: "Jagung Pakan",
        desc: "Standar pakan ternak — toleransi defect lebih longgar dari food grade, harga lebih ekonomis.",
      },
      {
        name: "Jagung Food Grade",
        desc: "Kontrol aflatoksin & FFM ketat untuk industri pangan dan ekspor. Premium price.",
      },
    ],
    marketOutlook:
      "Permintaan pakan ternak Indonesia tumbuh 5–7% per tahun mengikuti konsumsi protein hewani. Pemerintah mendorong swasembada jagung dengan target produksi 16+ juta ton. Peluang ekspor terbuka ke negara ASEAN tetangga ketika produksi domestik surplus. Risiko utama: volatilitas harga global (CBOT) dan persaingan dengan jagung impor murah dari Argentina/Brazil pada tahun produksi rendah.",
  },
  {
    slug: "kluwek",
    name: "Kluwek (Kepayang)",
    en: "Kluwek (Black Nut)",
    icon: "🌰",
    scientificName: "Pangium edule",
    bg: "#f4f4f5",
    border: "#d4d4d8",
    tc: "#18181b",
    tag: "#3f3f46",
    desc: "Biji fermentasi dari pohon Kepayang — 'black diamond' kuliner Nusantara. Kunci rasa hitam pekat & gurih khas Rawon, Brongkos, Sup Konro, dan Pindang Kudus. Dijual sebagai biji utuh pilihan, pasta siap pakai, atau bubuk standar industri.",
    descEn:
      "Fermented seeds of the Kepayang tree — the 'black diamond' of Indonesian cuisine. The signature ingredient behind the deep-black, savory broths of Rawon, Brongkos, Konro Soup, and Pindang Kudus. Available as whole selected seeds, ready-to-use paste, or standardized powder.",
    specs: [
      { label: "Moisture (Kering)", value: "≤14%", note: "Biji kering pasca-fermentasi" },
      { label: "Cyanide (HCN)", value: "Aman", note: "Tested safe pasca-fermentasi" },
      { label: "Fermentasi", value: "40–60 hari", note: "Pemeraman dengan abu" },
      { label: "MOQ", value: "50 kg", note: "Format biji utuh" },
    ],
    variants: [
      "Kluwek Utuh Pilihan",
      "Kluwek Pasta Siap Pakai",
      "Kluwek Bubuk Standar",
      "Bumbu Rawon Komposisi",
    ],
    markets: [
      "Rumah makan & restoran tradisional",
      "Diaspora Indonesia (Malaysia, Singapura, Belanda, Australia)",
      "Industri bumbu siap saji & rawon kemasan",
    ],
    exportReady: false,
    about:
      "Kluwek (Pangium edule), atau Kepayang, adalah salah satu rempah paling unik dan misterius di Indonesia — sering dijuluki 'black diamond' kuliner Nusantara. Pohon Kepayang adalah tumbuhan asli Asia Tenggara yang tumbuh subur di hutan hujan tropis, tingginya bisa mencapai 40 meter. Buahnya lonjong menyerupai bola rugbi, di dalamnya terdapat belasan biji berlapis daging berlendir — biji inilah yang nantinya diproses menjadi kluwek yang dijual di pasar.\n\nYang membuatnya unik dan berbahaya: seluruh bagian pohon, terutama biji mentahnya, mengandung asam sianida (HCN) dalam kadar tinggi. Istilah populer 'mabuk kepayang' — yang sekarang dipakai untuk menggambarkan orang yang sedang jatuh cinta hingga kehilangan akal sehat — sebenarnya berasal dari efek racun tanaman ini. Karena itu kluwek harus melalui proses fermentasi panjang sebelum aman dikonsumsi.",
    aboutEn:
      "Kluwek (Pangium edule), known as Kepayang, is one of Indonesia's most unique and mysterious spices — often called the 'black diamond' of Nusantara cuisine. The Kepayang tree is native to Southeast Asian tropical rainforests, growing up to 40 meters tall. Its rugby-ball-shaped fruit contains over a dozen seeds wrapped in pulpy flesh — these seeds become the kluwek sold in markets.\n\nWhat makes it unique — and dangerous — is that all parts of the tree, especially the raw seeds, contain high levels of hydrocyanic acid (HCN). The Indonesian phrase 'mabuk kepayang' (now used for someone hopelessly in love) originally described the toxic effect of this plant. That is why kluwek must undergo a long fermentation process before being safe to consume.",
    benefits: [
      "Bumbu utama Rawon — sup daging khas Jawa Timur (tanpa kluwek, hanya sup biasa)",
      "Kuah Brongkos Yogyakarta — perpaduan dengan santan & kacang-kacangan",
      "Sup Konro Makassar — memperdalam kekayaan rasa kuah iga",
      "Pindang Kudus — pewarna gelap elegan untuk kuah",
      "Pewarna alami hitam pekat untuk kuah & nasi tradisional",
      "Memberikan dimensi rasa kompleks: gurih (umami), earthy, jejak kacang lembut",
    ],
    cultivation:
      "Pengolahan kluwek adalah salah satu yang paling rumit di dunia rempah karena harus menetralkan asam sianida. Tahapan utama: (1) Perebusan — biji yang baru dipanen direbus dalam waktu lama; (2) Fermentasi/Pemeraman — biji dibungkus abu lalu dipendam di dalam tanah selama 40–60 hari; (3) Hasil akhir — selama pemendaman, asam sianida luruh menjadi senyawa yang aman, isi biji berubah dari putih menjadi hitam pekat dengan aroma kacang khas. Proses ini bukan sekadar tradisi melainkan prosedur keamanan pangan yang vital — bukti kecerdasan leluhur Nusantara dalam mengolah bahan alam beracun menjadi rempah bernilai tinggi. Tips memilih: kocok biji dan pastikan terdengar 'klik-klak' (isi sudah terlepas dari dinding cangkang). Cicipi sedikit ujung isi sebelum diolah — jika sangat pahit (acrid), buang karena akan merusak masakan. Sebelum dihaluskan, rendam dalam air panas 10–15 menit agar tekstur jadi pasta lembut.",
    varietyDetails: [
      {
        name: "Kluwek Utuh Pilihan",
        desc: "Biji kering utuh yang sudah disortir — uji kocok klik-klak (isi terlepas dari cangkang) dan pemeriksaan visual (isi hitam pekat, tidak berjamur). Format pasar tradisional & rumah makan.",
      },
      {
        name: "Kluwek Pasta Siap Pakai",
        desc: "Daging kluwek yang sudah direndam air panas dan dihaluskan menjadi pasta. Praktis untuk industri rumah makan dan ready-to-eat — tidak perlu memecah cangkang manual.",
      },
      {
        name: "Kluwek Bubuk Standar",
        desc: "Versi bubuk kering, lebih shelf-stable untuk industri bumbu jadi dan ekspor diaspora. Memudahkan dosing dan distribusi skala besar.",
      },
      {
        name: "Bumbu Rawon Komposisi",
        desc: "Pre-mix kluwek dengan rempah pendamping (kemiri, ketumbar, kunyit, lengkuas) — siap pakai untuk industri rawon kemasan dan Asian specialty store.",
      },
    ],
    marketOutlook:
      "Kluwek adalah komoditas niche premium dengan permintaan stabil dari rumah makan tradisional, restoran kuliner Nusantara di luar negeri (diaspora Malaysia, Singapura, Belanda, Australia), dan industri bumbu siap saji (rawon kemasan, paste instan). Harga relatif tinggi karena proses fermentasi panjang 40–60 hari dan supply terbatas pada panen pohon dewasa Kepayang yang langka. Peluang nilai tambah terbesar ada di produk olahan — pasta kluwek instan, bumbu rawon kemasan, dan bubuk standardized untuk industri F&B — terutama untuk segmen ekspor ke pasar diaspora dan Asian specialty store global.",
  },
  {
    slug: "padi",
    name: "Padi & Beras",
    en: "Paddy & Rice",
    icon: "🌾",
    scientificName: "Oryza sativa",
    bg: "#f0fdf4",
    border: "#bbf7d0",
    tc: "#15803d",
    tag: "#16a34a",
    desc: "Gabah dan beras adalah komoditas kami. Kami menerima gabah basah dan kering dari petani mitra, mengolahnya menjadi beras premium, medium, dan pecah sesuai standar Bulog maupun pasar bebas.",
    descEn:
      "Paddy and rice processing. We procure wet and dry paddy from partner farmers and process it into premium, medium, and broken rice grades meeting Bulog and open market standards.",
    specs: [
      { label: "Moisture Content", value: "≤14%", note: "Gabah kering giling" },
      { label: "Whiteness", value: "35–45", note: "Skala whiteness meter" },
      { label: "Broken Rice", value: "<5%", note: "Premium grade" },
      { label: "Capacity", value: "500+ ton/bln", note: "Processing capacity" },
    ],
    variants: [
      "Gabah Basah (GKP)",
      "Gabah Kering (GKG)",
      "Beras Premium",
      "Beras Medium",
      "Beras Pecah (Menir)",
      "Katul & Dedak",
    ],
    markets: [
      "Pasar lokal Jawa Tengah",
      "Bulog & distributor nasional",
      "Industri pakan ternak (katul)",
    ],
    exportReady: false,
    about:
      "Padi (Oryza sativa) adalah komoditas pangan paling strategis di Indonesia — beras adalah makanan pokok 270+ juta penduduk. Sektor padi menyerap lebih dari 13 juta rumah tangga petani dan menjadi prioritas utama Kementerian Pertanian. Layanan kami mencakup penggilingan (jasa maklon) dan jual-beli gabah/beras dengan standar Bulog. Berbeda dengan rempah dan porang, fokus padi-beras kami adalah pasar domestik — Indonesia masih net-importer beras pada tahun-tahun tertentu.",
    aboutEn:
      "Rice paddy (Oryza sativa) is Indonesia's most strategic food commodity — rice feeds 270+ million people as a staple. The rice sector employs over 13 million farmer households and tops the Ministry of Agriculture's priorities. Our services cover contract milling (jasa maklon) and paddy/rice trading meeting Bulog standards. Unlike spices and porang, our rice focus is domestic — Indonesia is still a net rice importer in some years.",
    benefits: [
      "Beras premium & medium untuk konsumsi rumah tangga",
      "Beras pecah (menir) untuk industri makanan & pakan",
      "Katul (rice bran) untuk pakan ternak & ekstraksi minyak rice bran",
      "Sekam untuk bahan bakar boiler & substrate jamur",
      "Jasa maklon untuk petani & pedagang",
    ],
    cultivation:
      "Padi tumbuh di sawah irigasi/tadah hujan dengan periode 100–135 hari per musim, biasanya 2–3 musim/tahun. Pasca panen: gabah dijemur dari kadar air 25% (GKP) ke 14% (GKG), digiling untuk memisahkan beras, katul, sekam, menir. Standar Bulog mengatur whiteness, kadar broken, kadar air, dan menir. Rendemen rata-rata 60–65% (gabah → beras). Mesin modern bisa mencapai rendemen 65–70%.",
    varietyDetails: [
      {
        name: "Gabah Basah (GKP)",
        desc: "Hasil panen langsung, kadar air ~25%. Harga lebih rendah, perlu dikeringkan sebelum digiling/disimpan.",
      },
      {
        name: "Gabah Kering (GKG)",
        desc: "Sudah dijemur ke ≤14%. Storage-stable, harga acuan untuk industri penggilingan.",
      },
      {
        name: "Beras Premium",
        desc: "Whiteness 40+, broken <5%, bersih dari menir/dedak. Harga retail tertinggi.",
      },
      {
        name: "Beras Medium",
        desc: "Standar Bulog untuk operasi pasar. Volume besar, margin tipis.",
      },
      {
        name: "Beras Pecah (Menir)",
        desc: "Pecahan beras hasil giling. Untuk industri tepung beras, kerupuk, pakan.",
      },
      {
        name: "Katul & Dedak",
        desc: "By-product penggilingan. Pakan ternak, atau bahan baku minyak rice bran (premium di Jepang).",
      },
    ],
    marketOutlook:
      "Pasar padi-beras Indonesia stabil tinggi karena permintaan pangan terus tumbuh. Pemerintah menargetkan produksi 34+ juta ton beras 2026 lewat program Brigade Pangan dan ekspansi lahan. Penggilingan modern dengan rendemen tinggi (65%+) dan diferensiasi premium (organic, geographical indication seperti Beras Solok atau Pandan Wangi) jadi peluang nilai tambah. Ekspor beras Indonesia masih sporadis — fokus utama adalah ketahanan pangan domestik.",
  },
];

export function getCommoditiesBySlug(slug: string): Commodity | undefined {
  return commodities.find((c) => c.slug === slug);
}
