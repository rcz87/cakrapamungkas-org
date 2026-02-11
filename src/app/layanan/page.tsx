import Link from "next/link";
import {
  Handshake,
  Wheat,
  Leaf,
  ArrowRight,
  CheckCircle2,
  Package,
} from "lucide-react";

export const metadata = {
  title: "Layanan | CV. Cakra Pamungkas Mandiri",
  description:
    "Jasa Maklon, Jual Beli Gabah, dan Sarana Produksi Pertanian (Saprotan) dari CV. Cakra Pamungkas Mandiri.",
};

const layananData = [
  {
    id: "maklon",
    icon: Handshake,
    title: "Jasa Maklon",
    subtitle: "Penggilingan & Pengolahan Gabah",
    description:
      "Layanan penggilingan gabah menjadi beras berkualitas dengan standar yang sesuai aturan Bulog. Kami menawarkan kerjasama maklon yang transparan, profesional, dan saling menguntungkan bagi kedua belah pihak.",
    features: [
      "Penggilingan gabah dengan mesin modern",
      "Standar kualitas sesuai aturan Bulog",
      "Aturan pembayaran yang transparan",
      "Kapasitas produksi besar",
      "Proses quality control ketat",
    ],
  },
  {
    id: "gabah",
    icon: Wheat,
    title: "Jual Beli Gabah",
    subtitle: "Perdagangan Gabah & Beras",
    description:
      "Kami membeli gabah dari petani dengan harga kompetitif dan menjual beras berkualitas ke pasar. Menjadi jembatan antara petani dan konsumen untuk memastikan distribusi yang efisien dan adil.",
    features: [
      "Harga beli gabah kompetitif",
      "Pembayaran tepat waktu",
      "Penerimaan gabah dari berbagai varietas",
      "Jaringan distribusi luas",
      "Transparansi harga pasar",
    ],
  },
  {
    id: "saprotan",
    icon: Package,
    title: "Sarana Produksi Pertanian",
    subtitle: "Pupuk, Benih, & Pestisida",
    description:
      "Penyediaan sarana produksi pertanian (saprotan) berkualitas meliputi pupuk, benih unggul, dan pestisida. Memastikan petani mendapatkan input pertanian terbaik untuk hasil panen optimal.",
    features: [
      "Pupuk berkualitas (organik & anorganik)",
      "Benih padi unggul bersertifikat",
      "Pestisida & herbisida terdaftar resmi",
      "Harga terjangkau untuk petani",
      "Konsultasi penggunaan saprotan",
    ],
  },
];

export default function LayananPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-800/60 border border-primary-700/50 rounded-full mb-6">
              <Handshake className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-primary-200 font-medium">
                Layanan Kami
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Jasa & Produk
            </h1>
            <p className="mt-4 text-lg text-primary-100/80 leading-relaxed">
              Layanan komprehensif dari hulu ke hilir untuk mendukung
              keberhasilan pertanian Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Layanan Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {layananData.map((item, index) => (
              <div
                key={item.id}
                id={item.id}
                className="scroll-mt-24"
              >
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-50 rounded-full mb-4">
                      <item.icon className="w-4 h-4 text-primary-600" />
                      <span className="text-sm text-primary-700 font-medium">
                        {item.subtitle}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {item.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <ul className="space-y-3">
                      {item.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
                          <span className="text-gray-700 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className={`${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl h-80 flex items-center justify-center">
                      <item.icon className="w-24 h-24 text-primary-400" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Tertarik dengan Layanan Kami?
          </h2>
          <p className="text-gray-600 mb-8">
            Hubungi kami untuk konsultasi dan penawaran kerjasama.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors"
            >
              Hubungi Kami
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/padidoc"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary-700 font-semibold rounded-xl hover:bg-gray-50 border border-primary-200 transition-colors"
            >
              <Leaf className="w-4 h-4" />
              Info PadiDoc
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
