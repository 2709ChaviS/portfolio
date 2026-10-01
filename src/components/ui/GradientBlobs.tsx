"use client";

import { motion } from "framer-motion";

const COLORS = ["bg-violet-600/25", "bg-pink-500/20", "bg-orange-500/15"];

// Each blob: vertical position (%), side, and drift speed.
export default function GradientBlobs({ count = 3 }: { count?: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const left = i % 2 === 0;
        return (
          <motion.div
            key={i}
            animate={{
              x: left ? [0, 60, 0] : [0, -60, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 11 + (i % 3) * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ top: `${(i / count) * 100}%` }}
            className={`absolute h-[450px] w-[450px] rounded-full blur-[140px] ${
              left ? "-left-40" : "-right-40"
            } ${COLORS[i % COLORS.length]}`}
          />
        );
      })}
    </div>
  );
}