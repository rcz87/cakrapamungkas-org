import { Leaf, Mail, AlertCircle } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "PadiDoc - Coming Soon | CV. Cakra Pamungkas Mandiri",
  description:
    "Aplikasi PadiDoc sedang dalam tahap pengembangan. Hubungi kami untuk informasi lebih lanjut.",
};

export default function PadiDocPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 rounded-3xl mb-8">
          <Leaf className="w-12 h-12 text-primary-200" />
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          PadiDoc
        </h1>
        <p className="text-xl text-primary-200 mb-8">
          Solusi Manajemen Penggilingan Padi Modern
        </p>

        {/* Maintenance Message */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/20 rounded-2xl mb-6">
            <AlertCircle className="w-8 h-8 text-amber-300" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Aplikasi Sedang Dalam Pengembangan
          </h2>
          <p className="text-primary-100/80 leading-relaxed mb-6">
            PadiDoc adalah aplikasi manajemen penggilingan padi yang powerful untuk
            membantu Anda mengelola operasional, keuangan, dan produksi secara
            efisien. Aplikasi ini sedang dalam tahap finalisasi dan akan segera
            diluncurkan.
          </p>
          
          {/* Features Preview */}
          <div className="text-left space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary-400 rounded-full mt-2"></div>
              <p className="text-primary-100/80 text-sm">
                Manajemen produksi dan inventory real-time
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary-400 rounded-full mt-2"></div>
              <p className="text-primary-100/80 text-sm">
                Laporan keuangan dan analisis bisnis
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary-400 rounded-full mt-2"></div>
              <p className="text-primary-100/80 text-sm">
                Dashboard performa dan monitoring
              </p>
            </div>
          </div>

          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
            <p className="text-sm text-amber-200 font-medium">
              💼 Tertarik menggunakan PadiDoc untuk bisnis Anda?
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="mailto:info@cakrapamungkas.org?subject=Informasi PadiDoc&body=Halo, saya tertarik dengan aplikasi PadiDoc. Mohon informasi lebih lanjut."
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-700 font-bold rounded-xl hover:bg-primary-50 transition-colors shadow-lg"
          >
            <Mail className="w-5 h-5" />
            Hubungi Kami via Email
          </a>
          <Link
            href="/kontak"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 border border-white/20 transition-colors"
          >
            Formulir Kontak
          </Link>
        </div>

        {/* Back to Home */}
        <Link
          href="/"
          className="text-primary-300 hover:text-primary-200 transition-colors text-sm font-medium"
        >
          ← Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
