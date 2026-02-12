"use client";

import { useState } from "react";
import {
  Download,
  FileText,
  Folder,
  Search,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

type Category = "dasar" | "pengembangan" | "autoproject" | "all";

const categories = [
  { id: "all" as Category, name: "Semua", color: "bg-gray-100 text-gray-700" },
  { id: "dasar" as Category, name: "Dasar Pertanian", color: "bg-green-100 text-green-700" },
  { id: "pengembangan" as Category, name: "Pengembangan Bisnis", color: "bg-blue-100 text-blue-700" },
  { id: "autoproject" as Category, name: "Auto Project", color: "bg-purple-100 text-purple-700" },
];

const files = [
  // Dasar - Popular files
  { name: "Checklist Irigasi dan Manajemen Air.docx", category: "dasar", desc: "Panduan lengkap sistem irigasi" },
  { name: "SOP 01 Rencana Tanam dan Kalender Musim.docx", category: "dasar", desc: "Perencanaan musim tanam optimal" },
  { name: "SOP 12 Pemupukan Susulan 4R.docx", category: "dasar", desc: "Teknik pemupukan 4R yang efisien" },
  { name: "Checklist Panen dan SerahTerima.docx", category: "dasar", desc: "Prosedur panen dan quality control" },
  { name: "SOP 15 Pascapanen QC Grading Packing Pengiriman.docx", category: "dasar", desc: "Standar pascapanen profesional" },
  { name: "Checklist Pembagian Tugas PIC dan Backup.docx", category: "dasar", desc: "Manajemen tim operasional" },
  { name: "SOP 17 Evaluasi KPI Mingguan dan Rencana Kerja.docx", category: "dasar", desc: "Monitoring performa mingguan" },
  { name: "Checklist RAB dan Pencatatan Biaya.docx", category: "dasar", desc: "Rencana Anggaran Biaya per siklus" },
  { name: "SOP 09 Irigasi dan Manajemen Air.docx", category: "dasar", desc: "Sistem pengairan yang efektif" },
  { name: "Checklist K3 APD dan Bahan Kimia.docx", category: "dasar", desc: "Kesehatan & keselamatan kerja" },
  { name: "SOP 11 Pengendalian OPT PHT IPM.docx", category: "dasar", desc: "Pengendalian hama terpadu" },
  { name: "Checklist Manajemen Persediaan dan Gudang.docx", category: "dasar", desc: "Inventory management sistem" },
  { name: "Roadmap Praktis Mulai Pertanian Dari Nol.docx", category: "dasar", desc: "Panduan komprehensif pemula" },
  { name: "Checklist Cuaca Ekstrem Playbook.docx", category: "dasar", desc: "Antisipasi cuaca ekstrem" },
  { name: "SOP 20 QC Batch dan Release Pengiriman.docx", category: "dasar", desc: "Quality control sebelum kirim" },
  
  // Pengembangan - Business docs  
  { name: "SOP 25 Pemasaran dan Penjualan Pilih Channel ScaleUp.docx", category: "pengembangan", desc: "Strategi marketing multi-channel" },
  { name: "SOP 30 Manajemen Relasi Buyer CRM Retensi.docx", category: "pengembangan", desc: "Customer relationship management" },
  { name: "SOP 23 Penetapan Harga Minimum HPP Margin HargaNet.docx", category: "pengembangan", desc: "Perhitungan harga jual optimal" },
  { name: "SOP 34 Sistem Data dan Dashboard Operasional.docx", category: "pengembangan", desc: "Dashboard bisnis digital" },
  { name: "SOP 35 Sistem Tim dan SDM.docx", category: "pengembangan", desc: "Manajemen sumber daya manusia" },
  { name: "SOP 24 Kontrak Supply Rutin Volume Stabil.docx", category: "pengembangan", desc: "Template kontrak supplier" },
  { name: "SOP 27 Kemasan Premium dan Labeling.docx", category: "pengembangan", desc: "Design kemasan profesional" },
  { name: "SOP 28 Produk Olahan Value Added.docx", category: "pengembangan", desc: "Diversifikasi produk olahan" },
  { name: "SOP 26 Diversifikasi Cerdas Komoditas Waktu Channel.docx", category: "pengembangan", desc: "Strategi diversifikasi bisnis" },
  { name: "SOP 29 Branding Praktis Katalog Konten BuktiMutu.docx", category: "pengembangan", desc: "Membangun brand awareness" },
  
  // Auto Project - Digital automation
  { name: "!Link Google DATABASE KARYAWAN.pdf", category: "autoproject", desc: "Template database karyawan online" },
];

export default function DownloadPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFiles = files.filter(file => {
    const matchCategory = activeCategory === "all" || file.category === activeCategory;
    const matchSearch = file.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       file.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const getCategoryStats = (cat: Category) => {
    if (cat === "all") return files.length;
    return files.filter(f => f.category === cat).length;
  };

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-800/60 border border-primary-700/50 rounded-full mb-6">
              <Download className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-primary-200 font-medium">
                Download Center
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Download Template & Panduan
            </h1>
            <p className="mt-4 text-lg text-primary-100/80 leading-relaxed">
              Akses 185+ template SOP, checklist, dan panduan praktis untuk agribisnis Anda.
              Semua gratis dan siap pakai!
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-primary-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>100% Gratis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>Format .DOCX & .PDF</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>Siap Edit & Pakai</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter & Search */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    activeCategory === cat.id
                      ? "bg-primary-600 text-white shadow-md"
                      : cat.color + " hover:shadow-sm"
                  }`}
                >
                  {cat.name}
                  <span className="ml-2 text-xs opacity-75">
                    ({getCategoryStats(cat.id)})
                  </span>
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Cari file..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Files Grid */}
      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFiles.length === 0 ? (
            <div className="text-center py-16">
              <Folder className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Tidak ada file yang cocok dengan pencarian</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFiles.map((file, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-primary-200 transition-all group"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5 text-primary-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className={`inline-block px-2 py-0.5 text-xs font-semibold rounded mb-1 ${
                        file.category === "dasar" ? "bg-green-100 text-green-700" :
                        file.category === "pengembangan" ? "bg-blue-100 text-blue-700" :
                        "bg-purple-100 text-purple-700"
                      }`}>
                        {file.category === "dasar" ? "Dasar" : 
                         file.category === "pengembangan" ? "Pengembangan" : "Auto Project"}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-gray-900 text-sm mb-1.5 line-clamp-2 group-hover:text-primary-700 transition-colors">
                    {file.name.replace('.docx', '').replace('.pdf', '')}
                  </h3>
                  <p className="text-xs text-gray-500 mb-4 line-clamp-2">
                    {file.desc}
                  </p>

                  <a
                    href={`/downloads/${file.category}/${file.name}`}
                    download
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 text-white text-sm font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                </div>
              ))}
            </div>
          )}

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 mb-4">
              File lebih lengkap tersedia di kategori masing-masing
            </p>
            <a
              href="/pusat-ilmu"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors"
            >
              Lihat Pusat Ilmu
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
