export interface Spec {
  label: string;
  value: string;
  note: string;
}

export interface VarietyDetail {
  name: string;
  desc: string;
  nameEn?: string;
  descEn?: string;
}

export interface OriginInfo {
  regions: string;
  regionsEn: string;
  altitude: string;
  harvestSeason: string;
  harvestSeasonEn: string;
}

export interface ExportSpec {
  fobPorts: string[];
  containerCapacity: string;
  leadTime: string;
  paymentTerms: string;
  documentation: string[];
  certifications: string[];
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
  marketsEn: string[];
  exportReady: boolean;
  // Detail page extras
  about: string;
  aboutEn: string;
  benefits: string[];
  benefitsEn: string[];
  cultivation: string;
  cultivationEn: string;
  varietyDetails: VarietyDetail[];
  marketOutlook: string;
  marketOutlookEn: string;
  // Export-focused sections (NEW)
  origin: OriginInfo;
  exportSpec: ExportSpec;
}

const STD_FOB_PORTS = [
  "Tanjung Emas (Semarang)",
  "Tanjung Priok (Jakarta)",
  "Tanjung Perak (Surabaya)",
];

const STD_DOCUMENTATION = [
  "Phytosanitary Certificate (Karantina Pertanian)",
  "Certificate of Analysis (COA) — laboratory tested",
  "Certificate of Origin (COO) — Form E / Form A",
  "Fumigation Certificate (when required)",
  "Bill of Lading (B/L)",
  "Packing List & Commercial Invoice",
];

const STD_CERTIFICATIONS = [
  "HACCP Compliant",
  "ISO 22000 (Food Safety Management)",
  "Halal MUI Certified",
  "GMP (Good Manufacturing Practice)",
  "Organic Certification (available on request)",
];

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
    marketsEn: [
      "Pharmaceutical & herbal industry",
      "Export to Malaysia, Middle East",
      "F&B & health beverage industry",
      "European & Asian buyers",
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
    benefitsEn: [
      "Raw material for herbal medicine, jamu, and health supplements",
      "Primary flavor in F&B (health drinks, baked goods, traditional cuisine)",
      "Gingerol extract for cosmetics and pharmaceutical applications",
      "Ginger essential oil for aromatherapy",
      "Culinary spice in East Asian, Middle Eastern, and European markets",
    ],
    cultivation:
      "Jahe tumbuh optimal di dataran rendah-menengah (200–600 mdpl), curah hujan 2.500–4.000 mm/tahun, dan tanah gembur kaya bahan organik. Periode tanam 8–12 bulan tergantung varietas. Penanganan pascapanen kritis: pencucian, perajangan (untuk slice), pengeringan ke moisture ≤12%, dan pengemasan vacuum untuk standar ekspor. Kami bermitra dengan petani jahe di Jawa Tengah untuk memastikan kualitas dari hulu.",
    cultivationEn:
      "Ginger thrives in low-to-mid elevation (200–600 m above sea level), with annual rainfall of 2,500–4,000 mm and loose, organic-rich soil. Growing cycle is 8–12 months depending on the variety. Critical post-harvest steps: washing, slicing, drying to ≤12% moisture, and vacuum packaging to meet export standards. We partner directly with ginger farmers in Central Java to ensure quality from origin.",
    varietyDetails: [
      {
        name: "Jahe Merah",
        nameEn: "Red Ginger",
        desc: "Rimpang lebih kecil, warna merah-cokelat, kandungan minyak atsiri & gingerol tertinggi. Premium untuk jamu, suplemen, dan ekspor herbal.",
        descEn:
          "Smaller rhizome, red-brown color, highest essential oil and gingerol content. Premium grade for jamu, supplements, and herbal exports.",
      },
      {
        name: "Jahe Gajah (Jahe Badak)",
        nameEn: "Elephant Ginger",
        desc: "Rimpang besar, warna kuning pucat, rasa kurang pedas. Cocok untuk F&B, manisan, dan kebutuhan kuliner skala industri.",
        descEn:
          "Large rhizome, pale yellow, milder pungency. Suitable for F&B, candied ginger, and industrial culinary applications.",
      },
      {
        name: "Jahe Emprit",
        nameEn: "Emprit Ginger",
        desc: "Ukuran sedang, warna kuning, rasa pedas khas. Banyak dipakai untuk minuman tradisional (wedang) dan bumbu masak.",
        descEn:
          "Medium size, yellow, distinctive pungency. Widely used for traditional beverages (wedang) and home cooking.",
      },
    ],
    marketOutlook:
      "Permintaan jahe Indonesia di pasar global terus tumbuh, terutama dari Malaysia, Bangladesh, India, Timur Tengah (UAE, Saudi), dan Eropa. Tren konsumsi suplemen herbal pasca-pandemi mendorong harga jahe merah kering ke level premium. Indonesia adalah salah satu produsen jahe terbesar dunia — peluang nilai tambah ada di pengolahan (slice, powder, oleoresin) bukan sekadar rimpang segar.",
    marketOutlookEn:
      "Global demand for Indonesian ginger continues to grow, especially from Malaysia, Bangladesh, India, the Middle East (UAE, Saudi Arabia), and Europe. Post-pandemic herbal supplement consumption is driving dried red ginger to premium price levels. Indonesia is among the world's top ginger producers — value-added opportunities lie in processed forms (slice, powder, oleoresin) rather than fresh rhizomes alone.",
    origin: {
      regions: "Jawa Tengah, Lampung, Jawa Timur, Bali",
      regionsEn: "Central Java, Lampung, East Java, Bali",
      altitude: "200–600 m above sea level (mdpl)",
      harvestSeason:
        "Sepanjang tahun, puncak panen April–September (8–12 bulan setelah tanam)",
      harvestSeasonEn:
        "Year-round availability, peak harvest April–September (8–12 months after planting)",
    },
    exportSpec: {
      fobPorts: STD_FOB_PORTS,
      containerCapacity:
        "20ft container: ~17 tons (dried slice) / ~14 tons (powder, vacuum-packed) | 40ft HC: ~25 tons",
      leadTime: "14–21 days from PO confirmation to FOB shipment",
      paymentTerms:
        "T/T 30% advance + 70% before shipment | L/C at sight (negotiable for repeat buyers)",
      documentation: STD_DOCUMENTATION,
      certifications: STD_CERTIFICATIONS,
    },
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
    marketsEn: [
      "Jamu & herbal industry",
      "Health supplement manufacturers",
      "Natural food coloring industry",
      "Export to Europe, Japan, Korea",
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
    benefitsEn: [
      "Primary ingredient in Indonesian traditional jamu (kunyit asem, temulawak tonics)",
      "Hepatoprotective liver-health supplements (especially curcuma xanthorrhiza)",
      "Natural food coloring for F&B (curry, mustard, cosmetics)",
      "Raw material for standardized curcumin extracts for pharma & nutraceuticals",
      "Specialty market: golden milk lattes in Europe & US wellness segment",
    ],
    cultivation:
      "Kunyit tumbuh baik di 0–1.300 mdpl, suhu 20–30°C, dengan periode tanam 9–10 bulan. Temulawak butuh dataran rendah-menengah, curah hujan 1.000–4.000 mm/tahun. Pasca panen: dicuci, dirajang tipis, dijemur/oven hingga moisture ≤12%, lalu di-grading berdasarkan ukuran dan warna. Untuk pasar farmasi, kontrol mikrobiologi dan kandungan kurkumin diuji laboratorium.",
    cultivationEn:
      "Turmeric grows well from 0–1,300 m above sea level at 20–30°C, with a 9–10 month cycle. Curcuma xanthorrhiza prefers low-to-mid elevations with 1,000–4,000 mm annual rainfall. Post-harvest: washing, thin slicing, sun-drying or oven-drying to ≤12% moisture, then grading by size and color. For pharmaceutical-grade buyers, microbiological controls and laboratory-tested curcumin content are mandatory.",
    varietyDetails: [
      {
        name: "Kunyit (Curcuma longa)",
        nameEn: "Turmeric (Curcuma longa)",
        desc: "Rimpang oranye terang, kandungan kurkumin 2–5%. Dikenal global sebagai turmeric — bumbu masak, pewarna, dan suplemen.",
        descEn:
          "Bright orange rhizome, 2–5% curcumin content. Globally known as turmeric — culinary spice, natural colorant, and supplement ingredient.",
      },
      {
        name: "Temulawak (Curcuma xanthorrhiza)",
        nameEn: "Curcuma / Javanese Turmeric",
        desc: "Endemik Jawa, lebih besar dari kunyit, warna oranye kekuningan. Khasiat dominan: hepatoprotektif. Pasar utama: industri jamu nasional.",
        descEn:
          "Endemic to Java, larger than common turmeric, with yellow-orange color. Dominant health benefit: hepatoprotection. Primary market: Indonesian jamu industry.",
      },
      {
        name: "Simplisia Kering",
        nameEn: "Dried Simplicia (Pharma Grade)",
        desc: "Bentuk rajangan/slice yang sudah dikeringkan dan di-grading untuk industri farmasi/herbal. Standar Materia Medika Indonesia (MMI).",
        descEn:
          "Sliced, dried, and graded for pharmaceutical/herbal industry use. Compliant with Materia Medika Indonesia (MMI) standards.",
      },
    ],
    marketOutlook:
      "Pasar global kurkumin tumbuh cepat didorong tren wellness dan supplement industry di US, Eropa, Jepang, dan Korea. Indonesia bersaing dengan India sebagai produsen utama, namun keunikan temulawak memberi diferensiasi kuat. Buyer biasanya mencari moisture ≤10%, kurkumin >3%, dan dokumentasi pestisida (clean/organic preferred). Peluang nilai tambah: ekstrak kurkumin terstandar (95%+) dan produk fortified.",
    marketOutlookEn:
      "Global curcumin market is growing fast, driven by wellness and supplement industries in US, Europe, Japan, and Korea. Indonesia competes with India as a top producer, but the uniqueness of temulawak provides strong differentiation. Buyers typically seek ≤10% moisture, >3% curcumin, and pesticide-free documentation (clean/organic preferred). Value-added opportunities: standardized curcumin extracts (95%+) and fortified products.",
    origin: {
      regions: "Jawa Tengah, Yogyakarta, Jawa Timur, Sumatera",
      regionsEn: "Central Java, Yogyakarta, East Java, Sumatra",
      altitude: "0–1,300 m above sea level (mdpl)",
      harvestSeason: "Puncak panen Mei–September, tersedia sepanjang tahun untuk format kering",
      harvestSeasonEn: "Peak harvest May–September; dried formats available year-round",
    },
    exportSpec: {
      fobPorts: STD_FOB_PORTS,
      containerCapacity:
        "20ft container: ~16 tons (dried slice) / ~13 tons (powder) | 40ft HC: ~24 tons",
      leadTime: "14–21 days from PO confirmation to FOB shipment",
      paymentTerms:
        "T/T 30% advance + 70% before shipment | L/C at sight (negotiable for repeat buyers)",
      documentation: STD_DOCUMENTATION,
      certifications: STD_CERTIFICATIONS,
    },
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
    marketsEn: [
      "Spice & seasoning industry",
      "Global restaurant & F&B chains",
      "Export to Europe and North America",
      "Asian & Middle Eastern markets",
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
    benefitsEn: [
      "Universal global kitchen seasoning (black pepper in nearly every cuisine)",
      "Critical input for European sausage, ham, and processed meat industry",
      "Base ingredient for Asian sambal and chili sauces",
      "Piperine extract for pharma (bioavailability enhancer)",
      "Specialty: Muntok White Pepper as premium GI-protected ingredient",
    ],
    cultivation:
      "Lada tumbuh sebagai tanaman merambat di dataran rendah hingga 600 mdpl, butuh tiang panjat (junjung) hidup atau mati. Panen pertama 3 tahun setelah tanam, masa produktif 15–20 tahun. Lada hitam dipanen saat masih muda lalu dijemur dengan kulit. Lada putih dipanen matang, direndam, dikuliti, baru dikeringkan. Cabai dipanen rutin setiap 4–7 hari pada masa produktif.",
    cultivationEn:
      "Pepper grows as a climbing vine in lowlands up to 600 m, requiring living or dead support poles (junjung). First harvest comes 3 years after planting, with a 15–20 year productive lifespan. Black pepper is harvested young and sun-dried with the husk; white pepper is harvested ripe, soaked, de-husked, then dried. Chili is harvested every 4–7 days throughout the productive cycle.",
    varietyDetails: [
      {
        name: "Lada Hitam (Black Pepper)",
        nameEn: "Black Pepper",
        desc: "Buah lada muda dijemur dengan kulit. Aroma kuat, piperin tinggi (>5%). Pasar global terbesar — bumbu universal.",
        descEn:
          "Young pepper berries sun-dried with husk on. Strong aroma, high piperine (>5%). Largest global market — universal seasoning.",
      },
      {
        name: "Lada Putih (White Pepper)",
        nameEn: "White Pepper",
        desc: "Buah matang, kulit dikupas. Rasa lebih bersih, harga premium. Lada Putih Muntok punya geographical indication.",
        descEn:
          "Ripe berries with husk removed. Cleaner flavor, premium price. Muntok White Pepper holds protected Geographical Indication status.",
      },
      {
        name: "Cabai Merah Kering",
        nameEn: "Dried Red Chili",
        desc: "Cabai besar dikeringkan untuk bumbu sambal, oleoresin, paprika powder. Skala besar untuk industri saus.",
        descEn:
          "Large dried chilies for sambal, oleoresin, and paprika powder. Industrial-scale for sauce manufacturing.",
      },
      {
        name: "Cabai Rawit Kering",
        nameEn: "Dried Bird's Eye Chili",
        desc: "Pedas tinggi, ekspor ke pasar Asia. Bahan baku produk fermented chili dan sambal kemasan.",
        descEn:
          "High-heat chili, exported to Asian markets. Raw material for fermented chili and packaged sambal products.",
      },
    ],
    marketOutlook:
      "Harga lada dunia berfluktuasi mengikuti siklus produksi Vietnam (produsen #1). Diferensiasi Indonesia ada di Muntok White Pepper dan Lampung Black Pepper — geographical indication yang dilindungi. Buyer Eropa (Jerman, Belanda) dan US adalah importir tradisional. Pasar cabai kering tumbuh seiring popularitas Asian cuisine global. Peluang: clean-label, organic certified, dan ground/cracked formats untuk retail.",
    marketOutlookEn:
      "Global pepper prices fluctuate following Vietnam's production cycle (world's #1 producer). Indonesia differentiates with Muntok White Pepper and Lampung Black Pepper — both protected Geographical Indications. European buyers (Germany, Netherlands) and the US are traditional importers. Dried chili demand grows alongside global Asian cuisine popularity. Opportunities: clean-label, organic-certified, and ground/cracked retail formats.",
    origin: {
      regions: "Lampung (lada hitam), Bangka Belitung — Muntok (lada putih), Sulawesi Selatan (cabai)",
      regionsEn: "Lampung (black pepper), Bangka Belitung — Muntok (white pepper), South Sulawesi (chili)",
      altitude: "0–600 m above sea level (mdpl)",
      harvestSeason: "Puncak panen lada Juli–September; cabai sepanjang tahun (puncak Mei–Agustus)",
      harvestSeasonEn: "Pepper peak harvest July–September; chili year-round (peak May–August)",
    },
    exportSpec: {
      fobPorts: STD_FOB_PORTS,
      containerCapacity:
        "20ft container: ~18 tons (whole pepper) / ~14 tons (dried chili) | 40ft HC: ~26 tons",
      leadTime: "10–18 days from PO confirmation to FOB shipment",
      paymentTerms:
        "T/T 30% advance + 70% before shipment | L/C at sight (negotiable for repeat buyers)",
      documentation: STD_DOCUMENTATION,
      certifications: [
        ...STD_CERTIFICATIONS,
        "Geographical Indication (Muntok White Pepper, Lampung Black Pepper) — available",
      ],
    },
  },
  {
    slug: "kapulaga",
    name: "Kapulaga",
    en: "Java White Cardamom",
    icon: "🌿",
    scientificName: "Amomum compactum",
    bg: "#f7fee7",
    border: "#d9f99d",
    tc: "#3f6212",
    tag: "#65a30d",
    desc: "Kapulaga Jawa (Amomum compactum) — white cardamom khas Indonesia. Indonesia adalah produsen utama dunia untuk varietas ini, beda dari green cardamom India. Banyak diminati industri jamu, F&B, parfum, dan pasar Timur Tengah.",
    descEn:
      "Java White Cardamom (Amomum compactum) — Indonesia's signature cardamom variety. Indonesia is the world's primary producer of this distinct white cardamom (different from Indian green cardamom). Highly sought after for jamu, F&B, perfumery, and Middle Eastern markets.",
    specs: [
      { label: "Moisture", value: "≤12%", note: "Dry whole pods" },
      { label: "Pod Quality", value: "Premium", note: "Sorted, intact pods" },
      { label: "Essential Oil", value: ">3%", note: "Aromatic compound" },
      { label: "MOQ", value: "100 kg", note: "Minimum order" },
    ],
    variants: [
      "Kapulaga Pod Utuh Kering",
      "Biji Kapulaga (Seeds Only)",
      "Bubuk Kapulaga (Powder)",
      "Minyak Atsiri Kapulaga",
    ],
    markets: [
      "Industri jamu & herbal Indonesia",
      "Timur Tengah (UAE, Saudi, Yaman)",
      "F&B & spice blend industry",
      "Industri parfum & flavoring",
    ],
    marketsEn: [
      "Indonesian jamu & herbal industry",
      "Middle East (UAE, Saudi Arabia, Yemen)",
      "F&B & spice blend industry",
      "Perfumery & flavoring industry",
    ],
    exportReady: true,
    about:
      "Kapulaga (Amomum compactum), atau Java White Cardamom, adalah salah satu rempah aromatik paling khas Indonesia. Berbeda dengan green cardamom India (Elettaria cardamomum) yang lebih umum di pasar dunia, kapulaga Jawa punya pod berbentuk bulat-oval dengan warna putih krem dan aroma manis-pedas yang lebih lembut. Indonesia adalah produsen utama dunia untuk varietas ini, dengan sentra produksi di Jawa Barat (Sukabumi, Garut, Cianjur), Jawa Tengah, dan Lampung. Tanaman ini tumbuh di bawah naungan pohon kebun campuran — sebuah model agroforestri yang ramah lingkungan dan mendukung biodiversitas.",
    aboutEn:
      "Kapulaga (Amomum compactum), or Java White Cardamom, is one of Indonesia's most distinctive aromatic spices. Unlike the more common Indian green cardamom (Elettaria cardamomum), Java cardamom features round-oval pods with creamy-white color and a softer, sweet-spicy aroma. Indonesia is the world's primary producer of this variety, with production hubs in West Java (Sukabumi, Garut, Cianjur), Central Java, and Lampung. The plant grows under the canopy of mixed gardens — an agroforestry model that is environmentally friendly and supports biodiversity.",
    benefits: [
      "Bahan utama jamu tradisional & minuman herbal Nusantara",
      "Bumbu masakan kari, gulai, dan kuah rendang",
      "Bahan baku industri parfum & aromaterapi (essential oil)",
      "Spice blend industri Timur Tengah (kahwa, biryani, tea blend)",
      "Bahan suplemen herbal — efek karminatif dan digestif",
    ],
    benefitsEn: [
      "Primary ingredient in traditional jamu and Nusantara herbal beverages",
      "Culinary spice for curry, gulai, and rendang broths",
      "Raw material for perfumery and aromatherapy (essential oil)",
      "Middle Eastern spice blends (kahwa coffee, biryani, tea blends)",
      "Herbal supplement ingredient — carminative and digestive effects",
    ],
    cultivation:
      "Kapulaga adalah tanaman rumpun yang tumbuh subur di bawah naungan (50–70% shade), dataran rendah-menengah (200–700 mdpl), dengan curah hujan 2.500–4.000 mm/tahun. Pohon mulai berbuah 2–3 tahun setelah tanam dan produktif hingga 10–15 tahun. Pod dipanen saat sudah mencapai ukuran maksimal namun belum membuka — kalau terlalu matang, pod akan pecah dan kualitas turun. Pasca panen: pod dijemur ke moisture ≤12% (4–7 hari kering matahari), disortir berdasarkan ukuran dan integritas pod, lalu dikemas vacuum atau dalam karung PP food-grade.",
    cultivationEn:
      "Cardamom is a clumping plant that thrives under shade (50–70% canopy cover), in low-to-mid elevations (200–700 m above sea level), with 2,500–4,000 mm annual rainfall. Plants begin fruiting 2–3 years after planting and remain productive for 10–15 years. Pods are harvested when fully mature but not yet split — over-ripe pods crack open and lose quality. Post-harvest: sun-dried to ≤12% moisture (4–7 days), sorted by size and pod integrity, then vacuum-packed or filled in food-grade PP bags.",
    varietyDetails: [
      {
        name: "Kapulaga Pod Utuh Kering",
        nameEn: "Whole Dried Pods",
        desc: "Pod utuh putih krem yang sudah dijemur ke moisture ≤12%. Format paling premium — preservasi aroma maksimal. Pasar utama: industri jamu, ekspor Timur Tengah.",
        descEn:
          "Whole, cream-white pods sun-dried to ≤12% moisture. The premium format — maximum aroma retention. Primary market: jamu industry, Middle East export.",
      },
      {
        name: "Biji Kapulaga (Seeds Only)",
        nameEn: "Cardamom Seeds Only",
        desc: "Biji-bijian dalam pod yang sudah dipisahkan dari kulit. Lebih ringkas untuk penyimpanan, cocok untuk industri yang butuh dosing presisi.",
        descEn:
          "Seeds extracted from pods, husk removed. More compact for storage, ideal for industries requiring precise dosing.",
      },
      {
        name: "Bubuk Kapulaga (Powder)",
        nameEn: "Cardamom Powder",
        desc: "Hasil giling biji kapulaga. Praktis untuk industri F&B dan spice blend, namun shelf life lebih pendek dibanding pod utuh.",
        descEn:
          "Ground cardamom seeds. Practical for F&B and spice blend industries, though shelf life is shorter than whole pods.",
      },
      {
        name: "Minyak Atsiri Kapulaga",
        nameEn: "Cardamom Essential Oil",
        desc: "Hasil distilasi pod/biji. Konsentrat aroma untuk industri parfum, aromaterapi, dan flavor industri F&B premium.",
        descEn:
          "Distilled from pods/seeds. Concentrated aromatic for perfumery, aromatherapy, and premium F&B flavoring industries.",
      },
    ],
    marketOutlook:
      "Pasar kapulaga global tumbuh stabil didorong meningkatnya konsumsi spesialti F&B (kahwa coffee, chai latte, kari premium) di Timur Tengah, Eropa, dan Asia. Indonesia punya keunggulan komparatif sebagai produsen utama Java white cardamom — varietas yang tidak dimiliki produsen lain dalam skala komersial. Peluang nilai tambah: ekstrak essential oil terstandar, single-origin branding (Java cardamom), dan organic certification. Risiko: harga sangat fluktuatif tergantung volume panen tahunan dan permintaan musiman Timur Tengah.",
    marketOutlookEn:
      "Global cardamom market grows steadily, driven by rising specialty F&B consumption (kahwa coffee, chai latte, premium curry) in the Middle East, Europe, and Asia. Indonesia holds a comparative advantage as the primary producer of Java white cardamom — a variety no other producer holds at commercial scale. Value-added opportunities: standardized essential oil extracts, single-origin branding (Java cardamom), and organic certification. Risk: prices fluctuate significantly with annual harvest volume and seasonal Middle Eastern demand.",
    origin: {
      regions: "Jawa Barat (Sukabumi, Garut, Cianjur), Jawa Tengah, Lampung",
      regionsEn: "West Java (Sukabumi, Garut, Cianjur), Central Java, Lampung",
      altitude: "200–700 m above sea level (mdpl), under 50–70% shade",
      harvestSeason: "Puncak panen September–November; tersedia sepanjang tahun untuk format kering",
      harvestSeasonEn: "Peak harvest September–November; dried formats available year-round",
    },
    exportSpec: {
      fobPorts: STD_FOB_PORTS,
      containerCapacity:
        "20ft container: ~12 tons (whole pods) / ~14 tons (seeds) / ~10 tons (powder, vacuum-packed) | 40ft HC: ~18 tons",
      leadTime: "21–30 days from PO confirmation to FOB shipment (subject to harvest cycle)",
      paymentTerms:
        "T/T 30% advance + 70% before shipment | L/C at sight (preferred for first orders)",
      documentation: [
        ...STD_DOCUMENTATION,
        "Essential Oil Content Certificate (when applicable)",
      ],
      certifications: STD_CERTIFICATIONS,
    },
  },
  {
    slug: "kemukus",
    name: "Kemukus (Java Pepper)",
    en: "Cubeb / Java Tailed Pepper",
    icon: "🫐",
    scientificName: "Piper cubeba",
    bg: "#ecfeff",
    border: "#a5f3fc",
    tc: "#164e63",
    tag: "#0891b2",
    desc: "Kemukus (Piper cubeba) — 'tailed pepper' endemik Jawa, salah satu rempah niche premium Indonesia. Historically dikenal di Eropa abad pertengahan, kini dicari industri jamu, parfum, dan craft spirits/gin distilleries.",
    descEn:
      "Cubeb pepper (Piper cubeba) — the 'tailed pepper' endemic to Java, one of Indonesia's premium niche spices. Historically prized in medieval Europe, now sought after by herbal medicine, perfumery, and craft spirits/gin distilleries.",
    specs: [
      { label: "Moisture", value: "≤12%", note: "Dry whole berries" },
      { label: "Foreign Matter", value: "<1%", note: "Sorted clean grade" },
      { label: "Tail Intact", value: ">90%", note: "Premium grade marker" },
      { label: "MOQ", value: "100 kg", note: "Minimum order" },
    ],
    variants: [
      "Kemukus Berry Utuh Kering",
      "Kemukus Powder (Cracked)",
      "Minyak Atsiri Kemukus",
      "Kemukus Sortasi Premium Grade",
    ],
    markets: [
      "Industri jamu & herbal Indonesia",
      "Craft gin & spirits distilleries (Eropa, Jepang)",
      "Industri parfum & aromaterapi",
      "Pasar specialty spice (US, Eropa)",
    ],
    marketsEn: [
      "Indonesian jamu & herbal medicine industry",
      "Craft gin & spirits distilleries (Europe, Japan)",
      "Perfumery & aromatherapy industry",
      "Specialty spice market (US, Europe)",
    ],
    exportReady: true,
    about:
      "Kemukus (Piper cubeba), juga dikenal sebagai cubeb atau Java tailed pepper, adalah rempah endemik Pulau Jawa yang punya sejarah perdagangan global yang panjang. Berbeda dari lada hitam biasa, kemukus memiliki ciri khas 'ekor' (tail) berupa tangkai pendek yang menempel di setiap berry — fitur yang langsung mengidentifikasinya. Aroma dan rasanya kompleks: pedas seperti lada, tetapi dengan jejak kamper, kayu, dan sedikit floral. Pada abad pertengahan, kemukus diperdagangkan ke Eropa sebagai bumbu mewah dan obat. Saat ini, kemukus mengalami kebangkitan kecil sebagai bahan craft spirits (gin), parfum niche, dan pasar specialty spice.",
    aboutEn:
      "Kemukus (Piper cubeba), also known as cubeb or Java tailed pepper, is a spice endemic to Java with a long history in global trade. Unlike regular black pepper, cubeb features a distinctive 'tail' — a short stem attached to each berry — which immediately identifies it. Its aroma and flavor are complex: peppery like black pepper but with notes of camphor, wood, and subtle floral hints. In medieval times, cubeb was traded to Europe as a luxury spice and medicine. Today, cubeb is enjoying a small renaissance as a craft spirits (gin) ingredient, niche perfumery component, and specialty spice market darling.",
    benefits: [
      "Bahan jamu tradisional Indonesia (especially male vitality formulations)",
      "Botanical untuk craft gin distilleries (signature spice)",
      "Bahan parfum & aromaterapi (woody-spicy notes)",
      "Specialty culinary spice — restoran fine dining global",
      "Bahan baku obat tradisional di Eropa & Timur Tengah (historis)",
    ],
    benefitsEn: [
      "Traditional Indonesian jamu ingredient (especially male vitality formulations)",
      "Botanical for craft gin distilleries (signature spice note)",
      "Perfumery & aromatherapy ingredient (woody-spicy notes)",
      "Specialty culinary spice for global fine dining restaurants",
      "Historical traditional medicine ingredient in Europe & Middle East",
    ],
    cultivation:
      "Kemukus adalah tanaman merambat (vine) dari famili Piperaceae yang tumbuh di hutan tropis dataran rendah-menengah (200–700 mdpl) di Jawa. Seperti lada, dia membutuhkan tiang panjat hidup atau mati. Berbeda dari lada hitam, kemukus dipanen ketika buah sudah dewasa namun belum matang penuh, kemudian dijemur dengan tail (ekor)-nya yang menjadi ciri khas. Volume produksi sangat terbatas karena kemukus tidak banyak dibudidayakan secara komersial — sebagian besar masih dipanen dari pertanaman semi-liar. Pasca panen: pengeringan ke moisture ≤12%, sortasi untuk memastikan tail tetap utuh (sebagai marker grade premium), dan pengemasan vacuum.",
    cultivationEn:
      "Cubeb is a climbing vine from the Piperaceae family that grows in low-to-mid elevation tropical forests (200–700 m above sea level) in Java. Like pepper, it requires living or dead support poles. Unlike black pepper, cubeb is harvested when fruits are fully developed but not yet fully ripe, then sun-dried with its distinctive tails intact. Production volume is very limited because cubeb is not widely commercially cultivated — most still comes from semi-wild plantations. Post-harvest: drying to ≤12% moisture, sorting to preserve intact tails (a premium grade marker), and vacuum packaging.",
    varietyDetails: [
      {
        name: "Kemukus Berry Utuh Kering",
        nameEn: "Whole Dried Cubeb Berries",
        desc: "Berry utuh dengan tail (ekor) intact ≥90%. Format premium untuk craft spirits dan specialty spice market — visual identitas kemukus terjaga.",
        descEn:
          "Whole berries with tails intact at ≥90%. Premium format for craft spirits and specialty spice market — preserves cubeb's visual identity.",
      },
      {
        name: "Kemukus Powder (Cracked)",
        nameEn: "Cubeb Powder",
        desc: "Hasil giling kasar atau halus. Praktis untuk industri jamu, spice blend, dan flavoring industri F&B premium.",
        descEn:
          "Coarse or fine ground cubeb. Practical for jamu industry, spice blends, and premium F&B flavoring applications.",
      },
      {
        name: "Minyak Atsiri Kemukus",
        nameEn: "Cubeb Essential Oil",
        desc: "Hasil distilasi berry kemukus. Aroma woody-camphor-spicy yang khas — bahan parfum niche & flavor industri craft beverage.",
        descEn:
          "Steam-distilled from cubeb berries. Distinctive woody-camphor-spicy aroma — ingredient for niche perfumery and craft beverage flavoring.",
      },
      {
        name: "Sortasi Premium Grade",
        nameEn: "Premium Grade Sorted",
        desc: "Berry yang lolos sortasi ketat: ukuran seragam, tail intact, warna konsisten, foreign matter <1%. Untuk buyer industri spirits & specialty.",
        descEn:
          "Strictly sorted berries: uniform size, intact tails, consistent color, foreign matter <1%. For spirits industry & specialty buyers.",
      },
    ],
    marketOutlook:
      "Kemukus adalah komoditas niche premium dengan permintaan stabil tetapi terbatas dari segmen specialty: industri jamu nasional, craft gin distilleries di Eropa & Jepang, dan parfum niche house. Harga relatif tinggi karena supply terbatas dan budidaya komersial yang minim. Peluang nilai tambah: branding 'Java cubeb' sebagai protected origin (mirip Muntok White Pepper), ekstrak essential oil untuk industri parfum/spirits, dan kerjasama langsung dengan craft distilleries Eropa yang mencari botanicals exotic. Risiko: pasar yang kecil — fokus pada B2B niche, bukan mass market.",
    marketOutlookEn:
      "Cubeb is a premium niche commodity with stable but limited demand from specialty segments: Indonesian jamu industry, craft gin distilleries in Europe & Japan, and niche perfumery houses. Prices are relatively high due to limited supply and minimal commercial cultivation. Value-added opportunities: 'Java cubeb' protected origin branding (similar to Muntok White Pepper), essential oil extracts for perfumery/spirits, and direct partnerships with European craft distilleries seeking exotic botanicals. Risk: small market — B2B niche focus rather than mass market.",
    origin: {
      regions: "Jawa Barat, Jawa Tengah, Jawa Timur (sentra utama, semi-liar di hutan)",
      regionsEn: "West Java, Central Java, East Java (primary regions, semi-wild forest cultivation)",
      altitude: "200–700 m above sea level (mdpl)",
      harvestSeason: "Puncak panen Juli–September; supply terbatas, sering by-allocation",
      harvestSeasonEn: "Peak harvest July–September; supply is limited, often by-allocation basis",
    },
    exportSpec: {
      fobPorts: STD_FOB_PORTS,
      containerCapacity:
        "20ft container: ~12 tons (whole berries) / ~10 tons (powder) | Smaller LCL shipments common for niche buyers",
      leadTime: "30–45 days from PO confirmation (subject to harvest cycle & sortasi)",
      paymentTerms:
        "T/T 50% advance + 50% before shipment | L/C at sight (preferred for first orders)",
      documentation: [
        ...STD_DOCUMENTATION,
        "Cubebine Content Report (when applicable)",
        "Botanical Authentication Certificate",
      ],
      certifications: STD_CERTIFICATIONS,
    },
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
    marketsEn: [
      "Specialty coffee roasters worldwide",
      "Premium chocolate manufacturers",
      "Export to Europe & North America",
      "Japanese & Korean buyers",
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
    benefitsEn: [
      "Single-origin specialty coffee for boutique roasters worldwide",
      "Robusta for espresso blends & instant coffee manufacturing",
      "Fermented cacao for premium chocolatiers (couverture grade)",
      "Mass cacao for biscuit and cocoa powder industries",
      "Cocoa butter and liquor for F&B and cosmetic applications",
    ],
    cultivation:
      "Arabika tumbuh di ketinggian 1.000–2.000 mdpl dengan iklim sejuk; robusta tahan di dataran lebih rendah (300–800 mdpl). Pemanenan kopi selektif (cherry merah saja) menjamin grade specialty. Pasca panen: wet/dry process, fermentasi, pengeringan ke moisture ≤12.5%, lalu hulling. Kakao butuh dataran rendah, curah hujan tinggi. Fermentasi 5–7 hari adalah kunci profil rasa coklat — non-fermentasi cocok untuk pasar mass-industry, fermentasi untuk premium.",
    cultivationEn:
      "Arabica grows at 1,000–2,000 m above sea level in cooler climates; robusta tolerates lower elevations (300–800 m). Selective harvesting (only fully red cherries) ensures specialty grade. Post-harvest: wet/dry processing, fermentation, drying to ≤12.5% moisture, then hulling. Cacao thrives in lowlands with high rainfall. 5–7 day fermentation is the key driver of chocolate flavor profile — non-fermented cacao serves mass-market industry, fermented serves premium.",
    varietyDetails: [
      {
        name: "Kopi Robusta",
        nameEn: "Robusta Coffee",
        desc: "Coffea canephora — kafein tinggi, rasa lebih pahit/full body, harga ekonomis. Pasar utama: blend espresso, instant coffee.",
        descEn:
          "Coffea canephora — higher caffeine, fuller body and more bitterness, economical pricing. Primary market: espresso blends and instant coffee.",
      },
      {
        name: "Kopi Arabika",
        nameEn: "Arabica Coffee",
        desc: "Coffea arabica — body lebih ringan, asam buah/floral, premium. Single-origin Indonesia sering masuk specialty market di Eropa, US, Jepang.",
        descEn:
          "Coffea arabica — lighter body with fruity/floral acidity, premium tier. Indonesian single-origins regularly enter specialty markets in Europe, US, and Japan.",
      },
      {
        name: "Kakao Fermentasi",
        nameEn: "Fermented Cacao",
        desc: "Difermentasi 5–7 hari, profil rasa kompleks. Standar buyer chocolatier premium di Eropa.",
        descEn:
          "Fermented for 5–7 days, complex flavor profile. Standard requirement for premium European chocolatiers.",
      },
      {
        name: "Kakao Non-Fermentasi",
        nameEn: "Non-Fermented Cacao",
        desc: "Untuk industri mass-market: cocoa powder, biskuit, snack. Volume besar, margin lebih rendah.",
        descEn:
          "For mass-market industries: cocoa powder, biscuits, snacks. High volume, thinner margins.",
      },
    ],
    marketOutlook:
      "Specialty coffee global market tumbuh stabil di Eropa, US, dan Asia Timur. Indonesia punya posisi kuat di single-origin segment — buyer mau premium untuk Gayo, Mandheling, Toraja. Pasar kakao Indonesia terdorong fine flavor cocoa initiative dan EU Deforestation Regulation (EUDR) yang memberi peluang traceable supply. Tantangan: konsistensi kualitas pasca-panen di tingkat petani — peluang untuk processor yang bisa memberi premium harga ke petani mitra.",
    marketOutlookEn:
      "Global specialty coffee market grows steadily across Europe, US, and East Asia. Indonesia holds strong positioning in single-origin segments — buyers pay premium for Gayo, Mandheling, and Toraja. The Indonesian cacao market is propelled by fine flavor cocoa initiatives and the EU Deforestation Regulation (EUDR), opening opportunities for traceable supply. Challenge: post-harvest consistency at the farmer level — an opening for processors who can offer premium prices to partner farmers.",
    origin: {
      regions: "Aceh (Gayo), Sumatera Utara (Mandheling), Sulawesi (Toraja), Bali (Kintamani), Jawa Tengah",
      regionsEn: "Aceh (Gayo), North Sumatra (Mandheling), Sulawesi (Toraja), Bali (Kintamani), Central Java",
      altitude: "Arabica: 1,000–2,000 m | Robusta: 300–800 m | Cacao: 0–600 m",
      harvestSeason: "Kopi: Mei–September (puncak); Kakao: panen besar Maret–Juli & Oktober–Desember",
      harvestSeasonEn: "Coffee: May–September (peak); Cacao: major harvests March–July & October–December",
    },
    exportSpec: {
      fobPorts: STD_FOB_PORTS,
      containerCapacity:
        "20ft container: ~19 tons green bean (60kg jute bags) | 40ft HC: ~25 tons",
      leadTime: "10–14 days from PO confirmation to FOB shipment (green bean)",
      paymentTerms:
        "T/T 30% advance + 70% against shipping documents | L/C at sight | CAD acceptable for repeat buyers",
      documentation: [
        ...STD_DOCUMENTATION,
        "ICO Certificate (International Coffee Organization)",
        "Cupping Score Sheet (for specialty grade)",
      ],
      certifications: [
        ...STD_CERTIFICATIONS,
        "Rainforest Alliance / UTZ (available)",
        "Fair Trade Certified (available)",
        "EUDR Compliance (Geo-traceability documentation)",
      ],
    },
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
    marketsEn: [
      "Japan — shirataki & konjac manufacturers",
      "China — konjac processing industry",
      "Korea & Taiwan — health food sector",
      "Europe — health food & dietary supplements",
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
    benefitsEn: [
      "Raw material for konjac flour — premium dietary fiber",
      "Shirataki noodles & rice (low-calorie pasta substitute)",
      "Dietary supplements (weight management, satiety)",
      "Thickener and gelling agent in F&B industry (konnyaku)",
      "Raw material for biodegradable films (emerging research applications)",
    ],
    cultivation:
      "Porang tumbuh di bawah naungan (intensitas cahaya 50–60%), dataran rendah-menengah, tanah gembur. Periode tanam 2–3 tahun untuk panen optimal — umbi semakin besar setiap musim. Reproduksi melalui katak (bulbil) di pucuk daun atau biji. Pasca panen: umbi dirajang chip, dikeringkan ke moisture ≤14%, lalu dijual sebagai chip atau diolah lebih lanjut menjadi tepung. Untuk ekspor, kontrol kadar glukomanan (>45%) dan logam berat sangat penting.",
    cultivationEn:
      "Porang grows under shade (50–60% light intensity) in low-to-mid elevations with loose soil. Optimal harvest comes after 2–3 years of growth — tubers enlarge each season. Propagation is via bulbils on leaf tips or seeds. Post-harvest: tubers are sliced into chips, dried to ≤14% moisture, then sold as chips or further processed into flour. For export, glucomannan content (>45%) and heavy metal controls are critical.",
    varietyDetails: [
      {
        name: "Porang Segar (Umbi)",
        nameEn: "Fresh Porang Tuber",
        desc: "Umbi utuh hasil panen. Pasar lokal untuk processor lanjutan. Margin rendah, volume besar.",
        descEn:
          "Whole harvested tubers. Local market for downstream processors. Low margin, high volume.",
      },
      {
        name: "Porang Chip Kering",
        nameEn: "Dried Porang Chips",
        desc: "Umbi dirajang & dikeringkan. Format ekspor paling umum untuk China & Vietnam yang mengolah lebih lanjut.",
        descEn:
          "Sliced and dried tubers. Most common export format for China and Vietnam, where they undergo further processing.",
      },
      {
        name: "Tepung Porang (Konjac Flour)",
        nameEn: "Konjac Flour",
        desc: "Hasil pengolahan lanjut chip — glukomanan terkonsentrasi >85%. Pasar premium ke Jepang, Korea, Eropa, US.",
        descEn:
          "Further processed from chips — concentrated glucomannan >85%. Premium market to Japan, Korea, Europe, US.",
      },
      {
        name: "Export Grade Sortasi",
        nameEn: "Export-Grade Sorted Chips",
        desc: "Chip yang sudah disortasi ketat (warna, ukuran, moisture, foreign matter) memenuhi spesifikasi buyer Jepang.",
        descEn:
          "Tightly sorted chips (color, size, moisture, foreign matter) meeting Japanese buyer specifications.",
      },
    ],
    marketOutlook:
      "Pasar konjac global didorong tren weight management & low-carb diet di US, Eropa, dan Asia. Jepang adalah konsumen tradisional terbesar (konnyaku, shirataki). China sebagai processor terbesar membeli chip dari Indonesia, mengolah jadi tepung, lalu re-export. Peluang nilai tambah Indonesia: pengolahan tepung lokal supaya tidak hanya menjual chip mentah. Risiko: harga porang sangat fluktuatif tergantung permintaan ekspor — sempat jatuh 2022–2023, mulai recovery seiring pemulihan demand.",
    marketOutlookEn:
      "Global konjac market is propelled by weight management and low-carb diet trends in the US, Europe, and Asia. Japan is the largest traditional consumer (konnyaku, shirataki). China, as the largest processor, buys chips from Indonesia, processes them into flour, then re-exports. Indonesia's value-add opportunity: local flour processing instead of merely exporting raw chips. Risk: porang prices are highly volatile based on export demand — fell sharply 2022–2023, recovering with demand rebound.",
    origin: {
      regions: "Jawa Timur (Madiun, Nganjuk), Jawa Tengah, Jawa Barat",
      regionsEn: "East Java (Madiun, Nganjuk), Central Java, West Java",
      altitude: "100–700 m above sea level (mdpl)",
      harvestSeason: "Puncak panen April–Agustus (akhir musim hujan ke awal kemarau)",
      harvestSeasonEn: "Peak harvest April–August (end of rainy season into dry season)",
    },
    exportSpec: {
      fobPorts: STD_FOB_PORTS,
      containerCapacity:
        "20ft container: ~18 tons (chips) / ~14 tons (flour) | 40ft HC: ~25 tons",
      leadTime: "21–30 days from PO confirmation to FOB shipment (subject to harvest cycle)",
      paymentTerms:
        "T/T 30% advance + 70% before shipment | L/C at sight (preferred for first orders)",
      documentation: [
        ...STD_DOCUMENTATION,
        "Heavy Metal Test Report (Pb, Cd, As, Hg)",
        "Glucomannan Content Certificate",
      ],
      certifications: STD_CERTIFICATIONS,
    },
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
    marketsEn: [
      "Animal feed manufacturers",
      "Maize starch & cornstarch industry",
      "Southeast Asian export markets",
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
    benefitsEn: [
      "Primary feed ingredient (50–60% of industry demand)",
      "Maize flour & cornstarch for food industry",
      "Raw material for high-fructose corn syrup (HFCS)",
      "Sweet corn and corn oil products",
      "Bioenergy (bioethanol) — emerging market",
    ],
    cultivation:
      "Jagung adalah tanaman C4 yang efisien fotosintesis di iklim panas. Tumbuh optimal di dataran rendah-menengah dengan curah hujan 500–800 mm/musim. Periode tanam 90–120 hari untuk varietas hibrida. Panen di kadar air 18–25% lalu dikeringkan ke ≤14% untuk penyimpanan. Kontrol aflatoksin (<20 ppb untuk food grade) krusial — biji yang lembab atau menjamur tidak boleh masuk supply chain pangan/pakan ekspor.",
    cultivationEn:
      "Corn is a C4 plant with efficient photosynthesis in warm climates. Optimal growth in low-to-mid elevations with 500–800 mm rainfall per season. 90–120 day cycle for hybrid varieties. Harvested at 18–25% moisture then dried to ≤14% for storage. Aflatoxin control (<20 ppb for food grade) is critical — wet or moldy kernels must never enter the food/feed export supply chain.",
    varietyDetails: [
      {
        name: "Jagung Pipil Kering (≤14%)",
        nameEn: "Dried Shelled Corn (≤14% MC)",
        desc: "Format standar industri pakan & pangan. Storage-stable, mudah ditransportasi, dan jadi acuan harga.",
        descEn:
          "Industry-standard for feed and food. Storage-stable, easy to transport, and the reference benchmark for pricing.",
      },
      {
        name: "Jagung Basah (Tongkol Segar)",
        nameEn: "Wet Corn (Fresh Cob)",
        desc: "Hasil panen langsung. Untuk pabrik pakan dengan pengeringan in-house atau pasar pangan lokal segar.",
        descEn:
          "Freshly harvested. For feed mills with in-house drying or local fresh-food markets.",
      },
      {
        name: "Jagung Pakan",
        nameEn: "Feed-Grade Corn",
        desc: "Standar pakan ternak — toleransi defect lebih longgar dari food grade, harga lebih ekonomis.",
        descEn:
          "Feed-grade standard — wider defect tolerance than food grade, more economical pricing.",
      },
      {
        name: "Jagung Food Grade",
        nameEn: "Food-Grade Corn",
        desc: "Kontrol aflatoksin & FFM ketat untuk industri pangan dan ekspor. Premium price.",
        descEn:
          "Strict aflatoxin and foreign material controls for food industry and export. Premium pricing.",
      },
    ],
    marketOutlook:
      "Permintaan pakan ternak Indonesia tumbuh 5–7% per tahun mengikuti konsumsi protein hewani. Pemerintah mendorong swasembada jagung dengan target produksi 16+ juta ton. Peluang ekspor terbuka ke negara ASEAN tetangga ketika produksi domestik surplus. Risiko utama: volatilitas harga global (CBOT) dan persaingan dengan jagung impor murah dari Argentina/Brazil pada tahun produksi rendah.",
    marketOutlookEn:
      "Indonesian feed demand grows 5–7% annually, tracking animal protein consumption. The government drives corn self-sufficiency with a 16+ million ton production target. Export opportunities open to ASEAN neighbors during domestic surplus years. Main risks: global price volatility (CBOT) and competition from cheap Argentine/Brazilian imports during low-production years.",
    origin: {
      regions: "Jawa Tengah, Jawa Timur, Lampung, Sulawesi Selatan",
      regionsEn: "Central Java, East Java, Lampung, South Sulawesi",
      altitude: "0–800 m above sea level (mdpl)",
      harvestSeason: "Dua musim panen: Maret–Mei (musim hujan) & September–November (musim kemarau)",
      harvestSeasonEn: "Two harvest seasons: March–May (rainy) & September–November (dry)",
    },
    exportSpec: {
      fobPorts: STD_FOB_PORTS,
      containerCapacity:
        "20ft container: ~25 tons (bulk) / ~22 tons (50kg PP bags) | 40ft HC: ~28 tons",
      leadTime: "10–18 days from PO confirmation to FOB shipment",
      paymentTerms:
        "T/T 30% advance + 70% against B/L copy | L/C at sight",
      documentation: [
        ...STD_DOCUMENTATION,
        "Aflatoxin Test Report (<20 ppb)",
        "Moisture & GMO-free declaration (when required)",
      ],
      certifications: STD_CERTIFICATIONS,
    },
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
    marketsEn: [
      "Traditional Indonesian restaurants & home kitchens",
      "Indonesian diaspora communities (Malaysia, Singapore, Netherlands, Australia)",
      "Ready-to-use seasoning & packaged rawon paste industry",
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
    benefitsEn: [
      "Signature ingredient in Rawon — the famous black East Javanese beef soup",
      "Yogyakarta Brongkos curry — paired with coconut milk & legumes",
      "Makassar Konro Soup — deepens the richness of beef rib broth",
      "Pindang Kudus — provides elegant dark color for the broth",
      "Natural deep-black colorant for traditional broths and rice dishes",
      "Adds complex flavor: savory umami, earthy notes, subtle nuttiness",
    ],
    cultivation:
      "Pengolahan kluwek adalah salah satu yang paling rumit di dunia rempah karena harus menetralkan asam sianida. Tahapan utama: (1) Perebusan — biji yang baru dipanen direbus dalam waktu lama; (2) Fermentasi/Pemeraman — biji dibungkus abu lalu dipendam di dalam tanah selama 40–60 hari; (3) Hasil akhir — selama pemendaman, asam sianida luruh menjadi senyawa yang aman, isi biji berubah dari putih menjadi hitam pekat dengan aroma kacang khas. Proses ini bukan sekadar tradisi melainkan prosedur keamanan pangan yang vital — bukti kecerdasan leluhur Nusantara dalam mengolah bahan alam beracun menjadi rempah bernilai tinggi. Tips memilih: kocok biji dan pastikan terdengar 'klik-klak' (isi sudah terlepas dari dinding cangkang). Cicipi sedikit ujung isi sebelum diolah — jika sangat pahit (acrid), buang karena akan merusak masakan. Sebelum dihaluskan, rendam dalam air panas 10–15 menit agar tekstur jadi pasta lembut.",
    cultivationEn:
      "Processing kluwek is one of the most complex transformations in the world of spices because it must neutralize hydrocyanic acid. Main stages: (1) Boiling — freshly harvested seeds are boiled for an extended period; (2) Fermentation/Burying — seeds are wrapped in ash and buried in soil for 40–60 days; (3) Final result — during burial, the cyanide degrades into safe compounds, the seed content transforms from white to deep black with characteristic nutty aroma. This process is not mere tradition but a vital food-safety procedure — evidence of Nusantara ancestors' ingenuity in transforming a toxic plant into a high-value spice. Selection tips: shake the seed and listen for the 'click-clack' (the kernel has separated from shell). Taste a small piece before cooking — if very acrid, discard it as it will ruin the dish. Before grinding, soak in hot water 10–15 minutes for a smooth paste texture.",
    varietyDetails: [
      {
        name: "Kluwek Utuh Pilihan",
        nameEn: "Whole Selected Kluwek",
        desc: "Biji kering utuh yang sudah disortir — uji kocok klik-klak (isi terlepas dari cangkang) dan pemeriksaan visual (isi hitam pekat, tidak berjamur). Format pasar tradisional & rumah makan.",
        descEn:
          "Whole dry seeds, sorted by shake-test (click-clack of kernel separating from shell) and visual inspection (deep-black kernel, no mold). Format for traditional markets and restaurants.",
      },
      {
        name: "Kluwek Pasta Siap Pakai",
        nameEn: "Ready-to-Use Kluwek Paste",
        desc: "Daging kluwek yang sudah direndam air panas dan dihaluskan menjadi pasta. Praktis untuk industri rumah makan dan ready-to-eat — tidak perlu memecah cangkang manual.",
        descEn:
          "Kluwek kernel pre-soaked in hot water and ground into smooth paste. Convenient for restaurant and ready-to-eat industry — no manual shell cracking required.",
      },
      {
        name: "Kluwek Bubuk Standar",
        nameEn: "Standardized Kluwek Powder",
        desc: "Versi bubuk kering, lebih shelf-stable untuk industri bumbu jadi dan ekspor diaspora. Memudahkan dosing dan distribusi skala besar.",
        descEn:
          "Dry powder version, more shelf-stable for ready-spice industry and diaspora export. Easier dosing and large-scale distribution.",
      },
      {
        name: "Bumbu Rawon Komposisi",
        nameEn: "Rawon Spice Blend",
        desc: "Pre-mix kluwek dengan rempah pendamping (kemiri, ketumbar, kunyit, lengkuas) — siap pakai untuk industri rawon kemasan dan Asian specialty store.",
        descEn:
          "Pre-mix of kluwek with companion spices (candlenut, coriander, turmeric, galangal) — ready for packaged rawon industry and Asian specialty stores.",
      },
    ],
    marketOutlook:
      "Kluwek adalah komoditas niche premium dengan permintaan stabil dari rumah makan tradisional, restoran kuliner Nusantara di luar negeri (diaspora Malaysia, Singapura, Belanda, Australia), dan industri bumbu siap saji (rawon kemasan, paste instan). Harga relatif tinggi karena proses fermentasi panjang 40–60 hari dan supply terbatas pada panen pohon dewasa Kepayang yang langka. Peluang nilai tambah terbesar ada di produk olahan — pasta kluwek instan, bumbu rawon kemasan, dan bubuk standardized untuk industri F&B — terutama untuk segmen ekspor ke pasar diaspora dan Asian specialty store global.",
    marketOutlookEn:
      "Kluwek is a premium niche commodity with stable demand from traditional restaurants, Nusantara cuisine restaurants abroad (diaspora in Malaysia, Singapore, Netherlands, Australia), and ready-spice industry (packaged rawon, instant paste). Prices are relatively high due to the long 40–60 day fermentation process and limited supply tied to scarce mature Kepayang trees. Biggest value-added opportunities lie in processed products — instant kluwek paste, packaged rawon spice blends, and standardized powder for F&B industry — especially for export to diaspora markets and global Asian specialty stores.",
    origin: {
      regions: "Jawa Tengah, Jawa Timur, Yogyakarta, Sumatera (hutan tropis)",
      regionsEn: "Central Java, East Java, Yogyakarta, Sumatra (tropical forest)",
      altitude: "0–700 m above sea level (mdpl)",
      harvestSeason: "Panen tahunan dari pohon dewasa, fermentasi 40–60 hari sebelum siap pasar",
      harvestSeasonEn: "Annual harvest from mature trees, 40–60 day fermentation before market-ready",
    },
    exportSpec: {
      fobPorts: STD_FOB_PORTS,
      containerCapacity:
        "20ft container: ~12 tons (whole seeds) | 40ft HC: ~18 tons (paste/powder, vacuum-packed)",
      leadTime: "30–45 days from PO confirmation (subject to fermentation cycle)",
      paymentTerms:
        "T/T 50% advance + 50% before shipment | L/C at sight (preferred for first orders)",
      documentation: [
        ...STD_DOCUMENTATION,
        "HCN (Cyanide) Safety Test Report — post-fermentation",
        "Microbiological Safety Certificate",
      ],
      certifications: STD_CERTIFICATIONS,
    },
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
    marketsEn: [
      "Local Central Java market",
      "Bulog & national distributors",
      "Animal feed industry (rice bran)",
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
    benefitsEn: [
      "Premium & medium rice for household consumption",
      "Broken rice (menir) for food and feed industries",
      "Rice bran (katul) for animal feed & rice bran oil extraction",
      "Husk for boiler fuel and mushroom substrate",
      "Contract milling services for farmers and traders",
    ],
    cultivation:
      "Padi tumbuh di sawah irigasi/tadah hujan dengan periode 100–135 hari per musim, biasanya 2–3 musim/tahun. Pasca panen: gabah dijemur dari kadar air 25% (GKP) ke 14% (GKG), digiling untuk memisahkan beras, katul, sekam, menir. Standar Bulog mengatur whiteness, kadar broken, kadar air, dan menir. Rendemen rata-rata 60–65% (gabah → beras). Mesin modern bisa mencapai rendemen 65–70%.",
    cultivationEn:
      "Rice grows in irrigated or rain-fed paddies with 100–135 day cycles, typically 2–3 seasons per year. Post-harvest: paddy is dried from 25% moisture (GKP) to 14% (GKG), milled to separate rice, bran, husk, and broken rice. Bulog standards regulate whiteness, broken-rice ratio, moisture, and menir content. Average yield 60–65% (paddy → rice). Modern mills achieve 65–70% recovery.",
    varietyDetails: [
      {
        name: "Gabah Basah (GKP)",
        nameEn: "Wet Paddy (GKP)",
        desc: "Hasil panen langsung, kadar air ~25%. Harga lebih rendah, perlu dikeringkan sebelum digiling/disimpan.",
        descEn:
          "Freshly harvested, ~25% moisture. Lower price, requires drying before milling or storage.",
      },
      {
        name: "Gabah Kering (GKG)",
        nameEn: "Dry Paddy (GKG)",
        desc: "Sudah dijemur ke ≤14%. Storage-stable, harga acuan untuk industri penggilingan.",
        descEn:
          "Sun-dried to ≤14%. Storage-stable; the reference price for the milling industry.",
      },
      {
        name: "Beras Premium",
        nameEn: "Premium Rice",
        desc: "Whiteness 40+, broken <5%, bersih dari menir/dedak. Harga retail tertinggi.",
        descEn:
          "Whiteness 40+, broken <5%, free of menir/bran residue. Highest retail price tier.",
      },
      {
        name: "Beras Medium",
        nameEn: "Medium-Grade Rice",
        desc: "Standar Bulog untuk operasi pasar. Volume besar, margin tipis.",
        descEn:
          "Bulog standard for market operations. High volume, thin margins.",
      },
      {
        name: "Beras Pecah (Menir)",
        nameEn: "Broken Rice (Menir)",
        desc: "Pecahan beras hasil giling. Untuk industri tepung beras, kerupuk, pakan.",
        descEn:
          "Broken rice from milling. For rice flour, kerupuk crackers, and feed industries.",
      },
      {
        name: "Katul & Dedak",
        nameEn: "Rice Bran (Katul & Dedak)",
        desc: "By-product penggilingan. Pakan ternak, atau bahan baku minyak rice bran (premium di Jepang).",
        descEn:
          "Milling by-product. Animal feed or raw material for rice bran oil (premium product in Japan).",
      },
    ],
    marketOutlook:
      "Pasar padi-beras Indonesia stabil tinggi karena permintaan pangan terus tumbuh. Pemerintah menargetkan produksi 34+ juta ton beras 2026 lewat program Brigade Pangan dan ekspansi lahan. Penggilingan modern dengan rendemen tinggi (65%+) dan diferensiasi premium (organic, geographical indication seperti Beras Solok atau Pandan Wangi) jadi peluang nilai tambah. Ekspor beras Indonesia masih sporadis — fokus utama adalah ketahanan pangan domestik.",
    marketOutlookEn:
      "Indonesia's paddy-rice market remains consistently strong as food demand keeps growing. The government targets 34+ million tons of rice production by 2026 via the Brigade Pangan program and land expansion. Modern milling with high yields (65%+) and premium differentiation (organic, GI-protected varieties like Beras Solok or Pandan Wangi) present value-add opportunities. Indonesian rice exports remain sporadic — primary focus is domestic food security.",
    origin: {
      regions: "Jawa Tengah (sentra utama), Jawa Timur, Jawa Barat, Sumatera",
      regionsEn: "Central Java (primary hub), East Java, West Java, Sumatra",
      altitude: "0–700 m above sea level (mdpl) — sawah irigasi & tadah hujan",
      harvestSeason: "2–3 musim panen per tahun: Februari–April, Juni–Agustus, Oktober–Desember",
      harvestSeasonEn: "2–3 harvests annually: February–April, June–August, October–December",
    },
    exportSpec: {
      fobPorts: ["Tanjung Emas (Semarang)", "Tanjung Perak (Surabaya)"],
      containerCapacity:
        "Domestic distribution focus | 20ft container: ~25 tons (50kg PP bags) when export-allocated",
      leadTime: "7–14 days for domestic delivery | 21–30 days for export (when permitted)",
      paymentTerms: "Domestic: cash/transfer on delivery | Export: T/T 50% advance + 50% before shipment",
      documentation: [
        "Surat Izin Edar (BPOM/Bulog)",
        "Sertifikat Mutu Bulog (untuk beras pasar)",
        "Phytosanitary Certificate (when exporting)",
        "Certificate of Analysis (COA)",
        "Bill of Lading (B/L)",
        "Packing List & Commercial Invoice",
      ],
      certifications: [
        "SNI (Standar Nasional Indonesia)",
        "HACCP Compliant",
        "Halal MUI Certified",
        "GMP (Good Manufacturing Practice)",
        "Organic Certification (available for premium varieties)",
      ],
    },
  },
];

export function getCommoditiesBySlug(slug: string): Commodity | undefined {
  return commodities.find((c) => c.slug === slug);
}
