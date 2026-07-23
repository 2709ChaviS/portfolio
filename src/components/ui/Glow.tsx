"use client";

import { motion } from "framer-motion";

export default function Glow() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 left-1/2 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-white/10 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -100, 60, 0],
          y: [0, 40, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[120px]"
      />
    </>
  );
}