import type { Metadata } from "next";
import { LayananShowcase } from "@/components/layanan-showcase";

export const metadata: Metadata = {
  title:
    "Layanan — Pengolahan Rempah, Multi-Komoditas, Maklon, Saprotan | Cakra Pamungkas",
  description:
    "Layanan agribisnis global-ready dari Jawa Tengah: pengolahan rempah ekspor, perdagangan multi-komoditas, jasa maklon penggilingan, dan sarana produksi pertanian.",
  alternates: { canonical: "/layanan" },
  openGraph: {
    title: "Indonesian Agribusiness Services — Spice Processing, Trading & More",
    description:
      "Spice processing, multi-commodity trading, contract milling & agri-inputs — integrated agribusiness services for domestic and international markets.",
    type: "website",
  },
};

export default function LayananPage() {
  return <LayananShowcase />;
}
