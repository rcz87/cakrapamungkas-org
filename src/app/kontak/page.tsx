import type { Metadata } from "next";
import { KontakForm } from "@/components/kontak-form";

export const metadata: Metadata = {
  title: "Kontak — Hubungi Cakra Pamungkas | Multi-Komoditas Agribisnis",
  description:
    "Hubungi CV. Cakra Pamungkas Mandiri di Kebumen, Jawa Tengah. WhatsApp +62 852-2800-3820, email info@cakrapamungkas.org. Bilingual ID/EN, FOB pricing untuk buyer ekspor.",
  alternates: { canonical: "/kontak" },
  openGraph: {
    title: "Contact Cakra Pamungkas — International Buyers Welcome",
    description:
      "Reach us for export inquiries, partnership, contract milling, or PadiDoc demo. Bilingual response within 24 hours.",
    type: "website",
  },
};

const WA_NUMBER = "6285228003820";

const contacts = [
  {
    icon: "📍",
    label: "Alamat",
    labelEn: "Address",
    val: "Kebumen, Jawa Tengah, Indonesia",
    sub: "Central Java, Indonesia",
  },
  {
    icon: "📞",
    label: "Telepon / WA",
    labelEn: "Phone / WhatsApp",
    val: "+62 852-2800-3820",
    sub: "WhatsApp 24/7",
  },
  {
    icon: "✉️",
    label: "Email",
    labelEn: "Email",
    val: "info@cakrapamungkas.org",
    sub: "Response within 24h",
  },
  {
    icon: "🕐",
    label: "Jam Operasional",
    labelEn: "Business Hours",
    val: "Senin – Sabtu, 08.00–17.00 WIB",
    sub: "Mon–Sat, 08:00–17:00 (GMT+7)",
  },
];

const trustBadges = [
  {
    icon: "⚡",
    label: "Respon Cepat",
    sub: "Fast response · <24 jam",
  },
  {
    icon: "🌏",
    label: "Bilingual",
    sub: "Indonesia & English",
  },
  {
    icon: "📦",
    label: "Export Ready",
    sub: "FOB pricing available",
  },
];

const helpItems = [
  {
    icon: "⚙️",
    title: "Jasa Maklon",
    en: "Contract Milling",
    desc: "Konsultasi kapasitas, harga, dan jadwal penggilingan.",
  },
  {
    icon: "🌾",
    title: "Jual Beli Komoditas",
    en: "Commodity Trading",
    desc: "Penawaran harga gabah, jagung, dan hasil bumi terkini.",
  },
  {
    icon: "🫚",
    title: "Export Inquiry",
    en: "International Buyers",
    desc: "FOB pricing, product specs, and shipping options for export.",
  },
  {
    icon: "🌱",
    title: "Kemitraan Petani",
    en: "Farmer Partnership",
    desc: "Bergabung sebagai petani mitra Cakra Pamungkas.",
  },
  {
    icon: "🌾",
    title: "PadiDoc",
    en: "Software Demo",
    desc: "Demo dan konsultasi sistem manajemen penggilingan.",
  },
];

export default function KontakPage() {
  const waId = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Halo, saya ingin bertanya tentang layanan Cakra Pamungkas.")}`;
  const waEn = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hello, I'd like to know more about your services.")}`;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-950 to-primary-900 px-4 sm:px-6 lg:px-8 pt-20 pb-20">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 20% 60%, rgba(22,163,74,0.2) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(22,163,74,0.13) 0%, transparent 50%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/10 border border-white/15 rounded-full mb-5">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary-400">
                Contact · Kontak
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-black text-white leading-[1.1] tracking-tight mb-4">
              Mari Berkolaborasi
              <br />
              <span className="text-primary-400">Bersama Kami</span>
            </h1>
            <p className="text-base text-white/70 leading-relaxed mb-2.5">
              Punya pertanyaan, ingin bermitra, atau mencari pemasok komoditas
              pertanian Indonesia? Kami siap membantu.
            </p>
            <p className="text-sm text-white/40 italic leading-relaxed mb-8">
              Looking to source Indonesian agricultural commodities, partner
              with us, or learn more about our services? Get in touch.
            </p>
            <div className="flex flex-wrap gap-3">
              {trustBadges.map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-2.5 px-4 py-2.5 bg-white/[0.07] border border-white/[0.12] rounded-xl"
                >
                  <span className="text-lg">{b.icon}</span>
                  <div>
                    <p className="text-xs font-bold text-white">{b.label}</p>
                    <p className="text-[11px] text-white/50">{b.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {contacts.map((c) => (
              <div
                key={c.label}
                className="flex gap-4 items-start px-5 py-4 bg-white/[0.06] border border-white/10 rounded-2xl backdrop-blur"
              >
                <span className="text-xl shrink-0">{c.icon}</span>
                <div>
                  <p className="text-[11px] font-bold tracking-wider uppercase text-primary-400 mb-0.5">
                    {c.label} · {c.labelEn}
                  </p>
                  <p className="text-sm font-semibold text-white mb-0.5">
                    {c.val}
                  </p>
                  <p className="text-xs text-white/45 italic">{c.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp quick bar */}
      <section className="bg-primary-50 border-b border-primary-100 px-4 sm:px-6 lg:px-8 py-5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">💬</span>
            <div>
              <p className="text-sm font-bold text-gray-900">
                Hubungi via WhatsApp langsung
              </p>
              <p className="text-xs text-gray-500 italic">
                Chat directly on WhatsApp — faster response guaranteed
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <a
              href={waId}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25d366] text-white text-sm font-bold rounded-xl hover:opacity-90 transition-opacity"
            >
              💬 WhatsApp (Bahasa Indonesia)
            </a>
            <a
              href={waEn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25d366]/85 text-white text-sm font-bold rounded-xl hover:opacity-90 transition-opacity"
            >
              💬 WhatsApp (English)
            </a>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12 lg:gap-14">
          <div className="lg:col-span-2">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary-600">
              Layanan yang Tersedia
            </p>
            <h2 className="text-2xl lg:text-[1.9rem] font-black text-gray-900 tracking-tight mt-2 mb-6">
              Kami Siap Membantu
            </h2>
            {helpItems.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 py-4 border-b border-gray-100 last:border-b-0"
              >
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-0.5">
                    {item.title}{" "}
                    <span className="text-gray-400 font-normal italic text-xs">
                      · {item.en}
                    </span>
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="mt-7 rounded-2xl overflow-hidden border border-gray-100 h-40 bg-primary-50 flex flex-col items-center justify-center gap-2">
              <span className="text-3xl">📍</span>
              <span className="text-sm font-semibold text-primary-900">
                Kebumen, Jawa Tengah
              </span>
              <span className="text-xs text-gray-400 italic">
                Central Java, Indonesia
              </span>
            </div>
          </div>

          <div className="lg:col-span-3">
            <KontakForm />
          </div>
        </div>
      </section>

      {/* Export inquiry banner */}
      <section className="bg-gradient-to-br from-primary-600 to-emerald-600 px-4 sm:px-6 lg:px-8 py-14">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-4xl mb-3.5">🌏</div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
            International Buyers Welcome
          </h2>
          <p className="text-white/80 leading-relaxed max-w-xl mx-auto mb-6">
            We communicate in English and welcome inquiries from international
            importers, distributors, and buyers. FOB pricing, product
            specifications, and shipping details available upon request.
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            <a
              href="mailto:info@cakrapamungkas.org?subject=Export%20Inquiry"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-700 text-sm font-extrabold rounded-xl hover:opacity-90 transition-opacity"
            >
              Email Export Inquiry →
            </a>
            <a
              href={waEn}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/15 text-white text-sm font-semibold rounded-xl border border-white/30 hover:bg-white/20 transition-colors"
            >
              WhatsApp (English)
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
