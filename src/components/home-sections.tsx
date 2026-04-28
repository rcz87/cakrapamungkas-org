import Link from "next/link";
import { ArrowRight } from "lucide-react";

const commodities = [
  {
    name: "Jahe & Rempah",
    icon: "🫚",
    bg: "bg-orange-50",
    border: "border-orange-200",
    text: "text-orange-800",
    desc: "Jahe merah, jahe gajah, kunyit, kencur, temulawak",
  },
  {
    name: "Porang",
    icon: "🥔",
    bg: "bg-purple-50",
    border: "border-purple-200",
    text: "text-purple-900",
    desc: "Umbi porang — tepung konjac ekspor ke Jepang, China & Eropa",
  },
  {
    name: "Lada & Cabai",
    icon: "🌶️",
    bg: "bg-rose-50",
    border: "border-rose-200",
    text: "text-rose-700",
    desc: "Lada hitam, lada putih, cabai kering, paprika kering",
  },
  {
    name: "Kopi & Kakao",
    icon: "☕",
    bg: "bg-fuchsia-50",
    border: "border-fuchsia-200",
    text: "text-fuchsia-700",
    desc: "Kopi robusta & arabika, biji kakao fermentasi premium",
  },
  {
    name: "Kunyit & Temulawak",
    icon: "🟡",
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    text: "text-yellow-800",
    desc: "Kunyit kering, temulawak, irisan & bubuk untuk farmasi & herbal",
  },
  {
    name: "Padi & Beras",
    icon: "🌾",
    bg: "bg-primary-50",
    border: "border-primary-200",
    text: "text-primary-700",
    desc: "Gabah basah/kering, beras premium & medium, penggilingan maklon",
  },
  {
    name: "Jagung",
    icon: "🌽",
    bg: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-800",
    desc: "Jagung pipil kering, jagung basah, pakan ternak berkualitas",
  },
];

export function CommoditiesSection() {
  return (
    <section className="bg-white border-t border-gray-100 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-primary-600">
            Komoditas Unggulan
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold text-gray-900 tracking-tight mt-2 mb-3">
            Multi-Komoditas Hasil Bumi
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Kami bergerak di berbagai komoditas pertanian — bukan hanya padi,
            tapi juga rempah-rempah, hortikultura, dan hasil bumi Indonesia
            untuk pasar lokal & ekspor.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {commodities.map((c) => (
            <Link
              key={c.name}
              href="/komoditas"
              className={`group block p-7 rounded-2xl border ${c.bg} ${c.border} transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5`}
            >
              <div className="text-4xl mb-3.5">{c.icon}</div>
              <h3 className={`text-base font-bold mb-2 ${c.text}`}>{c.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/komoditas"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
          >
            Lihat Semua Komoditas <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: "🫚",
    sub: "Pasca-Panen & Proses",
    title: "Pengolahan Rempah",
    desc: "Sortasi, pengeringan & pengemasan jahe, kunyit, lada untuk pasar lokal & ekspor.",
  },
  {
    icon: "🌾",
    sub: "Multi-Komoditas",
    title: "Jual Beli Komoditas",
    desc: "Pembelian gabah, jagung, dan hasil bumi dari petani dengan harga kompetitif.",
  },
  {
    icon: "🤝",
    sub: "Penggilingan & Maklon",
    title: "Jasa Maklon",
    desc: "Penggilingan gabah berkualitas standar Bulog. Transparan, kapasitas besar.",
  },
  {
    icon: "📦",
    sub: "Input Pertanian",
    title: "Sarana Produksi",
    desc: "Pupuk organik & anorganik, benih unggul bersertifikat, pestisida resmi.",
  },
];

export function ServicesSection() {
  return (
    <section className="bg-white border-t border-gray-100 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1">
            <span className="text-xs font-bold tracking-widest uppercase text-primary-600">
              Layanan Kami
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mt-2 mb-4 leading-tight">
              CV. Cakra Pamungkas Mandiri
            </h2>
            <p className="text-gray-500 leading-relaxed mb-7 text-sm">
              Bergerak di bisnis agribisnis multi-komoditas — dari jasa maklon
              penggilingan padi, perdagangan gabah dan jagung, pengolahan
              rempah-rempah, hingga penyediaan sarana produksi pertanian.
            </p>
            <div className="flex flex-col gap-2.5">
              <Link
                href="/layanan"
                className="inline-flex items-center justify-between gap-2 px-5 py-3 bg-primary-600 text-white text-sm font-bold rounded-xl hover:bg-primary-700 transition-colors"
              >
                Lihat Semua Layanan <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/kontak"
                className="inline-flex items-center justify-between gap-2 px-5 py-3 bg-gray-50 text-gray-700 text-sm font-semibold rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors"
              >
                Hubungi Kami <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {services.map((s) => (
              <div
                key={s.title}
                className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-primary-50/50 hover:border-primary-100 transition-colors"
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-primary-600 mb-1">
                  {s.sub}
                </p>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PadiDocBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-emerald-600 to-emerald-700 py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-100"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 50%, rgba(255,255,255,0.08) 0%, transparent 50%), radial-gradient(circle at 90% 30%, rgba(255,255,255,0.06) 0%, transparent 40%)",
        }}
      />
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 rounded-full mb-5">
          <span className="text-base">🌾</span>
          <span className="text-xs font-bold tracking-wider text-white">
            Aplikasi PadiDoc
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-black text-white leading-tight tracking-tight mb-4">
          Kelola Penggilingan Padi
          <br className="hidden sm:block" />
          dengan Sistem Modern
        </h2>
        <p className="text-white/85 leading-relaxed max-w-xl mx-auto mb-9">
          Dashboard analytics real-time, Telegram Bot &amp; Mini App, AI
          Assistant Claude, nota PDF otomatis — sistem manajemen lengkap untuk
          penggilingan padi modern.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://demo.cakrapamungkas.digital"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 bg-white text-primary-700 text-sm font-extrabold rounded-xl shadow-lg shadow-black/15 hover:shadow-xl transition-shadow"
          >
            Coba Demo Gratis <ArrowRight className="w-4 h-4" />
          </a>
          <Link
            href="/padidoc"
            className="inline-flex items-center gap-2 px-7 py-3 bg-white/15 text-white text-sm font-semibold rounded-xl border border-white/30 hover:bg-white/20 transition-colors"
          >
            Pelajari Lebih Lanjut
          </Link>
        </div>
      </div>
    </section>
  );
}
