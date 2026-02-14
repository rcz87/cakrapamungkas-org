import {
  Leaf,
  Monitor,
  BarChart3,
  Package,
  ShieldCheck,
  Clock,
  Users,
  Zap,
  ArrowRight,
  Play,
  CheckCircle2,
  Mail,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "PadiDoc - Sistem Manajemen Penggilingan Padi | CV. Cakra Pamungkas Mandiri",
  description:
    "PadiDoc adalah aplikasi manajemen penggilingan padi modern. Kelola pembelian, produksi, penjualan, dan stok dengan mudah. Coba demo gratis sekarang!",
  keywords: [
    "PadiDoc",
    "manajemen penggilingan padi",
    "aplikasi pabrik beras",
    "software penggilingan",
    "manajemen produksi beras",
    "inventory padi",
  ],
};

const features = [
  {
    icon: Package,
    title: "Manajemen Inventory",
    description:
      "Kelola stok gabah, beras, dan bahan baku secara real-time. Pantau pergerakan barang masuk dan keluar dengan akurat.",
  },
  {
    icon: BarChart3,
    title: "Laporan Keuangan",
    description:
      "Laporan keuangan otomatis: pembelian, penjualan, laba rugi, dan arus kas. Analisis bisnis dalam satu dashboard.",
  },
  {
    icon: Monitor,
    title: "Dashboard Produksi",
    description:
      "Monitor proses produksi dari gabah masuk hingga beras siap jual. Tracking rendemen dan efisiensi mesin.",
  },
  {
    icon: Users,
    title: "Manajemen Pelanggan",
    description:
      "Database pelanggan dan supplier lengkap. Riwayat transaksi, piutang, dan hutang terkelola dengan rapi.",
  },
  {
    icon: ShieldCheck,
    title: "Keamanan Data",
    description:
      "Data bisnis Anda aman dengan enkripsi dan backup otomatis. Akses berbasis role untuk setiap pengguna.",
  },
  {
    icon: Zap,
    title: "Cepat & Mudah",
    description:
      "Interface intuitif yang mudah dipelajari. Tidak perlu keahlian IT — siapapun bisa langsung menggunakan.",
  },
];

const demoFeatures = [
  "Dashboard performa bisnis",
  "Input pembelian gabah",
  "Proses produksi & rendemen",
  "Penjualan & invoice",
  "Laporan keuangan lengkap",
  "Manajemen stok real-time",
];

export default function PadiDocPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-20 lg:py-28 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-300 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-800/60 border border-primary-700/50 rounded-full mb-6">
                <Leaf className="w-4 h-4 text-primary-400" />
                <span className="text-sm text-primary-200 font-medium">
                  Sistem Manajemen Penggilingan Padi
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                PadiDoc
              </h1>
              <p className="text-xl sm:text-2xl text-primary-100 font-medium mb-4">
                Kelola Bisnis Penggilingan Padi Anda dengan Mudah
              </p>
              <p className="text-lg text-primary-200/80 leading-relaxed mb-8 max-w-lg">
                Dari pembelian gabah, proses produksi, hingga penjualan beras —
                semua terkelola dalam satu platform yang powerful dan mudah digunakan.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://demo.cakrapamungkas.digital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary-700 font-bold rounded-xl hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl text-lg"
                >
                  <Play className="w-5 h-5" />
                  Coba Demo Gratis
                </a>
                <a
                  href="#fitur"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 border border-white/20 transition-colors"
                >
                  Lihat Fitur
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex items-center gap-6 mt-8 text-sm text-primary-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Demo 1 jam gratis</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Tanpa registrasi</span>
                </div>
              </div>
            </div>

            {/* Right - Demo Preview Card */}
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <div className="bg-primary-950/60 rounded-xl p-4 mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <div className="w-3 h-3 bg-green-400 rounded-full" />
                    <span className="ml-2 text-xs text-primary-400 font-mono">
                      demo.cakrapamungkas.digital
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="h-8 bg-primary-800/50 rounded-lg" />
                    <div className="grid grid-cols-3 gap-3">
                      <div className="h-20 bg-primary-800/40 rounded-lg flex flex-col items-center justify-center">
                        <div className="text-xl font-bold text-white">152</div>
                        <div className="text-[10px] text-primary-400">Transaksi</div>
                      </div>
                      <div className="h-20 bg-primary-800/40 rounded-lg flex flex-col items-center justify-center">
                        <div className="text-xl font-bold text-emerald-400">85%</div>
                        <div className="text-[10px] text-primary-400">Rendemen</div>
                      </div>
                      <div className="h-20 bg-primary-800/40 rounded-lg flex flex-col items-center justify-center">
                        <div className="text-xl font-bold text-amber-400">24T</div>
                        <div className="text-[10px] text-primary-400">Stok Beras</div>
                      </div>
                    </div>
                    <div className="h-24 bg-primary-800/30 rounded-lg" />
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-12 bg-primary-800/40 rounded-lg" />
                      <div className="h-12 bg-primary-800/40 rounded-lg" />
                    </div>
                  </div>
                </div>
                <p className="text-center text-sm text-primary-300">
                  Preview Dashboard PadiDoc
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="fitur" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 rounded-full mb-4">
              <Zap className="w-4 h-4 text-primary-600" />
              <span className="text-sm text-primary-700 font-medium">
                Fitur Unggulan
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Semua yang Anda Butuhkan dalam Satu Aplikasi
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              PadiDoc dirancang khusus untuk kebutuhan penggilingan padi di Indonesia,
              dengan fitur lengkap yang mudah digunakan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Info */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-100 rounded-full mb-4">
                <Play className="w-4 h-4 text-primary-600" />
                <span className="text-sm text-primary-700 font-medium">
                  Demo Gratis
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Coba Langsung, Tanpa Ribet
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Explore semua fitur PadiDoc selama 1 jam tanpa perlu registrasi.
                Data sample sudah tersedia agar Anda bisa langsung merasakan
                kemudahannya.
              </p>

              {/* Demo feature list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {demoFeatures.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://demo.cakrapamungkas.digital"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/20 text-lg"
              >
                <Play className="w-5 h-5" />
                Mulai Demo Sekarang
              </a>

              <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                <span>Tanpa registrasi</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full" />
                <span>Data sample lengkap</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full" />
                <span>1 jam akses</span>
              </div>
            </div>

            {/* Right - How it works */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Cara Menggunakan Demo
              </h3>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Klik Tombol Demo",
                    desc: "Klik \"Mulai Demo Sekarang\" untuk membuka halaman demo PadiDoc.",
                  },
                  {
                    step: "2",
                    title: "Login Otomatis",
                    desc: "Klik tombol \"Coba Demo Gratis\" di halaman login. Tidak perlu input username atau password.",
                  },
                  {
                    step: "3",
                    title: "Explore Dashboard",
                    desc: "Langsung masuk ke dashboard dengan data sample. Coba semua fitur yang tersedia.",
                  },
                  {
                    step: "4",
                    title: "Evaluasi Fitur",
                    desc: "Explore selama 1 jam. Setelah itu, sesi akan otomatis berakhir. Anda bisa coba lagi kapan saja.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-primary-700 font-bold text-sm">
                        {item.step}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-800 rounded-2xl mb-6">
            <Leaf className="w-8 h-8 text-primary-300" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Siap Mengelola Bisnis dengan PadiDoc?
          </h2>
          <p className="text-lg text-primary-200/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Hubungi kami untuk informasi harga, implementasi, dan konsultasi
            gratis. Tim kami siap membantu Anda beralih ke manajemen digital.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://demo.cakrapamungkas.digital"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary-700 font-bold rounded-xl hover:bg-primary-50 transition-colors shadow-lg text-lg"
            >
              <Play className="w-5 h-5" />
              Coba Demo Gratis
            </a>
            <a
              href="mailto:info@cakrapamungkas.org?subject=Informasi PadiDoc&body=Halo, saya tertarik dengan aplikasi PadiDoc. Mohon informasi lebih lanjut."
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 border border-white/20 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Hubungi Kami
            </a>
          </div>

          <Link
            href="/"
            className="text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium"
          >
            ← Kembali ke Beranda
          </Link>
        </div>
      </section>
    </div>
  );
}
