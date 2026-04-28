"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, MessageCircle, Phone, Mail } from "lucide-react";

interface ServiceStat {
  v: string;
  l: string;
  s: string;
}

interface Service {
  id: string;
  icon: string;
  title: string;
  en: string;
  color: string;
  border: string;
  tcolor: string;
  tagColor: string;
  desc: string;
  descEn: string;
  features: string[];
  stats: ServiceStat[];
}

const services: Service[] = [
  {
    id: "rempah",
    icon: "🫚",
    title: "Pengolahan Rempah",
    en: "Spice Processing & Export",
    color: "#fff7ed",
    border: "#fed7aa",
    tcolor: "#9a3412",
    tagColor: "#ea580c",
    desc: "Sortasi, pengeringan, grading, dan pengemasan rempah (jahe, kunyit, lada, kencur, temulawak) untuk pasar lokal maupun ekspor internasional. Standar ekspor terjamin.",
    descEn:
      "Full-service spice processing: sorting, drying, grading & vacuum packaging of ginger, turmeric, pepper, and other Indonesian spices. Export-grade quality guaranteed for international buyers.",
    features: [
      "Sortasi & grading manual & mekanis",
      "Pengeringan solar dryer & oven",
      "Pengemasan vacuum & retail-ready",
      "Standar ekspor (moisture ≤12%)",
      "Dokumen & sertifikasi ekspor",
      "Jahe merah, kunyit, lada, kencur, temulawak",
    ],
    stats: [
      { v: "Export", l: "Grade", s: "International standards" },
      { v: "≤12%", l: "Moisture", s: "Guaranteed dry content" },
      { v: "6+", l: "Spice Types", s: "Varieties processed" },
    ],
  },
  {
    id: "komoditas",
    icon: "🌾",
    title: "Jual Beli Multi-Komoditas",
    en: "Multi-Commodity Trading",
    color: "#fffbeb",
    border: "#fde68a",
    tcolor: "#78350f",
    tagColor: "#b45309",
    desc: "Pembelian dan penjualan berbagai komoditas pertanian: gabah, jagung, jahe, kunyit, lada, kopi, dan hasil bumi lainnya. Langsung dari petani ke buyer dengan harga kompetitif.",
    descEn:
      "Direct procurement and trading of multiple agricultural commodities: paddy, corn, ginger, turmeric, pepper, coffee, and more. Farm-to-buyer supply chain with competitive FOB pricing.",
    features: [
      "Gabah, jagung, & hasil bumi",
      "Rempah segar & kering (jahe, kunyit, lada)",
      "Kopi & kakao green bean",
      "Pembayaran tepat waktu & kompetitif",
      "FOB pricing untuk buyer ekspor",
      "Jaringan petani mitra aktif 100+",
    ],
    stats: [
      { v: "8+", l: "Komoditas", s: "Multi-commodity sourcing" },
      { v: "100+", l: "Petani Mitra", s: "Active farmer partners" },
      { v: "FOB", l: "Pricing", s: "Export pricing available" },
    ],
  },
  {
    id: "maklon",
    icon: "⚙️",
    title: "Jasa Maklon",
    en: "Contract Milling Service",
    color: "#f0fdf4",
    border: "#bbf7d0",
    tcolor: "#14532d",
    tagColor: "#16a34a",
    desc: "Layanan penggilingan gabah menjadi beras berkualitas dengan standar Bulog. Transparan, profesional, dan kapasitas besar.",
    descEn:
      "Contract rice milling service converting paddy to premium quality rice meeting Bulog standards. Transparent pricing, professional handling, large-scale capacity.",
    features: [
      "Penggilingan gabah basah & kering",
      "Standar kualitas sesuai aturan Bulog",
      "Kapasitas produksi skala besar",
      "Rendemen optimal dengan mesin modern",
      "Biaya maklon transparan & kompetitif",
      "Nota & dokumentasi lengkap via PadiDoc",
    ],
    stats: [
      { v: "500+", l: "Ton/Bulan", s: "Processing capacity" },
      { v: "95%", l: "Rendemen", s: "Average yield rate" },
      { v: "24h", l: "Turnaround", s: "Avg processing time" },
    ],
  },
  {
    id: "saprotan",
    icon: "📦",
    title: "Sarana Produksi",
    en: "Agricultural Inputs",
    color: "#ecfdf5",
    border: "#a7f3d0",
    tcolor: "#065f46",
    tagColor: "#059669",
    desc: "Penyediaan pupuk, benih unggul bersertifikat, dan pestisida resmi untuk mendukung produktivitas pertanian petani mitra.",
    descEn:
      "Supply of certified seeds, fertilizers, and registered pesticides to support our farmer partners and independent buyers.",
    features: [
      "Pupuk organik & anorganik berkualitas",
      "Benih padi unggul bersertifikat",
      "Benih jagung hibrida & lokal",
      "Pestisida & herbisida terdaftar",
      "Harga terjangkau untuk petani mitra",
      "Konsultasi penggunaan & dosis",
    ],
    stats: [
      { v: "3+", l: "Input Types", s: "Seeds, fertilizer, pesticide" },
      { v: "Certified", l: "Quality", s: "All products registered" },
      { v: "Subsidi", l: "Friendly", s: "Competitive pricing" },
    ],
  },
];

const WA_NUMBER = "6285228003820";

export function LayananShowcase() {
  const [active, setActive] = useState(0);
  const s = services[active];
  const waText = encodeURIComponent(
    `Halo, saya tertarik dengan layanan ${s.title} (${s.en}). Mohon info lebih lanjut.`,
  );

  return (
    <div>
      {/* Hero — dark green */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-950 to-primary-900 px-4 sm:px-6 lg:px-8 pt-20 pb-20">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 30% 50%, rgba(22,163,74,0.2) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary-400 mb-5">
            Services · Layanan
          </p>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-black text-white leading-[1.1] tracking-tight mb-4">
                Layanan Agribisnis
                <br />
                <span className="text-primary-400">Global-Ready</span>
                <br />
                dari Jawa Tengah
              </h1>
              <p className="text-base text-white/70 leading-relaxed mb-2.5">
                Pengolahan rempah ekspor, perdagangan multi-komoditas, maklon
                penggilingan, hingga sarana produksi — semua dalam satu
                ekosistem agribisnis terintegrasi.
              </p>
              <p className="text-sm text-white/45 italic leading-relaxed mb-7">
                Spice processing, multi-commodity trading, contract milling
                &amp; agri-inputs — integrated agribusiness services for
                domestic and international markets.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/kontak"
                  className="px-6 py-3 bg-primary-600 text-white text-sm font-bold rounded-xl hover:bg-primary-700 transition-colors"
                >
                  Hubungi Kami
                </Link>
                <Link
                  href="/tentang"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white text-sm font-semibold rounded-xl border border-white/20 hover:bg-white/15 transition-colors"
                >
                  Tentang Perusahaan <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Service selector */}
            <div className="grid sm:grid-cols-2 gap-3">
              {services.map((sv, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={sv.id}
                    onClick={() => setActive(i)}
                    className="text-left p-5 rounded-2xl transition-all"
                    style={{
                      background: isActive
                        ? "rgba(255,255,255,0.15)"
                        : "rgba(255,255,255,0.05)",
                      border: isActive
                        ? "2px solid rgb(74,222,128)"
                        : "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <div className="text-2xl mb-2">{sv.icon}</div>
                    <p className="text-[13px] font-bold text-white mb-0.5">
                      {sv.title}
                    </p>
                    <p className="text-[11px] text-white/50 italic">{sv.en}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Service detail */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{s.icon}</span>
                <div>
                  <p
                    className="text-[11px] font-bold tracking-[0.15em] uppercase mb-1"
                    style={{ color: s.tagColor }}
                  >
                    {s.en}
                  </p>
                  <h2 className="text-2xl lg:text-[2.2rem] font-black text-gray-900 tracking-tight">
                    {s.title}
                  </h2>
                </div>
              </div>

              <p className="text-[15px] text-gray-700 leading-relaxed mb-3">
                {s.desc}
              </p>
              <p className="text-sm text-gray-400 italic leading-relaxed mb-8">
                {s.descEn}
              </p>

              <div className="grid grid-cols-3 gap-3 mb-9">
                {s.stats.map((st) => (
                  <div
                    key={st.l}
                    className="text-center px-3 py-4 rounded-xl"
                    style={{
                      background: s.color,
                      border: `1px solid ${s.border}`,
                    }}
                  >
                    <div
                      className="text-lg lg:text-2xl font-black mb-1 tracking-tight"
                      style={{ color: s.tagColor }}
                    >
                      {st.v}
                    </div>
                    <p className="text-xs font-bold text-gray-700 mb-0.5">
                      {st.l}
                    </p>
                    <p className="text-[10px] text-gray-400 leading-tight">
                      {st.s}
                    </p>
                  </div>
                ))}
              </div>

              <h3 className="text-sm font-bold text-gray-700 mb-4">
                Yang Kami Tawarkan / What We Offer:
              </h3>
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {s.features.map((f) => (
                  <li key={f} className="flex gap-2.5 items-start">
                    <span
                      className="mt-0.5 w-[18px] h-[18px] shrink-0 rounded-full flex items-center justify-center"
                      style={{
                        background: s.color,
                        border: `2px solid ${s.tagColor}`,
                      }}
                    >
                      <Check
                        className="w-2 h-2"
                        strokeWidth={3}
                        style={{ color: s.tagColor }}
                      />
                    </span>
                    <span className="text-sm text-gray-700 leading-relaxed">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sticky CTA card */}
            <div className="lg:sticky lg:top-20">
              <div
                className="rounded-3xl p-9 mb-5"
                style={{
                  background: s.color,
                  border: `2px solid ${s.border}`,
                }}
              >
                <h3
                  className="text-lg font-extrabold mb-2"
                  style={{ color: s.tcolor }}
                >
                  Tertarik dengan layanan ini?
                </h3>
                <p className="text-sm text-gray-500 italic mb-3">
                  Interested in this service?
                </p>
                <p className="text-sm text-gray-700 leading-relaxed mb-6">
                  Hubungi kami untuk konsultasi, penawaran harga, dan kerjasama
                  jangka panjang.
                </p>
                <div className="flex flex-col gap-2.5">
                  <Link
                    href="/kontak"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 text-white text-sm font-bold rounded-xl hover:opacity-90 transition-opacity"
                    style={{ background: s.tagColor }}
                  >
                    <Phone className="w-4 h-4" /> Hubungi Kami Sekarang
                  </Link>
                  <a
                    href={`https://wa.me/${WA_NUMBER}?text=${waText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-white text-gray-700 text-sm font-semibold rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </a>
                  <a
                    href={`mailto:info@cakrapamungkas.org?subject=${encodeURIComponent("Inquiry: " + s.title)}`}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-white text-gray-700 text-sm font-semibold rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <Mail className="w-4 h-4" /> Email Inquiry (EN/ID)
                  </a>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary-950 to-primary-900 rounded-2xl px-6 py-5 flex gap-4 items-center">
                <span className="text-2xl shrink-0">🌾</span>
                <div>
                  <p className="text-sm font-bold text-white mb-0.5">
                    Didukung oleh PadiDoc
                  </p>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Setiap transaksi terdokumentasi otomatis via sistem digital
                    kami.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All services */}
      <section className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary-600">
              Semua Layanan · All Services
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-black text-gray-900 tracking-tight mt-2">
              Solusi Lengkap Agribisnis
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((sv, i) => {
              const isActive = active === i;
              return (
                <button
                  key={sv.id}
                  onClick={() => {
                    setActive(i);
                    if (typeof window !== "undefined") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className="text-left p-7 bg-white rounded-2xl transition-all hover:-translate-y-1"
                  style={{
                    border: `1px solid ${isActive ? sv.border : "#f3f4f6"}`,
                    boxShadow: isActive
                      ? `0 4px 20px ${sv.tagColor}22`
                      : undefined,
                  }}
                >
                  <div className="text-4xl mb-4">{sv.icon}</div>
                  <p
                    className="text-[11px] font-bold tracking-[0.1em] uppercase mb-1.5"
                    style={{ color: sv.tagColor }}
                  >
                    {sv.en}
                  </p>
                  <h3 className="text-base font-extrabold text-gray-900 mb-2">
                    {sv.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {sv.desc.slice(0, 80)}…
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Export CTA */}
      <section className="bg-gradient-to-br from-primary-600 to-emerald-600 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-4xl mb-4">🌏</div>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-black text-white leading-tight tracking-tight mb-4">
            Looking for Indonesian Commodity Suppliers?
          </h2>
          <p className="text-white/85 leading-relaxed mb-2">
            Mencari pemasok komoditas pertanian Indonesia untuk ekspor?
          </p>
          <p className="text-sm text-white/70 leading-relaxed mb-8">
            We supply rice, corn, ginger, turmeric, pepper, and more — directly
            from farmers in Central Java, Indonesia. Competitive FOB pricing
            available.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hello, I'd like to send an export inquiry.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 bg-white text-primary-700 text-sm font-extrabold rounded-xl hover:opacity-90 transition-opacity"
            >
              Send Export Inquiry <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/komoditas"
              className="px-7 py-3 bg-white/15 text-white text-sm font-semibold rounded-xl border border-white/30 hover:bg-white/20 transition-colors"
            >
              Lihat Komoditas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
