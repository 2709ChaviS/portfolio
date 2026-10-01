"use client";

import { motion } from "framer-motion";
import GradientBlobs from "../ui/GradientBlobs";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505] py-20 md:py-32 text-white">

      <GradientBlobs count={2} />
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
        >

          <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
            CONTACT
          </p>

          <h2 className="mt-8 max-w-5xl text-4xl sm:text-6xl lg:text-7xl font-black leading-[0.92] tracking-tight">

            Building products
            <br />
            people actually
            <br />
            <span className="bg-[linear-gradient(90deg,#a78bfa,#f472b6,#fb923c)] bg-clip-text text-transparent">enjoy using.</span>

          </h2>

          <p className="mt-10 max-w-2xl text-xl leading-9 text-neutral-400">

            I'm looking for product engineering opportunities where
            design thinking and software engineering come together
            to build meaningful digital products.

          </p>

        </motion.div>

        <div className="mt-24 grid gap-6 md:gap-12 border-t border-white/10 pt-16 md:grid-cols-2">

          <div>

            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-neutral-500">
              Reach Out
            </p>

            <a
              href="mailto:chavisharma977@gmail.com"
              className="block break-all text-xl sm:text-2xl lg:text-3xl font-semibold transition hover:text-fuchsia-300"
            >
              chavisharma977@gmail.com
            </a>

          </div>

          <div className="flex flex-col items-start gap-6 md:items-end">

            <a
              href="https://www.linkedin.com/in/chavi-sharma-923232256/"
              target="_blank"
              className="text-2xl transition hover:text-fuchsia-300"
            >
              LinkedIn →
            </a>

            <a
              href="https://github.com/2709ChaviS"
              target="_blank"
              className="text-2xl transition hover:text-fuchsia-300"
            >
              GitHub →
            </a>

            <a
              href="https://drive.google.com/file/d/17a-1dP4QhVoTmiqBAAMyDkqAhVyQGCpQ/view?usp=sharing"
              target="_blank"
              className="text-2xl transition hover:text-fuchsia-300"
            >
              Resume →
            </a>

          </div>

        </div>

        <div className="mt-24 border-t border-white/10 pt-10">

          <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">

            <p className="text-sm text-neutral-600">
              © 2026 Chavi Sharma
            </p>

            <p className="text-sm text-neutral-600">
              Designed & Engineered with Next.js
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}