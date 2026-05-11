import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Download,
  FileText,
  Globe2,
  Landmark,
  ScrollText,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Tentang Kami — CV. Cakra Pamungkas Mandiri | Agribisnis Multi-Komoditas",
  description:
    "Perusahaan agribisnis multi-komoditas di Kebumen, Jawa Tengah. Berdiri 2019, menghubungkan petani lokal ke pasar global dengan rempah, padi, jagung, dan hasil bumi.",
  alternates: { canonical: "/tentang" },
  openGraph: {
    title: "About Cakra Pamungkas — Indonesian Multi-Commodity Agribusiness",
    description:
      "Multi-commodity agribusiness company based in Central Java, Indonesia — connecting local farmers to domestic and global markets.",
    type: "website",
  },
};

const heroStats = [
  { v: "2019", label: "Est.", sub: "Founded in Kebumen, Java" },
  { v: "6+", label: "Commodities", sub: "Padi, jagung, rempah & more" },
  { v: "100+", label: "Farmer Partners", sub: "Petani mitra aktif" },
  { v: "3 Prov.", label: "Distribution", sub: "Jawa, Sumatra & beyond" },
];

const values = [
  {
    icon: "🤝",
    title: "Transparent Partnership",
    titleId: "Kemitraan Transparan",
    desc: "We build long-term relationships with farmers and business partners based on fair pricing and clear terms.",
  },
  {
    icon: "🌱",
    title: "Sustainable Agriculture",
    titleId: "Pertanian Berkelanjutan",
    desc: "Promoting eco-friendly farming practices while maximizing yield and quality for domestic and export markets.",
  },
  {
    icon: "⚡",
    title: "Tech-Driven Operations",
    titleId: "Operasi Berbasis Teknologi",
    desc: "From PadiDoc management system to IoT monitoring — we leverage technology to ensure consistent quality.",
  },
  {
    icon: "🌏",
    title: "Global Market Ready",
    titleId: "Siap Pasar Global",
    desc: "Our commodities meet international quality standards. We work with exporters and international buyers.",
  },
];

const timeline = [
  {
    year: "2019",
    title: "Pendirian",
    desc: "CV. Cakra Pamungkas Mandiri berdiri di Kebumen, Jawa Tengah. Fokus awal: jasa maklon penggilingan gabah.",
  },
  {
    year: "2021",
    title: "Ekspansi Komoditas",
    desc: "Mulai bergerak di perdagangan jagung dan pengolahan rempah. Jaringan petani mitra berkembang.",
  },
  {
    year: "2023",
    title: "Digitalisasi",
    desc: "Peluncuran PadiDoc — sistem manajemen penggilingan berbasis digital dengan integrasi AI & Telegram.",
  },
  {
    year: "2026",
    title: "Multi-Komoditas & Ekspor",
    desc: "Menarget pasar ekspor rempah (jahe, lada, kunyit) ke Asia Tenggara, Timur Tengah, dan Eropa.",
  },
];

const team = [
  {
    name: "RCZ",
    role: "Founder & CEO",
    desc: "Visionary behind Cakra Pamungkas. Experienced in agribusiness management, technology integration, and building farmer ecosystems.",
  },
  {
    name: "Amin Sugito",
    role: "Operations Manager",
    desc: "Oversees daily milling operations, quality control, and farmer partnership management.",
    image: "/images/team/amin-sugito.jpg",
  },
  {
    name: "Stalyyna",
    role: "Content & Education",
    desc: "Leads agricultural education content, research, and PadiDoc platform development.",
  },
];

const misiItems = [
  "Layanan maklon berkualitas dengan standar transparan & profesional",
  "Perdagangan multi-komoditas: padi, jagung, rempah, & hasil bumi",
  "Memperluas akses petani ke informasi budidaya & regulasi terkini",
  "Mengembangkan PadiDoc — teknologi digital untuk manajemen penggilingan",
  "Membangun kemitraan ekspor ke pasar Asia, Timur Tengah & Eropa",
];

const legalItems = [
  {
    Icon: FileText,
    title: "Nomor Induk Berusaha (NIB)",
    desc: "Terdaftar resmi dalam sistem OSS pemerintah Indonesia.",
    code: "1208000552189",
  },
  {
    Icon: ScrollText,
    title: "Akta Pendirian CV",
    desc: "Akta notaris yang sah sesuai hukum Republik Indonesia.",
  },
  {
    Icon: Landmark,
    title: "NPWP Perusahaan",
    desc: "Terdaftar sebagai wajib pajak badan yang patuh.",
    code: "42.443.100.5-523.000",
  },
];

const exportPoints = [
  "Quality-controlled processing",
  "Competitive FOB pricing",
  "Multi-commodity sourcing",
  "Direct farmer-to-buyer supply chain",
];

export default function TentangPage() {
  return (
    <>
      {/* Hero — cinematic dark */}
      <section className="relative overflow-hidden bg-primary-950 px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 20% 50%, rgba(22,163,74,0.2) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(22,163,74,0.13) 0%, transparent 50%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary-400">
              Company Profile
            </span>
            <span className="text-gray-500 text-xs">/ About Us</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.1] tracking-tight mb-5">
                Tentang
                <br />
                <span className="text-primary-400">Cakra Pamungkas</span>
              </h1>
              <p className="text-base text-white/70 leading-relaxed mb-3">
                CV. Cakra Pamungkas Mandiri adalah perusahaan agribisnis
                multi-komoditas yang berbasis di Kebumen, Jawa Tengah.
              </p>
              <p className="text-sm text-white/50 italic leading-relaxed mb-8">
                We are a multi-commodity agribusiness company based in Central
                Java, Indonesia — connecting local farmers to domestic and
                global markets.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/kontak"
                  className="px-6 py-3 bg-primary-600 text-white text-sm font-bold rounded-xl hover:bg-primary-700 transition-colors"
                >
                  Hubungi Kami
                </Link>
                <Link
                  href="/download"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white text-sm font-semibold rounded-xl border border-white/20 hover:bg-white/15 transition-colors"
                >
                  <Download className="w-4 h-4" /> Download Profile
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {heroStats.map((s) => (
                <div
                  key={s.label}
                  className="px-6 py-7 bg-white/5 backdrop-blur rounded-2xl border border-white/10"
                >
                  <div className="text-2xl lg:text-[2.4rem] font-black text-primary-400 mb-1.5 tracking-tight">
                    {s.v}
                  </div>
                  <p className="text-sm font-bold text-white mb-1">{s.label}</p>
                  <p className="text-xs text-white/45 leading-relaxed">
                    {s.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary-600">
              Our Values · Nilai Kami
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.3rem] font-black text-gray-900 tracking-tight mt-2">
              Mengapa Memilih Kami?
            </h2>
            <p className="text-sm text-gray-400 italic mt-2">
              Why partner with Cakra Pamungkas Mandiri?
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="group p-7 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-primary-50 hover:border-primary-100 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-600/10 transition-all"
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-primary-600 mb-1.5">
                  EN
                </p>
                <h3 className="text-base font-extrabold text-gray-900 mb-1">
                  {v.title}
                </h3>
                <p className="text-xs italic text-gray-400 mb-3">{v.titleId}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="relative overflow-hidden bg-primary-50 rounded-3xl p-10 border border-primary-100">
            <div
              aria-hidden
              className="absolute -top-5 -right-5 text-[120px] leading-none opacity-[0.06] select-none"
            >
              👁
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-primary-600 rounded-full mb-5">
              <span className="text-[11px] font-bold tracking-wider uppercase text-white">
                Vision · Visi
              </span>
            </div>
            <h2 className="text-xl lg:text-[1.7rem] font-extrabold text-primary-900 leading-tight tracking-tight mb-4">
              Menjadi Pemimpin Agribisnis Multi-Komoditas Indonesia
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Menjadi perusahaan agribisnis terdepan yang mendorong modernisasi
              pertanian Indonesia melalui edukasi, teknologi, dan layanan
              terintegrasi.
            </p>
            <p className="text-sm text-gray-500 italic leading-relaxed pt-4 border-t border-primary-100">
              To become Indonesia&apos;s leading multi-commodity agribusiness
              that empowers farmers and connects Indonesian agricultural
              products to global markets.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 border border-gray-200">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-gray-900 rounded-full mb-5">
              <span className="text-[11px] font-bold tracking-wider uppercase text-white">
                Mission · Misi
              </span>
            </div>
            <h2 className="text-xl lg:text-[1.7rem] font-extrabold text-gray-900 leading-tight tracking-tight mb-5">
              Langkah Nyata Menuju Kedaulatan Pangan
            </h2>
            <ul className="flex flex-col gap-3.5">
              {misiItems.map((m) => (
                <li key={m} className="flex gap-3 items-start">
                  <span className="mt-1 w-5 h-5 shrink-0 rounded-full bg-primary-50 border-2 border-primary-600 flex items-center justify-center">
                    <Check
                      className="w-2.5 h-2.5 text-primary-600"
                      strokeWidth={3}
                    />
                  </span>
                  <span className="text-sm text-gray-700 leading-relaxed">
                    {m}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary-600">
              Our Journey · Perjalanan Kami
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-black text-gray-900 tracking-tight mt-2">
              Dari Lokal ke Global
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-primary-100" />
            <div className="flex flex-col gap-8">
              {timeline.map((t, i) => {
                const isLast = i === timeline.length - 1;
                return (
                  <div key={t.year} className="flex gap-6 items-start">
                    <div
                      className={`relative z-10 w-14 h-14 shrink-0 rounded-full border-[3px] border-primary-600 flex items-center justify-center ${
                        isLast ? "bg-primary-600" : "bg-primary-50"
                      }`}
                    >
                      <span
                        className={`text-xs font-extrabold ${
                          isLast ? "text-white" : "text-primary-600"
                        }`}
                      >
                        {t.year}
                      </span>
                    </div>
                    <div className="pt-3 flex-1">
                      <h3 className="text-base font-extrabold text-gray-900 mb-1.5">
                        {t.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {t.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary-600">
              Our Team · Tim Kami
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-black text-gray-900 tracking-tight mt-2">
              Orang-Orang di Balik Cakra Pamungkas
            </h2>
            <p className="text-sm text-gray-400 italic mt-2">
              The people driving our agribusiness forward
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((m) => (
              <div
                key={m.name}
                className="bg-white rounded-3xl p-8 border border-gray-100 text-center shadow-sm hover:shadow-lg transition-shadow"
              >
                {m.image ? (
                  <Image
                    src={m.image}
                    alt={m.name}
                    width={144}
                    height={144}
                    className="w-[72px] h-[72px] mx-auto mb-5 rounded-full object-cover shadow-lg shadow-primary-600/30 ring-2 ring-primary-600/20"
                  />
                ) : (
                  <div className="w-[72px] h-[72px] mx-auto mb-5 rounded-full bg-gradient-to-br from-primary-600 to-emerald-600 shadow-lg shadow-primary-600/30 flex items-center justify-center text-3xl">
                    👤
                  </div>
                )}
                <h3 className="text-lg font-extrabold text-gray-900 mb-1 tracking-tight">
                  {m.name}
                </h3>
                <p className="text-[11px] font-bold tracking-wider uppercase text-primary-600 mb-3.5">
                  {m.role}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legalitas + Export Ready */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary-600">
              Legalitas · Legal Standing
            </span>
            <h2 className="text-2xl lg:text-[1.9rem] font-black text-gray-900 tracking-tight mt-2 mb-4">
              Terdaftar Resmi &amp; Terpercaya
            </h2>
            <p className="text-sm text-gray-500 italic leading-relaxed mb-7">
              Officially registered business entity in Indonesia&apos;s OSS
              system.
            </p>
            <div className="flex flex-col gap-3.5">
              {legalItems.map(({ Icon, title, desc, code }) => (
                <div
                  key={title}
                  className="flex gap-4 px-5 py-4 bg-gray-50 rounded-2xl border border-gray-100"
                >
                  <Icon className="w-6 h-6 text-primary-600 shrink-0" />
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-gray-900 mb-1">
                      {title}
                    </p>
                    <p className="text-xs text-gray-500">{desc}</p>
                    {code && (
                      <p className="mt-2 inline-block font-mono text-[11px] font-semibold tracking-wide text-primary-700 bg-white px-2.5 py-1 rounded-md border border-primary-200">
                        {code}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-600 to-emerald-600 rounded-3xl p-10 text-white">
            <div className="text-4xl mb-5">🌏</div>
            <h3 className="text-xl lg:text-[1.7rem] font-black leading-tight tracking-tight mb-4">
              Ready for International Partnerships
            </h3>
            <p className="text-white/80 leading-relaxed text-sm mb-6">
              We welcome inquiries from international buyers, importers, and
              distributors interested in Indonesian agricultural commodities —
              rice, spices, corn, and more.
            </p>
            <ul className="flex flex-col gap-3 mb-7">
              {exportPoints.map((p) => (
                <li key={p} className="flex gap-2.5 items-center">
                  <span className="w-[18px] h-[18px] shrink-0 rounded-full bg-white/20 flex items-center justify-center text-[10px]">
                    ✓
                  </span>
                  <span className="text-[13px] text-white/90">{p}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/kontak?subject=export"
              className="block w-full text-center px-4 py-3.5 bg-white text-primary-700 text-sm font-extrabold rounded-xl hover:opacity-90 transition-opacity"
            >
              Contact for Export Inquiry →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-100 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-3">
            Siap Bermitra dengan Kami?
          </h2>
          <p className="text-gray-500 italic leading-relaxed mb-8">
            Ready to partner with us? Let&apos;s grow together.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 px-7 py-3 bg-primary-600 text-white text-sm font-bold rounded-xl shadow-lg shadow-primary-600/25 hover:bg-primary-700 transition-colors"
            >
              Hubungi Kami <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/layanan"
              className="px-7 py-3 bg-white text-gray-700 text-sm font-semibold rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              Lihat Layanan
            </Link>
            <Link
              href="/download"
              className="inline-flex items-center gap-2 px-7 py-3 bg-white text-gray-700 text-sm font-semibold rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <Globe2 className="w-4 h-4" /> Download Profile
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
