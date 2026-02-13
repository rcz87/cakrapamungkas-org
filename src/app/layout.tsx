import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cakrapamungkas.org"),
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
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "CV. Cakra Pamungkas Mandiri",
    title: "CV. Cakra Pamungkas Mandiri | Edukasi & Solusi Pertanian Modern",
    description:
      "Mitra terpercaya dalam edukasi pertanian, jasa maklon, dan solusi agribisnis modern di Indonesia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CV. Cakra Pamungkas Mandiri | Edukasi & Solusi Pertanian Modern",
    description:
      "Mitra terpercaya dalam edukasi pertanian, jasa maklon, dan solusi agribisnis modern di Indonesia.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
