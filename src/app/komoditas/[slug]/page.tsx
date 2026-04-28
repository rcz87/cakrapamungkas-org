import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowLeft,
  BookOpen,
  Check,
  FileText,
  Globe2,
  MessageCircle,
  Sprout,
} from "lucide-react";
import {
  commodities,
  getCommoditiesBySlug,
} from "@/data/commodities";
import { BreadcrumbJsonLd } from "@/components/json-ld";

const WA_NUMBER = "6285228003820";

export function generateStaticParams() {
  return commodities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const k = getCommoditiesBySlug(slug);
  if (!k) return { title: "Komoditas tidak ditemukan" };
  return {
    title: `${k.name} (${k.en}) — Komoditas Indonesia | Cakra Pamungkas`,
    description: k.about.slice(0, 200),
    alternates: { canonical: `/komoditas/${k.slug}` },
    openGraph: {
      title: `${k.name} · ${k.en} — Indonesian ${k.en}`,
      description: k.aboutEn.slice(0, 200),
      type: "article",
    },
  };
}

export default async function CommodityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const k = getCommoditiesBySlug(slug);
  if (!k) notFound();

  const others = commodities.filter((c) => c.slug !== k.slug);
  const waText = encodeURIComponent(
    `Halo, saya tertarik dengan komoditas ${k.name} (${k.en}). Mohon info lebih lanjut.`,
  );
  const waTextEn = encodeURIComponent(
    `Hello, I'm interested in ${k.en} (${k.name}). Please share more details.`,
  );

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Beranda", href: "/" },
          { name: "Komoditas", href: "/komoditas" },
          { name: k.name, href: `/komoditas/${k.slug}` },
        ]}
      />

      {/* Hero — dark themed by commodity color */}
      <section
        className="relative overflow-hidden bg-[#0a0a0a] px-4 sm:px-6 lg:px-8 pt-12 pb-16"
      >
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 25% 60%, ${k.tag}33 0%, transparent 60%), radial-gradient(ellipse at 75% 30%, ${k.tag}1a 0%, transparent 50%)`,
          }}
        />
        <div className="relative max-w-5xl mx-auto">
          <Link
            href="/komoditas"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/60 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Kembali ke Komoditas
          </Link>

          <div className="flex items-start gap-5 mb-6">
            <div
              className="w-20 h-20 shrink-0 rounded-3xl flex items-center justify-center text-5xl"
              style={{ background: `${k.tag}22`, border: `2px solid ${k.tag}66` }}
            >
              {k.icon}
            </div>
            <div className="flex-1">
              <p
                className="text-[11px] font-bold tracking-[0.2em] uppercase mb-1"
                style={{ color: k.tag }}
              >
                {k.en}
                {k.scientificName && (
                  <span className="ml-2 text-white/40 italic font-normal normal-case">
                    {k.scientificName}
                  </span>
                )}
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-[3rem] font-black text-white tracking-tight leading-tight">
                {k.name}
              </h1>
              {k.exportReady && (
                <span className="inline-flex items-center gap-1.5 mt-3 px-2.5 py-0.5 bg-emerald-500/15 border border-emerald-500/30 rounded-full text-[11px] font-bold text-emerald-400">
                  🌏 EXPORT READY
                </span>
              )}
            </div>
          </div>

          <p className="text-base text-white/75 leading-relaxed max-w-3xl">
            {k.desc}
          </p>
        </div>
      </section>

      {/* Main content + sticky sidebar */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-14">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-10 lg:gap-14">
          <div className="lg:col-span-3 max-w-none">
            {/* Tentang */}
            <h2 className="text-2xl font-black text-gray-900 tracking-tight mb-4">
              Tentang {k.name}
            </h2>
            <p className="text-[15px] text-gray-700 leading-[1.8] mb-3">
              {k.about}
            </p>
            <p className="text-sm text-gray-400 italic leading-relaxed mb-9 pb-9 border-b border-gray-100">
              {k.aboutEn}
            </p>

            {/* Varietas */}
            <h2 className="text-xl font-black text-gray-900 tracking-tight mb-5">
              Varietas &amp; Format Tersedia
            </h2>
            <div className="grid sm:grid-cols-2 gap-3.5 mb-10">
              {k.varietyDetails.map((v) => (
                <div
                  key={v.name}
                  className="p-5 rounded-2xl border"
                  style={{
                    background: k.bg,
                    borderColor: k.border,
                  }}
                >
                  <h3
                    className="text-base font-extrabold mb-1.5"
                    style={{ color: k.tc }}
                  >
                    {v.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Manfaat */}
            <h2 className="text-xl font-black text-gray-900 tracking-tight mb-5">
              Manfaat &amp; Penggunaan
            </h2>
            <ul className="flex flex-col gap-2.5 mb-10">
              {k.benefits.map((b) => (
                <li
                  key={b}
                  className="flex gap-3 items-start px-4 py-3 bg-gray-50 rounded-xl border border-gray-100"
                >
                  <span
                    className="mt-0.5 w-5 h-5 shrink-0 rounded-full flex items-center justify-center"
                    style={{ background: `${k.tag}22` }}
                  >
                    <Check
                      className="w-3 h-3"
                      strokeWidth={3}
                      style={{ color: k.tag }}
                    />
                  </span>
                  <span className="text-sm text-gray-700 leading-relaxed">
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            {/* Cara budidaya */}
            <h2 className="text-xl font-black text-gray-900 tracking-tight mb-3 inline-flex items-center gap-2">
              <Sprout className="w-5 h-5 text-primary-600" />
              Cara Budidaya &amp; Pengolahan
            </h2>
            <p className="text-[15px] text-gray-700 leading-[1.8] mb-10">
              {k.cultivation}
            </p>

            {/* Spesifikasi */}
            <h2 className="text-xl font-black text-gray-900 tracking-tight mb-5">
              Spesifikasi · Specifications
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
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

            {/* Target Pasar */}
            <h2 className="text-xl font-black text-gray-900 tracking-tight mb-5">
              Target Pasar · Target Markets
            </h2>
            <ul className="flex flex-col gap-2.5 mb-10">
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

            {/* Prospek Pasar */}
            <h2 className="text-xl font-black text-gray-900 tracking-tight mb-3">
              Prospek Pasar &amp; Outlook
            </h2>
            <p className="text-[15px] text-gray-700 leading-[1.8]">
              {k.marketOutlook}
            </p>
          </div>

          {/* Sidebar — sticky inquiry */}
          <aside className="lg:col-span-2 lg:sticky lg:top-20 self-start">
            <div
              className="rounded-3xl p-7 mb-4"
              style={{
                background: k.bg,
                border: `2px solid ${k.border}`,
              }}
            >
              <div className="text-3xl mb-3">{k.icon}</div>
              <h3
                className="text-lg font-extrabold mb-1"
                style={{ color: k.tc }}
              >
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
                Tertarik bermitra atau request penawaran untuk {k.name}? Hubungi
                kami untuk harga, spesifikasi lengkap, dan kerjasama jangka
                panjang.
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
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-white text-sm font-semibold rounded-xl transition-opacity hover:opacity-90"
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
          </aside>
        </div>
      </section>

      {/* Komoditas lainnya */}
      <section className="bg-gray-50 border-t border-gray-100 px-4 sm:px-6 lg:px-8 py-14">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary-600">
                Komoditas Lainnya · Other Commodities
              </p>
              <h2 className="text-2xl font-black text-gray-900 tracking-tight mt-1.5">
                Lihat Komoditas Kami yang Lain
              </h2>
            </div>
            <Link
              href="/komoditas"
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
            >
              Lihat Semua <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/komoditas/${o.slug}`}
                className="text-center px-3 py-5 bg-white rounded-2xl border border-gray-100 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5 transition-all"
              >
                <div className="text-3xl mb-2">{o.icon}</div>
                <p className="text-[12px] font-bold text-gray-900 leading-tight mb-1">
                  {o.name}
                </p>
                {o.exportReady && (
                  <p className="text-[9px] font-bold text-emerald-600 mt-1">
                    EXPORT READY
                  </p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary-600 to-emerald-600 px-4 sm:px-6 lg:px-8 py-14">
        <div className="max-w-3xl mx-auto text-center">
          <BookOpen className="w-10 h-10 mx-auto text-white mb-3" />
          <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight tracking-tight mb-3">
            Butuh Informasi Lebih Detail?
          </h2>
          <p className="text-white/85 leading-relaxed max-w-xl mx-auto mb-7">
            Tim kami siap menyediakan spesifikasi teknis lengkap, sample,
            certificate of analysis, dan penawaran harga sesuai kebutuhan Anda.
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 px-7 py-3 bg-white text-primary-700 text-sm font-extrabold rounded-xl hover:opacity-90 transition-opacity"
            >
              Hubungi Kami <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${waText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 bg-white/15 text-white text-sm font-semibold rounded-xl border border-white/30 hover:bg-white/20 transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Sekarang
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
