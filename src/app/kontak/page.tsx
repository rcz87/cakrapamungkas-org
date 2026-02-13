"use client";

import { useState, type FormEvent } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

const subjectOptions = [
  { value: "", label: "Pilih subjek..." },
  { value: "maklon", label: "Kerjasama Jasa Maklon" },
  { value: "gabah", label: "Jual Beli Gabah" },
  { value: "saprotan", label: "Saprotan" },
  { value: "padidoc", label: "PadiDoc" },
  { value: "lainnya", label: "Lainnya" },
];

export default function KontakPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const nama = data.get("nama") as string;
    const email = data.get("email") as string;
    const wa = data.get("wa") as string;
    const subjek = data.get("subjek") as string;
    const pesan = data.get("pesan") as string;

    const subjectText = subjectOptions.find((o) => o.value === subjek)?.label || subjek;

    const mailtoBody = [
      `Nama: ${nama}`,
      `Email: ${email}`,
      `WhatsApp: ${wa}`,
      `Subjek: ${subjectText}`,
      "",
      `Pesan:`,
      pesan,
    ].join("\n");

    window.location.href = `mailto:info@cakrapamungkas.org?subject=${encodeURIComponent(
      `[Website] ${subjectText}`
    )}&body=${encodeURIComponent(mailtoBody)}`;

    setSubmitted(true);
  }

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

                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle2 className="w-16 h-16 text-primary-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Terima kasih!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Aplikasi email Anda akan terbuka. Silakan kirim email tersebut untuk menghubungi kami.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      Kirim pesan lagi
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Nama Lengkap
                        </label>
                        <input
                          type="text"
                          name="nama"
                          required
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
                          name="email"
                          required
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
                        name="wa"
                        placeholder="08xxxxxxxxxx"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Subjek
                      </label>
                      <select
                        name="subjek"
                        required
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white text-gray-600"
                      >
                        {subjectOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Pesan
                      </label>
                      <textarea
                        name="pesan"
                        required
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
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
