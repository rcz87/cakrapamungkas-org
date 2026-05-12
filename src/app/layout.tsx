import type { Metadata } from "next";
import { OrganizationJsonLd } from "@/components/json-ld";
import { LayoutWrapper } from "@/components/layout-wrapper";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cakrapamungkas.org"),
  alternates: { canonical: "/" },
  title: "CV. Cakra Pamungkas Mandiri | Agribisnis Multi-Komoditas Indonesia",
  description:
    "Pusat agribisnis multi-komoditas — jahe, kunyit, lada, kopi, porang, padi, jagung. Jasa maklon, pengolahan rempah, dan ekspor langsung dari Jawa Tengah ke pasar global.",
  keywords: [
    "agribisnis",
    "rempah indonesia",
    "ekspor jahe",
    "ekspor kunyit",
    "ekspor lada",
    "porang",
    "konjac flour",
    "kopi indonesia",
    "jasa maklon",
    "pengolahan rempah",
    "PadiDoc",
    "edukasi pertanian",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "CV. Cakra Pamungkas Mandiri",
    title: "Agribisnis Multi-Komoditas Indonesia | Cakra Pamungkas",
    description:
      "Rempah & hasil bumi Indonesia kualitas ekspor — jahe, kunyit, lada, kopi, porang. Direct from Central Java farmers to global buyers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agribisnis Multi-Komoditas Indonesia | Cakra Pamungkas",
    description:
      "Rempah & hasil bumi Indonesia kualitas ekspor — direct from Central Java farmers to global buyers.",
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
        <OrganizationJsonLd />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
