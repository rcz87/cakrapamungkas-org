import Link from "next/link";
import {
  BookOpen,
  FileText,
  Folder,
  Download,
  ArrowRight,
  Leaf,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "Pusat Ilmu - Resources Pertanian | CV. Cakra Pamungkas Mandiri",
  description:
    "Akses ratusan SOP, template, panduan praktis, dan resources lengkap untuk meningkatkan produktivitas agribisnis Anda.",
};

const resourceCategories = [
  {
    title: "Dasar Pertanian",
    icon: Leaf,
    description: "Panduan dasar pertanian untuk pemula",
    color: "bg-green-100 text-green-700 border-green-200",
    items: [
      "50+ Checklist operasional harian",
      "Roadmap memulai pertanian dari nol",
      "10 Panduan lokasi, tanah, air, dan iklim",
      "46 SOP lengkap dari tanam hingga panen",
    ],
    link: "/download?category=dasar",
    downloadCount: "150+ Files",
  },
  {
    title: "Pengembangan Bisnis",
    icon: FileText,
    description: "Resources untuk pengembangan agribisnis",
    color: "bg-blue-100 text-blue-700 border-blue-200",
    items: [
      "Template surat & perjanjian bisnis",
      "Form HR dan operasional",
      "Template keuangan dan RAB",
      "Business planning & strategi",
      "Chart analisis dan dashboard",
    ],
    link: "/download?category=pengembangan",
    downloadCount: "200+ Files",
  },
  {
    title: "Auto Project",
    icon: Folder,
    description: "Sistem otomasi dan digitalisasi",
    color: "bg-purple-100 text-purple-700 border-purple-200",
    items: [
      "Link Google Sheet database",
      "Template marketing dan iklan",
      "Invoice dan laporan sales",
      "Template HR dan kepegawaian",
      "Sistem keuangan terintegrasi",
    ],
    link: "/download?category=autoproject",
    downloadCount: "100+ Files",
  },
];

const quickGuides = [
  {
    title: "Checklist Irigasi & Manajemen Air",
    category: "Operasional",
    type: "Checklist",
    file: "Checklist Irigasi dan Manajemen Air.docx",
    folder: "dasar",
  },
  {
    title: "SOP Pemupukan Susulan 4R",
    category: "Budidaya",
    type: "SOP",
    file: "SOP 12 Pemupukan Susulan 4R.docx",
    folder: "dasar",
  },
  {
    title: "Template RAB Per Blok",
    category: "Keuangan",
    type: "Template",
    file: "SOP 03 RAB dan Pencatatan Biaya Per Siklus Per Blok.docx",
    folder: "dasar",
  },
  {
    title: "Checklist Panen & Serah Terima",
    category: "Operasional",
    type: "Checklist",
    file: "Checklist Panen dan SerahTerima.docx",
    folder: "dasar",
  },
  {
    title: "SOP QC & Release Pengiriman",
    category: "Quality Control",
    type: "SOP",
    file: "SOP 20 QC Batch dan Release Pengiriman.docx",
    folder: "dasar",
  },
  {
    title: "Dashboard Operasional Harian",
    category: "Manajemen",
    type: "Dashboard",
    file: "SOP 34 Sistem Data dan Dashboard Operasional.docx",
    folder: "pengembangan",
  },
];

export default function PusatIlmuPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-800/60 border border-primary-700/50 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-primary-200 font-medium">
                Resources Center
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Pusat Ilmu Pertanian
            </h1>
            <p className="mt-4 text-lg text-primary-100/80 leading-relaxed">
              Akses ratusan SOP, checklist, template, dan panduan praktis untuk 
              meningkatkan produktivitas dan efisiensi agribisnis Anda.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-primary-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>400+ Resources Tersedia</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>Gratis & Siap Pakai</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Kategori Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pilih kategori sesuai kebutuhan bisnis pertanian Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {resourceCategories.map((category) => (
              <div
                key={category.title}
                className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-primary-200 hover:shadow-lg transition-all"
              >
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${category.color} mb-6`}>
                  <category.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {category.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <span className="text-sm font-semibold text-gray-500">
                    {category.downloadCount}
                  </span>
                  <Link
                    href={category.link}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Akses
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access Guides */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Panduan Populer
            </h2>
            <p className="text-lg text-gray-600">
              Akses cepat ke panduan yang paling sering digunakan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickGuides.map((guide, idx) => (
              <a
                key={idx}
                href={`/downloads/${guide.folder}/${guide.file}`}
                download
                className="bg-white rounded-xl p-6 border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all group cursor-pointer block"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <span className="inline-block px-2.5 py-1 bg-primary-50 text-primary-700 text-xs font-semibold rounded-lg mb-2">
                      {guide.type}
                    </span>
                    <h3 className="font-bold text-gray-900 group-hover:text-primary-700 transition-colors">
                      {guide.title}
                    </h3>
                  </div>
                  <Download className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
                </div>
                <p className="text-sm text-gray-500 mb-3">{guide.category}</p>
                <div className="text-xs text-primary-600 font-semibold">
                  Klik untuk download →
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/download"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-colors shadow-lg"
            >
              Lihat Semua Panduan
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA to Articles */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="w-10 h-10 text-primary-200 mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Cari Insight & Analisis Mendalam?
          </h2>
          <p className="text-primary-100/80 mb-8">
            Baca artikel kami tentang tren pertanian, teknologi, dan strategi agribisnis modern.
          </p>
          <Link
            href="/artikel"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-bold rounded-xl hover:bg-primary-50 transition-colors shadow-lg"
          >
            <BookOpen className="w-5 h-5" />
            Baca Artikel
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
