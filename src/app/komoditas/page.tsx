import type { Metadata } from "next";
import { KomoditasShowcase } from "@/components/komoditas-showcase";

export const metadata: Metadata = {
  title: "Komoditas — Rempah & Hasil Bumi Indonesia | Cakra Pamungkas",
  description:
    "Jahe, kunyit, lada, kopi, porang, jagung, dan beras — komoditas pertanian Indonesia kualitas ekspor langsung dari petani Jawa Tengah. Ginger, turmeric, pepper, coffee & more for global buyers.",
  alternates: { canonical: "/komoditas" },
  openGraph: {
    title: "Indonesian Agricultural Commodities for Global Markets",
    description:
      "Rempah & hasil bumi Indonesia kualitas ekspor — jahe, kunyit, lada, kopi, porang. Direct from Central Java farmers to global buyers.",
    type: "website",
  },
};

export default function KomoditasPage() {
  return <KomoditasShowcase />;
}
