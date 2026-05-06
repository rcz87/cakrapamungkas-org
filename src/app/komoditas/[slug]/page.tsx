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
  MapPin,
  Calendar,
  Ship,
  Award,
  ClipboardList,
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
    title: `${k.name} (${k.en}) — Indonesian ${k.en} for Export | Cakra Pamungkas`,
    description: k.aboutEn.slice(0, 200),
    alternates: { canonical: `/komoditas/${k.slug}` },
    openGraph: {
      title: `${k.en} · ${k.name} — Premium Indonesian Export`,
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
    `Hello, I'm interested in ${k.en} (${k.name}). Please share more details, FOB pricing, MOQ, and lead time.`,
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
            <ArrowLeft className="w-3.5 h-3.5" /> Kembali ke Komoditas · Back to Commodities
          </Link>

          <div className="flex items-start gap-5 mb-6">
            <div
              className="w-20 h-20 shrink-0 rounded-3xl flex items-center justify-center text-5xl"
              style={{ background: `${k.tag}22`, border: `2px solid ${k.tag}66` }}
            >
              {k.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p
                className="text-[11px] font-bold tracking-[0.2em] uppercase mb-2"
                style={{ color: k.tag }}
              >
                {k.en}
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-[3rem] font-black text-white tracking-tight leading-tight mb-2">
                {k.name}
              </h1>
              {k.scientificName && (
                <p className="text-sm text-white/50 italic mb-3">
                  {k.scientificName}
                </p>
              )}
              {k.exportReady && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-500/15 border border-emerald-500/30 rounded-full text-[11px] font-bold text-emerald-400">
                  🌏 EXPORT READY · Ready for International Buyers
                </span>
              )}
            </div>
          </div>

          <p className="text-base text-white/85 leading-relaxed max-w-3xl mb-2">
            {k.desc}
          </p>
          <p className="text-base text-white/60 leading-relaxed max-w-3xl">
            {k.descEn}
          </p>
        </div>
      </section>

      {/* Main content + sticky sidebar */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-14">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-10 lg:gap-14">
          <div className="lg:col-span-3 max-w-none">
            {/* About */}
            <h2 className="text-2xl font-black text-gray-900 tracking-tight mb-1">
              Tentang {k.name}
            </h2>
            <p className="text-sm font-semibold text-gray-500 mb-4">
              About {k.en}
            </p>
            <p className="text-[15px] text-gray-700 leading-[1.8] mb-4">
              {k.about}
            </p>
            <p className="text-[14px] text-gray-600 leading-[1.8] mb-9 pb-9 border-b border-gray-100">
              {k.aboutEn}
            </p>

            {/* Origin & Harvest — NEW */}
            <h2 className="text-xl font-black text-gray-900 tracking-tight mb-1 inline-flex items-center gap-2">
              <MapPin className="w-5 h-5" style={{ color: k.tag }} />
              Asal Bahan Baku &amp; Musim Panen
            </h2>
            <p className="text-sm font-semibold text-gray-500 mb-5 ml-7">
              Origin &amp; Harvest Season
            </p>
            <div
              className="grid sm:grid-cols-2 gap-3.5 mb-10 p-5 rounded-2xl border"
              style={{ background: k.bg, borderColor: k.border }}
            >
              <div>
                <p className="text-[11px] font-bold tracking-wider uppercase mb-1.5" style={{ color: k.tag }}>
                  Daerah Asal · Origin Regions
                </p>
                <p className="text-sm text-gray-800 font-medium leading-snug mb-1">
                  {k.origin.regions}
                </p>
                <p className="text-xs text-gray-500 italic leading-snug">
                  {k.origin.regionsEn}
                </p>
              </div>
              <div>
                <p className="text-[11px] font-bold tracking-wider uppercase mb-1.5" style={{ color: k.tag }}>
                  Ketinggian · Altitude
                </p>
                <p className="text-sm text-gray-800 font-medium leading-snug">
                  {k.origin.altitude}
                </p>
              </div>
              <div className="sm:col-span-2">
                <p className="text-[11px] font-bold tracking-wider uppercase mb-1.5" style={{ color: k.tag }}>
                  <Calendar className="inline w-3 h-3 mb-0.5" /> Musim Panen · Harvest Season
                </p>
                <p className="text-sm text-gray-800 font-medium leading-snug mb-1">
                  {k.origin.harvestSeason}
                </p>
                <p className="text-xs text-gray-500 italic leading-snug">
                  {k.origin.harvestSeasonEn}
                </p>
              </div>
            </div>

            {/* Varieties */}
            <h2 className="text-xl font-black text-gray-900 tracking-tight mb-1">
              Varietas &amp; Format Tersedia
            </h2>
            <p className="text-sm font-semibold text-gray-500 mb-5">
              Varieties &amp; Available Formats
            </p>
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
                    className="text-base font-extrabold mb-0.5"
                    style={{ color: k.tc }}
                  >
                    {v.name}
                  </h3>
                  {v.nameEn && (
                    <p className="text-xs text-gray-500 italic font-medium mb-2">
                      {v.nameEn}
                    </p>
                  )}
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">
                    {v.desc}
                  </p>
                  {v.descEn && (
                    <p className="text-xs text-gray-500 italic leading-relaxed">
                      {v.descEn}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Benefits */}
            <h2 className="text-xl font-black text-gray-900 tracking-tight mb-1">
              Manfaat &amp; Penggunaan
            </h2>
            <p className="text-sm font-semibold text-gray-500 mb-5">
              Benefits &amp; Applications
            </p>
            <ul className="flex flex-col gap-2.5 mb-10">
              {k.benefits.map((b, i) => (
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
                  <div className="flex-1">
                    <p className="text-sm text-gray-800 font-medium leading-relaxed">
                      {b}
                    </p>
                    {k.benefitsEn[i] && (
                      <p className="text-xs text-gray-500 italic leading-relaxed mt-0.5">
                        {k.benefitsEn[i]}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Cultivation */}
            <h2 className="text-xl font-black text-gray-900 tracking-tight mb-1 inline-flex items-center gap-2">
              <Sprout className="w-5 h-5 text-primary-600" />
              Cara Budidaya &amp; Pengolahan
            </h2>
            <p className="text-sm font-semibold text-gray-500 mb-5 ml-7">
              Cultivation &amp; Processing
            </p>
            <p className="text-[15px] text-gray-700 leading-[1.8] mb-3">
              {k.cultivation}
            </p>
            <p className="text-[14px] text-gray-600 leading-[1.8] mb-10">
              {k.cultivationEn}
            </p>

            {/* Specifications */}
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

            {/* Export Specifications — NEW */}
            <h2 className="text-xl font-black text-gray-900 tracking-tight mb-1 inline-flex items-center gap-2">
              <Ship className="w-5 h-5" style={{ color: k.tag }} />
              Spesifikasi Ekspor
            </h2>
            <p className="text-sm font-semibold text-gray-500 mb-5 ml-7">
              Export Specifications &amp; Logistics
            </p>
            <div
              className="rounded-2xl border p-5 mb-10"
              style={{ background: k.bg, borderColor: k.border }}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <p className="text-[11px] font-bold tracking-wider uppercase mb-2" style={{ color: k.tag }}>
                    FOB Ports
                  </p>
                  <ul className="text-sm text-gray-800 leading-relaxed space-y-1">
                    {k.exportSpec.fobPorts.map((port) => (
                      <li key={port} className="flex gap-2 items-start">
                        <span style={{ color: k.tag }}>•</span>
                        <span>{port}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[11px] font-bold tracking-wider uppercase mb-2" style={{ color: k.tag }}>
                    Container Capacity
                  </p>
                  <p className="text-sm text-gray-800 leading-relaxed">
                    {k.exportSpec.containerCapacity}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-bold tracking-wider uppercase mb-2" style={{ color: k.tag }}>
                    Lead Time
                  </p>
                  <p className="text-sm text-gray-800 leading-relaxed">
                    {k.exportSpec.leadTime}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-bold tracking-wider uppercase mb-2" style={{ color: k.tag }}>
                    Payment Terms
                  </p>
                  <p className="text-sm text-gray-800 leading-relaxed">
                    {k.exportSpec.paymentTerms}
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications & Documentation — NEW */}
            <h2 className="text-xl font-black text-gray-900 tracking-tight mb-1 inline-flex items-center gap-2">
              <Award className="w-5 h-5" style={{ color: k.tag }} />
              Sertifikasi &amp; Dokumentasi
            </h2>
            <p className="text-sm font-semibold text-gray-500 mb-5 ml-7">
              Certifications &amp; Documentation
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {/* Certifications */}
              <div className="rounded-2xl border border-gray-200 p-5 bg-gray-50/50">
                <p className="text-[11px] font-bold tracking-wider uppercase mb-3 inline-flex items-center gap-1.5" style={{ color: k.tag }}>
                  <Award className="w-3.5 h-3.5" /> Certifications
                </p>
                <ul className="space-y-2">
                  {k.exportSpec.certifications.map((c) => (
                    <li key={c} className="flex gap-2 items-start text-sm text-gray-700">
                      <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: k.tag }} />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Documentation */}
              <div className="rounded-2xl border border-gray-200 p-5 bg-gray-50/50">
                <p className="text-[11px] font-bold tracking-wider uppercase mb-3 inline-flex items-center gap-1.5" style={{ color: k.tag }}>
                  <ClipboardList className="w-3.5 h-3.5" /> Export Documentation
                </p>
                <ul className="space-y-2">
                  {k.exportSpec.documentation.map((d) => (
                    <li key={d} className="flex gap-2 items-start text-sm text-gray-700">
                      <FileText className="w-3.5 h-3.5 mt-1 shrink-0 text-gray-400" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Target Markets */}
            <h2 className="text-xl font-black text-gray-900 tracking-tight mb-5">
              Target Pasar · Target Markets
            </h2>
            <ul className="grid sm:grid-cols-2 gap-2.5 mb-10">
              {k.markets.map((m, i) => (
                <li
                  key={m}
                  className="flex items-start gap-3 px-4 py-3 bg-gray-50 rounded-lg border border-gray-100"
                >
                  <span className="text-base shrink-0 mt-0.5">
                    {i === 0 ? "🏠" : i === 1 ? "🌏" : i === 2 ? "🏭" : "🌐"}
                  </span>
                  <div>
                    <p className="text-sm text-gray-800 font-medium leading-snug">
                      {m}
                    </p>
                    {k.marketsEn[i] && (
                      <p className="text-xs text-gray-500 italic leading-snug mt-0.5">
                        {k.marketsEn[i]}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Market Outlook */}
            <h2 className="text-xl font-black text-gray-900 tracking-tight mb-1">
              Prospek Pasar &amp; Outlook
            </h2>
            <p className="text-sm font-semibold text-gray-500 mb-5">
              Market Outlook
            </p>
            <p className="text-[15px] text-gray-700 leading-[1.8] mb-3">
              {k.marketOutlook}
            </p>
            <p className="text-[14px] text-gray-600 leading-[1.8]">
              {k.marketOutlookEn}
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
                className="text-lg font-extrabold mb-0.5"
                style={{ color: k.tc }}
              >
                {k.name}
              </h3>
              <p
                className="text-xs font-bold tracking-wider uppercase mb-1"
                style={{ color: k.tag }}
              >
                {k.en}
              </p>
              {k.scientificName && (
                <p className="text-xs text-gray-500 italic mb-4">
                  {k.scientificName}
                </p>
              )}
              {k.exportReady && (
                <div className="px-3.5 py-2.5 bg-emerald-50 border border-emerald-200 rounded-lg text-sm font-semibold text-emerald-700 mb-5">
                  🌏 Export-Ready · International Buyers Welcome
                </div>
              )}
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                Tertarik bermitra atau request penawaran untuk {k.name}? Hubungi
                kami untuk harga FOB, MOQ, lead time, dan kerjasama jangka panjang.
              </p>
              <p className="text-xs text-gray-500 italic leading-relaxed mb-5">
                Interested in sourcing {k.en} from Indonesia? Contact us for FOB
                pricing, MOQ, lead time, and long-term partnership opportunities.
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
                  <MessageCircle className="w-4 h-4" /> WhatsApp (ID)
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

      {/* Other commodities */}
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
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
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
          <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight tracking-tight mb-2">
            Butuh Informasi Lebih Detail?
          </h2>
          <p className="text-white/85 text-base font-medium mb-3">
            Need More Details for Your Sourcing Needs?
          </p>
          <p className="text-white/85 leading-relaxed max-w-xl mx-auto mb-3">
            Tim kami siap menyediakan spesifikasi teknis lengkap, sample,
            certificate of analysis, dan penawaran harga FOB sesuai kebutuhan.
          </p>
          <p className="text-white/65 text-sm italic leading-relaxed max-w-xl mx-auto mb-7">
            Our team is ready to provide full technical specifications, samples,
            Certificate of Analysis (COA), and FOB pricing tailored to your sourcing requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 px-7 py-3 bg-white text-primary-700 text-sm font-extrabold rounded-xl hover:opacity-90 transition-opacity"
            >
              Hubungi Kami · Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${waTextEn}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 bg-white/15 text-white text-sm font-semibold rounded-xl border border-white/30 hover:bg-white/20 transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Export Inquiry
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
