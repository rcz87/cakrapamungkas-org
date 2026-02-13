export interface Article {
  slug: string;
  category: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

export const articles: Article[] = [
  {
    slug: "analisis-strategis-kementan-2026",
    category: "Kebijakan",
    categoryColor: "bg-red-100 text-red-700",
    title:
      "Analisis Strategis Kementan 2026: Transformasi Struktural Kedaulatan Pangan",
    excerpt:
      "Analisis mendalam program kerja Kementerian Pertanian 2026 dengan pagu anggaran Rp40,14 T. Membahas arsitektur fiskal, Brigade Pangan 100.000 milenial, target produksi 34,77 juta ton beras.",
    readTime: "45 min",
    image: "/images/presiden-dan-mentan.jpg",
    featured: true,
  },
  {
    slug: "transformasi-agraria-2026",
    category: "Kebijakan",
    categoryColor: "bg-emerald-100 text-emerald-700",
    title: "Transformasi Agraria 2026: Strategi Besar Kedaulatan Pangan",
    excerpt:
      "5 Pilar strategis: Ekstensifikasi lahan, subsidi pupuk Rp46,87 T, KUR 6%, Agritech 4.0, dan AUTP.",
    readTime: "35 min",
    image: "/images/desa-petani.png",
    featured: true,
  },
  {
    slug: "arsitektur-pertanian-indonesia",
    category: "Sejarah & Ekonomi",
    categoryColor: "bg-purple-100 text-purple-700",
    title:
      "Arsitektur Pertanian Indonesia: Transformasi Tradisi & Visi Kedaulatan Pangan",
    excerpt:
      "Analisis mendalam tentang evolusi sektor pertanian Indonesia dari era Neolitikum hingga adopsi teknologi Agritech 4.0. Membahas signifikansi makroekonomi, produktivitas tenaga kerja, kearifan lokal seperti sistem Subak Bali.",
    readTime: "45 min",
    image: "/images/desa-petani.png",
    featured: true,
  },
  {
    slug: "revolusi-agritech-4-0",
    category: "Teknologi",
    categoryColor: "bg-blue-100 text-blue-700",
    title: "Revolusi Agritech 4.0: Drone, IoT & AI dalam Pertanian Indonesia",
    excerpt:
      "Implementasi teknologi pintar untuk meningkatkan efisiensi produksi hingga 30% dengan monitoring real-time.",
    readTime: "25 min",
    image: "/images/petani-drone.png",
    featured: true,
  },
  {
    slug: "subak-hingga-smart-farming",
    category: "Kearifan Lokal",
    categoryColor: "bg-emerald-100 text-emerald-700",
    title: "Dari Subak hingga Smart Farming: Evolusi Pertanian Nusantara",
    excerpt:
      "Menelusuri kearifan lokal sistem irigasi Subak Bali dan transformasinya di era digital.",
    readTime: "30 min",
    image: "/images/subak-gemini.png",
    featured: true,
  },
  {
    slug: "petani-milenial",
    category: "Agribisnis",
    categoryColor: "bg-indigo-100 text-indigo-700",
    title: "Petani Milenial: Omzet Miliaran dari Agribisnis Modern",
    excerpt:
      "Profil sukses 300 ribu petani muda yang mengubah paradigma bertani di Indonesia.",
    readTime: "20 min",
    image: "/images/petani-milenial-300ribu.png",
    featured: true,
  },
  {
    slug: "program-swasembada-2025",
    category: "Regulasi",
    categoryColor: "bg-amber-100 text-amber-700",
    title: "Program Swasembada Pangan 2025: Target & Implementasi",
    excerpt:
      "Analisis anggaran Rp139,4 triliun untuk cetak sawah 3 juta hektar dan hilirisasi komoditas.",
    readTime: "8 min",
    image: "/images/program-swasembada.png",
  },
  {
    slug: "ekspor-kopi-indonesia",
    category: "Ekspor",
    categoryColor: "bg-rose-100 text-rose-700",
    title: "Ekspor Kopi Indonesia: US$1,62 Miliar di Pasar Global",
    excerpt:
      "Kopi spesialti Indonesia menjadi primadona pasar Eropa dan Amerika dengan harga premium.",
    readTime: "15 min",
    image: "/images/kopi.png",
  },
  {
    slug: "adaptasi-perubahan-iklim",
    category: "Lingkungan",
    categoryColor: "bg-teal-100 text-teal-700",
    title: "Adaptasi Pertanian Menghadapi Perubahan Iklim",
    excerpt:
      "Strategi mitigasi risiko gagal panen dengan bibit unggul dan teknologi prediksi berbasis satelit.",
    readTime: "12 min",
    image: "/images/adaptasi-perubahan-iklim.png",
  },
  {
    slug: "budidaya-gap-padi",
    category: "Budidaya",
    categoryColor: "bg-green-100 text-green-700",
    title: "Teknologi Budidaya GAP untuk Padi Berkualitas",
    excerpt:
      "Panduan lengkap Good Agricultural Practices untuk budidaya padi modern dan berkelanjutan.",
    readTime: "8 min",
    image: "/images/cek-ph-tanah.png",
  },
  {
    slug: "defisiensi-nutrisi-padi",
    category: "Budidaya",
    categoryColor: "bg-green-100 text-green-700",
    title: "Cara Mengenali Gejala Defisiensi Nutrisi pada Padi",
    excerpt:
      "Pelajari tanda-tanda kekurangan unsur hara pada tanaman padi dan cara mengatasinya dengan pemupukan yang tepat.",
    readTime: "6 min",
    image: "/images/cek-ph-tanah.png",
  },
  {
    slug: "manajemen-risiko-agribisnis",
    category: "Manajemen",
    categoryColor: "bg-blue-100 text-blue-700",
    title: "Manajemen Risiko dalam Agribisnis Modern",
    excerpt:
      "Strategi komprehensif mengelola risiko gagal panen, fluktuasi harga pasar, dan tantangan perubahan iklim.",
    readTime: "10 min",
    image: "/images/desa-petani.png",
  },
  {
    slug: "break-even-point-usaha-tani",
    category: "Manajemen",
    categoryColor: "bg-blue-100 text-blue-700",
    title: "Perhitungan Break Even Point Usaha Tani Padi",
    excerpt:
      "Cara menghitung titik impas usaha tani padi untuk membantu petani mengambil keputusan bisnis yang tepat.",
    readTime: "7 min",
    image: "/images/desa-petani.png",
  },
  {
    slug: "program-pemerintah-2026",
    category: "Regulasi",
    categoryColor: "bg-amber-100 text-amber-700",
    title: "Update Program Pemerintah 2026 untuk Pertanian",
    excerpt:
      "Rangkuman kebijakan dan program terbaru pemerintah yang mendukung sektor pertanian Indonesia.",
    readTime: "5 min",
    image: "/images/presiden-dan-mentan.jpg",
  },
  {
    slug: "asuransi-usaha-tani-padi",
    category: "Regulasi",
    categoryColor: "bg-amber-100 text-amber-700",
    title: "Panduan Lengkap Asuransi Usaha Tani Padi (AUTP)",
    excerpt:
      "Semua yang perlu Anda ketahui tentang AUTP: syarat pendaftaran, premi, klaim, dan manfaat perlindungan.",
    readTime: "6 min",
    image: "/images/desa-petani.png",
  },
];

/** Get article URL path */
export function getArticleHref(slug: string): string {
  return `/artikel/${slug}`;
}
