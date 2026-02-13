import Link from "next/link";
import { Leaf, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/layanan", label: "Layanan" },
  { href: "/pusat-ilmu", label: "Pusat Ilmu" },
  { href: "/download", label: "Download Area" },
  { href: "/kontak", label: "Kontak" },
];

const layananLinks = [
  { href: "/layanan#maklon", label: "Jasa Maklon" },
  { href: "/layanan#gabah", label: "Jual Beli Gabah" },
  { href: "/layanan#saprotan", label: "Saprotan" },
  { href: "/padidoc", label: "PadiDoc App" },
];

export function Footer() {
  return (
    <footer className="bg-primary-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-white text-sm">Cakra Pamungkas</p>
                <p className="text-[11px] text-primary-400 font-medium">
                  Mandiri
                </p>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              CV. Cakra Pamungkas Mandiri — Mitra terpercaya dalam edukasi
              pertanian, jasa maklon, dan solusi agribisnis modern di Indonesia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              Navigasi
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Layanan</h3>
            <ul className="space-y-2.5">
              {layananLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary-400 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400">
                  Indonesia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary-400 shrink-0" />
                <span className="text-sm text-gray-400">
                  Hubungi Kami
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary-400 shrink-0" />
                <span className="text-sm text-gray-400">
                  info@cakrapamungkas.org
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} CV. Cakra Pamungkas Mandiri. All
            rights reserved.
          </p>
          <Link
            href="/padidoc"
            className="text-xs text-primary-400 hover:text-primary-300 font-medium transition-colors"
          >
            Info PadiDoc — Manajemen Penggilingan Padi →
          </Link>
        </div>
      </div>
    </footer>
  );
}
