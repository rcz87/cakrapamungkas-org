"use client";

import { ScrollFadeIn } from "./animations";
import type { ReactNode } from "react";

export function PadiDocFadeIn({
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
