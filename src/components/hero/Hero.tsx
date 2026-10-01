"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const GRADIENT = "bg-[linear-gradient(90deg,#a78bfa,#f472b6,#fb923c)]";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] pt-20">

      {/* ANIMATED COLOR BLOBS */}
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-violet-600/30 blur-[140px]"
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, -60, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-pink-500/25 blur-[140px]"
      />
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/3 top-2/3 h-[350px] w-[350px] rounded-full bg-orange-500/15 blur-[120px]"
      />

      <div className="relative mx-auto flex min-h-screen max-w-[1450px] flex-col items-center justify-center gap-16 px-8 py-16 lg:flex-row lg:justify-between lg:px-16">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[640px]"
        >
          <motion.div
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-[12px] uppercase tracking-[0.28em] text-neutral-300">
              Open to work · Product Engineer
            </span>
          </motion.div>

          <h1 className="text-6xl font-black leading-[0.9] tracking-[-0.05em] text-white lg:text-[82px]">
            I BUILD
            <br />
            <span className={`${GRADIENT} bg-clip-text text-transparent`}>
              PRODUCTS.
            </span>
          </h1>

          <h2 className="mt-3 text-5xl font-black leading-[0.9] tracking-[-0.05em] text-neutral-600 lg:text-[70px]">
            NOT JUST
            <br />
            INTERFACES.
          </h2>

          <p className="mt-10 max-w-[560px] text-[18px] leading-9 text-neutral-400">
            Hi, I&apos;m Chavi. I take products from Figma to production code,
            with no designer-developer handoff. Full-stack, design-minded and
            built to ship.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#projects"
              className={`${GRADIENT} rounded-xl px-8 py-4 font-semibold text-black transition hover:scale-[1.05] hover:shadow-[0_0_40px_rgba(244,114,182,0.45)]`}
            >
              View Projects 
            </a>
            <a
              href="https://drive.google.com/file/d/17a-1dP4QhVoTmiqBAAMyDkqAhVyQGCpQ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/15 px-8 py-4 text-white transition hover:border-fuchsia-400/60 hover:bg-white/5"
            >
              Resume 
            </a>
          </div>
        </motion.div>

        {/* RIGHT: PHOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, type: "spring" }}
          className="relative w-[320px] shrink-0 sm:w-[400px] lg:w-[460px]"
        >
          {/* spinning gradient ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-3 rounded-[40px] bg-[conic-gradient(from_0deg,#a78bfa,#f472b6,#fb923c,#34d399,#a78bfa)] opacity-80 blur-[2px]"
          />

          <motion.div
            whileHover={{ rotate: 2, scale: 1.03 }}
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0A0A0A]"
          >
            <Image
              src="/chavi.jpg"
              alt="Chavi Sharma"
              width={800}
              height={800}
              priority
              className="aspect-square w-full object-cover"
            />
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}