"use client";

import { motion } from "framer-motion";
import Dashboard from "../ui/Dashboard";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] pt-20">
      <div className="mx-auto flex min-h-screen max-w-[1450px] items-center justify-between px-16">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          className="max-w-[620px]"
        >
          <div className="mb-8 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5">
            <span className="text-[12px] uppercase tracking-[0.28em] text-neutral-400">
              PRODUCT ENGINEER 
            </span>
          </div>

          <h1 className="text-[82px] font-black leading-[0.9] tracking-[-0.05em] text-white">
            I BUILD
            <br />
            PRODUCTS.
          </h1>

          <h2 className="mt-3 text-[70px] font-black leading-[0.9] tracking-[-0.05em] text-neutral-600">
            NOT JUST
            <br />
            INTERFACES.
          </h2>

          <p className="mt-10 max-w-[560px] text-[18px] leading-9 text-neutral-400">
            Product strategy, UX, frontend engineering and shipping.
            Every product is designed from first principles and built
            to create measurable business impact.
          </p>

          {/*RIGHT<div> className="mt-12 flex gap-4">
            <button className="rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-[1.03]">
              View Products
            </button>

            <button className="rounded-xl border border-white/10 px-8 py-4 text-white transition hover:bg-white/5">
              Download Resume
            </button>
          </div>
         RIGHT */}
         </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .9 }}
          className="w-[620px] shrink-0"
        >
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#0A0A0A] shadow-[0_0_80px_rgba(255,255,255,0.04)]">
            <Dashboard />
          </div>
        </motion.div>
        

      </div>
    </section>
  );
}