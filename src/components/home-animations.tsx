"use client";

import { TypeWriter, ScrollFadeIn, CountUp } from "./animations";
import {
  TrendingUp,
  Sprout,
  Leaf,
} from "lucide-react";
import type { ReactNode } from "react";

// Hero subtitle with typing effect
export function HeroTypingSubtitle() {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 border border-primary-100 rounded-full mb-6">
      <span className="text-sm text-primary-700 font-medium">
        <TypeWriter
          words={[
            "Portal Ilmu & Berita Pertanian Indonesia",
            "Manajemen Penggilingan Padi Modern",
            "Edukasi & Solusi Agribisnis",
            "Informasi Pertanian Terkini",
          ]}
          typingSpeed={60}
          deletingSpeed={30}
          pauseDuration={3000}
        />
      </span>
    </div>
  );
}

// Stats section with counter animation
const stats = [
  {
    end: 14,
    suffix: "%",
    prefix: "12-",
    label: "Kontribusi PDB Nasional",
    Icon: TrendingUp,
    color: "bg-blue-50 text-blue-600",
  },
  {
    end: 28,
    suffix: "%",
    prefix: "",
    label: "Penyerapan Tenaga Kerja",
    Icon: Sprout,
    color: "bg-green-50 text-green-600",
  },
  {
    end: 34,
    suffix: ",71 Jt",
    prefix: "",
    label: "Produksi Beras 2025 (Ton)",
    Icon: Leaf,
    color: "bg-amber-50 text-amber-600",
  },
  {
    end: 300,
    suffix: " Ribu",
    prefix: "",
    label: "Petani Milenial Aktif",
    Icon: TrendingUp,
    color: "bg-primary-50 text-primary-600",
  },
];

export function AnimatedStats() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <ScrollFadeIn key={stat.label} delay={index * 100} direction="up">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
            <div
              className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${stat.color}`}
            >
              <stat.Icon className="w-6 h-6" />
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-1">
              <CountUp
                end={stat.end}
                suffix={stat.suffix}
                prefix={stat.prefix}
                duration={1800}
              />
            </p>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        </ScrollFadeIn>
      ))}
    </div>
  );
}

// Wrapper for fade-in sections
export function FadeInSection({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}) {
  return (
    <ScrollFadeIn delay={delay} direction={direction} className={className}>
      {children}
    </ScrollFadeIn>
  );
}

// Article card with staggered fade-in
export function AnimatedArticleCard({
  children,
  index,
}: {
  children: ReactNode;
  index: number;
}) {
  return (
    <ScrollFadeIn delay={index * 100} direction="up">
      {children}
    </ScrollFadeIn>
  );
}
