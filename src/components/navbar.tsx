"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Leaf } from "lucide-react";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/layanan", label: "Layanan" },
  { href: "/artikel", label: "Artikel" },
  { href: "/pusat-ilmu", label: "Pusat Ilmu" },
  { href: "/download", label: "Download" },
  { href: "/kontak", label: "Kontak" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center group-hover:bg-primary-700 transition-colors">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-gray-900 text-sm leading-tight">
                Cakra Pamungkas
              </p>
              <p className="text-[11px] text-primary-600 font-medium">
                Solusi Pertanian Modern
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/padidoc"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white text-sm font-semibold rounded-xl hover:bg-primary-700 transition-colors shadow-md shadow-primary-600/20"
            >
              <Leaf className="w-4 h-4" />
              Info PadiDoc
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 mt-2 pt-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-gray-600 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/padidoc"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-xl hover:bg-primary-700 transition-colors"
              >
                <Leaf className="w-4 h-4" />
                Info PadiDoc
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
