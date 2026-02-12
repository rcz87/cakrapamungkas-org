import {
  Building2,
  Target,
  Eye,
  Users,
  Shield,
  FileCheck,
  Sprout,
} from "lucide-react";

export const metadata = {
  title: "Tentang Kami | CV. Cakra Pamungkas Mandiri",
  description:
    "Profil CV. Cakra Pamungkas Mandiri — Visi, Misi, Tim, dan Legalitas perusahaan.",
};

export default function TentangPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-800/60 border border-primary-700/50 rounded-full mb-6">
              <Building2 className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-primary-200 font-medium">
                Company Profile
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Tentang Kami
            </h1>
            <p className="mt-4 text-lg text-primary-100/80 leading-relaxed">
              CV. Cakra Pamungkas Mandiri adalah badan usaha yang bergerak di
              bidang agribisnis dan edukasi pertanian di Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-primary-50 rounded-2xl p-8 lg:p-10 border border-primary-100">
              <div className="w-14 h-14 bg-primary-600 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Visi</h2>
              <p className="text-gray-700 leading-relaxed">
                Menjadi perusahaan agribisnis terdepan yang mendorong modernisasi
                pertanian Indonesia melalui edukasi, teknologi, dan layanan
                terintegrasi — sehingga petani dan pelaku usaha tani dapat
                berkembang secara mandiri dan berkelanjutan.
              </p>
            </div>

            <div className="bg-earth-50 rounded-2xl p-8 lg:p-10 border border-earth-100">
              <div className="w-14 h-14 bg-earth-500 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Misi</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <Sprout className="w-5 h-5 text-earth-500 mt-0.5 shrink-0" />
                  <span>
                    Menyediakan layanan jasa maklon berkualitas dengan standar
                    yang transparan dan profesional.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Sprout className="w-5 h-5 text-earth-500 mt-0.5 shrink-0" />
                  <span>
                    Memperluas akses petani terhadap informasi budidaya,
                    manajemen, dan regulasi pertanian terkini.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Sprout className="w-5 h-5 text-earth-500 mt-0.5 shrink-0" />
                  <span>
                    Mengembangkan teknologi digital (PadiDoc) untuk membantu
                    diagnosa masalah tanaman secara cepat dan akurat.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Sprout className="w-5 h-5 text-earth-500 mt-0.5 shrink-0" />
                  <span>
                    Membangun kemitraan yang saling menguntungkan dengan petani,
                    pengusaha, dan pemerintah.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tim / Profil */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Tim Kami
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Dijalankan oleh profesional yang berdedikasi dalam memajukan
              pertanian Indonesia.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "RCZ",
                role: "Founder & CEO",
                desc: "Pendiri CV. Cakra Pamungkas Mandiri dengan visi memajukan pertanian Indonesia melalui teknologi dan edukasi. Berpengalaman dalam pengelolaan agribisnis dan pengembangan usaha pertanian.",
              },
              {
                name: "Sapto",
                role: "Manajer Operasional",
                desc: "Mengawasi operasional harian termasuk jasa maklon penggilingan gabah dan distribusi sarana produksi pertanian.",
              },
              {
                name: "Stalyyna",
                role: "Edukasi & Konten",
                desc: "Bertanggung jawab atas konten edukasi pertanian, riset artikel, dan pengembangan platform PadiDoc.",
              },
            ].map((member) => (
              <div
                key={member.role}
                className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm"
              >
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">
                  {member.name}
                </h3>
                <p className="text-sm text-primary-600 font-medium mt-1">
                  {member.role}
                </p>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legalitas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Legalitas Perusahaan
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              CV. Cakra Pamungkas Mandiri adalah badan usaha resmi dan
              terdaftar.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                icon: FileCheck,
                title: "Nomor Induk Berusaha (NIB)",
                desc: "Terdaftar resmi dalam sistem OSS (Online Single Submission) pemerintah.",
              },
              {
                icon: Shield,
                title: "Akta Pendirian CV",
                desc: "Akta notaris pendirian CV yang sah sesuai hukum Indonesia.",
              },
            ].map((doc) => (
              <div
                key={doc.title}
                className="flex items-start gap-5 bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center shrink-0">
                  <doc.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{doc.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{doc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
