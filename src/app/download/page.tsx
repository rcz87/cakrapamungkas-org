import type { Metadata } from "next";
import { DownloadList } from "@/components/download-list";

export const metadata: Metadata = {
  title:
    "Download — Template & Panduan Agribisnis Siap Pakai | Cakra Pamungkas",
  description:
    "26+ template SOP, checklist, dan panduan praktis untuk agribisnis Anda. Gratis, format DOCX & PDF, siap edit & pakai. Dasar Pertanian, Pengembangan Bisnis, Auto Project.",
  alternates: { canonical: "/download" },
  openGraph: {
    title: "Free Indonesian Agribusiness Templates & SOPs",
    description:
      "Free templates, SOPs & practical guides for your agribusiness. Ready to use in DOCX & PDF format.",
    type: "website",
  },
};

export default function DownloadPage() {
  return <DownloadList />;
}
