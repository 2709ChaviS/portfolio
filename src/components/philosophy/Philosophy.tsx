"use client";

import { motion } from "framer-motion";

const principles = [
  {
    number: "01",
    title: "Start with the problem.",
    text: "Technology is a tool, not the product. Every project begins by understanding the user's workflow before choosing the stack.",
  },
  {
    number: "02",
    title: "Design and engineering are one process.",
    text: "I design interfaces that I can build. Working across Figma and code eliminates handoff friction and keeps interactions faithful to the original idea.",
  },
  {
    number: "03",
    title: "Build for production.",
    text: "Authentication, database design, accessibility, performance and deployment are considered from day one—not added at the end.",
  },
  {
    number: "04",
    title: "Keep complexity behind the interface.",
    text: "Users should never experience the complexity of the system. Good products feel simple because the engineering absorbs the difficult parts.",
  },
];

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="bg-[#050505] py-36 text-white"
    >
      <div className="mx-auto max-w-7xl px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
            How I build Products
          </p>

          <h2 className="mt-6 max-w-4xl text-6xl font-black leading-[0.95] tracking-tight">
            Every product should solve
            a real problem before it
            showcases technology.
          </h2>
        </motion.div>

        <div className="mt-24">

          {principles.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="grid grid-cols-[90px_1fr] gap-12 border-t border-white/10 py-14"
            >
              <div>
                <span className="text-4xl font-black text-neutral-700">
                  {item.number}
                </span>
              </div>

              <div>
                <h3 className="text-3xl font-semibold tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-6 max-w-3xl text-lg leading-9 text-neutral-400">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}

          <div className="border-t border-white/10"></div>

        </div>
      </div>
    </section>
  );
}