"use client";

import { TypeWriter, ScrollFadeIn, CountUp } from "./animations";
import type { ReactNode } from "react";

// Hero subtitle with typing effect
export function HeroTypingSubtitle() {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 border border-primary-100 rounded-full mb-6">
      <span className="w-1.5 h-1.5 rounded-full bg-primary-600" />
      <span className="text-xs sm:text-sm text-primary-700 font-semibold">
        <TypeWriter
          words={[
            "Multi-Komoditas Agribisnis",
            "Rempah & Hasil Bumi",
            "Padi, Jagung & Spices",
            "Smart Farming 4.0",
            "Dari Kebun ke Pasar Global",
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
    end: 13,
    suffix: ",5%",
    prefix: "",
    label: "Kontribusi PDB",
    sub: "Sektor pertanian nasional",
  },
  {
    end: 300,
    suffix: " T+",
    prefix: "Rp",
    label: "Nilai Ekspor Rempah",
    sub: "Target 2026 Indonesia",
  },
  {
    end: 34,
    suffix: ",77 Jt ton",
    prefix: "",
    label: "Target Produksi Beras",
    sub: "Program Kementan 2026",
  },
  {
    end: 1,
    suffix: ",3 M",
    prefix: "US$",
    label: "Ekspor Rempah 2025",
    sub: "Jahe, lada & kunyit",
  },
];

export function AnimatedStats() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {stats.map((stat, index) => (
        <ScrollFadeIn key={stat.label} delay={index * 100} direction="up">
          <div className="text-center px-5 py-9 bg-primary-50 rounded-2xl border border-primary-100 h-full">
            <div className="text-3xl lg:text-[2.3rem] font-black text-primary-600 mb-2.5 tracking-tight">
              <CountUp
                end={stat.end}
                suffix={stat.suffix}
                prefix={stat.prefix}
                duration={1800}
              />
            </div>
            <p className="text-sm font-bold text-gray-700 mb-1">{stat.label}</p>
            <p className="text-xs text-gray-400 leading-relaxed">{stat.sub}</p>
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
