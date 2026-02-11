"use client";

import { useState } from "react";
import {
  Download,
  FileText,
  Lock,
  Mail,
  Phone,
  ArrowRight,
  CheckCircle2,
  X,
} from "lucide-react";

const downloadItems = [
  {
    title: "Template Surat Sewa Lahan",
    description:
      "Template surat perjanjian sewa lahan pertanian yang siap pakai. Format profesional sesuai hukum Indonesia.",
    format: "PDF",
    category: "Perjanjian",
  },
  {
    title: "Template Surat Bagi Hasil",
    description:
      "Template perjanjian bagi hasil pertanian antara pemilik lahan dan petani penggarap.",
    format: "PDF",
    category: "Perjanjian",
  },
  {
    title: "Template Surat Kerjasama Maklon",
    description:
      "Template perjanjian kerjasama jasa maklon penggilingan gabah untuk mitra bisnis.",
    format: "DOC",
    category: "Kerjasama",
  },
  {
    title: "Template Surat Jual Beli Gabah",
    description:
      "Template perjanjian jual beli gabah/beras dengan klausul yang melindungi kedua pihak.",
    format: "PDF",
    category: "Perdagangan",
  },
  {
    title: "Checklist Persiapan Tanam Padi",
    description:
      "Daftar persiapan lengkap sebelum musim tanam: dari pengolahan lahan hingga ketersediaan saprotan.",
    format: "PDF",
    category: "Panduan",
  },
  {
    title: "Kalkulator Kebutuhan Pupuk",
    description:
      "Tabel panduan menghitung kebutuhan pupuk berdasarkan luas lahan dan jenis tanah.",
    format: "PDF",
    category: "Panduan",
  },
];

export default function DownloadPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const handleDownload = (title: string) => {
    setSelectedItem(title);
    setShowModal(true);
  };

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-800/60 border border-primary-700/50 rounded-full mb-6">
              <Download className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-primary-200 font-medium">
                Download Area
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Download Template & Panduan
            </h1>
            <p className="mt-4 text-lg text-primary-100/80 leading-relaxed">
              Unduh gratis template surat perjanjian dan panduan praktis untuk
              kebutuhan agribisnis Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="bg-primary-50 border-b border-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <Lock className="w-5 h-5 text-primary-600 shrink-0" />
            <p className="text-sm text-primary-800">
              Masukkan email atau nomor WhatsApp untuk mengakses file download.
              Data Anda aman dan tidak akan dibagikan ke pihak ketiga.
            </p>
          </div>
        </div>
      </section>

      {/* Download Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {downloadItems.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="flex gap-2">
                    <span className="inline-block px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-lg">
                      {item.format}
                    </span>
                    <span className="inline-block px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-semibold rounded-lg">
                      {item.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  {item.description}
                </p>
                <button
                  onClick={() => handleDownload(item.title)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-xl hover:bg-primary-700 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download Gratis
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-md p-8 relative shadow-2xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Download className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Download File
              </h3>
              <p className="text-sm text-gray-500 mt-1">{selectedItem}</p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setShowModal(false);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    placeholder="email@contoh.com"
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Nomor WhatsApp
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="tel"
                    placeholder="08xxxxxxxxxx"
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4" />
                Kirim & Download
              </button>

              <p className="text-xs text-gray-400 text-center">
                Data Anda aman dan tidak akan dibagikan ke pihak ketiga.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
