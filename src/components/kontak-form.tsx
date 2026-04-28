"use client";

import { useState, type FormEvent } from "react";

const WA_NUMBER = "6285228003820";

const subjekOptions = [
  {
    v: "maklon",
    id: "Jasa Maklon / Penggilingan",
    en: "Contract Milling Service",
  },
  {
    v: "beli-komoditas",
    id: "Jual Beli Komoditas",
    en: "Commodity Trading",
  },
  {
    v: "export",
    id: "Export Inquiry (Rempah/Komoditas)",
    en: "Export Inquiry (Spices/Commodities)",
  },
  {
    v: "saprotan",
    id: "Sarana Produksi Pertanian",
    en: "Agricultural Inputs",
  },
  { v: "padidoc", id: "Informasi PadiDoc", en: "PadiDoc Information" },
  { v: "kemitraan", id: "Kemitraan Petani", en: "Farmer Partnership" },
  { v: "lain", id: "Lainnya / Other", en: "Other" },
];

export function KontakForm() {
  const [bahasa, setBahasa] = useState<"id" | "en">("id");
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [wa, setWa] = useState("");
  const [subjek, setSubjek] = useState("");
  const [pesan, setPesan] = useState("");
  const [sent, setSent] = useState(false);

  const isId = bahasa === "id";

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Compose WhatsApp message and open WA — no backend wiring yet,
    // but this gives a working "send" path for now.
    const subjekLabel =
      subjekOptions.find((s) => s.v === subjek)?.[isId ? "id" : "en"] ??
      (isId ? "Pesan dari website" : "Message from website");
    const lines = [
      isId ? `Halo, saya ${nama}.` : `Hello, my name is ${nama}.`,
      `Email: ${email}`,
      wa ? `WA/Phone: ${wa}` : "",
      `${isId ? "Keperluan" : "Subject"}: ${subjekLabel}`,
      "",
      pesan,
    ]
      .filter(Boolean)
      .join("\n");
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines)}`;
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
    setSent(true);
  }

  if (sent) {
    return (
      <div className="text-center py-16 px-8 bg-primary-50 rounded-3xl border-2 border-primary-200">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-2xl font-black text-primary-900 mb-3">
          Pesan Terkirim!
        </h3>
        <p className="text-gray-500 mb-2">
          Terima kasih telah menghubungi kami. Kami akan membalas dalam 1×24
          jam.
        </p>
        <p className="text-sm text-gray-400 italic mb-7">
          Thank you for reaching out. We&apos;ll respond within 24 hours.
        </p>
        <button
          onClick={() => {
            setSent(false);
            setNama("");
            setEmail("");
            setWa("");
            setSubjek("");
            setPesan("");
          }}
          className="px-6 py-3 bg-primary-600 text-white text-sm font-bold rounded-xl hover:bg-primary-700 transition-colors"
        >
          Kirim Pesan Lain
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-50 rounded-3xl p-8 lg:p-10 border border-gray-100"
    >
      <div className="flex gap-2 mb-7">
        <button
          type="button"
          onClick={() => setBahasa("id")}
          className={`flex-1 px-3 py-2.5 rounded-lg text-sm font-bold transition-colors ${
            isId
              ? "bg-primary-600 text-white border border-primary-600"
              : "bg-white text-gray-500 border border-gray-200"
          }`}
        >
          🇮🇩 Bahasa Indonesia
        </button>
        <button
          type="button"
          onClick={() => setBahasa("en")}
          className={`flex-1 px-3 py-2.5 rounded-lg text-sm font-bold transition-colors ${
            !isId
              ? "bg-primary-600 text-white border border-primary-600"
              : "bg-white text-gray-500 border border-gray-200"
          }`}
        >
          🇬🇧 English
        </button>
      </div>

      <h3 className="text-lg font-extrabold text-gray-900 mb-1.5">
        {isId ? "Kirim Pesan" : "Send a Message"}
      </h3>
      <p
        className={`text-sm text-gray-400 mb-6 ${!isId ? "italic" : ""}`}
      >
        {isId
          ? "Isi formulir di bawah dan kami akan segera merespons."
          : "Fill out the form below and we'll get back to you shortly."}
      </p>

      <div className="grid sm:grid-cols-2 gap-3.5 mb-3.5">
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1.5">
            {isId ? "Nama Lengkap" : "Full Name"} *
          </label>
          <input
            type="text"
            required
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder={isId ? "Nama Anda" : "Your name"}
            className="w-full px-3.5 py-3 text-sm bg-white border-2 border-gray-200 rounded-lg outline-none focus:border-primary-600 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1.5">
            Email *
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={isId ? "email@contoh.com" : "email@example.com"}
            className="w-full px-3.5 py-3 text-sm bg-white border-2 border-gray-200 rounded-lg outline-none focus:border-primary-600 transition-colors"
          />
        </div>
      </div>

      <div className="mb-3.5">
        <label className="block text-xs font-bold text-gray-700 mb-1.5">
          WhatsApp / Phone
        </label>
        <input
          type="tel"
          value={wa}
          onChange={(e) => setWa(e.target.value)}
          placeholder="+62 8xx-xxxx-xxxx"
          className="w-full px-3.5 py-3 text-sm bg-white border-2 border-gray-200 rounded-lg outline-none focus:border-primary-600 transition-colors"
        />
      </div>

      <div className="mb-3.5">
        <label className="block text-xs font-bold text-gray-700 mb-1.5">
          {isId ? "Keperluan" : "Subject / Inquiry Type"} *
        </label>
        <select
          required
          value={subjek}
          onChange={(e) => setSubjek(e.target.value)}
          className={`w-full px-3.5 py-3 text-sm bg-white border-2 border-gray-200 rounded-lg outline-none focus:border-primary-600 transition-colors ${
            subjek ? "text-gray-900" : "text-gray-400"
          }`}
        >
          <option value="">
            {isId ? "Pilih keperluan..." : "Select inquiry type..."}
          </option>
          {subjekOptions.map((s) => (
            <option key={s.v} value={s.v}>
              {isId ? s.id : s.en}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-xs font-bold text-gray-700 mb-1.5">
          {isId ? "Pesan" : "Message"} *
        </label>
        <textarea
          required
          rows={5}
          value={pesan}
          onChange={(e) => setPesan(e.target.value)}
          placeholder={
            isId
              ? "Tulis pesan atau pertanyaan Anda di sini..."
              : "Write your message or inquiry here..."
          }
          className="w-full px-3.5 py-3 text-sm bg-white border-2 border-gray-200 rounded-lg outline-none focus:border-primary-600 transition-colors resize-y"
        />
      </div>

      <button
        type="submit"
        className="w-full px-4 py-3.5 bg-gradient-to-br from-primary-600 to-primary-700 text-white text-[15px] font-extrabold rounded-xl shadow-lg shadow-primary-600/30 hover:shadow-xl hover:from-primary-700 hover:to-primary-800 transition-all"
      >
        📨 {isId ? "Kirim Pesan" : "Send Message"}
      </button>

      <p className="text-xs text-gray-400 text-center mt-3.5 leading-relaxed">
        {isId
          ? "Kami akan merespons dalam 1×24 jam pada hari kerja."
          : "We'll respond within 24 hours on business days."}
      </p>
    </form>
  );
}
