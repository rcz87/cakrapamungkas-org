import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
} from "lucide-react";

export const metadata = {
  title: "Kontak | CV. Cakra Pamungkas Mandiri",
  description:
    "Hubungi CV. Cakra Pamungkas Mandiri untuk konsultasi, kerjasama, dan informasi layanan pertanian.",
};

export default function KontakPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-800/60 border border-primary-700/50 rounded-full mb-6">
              <MessageCircle className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-primary-200 font-medium">
                Hubungi Kami
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Kontak
            </h1>
            <p className="mt-4 text-lg text-primary-100/80 leading-relaxed">
              Punya pertanyaan atau ingin bekerjasama? Jangan ragu untuk
              menghubungi kami.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Informasi Kontak
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Alamat</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Indonesia
                      <br />
                      <span className="text-xs text-gray-400">
                        (Alamat lengkap akan diperbarui)
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Telepon / WA</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Hubungi Kami
                      <br />
                      <span className="text-xs text-gray-400">
                        (Nomor akan diperbarui)
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      info@cakrapamungkas.org
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Jam Operasional</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Senin - Sabtu: 08.00 - 17.00 WIB
                      <br />
                      Minggu: Tutup
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-gray-50 rounded-2xl p-8 lg:p-10 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Kirim Pesan
                </h2>
                <p className="text-sm text-gray-500 mb-8">
                  Isi formulir di bawah dan kami akan segera merespons.
                </p>

                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        placeholder="Nama Anda"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="email@contoh.com"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Nomor WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="08xxxxxxxxxx"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Subjek
                    </label>
                    <select className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white text-gray-600">
                      <option value="">Pilih subjek...</option>
                      <option value="maklon">Kerjasama Jasa Maklon</option>
                      <option value="gabah">Jual Beli Gabah</option>
                      <option value="saprotan">Saprotan</option>
                      <option value="padidoc">PadiDoc</option>
                      <option value="lainnya">Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Pesan
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tulis pesan Anda di sini..."
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors w-full sm:w-auto"
                  >
                    <Send className="w-4 h-4" />
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
