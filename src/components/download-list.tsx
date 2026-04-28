"use client";

import { useState, useMemo } from "react";
import { Download, Search } from "lucide-react";

interface FileItem {
  name: string;
  path: string;
  category: "dasar" | "pengembangan" | "autoproject";
  desc: string;
  hot?: boolean;
}

const files: FileItem[] = [
  // Dasar Pertanian
  { name: "Checklist Irigasi dan Manajemen Air.docx", path: "/downloads/dasar/Checklist Irigasi dan Manajemen Air.docx", category: "dasar", desc: "Panduan lengkap sistem irigasi" },
  { name: "SOP 01 Rencana Tanam dan Kalender Musim.docx", path: "/downloads/dasar/SOP 01 Rencana Tanam dan Kalender Musim.docx", category: "dasar", desc: "Perencanaan musim tanam optimal" },
  { name: "SOP 12 Pemupukan Susulan 4R.docx", path: "/downloads/dasar/SOP 12 Pemupukan Susulan 4R.docx", category: "dasar", desc: "Teknik pemupukan 4R yang efisien" },
  { name: "Checklist Panen dan SerahTerima.docx", path: "/downloads/dasar/Checklist Panen dan SerahTerima.docx", category: "dasar", desc: "Prosedur panen dan quality control" },
  { name: "SOP 15 Pascapanen QC Grading Packing Pengiriman.docx", path: "/downloads/dasar/SOP 15 Pascapanen QC Grading Packing Pengiriman.docx", category: "dasar", desc: "Standar pascapanen profesional", hot: true },
  { name: "Checklist Pembagian Tugas PIC dan Backup.docx", path: "/downloads/dasar/Checklist Pembagian Tugas PIC dan Backup.docx", category: "dasar", desc: "Manajemen tim operasional" },
  { name: "SOP 17 Evaluasi KPI Mingguan dan Rencana Kerja.docx", path: "/downloads/dasar/SOP 17 Evaluasi KPI Mingguan dan Rencana Kerja.docx", category: "dasar", desc: "Monitoring performa mingguan" },
  { name: "Checklist RAB dan Pencatatan Biaya.docx", path: "/downloads/dasar/Checklist RAB dan Pencatatan Biaya.docx", category: "dasar", desc: "Rencana Anggaran Biaya per siklus" },
  { name: "SOP 09 Irigasi dan Manajemen Air.docx", path: "/downloads/dasar/SOP 09 Irigasi dan Manajemen Air.docx", category: "dasar", desc: "Sistem pengairan yang efektif" },
  { name: "Checklist K3 APD dan Bahan Kimia.docx", path: "/downloads/dasar/Checklist K3 APD dan Bahan Kimia.docx", category: "dasar", desc: "Kesehatan & keselamatan kerja" },
  { name: "SOP 11 Pengendalian OPT PHT IPM.docx", path: "/downloads/dasar/SOP 11 Pengendalian OPT PHT IPM.docx", category: "dasar", desc: "Pengendalian hama terpadu" },
  { name: "Checklist Manajemen Persediaan dan Gudang.docx", path: "/downloads/dasar/Checklist Manajemen Persediaan dan Gudang.docx", category: "dasar", desc: "Inventory management sistem" },
  { name: "Roadmap Praktis Mulai Pertanian Dari Nol.docx", path: "/downloads/dasar/Roadmap Praktis Mulai Pertanian Dari Nol.docx", category: "dasar", desc: "Panduan komprehensif pemula", hot: true },
  { name: "Checklist Cuaca Ekstrem Playbook.docx", path: "/downloads/dasar/Checklist Cuaca Ekstrem Playbook.docx", category: "dasar", desc: "Antisipasi cuaca ekstrem" },
  { name: "SOP 20 QC Batch dan Release Pengiriman.docx", path: "/downloads/dasar/SOP 20 QC Batch dan Release Pengiriman.docx", category: "dasar", desc: "Quality control sebelum kirim" },
  // Pengembangan Bisnis
  { name: "SOP 25 Pemasaran dan Penjualan Pilih Channel ScaleUp.docx", path: "/downloads/pengembangan/SOP 25 Pemasaran dan Penjualan Pilih Channel ScaleUp.docx", category: "pengembangan", desc: "Strategi marketing multi-channel", hot: true },
  { name: "SOP 30 Manajemen Relasi Buyer CRM Retensi.docx", path: "/downloads/pengembangan/SOP 30 Manajemen Relasi Buyer CRM Retensi.docx", category: "pengembangan", desc: "Customer relationship management" },
  { name: "SOP 23 Penetapan Harga Minimum HPP Margin HargaNet.docx", path: "/downloads/pengembangan/SOP 23 Penetapan Harga Minimum HPP Margin HargaNet.docx", category: "pengembangan", desc: "Perhitungan harga jual optimal" },
  { name: "SOP 34 Sistem Data dan Dashboard Operasional.docx", path: "/downloads/pengembangan/SOP 34 Sistem Data dan Dashboard Operasional.docx", category: "pengembangan", desc: "Dashboard bisnis digital" },
  { name: "SOP 35 Sistem Tim dan SDM.docx", path: "/downloads/pengembangan/SOP 35 Sistem Tim dan SDM.docx", category: "pengembangan", desc: "Manajemen sumber daya manusia" },
  { name: "SOP 24 Kontrak Supply Rutin Volume Stabil.docx", path: "/downloads/pengembangan/SOP 24 Kontrak Supply Rutin Volume Stabil.docx", category: "pengembangan", desc: "Template kontrak supplier" },
  { name: "SOP 27 Kemasan Premium dan Labeling.docx", path: "/downloads/pengembangan/SOP 27 Kemasan Premium dan Labeling.docx", category: "pengembangan", desc: "Design kemasan profesional", hot: true },
  { name: "SOP 28 Produk Olahan Value Added.docx", path: "/downloads/pengembangan/SOP 28 Produk Olahan Value Added.docx", category: "pengembangan", desc: "Diversifikasi produk olahan" },
  { name: "SOP 26 Diversifikasi Cerdas Komoditas Waktu Channel.docx", path: "/downloads/pengembangan/SOP 26 Diversifikasi Cerdas Komoditas Waktu Channel.docx", category: "pengembangan", desc: "Strategi diversifikasi bisnis" },
  { name: "SOP 29 Branding Praktis Katalog Konten BuktiMutu.docx", path: "/downloads/pengembangan/SOP 29 Branding Praktis Katalog Konten BuktiMutu.docx", category: "pengembangan", desc: "Membangun brand awareness" },
  // Auto Project
  { name: "!Link Google DATABASE KARYAWAN.pdf", path: "/downloads/autoproject/!Link Google DATABASE KARYAWAN.pdf", category: "autoproject", desc: "Template database karyawan online" },
];

const kategori = [
  { id: "semua" as const, label: "Semua" },
  { id: "dasar" as const, label: "Dasar Pertanian" },
  { id: "pengembangan" as const, label: "Pengembangan Bisnis" },
  { id: "autoproject" as const, label: "Auto Project" },
];

const badgeStyles: Record<FileItem["category"], { bg: string; text: string; label: string }> = {
  dasar: { bg: "bg-primary-50", text: "text-primary-700", label: "Dasar" },
  pengembangan: { bg: "bg-blue-50", text: "text-blue-700", label: "Bisnis" },
  autoproject: { bg: "bg-violet-50", text: "text-violet-700", label: "Auto Project" },
};

const cardIconBg: Record<FileItem["category"], string> = {
  dasar: "bg-primary-50",
  pengembangan: "bg-blue-50",
  autoproject: "bg-violet-50",
};

const cardIconEmoji: Record<FileItem["category"], string> = {
  dasar: "📋",
  pengembangan: "💼",
  autoproject: "🤖",
};

function fileFormat(name: string): {
  label: "PDF" | "DOCX" | "XLSX" | "FILE";
  icon: string;
  bg: string;
  text: string;
} {
  const ext = name.toLowerCase().split(".").pop();
  if (ext === "pdf")
    return {
      label: "PDF",
      icon: "📄",
      bg: "bg-red-50",
      text: "text-red-700",
    };
  if (ext === "docx" || ext === "doc")
    return {
      label: "DOCX",
      icon: "📝",
      bg: "bg-blue-50",
      text: "text-blue-700",
    };
  if (ext === "xlsx" || ext === "xls")
    return {
      label: "XLSX",
      icon: "📊",
      bg: "bg-primary-50",
      text: "text-primary-700",
    };
  return { label: "FILE", icon: "📁", bg: "bg-gray-100", text: "text-gray-700" };
}

const heroStats = [
  { v: `${files.length}+`, l: "Template & SOP", s: "Ready to download", ic: "📁" },
  { v: "100%", l: "Gratis / Free", s: "No registration needed", ic: "🎁" },
  { v: "3", l: "Kategori", s: "Dasar, Bisnis, Auto", ic: "🗂️" },
  { v: "DOCX/PDF", l: "Format", s: "Easy to edit & share", ic: "📄" },
];

const trustBadges = [
  ["✅", "100% Gratis / Free"],
  ["📄", "Format DOCX & PDF"],
  ["⚡", "Siap Edit & Pakai"],
  ["🌏", "Bilingual Available"],
];

export function DownloadList() {
  const [activeKat, setActiveKat] = useState<typeof kategori[number]["id"]>("semua");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return files.filter((f) => {
      const matchKat = activeKat === "semua" || f.category === activeKat;
      const q = search.toLowerCase();
      const matchSearch =
        q === "" ||
        f.name.toLowerCase().includes(q) ||
        f.desc.toLowerCase().includes(q);
      return matchKat && matchSearch;
    });
  }, [activeKat, search]);

  const counts = useMemo(() => {
    const c: Record<string, number> = { semua: files.length };
    for (const f of files) c[f.category] = (c[f.category] ?? 0) + 1;
    return c;
  }, []);

  return (
    <>
      {/* Hero — dark green */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-950 to-primary-900 px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 20% 60%, rgba(22,163,74,0.2) 0%, transparent 55%), radial-gradient(ellipse at 80% 30%, rgba(22,163,74,0.1) 0%, transparent 45%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary-400 mb-3">
              Download Center · Pusat Unduhan
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-black text-white leading-[1.1] tracking-tight mb-4">
              Template &amp; Panduan
              <br />
              <span className="text-primary-400">Agribisnis Siap Pakai</span>
            </h1>
            <p className="text-base text-white/70 leading-relaxed mb-2">
              {files.length}+ template SOP, checklist, dan panduan praktis untuk
              agribisnis Anda. Semua gratis, format DOCX &amp; PDF, siap edit
              &amp; pakai.
            </p>
            <p className="text-sm text-white/40 italic leading-relaxed mb-7">
              Free templates, SOPs &amp; practical guides for your agribusiness.
              Ready to use in DOCX &amp; PDF format.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {trustBadges.map(([ic, lb]) => (
                <div
                  key={lb}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white/[0.08] border border-white/[0.12] rounded-full text-xs font-semibold text-white/85"
                >
                  <span>{ic}</span> {lb}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {heroStats.map((s) => (
              <div
                key={s.l}
                className="px-5 py-6 bg-white/[0.07] border border-white/10 rounded-2xl backdrop-blur"
              >
                <div className="text-2xl mb-2">{s.ic}</div>
                <div className="text-xl lg:text-[1.8rem] font-black text-primary-400 mb-1 tracking-tight">
                  {s.v}
                </div>
                <p className="text-xs font-bold text-white">{s.l}</p>
                <p className="text-[11px] text-white/40 leading-relaxed">
                  {s.s}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky filter + search */}
      <section className="sticky top-16 z-20 bg-white border-b border-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 flex-wrap">
          <div className="flex gap-1 flex-1 overflow-x-auto scrollbar-thin">
            {kategori.map((k) => {
              const isActive = activeKat === k.id;
              return (
                <button
                  key={k.id}
                  onClick={() => setActiveKat(k.id)}
                  className={`px-4 py-4 inline-flex items-center gap-2 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${
                    isActive
                      ? "text-primary-600 border-primary-600"
                      : "text-gray-500 border-transparent hover:text-gray-700"
                  }`}
                >
                  {k.label}
                  <span
                    className={`px-2 py-0.5 text-[11px] font-bold rounded-full ${
                      isActive
                        ? "bg-primary-50 text-primary-700"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {counts[k.id] ?? 0}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="relative my-2 min-w-[180px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Cari file..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 w-full text-sm border border-gray-200 rounded-lg outline-none focus:border-primary-600 transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Files grid */}
      <section className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-12 pb-16">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <div className="text-5xl mb-4">🔍</div>
              <p>Tidak ada file yang sesuai pencarian.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((f) => {
                const fmt = fileFormat(f.name);
                const badge = badgeStyles[f.category];
                return (
                  <div
                    key={f.path}
                    className="relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary-100 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-0.5 transition-all flex flex-col gap-3"
                  >
                    {f.hot && (
                      <span className="absolute top-3.5 right-3.5 px-2.5 py-0.5 bg-amber-100 text-amber-800 text-[10px] font-bold rounded-full">
                        🔥 POPULER
                      </span>
                    )}
                    <div className="flex items-start gap-3.5">
                      <div
                        className={`w-11 h-11 shrink-0 rounded-xl flex items-center justify-center text-xl ${cardIconBg[f.category]}`}
                      >
                        {cardIconEmoji[f.category]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                          <span
                            className={`px-2 py-0.5 text-[10px] font-bold rounded ${badge.bg} ${badge.text}`}
                          >
                            {badge.label}
                          </span>
                          <span
                            className={`px-2 py-0.5 text-[10px] font-bold rounded ${fmt.bg} ${fmt.text}`}
                          >
                            {fmt.icon} {fmt.label}
                          </span>
                        </div>
                        <h3 className="text-sm font-bold text-gray-900 leading-snug mb-1 line-clamp-2">
                          {f.name.replace(/\.(docx|pdf|xlsx)$/i, "")}
                        </h3>
                        <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                          {f.desc}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-gray-50">
                      <span className="text-[11px] text-gray-400">📦 Free</span>
                      <a
                        href={f.path}
                        download
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-gradient-to-br from-primary-600 to-primary-700 text-white text-xs font-bold rounded-lg shadow-md shadow-primary-600/20 hover:shadow-lg transition-all"
                      >
                        <Download className="w-3.5 h-3.5" /> Download
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Request template CTA */}
      <section className="bg-white border-t border-gray-100 px-4 sm:px-6 lg:px-8 py-14">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-4xl">📩</span>
          <h2 className="text-2xl sm:text-[1.9rem] font-black text-gray-900 tracking-tight mt-3.5 mb-3">
            Tidak Menemukan Template yang Dicari?
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-1.5">
            Request template atau panduan khusus sesuai kebutuhan agribisnis
            Anda. Kami akan membuatkannya!
          </p>
          <p className="text-xs text-gray-400 italic leading-relaxed mb-7">
            Can&apos;t find what you need? Request a custom template — we&apos;ll
            create it for you.
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            <a
              href="/kontak?subject=request-template"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white text-sm font-bold rounded-xl hover:bg-primary-700 transition-colors"
            >
              📩 Request Template
            </a>
            <a
              href={`https://wa.me/6285228003820?text=${encodeURIComponent("Halo, saya butuh template/panduan khusus untuk agribisnis. Bisa dibantu?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 text-sm font-semibold rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              💬 WhatsApp Kami
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
