"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  FileText,
  Globe2,
  BookOpen,
} from "lucide-react";
import { commodities as komods } from "@/data/commodities";


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
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
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
                    href={`/komoditas/${k.slug}`}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-white text-sm font-bold rounded-xl border-2 transition-opacity hover:opacity-80"
                    style={{ color: k.tag, borderColor: k.border }}
                  >
                    <BookOpen className="w-4 h-4" /> Pelajari Lebih Lanjut
                  </Link>
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
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3">
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
