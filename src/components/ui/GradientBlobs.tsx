"use client";

import { motion, useReducedMotion } from "framer-motion";

// Radial gradients instead of blur filters: looks the same, far cheaper to paint.
const COLORS = [
  "rgba(139,92,246,0.28)",
  "rgba(236,72,153,0.22)",
  "rgba(249,115,22,0.16)",
];

export default function GradientBlobs({ count = 3 }: { count?: number }) {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const left = i % 2 === 0;
        return (
          <motion.div
            key={i}
            animate={reduce ? undefined : { x: left ? [0, 50, 0] : [0, -50, 0] }}
            transition={{
              duration: 16 + (i % 3) * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              top: `${(i / count) * 100}%`,
              background: `radial-gradient(circle, ${COLORS[i % COLORS.length]} 0%, transparent 65%)`,
              willChange: "transform",
            }}
            className={`absolute h-[520px] w-[520px] rounded-full ${
              left ? "-left-48" : "-right-48"
            }`}
          />
        );
      })}
    </div>
  );
}