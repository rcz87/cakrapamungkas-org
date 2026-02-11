import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "CV. Cakra Pamungkas Mandiri | Edukasi & Solusi Pertanian Modern",
  description:
    "Company profile CV. Cakra Pamungkas Mandiri — Jasa Maklon, Jual Beli Gabah, Saprotan, dan Edukasi Pertanian. Coba aplikasi PadiDoc untuk diagnosa tanaman padi.",
  keywords: [
    "pertanian",
    "edukasi pertanian",
    "jasa maklon",
    "gabah",
    "saprotan",
    "PadiDoc",
    "budidaya padi",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
