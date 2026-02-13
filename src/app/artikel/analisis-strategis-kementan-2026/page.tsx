import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  Calendar,
  Clock,
  TrendingUp,
  BarChart3,
  Layers,
  Zap,
  Target,
  ShieldCheck,
  Cpu,
  Wallet,
  Globe,
  Users
} from 'lucide-react';
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/json-ld";
import { getArticleBySlug } from "@/data/articles";

export default function TransformasiPangan2026Page() {
  const article = getArticleBySlug("analisis-strategis-kementan-2026");

  return (
    <>
      {article && <ArticleJsonLd article={article} />}
      {article && (
        <BreadcrumbJsonLd
          items={[
            { name: "Beranda", href: "/" },
            { name: "Artikel", href: "/artikel" },
            { name: article.title, href: `/artikel/analisis-strategis-kementan-2026` },
          ]}
        />
      )}
      <article className="bg-white min-h-screen selection:bg-emerald-100 selection:text-emerald-900">
      {/* Header Strategis dengan Gaya Institusional */}
      <header className="bg-gradient-to-br from-slate-950 via-teal-950 to-emerald-900 py-16 lg:py-24 relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px]"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-all mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-widest">Kembali ke Beranda Strategis</span>
          </Link>

          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-4 py-1.5 bg-emerald-600 text-white text-[10px] font-black rounded-full tracking-widest shadow-lg shadow-emerald-900/40 uppercase">
              STRATEGIC ANALYSIS 2026
            </span>
            <span className="px-4 py-1.5 bg-white/10 text-emerald-300 text-[10px] font-bold rounded-full border border-white/20 backdrop-blur-md uppercase tracking-widest">
              Institutional Order Block
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black leading-[1.1] mb-8 tracking-tighter">
            Transformasi Struktural & Akselerasi <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Kedaulatan Pangan</span> 2026
          </h1>

          <p className="text-xl text-emerald-100/80 max-w-3xl leading-relaxed mb-10 font-light italic border-l-2 border-emerald-500/50 pl-6">
            "Analisis strategis program kerja Kementan sebagai respon terhadap Market Structure Shift global melalui rekayasa fiskal dan modernisasi Brigade Pangan."
          </p>

          <div className="flex flex-wrap items-center gap-8 text-emerald-200/60">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-xs font-bold tracking-widest uppercase text-emerald-300">12 Februari 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-xs font-bold tracking-widest uppercase text-emerald-300">15 Menit Analisis Mendalam</span>
            </div>
          </div>
        </div>
      </header>

      {/* Presidential Authority Section */}
      <section className="max-w-6xl mx-auto px-4 -mt-16 relative z-20 mb-8">
        <div className="bg-gradient-to-br from-slate-100 to-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-200">
          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src="/images/presiden-dan-mentan.jpg"
              alt="Presiden RI dan Menteri Pertanian - Dukungan Kebijakan Pertanian 2026"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-12">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 bg-red-600 text-white text-[10px] font-black rounded-full mb-4 uppercase tracking-widest">
                Arahan Presiden RI & Menteri Pertanian
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight">
                "Kedaulatan Pangan adalah Prioritas Tertinggi Bangsa"
              </h3>
              <p className="text-emerald-200 text-sm md:text-base leading-relaxed">
                Dukungan penuh pemerintah dalam transformasi sektor pertanian melalui alokasi anggaran Rp40,14 Triliun 
                untuk mewujudkan swasembada pangan berkelanjutan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Visual & Data Summary */}
      <section className="max-w-6xl mx-auto px-4 relative z-20">
        <div className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200/60 border border-slate-100 p-8 md:p-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: 'Pagu Anggaran', val: 'Rp40,14 T', sub: 'Institutional Funding', icon: <Wallet className="text-emerald-600" /> },
              { label: 'Target Produksi', val: '34,77 Jt Ton', sub: 'Demand Fulfillment', icon: <Target className="text-blue-600" /> },
              { label: 'Brigade Pangan', val: '100.000', sub: 'Human Capital Shift', icon: <Users className="text-amber-600" /> },
              { label: 'Smart Farming', val: '4.0 Ready', sub: 'Efficiency Edge', icon: <Cpu className="text-purple-600" /> },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-2 group">
                <div className="p-4 bg-slate-50 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="text-xs font-black text-slate-400 uppercase tracking-widest">{item.label}</div>
                <div className="text-3xl font-black text-slate-900 tracking-tighter">{item.val}</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="prose prose-slate prose-lg max-w-none">
          
          <div className="flex items-center gap-3 mb-12">
            <Layers className="w-8 h-8 text-emerald-600" />
            <h2 className="text-4xl font-black text-slate-900 m-0 tracking-tighter uppercase">I. Arsitektur Fiskal: Institutional Order Block</h2>
          </div>

          <p className="text-slate-600 leading-relaxed mb-8">
            Penyelenggaraan pembangunan sektor pertanian Indonesia pada tahun anggaran 2026 merepresentasikan sebuah <strong>lompatan kuantum</strong> dalam sejarah kebijakan publik nasional. Secara teknis, ini adalah sebuah <strong>Break of Structure (BOS)</strong> dari pola anggaran reaktif masa lalu menuju pendekatan proaktif-ekspansif.
          </p>

          <p className="mb-10">
            Kementerian Pertanian melakukan rekalibrasi fiskal yang signifikan, di mana pagu indikatif mengalami kenaikan hampir tiga kali lipat. Dalam analisis pasar modal, ini setara dengan masuknya likuiditas besar (Big Money) ke dalam sebuah area fundamental untuk memicu <em>re-accumulation phase</em> sebelum harga (produksi) meledak.
          </p>

          {/* Table 1 */}
          <div className="my-16 overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-100">
            <div className="bg-slate-900 p-6">
              <h4 className="text-white font-black uppercase tracking-widest m-0 text-sm flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-emerald-400" /> Tabel 1: Alokasi Anggaran Berdasarkan Program Utama
              </h4>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-[10px] font-black text-slate-500 uppercase tracking-widest">Program Utama</th>
                    <th className="px-6 py-4 text-left text-[10px] font-black text-slate-500 uppercase tracking-widest">Alokasi (Triliun)</th>
                    <th className="px-6 py-4 text-left text-[10px] font-black text-slate-500 uppercase tracking-widest">Sasaran Strategis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-6 py-4 text-sm font-bold text-slate-900">Ketersediaan & Konsumsi Pangan</td>
                    <td className="px-6 py-4 text-sm text-emerald-600 font-black">Rp23,81</td>
                    <td className="px-6 py-4 text-xs text-slate-500">Swasembada padi, jagung, daging</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-bold text-slate-900">Dukungan Manajemen</td>
                    <td className="px-6 py-4 text-sm text-slate-600 font-black">Rp8,95</td>
                    <td className="px-6 py-4 text-xs text-slate-500">Reformasi birokrasi & tata kelola data</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-bold text-slate-900">Hilirisasi (Nilai Tambah)</td>
                    <td className="px-6 py-4 text-sm text-slate-600 font-black">Rp6,62</td>
                    <td className="px-6 py-4 text-xs text-slate-500">Pabrik pengolahan & logistik ekspor</td>
                  </tr>
                  <tr className="bg-emerald-50/30">
                    <td className="px-6 py-4 text-sm font-bold text-slate-900">SDM & Pelatihan Vokasi</td>
                    <td className="px-6 py-4 text-sm text-slate-600 font-black">Rp0,747</td>
                    <td className="px-6 py-4 text-xs text-slate-500">Brigade Pangan & Petani Milenial</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h3 className="text-2xl font-black text-slate-900 mt-16 mb-6 uppercase tracking-tight">II. Unit Kerja Eselon I: Pemetaan Likuiditas Infrastruktur</h3>
          <p className="mb-8">
            Distribusi anggaran per eselon I menunjukkan bahwa <strong>Ditjen Lahan dan Irigasi Pertanian</strong> menerima alokasi terbesar (Rp15,70 Triliun). Dalam terminologi SMC, ini adalah penempatan <em>Order Block</em> pada fondasi dasar produksi. Air dan lahan adalah <strong>High Probability Zone</strong> yang akan menentukan keberhasilan seluruh program lainnya.
          </p>

          {/* Table 2 Highlight */}
          <div className="grid md:grid-cols-2 gap-6 my-12">
            <div className="bg-emerald-950 p-8 rounded-[2.5rem] text-white shadow-2xl">
              <h5 className="text-emerald-400 font-black uppercase tracking-widest text-xs mb-4">Top Priority Unit</h5>
              <div className="text-4xl font-black mb-2 tracking-tighter">Rp15,70 T</div>
              <div className="font-bold text-lg mb-4 leading-tight uppercase">Ditjen Lahan & Irigasi</div>
              <p className="text-emerald-100/60 text-sm leading-relaxed">
                Fokus utama pada Cetak Sawah Rakyat (CSR) dan rehabilitasi irigasi masif. Ini adalah infrastruktur hulu yang akan mengganti kehilangan lahan di Pulau Jawa.
              </p>
            </div>
            <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-2xl">
              <h5 className="text-blue-400 font-black uppercase tracking-widest text-xs mb-4">Technology & R&D</h5>
              <div className="text-4xl font-black mb-2 tracking-tighter">Rp1,51 T</div>
              <div className="font-bold text-lg mb-4 leading-tight uppercase">Badan Riset & Modernisasi</div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Implementasi Smart Farming 4.0, sensor tanah, dan teknologi drone untuk memastikan efisiensi di setiap titik lahan produksi.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-black text-slate-900 mt-24 mb-8 flex items-center gap-3 uppercase tracking-tighter italic">
            <Globe className="text-emerald-600" /> III. Peta Jalan Swasembada: Demand Fulfillment
          </h2>
          <p className="mb-10">
            Target produksi beras sebesar <strong>34,77 juta ton</strong> pada tahun 2026 merupakan sebuah pernyataan kekuatan (Statement of Strength) kepada pasar global. Dengan stok awal sebesar 12,53 juta ton, pemerintah memiliki <em>supply buffer</em> yang cukup kuat untuk menjaga stabilitas psikologi konsumen dari gejolak harga.
          </p>

          {/* Target Production List */}
          <div className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-8 md:p-12 mb-16">
            <h4 className="font-black text-slate-900 uppercase tracking-widest text-center mb-10">Target Produksi Strategis 2026</h4>
            <div className="space-y-6">
              {[
                { label: 'Beras', val: '34,77 Juta Ton', desc: 'Target Swasembada Berkelanjutan', color: 'bg-emerald-600' },
                { label: 'Jagung', val: '16-18 Juta Ton', desc: 'Pemenuhan Pakan Ternak Mandiri', color: 'bg-blue-600' },
                { label: 'Daging Sapi', val: '514.000 Ton', desc: 'Reduksi Impor Daging Beku', color: 'bg-rose-600' },
                { label: 'Tebu', val: '39-44 Juta Ton', desc: 'Fondasi Gula Nasional 2027', color: 'bg-amber-600' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-12 rounded-full ${item.color}`}></div>
                    <div>
                      <div className="text-lg font-black text-slate-900 tracking-tight">{item.label}</div>
                      <div className="text-xs text-slate-400 font-bold uppercase">{item.desc}</div>
                    </div>
                  </div>
                  <div className="text-2xl font-black text-slate-800 tracking-tighter md:text-right">{item.val}</div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-3xl font-black text-slate-900 mt-24 mb-8 flex items-center gap-3 uppercase tracking-tighter">
            <Zap className="text-amber-500" /> IV. Brigade Pangan: Market Structure Shift (Regenerasi)
          </h2>
          <p className="mb-8">
            Program Brigade Pangan adalah inisiatif paling transformatif untuk membalikkan tren <em>aging farmers</em> (penuaan petani). Secara strategis, ini adalah upaya mengubah "Retailer" (petani kecil tradisional) menjadi "Institutional Players" (korporasi petani milenial).
          </p>
          <div className="bg-amber-50 border-l-8 border-amber-500 p-10 my-12 rounded-r-[2.5rem] shadow-xl shadow-amber-100/50">
            <div className="flex items-center gap-4 mb-6 text-amber-600">
              <Users className="w-8 h-8" />
              <h4 className="font-black text-xl m-0 uppercase tracking-tight">Kriteria Utama Brigade Pangan</h4>
            </div>
            <ul className="list-none p-0 m-0 space-y-4 text-slate-700 font-medium">
              <li className="flex gap-4">
                <span className="text-amber-500 font-black">01.</span>
                <span><strong>Usia Produktif:</strong> 17 - 39 tahun untuk memastikan adaptasi teknologi cepat.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-amber-500 font-black">02.</span>
                <span><strong>Unit Korporasi:</strong> 15 orang per kelompok mengelola lahan seluas 200 hektar.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-amber-500 font-black">03.</span>
                <span><strong>Insentif Ekonomi:</strong> Potensi penghasilan bersih Rp10 Juta per bulan per anggota.</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-black text-slate-900 mt-24 mb-8 flex items-center gap-3 uppercase tracking-tighter">
            <ShieldCheck className="text-emerald-600" /> V. Sistem Proteksi: Risk Management & Stop Loss
          </h2>
          <p className="mb-10 text-slate-600">
            Sebagai pengelola risiko nasional, pemerintah menyediakan instrumen "Stop Loss" melalui <strong>AUTP (Asuransi Usaha Tani Padi)</strong>. Dengan premi hanya <strong>Rp36.000/Ha</strong> (subsidi 80%), petani terlindungi dari kerugian total akibat volatilitas cuaca ekstrem.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200">
              <h5 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
                <Wallet className="w-4 h-4 text-emerald-600" /> KUR Pertanian 2026
              </h5>
              <div className="text-5xl font-black text-emerald-600 mb-2 tracking-tighter">6% FLAT</div>
              <p className="text-sm text-slate-500 font-bold mb-4 uppercase">Bunga Kredit Usaha Rakyat</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Plafon nasional Rp300 Triliun khusus sektor agraris untuk memastikan likuiditas modal di tingkat desa tetap terjaga tanpa agunan tambahan untuk pinjaman di bawah Rp100 juta.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200">
              <h5 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-600" /> Pupuk Bersubsidi
              </h5>
              <div className="text-5xl font-black text-blue-600 mb-2 tracking-tighter">i-Pubers</div>
              <p className="text-sm text-slate-500 font-bold mb-4 uppercase">Sistem Distribusi Berbasis KTP</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Menutup celah manipulasi stok dengan integrasi data e-RDKK secara digital. Stok nasional 1,04 juta ton disiapkan untuk mengamankan masa tanam pertama 2026.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-black text-slate-900 mt-24 mb-8 uppercase tracking-tighter italic">VI. Kesimpulan: Sinergi Menuju Kedaulatan Berkelanjutan</h2>
          <p className="mb-8 leading-relaxed">
            Program kerja Kementerian Pertanian tahun 2026 secara keseluruhan menggambarkan sebuah upaya sistematis dan masif untuk mengubah wajah pertanian Indonesia dari sektor tradisional menjadi sektor industri yang modern, berdaya saing, dan berkeadilan. Keberhasilan program ini akan sangat bergantung pada konsistensi implementasi di lapangan dan sinergi antara kebijakan pusat dan daerah.
          </p>

          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-10 rounded-[3rem] text-white shadow-2xl mt-16 text-center">
            <h3 className="text-2xl font-black uppercase mb-4 tracking-tight">Kedaulatan Pangan Adalah Harga Mati</h3>
            <p className="text-emerald-50 opacity-90 leading-relaxed mb-0">
              Dengan fondasi infrastruktur di timur Indonesia yang semakin mantap dan regenerasi Brigade Pangan yang berjalan, Indonesia berada di jalur yang benar untuk tidak hanya mencapai swasembada pangan, tetapi juga menjadi pemain kunci dalam stabilitas pangan dunia di masa depan.
            </p>
          </div>
        </div>

        {/* Action Footer */}
        <div className="mt-24 pt-10 border-t border-slate-100">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-black rounded-2xl hover:bg-slate-800 transition-all uppercase tracking-widest text-xs group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Kembali ke Beranda
            </Link>
            <button className="px-8 py-4 bg-emerald-100 text-emerald-700 font-black rounded-2xl hover:bg-emerald-200 transition-all uppercase tracking-widest text-xs">
              Unduh Laporan Lengkap (.PDF)
            </button>
          </div>
          <p className="mt-12 text-center text-slate-300 text-[10px] font-bold uppercase tracking-[0.2em]">
            © 2026 Strategi Nasional Pangan - Analisis Kebijakan Sektor Agraria Indonesia
          </p>
        </div>
      </div>
    </article>
    </>
  );
}
