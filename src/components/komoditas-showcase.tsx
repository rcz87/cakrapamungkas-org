"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle, FileText, Globe2 } from "lucide-react";

interface Spec {
  label: string;
  value: string;
  note: string;
}

interface Commodity {
  name: string;
  en: string;
  icon: string;
  bg: string;
  border: string;
  tc: string;
  tag: string;
  desc: string;
  descEn: string;
  specs: Spec[];
  variants: string[];
  markets: string[];
  exportReady: boolean;
}

const komods: Commodity[] = [
  {
    name: "Jahe & Rempah",
    en: "Ginger & Spices",
    icon: "🫚",
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
  },
  {
    name: "Kunyit & Temulawak",
    en: "Turmeric & Curcuma",
    icon: "🟡",
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
  },
  {
    name: "Lada & Cabai",
    en: "Pepper & Chili",
    icon: "🌶️",
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
  },
  {
    name: "Kopi & Kakao",
    en: "Coffee & Cacao",
    icon: "☕",
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
  },
  {
    name: "Porang",
    en: "Porang (Konjac)",
    icon: "🥔",
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
  },
  {
    name: "Jagung",
    en: "Corn / Maize",
    icon: "🌽",
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
  },
  {
    name: "Padi & Beras",
    en: "Paddy & Rice",
    icon: "🌾",
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
  },
];

const WA_NUMBER = "6285228003820";

export function KomoditasShowcase() {
  const [active, setActive] = useState(0);
  const k = komods[active];

  const waText = encodeURIComponent(
    `Halo, saya tertarik dengan komoditas ${k.name} (${k.en}). Mohon info lebih lanjut.`,
  );
  const waTextEn = encodeURIComponent(
    `Hello, I'm interested in ${k.en} (${k.name}). Please share more details.`,
  );

  return (
    <div>
      {/* Hero — dark */}
      <section
        className="relative overflow-hidden bg-[#0a0a0a] px-4 sm:px-6 lg:px-8 pt-16 pb-14"
      >
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none transition-all duration-500"
          style={{
            background: `radial-gradient(ellipse at 25% 60%, ${k.tag}22 0%, transparent 55%), radial-gradient(ellipse at 75% 30%, ${k.tag}11 0%, transparent 50%)`,
          }}
        />
        <div className="relative max-w-7xl mx-auto">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-6">
            Komoditas · Commodities
          </p>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-[3.2rem] font-black text-white leading-[1.1] tracking-tight mb-4">
                Rempah &amp; Hasil Bumi
                <br />
                <span style={{ color: k.tag }}>Indonesia</span>
                <br />
                untuk Dunia
              </h1>
              <p className="text-base text-white/60 leading-relaxed mb-2">
                Jahe, kunyit, lada, kopi — dan lebih banyak lagi. Kami
                menghubungkan petani lokal Jawa Tengah ke pasar domestik dan
                global dengan kualitas ekspor.
              </p>
              <p className="text-sm text-white/35 italic leading-relaxed mb-7">
                Ginger, turmeric, pepper, coffee &amp; more — connecting Central
                Java farmers to global markets with export-grade quality.
              </p>
              <div className="flex flex-wrap gap-2.5">
                <Link
                  href="/layanan"
                  className="px-5 py-3 text-white text-sm font-bold rounded-xl transition-opacity hover:opacity-90"
                  style={{ background: k.tag }}
                >
                  Lihat Layanan Kami
                </Link>
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${waTextEn}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 text-white text-sm font-semibold rounded-xl border border-white/15 hover:bg-white/15 transition-colors"
                >
                  Export Inquiry <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Selector */}
            <div className="grid grid-cols-3 gap-2.5">
              {komods.map((km, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={km.name}
                    onClick={() => setActive(i)}
                    className="px-3 py-4 rounded-2xl text-center transition-all"
                    style={{
                      background: isActive
                        ? `${km.tag}33`
                        : "rgba(255,255,255,0.04)",
                      border: isActive
                        ? `2px solid ${km.tag}`
                        : "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div className="text-2xl mb-1.5">{km.icon}</div>
                    <div
                      className="text-[11px] font-bold leading-tight"
                      style={{
                        color: isActive ? km.tag : "rgba(255,255,255,0.55)",
                      }}
                    >
                      {km.name}
                    </div>
                    {km.exportReady && (
                      <div className="text-[9px] text-emerald-400 font-bold mt-1">
                        EXPORT READY
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Detail */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
            {/* Left col (3/5) */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-4 mb-7">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0"
                  style={{
                    background: k.bg,
                    border: `2px solid ${k.border}`,
                  }}
                >
                  {k.icon}
                </div>
                <div>
                  <p
                    className="text-[11px] font-bold tracking-[0.15em] uppercase mb-1"
                    style={{ color: k.tag }}
                  >
                    {k.en}
                  </p>
                  <h2 className="text-2xl lg:text-3xl font-black text-gray-900 tracking-tight">
                    {k.name}
                  </h2>
                  {k.exportReady && (
                    <span className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-0.5 bg-primary-50 border border-primary-200 rounded-full text-[11px] font-bold text-primary-700">
                      🌏 Export Ready
                    </span>
                  )}
                </div>
              </div>

              <p className="text-[15px] text-gray-700 leading-relaxed mb-3">
                {k.desc}
              </p>
              <p className="text-sm text-gray-400 italic leading-relaxed pb-7 mb-9 border-b border-gray-100">
                {k.descEn}
              </p>

              {/* Specs */}
              <h3 className="text-xs font-bold tracking-[0.1em] uppercase text-gray-700 mb-4">
                Spesifikasi · Specifications
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-9">
                {k.specs.map((sp) => (
                  <div
                    key={sp.label}
                    className="text-center px-3 py-4 rounded-xl"
                    style={{
                      background: k.bg,
                      border: `1px solid ${k.border}`,
                    }}
                  >
                    <div
                      className="text-lg lg:text-xl font-black mb-1 tracking-tight"
                      style={{ color: k.tag }}
                    >
                      {sp.value}
                    </div>
                    <div className="text-[11px] font-bold text-gray-700 mb-0.5">
                      {sp.label}
                    </div>
                    <div className="text-[10px] text-gray-400 leading-tight">
                      {sp.note}
                    </div>
                  </div>
                ))}
              </div>

              {/* Variants */}
              <h3 className="text-xs font-bold tracking-[0.1em] uppercase text-gray-700 mb-3.5">
                Varian Tersedia · Available Variants
              </h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {k.variants.map((v) => (
                  <span
                    key={v}
                    className="px-3.5 py-1.5 rounded-full text-[13px] font-semibold"
                    style={{
                      background: k.bg,
                      border: `1px solid ${k.border}`,
                      color: k.tc,
                    }}
                  >
                    {v}
                  </span>
                ))}
              </div>

              {/* Markets */}
              <h3 className="text-xs font-bold tracking-[0.1em] uppercase text-gray-700 mb-3.5">
                Target Pasar · Target Markets
              </h3>
              <ul className="flex flex-col gap-2.5">
                {k.markets.map((m, i) => (
                  <li
                    key={m}
                    className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg border border-gray-100"
                  >
                    <span className="text-base shrink-0">
                      {i === 0 ? "🏠" : i === 1 ? "🌏" : "🏭"}
                    </span>
                    <span className="text-sm text-gray-700 font-medium">
                      {m}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right col (sticky inquiry, 2/5) */}
            <div className="lg:col-span-2 lg:sticky lg:top-20">
              <div
                className="rounded-3xl p-7 mb-4"
                style={{
                  background: k.bg,
                  border: `2px solid ${k.border}`,
                }}
              >
                <div className="text-3xl mb-3">{k.icon}</div>
                <h3 className="text-lg font-extrabold mb-1" style={{ color: k.tc }}>
                  {k.name}
                </h3>
                <p
                  className="text-xs font-bold tracking-wider uppercase mb-4"
                  style={{ color: k.tag }}
                >
                  {k.en}
                </p>
                {k.exportReady && (
                  <div className="px-3.5 py-2.5 bg-primary-50 border border-primary-200 rounded-lg text-sm font-semibold text-primary-700 mb-5">
                    🌏 Tersedia untuk ekspor internasional
                  </div>
                )}
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  Tertarik dengan komoditas ini? Hubungi kami untuk harga,
                  spesifikasi lengkap, dan penawaran kerjasama.
                </p>
                <div className="flex flex-col gap-2.5">
                  <Link
                    href={`/kontak?subject=${encodeURIComponent("Quotation: " + k.name)}`}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 text-white text-sm font-bold rounded-xl hover:opacity-90 transition-opacity"
                    style={{ background: k.tag }}
                  >
                    <FileText className="w-4 h-4" /> Request Quotation
                  </Link>
                  <a
                    href={`https://wa.me/${WA_NUMBER}?text=${waText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-white text-gray-700 text-sm font-semibold rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp (ID/EN)
                  </a>
                  {k.exportReady && (
                    <a
                      href={`https://wa.me/${WA_NUMBER}?text=${waTextEn}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-white text-sm font-semibold rounded-xl transition-colors hover:opacity-90"
                      style={{ color: k.tag, border: `1px solid ${k.border}` }}
                    >
                      <Globe2 className="w-4 h-4" /> Export Inquiry (English)
                    </a>
                  )}
                </div>
              </div>
              <div className="px-5 py-4 bg-gray-900 rounded-xl text-xs text-white/60 leading-relaxed text-center">
                <span className="font-bold text-emerald-400 block">
                  CV. Cakra Pamungkas Mandiri
                </span>
                Kebumen, Jawa Tengah, Indonesia
                <br />
                <span className="italic">Direct from farmer to buyer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All commodities strip — dark */}
      <section className="bg-[#0a0a0a] px-4 sm:px-6 lg:px-8 py-14">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-10">
            Semua Komoditas · All Commodities
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {komods.map((km, i) => {
              const isActive = active === i;
              return (
                <button
                  key={km.name}
                  onClick={() => {
                    setActive(i);
                    if (typeof window !== "undefined") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className="px-3 py-5 rounded-2xl text-center transition-all"
                  style={{
                    background: isActive
                      ? `${km.tag}22`
                      : "rgba(255,255,255,0.04)",
                    border: isActive
                      ? `1px solid ${km.tag}`
                      : "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="text-3xl mb-2">{km.icon}</div>
                  <div
                    className="text-[11px] font-bold leading-tight"
                    style={{
                      color: isActive ? km.tag : "rgba(255,255,255,0.5)",
                    }}
                  >
                    {km.name}
                  </div>
                  {km.exportReady && (
                    <div className="text-[9px] text-emerald-400 font-bold mt-1.5">
                      EXPORT READY
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global banner */}
      <section className="bg-gradient-to-br from-primary-600 to-emerald-600 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-4xl mb-4">🌏</div>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-black text-white leading-tight tracking-tight mb-4">
            Indonesian Agricultural Commodities
            <br className="hidden sm:block" /> for Global Markets
          </h2>
          <p className="text-white/80 leading-relaxed max-w-xl mx-auto mb-8">
            We source, process, and supply premium Indonesian agricultural
            commodities — rice, corn, ginger, turmeric, pepper, coffee —
            directly to international buyers with competitive pricing.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hello, I'd like to send an export inquiry.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 bg-white text-primary-700 text-sm font-extrabold rounded-xl shadow-lg shadow-black/15 hover:shadow-xl transition-shadow"
            >
              Send Export Inquiry <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/download"
              className="inline-flex items-center gap-2 px-7 py-3 bg-white/15 text-white text-sm font-semibold rounded-xl border border-white/30 hover:bg-white/20 transition-colors"
            >
              Download Product Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
